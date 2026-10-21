// The post-hand review: result vs par, the bidding call by call, the play
// trick by trick with double-dummy verdicts, and the lessons to take away.

import { type Seat, type Card, type Vulnerability, N, E, S, W, SEAT_NAMES, SEAT_LETTERS, STRAIN_SYMBOLS, cardName, suitOf } from '../core/cards';
import { PASS, callName, contractName } from '../core/auction';
import { PlayState } from '../core/play';
import { describeShown } from '../bidding/types';
import type { BidAdvice } from '../bidding/engine';
import type { Game, CardReview } from '../game/game';
import { T, fmtPct, fmtSigned } from '../i18n';
import { h, suitText } from './dom';
import { diagramHand, cardText } from './cards';
import type { UIState } from './app';

export interface ReviewActions {
  rerender(): void;
  close(): void;
}

/** A rule's name, or "Pass" when no rule beats passing. */
const ruleName = (a: BidAdvice) => a.rule?.name ?? callName(PASS);

function hero(g: Game): HTMLElement {
  const rv = g.review!;
  const t = T.ui.review;
  const c = rv.contract;
  const tiles: HTMLElement[] = [];
  if (c) {
    const diff = rv.declTricks - (c.level + 6);
    tiles.push(tile(t.contract, suitText(`${contractName(c)} ${SEAT_LETTERS[c.declarer]}`), diff >= 0 ? (diff ? t.madeOver(diff) : t.madeExactly) : t.down(-diff)));
  } else tiles.push(tile(t.contract, contractName(null), t.noScore));
  tiles.push(tile(t.score, fmtSigned(rv.scoreNS), c ? t.declTricks(rv.declTricks) : ''));
  if (rv.par) tiles.push(tile(t.par, fmtSigned(rv.par.scoreNS), suitText(rv.par.contracts.join(', '))));
  else tiles.push(tile(t.par, '…', t.solvingPar));
  if (rv.impsVsPar !== null) tiles.push(tile(t.vsPar, `${fmtSigned(rv.impsVsPar)} ${t.imps(rv.impsVsPar)}`, rv.impsVsPar >= 0 ? t.atOrAbovePar : t.belowPar));
  if (c && rv.ddResult !== null) tiles.push(tile(t.doubleDummy, `${rv.ddResult} ${T.core.tricks(rv.ddResult)}`, t.bestPlayAll(rv.ddResult - (c.level + 6) >= 0)));
  const mine = g.calls.filter(x => x.human);
  if (mine.length) tiles.push(tile(t.yourBidding, `${mine.filter(x => x.agrees).length}/${mine.length}`, t.callsMatching));
  const costs = humanCosts(g);
  if (costs.done) tiles.push(tile(t.yourPlay, costs.total === 0 ? t.noErrors : `−${costs.total} ${T.core.tricks(costs.total)}`, t.ddCards(costs.count)));
  else if (g.cards.some(x => x.human)) tiles.push(tile(t.yourPlay, '…', t.analysing(fmtPct(rv.progress))));
  return h('div', { class: 'result-hero' }, tiles);
}

/** "none vulnerable", "N/S vulnerable"… */
export function vulLabel(v: Vulnerability) {
  return T.ui.common.vul[v];
}

