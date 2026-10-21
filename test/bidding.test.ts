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

/** The system's call with its convention tag and what it shows. */
function advice(cards: string, calls: string, dealer: 0 | 1 | 2 | 3 = 0) {
  const a = new Auction(dealer);
  for (const c of calls.split(' ').filter(Boolean)) a.push(parseCall(c));
  const adv = advise(hand(cards), readAuction(a, 'None').ctx);
  return { call: callShort(adv.call), tag: adv.meaning.tag, shown: adv.meaning.shown, key: adv.rule?.key };
}

/** How the system reads the last call of an auction. */
function reading(calls: string, dealer: 0 | 1 | 2 | 3 = 0) {
  const a = new Auction(dealer);
  for (const c of calls.split(' ').filter(Boolean)) a.push(parseCall(c));
  return readAuction(a, 'None').records.at(-1)!.meaning;
}

describe('invitations', () => {
  it('a general invitation shows a bounded range, so opener does not leap to slam', () => {
    const m = reading('1C P 1H P 1S P 2NT');
    expect(m.tag).toBe('invite');
    expect(m.shown.hcp[1]).toBeLessThan(15);
    expect(next(hand('SK S5 S4 HK H8 DA D7 D5 D2 CA CK C8 C2'), '1C P 1H P 1S P 2NT P')).toBe('3NT');
    expect(next(hand('SK S5 S4 HK H8 DA D7 D5 D2 CQ CJ C8 C2'), '1C P 1H P 1S P 2NT P')).toBe('P');
  });
  it('there are no invitations in a game-forcing auction', () => {
    expect(reading('2C P 2D P 2S P 2NT').tag).not.toBe('invite');
  });
  it('after opener’s 2NT rebid, responder plays a six-card major and offers a five-card one', () => {
    expect(next(hand('SQ SJ S10 S9 S7 S2 HK H9 H4 DJ D7 D4 C3'), '1C P 1S P 2NT P')).toBe('4S');
    expect(next(hand('SQ SJ S10 S9 S7 HK H9 H4 DJ D7 D4 C3 C2'), '1C P 1S P 2NT P')).toBe('3S');
    expect(next(hand('SA SK S3 H10 H7 H2 DK D9 D8 CA CK CQ C10'), '1C P 1S P 2NT P 3S P')).toBe('4S');
    expect(next(hand('SA SK H10 H7 H2 DK D9 D8 CA CK CQ C10 C9'), '1C P 1S P 2NT P 3S P')).toBe('3NT');
  });
});

describe('strain', () => {
  it('corrects 3NT to four of a long, strong major', () => {
    expect(next(hand('SA SQ S10 S7 S6 S5 S4 S2 H9 DA D9 D7 D3'), '1S P 2C P 2S P 3NT P')).toBe('4S');
  });
  it('with five cards in one major, four in the other and game values, uses Stayman first', () => {
    const fiveFour = hand('SK SQ S9 S7 S2 HA HJ H8 H4 DK D5 C7 C2');
    expect(next(fiveFour, '1N P')).toBe('2C');
    expect(next(fiveFour, '1N P 2C P 2D P')).toBe('3S');
    expect(next(hand('SA S6 S3 HK H5 H2 DA DQ D7 D4 CK C9 C3'), '1N P 2C P 2D P 3S P')).toBe('4S');
    expect(next(hand('SA S6 HK H5 H2 DA DQ D7 D4 CK C9 C8 C3'), '1N P 2C P 2D P 3S P')).toBe('3NT');
    // without game values the five-card major is transferred as before
    expect(next(hand('S9 S7 S5 S4 S2 HJ H8 H6 H4 DK D5 C7 C2'), '1N P')).toBe('2H');
  });
  it('in a game-forcing auction shows three-card support for partner’s major before notrump', () => {
    const r = advice('SA SQ S8 S5 HA H8 H6 DK CA CK C9 C6 C2', '1C P 1H P 2S P 2NT P');
    expect(r.call).toBe('3H');
    expect(r.shown.len[2]).toEqual([3, 3]);
    expect(next(hand('SK S4 HQ HJ H10 H4 H2 D10 D5 D4 C10 C4 C3'), '1C P 1H P 2S P 2NT P 3H P')).toBe('4H');
  });
});

