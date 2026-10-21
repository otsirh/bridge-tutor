// Practice themes: deals chosen so that the topic you are studying actually
// comes up. A theme tests the deal with the system's own auction (every seat
// bid by the bots' rules — including yours, as the system would bid it), so
// "Stayman" really means South has a Stayman hand opposite partner's 1NT.

import { type Card, type Seat, type Vulnerability, N, E, S, W, NT, dealCards, mulberry32, hcp, suitLengths } from '../core/cards';
import { Auction, type Contract, PASS, isBid, levelOf, strainOf } from '../core/auction';
import { readAuction, advise } from '../bidding/engine';
import type { CallRecord } from '../bidding/context';
import type { SkillId } from './skills';

export interface ThemeView {
  deal: Card[][];
  dealer: Seat;
  records: CallRecord[];
  contract: Contract | null;
}

interface HandFacts {
  hcp: number;
  len: number[];
  balanced: boolean;
}

export interface Theme {
  id: string;
  skill: SkillId;
  /** Cheap test on the hands before the auction is simulated. */
  pre?: (h: HandFacts[]) => boolean;
  /** Test on the system's auction. */
  test: (v: ThemeView) => boolean;
}

const isNS = (s: Seat) => (s & 1) === 0;
const tagOf = (r: CallRecord) => r.meaning.tag ?? '';
const first = (v: ThemeView) => v.records.find(r => r.call !== PASS) ?? null;
const callsBy = (v: ThemeView, seat: Seat) => v.records.filter(r => r.seat === seat);
const actionsBy = (v: ThemeView, seat: Seat) => callsBy(v, seat).filter(r => r.call !== PASS);
const quietUntil = (v: ThemeView, index: number) => v.records.every(r => r.index >= index || isNS(r.seat) || r.call === PASS);
const nsTag = (v: ThemeView, tags: string[]) => v.records.some(r => isNS(r.seat) && tags.includes(tagOf(r)));
const southTag = (v: ThemeView, tags: string[]) => v.records.some(r => r.seat === S && tags.includes(tagOf(r)));
const weDeclare = (v: ThemeView) => !!v.contract && isNS(v.contract.declarer);
const theyDeclare = (v: ThemeView) => !!v.contract && !isNS(v.contract.declarer);
const ntOpening = (r: CallRecord | null) => !!r && strainOf(r.call) === NT && levelOf(r.call) <= 2 && !r.meaning.artificial;

