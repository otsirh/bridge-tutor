// Portable Bridge Notation (PBN 2.1): reading and writing boards.
//
// A PBN file is a list of games separated by blank lines. A game is a list of
// [Tag "value"] pairs; the Auction and Play tags are followed by section data:
//
//   [Dealer "N"]
//   [Vulnerable "None"]          None | NS | EW | All
//   [Deal "N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 543.62.T9864.T53"]
//                                first seat, then the hands clockwise, each as S.H.D.C
//   [Auction "N"]                first caller (the dealer), four calls per line
//   1NT Pass 2D Pass
//   [Play "E"]                   opening leader; one trick per line, the columns are
//   DK DA D4 D2                  the seats clockwise from the opening leader ("-" = not played)
//
// Files always use fixed English letters (N E S W, S H D C, Pass X XX, 1C..7NT),
// never the app's localized display names.

import {
  type Card, type Seat, type Vulnerability, N, RANK_CHARS,
  suitOf, makeCard, lhoOf, sortHand, boardDealer, boardVulnerability,
} from './cards';
import { type Call, type Contract, Auction, PASS, DOUBLE, REDOUBLE, bid, levelOf, strainOf } from './auction';
import { PlayState } from './play';

/** One board: the deal plus whatever is known of the auction and the play. */
export interface BoardData {
  board?: number;
  dealer: Seat;
  vul: Vulnerability;
  deal: Card[][]; // [seat] -> 13 cards
  calls?: Call[]; // from the dealer; may stop before the auction is over
  play?: Card[]; // in play order; needs a finished auction with a contract
  event?: string;
  site?: string;
  date?: string; // PBN style "2026.10.21"
  north?: string;
  east?: string;
  south?: string;
  west?: string;
}

export type PbnErrorCode =
  | 'syntax' // malformed text or field; detail = the offending text or field name
  | 'cards' // a hand does not hold 13 valid cards
  | 'duplicate' // a card appears twice
  | 'missing-hand' // more than one hand is unknown
  | 'auction' // unknown or illegal call
  | 'play' // unknown or illegal card, or play without a contract
  | 'share' // corrupt or truncated share code; detail says which check failed
  | 'empty'; // no boards in the text

/** Import/export failure. `code` and `detail` are language-neutral; the UI translates them. */
export class PbnError extends Error {
  /** 1-based position of the failing board in a multi-board file. */
  game?: number;

  constructor(public readonly code: PbnErrorCode, public readonly detail?: string) {
    super(detail === undefined ? code : `${code}: ${detail}`);
    this.name = 'PbnError';
  }
}

// ---------------------------------------------------------------------------
// Letters for seats, cards, calls and contracts

export const SEAT_CHARS = 'NESW';
export const SUIT_CHARS = 'CDHS';
const STRAIN_CODES = ['C', 'D', 'H', 'S', 'NT'];
const SEAT_WORDS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

export const seatChar = (s: Seat): string => SEAT_CHARS[s];

/** "N", "e", "North" … → seat; null for anything else. */
export function parseSeat(t: string): Seat | null {
  const s = t.trim().toUpperCase();
  const i = s ? SEAT_CHARS.indexOf(s[0]) : -1;
  if (i < 0 || (s.length > 1 && s !== SEAT_WORDS[i])) return null;
  return i as Seat;
}

/** "SA", "HT", "C2". */
export function cardCode(c: Card): string {
  return SUIT_CHARS[suitOf(c)] + RANK_CHARS[c % 13];
}

/** "SA", "ht", "D10" → card; null for anything else. */
export function parseCardCode(t: string): Card | null {
  const m = /^([CDHS])(10|[2-9TJQKA])$/.exec(t.trim().toUpperCase());
  if (!m) return null;
  return makeCard(SUIT_CHARS.indexOf(m[1]), RANK_CHARS.indexOf(m[2] === '10' ? 'T' : m[2]) + 2);
}

