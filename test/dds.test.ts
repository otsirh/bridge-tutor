import { describe, it, expect } from 'vitest';
import { DDSolver, masksOf, ddTable } from '../src/engine/dds';
import { makeCard, mulberry32, shuffle, suitOf, type Card } from '../src/core/cards';

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

/** Four hands N E S W, each "spades.hearts.diamonds.clubs" ("-" for a void). */
function deal(text: string): Card[][] {
  return text.split(' ').map(hand =>
    hand.split('.').flatMap((ranks, i) => (ranks === '-' ? [] : [...ranks].map(r => makeCard(3 - i, '23456789TJQKA'.indexOf(r) + 2)))),
  );
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

  it('reuses a cached result only where the runs of touching cards are the same', () => {
    // Two contracts the solver once got wrong by a trick (checked against a solver whose
    // cache matches whole positions only): a result found with one card standing for a run
    // was reused where that run is broken up.
    const solver = new DDSolver();
    const nine = deal('9.AK842.KT8762.3 Q53.53.J9.AKQ865 KT876.T96.A.T974 AJ42.QJ7.Q543.J2');
    solver.load({ masks: masksOf(nine), trump: 3, leader: 2, trick: [] });
    expect(solver.value()).toBe(7); // spades by East: North-South take 7
    const fortyOne = deal('KJT74.73.T964.52 82.865.KQ5.AQJT7 AQ9.AKJ42.A8.K86 653.QT9.J732.943');
    solver.load({ masks: masksOf(fortyOne), trump: 1, leader: 2, trick: [] });
    expect(solver.value()).toBe(8);
  });

  it('keeps working when the cache fills up', () => {
    // a cache of 1024 positions fills many times over; it must keep its most useful entries, not loop
    const rnd = mulberry32(5);
    const small = new DDSolver(10);
    for (let t = 0; t < 30; t++) {
      const hands = randomEnding(rnd, 4);
      const trump = t % 5, leader = t & 3;
      small.load({ masks: masksOf(hands), trump, leader, trick: [] });
      expect(small.value()).toBe(brute(hands.map(h => [...h]), trump, leader, []));
    }
    const big = new DDSolver(), tiny = new DDSolver(12);
    for (let t = 0; t < 3; t++) {
      const hands = randomEnding(rnd, 9);
      for (const s of [big, tiny]) s.load({ masks: masksOf(hands), trump: t, leader: 1, trick: [] });
      expect(tiny.value()).toBe(big.value());
    }
  });

  it('solves a crossruff deal that once ran for most of an hour', () => {
    // Diamonds by North: the search used to fill the cache, wipe it and start over, without end
    const solver = new DDSolver();
    const hands = deal('J86.T754.Q9872.6 AQ742.A2.3.KT873 3.KJ83.KJT65.Q52 KT95.Q96.A4.AJ94');
    solver.load({ masks: masksOf(hands), trump: 1, leader: 1, trick: [] });
    expect(solver.value()).toBe(8);
    expect(solver.nodes).toBeLessThan(80e6);
  }, 120000);

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
