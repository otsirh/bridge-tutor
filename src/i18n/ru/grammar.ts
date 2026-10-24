// Russian word forms shared by the catalogues: plurals, and the cases of suits
// and seats (suits and seats arrive as indexes, or as already translated seat
// names).

const RULES = new Intl.PluralRules('ru');

/** The form for a count: one (1, 21), few (2–4, 22–24), many (5–20, 25…). Fractions take the "few" form ("2,5 взятки"). */
export function pl(n: number, one: string, few: string, many: string): string {
  const r = RULES.select(n);
  return r === 'one' ? one : r === 'many' ? many : few;
}

/** The count and the word: "1 взятка", "3 взятки", "5 взяток". */
export const num = (n: number, one: string, few: string, many: string) => `${n} ${pl(n, one, few, many)}`;

/** Tricks after a number, in the nominative ("5 взяток") and the accusative ("отдать 1 взятку"). */
export const tricks = (n: number) => num(n, 'взятка', 'взятки', 'взяток');
export const tricksAcc = (n: number) => num(n, 'взятку', 'взятки', 'взяток');
/** High-card points after a number: "1 очко", "3 очка", "12 очков". */
export const points = (n: number) => num(n, 'очко', 'очка', 'очков');

// Suits: 0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades.
/** Nominative plural: "трефы". */
export const SUIT_NOM = ['трефы', 'бубны', 'червы', 'пики'];
/** Genitive plural, after numbers and «нет»: "пять червей", "без пик". */
export const SUIT_GEN = ['треф', 'бубен', 'червей', 'пик'];
/** Dative plural: "по червам". */
export const SUIT_DAT = ['трефам', 'бубнам', 'червам', 'пикам'];
/** Accusative plural (inanimate, as the nominative): "заявить червы". */
export const SUIT_ACC = SUIT_NOM;
/** Instrumental plural: "с червами". */
export const SUIT_INS = ['трефами', 'бубнами', 'червами', 'пиками'];
/** Prepositional plural: "в червах". */
export const SUIT_PREP = ['трефах', 'бубнах', 'червах', 'пиках'];
/** One card of the suit: "одна черва". */
export const SUIT_ONE = ['трефа', 'бубна', 'черва', 'пика'];
/** Adjective with «масть» (feminine): nominative, genitive, accusative. */
export const SUIT_ADJ = ['трефовая', 'бубновая', 'червовая', 'пиковая'];
export const SUIT_ADJ_GEN = ['трефовой', 'бубновой', 'червовой', 'пиковой'];
export const SUIT_ADJ_ACC = ['трефовую', 'бубновую', 'червовую', 'пиковую'];
/** Adjective with a masculine noun («фит», «синглет»): "червовый фит". */
export const SUIT_ADJ_M = ['трефовый', 'бубновый', 'червовый', 'пиковый'];

/** "4 червы", "5 червей": the suit after a number of cards. */
export const suitCount = (n: number, s: number) => `${n} ${pl(n, SUIT_ONE[s], SUIT_NOM[s], SUIT_GEN[s])}`;

// Seats: 0 = North, 1 = East, 2 = South, 3 = West.
export const SEAT_NOM = ['Север', 'Восток', 'Юг', 'Запад'];
export const SEAT_GEN = ['Севера', 'Востока', 'Юга', 'Запада'];

/** A seat name the code passes in ("Запад"), in the genitive ("Запада"); other text is kept. */
export function seatGen(name: string): string {
  const i = SEAT_NOM.indexOf(name);
  return i < 0 ? name : SEAT_GEN[i];
}
