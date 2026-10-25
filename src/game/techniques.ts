// Technique practice: whole deals where one named declarer technique is
// needed (a finesse, the hold-up, a duck, unblocking, drawing trumps, a ruff
// in the short hand, a safety play), played at the table and explained in the
// review afterwards.
//
// A deal is found the way a problem is (src/game/problems.ts): dealt for a
// practice theme, bid with the system's own auction and walked with the bots.
// At each of declarer's decisions a quick simulation screens the position; a
// promising one is simulated again with more layouts, and kept when the best
// card beats every other card clearly and decides the contract
// (acceptProblem, decisive) AND the right cards are recognised as one
// technique (recogniseTechnique) — a test on what declarer can see: the two
// hands and the cards played, never the hidden hands. Stored: the deal, the
// auction, the play up to that decision and the technique, all
// language-independent data.
//
// At the table (Game.playTechnique) the auction is already made. While your
// play follows the walk (or plays interchangeable cards: equals in one hand),
// the bots defend with the walk's cards, so the key position comes up; after
// it they play freely. The review then says whether you found the technique.

import { type Card, type Seat, NT, suitOf, rankOf, partnerOf, lhoOf, mulberry32, boardDealer, boardVulnerability } from '../core/cards';
import { Auction, type Contract } from '../core/auction';
import { PlayState, trickWinner } from '../core/play';
import { readAuction } from '../bidding/engine';
import { decideCard, type Decision } from '../engine/playEngine';
import { openingLeadChoices } from '../engine/leads';
import { dealForTheme, systemAuction } from './themes';
import { type ReviewItem, encodeDeal, decodeDeal } from './journal';
import {
  type AcceptRules, type GenOptions, type GenProgress, type Problem, type ProblemStat, DEFAULT_RULES, acceptProblem, screenRules, mergeDecisions,
  trivialAnswer, decisive, humanSeat, knowledgeOf, rankStats, validProblem, problemReviewItem,
} from './problems';
import { STARTER_TECHNIQUES } from './starterTechniques';

export type TechniqueId = 'finesse' | 'holdUp' | 'duck' | 'unblock' | 'drawTrumps' | 'ruffShort' | 'safety';
/** In the order they are offered (and taught). */
export const TECHNIQUES: TechniqueId[] = ['finesse', 'holdUp', 'duck', 'unblock', 'drawTrumps', 'ruffShort', 'safety'];

export interface TechniqueInfo {
  /** Practice themes deals for it are dealt from (src/game/themes.ts). */
  themes: string[];
  /** The lesson that teaches it. */
  lesson: string;
}

export const TECHNIQUE_INFO: Record<TechniqueId, TechniqueInfo> = {
  finesse: { themes: ['declarer', 'nt-games', 'suit-games'], lesson: 'finesses' },
  holdUp: { themes: ['nt-games'], lesson: 'hold-up-and-entries' },
  duck: { themes: ['nt-games', 'declarer', 'suit-games'], lesson: 'establishing-long-suits' },
  unblock: { themes: ['nt-games', 'declarer'], lesson: 'establishing-long-suits' },
  drawTrumps: { themes: ['suit-games'], lesson: 'trump-management' },
  ruffShort: { themes: ['suit-games'], lesson: 'trump-management' },
  safety: { themes: ['declarer', 'suit-games', 'nt-games'], lesson: 'safety-plays' },
};

/** Themes for "any technique". */
export const ANY_THEMES = ['nt-games', 'suit-games', 'declarer'];

/**
 * Lessons whose practice theme ("declarer play", "3NT") is too broad for the
 * technique they teach: they offer technique practice as well.
 */
export const LESSON_TECHNIQUES: Record<string, TechniqueId> = {
  'finesses': 'finesse',
  'hold-up-and-entries': 'holdUp',
  'establishing-long-suits': 'duck',
  'trump-management': 'ruffShort',
  'safety-plays': 'safety',
  'suit-combinations-and-odds': 'finesse',
};

export const isTechnique = (x: unknown): x is TechniqueId => TECHNIQUES.includes(x as TechniqueId);

