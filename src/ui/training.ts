// The Training room: what to practise next, the review queue of your own
// mistakes (spaced repetition), problems from real deals, accuracy per skill,
// practice topics and the archive of every board you played.

import {
  type Card, type Seat, type Vulnerability, N, E, S, W, SEAT_NAMES, SEAT_LETTERS, SUIT_SYMBOLS, DISPLAY_SUIT_ORDER, partnerOf, cardName, sortHand, suitOf,
} from '../core/cards';
import { Auction, type Call, type Contract, PASS, DOUBLE, REDOUBLE, bid, callName, contractName } from '../core/auction';
import { PlayState } from '../core/play';
import { imps } from '../core/scoring';
import { readAuction, advise, judgeCall } from '../bidding/engine';
import { decideCard, type Decision } from '../engine/playEngine';
import { explainPlay, type PlaySituation } from '../tutor/principles';
import { T, fmtDate, fmtList, fmtNum, fmtPct } from '../i18n';
import { getLessons, getLesson } from '../learn/lessons';
import {
  type ArchivedBoard, type ReviewItem, loadBoards, loadItems, dueItems, answerItem, updateItem, decodeDeal, addItems,
  loadLessonProgress, streak, exportAll, importAll, INTERVALS, LAST_BOX,
} from '../game/journal';
import {
  type Problem, type ProblemKind, type KindScore, PROBLEM_KINDS, problemFactory, problemPosition, pickProblem, removeFromBank,
  recordScore, loadScore, bankCounts, problemReviewItem, bookLead,
} from '../game/problems';
import { SKILLS, type SkillId, skillStats, weakestSkill, skillInfo, clearCardMistake } from '../game/skills';
import { THEMES } from '../game/themes';
import { h, suitText } from './dom';
import { handEl, cardText, diagramHand } from './cards';
import './training.css';

export type TrainingTab = 'today' | 'review' | 'problems' | 'skills' | 'topics' | 'history';

export interface TrainingActions {
  rerender(): void;
  close(): void;
  /** Deal boards for this practice theme from now on (null = ordinary deals) and start one. */
  practiseTheme(id: string | null): void;
  currentTheme(): string | null;
  /** Show the post-hand review of an archived board. */
  openArchived(id: number): void;
  /** Play an archived deal again. */
  replayArchived(id: number): void;
  openLesson(id: string): void;
  toast(msg: string): void;
  /** Play a pasted deal (PBN, LIN, BBO link, share code). Returns an error message, or null. */
  importDeal(text: string): string | null;
  /** Play a deal from the start at the table (a problem's deal). Optional: the button shows only when provided. */
  playDeal?(spec: { deal: Card[][]; dealer: Seat; vul: Vulnerability; board?: number }): void;
  /** A hand is being played at the table right now (bots thinking): problem generation waits. */
  handBusy?(): boolean;
}

interface DrillState {
  item: ReviewItem | null;
  chosen: number | null;
  correct: boolean | null;
  fresh: Decision | null; // simulation run for a card that is neither the answer nor your original choice
  pending: boolean;
}

type ProblemFilter = ProblemKind | 'mixed';

interface ProblemsState {
  filter: ProblemFilter;
  current: Problem | null;
  chosen: Card | null;
  correct: boolean | null;
  showDeal: boolean;
  last: ProblemKind | null; // kind of the last problem shown (mixed: the next one is of another kind)
  session: Record<ProblemKind, KindScore>;
  tick: number; // bumped as the background generation progresses
}

const state = {
  tab: 'today' as TrainingTab,
  drill: { item: null, chosen: null, correct: null, fresh: null, pending: false } as DrillState,
  session: { done: 0, right: 0 },
  problems: {
    filter: 'mixed', current: null, chosen: null, correct: null, showDeal: false, last: null, tick: 0,
    session: { declarer: { done: 0, right: 0 }, defense: { done: 0, right: 0 }, lead: { done: 0, right: 0 } },
  } as ProblemsState,
};

export function setTrainingTab(tab: TrainingTab) {
  state.tab = tab;
}

/** Number of review items due now (for the header badge). */
export function dueCount(): number {
  return dueItems(loadItems()).length;
}

// ---------------------------------------------------------------------------
// small pieces

function tile(k: string, v: string, n: string): HTMLElement {
  return h('div', { class: 'tile' }, h('div', { class: 'k' }, k), h('div', { class: 'v mono' }, v), h('div', { class: 'n' }, n));
}

function skillName(id: SkillId) {
  return T.practice.skills[id].name;
}

function bar(frac: number | null): HTMLElement {
  const v = frac === null ? 0 : Math.round(frac * 100);
  return h('div', { class: 'skillbar', role: 'img', 'aria-label': frac === null ? T.practice.notEnough : fmtPct(frac) }, h('i', { style: `width:${v}%` }));
}

function auctionTable(dealer: Seat, calls: readonly Call[], vul: ArchivedBoard['vul'], ask: boolean): HTMLElement {
  const view = readAuction(new Auction(dealer, [...calls]), vul);
  const order: Seat[] = [W, N, E, S];
  const cells: (HTMLElement | string)[] = [];
  for (let i = 0; i < order.indexOf(dealer); i++) cells.push('');
  view.records.forEach(r => cells.push(h('span', { title: `${r.meaning.name}: ${r.meaning.desc}` }, suitText(callName(r.call)), r.meaning.artificial ? '*' : '')));
  if (ask) cells.push(h('span', { class: 'q' }, '?'));
  const rows: HTMLElement[] = [];
  for (let i = 0; i < cells.length; i += 4) rows.push(h('tr', null, cells.slice(i, i + 4).map(c => h('td', null, c))));
  return h('table', { class: 'lauction' }, h('thead', null, h('tr', null, order.map(s => h('th', null, s === S ? T.practice.you : SEAT_NAMES[s])))), h('tbody', null, rows));
}

