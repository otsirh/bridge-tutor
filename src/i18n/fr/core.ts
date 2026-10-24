// Card, seat and call vocabulary.

import type { Text } from '../en';
import { rankLabel } from '../../core/cards';

const SINGULAR = ['trèfle', 'carreau', 'cœur', 'pique'];
const RANK_WORDS: Record<number, string> = { 14: 'As', 13: 'Roi', 12: 'Dame', 11: 'Valet' };

export const core: Text['core'] = {
  seats: ['Nord', 'Est', 'Sud', 'Ouest'],
  seatLetters: ['N', 'E', 'S', 'O'],
  /** Pluriel, comme dans « cinq cœurs ». */
  suits: ['trèfles', 'carreaux', 'cœurs', 'piques'],
  /** Singulier, comme dans « un arrêt à cœur », « l’As de cœur ». */
  suitSingular: SINGULAR,
  strains: ['trèfles', 'carreaux', 'cœurs', 'piques', 'sans-atout'],
  nt: 'SA',
  pass: 'Passe',
  double: 'Contre',
  redouble: 'Surcontre',
  passedOut: 'Donne passée',
  /** « Dame de cœur » */
  cardLong: (rank: number, suit: number) => `${RANK_WORDS[rank] ?? rankLabel(rank)} de ${SINGULAR[suit]}`,
  hcp: 'H',
  tricks: (n: number) => (n < 2 ? 'levée' : 'levées'),
};
