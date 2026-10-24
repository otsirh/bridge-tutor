// Card, seat and call vocabulary.
//
// German suit names are neuter and do not change in the plural („fünf Pik“,
// „vier Coeur“), so `suits` and `suitSingular` are the same words.

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';

const SUITS = ['Treff', 'Karo', 'Coeur', 'Pik'];
const RANK_WORDS: Record<number, string> = {
  14: 'Ass',
  13: 'König',
  12: 'Dame',
  11: 'Bube',
  10: 'Zehn',
  9: 'Neun',
  8: 'Acht',
  7: 'Sieben',
  6: 'Sechs',
  5: 'Fünf',
  4: 'Vier',
  3: 'Drei',
  2: 'Zwei',
};

export const core: Text['core'] = {
  seats: ['Nord', 'Ost', 'Süd', 'West'],
  seatLetters: ['N', 'O', 'S', 'W'],
  suits: SUITS,
  suitSingular: SUITS,
  strains: ['Treff', 'Karo', 'Coeur', 'Pik', 'Sans Atout'],
  nt: 'SA',
  pass: 'Passe',
  double: 'Kontra',
  redouble: 'Rekontra',
  passedOut: 'Eingepasst',
  /** „Coeur-Dame“ */
  cardLong: (rank: number, suit: number) => `${SUITS[suit]}-${RANK_WORDS[rank] ?? rankLabel(rank)}`,
  hcp: 'FP',
  tricks: (n: number) => (n === 1 ? 'Stich' : 'Stiche'),
};
