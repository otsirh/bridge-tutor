// Card, seat and call vocabulary.
//
// Suits: the plural is the word Dutch players use for a number of cards
// ("vijf harten", "drie klaveren"); the singular is the form before another
// noun and for a single card ("hartenkleur", "klaverfit", "een kleine klaver").

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';

const SINGULAR = ['klaver', 'ruiten', 'harten', 'schoppen'];
const RANK_WORDS: Record<number, string> = { 14: 'aas', 13: 'heer', 12: 'vrouw', 11: 'boer' };

export const core: Text['core'] = {
  seats: ['Noord', 'Oost', 'Zuid', 'West'],
  seatLetters: ['N', 'O', 'Z', 'W'],
  suits: ['klaveren', 'ruiten', 'harten', 'schoppen'],
  suitSingular: SINGULAR,
  strains: ['klaveren', 'ruiten', 'harten', 'schoppen', 'sans atout'],
  nt: 'SA',
  pass: 'Pas',
  double: 'Doublet',
  redouble: 'Redoublet',
  passedOut: 'Rondgepast',
  /** "hartenvrouw", "schoppen 7" */
  cardLong: (rank: number, suit: number) => (RANK_WORDS[rank] ? `${SINGULAR[suit]}${RANK_WORDS[rank]}` : `${SINGULAR[suit]} ${rankLabel(rank)}`),
  hcp: 'pnt',
  tricks: (n: number) => (n === 1 ? 'slag' : 'slagen'),
};
