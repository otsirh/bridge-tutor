// Lessons that present an example auction as the one the bots bid must stay
// true: for each such diagram the North and South hands of the lesson's deal
// are bid again by the system (nobody vulnerable) and the auction must match
// the diagram exactly. East and West make the diagram's calls (passes in most
// lessons), or are bid by the system too when the deal shows their hands and
// the entry says so. The diagrams are listed explicitly: lesson id, the deal
// and auction diagrams by their order in the lesson, and the conventions the
// lesson assumes. Hands whose call a lesson gives (hand diagrams and quiz
// hands) are listed with the auction before them and checked the same way.

import { describe, it, expect, afterEach } from 'vitest';
import { Auction, PASS, callShort, parseCall } from '../src/core/auction';
import { parseCard, type Card, type Seat } from '../src/core/cards';
import { readAuction, advise } from '../src/bidding/engine';
import { setSystem, DEFAULT_SYSTEM, type SystemConfig } from '../src/bidding/config';
import { content } from '../src/learn/content/en';

interface Claimed {
  lesson: string;
  deal: number; // index among the lesson's deal diagrams
  auction: number; // index among the lesson's auction diagrams
  system?: Partial<SystemConfig>; // differences from the default system
  all?: boolean; // East and West are bid by the system too (the deal shows their hands)
  why: string; // where the lesson says this is what the bots bid
}

const CLAIMED: Claimed[] = [
  // "Every example auction is the one the bots bid with these hands." (conventions lessons)
  { lesson: 'roman-key-card-blackwood', deal: 0, auction: 0, why: 'conventions lessons' },
  { lesson: 'roman-key-card-blackwood', deal: 1, auction: 1, why: 'conventions lessons' },
  { lesson: 'splinters-and-drury', deal: 0, auction: 0, why: 'conventions lessons' },
  { lesson: 'splinters-and-drury', deal: 1, auction: 1, why: 'conventions lessons' },
  { lesson: 'splinters-and-drury', deal: 2, auction: 2, system: { drury: true }, why: 'conventions lessons (Drury switched on)' },
  { lesson: 'new-minor-and-fourth-suit-forcing', deal: 0, auction: 0, why: 'conventions lessons' },
  { lesson: 'new-minor-and-fourth-suit-forcing', deal: 1, auction: 2, why: 'conventions lessons' },
  { lesson: 'texas-transfers', deal: 0, auction: 0, why: 'conventions lessons' },
  { lesson: 'texas-transfers', deal: 1, auction: 1, why: 'conventions lessons' },
  { lesson: 'texas-transfers', deal: 2, auction: 2, why: 'conventions lessons' },
  // "The bots bid this way once a major is agreed in a game-forcing auction …"
  { lesson: 'slam-controls-and-cue-bids', deal: 0, auction: 0, why: 'cue-bid example' },
  // the plain Blackwood example, bid with plain Blackwood and no control bids
  { lesson: 'slam-bidding-and-blackwood', deal: 0, auction: 0, system: { rkcb: false, controlBids: false }, why: 'Blackwood example' },
  // the play examples come with the auction that reached the contract
  { lesson: 'planning-the-play', deal: 0, auction: 0, why: 'notrump planning example' },
  { lesson: 'planning-the-play', deal: 1, auction: 1, why: 'suit planning example' },
  // the competitive lessons teach what the bots bid (the opponents' calls as in the diagram)
  { lesson: 'competing-over-1nt', deal: 0, auction: 2, why: 'advancing a 2♥ overcall of 1NT' },
  { lesson: 'competing-over-preempts', deal: 0, auction: 1, why: 'advancing a double of a weak two' },
  { lesson: 'when-they-double-us', deal: 0, auction: 1, all: true, why: 'redouble, then a penalty double (all four hands bid by the bots)' },
  { lesson: 'when-they-double-us', deal: 1, auction: 2, why: 'Jordan 2NT' },
];

