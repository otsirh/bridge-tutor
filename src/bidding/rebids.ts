// Opener's rebid and the follow-ups of our side's conventions.

import { bid, PASS, isBid, levelOf, strainOf } from '../core/auction';
import { SUIT_SYMBOLS, SUIT_NAMES, CLUBS, DIAMONDS, HEARTS, SPADES, NT } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, dummyPoints, declarerPoints } from '../core/eval';
import type { Ctx, CallRecord } from './context';
import { R, hcpC, lenC, balancedC, cond, tpC, type Rule, type Cond } from './types';

const sym = (s: number) => SUIT_SYMBOLS[s];

/** Opener's strength band by total points: min 12–15, medium 16–18, max 19–21. */
const band = (min: number, max: number, label: string): Cond => ({
  text: `${label} (${min}–${max} общо точки)`,
  test: h => h.tp >= min && h.tp <= max,
  apply: s => {
    s.hcp = [Math.max(s.hcp[0], min - 2), Math.min(s.hcp[1], max)];
  },
  value: h => `имате ${h.tp} общо точки`,
});
const MIN = () => band(12, 15, 'минимум');
const MED = () => band(16, 18, 'средна ръка');

/** Support points when raising partner's suit. */
const supC = (trump: number, min: number, max = 37): Cond => ({
  text: max >= 37 ? `${min}+ точки с подкрепа` : `${min}–${max} точки с подкрепа`,
  test: h => {
    const p = Math.max(dummyPoints(h, trump), h.tp);
    return p >= min && p <= max;
  },
  apply: s => {
    s.hcp = [Math.max(s.hcp[0], min - 3), Math.min(s.hcp[1], max)];
  },
  value: h => `имате ${Math.max(dummyPoints(h, trump), h.tp)} точки с късотите`,
});

const declC = (trump: number, min: number, max = 37): Cond => ({
  text: max >= 37 ? `${min}+ точки (с дължините и късотите)` : `${min}–${max} точки (с дължините и късотите)`,
  test: h => declarerPoints(h, trump) >= min && declarerPoints(h, trump) <= max,
  apply: s => {
    s.hcp = [Math.max(s.hcp[0], min - 3), Math.min(s.hcp[1], max)];
  },
  value: h => `имате ${declarerPoints(h, trump)} точки`,
});

const stoppersIn = (suits: number[]): Cond => cond(
  suits.length ? `стопери в ${suits.map(sym).join(' ')}` : 'ръка, подходяща за игра без коз',
  h => suits.every(s => hasStopper(h, s)),
  undefined,
  h => {
    const miss = suits.filter(s => !hasStopper(h, s));
    return miss.length ? `нямате стопер в ${miss.map(sym).join(' ')}` : 'имате ги';
  },
);

function unbidSuits(x: Ctx): number[] {
  const bidSuits = new Set([...x.ourSuits(), ...x.theirSuits()]);
  return [0, 1, 2, 3].filter(s => !bidSuits.has(s));
}

/** Suits a notrump bidder must stop: the unbid ones and the opponents'. */
function ntDanger(x: Ctx): number[] {
  return [...new Set([...unbidSuits(x), ...x.theirSuits()])];
}

// ---------------------------------------------------------------------------
// Opener's rebid after a one-of-a-suit opening

