// Responses to partner's opening bid when the opponents stay out.

import { bid, PASS } from '../core/auction';
import { SUIT_SYMBOLS, SUIT_NAMES, CLUBS, DIAMONDS, HEARTS, SPADES, NT } from '../core/cards';
import type { HandInfo } from '../core/eval';
import { hasStopper, goodSuit, dummyPoints } from '../core/eval';
import type { Ctx } from './context';
import { R, hcpC, lenC, balancedC, semiBalancedC, cond, dpC, goodSuitC, type Rule } from './types';

const sym = (s: number) => SUIT_SYMBOLS[s];

/** Which major to respond at the one level: longer first; 4-4 → hearts (up the line); 5-5 → spades. */
export function majorToShow(h: HandInfo): number | null {
  const s = h.len[SPADES], he = h.len[HEARTS];
  if (s < 4 && he < 4) return null;
  if (s > he) return SPADES;
  if (he > s) return HEARTS;
  return s >= 5 ? SPADES : HEARTS;
}

/** Best new suit among candidates (each with a minimum length): longest; 5-5 → higher, 4-4 → lower. */
export function bestNewSuit(h: HandInfo, cands: { suit: number; min: number }[]): number | null {
  const ok = cands.filter(c => h.len[c.suit] >= c.min);
  if (!ok.length) return null;
  const max = Math.max(...ok.map(c => h.len[c.suit]));
  const top = ok.filter(c => h.len[c.suit] === max).map(c => c.suit);
  return max >= 5 ? Math.max(...top) : Math.min(...top);
}

const noFourMajor = cond('без четирикартов мажор', h => h.len[HEARTS] < 4 && h.len[SPADES] < 4, s => {
  s.len[HEARTS] = [s.len[HEARTS][0], Math.min(3, s.len[HEARTS][1])];
  s.len[SPADES] = [s.len[SPADES][0], Math.min(3, s.len[SPADES][1])];
}, h => `имате ${h.len[SPADES]}♠ ${h.len[HEARTS]}♥`);

const passResponse = (desc: string, max = 5): Rule =>
  R(PASS, 'Пас', desc, [], {
    shows: s => {
      s.hcp = [s.hcp[0], Math.min(s.hcp[1], max)];
    },
  });

// ---------------------------------------------------------------------------

