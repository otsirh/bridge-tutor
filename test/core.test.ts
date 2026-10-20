import { describe, it, expect } from 'vitest';
import { Auction, parseCall, bid, PASS, DOUBLE, REDOUBLE } from '../src/core/auction';
import { scoreContract, imps } from '../src/core/scoring';
import { handInfo } from '../src/core/eval';
import { parseCard, HEARTS, SPADES, NT, CLUBS, type Card } from '../src/core/cards';
import { PlayState } from '../src/core/play';

const hand = (s: string): Card[] => s.split(' ').map(parseCard);

describe('scoring', () => {
  const c = (level: number, strain: 0 | 1 | 2 | 3 | 4, doubled: 0 | 1 | 2 = 0) => ({ level, strain, declarer: 0 as const, doubled });
  it('scores made contracts', () => {
    expect(scoreContract(c(4, SPADES), 10, false)).toBe(420);
    expect(scoreContract(c(4, SPADES), 11, true)).toBe(650);
    expect(scoreContract(c(3, NT), 9, true)).toBe(600);
    expect(scoreContract(c(1, NT), 7, false)).toBe(90);
    expect(scoreContract(c(2, CLUBS), 9, false)).toBe(110);
    expect(scoreContract(c(6, HEARTS), 12, false)).toBe(980);
    expect(scoreContract(c(7, NT), 13, true)).toBe(2220);
    expect(scoreContract(c(2, HEARTS, 1), 8, false)).toBe(470); // doubled into game
    expect(scoreContract(c(1, NT, 2), 8, true)).toBe(1160);
  });
  it('scores undertricks', () => {
    expect(scoreContract(c(4, SPADES), 9, false)).toBe(-50);
    expect(scoreContract(c(4, SPADES), 8, true)).toBe(-200);
    expect(scoreContract(c(1, NT, 1), 4, false)).toBe(-500);
    expect(scoreContract(c(1, NT, 1), 3, false)).toBe(-800);
    expect(scoreContract(c(3, NT, 1), 7, true)).toBe(-500);
    expect(scoreContract(c(3, NT, 2), 8, true)).toBe(-400);
  });
  it('converts to IMPs', () => {
    expect(imps(10)).toBe(0);
    expect(imps(20)).toBe(1);
    expect(imps(420 - 170)).toBe(6);
    expect(imps(-1430)).toBe(-16);
  });
});

describe('auction', () => {
  it('finds the declarer and doubles', () => {
    const a = new Auction(0);
    for (const t of ['1H', 'P', '2H', 'X', 'P', 'P', 'XX', 'P', 'P', 'P']) a.push(parseCall(t));
    expect(a.isComplete()).toBe(true);
    expect(a.contract()).toEqual({ level: 2, strain: HEARTS, declarer: 0, doubled: 2 });
  });
  it('rejects illegal calls', () => {
    const a = new Auction(0);
    a.push(bid(1, SPADES));
    expect(a.isLegal(bid(1, HEARTS))).toBe(false);
    expect(a.isLegal(DOUBLE)).toBe(true);
    a.push(PASS);
    expect(a.isLegal(DOUBLE)).toBe(false); // can't double partner
    expect(a.isLegal(REDOUBLE)).toBe(false);
  });
  it('passes out after four passes', () => {
    const a = new Auction(1);
    for (let i = 0; i < 4; i++) a.push(PASS);
    expect(a.isComplete()).toBe(true);
    expect(a.contract()).toBeNull();
  });
});

describe('evaluation', () => {
  it('counts points, shape and losers', () => {
    const h = handInfo(hand('SA SK S5 S4 S2 HK HQ H3 DA D7 C9 C8 C2'));
    expect(h.hcp).toBe(16);
    expect(h.tp).toBe(17);
    expect(h.balanced).toBe(true);
    expect(h.ltc).toBe(1 + 1 + 1 + 3);
  });
});

describe('play', () => {
  it('determines trick winners with trumps', () => {
    const deal = [
      hand('SA SK SQ SJ ST S9 S8 S7 S6 S5 S4 S3 S2'),
      hand('HA HK HQ HJ HT H9 H8 H7 H6 H5 H4 H3 H2'),
      hand('DA DK DQ DJ DT D9 D8 D7 D6 D5 D4 D3 D2'),
      hand('CA CK CQ CJ CT C9 C8 C7 C6 C5 C4 C3 C2'),
    ];
    const p = new PlayState({ level: 1, strain: CLUBS, declarer: 0, doubled: 0 }, deal);
    p.play(parseCard('HA')); // East leads
    p.play(parseCard('DA'));
    p.play(parseCard('C2')); // West ruffs
    const t = p.play(parseCard('SA'));
    expect(t?.winner).toBe(3);
  });
});
