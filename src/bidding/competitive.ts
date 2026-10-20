// Competitive bidding: overcalls, takeout doubles, advances, negative doubles.

import { bid, PASS, DOUBLE, REDOUBLE, isBid, levelOf, strainOf } from '../core/auction';
import { SUIT_SYMBOLS, SUIT_NAMES, CLUBS, DIAMONDS, HEARTS, SPADES, NT } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, goodSuit, dummyPoints, suitHonours } from '../core/eval';
import type { Ctx, CallRecord } from './context';
import { R, hcpC, lenC, balancedC, cond, dpC, goodSuitC, tpC, type Rule, type Cond } from './types';

const sym = (s: number) => SUIT_SYMBOLS[s];

const stopC = (suits: number[]): Cond => cond(
  `стопер в ${suits.map(sym).join(' и ')}`,
  h => suits.every(s => hasStopper(h, s)),
  undefined,
  h => (suits.every(s => hasStopper(h, s)) ? 'имате стопер' : `нямате стопер в ${suits.filter(s => !hasStopper(h, s)).map(sym).join(' ')}`),
);

const decentSuit = (s: number): Cond => cond(
  `прилични ${SUIT_NAMES[s]} (две фигури или шест карти)`,
  h => suitHonours(h, s) >= 2 || h.len[s] >= 6,
  undefined,
  h => `имате ${suitHonours(h, s)} фигури в ${sym(s)}`,
);

/** Is this the balancing (pass-out) seat? */
export function isBalancing(x: Ctx): boolean {
  const n = x.records.length;
  if (n < 3) return false;
  const lb = x.lastBidRecord();
  return !!lb && lb.seat === x.lho && x.records[n - 1].call === PASS && x.records[n - 2].call === PASS;
}

function bestUnbid(h: HandInfo, unbid: number[]): number {
  // prefer a four-card major, then the longest suit (higher on ties)
  const majors = unbid.filter(s => s >= HEARTS && h.len[s] >= 4);
  const pool = majors.length ? majors : unbid;
  return pool.reduce((a, s) => (h.len[s] > h.len[a] || (h.len[s] === h.len[a] && s > a) ? s : a), pool[0]);
}

// ---------------------------------------------------------------------------
// Direct and balancing actions over an opponent's opening

