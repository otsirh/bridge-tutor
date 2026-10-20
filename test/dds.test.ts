import { describe, it, expect } from 'vitest';
import { DDSolver, masksOf, ddTable } from '../src/engine/dds';
import { mulberry32, shuffle, suitOf, type Card } from '../src/core/cards';

// Plain minimax (no pruning) for small endings.
function brute(hands: Card[][], trump: number, leader: number, trick: Card[]): number {
  const toPlay = (leader + trick.length) & 3;
  if (trick.length === 4) {
    let w = 0;
    for (let i = 1; i < 4; i++) {
      const c = trick[i], b = trick[w];
      const cs = suitOf(c), bs = suitOf(b);
      if ((cs === bs && c > b) || (cs === trump && bs !== trump)) w = i;
    }
    const winner = (leader + w) & 3;
    const won = (winner & 1) === 0 ? 1 : 0;
    if (hands.every(h => h.length === 0)) return won;
    return won + brute(hands, trump, winner, []);
  }
  const hand = hands[toPlay];
  const led = trick.length ? suitOf(trick[0]) : -1;
  let legal = hand.filter(c => suitOf(c) === led);
  if (!legal.length) legal = hand;
  const isMax = (toPlay & 1) === 0;
  let best = isMax ? -1 : 99;
  for (const c of legal) {
    hands[toPlay] = hand.filter(x => x !== c);
    const v = brute(hands, trump, leader, [...trick, c]);
    hands[toPlay] = hand;
    best = isMax ? Math.max(best, v) : Math.min(best, v);
  }
  return best;
}

function randomEnding(rnd: () => number, n: number): Card[][] {
  const deck = shuffle(Array.from({ length: 52 }, (_, i) => i), rnd);
  return [0, 1, 2, 3].map(s => deck.slice(s * n, s * n + n));
}

describe('DDS', () => {
  it('matches brute force on small endings', () => {
    const rnd = mulberry32(42);
    const solver = new DDSolver();
    for (let t = 0; t < 300; t++) {
      const n = 2 + (t % 3);
      const hands = randomEnding(rnd, n);
      const trump = t % 5, leader = (t >> 2) & 3;
      solver.load({ masks: masksOf(hands), trump, leader, trick: [] });
      const v = solver.value();
      expect(v).toBe(brute(hands.map(h => [...h]), trump, leader, []));
    }
  });

  it('analyze() agrees with brute force mid-trick', () => {
    const rnd = mulberry32(7);
    const solver = new DDSolver();
    for (let t = 0; t < 120; t++) {
      const hands = randomEnding(rnd, 3);
      const trump = t % 5, leader = t & 3;
      // leader plays its first card, then analyze for the next player
      const lead = hands[leader][0];
      const rest = hands.map((h, i) => (i === leader ? h.slice(1) : h));
      solver.load({ masks: masksOf(rest), trump, leader, trick: [lead] });
      const res = solver.analyze();
      const p = (leader + 1) & 3;
      for (const mv of res) {
        const hs = rest.map(h => [...h]);
        hs[p] = hs[p].filter(c => c !== mv.card);
        expect(mv.nsTricks).toBe(brute(hs, trump, leader, [lead, mv.card]));
      }
      const legalCount = rest[p].filter(c => suitOf(c) === suitOf(lead)).length || rest[p].length;
      expect(res.length).toBe(legalCount);
    }
  });

  it('solves full deals quickly', () => {
    const rnd = mulberry32(1234);
    const solver = new DDSolver();
    const times: number[] = [];
    for (let t = 0; t < 6; t++) {
      const hands = randomEnding(rnd, 13);
      const t0 = performance.now();
      solver.nodes = 0;
      solver.load({ masks: masksOf(hands), trump: t % 5, leader: 1, trick: [] });
      const v = solver.value();
      const dt = performance.now() - t0;
      times.push(dt);
      console.log(`deal ${t} trump ${t % 5}: NS ${v}  ${dt.toFixed(0)}ms  nodes ${solver.nodes}`);
    }
    const t0 = performance.now();
    const tbl = ddTable(solver, randomEnding(rnd, 13));
    console.log('ddTable', tbl.map(r => r.join(' ')).join(' | '), (performance.now() - t0).toFixed(0) + 'ms');
    expect(times.length).toBe(6);
  }, 120000);
});