/** A deal for technique practice: a declarer problem plus the technique its answer is. */
export interface TechniqueDeal extends Problem {
  technique: TechniqueId;
}

// ---------------------------------------------------------------------------
// Recognising the technique (from declarer's view only)

interface View {
  p: PlayState;
  seat: Seat;
  partner: Seat;
  trump: number;
  pos: number; // cards already in the trick
  led: number; // suit led (-1 when leading)
  done: Set<Card>; // cards in completed tricks
  inTrick: Set<Card>;
}

function viewOf(p: PlayState): View {
  const seat = p.toPlay;
  const cur = p.current;
  return {
    p,
    seat,
    partner: partnerOf(seat),
    trump: p.trump,
    pos: cur.cards.length,
    led: cur.cards.length ? suitOf(cur.cards[0]) : -1,
    done: new Set(p.completedTricks.flatMap(t => t.cards)),
    inTrick: new Set(cur.cards),
  };
}

const suitCards = (cards: readonly Card[], s: number) => cards.filter(c => suitOf(c) === s);
const handIn = (v: View, s: number) => suitCards(v.p.hands[v.seat], s);
const partnerIn = (v: View, s: number) => suitCards(v.p.hands[v.partner], s);

/** The defenders' unplayed cards of a suit (declarer knows the cards, not who holds them). */
function outstanding(v: View, s: number): Card[] {
  const ours = new Set([...v.p.hands[v.seat], ...v.p.hands[v.partner]]);
  const out: Card[] = [];
  for (let c = s * 13; c < s * 13 + 13; c++) if (!ours.has(c) && !v.done.has(c) && !v.inTrick.has(c)) out.push(c);
  return out;
}

/** No defender holds a higher card of the suit. */
const isTop = (v: View, c: Card) => !outstanding(v, suitOf(c)).some(x => x > c);
/** Cards the defenders hold above this one. */
const gap = (v: View, c: Card) => outstanding(v, suitOf(c)).filter(x => x > c).length;
/** The card would win the trick as it stands. */
const winsNow = (v: View, c: Card) => trickWinner([...v.p.current.cards, c], v.p.current.leader, v.p.trump) === v.seat;
/** Currently won by the defenders (some card played, the best of it theirs). */
const theyWin = (v: View) => v.pos > 0 && (trickWinner(v.p.current.cards, v.p.current.leader, v.p.trump) & 1) !== (v.seat & 1);
/** A card that wins if no defender holds the one or two honours above it: the card of a finesse. */
const finesseCard = (v: View, c: Card) => !isTop(v, c) && gap(v, c) <= 2 && rankOf(c) >= 9;
/** How many cards of a suit a seat was dealt. */
const dealtIn = (v: View, seat: Seat, s: number) => suitCards(v.p.hands[seat], s).length + v.p.playedBy(seat).filter(c => suitOf(c) === s).length;
/** Has this seat shown out of the suit (failed to follow)? */
function shownOut(v: View, seat: Seat, s: number): boolean {
  return v.p.tricks.some(t => t.cards.length > 1 && suitOf(t.cards[0]) === s && t.cards.some((c, i) => i > 0 && ((t.leader + i) & 3) === seat && suitOf(c) !== s));
}
/** The card is the hand's lowest of its suit, or equal to it (every card between is in the hand or played). */
function lowest(v: View, c: Card): boolean {
  const mine = handIn(v, suitOf(c));
  const low = Math.min(...mine);
  for (let x = low + 1; x < c; x++) if (!mine.includes(x) && !v.done.has(x)) return false;
  return true;
}
const sameSuit = (cards: readonly Card[]) => cards.length > 0 && cards.every(c => suitOf(c) === suitOf(cards[0]));

type Recogniser = (v: View, answer: readonly Card[], stats: readonly ProblemStat[]) => boolean;

/**
 * Hold-up (notrump): the defenders lead their suit and you could win the
 * trick, but play low — so the defender who gains the lead later has none
 * left to return. Only for suits where the defenders hold the length.
 */