export function openerRebidOneSuit(x: Ctx, open: number, resp: CallRecord): Rule[] {
  const rules: Rule[] = [];
  const rc = resp.call;
  const tag = resp.meaning.tag;
  const myLenC = (n: number, max = 13) => lenC(open, n, max);

  if (rc === PASS) return [];

  if (tag === 'cueRaise') {
    // partner's cue bid / Jordan 2NT: a limit raise or better in our suit
    const game = open >= HEARTS ? 4 : 5;
    rules.push(R(bid(game, open), 'Приемане на подкрепата', `Партньорът показа лимитна подкрепа или по-силна (10+ с подкрепа): с повече от голия минимум (14+ точки) обявете гейм.`, [declC(open, 14)]));
    if (open < HEARTS) rules.push(R(bid(3, NT), '3БК', 'Фит в минор и стопери в техния цвят: девет взятки без коз.', [hcpC(13), stoppersIn(x.theirSuits())]));
    const c = x.cheapest(open);
    if (c !== null && c < bid(game, open)) rules.push(R(c, 'Минимум', 'Минимално откриване: спрете на най-ниското ниво в нашия цвят. С допълнителна сила партньорът продължава.', [], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 13)]; } }));
    return rules;
  }

  if (tag === 'jacoby2nt') {
    for (const s of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
      if (s === open) continue;
      rules.push(R(bid(3, s), 'Късота', `Отговор на Якоби: синглтон или шикана в ${SUIT_NAMES[s]}. Партньорът може да прецени колко добре си пасват ръцете.`, [lenC(s, 0, 1),
        cond(`${sym(s)} е най-късият ви цвят`, h => h.len[s] === Math.min(...[0, 1, 2, 3].filter(o => o !== open).map(o => h.len[o])))], { artificial: true, forcing: 'game' }));
    }
    rules.push(R(bid(4, open), 'Минимум', 'Отговор на Якоби: минимално откриване (12–14) без късота. „Бързо пристигане“ — без интерес към слем.', [hcpC(0, 14)]));
    rules.push(R(bid(3, NT), 'Средна ръка', 'Отговор на Якоби: 15–17 точки, без късота.', [hcpC(15, 17)], { artificial: true, forcing: 'game' }));
    rules.push(R(bid(3, open), 'Максимум', 'Отговор на Якоби: 18+ точки, без късота — интерес към слем.', [hcpC(18)], { forcing: 'game' }));
    return rules;
  }

  if (isBid(rc) && strainOf(rc) === open) {
    const lvl = levelOf(rc);
    if (resp.meaning.shown.hcp[1] < 10 && lvl >= 3) return []; // a preemptive raise: use judgment
    if (lvl === 2) {
      rules.push(R(bid(4, open), 'Гейм', 'Партньорът показа 6–10 с подкрепа; с максимум (19+) обявете гейм директно.', [declC(open, 19)]));
      rules.push(R(bid(3, open), 'Инвитация', 'Със средна ръка (16–18) дайте инвитация за гейм: партньорът обявява гейм с 8–10 и пасува с 6–7.', [declC(open, 16, 18)], { tag: 'invite' }));
      if (open < HEARTS) rules.push(R(bid(2, NT), 'Инвитация', '18–19 точки, балансирана ръка: инвитация за 3БК.', [hcpC(18, 19), balancedC()], { tag: 'invite' }));
      rules.push(R(PASS, 'Пас', 'Минимално откриване (12–15): геймът е малко вероятен срещу проста подкрепа.', [], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 16)]; } }));
      return rules;
    }
    if (lvl === 3) {
      if (open >= HEARTS) {
        rules.push(R(bid(4, open), 'Приемане на инвитацията', 'Партньорът даде инвитация с 10–12: обявете гейм с всичко над голия минимум (14+ точки).', [declC(open, 14)]));
      } else {
        rules.push(R(bid(3, NT), '3БК', 'Партньорът показа 10–12 с фит в минор: опитайте 3БК със стопери и 13+.', [hcpC(13), stoppersIn(ntDanger(x))]));
        rules.push(R(bid(5, open), 'Гейм в минор', '16+ с разпределение: геймът на единадесет взятки.', [declC(open, 16)]));
      }
      rules.push(R(PASS, 'Отказ', 'Минимум: откажете инвитацията с пас.', [], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 14)]; } }));
      return rules;
    }
    return [R(PASS, 'Пас', 'Партньорът определи договора.', [])];
  }

  if (rc === bid(1, NT)) {
    rules.push(R(bid(3, NT), '3БК', '19–21 точки, балансирана ръка: достатъчно за гейм срещу 6–10.', [hcpC(19, 21), balancedC()]));
    rules.push(R(bid(2, NT), 'Инвитация', '18 точки, балансирана ръка: инвитация за 3БК.', [hcpC(18, 18), balancedC()], { tag: 'invite' }));
    if (open >= HEARTS) rules.push(R(bid(4, open), 'Гейм', '19+ с добър шесткартов цвят.', [tpC(19), myLenC(6)]));
    rules.push(R(bid(3, open), 'Повторна обява със скок', '16–18 с шест или повече карти: инвитационно.', [MED(), myLenC(6)], { tag: 'invite' }));
    pushNewSuits(x, rules, open, true);
    rules.push(R(bid(2, open), 'Повторете цвета си', 'Минимум с шесткартов цвят.', [MIN(), myLenC(6)]));
    rules.push(R(PASS, 'Пас', 'Балансиран минимум: 1БК е добър договор.', [cond('балансирана ръка или няма друга описателна обява', h => h.balanced || h.hcp <= 15)], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 17)]; } }));
    rules.push(R(bid(2, open), 'Повторете цвета си', 'Небалансиран минимум и нищо друго за показване: повторете петкартовия цвят.', [MIN()]));
    return rules;
  }

  const respSuit = isBid(rc) ? strainOf(rc) : -1;
  const respLevel = isBid(rc) ? levelOf(rc) : 0;

  if (respLevel === 1 && respSuit < 4) {
    // 1x - 1y
    const y = respSuit;
    if (y >= HEARTS || (y === DIAMONDS && open === CLUBS)) {
      const supLen = 4;
      rules.push(R(bid(4, y), 'Гейм в цвета на партньора', `Четири ${SUIT_NAMES[y]} за подкрепа и максимум (19+ точки).`, [lenC(y, supLen), supC(y, 19)]));
      rules.push(R(bid(3, y), 'Подкрепа със скок', `Подкрепа с четири карти и средна ръка (16–18): инвитация за гейм.`, [lenC(y, supLen), supC(y, 16, 18)], { tag: 'invite' }));
      if (y >= HEARTS) rules.push(R(bid(2, y), 'Проста подкрепа', `Подкрепа с четири карти и минимум (12–15). Най-важното е да покажете фита.`, [lenC(y, supLen), supC(y, 12, 15)]));
    }
    // a four-card major at the one level
    for (const M of [HEARTS, SPADES]) {
      if (M <= y) continue;
      rules.push(R(bid(1, M), `Повторна обява 1${sym(M)}`, `Четири ${SUIT_NAMES[M]} на ниво 1: лицитацията остава ниска, докато търсите фит в мажор. 12–18 точки.`, [lenC(M, 4), tpC(12, 18),
        cond(M === SPADES && y < HEARTS ? 'без четири купи (купите се показват първи, отдолу нагоре)' : 'мажор за показване', h => !(M === SPADES && y < HEARTS && h.len[HEARTS] >= 4 && h.len[HEARTS] >= h.len[SPADES]))], { forcing: 'none' }));
    }
    rules.push(R(bid(1, NT), 'Повторна обява 1БК', '12–14 точки, балансирана ръка (без четирикартов мажор за показване на ниво 1).', [hcpC(12, 14), balancedC()]));
    rules.push(R(bid(2, NT), 'Повторна обява 2БК', '18–19 точки, балансирана ръка: инвитация за гейм (твърде силна за откриване 1БК, което показва 15–17).', [hcpC(18, 19), balancedC()], { tag: 'invite' }));
    pushNewSuits(x, rules, open, false);
    if (open >= HEARTS) rules.push(R(bid(4, open), 'Гейм', '19+ с добър самостоятелен шесткартов цвят.', [tpC(19), myLenC(6)]));
    rules.push(R(bid(3, open), 'Повторна обява със скок', '16–18 с шест или повече карти: инвитационно.', [MED(), myLenC(6)], { tag: 'invite' }));
    rules.push(R(bid(2, open), 'Повторете цвета си', 'Минимум с шест или повече карти.', [MIN(), myLenC(6)]));
    if (y === DIAMONDS && open === CLUBS) rules.push(R(bid(2, DIAMONDS), 'Подкрепа', 'Подкрепа с четири кари, минимум.', [lenC(DIAMONDS, 4), MIN()]));
    rules.push(R(bid(1, NT), 'Повторна обява 1БК', 'Няма по-добра обява при минимум.', [hcpC(12, 15), cond('без синглтон или шикана', h => h.shape[3] >= 2)]));
    rules.push(R(bid(2, open), 'Повторете цвета си', 'Минимум и нищо друго за показване.', [hcpC(0, 16)]));
    return rules;
  }

  if (respLevel === 2 && respSuit < 4 && !x.isJump(rc) && respSuit !== open) {
    // two-over-one: forcing, 11+
    const y = respSuit;
    const supLen = y >= HEARTS ? 3 : 4;
    rules.push(R(bid(3, y), 'Подкрепа', `Подкрепа за ${SUIT_NAMES[y]} на партньора (${supLen}+ карти).`, [lenC(y, supLen)], { forcing: 'one' }));
    rules.push(R(bid(3, NT), '3БК', '15–17 точки, балансирана ръка, със стопери.', [hcpC(15, 17), balancedC(), stoppersIn(ntDanger(x))]));
    rules.push(R(bid(2, NT), '2БК', '12–14 точки, балансирана ръка, със стопери в необявените цветове.', [hcpC(12, 14), balancedC(), stoppersIn(ntDanger(x))]));
    rules.push(R(bid(3, open), 'Повторна обява със скок', 'Добър шесткартов цвят и 16+.', [tpC(16), myLenC(6)], { forcing: 'game' }));
    rules.push(R(bid(2, open), 'Повторете цвета си', 'Шест или повече карти (или нищо по-добро).', [myLenC(6)]));
    for (const s of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
      if (s === open || s === y) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 3) continue;
      rules.push(R(c, 'Нов цвят', `Четири или повече ${SUIT_NAMES[s]}: показва втори цвят.`, [lenC(s, 4)], { forcing: 'one' }));
    }
    rules.push(R(bid(2, open), 'Повторете цвета си', 'Нищо друго не описва ръката.', [], {}));
    rules.push(R(bid(2, NT), '2БК', 'Няма по-добра обява.', []));
    return rules;
  }

  if (respSuit === NT && respLevel === 2) {
    rules.push(R(bid(3, open), 'Дълъг цвят', '6+ карти в цвета ви, небалансирана ръка.', [myLenC(6), cond('небалансирана ръка', h => !h.semiBalanced)]));
    rules.push(R(bid(3, NT), '3БК', 'Естественият гейм: партньорът има 13–15 и балансирана ръка.', []));
    return rules;
  }
  if (respSuit === NT && respLevel === 3) return [R(PASS, 'Пас', 'Партньорът избра 3БК.', [hcpC(0, 17)])];
  return [];
}

