// The Learn room: lessons with quizzes, a glossary, and drills that use the
// same engines as the table (bidding, opening leads, declarer counting).

import { type Card, type Seat, type Vulnerability, S, E, N, W, SEAT_NAMES, SEAT_LETTERS, SUIT_SYMBOLS, STRAIN_SYMBOLS, DIAGRAM_SUIT_ORDER, dealCards, mulberry32, boardDealer, boardVulnerability, isRed, cardName, suitOf, rankLabel } from '../core/cards';
import { Auction, type Call, PASS, DOUBLE, REDOUBLE, bid, callName, contractName, parseCall, type Contract } from '../core/auction';
import { readAuction, advise, judgeCall, type BidAdvice } from '../bidding/engine';
import { describeShown } from '../bidding/types';
import { openingLeadChoices, type LeadChoice } from '../engine/leads';
import { ddCardValues } from '../engine/playEngine';
import { makePlan, type Plan } from '../tutor/planner';
import { getLessons, getGlossary, type Lesson } from '../learn/lessons';
import { loadLessonProgress, updateLessonProgress } from '../game/journal';
import { LESSON_THEMES } from '../game/themes';
import { T } from '../i18n';
import { h, suitText, colorSuitsIn } from './dom';
import { vulLabel } from './review';
import { handEl, diagramHand, cardText } from './cards';
import type { UIState } from './app';

export interface LearnActions {
  rerender(): void;
  close(): void;
  /** Deal boards for a practice theme at the table. */
  practise?: (theme: string) => void;
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
    for (const [key, seat] of [['n', N], ['w', W], ['e', E], ['s', S]] as [string, Seat][]) {
      const spec = el.dataset[key];
      if (spec) d.appendChild(h('div', { class: key }, lessonHand(spec, SEAT_NAMES[seat])));
    }
    d.appendChild(h('div', { class: 'c' }));
    const wrap = h('div', { class: 'deal-wrap' }, d, el.dataset.caption ? h('div', { class: 'small muted' }, el.dataset.caption) : null);
    el.replaceWith(wrap);
  });
  root.querySelectorAll<HTMLElement>('div.auction').forEach(el => {
    const calls = (el.dataset.calls ?? '').trim().split(/\s+/).filter(Boolean);
    const dealer = Math.max(0, 'NESW'.indexOf((el.dataset.dealer ?? 'N').toUpperCase())) as Seat;
    const order: Seat[] = [W, N, E, S];
    const start = order.indexOf(dealer);
    const cells: string[] = [...Array(start).fill(''), ...calls.map(c => {
      try {
        return callName(parseCall(c));
      } catch {
        return c;
      }
    })];
    const rows: HTMLElement[] = [];
    for (let i = 0; i < cells.length; i += 4) rows.push(h('tr', null, cells.slice(i, i + 4).map(c => h('td', null, c))));
    el.replaceWith(h('table', { class: 'lauction auction-d' }, h('thead', null, h('tr', null, order.map(s => h('th', null, SEAT_LETTERS[s])))), h('tbody', null, rows)));
  });
  colorSuitsIn(root);
}

/** Answers chosen in this session, per "lessonId:question". The first answer to each question is also saved as progress. */
const quizAnswers = new Map<string, number>();

/** Save the first answer to a quiz question; once all are answered, the lesson's first-try score. */
function recordAnswer(l: Lesson, qi: number, oi: number) {
  updateLessonProgress(l.id, p => {
    const first = (p.quizAnswers ??= {});
    if (first[qi] === undefined) first[qi] = oi;
    if (Object.keys(first).length >= l.quiz.length) {
      const right = l.quiz.filter((q, i) => first[i] === q.answer).length / l.quiz.length;
      p.quizBest = Math.max(p.quizBest ?? 0, right);
    }
  });
}

function retryQuiz(l: Lesson) {
  l.quiz.forEach((_, qi) => quizAnswers.delete(`${l.id}:${qi}`));
  updateLessonProgress(l.id, p => delete p.quizAnswers);
}

