// BBO LIN hand records, as read by the Bridge Base Online handviewer.
//
// LIN is a flat list of `key|value|` pairs. The subset used here:
//   pn|south,west,north,east|   player names
//   st||                        start of a board
//   md|3SAKQ2HK73DJ52CQ84,…|    dealer digit (1=S 2=W 3=N 4=E), then the hands South,
//                               West, North, East as suit letters followed by ranks;
//                               the last hand may be left out
//   ah|Board 1|                 heading
//   sv|o|                       vulnerability: o = none, n = NS, e = EW, b = both
//   mb|1N|                      one call per pair: p, d, r, 1C … 7N ("!" = alerted)
//   pc|SA|                      one card per pair, in play order
// Other pairs (an, mc, pg, nt, qx …) are ignored when reading.

import { type Card, type Seat, type Vulnerability, N, RANK_CHARS, makeCard, boardDealer, boardVulnerability } from './cards';
import { type Call, PASS, DOUBLE, REDOUBLE, levelOf, strainOf } from './auction';
import {
  type BoardData, PbnError, SUIT_CHARS,
  cardCode, parseCardCode, parseCallCode, suitRanks, completeDeal, validateBoard,
} from './pbn';

/** Hand order in md. */
const MD_SEATS: readonly Seat[] = [2, 3, 0, 1]; // S, W, N, E
const LIN_VUL: Record<Vulnerability, string> = { None: 'o', NS: 'n', EW: 'e', Both: 'b' };
const VUL_FROM_LIN = new Map<string, Vulnerability>([
  ['o', 'None'], ['0', 'None'], ['-', 'None'], ['n', 'NS'], ['e', 'EW'], ['b', 'Both'],
]);

/** Dealer digit: 1 = S, 2 = W, 3 = N, 4 = E. */
const dealerDigit = (s: Seat): string => String(((s + 2) & 3) + 1);
const seatOfDigit = (d: number): Seat => ((d + 1) & 3) as Seat;

/** "SAKQ2HK73DJ52CQ84" (every suit letter is written, even for a void). */
function linHand(hand: readonly Card[]): string {
  return [3, 2, 1, 0].map(s => SUIT_CHARS[s] + suitRanks(hand, s)).join('');
}

function linCall(c: Call): string {
  if (c === PASS) return 'p';
  if (c === DOUBLE) return 'd';
  if (c === REDOUBLE) return 'r';
  return levelOf(c) + 'CDHSN'[strainOf(c)];
}

const pair = (key: string, value: string) => `${key}|${value.replace(/\|/g, ' ')}|`;

/** One board as LIN. Throws PbnError for an invalid board. */
export function toLIN(b: BoardData): string {
  validateBoard(b);
  const out: string[] = [];
  const names = [b.south, b.west, b.north, b.east];
  if (names.some(n => n)) out.push(pair('pn', names.map(n => (n ?? '').replace(/,/g, ' ')).join(',')));
  out.push(pair('st', ''));
  out.push(pair('md', dealerDigit(b.dealer) + MD_SEATS.map(s => linHand(b.deal[s])).join(',')));
  if (b.board !== undefined) out.push(pair('ah', `Board ${b.board}`));
  out.push(pair('sv', LIN_VUL[b.vul]));
  for (const c of b.calls ?? []) out.push(pair('mb', linCall(c)));
  for (const c of b.play ?? []) out.push(pair('pc', cardCode(c)));
  return out.join('');
}

/** A link that opens the board in the BBO handviewer. */
export function bboHandviewerUrl(b: BoardData): string {
  return 'https://www.bridgebase.com/tools/handviewer.html?lin=' + encodeURIComponent(toLIN(b));
}

// ---------------------------------------------------------------------------
// Reading

