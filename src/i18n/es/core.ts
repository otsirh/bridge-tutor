// Card, seat and call vocabulary.

import type { Text } from '../en';

import { rankLabel } from '../../core/cards';

const SUITS = ['tréboles', 'diamantes', 'corazones', 'picas'];
const RANK_WORDS: Record<number, string> = { 14: 'as', 13: 'rey', 12: 'dama', 11: 'valet' };

export const core: Text['core'] = {
  seats: ['Norte', 'Este', 'Sur', 'Oeste'],
  seatLetters: ['N', 'E', 'S', 'O'],
  /** Plural, as in "cinco corazones". */
  suits: SUITS,
  suitSingular: ['trébol', 'diamante', 'corazón', 'pica'],
  strains: ['tréboles', 'diamantes', 'corazones', 'picas', 'sin triunfo'],
  /** Sin triunfo in bids and contracts ("3SA"), as the Spanish federation writes it. */
  nt: 'SA',
  pass: 'Paso',
  double: 'Doblo',
  redouble: 'Redoblo',
  passedOut: 'Todos pasan',
  /** "dama de corazones" */
  cardLong: (rank: number, suit: number) => `${RANK_WORDS[rank] ?? rankLabel(rank)} de ${SUITS[suit]}`,
  /** Puntos de honor ("12 PH"). */
  hcp: 'PH',
  tricks: (n: number) => (n === 1 ? 'baza' : 'bazas'),
};
