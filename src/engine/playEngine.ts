// Card-play decisions by simulation: deal the unseen cards many times in ways
// consistent with the auction and the play so far, solve each layout
// double-dummy, and pick the card that does best on average.

import { type Card, type Seat, type Vulnerability, suitOf, rankOf, partnerOf, isVulnerable, mulberry32 } from '../core/cards';
import type { Contract } from '../core/auction';
import type { Trick } from '../core/play';
import { scoreContract } from '../core/scoring';
import type { Shown } from '../bidding/types';
import { sampleLayouts, type SampleSpec } from './sampler';
import { masksOf, type DDPosition } from './dds';
import { ddPool } from './pool';

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
}

export interface DecideOptions {
  samples?: number;
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
  return {
    known,
    hidden,
    counts: k.hands.map(h => h.length),
    played,
    voids,
    shown: [0, 1, 2, 3].map(s => (knownSeats.has(s) ? null : k.shown[s])),
    unknown,
  };
}

export function legalFor(hand: readonly Card[], trick: readonly Card[]): Card[] {
  if (!trick.length) return [...hand];
  const led = suitOf(trick[0]);
  const f = hand.filter(c => suitOf(c) === led);
  return f.length ? f : [...hand];
}

/** Choose among equally good cards the way a careful player would (lowest; signal-aware for defenders). */
export function tieBreak(cards: Card[], k: PlayKnowledge): Card {
  if (cards.length === 1) return cards[0];
  const cur = k.tricks[k.tricks.length - 1];
  const sorted = [...cards].sort((a, b) => rankOf(a) - rankOf(b));
  const defender = (k.toPlay & 1) !== (k.contract.declarer & 1);
  if (cur.cards.length && defender) {
    const led = suitOf(cur.cards[0]);
    const leader = cur.leader;
    const partnerLed = leader === partnerOf(k.toPlay);
    const sameSuit = sorted.filter(c => suitOf(c) === led);
    if (sameSuit.length === sorted.length && partnerLed) {
      // attitude: encourage with an honour sequence in the suit, otherwise low
      const hand = k.hands[k.toPlay].filter(c => suitOf(c) === led).map(rankOf);
      const likes = hand.some(r => r >= 12) && hand.length >= 2;
      return likes ? sorted[sorted.length - 1] : sorted[0];
    }
  }
  return sorted[0];
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
    const finish = () => {
      if (finished) return;
      finished = true;
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
    const c = tieBreak(legal, k);
    return { card: c, stats: legal.map(card => ({ card, tricks: 0, success: 0, score: 0, n: 0 })), samples: 0, equal: legal };
  }
  stats.sort((a, b) => b.score - a.score || b.tricks - a.tricks);
  const best = stats[0];
  const equal = stats.filter(s => best.score - s.score < 1e-6 && best.tricks - s.tricks < 1e-6).map(s => s.card);
  const card = tieBreak(equal, k);
  stats.sort((a, b) => (a.card === card ? -1 : b.card === card ? 1 : b.score - a.score || b.tricks - a.tricks));
  return { card, stats, samples: done, equal };
}

/** Double-dummy values of every legal card in the actual deal (hindsight; used in the review). */
export async function ddCardValues(hands: Card[][], trump: number, leader: number, trick: Card[], priority = 0, group = 0): Promise<{ card: Card; nsTricks: number }[]> {
  const res = await ddPool().run({ kind: 'analyze', pos: { masks: masksOf(hands), trump, leader, trick: [...trick] } }, priority, group);
  return res.kind === 'analyze' ? res.moves : [];
}

export function newGroup(): number {
  return groupCounter++;
}

export async function ddTableAsync(hands: Card[][], priority = 0, group = 0): Promise<number[][] | null> {
  // one strain per job so the pool can run them in parallel
  const rows = await Promise.all([0, 1, 2, 3, 4].map(async strain => {
    const row: number[] = [];
    for (let decl = 0; decl < 4; decl++) {
      const res = await ddPool().run({ kind: 'value', pos: { masks: masksOf(hands), trump: strain, leader: (decl + 1) & 3, trick: [] } }, priority, group);
      if (res.kind !== 'value') return null;
      row.push((decl & 1) === 0 ? res.value : 13 - res.value);
    }
    return row;
  }));
  return rows.some(r => r === null) ? null : (rows as number[][]);
}
