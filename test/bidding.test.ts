import { describe, it, expect } from 'vitest';
import { Auction, parseCall, callShort } from '../src/core/auction';
import { parseCard, dealCards, mulberry32, type Card } from '../src/core/cards';
import { readAuction, advise } from '../src/bidding/engine';
import { setSystem, DEFAULT_SYSTEM } from '../src/bidding/config';

const hand = (s: string): Card[] => s.split(' ').map(parseCard);

/** The system's call for `cards` after the given calls (dealer North), in short form ("1NT", "2S", "X"). */
function next(cards: Card[], calls: string, dealer: 0 | 1 | 2 | 3 = 0): string {
  const a = new Auction(dealer);
  for (const c of calls.split(' ').filter(Boolean)) a.push(parseCall(c));
  return callShort(advise(cards, readAuction(a, 'None').ctx).call);
}

describe('system bids', () => {
  it('opens 1NT with 15-17 balanced', () => {
    expect(next(hand('SA SK S5 S4 HK HQ H3 DA D7 D2 C9 C8 C2'), '')).toBe('1NT');
  });
  it('opens the higher of two five-card suits', () => {
    expect(next(hand('SA SK S5 S4 S2 HK HQ H3 H2 H6 C9 C8 D2'), '')).toBe('1S');
  });
  it('transfers with five hearts over 1NT', () => {
    expect(next(hand('S5 S4 HK HQ H8 H3 H2 D7 D6 D2 C9 C8 C2'), '1N P')).toBe('2D');
  });
  it('uses Stayman with a four-card major and 8+', () => {
    expect(next(hand('SK SQ S5 S4 H3 H2 DA D7 D6 C9 C8 C5 C2'), '1N P')).toBe('2C');
  });
  it('completes a transfer and answers Stayman after 2♣ – 2♦ – 2NT', () => {
    const opener = hand('SA SK S5 HK HQ H3 DA DJ D7 CA CQ C9 C2');
    expect(next(opener, '2C P 2D P 2N P 3H P')).toBe('3S');
    expect(next(opener, '2C P 2D P 2N P 3C P')).toBe('3D');
  });
  it('answers Stayman', () => {
    expect(next(hand('SA SK S5 S4 HK HQ H3 DA D7 D2 C9 C8 C2'), 'P P 1N P 2C P', 1)).toBe('2S');
  });
  it('raises partner’s major with three-card support', () => {
    expect(next(hand('SK S5 S4 HQ H8 H3 D7 D6 D2 CK C8 C5 C2'), '1S P')).toBe('2S');
  });
  it('bids Jacoby 2NT with four trumps and an opening hand', () => {
    expect(next(hand('SK S5 S4 S2 HA HQ H3 D7 D6 D2 CK CQ C2'), '1S P')).toBe('2NT');
  });
  it('makes a takeout double', () => {
    expect(next(hand('SK SQ S4 S2 H3 DA D9 D6 D2 CK CQ C5 C2'), '1H', 1)).toBe('X');
  });
  it('answers Roman Key Card Blackwood: two key cards (♥A, ♠K) and the trump queen', () => {
    expect(next(hand('SK SQ S4 S2 HA H3 D9 D6 D2 CK C5 C3 C2'), '1S P 3S P 4N P')).toBe('5S');
  });
  it('answers plain Blackwood when Roman Key Card is switched off', () => {
    setSystem({ rkcb: false });
    try {
      expect(next(hand('SK SQ S4 S2 HA H3 D9 D6 D2 CK C5 C3 C2'), '1S P 3S P 4N P')).toBe('5D');
    } finally {
      setSystem(DEFAULT_SYSTEM);
    }
  });
});

describe('robustness', () => {
  it('bots always finish the auction with legal calls', () => {
    const rnd = mulberry32(5);
    for (let t = 0; t < 120; t++) {
      const deal = dealCards(rnd);
      const a = new Auction((t % 4) as 0 | 1 | 2 | 3);
      let guard = 0;
      while (!a.isComplete()) {
        const call = advise(deal[a.nextSeat], readAuction(a, 'Both').ctx).call;
        expect(a.isLegal(call)).toBe(true);
        a.push(call);
        expect(++guard).toBeLessThan(60);
      }
    }
  });
});
