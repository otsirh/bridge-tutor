// Slam conventions: Blackwood, king ask and Gerber.

import { bid, PASS, levelOf, strainOf } from '../core/auction';
import { SUIT_SYMBOLS, NT, CLUBS, DIAMONDS, HEARTS, SPADES } from '../core/cards';
import type { Ctx } from './context';
import { R, cond, type Rule } from './types';

const sym = (s: number) => (s === NT ? 'БК' : SUIT_SYMBOLS[s]);

function stepReplies(base: number[], what: 'aces' | 'kings', counter: (h: { aces: number; kings: number }) => number, tag: string): Rule[] {
  const labels = what === 'aces' ? ['0 или 4 аса', '1 асо', '2 аса', '3 аса'] : ['0 или 4 попа', '1 поп', '2 попа', '3 попа'];
  return base.map((call, i) =>
    R(call, `${labels[i]}`, `Отговор по стъпки: ${labels[i]}.`, [
      cond(`${labels[i]}`, h => {
        const n = counter(h);
        return i === 0 ? n === 0 || n === 4 : n === i;
      }, undefined, h => `имате ${counter(h)}`),
    ], { artificial: true, tag, data: { step: i } }),
  );
}

export function conventionReplies(x: Ctx): Rule[] | null {
  const pc = x.partnerCall();
  const rc = x.rhoCall();
  const rhoQuiet = !rc || rc.call === PASS;
  if (pc && rhoQuiet) {
    const t = pc.meaning.tag;
    if (t === 'blackwood') return stepReplies([bid(5, CLUBS), bid(5, DIAMONDS), bid(5, HEARTS), bid(5, SPADES)], 'aces', h => h.aces, 'aceReply');
    if (t === 'kingask') {
      const r = stepReplies([bid(6, CLUBS), bid(6, DIAMONDS), bid(6, HEARTS), bid(6, SPADES)], 'kings', h => h.kings, 'kingReply');
      r[0].conds = [cond('без попове', h => h.kings === 0)];
      r.push(R(bid(6, NT), 'Четири попа', 'Отговор по стъпки: и четирите попа.', [cond('четири попа', h => h.kings === 4)], { artificial: true, tag: 'kingReply', data: { step: 4 } }));
      return r;
    }
    if (t === 'gerber') return stepReplies([bid(4, DIAMONDS), bid(4, HEARTS), bid(4, SPADES), bid(4, NT)], 'aces', h => h.aces, 'gerberReply');
  }
  // asker's continuation
  const mine = x.lastAction(x.seat);
  if (pc && mine && (mine.meaning.tag === 'blackwood' || mine.meaning.tag === 'kingask') && (pc.meaning.tag === 'aceReply' || pc.meaning.tag === 'kingReply')) {
    const trump = mine.meaning.data?.suit ?? NT;
    const step = pc.meaning.data!.step;
    const reply = pc.call;
    const six = bid(6, trump), seven = bid(7, trump);
    const sixOk = six > reply, fiveOk = bid(5, trump) > reply;
    if (pc.meaning.tag === 'aceReply') {
      const partnerAces = (h: { aces: number }) => (step === 0 ? (h.aces === 0 ? 4 : 0) : step);
      const missing = (h: { aces: number }) => 4 - h.aces - partnerAces(h);
      const rules: Rule[] = [];
      rules.push(R(bid(5, NT), 'Питане за попове', 'И четирите аса са наши: 5БК пита за попове в търсене на голям слем.', [cond('не липсва асо и има сила за голям слем', (h, xx) => missing(h) === 0 && h.hcp + xx.partnerHcp().est >= 35)], { artificial: true, tag: 'kingask', data: { suit: trump } }));
      if (sixOk) rules.push(R(six, 'Малък слем', 'Липсва най-много едно асо: обявете малкия слем.', [cond('липсва най-много едно асо', h => missing(h) <= 1, undefined, h => `липсващи аса: ${missing(h)}`)]));
      if (fiveOk) rules.push(R(bid(5, trump), 'Спиране', 'Липсват две аса: спрете на ниво 5.', [cond('липсват две или повече аса', h => missing(h) >= 2)]));
      else if (strainOf(reply) === trump) rules.push(R(PASS, 'Спиране', 'Липсват две аса: отговорът на партньора е в нашия козов цвят — пас.', [cond('липсват две или повече аса', h => missing(h) >= 2)]));
      if (sixOk) rules.push(R(six, 'Малък слем', 'Не можете да спрете под слема.', []));
      rules.push(R(PASS, 'Пас', 'Спрете тук.', []));
      return rules;
    }
    const partnerKings = step;
    const rules: Rule[] = [];
    if (seven > reply) rules.push(R(seven, 'Голям слем', 'Всички аса и попове са налице: обявете големия слем.', [cond('и четирите попа и голяма сила', (h, xx) => h.kings + partnerKings >= 4 && h.hcp + xx.partnerHcp().est >= 36)]));
    if (sixOk) rules.push(R(six, 'Малък слем', 'Липсва поп: задоволете се с малкия слем.', []));
    else if (bid(6, NT) > reply) rules.push(R(bid(6, NT), 'Малък слем', 'Задоволете се с ниво 6.', []));
    else if (seven > reply) rules.push(R(seven, 'Голям слем', 'Всички попове са показани.', []));
    rules.push(R(PASS, 'Пас', 'Спрете тук.', []));
    return rules;
  }
  return null;
}

/** Is a 4NT bid by our side ace-asking? (a suit has been bid by our side and no NT opening/rebid by partner just now) */
export function blackwoodTrump(x: Ctx): number | null {
  const ourSuits = x.ourSuits();
  const pa = x.lastAction(x.partner);
  if (pa && strainOf(pa.call) === NT && levelOf(pa.call) <= 3 && !pa.meaning.artificial) return null; // quantitative
  if (!ourSuits.length) return null;
  // the most recent suit bid by our side that both have shown, else partner's last suit
  const recs = x.records.filter(r => x.ourSide(r.seat) && r.call >= 3 && !r.meaning.artificial && strainOf(r.call) < 4);
  return recs.length ? strainOf(recs[recs.length - 1].call) : ourSuits[0];
}

export { sym };
