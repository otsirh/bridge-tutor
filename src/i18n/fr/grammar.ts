// French grammar helpers shared by the French catalogues.

const CARD = /^[♣♦♥♠](10|[2-9AKQJ])$/;

/** French plural: 0 and 1 take the singular ("0 levée", "1 levée", "2 levées"). */
export const pl = (n: number, one: string, many: string) => (Math.abs(n) < 2 ? one : many);

/** "3 levées" */
export const nPl = (n: number, one: string, many: string) => `${n} ${pl(n, one, many)}`;

/**
 * A card name ("♠K") with its article, chosen by the rank's gender:
 * "l’♠A" (l’As), "le ♠K" (le Roi), "la ♥Q" (la Dame), "le ♦J", "le ♣10".
 * Anything that is not a single card name (a call, a list) is returned unchanged.
 */
export const le = (x: string) => (!CARD.test(x) ? x : x.endsWith('A') ? `l’${x}` : x.endsWith('Q') ? `la ${x}` : `le ${x}`);

/** Sentence start: "L’♠A", "Le ♠K", "La ♥Q". */
export const Le = (x: string) => {
  const s = le(x);
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/** "du ♠K", "de la ♥Q", "de l’♠A". */
export const du = (x: string) => (!CARD.test(x) ? `de ${x}` : x.endsWith('A') ? `de l’${x}` : x.endsWith('Q') ? `de la ${x}` : `du ${x}`);

/** "de Nord", "d’Est", "d’Ouest". */
export const de = (name: string) => (/^[AEIOUÉ]/i.test(name) ? `d’${name}` : `de ${name}`);
