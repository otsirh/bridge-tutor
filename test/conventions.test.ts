// The optional conventions: each one asked and answered with concrete hands,
// what the calls show, and plain SAYC when they are switched off.

import { describe, it, expect, afterEach } from 'vitest';
import { Auction, parseCall, callShort } from '../src/core/auction';
import { parseCard, dealCards, mulberry32, boardVulnerability, type Card, type Seat } from '../src/core/cards';
import { readAuction, advise } from '../src/bidding/engine';
import type { Meaning } from '../src/bidding/context';
import { setSystem, getSystem, DEFAULT_SYSTEM, PLAIN_SAYC, CONVENTIONS, type SystemConfig } from '../src/bidding/config';
import { T } from '../src/i18n';
import { SAYC_AUCTIONS } from './fixtures/sayc-auctions';

const hand = (s: string): Card[] => s.split(' ').map(parseCard);

function auction(calls: string, dealer: Seat): Auction {
  const a = new Auction(dealer);
  for (const c of calls.split(' ').filter(Boolean)) a.push(parseCall(c));
  return a;
}

/** The system's call for `cards` after `calls` (dealer North unless given), its convention tag and meaning. */
function next(cards: string, calls: string, dealer: Seat = 0): { call: string; tag?: string; meaning: Meaning } {
  const advice = advise(hand(cards), readAuction(auction(calls, dealer), 'None').ctx);
  return { call: callShort(advice.call), tag: advice.meaning.tag, meaning: advice.meaning };
}

/** How the system reads the last call of an auction. */
function reading(calls: string, dealer: Seat = 0): Meaning {
  return readAuction(auction(calls, dealer), 'None').records.at(-1)!.meaning;
}

const use = (cfg: Partial<SystemConfig>) => setSystem(cfg);
afterEach(() => setSystem(DEFAULT_SYSTEM));

describe('system settings', () => {
  it('lists every convention once, with a name and description in each language', () => {
    expect(CONVENTIONS.map(c => c.id).sort()).toEqual(Object.keys(DEFAULT_SYSTEM).sort());
    for (const c of CONVENTIONS) {
      expect(T.bidding.conventions[c.id].name).not.toBe('');
      expect(T.bidding.conventions[c.id].desc).not.toBe('');
    }
  });

  it('keeps defaults for anything left out, so old saved settings stay valid', () => {
    setSystem({ texas: false });
    expect(getSystem()).toEqual({ ...DEFAULT_SYSTEM, texas: false });
    setSystem({});
    expect(getSystem()).toEqual(DEFAULT_SYSTEM);
    expect(DEFAULT_SYSTEM.drury).toBe(false);
  });

  it('with every convention off, bids exactly as plain SAYC did', () => {
    use(PLAIN_SAYC);
    const rnd = mulberry32(31337);
    const got: string[] = [];
    for (let t = 0; t < SAYC_AUCTIONS.length; t++) {
      const deal = dealCards(rnd);
      const vul = boardVulnerability((t % 16) + 1);
      const a = new Auction((t % 4) as Seat);
      while (!a.isComplete()) a.push(advise(deal[a.nextSeat], readAuction(a, vul).ctx).call);
      got.push(a.calls.map(callShort).join(' '));
    }
    expect(got).toEqual(SAYC_AUCTIONS);
  });
});