function boardContract(b: ArchivedBoard) {
  const a = new Auction(b.dealer, b.calls.map(c => c.c));
  return a.isComplete() ? a.contract() : null;
}

// ---------------------------------------------------------------------------
// Today

function todayTab(act: TrainingActions): HTMLElement {
  const boards = loadBoards();
  const items = loadItems();
  const due = dueItems(items);
  const stats = skillStats(boards);
  const weak = weakestSkill(stats);
  const weakStat = stats.find(s => s.id === weak)!;
  const progress = loadLessonProgress();
  const lessons = getLessons();
  const nextLesson = lessons.find(l => (progress[l.id]?.quizBest ?? 0) < 0.8);
  const bidsTotal = boards.reduce((t, b) => t + b.calls.filter(c => c.h && c.a !== undefined).length, 0);
  const bidsRight = boards.reduce((t, b) => t + b.calls.filter(c => c.h && c.a === c.c).length, 0);
  const st = streak();
  const weakLesson = skillInfo(weak).lessons.find(id => (progress[id]?.quizBest ?? 0) < 0.8) ?? skillInfo(weak).lessons[0];

  const steps: HTMLElement[] = [];
  if (due.length) {
    steps.push(h('div', { class: 'step' },
      h('div', null, h('b', null, T.practice.stepReviewTitle(due.length)), h('div', { class: 'small muted' }, T.practice.stepReviewText)),
      h('button', { class: 'btn primary', type: 'button', onclick: () => { state.tab = 'review'; act.rerender(); } }, T.practice.startReview)));
  }
  steps.push(h('div', { class: 'step' },
    h('div', null, h('b', null, T.practice.stepWeakTitle(skillName(weak))),
      h('div', { class: 'small muted' }, weakStat.rate === null ? T.practice.stepWeakNew : T.practice.stepWeakText(fmtPct(weakStat.rate), weakStat.recent))),
    h('div', { class: 'stepbtns' },
      h('button', { class: 'btn primary', type: 'button', onclick: () => act.practiseTheme(skillInfo(weak).theme) }, T.practice.practiseAtTable),
      weakLesson && getLesson(weakLesson) ? h('button', { class: 'btn', type: 'button', onclick: () => act.openLesson(weakLesson) }, suitText(T.practice.readLesson(getLesson(weakLesson)!.title))) : null)));
  steps.push(h('div', { class: 'step' },
    h('div', null, h('b', null, T.practice.stepProblemsTitle), h('div', { class: 'small muted' }, T.practice.stepProblemsText)),
    h('button', { class: 'btn', type: 'button', onclick: () => { state.tab = 'problems'; act.rerender(); } }, T.practice.openProblems)));
  if (nextLesson) {
    steps.push(h('div', { class: 'step' },
      h('div', null, h('b', null, suitText(T.practice.stepCourseTitle(nextLesson.title))), h('div', { class: 'small muted' }, T.practice.stepCourseText(lessons.indexOf(nextLesson) + 1, lessons.length))),
      h('button', { class: 'btn', type: 'button', onclick: () => act.openLesson(nextLesson.id) }, T.practice.openLesson)));
  }

  return h('div', null,
    h('div', { class: 'tiles' },
      tile(T.practice.tileStreak, String(st), T.practice.tileStreakNote(st)),
      tile(T.practice.tileDue, String(due.length), T.practice.tileDueNote(items.length)),
      tile(T.practice.tileBoards, String(boards.length), boards.length ? T.practice.tileBoardsNote(fmtDate(boards[boards.length - 1].id)) : T.practice.tileBoardsNone),
      tile(T.practice.tileBidding, bidsTotal ? fmtPct(bidsRight / bidsTotal) : '—', T.practice.tileBiddingNote(bidsRight, bidsTotal))),
    h('h3', null, T.practice.nextSteps),
    h('div', { class: 'steps' }, steps),
    h('p', { class: 'small muted', style: 'margin-top:14px' }, T.practice.howItWorks));
}

// ---------------------------------------------------------------------------
// Review (spaced repetition of your own mistakes)

function nextItem(): ReviewItem | null {
  return dueItems(loadItems())[0] ?? null;
}

function resetDrill(item: ReviewItem | null) {
  state.drill = { item, chosen: null, correct: null, fresh: null, pending: false };
}

function itemPosition(item: ReviewItem) {
  const deal = decodeDeal(item.deal);
  const auction = new Auction(item.dealer, [...item.calls]);
  if (item.kind === 'bid') return { deal, auction, play: null as PlayState | null };
  const play = new PlayState(auction.contract()!, deal);
  for (const c of item.play ?? []) play.play(c);
  return { deal, auction, play };
}

function situation(p: PlayState): PlaySituation {
  const seat = p.toPlay;
  const cur = p.current;
  const declSide = (seat & 1) === (p.contract.declarer & 1);
  return {
    seat,
    contract: p.contract,
    leader: cur.leader,
    trick: [...cur.cards],
    hand: [...p.hands[seat]],
    partnerHand: declSide ? [...p.hands[partnerOf(seat)]] : p.openingLeadMade ? [...p.hands[p.dummy]] : null,
    dummySeat: p.dummy,
    dummyHand: p.openingLeadMade ? [...p.hands[p.dummy]] : null,
    played: p.tricks.slice(0, -1).flatMap(t => t.cards),
    openingLead: !p.openingLeadMade,
    history: p.tricks.slice(0, -1),
  };
}

