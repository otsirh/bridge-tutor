// Skills: the areas a player's decisions fall into, how each decision is
// classified, and accuracy per skill from the journal — so practice can aim
// at the weakest area and point to the right lessons.

import { Auction, type Call, PASS, isBid, levelOf, strainOf } from '../core/auction';
import { NT, type Seat, partnerOf } from '../core/cards';
import { PlayState } from '../core/play';
import { type ArchivedBoard, decodeDeal } from './journal';

export type SkillId =
  | 'bid.opening'
  | 'bid.response'
  | 'bid.rebid'
  | 'bid.notrump'
  | 'bid.competitive'
  | 'bid.slam'
  | 'play.lead'
  | 'play.declarer'
  | 'play.defense';

export interface SkillInfo {
  id: SkillId;
  /** Lessons that teach it, most basic first. */
  lessons: string[];
  /** Practice theme that deals boards exercising it. */
  theme: string;
}

export const SKILLS: SkillInfo[] = [
  { id: 'bid.opening', lessons: ['hand-evaluation', 'opening-bids', 'weak-twos-and-preempts', 'strong-openings'], theme: 'openings' },
  { id: 'bid.response', lessons: ['responding-to-one-of-a-suit', 'responders-rebid-and-choosing-game'], theme: 'responses' },
  { id: 'bid.rebid', lessons: ['openers-rebid', 'responders-rebid-and-choosing-game'], theme: 'rebids' },
  { id: 'bid.notrump', lessons: ['notrump-bidding', 'strong-openings'], theme: 'notrump' },
  { id: 'bid.competitive', lessons: ['overcalls', 'takeout-doubles', 'negative-doubles', 'michaels-and-unusual-2nt', 'balancing', 'law-of-total-tricks', 'penalty-doubles-and-sacrifices'], theme: 'competitive' },
  { id: 'bid.slam', lessons: ['slam-bidding-and-blackwood', 'gerber-and-quantitative', 'slam-controls-and-cue-bids'], theme: 'slam' },
  { id: 'play.lead', lessons: ['opening-leads', 'rule-of-eleven'], theme: 'leads' },
  { id: 'play.declarer', lessons: ['planning-the-play', 'establishing-long-suits', 'finesses', 'hold-up-and-entries', 'trump-management', 'suit-combinations-and-odds', 'safety-plays', 'avoidance-play', 'squeezes-and-endplays'], theme: 'declarer' },
  { id: 'play.defense', lessons: ['second-and-third-hand', 'defensive-signals', 'defending-suit-contracts', 'counting-on-defense'], theme: 'defense' },
];

export function skillInfo(id: SkillId): SkillInfo {
  return SKILLS.find(s => s.id === id)!;
}

const SLAM_TAGS = new Set(['blackwood', 'kingask', 'gerber', 'quant', 'aceReply', 'kingReply', 'gerberReply', 'rkcb', 'rkcbReply', 'queenAsk', 'queenReply', 'cue', 'control']);

/**
 * The skill a call belongs to.
 * `calls` are the calls before it; `advised` is the system's call and `tag` its convention tag.
 */
export function bidSkill(dealer: Seat, calls: readonly Call[], advised: Call, tag?: string): SkillId {
  const a = new Auction(dealer, [...calls]);
  const seat = a.nextSeat;
  if ((tag && SLAM_TAGS.has(tag)) || (isBid(advised) && levelOf(advised) >= 6)) return 'bid.slam';
  const openIdx = calls.findIndex(c => c !== PASS);
  if (openIdx < 0) return 'bid.opening';
  const opener = a.seatAt(openIdx);
  const ours = (opener & 1) === (seat & 1);
  const theyActed = calls.some((c, i) => c !== PASS && (a.seatAt(i) & 1) !== (seat & 1));
  if (!ours || theyActed) return 'bid.competitive';
  const op = calls[openIdx];
  if (strainOf(op) === NT && levelOf(op) <= 2) return 'bid.notrump';
  return opener === seat ? 'bid.rebid' : 'bid.response';
}

/** The skill a card belongs to: opening lead, declarer play or defence. */
export function cardSkill(declarer: Seat, seat: Seat, firstCard: boolean): SkillId {
  if (firstCard) return 'play.lead';
  return seat === declarer || seat === partnerOf(declarer) ? 'play.declarer' : 'play.defense';
}

// ---------------------------------------------------------------------------
// Accuracy per skill

export interface SkillStat {
  id: SkillId;
  decisions: number;
  right: number; // decisions that agreed with the system / were not clear mistakes
  recent: number; // decisions counted in `rate`
  rate: number | null; // share right among the most recent decisions (null = too few)
}

/** Decisions counted per skill for the current level. */
export const WINDOW = 60;
const MIN_FOR_RATE = 6;

/** Is a card a clear mistake by the information available (same test the coach uses)? */
export function clearCardMistake(sim: { n: number; bt: number; bs: number; mt: number; ms: number; best: number[] }, card: number): boolean {
  if (sim.n < 8 || sim.best.includes(card)) return false;
  return sim.bs - sim.ms >= 0.15 || sim.bt - sim.mt >= 0.45;
}

/** One entry per decision you made, oldest first. */
export function decisions(boards: readonly ArchivedBoard[]): { skill: SkillId; ok: boolean; board: number }[] {
  const out: { skill: SkillId; ok: boolean; board: number }[] = [];
  for (const b of boards) {
    const calls: Call[] = [];
    for (const c of b.calls) {
      if (c.h && c.a !== undefined) out.push({ skill: bidSkill(b.dealer, calls, c.a), ok: c.a === c.c, board: b.id });
      calls.push(c.c);
    }
    const auction = new Auction(b.dealer, calls);
    const contract = auction.isComplete() ? auction.contract() : null;
    if (!contract) continue;
    const play = new PlayState(contract, decodeDeal(b.deal));
    b.cards.forEach((card, i) => {
      const seat = play.toPlay;
      if (card.h && card.sim) out.push({ skill: cardSkill(contract.declarer, seat, i === 0), ok: !clearCardMistake(card.sim, card.c), board: b.id });
      play.play(card.c);
    });
  }
  return out;
}

export function skillStats(boards: readonly ArchivedBoard[]): SkillStat[] {
  const all = decisions(boards);
  return SKILLS.map(s => {
    const mine = all.filter(d => d.skill === s.id);
    const recent = mine.slice(-WINDOW);
    const right = mine.filter(d => d.ok).length;
    return {
      id: s.id,
      decisions: mine.length,
      right,
      recent: recent.length,
      rate: recent.length >= MIN_FOR_RATE ? recent.filter(d => d.ok).length / recent.length : null,
    };
  });
}

/** The skill most worth practising: lowest recent accuracy, else least practised. */
export function weakestSkill(stats: readonly SkillStat[]): SkillId {
  const rated = stats.filter(s => s.rate !== null);
  if (rated.length) {
    const worst = [...rated].sort((a, b) => a.rate! - b.rate! || a.decisions - b.decisions)[0];
    if (worst.rate! < 0.9 || rated.length === stats.length) return worst.id;
  }
  return [...stats].sort((a, b) => a.decisions - b.decisions)[0].id;
}
