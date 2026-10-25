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
import { parseCard, type Card, type Seat, type Vulnerability } from '../src/core/cards';
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
  { lesson: 'new-minor-and-fourth-suit-forcing', deal: 1, auction: 1, why: 'conventions lessons' },
  { lesson: 'new-minor-and-fourth-suit-forcing', deal: 2, auction: 2, why: 'conventions lessons' },
  { lesson: 'texas-transfers', deal: 0, auction: 0, why: 'conventions lessons' },
  { lesson: 'texas-transfers', deal: 1, auction: 1, why: 'conventions lessons' },
  { lesson: 'texas-transfers', deal: 2, auction: 2, why: 'conventions lessons' },
  // the bidding lessons' example deals
  { lesson: 'responders-rebid-and-choosing-game', deal: 0, auction: 2, why: 'choosing the game' },
  { lesson: 'weak-twos-and-preempts', deal: 0, auction: 0, why: 'the 2NT feature ask' },
  // "The bots bid this way once a major is agreed in a game-forcing auction …"
  { lesson: 'slam-controls-and-cue-bids', deal: 0, auction: 0, why: 'cue-bid example' },
  // the plain Blackwood example, bid with plain Blackwood and no control bids
  { lesson: 'slam-bidding-and-blackwood', deal: 0, auction: 0, system: { rkcb: false, controlBids: false }, why: 'Blackwood example' },
  // the play examples come with the auction that reached the contract
  { lesson: 'planning-the-play', deal: 0, auction: 0, why: 'notrump planning example' },
  { lesson: 'planning-the-play', deal: 1, auction: 1, why: 'suit planning example' },
  { lesson: 'establishing-long-suits', deal: 0, auction: 0, why: 'long-suit example' },
  { lesson: 'hold-up-and-entries', deal: 0, auction: 0, why: 'hold-up example' },
  { lesson: 'suit-combinations-and-odds', deal: 0, auction: 0, why: 'suit-combination example' },
  { lesson: 'avoidance-play', deal: 0, auction: 0, why: 'avoidance example' },
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
 * or a hand from the text or the quiz, the auction before it (dealer and calls,
 * empty for an opening bid), the call, and the vulnerability when the lesson
 * names one (nobody vulnerable otherwise).
 */
