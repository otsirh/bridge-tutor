// Name the card-play principle behind a card, so advice reads like a teacher
// ("second hand low", "lead toward the king") rather than just numbers.

import { type Card, type Seat, suitOf, rankOf, partnerOf, NT, rankLabel, makeCard } from '../core/cards';
import type { Contract } from '../core/auction';
import type { Trick } from '../core/play';
import { cardFromHolding } from '../engine/leads';
import { signalOf, signalCards, intent, conventionalCard, heightIn, says, attitudeReason, CLEAR_ENCOURAGE, type Moment } from '../engine/signalling';
import { T } from '../i18n';

export interface PlaySituation {
  seat: Seat; // the hand the card comes from
  contract: Contract;
  leader: Seat;
  trick: Card[]; // cards already played to this trick
  hand: Card[]; // that hand's cards before playing
  partnerHand: Card[] | null; // visible partner hand (declarer ↔ dummy), or dummy for a defender
  dummySeat: Seat;
  dummyHand: Card[] | null; // dummy if visible
  played: Card[]; // every card played before this trick
  openingLead: boolean;
  history?: readonly Trick[]; // the complete tricks before this one: needed to recognise count, attitude and suit-preference signals
}

export interface Principle {
  title: string;
  text: string;
}

const P = (title: string, text: string): Principle => ({ title, text });

function winnerOf(trick: Card[], trump: number): number {
  let w = 0;
  for (let i = 1; i < trick.length; i++) {
    const c = trick[i], b = trick[w];
    if ((suitOf(c) === suitOf(b) && c > b) || (suitOf(c) === trump && suitOf(b) !== trump)) w = i;
  }
  return w;
}

/** Has `seat` shown out of `suit`, in an earlier trick or this one? */
function shownOut(sit: PlaySituation, seat: Seat, suit: number): boolean {
  const tricks = [...(sit.history ?? []), { leader: sit.leader, cards: sit.trick }];
  return tricks.some(t => suitOf(t.cards[0]) === suit && t.cards.some((c, i) => i > 0 && ((t.leader + i) & 3) === seat && suitOf(c) !== suit));
}

