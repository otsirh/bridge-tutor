// The post-hand review: result vs par, the bidding call by call, the play
// trick by trick with double-dummy verdicts, and the lessons to take away.

import { type Seat, type Card, type Vulnerability, N, E, S, W, SEAT_NAMES, SEAT_LETTERS, STRAIN_SYMBOLS, cardName, suitOf, hcp } from '../core/cards';
import { type Contract, PASS, callName, contractName } from '../core/auction';
import { scoreNS } from '../core/scoring';
import { PlayState } from '../core/play';
import { describeShown } from '../bidding/types';
import type { BidAdvice } from '../bidding/engine';
import type { Game, CardReview } from '../game/game';
import { simVerdict } from '../game/record';
import { describeSignal } from '../tutor/signals';
import { clearCardMistake } from '../game/skills';
import { TECHNIQUE_INFO } from '../game/techniques';
import { getLesson } from '../learn/lessons';
import { toPBN } from '../core/pbn';
import { bboHandviewerUrl } from '../core/lin';
import { encodeBoard } from '../core/share';
import type { BoardData } from '../core/pbn';
import { T, fmtLabel, fmtList, fmtNum, fmtPct, fmtSigned, fmtUnit } from '../i18n';
import { h, suitText } from './dom';
import { diagramHand, cardText } from './cards';
import type { UIState } from './app';

export interface ReviewActions {
  rerender(): void;
  close(): void;
  /** Play the same deal again. */
  replay(): void;
  /** Deal the next board (absent when reviewing an archived board). */
  next?: () => void;
  /** Take the hand back to just before card `index` and play on from there (absent for an archived board). */
  retry?: (index: number) => void;
  toast(msg: string): void;
  /** Open a lesson in the Learn room. */
  openLesson?: (id: string) => void;
  /** Technique practice: the next technique deal, and this one again from its key moment. */
  nextTechnique?: () => void;
  playFromKey?: () => void;
}

/** A rule's name, or "Pass" when no rule beats passing. */
const ruleName = (a: BidAdvice) => a.rule?.name ?? callName(PASS);

function hero(g: Game): HTMLElement {
  const rv = g.review!;
  const t = T.ui.review;
  const c = rv.contract;
  const tiles: HTMLElement[] = [];
  // bidding only: the result is the double-dummy one, known once the table is solved
  const pending = rv.bidOnly && !rv.table;
  if (c) {
    const diff = rv.declTricks - (c.level + 6);
    tiles.push(tile(t.contract, suitText(`${contractName(c)} ${SEAT_LETTERS[c.declarer]}`), pending ? '…' : diff >= 0 ? (diff ? t.madeOver(diff) : t.madeExactly) : t.down(-diff)));
  } else tiles.push(tile(t.contract, contractName(null), t.noScore));
  tiles.push(tile(t.score, pending ? '…' : fmtSigned(rv.scoreNS), c && !pending ? t.declTricks(rv.declTricks) : ''));
  if (rv.par) tiles.push(tile(t.par, fmtSigned(rv.par.scoreNS), suitText(fmtList(rv.par.contracts))));
  else tiles.push(tile(t.par, '…', t.solvingPar));
  if (rv.impsVsPar !== null) tiles.push(tile(t.vsPar, `${fmtSigned(rv.impsVsPar)} ${t.imps(rv.impsVsPar)}`, rv.impsVsPar >= 0 ? t.atOrAbovePar : t.belowPar));
  if (c && rv.ddResult !== null && !rv.bidOnly) tiles.push(tile(t.doubleDummy, fmtUnit(rv.ddResult, T.core.tricks(rv.ddResult)), t.bestPlayAll(rv.ddResult - (c.level + 6) >= 0)));
  if (rv.system) {
    const s = rv.system.contract;
    const same = (!!s && !!c && contractName(s) === contractName(c) && s.declarer === c.declarer) || (!s && !c);
    tiles.push(tile(t.systemContract, suitText(s ? `${contractName(s)} ${SEAT_LETTERS[s.declarer]}` : contractName(null)),
      same ? t.systemSame : t.systemDiff(`${fmtSigned(rv.system.imps)} ${t.imps(rv.system.imps)}`)));
  }
  const mine = g.calls.filter(x => x.human);
  if (mine.length) tiles.push(tile(t.yourBidding, `${mine.filter(x => x.agrees).length}/${mine.length}`, t.callsMatching));
  const costs = humanCosts(g);
  // (bidding only: no card play to judge)
  if (costs.done && !rv.bidOnly) tiles.push(tile(t.yourPlay, costs.total === 0 ? t.noErrors : fmtUnit(`−${costs.total}`, T.core.tricks(costs.total)), t.ddCards(costs.count)));
  else if (g.cards.some(x => x.human)) tiles.push(tile(t.yourPlay, '…', t.analysing(fmtPct(rv.progress))));
  const sd = singleDummy(g);
  if (sd.cards) {
    const checking = rv.sim.total > 0 && rv.sim.done < rv.sim.total;
    tiles.push(tile(t.sdTitle, checking ? '…' : sd.errors === 0 ? t.noErrors : t.sdErrors(sd.errors), checking ? t.sdChecking(rv.sim.done, rv.sim.total) : t.sdNote(sd.judged)));
  }
  return h('div', null, h('div', { class: 'result-hero' }, tiles), rv.bidOnly ? h('p', { class: 'small muted', style: 'margin:6px 0 0' }, t.bidOnlyNote) : null);
}