function finishAnswer(act: TrainingActions, correct: boolean) {
  const d = state.drill;
  d.correct = correct;
  state.session.done++;
  if (correct) state.session.right++;
  const keep = answerItem(d.item!, correct);
  updateItem(d.item!, !keep);
  act.rerender();
}

function answerBid(act: TrainingActions, call: Call) {
  const d = state.drill;
  if (!d.item || d.chosen !== null) return;
  d.chosen = call;
  const { deal, auction } = itemPosition(d.item);
  const advice = advise(deal[d.item.seat], readAuction(auction, d.item.vul).ctx);
  finishAnswer(act, call === advice.call);
}

function answerCard(act: TrainingActions, card: Card) {
  const d = state.drill;
  const item = d.item;
  if (!item || d.chosen !== null) return;
  d.chosen = card;
  if (item.answer.includes(card)) return finishAnswer(act, true);
  if (card === item.yours || !item.sim) return finishAnswer(act, false);
  // a third card: ask the simulation how it compares
  d.pending = true;
  act.rerender();
  const { auction, play } = itemPosition(item);
  const p = play!;
  const seat = p.toPlay;
  const viewer = seat === p.dummy ? p.contract.declarer : seat;
  void decideCard({
    viewer, toPlay: seat, contract: p.contract, vul: item.vul,
    hands: p.hands.map(x => [...x]), tricks: p.tricks.map(t => ({ ...t, cards: [...t.cards] })),
    dummyVisible: p.openingLeadMade, shown: readAuction(auction, item.vul).shown,
  }, { samples: 40, timeMs: 4000, minSamples: 12, priority: 4 }).then(dec => {
    if (state.drill.item?.id !== item.id) return;
    d.fresh = dec;
    d.pending = false;
    const best = dec.stats[0];
    const mine = dec.stats.find(s => s.card === card);
    const ok = dec.equal.includes(card) || (!!mine && !clearCardMistake({ n: dec.samples, best: dec.equal, bt: best.tricks, bs: best.success, mt: mine.tricks, ms: mine.success }, card));
    finishAnswer(act, ok);
  });
}

function bidBox(item: ReviewItem, act: TrainingActions, answer: Call | null): HTMLElement {
  const { auction } = itemPosition(item);
  const legal = new Set(auction.legalCalls());
  const done = state.drill.chosen !== null;
  const box = h('div', { class: 'biddingbox' });
  for (let level = 1; level <= 7; level++) for (let st = 0; st < 5; st++) {
    const c = bid(level, st);
    box.appendChild(h('button', { class: `bid ${done && c === answer ? 'rec' : ''}`, type: 'button', disabled: !legal.has(c) || done, onclick: () => answerBid(act, c) }, `${level}`, suitText(st === 4 ? T.core.nt : SUIT_SYMBOLS[st])));
  }
  const sp = (c: Call, cls: string) => h('button', { class: `special ${cls} ${done && c === answer ? 'rec' : ''}`, type: 'button', disabled: !legal.has(c) || done, onclick: () => answerBid(act, c) }, callName(c));
  return h('div', { class: 'bidwrap' }, box, h('div', { class: 'specials' }, sp(PASS, 'pass'), sp(DOUBLE, 'dbl'), sp(REDOUBLE, 'rdbl')));
}

function bidItemView(item: ReviewItem, act: TrainingActions): HTMLElement {
  const d = state.drill;
  const { deal, auction } = itemPosition(item);
  const ctx = readAuction(auction, item.vul).ctx;
  const advice = advise(deal[item.seat], ctx);
  let fb: HTMLElement | null = null;
  if (d.chosen !== null) {
    const j = judgeCall(deal[item.seat], ctx, d.chosen);
    fb = h('div', { class: `box ${d.correct ? '' : 'warnbox'}` },
      h('b', null, suitText(d.correct ? T.practice.bidRight(callName(advice.call), advice.rule?.name ?? callName(PASS)) : T.practice.bidWrong(callName(advice.call), advice.rule?.name ?? callName(PASS)))),
      h('p', { style: 'margin:6px 0' }, suitText(advice.rule?.desc ?? '')),
      h('ul', { class: 'checks' }, advice.checks.map(c => h('li', null, h('span', { class: c.ok ? 'ok' : 'no' }, c.ok ? '✓' : '✗'), h('span', null, suitText(c.text), c.value ? h('span', { class: 'val' }, ` — ${c.value}`) : null)))),
      !d.correct ? h('p', { class: 'small', style: 'margin:8px 0 0' }, suitText(T.practice.yourCallMeans(callName(d.chosen), j.yourMeaning.name, j.yourMeaning.desc))) : null,
      d.chosen !== item.yours && item.yours !== advice.call ? h('p', { class: 'small muted', style: 'margin:6px 0 0' }, suitText(T.practice.atTableYouBid(callName(item.yours)))) : null);
  }
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, T.practice.bidPrompt), ' ', T.practice.youAre(SEAT_NAMES[item.seat], T.practice.vul(item.vul, item.seat))),
    h('div', { style: 'display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start' },
      h('div', { class: 'feltbox' }, handEl(deal[item.seat], () => ({}))),
      auctionTable(item.dealer, item.calls, item.vul, true)),
    bidBox(item, act, d.chosen !== null ? advice.call : null),
    fb);
}

function trickRow(p: PlayState): HTMLElement | null {
  const done = p.tricks.slice(0, -1);
  if (!done.length) return null;
  return h('div', { class: 'small muted', style: 'display:flex;flex-wrap:wrap;gap:4px 12px' }, done.map((t, i) => h('span', null, `${i + 1}. `, t.cards.map((c, k) => h('span', null, k ? ' ' : '', h('b', null, SEAT_LETTERS[(t.leader + k) & 3]), cardText(c))))));
}

