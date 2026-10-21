// Card, seat and call vocabulary.

import type { Text } from '../en';

import { rankLabel } from '../../core/cards';

/** Suit names are invariable in Italian bridge: "cinque cuori", "un colore di cuori". */
const SUITS = ['fiori', 'quadri', 'cuori', 'picche'];
const RANK_WORDS: Record<number, string> = { 14: 'asso', 13: 're', 12: 'donna', 11: 'fante' };

export const core: Text['core'] = {
  seats: ['Nord', 'Est', 'Sud', 'Ovest'],
  seatLetters: ['N', 'E', 'S', 'O'],
  suits: SUITS,
  suitSingular: SUITS,
  strains: ['fiori', 'quadri', 'cuori', 'picche', 'senza atout'],
  nt: 'SA',
  pass: 'Passo',
  double: 'Contro',
  redouble: 'Surcontro',
  passedOut: 'Tutti passo',
  /** "donna di cuori", "10 di picche" */
  cardLong: (rank: number, suit: number) => `${RANK_WORDS[rank] ?? rankLabel(rank)} di ${SUITS[suit]}`,
  /** Punti onori. */
  hcp: 'PO',
  tricks: (n: number) => (n === 1 ? 'presa' : 'prese'),
};
