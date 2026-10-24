// Polish word forms shared by the catalogues: plurals, suits and seats by case.
//
// Polish nouns change with the number in front of them (1 lewa, 2–4 lewy,
// 5–21 lew, 22–24 lewy …) and with their role in the sentence, so the
// templates pick the form they need from here.

const RULES = new Intl.PluralRules('pl');

/** The plural form for a count: one (1), few (2–4, 22–24 …), many (0, 5–21, 25–31 …). */
export function plural(n: number, one: string, few: string, many: string): string {
  const c = RULES.select(n);
  return c === 'one' ? one : c === 'few' ? few : many;
}

/** The count and its noun: "1 lewa", "3 lewy", "12 lew". */
export const count = (n: number, one: string, few: string, many: string) => `${n} ${plural(n, one, few, many)}`;

export const tricks = (n: number) => count(n, 'lewa', 'lewy', 'lew');
export const cards = (n: number) => count(n, 'karta', 'karty', 'kart');
export const points = (n: number) => count(n, 'punkt', 'punkty', 'punktów');
export const decisions = (n: number) => count(n, 'decyzja', 'decyzje', 'decyzji');
export const boards = (n: number) => count(n, 'rozdanie', 'rozdania', 'rozdań');

/** Suits by case (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades). */
export const SUIT = {
  /** Singular: "jeden kier", "dama karo". */
  one: ['trefl', 'karo', 'kier', 'pik'],
  /** Plural nominative and accusative: "piki są dłuższe", "licytuj kiery", "cztery kiery". */
  nom: ['trefle', 'kara', 'kiery', 'piki'],
  /** Plural genitive: "pięć kierów", "bez pików". */
  gen: ['trefli', 'kar', 'kierów', 'pików'],
  /** Plural locative: "w kierach". */
  loc: ['treflach', 'karach', 'kierach', 'pikach'],
  /** Plural instrumental: "z kierami", "przed pikami". */
  ins: ['treflami', 'karami', 'kierami', 'pikami'],
};

/** Adjective stems: "kolor kierow-y", "poparcie pikow-e", "z karow-ą damą". */
const ADJ = ['treflow', 'karow', 'kierow', 'pikow'];
/** A suit adjective with the given ending: adj(2, 'y') = "kierowy", adj(3, 'ego') = "pikowego". */
export const adj = (s: number, ending: string) => ADJ[s] + ending;

/** "1 kier", "3 kiery", "5 kierów". */
export const nSuit = (n: number, s: number) => count(n, SUIT.one[s], SUIT.nom[s], SUIT.gen[s]);

/** Seats by case (0 = North, 1 = East, 2 = South, 3 = West). */
export const SEAT = {
  nom: ['Północ', 'Wschód', 'Południe', 'Zachód'],
  gen: ['Północy', 'Wschodu', 'Południa', 'Zachodu'],
  dat: ['Północy', 'Wschodowi', 'Południu', 'Zachodowi'],
  ins: ['Północą', 'Wschodem', 'Południem', 'Zachodem'],
  loc: ['Północy', 'Wschodzie', 'Południu', 'Zachodzie'],
};

/** Past-tense ending agreeing with a seat: Północ wistowała, Wschód wistował, Południe wistowało. */
export const PAST = ['a', '', 'o', ''];

/** A seat name passed in as text (the nominative from core.seats), put into another case. */
export function seatAs(name: string, c: keyof typeof SEAT): string {
  const i = SEAT.nom.indexOf(name);
  return i < 0 ? name : SEAT[c][i];
}