export function overcallRules(x: Ctx): Rule[] {
  const rules: Rule[] = [];
  const lb = x.lastBidRecord()!;
  const theirBids = x.records.filter(r => !x.ourSide(r.seat) && isBid(r.call));
  const op = x.opening()!;
  const preemptOpening = op.meaning.tag === 'weak2' || op.meaning.tag === 'preempt';
  if (theirBids.length > 2 || (theirBids.length === 2 && levelOf(lb.call) > 2) || (!preemptOpening && levelOf(lb.call) > 3)) return rules;
  const theirs = x.theirSuits();
  const unbid = [CLUBS, DIAMONDS, HEARTS, SPADES].filter(s => !theirs.includes(s));
  const bal = isBalancing(x);
  const lastStrain = strainOf(lb.call);
  const lastLevel = levelOf(lb.call);
  const borrow = bal ? 3 : 0;

  if (lastStrain === NT && lastLevel === 1) {
    rules.push(R(DOUBLE, 'Наказателна контра', 'Срещу тяхното 1БК контрата показва 15+ точки — поне колкото откриващия. Партньорът обикновено пасува за наказание.', [hcpC(15 - borrow)], { tag: 'penaltyX' }));
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      rules.push(R(bid(2, s), 'Естествена интервенция', `Дълги ${SUIT_NAMES[s]} (6+ или добър петкартов мажор) и 8–15 точки: борба за частичния договор.`, [hcpC(8 - borrow, 15),
        cond(`6+ ${sym(s)} или добър петкартов мажор`, h => h.len[s] >= 6 || (s >= HEARTS && h.len[s] === 5 && goodSuit(h, s)), sh => { sh.len[s] = [Math.max(sh.len[s][0], 5), sh.len[s][1]]; }, h => `имате ${h.len[s]} ${sym(s)}`),
        cond(`${sym(s)} е най-дългият ви цвят`, h => h.len[s] === h.shape[0])]));
    }
    rules.push(R(PASS, 'Пас', 'Нищо, което си струва да покажете срещу силното им 1БК.', []));
    return rules;
  }

  if (lastStrain === NT) {
    rules.push(R(PASS, 'Пас', 'Обявили са без коз: няма разумна обява.', []));
    return rules;
  }

  const s0 = lastStrain; // their (last) suit
  const ntCall = x.cheapest(NT);
  const preempt = lb.meaning.tag === 'weak2' || lb.meaning.tag === 'preempt';

  if (ntCall === bid(1, NT)) {
    rules.push(R(ntCall, bal ? 'Балансиращо 1БК' : 'Интервенция 1БК', bal ? 'На балансираща позиция 1БК показва 11–14 точки, балансирана ръка и стопер (вие „заемате“ част от силата на партньора).' : 'Като откриване 1БК — 15–18 точки, балансирана ръка — плюс стопер в техния цвят.', [
      hcpC(bal ? 11 : 15, bal ? 14 : 18), balancedC(), stopC(theirs)]));
  }
  if (ntCall === bid(2, NT) && preempt) {
    rules.push(R(ntCall, 'Интервенция 2БК', 'Срещу слабо две: 15–18 точки, балансирана ръка, със стопер.', [hcpC(15, 18), balancedC(), stopC(theirs)]));
  }
  if (ntCall === bid(3, NT) && preempt) {
    rules.push(R(ntCall, 'Интервенция 3БК', 'Срещу бариерно откриване: силна балансирана ръка (16–21) със стопер — за игра.', [hcpC(16, 21), stopC(theirs)]));
  }

  // two-suited overcalls (direct seat, over a one-level opening)
  if (!bal && lastLevel === 1 && theirs.length === 1) {
    const other2 = unbid.filter(s => s !== s0);
    const low2 = [...other2].sort((a, b) => a - b).slice(0, 2);
    if (x.cheapest(NT) === bid(2, NT)) {
      rules.push(R(bid(2, NT), 'Необичайно 2БК', `Изкуствено: поне 5-5 в двата най-ниски необявени цвята (${low2.map(sym).join(' и ')}). Партньорът избира.`, [hcpC(6),
        lenC(low2[0], 5), lenC(low2[1], 5)], { artificial: true, forcing: 'one', tag: 'unusual', data: { a: low2[0], b: low2[1] } }));
    }
    const cue = bid(2, s0);
    if (x.isLegal(cue)) {
      if (s0 <= DIAMONDS) {
        rules.push(R(cue, 'Кю-бид Майкълс', 'Изкуствено: поне 5-5 в двата мажора.', [hcpC(6), lenC(HEARTS, 5), lenC(SPADES, 5)], { artificial: true, forcing: 'one', tag: 'michaels', data: { a: HEARTS, b: SPADES } }));
      } else {
        const om = s0 === HEARTS ? SPADES : HEARTS;
        rules.push(R(cue, 'Кю-бид Майкълс', `Изкуствено: пет ${SUIT_NAMES[om]} и петкартов минор.`, [hcpC(6), lenC(om, 5),
          cond('петкартов минор', h => h.len[CLUBS] >= 5 || h.len[DIAMONDS] >= 5)], { artificial: true, forcing: 'one', tag: 'michaels', data: { a: om, b: -1 } }));
      }
    }
  }

  // a good five-card major at the one level: overcall rather than double
  for (const M of [SPADES, HEARTS]) {
    if (theirs.includes(M)) continue;
    const c = x.cheapest(M);
    if (c === null || levelOf(c) !== 1 || preempt) continue;
    rules.push(R(c, 'Интервенция', `Пет добри ${SUIT_NAMES[M]} и ${8 - borrow}–16 точки: с петкартов мажор интервенирайте, вместо да контрирате — показвате цвета си и подсказвате извод.`, [hcpC(8 - borrow, 16), lenC(M, 5), decentSuit(M),
      cond(`${sym(M)} е най-дългият ви необявен цвят`, h => unbid.every(o => h.len[o] < h.len[M] || (h.len[o] === h.len[M] && o <= M)))]));
  }

  // takeout double
  const short = cond(`късота в ${theirs.map(sym).join(' ')} (две карти или по-малко)`, h => theirs.every(s => h.len[s] <= 2), sh => { theirs.forEach(s => (sh.len[s] = [0, Math.min(2, sh.len[s][1])])); }, h => `имате ${theirs.map(s => h.len[s] + sym(s)).join(' ')}`);
  const support = cond(`подкрепа за необявените цветове (по три или повече карти във всеки${unbid.some(s => s >= HEARTS) ? ', особено в мажорите' : ''})`, h => {
    const weak = unbid.filter(s => h.len[s] < 3);
    return weak.length === 0 || (weak.length === 1 && weak[0] <= DIAMONDS && unbid.filter(s => s >= HEARTS).every(s => h.len[s] >= 4));
  }, sh => { unbid.filter(s => s >= HEARTS).forEach(s => (sh.len[s] = [Math.max(3, sh.len[s][0]), sh.len[s][1]])); }, h => `имате ${unbid.map(s => h.len[s] + sym(s)).join(' ')}`);
  const minX = preempt ? 13 + Math.max(0, lastLevel - 2) : bal ? 9 : 12;
  rules.push(R(DOUBLE, 'Информативна контра', `${minX}+ точки, късота в техния цвят и подкрепа за останалите: партньорът избира козовия цвят.`, [hcpC(minX), short, support], { tag: 'takeoutX', forcing: 'one' }));
  rules.push(R(DOUBLE, 'Силна контра', '17+ точки: твърде силна ръка за проста интервенция. След това ще обявите собствения си цвят.', [hcpC(17)], { tag: 'takeoutX', forcing: 'one' }));

  // weak jump overcall
  if (!bal && !preempt) {
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(s)) continue;
      const j = x.jump(s);
      if (j === null || levelOf(j) > 3) continue;
      rules.push(R(j, 'Слаба интервенция със скок', `Като слабо две: шест добри ${SUIT_NAMES[s]} и 6–10 точки. Бариерно.`, [hcpC(6, 10), lenC(s, 6, 7), decentSuit(s)], { tag: 'wjo' }));
    }
  }

  // simple overcalls
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    if (theirs.includes(s)) continue;
    const c = x.cheapest(s);
    if (c === null) continue;
    const lvl = levelOf(c);
    if (lvl > 3) continue;
    const min = (preempt ? 13 : lvl === 1 ? 8 : 10) - borrow;
    const minLen = lvl === 1 ? 5 : 5;
    rules.push(R(c, lvl === 1 ? 'Интервенция' : `Интервенция на ниво ${lvl}`, lvl === 1
      ? `Пет добри ${SUIT_NAMES[s]} и ${min}–16 точки. Показва на партньора какво да изведе и се бори за частичния договор.`
      : `Добър цвят (пет, обикновено шест карти) и ${min}–17 точки: по-високите интервенции изискват повече.`, [hcpC(min, 17), lenC(s, minLen), lvl === 1 ? decentSuit(s) : goodSuitC(s),
      cond(`${sym(s)} е най-дългият ви необявен цвят`, h => unbid.every(o => h.len[o] < h.len[s] || (h.len[o] === h.len[s] && o <= s)))]));
  }
  rules.push(R(PASS, 'Пас', bal ? 'Нямате с какво да балансирате.' : 'Няма подходяща интервенция или контра.', [], {
    shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], bal ? 9 : 16)]; },
  }));
  return rules;
}

