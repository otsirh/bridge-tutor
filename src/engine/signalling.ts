// Defensive signals by the book: standard attitude, standard count, and suit
// preference in the clear case. One set of rules serves everyone — the bots
// choose their cards with it, the sampler checks layouts against partner's
// signals, and the tutor reads and teaches it — so they can never disagree.
//
// Which signal a defender's card gives:
//   attitude    3rd hand on partner's lead: high = "I like this suit" (you hold
//               the A, K or Q, or a doubleton and a trump when partner led the
//               ace or king), lowest = "switch".
//   count       2nd or 4th hand on declarer's (or dummy's) lead: high-low = an
//               even number, lowest = odd.
//   discard     first discard from a suit: high (a 6 or better) = "lead this
//               suit" (A-K, A-Q, K-Q or Q-J-10 in it), lowest = "not this suit".
//   preference  leading a suit partner has shown out of, in a suit contract:
//               high = return the higher of the two other side suits (you hold
//               its ace), lowest = the lower one, a middle card = no preference.
// Attitude and count go with your first card in the suit only, and never in
// trumps (no trump echo). Signals use spot cards (2-9) that are not part of an
// honour sequence (the 9 from Q-J-10-9 is an honour card), and never a card
// that would win the trick or overtake partner's. "High" means any of those
// cards but your lowest; the bots signal with their highest, to be clear.

import { type Card, type Seat, suitOf, rankOf, makeCard, partnerOf, NT } from '../core/cards';
import type { Trick } from '../core/play';

export type SignalKind = 'attitude' | 'count' | 'discard' | 'preference';
/** What a signal says: high = encourage / even / higher suit; low = discourage / odd / lower suit; middle = no preference. */
export type Height = 'high' | 'low' | 'middle';

/** A moment in the play: `seat` is about to add a card to `trick`. */
export interface Moment {
  seat: Seat;
  declarer: Seat;
  trump: number;
  leader: Seat;
  trick: readonly Card[]; // cards already in this trick
  earlier: readonly Trick[]; // complete tricks before it
}

/** The signal a card of `suit` would carry at a moment (public information only). */
export interface Opportunity {
  kind: SignalKind;
  suit: number;
  beat: Card | null; // the card winning the trick, which a signal card must stay under
  sides: number[]; // preference: the two other side suits, lower first
}

/** A signal: the card and what it says. */
export interface Signal {
  kind: SignalKind;
  suit: number;
  height: Height;
  card: Card;
  sides: number[];
}

const isDefender = (seat: number, declarer: number) => (seat & 1) !== (declarer & 1);
const beats = (c: Card, w: Card, trump: number) => (suitOf(c) === suitOf(w) && c > w) || (suitOf(c) === trump && suitOf(w) !== trump);

function winningCard(trick: readonly Card[], trump: number): Card {
  let w = trick[0];
  for (const c of trick) if (beats(c, w, trump)) w = c;
  return w;
}

/** Cards `seat` played in `tricks`, each with the suit led to that trick. */
function cardsOf(tricks: readonly Trick[], seat: number): { card: Card; led: number }[] {
  const out: { card: Card; led: number }[] = [];
  for (const t of tricks) t.cards.forEach((c, i) => ((t.leader + i) & 3) === seat && out.push({ card: c, led: suitOf(t.cards[0]) }));
  return out;
}

const showedOut = (tricks: readonly Trick[], seat: number, suit: number) => cardsOf(tricks, seat).some(x => x.led === suit && suitOf(x.card) !== suit);

/** What a card of `suit` from the player to move would signal, if it is a spot card that stays under `beat`. */
export function opportunity(m: Moment, suit: number): Opportunity | null {
  if (!isDefender(m.seat, m.declarer)) return null;
  const mine = cardsOf(m.earlier, m.seat);
  if (!m.trick.length) {
    // leading a suit for partner to ruff
    const partner = partnerOf(m.seat);
    if (m.trump === NT || suit === m.trump || !showedOut(m.earlier, partner, suit) || showedOut(m.earlier, partner, m.trump)) return null;
    return { kind: 'preference', suit, beat: null, sides: [0, 1, 2, 3].filter(s => s !== suit && s !== m.trump) };
  }
  if (suit === m.trump) return null;
  const led = suitOf(m.trick[0]);
  if (suit === led) {
    if (mine.some(x => suitOf(x.card) === suit)) return null; // only the first card in the suit
    const pos = m.trick.length; // 1 = second hand, 2 = third (partner led), 3 = fourth
    return { kind: pos === 2 ? 'attitude' : 'count', suit, beat: pos >= 2 ? winningCard(m.trick, m.trump) : null, sides: [] };
  }
  if (mine.some(x => suitOf(x.card) === suit && x.led !== suit)) return null; // only the first discard from the suit
  return { kind: 'discard', suit, beat: null, sides: [] };
}

