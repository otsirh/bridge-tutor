import { describe, it, expect } from 'vitest';
import { Auction, parseCall, callName } from '../src/core/auction';
import { parseCard, dealCards, mulberry32, type Card } from '../src/core/cards';
import { readAuction, advise } from '../src/bidding/engine';

const hand = (s: string): Card[] => s.split(' ').map(parseCard);

/** The system's call for `cards` after the given calls (dealer North). */
function next(cards: Card[], calls: string, dealer: 0 | 1 | 2 | 3 = 0): string {
  const a = new Auction(dealer);
  for (const c of calls.split(' ').filter(Boolean)) a.push(parseCall(c));
  return callName(advise(cards, readAuction(a, 'None').ctx).call);
}

describe('system bids', () => {
  it('opens 1NT with 15-17 balanced', () => {
    expect(next(hand('SA SK S5 S4 HK HQ H3 DA D7 D2 C9 C8 C2'), '')).toBe('1БК');
  });
  it('opens the higher of two five-card suits', () => {
    expect(next(hand('SA SK S5 S4 S2 HK HQ H3 H2 H6 C9 C8 D2'), '')).toBe('1♠');
  });
  it('transfers with five hearts over 1NT', () => {
    expect(next(hand('S5 S4 HK HQ H8 H3 H2 D7 D6 D2 C9 C8 C2'), '1N P')).toBe('2♦');
  });
  it('uses Stayman with a four-card major and 8+', () => {
    expect(next(hand('SK SQ S5 S4 H3 H2 DA D7 D6 C9 C8 C5 C2'), '1N P')).toBe('2♣');
  });
  it('answers Stayman', () => {
    expect(next(hand('SA SK S5 S4 HK HQ H3 DA D7 D2 C9 C8 C2'), 'P P 1N P 2C P', 1)).toBe('2♠');
  });
  it('raises partner’s major with three-card support', () => {
    expect(next(hand('SK S5 S4 HQ H8 H3 D7 D6 D2 CK C8 C5 C2'), '1S P')).toBe('2♠');
  });
  it('bids Jacoby 2NT with four trumps and an opening hand', () => {
    expect(next(hand('SK S5 S4 S2 HA HQ H3 D7 D6 D2 CK CQ C2'), '1S P')).toBe('2БК');
  });
  it('makes a takeout double', () => {
    expect(next(hand('SK SQ S4 S2 H3 DA D9 D6 D2 CK CQ C5 C2'), '1H', 1)).toBe('Контра');
  });
  it('answers Blackwood', () => {
    expect(next(hand('SK SQ S4 S2 HA H3 D9 D6 D2 CK C5 C3 C2'), '1S P 3S P 4N P')).toBe('5♦');
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