// ---------------------------------------------------------------------------
// Advancing partner's overcall or double

export function advanceRules(x: Ctx, pAct: CallRecord): Rule[] {
  const rules: Rule[] = [];
  if (x.partnerCall()?.index !== pAct.index) return rules; // partner has spoken again since: use judgment
  const theirs = x.theirSuits();
  const unbid = [CLUBS, DIAMONDS, HEARTS, SPADES].filter(s => !theirs.includes(s));
  const rhoBid = x.rhoCall() && x.rhoCall()!.call !== PASS;
  const tag = pAct.meaning.tag;
  const opp = theirs[0] ?? CLUBS;

  if (tag === 'takeoutX') {
    const free = rhoBid;
    const dbl = x.lastBidRecord();
    if (dbl && levelOf(dbl.call) >= 4) {
      for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        if (theirs.includes(su)) continue;
        const c = x.cheapest(su);
        if (c === null || levelOf(c) > 5) continue;
        rules.push(R(c, 'Изваждане от контрата', `Контрата на партньора на висок договор е предимно наказателна; изваждайте я само с дълъг цвят и разпределение (6+ ${SUIT_NAMES[su]}).`, [lenC(su, 6), cond('синглтон или шикана', h => h.shape[3] <= 1)]));
      }
      rules.push(R(PASS, 'Пас', 'На това ниво контрата на партньора е кооперативна: без дълъг цвят се защитавайте.', []));
      return rules;
    }
    if (!free) {
      rules.push(R(PASS, 'Наказателен пас', `Превръщате контрата в наказателна: дълги, силни козове в техния цвят (5+ с три фигури).`, [lenC(opp, 5), cond('три фигури в техния цвят', h => suitHonours(h, opp) >= 3), hcpC(8)]));
      rules.push(R(bid(3, NT), '3БК', '13+ точки, балансирана ръка, със стопер в техния цвят: обявете гейма.', [hcpC(13), cond('балансирана или полубалансирана ръка', h => h.semiBalanced), stopC(theirs)]));
      const cue = x.cheapest(opp);
      if (cue !== null) rules.push(R(cue, 'Кю-бид', '12+ точки: сила за гейм. Форсиращо; моли партньора да опише ръката си.', [hcpC(12)], { artificial: true, forcing: 'game' }));
      for (const M of [SPADES, HEARTS]) {
        if (!unbid.includes(M)) continue;
        rules.push(R(bid(4, M), 'Гейм', `Пет или повече ${SUIT_NAMES[M]} и 10+ точки: партньорът обеща подкрепа.`, [lenC(M, 5), hcpC(10)]));
      }
      rules.push(R(bid(3, NT), '3БК', '13+ точки със стопер в техния цвят.', [hcpC(13), stopC(theirs)]));
      for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        if (!unbid.includes(s)) continue;
        const j = x.jump(s);
        if (j === null || levelOf(j) > 3) continue;
        rules.push(R(j, 'Отговор със скок', `9–11 точки с четири или повече ${SUIT_NAMES[s]}: инвитация за гейм.`, [hcpC(9, 11), lenC(s, 4), cond(`${sym(s)} е най-добрият ви цвят`, h => bestUnbid(h, unbid) === s)]));
      }
      if (x.cheapest(NT) !== null && levelOf(x.cheapest(NT)!) <= 2) {
        const nt = x.cheapest(NT)!;
        if (levelOf(nt) === 1) rules.push(R(nt, '1БК', '6–10 точки със стопер в техния цвят и без четирикартов мажор.', [hcpC(6, 10), stopC(theirs), cond('без необявен четирикартов мажор', h => unbid.filter(s => s >= HEARTS).every(s => h.len[s] < 4))]));
        rules.push(R(levelOf(nt) === 1 ? bid(2, NT) : nt, '2БК', '11–12 точки със стопер: инвитационно.', [hcpC(11, 12), stopC(theirs)]));
      }
      for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        if (!unbid.includes(s)) continue;
        const c = x.cheapest(s);
        if (c === null) continue;
        rules.push(R(c, 'Принуден отговор', `Контрата на партньора ви моли да изберете цвят: с 0–8 точки обявете най-добрия си цвят (${SUIT_NAMES[s]}) на най-ниското ниво. Не пасувайте само защото сте слаби.`, [hcpC(0, 8),
          cond(`${sym(s)} е най-добрият ви необявен цвят (първо четирикартов мажор)`, h => bestUnbid(h, unbid) === s)], {
          shows: sh => { sh.len[s] = [Math.max(sh.len[s][0], 3), sh.len[s][1]]; },
        }));
      }
      for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        if (!unbid.includes(s)) continue;
        const c = x.cheapest(s);
        if (c !== null) rules.push(R(c, 'Отговор', 'Най-добрият ви цвят на най-ниското ниво.', [cond(`${sym(s)} е най-добрият ви необявен цвят`, h => bestUnbid(h, unbid) === s)]));
      }
      return rules;
    }
    // RHO bid: a free bid shows values
    for (const M of [SPADES, HEARTS]) {
      if (!unbid.includes(M) || !x.isLegal(bid(4, M))) continue;
      rules.push(R(bid(4, M), 'Гейм', `Пет или повече ${SUIT_NAMES[M]} и 10+ точки: контрата на партньора обеща подкрепа, затова обявете гейм.`, [lenC(M, 5), hcpC(10)]));
    }
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (!unbid.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 4) continue;
      const lvl = levelOf(c);
      rules.push(R(c, 'Свободна обява', `Десният противник обяви, така че вече не сте принудени: обявата показва истински цвят (${SUIT_NAMES[s]}) и известна сила${lvl >= 4 ? ' — на ниво 4: 8+ точки и пет карти' : ' (6–11)'}.`, [hcpC(lvl >= 4 ? 8 : 6), lenC(s, lvl >= 4 ? 5 : 4), cond(`${sym(s)} е най-добрият ви цвят`, h => bestUnbid(h, unbid) === s)]));
    }
    rules.push(R(PASS, 'Пас', 'След обявата на десния противник не сте принудени и нямате какво да покажете.', []));
    return rules;
  }

  if (tag === 'michaels' || tag === 'unusual') {
    const a = pAct.meaning.data!.a, b = pAct.meaning.data!.b;
    const choices = b >= 0 ? [a, b] : [a];
    for (const s of choices) {
      const game = s >= HEARTS ? 4 : 5;
      rules.push(R(bid(game, s), 'Гейм', `Фит в ${SUIT_NAMES[s]} и добра сила (или голям фит): обявете гейм.`, [lenC(s, 3), hcpC(11)]));
    }
    for (const s of choices) {
      const c = x.cheapest(s);
      if (c === null) continue;
      rules.push(R(c, 'Предпочитание', `Изберете цвета на партньора, който ви харесва повече: ${SUIT_NAMES[s]}.`, [cond(`${sym(s)} е по-добрият ви фит`, h => choices.every(o => h.len[o] <= h.len[s]))]));
    }
    if (b < 0) {
      const c = x.cheapest(CLUBS);
      if (c !== null) rules.push(R(c, 'Пас или поправка', 'Без фит в мажора: обявете спатии; ако минорът на партньора е кари, той ще поправи.', [lenC(a, 0, 2)], { tag: 'pOrC' }));
    }
    rules.push(R(PASS, 'Пас', 'Доволни сте да се защитавате.', []));
    return rules;
  }

  if (tag === 'penaltyX') {
    rules.push(R(PASS, 'Пас', 'Контрата на партньора е наказателна: пасувайте и се защитавайте.', [hcpC(0, 37)]));
    return rules;
  }

  const ps = isBid(pAct.call) ? strainOf(pAct.call) : -1;
  if (ps === NT) {
    for (const M of [SPADES, HEARTS]) {
      if (theirs.includes(M)) continue;
      rules.push(R(bid(4, M), 'Гейм', `Шест или повече ${SUIT_NAMES[M]} и 9+ точки срещу 15–18: гейм в мажора.`, [lenC(M, 6), hcpC(9)]));
      rules.push(R(bid(3, M), 'Инвитация', `Шест ${SUIT_NAMES[M]} и 6–8 точки: инвитация за гейм.`, [lenC(M, 6), hcpC(6, 8)], { tag: 'invite' }));
    }
    rules.push(R(bid(3, NT), '3БК', 'Сила за гейм (10+) срещу интервенция 1БК с 15–18.', [hcpC(10)]));
    rules.push(R(bid(2, NT), 'Инвитация', '8–9 точки.', [hcpC(8, 9)], { tag: 'nt-invite' }));
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      const c = x.cheapest(s);
      if (c === null || theirs.includes(s)) continue;
      rules.push(R(c, 'За игра', `Пет или повече ${SUIT_NAMES[s]} при слаба ръка: играйте във вашия цвят.`, [lenC(s, 5), hcpC(0, 7)]));
    }
    rules.push(R(PASS, 'Пас', 'Твърде слаба ръка за гейм.', []));
    return rules;
  }

  if (ps >= 0 && ps < 4) {
    const cue = x.cheapest(opp);
    const supLen = ps >= HEARTS ? 3 : 4;
    if (ps >= HEARTS) rules.push(R(bid(4, ps), 'Подкрепа до гейм', `Гейм в ${SUIT_NAMES[ps]} на партньора: 13+ точки за подкрепа или слаба ръка с пет коза и разпределение.`, [lenC(ps, 3),
      cond('13+ точки за подкрепа или пет коза със синглтон', h => dummyPoints(h, ps) >= 13 || (h.len[ps] >= 5 && h.shape[3] <= 1))]));
    if (cue !== null && cue < bid(4, ps) && levelOf(cue) <= 3) rules.push(R(cue, 'Подкрепа с кю-бид', `Кю-бид в техния цвят показва добра подкрепа: ${supLen}+ ${SUIT_NAMES[ps]} и 10+ точки. Простата подкрепа би била по-слаба.`, [lenC(ps, supLen), dpC(ps, 10)], { artificial: true, forcing: 'one', tag: 'cueRaise', data: { suit: ps } }));
    const raise = x.cheapest(ps);
    if (raise !== null && levelOf(raise) <= 3) {
      const j = x.jump(ps);
      if (j !== null && levelOf(j) <= 3) rules.push(R(j, 'Бариерна подкрепа', `Подкрепа с четири карти и слаба ръка: подкрепете до нивото на фита (Закон за общите взятки).`, [lenC(ps, 4), hcpC(0, 8)]));
      rules.push(R(raise, 'Подкрепа', `Подкрепа за цвета на партньора (${supLen}+ ${sym(ps)}) и 6–9 точки.`, [lenC(ps, supLen), dpC(ps, 6, 9)]));
    }
    const nt = x.cheapest(NT);
    if (nt !== null) {
      const l = levelOf(nt);
      if (l === 1) rules.push(R(nt, '1БК', '8–11 точки със стопер в техния цвят.', [hcpC(8, 11), stopC(theirs)]));
      if (l <= 2) rules.push(R(bid(2, NT), '2БК', '12–14 точки със стопер: инвитационно.', [hcpC(12, 14), stopC(theirs)]));
      if (l <= 3) rules.push(R(bid(3, NT), '3БК', '15+ точки със стопер.', [hcpC(15), stopC(theirs)]));
    }
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (s === ps || theirs.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 2) continue;
      rules.push(R(c, 'Нов цвят', `Собствен добър цвят (5+ ${SUIT_NAMES[s]}) и 8+ точки. Не е форсиращо.`, [hcpC(8), lenC(s, 5), goodSuitC(s)]));
    }
    rules.push(R(PASS, 'Пас', 'Няма фит и няма допълнителна сила.', []));
    return rules;
  }
  return [];
}