/** "none vulnerable", "N/S vulnerable"… */
export function vulLabel(v: Vulnerability) {
  return T.ui.common.vul[v];
}

function tile(k: string, v: string | HTMLElement, n: string | HTMLElement): HTMLElement {
  return h('div', { class: 'tile' }, h('div', { class: 'k' }, k), h('div', { class: 'v' }, v), h('div', { class: 'n' }, n));
}

/** Your cards judged with the information you had: how many were clearly worse than the best. */
function singleDummy(g: Game) {
  let cards = 0, judged = 0, errors = 0;
  g.cards.forEach(e => {
    if (!e.human) return;
    cards++;
    const v = simVerdict(e.advice, e.card);
    if (!v) return;
    judged++;
    if (clearCardMistake(v, e.card)) errors++;
  });
  return { cards, judged, errors };
}

function humanCosts(g: Game) {
  const rv = g.review!;
  let total = 0, count = 0;
  g.cards.forEach((e, i) => {
    if (!e.human) return;
    count++;
    const r = rv.cards[i];
    if (r) total += Math.max(0, r.bestSide - r.gotSide);
  });
  return { total, count, done: rv.progress >= 1 || !g.cards.some(x => x.human) };
}

function dealDiagram(g: Game, hands: Card[][] = g.deal, center?: string): HTMLElement {
  const lbl = (s: Seat) => `${SEAT_NAMES[s]}${s === S ? T.ui.review.youTag : ''} · ${fmtUnit(hands[s].reduce((t, c) => t + Math.max(0, (c % 13) - 8), 0), T.core.hcp)}`;
  return h('div', { class: 'diagram' },
    h('div', { class: 'n' }, diagramHand(hands[N], lbl(N))),
    h('div', { class: 'w' }, diagramHand(hands[W], lbl(W))),
    h('div', { class: 'c' }, center ?? `${T.ui.common.board(g.board)}\n${vulLabel(g.vul)}`),
    h('div', { class: 'e' }, diagramHand(hands[E], lbl(E))),
    h('div', { class: 's' }, diagramHand(hands[S], lbl(S))));
}

function ddTableEl(g: Game): HTMLElement {
  const t = g.review!.table;
  if (!t) return h('p', { class: 'muted' }, T.ui.review.solvingTable);
  const rows = [4, 3, 2, 1, 0].map(st => h('tr', null, h('th', null, suitText(STRAIN_SYMBOLS[st])), [N, S, E, W].map(d => {
    const tricks = t[st][d];
    return h('td', { class: tricks >= 7 ? 'make' : '' }, tricks >= 7 ? String(tricks - 6) : '—');
  })));
  return h('div', { class: 'scroll-x' },
    h('table', { class: 'ddt' }, h('thead', null, h('tr', null, h('th', null, ''), [N, S, E, W].map(x => h('th', null, SEAT_LETTERS[x])))), h('tbody', null, rows)),
    h('p', { class: 'small muted' }, T.ui.review.ddTableNote));
}

/**
 * The decisions that mattered most: where, with the information available,
 * the best card did clearly better than the worst (right or wrong).
 */
