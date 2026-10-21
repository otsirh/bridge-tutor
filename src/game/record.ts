// Turning a finished board into journal data: the archived board and the
// review items for the decisions that went wrong.

import type { Card, Seat, Vulnerability } from '../core/cards';
import { Auction, type Call } from '../core/auction';
import { PlayState } from '../core/play';
import type { Decision } from '../engine/playEngine';
import { type ArchivedBoard, type ArchivedCall, type ArchivedCard, type ReviewItem, type SimVerdict, encodeDeal } from './journal';
import { bidSkill, cardSkill, clearCardMistake } from './skills';

export interface FinishedCall {
  call: Call;
  human: boolean;
  /** The system's recommendation when you called. */
  advice?: { call: Call; generic: boolean; tag?: string };
}

export interface FinishedCard {
  card: Card;
  human: boolean;
  sim?: SimVerdict | null;
  dd?: [number, number] | null;
}

export interface FinishedBoard {
  id: number;
  board: number;
  dealer: Seat;
  vul: Vulnerability;
  deal: Card[][];
  calls: FinishedCall[];
  cards: FinishedCard[];
  declTricks: number;
  scoreNS: number;
  parNS: number | null;
  table: number[][] | null;
  theme?: string | null;
}

/** The single-dummy verdict on `card` from a simulation, if it was meaningful. */
export function simVerdict(d: Decision | null | undefined, card: Card): SimVerdict | null {
  if (!d || d.samples < 8) return null;
  const best = d.stats[0];
  const mine = d.stats.find(s => s.card === card);
  if (!best || !mine) return null;
  const r = (x: number) => Math.round(x * 1000) / 1000;
  return { n: d.samples, best: [...d.equal], bt: r(best.tricks), bs: r(best.success), mt: r(mine.tricks), ms: r(mine.success) };
}

export function archiveBoard(f: FinishedBoard): ArchivedBoard {
  const calls: ArchivedCall[] = f.calls.map(c => {
    const a: ArchivedCall = { c: c.call };
    if (c.human) {
      a.h = 1;
      if (c.advice) {
        a.a = c.advice.call;
        if (c.advice.generic) a.g = 1;
      }
    }
    return a;
  });
  const cards: ArchivedCard[] = f.cards.map(c => {
    const a: ArchivedCard = { c: c.card };
    if (c.human) a.h = 1;
    if (c.human && c.dd) a.dd = c.dd;
    if (c.human && c.sim) a.sim = c.sim;
    return a;
  });
  const rec: ArchivedBoard = {
    v: 1, id: f.id, board: f.board, dealer: f.dealer, vul: f.vul, deal: encodeDeal(f.deal),
    calls, cards, declTricks: f.declTricks, scoreNS: f.scoreNS, parNS: f.parNS, table: f.table,
  };
  if (f.theme) rec.theme = f.theme;
  return rec;
}

/**
 * Review items for the decisions worth practising again: calls that differ
 * from a specific system agreement, and cards that were clearly worse with
 * the information available at the time.
 */
export function reviewItems(f: FinishedBoard, now = Date.now()): ReviewItem[] {
  const out: ReviewItem[] = [];
  const deal = encodeDeal(f.deal);
  const base = { board: f.board, dealer: f.dealer, vul: f.vul, deal, created: now, box: 0, due: now, tries: 0, right: 0 };
  const calls: Call[] = [];
  f.calls.forEach((c, i) => {
    const seat = new Auction(f.dealer, calls).nextSeat;
    if (c.human && c.advice && !c.advice.generic && c.advice.call !== c.call) {
      out.push({
        ...base, id: `${f.id}:b:${i}`, kind: 'bid', skill: bidSkill(f.dealer, calls, c.advice.call, c.advice.tag),
        calls: [...calls], seat, answer: [c.advice.call], yours: c.call,
      });
    }
    calls.push(c.call);
  });
  const auction = new Auction(f.dealer, calls);
  const contract = auction.isComplete() ? auction.contract() : null;
  if (!contract) return out;
  const play = new PlayState(contract, f.deal);
  const before: Card[] = [];
  f.cards.forEach((c, i) => {
    const seat = play.toPlay;
    if (c.human && c.sim && clearCardMistake(c.sim, c.card)) {
      out.push({
        ...base, id: `${f.id}:c:${i}`, kind: 'card', skill: cardSkill(contract.declarer, seat, i === 0),
        calls: [...calls], play: [...before], seat, answer: [...c.sim.best], yours: c.card, sim: c.sim,
      });
    }
    play.play(c.card);
    before.push(c.card);
  });
  return out;
}
