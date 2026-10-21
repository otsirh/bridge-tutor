// The practice journal: every finished board in full (so it can be reopened,
// replayed and analysed again), the decisions you got wrong as a review queue
// with spaced repetition, and per-lesson progress.
//
// Everything here is language-independent data (cards, calls, numbers, ids);
// text is rendered from it in the active language when shown.

import type { Card, Seat, Vulnerability } from '../core/cards';
import type { Call } from '../core/auction';
import type { SkillId } from './skills';

// ---------------------------------------------------------------------------
// Archived boards

/** One call of the auction. */
export interface ArchivedCall {
  c: Call;
  /** Made by you. */
  h?: 1;
  /** The system's call at that moment (your calls only). */
  a?: Call;
  /** The system's choice came from general judgment rather than a specific agreement. */
  g?: 1;
}

/** Single-dummy verdict on one of your cards: the simulation with the information you had. */
export interface SimVerdict {
  n: number; // layouts simulated
  best: Card[]; // the cards that did best (equal)
  bt: number; // best card: average tricks for your side
  bs: number; // best card: success rate (make / defeat)
  mt: number; // your card: average tricks
  ms: number; // your card: success rate
}

/** One card of the play. */
export interface ArchivedCard {
  c: Card;
  h?: 1;
  /** Double-dummy: [best tricks for the player's side, tricks after the card played]. */
  dd?: [number, number];
  sim?: SimVerdict;
}

export interface ArchivedBoard {
  v: 1;
  id: number; // when the board was finished (ms), unique
  board: number;
  dealer: Seat;
  vul: Vulnerability;
  deal: string; // see encodeDeal
  calls: ArchivedCall[];
  cards: ArchivedCard[];
  declTricks: number;
  scoreNS: number;
  parNS: number | null;
  table: number[][] | null; // double-dummy tricks [strain][declarer]
  theme?: string; // practice theme the board was dealt for
}

/** A deal as 52 seat digits, indexed by card id. */
export function encodeDeal(deal: readonly (readonly Card[])[]): string {
  const out = new Array<string>(52).fill('0');
  deal.forEach((hand, seat) => hand.forEach(c => (out[c] = String(seat))));
  return out.join('');
}

export function decodeDeal(s: string): Card[][] {
  const hands: Card[][] = [[], [], [], []];
  for (let c = 0; c < 52; c++) hands[+s[c]].push(c);
  return hands.map(h => h.sort((a, b) => b - a));
}

// ---------------------------------------------------------------------------
// Review queue (spaced repetition)

export interface ReviewItem {
  id: string; // `${board id}:${b|c}:${index}`
  kind: 'bid' | 'card';
  skill: SkillId;
  board: number;
  dealer: Seat;
  vul: Vulnerability;
  deal: string;
  /** Calls before the decision (bid) or the whole auction (card). */
  calls: Call[];
  /** Cards played before the decision (card items). */
  play?: Card[];
  /** The seat whose call or card it is (South, or North when you declare from there). */
  seat: Seat;
  /** The right answers: the system's call, or the cards that did best in simulation. */
  answer: number[];
  /** What you chose at the table. */
  yours: number;
  sim?: SimVerdict;
  created: number;
  box: number; // Leitner box: 0 = new or just missed
  due: number; // ms
  tries: number;
  right: number;
}

const DAY = 24 * 3600 * 1000;
/** Days until the next review after a correct answer, by the box reached. */
export const INTERVALS = [0, 1, 3, 7, 16, 35];
/** Answering correctly from the last box retires the item. */
export const LAST_BOX = INTERVALS.length - 1;

/** Record an answer to a review item; returns false when the item is retired. */
export function answerItem(item: ReviewItem, correct: boolean, now = Date.now()): boolean {
  item.tries++;
  if (correct) {
    item.right++;
    if (item.box >= LAST_BOX) return false;
    item.box++;
    item.due = now + INTERVALS[item.box] * DAY;
  } else {
    item.box = 0;
    item.due = now;
  }
  return true;
}

export function dueItems(items: readonly ReviewItem[], now = Date.now()): ReviewItem[] {
  return items.filter(i => i.due <= now).sort((a, b) => a.box - b.box || a.due - b.due);
}

// ---------------------------------------------------------------------------
// Lesson progress

export interface LessonProgress {
  opened?: number; // first opened (ms)
  quizBest?: number; // best share of quiz questions right at the first attempt, 0..1
  quizAnswers?: Record<number, number>; // question index -> first answer chosen
  practiced?: number; // boards played on the lesson's practice theme
}

// ---------------------------------------------------------------------------
// Storage (browser, best effort — the app works without it)