/** New-suit rebids by opener: non-reverse, reverse (17+) and jump shift (19+). */
function pushNewSuits(x: Ctx, rules: Rule[], open: number, after1NT: boolean) {
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    if (s === open || x.ourSuits().includes(s)) continue;
    const c = x.cheapest(s);
    if (c === null) continue;
    const lvl = levelOf(c);
    const jumpC = bid(lvl + 1, s);
    if (lvl <= 2) {
      rules.push(R(jumpC, 'Скок в нов цвят', `19+ точки и четири или повече ${SUIT_NAMES[s]}: форсиращо до гейм.`, [tpC(19), lenC(s, 4)], { forcing: 'game' }));
    }
    if (lvl === 2 && s > open) {
      rules.push(R(c, 'Реверс', `Нов цвят на ниво 2, по-висок от първия ви: 17+ точки, 5+ карти в първия цвят и 4+ ${SUIT_NAMES[s]}. Форсиращо.`, [tpC(17), lenC(open, 5), lenC(s, 4)], { forcing: 'one' }));
    } else if (lvl <= 2) {
      rules.push(R(c, 'Нов цвят', `Четири или повече ${SUIT_NAMES[s]}, 12–18 точки${after1NT ? '' : ' (не е форсиращо)'}.`, [tpC(12, 18), lenC(s, 4), lenC(open, 4)], {}));
    }
  }
}

