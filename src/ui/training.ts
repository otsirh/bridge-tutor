// The Training room: what to practise next, the review queue of your own
// mistakes (spaced repetition), accuracy per skill, practice topics and the
// archive of every board you played.

import { type Card, type Seat, N, E, S, W, SEAT_NAMES, SEAT_LETTERS, SUIT_SYMBOLS, partnerOf, cardName } from '../core/cards';
import { Auction, type Call, PASS, DOUBLE, REDOUBLE, bid, callName, contractName } from '../core/auction';
import { PlayState } from '../core/play';
import { imps } from '../core/scoring';
import { readAuction, advise, judgeCall } from '../bidding/engine';
import { decideCard, type Decision } from '../engine/playEngine';
import { explainPlay, type PlaySituation } from '../tutor/principles';
import { T, fmtDate, fmtNum, fmtPct } from '../i18n';
import { getLessons, getLesson } from '../learn/lessons';
import {
  type ArchivedBoard, type ReviewItem, loadBoards, loadItems, dueItems, answerItem, updateItem, decodeDeal,
  loadLessonProgress, streak, exportAll, importAll, INTERVALS, LAST_BOX,
} from '../game/journal';
import { SKILLS, type SkillId, skillStats, weakestSkill, skillInfo, clearCardMistake } from '../game/skills';
import { THEMES } from '../game/themes';
import { h, suitText } from './dom';
import { handEl, cardText } from './cards';
import './training.css';

export type TrainingTab = 'today' | 'review' | 'skills' | 'topics' | 'history';

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
}

interface DrillState {
  item: ReviewItem | null;
  chosen: number | null;
  correct: boolean | null;
  fresh: Decision | null; // simulation run for a card that is neither the answer nor your original choice
  pending: boolean;
}

const state = {
  tab: 'today' as TrainingTab,
  drill: { item: null, chosen: null, correct: null, fresh: null, pending: false } as DrillState,
  session: { done: 0, right: 0 },
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

function cardItemView(item: ReviewItem, act: TrainingActions): HTMLElement {
  const d = state.drill;
  const { play } = itemPosition(item);
  const p = play!;
  const seat = p.toPlay;
  const c = p.contract;
  const declaring = (seat & 1) === (c.declarer & 1);
  const legal = new Set(p.legal());
  const done = d.chosen !== null;
  const mainHand = handEl(p.hands[seat], card => ({ playable: !done && legal.has(card), dim: !legal.has(card), rec: done && item.answer.includes(card), onClick: () => answerCard(act, card) }));
  const other = declaring ? partnerOf(seat) : p.openingLeadMade ? p.dummy : null;
  const cur = p.current;
  let fb: HTMLElement | null = null;
  if (d.pending) fb = h('div', { class: 'box small' }, T.practice.simulating);
  else if (done && d.correct !== null) {
    const sim = item.sim;
    const best = item.answer[0];
    const pr = explainPlay(situation(p), best);
    const fresh = d.fresh;
    const freshMine = fresh?.stats.find(s => s.card === d.chosen);
    fb = h('div', { class: `box ${d.correct ? '' : 'warnbox'}` },
      h('b', null, suitText(d.correct ? T.practice.cardRight : T.practice.cardWrong(item.answer.map(cardName).join(', ')))),
      sim ? h('p', { style: 'margin:6px 0' }, suitText(T.practice.cardSim(sim.n, cardName(best), fmtNum(sim.bt, 2), fmtPct(sim.bs), cardName(item.yours), fmtNum(sim.mt, 2), fmtPct(sim.ms), declaring))) : null,
      fresh && freshMine ? h('p', { class: 'small', style: 'margin:6px 0' }, suitText(T.practice.cardFresh(cardName(d.chosen!), fmtNum(freshMine.tricks, 2), fmtPct(freshMine.success), fresh.samples))) : null,
      h('div', { class: 'principle' }, h('b', null, pr.title), suitText(pr.text)));
  }
  return h('div', { class: 'drill' },
    h('div', { class: 'prompt' }, h('b', null, T.practice.cardPrompt), ' ', suitText(T.practice.cardSituation(contractName(c), SEAT_NAMES[c.declarer], SEAT_NAMES[seat], p.tricks.length))),
    h('div', { style: 'display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start' },
      h('div', { class: 'feltbox' },
        other !== null ? h('div', { class: 'small', style: 'color:var(--felt-muted)' }, other === p.dummy ? T.practice.dummyLabel(SEAT_NAMES[other]) : SEAT_NAMES[other]) : null,
        other !== null ? handEl(p.hands[other], () => ({})) : null,
        cur.cards.length ? h('div', { class: 'small', style: 'color:var(--felt-muted);margin-top:6px' }, T.practice.trickSoFar, ' ', cur.cards.map((x, k) => h('span', { style: 'margin-right:8px' }, SEAT_LETTERS[(cur.leader + k) & 3], ' ', cardText(x)))) : null,
        h('div', { class: 'small', style: 'color:var(--felt-muted);margin-top:6px' }, T.practice.yourHand(SEAT_NAMES[seat])),
        mainHand),
      auctionTable(item.dealer, item.calls, item.vul, false)),
    trickRow(p),
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
      h('span', null, T.practice.itemFrom(fmtDate(item.created), item.board)),
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
  return h('div', null,
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
  const tabs: [TrainingTab, string][] = [['today', T.practice.tabs.today], ['review', T.practice.tabs.review], ['skills', T.practice.tabs.skills], ['topics', T.practice.tabs.topics], ['history', T.practice.tabs.history]];
  const due = dueCount();
  const tabEl = h('div', { class: 'tabs', role: 'tablist' }, tabs.map(([k, label]) =>
    h('button', { class: `tab ${state.tab === k ? 'on' : ''}`, type: 'button', role: 'tab', onclick: () => { state.tab = k; act.rerender(); } }, label, k === 'review' && due ? h('span', { class: 'badge' }, String(due)) : null)));
  const body = state.tab === 'today' ? todayTab(act) : state.tab === 'review' ? reviewTab(act) : state.tab === 'skills' ? skillsTab(act) : state.tab === 'topics' ? topicsTab(act) : historyTab(act);
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': T.practice.title },
    h('div', { class: 'head' }, h('h2', null, T.practice.title), tabEl, h('span', { style: 'flex:1' }),
      h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.practice.close, onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, body));
}

/** Signature for re-rendering: changes when anything shown can change. */
export function trainingSignature(): string {
  const d = state.drill;
  return JSON.stringify([state.tab, d.item?.id, d.chosen, d.correct, d.pending, !!d.fresh, state.session]);
}

