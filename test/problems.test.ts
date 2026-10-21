import { describe, it, expect, beforeEach } from 'vitest';
import { type Card, N, E, S, W, NT, dealCards, mulberry32, parseCard } from '../src/core/cards';
import { Auction, PASS, bid } from '../src/core/auction';
import { PlayState } from '../src/core/play';
import type { CardStat, Decision } from '../src/engine/playEngine';
import { encodeDeal } from '../src/game/journal';
import {
  type Problem, type ProblemKind, acceptProblem, promising, mergeDecisions, trivialAnswer, naturalFourthHand, sureWinThirdHand,
  decisive, generateProblem, problemPosition, validProblem, problemReviewItem, humanSeat, DEFAULT_RULES, LEAD_RULES, DEFENCE_RULES,
  addToBank, loadBank, removeFromBank, pickProblem, bankCounts, recordScore, loadScore, BANK_SIZE, ProblemFactory, partnerBidASuit,
} from '../src/game/problems';
import { readAuction } from '../src/bidding/engine';

const C = (s: string) => parseCard(s);
const st = (card: string, tricks: number, success: number, score = tricks * 30 + success * 400): CardStat => ({ card: C(card), tricks, success, score, n: 48 });
const dec = (stats: CardStat[], samples = 48): Decision => ({ card: stats[0].card, stats, samples, equal: [stats[0].card] });

// a small in-memory localStorage for the bank
beforeEach(() => {
  const mem = new Map<string, string>();
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: { getItem: (k: string) => mem.get(k) ?? null, setItem: (k: string, v: string) => void mem.set(k, String(v)), removeItem: (k: string) => void mem.delete(k) },
  });
});