function keyMoments(g: Game, act: ReviewActions): HTMLElement | null {
  const t = T.ui.review;
  const moments = g.cards
    .filter(e => e.human && e.advice && e.advice.samples >= 8 && e.advice.stats.length > 1)
    .map(e => {
      const st = e.advice!.stats;
      const best = st.reduce((a, b) => (b.success > a.success || (b.success === a.success && b.tricks > a.tricks) ? b : a));
      const worst = st.reduce((a, b) => (b.success < a.success || (b.success === a.success && b.tricks < a.tricks) ? b : a));
      const mine = st.find(s => s.card === e.card);
      return { e, best, worst, mine, gap: best.success - worst.success + (best.tricks - worst.tricks) / 4 };
    })
    .filter(m => m.mine && m.gap >= 0.2)
    .sort((a, b) => b.gap - a.gap)
    .slice(0, 3)
    .sort((a, b) => g.cards.indexOf(a.e) - g.cards.indexOf(b.e));
  if (!moments.length) return null;
  return h('div', null, h('h3', null, t.keyMoments), h('p', { class: 'small muted' }, t.keyMomentsText),
    h('ul', null, moments.map(m => {
      const right = m.e.advice!.equal.includes(m.e.card);
      return h('li', null,
        h('b', null, suitText(t.keyMoment(m.e.trick + 1, cardName(m.e.card), right))), ' ',
        suitText(Math.abs(m.best.success - m.worst.success) >= 0.1
          ? t.keyMomentNumbers(cardName(m.best.card), fmtPct(m.best.success), cardName(m.worst.card), fmtPct(m.worst.success))
          : t.keyMomentTricks(cardName(m.best.card), fmtNum(m.best.tricks, 1), cardName(m.worst.card), fmtNum(m.worst.tricks, 1))),
        right && m.e.principle ? h('span', { class: 'muted' }, ` · ${m.e.principle.title}`) : null,
        act.retry && g.canRewindTo(g.cards.indexOf(m.e))
          ? h('button', { class: 'btn small ghost', type: 'button', style: 'margin-left:6px', onclick: () => act.retry!(g.cards.indexOf(m.e)) }, t.tryAgain)
          : null);
    })));
}

/**
 * A technique deal: the key moment — found, missed, or never reached — with
 * the walk's simulation, the principle, and the lesson that teaches it.
 */
function techniqueBox(g: Game, act: ReviewActions): HTMLElement | null {
  const run = g.technique;
  const out = g.techniqueOutcome();
  if (!run || !out || out.status === 'ahead') return null;
  const X = T.practice.techniques;
  const td = run.deal;
  const id = td.technique;
  const trick = Math.floor(out.index / 4) + 1;
  const reached = out.status === 'found' || out.status === 'missed';
  const best = out.stats[0];
  const mine = out.card !== undefined ? out.stats.find(s => s.c === out.card) : undefined;
  const other = out.stats.find(s => !out.best.includes(s.c));
  const statusLine = out.status === 'found' ? X.found(trick, cardName(out.card!))
    : out.status === 'missed' ? X.missed(trick, cardName(out.card!), fmtList(out.best.map(cardName)))
      : out.status === 'offScript' ? X.offScript(trick) : X.auto(trick);
  const lessonId = TECHNIQUE_INFO[id].lesson;
  const lesson = getLesson(lessonId);
  return h('div', { class: `box techbox ${out.status === 'found' ? 'rightbox' : out.status === 'missed' ? 'warnbox' : ''}` },
    h('h3', { style: 'margin:0' }, X.reviewTitle(X.names[id])),
    h('p', { class: 'tline' }, h('b', null, suitText(statusLine))),
    h('p', { class: 'tline small' }, suitText(X.simBest(td.n, cardName(best.c), fmtNum(best.t, 2), fmtPct(best.s))), ' ',
      out.status === 'missed' && mine ? suitText(X.simYours(cardName(mine.c), fmtNum(mine.t, 2), fmtPct(mine.s)))
        : other ? suitText(X.simOther(cardName(other.c), fmtNum(other.t, 2), fmtPct(other.s))) : null),
    h('div', { class: 'principle' }, h('b', null, X.names[id]), suitText(X.why[id])),
    out.status === 'missed' && !g.peeked ? h('p', { class: 'small muted', style: 'margin:8px 0 0' }, X.addedToReview) : null,
    h('div', { class: 'pbtns' },
      act.nextTechnique ? h('button', { class: 'btn primary small', type: 'button', onclick: () => act.nextTechnique!() }, X.next) : null,
      reached && act.retry && g.canRewindTo(out.index) ? h('button', { class: 'btn small', type: 'button', onclick: () => act.retry!(out.index) }, X.tryAgain) : null,
      !reached && act.playFromKey ? h('button', { class: 'btn small', type: 'button', onclick: () => act.playFromKey!() }, X.playFromKey) : null,
      lesson && act.openLesson ? h('button', { class: 'btn small ghost', type: 'button', onclick: () => act.openLesson!(lessonId) }, suitText(T.practice.readLesson(lesson.title))) : null));
}

