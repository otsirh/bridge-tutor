// Basic card, suit and seat primitives shared by every module.
//
// Card id = suit * 13 + (rank - 2), rank 2..14 (14 = Ace).
// Suits:   0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades  (bidding order)
// Strains: 0..3 = suits, 4 = notrump
// Seats:   0 = North, 1 = East, 2 = South, 3 = West  (clockwise)

export type Seat = 0 | 1 | 2 | 3;
export type Suit = 0 | 1 | 2 | 3;
export type Strain = 0 | 1 | 2 | 3 | 4;
export type Card = number;

export const N: Seat = 0, E: Seat = 1, S: Seat = 2, W: Seat = 3;
export const CLUBS: Suit = 0, DIAMONDS: Suit = 1, HEARTS: Suit = 2, SPADES: Suit = 3;
export const NT: Strain = 4;

// Names shown to people. These start in English and are replaced in place by
// the active language (src/i18n), so read them when rendering — don't copy
// them at module load.
export const SEAT_NAMES: string[] = ['North', 'East', 'South', 'West'];
export const SEAT_LETTERS: string[] = ['N', 'E', 'S', 'W'];
export const SUIT_SYMBOLS: readonly string[] = ['♣', '♦', '♥', '♠'];
/** Plural ("five hearts"). */
export const SUIT_NAMES: string[] = ['clubs', 'diamonds', 'hearts', 'spades'];
export const SUIT_NAME_SINGULAR: string[] = ['club', 'diamond', 'heart', 'spade'];
/** Strain symbols for display: the four suit symbols and the notrump abbreviation. */
export const STRAIN_SYMBOLS: string[] = ['♣', '♦', '♥', '♠', 'NT'];
export const STRAIN_NAMES: string[] = ['clubs', 'diamonds', 'hearts', 'spades', 'notrump'];
export const RANK_CHARS = '23456789TJQKA';

export const suitOf = (c: Card): Suit => ((c / 13) | 0) as Suit;
export const rankOf = (c: Card): number => (c % 13) + 2;
export const makeCard = (suit: number, rank: number): Card => suit * 13 + rank - 2;

export const partnerOf = (s: number): Seat => ((s + 2) & 3) as Seat;
export const lhoOf = (s: number): Seat => ((s + 1) & 3) as Seat;
export const rhoOf = (s: number): Seat => ((s + 3) & 3) as Seat;
export const sideOf = (s: number): 0 | 1 => (s & 1) as 0 | 1; // 0 = NS, 1 = EW
export const sameSide = (a: number, b: number) => (a & 1) === (b & 1);
export const isMajor = (s: number) => s === HEARTS || s === SPADES;
export const isMinor = (s: number) => s === CLUBS || s === DIAMONDS;
export const isRed = (s: number) => s === DIAMONDS || s === HEARTS;

export function rankChar(rank: number): string {
  return RANK_CHARS[rank - 2];
}

/** Rank as shown to people ("10" instead of "T"). */
export function rankLabel(rank: number): string {
  return rank === 10 ? '10' : RANK_CHARS[rank - 2];
}

export function cardName(c: Card): string {
  return SUIT_SYMBOLS[suitOf(c)] + rankLabel(rankOf(c));
}

let longName = (rank: number, suit: number): string => {
  const names: Record<number, string> = { 14: 'ace', 13: 'king', 12: 'queen', 11: 'jack' };
  return `${names[rank] ?? rankLabel(rank)} of ${SUIT_NAMES[suit]}`;
};

/** Set by the active language. */
export function setCardLongName(fn: (rank: number, suit: number) => string) {
  longName = fn;
}

export function cardLongName(c: Card): string {
  return longName(rankOf(c), suitOf(c));
}