/** Auctions a lesson describes in words as the bots' auction, with the default system. */
const DESCRIBED: { lesson: string; deal: number; calls: string; system?: Partial<SystemConfig>; why: string }[] = [
  // "With Roman Key Card Blackwood, as the bots play, North replies 5♦ … and 6♠ is reached just the same."
  // (the same 4NT as in the diagram; with control bids on the bots cue bid first)
  { lesson: 'slam-bidding-and-blackwood', deal: 0, calls: '1S P 2NT P 3S P 4NT P 5D P 6S P P P', system: { controlBids: false }, why: 'Roman Key Card reply in the text' },
];

/**
 * Hands whose call a lesson gives: a hand diagram (by its order in the lesson)
 * or a hand from the text or the quiz, the auction before it (dealer and calls)
 * and the call.
 */
const CALLS: { lesson: string; hand: number | string; dealer: string; before: string; call: string }[] = [
  // competing-over-1nt
  { lesson: 'competing-over-1nt', hand: 0, dealer: 'W', before: '1NT', call: '2S' },
  { lesson: 'competing-over-1nt', hand: 1, dealer: 'W', before: '1NT', call: '2S' },
  { lesson: 'competing-over-1nt', hand: 2, dealer: 'W', before: '1NT', call: '2D' },
  { lesson: 'competing-over-1nt', hand: 3, dealer: 'W', before: '1NT', call: 'X' },
  { lesson: 'competing-over-1nt', hand: 4, dealer: 'W', before: '1NT', call: 'X' },
  { lesson: 'competing-over-1nt', hand: 5, dealer: 'W', before: '1NT', call: 'P' },
  { lesson: 'competing-over-1nt', hand: 6, dealer: 'W', before: '1NT', call: 'P' },
  { lesson: 'competing-over-1nt', hand: 7, dealer: 'W', before: '1NT P P', call: '2S' },
  { lesson: 'competing-over-1nt', hand: 7, dealer: 'W', before: '1NT', call: 'P' },
  { lesson: 'competing-over-1nt', hand: 8, dealer: 'W', before: '1NT P P', call: 'X' },
  { lesson: 'competing-over-1nt', hand: 'S:Q852 H:Q73 D:K84 C:962', dealer: 'W', before: '1NT 2H P', call: '3H' },
  { lesson: 'competing-over-1nt', hand: 'S:K852 H:Q73 D:AJ4 C:Q62', dealer: 'W', before: '1NT 2H P', call: '3C' },
  { lesson: 'competing-over-1nt', hand: 'S:4 H:AKJ1052 D:Q93 C:J84', dealer: 'W', before: '1NT 2H P 3C P', call: '4H' },
  { lesson: 'competing-over-1nt', hand: 'S:K85 H:4 D:AK9652 C:J84', dealer: 'W', before: '1NT 2H P', call: 'P' },
  { lesson: 'competing-over-1nt', hand: 'S:KQ105 H:AJ94 D:K52 C:84', dealer: 'W', before: '1NT', call: 'P' },
  { lesson: 'competing-over-1nt', hand: 'S:Q85 H:J94 D:9652 C:J84', dealer: 'W', before: '1NT X P', call: 'P' },
  { lesson: 'competing-over-1nt', hand: 'S:KQ105 H:A94 D:K52 C:Q84', dealer: 'W', before: '1NT P P X P', call: 'P' },
  // competing-over-preempts
  { lesson: 'competing-over-preempts', hand: 0, dealer: 'W', before: '2H', call: 'X' },
  { lesson: 'competing-over-preempts', hand: 1, dealer: 'W', before: '2H', call: '2S' },
  { lesson: 'competing-over-preempts', hand: 2, dealer: 'W', before: '2H', call: '2NT' },
  { lesson: 'competing-over-preempts', hand: 3, dealer: 'W', before: '2H', call: 'P' },
  { lesson: 'competing-over-preempts', hand: 'S:K4 H:AQ1093 D:K83 C:J106', dealer: 'W', before: '2H', call: 'P' },
  { lesson: 'competing-over-preempts', hand: 4, dealer: 'W', before: '3H', call: 'X' },
  { lesson: 'competing-over-preempts', hand: 'S:AJ74 H:5 D:KQ83 C:K1062', dealer: 'W', before: '3H', call: 'P' },
  { lesson: 'competing-over-preempts', hand: 5, dealer: 'W', before: '3H', call: '3NT' },
  { lesson: 'competing-over-preempts', hand: 6, dealer: 'W', before: '3H', call: '3S' },
  { lesson: 'competing-over-preempts', hand: 'S:AJ74 H:5 D:KQ83 C:K1062', dealer: 'W', before: '2H X P 2S P', call: '3S' },
  { lesson: 'competing-over-preempts', hand: 'S:KJ5 H:AQ4 D:KQ83 C:J106', dealer: 'W', before: '2S', call: '2NT' },
  { lesson: 'competing-over-preempts', hand: 'S:96 H:KQJ104 D:Q105 C:J84', dealer: 'W', before: '2H X P', call: 'P' },
  { lesson: 'competing-over-preempts', hand: 'S:K9632 H:874 D:A52 C:K4', dealer: 'W', before: '2H X P', call: '4S' },
  { lesson: 'competing-over-preempts', hand: 'S:K96 H:Q874 D:A52 C:Q84', dealer: 'W', before: '2S X P', call: '4H' },
  { lesson: 'competing-over-preempts', hand: 'S:K963 H:874 D:A52 C:Q84', dealer: 'W', before: '3H X P', call: '4S' },
  { lesson: 'competing-over-preempts', hand: 'S:KJ9643 H:87 D:Q52 C:84', dealer: 'W', before: '2H 2NT P', call: '3S' },
  { lesson: 'competing-over-preempts', hand: 'S:K96 H:874 D:KQ52 C:K84', dealer: 'W', before: '3H 3NT P', call: 'P' },
  // when-they-double-us
  { lesson: 'when-they-double-us', hand: 0, dealer: 'N', before: '1H X', call: '2NT' },
  { lesson: 'when-they-double-us', hand: 1, dealer: 'N', before: '1H X', call: 'XX' },
  { lesson: 'when-they-double-us', hand: 2, dealer: 'N', before: '1H X', call: '3H' },
  { lesson: 'when-they-double-us', hand: 3, dealer: 'N', before: '1H X', call: '2H' },
  { lesson: 'when-they-double-us', hand: 4, dealer: 'N', before: '1H X', call: '1S' },
  { lesson: 'when-they-double-us', hand: 5, dealer: 'N', before: '1H X', call: '1NT' },
  { lesson: 'when-they-double-us', hand: 6, dealer: 'N', before: '1D X', call: '1H' },
  { lesson: 'when-they-double-us', hand: 7, dealer: 'N', before: '1D X', call: '3D' },
  { lesson: 'when-they-double-us', hand: 8, dealer: 'N', before: '1NT X', call: '2D' },
  { lesson: 'when-they-double-us', hand: 9, dealer: 'N', before: '1NT X', call: 'XX' },
  { lesson: 'when-they-double-us', hand: 10, dealer: 'N', before: '1NT X', call: 'P' },
  { lesson: 'when-they-double-us', hand: 'S:A5 H:QJ10842 D:K72 C:84', dealer: 'N', before: '1H X XX P', call: '2H' },
  { lesson: 'when-they-double-us', hand: 'S:A5 H:AQJ84 D:K1072 C:84', dealer: 'N', before: '1H X XX P', call: 'P' },
  { lesson: 'when-they-double-us', hand: 'S:8742 H:109732 D:86 C:53', dealer: 'N', before: '1H X XX', call: 'P' },
];

