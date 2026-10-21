// Problems: "find the right play" positions taken from real deals, where the
// simulation shows that one card (or a group of equivalent cards) is clearly
// best — for declarer play, defence and opening leads.
//
// A problem is found by dealing a board for a matching practice theme,
// bidding it with the system's own auction, and walking the play with the
// bots. At each decision of your side a quick simulation screens the
// position; a promising one is simulated again with more layouts, and kept
// when the best card beats every other card clearly (acceptProblem) and the
// answer is not a formality (trivialAnswer). Otherwise the best card is
// played and the walk goes on, for the first few tricks.
//
// Generation takes seconds, so a few ready problems of each kind are kept in
// localStorage and more are prepared in the background (ProblemFactory).
// Everything stored is language-independent data.

import {
  type Card, type Seat, type Vulnerability, N, S, NT, suitOf, rankOf, mulberry32, boardDealer, boardVulnerability, partnerOf,
} from '../core/cards';
import { Auction, type Call, type Contract, isBid, strainOf } from '../core/auction';
import type { CallRecord } from '../bidding/context';
import { PlayState, trickWinner } from '../core/play';
import { readAuction } from '../bidding/engine';
import { decideCard, ddCardValues, type CardStat, type Decision, type PlayKnowledge } from '../engine/playEngine';
import { openingLeadChoices } from '../engine/leads';
import { dealForTheme, systemAuction } from './themes';
import { type ReviewItem, type SimVerdict, encodeDeal, decodeDeal } from './journal';
import { type SkillId, cardSkill } from './skills';

export type ProblemKind = 'declarer' | 'defense' | 'lead';
export const PROBLEM_KINDS: ProblemKind[] = ['declarer', 'defense', 'lead'];

/** The practice themes each kind of problem is dealt from. */
export const KIND_THEMES: Record<ProblemKind, string[]> = {
  declarer: ['declarer', 'nt-games', 'suit-games'],
  defense: ['defense', 'defense-nt', 'defense-suit'],
  lead: ['leads'],
};

/** One legal card's simulation result. */
export interface ProblemStat {
  c: Card;
  t: number; // average tricks for the side to play
  s: number; // success: contract made (declarer) / defeated (defence)
}

export interface Problem {
  v: 1;
  id: string;
  kind: ProblemKind;
  theme: string;
  board: number;
  dealer: Seat;
  vul: Vulnerability;
  deal: string; // encodeDeal
  calls: Call[]; // the whole auction
  play: Card[]; // cards played before the decision
  seat: Seat; // the seat to play (South, or North when North-South declare)
  skill: SkillId;
  n: number; // layouts simulated
  stats: ProblemStat[]; // every legal card, best first
  answer: Card[]; // the best card and the cards equivalent to it (opening leads: as good as it)
  created: number;
}

// ---------------------------------------------------------------------------
// The acceptance rule

export interface AcceptRules {
  /** Layouts needed before a verdict counts. */
  minSamples: number;
  /** The best card makes (or defeats) at least this much more often than every other card… */
  successGap: number;
  /** …or takes at least this many more tricks on average. */
  trickGap: number;
  /** Not a problem when every other card is a gross blunder (a trick or more thrown away for nothing): */
  blunderSuccess: number;
  blunderTricks: number;
  /**
   * Cards this close to the best count as right too (opening leads: the suit
   * matters more than the card). Zero: only cards with exactly the same
   * results — equivalent cards — do.
   */
  nearSuccess: number;
  nearTricks: number;
  /** Opening leads: cards of the best card's suit that are not clearly worse are right too (the question is the suit). */
  suitIsAnswer: boolean;
  /** The right cards may be at most this share of the legal cards ("anything but the king" is no problem). */
  maxShare: number;
}

export const DEFAULT_RULES: AcceptRules = { minSamples: 32, successGap: 0.2, trickGap: 0.7, blunderSuccess: 0.7, blunderTricks: 1.6, nearSuccess: 0, nearTricks: 0, suitIsAnswer: false, maxShare: 0.6 };
/**
 * Opening leads: the differences between suits are smaller (three hands are
 * hidden), so the answer is the good lead — usually one suit — and every
 * card practically as good as the best counts as right.
 */