// ---------------------------------------------------------------------------
// Notrump openings: opener's replies to Stayman/transfers/invites

export function openerAfterNT(x: Ctx, ntLevel: number, resp: CallRecord): Rule[] {
  const rules: Rule[] = [];
  const t = resp.meaning.tag;
  const L = ntLevel + 1; // reply level
  if (t === 'stayman') {
    rules.push(R(bid(L, HEARTS), 'Отговор на Стейман', 'Четири купи (може да има и четири пики).', [lenC(HEARTS, 4)], { tag: 'staymanReply' }));
    rules.push(R(bid(L, SPADES), 'Отговор на Стейман', 'Четири пики, без четири купи.', [lenC(SPADES, 4), lenC(HEARTS, 0, 3)], { tag: 'staymanReply' }));
    rules.push(R(bid(L, DIAMONDS), 'Отговор на Стейман', 'Изкуствено: без четирикартов мажор.', [lenC(HEARTS, 0, 3), lenC(SPADES, 0, 3)], { artificial: true, tag: 'staymanReply' }));
    return rules;
  }
  if (t === 'transfer') {
    const M = resp.meaning.data!.suit;
    if (ntLevel === 1) rules.push(R(bid(3, M), 'Суперприемане', `Четири ${SUIT_NAMES[M]} за подкрепа и максимум (17): покажете го със скок.`, [lenC(M, 4), hcpC(17)]));
    rules.push(R(bid(L, M), 'Изпълнение на трансфера', `Партньорът има пет или повече ${SUIT_NAMES[M]}: трябва да обявите ${L}${sym(M)}.`, [], { tag: 'transferDone' }));
    return rules;
  }
  if (t === 'minorTransfer') return [R(bid(3, CLUBS), 'Изпълнение на трансфера', 'Партньорът има слаба ръка с дълъг минор: обявете 3♣, както е поискано.', [], { artificial: true, tag: 'transferDone' })];
  if (t === 'nt-invite') {
    rules.push(R(bid(3, NT), 'Приемане', 'Максимум (16–17): приемете инвитацията.', [hcpC(16)]));
    rules.push(R(PASS, 'Отказ', 'Минимум (15): пас.', []));
    return rules;
  }
  if (t === 'quant') {
    const max = ntLevel === 1 ? 17 : 21;
    rules.push(R(bid(6, NT), 'Приемане', 'Максимум: приемете инвитацията за слем.', [cond(`максимум (${max} т. или ${max - 1} с петкартов цвят)`, h => h.hcp >= max || (h.hcp === max - 1 && h.shape[0] >= 5))]));
    rules.push(R(PASS, 'Отказ', 'Не е максимум: пасувайте на 4БК.', []));
    return rules;
  }
  if (isBid(resp.call) && (levelOf(resp.call) >= 3 && strainOf(resp.call) === NT || levelOf(resp.call) >= 6)) return [R(PASS, 'Пас', 'Партньорът определи договора.', [])];
  return [];
}