/** The signal a card played at this moment carries, judged from public information. */
export function signalOf(m: Moment, card: Card): Opportunity | null {
  const op = opportunity(m, suitOf(card));
  if (!op || rankOf(card) > 9 || (op.beat !== null && beats(card, op.beat, m.trump))) return null;
  return op;
}

const inSequence = (r: number, ranks: readonly number[]): boolean => ranks.includes(r + 1) && (r + 1 >= 10 || inSequence(r + 1, ranks));

/** The cards in `hand` that could carry this signal, low to high. */
export function signalCards(hand: readonly Card[], op: Opportunity, trump: number): Card[] {
  const ranks = hand.filter(c => suitOf(c) === op.suit).map(rankOf);
  return hand
    .filter(c => suitOf(c) === op.suit && rankOf(c) <= 9 && !inSequence(rankOf(c), ranks) && (op.beat === null || !beats(c, op.beat, trump)))
    .sort((a, b) => a - b);
}

/** Attitude: why a defender likes partner's suit — an honour, a doubleton to ruff with, or neither. */
export function attitudeReason(hand: readonly Card[], m: Moment, suit: number): 'honour' | 'ruff' | null {
  const ranks = hand.filter(c => suitOf(c) === suit).map(rankOf);
  if (ranks.some(r => r >= 12)) return 'honour';
  const ledHigh = m.trick.length > 0 && rankOf(m.trick[0]) >= 13;
  return m.trump !== NT && ranks.length === 2 && ledHigh && hand.some(c => suitOf(c) === m.trump) ? 'ruff' : null;
}

/** Discards: a suit worth asking partner to lead (A-K, A-Q, K-Q or Q-J-10). */
export function wantsLead(hand: readonly Card[], suit: number): boolean {
  const has = (r: number) => hand.some(c => suitOf(c) === suit && rankOf(c) === r);
  return (has(14) && (has(13) || has(12))) || (has(13) && has(12)) || (has(12) && has(11) && has(10));
}

/** What a defender holding `hand` (before playing) wants this signal to say. */
export function intent(op: Opportunity, hand: readonly Card[], m: Moment): Height {
  switch (op.kind) {
    case 'count':
      return hand.filter(c => suitOf(c) === op.suit).length % 2 === 0 ? 'high' : 'low';
    case 'attitude':
      return attitudeReason(hand, m, op.suit) ? 'high' : 'low';
    case 'discard':
      return wantsLead(hand, op.suit) ? 'high' : 'low';
    case 'preference': {
      const ace = (s: number) => hand.includes(makeCard(s, 14));
      const [lower, higher] = op.sides;
      return ace(higher) && !ace(lower) ? 'high' : ace(lower) && !ace(higher) ? 'low' : 'middle';
    }
  }
}

/**
 * Discards: the lowest spot card that reads as encouraging across the table.
 * A low spot looks discouraging even when it is your highest, so with nothing
 * this high in the suit you want, discourage in another suit instead.
 */
export const CLEAR_ENCOURAGE = 6;

/** The card that says `want` among a player's signal cards (low to high), or null when none can. */
export function conventionalCard(cards: readonly Card[], want: Height): Card | null {
  if (cards.length < 2) return null;
  if (want === 'high') return cards[cards.length - 1];
  if (want === 'low') return cards[0];
  return cards.length >= 3 ? cards[cards.length >> 1] : null;
}

/** What a signal card says within its holding (signal cards low to high); null when the player had no choice. */
export function heightIn(card: Card, cards: readonly Card[]): Height | null {
  if (cards.length < 2 || !cards.includes(card)) return null;
  return card === cards[0] ? 'low' : card === cards[cards.length - 1] ? 'high' : 'middle';
}