interface PositionOpts {
  /** Answered: the cards can no longer be played, the answer is marked. */
  done: boolean;
  answer: readonly Card[];
  chosen: Card | null;
  onPick: (card: Card) => void;
}

/** Mark one card of a rendered hand (handEl lays the cards out in display order). */
function markCard(handNode: HTMLElement, cards: readonly Card[], card: Card, cls: string) {
  const i = sortHand(cards, DISPLAY_SUIT_ORDER).indexOf(card);
  if (i >= 0) handNode.children[i]?.classList.add(cls);
}

/**
 * A card-play position: the hand to play from (cards playable until
 * answered), partner's hand or dummy, the trick so far, the auction and the
 * earlier tricks. Shared by the Review and the Problems tabs.
 */
function positionView(p: PlayState, at: { dealer: Seat; calls: readonly Call[]; vul: Vulnerability }, o: PositionOpts): HTMLElement[] {
  const seat = p.toPlay;
  const declaring = (seat & 1) === (p.contract.declarer & 1);
  const legal = new Set(p.legal());
  const mainHand = handEl(p.hands[seat], card => ({ playable: !o.done && legal.has(card), dim: !legal.has(card), rec: o.done && o.answer.includes(card), onClick: () => o.onPick(card) }));
  if (o.done && o.chosen !== null && !o.answer.includes(o.chosen)) markCard(mainHand, p.hands[seat], o.chosen, 'picked');
  const other = declaring ? partnerOf(seat) : p.openingLeadMade ? p.dummy : null;
  const cur = p.current;
  const row = trickRow(p);
  // declarer plays both hands: name them dummy and "your hand" whichever is to play
  const label = (s: Seat) => (s === p.dummy ? T.practice.dummyLabel(SEAT_NAMES[s]) : s === seat || declaring ? T.practice.yourHand(SEAT_NAMES[s]) : SEAT_NAMES[s]);
  return [
    h('div', { class: 'posrow' },
      h('div', { class: 'feltbox' },
        other !== null ? h('div', { class: 'small', style: 'color:var(--felt-muted)' }, label(other)) : null,
        other !== null ? handEl(p.hands[other], () => ({})) : null,
        cur.cards.length ? h('div', { class: 'small', style: 'color:var(--felt-muted);margin-top:6px' }, T.practice.trickSoFar, ' ', cur.cards.map((x, k) => h('span', { style: 'margin-right:8px' }, SEAT_LETTERS[(cur.leader + k) & 3], ' ', cardText(x)))) : null,
        h('div', { class: 'small', style: 'color:var(--felt-muted);margin-top:6px' }, label(seat)),
        mainHand),
      auctionTable(at.dealer, at.calls, at.vul, false)),
    ...(row ? [row] : []),
  ];
}

function cardItemView(item: ReviewItem, act: TrainingActions): HTMLElement {
  const d = state.drill;
  const { play } = itemPosition(item);
  const p = play!;
  const seat = p.toPlay;
  const c = p.contract;
  const declaring = (seat & 1) === (c.declarer & 1);
  const done = d.chosen !== null;
  let fb: HTMLElement | null = null;
  if (d.pending) fb = h('div', { class: 'box small' }, T.practice.simulating);
  else if (done && d.correct !== null) {
    const sim = item.sim;
    const best = item.answer[0];
    const pr = explainPlay(situation(p), best);
    const fresh = d.fresh;
    const freshMine = fresh?.stats.find(s => s.card === d.chosen);
    fb = h('div', { class: `box ${d.correct ? '' : 'warnbox'}` },
      h('b', null, suitText(d.correct ? T.practice.cardRight : T.practice.cardWrong(fmtList(item.answer.map(cardName))))),
      sim ? h('p', { style: 'margin:6px 0' }, suitText((item.source === 'problem' ? T.practice.cardSimProblem : T.practice.cardSim)(sim.n, cardName(best), fmtNum(sim.bt, 2), fmtPct(sim.bs), cardName(item.yours), fmtNum(sim.mt, 2), fmtPct(sim.ms), declaring))) : null,
      fresh && freshMine ? h('p', { class: 'small', style: 'margin:6px 0' }, suitText(T.practice.cardFresh(cardName(d.chosen!), fmtNum(freshMine.tricks, 2), fmtPct(freshMine.success), fresh.samples))) : null,
      h('div', { class: 'principle' }, h('b', null, pr.title), suitText(pr.text)));
  }
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, T.practice.cardPrompt), ' ', suitText(T.practice.cardSituation(contractName(c), SEAT_NAMES[c.declarer], SEAT_NAMES[seat], p.tricks.length))),
    positionView(p, item, { done, answer: item.answer, chosen: d.chosen, onPick: card => answerCard(act, card) }),
    fb);
}

