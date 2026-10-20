// General bidding judgment for auctions the specific rules don't cover:
// find the best strain from what partner has shown, add up the combined
// values, and bid the right level (partscore, game, slam), or compete with
// the Law of Total Tricks, or double the opponents when they overreach.

import { bid, PASS, DOUBLE, levelOf, strainOf, isBid } from '../core/auction';
import { SUIT_SYMBOLS, SUIT_NAMES, NT, HEARTS, SPADES } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, dummyPoints, declarerPoints, suitHonours } from '../core/eval';
import type { Ctx } from './context';
import { R, cond, type Rule } from './types';
import { blackwoodTrump } from './slam';

const sym = (s: number) => (s === NT ? 'БК' : SUIT_SYMBOLS[s]);

export interface Target {
  strain: number; // 0-3, 4 = NT, -1 = none
  level: number; // contract level we want (0 = no opinion)
  combined: number;
  fit: number; // trumps between the hands (known minimum)
  why: string;
}

/** Work out the best contract given my hand and what partner has shown. */
export function targetContract(h: HandInfo, x: Ctx): Target {
  const P = x.shownBy(x.partner);
  const ph = x.partnerHcp();
  const theirs = x.theirSuits();
  const fitLen = (s: number) => h.len[s] + P.len[s][0];
  const pts = (s: number) => (h.len[s] >= P.len[s][0] ? declarerPoints(h, s) : dummyPoints(h, s));
  // best fit: majors first
  let fit = -1;
  for (const s of [SPADES, HEARTS]) if (fitLen(s) >= 8 && (fit < 0 || fitLen(s) > fitLen(fit))) fit = s;
  if (fit < 0) for (const s of [1, 0]) if (fitLen(s) >= 8 && (fit < 0 || fitLen(s) > fitLen(fit))) fit = s;
  const pLast = x.lastAction(x.partner);
  const theirLastSuitBid = Math.max(-1, ...x.records.filter(r => !x.ourSide(r.seat) && isBid(r.call) && strainOf(r.call) < NT && !r.meaning.artificial).map(r => r.index));
  const partnerBidNT = !!pLast && isBid(pLast.call) && strainOf(pLast.call) === NT && !pLast.meaning.artificial && pLast.index > theirLastSuitBid;
  const stoppers = partnerBidNT || theirs.every(s => hasStopper(h, s) || P.len[s][0] >= 4);
  const ntShape = h.semiBalanced || P.balanced === true;
  const partnerPart = `партньорът ≈${ph.est} (показал ${ph.min}${ph.max >= 30 ? '+' : '–' + ph.max})`;

  const level = (c: number, gameLevel: number) => (c >= 37 ? 7 : c >= 33 ? 6 : c >= (gameLevel === 5 ? 28 : 25) ? gameLevel : c >= 23 ? -1 : 0);

  if (fit >= HEARTS) {
    const c = pts(fit) + ph.est;
    return { strain: fit, level: level(c, 4), combined: c, fit: fitLen(fit), why: `фит от ${fitLen(fit)} карти в ${SUIT_NAMES[fit]}; вашите ${pts(fit)} точки + ${partnerPart} = ${c}` };
  }
  // a self-sufficient six-card major usually plays well opposite two small
  const longMajor = [SPADES, HEARTS].find(s => h.len[s] >= 6 && P.len[s][1] >= 2 && !theirs.includes(s) && (h.len[s] >= 7 || h.suitHcp[s] >= 3));
  if (longMajor !== undefined && fit < 0) {
    const c = h.tp + ph.est - 1;
    return { strain: longMajor, level: level(c, 4), combined: c, fit: h.len[longMajor] + Math.max(1, P.len[longMajor][0]), why: `дългите ви ${SUIT_NAMES[longMajor]}; ${h.tp} точки + ${partnerPart} ≈ ${c}` };
  }
  const minorFitNT = fit >= 0 && h.shape[3] >= 1;
  if (stoppers && (ntShape || minorFitNT || (fit < 0 && h.shape[3] >= 1)) && (fit < 0 || h.hcp + ph.est < 29)) {
    const c = h.hcp + ph.est;
    return { strain: NT, level: level(c, 3), combined: c, fit: 0, why: `няма фит в мажор${theirs.length ? ', цветът им е спрян' : ''}; вашите ${h.hcp} т. + ${partnerPart} = ${c}` };
  }
  if (fit >= 0) {
    const c = pts(fit) + ph.est;
    return { strain: fit, level: level(c, 5), combined: c, fit: fitLen(fit), why: `фит от ${fitLen(fit)} карти в ${SUIT_NAMES[fit]}; вашите ${pts(fit)} точки + ${partnerPart} = ${c}` };
  }
  // no fit: a long suit of my own?
  const partnerTwoSuits = [0, 1, 2, 3].filter(s => P.len[s][0] >= 4).length >= 2;
  const long = [3, 2, 1, 0].find(s => h.len[s] >= 6 && P.len[s][1] >= 2 && !theirs.includes(s) && (h.len[s] >= 7 || !partnerTwoSuits));
  if (long !== undefined) {
    const c = h.tp + ph.est;
    return { strain: long, level: level(c, long >= HEARTS ? 4 : 5), combined: c, fit: h.len[long] + Math.max(2, P.len[long][0]), why: `дългите ви ${SUIT_NAMES[long]}; ${h.tp} точки + ${partnerPart} = ${c}` };
  }
  const c = h.hcp + ph.est;
  if (!stoppers) return { strain: -1, level: 0, combined: c, fit: 0, why: `няма фит и цветът им не е спрян; вашите ${h.hcp} т. + ${partnerPart} = ${c}` };
  return { strain: NT, level: level(c, 3), combined: c, fit: 0, why: `още няма намерен фит; вашите ${h.hcp} т. + ${partnerPart} = ${c}` };
}