describe('the acceptance rule', () => {
  it('accepts a clear success gap and returns the equivalent cards as the answer', () => {
    const v = acceptProblem(dec([st('D2', 9.2, 0.67), st('D3', 9.2, 0.67), st('DA', 8.0, 0.23), st('S4', 8.1, 0.4)]));
    expect(v.ok).toBe(true);
    if (v.ok) {
      expect(v.answer.sort()).toEqual([C('D2'), C('D3')].sort());
      expect(v.runnerUp.card).toBe(C('S4'));
    }
  });

  it('rejects a position where another card comes close', () => {
    expect(acceptProblem(dec([st('D2', 9.2, 0.67), st('DA', 9.1, 0.55), st('S4', 8.0, 0.2)]))).toMatchObject({ ok: false, reason: 'close' });
  });

  it('rejects positions where every card is the same', () => {
    expect(acceptProblem(dec([st('D2', 9, 0.5), st('D3', 9, 0.5), st('D4', 9, 0.5)]))).toMatchObject({ ok: false, reason: 'forced' });
  });

  it('accepts a trick gap when the contract’s fate is settled', () => {
    expect(acceptProblem(dec([st('HA', 10.5, 1), st('H7', 9.7, 1), st('H4', 9.6, 1)])).ok).toBe(true);
    expect(acceptProblem(dec([st('HA', 10.5, 1), st('H7', 9.9, 1)]))).toMatchObject({ ok: false, reason: 'close' });
  });

  it('rejects a best card that is less successful than another (the answer would be a matter of scoring)', () => {
    // the overtrick play scores more on average but goes down more often
    expect(acceptProblem(dec([st('HA', 11.0, 0.7, 500), st('H7', 9.9, 0.95, 450)]))).toMatchObject({ ok: false, reason: 'mixed' });
  });

  it('rejects positions where every alternative is a gross blunder', () => {
    expect(acceptProblem(dec([st('CA', 10.5, 0.81), st('C8', 8.1, 0)]))).toMatchObject({ ok: false, reason: 'blunders' });
    // one plausible alternative is enough
    expect(acceptProblem(dec([st('CA', 10.5, 0.81), st('C8', 8.1, 0), st('D2', 9.6, 0.55)])).ok).toBe(true);
  });

  it('needs enough layouts', () => {
    expect(acceptProblem(dec([st('D2', 9.2, 0.67), st('DA', 8.0, 0.23)], 20))).toMatchObject({ ok: false, reason: 'samples' });
  });

  it('rejects answers that cover most of the cards ("anything but the king")', () => {
    const stats = [st('S7', 10.5, 1), st('S4', 10.5, 1), st('D10', 10.5, 1), st('D9', 10.5, 1), st('D7', 10.5, 1), st('SK', 8.5, 0.48), st('DK', 9.5, 0.9)];
    expect(acceptProblem(dec(stats))).toMatchObject({ ok: false, reason: 'many' });
  });

  it('opening leads: cards practically as good as the best count as right', () => {
    const stats = [st('HA', 3.54, 0.46), st('HK', 3.54, 0.46), st('H4', 3.5, 0.44), st('C4', 3.3, 0.31), st('C3', 3.3, 0.31), st('D10', 3.27, 0.3), st('S6', 3.1, 0.31), st('S2', 3.1, 0.31)];
    const strict = acceptProblem(dec(stats), DEFAULT_RULES);
    expect(strict.ok).toBe(false);
    const lead = acceptProblem(dec(stats), LEAD_RULES);
    expect(lead.ok).toBe(true);
    if (lead.ok) expect(lead.answer.sort()).toEqual([C('HA'), C('HK'), C('H4')].sort());
  });

  it('opening leads: the right suit is the answer, a card of it that is not clearly worse counts as right', () => {
    const stats = [st('H7', 3.87, 0.43), st('H6', 3.87, 0.43), st('H4', 3.87, 0.43), st('HK', 3.57, 0.35), st('C2', 3.33, 0.28), st('D3', 3.22, 0.26), st('D2', 3.22, 0.26), st('S9', 2.5, 0.2), st('SK', 2.59, 0.22), st('DQ', 2.8, 0.2), st('C9', 3.3, 0.28), st('S5', 2.5, 0.2)];
    const v = acceptProblem(dec(stats), LEAD_RULES);
    expect(v.ok).toBe(true);
    if (v.ok) expect(v.answer.sort()).toEqual([C('H7'), C('H6'), C('H4'), C('HK')].sort());
    // without the suit rule the king is in no man's land
    expect(acceptProblem(dec(stats), { ...LEAD_RULES, suitIsAnswer: false }).ok).toBe(false);
  });

  it('defence uses a lower bar than declarer play', () => {
    const d = dec([st('C10', 3.56, 0.62), st('C6', 3.13, 0.46), st('CQ', 2.46, 0.29)]);
    expect(acceptProblem(d, DEFAULT_RULES).ok).toBe(false);
    expect(acceptProblem(d, DEFENCE_RULES).ok).toBe(true);
  });

  it('a quick screen only needs to look promising', () => {
    expect(promising(dec([st('D2', 9.2, 0.6), st('DA', 8.9, 0.45)], 16))).toBe(true);
    expect(promising(dec([st('D2', 9.2, 0.6), st('DA', 9.1, 0.58)], 16))).toBe(false);
  });

  it('merges two simulations, weighted by layouts', () => {
    const a: Decision = { card: C('D2'), samples: 16, equal: [C('D2')], stats: [{ card: C('D2'), tricks: 9, success: 0.5, score: 100, n: 16 }, { card: C('DA'), tricks: 8, success: 0.25, score: -50, n: 16 }] };
    const b: Decision = { card: C('DA'), samples: 32, equal: [C('DA')], stats: [{ card: C('D2'), tricks: 10, success: 1, score: 400, n: 32 }, { card: C('DA'), tricks: 8, success: 0, score: -100, n: 32 }] };
    const m = mergeDecisions(a, b);
    expect(m.samples).toBe(48);
    const d2 = m.stats.find(s => s.card === C('D2'))!;
    expect(d2.n).toBe(48);
    expect(d2.tricks).toBeCloseTo((9 * 16 + 10 * 32) / 48);
    expect(d2.success).toBeCloseTo((0.5 * 16 + 32) / 48);
    expect(m.stats[0].card).toBe(C('D2'));
    expect(m.equal).toEqual([C('D2')]);
  });

  it('decisive: the right card decides the contract', () => {
    expect(decisive({ answer: [C('D2')], stats: [{ c: C('D2'), t: 9.2, s: 0.67 }, { c: C('DA'), t: 8, s: 0.23 }] })).toBe(true);
    expect(decisive({ answer: [C('S2')], stats: [{ c: C('S2'), t: 11.6, s: 1 }, { c: C('SA'), t: 10.6, s: 1 }] })).toBe(false);
  });
});

/** A spade-only position: 3NT by South, West on lead. */
function spadePosition(cards: string[]): PlayState {
  const hands: Card[][] = [
    ['SQ', 'S4', 'S3'].map(C), // N
    ['SJ', 'S7', 'S6'].map(C), // E
    ['SA', 'S9', 'S8'].map(C), // S
    ['SK', 'S5', 'S2'].map(C), // W
  ];
  const p = new PlayState({ level: 3, strain: NT, declarer: S, doubled: 0 }, hands);
  for (const c of cards) p.play(C(c));
  return p;
}