function reviewTab(act: TrainingActions): HTMLElement {
  const d = state.drill;
  if (!d.item) resetDrill(nextItem());
  const item = state.drill.item;
  const all = loadItems();
  if (!item) {
    const later = all.filter(i => i.due > Date.now()).sort((a, b) => a.due - b.due)[0];
    return h('div', { class: 'empty' },
      h('p', null, h('b', null, all.length ? T.practice.reviewDoneTitle : T.practice.reviewEmptyTitle)),
      h('p', { class: 'muted' }, all.length ? T.practice.reviewDoneText(all.length, later ? fmtDate(later.due) : '—') : T.practice.reviewEmptyText),
      state.session.done ? h('p', null, T.practice.sessionScore(state.session.right, state.session.done)) : null);
  }
  const answered = state.drill.correct !== null;
  const box = item.box;
  return h('div', null,
    h('div', { class: 'small muted', style: 'display:flex;gap:12px;flex-wrap:wrap;margin-bottom:8px' },
      h('span', null, skillName(item.skill)),
      h('span', null, item.source === 'drill' ? T.practice.itemFromDrill(fmtDate(item.created)) : item.source === 'problem' ? T.practice.itemFromProblem(fmtDate(item.created)) : T.practice.itemFrom(fmtDate(item.created), item.board)),
      h('span', null, T.practice.itemBox(box, LAST_BOX)),
      h('span', null, T.practice.dueLeft(dueItems(all).length)),
      state.session.done ? h('span', null, T.practice.sessionScore(state.session.right, state.session.done)) : null),
    item.kind === 'bid' ? bidItemView(item, act) : cardItemView(item, act),
    answered ? h('div', { style: 'display:flex;gap:8px;flex-wrap:wrap;margin-top:12px' },
      h('button', { class: 'btn primary', type: 'button', onclick: () => { resetDrill(nextItem()); act.rerender(); } }, T.practice.next),
      h('span', { class: 'small muted', style: 'align-self:center' }, state.drill.correct ? T.practice.nextIn(INTERVALS[Math.min(item.box, LAST_BOX)]) : T.practice.again),
      loadBoards().some(b => item.id.startsWith(`${b.id}:`)) ? h('button', { class: 'btn', type: 'button', onclick: () => act.openArchived(+item.id.split(':')[0]) }, T.practice.showBoard) : null) : null);
}

// ---------------------------------------------------------------------------
// Problems: find the right play in positions from real deals

/** The Problems view on screen (generation runs only while it is attached). */
let problemsEl: HTMLElement | null = null;
let problemsAct: TrainingActions | null = null;
let factoryHooked = false;
let lastTick = 0;

/** Redraw while waiting for a problem; never under a problem being solved. */
function hookFactory() {
  if (factoryHooked) return;
  factoryHooked = true;
  problemFactory().onChange(event => {
    const ps = state.problems;
    if (state.tab !== 'problems' || !problemsEl?.isConnected || !problemsAct || ps.current) return;
    const now = Date.now();
    if (event === 'progress' && now - lastTick < 250) return;
    lastTick = now;
    ps.tick++;
    problemsAct.rerender();
  });
}

function startFactory() {
  hookFactory();
  problemFactory().start({
    active: () => state.tab === 'problems' && !!problemsEl?.isConnected,
    busy: () => !!problemsAct?.handBusy?.(),
    prefer: () => state.problems.filter,
  });
}

function resetProblem(current: Problem | null) {
  Object.assign(state.problems, { current, chosen: null, correct: null, showDeal: false });
}

function answerProblem(act: TrainingActions, card: Card) {
  const ps = state.problems;
  const pr = ps.current;
  if (!pr || ps.chosen !== null) return;
  const correct = pr.answer.includes(card);
  ps.chosen = card;
  ps.correct = correct;
  ps.last = pr.kind;
  ps.session[pr.kind].done++;
  if (correct) ps.session[pr.kind].right++;
  recordScore(pr.kind, correct);
  removeFromBank(pr.id);
  // a missed problem comes back in the Review tab
  if (!correct) addItems([problemReviewItem(pr, card)]);
  act.rerender();
}

function nextProblem(act: TrainingActions, skip = false) {
  const pr = state.problems.current;
  if (skip && pr) {
    removeFromBank(pr.id);
    state.problems.last = pr.kind;
  }
  resetProblem(null);
  act.rerender();
}

function setFilter(act: TrainingActions, f: ProblemFilter) {
  const ps = state.problems;
  ps.filter = f;
  // an unanswered problem of another kind stays in the bank for later
  if (ps.chosen !== null || (ps.current && f !== 'mixed' && ps.current.kind !== f)) resetProblem(null);
  act.rerender();
}

/** "You are declarer in 4♠ (South). West led the ♦K." and the question. */
function problemQuestion(pr: Problem, p: PlayState): { context: string; ask: string } {
  const X = T.practice.problems;
  const c = p.contract;
  const contract = contractName(c);
  const seat = pr.seat;
  if (pr.kind === 'lead') return { context: X.qLead(contract, SEAT_NAMES[c.declarer]), ask: X.askLead };
  const parts: string[] = [pr.kind === 'declarer' ? X.qDeclarer(contract, SEAT_NAMES[c.declarer]) : X.qDefence(contract, SEAT_NAMES[c.declarer], SEAT_NAMES[seat])];
  const first = p.tricks[0];
  const leader = first.leader;
  const who = leader === seat ? 'you' : pr.kind === 'defense' && leader === partnerOf(seat) ? 'partner' : 'opponent';
  parts.push(X.led(who, SEAT_NAMES[leader], cardName(first.cards[0])));
  const trick = p.tricks.length;
  if (trick > 1) {
    const won = p.completedTricks.filter(t => (t.winner! & 1) === (seat & 1)).length;
    parts.push(X.tally(trick, won, p.completedTricks.length - won));
  }
  const fromDummy = seat === p.dummy;
  const ask = pr.kind === 'defense' ? X.askDefence : trick === 1 ? X.askPlan(fromDummy) : X.askDeclarer(fromDummy);
  return { context: parts.join(' '), ask };
}

function dealDiagram(deal: Card[][], contract: Contract): HTMLElement {
  const decl = contract.declarer;
  const X = T.practice.problems;
  const lbl = (s: Seat) => (s === decl ? `${SEAT_NAMES[s]} (${X.declarerTag})` : s === partnerOf(decl) ? `${SEAT_NAMES[s]} (${X.dummyTag})` : SEAT_NAMES[s]);
  return h('div', { class: 'diagram pdeal' },
    h('div', { class: 'n' }, diagramHand(deal[N], lbl(N))),
    h('div', { class: 'w' }, diagramHand(deal[W], lbl(W))),
    h('div', { class: 'c' }, suitText(`${contractName(contract)} ${SEAT_LETTERS[decl]}`)),
    h('div', { class: 'e' }, diagramHand(deal[E], lbl(E))),
    h('div', { class: 's' }, diagramHand(deal[S], lbl(S))));
}

