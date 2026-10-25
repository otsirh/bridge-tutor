// Card-play decisions by simulation: deal the unseen cards many times in ways
// consistent with the auction and the play so far, solve each layout
// double-dummy, and pick the card that does best on average.

import { type Card, type Seat, type Vulnerability, suitOf, rankOf, partnerOf, lhoOf, rhoOf, isVulnerable, mulberry32 } from '../core/cards';
import type { Contract } from '../core/auction';
import type { Trick } from '../core/play';
import { scoreContract } from '../core/scoring';
import type { Shown } from '../bidding/types';
import { sampleLayouts, type SampleSpec } from './sampler';
import { masksOf, type DDPosition } from './dds';
import { ddPool } from './pool';
import { defenderChoice, signalFacts, type Moment, type Signal } from './signalling';

export interface PlayKnowledge {
  viewer: Seat; // whose information is used (declarer also plays dummy's cards)
  toPlay: Seat;
  contract: Contract;
  vul: Vulnerability;
  hands: Card[][]; // actual remaining hands — only the viewer's visible ones are read
  tricks: Trick[]; // all tricks so far, the last one possibly in progress
  dummyVisible: boolean;
  shown: Shown[]; // what each seat showed in the auction
}

export interface CardStat {
  card: Card;
  tricks: number; // average tricks for the side to play
  success: number; // fraction of layouts where the contract makes (declarer side) / fails (defence)
  score: number; // average score for the side to play
  n: number;
}

export interface Decision {
  card: Card;
  stats: CardStat[]; // best first
  samples: number;
  equal: Card[]; // cards as good as the chosen one
  signal?: Signal | null; // the signal the chosen card gives, when a defender picked it as one
}

export interface DecideOptions {
  samples?: number;
  /** Stop once this time has passed and minSamples layouts are solved. */
  timeMs?: number;
  minSamples?: number;
  priority?: number;
  seed?: number;
  onProgress?: (done: number, total: number) => void;
}

let groupCounter = 1;

export function knowledgeSpec(k: PlayKnowledge): SampleSpec {
  const dummy = partnerOf(k.contract.declarer);
  const knownSeats = new Set<number>([k.viewer]);
  if (k.dummyVisible) knownSeats.add(dummy);
  const played: Card[][] = [[], [], [], []];
  const voids = [0, 1, 2, 3].map(() => [false, false, false, false]);
  for (const t of k.tricks) {
    t.cards.forEach((c, i) => {
      const seat = (t.leader + i) & 3;
      played[seat].push(c);
      if (i > 0 && suitOf(c) !== suitOf(t.cards[0])) voids[seat][suitOf(t.cards[0])] = true;
    });
  }
  const known = [0, 1, 2, 3].map(s => (knownSeats.has(s) ? [...k.hands[s]] : []));
  const seen = new Set<number>();
  known.flat().forEach(c => seen.add(c));
  played.flat().forEach(c => seen.add(c));
  const unknown: Card[] = [];
  for (let c = 0; c < 52; c++) if (!seen.has(c)) unknown.push(c);
  const hidden = [0, 1, 2, 3].filter(s => !knownSeats.has(s));
  // a defender reads partner's signals; declarer reads the defenders' count, trusting it less
  const declarer = k.contract.declarer;
  const defending = (k.viewer & 1) !== (declarer & 1);
  const signallers = defending ? [partnerOf(k.viewer)] : [lhoOf(declarer), rhoOf(declarer)];
  const signals = signalFacts(k.tricks, declarer, k.contract.strain, signallers, defending ? undefined : ['count']).map(fact => ({ fact, weak: !defending }));
  return {
    known,
    hidden,
    counts: k.hands.map(h => h.length),
    played,
    voids,
    shown: [0, 1, 2, 3].map(s => (knownSeats.has(s) ? null : k.shown[s])),
    unknown,
    signals,
  };
}

export function legalFor(hand: readonly Card[], trick: readonly Card[]): Card[] {
  if (!trick.length) return [...hand];
  const led = suitOf(trick[0]);
  const f = hand.filter(c => suitOf(c) === led);
  return f.length ? f : [...hand];
}

/** The moment the player to move is at. */
function momentOf(k: PlayKnowledge): Moment {
  const cur = k.tricks[k.tricks.length - 1];
  return { seat: k.toPlay, declarer: k.contract.declarer, trump: k.contract.strain, leader: cur.leader, trick: cur.cards, earlier: k.tricks.slice(0, -1) };
}

/**
 * Choose among equally good cards the way a careful player would: a defender
 * gives a standard signal when one is open and never discards a false one
 * (signalling.ts); otherwise the lowest card. Only cards the simulation rates equal are considered, so a
 * signal never costs a trick.
 */
export function pickCard(cards: Card[], k: PlayKnowledge): { card: Card; signal: Signal | null } {
  if (cards.length === 1) return { card: cards[0], signal: null };
  const choice = defenderChoice(cards, k.hands[k.toPlay], momentOf(k));
  if (choice) return choice;
  return { card: [...cards].sort((a, b) => rankOf(a) - rankOf(b))[0], signal: null };
}

export function tieBreak(cards: Card[], k: PlayKnowledge): Card {
  return pickCard(cards, k).card;
}