/** Whether a signal card says what was meant: "high" is any card but the lowest. */
export function says(op: Opportunity, shown: Height, want: Height): boolean {
  if (op.kind === 'preference') return want === 'middle' || shown === want;
  return want === 'low' ? shown === 'low' : shown !== 'low';
}

// ---------------------------------------------------------------------------
// The bots: choose among cards the simulation rates equal

/**
 * The signal a defender gives among `equal` cards (all equally good in the
 * simulation), or null when there is none to give and the lowest card will do.
 */
export function chooseSignal(equal: readonly Card[], hand: readonly Card[], m: Moment): Signal | null {
  if (!isDefender(m.seat, m.declarer) || equal.length < 2) return null;
  const signal = (op: Opportunity, card: Card, height: Height): Signal => ({ kind: op.kind, suit: op.suit, height, card, sides: op.sides });
  const equalCards = (op: Opportunity) => signalCards(hand, op, m.trump).filter(c => equal.includes(c));

  if (m.trick.length && equal.every(c => suitOf(c) === suitOf(m.trick[0]))) {
    // following suit: attitude or count
    const op = opportunity(m, suitOf(m.trick[0]));
    if (!op) return null;
    const all = signalCards(hand, op, m.trump);
    const eq = all.filter(c => equal.includes(c));
    const want = intent(op, hand, m);
    if (eq.length < 2 || (want === 'low' && eq[0] !== all[0])) return null;
    return signal(op, want === 'high' ? eq[eq.length - 1] : eq[0], want);
  }

  if (m.trick.length) {
    // discarding: encourage a suit you want led, otherwise discourage one you don't
    let encourage: Signal | null = null, discourage: Signal | null = null;
    for (let s = 0; s < 4; s++) {
      const op = opportunity(m, s);
      if (!op || op.kind !== 'discard') continue;
      const all = signalCards(hand, op, m.trump);
      const eq = all.filter(c => equal.includes(c));
      if (!eq.length) continue;
      const top = eq[eq.length - 1];
      if (intent(op, hand, m) === 'high') {
        if (top !== all[0] && rankOf(top) >= CLEAR_ENCOURAGE && (!encourage || rankOf(top) > rankOf(encourage.card))) encourage = signal(op, top, 'high');
      } else if (all.length >= 2 && eq[0] === all[0] && (!discourage || rankOf(eq[0]) < rankOf(discourage.card))) discourage = signal(op, eq[0], 'low');
    }
    return encourage ?? discourage;
  }

  // leading a suit for partner to ruff: suit preference
  for (let s = 0; s < 4; s++) {
    const op = opportunity(m, s);
    if (!op) continue;
    const eq = equalCards(op);
    const want = intent(op, hand, m);
    const card = conventionalCard(eq, want);
    if (card !== null) return signal(op, card, want);
  }
  return null;
}

/**
 * A defender's card among `equal` ones: the signal when there is one to give,
 * otherwise — when discarding — the lowest discard that tells no lie (so
 * partner, and the sampler, can trust every discard). Null: just play the lowest.
 */
