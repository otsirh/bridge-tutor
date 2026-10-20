// The Learn room: lessons with quizzes, a glossary, and drills that use the
// same engines as the table (bidding, opening leads, declarer counting).

import { type Card, type Seat, S, E, N, W, SEAT_NAMES, SUIT_SYMBOLS, DIAGRAM_SUIT_ORDER, dealCards, mulberry32, boardDealer, boardVulnerability, isRed, cardName, suitOf, rankLabel } from '../core/cards';
import { Auction, type Call, PASS, DOUBLE, REDOUBLE, bid, callName, contractName, parseCall, type Contract } from '../core/auction';
import { readAuction, advise, judgeCall, type BidAdvice } from '../bidding/engine';
import { describeShown } from '../bidding/types';
import { openingLeadChoices, type LeadChoice } from '../engine/leads';
import { ddCardValues } from '../engine/playEngine';
import { makePlan, type Plan } from '../tutor/planner';
import { LESSONS, GLOSSARY, type Lesson } from '../learn/lessons';
import { h, suitText, colorSuitsIn } from './dom';
import { vulLabel } from './review';
import { handEl, diagramHand, cardText } from './cards';
import type { UIState } from './app';

export interface LearnActions {
  rerender(): void;
  close(): void;
}

// ---------------------------------------------------------------------------
// lesson markup

function parseHolding(spec: string): Record<string, string> {
  const out: Record<string, string> = { S: '', H: '', D: '', C: '' };
  for (const part of spec.trim().split(/\s+/)) {
    const [k, v] = part.split(':');
    if (k && v !== undefined) out[k.toUpperCase()] = v === '-' ? '' : v;
  }
  return out;
}

function lessonHand(spec: string, label?: string): HTMLElement {
  const hd = parseHolding(spec);
  const el = h('div', { class: 'lhand' });
  if (label) el.appendChild(h('div', { class: 'lbl' }, label));
  for (const [k, s] of [['S', 3], ['H', 2], ['D', 1], ['C', 0]] as [string, number][]) {
    const cards = hd[k].replace(/T/g, '10').split('').join(' ').replace(/1 0/g, '10');
    el.appendChild(h('div', null, h('span', { class: `suit ${isRed(s) ? 'red' : 'black'}` }, SUIT_SYMBOLS[s]), ' ', cards || '—'));
  }
  return el;
}

function enhanceLesson(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('div.hand').forEach(el => {
    el.replaceWith(lessonHand(el.dataset.cards ?? '', el.dataset.label));
  });
  root.querySelectorAll<HTMLElement>('div.deal').forEach(el => {
    const d = h('div', { class: 'ldeal' });
    for (const [key, cls, name] of [['n', 'n', 'Север'], ['w', 'w', 'Запад'], ['e', 'e', 'Изток'], ['s', 's', 'Юг']]) {
      const spec = el.dataset[key];
      if (spec) d.appendChild(h('div', { class: cls }, lessonHand(spec, name)));
    }
    d.appendChild(h('div', { class: 'c' }));
    const wrap = h('div', { class: 'deal-wrap' }, d, el.dataset.caption ? h('div', { class: 'small muted' }, el.dataset.caption) : null);
    el.replaceWith(wrap);
  });
  root.querySelectorAll<HTMLElement>('div.auction').forEach(el => {
    const calls = (el.dataset.calls ?? '').trim().split(/\s+/).filter(Boolean);
    const dealerIdx = 'NESW'.indexOf((el.dataset.dealer ?? 'N').toUpperCase());
    const order = ['W', 'N', 'E', 'S'];
    const orderBg: Record<string, string> = { W: 'З', N: 'С', E: 'И', S: 'Ю' };
    const start = order.indexOf('NESW'[Math.max(0, dealerIdx)]);
    const cells: string[] = [...Array(start).fill(''), ...calls.map(c => {
      try {
        const call = parseCall(c);
        return call === PASS ? 'Пас' : callName(call);
      } catch {
        return c;
      }
    })];
    const rows: HTMLElement[] = [];
    for (let i = 0; i < cells.length; i += 4) rows.push(h('tr', null, cells.slice(i, i + 4).map(c => h('td', null, c))));
    el.replaceWith(h('table', { class: 'lauction auction-d' }, h('thead', null, h('tr', null, order.map(o => h('th', null, orderBg[o])))), h('tbody', null, rows)));
  });
  colorSuitsIn(root);
}