export const THEMES: Theme[] = [
  // --- bidding
  {
    id: 'openings', skill: 'bid.opening',
    pre: h => h[S].hcp >= 10 || (Math.max(...h[S].len) >= 6 && h[S].hcp >= 5),
    test: v => first(v)?.seat === S,
  },
  {
    id: 'responses', skill: 'bid.response',
    pre: h => h[N].hcp >= 11 && h[S].hcp >= 6,
    test: v => {
      const op = first(v);
      if (!op || op.seat !== N) return false;
      const resp = callsBy(v, S).find(r => r.index > op.index);
      return !!resp && resp.call !== PASS && quietUntil(v, resp.index);
    },
  },
  {
    id: 'rebids', skill: 'bid.rebid',
    pre: h => h[S].hcp >= 12,
    test: v => {
      const op = first(v);
      if (!op || op.seat !== S || levelOf(op.call) !== 1) return false;
      const mine = callsBy(v, S).filter(r => r.index > op.index);
      return actionsBy(v, N).length > 0 && mine.length > 0 && quietUntil(v, mine[0].index);
    },
  },
  {
    id: 'notrump', skill: 'bid.notrump',
    pre: h => [N, S].some(s => h[s].balanced && h[s].hcp >= 15 && h[s].hcp <= 21),
    test: v => {
      const op = first(v);
      if (!op || !isNS(op.seat) || !ntOpening(op)) return false;
      return op.seat === S || actionsBy(v, S).length > 0;
    },
  },
  {
    id: 'stayman-transfers', skill: 'bid.notrump',
    pre: h => h[N].balanced && h[N].hcp >= 15 && (h[S].len[2] >= 4 || h[S].len[3] >= 4),
    test: v => first(v)?.seat === N && ntOpening(first(v)) && southTag(v, ['stayman', 'transfer', 'minorTransfer', 'texas']),
  },
  {
    id: 'major-raises', skill: 'bid.response',
    pre: h => h[N].hcp >= 11 && h[S].hcp >= 6 && (h[S].len[2] >= 3 || h[S].len[3] >= 3),
    test: v => {
      const op = first(v);
      if (!op || op.seat !== N || levelOf(op.call) !== 1) return false;
      const st = strainOf(op.call);
      if (st !== 2 && st !== 3) return false;
      const resp = callsBy(v, S).find(r => r.index > op.index);
      return !!resp && isBid(resp.call) && (strainOf(resp.call) === st || tagOf(resp) === 'jacoby2nt' || tagOf(resp) === 'splinter') && quietUntil(v, resp.index);
    },
  },
  {
    id: 'strong-2c', skill: 'bid.opening',
    pre: h => h[N].hcp >= 20 || h[S].hcp >= 20,
    test: v => nsTag(v, ['strong2c']),
  },
  {
    id: 'preempts', skill: 'bid.opening',
    pre: h => [N, S].some(s => Math.max(...h[s].len) >= 6 && h[s].hcp >= 4 && h[s].hcp <= 11),
    test: v => {
      const pre = v.records.find(r => isNS(r.seat) && (tagOf(r) === 'weak2' || tagOf(r) === 'preempt'));
      if (!pre) return false;
      return pre.seat === S || actionsBy(v, S).some(r => r.index > pre.index);
    },
  },
  {
    id: 'competitive', skill: 'bid.competitive',
    pre: h => h[E].hcp + h[W].hcp >= 15 && h[S].hcp >= 7,
    test: v => {
      const op = first(v);
      if (!op) return false;
      const theyActed = v.records.some(r => !isNS(r.seat) && r.call !== PASS);
      return theyActed && actionsBy(v, S).some(r => v.records.some(o => !isNS(o.seat) && o.call !== PASS && o.index < r.index));
    },
  },
  {
    id: 'overcalls', skill: 'bid.competitive',
    pre: h => h[S].hcp >= 8 && Math.max(...h[S].len) >= 5,
    test: v => {
      const op = first(v);
      if (!op || isNS(op.seat)) return false;
      const mine = actionsBy(v, S)[0];
      return !!mine && actionsBy(v, N).every(r => r.index > mine.index) && isBid(mine.call) && !mine.meaning.artificial;
    },
  },
  {
    id: 'takeout-doubles', skill: 'bid.competitive',
    pre: h => h[S].hcp >= 11 || h[N].hcp >= 11,
    test: v => {
      if (southTag(v, ['takeoutX'])) return true;
      const x = v.records.find(r => r.seat === N && tagOf(r) === 'takeoutX');
      return !!x && actionsBy(v, S).some(r => r.index > x.index);
    },
  },
  {
    id: 'negative-doubles', skill: 'bid.competitive',
    pre: h => h[N].hcp >= 11 && h[S].hcp >= 6,
    test: v => southTag(v, ['negX']),
  },
  {
    id: 'two-suiters', skill: 'bid.competitive',
    pre: h => [N, S].some(s => h[s].len.filter(l => l >= 5).length >= 2),
    test: v => {
      const two = v.records.find(r => isNS(r.seat) && (tagOf(r) === 'michaels' || tagOf(r) === 'unusual'));
      return !!two && (two.seat === S || actionsBy(v, S).some(r => r.index > two.index) || callsBy(v, S).some(r => r.index > two.index));
    },
  },
  {
    id: 'balancing', skill: 'bid.competitive',
    test: v => {
      const op = first(v);
      if (!op || isNS(op.seat)) return false;
      const next = v.records.filter(r => r.index > op.index);
      return next.length >= 3 && next[0].call === PASS && next[1].call === PASS && next[2].seat === S && next[2].call !== PASS;
    },
  },
  {
    id: 'partscore-battle', skill: 'bid.competitive',
    pre: h => {
      const ns = h[N].hcp + h[S].hcp;
      return ns >= 16 && ns <= 24;
    },
    test: v => !!v.contract && v.contract.level <= 3 && v.contract.strain !== NT && actionsBy(v, S).length > 0
      && v.records.some(r => !isNS(r.seat) && isBid(r.call)) && v.records.some(r => isNS(r.seat) && isBid(r.call)),
  },
  {
    id: 'slam', skill: 'bid.slam',
    pre: h => h[N].hcp + h[S].hcp >= 30,
    test: v => (weDeclare(v) && v.contract!.level >= 6) || nsTag(v, ['blackwood', 'gerber', 'quant', 'rkcb', 'cue']),
  },
  // --- play
  {
    id: 'declarer', skill: 'play.declarer',
    pre: h => h[N].hcp + h[S].hcp >= 23,
    test: v => weDeclare(v) && v.contract!.level >= 2,
  },
  {
    id: 'nt-games', skill: 'play.declarer',
    pre: h => h[N].hcp + h[S].hcp >= 24,
    test: v => weDeclare(v) && v.contract!.strain === NT && v.contract!.level === 3,
  },
  {
    id: 'suit-games', skill: 'play.declarer',
    pre: h => h[N].hcp + h[S].hcp >= 23,
    test: v => weDeclare(v) && v.contract!.strain !== NT && v.contract!.level >= 4 && v.contract!.level <= 5,
  },
  {
    id: 'leads', skill: 'play.lead',
    pre: h => h[E].hcp + h[W].hcp >= 20,
    test: v => v.contract?.declarer === E,
  },
  {
    id: 'defense', skill: 'play.defense',
    pre: h => h[E].hcp + h[W].hcp >= 21,
    test: v => theyDeclare(v) && v.contract!.level >= 2,
  },
  {
    id: 'defense-nt', skill: 'play.defense',
    pre: h => h[E].hcp + h[W].hcp >= 22,
    test: v => v.contract?.declarer === W && v.contract.strain === NT,
  },
  {
    id: 'defense-suit', skill: 'play.defense',
    pre: h => h[E].hcp + h[W].hcp >= 20,
    test: v => theyDeclare(v) && v.contract!.strain !== NT && v.contract!.level >= 2,
  },
];