/** Responder's next bid after Stayman or a transfer. */
export function responderAfterNTConvention(x: Ctx, ntLevel: number, myConv: CallRecord, reply: CallRecord): Rule[] {
  const rules: Rule[] = [];
  const game = ntLevel === 1 ? 10 : 4;
  const inv = ntLevel === 1 ? 8 : -1;
  if (myConv.meaning.tag === 'stayman') {
    const rs = strainOf(reply.call);
    const fit = rs === HEARTS || rs === SPADES ? rs : -1;
    if (fit >= 0) {
      rules.push(R(bid(4, fit), 'Гейм във фита', `Намерен е фит 4-4 и имате сила за гейм (${game}–15).`, [lenC(fit, 4), hcpC(game, 15)]));
      if (inv > 0) rules.push(R(bid(3, fit), 'Инвитация', 'Фит 4-4 с 8–9: инвитация за гейм.', [lenC(fit, 4), hcpC(8, 9)], { tag: 'invite' }));
    }
    rules.push(R(bid(3, NT), '3БК', `Няма фит (или откриващият може да има другия мажор): ${game}–15 точки.`, [hcpC(game, 15), cond('без фит в показания мажор', h => fit < 0 || h.len[fit] < 4)]));
    if (inv > 0) rules.push(R(bid(2, NT), 'Инвитация', '8–9 точки, без фит: инвитация за 3БК.', [hcpC(8, 9), cond('без фит в показания мажор', h => fit < 0 || h.len[fit] < 4)], { tag: 'nt-invite' }));
    return rules;
  }
  if (myConv.meaning.tag === 'transfer') {
    const M = myConv.meaning.data!.suit;
    if (strainOf(reply.call) !== M) return [];
    if (levelOf(reply.call) === 3 && ntLevel === 1) {
      rules.push(R(bid(4, M), 'Гейм', 'Откриващият направи суперприемане: обявете гейм с всичко освен голия минимум.', [hcpC(4)]));
      rules.push(R(PASS, 'Пас', 'Много слаба ръка: спрете тук.', []));
      return rules;
    }
    if (ntLevel === 1) {
      rules.push(R(bid(4, M), 'Гейм', `Шест или повече ${SUIT_NAMES[M]} и 10–15 точки: фитът от 8 карти е гарантиран.`, [lenC(M, 6), hcpC(10, 15)]));
      rules.push(R(bid(3, NT), 'Избор на гейм', `Точно пет ${SUIT_NAMES[M]} и 10–15 точки: откриващият избира между 3БК и 4${sym(M)} (с подкрепа от три карти).`, [lenC(M, 5, 5), hcpC(10, 15)], { tag: 'choiceOfGames', data: { suit: M } }));
      rules.push(R(bid(3, M), 'Инвитация', `Шест ${SUIT_NAMES[M]} и 8–9 точки: инвитация за гейм.`, [lenC(M, 6), hcpC(8, 9)], { tag: 'invite' }));
      rules.push(R(bid(2, NT), 'Инвитация', `Точно пет ${SUIT_NAMES[M]} и 8–9 точки.`, [lenC(M, 5, 5), hcpC(8, 9)], { tag: 'transferInvite', data: { suit: M } }));
      rules.push(R(PASS, 'Пас', `0–7 точки: играйте 2${sym(M)} — с дългия ви цвят за коз договорът е по-сигурен от 1БК.`, [hcpC(0, 7)]));
    } else {
      rules.push(R(bid(4, M), 'Гейм', `Шест или повече ${SUIT_NAMES[M]}: гейм в мажора.`, [lenC(M, 6), hcpC(4)]));
      rules.push(R(bid(3, NT), 'Избор на гейм', `Точно пет ${SUIT_NAMES[M]}: откриващият избира.`, [lenC(M, 5, 5), hcpC(4)], { tag: 'choiceOfGames', data: { suit: M } }));
      rules.push(R(PASS, 'Пас', 'Твърде слаба ръка за гейм.', [hcpC(0, 3)]));
    }
    return rules;
  }
  if (myConv.meaning.tag === 'minorTransfer') {
    rules.push(R(bid(3, DIAMONDS), 'Спиране', 'Дългият ви цвят е кари: играйте 3♦.', [cond('карите са повече от спатиите', h => h.len[DIAMONDS] > h.len[CLUBS])]));
    rules.push(R(PASS, 'Пас', 'Дългият ви цвят е спатии: играйте 3♣.', []));
    return rules;
  }
  return [];
}