/** 0 partscore, 1 game, 2 slam. */
function bonusLevel(c: Contract): number {
  if (c.level >= 6) return 2;
  return c.level >= (c.strain === 4 ? 3 : c.strain >= 2 ? 4 : 5) ? 1 : 0;
}

/**
 * The game or slam North-South missed: their best contract with best play
 * (by score) when it is a level above the one they played (or defended).
 */
function missedBonus(played: Contract | null, table: number[][], vul: Vulnerability): { contract: Contract; slam: boolean } | null {
  let best: { contract: Contract; score: number } | null = null;
  for (let strain = 0; strain < 5; strain++) {
    for (const declarer of [N, S] as Seat[]) {
      const tricks = table[strain][declarer];
      if (tricks < 7) continue;
      const contract: Contract = { level: Math.min(7, tricks - 6), strain: strain as Contract['strain'], declarer, doubled: 0 };
      const score = scoreNS(contract, tricks, vul);
      if (!best || score > best.score) best = { contract, score };
    }
  }
  if (!best) return null;
  const ours = played && (played.declarer & 1) === 0 ? bonusLevel(played) : 0;
  const there = bonusLevel(best.contract);
  return there > ours ? { contract: best.contract, slam: there === 2 } : null;
}

function lessons(g: Game): HTMLElement {
  const rv = g.review!;
  const t = T.ui.review;
  const items: HTMLElement[] = [];
  for (const c of g.calls) {
    if (!c.human || c.agrees || !c.advice) continue;
    items.push(h('li', null, suitText(t.lessonBid(callName(c.call), c.meaning.name, callName(c.advice.call), ruleName(c.advice))), h('span', { class: 'muted' }, suitText(c.advice.rule?.desc ?? ''))));
  }
  g.cards.forEach((e, i) => {
    if (!e.human) return;
    const r = rv.cards[i];
    if (!r || r.bestSide - r.gotSide <= 0) return;
    const best = r.values.filter(v => v.side === r.bestSide).map(v => cardName(v.card));
    items.push(h('li', null, suitText(t.lessonCard(e.trick + 1, cardName(e.card), r.bestSide - r.gotSide, fmtList(best.slice(0, 3)))),
      e.advice && e.advice.samples > 0 && e.advice.equal.includes(e.card) ? h('span', { class: 'muted' }, t.bestOnInfo) : e.principle ? h('span', { class: 'muted' }, `· ${e.principle.title}`) : null));
  });
  if (rv.contract && rv.par && rv.table) {
    const c = rv.contract;
    const tricks = rv.table[c.strain][c.declarer];
    items.push(h('li', null, suitText(t.lessonContract(contractName(c), tricks >= c.level + 6, tricks, fmtList(rv.par.contracts)))));
  }
  const missed = rv.table && missedBonus(rv.contract, rv.table, g.vul);
  if (missed) {
    const hcpNS = hcp(g.deal[N]) + hcp(g.deal[S]);
    const name = T.ui.common.contractBy(contractName(missed.contract), SEAT_NAMES[missed.contract.declarer]);
    items.push(h('li', null, suitText((missed.slam ? t.missedSlam : t.missedGame)(name, fmtUnit(hcpNS, T.core.hcp)))));
  }
  if (!items.length) items.push(h('li', null, t.cleanHand));
  return h('ul', null, items);
}