const isGame = (call: number) => {
  const l = levelOf(call), s = strainOf(call);
  return (s === NT && l >= 3) || (s >= HEARTS && s < NT && l >= 4) || l >= 5;
};

export function genericRules(x: Ctx): Rule[] {
  const rules: Rule[] = [];
  const lb = x.lastBidRecord();
  const weHold = x.weHoldContract();
  const P = x.shownBy(x.partner);
  const forced = x.forcedByPartner() || (x.gameForced() && !(lb && x.ourSide(lb.seat) && isGame(lb.call)));
  const theirs = x.theirSuits();
  const asked = x.records.some(r => x.ourSide(r.seat) && r.meaning.tag === 'blackwood');
  const T = (h: HandInfo) => targetContract(h, x);
  const value = (h: HandInfo) => T(h).why;

  // --- slam
  const bwTrump = blackwoodTrump(x);
  if (!asked && bwTrump !== null && x.isLegal(bid(4, NT))) {
    rules.push(R(bid(4, NT), 'Блекууд', `Пита партньора колко аса има (5♣ 0 или 4, 5♦ 1, 5♥ 2, 5♠ 3). Използвайте го, когато знаете козовия цвят и имате сила за слем (около 33 общо) — за да не обявите слем без две аса.`, [
      cond('фит и сила за слем (33+ общо)', h => {
        const t = T(h);
        return t.level >= 6 && t.strain < NT;
      }, undefined, value),
      cond('без шикана (Блекууд не казва кое асо има партньорът)', h => h.shape[3] > 0),
    ], { artificial: true, forcing: 'one', tag: 'blackwood', data: { suit: bwTrump }, shows: s => { s.hcp = [Math.max(s.hcp[0], 13), s.hcp[1]]; } }));
  }
  const pAct = x.lastAction(x.partner);
  if (pAct && strainOf(pAct.call) === NT && isBid(pAct.call) && levelOf(pAct.call) <= 3 && x.isLegal(bid(4, NT)) && !pAct.meaning.artificial) {
    rules.push(R(bid(4, NT), 'Количествено 4БК', 'Инвитация за 6БК: партньорът обявява слем от горната част на диапазона си и пасува от долната.', [
      cond('31–32 общо: слем, ако партньорът е с максимум', h => {
        const t = T(h);
        return t.strain === NT && t.combined >= 31 && t.combined <= 32 && h.hcp + x.partnerHcp().max >= 33;
      }, undefined, value),
    ], { tag: 'quant' }));
  }
  for (const lvl of [7, 6]) {
    for (const s of [NT, SPADES, HEARTS, 1, 0]) {
      const c = bid(lvl, s);
      if (!x.isLegal(c)) continue;
      rules.push(R(c, lvl === 7 ? 'Голям слем' : 'Малък слем', lvl === 7 ? 'Около 37 общо точки с всички аса и попове: всичките тринадесет взятки.' : 'Около 33 общо точки (и не липсват две аса): дванадесет взятки.', [
        cond(`${lvl === 7 ? '37+' : '33+'} общо ${s === NT ? 'без фит в цвят' : `с фит в ${SUIT_NAMES[s]}`}`, h => {
          const t = T(h);
          return t.strain === s && t.level === lvl && (asked || s === NT || h.shape[3] === 0 || bwTrump === null);
        }, undefined, value),
      ]));
    }
  }

  // --- already in game (or higher) and no slam: stop
  if (lb && weHold && isGame(lb.call)) {
    const cur = lb.call;
    rules.push(R(PASS, 'Пас', 'Стигнахме до гейм и няма слем: спрете да лицитирате.', [cond('без сила за слем', h => T(h).level < 6 || levelOf(cur) >= T(h).level, undefined, value)]));
    // correct 3NT to four of a major with a known fit and an unbalanced hand
    if (strainOf(cur) === NT && levelOf(cur) === 3) {
      for (const M of [HEARTS, SPADES]) {
        rules.push(R(bid(4, M), 'Поправка към мажора', `Фит от осем карти в ${SUIT_NAMES[M]} и небалансирана ръка: гейм в мажора обикновено се играе по-добре от 3БК.`, [
          cond(`8+ ${sym(M)} общо в двете ръце и синглтон или шикана`, h => h.len[M] + P.len[M][0] >= 8 && h.shape[3] <= 1),
        ]));
        rules.push(R(bid(4, M), 'Поправка към мажора', `Дълги, силни ${SUIT_NAMES[M]} и неравномерна ръка: играйте гейм в мажора си вместо 3БК — цветът ви не се нуждае от помощ от партньора.`, [
          cond(`6+ ${sym(M)} със старши фигури или разпределение 6-5, плюс синглтон или шикана`, h => h.len[M] >= 6 && h.shape[3] <= 1 && (h.ranks[M].filter(r => r >= 12).length >= 2 || h.shape[1] >= 5) && !theirs.includes(M)),
        ]));
      }
    }
  }

  // --- game
  for (const s of [NT, SPADES, HEARTS, 1, 0]) {
    const gl = s === NT ? 3 : s >= HEARTS ? 4 : 5;
    const c = bid(gl, s);
    if (!x.isLegal(c)) continue;
    rules.push(R(c, 'Обявете гейм', s === NT
      ? 'Около 25 общо точки, без фит в мажор и със спрени цветове на противниците: 3БК е правилният гейм (девет взятки).'
      : s >= HEARTS ? `Фит от осем (или повече) карти в ${SUIT_NAMES[s]} и около 25 общо точки: обявете гейм в мажора.` : `Фит в ${SUIT_NAMES[s]} и около 28 общо точки, но без стопери за 3БК: гейм в минор на единадесет взятки.`, [
      cond(`сила за гейм в ${sym(s)}`, h => {
        const t = T(h);
        return t.strain === s && t.level >= gl;
      }, undefined, value),
    ], { shows: sh => { sh.hcp = [Math.max(sh.hcp[0], Math.max(0, 25 - x.partnerHcp().est - 2)), sh.hcp[1]]; } }));
  }

  // --- invitations (only while the auction is low and partner's range is wide)
  const ph = x.partnerHcp();
  if (weHold && ph.max - ph.min >= 3 && (!lb || levelOf(lb.call) <= 2)) {
    for (const s of [NT, SPADES, HEARTS]) {
      const c = s === NT ? bid(2, NT) : bid(3, s);
      if (!x.isLegal(c)) continue;
      rules.push(R(c, 'Инвитация', s === NT ? 'Геймът е възможен, ако партньорът е в горната част на диапазона си: 2БК е инвитация за 3БК.' : `Инвитация за гейм в ${SUIT_NAMES[s]}: партньорът обявява гейм от горната част на диапазона си.`, [
        cond('гейм, ако партньорът е с максимум', h => {
          const t = T(h);
          if (t.strain !== s || t.level !== -1) return false;
          return t.combined - ph.est + ph.max >= 26;
        }, undefined, value),
      ], { tag: 'invite' }));
    }
  }

  // --- penalty doubles
  if (lb && !weHold && x.auction.doubleStatus() === 0) {
    const ts = strainOf(lb.call), tl = levelOf(lb.call);
    rules.push(R(DOUBLE, 'Наказателна контра', 'Противниците обявиха твърде много: нашата двойка има превес в силата и договорът им би трябвало да падне. Контрирайте за по-голямо наказание.', [
      cond('нашата двойка има повечето сила (24+ т. общо)', h => h.hcp + ph.est >= 24, undefined, h => `вашите ${h.hcp} + партньорът ≈${ph.est}`),
      cond('те са на ниво 3 или по-високо', () => tl >= 3),
      cond(ts === NT ? 'договор без коз' : 'известна дължина в техния коз (2+)', h => ts === NT || h.len[ts] >= 2),
    ], { tag: 'penaltyX' }));
    if (ts < NT) {
      rules.push(R(DOUBLE, 'Наказателна контра', `Държите козовете им: четири или повече карти в техния коз с две фигури, плюс сила. Козовете ще се разпределят зле за тях.`, [
        cond('4+ карти в техния коз с две фигури', h => h.len[ts] >= 4 && suitHonours(h, ts) >= 2),
        cond('10+ т. и партньорът е показал сила', h => h.hcp >= 10 && ph.min >= 6),
        cond('те са на ниво 2 или по-високо', () => tl >= 2),
      ], { tag: 'penaltyX' }));
    }
  }

  // --- forced: must find a descriptive bid
  if (forced) {
    const pSuits = [3, 2, 1, 0].filter(s => P.len[s][0] >= 4);
    for (const s of pSuits) {
      const c = x.cheapest(s);
      if (c === null) continue;
      const need = s >= HEARTS ? 3 : 4;
      rules.push(R(c, 'Подкрепа за партньора', `Последната обява на партньора е форсираща: подкрепата в ${SUIT_NAMES[s]} е най-полезното, което можете да кажете.`, [
        cond(`${need}+ ${sym(s)}`, h => h.len[s] >= need, sh => { sh.len[s] = [Math.max(need, sh.len[s][0]), sh.len[s][1]]; }),
      ]));
    }
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 4) continue;
      rules.push(R(c, 'Повторете цвета си', `Обявата на партньора е форсираща: повторете шесткартовия си цвят (${SUIT_NAMES[s]}).`, [cond(`6+ ${sym(s)}`, h => h.len[s] >= 6)]));
    }
    const nt = x.cheapest(NT);
    if (nt !== null && levelOf(nt) <= 3) rules.push(R(nt, 'Без коз', 'Обявата на партньора е форсираща: без коз показва стопер в цвета (цветовете) на противниците и липса на фит.', [cond('стопери в цветовете на противниците', h => theirs.every(s => hasStopper(h, s)))]));
    else if (nt !== null && levelOf(nt) === 4 && x.records.some(r => x.ourSide(r.seat) && isBid(r.call) && strainOf(r.call) < NT && !r.meaning.artificial)) {
      // above 3NT, keep bidding suits — 4NT would be Blackwood
      for (const s of [3, 2, 1, 0]) {
        const c = x.cheapest(s);
        if (c === null || levelOf(c) > 5) continue;
        rules.push(R(c, 'Спиране в гейм', `Обявата на партньора е форсираща, но няма слем: спрете в гейма на единадесет взятки в най-добрия фит.`, [cond(`фит в ${sym(s)}`, h => h.len[s] + P.len[s][0] >= 8)]));
      }
    }
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 3 || x.ourSuits().includes(s) || theirs.includes(s)) continue;
      rules.push(R(c, 'Нов цвят', `Обявата на партньора е форсираща: покажете втори цвят (4+ ${SUIT_NAMES[s]}).`, [cond(`4+ ${sym(s)}`, h => h.len[s] >= 4)]));
    }
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null) continue;
      rules.push(R(c, 'Предпочитание', `Обявата на партньора е форсираща: дайте предпочитание на ${SUIT_NAMES[s]} на партньора.`, [cond(`партньорът е показал ${sym(s)} и имате 2+`, h => P.len[s][0] >= 3 && h.len[s] >= 2)]));
    }
    if (nt !== null && levelOf(nt) <= 3) rules.push(R(nt, 'Без коз', 'Обявата на партньора е форсираща и нищо друго не пасва: без коз.', []));
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c !== null && levelOf(c) <= 5) rules.push(R(c, 'Най-дълъг цвят', 'Обявата на партньора е форсираща: обявете най-дългия си цвят.', [cond(`${sym(s)} е най-дългият ви цвят`, h => h.len[s] === h.shape[0])]));
    }
  }

  // --- partscore competition (Law of Total Tricks)
  if (lb && !weHold) {
    for (const s of [3, 2, 1, 0]) {
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 4) continue;
      rules.push(R(c, 'Конкуриране', `Закон за общите взятки: с N коза общо в двете ръце обикновено е правилно да се борите до ниво N−6 (осем коза → ниво 2, девет → ниво 3). Обявете ${SUIT_NAMES[s]}, вместо да ги оставите да играят евтино.`, [
        cond(`известен фит в ${sym(s)}, достатъчно дълъг за това ниво`, h => {
          const f = h.len[s] + P.len[s][0];
          return f >= 8 && levelOf(c) <= f - 6 && (P.len[s][0] >= 3 || h.len[s] >= 5);
        }, undefined, h => `${h.len[s] + P.len[s][0]} коза общо в двете ръце`),
        cond('достатъчно сила за конкуриране (17+ общо)', h => h.hcp + ph.est >= 17, undefined, h => `вашите ${h.hcp} + партньорът ≈${ph.est}`),
      ]));
    }
  }

  // --- competing with extra values when the opponents outbid us at a low level
  if (lb && !weHold && levelOf(lb.call) <= 3 && x.actionsBy(x.seat).length > 0) {
    for (const s of [3, 2, 1, 0]) {
      if (theirs.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 3) continue;
      rules.push(R(c, 'Конкуриране с вашия цвят', `Шест добри ${SUIT_NAMES[s]} и допълнителна сила (15+): не им позволявайте да откраднат договора на ниско ниво.`, [
        cond(`6+ ${sym(s)} и 15+ общо точки`, h => h.len[s] >= 6 && h.tp >= 15, undefined, h => `${h.len[s]} ${sym(s)}, ${h.tp} точки`),
      ]));
    }
    const ts = strainOf(lb.call);
    if (ts < NT && levelOf(lb.call) <= 2 && x.auction.doubleStatus() === 0) {
      rules.push(R(DOUBLE, 'Конкурентна контра', `Информативна: допълнителна сила (15+) и късота в техните ${SUIT_NAMES[ts]}, с подкрепа за необявените цветове.`, [
        cond(`15+ т. и най-много 1 ${sym(ts)}`, h => h.hcp >= 15 && h.len[ts] <= 1, undefined, h => `${h.hcp} т., ${h.len[ts]} ${sym(ts)}`),
      ], { tag: 'takeoutX' }));
    }
  }

  // --- preference / correction when partner's suit is a misfit and we hold the contract
  if (lb && weHold && lb.seat === x.partner && !isGame(lb.call)) {
    const ls = strainOf(lb.call);
    if (ls < NT) {
      for (const s of [3, 2, 1, 0]) {
        if (s === ls) continue;
        const c = x.cheapest(s);
        if (c === null || levelOf(c) > 3) continue;
        rules.push(R(c, 'Предпочитание', `Партньорът обяви два цвята: върнете се към ${SUIT_NAMES[s]}, където ръцете си пасват по-добре.`, [
          cond(`по-добър фит в ${sym(s)}, отколкото в ${sym(ls)}`, h => P.len[s][0] >= 4 && h.len[s] >= 2 && h.len[s] + P.len[s][0] > h.len[ls] + P.len[ls][0] + 1),
        ]));
      }
    }
  }

  rules.push(R(PASS, 'Пас', weHold ? 'Договорът е разумен, а геймът е недостижим: пас.' : 'Нищо, което си струва да обявите: пас.', []));
  for (const r of rules) r.generic = true;
  return rules;
}