describe('formalities', () => {
  it('fourth hand: winning cheaply or not overtaking partner is no problem; ducking or overtaking is', () => {
    const p = spadePosition(['S2', 'S3', 'SJ']); // W leads, dummy low, East's jack wins so far
    expect(p.toPlay).toBe(S);
    expect(naturalFourthHand(p)).toBe(C('SA'));
    expect(trivialAnswer(p, [C('SA')])).toBe(true);
    expect(trivialAnswer(p, [C('S8'), C('S9')])).toBe(false); // the hold-up is a problem
    const q = spadePosition(['S2', 'SQ', 'S6']); // dummy's queen is winning
    expect(naturalFourthHand(q)).toBe(C('S8'));
    expect(trivialAnswer(q, [C('S8'), C('S9')])).toBe(true);
    expect(trivialAnswer(q, [C('SA')])).toBe(false); // overtaking (to unblock) is a problem
  });

  it('third hand: taking the trick with a sure winner is no problem; finessing is', () => {
    // dummy leads in trick 2 after West's lead was won by the ace... set up directly: North on lead
    const hands: Card[][] = [['SQ', 'S4', 'S3'].map(C), ['SJ', 'S7', 'S6'].map(C), ['SA', 'S9', 'S8'].map(C), ['SK', 'S5', 'S2'].map(C)];
    const p = new PlayState({ level: 3, strain: NT, declarer: W, doubled: 0 }, hands); // North leads (declarer West)
    p.play(C('S3'));
    p.play(C('S6'));
    expect(p.toPlay).toBe(S);
    // South defends: the king, queen and jack are not all in sight, so only the ace is sure
    expect(sureWinThirdHand(p)).toBe(C('SA'));
    expect(trivialAnswer(p, [C('SA')])).toBe(true);
    expect(trivialAnswer(p, [C('S9')])).toBe(false);
  });

  it('third hand: playing low under partner’s sure winner is no problem; overtaking to unblock is', () => {
    const hands: Card[][] = [['SA', 'S4', 'S3'].map(C), ['SJ', 'S7', 'S6'].map(C), ['SQ', 'S9', 'S8'].map(C), ['SK', 'S5', 'S2'].map(C)];
    const p = new PlayState({ level: 3, strain: NT, declarer: W, doubled: 0 }, hands);
    p.play(C('SA'));
    p.play(C('S6'));
    expect(sureWinThirdHand(p)).toBe(C('S8'));
    expect(trivialAnswer(p, [C('S8'), C('S9')])).toBe(true);
    expect(trivialAnswer(p, [C('SQ')])).toBe(false);
  });
});

describe('stored problems', () => {
  /** A hand-made lead problem: 3NT by East, South on lead. */
  function leadProblem(seed: number, id = `t${seed}`): Problem {
    const deal = dealCards(mulberry32(seed));
    const calls = [PASS, bid(1, NT), PASS, bid(3, NT), PASS, PASS, PASS];
    const stats = deal[S].map((c, i) => ({ c, t: 4 - i * 0.1, s: 0.5 - i * 0.03 }));
    return {
      v: 1, id, kind: 'lead', theme: 'leads', board: 1, dealer: N, vul: 'None', deal: encodeDeal(deal), calls, play: [], seat: S,
      skill: 'play.lead', n: 48, stats, answer: [stats[0].c], created: 1,
    };
  }

  it('a stored problem replays to its position', () => {
    const pr = leadProblem(3);
    expect(validProblem(pr)).toBe(true);
    const { auction, play } = problemPosition(JSON.parse(JSON.stringify(pr)));
    expect(auction.contract()).toMatchObject({ level: 3, strain: NT, declarer: E });
    expect(play.toPlay).toBe(S);
    expect(new Set(play.legal())).toEqual(new Set(pr.stats.map(s => s.c)));
    // a broken one is refused
    expect(validProblem({ ...pr, seat: W })).toBe(false);
    expect(validProblem({ ...pr, answer: [problemPosition(pr).deal[N][0]] })).toBe(false); // not a card South holds
    expect(validProblem({ ...pr, kind: 'nonsense' })).toBe(false);
  });

  it('a missed problem becomes a review item at the same position', () => {
    const pr = leadProblem(5);
    const wrong = pr.stats[3].c;
    const item = problemReviewItem(pr, wrong, 1000);
    expect(item).toMatchObject({ kind: 'card', source: 'problem', skill: 'play.lead', seat: S, yours: wrong, answer: pr.answer, box: 0, due: 1000 });
    expect(item.sim).toMatchObject({ n: 48, best: pr.answer, bt: pr.stats[0].t, ms: pr.stats[3].s });
    const p = new PlayState(new Auction(item.dealer, item.calls).contract()!, problemPosition(pr).deal);
    for (const c of item.play ?? []) p.play(c);
    expect(p.toPlay).toBe(item.seat);
    expect(p.legal()).toContain(item.answer[0]);
  });

  it('the bank keeps the newest problems of each kind and serves mixed problems in turn', () => {
    for (let i = 0; i < BANK_SIZE + 2; i++) addToBank(leadProblem(10 + i, `lead${i}`));
    expect(bankCounts().lead).toBe(BANK_SIZE);
    expect(loadBank().map(p => p.id)).not.toContain('lead0');
    expect(pickProblem('lead')?.kind).toBe('lead');
    expect(pickProblem('declarer')).toBeNull();
    expect(pickProblem('mixed', 'lead')?.kind).toBe('lead');
    removeFromBank('lead2');
    expect(loadBank().map(p => p.id)).not.toContain('lead2');
    recordScore('lead', true);
    recordScore('lead', false);
    expect(loadScore().lead).toEqual({ done: 2, right: 1 });
  });

  it('the factory generates the kind wanted, then whichever has the fewest ready', () => {
    const f = new ProblemFactory();
    expect(f.nextKind('lead', { declarer: 0, defense: 0, lead: 0 })).toBe('lead');
    expect(f.nextKind('mixed', { declarer: 2, defense: 1, lead: 3 })).toBe('defense');
    expect(f.nextKind('declarer', { declarer: BANK_SIZE, defense: 1, lead: 0 })).toBe('lead');
    expect(f.nextKind('mixed', { declarer: BANK_SIZE, defense: BANK_SIZE, lead: BANK_SIZE })).toBeNull();
  });
});

