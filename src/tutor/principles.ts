// Name the card-play principle behind a card, so advice reads like a teacher
// ("second hand low", "lead toward the king") rather than just numbers.

import { type Card, type Seat, suitOf, rankOf, partnerOf, SUIT_NAMES, cardName, NT, rankLabel } from '../core/cards';
import type { Contract } from '../core/auction';
import { cardFromHolding } from '../engine/leads';

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
    return P('Първи извод', pick.rank === r ? pick.why : `От ${mySuit.map(rankLabel).join('')} стандартната карта е ${rankLabel(pick.rank)}: ${pick.why}`);
  }

  if (pos === 0) {
    if (declSide) {
      const otherSide = (sit.partnerHand ?? []).filter(c => suitOf(c) === s).map(rankOf);
      if (trump !== NT && s === trump) return P('Изтегляне на козовете', 'Изводът в коз отнема козовете на защитниците, за да не цакат печелившите ви карти. Изтеглете ги рано, освен ако козовете на мъртвака не ви трябват за цакане.');
      if (isTop && otherSide.some(x => x > r) === false && mySuit.length < otherSide.length && otherSide.length >= 3) {
        return P('Отблокиране', 'Първо вземете с високата карта от късата ръка, за да остане изводът в дългата ръка и тя да събере останалите карти от цвета.');
      }
      if (isTop) return P('Вземане на взятка', `${cardName(card)} е най-високата останала карта в ${SUIT_NAMES[s]}: взема взятката, освен ако някой не цака.`);
      const ahead = otherSide.filter(x => x > r).sort((a, b) => b - a);
      if (ahead.length && r < 11) {
        const top = live(s).filter(x => !mySuit.includes(x));
        // does the other hand hold the top cards in an unbroken run? then it's just crossing to a winner
        let run = 0;
        for (const x of top) {
          if (otherSide.includes(x)) run++;
          else break;
        }
        if (run > 0 && run >= ahead.length) return P('Преминаване в другата ръка', 'Малка карта към печеливша карта в другата ръка я използва като вход, за да изведете оттам следващия път.');
        const tenace = ahead.includes(14) && ahead.includes(12) && !ahead.includes(13) ? 'A-Q' : ahead.includes(13) && !ahead.includes(14) ? 'попа' : ahead.includes(12) && !ahead.includes(13) ? 'дамата' : 'фигурите';
        return P('Извод към фигури', `Изведете малка карта към ${tenace}: левият защитник играе преди вас и едва тогава избирате карта от другата ръка — това е основата на импаса.`);
      }
      return P('Развиване на цвят', 'Като загубите сега взятка в този цвят, развивате останалите карти като печеливши, докато още контролирате другите цветове.');
    }
    if (trump !== NT && s === trump) return P('Козов извод', 'Изводът в коз намалява цаканията на разиграващия в мъртвака — силен е, когато мъртвакът е къс в страничен цвят.');
    if (isTop) return P('Вземане на взятка', 'Вземете сигурната си взятка, преди разиграващият да изхвърли губещите си карти на дългия цвят на мъртвака.');
    if (mySuit.length <= 2 && trump !== NT) return P('Търсене на цакане', 'Извод от къс цвят: надявате се партньорът да вземе и да ви даде цакане.');
    return P('Смяна на цвета', 'Извеждайте през силата на разиграващия или към слабостта на мъртвака: защитникът пред силната ръка трябва да изведе този цвят.');
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
      if (suitOf(winCard) === trump) return P('Надцакване', 'Цакане с коз, по-висок от вече изиграния, взема взятката.');
      if (partnerWinning) return P('Цакане на печеливша карта на партньора', 'Обикновено е загуба: партньорът вече печелеше тази взятка.');
      return P('Цакане', declSide ? 'Цакането в ръката с по-малко козове печели взятка; цакането в дългата козова ръка само харчи коз, който и без това ще вземе.' : 'Нямате от изведения цвят, така че цакането взема взятката.');
    }
    if (!declSide) {
      return r >= 9
        ? P('Изхвърляне (насърчаващо)', 'Високото изхвърляне казва на партньора, че харесвате този цвят (стандартен сигнал за отношение).')
        : P('Изхвърляне', 'Изхвърлете от ненужен цвят и пазете дължината там, където трябва да спрете дългите карти на разиграващия или на мъртвака.');
    }
    return P('Изхвърляне', 'Изхвърлете губеща карта от цвят, който не може да вземе взятки, и запазете картите, които още може да потрябват.');
  }

  if (pos === 1) {
    const ledR = rankOf(sit.trick[0]);
    if (ledR >= 10 && r > ledR && r >= 11) return P('Покрийте фигура с фигура', 'Покриването принуждава разиграващия да даде две високи карти за една взятка, така по-ниска карта у вас или у партньора може да стане печеливша.');
    if (r === mySuit[mySuit.length - 1]) return P('Втора ръка ниско', 'Партньорът играе след вас и след партньора на извеждащия, затова ниската карта сега пази високата ви карта, за да хване по-късно нещо по-голямо.');
    if (beats && isTop) return P('Сигурна взятка', `${cardName(card)} е най-високата останала карта в цвета.`);
    return P('Разделяне на фигурите', 'Като играете една от съседните си фигури, не позволявате на разиграващия да вземе евтино с по-ниска карта.');
  }

  if (pos === 2) {
    if (partnerWinning && !beats) return P('Партньорът печели', 'Картата на партньора вече печели, затова играйте ниско (или дайте сигнал).');
    if (beats) {
      const touching = mySuit.includes(r - 1);
      if (touching) return P('Трета ръка високо — по-ниската от равните', 'Играйте по-ниската от съседните карти: така партньорът може да разбере къде е по-високата.');
      return P('Трета ръка високо', 'Изводът на партньора не печели, затова играйте високо — за да вземете взятката или да избиете висока карта.');
    }
    return P('Не можете да вземете взятката', 'Играйте най-ниската си карта (или дайте сигнал за отношение, ако партньорът е извел цвета).');
  }

  if (partnerWinning) return P('Партньорът печели', 'Не надигравайте картата му: играйте най-ниската си карта.');
  if (beats) return P('Вземете евтино', 'Играете последни: вземете с най-ниската карта, която стига.');
  return P('Не можете да вземете взятката', 'Играйте най-ниската си карта в цвета.');
}