// ---------------------------------------------------------------------------
// Responding after the opponents interfere over partner's opening

export function contestedResponse(x: Ctx, open: CallRecord): Rule[] {
  const rules: Rule[] = [];
  const os = strainOf(open.call);
  const rc = x.rhoCall();
  if (!rc) return [];
  const theirs = x.theirSuits();
  const support = os >= HEARTS ? 3 : 4;

  if (os === NT) {
    if (rc.call === DOUBLE) {
      rules.push(R(REDOUBLE, 'Реконтра', '8+ точки: нашата двойка има превес в силата — противниците са в беда.', [hcpC(8)]));
      for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
        rules.push(R(bid(2, su), 'Бягство', `Слаба ръка с пет или повече ${SUIT_NAMES[su]}: бягайте от 1БК с контра към по-сигурен договор.`, [hcpC(0, 7), lenC(su, 5),
          cond(`${sym(su)} е най-дългият ви цвят`, h => h.len[su] === h.shape[0])]));
      }
      rules.push(R(PASS, 'Пас', 'Нямате какво да кажете.', []));
      return rules;
    }
    rules.push(R(DOUBLE, 'Наказателна контра', 'Интервенцията им срещу нашето 1БК попада на добра ръка с дължина в техния цвят.', [hcpC(8), cond('четири или повече карти в техния цвят', h => theirs.some(s => h.len[s] >= 4))], { tag: 'penaltyX' }));
    rules.push(R(bid(3, NT), '3БК', '10+ точки със стопер в техния цвят.', [hcpC(10), stopC(theirs)]));
    rules.push(R(DOUBLE, 'Кооперативна контра', 'Имаме превес в силата (вашите 8+ срещу 15–17), но няма ясна обява: контрирайте. С дължина в техния цвят партньорът пасува и вземаме наказание; иначе партньорът обявява.', [hcpC(8),
      cond('три карти в техния цвят и без собствен петкартов цвят', h => theirs.some(s => h.len[s] >= 3) && h.shape[0] <= 4)], { tag: 'penaltyX' }));
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(s)) continue;
      const c = x.cheapest(s);
      if (c === null || levelOf(c) > 3) continue;
      rules.push(R(c, 'Естествена обява', `Пет или повече ${SUIT_NAMES[s]}: включвате се в борбата за договора.`, [lenC(s, 5)]));
    }
    rules.push(R(PASS, 'Пас', 'Нямате какво да кажете.', []));
    return rules;
  }

  if (rc.call === DOUBLE) {
    rules.push(R(REDOUBLE, 'Реконтра', '10+ точки: показва превес в силата. Обикновено без фит; можете да контрирате противниците, когато бягат.', [hcpC(10)], { tag: 'redouble' }));
    if (os >= HEARTS) rules.push(R(bid(2, NT), 'Джордан 2БК', `Изкуствено след тяхната контра: лимитна подкрепа или по-силна (10+) с четири ${SUIT_NAMES[os]}.`, [lenC(os, 4), dpC(os, 10)], { artificial: true, forcing: 'one', tag: 'cueRaise', data: { suit: os } }));
    rules.push(R(bid(3, os), 'Бариерна подкрепа', `След контра подкрепата със скок е слаба: подкрепа с четири карти, под 10 точки. Отнемете им пространство за лицитиране.`, [lenC(os, 4), hcpC(0, 9)]));
    rules.push(R(bid(2, os), 'Подкрепа', `Подкрепа (${support}+) и 6–10 точки.`, [lenC(os, support), dpC(os, 6, 10)]));
    for (const s of [HEARTS, SPADES]) {
      if (s <= os) continue;
      rules.push(R(bid(1, s), 'Нов цвят', `Четири или повече ${SUIT_NAMES[s]}, 6+ точки. Форсиращо.`, [hcpC(6), lenC(s, 4)], { forcing: 'one' }));
    }
    rules.push(R(bid(1, NT), '1БК', '6–9 точки, балансирана ръка.', [hcpC(6, 9)]));
    rules.push(R(PASS, 'Пас', 'Слаба ръка, нищо за показване.', []));
    return rules;
  }

  if (!isBid(rc.call)) return [];
  const ys = strainOf(rc.call), yl = levelOf(rc.call);
  if (ys === NT) {
    rules.push(R(DOUBLE, 'Наказателна контра', '9+ точки: интервенирали са с 1БК срещу силна ръка — контрирайте за наказание.', [hcpC(9)], { tag: 'penaltyX' }));
    rules.push(R(x.cheapest(os)!, 'Подкрепа', `Подкрепа за партньора и слаба ръка.`, [lenC(os, support), hcpC(5, 8)]));
    rules.push(R(PASS, 'Пас', 'Нямате какво да кажете.', []));
    return rules;
  }

  // cue-bid raise (after the negative double when partner opened a minor: majors first)
  const cue = x.cheapest(ys);
  const cueRule = cue !== null && levelOf(cue) <= 3
    ? R(cue, 'Подкрепа с кю-бид', `Кю-бид в техния цвят: лимитна подкрепа или по-силна (10+) с подкрепа от ${support}+ карти.`, [lenC(os, support), dpC(os, 10)], { artificial: true, forcing: 'one', tag: 'cueRaise', data: { suit: os } })
    : null;
  if (cueRule && os >= HEARTS) rules.push(cueRule);
  const raise = x.cheapest(os);
  const jr = x.jump(os);
  if (jr !== null && levelOf(jr) <= 4 && os >= HEARTS && levelOf(jr) === 4) rules.push(R(jr, 'Подкрепа до гейм', 'Подкрепа с пет карти и слаба неравномерна ръка или сила за гейм: обявете гейм веднага.', [lenC(os, 5), cond('синглтон или шикана', h => h.shape[3] <= 1)]));
  if (jr !== null && levelOf(jr) <= 3) rules.push(R(jr, 'Бариерна подкрепа', 'В конкурентна лицитация подкрепата със скок е слаба: подкрепа с четири карти, под 10 точки.', [lenC(os, 4), hcpC(0, 9)]));
  if (raise !== null && levelOf(raise) <= 3) rules.push(R(raise, 'Подкрепа', `Подкрепа (${support}+) и 6–10 точки.`, [lenC(os, support), dpC(os, 6, 10)]));

  for (const s of [SPADES, HEARTS]) {
    if (s === os || s === ys) continue;
    const c = x.cheapest(s);
    if (c !== null && levelOf(c) === 1) rules.push(R(c, 'Нов цвят', `Пет или повече ${SUIT_NAMES[s]}, 6+ точки: обявете цвета (негативната контра би показала само четири). Форсиращо.`, [hcpC(6), lenC(s, 5)], { forcing: 'one' }));
  }

  // negative double through 2♠
  if (rc.call <= bid(2, SPADES) && ys < NT) {
    const unbidMajors = [HEARTS, SPADES].filter(s => s !== ys && s !== os);
    const unbidMinors = [CLUBS, DIAMONDS].filter(s => s !== ys && s !== os);
    const shows = unbidMajors.length ? unbidMajors : unbidMinors;
    const min = yl === 1 ? 6 : 8;
    rules.push(R(DOUBLE, 'Негативна контра', `Не е наказателна: показва ${min}+ точки и четири карти в ${shows.map(s => SUIT_NAMES[s]).join(' и ')}${shows.length > 1 ? ' (поне 4-4 или 4-3)' : ''}. Позволява да покажете цвят, без да го обявявате на високо ниво.`, [hcpC(min),
      cond(`четири ${shows.map(sym).join('/')}`, h => (shows.length === 1 ? h.len[shows[0]] >= 4 : shows.every(s => h.len[s] >= 3) && shows.some(s => h.len[s] >= 4)), sh => {
        shows.forEach(s => (sh.len[s] = [Math.max(3, sh.len[s][0]), sh.len[s][1]]));
      }, h => `имате ${shows.map(s => h.len[s] + sym(s)).join(' ')}`)], { tag: 'negX', forcing: 'one', data: { a: shows[0], b: shows[1] ?? -1 } }));
  }

  if (cueRule && os < HEARTS) rules.push(cueRule);
  const nt = x.cheapest(NT);
  if (nt !== null) {
    const l = levelOf(nt);
    if (l === 1) rules.push(R(nt, '1БК', '8–10 точки със стопер в техния цвят.', [hcpC(8, 10), stopC([ys])]));
    if (l <= 2) rules.push(R(bid(2, NT), '2БК', '11–12 точки със стопер: инвитационно.', [hcpC(11, 12), stopC([ys])]));
    if (l <= 3) rules.push(R(bid(3, NT), '3БК', '13–15 точки със стопер.', [hcpC(13, 15), stopC([ys])]));
  }
  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    if (s === os || s === ys) continue;
    const c = x.cheapest(s);
    if (c === null) continue;
    const l = levelOf(c);
    if (l === 1) rules.push(R(c, 'Нов цвят', `Четири или повече ${SUIT_NAMES[s]}, 6+ точки. Форсиращо.`, [hcpC(6), lenC(s, 4)], { forcing: 'one' }));
    else if (l === 2) rules.push(R(c, 'Нов цвят', `Пет добри ${SUIT_NAMES[s]} и 10+ точки. Форсиращо.`, [hcpC(10), lenC(s, 5)], { forcing: 'one' }));
  }
  rules.push(R(PASS, 'Пас', 'Няма добра обява след намесата им (може би се надявате партньорът да балансира с контра).', []));
  return rules;
}