function biddingTab(g: Game): HTMLElement {
  return h('div', { class: 'feed' }, g.calls.map(c => h('div', { class: `item ${c.human ? (c.agrees ? 'good' : 'warn') : 'info'}` },
    h('b', null, suitText(fmtLabel(SEAT_NAMES[c.seat], `${callName(c.call)} — ${c.meaning.name}`))),
    h('div', null, suitText(c.meaning.desc)),
    describeShown(c.meaning.shown) ? h('div', { class: 'small muted' }, T.ui.common.shows, suitText(describeShown(c.meaning.shown))) : null,
    c.human && c.advice && !c.agrees ? h('div', { class: 'small', style: 'margin-top:4px' }, suitText(T.ui.review.system(callName(c.advice.call), ruleName(c.advice), c.advice.rule?.desc ?? ''))) : null)));
}

function playTab(g: Game, ui: UIState, act: ReviewActions): HTMLElement {
  const rv = g.review!;
  const t = T.ui.review;
  if (!rv.contract) return h('p', null, t.noPlay);
  const p = new PlayState(rv.contract, g.deal);
  const rows: HTMLElement[] = [];
  const handsAt: Card[][][] = [];
  const byTrick = new Map<number, { e: (typeof g.cards)[number]; i: number }[]>();
  g.cards.forEach((e, i) => {
    if (!byTrick.has(e.trick)) byTrick.set(e.trick, []);
    byTrick.get(e.trick)!.push({ e, i });
  });
  for (let n = 0; n < 13 && byTrick.has(n); n++) {
    handsAt[n] = p.hands.map(x => [...x]);
    const plays = byTrick.get(n)!;
    for (const { e } of plays) p.play(e.card);
    const trick = p.tricks[n];
    const cost = plays.reduce((tot, { i, e }) => tot + (e.human && rv.cards[i] ? Math.max(0, rv.cards[i]!.bestSide - rv.cards[i]!.gotSide) : 0), 0);
    const pick = () => { ui.reviewTrick = ui.reviewTrick === n ? null : n; act.rerender(); };
    rows.push(h('div', {
      class: `trickrow ${ui.reviewTrick === n ? 'sel' : ''}`, role: 'button', tabindex: '0', 'aria-expanded': ui.reviewTrick === n ? 'true' : 'false', onclick: pick,
      onkeydown: (e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } },
    },
      h('span', { class: 'muted mono' }, String(n + 1)),
      plays.map(({ e, i }) => {
        const r = rv.cards[i];
        const c = r ? r.bestSide - r.gotSide : 0;
        return h('span', { class: `tc ${e.human ? 'you' : ''} ${trick.winner === e.seat ? 'won' : ''}`, title: e.signal ? describeSignal(e.signal) : undefined }, h('span', { class: 'who' }, SEAT_LETTERS[e.seat]), cardText(e.card), e.signal ? h('span', { class: 'sig', 'aria-label': describeSignal(e.signal) }, '•') : null, c > 0 ? h('span', { class: 'cost', title: t.costTitle }, `−${c}`) : null);
      }),
      h('span', { class: 'costcol small muted' }, cost > 0 ? t.youCost(cost) : '')));
  }
  let detail: HTMLElement | null = null;
  if (ui.reviewTrick !== null && handsAt[ui.reviewTrick]) {
    const n = ui.reviewTrick;
    const plays = byTrick.get(n)!;
    const verdicts = plays.map(({ e, i }) => {
      const r: CardReview | null = rv.cards[i];
      if (!r) return h('div', { class: 'small' }, h('b', null, `${SEAT_NAMES[e.seat]}: `), cardText(e.card), t.forced);
      const vals = [...r.values].sort((a, b) => b.side - a.side);
      return h('div', { class: 'small' }, h('b', null, `${SEAT_NAMES[e.seat]}: `), cardText(e.card), t.verdict(r.gotSide, e.seat & 1 ? T.ui.common.sideEW : T.ui.common.sideNS, r.bestSide),
        h('span', { class: 'muted' }, t.options, vals.map((v, k) => h('span', null, k ? ', ' : '', cardText(v.card), ` ${v.side}`))),
        e.signal ? h('div', null, h('span', { class: 'chip sigchip' }, describeSignal(e.signal))) : null,
        e.principle ? h('div', { class: 'muted' }, fmtLabel(e.principle.title, e.principle.text)) : null);
    });
    detail = h('div', { class: 'box', style: 'margin-top:10px' }, h('b', null, t.beforeTrick(n + 1)), dealDiagram(g, handsAt[n], t.trick(n + 1)), h('div', { style: 'display:grid;gap:6px;margin-top:10px' }, verdicts));
  }
  return h('div', null,
    rv.progress < 1 ? h('p', { class: 'small muted' }, t.analysingAll(fmtPct(rv.progress))) : null,
    h('p', { class: 'small muted' }, t.playLegend),
    h('div', { class: 'tricklist' }, rows), detail);
}

