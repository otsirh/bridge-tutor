// Card, seat and call vocabulary.

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';
import { SEAT, SUIT, plural } from './grammar';

const RANK_WORDS: Record<number, string> = { 14: 'as', 13: 'król', 12: 'dama', 11: 'walet' };

export const core: Text['core'] = {
  seats: [...SEAT.nom],
  seatLetters: ['N', 'E', 'S', 'W'],
  /** Plural nominative; the templates take other cases from ./grammar. */
  suits: [...SUIT.nom],
  suitSingular: [...SUIT.one],
  strains: [...SUIT.nom, 'bez atu'],
  nt: 'BA',
  pass: 'Pas',
  double: 'Kontra',
  redouble: 'Rekontra',
  passedOut: 'Przepasowane',
  /** "dama kier", "as pik" */
  cardLong: (rank: number, suit: number) => `${RANK_WORDS[rank] ?? rankLabel(rank)} ${SUIT.one[suit]}`,
  hcp: 'PC',
  tricks: (n: number) => plural(n, 'lewa', 'lewy', 'lew'),
};