/** Diagram data attributes of one kind, in order. */
function diagrams(body: string, cls: 'deal' | 'auction' | 'hand'): Record<string, string>[] {
  const out: Record<string, string>[] = [];
  for (const m of body.matchAll(/<div class="([a-z]+)"([^>]*)><\/div>/g)) {
    if (m[1] !== cls) continue;
    out.push(Object.fromEntries([...m[2].matchAll(/data-([a-z]+)="([^"]*)"/g)].map(a => [a[1], a[2]])));
  }
  return out;
}

/** "S:AK52 H:KJ3 D:Q72 C:A85" (ten as "10", "-" for a void) to cards. */
function holding(spec: string): Card[] {
  const cards: Card[] = [];
  for (const part of spec.split(' ')) {
    const suit = part[0];
    for (const r of part.slice(2).match(/10|[AKQJ2-9]/g) ?? []) cards.push(parseCard(suit + r));
  }
  return cards;
}

/**
 * The bots' auction: North and South (and East and West when `all`) bid by the
 * system; the other seats make the given calls, and pass once those run out.
 */
function bidDeal(hands: (Card[] | undefined)[], dealer: Seat, given: string[] = [], all = false): string {
  const a = new Auction(dealer);
  while (!a.isComplete() && a.calls.length < 60) {
    const seat = a.nextSeat;
    const hand = hands[seat];
    const g = given[a.calls.length];
    if (hand && (all || seat === 0 || seat === 2)) a.push(advise(hand, readAuction(a, 'None').ctx).call);
    else a.push(g ? parseCall(g) : PASS);
  }
  return a.calls.map(callShort).join(' ');
}

/** The deal diagram's hands by seat (N E S W), undefined where it shows none. */
const dealHands = (deal: Record<string, string>) => ['n', 'e', 's', 'w'].map(k => (deal[k] ? holding(deal[k]) : undefined));

afterEach(() => setSystem(DEFAULT_SYSTEM));

describe('lesson auctions claimed as the bots’ auctions', () => {
  for (const c of CLAIMED) {
    it(`${c.lesson}: deal ${c.deal + 1}, auction ${c.auction + 1} (${c.why})`, () => {
      const lesson = content.lessons.find(l => l.id === c.lesson);
      expect(lesson, c.lesson).toBeDefined();
      const deal = diagrams(lesson!.body, 'deal')[c.deal];
      const auction = diagrams(lesson!.body, 'auction')[c.auction];
      expect(deal?.n && deal?.s, 'deal with North and South hands').toBeTruthy();
      expect(auction?.calls, 'auction diagram').toBeTruthy();
      if (c.all) expect(deal.e && deal.w, 'deal with East and West hands').toBeTruthy();
      setSystem({ ...DEFAULT_SYSTEM, ...c.system });
      const dealer = 'NESW'.indexOf(auction.dealer) as Seat;
      expect(bidDeal(dealHands(deal), dealer, auction.calls.split(' '), c.all)).toBe(auction.calls);
    });
  }
  for (const c of DESCRIBED) {
    it(`${c.lesson}: deal ${c.deal + 1} (${c.why})`, () => {
      const lesson = content.lessons.find(l => l.id === c.lesson)!;
      const deal = diagrams(lesson.body, 'deal')[c.deal];
      setSystem({ ...DEFAULT_SYSTEM, ...c.system });
      expect(bidDeal([holding(deal.n), undefined, holding(deal.s), undefined], 0)).toBe(c.calls);
    });
  }
});

describe('calls lessons give for a hand are the bots’ calls', () => {
  for (const c of CALLS) {
    it(`${c.lesson}: ${typeof c.hand === 'number' ? `hand diagram ${c.hand + 1}` : c.hand} after ${c.before}`, () => {
      const lesson = content.lessons.find(l => l.id === c.lesson);
      expect(lesson, c.lesson).toBeDefined();
      const spec = typeof c.hand === 'number' ? diagrams(lesson!.body, 'hand')[c.hand]?.cards : c.hand;
      expect(spec, 'hand').toBeTruthy();
      const before = new Auction('NESW'.indexOf(c.dealer) as Seat, c.before.split(' ').map(parseCall));
      expect(callShort(advise(holding(spec!), readAuction(before, 'None').ctx).call)).toBe(c.call);
    });
  }
});