const holdUp: Recogniser = (v, answer) => {
  if (v.trump !== NT || (v.pos !== 1 && v.pos !== 3) || (v.p.current.leader & 1) === (v.seat & 1)) return false;
  const s = v.led;
  if (!answer.every(c => suitOf(c) === s)) return false;
  if (dealtIn(v, v.seat, s) + dealtIn(v, v.partner, s) > 7) return false;
  const led = v.p.current.cards[0];
  if (v.pos === 3) return theyWin(v) && handIn(v, s).some(c => winsNow(v, c)) && answer.every(c => !winsNow(v, c));
  // second hand (dummy before declarer): could take it with a top card, plays below the card led, and partner can't win it either
  return handIn(v, s).some(c => c > led && isTop(v, c)) && answer.every(c => c < led) && partnerIn(v, s).every(c => c < led);
};

/**
 * Ducking in your own long suit: give up a trick you could win (or must
 * lose anyway) while the long hand keeps its high cards, so they still
 * reach the long cards.
 */
const duck: Recogniser = (v, answer) => {
  if (!sameSuit(answer)) return false;
  const s = suitOf(answer[0]);
  if (s === v.trump || dealtIn(v, v.seat, s) + dealtIn(v, v.partner, s) < 7) return false;
  if (!answer.every(c => lowest(v, c) && !finesseCard(v, c))) return false;
  if (v.pos === 0) {
    // leading low from the hand with the top cards, partner unable to win the trick
    return handIn(v, s).some(c => isTop(v, c)) && answer.every(c => !isTop(v, c)) && partnerIn(v, s).every(c => !isTop(v, c));
  }
  if (v.pos !== 2) return false; // the defenders' suit is not "your long suit"
  const cur = v.p.current;
  const lead = cur.cards[0];
  // letting partner's honour run is a finesse, not a duck
  if (trickWinner(cur.cards, cur.leader, v.p.trump) === v.partner && finesseCard(v, lead)) return false;
  return handIn(v, s).some(c => winsNow(v, c) && isTop(v, c)) && answer.every(c => !winsNow(v, c) || !isTop(v, c));
};

/**
 * The finesse: second or third hand, play a card that wins only if the
 * missing honour is with the defender who has already played (the queen
 * from A Q, the king led towards) — or let partner's honour run.
 */
const finesse: Recogniser = (v, answer) => {
  if ((v.pos !== 1 && v.pos !== 2) || !answer.every(c => suitOf(c) === v.led)) return false;
  const s = v.led;
  if (shownOut(v, lhoOf(v.seat), s)) return false; // the defender still to play has none: nothing to finesse against
  const cur = v.p.current;
  const lead = cur.cards[0];
  // covering an honour led by a defender is a different idea
  if (v.pos === 1 && rankOf(lead) >= 10 && answer.some(c => c > lead && rankOf(c) >= 11)) return false;
  if (answer.every(c => winsNow(v, c) && finesseCard(v, c))) return true;
  // partner's honour led and still winning: run it, though you could overtake
  return v.pos === 2 && trickWinner(cur.cards, cur.leader, v.p.trump) === v.partner && finesseCard(v, lead)
    && handIn(v, s).some(c => winsNow(v, c)) && answer.every(c => !winsNow(v, c));
};

/**
 * Unblocking: play the high card of the shorter hand first (cash it, or
 * overtake), keeping a low card to reach the long hand.
 */
const unblock: Recogniser = (v, answer) => {
  if (!sameSuit(answer)) return false;
  const s = suitOf(answer[0]);
  if (s === v.trump || !answer.every(c => isTop(v, c))) return false;
  const legal = v.p.legal();
  if (!legal.some(c => suitOf(c) === s && !answer.includes(c) && answer.every(a => c < a))) return false;
  const partnerCard = v.p.current.cards.find((c, i) => ((v.p.current.leader + i) & 3) === v.partner);
  const partnerLen = partnerIn(v, s).length + (partnerCard !== undefined && suitOf(partnerCard) === s ? 1 : 0);
  return handIn(v, s).length < partnerLen && partnerLen >= 3;
};