function problemFeedback(pr: Problem, p: PlayState): HTMLElement {
  const ps = state.problems;
  const X = T.practice.problems;
  const declaring = (pr.seat & 1) === (p.contract.declarer & 1);
  const top = pr.stats[0];
  const mine = pr.stats.find(s => s.c === ps.chosen);
  const runnerUp = pr.stats.find(s => !pr.answer.includes(s.c));
  const answer = fmtList(pr.answer.map(cardName));
  // the card explained: an opening lead's book card when it is among the right ones,
  // else the cheapest right card in the best card's suit (the tutor prefers the lowest of equals)
  const lead = pr.kind === 'lead' ? bookLead(pr).find(l => suitOf(l.card) === suitOf(top.c)) ?? null : null;
  const cheapest = pr.answer.filter(c => suitOf(c) === suitOf(top.c)).sort((a, b) => a - b)[0] ?? top.c;
  const shown = lead && pr.answer.includes(lead.card) ? lead.card : cheapest;
  const best = pr.stats.find(s => s.c === shown) ?? top;
  const why = explainPlay(situation(p), shown);
  const rows = pr.stats.map(s => h('tr', { class: `${pr.answer.includes(s.c) ? 'best' : ''} ${s.c === ps.chosen ? 'mine' : ''}` },
    h('td', null, cardText(s.c)),
    h('td', null, fmtNum(s.t, 2)),
    h('td', null, fmtPct(s.s)),
    h('td', null, h('div', { class: 'bar' }, h('i', { style: `width:${Math.round(s.s * 100)}%` })))));
  return h('div', { class: `box ${ps.correct ? 'rightbox' : 'warnbox'}` },
    h('b', null, suitText(ps.correct ? X.right(answer) : X.wrong(answer))),
    h('p', { style: 'margin:6px 0' }, suitText(X.simLine(pr.n, cardName(best.c), fmtNum(best.t, 2), fmtPct(best.s), declaring))),
    !ps.correct && mine ? h('p', { class: 'small', style: 'margin:6px 0' }, suitText(X.yourLine(cardName(mine.c), fmtNum(mine.t, 2), fmtPct(mine.s))))
      : runnerUp ? h('p', { class: 'small', style: 'margin:6px 0' }, suitText(X.nextBest(cardName(runnerUp.c), fmtNum(runnerUp.t, 2), fmtPct(runnerUp.s)))) : null,
    h('div', { class: 'scroll-x' }, h('table', { class: 'stats-table pstats' },
      h('thead', null, h('tr', null, h('th', null, X.colCard), h('th', null, X.colTricks), h('th', null, declaring ? X.colMakes : X.colSets), h('th', null, ''))),
      h('tbody', null, rows))),
    h('div', { class: 'principle' }, h('b', null, why.title), suitText(why.text)),
    lead ? h('p', { class: 'small', style: 'margin:6px 0 0' }, h('b', null, X.whyThisSuit), ' ', suitText(lead.suitReason)) : null,
    !ps.correct ? h('p', { class: 'small muted', style: 'margin:8px 0 0' }, X.addedToReview) : null);
}

function problemView(pr: Problem, act: TrainingActions): HTMLElement {
  const ps = state.problems;
  const X = T.practice.problems;
  const { deal, play: p } = problemPosition(pr);
  const done = ps.chosen !== null;
  const q = problemQuestion(pr, p);
  return h('div', { class: 'drill problem' },
    h('div', { class: 'prompt' },
      h('div', { class: 'small muted' }, `${X.kinds[pr.kind]} · ${X.boardLine(pr.board, T.practice.vul(pr.vul, pr.seat))}`),
      suitText(q.context), ' ', h('b', null, suitText(q.ask))),
    positionView(p, pr, { done, answer: pr.answer, chosen: ps.chosen, onPick: card => answerProblem(act, card) }),
    done ? problemFeedback(pr, p) : null,
    h('div', { class: 'pbtns' },
      done ? h('button', { class: 'btn primary', type: 'button', onclick: () => nextProblem(act) }, X.next)
        : h('button', { class: 'btn ghost', type: 'button', onclick: () => nextProblem(act, true) }, X.skip),
      done ? h('button', { class: 'btn', type: 'button', 'aria-expanded': ps.showDeal ? 'true' : 'false', onclick: () => { ps.showDeal = !ps.showDeal; act.rerender(); } }, ps.showDeal ? X.hideDeal : X.showDeal) : null,
      done && act.playDeal ? h('button', { class: 'btn', type: 'button', onclick: () => act.playDeal!({ deal, dealer: pr.dealer, vul: pr.vul, board: pr.board }) }, X.playFromStart) : null),
    done && ps.showDeal ? dealDiagram(deal, p.contract) : null);
}

function waitingView(): HTMLElement {
  const X = T.practice.problems;
  const f = problemFactory();
  const pg = f.progress;
  const want = state.problems.filter;
  const kind: ProblemKind = pg?.kind ?? (want === 'mixed' ? 'declarer' : want);
  const stage = !pg || pg.stage === 'dealing' ? X.stageDealing(kind) : pg.stage === 'playing' ? X.stagePlaying(pg.trick) : X.stageTesting(pg.trick, pg.done, pg.total);
  const frac = pg?.total ? pg.done / pg.total : 0;
  return h('div', { class: 'box pwait' },
    h('b', null, X.preparing),
    h('div', { class: 'small', style: 'margin-top:4px' }, stage),
    h('div', { class: 'progress' }, h('i', { style: `width:${Math.round(frac * 100)}%` })),
    f.tried ? h('p', { class: 'small muted', style: 'margin:8px 0 0' }, X.tried(f.tried)) : null,
    h('p', { class: 'small muted', style: 'margin:8px 0 0' }, X.waitNote),
    want === 'lead' || kind === 'lead' ? h('p', { class: 'small muted', style: 'margin:6px 0 0' }, X.leadNote) : null);
}