const quizAnswers = new Map<string, number>();

const TOPIC_BG: Record<string, string> = {
  Basics: 'Основи',
  Bidding: 'Лицитация',
  'Competitive bidding': 'Състезателна лицитация',
  'Slam bidding': 'Слемове',
  'Declarer play': 'Разиграване',
  Defense: 'Защита',
  'Scoring & tactics': 'Отчитане и тактика',
};
const LEVEL_BG: Record<string, string> = { Beginner: 'Начинаещи', Intermediate: 'Напреднали', Advanced: 'Експерти' };

function lessonView(l: Lesson, act: LearnActions): HTMLElement {
  const body = h('div', { class: 'lesson-body', html: l.body });
  enhanceLesson(body);
  const quiz = l.quiz.length
    ? h('div', { class: 'quiz' }, h('h3', null, 'Проверете се'), l.quiz.map((q, qi) => {
      const key = `${l.id}:${qi}`;
      const chosen = quizAnswers.get(key);
      return h('div', { class: 'q' }, h('div', null, suitText(q.q)), h('div', { class: 'opts' }, q.options.map((o, oi) => h('button', {
        class: `opt ${chosen !== undefined && oi === q.answer ? 'right' : ''} ${chosen === oi && oi !== q.answer ? 'wrong' : ''}`,
        type: 'button',
        onclick: () => {
          quizAnswers.set(key, oi);
          act.rerender();
        },
      }, suitText(o)))), chosen !== undefined ? h('div', { class: 'explain' }, h('b', null, chosen === q.answer ? 'Вярно. ' : 'Не съвсем. '), suitText(q.explain)) : null);
    }))
    : null;
  return h('article', null,
    h('div', { class: 'small muted' }, `${TOPIC_BG[l.topic] ?? l.topic} · ${LEVEL_BG[l.level] ?? l.level}`),
    h('h2', { style: 'font-family:var(--f-display);font-weight:400;font-size:30px;margin:4px 0 6px' }, suitText(l.title)),
    h('p', { style: 'margin:0 0 10px;color:var(--ink-2)' }, suitText(l.summary)),
    l.keyPoints.length ? h('div', { class: 'box' }, h('b', null, 'Основното'), h('ul', { style: 'margin:6px 0 0;padding-left:18px' }, l.keyPoints.map(k => h('li', null, suitText(k))))) : null,
    body, quiz);
}

// ---------------------------------------------------------------------------
// drills

interface BidDrill {
  deal: Card[][];
  auction: Auction;
  vul: ReturnType<typeof boardVulnerability>;
  answer: Call | null;
  advice: BidAdvice;
}
interface LeadDrill {
  deal: Card[][];
  auction: Auction;
  vul: ReturnType<typeof boardVulnerability>;
  contract: Contract;
  answer: Card | null;
  book: LeadChoice[];
  dd: { card: Card; def: number }[] | null;
}
interface CountDrill {
  deal: Card[][];
  contract: Contract;
  lead: Card;
  plan: Plan;
  answer: number | null;
}

const drills: { bid: BidDrill | null; lead: LeadDrill | null; count: CountDrill | null; score: Record<string, [number, number]> } = { bid: null, lead: null, count: null, score: { bid: [0, 0], lead: [0, 0], count: [0, 0] } };

function bidAll(deal: Card[][], dealer: Seat, vul: ReturnType<typeof boardVulnerability>, stopAt?: (a: Auction, adv: BidAdvice) => boolean): Auction {
  const a = new Auction(dealer);
  while (!a.isComplete()) {
    const adv = advise(deal[a.nextSeat], readAuction(a, vul).ctx);
    if (stopAt && stopAt(a, adv)) return a;
    a.push(adv.call);
  }
  return a;
}