/** Opener's third bid after responder's NT-convention continuation. */
export function openerAfterNTContinuation(x: Ctx, ntLevel: number, conv: CallRecord, cont: CallRecord): Rule[] {
  const rules: Rule[] = [];
  const max = ntLevel === 1 ? 16 : 21;
  const c = cont.call;
  if (conv.meaning.tag === 'stayman') {
    const myReply = x.lastAction(x.seat)!;
    const rs = strainOf(myReply.call);
    if (c === bid(ntLevel + 1, NT) || c === bid(3, NT)) {
      // responder has a four-card major we didn't show
      if (rs === HEARTS) {
        if (c === bid(3, NT)) rules.push(R(bid(4, SPADES), 'Фит в пики', 'Партньорът обяви Стейман без фит в купи, значи има четири пики: с четири пики и при вас играйте 4♠.', [lenC(SPADES, 4)]));
        else {
          rules.push(R(bid(4, SPADES), 'Фит в пики', 'Имате и четири пики, и максимум.', [lenC(SPADES, 4), hcpC(max)]));
          rules.push(R(bid(3, SPADES), 'Фит в пики', 'Имате и четири пики, но минимум.', [lenC(SPADES, 4)]));
        }
      }
      if (c !== bid(3, NT)) rules.push(R(bid(3, NT), 'Приемане', 'Максимум: приемете инвитацията.', [hcpC(max)]));
      rules.push(R(PASS, 'Пас', 'Няма какво повече да кажете.', []));
      return rules;
    }
    if (strainOf(c) === rs && levelOf(c) === 3) {
      rules.push(R(bid(4, rs), 'Приемане', 'Максимум: приемете инвитацията.', [hcpC(max)]));
      rules.push(R(PASS, 'Отказ', 'Минимум: пас.', []));
      return rules;
    }
    return [];
  }
  if (conv.meaning.tag === 'transfer') {
    const M = conv.meaning.data!.suit;
    if (cont.meaning.tag === 'transferInvite') {
      rules.push(R(bid(4, M), 'Приемане в мажора', 'Максимум с подкрепа от три карти.', [hcpC(max), lenC(M, 3)]));
      rules.push(R(bid(3, NT), 'Приемане в БК', 'Максимум само с две карти в цвета на партньора.', [hcpC(max)]));
      rules.push(R(bid(3, M), 'Отказ в мажора', 'Минимум с подкрепа от три карти: играйте фита от 8 карти.', [lenC(M, 3)]));
      rules.push(R(PASS, 'Отказ', 'Минимум с дублетон.', []));
      return rules;
    }
    if (cont.meaning.tag === 'choiceOfGames') {
      rules.push(R(bid(4, M), 'Избор на мажора', 'Три или повече карти в петкартовия цвят на партньора: фитът от 8 карти обикновено е по-добър от 3БК.', [lenC(M, 3)]));
      rules.push(R(PASS, 'Избор на БК', 'Само две карти в цвета на партньора: 3БК.', []));
      return rules;
    }
    if (c === bid(3, M)) {
      rules.push(R(bid(4, M), 'Приемане', 'Максимум: приемете инвитацията.', [hcpC(max)]));
      rules.push(R(PASS, 'Отказ', 'Минимум: пас.', []));
      return rules;
    }
  }
  return [];
}