function lessonView(l: Lesson, act: LearnActions): HTMLElement {
  const t = T.ui.learn;
  const progress = loadLessonProgress()[l.id] ?? {};
  if (!progress.opened) updateLessonProgress(l.id, p => (p.opened = Date.now()));
  const body = h('div', { class: 'lesson-body', html: l.body });
  enhanceLesson(body);
  const saved = progress.quizAnswers ?? {};
  const firstDone = l.quiz.length > 0 && Object.keys(saved).length >= l.quiz.length;
  const quiz = l.quiz.length
    ? h('div', { class: 'quiz' }, h('h3', null, t.checkYourself), l.quiz.map((q, qi) => {
      const key = `${l.id}:${qi}`;
      const chosen = quizAnswers.get(key) ?? saved[qi];
      return h('div', { class: 'q' }, h('div', null, suitText(q.q)), h('div', { class: 'opts' }, q.options.map((o, oi) => h('button', {
        class: `opt ${chosen !== undefined && oi === q.answer ? 'right' : ''} ${chosen === oi && oi !== q.answer ? 'wrong' : ''}`,
        type: 'button',
        onclick: () => {
          quizAnswers.set(key, oi);
          recordAnswer(l, qi, oi);
          act.rerender();
        },
      }, suitText(o)))), chosen !== undefined ? h('div', { class: 'explain' }, h('b', null, chosen === q.answer ? t.right : t.notQuite), suitText(q.explain)) : null);
    }),
    firstDone ? h('div', { class: 'quizscore' },
      h('b', null, T.practice.quizScore(l.quiz.filter((q, i) => saved[i] === q.answer).length, l.quiz.length)),
      h('button', { class: 'btn small', type: 'button', onclick: () => { retryQuiz(l); act.rerender(); } }, T.practice.quizRetry)) : null)
    : null;
  const theme = LESSON_THEMES[l.id];
  // offered after the key points, and again after the quiz
  const practise = (withText: boolean) => theme && act.practise
    ? h('div', { class: 'box practise' },
      h('div', null, h('b', null, T.practice.practiseLesson),
        withText ? h('div', { class: 'small muted' }, T.practice.practiseLessonText, progress.practiced ? ` ${T.practice.practicedCount(progress.practiced)}.` : '') : null),
      h('button', { class: 'btn primary small', type: 'button', onclick: () => act.practise!(theme) }, T.practice.practiseAtTable))
    : null;
  return h('article', null,
    h('div', { class: 'small muted' }, `${t.topics[l.topic]} · ${t.levels[l.level]}`, (progress.quizBest ?? 0) >= 0.8 ? ` · ✓ ${T.practice.lessonDone}` : ''),
    h('h2', { style: 'font-family:var(--f-display);font-weight:400;font-size:30px;margin:4px 0 6px' }, suitText(l.title)),
    h('p', { style: 'margin:0 0 10px;color:var(--ink-2)' }, suitText(l.summary)),
    l.keyPoints.length ? h('div', { class: 'box' }, h('b', null, t.keyPoints), h('ul', { style: 'margin:6px 0 0;padding-left:18px' }, l.keyPoints.map(k => h('li', null, suitText(k))))) : null,
    practise(true),
    body, quiz, practise(false));
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

/** Re-word the drills in progress after a language switch; their hands, answers and scores stay. */
export function relocalizeDrills() {
  const b = drills.bid;
  if (b) b.advice = advise(b.deal[S], readAuction(b.auction, b.vul).ctx);
  const l = drills.lead;
  if (l) l.book = openingLeadChoices(l.deal[S], l.contract, readAuction(l.auction, l.vul).records, S);
  const c = drills.count;
  if (c) c.plan = makePlan(c.deal[S], c.deal[N], c.contract, [c.lead]);
}

function auctionMini(a: Auction, vul: Vulnerability): HTMLElement {
  const view = readAuction(a, vul);
  const order: Seat[] = [W, N, E, S];
  const cells: (HTMLElement | string)[] = [];
  for (let i = 0; i < order.indexOf(a.dealer); i++) cells.push('');
  view.records.forEach(r => cells.push(h('span', { title: `${r.meaning.name}: ${r.meaning.desc}` }, r.call === PASS ? callName(PASS) : suitText(callName(r.call)), r.meaning.artificial ? '*' : '')));
  if (!a.isComplete()) cells.push(h('span', { class: 'q' }, '?'));
  const rows: HTMLElement[] = [];
  for (let i = 0; i < cells.length; i += 4) rows.push(h('tr', null, cells.slice(i, i + 4).map(c => h('td', null, c))));
  const notes = view.records.filter(r => r.call !== PASS).map(r => h('li', null, h('b', null, suitText(`${SEAT_NAMES[r.seat]} ${callName(r.call)}`)), ' — ', suitText(r.meaning.name), describeShown(r.meaning.shown) ? h('span', { class: 'muted' }, suitText(` (${describeShown(r.meaning.shown)})`)) : null));
  return h('div', null, h('table', { class: 'lauction' }, h('thead', null, h('tr', null, order.map(s => h('th', null, s === S ? T.ui.common.you : SEAT_NAMES[s])))), h('tbody', null, rows)),
    notes.length ? h('ul', { class: 'small', style: 'margin:8px 0 0;padding-left:18px' }, notes) : null);
}

/** A rule's name, or "Pass" when no rule beats passing. */
const ruleName = (a: BidAdvice) => a.rule?.name ?? callName(PASS);

function bidDrillView(act: LearnActions): HTMLElement {
  const t = T.ui.learn;
  const d = (drills.bid ??= newBidDrill());
  const view = readAuction(d.auction, d.vul);
  const legal = new Set(d.auction.legalCalls());
  const box = h('div', { class: 'biddingbox' });
  for (let level = 1; level <= 7; level++) for (let st = 0; st < 5; st++) {
    const c = bid(level, st);
    box.appendChild(h('button', { class: `bid ${d.answer !== null && c === d.advice.call ? 'rec' : ''}`, type: 'button', disabled: !legal.has(c) || d.answer !== null, onclick: () => answer(c) }, `${level}`, st === 4 ? STRAIN_SYMBOLS[4] : suitText(SUIT_SYMBOLS[st])));
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
      h('b', null, j.agrees ? suitText(t.rightCall(callName(d.answer), ruleName(d.advice))) : suitText(t.systemBids(callName(d.advice.call), ruleName(d.advice)))),
      h('p', { style: 'margin:6px 0' }, suitText(d.advice.rule?.desc ?? '')),
      h('ul', { class: 'checks' }, d.advice.checks.map(c => h('li', null, h('span', { class: c.ok ? 'ok' : 'no' }, c.ok ? '✓' : '✗'), h('span', null, suitText(c.text), c.value ? h('span', { class: 'val' }, ` — ${c.value}`) : null)))),
      !j.agrees ? h('p', { class: 'small', style: 'margin:8px 0 0' }, suitText(t.yourCallReads(callName(d.answer), j.yourMeaning.name, j.yourMeaning.desc))) : null,
      !j.agrees && j.failed.length ? h('p', { class: 'small', style: 'margin:4px 0 0' }, t.doesntFit, suitText(j.failed.map(f => `${f.text}${f.value ? ` (${f.value})` : ''}`).join('; '))) : null);
  }
  const [ok, tot] = drills.score.bid;
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, t.bidDrill), t.bidPrompt(vulLabel(d.vul)), h('span', { class: 'muted' }, t.score(ok, tot))),
    h('div', { style: 'display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start' }, h('div', { style: 'background:var(--felt);border-radius:14px;padding:10px 14px' }, handEl(d.deal[S], () => ({}))), auctionMini(d.auction, d.vul)),
    h('div', { class: 'bidwrap' }, box, h('div', { class: 'specials' }, sp(PASS, 'pass', callName(PASS)), sp(DOUBLE, 'dbl', callName(DOUBLE)), sp(REDOUBLE, 'rdbl', callName(REDOUBLE)))),
    fb,
    h('div', null, h('button', { class: 'btn primary', type: 'button', onclick: () => { drills.bid = newBidDrill(); act.rerender(); } }, T.ui.common.nextHand)));
}