function newBidDrill(): BidDrill {
  const rnd = mulberry32((Math.random() * 2 ** 31) | 0);
  for (let i = 0; i < 400; i++) {
    const deal = dealCards(rnd);
    const board = 1 + Math.floor(rnd() * 16);
    const vul = boardVulnerability(board);
    const want = rnd();
    let southTurns = 0;
    const a = bidAll(deal, boardDealer(board), vul, (au, adv) => {
      if (au.nextSeat !== S) return false;
      southTurns++;
      const interesting = adv.call !== PASS || (au.calls.some(c => c >= 3) && want < 0.25);
      return interesting && (southTurns > 1 || want < 0.7);
    });
    if (!a.isComplete() && a.nextSeat === S) return { deal, auction: a, vul, answer: null, advice: advise(deal[S], readAuction(a, vul).ctx) };
  }
  const deal = dealCards(rnd);
  const a = new Auction(S);
  return { deal, auction: a, vul: 'None', answer: null, advice: advise(deal[S], readAuction(a, 'None').ctx) };
}

function newLeadDrill(): LeadDrill {
  const rnd = mulberry32((Math.random() * 2 ** 31) | 0);
  for (let i = 0; i < 600; i++) {
    const deal = dealCards(rnd);
    const board = 1 + Math.floor(rnd() * 16);
    const vul = boardVulnerability(board);
    const a = bidAll(deal, boardDealer(board), vul);
    const c = a.contract();
    if (!c || c.declarer !== E) continue;
    const view = readAuction(a, vul);
    return { deal, auction: a, vul, contract: c, answer: null, book: openingLeadChoices(deal[S], c, view.records, S), dd: null };
  }
  throw new Error('no lead drill found');
}

function newCountDrill(): CountDrill {
  const rnd = mulberry32((Math.random() * 2 ** 31) | 0);
  for (let i = 0; i < 600; i++) {
    const deal = dealCards(rnd);
    const board = 1 + Math.floor(rnd() * 16);
    const vul = boardVulnerability(board);
    const a = bidAll(deal, boardDealer(board), vul);
    const c = a.contract();
    if (!c || c.declarer !== S || c.level < 2) continue;
    const view = readAuction(a, vul);
    const lead = openingLeadChoices(deal[W], c, view.records, W)[0].card;
    return { deal, contract: c, lead, plan: makePlan(deal[S], deal[N], c, [lead]), answer: null };
  }
  throw new Error('no count drill found');
}

function auctionMini(a: Auction, vul: string): HTMLElement {
  const view = readAuction(a, vul as never);
  const order: Seat[] = [W, N, E, S];
  const cells: (HTMLElement | string)[] = [];
  for (let i = 0; i < order.indexOf(a.dealer); i++) cells.push('');
  view.records.forEach(r => cells.push(h('span', { title: `${r.meaning.name}: ${r.meaning.desc}` }, r.call === PASS ? 'Пас' : suitText(callName(r.call)), r.meaning.artificial ? '*' : '')));
  if (!a.isComplete()) cells.push(h('span', { class: 'q' }, '?'));
  const rows: HTMLElement[] = [];
  for (let i = 0; i < cells.length; i += 4) rows.push(h('tr', null, cells.slice(i, i + 4).map(c => h('td', null, c))));
  const notes = view.records.filter(r => r.call !== PASS).map(r => h('li', null, h('b', null, suitText(`${SEAT_NAMES[r.seat]} ${callName(r.call)}`)), ' — ', suitText(r.meaning.name), describeShown(r.meaning.shown) ? h('span', { class: 'muted' }, suitText(` (${describeShown(r.meaning.shown)})`)) : null));
  return h('div', null, h('table', { class: 'lauction' }, h('thead', null, h('tr', null, order.map(s => h('th', null, s === S ? 'Вие' : SEAT_NAMES[s])))), h('tbody', null, rows)),
    notes.length ? h('ul', { class: 'small', style: 'margin:8px 0 0;padding-left:18px' }, notes) : null);
}