// ---------------------------------------------------------------------------
// Strong 2♣ and weak twos

export function openerAfter2C(x: Ctx, resp: CallRecord): Rule[] {
  const rules: Rule[] = [];
  if (resp.meaning.tag !== 'waiting') return [];
  const rc = x.rhoCall();
  if (rc && rc.call !== PASS) {
    // they interfered over our strong 2♣: bid naturally
    const theirs = x.theirSuits();
    const nt = x.cheapest(NT);
    if (nt !== null && levelOf(nt) <= 3) rules.push(R(nt, 'Без коз', `Балансирана ръка с 22+ и стопер в техния цвят: естествено.`, [hcpC(22), balancedC(), stoppersIn(theirs)], { forcing: 'none' }));
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 4) continue;
      rules.push(R(c, 'Естествена повторна обява', `Дългият ви цвят (5+ ${SUIT_NAMES[s]}): форсиращо.`, [lenC(s, 5), cond(`${sym(s)} е най-дългият ви цвят`, h => h.len[s] === h.shape[0])], { forcing: 'game' }));
    }
    return rules;
  }
  rules.push(R(bid(3, NT), 'Повторна обява 3БК', '25–27 точки, балансирана ръка.', [hcpC(25, 27), balancedC()]));
  rules.push(R(bid(2, NT), 'Повторна обява 2БК', '22–24 точки, балансирана ръка. Единствената повторна обява, на която партньорът може да пасува (почти без нищо).', [hcpC(22, 24), balancedC()], { tag: 'nt2c' }));
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    const c = s >= HEARTS ? bid(2, s) : bid(3, s);
    rules.push(R(c, 'Естествена повторна обява', `Дългият ви цвят — ${SUIT_NAMES[s]} (5+ карти). Форсиращо до гейм.`, [lenC(s, 5),
      cond(`${sym(s)} е най-дългият ви цвят`, h => h.len[s] === h.shape[0] && [0, 1, 2, 3].every(o => h.len[o] < h.len[s] || o <= s))], { forcing: 'game' }));
  }
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    const c = s >= HEARTS ? bid(2, s) : bid(3, s);
    rules.push(R(c, 'Естествена повторна обява', `Най-дългият ви цвят — ${SUIT_NAMES[s]}. Форсиращо до гейм.`, [cond(`${sym(s)} е най-дългият ви цвят`, h => h.len[s] === h.shape[0])], { forcing: 'game' }));
  }
  return rules;
}