function leadDrillView(act: LearnActions): HTMLElement {
  const t = T.ui.learn;
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
      h('b', null, sameSuit ? (d.answer === book.card ? t.bookLead : suitText(t.rightSuit(cardName(book.card)))) : suitText(t.bookLeadIs(cardName(book.card)))),
      h('p', { style: 'margin:6px 0' }, suitText(book.suitReason), ' ', suitText(book.cardReason)),
      d.dd && new Set(d.dd.map(x => x.def)).size === 1 ? h('p', { class: 'small', style: 'margin:6px 0 0' }, t.leadNoMatter(d.dd[0].def, need)) : null,
      d.dd && new Set(d.dd.map(x => x.def)).size > 1 ? h('div', null, h('div', { class: 'small', style: 'margin-top:6px' }, t.defenceNeeds(need)),
        h('table', { class: 'stats-table' }, h('tbody', null, [...d.dd].sort((a, b) => b.def - a.def).map(x => h('tr', { class: x.card === d.answer ? 'best' : '' }, h('td', null, cardText(x.card)), h('td', null, t.defTricks(x.def)), h('td', null, x.def >= need ? t.beatsIt : '')))))) : !d.dd ? h('p', { class: 'small muted' }, t.solvingDeal) : null,
      h('div', { style: 'margin-top:10px' }, h('b', { class: 'small' }, t.wholeDeal), h('div', { class: 'diagram', style: 'margin-top:6px' },
        h('div', { class: 'n' }, diagramHand(d.deal[N], SEAT_NAMES[N])), h('div', { class: 'w' }, diagramHand(d.deal[W], `${SEAT_NAMES[W]} (${t.dummyTag})`)), h('div', { class: 'c' }, suitText(contractName(d.contract))),
        h('div', { class: 'e' }, diagramHand(d.deal[E], `${SEAT_NAMES[E]} (${t.declarerTag})`)), h('div', { class: 's' }, diagramHand(d.deal[S], T.ui.common.you)))));
  }
  const [ok, tot] = drills.score.lead;
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, t.leadDrill), suitText(t.leadPrompt(contractName(d.contract))), h('span', { class: 'muted' }, t.rightSuitScore(ok, tot))),
    h('div', { style: 'display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start' },
      h('div', { style: 'background:var(--felt);border-radius:14px;padding:10px 14px' }, handEl(d.deal[S], c => ({ playable: d.answer === null, rec: d.answer !== null && c === d.book[0].card, onClick: () => pick(c) }))),
      auctionMini(d.auction, d.vul)),
    fb,
    h('div', null, h('button', { class: 'btn primary', type: 'button', onclick: () => { drills.lead = newLeadDrill(); act.rerender(); } }, T.ui.common.nextHand)));
}