/** PBN call: "Pass", "X", "XX", "1C" … "7NT". */
export function callCode(c: Call): string {
  if (c === PASS) return 'Pass';
  if (c === DOUBLE) return 'X';
  if (c === REDOUBLE) return 'XX';
  return levelOf(c) + STRAIN_CODES[strainOf(c)];
}

const CALL_WORDS = new Map<string, Call>([
  ['P', PASS], ['PASS', PASS],
  ['X', DOUBLE], ['D', DOUBLE], ['DBL', DOUBLE],
  ['XX', REDOUBLE], ['R', REDOUBLE], ['RDBL', REDOUBLE],
]);

/** PBN or LIN call ("Pass", "p", "X", "d", "XX", "r", "1N", "1NT") → call; null for anything else. */
export function parseCallCode(t: string): Call | null {
  const s = t.trim().toUpperCase();
  const word = CALL_WORDS.get(s);
  if (word !== undefined) return word;
  const m = /^([1-7])(C|D|H|S|NT?)$/.exec(s);
  return m ? bid(+m[1], STRAIN_CODES.indexOf(m[2] === 'N' ? 'NT' : m[2])) : null;
}

/** "4SX", "3NT", "Pass" (passed out). */
export function contractCode(c: Contract | null): string {
  if (!c) return 'Pass';
  return c.level + STRAIN_CODES[c.strain] + ['', 'X', 'XX'][c.doubled];
}

// ---------------------------------------------------------------------------
// Board checks and derived facts (contract, result)

/** Replays the calls from the dealer; throws PbnError('auction') at the first illegal one. */
export function replayAuction(dealer: Seat, calls: readonly Call[]): Auction {
  const a = new Auction(dealer);
  for (const c of calls) {
    const known = Number.isInteger(c) && c >= 0 && c <= 37;
    if (!known || !a.isLegal(c)) throw new PbnError('auction', known ? callCode(c) : String(c));
    a.push(c);
  }
  return a;
}

/** The contract once the auction is over (null = passed out); undefined while it is unknown. */
export function boardContract(b: BoardData): Contract | null | undefined {
  if (!b.calls?.length) return undefined;
  const a = replayAuction(b.dealer, b.calls);
  return a.isComplete() ? a.contract() : undefined;
}

/**
 * The play after the recorded cards, or null when there is no contract.
 * Throws PbnError('play') for an illegal card or for cards without a contract.
 */
export function replayPlay(b: BoardData): PlayState | null {
  const contract = boardContract(b);
  if (!contract) {
    if (b.play?.length) throw new PbnError('play', 'contract');
    return null;
  }
  const state = new PlayState(contract, b.deal);
  for (const c of b.play ?? []) {
    if (!state.isLegal(c)) throw new PbnError('play', isCard(c) ? cardCode(c) : String(c));
    state.play(c);
  }
  return state;
}

/** Tricks taken by declarer's side once all 52 cards are played; otherwise undefined. */
export function boardResult(b: BoardData): number | undefined {
  const state = replayPlay(b);
  return state?.isOver ? state.declarerTricks : undefined;
}

const isCard = (c: unknown): c is Card => Number.isInteger(c) && (c as number) >= 0 && (c as number) < 52;

/** Four hands of 13 distinct cards; throws 'cards' or 'duplicate'. */
export function validateDeal(deal: readonly (readonly Card[])[]): void {
  if (!Array.isArray(deal) || deal.length !== 4) throw new PbnError('cards', 'hands');
  const seen = new Set<Card>();
  for (const hand of deal) {
    for (const c of hand) {
      if (!isCard(c)) throw new PbnError('cards', String(c));
      if (seen.has(c)) throw new PbnError('duplicate', cardCode(c));
      seen.add(c);
    }
  }
  deal.forEach((hand, s) => {
    if (hand.length !== 13) throw new PbnError('cards', SEAT_CHARS[s]);
  });
}

const VULNERABILITIES: readonly Vulnerability[] = ['None', 'NS', 'EW', 'Both'];