function scoreLine(): HTMLElement {
  const X = T.practice.problems;
  const ses = state.problems.session;
  const done = PROBLEM_KINDS.reduce((t, k) => t + ses[k].done, 0);
  const right = PROBLEM_KINDS.reduce((t, k) => t + ses[k].right, 0);
  const all = loadScore();
  const allDone = PROBLEM_KINDS.reduce((t, k) => t + all[k].done, 0);
  const allRight = PROBLEM_KINDS.reduce((t, k) => t + all[k].right, 0);
  // ready problems: not counting the one on screen
  const counts = bankCounts();
  const cur = state.problems.current;
  if (cur && state.problems.chosen === null) counts[cur.kind] = Math.max(0, counts[cur.kind] - 1);
  return h('div', { class: 'pscore small muted' },
    done ? h('span', null, h('b', null, X.session(right, done))) : null,
    done ? PROBLEM_KINDS.filter(k => ses[k].done).map(k => h('span', null, X.kindScore(X.kinds[k], ses[k].right, ses[k].done))) : null,
    allDone > done ? h('span', null, X.allTime(allRight, allDone)) : null,
    h('span', null, X.ready(counts.declarer, counts.defense, counts.lead)));
}

function problemsTab(act: TrainingActions): HTMLElement {
  const ps = state.problems;
  const X = T.practice.problems;
  problemsAct = act;
  if (!ps.current) resetProblem(pickProblem(ps.filter, ps.last));
  const filters: ProblemFilter[] = ['mixed', ...PROBLEM_KINDS];
  const el = h('div', null,
    h('p', { class: 'small muted', style: 'margin-top:0' }, X.intro),
    h('div', { class: 'phead' },
      h('div', { class: 'pfilter', role: 'group', 'aria-label': X.filterLabel }, filters.map(f =>
        h('button', { class: `btn small ${ps.filter === f ? 'on' : ''}`, type: 'button', 'aria-pressed': ps.filter === f ? 'true' : 'false', onclick: () => setFilter(act, f) }, X.filters[f]))),
      scoreLine()),
    ps.current ? problemView(ps.current, act) : waitingView());
  problemsEl = el;
  // keep the bank topped up while the tab is open
  startFactory();
  return el;
}

// ---------------------------------------------------------------------------
// Skills

function skillsTab(act: TrainingActions): HTMLElement {
  const stats = skillStats(loadBoards());
  const progress = loadLessonProgress();
  return h('div', null,
    h('p', { class: 'small muted' }, T.practice.skillsIntro),
    h('div', { class: 'skills' }, SKILLS.map(info => {
      const s = stats.find(x => x.id === info.id)!;
      return h('div', { class: 'skill' },
        h('div', { class: 'skillhead' },
          h('b', null, skillName(info.id)),
          h('span', { class: 'mono' }, s.rate === null ? '—' : fmtPct(s.rate)),
          h('span', { class: 'small muted' }, T.practice.decisions(s.decisions))),
        bar(s.rate),
        h('div', { class: 'small muted' }, T.practice.skills[info.id].desc),
        h('div', { class: 'skilllinks' },
          h('button', { class: 'btn small primary', type: 'button', onclick: () => act.practiseTheme(info.theme) }, T.practice.practise),
          info.lessons.map(id => {
            const l = getLesson(id);
            if (!l) return null;
            const passed = (progress[id]?.quizBest ?? 0) >= 0.8;
            return h('button', { class: 'btn small ghost', type: 'button', onclick: () => act.openLesson(id) }, passed ? '✓ ' : '', suitText(l.title));
          })));
    })));
}

// ---------------------------------------------------------------------------
// Topics

function topicsTab(act: TrainingActions): HTMLElement {
  const cur = act.currentTheme();
  return h('div', null,
    h('p', { class: 'small muted' }, T.practice.topicsIntro),
    cur ? h('div', { class: 'box', style: 'display:flex;gap:10px;align-items:center;flex-wrap:wrap' },
      h('span', null, T.practice.nowPractising, ' ', h('b', null, T.practice.themes[cur as keyof typeof T.practice.themes]?.name ?? cur)),
      h('button', { class: 'btn small', type: 'button', onclick: () => act.practiseTheme(null) }, T.practice.stopTopic)) : null,
    SKILLS.map(sk => {
      const themes = THEMES.filter(t => t.skill === sk.id);
      if (!themes.length) return null;
      return h('div', null,
        h('h3', null, skillName(sk.id)),
        h('div', { class: 'topics' }, themes.map(t => {
          const tx = T.practice.themes[t.id as keyof typeof T.practice.themes];
          return h('div', { class: `topic ${cur === t.id ? 'on' : ''}` },
            h('div', null, h('b', null, suitText(tx?.name ?? t.id)), h('div', { class: 'small muted' }, suitText(tx?.desc ?? ''))),
            h('button', { class: 'btn small', type: 'button', onclick: () => act.practiseTheme(t.id) }, cur === t.id ? T.practice.dealAnother : T.practice.practise));
        })));
    }));
}

// ---------------------------------------------------------------------------
// History