/** Opener's rebid after partner's negative double. */
export function openerAfterNegDouble(x: Ctx, negX: CallRecord, open: CallRecord): Rule[] {
  const rules: Rule[] = [];
  const os = strainOf(open.call);
  const theirs = x.theirSuits();
  const shownMajors = [negX.meaning.data!.a, negX.meaning.data!.b].filter(s => s >= 0);
  for (const s of shownMajors) {
    const c = x.cheapest(s);
    if (c === null) continue;
    const l = levelOf(c);
    if (s >= HEARTS && l <= 3) rules.push(R(bid(4, s), 'Гейм', `Подкрепа с четири карти за цвета, който партньорът показа, и силна ръка (19+).`, [lenC(s, 4), hcpC(18)]));
    if (l + 1 <= 3) rules.push(R(bid(l + 1, s), 'Скок', `Четири ${SUIT_NAMES[s]} и 16–18: инвитационно.`, [lenC(s, 4), hcpC(16, 18)]));
    rules.push(R(c, 'Показване на фита', `Четири ${SUIT_NAMES[s]}: фитът, който контрата на партньора търсеше.`, [lenC(s, 4)]));
  }
  rules.push(R(PASS, 'Наказателен пас', 'Дълги, силни козове в техния цвят: превърнете негативната контра в наказателна.', [cond('4+ карти с две фигури в техния цвят', h => theirs.some(s => h.len[s] >= 4 && suitHonours(h, s) >= 2)), hcpC(13)]));
  const nt = x.cheapest(NT);
  if (nt !== null && levelOf(nt) <= 2) rules.push(R(nt, 'Без коз', 'Балансиран минимум със стопер в техния цвят.', [hcpC(12, 14), stopC(theirs)]));
  const own = x.cheapest(os);
  if (own !== null) rules.push(R(own, 'Повторете цвета си', 'Шест карти в цвета ви или нищо по-добро.', []));
  return rules;
}

