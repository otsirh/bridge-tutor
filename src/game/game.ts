// The game controller: one board from the deal to the review.
// Bots play North, East and West; you play South (and North's cards when your side declares).

import {
  type Card, type Seat, type Vulnerability, N, S, dealCards, mulberry32, boardDealer, boardVulnerability,
  partnerOf, hcp, isVulnerable, SEAT_NAMES, cardName, suitOf,
} from '../core/cards';
import { Auction, type Call, type Contract, PASS, callName, contractName } from '../core/auction';
import { PlayState, type Trick } from '../core/play';
import { scoreNS, parScore, imps, type ParResult } from '../core/scoring';
import { readAuction, advise, judgeCall, type AuctionView, type BidAdvice } from '../bidding/engine';
import type { Meaning } from '../bidding/context';
import { decideCard, ddCardValues, ddTableAsync, legalFor, newGroup, type CardStat, type Decision, type PlayKnowledge } from '../engine/playEngine';
import type { Signal } from '../engine/signalling';
import { openingLeadChoices, type LeadChoice } from '../engine/leads';
import { explainPlay, type Principle, type PlaySituation } from '../tutor/principles';
import { makePlan, type Plan } from '../tutor/planner';
import { masksOf } from '../engine/dds';
import { ddPool } from '../engine/pool';
import { type Settings, loadSettings, saveSettings, loadBoardNumber, saveBoardNumber, type DealMode } from './storage';
import { type ArchivedBoard, saveBoard, addItems, removeItems, loadBoards, decodeDeal, updateLessonProgress } from './journal';
import { archiveBoard, reviewItems, simVerdict, type FinishedBoard } from './record';
import { dealForTheme, themeById, LESSON_THEMES } from './themes';
import {
  type TechniqueDeal, type TechniqueOutcome, TECHNIQUE_INFO, techniqueOutcome, scriptedCard, keyDecision, techniqueReviewItem, recordTechScore,
} from './techniques';
import { setSystem } from '../bidding/config';
import { T, fmtLabel, fmtNum, fmtPct, fmtSigned } from '../i18n';

export type Phase = 'bidding' | 'play' | 'review';

export interface CallEntry {
  index: number;
  seat: Seat;
  call: Call;
  meaning: Meaning;
  human: boolean;
  advice?: BidAdvice; // system's recommendation at that moment (your calls)
  agrees?: boolean;
  auto?: boolean; // chosen for you ("Bid for me"): not counted as your decision
}

export interface CardEntry {
  seat: Seat;
  card: Card;
  trick: number;
  human: boolean;
  /** Simulation with the information available at that moment: the hint you had, or the check run after the hand. */
  advice?: Decision | null;
  principle?: Principle;
  /** The signal a bot defender gave with this card (src/engine/signalling.ts). */
  signal?: Signal | null;
}

/** A note in the tutor's feed. Worded when shown, so old notes follow a language switch. */
export interface Feedback {
  tone: 'good' | 'info' | 'warn' | 'bad';
  wording(): { title: string; text: string };
}

const note = (tone: Feedback['tone'], wording: Feedback['wording']): Feedback => ({ tone, wording });

export interface CardReview {
  index: number; // into cards[]
  bestSide: number; // DD tricks for the player's side with best play from here
  gotSide: number; // DD tricks after the card actually played
  values: { card: Card; side: number }[];
}

export interface ReviewData {
  contract: Contract | null;
  declTricks: number;
  scoreNS: number;
  table: number[][] | null;
  par: ParResult | null;
  impsVsPar: number | null;
  cards: (CardReview | null)[];
  progress: number; // 0..1 of the card analysis
  ddResult: number | null; // DD tricks for declarer from the start
  /** Single-dummy check of your cards after the hand (those without a simulation at the time). */
  sim: { done: number; total: number };
  /** Bidding only: no card play; `declTricks` and the score are double-dummy. */
  bidOnly: boolean;
  /**
   * Where the system would have bid this deal (every seat bidding by the
   * system), and how your contract compares with it, both with best play.
   */
  system: { contract: Contract | null; ddScoreNS: number; yoursDD: number; imps: number } | null;
}

/** The whole auction as the system bids it at every seat. */
function systemAuction(deal: Card[][], dealer: Seat, vul: Vulnerability): Auction {
  const a = new Auction(dealer);
  while (!a.isComplete()) a.push(advise(deal[a.nextSeat], readAuction(a, vul).ctx).call);
  return a;
}

/** North-South's score for a contract taking its double-dummy tricks (0 when passed out). */
function ddScoreNS(c: Contract | null, table: number[][], vul: Vulnerability): number {
  return c ? scoreNS(c, table[c.strain][c.declarer], vul) : 0;
}

/** A deal to play from outside the normal flow: an archived board, an imported one. */
export interface DealSpec {
  deal: Card[][];
  dealer: Seat;
  vul: Vulnerability;
  board?: number;
}

/** A technique deal being played (src/game/techniques.ts). */
export interface TechniqueRun {
  deal: TechniqueDeal;
  /** The technique was named before the hand (otherwise only in the review). */
  hints: boolean;
  /** Started at the key moment, the cards before it played for you. */
  fromKey: boolean;
  /** The outcome has been counted (score, review queue): once per deal, not again on a replay. */
  counted: boolean;
}

export type Hint =
  | { kind: 'bid'; advice: BidAdvice }
  | { kind: 'card'; decision: Decision | null; pending: boolean; done: number; total: number; lead?: LeadChoice[]; plan?: Plan | null; withheld?: boolean };

export type Warning =
  | { kind: 'bid'; call: Call; advice: BidAdvice; failed: { text: string; value?: string }[]; yourMeaning: Meaning }
  | { kind: 'card'; card: Card; best: Card; decision: Decision };

interface Snapshot {
  calls: number[];
  cardsPlayed: Card[];
  callLog: CallEntry[];
  cardLog: CardEntry[];
  feedback: Feedback[];
}

const DELAYS = { slow: { bid: 900, card: 1100, trick: 1600 }, normal: { bid: 450, card: 650, trick: 1100 }, fast: { bid: 120, card: 220, trick: 600 } };
const EFFORT = { quick: { samples: 16, time: 1200, hint: 24, hintTime: 2500 }, standard: { samples: 28, time: 2200, hint: 48, hintTime: 4500 }, deep: { samples: 48, time: 4000, hint: 96, hintTime: 9000 } };