export function openerAfterFeatureAsk(x: Ctx, s: number): Rule[] {
  const rules: Rule[] = [];
  const solid = (h: HandInfo) => [14, 13, 12].every(r => h.ranks[s].includes(r));
  rules.push(R(bid(3, NT), 'Затворен цвят', 'Максимум със затворен цвят (AKQ): 3БК би трябвало да се изпълни.', [hcpC(8), cond('AKQ в цвета ви', solid)]));
  for (const o of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
    if (o === s) continue;
    const c = x.cheapest(o);
    if (c === null || levelOf(c) > 3) continue;
    rules.push(R(c, 'Фигура встрани', `Максимум (8–10) с асо или поп в ${SUIT_NAMES[o]}.`, [hcpC(8, 10), cond(`A или K в ${SUIT_NAMES[o]}`, h => h.ranks[o].some(r => r >= 13))], { artificial: true }));
  }
  rules.push(R(bid(3, s), 'Минимум', 'Минимално слабо две (5–7 точки): повторете цвета.', [], { shows: sh => { sh.hcp = [sh.hcp[0], Math.min(sh.hcp[1], 8)]; } }));
  return rules;
}

/** Responder's continuation after partner's invitation: accept when the combined total can reach game. */
export function responderAfterInvite(x: Ctx, trump: number): Rule[] {
  const rules: Rule[] = [];
  const need = 26 - Math.min(x.partnerHcp().max, 21);
  if (trump === NT) {
    const ph = x.partnerHcp();
    if (x.isLegal(bid(6, NT))) rules.push(R(bid(6, NT), 'Малък слем', `Инвитацията на партньора показва ${ph.min}–${ph.max}: с ${33 - ph.min}+ точки двойката има 33, достатъчно за дванадесет взятки.`, [hcpC(33 - ph.min)]));
    if (x.isLegal(bid(4, NT))) rules.push(R(bid(4, NT), 'Количествено 4БК', `Слемът е възможен, ако партньорът е с максимум: 4БК е инвитация за 6БК (не е Блекууд).`, [hcpC(33 - ph.max, 32 - ph.min)], { tag: 'quant' }));
    rules.push(R(bid(3, NT), 'Приемане', `Приемете инвитацията: с ${need}+ точки двойката има около 25-те точки, нужни за 3БК.`, [hcpC(need)]));
    rules.push(R(PASS, 'Отказ', 'Долната граница на показания диапазон: пас.', []));
    return rules;
  }
  const game = trump >= HEARTS ? 4 : 5;
  const needGame = trump >= HEARTS ? need : need + 3; // eleven tricks need more
  if (trump < HEARTS) {
    rules.push(R(bid(3, NT), 'Приемане в 3БК', 'Партньорът даде инвитация в минор: със стопери в другите цветове девет взятки без коз са по-лесни от единадесет в минора.', [
      hcpC(Math.max(6, need - 1)), stoppersIn(ntDanger(x).filter(s => s !== trump)),
    ]));
  }
  rules.push(R(bid(game, trump), 'Приемане', `Приемете инвитацията: с ${needGame}+ точки (с късотите) геймът би трябвало да се изпълни.`, [
    cond(`${needGame}+ точки с подкрепа`, h => Math.max(dummyPoints(h, trump), h.tp) >= needGame, undefined, h => `имате ${Math.max(dummyPoints(h, trump), h.tp)} точки`),
  ]));
  rules.push(R(PASS, 'Отказ', 'Долната граница на показания диапазон: откажете инвитацията.', []));
  return rules;
}