export function responsesToOneSuit(x: Ctx, open: number): Rule[] {
  const rules: Rule[] = [];
  const major = open >= HEARTS;
  const passed = x.passedHand(x.seat);
  const singletonOrVoid = cond('синглтон или шикана', h => h.shape[3] <= 1, undefined, h => `най-късият ви цвят е с дължина ${h.shape[3]}`);

  if (major) {
    const M = open;
    if (!passed) {
      rules.push(
        R(bid(2, NT), 'Якоби 2БК', `Изкуствена подкрепа, форсираща до гейм: четири или повече ${SUIT_NAMES[M]} и 13+ точки. Сега откриващият описва ръката си (късота, сила), за да прецените слема.`, [lenC(M, 4), hcpC(13)], {
          artificial: true, forcing: 'game', tag: 'jacoby2nt', data: { suit: M },
        }),
      );
    }
    for (const s of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
      if (s === M) continue;
      const jump = s < M ? 3 : 2;
      if (passed) continue;
      rules.push(
        R(bid(jump, s), 'Скок в нов цвят', `Много силна ръка (19+ точки) с добри ${SUIT_NAMES[s]}: казва на партньора, че слемът е вероятен.`, [hcpC(19), lenC(s, 5), goodSuitC(s)], { forcing: 'game' }),
      );
    }
    rules.push(
      R(bid(4, M), 'Бариерна подкрепа до гейм', `Пет или повече коза, но слаба ръка (под 10 точки) с разпределение. Геймът веднага отнема пространството на противниците.`, [lenC(M, 5), hcpC(0, 9), singletonOrVoid]),
    );
    rules.push(
      R(bid(3, M), 'Лимитна подкрепа', `Подкрепа с четири карти и 10–12 точки (с късотите): инвитация за гейм. Откриващият обявява гейм с малко повече от минимум.`, [lenC(M, 4), dpC(M, 10, 12)]),
    );
    rules.push(
      R(bid(2, M), 'Проста подкрепа', `Три или повече ${SUIT_NAMES[M]} и 6–10 точки (с късотите). Най-важното е веднага да покажете фита.`, [lenC(M, 3), dpC(M, 6, 10)]),
    );
    if (M === HEARTS) {
      rules.push(R(bid(1, SPADES), 'Нов цвят на ниво 1', 'Четири или повече пики и 6+ точки. Форсиращо за един кръг.', [lenC(SPADES, 4), hcpC(6)], { forcing: 'one' }));
    }
    const cands = M === SPADES ? [{ suit: HEARTS, min: 5 }, { suit: DIAMONDS, min: 4 }, { suit: CLUBS, min: 4 }] : [{ suit: DIAMONDS, min: 4 }, { suit: CLUBS, min: 4 }];
    for (const c of cands) {
      rules.push(
        R(bid(2, c.suit), 'Две над едно', `Нов цвят на ниво 2: ${c.min}+ ${SUIT_NAMES[c.suit]} и 11+ точки. Форсиращо за един кръг${passed ? '' : ' — откриващият трябва да обяви отново'}.`, [
          hcpC(11),
          lenC(c.suit, c.min),
          cond(`${sym(c.suit)} е най-добрият ви цвят за показване`, h => bestNewSuit(h, cands) === c.suit, undefined, h => `най-добрият ви нов цвят: ${bestNewSuit(h, cands) === null ? 'няма' : sym(bestNewSuit(h, cands)!)}`),
        ], { forcing: passed ? 'none' : 'one' }),
      );
    }
    rules.push(
      R(bid(1, NT), 'Отговор 1БК', `6–10 точки без подкрепа с три карти${M === HEARTS ? ' и без четири пики' : ''}. Не е форсиращо: „сборна“ обява за слаби ръце.`, [hcpC(6, 10)], {
        shows: s => {
          s.len[M] = [s.len[M][0], Math.min(s.len[M][1], 2)];
          if (M === HEARTS) s.len[SPADES] = [s.len[SPADES][0], Math.min(s.len[SPADES][1], 3)];
        },
      }),
    );
    rules.push(
      R(bid(2, CLUBS), 'Две над едно (3 спатии)', 'Балансирана ръка с 11+ точки и без по-добра обява: 2♣ може да е само с три карти, когато нищо друго не описва ръката.', [hcpC(11), lenC(CLUBS, 3)], { forcing: 'one' }),
    );
    rules.push(passResponse('Под 6 точки: твърде слаба ръка за отговор. Партньорът може все пак да има силна ръка и да обяви отново, ако противниците се включат.'));
    return rules;
  }

  // minor opening
  const m = open;
  if (!passed) {
    for (const s of [DIAMONDS, HEARTS, SPADES]) {
      if (s <= m) continue;
      rules.push(R(bid(2, s), 'Скок в нов цвят', `19+ точки и добри ${SUIT_NAMES[s]}: слемът е вероятен.`, [hcpC(19), lenC(s, 5), goodSuitC(s)], { forcing: 'game' }));
    }
  }
  for (const M of [HEARTS, SPADES]) {
    rules.push(
      R(bid(1, M), `Отговор 1${sym(M)}`, `Четири или повече ${SUIT_NAMES[M]} и 6+ точки. Фитът в мажор е на първо място; форсиращо за един кръг.`, [
        hcpC(6),
        lenC(M, 4),
        cond(`${sym(M)} е мажорът за показване (първо по-дългият; при 4-4 купи, при 5-5 пики)`, h => majorToShow(h) === M, undefined, h => `бихте показали ${majorToShow(h) === null ? 'никакъв мажор' : sym(majorToShow(h)!)}`),
      ], { forcing: passed ? 'none' : 'one' }),
    );
  }
  if (m === CLUBS) {
    rules.push(
      R(bid(1, DIAMONDS), 'Отговор 1♦', 'Четири или повече кари, 6+ точки и без четирикартов мажор. Форсиращо.', [hcpC(6), lenC(DIAMONDS, 4), noFourMajor], { forcing: passed ? 'none' : 'one' }),
    );
  }
  rules.push(R(bid(3, NT), 'Отговор 3БК', '16–17 точки, балансирана ръка, без четирикартов мажор: гейм без коз.', [hcpC(16, 17), balancedC(), noFourMajor]));
  if (!passed) rules.push(R(bid(2, NT), 'Отговор 2БК', '13–15 точки, балансирана ръка, без четирикартов мажор. Форсиращо до гейм.', [hcpC(13, 15), balancedC(), noFourMajor], { forcing: 'game' }));
  const raiseLen = m === CLUBS ? 5 : 4;
  rules.push(R(bid(3, m), 'Лимитна подкрепа', `${raiseLen}+ ${SUIT_NAMES[m]}, 10–12 точки, без четирикартов мажор: инвитация за 3БК или гейм в минора.`, [lenC(m, raiseLen), hcpC(10, 12), noFourMajor]));
  rules.push(R(bid(2, m), 'Проста подкрепа', `${raiseLen}+ ${SUIT_NAMES[m]}, 6–10 точки, без четирикартов мажор.`, [lenC(m, raiseLen), hcpC(6, 10), noFourMajor]));
  if (m === DIAMONDS) {
    rules.push(R(bid(2, CLUBS), 'Две над едно', '4+ спатии и 11+ точки, без четирикартов мажор. Форсиращо.', [hcpC(11), lenC(CLUBS, 4), noFourMajor], { forcing: passed ? 'none' : 'one' }));
  }
  rules.push(R(bid(1, NT), 'Отговор 1БК', '6–10 точки, без четирикартов мажор, обикновено балансирана ръка. Не е форсиращо.', [hcpC(6, 10), noFourMajor]));
  // awkward 11-12 balanced hands: temporise with a new minor
  if (m === CLUBS) rules.push(R(bid(1, DIAMONDS), 'Отговор 1♦', 'Изчаквателен отговор: 11–12 точки, без четирикартов мажор — следващата ви обява ще е без коз.', [hcpC(11, 12), lenC(DIAMONDS, 3), noFourMajor], { forcing: 'one' }));
  else rules.push(R(bid(2, CLUBS), 'Две над едно', 'Изчаквателен отговор: 11–12 точки, без четирикартов мажор, три или повече спатии.', [hcpC(11, 12), lenC(CLUBS, 3), noFourMajor], { forcing: 'one' }));
  rules.push(R(bid(1, NT), 'Отговор 1БК', 'Няма по-добра обява: 6–12 точки без четирикартов мажор.', [hcpC(6, 12)]));
  rules.push(passResponse('Под 6 точки: твърде слаба ръка за отговор.'));
  return rules;
}