/** Ruffing in the short hand: lead a loser of a suit the hand with fewer trumps is void in. */
const ruffShort: Recogniser = (v, answer) => {
  if (v.trump === NT || v.pos !== 0 || !sameSuit(answer)) return false;
  const s = suitOf(answer[0]);
  if (s === v.trump || partnerIn(v, s).length > 0 || partnerIn(v, v.trump).length === 0) return false;
  if (dealtIn(v, v.partner, v.trump) >= dealtIn(v, v.seat, v.trump)) return false;
  return answer.every(c => !isTop(v, c));
};

/**
 * Drawing trumps while the defenders still have some: any trump does it (when
 * only one trump is right, the question is which card, not whether to draw).
 */
const drawTrumps: Recogniser = (v, answer) =>
  v.trump !== NT && v.pos === 0 && outstanding(v, v.trump).length > 0 && answer.every(c => suitOf(c) === v.trump)
  && handIn(v, v.trump).every(c => answer.includes(c));

/**
 * A safety play: the right card takes fewer tricks on average than another
 * card but makes the contract clearly more often — an overtrick given up to
 * guard the contract.
 */
const safety: Recogniser = (_v, answer, stats) => {
  const best = stats.find(s => answer.includes(s.c));
  return !!best && stats.some(o => !answer.includes(o.c) && o.t >= best.t + SAFETY_TRICKS - 1e-9 && best.s - o.s >= SAFETY_SUCCESS - 1e-9);
};
/** How many more tricks the greedy card must average, and how much less often it must make, for a safety play. */
export const SAFETY_TRICKS = 0.2;
export const SAFETY_SUCCESS = 0.15;

const RECOGNISERS: Record<TechniqueId, Recogniser> = { finesse, holdUp, duck, unblock, drawTrumps, ruffShort, safety };
/** When the right card fits more than one description, the most specific one names it. */
const PRIORITY: TechniqueId[] = ['holdUp', 'unblock', 'duck', 'finesse', 'safety', 'ruffShort', 'drawTrumps'];

/**
 * The technique the right cards are, for declarer's side to play (null if
 * none). Every right card must fit the same technique. Only what declarer
 * can see is used: the two hands, the cards played and the simulation's
 * numbers for each card.
 */
export function recogniseTechnique(p: PlayState, answer: readonly Card[], stats: readonly ProblemStat[]): TechniqueId | null {
  if (!answer.length || !p.openingLeadMade || (p.toPlay & 1) !== (p.contract.declarer & 1)) return null;
  const v = viewOf(p);
  return PRIORITY.find(id => RECOGNISERS[id](v, answer, stats)) ?? null;
}

// ---------------------------------------------------------------------------
// Finding deals

/**
 * Like a problem, but the alternatives to a technique are usually natural
 * plays (taking the trick, cashing the ace), so a large gap is no reason to
 * reject a position.
 */
export const TECHNIQUE_RULES: AcceptRules = { ...DEFAULT_RULES, blunderSuccess: 2, blunderTricks: 99 };
/** The technique must give the contract a fair chance: a deal where even the right play usually fails teaches little. */
export const MIN_SUCCESS = 0.5;

export interface TechniqueGenOptions extends Omit<GenOptions, 'onVerdict'> {
  /** The technique wanted (null or absent: any). */
  want?: TechniqueId | null;
  /** Every position simulated in depth (for tuning and tests). */
  onTested?: (info: { trick: number; play: Card[]; decision: Decision; ok: boolean; reason?: string; technique: TechniqueId | null }) => void;
}

const r3 = (x: number) => Math.round(x * 1000) / 1000;
const statsOf = (d: Pick<Decision, 'stats'>): ProblemStat[] => rankStats(d.stats).map(s => ({ c: s.card, t: r3(s.tricks), s: r3(s.success) }));

/**
 * Look for a technique deal on one deal (chosen by `seed`): resolves with
 * null when no technique decides this deal in the first tricks.
 */