describe('Roman Key Card Blackwood 1430', () => {
  const ask = '1S P 2NT P 3S P 4NT P';
  it('is what 4NT means once trumps are agreed', () => {
    const m = reading('1S P 2NT P 3S P 4NT');
    expect(m.tag).toBe('rkcb');
    expect(m.data?.suit).toBe(3);
    expect(m.artificial).toBe(true);
  });
  it('answers in key cards: 5♣ 1 or 4, 5♦ 0 or 3, 5♥ 2 without the queen, 5♠ 2 with it', () => {
    expect(next('SA SK SQ S8 S3 HQ H4 H2 DQ D5 D2 C4 C2', ask)).toMatchObject({ call: '5S', tag: 'rkcbReply' });
    expect(next('SA SK S9 S8 S3 HQ H4 H2 DQ D5 D2 C4 C2', ask)).toMatchObject({ call: '5H', tag: 'rkcbReply' });
    expect(next('SQ SJ S10 S8 S3 HA H4 H2 DQ D5 D2 CK C2', ask)).toMatchObject({ call: '5C', tag: 'rkcbReply' });
    expect(next('SQ SJ S10 S8 S3 HK H4 H2 DQ D5 D2 CK C2', ask)).toMatchObject({ call: '5D', tag: 'rkcbReply' });
    expect(next('SK SJ S10 S8 S3 HA H4 H2 DA D5 D2 CA C2', ask)).toMatchObject({ call: '5C' }); // four
  });
  it('the asker stops at five with two key cards (or one and the queen) missing, bids six with one', () => {
    expect(next('SJ S7 S5 S4 HA HK H8 DA DK D9 D3 C5 C3', `${ask} 5H P`)).toMatchObject({ call: '5S' });
    expect(next('SQ S7 S5 S4 HA HK H8 DA DK D9 D3 C5 C3', `${ask} 5H P`)).toMatchObject({ call: '6S' });
  });
  it('asks for the queen with the next step and hears the answer', () => {
    expect(next('SK S7 S5 S4 HA HK H8 DA DK D9 D3 C5 C3', `${ask} 5C P`)).toMatchObject({ call: '5D', tag: 'queenAsk' });
    expect(next('SA SQ S10 S8 S3 HQ H4 H2 DQ D5 D2 C4 C2', `${ask} 5C P 5D P`)).toMatchObject({ call: '6S', tag: 'queenReply' });
    expect(next('SA SJ S10 S8 S3 HQ H4 H2 DQ D5 D2 C4 C2', `${ask} 5C P 5D P`)).toMatchObject({ call: '5S', tag: 'queenReply' });
  });
  it('asks for side kings with 5NT when every key card and the queen are held, then bids the grand slam', () => {
    const asker = 'SK SQ S5 S4 HA HK H8 DA DK D9 D3 CA C3';
    expect(next(asker, `${ask} 5C P`)).toMatchObject({ call: '5NT', tag: 'kingask' });
    expect(next('SA SJ S10 S8 S3 HQ H4 H2 DQ D5 D2 CK C2', `${ask} 5C P 5NT P`)).toMatchObject({ call: '6D', tag: 'kingReply' });
    expect(next(asker, `${ask} 5C P 5NT P 6D P`)).toMatchObject({ call: '7S' });
  });
  it('switched off, 4NT is plain Blackwood again', () => {
    use({ rkcb: false });
    expect(reading('1S P 2NT P 3S P 4NT').tag).toBe('blackwood');
    expect(next('SQ SJ S10 S8 S3 HA H4 H2 DQ D5 D2 CK C2', ask)).toMatchObject({ call: '5D', tag: 'aceReply' });
  });
});

describe('splinter raises', () => {
  it('a double jump in a new suit shows four trumps, game values and a singleton or void', () => {
    const r = next('SK SJ S5 S4 HA H8 H5 H2 DK D9 D7 D3 C5', '1S P');
    expect(r).toMatchObject({ call: '4C', tag: 'splinter' });
    expect(r.meaning.artificial).toBe(true);
    expect(r.meaning.forcing).toBe('game');
    expect(r.meaning.shown.len[0][1]).toBe(1); // at most one club
    expect(r.meaning.shown.len[3][0]).toBe(4); // four spades
    expect(next('S5 HK HJ H5 H4 DA D8 D5 D2 CK C9 C7 C3', '1H P')).toMatchObject({ call: '3S', tag: 'splinter' });
  });
  it('opener signs off with values wasted opposite the shortness, and tries for slam with working values', () => {
    expect(next('SA SQ S10 S8 S3 HK H4 D5 D2 CK CQ CJ C4', '1S P 4C P').call).toBe('4S');
    expect(next('SA SQ S10 S8 S3 HK HQ H4 DA DQ D5 C4 C2', '1S P 4C P')).toMatchObject({ call: '4D', tag: 'cue' });
  });
  it('the splinter bidder passes opener’s sign-off', () => {
    expect(next('SK SJ S5 S4 HA H8 H5 H2 DK D9 D7 D3 C5', '1S P 4C P 4S P').call).toBe('P');
  });
  it('switched off, the same hand raises with Jacoby 2NT', () => {
    use({ splinters: false });
    expect(next('SK SJ S5 S4 HA H8 H5 H2 DK D9 D7 D3 C5', '1S P').call).not.toBe('4C');
  });
});