export const LEAD_RULES: AcceptRules = { minSamples: 32, successGap: 0.1, trickGap: 0.4, blunderSuccess: 0.7, blunderTricks: 1.6, nearSuccess: 0.05, nearTricks: 0.3, suitIsAnswer: true, maxShare: 0.4 };

/** Defence: the defenders' choices change the result less often, by smaller margins. */
export const DEFENCE_RULES: AcceptRules = { ...DEFAULT_RULES, successGap: 0.15, trickGap: 0.6 };

export const rulesFor = (kind: ProblemKind): AcceptRules => (kind === 'lead' ? LEAD_RULES : kind === 'defense' ? DEFENCE_RULES : DEFAULT_RULES);

export type Verdict =
  | { ok: true; answer: Card[]; best: CardStat; runnerUp: CardStat }
  | { ok: false; reason: 'samples' | 'forced' | 'many' | 'mixed' | 'close' | 'blunders' };

const EPS = 1e-6;
const same = (a: CardStat, b: CardStat) => Math.abs(a.score - b.score) < EPS && Math.abs(a.tricks - b.tricks) < EPS && Math.abs(a.success - b.success) < EPS;

/** Stats ordered best first: by average score, then tricks, then success. */
export function rankStats(stats: readonly CardStat[]): CardStat[] {
  return [...stats].sort((a, b) => b.score - a.score || b.tricks - a.tricks || b.success - a.success || b.card - a.card);
}

/**
 * Is this simulated position a problem with a clear answer? The best card
 * (with the cards that did exactly as well — equivalent cards — or, by the
 * rules, practically as well) must be at least as successful as every other
 * card, and beat each of them clearly: by `successGap` in success rate or
 * `trickGap` in average tricks. Positions where every alternative is a gross
 * blunder are no test either.
 */
export function acceptProblem(d: Pick<Decision, 'stats' | 'samples'>, rules: AcceptRules = DEFAULT_RULES): Verdict {
  if (d.samples < rules.minSamples) return { ok: false, reason: 'samples' };
  const ranked = rankStats(d.stats);
  const best = ranked[0];
  const clear = (o: CardStat) => best.success - o.success >= rules.successGap - EPS || best.tricks - o.tricks >= rules.trickGap - EPS;
  const right = (s: CardStat) =>
    same(s, best)
    || ((rules.nearSuccess > 0 || rules.nearTricks > 0) && Math.abs(best.success - s.success) <= rules.nearSuccess + EPS && Math.abs(best.tricks - s.tricks) <= rules.nearTricks + EPS)
    || (rules.suitIsAnswer && suitOf(s.card) === suitOf(best.card) && s.success <= best.success + EPS && !clear(s));
  const answer = ranked.filter(right);
  const others = ranked.filter(s => !right(s));
  if (!others.length) return { ok: false, reason: 'forced' };
  if (answer.length > rules.maxShare * ranked.length + EPS) return { ok: false, reason: 'many' };
  if (others.some(o => o.success > best.success + EPS)) return { ok: false, reason: 'mixed' };
  if (!others.every(clear)) return { ok: false, reason: 'close' };
  const runnerUp = [...others].sort((a, b) => b.success - a.success || b.tricks - a.tricks)[0];
  const blunder = (o: CardStat) => best.success - o.success >= rules.blunderSuccess - EPS || best.tricks - o.tricks >= rules.blunderTricks - EPS;
  if (others.every(blunder)) return { ok: false, reason: 'blunders' };
  return { ok: true, answer: answer.map(s => s.card).sort((a, b) => b - a), best, runnerUp };
}

/** A looser test on a quick simulation: worth simulating again with more layouts? */
export function promising(d: Pick<Decision, 'stats' | 'samples'>, rules: AcceptRules = DEFAULT_RULES): boolean {
  if (d.samples < 8) return false;
  return acceptProblem(d, { ...rules, minSamples: 8, successGap: rules.successGap / 2, trickGap: rules.trickGap * 0.6, blunderSuccess: 0.95, blunderTricks: 2.5 }).ok;
}