export async function generateTechnique(seed: number, o: TechniqueGenOptions = {}): Promise<TechniqueDeal | null> {
  const cfg = {
    screenSamples: o.screenSamples ?? 16,
    extraSamples: o.extraSamples ?? 32,
    maxTricks: o.maxTricks ?? 6,
    priority: o.priority ?? 1,
    screenMs: o.screenMs ?? 4000,
    extraMs: o.extraMs ?? 8000,
    botMs: o.botMs ?? 1500,
    dealBudgetMs: o.dealBudgetMs ?? 2500,
    rules: o.rules ?? TECHNIQUE_RULES,
  };
  const want = o.want ?? null;
  const rnd = mulberry32(seed);
  const themes = want ? TECHNIQUE_INFO[want].themes : ANY_THEMES;
  const theme = themes[Math.floor(rnd() * themes.length)];
  const board = 1 + Math.floor(rnd() * 16);
  const dealer = boardDealer(board);
  const vul = boardVulnerability(board);
  const progress = (stage: GenProgress['stage'], trick: number, done = 0, total = 0) => o.onProgress?.({ kind: 'declarer', stage, trick, done, total, tested: 0 });
  const stop = () => !!o.shouldStop?.();

  progress('dealing', 0);
  const dealt = await dealForTheme(theme, dealer, vul, (rnd() * 2 ** 31) | 0, cfg.dealBudgetMs);
  if (!dealt.found || stop()) return null;
  const deal = dealt.deal;
  const { auction, records } = systemAuction(deal, dealer, vul);
  const contract = auction.contract();
  if (!contract || !humanSeat(contract, contract.declarer)) return null;
  const shown = readAuction(auction, vul).shown;
  const p = new PlayState(contract, deal);
  const played: Card[] = [];
  const seedNext = () => (rnd() * 2 ** 31) | 0;

  const simulate = async (samples: number, timeMs: number, minSamples: number, stage: GenProgress['stage'] = 'testing') => {
    await o.pause?.();
    if (stop()) return null;
    progress(stage, p.tricks.length, 0, samples);
    return decideCard(knowledgeOf(p, vul, shown), {
      samples, timeMs, minSamples, priority: cfg.priority, seed: seedNext(),
      onProgress: (done, total) => progress(stage, p.tricks.length, done, total),
    });
  };
  const fits = (t: TechniqueId | null) => t !== null && (!want || t === want);

  while (!p.isOver && p.tricks.length <= cfg.maxTricks) {
    if (stop()) return null;
    const seat = p.toPlay;
    const legal = p.legal();
    let card: Card;
    if (!p.openingLeadMade) {
      card = openingLeadChoices(p.hands[seat], contract, records, seat)[0].card;
    } else if (legal.length === 1) {
      card = legal[0];
    } else if (humanSeat(contract, seat)) {
      // declarer's decision: the quick simulation both screens it and chooses the card to play on
      const screen = await simulate(cfg.screenSamples, cfg.screenMs, Math.min(cfg.screenSamples, 8));
      if (!screen) return null;
      card = screen.card;
      const loose = screen.samples >= 8 ? acceptProblem(screen, screenRules(cfg.rules)) : null;
      if (loose?.ok && fits(recogniseTechnique(p, loose.answer, statsOf(screen)))) {
        const extra = await simulate(cfg.extraSamples, cfg.extraMs, Math.min(cfg.extraSamples, 8));
        if (!extra) return null;
        const d = mergeDecisions(screen, extra);
        card = d.card;
        const v = acceptProblem(d, cfg.rules);
        const stats = statsOf(d);
        let technique: TechniqueId | null = null;
        let reason: string | undefined;
        if (!v.ok) reason = v.reason;
        else if (trivialAnswer(p, v.answer)) reason = 'trivial';
        else if (!decisive({ stats, answer: v.answer })) reason = 'overtricks';
        else if (stats[0].s < MIN_SUCCESS) reason = 'hopeless';
        else {
          technique = recogniseTechnique(p, v.answer, stats);
          if (!fits(technique)) reason = 'technique';
        }
        o.onTested?.({ trick: p.tricks.length, play: [...played], decision: d, ok: !reason, reason, technique });
        if (!reason && v.ok && technique) {
          const now = o.now?.() ?? Date.now();
          return {
            v: 1,
            id: `${now.toString(36)}-${(seed >>> 0).toString(36)}`,
            kind: 'declarer',
            theme,
            board,
            dealer,
            vul,
            deal: encodeDeal(deal),
            calls: [...auction.calls],
            play: [...played],
            seat,
            skill: 'play.declarer',
            n: d.samples,
            stats,
            answer: v.answer,
            created: now,
            technique,
          };
        }
      }
    } else {
      const d = await simulate(cfg.screenSamples, cfg.botMs, 6, 'playing');
      if (!d) return null;
      card = d.card;
    }
    p.play(card);
    played.push(card);
  }
  return null;
}