/** Shared helper so other modules can reuse the stopper condition. */
export { stopC, hasStopper, dummyPoints, goodSuitC };
export type { HandInfo };

/** The takeout doubler's second bid, after partner's forced response. */
export function doublerRebid(x: Ctx, resp: CallRecord): Rule[] {
  const rules: Rule[] = [];
  if (!isBid(resp.call)) return rules;
  const rs = strainOf(resp.call);
  const theirs = x.theirSuits();
  if (resp.meaning.forcing === 'game' || resp.meaning.forcing === 'one') {
    // partner's cue bid: describe the hand, never pass
    rules.push(R(x.cheapest(NT)!, 'Без коз', 'Кю-бидът на партньора е форсиращ: без коз показва стопер в техния цвят.', [stopC(theirs)]));
    for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(su)) continue;
      const c = x.cheapest(su);
      if (c === null) continue;
      rules.push(R(c, 'Показване на цвят', `Кю-бидът на партньора е форсиращ: покажете най-добрия си необявен цвят (${SUIT_NAMES[su]}), първо мажорите.`, [lenC(su, 4), cond(`${sym(su)} е най-добрият ви необявен цвят`, h => bestUnbid(h, [CLUBS, DIAMONDS, HEARTS, SPADES].filter(o => !theirs.includes(o))) === su)]));
    }
    for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      if (theirs.includes(su)) continue;
      const c = x.cheapest(su);
      if (c !== null) rules.push(R(c, 'Показване на цвят', 'Принудени сте да обявите: най-дългият ви необявен цвят.', []));
    }
    return rules.filter(r => r.call !== null);
  }
  if (rs < NT) {
    const g = rs >= HEARTS ? 4 : 5;
    rules.push(R(bid(g, rs), 'Гейм в цвета на партньора', `Подкрепа с четири карти и 19+ точки: партньорът не обеща нищо, но силата ви прави гейма вероятен.`, [lenC(rs, 4), dpC(rs, 19)]));
    const raise = x.cheapest(rs);
    if (raise !== null && levelOf(raise) <= 3) rules.push(R(raise, 'Инвитационна подкрепа', `Подкрепа с четири карти и 16–18 точки: кани партньора да обяви гейм с 6–8.`, [lenC(rs, 4), dpC(rs, 16, 18)], { tag: 'invite' }));
  }
  const nt = x.cheapest(NT);
  if (nt !== null && levelOf(nt) <= 2) rules.push(R(nt, 'Без коз', `18–20 точки, балансирана ръка, със стопер: твърде силна за интервенция 1БК, затова първо контрирахте.`, [hcpC(18, 20), balancedC(), stopC(theirs)]));
  for (const su of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    if (theirs.includes(su) || su === rs) continue;
    const c = x.cheapest(su);
    if (c === null || levelOf(c) > 3) continue;
    rules.push(R(c, 'Силна контра, после свой цвят', `Контра и после собствен цвят показва ръка, твърде силна за проста интервенция (17+), с пет или повече добри ${SUIT_NAMES[su]}.`, [hcpC(17), lenC(su, 5)]));
  }
  rules.push(R(PASS, 'Пас', 'Нормална информативна контра без допълнителна сила: партньорът избра цвета.', [hcpC(0, 16)]));
  return rules;
}

/** The overcaller's rebid after partner's cue-bid raise (a limit raise or better). */
export function overcallerAfterCueRaise(x: Ctx, cue: CallRecord): Rule[] {
  const suit = cue.meaning.data!.suit;
  const game = suit >= HEARTS ? 4 : 5;
  const rules: Rule[] = [];
  if (x.isLegal(bid(game, suit))) rules.push(R(bid(game, suit), 'Приемане', `Партньорът показа добра подкрепа (10+): с пълноценна интервенция (13+ точки) обявете гейм.`, [tpC(13)]));
  const c = x.cheapest(suit);
  if (c !== null && c < bid(game, suit)) rules.push(R(c, 'Минимум', 'Минимална интервенция: обявете нашия цвят на най-ниското ниво. С допълнителна сила партньорът може още да обяви гейм.', [], { shows: s => { s.hcp = [s.hcp[0], Math.min(s.hcp[1], 12)]; } }));
  return rules;
}