export class Game {
  settings: Settings = loadSettings();
  board = loadBoardNumber();
  dealer: Seat = N;
  vul: Vulnerability = 'None';
  seed = 0;
  deal: Card[][] = [[], [], [], []];
  auction = new Auction(N);
  view!: AuctionView;
  play: PlayState | null = null;
  phase: Phase = 'bidding';
  calls: CallEntry[] = [];
  cards: CardEntry[] = [];
  review: ReviewData | null = null;
  private busy: Seat | 'playout' | 'dealing' | null = null; // a bot to move, the computer playing out the hand, or dealing for a theme
  hint: Hint | null = null;
  hintRevealed = false;
  warning: Warning | null = null;
  feedback: Feedback[] = [];
  displayTrick: Trick | null = null; // last completed trick, shown until the next card
  plan: Plan | null = null;
  /** Practice theme this board was dealt for (src/game/themes.ts). */
  theme: string | null = null;
  /** Technique practice: the deal and how it is played (null for any other board). */
  technique: TechniqueRun | null = null;
  /** Theme of the board being dealt right now. */
  private dealingFor: string | null = null;
  /** Journal id of this board once finished (0 = not yet). */
  boardId = 0;
  /** A board shown from the archive: nothing is recorded again. */
  archived = false;
  /** All four hands were shown at some point: the board is kept but not counted towards skills. */
  peeked = false;
  private gen = 0;
  private hintGen = 0;
  /** Stops the tutor's card simulation once its hint is no longer wanted. */
  private hintSim: AbortController | null = null;
  private reviewGroup = 0;
  private snapshots: Snapshot[] = [];
  private listeners = new Set<() => void>();

  constructor(opts: { idle?: boolean } = {}) {
    if (!opts.idle) this.newDeal();
  }

  // ---------------------------------------------------------------------------
  // events