/** Does a stored technique deal still describe a valid position? */
export function validTechnique(x: unknown): x is TechniqueDeal {
  return validProblem(x) && x.kind === 'declarer' && isTechnique((x as TechniqueDeal).technique);
}

// ---------------------------------------------------------------------------
// Following the walk at the table

/** The contract of a stored deal. */
export function techniqueContract(td: Pick<Problem, 'dealer' | 'calls'>): Contract {
  return new Auction(td.dealer, [...td.calls]).contract()!;
}

/**
 * Can `a` be played instead of `b` from this seat with nothing changed: both
 * in the hand, the same suit, and every card between them in that hand or
 * played in an earlier trick?
 */
export function interchangeable(p: PlayState, seat: Seat, a: Card, b: Card): boolean {
  if (suitOf(a) !== suitOf(b)) return false;
  const hand = new Set(p.hands[seat]);
  if (!hand.has(a) || !hand.has(b)) return false;
  const done = new Set(p.completedTricks.flatMap(t => t.cards));
  for (let c = Math.min(a, b) + 1; c < Math.max(a, b); c++) if (!hand.has(c) && !done.has(c)) return false;
  return true;
}

export interface ScriptFollow {
  /** Every card so far followed the walk (or was interchangeable with its card). */
  on: boolean;
  /** Cards that followed it. */
  at: number;
  /** A card in your hands → the walk's card it stands for (they differ after interchangeable cards were played). */
  toScript: (c: Card) => Card;
  /** The walk's card → the card that stands for it in your hands. */
  toActual: (c: Card) => Card;
}

/**
 * Compare the play so far with the walk's play up to the key decision. Your
 * side may play an interchangeable card instead of the walk's (the 3 for the
 * 2): later cards are then translated.
 */
export function followScript(td: Pick<Problem, 'deal' | 'dealer' | 'calls' | 'play'>, played: readonly Card[]): ScriptFollow {
  const contract = techniqueContract(td);
  const p = new PlayState(contract, decodeDeal(td.deal));
  const toS = new Map<Card, Card>();
  const toA = new Map<Card, Card>();
  const toScript = (c: Card) => toS.get(c) ?? c;
  const toActual = (c: Card) => toA.get(c) ?? c;
  let at = 0;
  for (const c of played) {
    if (at >= td.play.length) break;
    const seat = p.toPlay;
    const want = toActual(td.play[at]);
    if (c !== want) {
      if (!humanSeat(contract, seat) || !interchangeable(p, seat, c, want)) return { on: false, at, toScript, toActual };
      // c now stands for the walk's card, and `want` for what c stood for
      const sc = toScript(c);
      const sw = td.play[at];
      toS.set(c, sw);
      toS.set(want, sc);
      toA.set(sw, c);
      toA.set(sc, want);
    }
    p.play(c);
    at++;
  }
  return { on: true, at, toScript, toActual };
}

/** The bots' card while the play follows the walk (null once it doesn't, or after the key moment). */
export function scriptedCard(td: TechniqueDeal, played: readonly Card[]): Card | null {
  const f = followScript(td, played);
  if (!f.on || f.at !== played.length || f.at >= td.play.length) return null;
  return f.toActual(td.play[f.at]);
}

export type KeyStatus = 'ahead' | 'found' | 'missed' | 'offScript' | 'auto';