describe('control bids', () => {
  it('after Jacoby 2NT, responder with slam interest shows the cheapest control', () => {
    expect(next('SK SJ S5 S4 HA H8 H5 DK D9 D7 D3 CA C5', '1S P 2NT P 3S P')).toMatchObject({ call: '4C', tag: 'cue' });
  });
  it('partner shows a control above the cue bid, or signs off without one', () => {
    expect(next('SA SQ S10 S8 S3 HQ H4 DA D5 D2 CK C4 C2', '1S P 2NT P 3S P 4C P')).toMatchObject({ call: '4D', tag: 'cue' });
    expect(next('SA SQ S10 S8 S3 HQ H4 H2 DQ D5 D2 CK CQ', '1S P 2NT P 3S P 4C P').call).toBe('4S');
  });
  it('a cue bid is alerted and forcing', () => {
    const m = reading('1S P 2NT P 3S P 4C');
    expect(m).toMatchObject({ tag: 'cue', artificial: true, forcing: 'one' });
    expect(m.data).toEqual({ suit: 3, control: 0 });
  });
});

describe('new minor forcing', () => {
  it('asks with 11+ and five cards in the major (after 1♠, perhaps with four hearts too)', () => {
    expect(next('SK SQ S8 S5 S4 HA H3 DJ D4 CQ C9 C8 C2', '1D P 1S P 1NT P')).toMatchObject({ call: '2C', tag: 'nmf' });
    expect(next('SK SQ S8 S5 S4 HA HJ H3 H2 DJ D4 CQ C9', '1D P 1S P 1NT P')).toMatchObject({ call: '2C', tag: 'nmf' });
    expect(next('SA SJ S8 S4 HK H5 DQ D7 D3 CQ C10 C6 C2', '1D P 1S P 1NT P').call).not.toBe('2C');
  });
  it('opener shows three-card support, four hearts, or neither', () => {
    expect(next('SJ S7 S3 HK H5 H4 DA DQ D8 D5 CK C6 C3', '1D P 1S P 1NT P 2C P')).toMatchObject({ call: '2S', tag: 'nmfReply' });
    expect(next('SJ S7 HK H8 H5 H4 DA DQ D8 D5 CK C6 C3', '1D P 1S P 1NT P 2C P')).toMatchObject({ call: '2H', tag: 'nmfReply' });
    const none = next('SJ S7 HK H8 H5 DA DQ D8 D5 CK CQ C6 C3', '1D P 1S P 1NT P 2C P');
    expect(none).toMatchObject({ call: '3NT', tag: 'nmfReply' });
    expect(none.meaning.shown.len[3][1]).toBe(2);
  });
  it('responder invites or bids game in the fit, or passes 2NT', () => {
    expect(next('SK SQ S8 S5 S4 HA H3 DJ D4 CQ C9 C8 C2', '1D P 1S P 1NT P 2C P 2S P')).toMatchObject({ call: '3S', tag: 'invite' });
    expect(next('SK SQ S8 S5 S4 HA H3 DJ D4 CK C9 C8 C2', '1D P 1S P 1NT P 2C P 2S P').call).toBe('4S');
    expect(next('SK SQ S8 S5 S4 HA H3 DJ D4 CQ C9 C8 C2', '1D P 1S P 1NT P 2C P 2NT P').call).toBe('P');
  });
  it('switched off, 2♣ is not artificial', () => {
    use({ newMinorForcing: false });
    expect(reading('1D P 1S P 1NT P 2C').tag).toBeUndefined();
  });
});