/**
 * The card fourth hand plays without thinking: the lowest when partner is
 * winning the trick (following suit), the cheapest card that wins when the
 * opponents are, the lowest when nothing wins. Null when there is no
 * automatic card (a discard with partner winning, or nothing to follow with
 * and nothing that wins).
 */
export function naturalFourthHand(p: PlayState): Card | null {
  const cur = p.current;
  if (cur.cards.length !== 3) return null;
  const seat = p.toPlay;
  const legal = p.legal();
  const following = suitOf(legal[0]) === suitOf(cur.cards[0]);
  const lowest = (cs: Card[]) => [...cs].sort((a, b) => rankOf(a) - rankOf(b))[0];
  if (trickWinner(cur.cards, cur.leader, p.trump) === partnerOf(seat)) return following ? lowest(legal) : null;
  const winners = legal.filter(c => trickWinner([...cur.cards, c], cur.leader, p.trump) === seat);
  if (winners.length) return lowest(winners);
  return following ? lowest(legal) : null;
}

/**
 * Third hand following suit: the lowest card when partner's card is sure to
 * win the trick, else the cheapest card sure to win it (every higher card of
 * the suit is played or in sight). Null when there is no such card.
 */
export function sureWinThirdHand(p: PlayState): Card | null {
  const cur = p.current;
  if (cur.cards.length !== 2) return null;
  const seat = p.toPlay;
  const led = suitOf(cur.cards[0]);
  const legal = p.legal().filter(c => suitOf(c) === led);
  if (!legal.length) return null;
  // cards the player can see: own hand, partner's (declarer and dummy see each other) or dummy once it is down
  const declSide = (seat & 1) === (p.contract.declarer & 1);
  const seen = new Set<Card>(p.hands[seat]);
  if (declSide) p.hands[partnerOf(seat)].forEach(c => seen.add(c));
  else if (p.openingLeadMade) p.hands[p.dummy].forEach(c => seen.add(c));
  const hiddenHigher = (c: Card) => p.hands.some((h, s) => s !== seat && h.some(x => suitOf(x) === led && x > c && !seen.has(x)));
  const winning = cur.cards[trickWinner(cur.cards, cur.leader, p.trump) === cur.leader ? 0 : 1];
  if (trickWinner(cur.cards, cur.leader, p.trump) === partnerOf(seat) && suitOf(winning) === led && !hiddenHigher(winning)) return [...legal].sort((a, b) => a - b)[0];
  const beatsTrick = (c: Card) => trickWinner([...cur.cards, c], cur.leader, p.trump) === seat;
  const sure = legal.filter(c => beatsTrick(c) && !hiddenHigher(c));
  return sure.length ? sure.sort((a, b) => a - b)[0] : null;
}

/**
 * Answers that are a formality rather than a problem: fourth hand playing
 * the automatic card (winning cheaply, or not overtaking partner), or third
 * hand simply taking the trick with a sure winner (or playing low under
 * partner's). Holding up, unblocking or overtaking are problems; these are not.
 */
export function trivialAnswer(p: PlayState, answer: readonly Card[]): boolean {
  const natural = naturalFourthHand(p) ?? sureWinThirdHand(p);
  return natural !== null && answer.includes(natural);
}

// ---------------------------------------------------------------------------
// Positions

/** Whose cards you choose on this deal: South, and North too when North-South declare. */
export function humanSeat(contract: Contract, seat: Seat): boolean {
  return seat === S || (seat === N && (contract.declarer & 1) === 0);
}

export function kindOf(contract: Contract, seat: Seat, openingLead: boolean): ProblemKind {
  if (openingLead) return 'lead';
  return (seat & 1) === (contract.declarer & 1) ? 'declarer' : 'defense';
}