/** Parse "SAK5" / "♠AK5" style card names. */
export function parseCard(text: string): Card {
  const t = text.trim().toUpperCase().replace('10', 'T');
  const suitChar = t[0];
  const idx = 'CDHS'.indexOf(suitChar);
  const symIdx = SUIT_SYMBOLS.indexOf(suitChar as never);
  const suit = idx >= 0 ? idx : symIdx;
  const rank = RANK_CHARS.indexOf(t[1]) + 2;
  if (suit < 0 || rank < 2) throw new Error('Bad card ' + text);
  return makeCard(suit, rank);
}

export const HCP_VALUE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4]; // indexed by rank-2

export function cardHcp(c: Card): number {
  return HCP_VALUE[c % 13];
}

export function hcp(hand: readonly Card[]): number {
  let t = 0;
  for (const c of hand) t += HCP_VALUE[c % 13];
  return t;
}

export function suitLengths(hand: readonly Card[]): number[] {
  const l = [0, 0, 0, 0];
  for (const c of hand) l[suitOf(c)]++;
  return l;
}

export function cardsInSuit(hand: readonly Card[], suit: number): Card[] {
  return hand.filter(c => suitOf(c) === suit).sort((a, b) => b - a);
}

/** Hand masks: per suit, bit (rank-2) set when held. */
export function handMasks(hand: readonly Card[]): number[] {
  const m = [0, 0, 0, 0];
  for (const c of hand) m[suitOf(c)] |= 1 << (c % 13);
  return m;
}

/** Display order for a hand on screen: alternate colours (♠ ♥ ♣ ♦). */
export const DISPLAY_SUIT_ORDER: Suit[] = [SPADES, HEARTS, CLUBS, DIAMONDS];
/** Conventional diagram order (♠ ♥ ♦ ♣). */
export const DIAGRAM_SUIT_ORDER: Suit[] = [SPADES, HEARTS, DIAMONDS, CLUBS];

export function sortHand(hand: readonly Card[], order: readonly Suit[] = DISPLAY_SUIT_ORDER): Card[] {
  const pos = [0, 0, 0, 0];
  order.forEach((s, i) => (pos[s] = i));
  return [...hand].sort((a, b) => {
    const sa = suitOf(a), sb = suitOf(b);
    if (sa !== sb) return pos[sa] - pos[sb];
    return b - a;
  });
}

export function suitString(hand: readonly Card[], suit: number): string {
  const cs = cardsInSuit(hand, suit);
  return cs.length ? cs.map(c => rankLabel(rankOf(c))).join('') : '—';
}

export function handString(hand: readonly Card[]): string {
  return DIAGRAM_SUIT_ORDER.map(s => SUIT_SYMBOLS[s] + suitString(hand, s)).join(' ');
}

// ---------------------------------------------------------------------------
// Random numbers (seedable so boards can be replayed)

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(arr: T[], rnd: () => number = Math.random): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

export type Deal = Card[][]; // [seat] -> 13 cards

export function dealCards(rnd: () => number = Math.random): Deal {
  const deck = shuffle(Array.from({ length: 52 }, (_, i) => i), rnd);
  return [0, 1, 2, 3].map(s => sortHand(deck.slice(s * 13, s * 13 + 13)));
}

// ---------------------------------------------------------------------------
// Board conventions (dealer & vulnerability follow the standard 16-board cycle)

export type Vulnerability = 'None' | 'NS' | 'EW' | 'Both';

export function boardDealer(board: number): Seat {
  return ((board - 1) % 4) as Seat;
}

const VUL_CYCLE: Vulnerability[] = [
  'None', 'NS', 'EW', 'Both', 'NS', 'EW', 'Both', 'None',
  'EW', 'Both', 'None', 'NS', 'Both', 'None', 'NS', 'EW',
];

export function boardVulnerability(board: number): Vulnerability {
  return VUL_CYCLE[(board - 1) % 16];
}

export function isVulnerable(vul: Vulnerability, seat: number): boolean {
  if (vul === 'Both') return true;
  if (vul === 'None') return false;
  return vul === 'NS' ? (seat & 1) === 0 : (seat & 1) === 1;
}