function countDrillView(act: LearnActions): HTMLElement {
  const t = T.ui.learn;
  const d = (drills.count ??= newCountDrill());
  const nt = d.contract.strain === 4;
  const q = nt ? t.countTopTricks : t.countLosers;
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
      h('b', null, d.answer === d.plan.total ? t.correct : t.theCountIs(d.plan.total)), h('p', { style: 'margin:6px 0' }, suitText(d.plan.summary)),
      h('div', { class: 'suits' }, h('span', { class: 'hd' }, ''), h('span', { class: 'hd' }, T.ui.common.you), h('span', { class: 'hd' }, T.ui.common.dummy), h('span', { class: 'hd' }, nt ? T.ui.common.topTricks : T.ui.common.losers),
        d.plan.suits.map(sp => [suitText(SUIT_SYMBOLS[sp.suit]), h('span', { class: 'mono' }, sp.decl.map(rankLabel).join(' ') || '—'), h('span', { class: 'mono' }, sp.dummy.map(rankLabel).join(' ') || '—'), h('span', { class: 'mono' }, String(nt ? sp.winners : sp.losers))])),
      d.plan.ideas.length ? h('ul', null, d.plan.ideas.map(i => h('li', null, suitText(i)))) : null);
  }
  const [ok, tot] = drills.score.count;
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, t.countDrill), suitText(t.countPrompt(contractName(d.contract), cardName(d.lead), q)), h('span', { class: 'muted' }, t.score(ok, tot))),
    h('div', { style: 'display:flex;gap:16px;flex-wrap:wrap' },
      h('div', { style: 'background:var(--felt);border-radius:14px;padding:10px 14px' }, h('div', { class: 'small', style: 'color:var(--felt-muted)' }, `${T.ui.common.dummy} (${SEAT_NAMES[N]})`), handEl(d.deal[N], () => ({})), h('div', { class: 'small', style: 'color:var(--felt-muted)' }, `${T.ui.common.you} (${SEAT_NAMES[S]})`), handEl(d.deal[S], () => ({})))),
    answerBtns, fb,
    h('div', null, h('button', { class: 'btn primary', type: 'button', onclick: () => { drills.count = newCountDrill(); act.rerender(); } }, T.ui.common.nextHand)));
}

