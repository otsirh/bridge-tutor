// PLACEHOLDER (French): an English copy until the French translation lands.
// Card, seat and call vocabulary.

import type { Text } from '../en';

import { rankLabel } from '../../core/cards';

const SUITS = ['clubs', 'diamonds', 'hearts', 'spades'];
const RANK_WORDS: Record<number, string> = { 14: 'ace', 13: 'king', 12: 'queen', 11: 'jack' };

export const core: Text['core'] = {
  seats: ['North', 'East', 'South', 'West'],
  seatLetters: ['N', 'E', 'S', 'W'],
  /** Plural, as in "five hearts". */
  suits: SUITS,
  suitSingular: ['club', 'diamond', 'heart', 'spade'],
  strains: ['clubs', 'diamonds', 'hearts', 'spades', 'notrump'],
  /** Notrump in bids and contracts ("3NT"). */
  nt: 'NT',
  pass: 'Pass',
  double: 'Double',
  redouble: 'Redouble',
  passedOut: 'Passed out',
  /** "queen of hearts" */
  cardLong: (rank: number, suit: number) => `${RANK_WORDS[rank] ?? rankLabel(rank)} of ${SUITS[suit]}`,
  /** Abbreviation after a number of high-card points ("12 HCP"). */
  hcp: 'HCP',
  tricks: (n: number) => (n === 1 ? 'trick' : 'tricks'),
};