export interface TechniqueOutcome {
  /** ahead: the key moment is still to come; offScript: the play went another way before it; auto: the computer played that card (claim, play-out). */
  status: KeyStatus;
  /** Index of the key card in the play. */
  index: number;
  /** Your card at the key moment, and the walk's card it stands for. */
  card?: Card;
  scripted?: Card;
  /** The right cards, as they are in your hands. */
  best: Card[];
  /** The simulation at the key moment, best first, in the cards of your hands. */
  stats: ProblemStat[];
}

/** How the play went at the key moment. `human[i]`: card i was chosen by you. */
export function techniqueOutcome(td: TechniqueDeal, played: readonly Card[], human: readonly boolean[]): TechniqueOutcome {
  const f = followScript(td, played);
  const index = td.play.length;
  const best = td.answer.map(f.toActual);
  const stats = td.stats.map(s => ({ ...s, c: f.toActual(s.c) }));
  if (!f.on) return { status: 'offScript', index, best, stats };
  if (played.length <= index) return { status: 'ahead', index, best, stats };
  const card = played[index];
  const scripted = f.toScript(card);
  if (!human[index]) return { status: 'auto', index, card, scripted, best, stats };
  return { status: td.answer.includes(scripted) ? 'found' : 'missed', index, card, scripted, best, stats };
}

/** The stored simulation as a decision for the key card (in your hands' cards), so the review uses its numbers. */
export function keyDecision(td: TechniqueDeal, played: readonly Card[]): Decision {
  const f = followScript(td, played);
  const stats = td.stats.map(s => ({ card: f.toActual(s.c), tricks: s.t, success: s.s, score: 0, n: td.n }));
  const equal = td.answer.map(f.toActual);
  return { card: equal[0], stats, samples: td.n, equal };
}

/** A missed key moment as a review item: the position comes back in the Review tab. */
export function techniqueReviewItem(td: TechniqueDeal, card: Card, now = Date.now()): ReviewItem {
  return { ...problemReviewItem(td, card, now), id: `technique-${td.id}:c:${td.play.length}`, source: 'technique' };
}

// ---------------------------------------------------------------------------
// The bank of ready deals (browser storage, best effort)

const KEY = 'bridge-tutor.techniques.v1';
/** Ready deals kept per technique. */
export const TECH_BANK_SIZE = 3;
/** "Any technique": generate until this many are ready in all. */
export const ANY_TARGET = 10;

export interface TechScore {
  done: number;
  right: number;
}

interface TechStore {
  v: 1;
  bank: TechniqueDeal[];
  score: Partial<Record<TechniqueId, TechScore>>;
}

function readStore(): TechStore {
  try {
    const raw = localStorage.getItem(KEY);
    // a new player starts with ready-made deals
    if (raw === null) return { v: 1, bank: STARTER_TECHNIQUES.map(t => ({ ...t, created: Date.now() })), score: {} };
    const s = JSON.parse(raw) as TechStore;
    if (s && s.v === 1 && Array.isArray(s.bank)) return { v: 1, bank: s.bank.filter(validTechnique), score: s.score && typeof s.score === 'object' ? s.score : {} };
  } catch {
    /* fall through */
  }
  return { v: 1, bank: [], score: {} };
}

function writeStore(s: TechStore) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* storage full or unavailable: the deals still work for this visit */
  }
}

export function loadTechBank(): TechniqueDeal[] {
  return readStore().bank;
}

export function techCounts(bank: readonly TechniqueDeal[] = loadTechBank()): Record<TechniqueId, number> {
  const out = Object.fromEntries(TECHNIQUES.map(t => [t, 0])) as Record<TechniqueId, number>;
  for (const d of bank) out[d.technique]++;
  return out;
}

export function addTechnique(td: TechniqueDeal) {
  const s = readStore();
  if (s.bank.some(x => x.id === td.id)) return;
  s.bank.push(td);
  const mine = s.bank.filter(x => x.technique === td.technique);
  // keep the newest of each technique
  if (mine.length > TECH_BANK_SIZE) {
    const drop = new Set(mine.slice(0, mine.length - TECH_BANK_SIZE).map(x => x.id));
    s.bank = s.bank.filter(x => !drop.has(x.id));
  }
  writeStore(s);
}