describe('the generator', () => {
  const quick = { screenSamples: 8, extraSamples: 12, screenMs: 1e9, extraMs: 1e9, botMs: 1e9, dealBudgetMs: 1e9, now: () => 1 };

  async function firstProblem(kind: ProblemKind, seeds: number[]) {
    for (const seed of seeds) {
      const pr = await generateProblem(kind, seed, { ...quick, rules: { ...(kind === 'defense' ? DEFENCE_RULES : DEFAULT_RULES), minSamples: 16 } });
      if (pr) return { pr, seed };
    }
    return null;
  }

  function checkProblem(pr: Problem, kind: ProblemKind) {
    expect(validProblem(JSON.parse(JSON.stringify(pr)))).toBe(true);
    const { play } = problemPosition(pr);
    expect(play.toPlay).toBe(pr.seat);
    expect(humanSeat(play.contract, pr.seat)).toBe(true);
    expect(new Set(play.legal())).toEqual(new Set(pr.stats.map(s => s.c)));
    expect(pr.answer.length).toBeGreaterThan(0);
    for (const c of pr.answer) expect(play.legal()).toContain(c);
    expect(pr.stats[0].c).toSatisfy((c: Card) => pr.answer.includes(c));
    expect(pr.n).toBeGreaterThanOrEqual(16);
    const declaring = (pr.seat & 1) === (play.contract.declarer & 1);
    expect(declaring).toBe(kind === 'declarer');
    expect(pr.skill).toBe(kind === 'declarer' ? 'play.declarer' : 'play.defense');
    expect(play.openingLeadMade).toBe(true);
    expect(play.tricks.length).toBeLessThanOrEqual(6);
  }

  it('finds valid declarer problems', async () => {
    // seeds known to give a problem first (deterministic: unlimited time), others in case the bidding changes
    const found = await firstProblem('declarer', [14, 11, 12, 13, 15, 16, 17, 18]);
    expect(found).not.toBeNull();
    checkProblem(found!.pr, 'declarer');
    // the same seed gives the same problem
    const again = await generateProblem('declarer', found!.seed, { ...quick, rules: { ...DEFAULT_RULES, minSamples: 16 } });
    expect(again).toEqual(found!.pr);
  }, 240000);

  it('finds valid defence problems', async () => {
    const found = await firstProblem('defense', [22, 21, 23, 24, 25, 26, 27, 28, 29, 30]);
    expect(found).not.toBeNull();
    checkProblem(found!.pr, 'defense');
  }, 240000);

  it('stops when asked', async () => {
    let calls = 0;
    const pr = await generateProblem('declarer', 11, { ...quick, shouldStop: () => ++calls > 2 });
    expect(pr).toBeNull();
  }, 60000);

  it('lead problems: only deals where partner bid a suit of their own', () => {
    const auction = (calls: number[]) => readAuction(new Auction(N, calls), 'None').records;
    // North opens 1♥, East overcalls and declares: South leads with partner's suit to think about
    expect(partnerBidASuit(auction([bid(1, 2), bid(1, 3), PASS, bid(4, 3), PASS, PASS, PASS]), S)).toBe(true);
    // North passes throughout
    expect(partnerBidASuit(auction([PASS, bid(1, NT), PASS, bid(3, NT), PASS, PASS, PASS]), S)).toBe(false);
  });
});