/** Simulate and pick a card. */
export async function decideCard(k: PlayKnowledge, opts: DecideOptions = {}): Promise<Decision> {
  const cur = k.tricks[k.tricks.length - 1];
  const legal = legalFor(k.hands[k.toPlay], cur.cards);
  if (legal.length === 1) return { card: legal[0], stats: [{ card: legal[0], tricks: 0, success: 0, score: 0, n: 0 }], samples: 0, equal: legal };

  const target = opts.samples ?? 24;
  const minSamples = Math.min(target, opts.minSamples ?? 8);
  const timeMs = opts.timeMs ?? 2500;
  const spec = knowledgeSpec(k);
  const rnd = mulberry32(opts.seed ?? (Math.random() * 2 ** 31) | 0);
  const layouts = sampleLayouts(spec, target, rnd);
  const pool = ddPool();
  const group = groupCounter++;
  const declSide = k.contract.declarer & 1;
  const mySide = k.toPlay & 1;
  const declVul = isVulnerable(k.vul, k.contract.declarer);
  const need = k.contract.level + 6;
  let nsSoFar = 0;
  for (const t of k.tricks) if (t.winner !== undefined && (t.winner & 1) === 0) nsSoFar++;

  const acc = new Map<Card, { tricks: number; success: number; score: number; n: number }>();
  for (const c of legal) acc.set(c, { tricks: 0, success: 0, score: 0, n: 0 });
  let done = 0;
  const started = performance.now();

  await new Promise<void>(resolve => {
    let finished = false;
    // past the time budget, stop once minSamples are in; past the hard deadline, stop regardless
    // (a stuck position must never hold up a bot's card)
    // (timers longer than 2^31 − 1 ms fire at once, so a practically unlimited budget gets no deadline)
    const limit = Math.max(3 * timeMs, timeMs + 5000);
    const deadline = limit < 2 ** 31 - 1 ? setTimeout(() => finish(), limit) : undefined;
    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(deadline);
      pool.cancelGroup(group);
      resolve();
    };
    if (!layouts.length) finish();
    const timer = setTimeout(() => {
      if (done >= minSamples) finish();
    }, timeMs);
    let outstanding = layouts.length;
    for (const lay of layouts) {
      const pos: DDPosition = { masks: masksOf(lay.hands), trump: k.contract.strain, leader: cur.leader, trick: [...cur.cards] };
      pool.run({ kind: 'analyze', pos }, opts.priority ?? 2, group).then(res => {
        outstanding--;
        if (!finished && res.kind === 'analyze') {
          done++;
          for (const mv of res.moves) {
            const a = acc.get(mv.card);
            if (!a) continue;
            const ns = nsSoFar + mv.nsTricks;
            const declTricks = declSide === 0 ? ns : 13 - ns;
            const mine = mySide === 0 ? ns : 13 - ns;
            const sc = scoreContract(k.contract, declTricks, declVul);
            a.tricks += mine;
            a.score += mySide === declSide ? sc : -sc;
            a.success += (declTricks >= need) === (mySide === declSide) ? 1 : 0;
            a.n++;
          }
          opts.onProgress?.(done, layouts.length);
        }
        if (outstanding === 0 || (done >= layouts.length)) {
          clearTimeout(timer);
          finish();
        } else if (done >= minSamples && performance.now() - started > timeMs) {
          clearTimeout(timer);
          finish();
        }
      });
    }
  });

  const stats: CardStat[] = [...acc.entries()]
    .filter(([, a]) => a.n > 0)
    .map(([card, a]) => ({ card, tricks: a.tricks / a.n, success: a.success / a.n, score: a.score / a.n, n: a.n }));
  if (!stats.length) {
    const pick = pickCard(legal, k);
    return { card: pick.card, stats: legal.map(card => ({ card, tricks: 0, success: 0, score: 0, n: 0 })), samples: 0, equal: legal, signal: pick.signal };
  }
  stats.sort((a, b) => b.score - a.score || b.tricks - a.tricks);
  const best = stats[0];
  const equal = stats.filter(s => best.score - s.score < 1e-6 && best.tricks - s.tricks < 1e-6).map(s => s.card);
  const { card, signal } = pickCard(equal, k);
  stats.sort((a, b) => (a.card === card ? -1 : b.card === card ? 1 : b.score - a.score || b.tricks - a.tricks));
  return { card, stats, samples: done, equal, signal };
}

/** Double-dummy values of every legal card in the actual deal (hindsight; used in the review). */
export async function ddCardValues(hands: Card[][], trump: number, leader: number, trick: Card[], priority = 0, group = 0): Promise<{ card: Card; nsTricks: number }[]> {
  const res = await ddPool().run({ kind: 'analyze', pos: { masks: masksOf(hands), trump, leader, trick: [...trick] } }, priority, group);
  return res.kind === 'analyze' ? res.moves : [];
}

export function newGroup(): number {
  return groupCounter++;
}

/**
 * How long one contract of the double-dummy table may take. The hardest deals take the solver
 * several seconds on a fast computer, so a slow phone needs more than the pool's usual limit;
 * without the table the review has no par and no analysis.
 */
const TABLE_JOB_LIMIT_MS = 60_000;

export async function ddTableAsync(hands: Card[][], priority = 0, group = 0): Promise<number[][] | null> {
  // one job per contract, in ten chains the pool can run in parallel: per strain, North then South
  // declaring, and East then West, each guessing from the one before (usually within a trick)
  const table = [0, 1, 2, 3, 4].map(() => [0, 0, 0, 0]);
  const chains = [0, 1, 2, 3, 4].flatMap(strain => [0, 1].map(async first => {
    let guess: number | undefined;
    for (const decl of [first, first + 2]) {
      const res = await ddPool().run({ kind: 'value', pos: { masks: masksOf(hands), trump: strain, leader: (decl + 1) & 3, trick: [] }, guess }, priority, group, TABLE_JOB_LIMIT_MS);
      if (res.kind !== 'value') return false;
      guess = res.value;
      table[strain][decl] = (decl & 1) === 0 ? res.value : 13 - res.value;
    }
    return true;
  }));
  return (await Promise.all(chains)).every(Boolean) ? table : null;
}