export function removeTechnique(id: string) {
  const s = readStore();
  const next = s.bank.filter(x => x.id !== id);
  if (next.length !== s.bank.length) writeStore({ ...s, bank: next });
}

/** The next deal: of the technique asked for, or (any) of the technique after `last` that has one ready. */
export function pickTechnique(filter: TechniqueId | 'any', last: TechniqueId | null = null, bank: readonly TechniqueDeal[] = loadTechBank()): TechniqueDeal | null {
  if (filter !== 'any') return bank.find(d => d.technique === filter) ?? null;
  const start = last ? TECHNIQUES.indexOf(last) + 1 : 0;
  for (let i = 0; i < TECHNIQUES.length; i++) {
    const t = TECHNIQUES[(start + i) % TECHNIQUES.length];
    const d = bank.find(x => x.technique === t);
    if (d) return d;
  }
  return null;
}

export function loadTechScore(): Record<TechniqueId, TechScore> {
  const s = readStore().score;
  return Object.fromEntries(TECHNIQUES.map(t => [t, { done: s[t]?.done ?? 0, right: s[t]?.right ?? 0 }])) as Record<TechniqueId, TechScore>;
}

export function recordTechScore(t: TechniqueId, right: boolean) {
  const s = readStore();
  const sc = (s.score[t] ??= { done: 0, right: 0 });
  sc.done++;
  if (right) sc.right++;
  writeStore(s);
}

// ---------------------------------------------------------------------------
// Background generation

export interface TechFactoryControl {
  /** Keep generating while this returns true. */
  active: () => boolean;
  /** A hand is being played at the table right now: wait. */
  busy?: () => boolean;
  /** The technique wanted first ('any': whatever comes). */
  prefer: () => TechniqueId | 'any';
}

/** Fills the bank in the background, one deal at a time. */
export class TechniqueFactory {
  running = false;
  progress: GenProgress | null = null;
  tried = 0;
  found = 0;
  private ctl: TechFactoryControl | null = null;
  private listeners = new Set<(event: 'progress' | 'found') => void>();

  onChange(fn: (event: 'progress' | 'found') => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit(event: 'progress' | 'found') {
    for (const fn of this.listeners) fn(event);
  }

  /** What to look for next: a technique, null for any, or undefined when enough are ready. */
  nextWant(prefer: TechniqueId | 'any', counts = techCounts()): TechniqueId | null | undefined {
    if (prefer !== 'any') return counts[prefer] < TECH_BANK_SIZE ? prefer : undefined;
    const total = TECHNIQUES.reduce((t, k) => t + counts[k], 0);
    return total < ANY_TARGET ? null : undefined;
  }

  start(ctl: TechFactoryControl) {
    this.ctl = ctl;
    if (this.running) return;
    this.running = true;
    void this.loop();
  }

  private async loop() {
    await new Promise(r => setTimeout(r, 30));
    let failures = 0;
    try {
      for (;;) {
        const ctl = this.ctl;
        if (!ctl?.active()) break;
        const want = this.nextWant(ctl.prefer());
        if (want === undefined) break;
        await new Promise(r => setTimeout(r, 0));
        this.tried++;
        const seed = (Math.random() * 2 ** 31) | 0;
        let td: TechniqueDeal | null = null;
        try {
          td = await generateTechnique(seed, {
            want,
            shouldStop: () => !this.ctl?.active(),
            pause: () => this.waitIdle(),
            onProgress: p => {
              this.progress = p;
              this.emit('progress');
            },
          });
          failures = 0;
        } catch {
          if (++failures >= 3) break;
        }
        if (td) {
          this.found++;
          addTechnique(td);
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

let shared: TechniqueFactory | null = null;
export function techniqueFactory(): TechniqueFactory {
  if (!shared) shared = new TechniqueFactory();
  return shared;
}