const CALLS: { lesson: string; hand: number | string; dealer: string; before: string; call: string; vul?: Vulnerability }[] = [
  // hand-evaluation
  { lesson: 'hand-evaluation', hand: 1, dealer: 'N', before: '1H P', call: '3H' },
  { lesson: 'hand-evaluation', hand: 2, dealer: 'N', before: '', call: '1S' },
  { lesson: 'hand-evaluation', hand: 3, dealer: 'N', before: '1S P', call: '3S' },
  { lesson: 'hand-evaluation', hand: 'S:QJ5 H:K92 D:QJ84 C:Q73', dealer: 'N', before: '', call: 'P' },
  { lesson: 'hand-evaluation', hand: 'S:KJ63 H:A82 D:Q74 C:J93', dealer: 'N', before: 'P P P', call: '1C' },
  // opening-bids
  { lesson: 'opening-bids', hand: 0, dealer: 'N', before: '', call: '1NT' },
  { lesson: 'opening-bids', hand: 1, dealer: 'N', before: '', call: '1D' },
  { lesson: 'opening-bids', hand: 2, dealer: 'N', before: '', call: '1S' },
  { lesson: 'opening-bids', hand: 3, dealer: 'N', before: '', call: '1D' },
  { lesson: 'opening-bids', hand: 4, dealer: 'N', before: '', call: '1C' },
  { lesson: 'opening-bids', hand: 5, dealer: 'N', before: '', call: '2NT' },
  { lesson: 'opening-bids', hand: 'S:K6 H:AQ1083 D:AJ1074 C:5', dealer: 'N', before: '', call: '1H' },
  { lesson: 'opening-bids', hand: 'S:J5 H:K82 D:AQ6 C:KJ1073', dealer: 'N', before: '', call: '1C' },
  { lesson: 'opening-bids', hand: 'S:KQ4 H:AJ6 D:Q1092 C:KJ5', dealer: 'N', before: '', call: '1NT' },
  { lesson: 'opening-bids', hand: 'S:AJ8 H:Q1074 D:K92 C:Q83', dealer: 'N', before: '', call: '1C' },
  // responding-to-one-of-a-suit
  { lesson: 'responding-to-one-of-a-suit', hand: 0, dealer: 'N', before: '1S P', call: '2S' },
  { lesson: 'responding-to-one-of-a-suit', hand: 1, dealer: 'N', before: '1S P', call: '3S' },
  { lesson: 'responding-to-one-of-a-suit', hand: 2, dealer: 'N', before: '1S P', call: '2NT' },
  { lesson: 'responding-to-one-of-a-suit', hand: 3, dealer: 'N', before: '1D P', call: '1H' },
  { lesson: 'responding-to-one-of-a-suit', hand: 4, dealer: 'N', before: '1C P', call: '1NT' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:KQ74 H:A853 D:K962 C:5', dealer: 'N', before: '1S P', call: '4C' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:4 H:QJ852 D:K9763 C:82', dealer: 'N', before: '1H P', call: '4H' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:A84 H:K93 D:KJ752 C:64', dealer: 'N', before: '1H P', call: '2D' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:A84 H:K93 D:KJ752 C:64', dealer: 'N', before: '1H P 2D P 2H P', call: '4H' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:K5 H:832 D:KJ763 C:A94', dealer: 'N', before: '1D P', call: '3D' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:KQ5 H:J104 D:A963 C:J72', dealer: 'N', before: '1C P', call: '1D' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:K72 H:Q84 D:J953 C:Q62', dealer: 'N', before: '1H P', call: '2H' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:Q1075 H:A94 D:KQ63 C:K8', dealer: 'N', before: '1S P', call: '2NT' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:AJ85 H:K1062 D:74 C:953', dealer: 'N', before: '1D P', call: '1H' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:K94 H:Q73 D:AJ5 C:K1062', dealer: 'N', before: '1C P', call: '2NT' },
  { lesson: 'responding-to-one-of-a-suit', hand: 'S:5 H:AQ94 D:K8 C:QJ7532', dealer: 'N', before: '1S P', call: '2C' },
  // openers-rebid
  { lesson: 'openers-rebid', hand: 0, dealer: 'N', before: '1D P 1S P', call: '1NT' },
  { lesson: 'openers-rebid', hand: 1, dealer: 'N', before: '1D P 1S P', call: '3S' },
  { lesson: 'openers-rebid', hand: 2, dealer: 'N', before: '1D P 1S P', call: '2H' },
  { lesson: 'openers-rebid', hand: 3, dealer: 'N', before: '1D P 1S P', call: '3C' },
  { lesson: 'openers-rebid', hand: 'S:5 H:AQ74 D:AJ985 C:Q63', dealer: 'N', before: '1D P 1S P', call: '2D' },
  { lesson: 'openers-rebid', hand: 'S:Q4 H:K83 D:AQ1063 C:K72', dealer: 'N', before: '1D P 1S P', call: '1NT' },
  { lesson: 'openers-rebid', hand: 'S:A5 H:KQ94 D:K6 C:AQ872', dealer: 'N', before: '1C P 1H P', call: '4H' },
  { lesson: 'openers-rebid', hand: 'S:A6 H:J4 D:AKJ852 C:K93', dealer: 'N', before: '1D P 1H P', call: '3D' },
  { lesson: 'openers-rebid', hand: 'S:AQJ84 H:K73 D:A62 C:95', dealer: 'N', before: '1S P 2S P', call: 'P' },
  // notrump-bidding
  { lesson: 'notrump-bidding', hand: 0, dealer: 'N', before: '1NT P', call: '2C' },
  { lesson: 'notrump-bidding', hand: 1, dealer: 'N', before: '1NT P', call: '2H' },
  { lesson: 'notrump-bidding', hand: 1, dealer: 'N', before: '1NT P 2H P 2S P', call: 'P' },
  { lesson: 'notrump-bidding', hand: 2, dealer: 'N', before: '1NT P', call: '2D' },
  { lesson: 'notrump-bidding', hand: 2, dealer: 'N', before: '1NT P 2D P 2H P', call: '3NT' },
  { lesson: 'notrump-bidding', hand: 'S:52 H:742 D:J3 C:Q108653', dealer: 'N', before: '1NT P', call: '2S' },
  { lesson: 'notrump-bidding', hand: 'S:KQ5 H:AJ4 D:KJ63 C:Q72', dealer: 'N', before: '1NT P', call: '4NT' },
  { lesson: 'notrump-bidding', hand: 'S:J8752 H:84 D:932 C:Q65', dealer: 'N', before: '1NT P', call: '2H' },
  { lesson: 'notrump-bidding', hand: 'S:J8752 H:84 D:932 C:Q65', dealer: 'N', before: '1NT P 2H P 2S P', call: 'P' },
  { lesson: 'notrump-bidding', hand: 'S:KJ84 H:A962 D:Q73 C:J5', dealer: 'N', before: '1NT P 2C P 2H P', call: '4H' },
  { lesson: 'notrump-bidding', hand: 'S:KQ75 H:AJ83 D:K4 C:Q62', dealer: 'N', before: '1NT P 2C P', call: '2H' },
  { lesson: 'notrump-bidding', hand: 'S:Q8642 H:K7 D:J73 C:1052', dealer: 'N', before: '2NT P', call: '3H' },
  { lesson: 'notrump-bidding', hand: 'S:Q8642 H:K7 D:J73 C:1052', dealer: 'N', before: '2NT P 3H P 3S P', call: '3NT' },
  // responders-rebid-and-choosing-game
  { lesson: 'responders-rebid-and-choosing-game', hand: 0, dealer: 'N', before: '1D P 1S P 1NT P', call: '2NT' },
  { lesson: 'responders-rebid-and-choosing-game', hand: 1, dealer: 'N', before: '1H P 1S P 2H P', call: '3H' },
  { lesson: 'responders-rebid-and-choosing-game', hand: 'S:AJ84 H:K5 D:Q73 C:Q1062', dealer: 'N', before: '1D P 1S P 1NT P', call: '2NT' },
  { lesson: 'responders-rebid-and-choosing-game', hand: 'S:KJ753 H:Q43 D:J86 C:97', dealer: 'N', before: '1H P 1S P 2C P', call: '2H' },
  // strong-openings
  { lesson: 'strong-openings', hand: 0, dealer: 'N', before: '', call: '2C' },
  { lesson: 'strong-openings', hand: 1, dealer: 'N', before: '', call: '2C' },
  { lesson: 'strong-openings', hand: 1, dealer: 'N', before: '2C P 2D P', call: '2NT' },
  { lesson: 'strong-openings', hand: 2, dealer: 'N', before: '2C P', call: '2D' },
  { lesson: 'strong-openings', hand: 3, dealer: 'N', before: '2C P', call: '2H' },
  { lesson: 'strong-openings', hand: 4, dealer: 'N', before: '', call: '2NT' },
  { lesson: 'strong-openings', hand: 'S:J10642 H:Q85 D:73 C:962', dealer: 'N', before: '2NT P', call: '3H' },
  // weak-twos-and-preempts
  { lesson: 'weak-twos-and-preempts', hand: 0, dealer: 'N', before: '', call: '2H' },
  { lesson: 'weak-twos-and-preempts', hand: 1, dealer: 'N', before: '', call: '3C' },
  { lesson: 'weak-twos-and-preempts', hand: 2, dealer: 'N', before: '', call: '4S' },
  { lesson: 'weak-twos-and-preempts', hand: 'S:Q73 H:K842 D:A65 C:J94', dealer: 'N', before: '2S P', call: '3S' },
  { lesson: 'weak-twos-and-preempts', hand: 'S:K5 H:AQ10984 D:862 C:73', dealer: 'N', before: '2H P 2NT P', call: '3S' },
  // overcalls
  { lesson: 'overcalls', hand: 0, dealer: 'W', before: '1D', call: '1S' },
  { lesson: 'overcalls', hand: 1, dealer: 'W', before: '1S', call: '2D' },
  { lesson: 'overcalls', hand: 2, dealer: 'W', before: '1C', call: '1NT' },
  { lesson: 'overcalls', hand: 3, dealer: 'W', before: '1H', call: 'P' },
  { lesson: 'overcalls', hand: 4, dealer: 'W', before: '1H 1S P', call: '2S' },
  { lesson: 'overcalls', hand: 5, dealer: 'W', before: '1H 1S P', call: '2H' },
  { lesson: 'overcalls', hand: 5, dealer: 'W', before: '1H 1S P 2H P 2S P', call: '3S' },
  { lesson: 'overcalls', hand: 'S:KJ10984 H:73 D:Q52 C:43', dealer: 'W', before: '1C', call: '2S' },
  // takeout-doubles
  { lesson: 'takeout-doubles', hand: 0, dealer: 'W', before: '1D', call: 'X' },
  { lesson: 'takeout-doubles', hand: 1, dealer: 'W', before: '1D', call: 'P' },
  { lesson: 'takeout-doubles', hand: 2, dealer: 'W', before: '1H X P', call: '1S' },
  { lesson: 'takeout-doubles', hand: 3, dealer: 'W', before: '1H X P', call: '2S' },
  { lesson: 'takeout-doubles', hand: 'S:AJ74 H:85 D:KQ63 C:Q72', dealer: 'W', before: '1H X P', call: '2H' },
  { lesson: 'takeout-doubles', hand: 'S:AQ83 H:KJ62 D:Q1074 C:5', dealer: 'W', before: '1C', call: 'X' },
  { lesson: 'takeout-doubles', hand: 'S:K104 H:82 D:Q963 C:J752', dealer: 'W', before: '1S X P', call: '1NT' },
  // negative-doubles
  { lesson: 'negative-doubles', hand: 0, dealer: 'N', before: '1D 1S', call: 'X' },
  { lesson: 'negative-doubles', hand: 1, dealer: 'N', before: '1C 1H', call: 'X' },
  { lesson: 'negative-doubles', hand: 2, dealer: 'N', before: '1H 2C', call: 'X' },
  { lesson: 'negative-doubles', hand: 3, dealer: 'N', before: '1H 2C', call: 'P' },
  { lesson: 'negative-doubles', hand: 4, dealer: 'N', before: '1H 2C P P', call: 'X' },
  { lesson: 'negative-doubles', hand: 3, dealer: 'N', before: '1H 2C P P X P', call: 'P' },
  { lesson: 'negative-doubles', hand: 'S:KJ752 H:84 D:Q63 C:J95', dealer: 'N', before: '1C 1H', call: '1S' },
  // gerber-and-quantitative
  { lesson: 'gerber-and-quantitative', hand: 0, dealer: 'N', before: '1NT P', call: '4NT' },
  { lesson: 'gerber-and-quantitative', hand: 1, dealer: 'N', before: '1NT P', call: '4H' },
  { lesson: 'gerber-and-quantitative', hand: 1, dealer: 'N', before: '1NT P 4H P 4S P', call: '4NT' },
  // michaels-and-unusual-2nt
  { lesson: 'michaels-and-unusual-2nt', hand: 0, dealer: 'W', before: '1D', call: '2D' },
  { lesson: 'michaels-and-unusual-2nt', hand: 1, dealer: 'W', before: '1S', call: '2NT' },
  { lesson: 'michaels-and-unusual-2nt', hand: 2, dealer: 'W', before: '1D 2D P', call: '2H' },
  { lesson: 'michaels-and-unusual-2nt', hand: 3, dealer: 'W', before: '1H 2H P', call: '2NT' },
  { lesson: 'michaels-and-unusual-2nt', hand: 3, dealer: 'W', before: '1H 2H P 2NT P 3C P', call: 'P' },
  { lesson: 'michaels-and-unusual-2nt', hand: 3, dealer: 'W', before: '1H 2H P 2NT P 3D P', call: 'P' },
  // balancing
  { lesson: 'balancing', hand: 0, dealer: 'W', before: '1H P P', call: 'X' },
  { lesson: 'balancing', hand: 1, dealer: 'W', before: '1D P P', call: '1NT' },
  { lesson: 'balancing', hand: 2, dealer: 'E', before: '1S P 2S P P', call: 'X' },
  { lesson: 'balancing', hand: 3, dealer: 'W', before: '1H P P', call: 'P' },
  // law-of-total-tricks
  { lesson: 'law-of-total-tricks', hand: 0, dealer: 'S', before: '1S 2H 2S 3H', call: '3S' },
  { lesson: 'law-of-total-tricks', hand: 1, dealer: 'S', before: '1S 2H 2S 3H', call: 'P' },
  // penalty-doubles-and-sacrifices (at favourable vulnerability, as the label says)
  { lesson: 'penalty-doubles-and-sacrifices', hand: 0, dealer: 'W', before: '1S 2H 4S', call: '5H', vul: 'EW' },
  // roman-key-card-blackwood
  { lesson: 'roman-key-card-blackwood', hand: 0, dealer: 'N', before: '1S P 2NT P 4S P 4NT P', call: '5H' },
  { lesson: 'roman-key-card-blackwood', hand: 'S:A72 H:K965 D:Q84 C:J53', dealer: 'N', before: '1H P 3H P 4NT P', call: '5H' },
  // splinters-and-drury
  { lesson: 'splinters-and-drury', hand: 0, dealer: 'N', before: '1S P', call: '4H' },
  { lesson: 'splinters-and-drury', hand: 'S:KQ74 H:A853 D:K962 C:5', dealer: 'N', before: '1S P', call: '4C' },
  { lesson: 'splinters-and-drury', hand: 'S:AK1063 H:KQ5 D:Q84 C:K7', dealer: 'N', before: '1S P 4H P', call: '4S' },
  // new-minor-and-fourth-suit-forcing
  { lesson: 'new-minor-and-fourth-suit-forcing', hand: 'S:KQ1074 H:A63 D:Q85 C:J2', dealer: 'N', before: '1C P 1S P 1NT P', call: '2D' },
  { lesson: 'new-minor-and-fourth-suit-forcing', hand: 'S:KJ5 H:Q73 D:AQ84 C:Q62', dealer: 'N', before: '1D P 1H P 1NT P 2C P', call: '3H' },
  { lesson: 'new-minor-and-fourth-suit-forcing', hand: 'S:AQ74 H:J5 D:K103 C:KJ96', dealer: 'N', before: '1C P 1H P 1S P 2D P', call: '2NT' },
  { lesson: 'new-minor-and-fourth-suit-forcing', hand: 'S:KJ84 H:Q73 D:K5 C:J1063', dealer: 'N', before: '1D P 1S P 1NT P', call: 'P' },
  { lesson: 'new-minor-and-fourth-suit-forcing', hand: 'S:AQ984 H:K6 D:J3 C:Q1052', dealer: 'N', before: '1D P 1S P 1NT P', call: '2C' },
  { lesson: 'new-minor-and-fourth-suit-forcing', hand: 'S:J9852 H:43 D:K82 C:1074', dealer: 'N', before: '1D P 1S P 1NT P', call: 'P' },
  { lesson: 'new-minor-and-fourth-suit-forcing', hand: 'S:K1063 H:Q2 D:A54 C:K973', dealer: 'N', before: '1D P 1S P 1NT P', call: '2NT' },
  // texas-transfers
  { lesson: 'texas-transfers', hand: 'S:KQ10965 H:A4 D:K73 C:85', dealer: 'N', before: '1NT P', call: '4H' },
  { lesson: 'texas-transfers', hand: 'S:J8 H:KQ1065 D:A73 C:Q42', dealer: 'N', before: '1NT P', call: '2D' },
  { lesson: 'texas-transfers', hand: 'S:J8 H:KQ1065 D:A73 C:Q42', dealer: 'N', before: '1NT P 2D P 2H P', call: '3NT' },
  { lesson: 'texas-transfers', hand: 'S:64 H:Q97543 D:AJ9 C:87', dealer: 'N', before: '2NT P', call: '4D' },
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
  { lesson: 'competing-over-1nt', hand: 'S:K852 H:Q73 D:AJ4 C:Q62', dealer: 'W', before: '1NT 2H P', call: '3H' },
  { lesson: 'competing-over-1nt', hand: 'S:4 H:AKJ1052 D:AQ3 C:J84', dealer: 'W', before: '1NT 2H P 3H P', call: '4H' },
  { lesson: 'competing-over-1nt', hand: 'S:4 H:AKJ1052 D:KQ3 C:J84', dealer: 'W', before: '1NT 2H P 3H P', call: 'P' },
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
  { lesson: 'when-they-double-us', hand: 'S:K85 H:62 D:Q853 C:KQ94', dealer: 'N', before: '1H X XX P P 2C', call: 'X' },
  { lesson: 'when-they-double-us', hand: 'S:K85 H:62 D:A853 C:KQ94', dealer: 'N', before: '1H X XX P P 2C', call: '3NT' },
  { lesson: 'when-they-double-us', hand: 'S:AJ4 H:KQ62 D:K85 C:Q94', dealer: 'N', before: '1NT X XX P', call: 'P' },
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
    it(`${c.lesson}: ${typeof c.hand === 'number' ? `hand diagram ${c.hand + 1}` : c.hand} after ${c.before || 'no calls'}${c.vul ? ` (${c.vul} vulnerable)` : ''}`, () => {
      const lesson = content.lessons.find(l => l.id === c.lesson);
      expect(lesson, c.lesson).toBeDefined();
      const spec = typeof c.hand === 'number' ? diagrams(lesson!.body, 'hand')[c.hand]?.cards : c.hand;
      expect(spec, 'hand').toBeTruthy();
      const before = new Auction('NESW'.indexOf(c.dealer) as Seat, c.before ? c.before.split(' ').map(parseCall) : []);
      expect(callShort(advise(holding(spec!), readAuction(before, c.vul ?? 'None').ctx).call)).toBe(c.call);
    });
  }
});