/** The position of a problem: the deal, the auction and the play up to the decision. */
export function problemPosition(pr: Pick<Problem, 'deal' | 'dealer' | 'calls' | 'play'>): { deal: Card[][]; auction: Auction; play: PlayState } {
  const deal = decodeDeal(pr.deal);
  const auction = new Auction(pr.dealer, [...pr.calls]);
  const play = new PlayState(auction.contract()!, deal);
  for (const c of pr.play) play.play(c);
  return { deal, auction, play };
}

/** What the player to move knows (declarer also sees dummy). */
export function knowledgeOf(p: PlayState, vul: Vulnerability, shown: PlayKnowledge['shown']): PlayKnowledge {
  const seat = p.toPlay;
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

/** Two simulations of the same position as one (weighted by layouts). */
export function mergeDecisions(a: Decision, b: Decision): Decision {
  const acc = new Map<Card, CardStat>();
  for (const s of [...a.stats, ...b.stats]) {
    const x = acc.get(s.card);
    if (!x) acc.set(s.card, { ...s });
    else {
      const n = x.n + s.n;
      if (n > 0) {
        x.tricks = (x.tricks * x.n + s.tricks * s.n) / n;
        x.success = (x.success * x.n + s.success * s.n) / n;
        x.score = (x.score * x.n + s.score * s.n) / n;
      }
      x.n = n;
    }
  }
  const stats = rankStats([...acc.values()]);
  const best = stats[0];
  const equal = stats.filter(s => same(s, best)).map(s => s.card);
  return { card: equal.includes(a.card) ? a.card : equal[0], stats, samples: a.samples + b.samples, equal };
}

/** The verdict on a card for the review queue: how it compares with the best card. */
export function problemVerdict(pr: Problem, card: Card): SimVerdict | null {
  const best = pr.stats[0];
  const mine = pr.stats.find(s => s.c === card);
  if (!best || !mine) return null;
  return { n: pr.n, best: [...pr.answer], bt: best.t, bs: best.s, mt: mine.t, ms: mine.s };
}

/** A missed problem as a review item: it comes back in the Review tab. */
export function problemReviewItem(pr: Problem, card: Card, now = Date.now()): ReviewItem {
  return {
    id: `problem-${pr.id}:c:${pr.play.length}`,
    kind: 'card',
    source: 'problem',
    skill: pr.skill,
    board: pr.board,
    dealer: pr.dealer,
    vul: pr.vul,
    deal: pr.deal,
    calls: [...pr.calls],
    play: [...pr.play],
    seat: pr.seat,
    answer: [...pr.answer],
    yours: card,
    sim: problemVerdict(pr, card) ?? undefined,
    created: now,
    box: 0,
    due: now,
    tries: 0,
    right: 0,
  };
}

// ---------------------------------------------------------------------------
// The generator

export interface GenProgress {
  kind: ProblemKind;
  stage: 'dealing' | 'playing' | 'testing';
  trick: number;
  done: number; // layouts solved in the current simulation
  total: number;
  tested: number; // positions simulated in depth so far (this deal)
}

export interface GenOptions {
  /** Layouts for the quick screen of a position (also used for the bots' cards). */
  screenSamples?: number;
  /** Extra layouts for a promising position. */
  extraSamples?: number;
  /** Look for a problem in the first this many tricks. */
  maxTricks?: number;
  /** Pool priority (the bots at the table use 3, hints 4). */
  priority?: number;
  /** Time limits per simulation (ms). */
  screenMs?: number;
  /** Time limit for the bots' cards (unlimited makes the walk reproducible from the seed). */
  botMs?: number;
  extraMs?: number;
  dealBudgetMs?: number;
  rules?: AcceptRules;
  /** Give up as soon as this returns true. */
  shouldStop?: () => boolean;
  /** Called before each simulation: resolves when work may go on (e.g. after the bots at the table have moved). */
  pause?: () => Promise<void>;
  onProgress?: (p: GenProgress) => void;
  /** Every position simulated in depth, with the verdict (for tuning and tests). */
  onVerdict?: (info: { stage: 'screen' | 'final'; trick: number; seat: Seat; play: Card[]; decision: Decision; verdict: Verdict; trivial: boolean }) => void;
  now?: () => number;
}

/** Defaults: lead problems simulate whole deals, so they get more time. */
function settings(kind: ProblemKind, o: GenOptions) {
  return {
    screenSamples: o.screenSamples ?? 16,
    extraSamples: o.extraSamples ?? 32,
    maxTricks: o.maxTricks ?? 6,
    priority: o.priority ?? 1,
    screenMs: o.screenMs ?? (kind === 'lead' ? 12000 : 4000),
    extraMs: o.extraMs ?? (kind === 'lead' ? 25000 : 8000),
    botMs: o.botMs ?? 1500,
    dealBudgetMs: o.dealBudgetMs ?? 2500,
    rules: o.rules ?? rulesFor(kind),
  };
}

/**
 * Look for a problem of this kind on one deal (chosen by `seed`). Resolves
 * with null when the deal offers none in the first tricks (or generation was
 * stopped).
 */
export async function generateProblem(kind: ProblemKind, seed: number, o: GenOptions = {}): Promise<Problem | null> {
  const cfg = settings(kind, o);
  const rnd = mulberry32(seed);
  const themes = KIND_THEMES[kind];
  const theme = themes[Math.floor(rnd() * themes.length)];
  const board = 1 + Math.floor(rnd() * 16);
  const dealer = boardDealer(board);
  const vul = boardVulnerability(board);
  const progress = (stage: GenProgress['stage'], trick: number, done = 0, total = 0, tested = 0) => o.onProgress?.({ kind, stage, trick, done, total, tested });
  const stop = () => !!o.shouldStop?.();

  progress('dealing', 0);
  const dealt = await dealForTheme(theme, dealer, vul, (rnd() * 2 ** 31) | 0, cfg.dealBudgetMs);
  if (!dealt.found || stop()) return null;
  const deal = dealt.deal;
  const { auction, records } = systemAuction(deal, dealer, vul);
  const contract = auction.contract();
  if (!contract) return null;
  const shown = readAuction(auction, vul).shown;
  const p = new PlayState(contract, deal);
  const played: Card[] = [];
  let tested = 0;
  const seedNext = () => (rnd() * 2 ** 31) | 0;
  if (kind === 'lead' && !(await leadMatters(p, records, cfg.priority, o, stop))) return null;

  const simulate = async (samples: number, timeMs: number, minSamples: number, stage: GenProgress['stage'] = 'testing') => {
    await o.pause?.();
    if (stop()) return null;
    progress(stage, p.tricks.length, 0, samples, tested);
    return decideCard(knowledgeOf(p, vul, shown), {
      samples, timeMs, minSamples, priority: cfg.priority, seed: seedNext(),
      onProgress: (done, total) => progress(stage, p.tricks.length, done, total, tested),
    });
  };

  /** Test the position for your side to move: a problem, or the card to play on. */
  const testPosition = async (): Promise<{ problem: Problem | null; next: Card | null }> => {
    const screen = await simulate(cfg.screenSamples, cfg.screenMs, Math.min(cfg.screenSamples, 8));
    if (!screen) return { problem: null, next: null };
    if (o.onVerdict) o.onVerdict({ stage: 'screen', trick: p.tricks.length, seat: p.toPlay, play: [...played], decision: screen, verdict: acceptProblem(screen, { ...cfg.rules, minSamples: 8 }), trivial: false });
    if (!promising(screen, cfg.rules)) return { problem: null, next: screen.card };
    const v0 = acceptProblem(screen, { ...cfg.rules, minSamples: 8 });
    if (v0.ok && p.openingLeadMade && trivialAnswer(p, v0.answer)) return { problem: null, next: screen.card };
    tested++;
    const extra = await simulate(cfg.extraSamples, cfg.extraMs, Math.min(cfg.extraSamples, 8));
    if (!extra) return { problem: null, next: null };
    const d = mergeDecisions(screen, extra);
    const v = acceptProblem(d, cfg.rules);
    const trivial = v.ok && p.openingLeadMade && trivialAnswer(p, v.answer);
    o.onVerdict?.({ stage: 'final', trick: p.tricks.length, seat: p.toPlay, play: [...played], decision: d, verdict: v, trivial });
    if (!v.ok || trivial) return { problem: null, next: d.card };
    const r3 = (x: number) => Math.round(x * 1000) / 1000;
    const seat = p.toPlay;
    const now = o.now?.() ?? Date.now();
    return {
      next: d.card,
      problem: {
        v: 1,
        id: `${now.toString(36)}-${(seed >>> 0).toString(36)}`,
        kind,
        theme,
        board,
        dealer,
        vul,
        deal: encodeDeal(deal),
        calls: [...auction.calls],
        play: [...played],
        seat,
        skill: cardSkill(contract.declarer, seat, !p.openingLeadMade),
        n: d.samples,
        stats: rankStats(d.stats).map(s => ({ c: s.card, t: r3(s.tricks), s: r3(s.success) })),
        answer: v.answer,
        created: now,
      },
    };
  };

  // a problem where only overtricks are at stake is kept in reserve while a decisive one is looked for
  let reserve: Problem | null = null;
  while (!p.isOver && p.tricks.length <= cfg.maxTricks) {
    if (stop()) return reserve;
    const seat = p.toPlay;
    const human = humanSeat(contract, seat);
    const legal = p.legal();
    let card: Card;
    if (!p.openingLeadMade) {
      // a lead problem is the opening lead itself
      if (human && kind === 'lead') return (await testPosition()).problem;
      // every other opening lead by the book, as the bots lead
      card = openingLeadChoices(p.hands[seat], contract, records, seat)[0].card;
    } else if (legal.length === 1) {
      card = legal[0];
    } else if (human && kindOf(contract, seat, false) === kind) {
      const t = await testPosition();
      if (t.problem && decisive(t.problem)) return t.problem;
      // only overtricks at stake: a clear answer in one suit, or none
      if (t.problem && new Set(t.problem.answer.map(suitOf)).size === 1) reserve ??= t.problem;
      if (t.next === null) return reserve;
      card = t.next;
    } else {
      const d = await simulate(cfg.screenSamples, cfg.botMs, 6, 'playing');
      if (!d) return reserve;
      card = d.card;
    }
    if (kind === 'lead') return null; // the lead was not ours to make
    p.play(card);
    played.push(card);
  }
  return reserve;
}

/** Does the right card decide the contract (rather than only overtricks or undertricks)? */
export function decisive(pr: Pick<Problem, 'stats' | 'answer'>): boolean {
  const best = pr.stats[0];
  const others = pr.stats.filter(s => !pr.answer.includes(s.c));
  return !!best && others.every(o => best.s - o.s >= 0.1 - 1e-9);
}

/** Has the leader's partner bid a suit of their own (a natural suit bid)? */
export function partnerBidASuit(records: readonly CallRecord[], leader: Seat): boolean {
  const partner = partnerOf(leader);
  return records.some(r => r.seat === partner && isBid(r.call) && strainOf(r.call) !== NT && !r.meaning.artificial);
}

/** A full-deal solve given up on (it runs on in its worker until done). */
let slowSolve: Promise<void> | null = null;

/**
 * Cheap checks before simulating an opening lead (clear lead problems are
 * rare and their simulations slow): the leader is yours, partner has bid a
 * suit of their own (the deals where the choice of lead tends to matter most),
 * and on the actual deal (double dummy, one solve) the choice of lead decides
 * the contract.
 */
async function leadMatters(p: PlayState, records: readonly CallRecord[], priority: number, o: GenOptions, stop: () => boolean): Promise<boolean> {
  const c = p.contract;
  const leader = p.toPlay;
  if (!humanSeat(c, leader) || !partnerBidASuit(records, leader)) return false;
  await o.pause?.();
  if (stop()) return false;
  o.onProgress?.({ kind: 'lead', stage: 'testing', trick: 1, done: 0, total: 0, tested: 0 });
  // a solve abandoned earlier still occupies a worker: don't pile up more of them
  if (slowSolve) {
    await Promise.race([slowSolve, new Promise(r => setTimeout(r, 1000))]);
    return false;
  }
  const need = c.level + 6;
  // some full deals take the solver very long, and their layouts would too: skip them
  const solve = ddCardValues(p.hands, c.strain, leader, [], priority);
  const values = await Promise.race([solve, new Promise<null>(r => setTimeout(() => r(null), 2500))]);
  if (!values) {
    const pending = solve.then(() => {
      if (slowSolve === pending) slowSolve = null;
    });
    slowSolve = pending;
    return false;
  }
  const sets = values.map(v => ((c.declarer & 1) === 0 ? v.nsTricks : 13 - v.nsTricks) < need);
  return sets.some(Boolean) && !sets.every(Boolean);
}

/** Does a stored problem still describe a valid position? */
export function validProblem(pr: unknown): pr is Problem {
  const x = pr as Problem;
  if (!x || x.v !== 1 || typeof x.deal !== 'string' || x.deal.length !== 52 || !Array.isArray(x.calls) || !Array.isArray(x.play) || !Array.isArray(x.stats) || !Array.isArray(x.answer) || !x.answer.length) return false;
  if (!PROBLEM_KINDS.includes(x.kind)) return false;
  try {
    const { auction, play } = problemPosition(x);
    if (!auction.isComplete() || !auction.contract()) return false;
    if (play.toPlay !== x.seat || !humanSeat(play.contract, x.seat)) return false;
    const legal = new Set(play.legal());
    return x.stats.every(s => legal.has(s.c)) && x.answer.every(c => legal.has(c));
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// The bank of ready problems (browser storage, best effort)

const KEY = 'bridge-tutor.problems.v1';
/** Ready problems kept per kind. */
export const BANK_SIZE = 6;

export interface KindScore {
  done: number;
  right: number;
}

interface ProblemStore {
  v: 1;
  bank: Problem[];
  score: Record<ProblemKind, KindScore>;
}

const emptyScore = (): Record<ProblemKind, KindScore> => ({ declarer: { done: 0, right: 0 }, defense: { done: 0, right: 0 }, lead: { done: 0, right: 0 } });

function readStore(): ProblemStore {
  try {
    const raw = localStorage.getItem(KEY);
    const s = raw ? (JSON.parse(raw) as ProblemStore) : null;
    if (s && s.v === 1 && Array.isArray(s.bank)) return { v: 1, bank: s.bank.filter(validProblem), score: { ...emptyScore(), ...(s.score ?? {}) } };
  } catch {
    /* fall through */
  }
  return { v: 1, bank: [], score: emptyScore() };
}

function writeStore(s: ProblemStore) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* storage full or unavailable: the problems still work for this visit */
  }
}

export function loadBank(): Problem[] {
  return readStore().bank;
}

export function bankCounts(bank: readonly Problem[] = loadBank()): Record<ProblemKind, number> {
  const out = { declarer: 0, defense: 0, lead: 0 };
  for (const p of bank) out[p.kind]++;
  return out;
}

export function addToBank(pr: Problem) {
  const s = readStore();
  if (s.bank.some(x => x.id === pr.id)) return;
  s.bank.push(pr);
  // keep the newest BANK_SIZE of each kind
  for (const k of PROBLEM_KINDS) {
    const mine = s.bank.filter(x => x.kind === k);
    if (mine.length > BANK_SIZE) {
      const drop = new Set(mine.slice(0, mine.length - BANK_SIZE).map(x => x.id));
      s.bank = s.bank.filter(x => !drop.has(x.id));
    }
  }
  writeStore(s);
}

export function removeFromBank(id: string) {
  const s = readStore();
  const next = s.bank.filter(x => x.id !== id);
  if (next.length !== s.bank.length) writeStore({ ...s, bank: next });
}

/** The next problem to show: of the kind asked for, or (mixed) of the kind after `last` that has one ready. */
export function pickProblem(filter: ProblemKind | 'mixed', last: ProblemKind | null = null, bank: readonly Problem[] = loadBank()): Problem | null {
  if (filter !== 'mixed') return bank.find(p => p.kind === filter) ?? null;
  const start = last ? PROBLEM_KINDS.indexOf(last) + 1 : 0;
  for (let i = 0; i < PROBLEM_KINDS.length; i++) {
    const k = PROBLEM_KINDS[(start + i) % PROBLEM_KINDS.length];
    const pr = bank.find(p => p.kind === k);
    if (pr) return pr;
  }
  return null;
}

export function loadScore(): Record<ProblemKind, KindScore> {
  return readStore().score;
}

export function recordScore(kind: ProblemKind, right: boolean) {
  const s = readStore();
  s.score[kind].done++;
  if (right) s.score[kind].right++;
  writeStore(s);
}

// ---------------------------------------------------------------------------
// Background generation

export interface FactoryControl {
  /** Keep generating while this returns true (e.g. the Problems tab is open). */
  active: () => boolean;
  /** A hand is being played at the table right now: wait. */
  busy?: () => boolean;
  /** The kind wanted first ('mixed': whichever kind has the fewest ready). */
  prefer: () => ProblemKind | 'mixed';
}

/** Fills the bank in the background, one deal at a time. */
export class ProblemFactory {
  running = false;
  progress: GenProgress | null = null;
  /** Deals tried and problems found since the factory started (for the progress line). */
  tried = 0;
  found = 0;
  private ctl: FactoryControl | null = null;
  private listeners = new Set<(event: 'progress' | 'found') => void>();

  onChange(fn: (event: 'progress' | 'found') => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit(event: 'progress' | 'found') {
    for (const fn of this.listeners) fn(event);
  }

  /** The kind to generate next, or null when the bank is full. */
  nextKind(prefer: ProblemKind | 'mixed', counts = bankCounts()): ProblemKind | null {
    if (prefer !== 'mixed' && counts[prefer] < BANK_SIZE) return prefer;
    const open = PROBLEM_KINDS.filter(k => counts[k] < BANK_SIZE);
    if (!open.length) return null;
    return open.sort((a, b) => counts[a] - counts[b])[0];
  }

  /** Start (or keep) generating under this control. */
  start(ctl: FactoryControl) {
    this.ctl = ctl;
    if (this.running) return;
    this.running = true;
    void this.loop();
  }

  private async loop() {
    // let the caller's view attach before the first check
    await new Promise(r => setTimeout(r, 30));
    let failures = 0;
    try {
      for (;;) {
        const ctl = this.ctl;
        if (!ctl || !ctl.active()) break;
        const kind = this.nextKind(ctl.prefer());
        if (!kind) break;
        // a deal can be rejected without waiting for anything: let the page breathe between deals
        await new Promise(r => setTimeout(r, 0));
        this.tried++;
        const seed = (Math.random() * 2 ** 31) | 0;
        let pr: Problem | null = null;
        try {
          pr = await generateProblem(kind, seed, {
            shouldStop: () => !this.ctl?.active(),
            pause: () => this.waitIdle(),
            onProgress: p => {
              this.progress = p;
              this.emit('progress');
            },
          });
          failures = 0;
        } catch {
          // a deal the engine could not handle: try another, but don't spin on a broken engine
          if (++failures >= 3) break;
        }
        if (pr) {
          this.found++;
          addToBank(pr);
          this.emit('found');
        }
      }
    } finally {
      this.running = false;
      this.progress = null;
      this.emit('progress');
    }
  }

  private async waitIdle() {
    while (this.ctl?.busy?.() && this.ctl.active()) await new Promise(r => setTimeout(r, 400));
  }
}

let shared: ProblemFactory | null = null;
export function problemFactory(): ProblemFactory {
  if (!shared) shared = new ProblemFactory();
  return shared;
}

/** The book's opening lead for a problem position (for the lead problems' explanation). */
export function bookLead(pr: Problem) {
  const { deal, auction, play } = problemPosition(pr);
  const records = readAuction(auction, pr.vul).records;
  return openingLeadChoices(deal[pr.seat], play.contract, records, pr.seat);
}