function historyTab(act: TrainingActions): HTMLElement {
  const boards = [...loadBoards()].reverse();
  let fileInput: HTMLInputElement;
  const download = () => {
    const blob = new Blob([exportAll()], { type: 'application/json' });
    const a = h('a', { href: URL.createObjectURL(blob), download: `bridge-tutor-${new Date().toISOString().slice(0, 10)}.json` }) as HTMLAnchorElement;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const restore = (file: File) => {
    void file.text().then(text => {
      if (importAll(text)) {
        act.toast(T.practice.restored);
        act.rerender();
      } else act.toast(T.practice.restoreFailed);
    });
  };
  const rows = boards.slice(0, 150).map(b => {
    const c = boardContract(b);
    const result = c ? b.declTricks - (c.level + 6) : null;
    const mine = b.calls.filter(x => x.h && x.a !== undefined);
    const lost = b.cards.filter(x => x.h && x.dd).reduce((t, x) => t + Math.max(0, x.dd![0] - x.dd![1]), 0);
    const mistakes = b.cards.filter(x => x.h && x.sim && clearCardMistake(x.sim, x.c)).length;
    const vsPar = b.parNS === null ? null : imps(b.scoreNS - b.parNS);
    return h('tr', null,
      h('td', null, fmtDate(b.id)),
      h('td', null, String(b.board)),
      h('td', null, suitText(contractName(c)), c ? ` ${SEAT_LETTERS[c.declarer]}` : ''),
      h('td', null, result === null ? '—' : result === 0 ? '=' : result > 0 ? `+${result}` : String(result)),
      h('td', null, String(b.scoreNS)),
      h('td', null, vsPar === null ? '—' : (vsPar > 0 ? '+' : '') + vsPar),
      h('td', null, mine.length ? `${mine.filter(x => x.a === x.c).length}/${mine.length}` : '—'),
      h('td', null, b.cards.some(x => x.h) ? `${mistakes} · ${lost}` : '—'),
      h('td', { class: 'acts' },
        h('button', { class: 'btn small', type: 'button', onclick: () => act.openArchived(b.id) }, T.practice.review),
        h('button', { class: 'btn small ghost', type: 'button', onclick: () => act.replayArchived(b.id) }, T.practice.replay)));
  });
  let pasted: HTMLTextAreaElement;
  let err: HTMLElement;
  const importBox = h('div', { class: 'importbox' },
    h('h3', null, T.practice.importTitle),
    h('p', { class: 'small muted' }, T.practice.importText),
    (pasted = h('textarea', { rows: 3, placeholder: T.practice.importPlaceholder, 'aria-label': T.practice.importTitle }) as HTMLTextAreaElement),
    h('div', { style: 'display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:6px' },
      h('button', { class: 'btn small primary', type: 'button', onclick: () => { const e = act.importDeal(pasted.value); err.textContent = e ?? ''; } }, T.practice.importBtnPlay),
      (err = h('span', { class: 'small', style: 'color:var(--bad)', role: 'alert' }))));
  return h('div', null,
    importBox,
    h('h3', null, T.practice.historyTitle),
    boards.length
      ? h('div', { class: 'scroll-x' }, h('table', { class: 'hist' },
        h('thead', null, h('tr', null, T.practice.historyCols.map(t => h('th', null, t)), h('th', null, ''))),
        h('tbody', null, rows)))
      : h('p', { class: 'muted' }, T.practice.historyEmpty),
    h('p', { class: 'small muted', style: 'margin-top:10px' }, T.practice.historyNote),
    h('h3', null, T.practice.backupTitle),
    h('p', { class: 'small muted' }, T.practice.backupText),
    h('div', { style: 'display:flex;gap:8px;flex-wrap:wrap' },
      h('button', { class: 'btn small', type: 'button', onclick: download }, T.practice.exportBtn),
      h('button', { class: 'btn small', type: 'button', onclick: () => fileInput.click() }, T.practice.importBtn),
      (fileInput = h('input', { type: 'file', accept: 'application/json,.json', hidden: true, onchange: (e: Event) => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) restore(f); } }) as HTMLInputElement)));
}

// ---------------------------------------------------------------------------

export function renderTraining(act: TrainingActions): HTMLElement {
  const tabs: [TrainingTab, string][] = [['today', T.practice.tabs.today], ['review', T.practice.tabs.review], ['problems', T.practice.tabs.problems], ['skills', T.practice.tabs.skills], ['topics', T.practice.tabs.topics], ['history', T.practice.tabs.history]];
  const due = dueCount();
  const tabEl = h('div', { class: 'tabs', role: 'tablist' }, tabs.map(([k, label]) =>
    h('button', { class: `tab ${state.tab === k ? 'on' : ''}`, type: 'button', role: 'tab', onclick: () => { state.tab = k; act.rerender(); } }, label, k === 'review' && due ? h('span', { class: 'badge' }, String(due)) : null)));
  const body = state.tab === 'today' ? todayTab(act) : state.tab === 'review' ? reviewTab(act) : state.tab === 'problems' ? problemsTab(act) : state.tab === 'skills' ? skillsTab(act) : state.tab === 'topics' ? topicsTab(act) : historyTab(act);
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': T.practice.title },
    h('div', { class: 'head' }, h('h2', null, T.practice.title), tabEl, h('span', { style: 'flex:1' }),
      h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.practice.close, onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, body));
}

/** Signature for re-rendering: changes when anything shown can change. */
export function trainingSignature(): string {
  const d = state.drill;
  const ps = state.problems;
  return JSON.stringify([state.tab, d.item?.id, d.chosen, d.correct, d.pending, !!d.fresh, state.session, ps.filter, ps.current?.id, ps.chosen, ps.showDeal, ps.tick]);
}