function bidDrillView(act: LearnActions): HTMLElement {
  const d = (drills.bid ??= newBidDrill());
  const view = readAuction(d.auction, d.vul);
  const legal = new Set(d.auction.legalCalls());
  const box = h('div', { class: 'biddingbox' });
  for (let level = 1; level <= 7; level++) for (let st = 0; st < 5; st++) {
    const c = bid(level, st);
    box.appendChild(h('button', { class: `bid ${d.answer !== null && c === d.advice.call ? 'rec' : ''}`, type: 'button', disabled: !legal.has(c) || d.answer !== null, onclick: () => answer(c) }, `${level}`, st === 4 ? 'БК' : suitText(SUIT_SYMBOLS[st])));
  }
  const sp = (c: Call, cls: string, label: string) => h('button', { class: `special ${cls} ${d.answer !== null && c === d.advice.call ? 'rec' : ''}`, type: 'button', disabled: !legal.has(c) || d.answer !== null, onclick: () => answer(c) }, label);
  function answer(c: Call) {
    d.answer = c;
    const sc = drills.score.bid;
    sc[1]++;
    if (c === d.advice.call) sc[0]++;
    act.rerender();
  }
  let fb: HTMLElement | null = null;
  if (d.answer !== null) {
    const j = judgeCall(d.deal[S], view.ctx, d.answer);
    fb = h('div', { class: `box ${j.agrees ? '' : 'warnbox'}` },
      h('b', null, j.agrees ? suitText(`Вярно: ${callName(d.answer)} — ${d.advice.rule?.name ?? 'Пас'}`) : suitText(`Системата обявява ${callName(d.advice.call)} — ${d.advice.rule?.name ?? 'Пас'}`)),
      h('p', { style: 'margin:6px 0' }, suitText(d.advice.rule?.desc ?? '')),
      h('ul', { class: 'checks' }, d.advice.checks.map(c => h('li', null, h('span', { class: c.ok ? 'ok' : 'no' }, c.ok ? '✓' : '✗'), h('span', null, suitText(c.text), c.value ? h('span', { class: 'val' }, ` — ${c.value}`) : null)))),
      !j.agrees ? h('p', { class: 'small', style: 'margin:8px 0 0' }, suitText(`Вашето ${callName(d.answer)} ще се разбере като ${j.yourMeaning.name}: ${j.yourMeaning.desc}`)) : null,
      !j.agrees && j.failed.length ? h('p', { class: 'small', style: 'margin:4px 0 0' }, 'Не пасва, защото: ', suitText(j.failed.map(f => `${f.text}${f.value ? ` (${f.value})` : ''}`).join('; '))) : null);
  }
  const [ok, tot] = drills.score.bid;
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, 'Упражнение по лицитация. '), `Вие сте Юг, ${vulLabel(d.vul)}. Каква е вашата обява?`, h('span', { class: 'muted' }, `  Резултат ${ok}/${tot}`)),
    h('div', { style: 'display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start' }, h('div', { style: 'background:var(--felt);border-radius:14px;padding:10px 14px' }, handEl(d.deal[S], () => ({}))), auctionMini(d.auction, d.vul)),
    h('div', { class: 'bidwrap' }, box, h('div', { class: 'specials' }, sp(PASS, 'pass', 'Пас'), sp(DOUBLE, 'dbl', 'Контра'), sp(REDOUBLE, 'rdbl', 'Реконтра'))),
    fb,
    h('div', null, h('button', { class: 'btn primary', type: 'button', onclick: () => { drills.bid = newBidDrill(); act.rerender(); } }, 'Следваща ръка')));
}