// ---------------------------------------------------------------------------

export function responsesTo1NT(x: Ctx): Rule[] {
  const rules: Rule[] = [];
  rules.push(
    R(bid(2, HEARTS), 'Трансфер на Якоби към ♠', 'Пет или повече пики, всякаква сила. Иска от откриващия да обяви 2♠, за да разиграва силната ръка. След това пасувате (слаба ръка), давате инвитация или обявявате гейм.', [
      lenC(SPADES, 5),
      cond('пиките са поне колкото купите', h => h.len[SPADES] >= h.len[HEARTS], undefined, h => `имате ${h.len[SPADES]}♠ ${h.len[HEARTS]}♥`),
    ], { artificial: true, forcing: 'one', tag: 'transfer', data: { suit: SPADES } }),
  );
  rules.push(
    R(bid(2, DIAMONDS), 'Трансфер на Якоби към ♥', 'Пет или повече купи, всякаква сила. Иска от откриващия да обяви 2♥.', [
      lenC(HEARTS, 5),
      cond('купите са повече от пиките', h => h.len[HEARTS] > h.len[SPADES], undefined, h => `имате ${h.len[SPADES]}♠ ${h.len[HEARTS]}♥`),
    ], { artificial: true, forcing: 'one', tag: 'transfer', data: { suit: HEARTS } }),
  );
  rules.push(
    R(bid(2, CLUBS), 'Стейман', 'Пита откриващия за четирикартов мажор. Показва 8+ точки и поне един четирикартов мажор.', [
      hcpC(8),
      cond('четирикартов мажор', h => h.len[HEARTS] >= 4 || h.len[SPADES] >= 4, undefined, h => `имате ${h.len[SPADES]}♠ ${h.len[HEARTS]}♥`),
    ], { artificial: true, forcing: 'one', tag: 'stayman' }),
  );
  rules.push(
    R(bid(2, SPADES), 'Трансфер към минор', 'Слаба ръка с дълъг минор: иска от откриващия да обяви 3♣. Пасувате със спатии или обявявате 3♦ с кари.', [
      hcpC(0, 7),
      cond('шест или повече карти в минор', h => h.len[CLUBS] >= 6 || h.len[DIAMONDS] >= 6, undefined, h => `имате ${h.len[CLUBS]}♣ ${h.len[DIAMONDS]}♦`),
    ], { artificial: true, forcing: 'one', tag: 'minorTransfer' }),
  );
  rules.push(R(bid(7, NT), 'Голям слем', '22+ точки срещу 15–17: общо 37+, достатъчно за всичките тринадесет взятки.', [hcpC(22)]));
  rules.push(R(bid(6, NT), 'Малък слем', '18–21 точки: общо 33+ стигат за дванадесет взятки.', [hcpC(18, 21)]));
  rules.push(R(bid(4, NT), 'Количествено 4БК', 'Не е Блекууд! 16–17 точки, балансирана ръка: инвитация за 6БК. Откриващият обявява 6БК с максимум и пасува с минимум.', [hcpC(16, 17)], { tag: 'quant' }));
  rules.push(R(bid(3, NT), '3БК', '10–15 точки, без четирикартов мажор (или с равномерна ръка): достатъчно за гейм, но не и за слем.', [hcpC(10, 15)]));
  rules.push(R(bid(2, NT), 'Инвитационно 2БК', '8–9 точки, без четирикартов мажор: инвитация за 3БК. Откриващият пасува с 15 и обявява 3БК с 16–17.', [hcpC(8, 9)], { tag: 'nt-invite' }));
  rules.push(passResponse('0–7 точки без петкартов мажор: геймът е недостижим, а 1БК е толкова добър договор, колкото и всеки друг.', 7));
  return rules;
}