export function defenderChoice(equal: readonly Card[], hand: readonly Card[], m: Moment): { card: Card; signal: Signal | null } | null {
  const sig = chooseSignal(equal, hand, m);
  if (sig) return { card: sig.card, signal: sig };
  if (!isDefender(m.seat, m.declarer) || !m.trick.length || equal.some(c => suitOf(c) === suitOf(m.trick[0]))) return null;
  for (const card of [...equal].sort((a, b) => rankOf(a) - rankOf(b))) {
    const op = signalOf(m, card);
    if (!op) return { card, signal: null };
    const shown = heightIn(card, signalCards(hand, op, m.trump));
    if (shown === null) return { card, signal: null };
    if (says(op, shown, intent(op, hand, m))) return { card, signal: { kind: op.kind, suit: op.suit, height: shown, card, sides: op.sides } };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Reading: signals made so far, how they look, what they agree with

/** A signal card played: who, when, and the cards that player still held then and played later. */
export interface SignalFact {
  seat: Seat;
  card: Card;
  op: Opportunity;
  moment: Moment;
  later: Card[]; // cards `seat` played after this one
  trick: number; // index of the trick
}

/** Every signal card played by `seats` (optionally of some kinds only). */
export function signalFacts(tricks: readonly Trick[], declarer: Seat, trump: number, seats: readonly number[], kinds?: readonly SignalKind[]): SignalFact[] {
  const out: SignalFact[] = [];
  tricks.forEach((t, ti) =>
    t.cards.forEach((card, i) => {
      const seat = ((t.leader + i) & 3) as Seat;
      if (!seats.includes(seat)) return;
      const moment: Moment = { seat, declarer, trump, leader: t.leader, trick: t.cards.slice(0, i), earlier: tricks.slice(0, ti) };
      const op = signalOf(moment, card);
      if (!op || (kinds && !kinds.includes(op.kind))) return;
      const rest = { leader: ((t.leader + i + 1) & 3) as Seat, cards: t.cards.slice(i + 1) };
      const later = cardsOf([rest, ...tricks.slice(ti + 1)], seat).map(x => x.card);
      out.push({ seat, card, op, moment, later, trick: ti });
    }),
  );
  return out;
}

/**
 * How often a bot's signal card says something untrue: it can only choose
 * among the cards the simulation rates equal, and sometimes the right one is
 * not among them. Measured over random positions where a fifth of the spot
 * cards are not free; discards are nearly always honest, since a bot
 * discarding can pick another suit.
 */
const UNTRUE: Record<SignalKind, number> = { count: 0.15, attitude: 0.15, discard: 0.05, preference: 0.1 };

/**
 * How well a layout agrees with a signal, as a likelihood: 1 when it agrees
 * (or tells us nothing), otherwise the chance the signal was untrue.
 * `remaining` is the signaller's hand now. Holdings that gave no choice, and
 * a middle card from a count, attitude or discard (usually a card the player
 * had to play), carry no information.
 */
export function agreement(f: SignalFact, remaining: readonly Card[]): number {
  const hand = [...remaining, f.card, ...f.later]; // the hand when the card was played
  const shown = heightIn(f.card, signalCards(hand, f.op, f.moment.trump));
  if (shown === null || (shown === 'middle' && f.op.kind !== 'preference')) return 1;
  return says(f.op, shown, intent(f.op, hand, f.moment)) ? 1 : UNTRUE[f.op.kind];
}

/** Whether a layout fully agrees with the signal. */
export function consistent(f: SignalFact, remaining: readonly Card[]): boolean {
  return agreement(f, remaining) === 1;
}

/** How a signal card looks to someone who cannot see the signaller's hand. */
export interface Look {
  height: 'high' | 'low' | null; // null: could be either
  sure: boolean; // the lowest or highest card possible, or confirmed by the next card in the suit
  echo: Card | null; // the signaller's next spot card in the suit, if any (not for suit preference)
}

/**
 * Read a signal card relative to the spot cards the signaller could have held:
 * `seen(c)` is true for cards the reader knows were not in that hand.
 */
export function look(f: SignalFact, seen: (c: Card) => boolean): Look {
  const s = f.op.suit, r = rankOf(f.card);
  const echo = f.op.kind === 'preference' ? null : (f.later.find(c => suitOf(c) === s && rankOf(c) <= 9) ?? null);
  if (echo !== null) return { height: echo < f.card ? 'high' : 'low', sure: true, echo };
  let lower = 0, higher = 0;
  for (let x = 2; x <= 9; x++) {
    const c = makeCard(s, x);
    if (x === r || seen(c) || (f.op.beat !== null && beats(c, f.op.beat, f.moment.trump))) continue;
    if (x < r) lower++;
    else higher++;
  }
  if (!lower) return { height: 'low', sure: true, echo };
  if (!higher) return { height: 'high', sure: true, echo };
  return { height: lower > higher ? 'high' : lower < higher ? 'low' : null, sure: false, echo };
}

/** Count: the lengths the signaller can hold that agree with the signal read as `height` (shortest first). */
export function countLengths(f: SignalFact, seen: (c: Card) => boolean, height: 'high' | 'low'): number[] {
  let pool = 0;
  for (let x = 2; x <= 14; x++) if (!seen(makeCard(f.op.suit, x))) pool++;
  const min = 1 + f.later.filter(c => suitOf(c) === f.op.suit).length;
  const out: number[] = [];
  for (let n = min; n <= pool; n++) if ((n % 2 === 0) === (height === 'high')) out.push(n);
  return out;
}