function leadDrillView(act: LearnActions): HTMLElement {
  const d = (drills.lead ??= newLeadDrill());
  const pick = (c: Card) => {
    if (d.answer !== null) return;
    d.answer = c;
    drills.score.lead[1]++;
    if (suitOf(c) === suitOf(d.book[0].card)) drills.score.lead[0]++;
    act.rerender();
    void ddCardValues(d.deal.map(x => [...x]), d.contract.strain, S, [], 3).then(moves => {
      d.dd = moves.map(m => ({ card: m.card, def: m.nsTricks })); // East declares, so North-South are the defence
      act.rerender();
    });
  };
  let fb: HTMLElement | null = null;
  if (d.answer !== null) {
    const book = d.book[0];
    const sameSuit = suitOf(d.answer) === suitOf(book.card);
    const need = 13 - (d.contract.level + 6) + 1; // tricks the defence needs
    fb = h('div', { class: `box ${sameSuit ? '' : 'warnbox'}` },
      h('b', null, sameSuit ? (d.answer === book.card ? 'Изводът по учебник.' : suitText(`Правилен цвят; стандартната карта е ${cardName(book.card)}.`)) : suitText(`Изводът по учебник е ${cardName(book.card)}.`)),
      h('p', { style: 'margin:6px 0' }, suitText(book.suitReason), ' ', suitText(book.cardReason)),
      d.dd && new Set(d.dd.map(x => x.def)).size === 1 ? h('p', { class: 'small', style: 'margin:6px 0 0' }, `В това раздаване при открити карти всеки извод дава на защитата ${d.dd[0].def} взятки (нужни са ${need}) — тук изводът няма значение.`) : null,
      d.dd && new Set(d.dd.map(x => x.def)).size > 1 ? h('div', null, h('div', { class: 'small', style: 'margin-top:6px' }, `В това раздаване (при открити карти) защитата се нуждае от ${need} взятки:`),
        h('table', { class: 'stats-table' }, h('tbody', null, [...d.dd].sort((a, b) => b.def - a.def).map(x => h('tr', { class: x.card === d.answer ? 'best' : '' }, h('td', null, cardText(x.card)), h('td', null, `${x.def} взятки за защитата`), h('td', null, x.def >= need ? 'сваля договора' : '')))))) : !d.dd ? h('p', { class: 'small muted' }, 'Анализирам раздаването при открити карти…') : null,
      h('div', { style: 'margin-top:10px' }, h('b', { class: 'small' }, 'Цялото раздаване'), h('div', { class: 'diagram', style: 'margin-top:6px' },
        h('div', { class: 'n' }, diagramHand(d.deal[N], 'Север')), h('div', { class: 'w' }, diagramHand(d.deal[W], 'Запад (мъртвак)')), h('div', { class: 'c' }, suitText(contractName(d.contract))),
        h('div', { class: 'e' }, diagramHand(d.deal[E], 'Изток (разиграващ)')), h('div', { class: 's' }, diagramHand(d.deal[S], 'Вие')))));
  }
  const [ok, tot] = drills.score.lead;
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, 'Упражнение по първи извод. '), suitText(`Изток разиграва ${contractName(d.contract)}. Изберете първия си извод.`), h('span', { class: 'muted' }, `  Правилен цвят ${ok}/${tot}`)),
    h('div', { style: 'display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start' },
      h('div', { style: 'background:var(--felt);border-radius:14px;padding:10px 14px' }, handEl(d.deal[S], c => ({ playable: d.answer === null, rec: d.answer !== null && c === d.book[0].card, onClick: () => pick(c) }))),
      auctionMini(d.auction, d.vul)),
    fb,
    h('div', null, h('button', { class: 'btn primary', type: 'button', onclick: () => { drills.lead = newLeadDrill(); act.rerender(); } }, 'Следваща ръка')));
}

