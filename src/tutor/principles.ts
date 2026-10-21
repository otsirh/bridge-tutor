// Name the card-play principle behind a card, so advice reads like a teacher
// ("second hand low", "lead toward the king") rather than just numbers.

import { type Card, type Seat, suitOf, rankOf, partnerOf, NT, rankLabel } from '../core/cards';
import type { Contract } from '../core/auction';
import { cardFromHolding } from '../engine/leads';
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

  if (sit.openingLead) {
    const pick = cardFromHolding(mySuit, trump === NT, false);
    return P(X.openingLead.title, pick.rank === r ? pick.why : X.openingLead.notStandard(mySuit.map(rankLabel).join(''), pick.rank, pick.why));
  }

  if (pos === 0) {
    if (declSide) {
      const otherSide = (sit.partnerHand ?? []).filter(c => suitOf(c) === s).map(rankOf);
      if (trump !== NT && s === trump) return { ...X.drawTrumps };
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
    if (mySuit.length <= 2 && trump !== NT) return { ...X.lookForRuff };
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
      if (suitOf(winCard) === trump) return { ...X.overruff };
      if (partnerWinning) return { ...X.ruffPartnersWinner };
      return P(X.ruff.title, declSide ? X.ruff.declarer : X.ruff.defender);
    }
    if (!declSide) {
      return r >= 9 ? { ...X.discardEncouraging } : P(X.discard.title, X.discard.defender);
    }
    return P(X.discard.title, X.discard.declarer);
  }

  if (pos === 1) {
    const ledR = rankOf(sit.trick[0]);
    if (ledR >= 10 && r > ledR && r >= 11) return { ...X.coverHonour };
    if (r === mySuit[mySuit.length - 1]) return { ...X.secondHandLow };
    if (beats && isTop) return P(X.sureTrick.title, X.sureTrick.text(card));
    return { ...X.splitHonours };
  }

  if (pos === 2) {
    if (partnerWinning && !beats) return P(X.partnerWinning.title, X.partnerWinning.third);
    if (beats) {
      const touching = mySuit.includes(r - 1);
      if (touching) return { ...X.thirdHandHighEquals };
      return { ...X.thirdHandHigh };
    }
    return P(X.cantWin.title, X.cantWin.third);
  }

  if (partnerWinning) return P(X.partnerWinning.title, X.partnerWinning.fourth);
  if (beats) return { ...X.winCheaply };
  return P(X.cantWin.title, X.cantWin.fourth);
}