export function explainPlay(sit: PlaySituation, card: Card): Principle {
  const X = T.tutor.principles;
  const trump = sit.contract.strain;
  const s = suitOf(card), r = rankOf(card);
  const declSide = (sit.seat & 1) === (sit.contract.declarer & 1);
  const pos = sit.trick.length;
  const gone = new Set([...sit.played, ...sit.trick]);
  const live = (su: number) => {
    const out: number[] = [];
    for (let x = 14; x >= 2; x--) if (!gone.has(su * 13 + x - 2)) out.push(x);
    return out;
  };
  const isTop = live(s)[0] === r;
  const mySuit = sit.hand.filter(c => suitOf(c) === s).map(rankOf).sort((a, b) => b - a);
  // declarer's side also sees the other hand of the partnership
  const otherSide = declSide ? (sit.partnerHand ?? []).filter(c => suitOf(c) === s).map(rankOf) : [];

  if (sit.openingLead) {
    const pick = cardFromHolding(mySuit, trump === NT, false);
    return P(X.openingLead.title, pick.rank === r ? pick.why : X.openingLead.notStandard(mySuit.map(rankLabel).join(''), pick.rank, pick.why));
  }

  if (!declSide) {
    const signal = signalPrinciple(sit, card);
    if (signal) return signal;
  }

  if (pos === 0) {
    if (declSide) {
      if (trump !== NT && s === trump) {
        // with every trump outside the two hands already played, there is nothing left to draw
        const out = sit.partnerHand ? 13 - mySuit.length - otherSide.length - [...gone].filter(c => suitOf(c) === trump).length : 1;
        return { ...(out > 0 ? X.drawTrumps : X.trumpsDrawn) };
      }
      if (isTop && otherSide.some(x => x > r) === false && mySuit.length < otherSide.length && otherSide.length >= 3) {
        return { ...X.unblock };
      }
      if (isTop) return P(X.cash.title, X.cash.declarer(card));
      const ahead = otherSide.filter(x => x > r).sort((a, b) => b - a);
      if (ahead.length && r < 11) {
        const top = live(s).filter(x => !mySuit.includes(x));
        // does the other hand hold the top cards in an unbroken run? then it's just crossing to a winner
        let run = 0;
        for (const x of top) {
          if (otherSide.includes(x)) run++;
          else break;
        }
        if (run > 0 && run >= ahead.length) return { ...X.crossToOtherHand };
        const tenace = ahead.includes(14) && ahead.includes(12) && !ahead.includes(13) ? 'aq' : ahead.includes(13) && !ahead.includes(14) ? 'king' : ahead.includes(12) && !ahead.includes(13) ? 'queen' : 'honours';
        return P(X.leadTowardHonours.title, X.leadTowardHonours.text(tenace));
      }
      return { ...X.develop };
    }
    if (trump !== NT && s === trump) return { ...X.trumpLead };
    if (isTop) return P(X.cash.title, X.cash.defender);
    const ledBefore = (who: Seat) => (sit.history ?? []).some(t => t.leader === who && suitOf(t.cards[0]) === s);
    if (ledBefore(partnerOf(sit.seat))) return { ...X.returnPartner };
    if (mySuit.length <= 2 && trump !== NT) return { ...X.lookForRuff };
    if (ledBefore(sit.seat)) return { ...X.continueSuit };
    return { ...X.switchSuits };
  }

  const led = suitOf(sit.trick[0]);
  const wIdx = winnerOf(sit.trick, trump);
  const winSeat = (sit.leader + wIdx) & 3;
  const winCard = sit.trick[wIdx];
  const partner = partnerOf(sit.seat);
  const partnerWinning = winSeat === partner;
  const beats = (suitOf(winCard) === s && r > rankOf(winCard)) || (s === trump && suitOf(winCard) !== trump);

  if (s !== led) {
    if (trump !== NT && s === trump) {
      const trumped = suitOf(winCard) === trump;
      if (trumped && !beats) return P(X.underruff.title, X.underruff.text(sit.hand.every(c => suitOf(c) === trump)));
      if (partnerWinning) return { ...X.ruffPartnersWinner };
      if (trumped) return { ...X.overruff };
      if (!declSide) return P(X.ruff.title, X.ruff.defender);
      // a ruff in the hand with no more trumps than the other is an extra trick; in the long hand it is not
      if (mySuit.length <= otherSide.length) return P(X.ruff.title, X.ruff.short);
      return P(X.ruff.title, (sit.leader & 1) !== (sit.seat & 1) ? X.ruff.forced : X.ruff.long);
    }
    return P(X.discard.title, declSide ? X.discard.declarer : X.discard.defender);
  }

  // following suit; `canBeat`: this hand holds a card that would win the trick so far
  const canBeat = suitOf(winCard) === s && mySuit[0] > rankOf(winCard);
  const coversHonour = pos === 1 && rankOf(sit.trick[0]) >= 10 && r > rankOf(sit.trick[0]) && r >= 11;
  if (partnerWinning && beats) return { ...X.overtake };

  if (pos === 3) {
    if (partnerWinning) return P(X.partnerWinning.title, X.partnerWinning.fourth);
    if (beats) return { ...X.winCheaply };
    if (canBeat) return { ...X.duck };
    return P(X.cantWin.title, X.cantWin.fourth);
  }

  if (declSide) {
    // declarer or dummy, second or third to play: the defender on its left plays after it
    if (partnerWinning) return P(X.partnerWinning.title, X.partnerWinning.declarer);
    if (coversHonour) return P(X.coverHonour.title, X.coverHonour.declarer);
    if (beats) {
      if (isTop) return P(X.sureTrick.title, X.sureTrick.text(card));
      const higherOut = live(s).some(x => x > r && !mySuit.includes(x) && !otherSide.includes(x));
      return higherOut && !shownOut(sit, ((sit.seat + 1) & 3) as Seat, s) ? P(X.finesse.title, X.finesse.text(card)) : P(X.sureTrick.title, X.sureTrick.safe(card));
    }
    if (pos === 1 && canBeat && r === mySuit[mySuit.length - 1]) return { ...X.secondHandLow };
    if (canBeat) return { ...X.duck };
    // nothing in this hand can win: the lowest card is the natural one
    return P(X.cantWin.title, X.cantWin.fourth);
  }

  if (pos === 1) {
    if (coversHonour) return P(X.coverHonour.title, X.coverHonour.text);
    if (r === mySuit[mySuit.length - 1]) return { ...X.secondHandLow };
    if (beats && isTop) return P(X.sureTrick.title, X.sureTrick.text(card));
    return { ...X.splitHonours };
  }

  if (partnerWinning) return P(X.partnerWinning.title, X.partnerWinning.third);
  if (beats) {
    // touching cards: no card still out lies between them
    const order = live(s);
    const i = order.indexOf(r);
    let j = i;
    while (j + 1 < order.length && mySuit.includes(order[j + 1])) j++;
    if (j > i) return P(X.thirdHandHighEquals.title, X.thirdHandHighEquals.wrong(card, makeCard(s, order[j])));
    if (i > 0 && mySuit.includes(order[i - 1])) return P(X.thirdHandHighEquals.title, X.thirdHandHighEquals.text);
    return { ...X.thirdHandHigh };
  }
  if (canBeat) return { ...X.duck };
  return P(X.cantWin.title, X.cantWin.third);
}

/**
 * A defender's spot card that carries a signal (src/engine/signalling.ts):
 * what the signal should say with this hand, and whether this card says it.
 * Null when the card is no signal or the hand has no choice of signal cards.
 */
function signalPrinciple(sit: PlaySituation, card: Card): Principle | null {
  const X = T.tutor.principles;
  const trump = sit.contract.strain;
  const m: Moment = { seat: sit.seat, declarer: sit.contract.declarer, trump, leader: sit.leader, trick: sit.trick, earlier: sit.history ?? [] };
  const op = signalOf(m, card);
  // count, attitude and suit preference depend on the history (first card in the suit? partner shown out?); discards don't
  if (!op || (!sit.history && op.kind !== 'discard')) return null;
  const cards = signalCards(sit.hand, op, trump);
  const want = intent(op, sit.hand, m);
  const best = conventionalCard(cards, want);
  const shown = heightIn(card, cards);
  if (best === null || shown === null) return null;
  const right = want === 'middle' ? shown === 'middle' : says(op, shown, want);
  const holding = sit.hand.filter(c => suitOf(c) === op.suit);
  switch (op.kind) {
    case 'count':
      return P(X.countSignal.title, X.countSignal.text(holding.length, op.suit, card, best, right));
    case 'attitude':
      return P(X.attitudeSignal.title, X.attitudeSignal.text(attitudeReason(sit.hand, m, op.suit), Math.max(...holding.map(rankOf)), card, best, right));
    case 'discard':
      return P(X.discardSignal.title, X.discardSignal.text(want === 'high', rankOf(cards[cards.length - 1]) >= CLEAR_ENCOURAGE, op.suit, card, best, right));
    case 'preference':
      return P(X.preferenceSignal.title, X.preferenceSignal.text(want, op.sides, card, best, right));
  }
}
