// Opening bids (SAYC).

import { bid, PASS } from '../core/auction';
import { SUIT_SYMBOLS, SUIT_NAMES, CLUBS, DIAMONDS, HEARTS, SPADES } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { suitHonours } from '../core/eval';
import type { Ctx } from './context';
import { R, hcpC, lenC, balancedC, cond, type Rule } from './types';

/** The suit SAYC opens at the one level. */
export function openingSuit(h: HandInfo): number {
  const max = Math.max(...h.len);
  if (max >= 5) {
    // longest suit; with two of equal length (5-5, 6-6) open the higher-ranking
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) if (h.len[s] === max) return s;
  }
  if (h.len[DIAMONDS] > h.len[CLUBS]) return DIAMONDS;
  if (h.len[CLUBS] > h.len[DIAMONDS]) return CLUBS;
  return h.len[CLUBS] === 3 ? CLUBS : DIAMONDS;
}

const ruleOf20 = (h: HandInfo) => h.hcp + h.shape[0] + h.shape[1] >= 20;
const ruleOf15 = (h: HandInfo) => h.hcp + h.len[SPADES] >= 15;

/** Seat position relative to dealer: 1st..4th. */
export function seatPosition(x: Ctx): number {
  return x.records.length + 1;
}

export function openingRules(x: Ctx): Rule[] {
  const pos = seatPosition(x);
  const rules: Rule[] = [];

  rules.push(
    R(bid(2, CLUBS), 'Силно 2♣', 'Изкуствено и форсиращо: най-силното откриване. Показва 22+ точки или ръка, която сама взема около девет взятки. Не казва нищо за спатиите.', [
      cond('22+ т. или 18+ т. с най-много 3 губещи', h => h.hcp >= 22 || (h.hcp >= 18 && h.ltc <= 3), s => {
        s.hcp = [Math.max(s.hcp[0], 18), s.hcp[1]];
      }, h => `имате ${h.hcp} т. и ${h.ltc} губещи`),
    ], { artificial: true, forcing: 'one', tag: 'strong2c' }),
  );

  rules.push(R(bid(2, 4), 'Откриване 2БК', 'Балансирана ръка, твърде силна за 1БК: 20–21 точки.', [hcpC(20, 21), balancedC()]));

  rules.push(R(bid(1, 4), 'Откриване 1БК', 'Най-полезното откриване: 15–17 точки и балансирана ръка. С 1БК описвате ръката си с една обява и партньорът обикновено може сам да определи договора.', [hcpC(15, 17), balancedC()]));

  const openOk = (h: HandInfo) => {
    if (h.hcp > 21) return false;
    if (pos === 4) return h.hcp >= 10 && (h.hcp >= 12 ? ruleOf15(h) || h.hcp >= 13 : ruleOf15(h));
    return h.hcp >= 12 || (h.hcp >= 10 && ruleOf20(h));
  };
  const openText = pos === 4 ? '12–21 т. и правилото на 15 (т. + пики ≥ 15) на четвърта позиция' : '12–21 т. (или 10–11 по правилото на 20)';
  const strengthCond = cond(openText, openOk, s => {
    s.hcp = [Math.max(s.hcp[0], 10), Math.min(s.hcp[1], 21)];
  }, h => `имате ${h.hcp} т.${h.hcp < 12 ? `; правилото на 20 дава ${h.hcp + h.shape[0] + h.shape[1]}` : ''}`);

  for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
    const major = s >= HEARTS;
    const lenCond = major ? lenC(s, 5) : lenC(s, 3);
    const which = cond(`${SUIT_SYMBOLS[s]} е цветът за откриване (${major ? 'най-дългият; с 5-5 откривате по-високия' : s === DIAMONDS ? 'без петкартов мажор; по-дългият минор или 4-4 в минорите' : 'без петкартов мажор; по-дългият минор или 3-3 в минорите'})`, h => openingSuit(h) === s, sh => {
      if (!major) {
        sh.len[HEARTS] = [sh.len[HEARTS][0], Math.min(sh.len[HEARTS][1], 4)];
        sh.len[SPADES] = [sh.len[SPADES][0], Math.min(sh.len[SPADES][1], 4)];
      } else if (s === HEARTS) sh.len[SPADES] = [sh.len[SPADES][0], Math.min(sh.len[SPADES][1], 5)];
    }, h => `вашият цвят за откриване е ${SUIT_SYMBOLS[openingSuit(h)]}`);
    const desc = major
      ? `Откриването в мажор на ниво 1 обещава пет или повече ${SUIT_NAMES[s]} и ръка за откриване (12–21 точки). С 5-5 откривате по-високия цвят.`
      : s === DIAMONDS
        ? 'Откриването 1♦ показва ръка за откриване без петкартов мажор. Обикновено четири или повече кари (три само при разпределение точно 4-4-3-2 с 3 кари и 2 спатии).'
        : 'Откриването 1♣ показва ръка за откриване без петкартов мажор, със спатии поне колкото карите (с 3-3 в минорите се открива 1♣). Спатиите може да са само три.';
    rules.push(R(bid(1, s), `Откриване 1${SUIT_SYMBOLS[s]}`, desc, [strengthCond, lenCond, which]));
  }

  if (pos < 4) {
    const decent = (s: number) => cond(`прилични ${SUIT_NAMES[s]} (две от петте най-високи фигури)`, h => suitHonours(h, s) >= 2, undefined, h => `имате ${suitHonours(h, s)} от петте най-високи фигури`);
    for (const s of [SPADES, HEARTS, DIAMONDS]) {
      rules.push(
        R(bid(2, s), `Слабо две`, `Бариерна обява: шест добри ${SUIT_NAMES[s]} и 5–10 точки. Отнема пространство на противниците и казва на партньора точно какво държите.`, [
          hcpC(5, 10),
          lenC(s, 6, 6),
          decent(s),
          cond('без четирикартов мажор встрани', h => [HEARTS, SPADES].every(m => m === s || h.len[m] < 4), undefined, h => `имате ${h.len[SPADES]}♠ и ${h.len[HEARTS]}♥`),
        ], { tag: 'weak2' }),
      );
    }
    for (const s of [SPADES, HEARTS, DIAMONDS, CLUBS]) {
      rules.push(
        R(bid(3, s), 'Бариерно откриване на ниво 3', `Бариерно откриване: седем ${SUIT_NAMES[s]} и слаба ръка (5–10 точки). Правилото на 2-3-4: до договора трябва да ви липсват най-много две взятки в неблагоприятна зона, три при еднаква зона и четири в благоприятна.`, [
          hcpC(5, 10),
          lenC(s, 7, 7),
          decent(s),
        ], { tag: 'preempt' }),
      );
    }
    for (const s of [SPADES, HEARTS]) {
      rules.push(
        R(bid(4, s), 'Бариерно откриване на ниво 4', `Дълги ${SUIT_NAMES[s]} (осем карти или седем при много неравномерна ръка) и под 11 точки: обявете гейм веднага и затруднете противниците.`, [
          hcpC(5, 10),
          cond(`8+ ${SUIT_SYMBOLS[s]} или 7 с шикана или синглтон встрани`, h => h.len[s] >= 8 || (h.len[s] === 7 && h.shape[3] <= 1), sh => {
            sh.len[s] = [Math.max(sh.len[s][0], 7), sh.len[s][1]];
          }, h => `имате ${h.len[s]} ${SUIT_SYMBOLS[s]}`),
        ], { tag: 'preempt' }),
      );
    }
  }

  rules.push(
    R(PASS, 'Пас', pos === 4 ? 'Недостатъчно за откриване на четвърта позиция (правилото на 15): пасувайте и раздаването приключва.' : 'Ръката не е достатъчно силна за откриване и няма подходящо бариерно откриване.', [], {
      shows: s => {
        s.hcp = [s.hcp[0], Math.min(s.hcp[1], pos === 4 ? 14 : 12)];
      },
    }),
  );
  return rules;
}