/** Checks every field of a board; throws PbnError with the matching code. */
export function validateBoard(b: BoardData): void {
  if (![0, 1, 2, 3].includes(b.dealer)) throw new PbnError('syntax', 'dealer');
  if (!VULNERABILITIES.includes(b.vul)) throw new PbnError('syntax', 'vulnerable');
  if (b.board !== undefined && !(Number.isSafeInteger(b.board) && b.board >= 0)) throw new PbnError('syntax', 'board');
  validateDeal(b.deal);
  replayPlay(b); // also replays the auction
}

// ---------------------------------------------------------------------------
// Deals: "N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 J76.T9854.A3.A92 -"

/** Ranks of one suit, high to low ("AKT2"). */
export function suitRanks(hand: readonly Card[], suit: number): string {
  return hand.filter(c => suitOf(c) === suit).sort((a, b) => b - a).map(c => RANK_CHARS[c % 13]).join('');
}

/** "AKQ2.K73.J52.Q84" (spades.hearts.diamonds.clubs). */
export function handToPBN(hand: readonly Card[]): string {
  return [3, 2, 1, 0].map(s => suitRanks(hand, s)).join('.');
}

/** "N:<north> <east> <south> <west>", or starting from another seat. */
export function dealToPBN(deal: readonly (readonly Card[])[], first: Seat = N): string {
  return SEAT_CHARS[first] + ':' + [0, 1, 2, 3].map(k => handToPBN(deal[(first + k) & 3])).join(' ');
}

/**
 * Fills in at most one unknown hand (null) from the cards nobody holds and
 * sorts the hands. Throws 'missing-hand', 'duplicate' or 'cards'.
 */
export function completeDeal(hands: readonly (Card[] | null)[]): Card[][] {
  const missing = [0, 1, 2, 3].filter(s => !hands[s]);
  if (missing.length > 1) throw new PbnError('missing-hand', missing.map(s => SEAT_CHARS[s]).join(''));
  const seen = new Set<Card>();
  hands.forEach(h => h?.forEach(c => {
    if (seen.has(c)) throw new PbnError('duplicate', cardCode(c));
    seen.add(c);
  }));
  hands.forEach((h, s) => {
    if (h && h.length !== 13) throw new PbnError('cards', SEAT_CHARS[s]);
  });
  const rest = Array.from({ length: 52 }, (_, c) => c).filter(c => !seen.has(c));
  return [0, 1, 2, 3].map(s => sortHand(hands[s] ?? rest));
}

/** "AKQ2.K73.J52.Q84" → cards; "-" → null (unknown hand). A "-" suit is a void. */
function parseHand(t: string): Card[] | null {
  if (t === '-') return null;
  const suits = t.toUpperCase().replace(/10/g, 'T').split('.');
  if (suits.length !== 4) throw new PbnError('syntax', t);
  const cards: Card[] = [];
  suits.forEach((ranks, i) => {
    if (ranks === '-') return;
    for (const ch of ranks) {
      const r = RANK_CHARS.indexOf(ch);
      if (r < 0) throw new PbnError('syntax', t);
      cards.push(makeCard(3 - i, r + 2));
    }
  });
  return cards;
}

/**
 * Parses a PBN deal ("N:AKQ2.K73.J52.Q84 T98.AQJ.KQ7.KJ76 …", any first seat,
 * any case). One hand may be "-" (or left out at the end) and is reconstructed.
 * Returns the hands indexed by seat.
 */
export function parseDealString(s: string): Card[][] {
  let t = s.trim().replace(/^"(.*)"$/s, '$1').trim();
  let first: Seat = N;
  const m = /^([NESW])\s*:/i.exec(t);
  if (m) {
    first = SEAT_CHARS.indexOf(m[1].toUpperCase()) as Seat;
    t = t.slice(m[0].length).trim();
  }
  const parts = t ? t.split(/\s+/) : [];
  if (parts.length > 4) throw new PbnError('syntax', s);
  const hands: (Card[] | null)[] = [null, null, null, null];
  parts.forEach((p, k) => (hands[(first + k) & 3] = parseHand(p)));
  return completeDeal(hands);
}

// ---------------------------------------------------------------------------
// Writing

