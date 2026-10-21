// Lessons that present an example auction as the one the bots bid must stay
// true: for each such diagram the North and South hands of the lesson's deal
// are bid again by the system (East and West pass, nobody vulnerable) and the
// auction must match the diagram exactly. The diagrams are listed explicitly:
// lesson id, the deal and auction diagrams by their order in the lesson, and
// the conventions the lesson assumes.

import { describe, it, expect, afterEach } from 'vitest';
import { Auction, PASS, callShort } from '../src/core/auction';
import { parseCard, type Card, type Seat } from '../src/core/cards';
import { readAuction, advise } from '../src/bidding/engine';
import { setSystem, DEFAULT_SYSTEM, type SystemConfig } from '../src/bidding/config';
import { content } from '../src/learn/content/en';

interface Claimed {
  lesson: string;
  deal: number; // index among the lesson's deal diagrams
  auction: number; // index among the lesson's auction diagrams
  system?: Partial<SystemConfig>; // differences from the default system
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
];

/** Auctions a lesson describes in words as the bots' auction, with the default system. */
const DESCRIBED: { lesson: string; deal: number; calls: string; system?: Partial<SystemConfig>; why: string }[] = [
  // "With Roman Key Card Blackwood, as the bots play, North replies 5♦ … and 6♠ is reached just the same."
  // (the same 4NT as in the diagram; with control bids on the bots cue bid first)
  { lesson: 'slam-bidding-and-blackwood', deal: 0, calls: '1S P 2NT P 3S P 4NT P 5D P 6S P P P', system: { controlBids: false }, why: 'Roman Key Card reply in the text' },
];

/** Diagram data attributes of one kind, in order. */
function diagrams(body: string, cls: 'deal' | 'auction'): Record<string, string>[] {
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

/** The bots' auction for North and South, East and West passing throughout. */
function bidNS(north: Card[], south: Card[], dealer: Seat): string {
  const a = new Auction(dealer);
  while (!a.isComplete()) {
    const seat = a.nextSeat;
    if (seat === 1 || seat === 3) a.push(PASS);
    else a.push(advise(seat === 0 ? north : south, readAuction(a, 'None').ctx).call);
  }
  return a.calls.map(callShort).join(' ');
}

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
      setSystem({ ...DEFAULT_SYSTEM, ...c.system });
      const dealer = 'NESW'.indexOf(auction.dealer) as Seat;
      expect(bidNS(holding(deal.n), holding(deal.s), dealer)).toBe(auction.calls);
    });
  }
  for (const c of DESCRIBED) {
    it(`${c.lesson}: deal ${c.deal + 1} (${c.why})`, () => {
      const lesson = content.lessons.find(l => l.id === c.lesson)!;
      const deal = diagrams(lesson.body, 'deal')[c.deal];
      setSystem({ ...DEFAULT_SYSTEM, ...c.system });
      expect(bidNS(holding(deal.n), holding(deal.s), 0)).toBe(c.calls);
    });
  }
});