describe('fourth suit forcing', () => {
  it('the fourth suit is artificial and forcing to game', () => {
    const r = next('S7 S2 HA HK HJ H8 H4 D8 D5 D3 CK CQ C5', '1C P 1H P 1S P');
    expect(r).toMatchObject({ call: '2D', tag: 'fsf' });
    expect(r.meaning).toMatchObject({ artificial: true, forcing: 'game' });
  });
  it('opener shows a stopper with notrump, or three-card support', () => {
    expect(next('SA SQ S5 S4 H6 H3 DK D9 D2 CA C8 C7 C6', '1C P 1H P 1S P 2D P')).toMatchObject({ call: '2NT', tag: 'fsfReply' });
    expect(next('SA SQ S5 S4 HQ H6 H3 D9 D2 CA C8 C7 C6', '1C P 1H P 1S P 2D P')).toMatchObject({ call: '2H', tag: 'fsfReply' });
  });
  it('responder then places the game', () => {
    expect(next('S7 S2 HA HK HJ H8 H4 D8 D5 D3 CK CQ C5', '1C P 1H P 1S P 2D P 2NT P').call).toBe('3NT');
  });
});

describe('Texas transfers', () => {
  const sixSpades = 'SK SQ S10 S9 S6 S5 HA H4 DK D7 D3 C8 C5';
  it('1NT – 4♥ shows six spades and game values; opener completes', () => {
    const r = next(sixSpades, '1N P');
    expect(r).toMatchObject({ call: '4H', tag: 'texas' });
    expect(r.meaning.artificial).toBe(true);
    expect(r.meaning.shown.len[3][0]).toBe(6);
    expect(next('SA S4 S3 HK HQ H5 DA D8 D2 CK C9 C7 C3', '1N P 4H P').call).toBe('4S');
  });
  it('responder passes without slam interest and asks for key cards with it', () => {
    expect(next(sixSpades, '1N P 4H P 4S P').call).toBe('P');
    expect(next('SA SK SQ SJ S6 S5 HA H4 DK DQ D3 C8 C5', '1N P 4H P 4S P')).toMatchObject({ call: '4NT', tag: 'rkcb' });
  });
  it('works over 2NT too', () => {
    expect(next('S5 S4 HQ HJ H9 H8 H6 H5 DK D7 D3 C8 C5', '2N P')).toMatchObject({ call: '4D', tag: 'texas' });
  });
  it('switched off, the hand transfers at the two level', () => {
    use({ texas: false });
    expect(next(sixSpades, '1N P').call).toBe('2H');
  });
});

describe('Reverse Drury', () => {
  const drury = 'SK S8 S4 HA H9 H3 H2 DK D7 D3 C9 C5 C2';
  it('is off by default', () => {
    expect(next(drury, 'P P 1S P').call).not.toBe('2C');
  });
  it('a passed hand’s 2♣ shows three-card support and 10–12', () => {
    use({ drury: true });
    const r = next(drury, 'P P 1S P');
    expect(r).toMatchObject({ call: '2C', tag: 'drury' });
    expect(r.meaning.artificial).toBe(true);
  });
  it('opener rebids two of the major with a minimum, game with extras; then responder passes', () => {
    use({ drury: true });
    expect(next('SA SQ S10 S8 S3 HK H4 DJ D5 D2 C8 C4 C2', 'P P 1S P 2C P', 1)).toMatchObject({ call: '2S', tag: 'druryReply' });
    expect(next('SA SQ S10 S8 S3 HK H4 DA D5 D2 CK C4 C2', 'P P 1S P 2C P', 1)).toMatchObject({ call: '4S', tag: 'druryReply' });
    expect(next(drury, 'P P 1S P 2C P 2S P').call).toBe('P');
  });
});

describe('condition texts', () => {
  it('never name an empty list of the opponents’ suits (their only bid was an artificial 2♣)', () => {
    const advice = advise(hand('SK SQ S4 S2 HA H3 DA D9 D6 D2 CK C5 C2'), readAuction(auction('2C', 0), 'None').ctx);
    const texts = [advice, ...advice.alternatives].flatMap(r => r.checks.map(c => c.text));
    expect(texts.length).toBeGreaterThan(0);
    for (const t of texts) expect(t, t).not.toMatch(/ in \(| in $| {2}/);
  });
});