// ---------------------------------------------------------------------------

const LEARN_TABS = ['lessons', 'bid', 'lead', 'count', 'glossary'] as const;

export function renderLearn(ui: UIState, act: LearnActions): HTMLElement {
  const t = T.ui.learn;
  const tab = ui.learnTab;
  const tabs = h('div', { class: 'tabs', role: 'tablist' }, LEARN_TABS.map(k =>
    h('button', { class: `tab ${tab === k ? 'on' : ''}`, type: 'button', role: 'tab', onclick: () => { ui.learnTab = k; act.rerender(); } }, t.tabs[k])));
  let body: HTMLElement;
  if (tab === 'lessons') {
    const lessons = getLessons();
    const progress = loadLessonProgress();
    const current = lessons.find(l => l.id === ui.lessonId) ?? lessons[0];
    const topics = [...new Set(lessons.map(l => l.topic))];
    body = h('div', { class: 'learn-grid' },
      h('nav', { class: 'lessons-list', 'aria-label': t.lessonsNav }, topics.map(topic => [
        h('div', { class: 'small muted', style: 'margin:10px 0 2px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:11px' }, t.topics[topic]),
        lessons.filter(l => l.topic === topic).map(l => h('button', { class: l.id === current?.id ? 'on' : '', type: 'button', onclick: () => { ui.lessonId = l.id; act.rerender(); } },
          h('div', null, (progress[l.id]?.quizBest ?? 0) >= 0.8 ? h('span', { class: 'done', 'aria-label': T.practice.lessonDone }, '✓ ') : null, suitText(l.title)),
          h('div', { class: 'lvl' }, t.levels[l.level]))),
      ])),
      current ? lessonView(current, act) : h('p', null, t.noLessons));
  } else if (tab === 'glossary') {
    body = h('dl', { class: 'lesson-body' }, getGlossary().map(g => [h('dt', { style: 'font-weight:700;margin-top:10px' }, suitText(g.term)), h('dd', { style: 'margin:2px 0 0' }, suitText(g.def))]));
  } else if (tab === 'bid') body = bidDrillView(act);
  else if (tab === 'lead') body = leadDrillView(act);
  else body = countDrillView(act);
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': t.title },
    h('div', { class: 'head' }, h('h2', null, t.title), tabs, h('span', { style: 'flex:1' }), h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.ui.common.close, onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, body));
}

export { DIAGRAM_SUIT_ORDER };