export function responsesTo2NT(x: Ctx): Rule[] {
  const rules: Rule[] = [];
  rules.push(
    R(bid(3, HEARTS), 'Трансфер към ♠', 'Пет или повече пики: откриващият обявява 3♠.', [lenC(SPADES, 5), cond('пиките са поне колкото купите', h => h.len[SPADES] >= h.len[HEARTS])], {
      artificial: true, forcing: 'one', tag: 'transfer', data: { suit: SPADES },
    }),
  );
  rules.push(
    R(bid(3, DIAMONDS), 'Трансфер към ♥', 'Пет или повече купи: откриващият обявява 3♥.', [lenC(HEARTS, 5), cond('купите са повече от пиките', h => h.len[HEARTS] > h.len[SPADES])], {
      artificial: true, forcing: 'one', tag: 'transfer', data: { suit: HEARTS },
    }),
  );
  rules.push(
    R(bid(3, CLUBS), 'Стейман', 'Пита за четирикартов мажор. 4+ точки (достатъчно за гейм срещу 20–21).', [
      hcpC(4),
      cond('четирикартов мажор', h => h.len[HEARTS] >= 4 || h.len[SPADES] >= 4),
    ], { artificial: true, forcing: 'one', tag: 'stayman' }),
  );
  rules.push(R(bid(7, NT), 'Голям слем', '17+ точки срещу 20–21: общо 37+.', [hcpC(17)]));
  rules.push(R(bid(6, NT), 'Малък слем', '13–16 точки: общо 33+.', [hcpC(13, 16)]));
  rules.push(R(bid(4, NT), 'Количествено 4БК', '11–12 точки: инвитация за 6БК.', [hcpC(11, 12)], { tag: 'quant' }));
  rules.push(R(bid(3, NT), '3БК', '4–10 точки: достатъчно за гейм.', [hcpC(4, 10)]));
  rules.push(passResponse('0–3 точки: няма гейм.', 3));
  return rules;
}