/** The finished board in the interchange formats. */
function boardData(g: Game): BoardData {
  return { board: g.board, dealer: g.dealer, vul: g.vul, deal: g.deal.map(x => [...x]), calls: [...g.auction.calls], play: g.cards.map(c => c.card) };
}

async function copy(text: string, act: ReviewActions): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    act.toast(T.ui.review.copied);
    return true;
  } catch {
    return false;
  }
}

function shareBox(g: Game, act: ReviewActions): HTMLElement {
  const t = T.ui.review;
  const out = h('textarea', { class: 'sharetext', readonly: true, rows: 3, hidden: true, 'aria-label': t.copyManual }) as HTMLTextAreaElement;
  const offer = (text: string) => {
    void copy(text, act).then(ok => {
      if (ok) return;
      // no clipboard access (e.g. inside a frame): show the text to copy by hand
      out.value = text;
      out.hidden = false;
      out.focus();
      out.select();
    });
  };
  const b = boardData(g);
  const link = () => `${location.href.split('#')[0]}#b=${encodeBoard(b)}`;
  return h('div', { class: 'share' },
    h('h3', null, t.share),
    h('p', { class: 'small muted' }, t.shareText),
    h('div', { style: 'display:flex;gap:6px;flex-wrap:wrap' },
      h('button', { class: 'btn small', type: 'button', onclick: () => offer(link()) }, t.copyLink),
      h('button', { class: 'btn small', type: 'button', onclick: () => offer(encodeBoard(b)) }, t.copyCode),
      h('button', { class: 'btn small', type: 'button', onclick: () => offer(toPBN(b)) }, t.copyPBN),
      h('a', { class: 'btn small', href: bboHandviewerUrl(b), target: '_blank', rel: 'noopener' }, t.openBBO)),
    out);
}

export function renderReview(g: Game, ui: UIState, act: ReviewActions): HTMLElement {
  const rv = g.review;
  if (!rv) return h('div');
  const t = T.ui.review;
  const c = rv.contract;
  const title = c ? T.ui.common.contractBy(contractName(c), SEAT_NAMES[c.declarer]) : contractName(null);
  const tab = ui.reviewTab;
  const tabs = h('div', { class: 'tabs', role: 'tablist' }, (['summary', 'bidding', 'play'] as const).map(k => h('button', { class: `tab ${tab === k ? 'on' : ''}`, type: 'button', role: 'tab', onclick: () => { ui.reviewTab = k; act.rerender(); } }, t.tabs[k])));
  let body: HTMLElement;
  if (tab === 'summary') {
    body = h('div', null, hero(g), techniqueBox(g, act),
      h('div', { class: 'grid2' },
        h('div', null, h('h3', null, t.takeaways), lessons(g), keyMoments(g, act), shareBox(g, act)),
        h('div', null, h('h3', null, t.theDeal), dealDiagram(g), h('h3', null, t.ddMakes), ddTableEl(g))));
  } else if (tab === 'bidding') body = biddingTab(g);
  else body = playTab(g, ui, act);
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': t.label },
    h('div', { class: 'head' }, h('h2', null, suitText(fmtLabel(T.ui.common.board(g.board), title))), tabs, h('span', { style: 'flex:1' }),
      h('button', { class: 'btn', type: 'button', onclick: () => act.replay() }, t.replay),
      act.next ? h('button', { class: 'btn primary', type: 'button', onclick: () => act.next!() }, t.nextDeal) : null,
      h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.ui.common.close, onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, body));
}

export function reviewSignature(g: Game, ui: UIState): string {
  const rv = g.review;
  return JSON.stringify([g.board, g.seed, g.boardId, rv ? [rv.progress, !!rv.table, !!rv.system, rv.cards.filter(Boolean).length, rv.sim] : null, ui.reviewTab, ui.reviewTrick]);
}

export { suitOf };