const VUL_PBN: Record<Vulnerability, string> = { None: 'None', NS: 'NS', EW: 'EW', Both: 'All' };

function tagLine(name: string, value = ''): string {
  const v = value.replace(/[\r\n]+/g, ' ').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `[${name} "${v}"]`;
}

/** Calls four per line from the dealer; "*" marks an unfinished auction. */
function auctionLines(a: Auction): string[] {
  const lines: string[] = [];
  for (let i = 0; i < a.calls.length; i += 4) lines.push(a.calls.slice(i, i + 4).map(callCode).join(' '));
  if (!a.isComplete()) lines.push('*');
  return lines;
}

/** One trick per line, columns clockwise from `first`; "*" marks an unfinished play. */
function playLines(state: PlayState, first: Seat): string[] {
  const lines = state.tricks.filter(t => t.cards.length).map(t => {
    const row = ['-', '-', '-', '-'];
    t.cards.forEach((c, i) => (row[(t.leader + i - first) & 3] = cardCode(c)));
    return row.join(' ');
  });
  if (!state.isOver) lines.push('*');
  return lines;
}

/**
 * One board as a PBN game: the standard tags in the standard order, then the
 * Auction and Play sections when there are calls / cards. Declarer, Contract
 * and Result are derived (empty while unknown). Throws PbnError for an invalid board.
 */
export function toPBN(b: BoardData): string {
  validateBoard(b);
  const contract = boardContract(b);
  const state = replayPlay(b);
  const lines = [
    tagLine('Event', b.event),
    tagLine('Site', b.site),
    tagLine('Date', b.date?.replace(/^(\d{4})-(\d\d)-(\d\d)$/, '$1.$2.$3')),
    tagLine('Board', b.board?.toString()),
    tagLine('West', b.west),
    tagLine('North', b.north),
    tagLine('East', b.east),
    tagLine('South', b.south),
    tagLine('Dealer', seatChar(b.dealer)),
    tagLine('Vulnerable', VUL_PBN[b.vul]),
    tagLine('Deal', dealToPBN(b.deal)),
    tagLine('Declarer', contract ? seatChar(contract.declarer) : ''),
    tagLine('Contract', contract === undefined ? '' : contractCode(contract)),
    tagLine('Result', state?.isOver ? String(state.declarerTricks) : ''),
  ];
  if (b.calls?.length) {
    lines.push(tagLine('Auction', seatChar(b.dealer)), ...auctionLines(replayAuction(b.dealer, b.calls)));
  }
  if (contract && state && b.play?.length) {
    const leader = lhoOf(contract.declarer);
    lines.push(tagLine('Play', seatChar(leader)), ...playLines(state, leader));
  }
  return lines.join('\n') + '\n';
}

/** A whole PBN file: header line, then the games separated by blank lines. */
export function toPBNFile(boards: readonly BoardData[]): string {
  return '% PBN 2.1\n\n' + boards.map(toPBN).join('\n');
}

// ---------------------------------------------------------------------------
// Reading

type PbnItem =
  | { kind: 'tag'; name: string; value: string }
  | { kind: 'token'; text: string }
  | { kind: 'blank' };

// [Name "value with \" escapes"]  — also tolerates a missing pair of quotes.
const TAG_RE = /\[\s*([A-Za-z0-9_]+)\s*(?:"((?:[^"\\]|\\.)*)"|([^\]"]*?))\s*\]/y;