function countDrillView(act: LearnActions): HTMLElement {
  const d = (drills.count ??= newCountDrill());
  const nt = d.contract.strain === 4;
  const q = nt ? 'Колко сигурни взятки имате?' : 'Колко губещи имате? Бройте ги в ръката с повече козове, като високите карти на другата ръка покриват част от тях.';
  const answerBtns = h('div', { style: 'display:flex;gap:6px;flex-wrap:wrap' }, Array.from({ length: 14 }, (_, n) => h('button', {
    class: `btn small ${d.answer !== null && n === d.plan.total ? 'primary' : ''}`, type: 'button', disabled: d.answer !== null,
    onclick: () => {
      d.answer = n;
      drills.score.count[1]++;
      if (n === d.plan.total) drills.score.count[0]++;
      act.rerender();
    },
  }, String(n))));
  let fb: HTMLElement | null = null;
  if (d.answer !== null) {
    fb = h('div', { class: `box plan ${d.answer === d.plan.total ? '' : 'warnbox'}` },
      h('b', null, d.answer === d.plan.total ? 'Вярно.' : `Правилният брой е ${d.plan.total}.`), h('p', { style: 'margin:6px 0' }, suitText(d.plan.summary)),
      h('div', { class: 'suits' }, h('span', { class: 'hd' }, ''), h('span', { class: 'hd' }, 'Вие'), h('span', { class: 'hd' }, 'Мъртвак'), h('span', { class: 'hd' }, nt ? 'Сигурни взятки' : 'Губещи'),
        d.plan.suits.map(sp => [suitText(SUIT_SYMBOLS[sp.suit]), h('span', { class: 'mono' }, sp.decl.map(rankLabel).join(' ') || '—'), h('span', { class: 'mono' }, sp.dummy.map(rankLabel).join(' ') || '—'), h('span', { class: 'mono' }, String(nt ? sp.winners : sp.losers))])),
      d.plan.ideas.length ? h('ul', null, d.plan.ideas.map(i => h('li', null, suitText(i)))) : null);
  }
  const [ok, tot] = drills.score.count;
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, 'Упражнение по броене. '), suitText(`Вие разигравате ${contractName(d.contract)}; Запад извежда ${cardName(d.lead)}. ${q}`), h('span', { class: 'muted' }, `  Резултат ${ok}/${tot}`)),
    h('div', { style: 'display:flex;gap:16px;flex-wrap:wrap' },
      h('div', { style: 'background:var(--felt);border-radius:14px;padding:10px 14px' }, h('div', { class: 'small', style: 'color:var(--felt-muted)' }, 'Мъртвак (Север)'), handEl(d.deal[N], () => ({})), h('div', { class: 'small', style: 'color:var(--felt-muted)' }, 'Вие (Юг)'), handEl(d.deal[S], () => ({})))),
    answerBtns, fb,
    h('div', null, h('button', { class: 'btn primary', type: 'button', onclick: () => { drills.count = newCountDrill(); act.rerender(); } }, 'Следваща ръка')));
}

// ---------------------------------------------------------------------------

export function renderLearn(ui: UIState, act: LearnActions): HTMLElement {
  const tab = ui.learnTab;
  const tabs = h('div', { class: 'tabs', role: 'tablist' }, ([['lessons', 'Уроци'], ['bid', 'Лицитация'], ['lead', 'Първи извод'], ['count', 'Броене'], ['glossary', 'Речник']] as const).map(([k, label]) =>
    h('button', { class: `tab ${tab === k ? 'on' : ''}`, type: 'button', role: 'tab', onclick: () => { ui.learnTab = k; act.rerender(); } }, label)));
  let body: HTMLElement;
  if (tab === 'lessons') {
    const current = LESSONS.find(l => l.id === ui.lessonId) ?? LESSONS[0];
    const topics = [...new Set(LESSONS.map(l => l.topic))];
    body = h('div', { class: 'learn-grid' },
      h('nav', { class: 'lessons-list', 'aria-label': 'Уроци' }, topics.map(t => [
        h('div', { class: 'small muted', style: 'margin:10px 0 2px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:11px' }, TOPIC_BG[t] ?? t),
        LESSONS.filter(l => l.topic === t).map(l => h('button', { class: l.id === current?.id ? 'on' : '', type: 'button', onclick: () => { ui.lessonId = l.id; act.rerender(); } }, h('div', null, suitText(l.title)), h('div', { class: 'lvl' }, LEVEL_BG[l.level] ?? l.level))),
      ])),
      current ? lessonView(current, act) : h('p', null, 'Няма уроци.'));
  } else if (tab === 'glossary') {
    body = h('dl', { class: 'lesson-body' }, GLOSSARY.map(g => [h('dt', { style: 'font-weight:700;margin-top:10px' }, suitText(g.term)), h('dd', { style: 'margin:2px 0 0' }, suitText(g.def))]));
  } else if (tab === 'bid') body = bidDrillView(act);
  else if (tab === 'lead') body = leadDrillView(act);
  else body = countDrillView(act);
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': 'Уроци' },
    h('div', { class: 'head' }, h('h2', null, 'Уроци и упражнения'), tabs, h('span', { style: 'flex:1' }), h('button', { class: 'btn ghost', type: 'button', 'aria-label': 'Затвори', onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, body));
}

export { DIAGRAM_SUIT_ORDER };