const KEY_BOARDS = 'bridge-tutor.archive.v1';
const KEY_REVIEW = 'bridge-tutor.review.v1';
const KEY_LESSONS = 'bridge-tutor.lessons.v1';
const KEY_DAYS = 'bridge-tutor.days.v1';
/** Boards kept in full; older ones are dropped. */
export const MAX_BOARDS = 300;
const MAX_ITEMS = 400;

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function loadBoards(): ArchivedBoard[] {
  const b = read<ArchivedBoard[]>(KEY_BOARDS, []);
  return Array.isArray(b) ? b.filter(x => x && x.v === 1) : [];
}

export function saveBoard(rec: ArchivedBoard) {
  const all = loadBoards();
  const i = all.findIndex(x => x.id === rec.id);
  if (i >= 0) all[i] = rec;
  else all.push(rec);
  let keep = all.slice(-MAX_BOARDS);
  // if storage is full, drop the oldest boards until it fits
  while (!write(KEY_BOARDS, keep) && keep.length > 20) keep = keep.slice(Math.ceil(keep.length / 4));
  markDay(rec.id);
}

export function getBoard(id: number): ArchivedBoard | undefined {
  return loadBoards().find(b => b.id === id);
}

export function loadItems(): ReviewItem[] {
  const r = read<ReviewItem[]>(KEY_REVIEW, []);
  return Array.isArray(r) ? r : [];
}

export function saveItems(items: ReviewItem[]) {
  write(KEY_REVIEW, items.slice(-MAX_ITEMS));
}

/** Add new review items, keeping an existing item (and its progress) when the same decision is recorded again. */
export function addItems(fresh: ReviewItem[]) {
  if (!fresh.length) return;
  const items = loadItems();
  const ids = new Set(items.map(i => i.id));
  for (const f of fresh) if (!ids.has(f.id)) items.push(f);
  saveItems(items);
}

/** Drop review items for decisions that are no longer mistakes (e.g. after undo and replay of the same board). */
export function removeItems(prefix: string, keep: Set<string>) {
  const items = loadItems();
  const next = items.filter(i => !i.id.startsWith(prefix) || keep.has(i.id));
  if (next.length !== items.length) saveItems(next);
}

export function updateItem(item: ReviewItem, retired: boolean) {
  const items = loadItems();
  const i = items.findIndex(x => x.id === item.id);
  if (i < 0) return;
  if (retired) items.splice(i, 1);
  else items[i] = item;
  saveItems(items);
}

export function loadLessonProgress(): Record<string, LessonProgress> {
  const p = read<Record<string, LessonProgress>>(KEY_LESSONS, {});
  return p && typeof p === 'object' ? p : {};
}

export function updateLessonProgress(id: string, fn: (p: LessonProgress) => void) {
  const all = loadLessonProgress();
  const p = all[id] ?? {};
  fn(p);
  all[id] = p;
  write(KEY_LESSONS, all);
}

// Days with practice, for the streak.

function dayKey(ms: number): string {
  const d = new Date(ms);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export function markDay(ms = Date.now()) {
  const days = read<string[]>(KEY_DAYS, []);
  const k = dayKey(ms);
  if (!days.includes(k)) {
    days.push(k);
    write(KEY_DAYS, days.slice(-400));
  }
}

/** Consecutive days with practice, ending today (or yesterday, if today has none yet). */
export function streak(now = Date.now()): number {
  const days = new Set(read<string[]>(KEY_DAYS, []));
  let n = 0;
  let t = now;
  if (!days.has(dayKey(t))) t -= DAY;
  while (days.has(dayKey(t))) {
    n++;
    t -= DAY;
  }
  return n;
}

// ---------------------------------------------------------------------------
// Backup: everything the app stores, as one JSON file

const BACKUP_KEYS = [KEY_BOARDS, KEY_REVIEW, KEY_LESSONS, KEY_DAYS, 'bridge-tutor.history.v1', 'bridge-tutor.settings.v1', 'bridge-tutor.board.v1', 'bridge-tutor.lang.v1', 'bridge-tutor.theme'];

export function exportAll(): string {
  const data: Record<string, unknown> = {};
  for (const k of BACKUP_KEYS) {
    try {
      const raw = localStorage.getItem(k);
      if (raw !== null) data[k] = k === 'bridge-tutor.theme' || k === 'bridge-tutor.lang.v1' ? raw : JSON.parse(raw);
    } catch {
      /* skip */
    }
  }
  return JSON.stringify({ app: 'bridge-tutor', version: 1, exported: Date.now(), data }, null, 1);
}

/** Restore a backup made by exportAll. Returns false if the file is not one. */
export function importAll(text: string): boolean {
  let parsed: { app?: string; data?: Record<string, unknown> };
  try {
    parsed = JSON.parse(text);
  } catch {
    return false;
  }
  if (parsed?.app !== 'bridge-tutor' || !parsed.data || typeof parsed.data !== 'object') return false;
  for (const k of BACKUP_KEYS) {
    if (!(k in parsed.data)) continue;
    const v = parsed.data[k];
    try {
      localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v));
    } catch {
      return false;
    }
  }
  return true;
}