/** The practice theme for each lesson (lessons about general knowledge have none). */
export const LESSON_THEMES: Record<string, string> = {
  'hand-evaluation': 'openings',
  'opening-bids': 'openings',
  'responding-to-one-of-a-suit': 'responses',
  'openers-rebid': 'rebids',
  'notrump-bidding': 'stayman-transfers',
  'planning-the-play': 'declarer',
  'opening-leads': 'leads',
  'establishing-long-suits': 'nt-games',
  'finesses': 'declarer',
  'second-and-third-hand': 'defense',
  'responders-rebid-and-choosing-game': 'responses',
  'strong-openings': 'strong-2c',
  'weak-twos-and-preempts': 'preempts',
  'overcalls': 'overcalls',
  'takeout-doubles': 'takeout-doubles',
  'hold-up-and-entries': 'nt-games',
  'trump-management': 'suit-games',
  'defensive-signals': 'defense',
  'negative-doubles': 'negative-doubles',
  'slam-bidding-and-blackwood': 'slam',
  'gerber-and-quantitative': 'slam',
  'rule-of-eleven': 'defense-nt',
  'michaels-and-unusual-2nt': 'two-suiters',
  'defending-suit-contracts': 'defense-suit',
  'suit-combinations-and-odds': 'declarer',
  'balancing': 'balancing',
  'law-of-total-tricks': 'partscore-battle',
  'vulnerability-imps-matchpoints': 'partscore-battle',
  'safety-plays': 'suit-games',
  'avoidance-play': 'nt-games',
  'counting-on-defense': 'defense',
  'penalty-doubles-and-sacrifices': 'competitive',
  'slam-controls-and-cue-bids': 'slam',
  'squeezes-and-endplays': 'declarer',
  'roman-key-card-blackwood': 'slam',
  'splinters-and-drury': 'major-raises',
  'new-minor-and-fourth-suit-forcing': 'rebids',
  'texas-transfers': 'stayman-transfers',
};

export function themeById(id: string): Theme | undefined {
  return THEMES.find(t => t.id === id);
}

function facts(deal: Card[][]): HandFacts[] {
  return deal.map(hand => {
    const len = suitLengths(hand);
    const sorted = [...len].sort((a, b) => b - a);
    const balanced = sorted[3] >= 2 && sorted[0] <= 5 && !(sorted[2] === 2 && sorted[3] === 2);
    return { hcp: hcp(hand), len, balanced };
  });
}

/** The auction the system would produce with every seat bid by the bots' rules. */
export function systemAuction(deal: Card[][], dealer: Seat, vul: Vulnerability): { auction: Auction; records: CallRecord[] } {
  const a = new Auction(dealer);
  let guard = 0;
  while (!a.isComplete() && guard++ < 80) a.push(advise(deal[a.nextSeat], readAuction(a, vul).ctx).call);
  return { auction: a, records: readAuction(a, vul).records };
}

/** Does this deal fit the theme? */
export function fitsTheme(theme: Theme, deal: Card[][], dealer: Seat, vul: Vulnerability): boolean {
  if (theme.pre && !theme.pre(facts(deal))) return false;
  const { auction, records } = systemAuction(deal, dealer, vul);
  return theme.test({ deal, dealer, records, contract: auction.contract() });
}

export interface ThemedDeal {
  deal: Card[][];
  found: boolean; // false: the time ran out and this deal only passed the quick check
  tries: number;
}

/**
 * Deal until a deal fits the theme (or the time budget runs out), yielding to
 * the browser between batches so the page stays responsive.
 */
export async function dealForTheme(themeId: string, dealer: Seat, vul: Vulnerability, seed: number, budgetMs = 2500): Promise<ThemedDeal> {
  const theme = themeById(themeId);
  const rnd = mulberry32(seed);
  if (!theme) return { deal: dealCards(rnd), found: false, tries: 0 };
  const start = Date.now();
  let fallback: Card[][] | null = null;
  let tries = 0;
  while (Date.now() - start < budgetMs) {
    const sliceEnd = Date.now() + 25;
    while (Date.now() < sliceEnd) {
      const deal = dealCards(rnd);
      tries++;
      if (theme.pre && !theme.pre(facts(deal))) continue;
      fallback ??= deal;
      const { auction, records } = systemAuction(deal, dealer, vul);
      if (theme.test({ deal, dealer, records, contract: auction.contract() })) return { deal, found: true, tries };
    }
    await new Promise(r => setTimeout(r, 0));
  }
  return { deal: fallback ?? dealCards(rnd), found: false, tries };
}

