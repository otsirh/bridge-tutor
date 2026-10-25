import { describe, it, expect, beforeAll } from 'vitest';
import { setLang, T } from '../src/i18n';
import { bid, PASS, type Contract } from '../src/core/auction';
import { parseCard, suitOf, rankOf, type Card, type Seat } from '../src/core/cards';
import type { CallRecord } from '../src/bidding/context';
import type { Shown } from '../src/bidding/types';
import { openingLeadChoices } from '../src/engine/leads';

const N: Seat = 0, E: Seat = 1, S: Seat = 2, W: Seat = 3;
const hand = (s: string): Card[] => s.split(' ').map(parseCard);
const anyShape = (): Shown => ({ hcp: [0, 37], len: [[0, 13], [0, 13], [0, 13], [0, 13]], balanced: null });
/** A call record with just what the lead logic reads. */
const rec = (index: number, seat: Seat, call: number, artificial = false, len?: [number, number][]): CallRecord =>
  ({ index, seat, call, meaning: { artificial, shown: { ...anyShape(), ...(len ? { len } : {}) } } }) as unknown as CallRecord;

describe('opening leads', () => {
  beforeAll(() => setLang('en'));
  const X = () => T.tutor.leads.suit;

  it('leads passively against a notrump slam, not away from an honour', () => {
    const west = hand('SQ S7 S4 H8 H5 H4 DA D6 D3 D2 CK C9 C5');
    const vs = (level: number): Contract => ({ level, strain: 4, declarer: S, doubled: 0 });
    // against 3NT: fourth best from the long suit
    expect(openingLeadChoices(west, vs(3), [], W)[0].card).toBe(parseCard('D2'));
    // against 6NT: top of nothing from ♥854, not the ♠4 from Q74 or a diamond away from the ace
    const slam = openingLeadChoices(west, vs(6), [], W);
    expect(slam[0].card).toBe(parseCard('H8'));
    expect(slam[0].suitReason).toBe(X().slamSafe);
    expect(slam.find(c => suitOf(c.card) === 3)!.suitReason).toBe(X().slamRisky);
  });

  it('avoids unsupported honours against a suit slam too', () => {
    const west = hand('S5 S4 HK H7 H3 DQ D6 D2 C9 C8 C6 C2 C3');
    const first = openingLeadChoices(west, { level: 6, strain: 3, declarer: S, doubled: 0 }, [], W)[0];
    expect(rankOf(first.card)).toBeLessThan(11);
    // a sequence is still a fine lead
    const seq = hand('S5 S4 HK H7 H3 DQ DJ DT C9 C8 C6 C2 C3');
    expect(openingLeadChoices(seq, { level: 6, strain: 3, declarer: S, doubled: 0 }, [], W)[0].card).toBe(parseCard('DQ'));
  });

  it('credits partner only with suits partner showed as its own', () => {
    // West shows both majors with a Michaels cue bid; East gives preference to spades; South plays 5♦
    const west = hand('SK SJ S9 S8 S5 HQ HT H8 H7 H4 D4 C3 C2');
    const contract: Contract = { level: 5, strain: 1, declarer: S, doubled: 0 };
    const michaels = [[0, 13], [0, 13], [5, 13], [5, 13]] as [number, number][];
    const preference = [rec(0, S, bid(1, 0)), rec(1, W, bid(2, 0), true, michaels), rec(2, N, PASS), rec(3, E, bid(2, 3))];
    const spade = openingLeadChoices(west, contract, preference, W).find(c => suitOf(c.card) === 3)!;
    expect(spade.suitReason).toBe(X().supported(3));
    // East bidding spades on its own first is partner's suit
    const own = [rec(0, S, bid(1, 0)), rec(1, W, PASS), rec(2, N, PASS), rec(3, E, bid(1, 3))];
    const lead = openingLeadChoices(west, contract, own, W)[0];
    expect(suitOf(lead.card)).toBe(3);
    expect(lead.suitReason).toBe(X().partnerBid(3));
  });
});