export function responsesTo2C(x: Ctx): Rule[] {
  const rules: Rule[] = [];
  for (const s of [HEARTS, SPADES, CLUBS, DIAMONDS]) {
    const level = s >= HEARTS ? 2 : 3;
    rules.push(
      R(bid(level, s), 'Положителен отговор', `8+ точки и пет добри ${SUIT_NAMES[s]}: слемът е много вероятен.`, [hcpC(8), lenC(s, 5), goodSuitC(s),
        cond(`${sym(s)} е най-дългият ви добър цвят`, h => [0, 1, 2, 3].every(o => o === s || h.len[o] < h.len[s] || !goodSuit(h, o) || (h.len[o] === h.len[s] && o < s)))], { forcing: 'game' }),
    );
  }
  rules.push(R(bid(2, DIAMONDS), 'Изчаквателно 2♦', 'Изкуствено: „кажи ми повече“. Не казва нищо за карите или за силата; оставя откриващия първо да опише голямата си ръка.', [], { artificial: true, forcing: 'one', tag: 'waiting' }));
  return rules;
}

export function responsesToWeakTwo(x: Ctx, s: number): Rule[] {
  const rules: Rule[] = [];
  const major = s >= HEARTS;
  rules.push(
    R(bid(2, NT), 'Питане за фигура встрани', `Форсиращо, 15+ точки: пита откриващия за силата му. С минимум откриващият обявява 3${sym(s)}; с максимум показва асо или поп встрани.`, [hcpC(15)], {
      artificial: true, forcing: 'one', tag: 'featureAsk', data: { suit: s },
    }),
  );
  if (major) {
    rules.push(R(bid(4, s), 'Подкрепа до гейм', `Обявете гейм: или с 4+ коза (за да затрудните противниците), или с 16+ точки и подкрепа.`, [
      cond('4+ коза или 16+ т. с 2+ коза', h => h.len[s] >= 4 || (h.hcp >= 16 && h.len[s] >= 2)),
    ]));
  }
  rules.push(R(bid(3, NT), '3БК', '16+ точки и стопери в другите цветове: за игра.', [hcpC(16), semiBalancedC(), cond('стопери в другите три цвята', h => [0, 1, 2, 3].every(o => o === s || hasStopper(h, o)))]));
  for (const o of [CLUBS, DIAMONDS, HEARTS, SPADES]) {
    if (o === s) continue;
    const c = x.cheapest(o);
    if (c === null) continue;
    rules.push(R(c, 'Нов цвят', `Пет добри ${SUIT_NAMES[o]} и 16+ точки. Форсиращо.`, [hcpC(16), lenC(o, 5), goodSuitC(o)], { forcing: 'one' }));
  }
  rules.push(R(bid(3, s), 'Бариерна подкрепа', `Подкрепа с три карти: подкрепата на ниво 3 (девет коза — Закон за общите взятки) пречи на противниците. Не е инвитационно.`, [lenC(s, 3), hcpC(0, 14)]));
  rules.push(passResponse('Няма интерес към гейм и няма причина за подкрепа.', 14));
  return rules;
}

export function responsesToPreempt(x: Ctx, level: number, s: number): Rule[] {
  const rules: Rule[] = [];
  const major = s >= HEARTS;
  if (level === 3 && major) {
    rules.push(R(bid(4, s), 'Гейм в цвета на партньора', 'Три или повече коза с 14+ точки или 4+ коза за бариерна подкрепа.', [cond('3+ коза с 14+ т. или 4+ коза', h => (h.len[s] >= 3 && h.hcp >= 14) || h.len[s] >= 4)]));
  }
  if (level === 3 && !major) {
    rules.push(R(bid(3, NT), '3БК', '16+ точки със стопери в другите цветове — дългият минор на партньора би трябвало да даде взятки.', [hcpC(16), cond('стопери в другите цветове', h => [0, 1, 2, 3].every(o => o === s || hasStopper(h, o)))]));
    rules.push(R(bid(5, s), 'Гейм в цвета на партньора', 'Подкрепа с четири карти и силна или много неравномерна ръка.', [lenC(s, 4), cond('16+ т. или шикана/синглтон', h => h.hcp >= 16 || h.shape[3] <= 1)]));
  }
  if (level === 3 && major) {
    rules.push(R(bid(3, NT), '3БК', '16+ точки със стопери извън цвета на партньора и дублетон в него.', [hcpC(16), lenC(s, 0, 2), cond('стопери в другите цветове', h => [0, 1, 2, 3].every(o => o === s || hasStopper(h, o)))]));
  }
  rules.push(passResponse('Партньорът показа слаба ръка с дълъг цвят: без силна ръка и фит пасувайте.', 15));
  return rules;
}

/** Dummy points helper for other modules. */
export { dummyPoints };