/** Splits PBN text into tags, section tokens and blank lines, dropping comments. */
function scanPBN(text: string): PbnItem[] {
  const s = text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  const items: PbnItem[] = [];
  let blankLine = true; // only whitespace so far on the current line
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === '\n') {
      if (blankLine) items.push({ kind: 'blank' });
      blankLine = true;
      i++;
    } else if (/\s/.test(ch)) {
      i++;
    } else if (ch === ';' || (ch === '%' && blankLine)) {
      // ";" comment or "%" escape line: up to the end of the line
      blankLine = false;
      const j = s.indexOf('\n', i);
      i = j < 0 ? s.length : j;
    } else if (ch === '{') {
      const j = s.indexOf('}', i);
      if (j < 0) throw new PbnError('syntax', s.slice(i, i + 20));
      blankLine = false;
      i = j + 1;
    } else if (ch === '[') {
      TAG_RE.lastIndex = i;
      const m = TAG_RE.exec(s);
      if (!m) throw new PbnError('syntax', s.slice(i, i + 20));
      const value = m[2] !== undefined ? m[2].replace(/\\(["\\])/g, '$1') : m[3];
      items.push({ kind: 'tag', name: m[1], value });
      blankLine = false;
      i = TAG_RE.lastIndex;
    } else {
      const start = i;
      while (i < s.length && !/[\s[{;]/.test(s[i])) i++;
      items.push({ kind: 'token', text: s.slice(start, i) });
      blankLine = false;
    }
  }
  return items;
}

interface PbnGame {
  tags: Map<string, string>; // lower-case tag name -> value
  sections: Map<string, string[]>; // lower-case tag name -> tokens after it
}

/**
 * Groups items into games. A game ends at a blank line (the standard) or when
 * a tag repeats (files without blank lines). Note tags don't interrupt the
 * section before them. "#" copies the value from the previous game.
 */
function splitGames(items: PbnItem[]): PbnGame[] {
  const games: PbnGame[] = [];
  let game: PbnGame | null = null;
  let section: string[] | null = null;
  let blank = false;
  for (const it of items) {
    if (it.kind === 'blank') {
      blank = true;
      continue;
    }
    if (it.kind === 'token') {
      section?.push(it.text);
    } else {
      const name = it.name.toLowerCase();
      if (!game || blank || (name !== 'note' && game.tags.has(name))) {
        game = { tags: new Map(), sections: new Map() };
        games.push(game);
        section = null;
      }
      if (name !== 'note') {
        const prev = games.length > 1 ? games[games.length - 2].tags.get(name) : undefined;
        game.tags.set(name, it.value === '#' ? prev ?? '' : it.value);
        section = [];
        game.sections.set(name, section);
      }
    }
    blank = false;
  }
  return games;
}

/** A tag value, or undefined when empty or unknown ("?", "????.??.??"). */
function tagValue(g: PbnGame, name: string): string | undefined {
  const v = g.tags.get(name)?.trim();
  return v === undefined || /^[?.\s]*$/.test(v) ? undefined : v;
}

function seatTag(v: string | undefined): Seat | undefined {
  if (v === undefined) return undefined;
  const s = parseSeat(v);
  if (s === null) throw new PbnError('syntax', v);
  return s;
}

const VUL_WORDS = new Map<string, Vulnerability>([
  ['NONE', 'None'], ['LOVE', 'None'], ['-', 'None'], ['0', 'None'],
  ['NS', 'NS'], ['EW', 'EW'], ['ALL', 'Both'], ['BOTH', 'Both'],
]);

function vulTag(v: string | undefined): Vulnerability | undefined {
  if (v === undefined) return undefined;
  const u = v.toUpperCase();
  const vul = VUL_WORDS.get(u) ?? VUL_WORDS.get(u.replace(/[^A-Z]/g, ''));
  if (!vul) throw new PbnError('syntax', v);
  return vul;
}

function boardNumber(v: string | undefined): number | undefined {
  const m = v === undefined ? null : /^\d+/.exec(v);
  return m ? +m[0] : undefined;
}

/** Strips note references (=1=), NAGs ($1) and annotations (!, ?, !?) from a token. */
function stripAnnotations(t: string): string {
  if (t.length > 24) return t; // never a valid token; spare the regex long junk
  return t.replace(/(?:=\d+=|\$\d+|[!?])+$/, '');
}

function parseAuction(tokens: readonly string[], dealer: Seat): Call[] {
  const a = new Auction(dealer);
  for (const raw of tokens) {
    const t = stripAnnotations(raw).toUpperCase();
    if (!t) continue;
    if (t === '*') break;
    if (t === 'AP') {
      while (!a.isComplete()) a.push(PASS);
      break;
    }
    const c = parseCallCode(t);
    if (c === null || !a.isLegal(c)) throw new PbnError('auction', raw);
    a.push(c);
  }
  return a.calls;
}

/** Play section tokens as cells: a card or null ("-"), four per trick in column order. */
function playCells(tokens: readonly string[]): (Card | null)[] {
  const cells: (Card | null)[] = [];
  for (const raw of tokens) {
    const t = stripAnnotations(raw);
    if (!t) continue;
    if (t === '*') break;
    if (t === '-') {
      cells.push(null);
      continue;
    }
    const c = parseCardCode(t);
    if (c === null) throw new PbnError('play', raw);
    cells.push(c);
  }
  return cells;
}

/** Replays the play section; `first` is the seat of the first column (the Play tag). */
function parsePlay(tokens: readonly string[], b: BoardData, first: Seat): Card[] {
  const cells = playCells(tokens);
  if (cells.every(c => c === null)) return [];
  const contract = boardContract(b);
  if (!contract) throw new PbnError('play', 'contract');
  if (first !== lhoOf(contract.declarer)) throw new PbnError('play', 'leader');
  const state = new PlayState(contract, b.deal);
  const play: Card[] = [];
  let stopped = false; // a "-" was met: nothing may be played after it
  for (let i = 0; i < cells.length; i += 4) {
    const leader = state.toPlay;
    for (let k = 0; k < 4; k++) {
      const c = cells[i + ((leader + k - first) & 3)] ?? null;
      if (c === null) {
        stopped = true;
        continue;
      }
      if (stopped || !state.isLegal(c)) throw new PbnError('play', cardCode(c));
      state.play(c);
      play.push(c);
    }
  }
  return play;
}

const TEXT_TAGS = [
  ['event', 'event'], ['site', 'site'], ['date', 'date'],
  ['north', 'north'], ['east', 'east'], ['south', 'south'], ['west', 'west'],
] as const;

function boardFromGame(g: PbnGame): BoardData {
  const deal = parseDealString(tagValue(g, 'deal')!);
  const board = boardNumber(tagValue(g, 'board'));
  const auctionSeat = seatTag(tagValue(g, 'auction'));
  const known = board !== undefined && board > 0;
  const dealer = seatTag(tagValue(g, 'dealer')) ?? auctionSeat ?? (known ? boardDealer(board) : N);
  const vul = vulTag(tagValue(g, 'vulnerable')) ?? (known ? boardVulnerability(board) : 'None');
  const b: BoardData = { dealer, vul, deal };
  if (board !== undefined) b.board = board;
  for (const [tag, field] of TEXT_TAGS) {
    const v = tagValue(g, tag);
    if (v !== undefined) b[field] = v;
  }
  if (auctionSeat !== undefined) {
    if (auctionSeat !== dealer) throw new PbnError('auction', 'dealer');
    const calls = parseAuction(g.sections.get('auction') ?? [], dealer);
    if (calls.length) b.calls = calls;
  }
  // Without an auction the contract is unknown, so a play section can't be used.
  const leader = seatTag(tagValue(g, 'play'));
  if (leader !== undefined && b.calls) {
    const play = parsePlay(g.sections.get('play') ?? [], b, leader);
    if (play.length) b.play = play;
  }
  return b;
}

/**
 * Reads every board of a PBN file. Tolerates comments, lower case, any first
 * seat in Deal, one unknown hand, Vulnerable spellings (None/Love/-, NS, EW,
 * All/Both), notes and annotations, "AP", and missing tags or sections.
 * Games without a deal are skipped. Throws PbnError ('empty' when no board is
 * found; `game` tells which board failed).
 */
export function parsePBN(text: string): BoardData[] {
  const games = splitGames(scanPBN(text)).filter(g => tagValue(g, 'deal') !== undefined);
  if (!games.length) throw new PbnError('empty');
  return games.map((g, i) => {
    try {
      return boardFromGame(g);
    } catch (e) {
      if (e instanceof PbnError) e.game = i + 1;
      throw e;
    }
  });
}