function tile(k: string, v: string | HTMLElement, n: string | HTMLElement): HTMLElement {
  return h('div', { class: 'tile' }, h('div', { class: 'k' }, k), h('div', { class: 'v' }, v), h('div', { class: 'n' }, n));
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
  const lbl = (s: Seat) => `${SEAT_NAMES[s]}${s === S ? T.ui.review.youTag : ''} · ${hands[s].reduce((t, c) => t + Math.max(0, (c % 13) - 8), 0)} ${T.core.hcp}`;
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
    items.push(h('li', null, suitText(t.lessonCard(e.trick + 1, cardName(e.card), r.bestSide - r.gotSide, best.slice(0, 3).join(', '))),
      e.advice && e.advice.samples > 0 && e.advice.equal.includes(e.card) ? h('span', { class: 'muted' }, t.bestOnInfo) : e.principle ? h('span', { class: 'muted' }, `${e.principle.title}.`) : null));
  });
  if (rv.contract && rv.par && rv.table) {
    const c = rv.contract;
    const tricks = rv.table[c.strain][c.declarer];
    items.push(h('li', null, suitText(t.lessonContract(contractName(c), tricks >= c.level + 6, tricks, rv.par.contracts.join(', ')))));
  }
  if (!items.length) items.push(h('li', null, t.cleanHand));
  return h('ul', null, items);
}

function biddingTab(g: Game): HTMLElement {
  return h('div', { class: 'feed' }, g.calls.map(c => h('div', { class: `item ${c.human ? (c.agrees ? 'good' : 'warn') : 'info'}` },
    h('b', null, suitText(`${SEAT_NAMES[c.seat]}: ${callName(c.call)} — ${c.meaning.name}`)),
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
  let idx = 0;
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
    rows.push(h('div', { class: `trickrow ${ui.reviewTrick === n ? 'sel' : ''}`, role: 'button', tabindex: '0', onclick: () => { ui.reviewTrick = ui.reviewTrick === n ? null : n; act.rerender(); } },
      h('span', { class: 'muted mono' }, String(n + 1)),
      plays.map(({ e, i }) => {
        const r = rv.cards[i];
        const c = r ? r.bestSide - r.gotSide : 0;
        return h('span', { class: `tc ${e.human ? 'you' : ''} ${trick.winner === e.seat ? 'won' : ''}` }, h('span', { class: 'who' }, SEAT_LETTERS[e.seat]), cardText(e.card), c > 0 ? h('span', { class: 'cost', title: t.costTitle }, `−${c}`) : null);
      }),
      h('span', { class: 'costcol small muted' }, cost > 0 ? t.youCost(cost) : '')));
    idx++;
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
        e.principle ? h('div', { class: 'muted' }, `${e.principle.title}: ${e.principle.text}`) : null);
    });
    detail = h('div', { class: 'box', style: 'margin-top:10px' }, h('b', null, t.beforeTrick(n + 1)), dealDiagram(g, handsAt[n], t.trick(n + 1)), h('div', { style: 'display:grid;gap:6px;margin-top:10px' }, verdicts));
  }
  return h('div', null,
    rv.progress < 1 ? h('p', { class: 'small muted' }, t.analysingAll(fmtPct(rv.progress))) : null,
    h('p', { class: 'small muted' }, t.playLegend),
    h('div', { class: 'tricklist' }, rows), detail);
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
    body = h('div', null, hero(g),
      h('div', { class: 'grid2' },
        h('div', null, h('h3', null, t.takeaways), lessons(g)),
        h('div', null, h('h3', null, t.theDeal), dealDiagram(g), h('h3', null, t.ddMakes), ddTableEl(g))));
  } else if (tab === 'bidding') body = biddingTab(g);
  else body = playTab(g, ui, act);
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': t.label },
    h('div', { class: 'head' }, h('h2', null, suitText(`${T.ui.common.board(g.board)}: ${title}`)), tabs, h('span', { style: 'flex:1' }),
      h('button', { class: 'btn', type: 'button', onclick: () => { act.close(); g.newDeal(true); } }, t.replay),
      h('button', { class: 'btn primary', type: 'button', onclick: () => { act.close(); g.newDeal(); } }, t.nextDeal),
      h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.ui.common.close, onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, body));
}

export function reviewSignature(g: Game, ui: UIState): string {
  const rv = g.review;
  return JSON.stringify([g.board, g.seed, rv ? [rv.progress, !!rv.table, rv.cards.filter(Boolean).length] : null, ui.reviewTab, ui.reviewTrick]);
}

export { suitOf };