describe('slam tries', () => {
  it('a control bid at the four level agrees partner’s major when slam is on with a little extra', () => {
    const r = advice('SK S8 S4 HJ H6 H2 DA DK D9 CA CQ C6 C5', '1S P 2C P 2S P');
    expect(r).toMatchObject({ call: '4D', tag: 'cue' });
    expect(reading('1S P 2C P 2S P 4D').data).toEqual({ suit: 3, control: 1 });
    // a point more and it asks for key cards at once
    expect(advice('SK S8 S4 HQ H6 H2 DA DK D9 CA CQ C6 C5', '1S P 2C P 2S P')).toMatchObject({ call: '4NT', tag: 'rkcb' });
    // partner, with extras, shows a control in turn
    expect(advice('SA S10 S9 S7 S5 S3 HA H9 H7 D8 CK CJ C4', '1S P 2C P 2S P 4D P')).toMatchObject({ call: '4H', tag: 'cue' });
  });
  it('a natural jump to four of our own suit stays natural', () => {
    expect(reading('1C P 1H P 1S P 4H').tag).toBeUndefined();
  });
  it('raising partner’s minor to the four level is a forcing slam try; partner with extras asks for key cards', () => {
    expect(advice('SK SQ S10 S9 HQ DQ D9 D5 D4 CA CK CJ C2', '1D P 2C P')).toMatchObject({ call: '4C', tag: 'minorTry' });
    expect(advice('SA S3 HA H2 DA DK DJ D7 D3 C10 C8 C6 C3', '1D P 2C P 4C P')).toMatchObject({ call: '4NT', tag: 'rkcb' });
  });
  it('slam values are not wasted on a sign-off after partner’s invitation', () => {
    expect(advice('SA SQ SJ S8 S4 H4 DA DK D10 D8 D7 CK C9', '1C P 1S P 3C P')).toMatchObject({ call: '4C', tag: 'minorTry' });
    expect(advice('S6 HA HQ DJ D6 D5 D3 CA CQ CJ C7 C4 C3', '1C P 1S P 3C P 4C P')).toMatchObject({ call: '4NT', tag: 'rkcb' });
  });
  it('partner’s 3NT over a preempt: 6NT with 15+, a quantitative 4NT with 12–14', () => {
    expect(next(hand('SK SQ S5 HA HK H9 H4 D8 D3 CK CQ C5 C4'), '3D 3NT P', 3)).toBe('6NT');
    expect(advice('SK SQ S5 HA HJ H9 H4 D8 D3 CK C7 C5 C4', '3D 3NT P', 3)).toMatchObject({ call: '4NT', tag: 'quant' });
  });
});

describe('competitive judgement', () => {
  it('opener reopens with a double when short in the overcalled suit; partner passes it with a trump stack', () => {
    expect(advice('SA S8 S6 S3 HA HQ HJ H7 H4 DK D5 D2 C6', '1H 2C P P')).toMatchObject({ call: 'X', tag: 'reopenX' });
    expect(next(hand('SK S5 H6 H2 DQ D8 D7 D4 CK CQ C10 C9 C3'), '1H 2C P P X P')).toBe('P');
    expect(next(hand('SK S5 S4 H6 H2 DQ D8 D7 D4 D2 C10 C9 C3'), '1H 2C P P X P')).not.toBe('P');
  });
  it('in the balancing seat a strong balanced hand doubles, then bids notrump (15–18)', () => {
    const h = 'SA SJ HA H8 H2 DQ D9 D8 D2 CK CQ C9 C4';
    expect(next(hand(h), '1H P P', 1)).toBe('X');
    const r = advice(h, '1H P P X P 1S P', 1);
    expect(r.call).toBe('1NT');
    expect(r.shown.hcp).toEqual([15, 18]);
  });
  it('after their double, four-card support for a major is shown with Jordan 2NT, not a redouble', () => {
    expect(next(hand('S8 S7 S6 S4 DK DQ D10 D6 D2 CA CQ C4 C3'), '1S X')).toBe('2NT');
  });
  it('opener passes partner’s redouble; the doubler does not sit in it', () => {
    expect(next(hand('SK SQ SJ S10 S3 HA H5 H4 DA D7 D4 C9 C5'), '1S X XX P')).toBe('P');
    expect(next(hand('SK S2 HA HQ H8 H4 DK D9 D6 D3 CJ C7 C3'), '1S X XX P P')).toBe('2H');
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
