// Hand evaluation: everything a player counts before bidding.

import { type Card, suitOf, rankOf, hcp as countHcp, suitLengths, SUIT_SYMBOLS } from './cards';
import { T } from '../i18n';

export interface HandInfo {
  cards: Card[];
  hcp: number;
  len: number[]; // per suit
  suitHcp: number[]; // HCP per suit
  shape: number[]; // lengths sorted descending
  balanced: boolean; // 4333, 4432, 5332
  semiBalanced: boolean; // also 5422, 6322
  lengthPts: number; // +1 per card beyond four in a suit
  tp: number; // hcp + lengthPts  (opening "total points")
  ltc: number; // losing trick count
  qt: number; // quick tricks (defensive)
  controls: number; // A = 2, K = 1
  aces: number;
  kings: number;
  ranks: number[][]; // per suit, ranks held, high to low
}

export function handInfo(cards: readonly Card[]): HandInfo {
  const len = suitLengths(cards);
  const ranks: number[][] = [[], [], [], []];
  const suitHcp = [0, 0, 0, 0];
  for (const c of cards) {
    ranks[suitOf(c)].push(rankOf(c));
    const r = rankOf(c);
    if (r > 10) suitHcp[suitOf(c)] += r - 10;
  }
  ranks.forEach(r => r.sort((a, b) => b - a));
  const shape = [...len].sort((a, b) => b - a);
  const key = shape.join('');
  const balanced = key === '4333' || key === '4432' || key === '5332';
  const semiBalanced = balanced || key === '5422' || key === '6322';
  const lengthPts = len.reduce((t, l) => t + Math.max(0, l - 4), 0);
  const hcp = countHcp(cards);
  let ltc = 0, qt = 0, controls = 0, aces = 0, kings = 0;
  for (let s = 0; s < 4; s++) {
    const r = ranks[s];
    ltc += suitLosers(r);
    qt += suitQuickTricks(r);
    for (const x of r) {
      if (x === 14) { controls += 2; aces++; }
      if (x === 13) { controls += 1; kings++; }
    }
  }
  return { cards: [...cards], hcp, len, suitHcp, shape, balanced, semiBalanced, lengthPts, tp: hcp + lengthPts, ltc, qt, controls, aces, kings, ranks };
}

/** Losing Trick Count for one suit (ranks sorted high→low). */
export function suitLosers(r: number[]): number {
  const n = r.length;
  if (n === 0) return 0;
  const top = r.slice(0, 3);
  if (n === 1) return top[0] === 14 ? 0 : 1;
  if (n === 2) return (top.includes(14) ? 0 : 1) + (top.includes(13) ? 0 : 1);
  return (top.includes(14) ? 0 : 1) + (top.includes(13) ? 0 : 1) + (top.includes(12) ? 0 : 1);
}

export function suitQuickTricks(r: number[]): number {
  const has = (x: number) => r.includes(x);
  if (has(14) && has(13)) return 2;
  if (has(14) && has(12)) return 1.5;
  if (has(14)) return 1;
  if (has(13) && has(12)) return 1;
  if (has(13) && r.length >= 2) return 0.5;
  return 0;
}

/** A full stopper for notrump purposes: A, Kx, Qxx, Jxxx (or better). */
export function hasStopper(h: HandInfo, s: number): boolean {
  const r = h.ranks[s], n = r.length;
  if (r.includes(14)) return true;
  if (r.includes(13) && n >= 2) return true;
  if (r.includes(12) && n >= 3) return true;
  if (r.includes(11) && n >= 4) return true;
  return false;
}

/** Honours among A K Q J 10 in a suit. */
export function suitHonours(h: HandInfo, s: number): number {
  return h.ranks[s].filter(r => r >= 10).length;
}

/** "Good suit" for preempts/overcalls: two of the top three honours, or three of the top five. */
export function goodSuit(h: HandInfo, s: number): boolean {
  const r = h.ranks[s];
  const top3 = r.filter(x => x >= 12).length;
  return top3 >= 2 || suitHonours(h, s) >= 3;
}

/** Dummy points when raising partner's suit: shortness counted, length points not. */
export function dummyPoints(h: HandInfo, trump: number): number {
  const support = h.len[trump];
  let pts = h.hcp;
  for (let s = 0; s < 4; s++) {
    if (s === trump) continue;
    const l = h.len[s];
    if (support >= 4) pts += l === 0 ? 5 : l === 1 ? 3 : l === 2 ? 1 : 0;
    else if (support === 3) pts += l === 0 ? 3 : l === 1 ? 2 : l === 2 ? 1 : 0;
  }
  return pts;
}

/** Points for a hand that has found a fit as the long-trump hand: HCP + length + a little for shortness. */
export function declarerPoints(h: HandInfo, trump: number): number {
  let pts = h.hcp + h.lengthPts;
  for (let s = 0; s < 4; s++) {
    if (s === trump) continue;
    if (h.len[s] === 0) pts += 2;
    else if (h.len[s] === 1) pts += 1;
  }
  return pts;
}

export function shapeString(h: HandInfo): string {
  return [3, 2, 1, 0].map(s => h.len[s]).join('-');
}

export function evaluationSummary(h: HandInfo): { label: string; value: string; note: string }[] {
  const X = T.tutor.eval;
  const longest = [3, 2, 1, 0].reduce((a, s) => (h.len[s] > h.len[a] ? s : a), 3);
  return [
    { label: X.hcp, value: String(h.hcp), note: X.hcpNote },
    { label: X.total, value: String(h.tp), note: X.totalNote(h.lengthPts) },
    { label: X.shape, value: shapeString(h), note: h.balanced ? X.balanced : h.semiBalanced ? X.semiBalanced : X.unbalanced },
    { label: X.losers, value: String(h.ltc), note: X.losersNote },
    { label: X.quickTricks, value: String(h.qt), note: X.quickTricksNote },
    { label: X.longest, value: `${SUIT_SYMBOLS[longest]} ${h.len[longest]}`, note: X.controls(h.controls) },
  ];
}