  onChange(fn: () => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit() {
    for (const fn of this.listeners) fn();
  }

  /** What the computer is doing, in the active language (null when it's idle). */
  /** The computer is playing out the rest of the hand. */
  get playingOut(): boolean {
    return this.busy === 'playout';
  }

  get thinking(): string | null {
    if (this.busy === null) return null;
    if (this.busy === 'dealing') {
      const id = this.dealingFor as keyof typeof T.practice.themes | null;
      return T.practice.dealing(id ? T.practice.themes[id]?.name ?? id : '');
    }
    return this.busy === 'playout' ? T.ui.game.playingOut : T.ui.game.thinking(SEAT_NAMES[this.busy]);
  }

  updateSettings(patch: Partial<Settings>) {
    this.settings = { ...this.settings, ...patch };
    saveSettings(this.settings);
    if (patch.peek) this.peeked = true;
    if ('tutor' in patch && patch.tutor) this.refreshHint();
    this.emit();
  }

  // ---------------------------------------------------------------------------
  // dealing

  /**
   * Start the next board, or play the same deal again (`replay`). With a
   * practice theme set, deal until the theme comes up in the system's auction.
   */
  newDeal(replay = false) {
    if (this.reviewGroup) ddPool().cancelGroup(this.reviewGroup);
    // convention switches take effect from the next deal, so a hand is always bid in one system
    setSystem(this.settings.conventions);
    // a technique deal is played again from the same point, with its auction made
    if (replay) return this.begin(true, this.techniquePreset());
    // nothing about the current board changes until the new deal is ready
    const board = this.seed ? this.board + 1 : this.board;
    const seed = (Math.random() * 2 ** 31) | 0;
    const dealer = boardDealer(board);
    const vul = boardVulnerability(board);
    const theme = this.settings.theme && themeById(this.settings.theme) ? this.settings.theme : null;
    const start = (deal: Card[][]) => {
      if (board !== this.board) saveBoardNumber(board);
      Object.assign(this, { board, seed, dealer, vul, theme, deal, technique: null });
      this.dealingFor = null;
      this.begin(false);
    };
    if (!theme) return start(generateDeal(seed, this.settings.dealMode));
    const myGen = ++this.gen;
    this.busy = 'dealing';
    this.dealingFor = theme;
    this.emit();
    void dealForTheme(theme, dealer, vul, seed).then(r => {
      if (myGen === this.gen) start(r.deal);
    });
  }

  /** Play a given deal (an archived or imported board). */
  playDeal(spec: DealSpec) {
    if (this.reviewGroup) ddPool().cancelGroup(this.reviewGroup);
    setSystem(this.settings.conventions);
    if (spec.board) this.board = spec.board;
    this.seed ||= 1;
    this.dealer = spec.dealer;
    this.vul = spec.vul;
    this.deal = spec.deal.map(h => [...h]);
    this.theme = null;
    this.technique = null;
    this.begin(true);
  }

  /**
   * Play a technique deal: the system's auction is already made and the play
   * starts at once (from the key moment with `fromKey`, the cards before it
   * played for you). The technique is named first only with `hints`.
   */
  playTechnique(td: TechniqueDeal, opts: { hints: boolean; fromKey?: boolean }) {
    if (this.reviewGroup) ddPool().cancelGroup(this.reviewGroup);
    setSystem(this.settings.conventions);
    this.board = td.board;
    this.seed ||= 1;
    this.dealer = td.dealer;
    this.vul = td.vul;
    this.deal = decodeDeal(td.deal);
    this.theme = null;
    // the same deal again (from its key moment) is counted only if it wasn't already
    const counted = this.technique?.deal.id === td.id && this.technique.counted;
    this.technique = { deal: td, hints: opts.hints, fromKey: !!opts.fromKey, counted };
    this.begin(true, this.techniquePreset());
  }

  private techniquePreset(): { calls: Call[]; play: Card[] } | undefined {
    const run = this.technique;
    return run ? { calls: run.deal.calls, play: run.fromKey ? run.deal.play : [] } : undefined;
  }

  /** How the technique deal is going: the key moment ahead, found, missed… (null when this is no technique deal). */
  techniqueOutcome(): TechniqueOutcome | null {
    const run = this.technique;
    if (!run || !this.play) return null;
    return techniqueOutcome(run.deal, this.cards.map(e => e.card), this.cards.map(e => e.human));
  }

  /** The technique deal's key moment is still to come: the tutor keeps its card advice to itself. */
  private techniqueAhead(): boolean {
    return this.techniqueOutcome()?.status === 'ahead';
  }

  /** Reset everything for the current deal and let the bots start (`preset`: an auction already made, and cards already played). */
  private begin(replay: boolean, preset?: { calls: Call[]; play: Card[] }) {
    this.auction = new Auction(this.dealer);
    this.view = readAuction(this.auction, this.vul);
    this.play = null;
    this.phase = 'bidding';
    this.calls = [];
    this.cards = [];
    this.review = null;
    this.warning = null;
    this.feedback = !replay && loadBoards().length === 0
      ? [note('info', () => ({ title: T.ui.notes.welcomeTitle, text: T.ui.notes.welcomeText }))]
      : [];
    this.displayTrick = null;
    this.plan = null;
    this.snapshots = [];
    this.hintRevealed = false;
    this.hintSim?.abort();
    this.boardId = 0;
    this.peeked = this.settings.peek;
    if (preset) {
      for (const c of preset.calls) this.applyCall(c, false);
      for (const c of preset.play) this.placeCard(c, false);
    }
    const run = this.technique;
    if (run) {
      const id = run.deal.technique;
      this.feedback.unshift(note('info', () => {
        const X = T.practice.techniques;
        return { title: X.noteTitle, text: run.hints ? X.noteLookFor(X.names[id], X.descs[id]) : X.noteHidden };
      }));
    }
    this.gen++;
    this.busy = null;
    this.emit();
    void this.run();
  }

  get contract(): Contract | null {
    return this.play?.contract ?? (this.auction.isComplete() ? this.auction.contract() : null);
  }

  get declarerSide(): 0 | 1 | null {
    const c = this.contract;
    return c ? ((c.declarer & 1) as 0 | 1) : null;
  }

  /** Seats whose cards you choose. */
  humanControls(seat: Seat): boolean {
    if (seat === S) return true;
    return seat === N && this.declarerSide === 0 && this.phase === 'play';
  }

  get actor(): Seat | null {
    if (this.phase === 'bidding') return this.auction.isComplete() ? null : this.auction.nextSeat;
    if (this.phase === 'play' && this.play && !this.play.isOver) return this.play.toPlay;
    return null;
  }

  isHumanTurn(): boolean {
    const a = this.actor;
    return a !== null && this.humanControls(a) && this.busy === null;
  }

  /** Is this seat's hand face up for you? */
  visible(seat: Seat): boolean {
    if (this.settings.peek || this.phase === 'review') return true;
    if (seat === S) return true;
    if (this.phase !== 'play' || !this.play) return false;
    const dummy = this.play.dummy;
    if (this.declarerSide === 0 && seat === N && this.play.contract.declarer === N) return true; // you play North's hand as declarer
    return seat === dummy && this.play.openingLeadMade;
  }

  // ---------------------------------------------------------------------------
  // the bot loop

  private hurried = new Set<() => void>();

  /** Skip the bots' current pause (a tap on the table): the pauses are only there so you can follow. */
  hurry() {
    for (const done of [...this.hurried]) done();
  }

  /** A pause between the bots' moves that `hurry` can cut short. */
  private pause(ms: number): Promise<void> {
    return new Promise(resolve => {
      const done = () => {
        clearTimeout(timer);
        this.hurried.delete(done);
        resolve();
      };
      const timer = setTimeout(done, ms);
      this.hurried.add(done);
    });
  }

  private async run() {
    const myGen = this.gen;
    while (myGen === this.gen) {
      const a = this.actor;
      if (a === null) break;
      if (this.humanControls(a)) {
        this.refreshHint();
        break;
      }
      this.busy = a;
      this.emit();
      if (this.phase === 'bidding') {
        await this.pause(DELAYS[this.settings.speed].bid);
        if (myGen !== this.gen) return;
        const call = advise(this.deal[a], this.view.ctx).call;
        this.applyCall(call, false);
      } else {
        const started = performance.now();
        const { card, signal } = await this.botCard(a);
        if (myGen !== this.gen) return;
        // the time spent thinking counts towards the pause
        await this.pause(DELAYS[this.settings.speed].card - (performance.now() - started));
        if (myGen !== this.gen) return;
        await this.applyCard(card, false, myGen, undefined, signal);
      }
      this.busy = null;
      this.emit();
    }
    if (myGen === this.gen) {
      this.busy = null;
      this.emit();
    }
  }

  private knowledge(seat: Seat): PlayKnowledge {
    return knowledgeAt(this.play!, seat, this.vul, this.view.shown);
  }

  /** A bot's card, and the signal it gives when the bot chose it as one. */
  private async botCard(seat: Seat): Promise<{ card: Card; signal?: Signal | null }> {
    const p = this.play!;
    // a technique deal: the defenders play the walk's cards while your play follows it
    if (this.technique) {
      const scripted = scriptedCard(this.technique.deal, this.cards.map(e => e.card));
      if (scripted !== null && p.isLegal(scripted)) return { card: scripted };
    }
    if (!p.openingLeadMade) {
      const choices = openingLeadChoices(p.hands[seat], p.contract, this.view.records, seat);
      return { card: choices[0].card };
    }
    const legal = p.legal();
    if (legal.length === 1) return { card: legal[0] };
    const e = EFFORT[this.settings.strength];
    // The first three tricks shape the hand and their layouts take the longest to solve: on a slow
    // device the time budget can pass with only a handful done, so there wait for at least 12. Fast
    // devices finish all the layouts well within the budget; later tricks solve in milliseconds.
    const early = p.tricks.length <= 3;
    const d = await decideCard(this.knowledge(seat), { samples: e.samples, timeMs: e.time, minSamples: early ? 12 : 8, priority: 3 });
    return { card: d.card, signal: d.signal };
  }

  // ---------------------------------------------------------------------------
  // applying actions

  private snapshot() {
    this.snapshots.push({
      calls: [...this.auction.calls],
      cardsPlayed: this.play ? this.play.history().map(h => h.card) : [],
      callLog: [...this.calls],
      cardLog: [...this.cards],
      feedback: [...this.feedback],
    });
  }

  private applyCall(call: Call, human: boolean, advice?: BidAdvice) {
    const meaning = this.view.ctx ? readAuction(new Auction(this.dealer, [...this.auction.calls, call]), this.vul).records.at(-1)!.meaning : undefined;
    const seat = this.auction.nextSeat;
    this.auction.push(call);
    this.view = readAuction(this.auction, this.vul);
    const entry: CallEntry = { index: this.auction.calls.length - 1, seat, call, meaning: meaning!, human };
    if (human && advice) {
      entry.advice = advice;
      entry.agrees = advice.call === call;
    }
    this.calls.push(entry);
    if (this.auction.isComplete()) this.startPlay();
  }

  private startPlay() {
    const c = this.auction.contract();
    // bidding only: the auction is the whole board, scored with best play (a technique deal is played all the same)
    if (!c || (this.settings.biddingOnly && !this.technique)) {
      this.phase = 'review';
      this.finishBoard();
      return;
    }
    this.play = new PlayState(c, this.deal);
    this.phase = 'play';
    this.feedback.unshift(note('info', () => ({
      title: T.ui.notes.contract(T.ui.common.contractBy(contractName(c), SEAT_NAMES[c.declarer])),
      text: c.declarer & 1 ? T.ui.notes.youDefend(SEAT_NAMES[(c.declarer + 1) & 3]) : T.ui.notes.youDeclare,
    })));
  }

  /** Play a card on the table and log it; returns the trick it completed, if any. */
  private placeCard(card: Card, human: boolean, advice?: Decision | null, signal?: Signal | null): Trick | null {
    const p = this.play!;
    const seat = p.toPlay;
    const principle = explainPlay(situationAt(p, seat), card);
    this.displayTrick = null;
    const trickNo = p.tricks.length - 1;
    const done = p.play(card);
    this.cards.push({ seat, card, trick: trickNo, human, advice, principle, signal });
    if (trickNo === 0 && p.current.cards.length === 1 && p.tricks.length === 1) {
      // dummy just came down: make the declarer plan
      this.plan = makePlan(p.hands[p.contract.declarer], p.hands[p.dummy], p.contract, [card]);
    }
    if (done) this.displayTrick = done;
    return done;
  }

  private async applyCard(card: Card, human: boolean, myGen = this.gen, advice?: Decision | null, signal?: Signal | null) {
    const p = this.play!;
    const done = this.placeCard(card, human, advice, signal);
    if (done) {
      this.emit();
      if (!p.isOver) {
        const next = p.toPlay;
        if (!this.humanControls(next)) await this.pause(DELAYS[this.settings.speed].trick);
      }
      if (myGen !== this.gen) return;
    }
    if (p.isOver) {
      this.phase = 'review';
      this.finishBoard();
    }
  }

  situation(seat: Seat): PlaySituation {
    return situationAt(this.play!, seat);
  }

  // ---------------------------------------------------------------------------
  // human actions

  submitCall(call: Call, force = false, auto = false) {
    if (!this.isHumanTurn() || this.phase !== 'bidding' || !this.auction.isLegal(call)) return;
    const advice = advise(this.deal[S], this.view.ctx);
    if (this.settings.tutor && this.settings.coach && !force && advice.call !== call) {
      const j = judgeCall(this.deal[S], this.view.ctx, call);
      this.warning = { kind: 'bid', call, advice, failed: j.failed, yourMeaning: j.yourMeaning };
      this.emit();
      return;
    }
    this.warning = null;
    this.snapshot();
    // worded from the call's entry, which relocalize() re-words; the note lives only as long as the call
    const index = this.auction.calls.length;
    this.feedback.unshift(note(advice.call === call ? 'good' : 'warn', () => callWording(this.calls[index])));
    this.applyCall(call, true, advice);
    if (auto) this.calls[this.calls.length - 1].auto = true;
    this.hint = null;
    this.hintRevealed = false;
    this.hintSim?.abort();
    this.gen++;
    this.emit();
    void this.run();
  }

  autoCall() {
    if (!this.isHumanTurn() || this.phase !== 'bidding') return;
    this.submitCall(advise(this.deal[S], this.view.ctx).call, true, true);
  }

  async submitCard(card: Card, force = false) {
    if (!this.isHumanTurn() || this.phase !== 'play' || !this.play) return;
    if (!this.play.isLegal(card)) return;
    const h = this.hint && this.hint.kind === 'card' ? this.hint : null;
    const decision = h?.decision ?? null;
    if (this.settings.tutor && this.settings.coach && !force && decision && decision.samples >= 8) {
      const mine = decision.stats.find(s => s.card === card);
      const best = decision.stats[0];
      if (mine && !decision.equal.includes(card) && (best.success - mine.success >= 0.15 || (best.tricks - mine.tricks >= 0.45 && best.score - mine.score > 25))) {
        this.warning = { kind: 'card', card, best: decision.card, decision };
        this.emit();
        return;
      }
    }
    this.warning = null;
    this.snapshot();
    if (decision && decision.samples > 0) {
      const mine = decision.stats.find(s => s.card === card);
      const best = decision.stats[0];
      if (mine) {
        const same = decision.equal.includes(card);
        const close = best.tricks - mine.tricks < 0.15 && best.success - mine.success < 0.05;
        if (!same && !close) this.feedback.unshift(note('warn', () => cardWording(card, decision, best, mine)));
      }
    }
    this.hint = null;
    this.hintRevealed = false;
    this.hintSim?.abort();
    this.gen++;
    const myGen = this.gen;
    await this.applyCard(card, true, myGen, decision);
    this.emit();
    if (myGen === this.gen) void this.run();
  }

  dismissWarning() {
    this.warning = null;
    this.emit();
  }

  undo() {
    const snap = this.snapshots.pop();
    if (!snap) return;
    this.gen++;
    this.hintGen++;
    this.busy = null;
    this.warning = null;
    this.auction = new Auction(this.dealer, [...snap.calls]);
    this.view = readAuction(this.auction, this.vul);
    this.calls = snap.callLog;
    this.cards = snap.cardLog;
    this.feedback = snap.feedback;
    this.review = null;
    this.displayTrick = null;
    if (this.auction.isComplete() && this.auction.contract()) {
      const c = this.auction.contract()!;
      this.play = new PlayState(c, this.deal);
      for (const card of snap.cardsPlayed) this.play.play(card);
      this.phase = 'play';
    } else {
      this.play = null;
      this.phase = 'bidding';
    }
    if (this.play?.openingLeadMade && !this.plan) {
      const first = this.play.tricks[0].cards[0];
      this.plan = makePlan(this.deal[this.play.contract.declarer], this.deal[this.play.dummy], this.play.contract, [first]);
    }
    if (!this.play) this.plan = null;
    this.hint = null;
    this.hintRevealed = false;
    this.hintSim?.abort();
    this.emit();
    void this.run();
  }

  get canUndo() {
    return this.snapshots.length > 0;
  }

  /** Can the hand be taken back to just before card `index` (one you played)? */
  canRewindTo(index: number): boolean {
    return this.snapshots.some(s => s.cardsPlayed.length === index && s.calls.length === this.auction.calls.length);
  }

  /** Take the hand back to just before card `index`, to try that decision again. */
  rewindTo(index: number): boolean {
    const k = this.snapshots.findIndex(s => s.cardsPlayed.length === index && s.calls.length === this.auction.calls.length);
    if (k < 0) return false;
    this.snapshots.length = k + 1;
    this.undo();
    return true;
  }

  /** Claim the rest: accepted when your side can take every remaining trick against any defence. */
  async claim(): Promise<string | null> {
    if (!this.play || this.phase !== 'play' || this.declarerSide !== 0) return T.ui.game.claimOnlyDeclarer;
    if (this.busy === 'playout') return null;
    const p = this.play;
    const myGen = this.gen;
    const res = await ddPool().run({ kind: 'value', pos: { masks: masksOf(p.hands), trump: p.trump, leader: p.current.leader, trick: [...p.current.cards] } }, 5);
    if (myGen !== this.gen || this.play !== p) return null; // the hand moved on (a card, undo or a new deal) while checking
    if (res.kind !== 'value') return T.ui.game.claimUnchecked;
    const remaining = 13 - p.completedTricks.length;
    if (res.value < remaining) return T.ui.game.claimNotYet(remaining - res.value, remaining);
    await this.finishWithBestPlay();
    return T.ui.game.claimAccepted;
  }

  /** Let the computer play out the rest of the hand. */
  async playOut() {
    if (!this.play || this.phase !== 'play' || this.busy === 'playout') return;
    this.snapshot();
    this.gen++;
    await this.finishWithBestPlay();
  }

  private async finishWithBestPlay() {
    const p = this.play!;
    this.gen++;
    const myGen = this.gen;
    this.busy = 'playout';
    this.emit();
    while (!p.isOver) {
      const moves = await ddCardValues(p.hands, p.trump, p.current.leader, p.current.cards, 5);
      // a new deal, undo or rewind took over while solving: this hand is no longer ours to touch
      if (myGen !== this.gen) return;
      const side = p.toPlay & 1;
      const best = moves.reduce((a, b) => ((side === 0 ? b.nsTricks > a.nsTricks : b.nsTricks < a.nsTricks) ? b : a), moves[0]);
      const card = best ? best.card : p.legal()[0];
      const seat = p.toPlay;
      const trickNo = p.tricks.length - 1;
      const done = p.play(card);
      this.cards.push({ seat, card, trick: trickNo, human: false });
      if (done) this.displayTrick = done;
    }
    this.busy = null;
    this.phase = 'review';
    this.finishBoard();
    this.emit();
  }

  // ---------------------------------------------------------------------------
  // tutor hints

  /** A new hint, or none: the simulation for the old one stops, so the bots don't queue behind it. */
  private stopHintSim(): AbortSignal {
    this.hintSim?.abort();
    this.hintSim = new AbortController();
    return this.hintSim.signal;
  }

  revealHint() {
    this.hintRevealed = true;
    this.emit();
  }

  refreshHint() {
    if (!this.settings.tutor || !this.isHumanTurn()) {
      this.emit();
      return;
    }
    const myHint = ++this.hintGen;
    if (this.phase === 'bidding') {
      this.hint = { kind: 'bid', advice: advise(this.deal[S], this.view.ctx) };
      this.emit();
      return;
    }
    const p = this.play!;
    const seat = p.toPlay;
    const lead = !p.openingLeadMade ? openingLeadChoices(p.hands[seat], p.contract, this.view.records, seat) : undefined;
    const legal = p.legal();
    // technique practice: no card advice (and so no coach) until the key moment is behind you
    if (legal.length > 1 && this.techniqueAhead()) {
      this.hint = { kind: 'card', decision: null, pending: false, done: 0, total: 0, plan: this.plan, withheld: true };
      this.emit();
      return;
    }
    this.hint = { kind: 'card', decision: null, pending: !lead && legal.length > 1, done: 0, total: 0, lead, plan: this.plan };
    if (legal.length === 1) {
      this.hint.decision = { card: legal[0], stats: [], samples: 0, equal: legal };
    }
    this.emit();
    if (lead || legal.length === 1) return;
    const e = EFFORT[this.settings.strength];
    void decideCard(this.knowledge(seat), {
      samples: e.hint, timeMs: e.hintTime, minSamples: 12, priority: 4, signal: this.stopHintSim(),
      onProgress: (done, total) => {
        if (myHint !== this.hintGen || !this.hint || this.hint.kind !== 'card') return;
        this.hint.done = done;
        this.hint.total = total;
        this.emit();
      },
    }).then(d => {
      if (myHint !== this.hintGen || !this.hint || this.hint.kind !== 'card') return;
      this.hint.decision = d;
      this.hint.pending = false;
      this.emit();
    });
  }

  /** Simulate opening leads on request (expensive: three hidden hands). */
  simulateLead() {
    if (!this.play || this.play.openingLeadMade || !this.isHumanTurn()) return;
    const myHint = ++this.hintGen;
    const seat = this.play.toPlay;
    const lead = openingLeadChoices(this.play.hands[seat], this.play.contract, this.view.records, seat);
    this.hint = { kind: 'card', decision: null, pending: true, done: 0, total: 0, lead, plan: null };
    this.emit();
    const e = EFFORT[this.settings.strength];
    void decideCard(this.knowledge(seat), {
      samples: Math.max(24, e.hint >> 1), timeMs: e.hintTime * 3, minSamples: 12, priority: 4, signal: this.stopHintSim(),
      onProgress: (done, total) => {
        if (myHint !== this.hintGen || !this.hint || this.hint.kind !== 'card') return;
        this.hint.done = done;
        this.hint.total = total;
        this.emit();
      },
    }).then(d => {
      if (myHint !== this.hintGen || !this.hint || this.hint.kind !== 'card') return;
      this.hint.decision = d;
      this.hint.pending = false;
      this.emit();
    });
  }

  // ---------------------------------------------------------------------------
  // the review

  private finishBoard() {
    const c = this.auction.contract();
    const declTricks = this.play ? this.play.declarerTricks : 0;
    const sc = scoreNS(c, declTricks, this.vul);
    const bidOnly = !!c && !this.play;
    this.review = { contract: c, declTricks, scoreNS: sc, table: null, par: null, impsVsPar: null, cards: this.cards.map(() => null), progress: 0, ddResult: null, sim: { done: 0, total: 0 }, bidOnly, system: null };
    if (c && !bidOnly) this.resultNote(c, declTricks, sc);
    this.settleTechnique();
    this.record();
    this.emit();
    void this.analyzeReview();
  }

  /**
   * A technique deal's key moment: the walk's simulation (more layouts than
   * the check after the hand) becomes the verdict on your card there, and the
   * outcome is counted once — in the score and, if missed, the review queue.
   */
  private settleTechnique() {
    const run = this.technique;
    const out = this.techniqueOutcome();
    if (!run || !out || (out.status !== 'found' && out.status !== 'missed')) return;
    this.cards[out.index].advice = keyDecision(run.deal, this.cards.map(e => e.card));
    if (run.counted || this.peeked || this.archived) return;
    run.counted = true;
    recordTechScore(run.deal.technique, out.status === 'found');
    if (out.status === 'missed') addItems([techniqueReviewItem(run.deal, out.scripted!)]);
    updateLessonProgress(TECHNIQUE_INFO[run.deal.technique].lesson, lp => (lp.practiced = (lp.practiced ?? 0) + 1));
  }

  /** The made/down note in the tutor's feed. */
  private resultNote(c: Contract, declTricks: number, sc: number) {
    const made = declTricks - (c.level + 6);
    const ours = (c.declarer & 1) === 0;
    this.feedback.unshift(note((made >= 0) === ours ? 'good' : 'bad', () => {
      const n = T.ui.notes;
      return {
        title: fmtLabel(T.ui.common.contractBy(contractName(c), SEAT_NAMES[c.declarer]), made >= 0 ? (made === 0 ? n.madeExactly : n.madePlus(made)) : n.down(-made)),
        text: n.resultText(fmtSigned(sc)),
      };
    }));
  }

  private async analyzeReview() {
    const myGen = this.gen;
    const rv = this.review!;
    const group = (this.reviewGroup = newGroup());
    if (!rv.table) {
      const table = await ddTableAsync(this.deal, 1, group);
      if (myGen !== this.gen || !table) return;
      rv.table = table;
      if (rv.bidOnly && rv.contract) {
        rv.declTricks = table[rv.contract.strain][rv.contract.declarer];
        rv.scoreNS = scoreNS(rv.contract, rv.declTricks, this.vul);
        if (!this.archived) this.resultNote(rv.contract, rv.declTricks, rv.scoreNS);
      }
      rv.par = parScore(table, this.vul);
      rv.impsVsPar = imps(rv.scoreNS - rv.par.scoreNS);
      this.record();
      this.emit();
    }
    if (!rv.system) {
      const sys = systemAuction(this.deal, this.dealer, this.vul).contract();
      const yoursDD = ddScoreNS(rv.contract, rv.table, this.vul);
      const ddScore = ddScoreNS(sys, rv.table, this.vul);
      rv.system = { contract: sys, ddScoreNS: ddScore, yoursDD, imps: imps(yoursDD - ddScore) };
      this.emit();
    }
    if (!rv.contract || rv.bidOnly) return;
    rv.ddResult = rv.table[rv.contract.strain][rv.contract.declarer];
    // replay the play, analysing each position
    const p = new PlayState(rv.contract, this.deal);
    const jobs: Promise<void>[] = [];
    let finished = 0;
    this.cards.forEach((entry, i) => {
      const hands = p.hands.map(h => [...h]);
      const leader = p.current.leader;
      const trick = [...p.current.cards];
      const legal = legalFor(hands[entry.seat], trick);
      const nsSoFar = p.completedTricks.filter(t => (t.winner! & 1) === 0).length;
      const side = entry.seat & 1;
      if (legal.length > 1) {
        jobs.push(ddCardValues(hands, rv.contract!.strain, leader, trick, 0, group).then(moves => {
          if (myGen !== this.gen || !moves.length) return;
          const toSide = (ns: number) => (side === 0 ? nsSoFar + ns : 13 - nsSoFar - ns);
          const values = moves.map(m => ({ card: m.card, side: toSide(m.nsTricks) }));
          const best = Math.max(...values.map(v => v.side));
          const got = values.find(v => v.card === entry.card)?.side ?? best;
          rv.cards[i] = { index: i, bestSide: best, gotSide: got, values };
          finished++;
          rv.progress = finished / jobs.length;
          this.emit();
        }));
      }
      p.play(entry.card);
    });
    await Promise.all(jobs);
    if (myGen !== this.gen) return;
    rv.progress = 1;
    this.record();
    this.emit();
    if (!this.archived) await this.checkYourCards(myGen);
  }

  /**
   * Judge your cards fairly: simulate each one you played without a
   * simulation at the time, from what you could see then (your hands, dummy,
   * the bidding and the play so far). Hindsight double-dummy is not enough —
   * a card can lose a trick double-dummy and still be the right play.
   */
  private async checkYourCards(myGen: number) {
    const rv = this.review!;
    const p = new PlayState(rv.contract!, this.deal);
    const todo: { i: number; k: PlayKnowledge }[] = [];
    this.cards.forEach((e, i) => {
      if (e.human && !(e.advice && e.advice.samples >= 8) && legalFor(p.hands[e.seat], p.current.cards).length > 1) todo.push({ i, k: knowledgeAt(p, e.seat, this.vul, this.view.shown) });
      p.play(e.card);
    });
    rv.sim = { done: 0, total: todo.length };
    this.emit();
    for (let b = 0; b < todo.length; b += 4) {
      if (myGen !== this.gen) return;
      await Promise.all(todo.slice(b, b + 4).map(async t => {
        const d = await decideCard(t.k, { samples: 24, timeMs: 2500, minSamples: 10, priority: 0 });
        if (myGen !== this.gen) return;
        this.cards[t.i].advice = d;
        rv.sim.done++;
        this.emit();
      }));
    }
    if (myGen !== this.gen) return;
    this.record();
    this.emit();
  }

  /** Save the board to the journal and queue the decisions worth reviewing (again as the analysis completes). */
  private record() {
    const rv = this.review;
    if (!rv || this.archived) return;
    const first = !this.boardId;
    if (first) this.boardId = Date.now();
    const f: FinishedBoard = {
      id: this.boardId,
      board: this.board,
      dealer: this.dealer,
      vul: this.vul,
      deal: this.deal,
      calls: this.calls.map(e => ({
        call: e.call,
        human: e.human,
        advice: e.human && e.advice && !e.auto ? { call: e.advice.call, generic: !!e.advice.rule?.generic, tag: e.advice.rule?.tag ?? e.advice.meaning.tag } : undefined,
      })),
      cards: this.cards.map((e, i) => {
        const r = rv.cards[i];
        return { card: e.card, human: e.human, sim: e.human ? simVerdict(e.advice, e.card) : null, dd: e.human && r ? [r.bestSide, r.gotSide] as [number, number] : null };
      }),
      declTricks: rv.declTricks,
      scoreNS: rv.scoreNS,
      parNS: rv.par ? rv.par.scoreNS : null,
      table: rv.table,
      theme: this.theme,
      peek: this.peeked,
      bidOnly: rv.bidOnly,
    };
    saveBoard(archiveBoard(f));
    if (!this.peeked) {
      // a technique deal's key moment has its own review item (src/game/techniques.ts)
      const key = this.techniqueOutcome();
      const own = key && (key.status === 'found' || key.status === 'missed') ? `${this.boardId}:c:${key.index}` : null;
      const items = reviewItems(f, this.boardId).filter(i => i.id !== own);
      // played again after undo: mistakes from the earlier attempt that were not repeated go
      removeItems(`${this.boardId}:`, new Set([...items.map(i => i.id), ...(own ? [own] : [])]));
      addItems(items);
    }
    if (first && this.theme) {
      for (const [lesson, theme] of Object.entries(LESSON_THEMES)) if (theme === this.theme) updateLessonProgress(lesson, lp => (lp.practiced = (lp.practiced ?? 0) + 1));
    }
  }

  /** A game nobody shows any more (a closed archived board): stop its analysis and forget its listeners. */
  dispose() {
    this.gen++;
    if (this.reviewGroup) ddPool().cancelGroup(this.reviewGroup);
    this.hintSim?.abort();
    this.listeners.clear();
  }

  /** A finished board from the journal, ready to show in the review (nothing is recorded again). */
  static fromArchive(rec: ArchivedBoard): Game {
    const g = new Game({ idle: true });
    g.archived = true;
    g.boardId = rec.id;
    g.board = rec.board;
    g.seed = 1;
    g.dealer = rec.dealer;
    g.vul = rec.vul;
    g.deal = decodeDeal(rec.deal);
    g.theme = rec.theme ?? null;
    const calls = rec.calls.map(c => c.c);
    g.auction = new Auction(rec.dealer, calls);
    g.view = readAuction(g.auction, rec.vul);
    g.calls = rec.calls.map((c, i) => {
      const entry: CallEntry = { index: i, seat: g.auction.seatAt(i), call: c.c, meaning: g.view.records[i].meaning, human: !!c.h };
      if (c.h && c.a !== undefined) {
        entry.advice = advise(g.deal[S], readAuction(new Auction(rec.dealer, calls.slice(0, i)), rec.vul).ctx);
        entry.agrees = entry.advice.call === c.c;
      }
      return entry;
    });
    const contract = g.auction.isComplete() ? g.auction.contract() : null;
    if (contract) {
      const p = new PlayState(contract, g.deal);
      g.cards = rec.cards.map(c => {
        const seat = p.toPlay;
        const trick = p.tricks.length - 1;
        const principle = explainPlay(situationAt(p, seat), c.c);
        const advice: Decision | null = c.sim ? { card: c.sim.best[0], stats: [], samples: c.sim.n, equal: [...c.sim.best] } : null;
        p.play(c.c);
        return { seat, card: c.c, trick, human: !!c.h, advice, principle };
      });
      g.play = p;
    }
    const par = rec.table ? parScore(rec.table, rec.vul) : null;
    g.review = {
      contract, declTricks: rec.declTricks, scoreNS: rec.scoreNS, table: rec.table, par,
      impsVsPar: par ? imps(rec.scoreNS - par.scoreNS) : null, cards: g.cards.map(() => null), progress: 0, ddResult: null,
      sim: { done: 0, total: 0 }, bidOnly: !!rec.bo, system: null,
    };
    g.phase = 'review';
    void g.analyzeReview();
    return g;
  }

  // ---------------------------------------------------------------------------
  // language

  /**
   * Re-word everything that was built in the previous language: what each
   * call means, the system's advice on your calls, the principle behind each
   * card, the declarer plan, the open hint and the warning. Each is rebuilt
   * from the same inputs, and the engines are deterministic, so only the words
   * change. A card simulation holds just cards and numbers: a finished one is
   * kept and a running one carries on. Doesn't emit; the caller re-renders.
   */
  relocalize() {
    this.view = readAuction(this.auction, this.vul);
    // undo snapshots share entries with the live logs: re-word each entry once, in place
    const seen = new Set<object>();
    this.relocalizeCalls(this.calls, this.auction.calls, seen);
    this.relocalizeCards(this.cards, this.contract, seen);
    for (const snap of this.snapshots) {
      this.relocalizeCalls(snap.callLog, snap.calls, seen);
      this.relocalizeCards(snap.cardLog, new Auction(this.dealer, snap.calls).contract(), seen);
    }
    const p = this.play;
    if (this.plan && p?.openingLeadMade) {
      this.plan = makePlan(this.deal[p.contract.declarer], this.deal[p.dummy], p.contract, [p.tricks[0].cards[0]]);
    }
    // the hint is shown only on your turn, and belongs to the position on the table
    const hint = this.isHumanTurn() ? this.hint : null;
    if (hint?.kind === 'bid') hint.advice = advise(this.deal[S], this.view.ctx);
    else if (hint?.kind === 'card' && p) {
      if (hint.lead && !p.openingLeadMade) hint.lead = openingLeadChoices(p.hands[p.toPlay], p.contract, this.view.records, p.toPlay);
      if (hint.plan) hint.plan = this.plan;
    }
    const w = this.warning;
    if (w?.kind === 'bid') {
      const j = judgeCall(this.deal[S], this.view.ctx, w.call);
      this.warning = { kind: 'bid', call: w.call, advice: j.advice, failed: j.failed, yourMeaning: j.yourMeaning };
    }
    if (this.review?.table) this.review.par = parScore(this.review.table, this.vul);
  }

  /** Meanings (and, for your calls, the advice you had) from the auction they belong to. */
  private relocalizeCalls(entries: CallEntry[], calls: Call[], seen: Set<object>) {
    const todo = entries.filter(e => !seen.has(e));
    if (!todo.length) return;
    const view = readAuction(new Auction(this.dealer, calls), this.vul);
    for (const e of todo) {
      seen.add(e);
      e.meaning = view.records[e.index].meaning;
      if (e.advice) e.advice = advise(this.deal[S], readAuction(new Auction(this.dealer, calls.slice(0, e.index)), this.vul).ctx);
    }
  }

  /** Replay the cards, naming each principle again from the position it was played in. */
  private relocalizeCards(entries: CardEntry[], contract: Contract | null, seen: Set<object>) {
    if (!contract || entries.every(e => seen.has(e))) return;
    const p = new PlayState(contract, this.deal);
    for (const e of entries) {
      if (e.principle && !seen.has(e)) e.principle = explainPlay(situationAt(p, e.seat), e.card);
      seen.add(e);
      p.play(e.card);
    }
  }

  // helpers for the UI
  hcpOf(seat: Seat) {
    return hcp(this.deal[seat]);
  }

  vulnerable(seat: Seat) {
    return isVulnerable(this.vul, seat);
  }

  legalCalls(): Call[] {
    return this.auction.legalCalls();
  }

  passCall() {
    return PASS;
  }
}

/** What the player choosing a card from `seat` knows at this point (declarer also sees dummy). */
function knowledgeAt(p: PlayState, seat: Seat, vul: Vulnerability, shown: AuctionView['shown']): PlayKnowledge {
  return {
    viewer: seat === p.dummy ? p.contract.declarer : seat,
    toPlay: seat,
    contract: p.contract,
    vul,
    hands: p.hands.map(h => [...h]),
    tricks: p.tricks.map(t => ({ ...t, cards: [...t.cards] })),
    dummyVisible: p.openingLeadMade,
    shown,
  };
}

/** What the tutor knows when a card is chosen from this seat. */
function situationAt(p: PlayState, seat: Seat): PlaySituation {
  const cur = p.current;
  const played = p.tricks.slice(0, -1).flatMap(t => t.cards);
  const declSide = (seat & 1) === (p.contract.declarer & 1);
  return {
    seat,
    contract: p.contract,
    leader: cur.leader,
    trick: [...cur.cards],
    hand: [...p.hands[seat]],
    partnerHand: declSide ? [...p.hands[partnerOf(seat)]] : p.openingLeadMade ? [...p.hands[p.dummy]] : null,
    dummySeat: p.dummy,
    dummyHand: p.openingLeadMade ? [...p.hands[p.dummy]] : null,
    played,
    openingLead: !p.openingLeadMade,
    history: p.tricks.slice(0, -1),
  };
}

/** The note after one of your calls: agreement with the system, or what it prefers. */
function callWording(e: CallEntry) {
  const a = e.advice!;
  const rule = a.rule?.name ?? callName(PASS);
  if (e.agrees) return { title: T.ui.notes.callOk(callName(e.call)), text: fmtLabel(rule, a.rule?.desc ?? '') };
  const m = e.meaning;
  return {
    title: T.ui.notes.callOff(callName(e.call), callName(a.call)),
    text: T.ui.notes.callOffText(callName(e.call), `${m.name}${m.desc ? ' — ' + m.desc : ''}`, callName(a.call), rule),
  };
}

/** The note after a card the simulation rated clearly lower. */
function cardWording(card: Card, d: Decision, best: CardStat, mine: CardStat) {
  return {
    title: T.ui.notes.cardOff(cardName(card), cardName(d.card)),
    text: T.ui.notes.cardOffText(d.samples, cardName(d.card), fmtNum(best.tricks, 1), fmtPct(best.success), fmtNum(mine.tricks, 1), fmtPct(mine.success), cardName(card)),
  };
}

/** Deal according to the practice mode (rejection sampling on HCP). */
export function generateDeal(seed: number, mode: DealMode): Card[][] {
  const rnd = mulberry32(seed);
  for (let i = 0; i < 20000; i++) {
    const d = dealCards(rnd);
    const h = d.map(x => hcp(x));
    const ns = h[0] + h[2], ew = h[1] + h[3];
    const ok =
      mode === 'random' ||
      (mode === 'declare' && ns >= 24 && h[2] >= h[0] - 3) ||
      (mode === 'defend' && ew >= 23) ||
      (mode === 'slam' && ns >= 31) ||
      (mode === 'competitive' && ns >= 17 && ns <= 23 && longSuits(d)) ||
      (mode === 'strong' && h[2] >= 16);
    if (ok) return d;
  }
  return dealCards(rnd);
}

function longSuits(d: Card[][]): boolean {
  const len = (hand: Card[], s: number) => hand.filter(c => suitOf(c) === s).length;
  const fit = (a: Card[], b: Card[]) => [0, 1, 2, 3].some(s => len(a, s) + len(b, s) >= 8);
  return fit(d[0], d[2]) && fit(d[1], d[3]);
}