/** Accepts a bare LIN string or a URL with a `lin=` parameter (handviewer links). */
function linText(text: string): string {
  const t = text.trim();
  const m = /[?&]lin=([^&#]*)/.exec(t);
  if (!m) return t;
  try {
    return decodeURIComponent(m[1].replace(/\+/g, '%20'));
  } catch {
    throw new PbnError('syntax', 'url');
  }
}

/** "SAKQ2HK73DJ52CQ84" → cards; an empty hand → null (unknown). */
function parseLinHand(t: string): Card[] | null {
  const cards: Card[] = [];
  let suit = -1;
  for (const ch of t.trim().toUpperCase().replace(/10/g, 'T')) {
    const s = SUIT_CHARS.indexOf(ch);
    if (s >= 0) {
      suit = s;
      continue;
    }
    const r = RANK_CHARS.indexOf(ch);
    if (r < 0 || suit < 0) throw new PbnError('syntax', t);
    cards.push(makeCard(suit, r + 2));
  }
  return cards.length ? cards : null;
}

/** md value → dealer (when given) and the four hands. */
function parseMd(md: string): { dealer?: Seat; deal: Card[][] } {
  let t = md.trim();
  let dealer: Seat | undefined;
  if (/^[1-4]/.test(t)) {
    dealer = seatOfDigit(+t[0]);
    t = t.slice(1);
  }
  const parts = t.split(',');
  if (parts.length > 4) throw new PbnError('syntax', md);
  const hands: (Card[] | null)[] = [null, null, null, null];
  parts.forEach((p, k) => (hands[MD_SEATS[k]] = parseLinHand(p)));
  return { dealer, deal: completeDeal(hands) };
}

/**
 * Reads the first board of a LIN string (or of a handviewer URL): deal,
 * dealer, vulnerability, board number, names, calls and cards played.
 * Throws PbnError ('syntax' without md, 'auction' / 'play' for illegal calls or cards).
 */
export function parseLIN(text: string): BoardData {
  const parts = linText(text).split('|');
  let md: string | undefined, sv: string | undefined, heading: string | undefined, qx: string | undefined;
  let names: string[] = [];
  const mb: string[] = [], pc: string[] = [];
  for (let i = 0; i + 1 < parts.length; i += 2) {
    const key = parts[i].trim().toLowerCase(), value = parts[i + 1];
    if (md !== undefined && (key === 'qx' || key === 'md')) break; // the next board of a session
    if (key === 'md') md = value;
    else if (key === 'sv') sv = value.trim().toLowerCase();
    else if (key === 'ah') heading = value;
    else if (key === 'qx') qx = value;
    else if (key === 'pn') names = value.split(',').map(n => n.trim());
    else if (key === 'mb') mb.push(value);
    else if (key === 'pc') pc.push(value);
  }
  if (md === undefined) throw new PbnError('syntax', 'md');

  const { dealer, deal } = parseMd(md);
  const num = /\d+/.exec(heading ?? '') ?? /\d+/.exec(qx ?? ''); // "Board 12" or "o12"
  const board = num ? +num[0] : undefined;
  const known = board !== undefined && board > 0;
  let vul: Vulnerability | undefined;
  if (sv) {
    vul = VUL_FROM_LIN.get(sv);
    if (!vul) throw new PbnError('syntax', sv);
  }
  const b: BoardData = {
    dealer: dealer ?? (known ? boardDealer(board) : N),
    vul: vul ?? (known ? boardVulnerability(board) : 'None'),
    deal,
  };
  if (board !== undefined) b.board = board;
  (['south', 'west', 'north', 'east'] as const).forEach((seat, k) => {
    if (names[k]) b[seat] = names[k];
  });
  if (mb.length) {
    b.calls = mb.map(v => {
      const c = parseCallCode(v.replace(/[!?]+$/, ''));
      if (c === null) throw new PbnError('auction', v);
      return c;
    });
  }
  if (pc.length) {
    b.play = pc.map(v => {
      const c = parseCardCode(v);
      if (c === null) throw new PbnError('play', v);
      return c;
    });
  }
  validateBoard(b); // legality of the calls and cards
  return b;
}
