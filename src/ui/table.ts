// The felt: four hands, the trick or the auction, the bidding box.

import { type Seat, type Card, N, E, S, W, SEAT_NAMES, STRAIN_SYMBOLS, suitOf } from '../core/cards';
import { type Call, PASS, DOUBLE, REDOUBLE, bid, callName, isBid, levelOf, contractName } from '../core/auction';
import { readAuction } from '../bidding/engine';
import { Auction } from '../core/auction';
import type { Game } from '../game/game';
import { T, fmtLabel, fmtUnit, locale } from '../i18n';
import { h, suitText } from './dom';
import { handEl, miniHand, backEl, cardEl } from './cards';
import type { UIState } from './app';

const SLOT = ['n', 'e', 's', 'w'];
let lastAnimated = '';

export interface TableActions {
  rerender(): void;
  selectCall(index: number | null): void;
  preview(call: Call | null): void;
  toast(msg: string): void;
  openReview(): void;
  next(): void;
  /** The compact bidding pad (phones): choose a level, then a call; choosing the call again makes it. */
  pickLevel(level: number): void;
  choose(call: Call): void;
}

function seatTitle(g: Game, seat: Seat): string {
  if (seat === S) return `${T.ui.common.you} · ${SEAT_NAMES[S]}`;
  if (seat === N) return `${T.ui.common.partner} · ${SEAT_NAMES[N]}`;
  return SEAT_NAMES[seat];
}

function recommendedCard(g: Game): Card | null {
  if (!g.settings.tutor || !(g.settings.autoHint || g.hintRevealed)) return null;
  const hint = g.hint;
  if (hint?.kind !== 'card') return null;
  if (hint.decision && hint.decision.samples > 0) return hint.decision.card;
  if (hint.lead?.length && !hint.decision) return hint.lead[0].card;
  return null;
}

function seatBlock(g: Game, seat: Seat): HTMLElement {
  const area = ['north', 'east', 'south', 'west'][seat];
  const p = g.play;
  const c = g.contract;
  const t = T.ui.table;
  const chips: (HTMLElement | null)[] = [];
  if (g.dealer === seat) chips.push(h('span', { class: 'chip', title: t.dealerTitle }, t.dealerChip));
  chips.push(h('span', { class: `chip ${g.vulnerable(seat) ? 'vul' : 'nv'}`, title: g.vulnerable(seat) ? t.vulTitle : t.nvTitle }, g.vulnerable(seat) ? t.vulChip : t.nvChip));
  if (c && p) {
    if (seat === c.declarer) chips.push(h('span', { class: 'chip role' }, T.ui.common.declarer));
    if (seat === p.dummy) chips.push(h('span', { class: 'chip role' }, T.ui.common.dummy));
  }
  const actor = g.actor;
  if (actor === seat && g.phase !== 'review') chips.push(h('span', { class: 'chip turn' }, g.humanControls(seat) ? t.yourTurn : t.toPlay));
  const showHcp = g.visible(seat) && (g.settings.tutor || g.phase === 'review');
  const label = h('div', { class: 'seat-label' }, h('span', { class: 'name' }, seatTitle(g, seat)), ...chips, showHcp ? h('span', null, fmtUnit(g.hcpOf(seat), T.core.hcp)) : null);
  // after the hand, the deal as it was dealt
  const hand = p && g.phase !== 'review' ? p.hands[seat] : g.deal[seat];
  let body: HTMLElement;
  const big = seat === S || seat === N;
  if (g.visible(seat)) {
    if (big) {
      const canPlay = g.phase === 'play' && g.isHumanTurn() && actor === seat;
      const legal = canPlay ? new Set(p!.legal()) : null;
      const rec = canPlay ? recommendedCard(g) : null;
      body = handEl(hand, card => ({
        playable: !!legal && legal.has(card),
        dim: !!legal && !legal.has(card),
        rec: rec === card,
        onClick: () => void g.submitCard(card),
      }));
    } else {
      body = miniHand(hand);
    }
  } else {
    const n = hand.length;
    body = h('div', { class: 'backs', 'aria-label': t.cards(n) }, Array.from({ length: Math.min(n, big ? 13 : 6) }, () => backEl()), h('span', { class: 'count' }, `${n}`));
  }
  const thinking = g.thinking && actor === seat ? h('div', { class: 'thinking' }, t.thinking) : null;
  return h('div', { class: `seat ${area}` }, seat === S ? null : label, body, seat === S ? label : null, thinking);
}

function auctionTable(g: Game, ui: UIState, act: TableActions): HTMLElement {
  const order: Seat[] = [W, N, E, S];
  const head = h('tr', null, order.map(s => h('th', { class: g.vulnerable(s) ? 'vul' : '' }, (s === S ? T.ui.common.you : SEAT_NAMES[s]).toLocaleUpperCase(locale()))));
  const rows: HTMLElement[] = [];
  const cells: (HTMLElement | string)[] = [];
  const startCol = order.indexOf(g.dealer);
  for (let i = 0; i < startCol; i++) cells.push('');
  g.calls.forEach((entry, i) => {
    const call = entry.call;
    const cls = ['call-chip', call === PASS ? 'p' : call === DOUBLE ? 'x' : call === REDOUBLE ? 'xx' : '', ui.selectedCall === i ? 'sel' : ''].join(' ');
    const alert = entry.meaning.artificial ? h('span', { class: 'alert', title: T.ui.table.alertTitle }, '!') : null;
    const btn = h('button', { class: cls, type: 'button', title: `${entry.meaning.name}`, onclick: () => act.selectCall(ui.selectedCall === i ? null : i) }, call === PASS ? callName(PASS) : suitText(callName(call)), alert);
    cells.push(btn);
  });
  if (g.phase === 'bidding') cells.push(h('span', { class: 'q' }, '?'));
  for (let i = 0; i < cells.length; i += 4) {
    rows.push(h('tr', null, cells.slice(i, i + 4).map(c => h('td', null, c))));
  }
  return h('div', { class: 'auction' }, h('table', null, h('thead', null, head), h('tbody', null, rows)));
}

function centerBlock(g: Game, ui: UIState, act: TableActions): HTMLElement {
  if (g.phase === 'bidding' || !g.play) {
    return h('div', { class: 'center' }, auctionTable(g, ui, act));
  }
  const p = g.play;
  const t = g.displayTrick ?? p.current;
  const playedKey = `${g.board}:${g.seed}:${p.history().length}`;
  const fresh = playedKey !== lastAnimated;
  lastAnimated = playedKey;
  const slots = [0, 1, 2, 3].map(seat => {
    const i = (seat - t.leader + 4) & 3;
    const card = i < t.cards.length ? t.cards[i] : null;
    const el = card !== null ? cardEl(card, { win: t.winner === seat }) : null;
    if (el && fresh && i === t.cards.length - 1) el.classList.add('fresh');
    return h('div', { class: `slot ${SLOT[seat]}` }, el);
  });
  const c = p.contract;
  const decl = p.declarerTricks, def = p.defenseTricks;
  const ours = (c.declarer & 1) === 0;
  return h('div', { class: 'center' },
    h('div', { class: 'trick' }, slots),
    h('div', { class: 'contract-badge' }, suitText(contractName(c)), h('small', null, T.ui.table.by(SEAT_NAMES[c.declarer]))),
    h('div', { class: 'tally' },
      h('span', null, `${ours ? T.ui.table.we : T.ui.table.they} `, h('b', null, String(decl)), ` / ${c.level + 6}`),
      h('span', null, `${ours ? T.ui.table.defence : T.ui.table.we} `, h('b', null, String(def)))),
  );
}

function biddingBox(g: Game, ui: UIState, act: TableActions): HTMLElement | null {
  if (g.phase !== 'bidding' || !g.isHumanTurn()) return null;
  const legal = new Set(g.legalCalls());
  const recCall = g.settings.tutor && (g.settings.autoHint || g.hintRevealed) && g.hint?.kind === 'bid' ? g.hint.advice.call : null;
  const grid = h('div', { class: 'biddingbox', role: 'group', 'aria-label': T.ui.bidBox.label });
  for (let level = 1; level <= 7; level++) {
    for (let strain = 0; strain < 5; strain++) {
      const c = bid(level, strain);
      grid.appendChild(h('button', {
        class: `bid ${recCall === c ? 'rec' : ''}`,
        type: 'button',
        'data-fg': 'bid',
        disabled: !legal.has(c),
        onclick: () => g.submitCall(c),
        onmouseenter: () => act.preview(c),
        onfocus: () => act.preview(c),
        onmouseleave: () => act.preview(null),
      }, `${level}`, strain === 4 ? STRAIN_SYMBOLS[4] : suitText(STRAIN_SYMBOLS[strain])));
    }
  }
  const special = (c: Call, cls: string, label: string) => h('button', {
    class: `special ${cls} ${recCall === c ? 'rec' : ''}`,
    type: 'button',
    'data-fg': 'bid',
    disabled: !legal.has(c),
    onclick: () => g.submitCall(c),
    onmouseenter: () => act.preview(c),
    onfocus: () => act.preview(c),
    onmouseleave: () => act.preview(null),
  }, label);
  const specials = h('div', { class: 'specials' }, special(PASS, 'pass', callName(PASS)), special(DOUBLE, 'dbl', callName(DOUBLE)), special(REDOUBLE, 'rdbl', callName(REDOUBLE)));
  return h('div', null, bidPreview(g, ui), h('div', { class: 'bidwrap' }, grid, specials), bidPad(g, ui, act, legal, recCall));
}

/**
 * The bidding box on a phone: three rows (levels, strains, Pass/Double/Redouble).
 * A call is chosen first — its meaning shows above — and made with a second tap
 * or the ✓ button, so you can read what a call says before you make it.
 */
function bidPad(g: Game, ui: UIState, act: TableActions, legal: Set<Call>, recCall: Call | null): HTMLElement {
  const chosen = ui.preview !== null && legal.has(ui.preview) ? ui.preview : null;
  const level = ui.pickLevel ?? (chosen !== null && isBid(chosen) ? levelOf(chosen) : null);
  const recLevel = recCall !== null && isBid(recCall) ? levelOf(recCall) : null;
  const btn = (cls: string, label: string | HTMLElement, disabled: boolean, onclick: () => void, name?: string) =>
    h('button', { class: `pad ${cls}`, type: 'button', 'data-fg': 'bid', 'aria-label': name, disabled, onclick }, label);
  const levels = Array.from({ length: 7 }, (_, i) => {
    const l = i + 1;
    const any = [0, 1, 2, 3, 4].some(s => legal.has(bid(l, s)));
    return btn(`lvl ${level === l ? 'on' : ''} ${recLevel === l ? 'rec' : ''}`, String(l), !any, () => act.pickLevel(l));
  });
  const strains = [0, 1, 2, 3, 4].map(s => {
    const c = level === null ? null : bid(level, s);
    const label = s === 4 ? STRAIN_SYMBOLS[4] : suitText(STRAIN_SYMBOLS[s]);
    return btn(`str ${c !== null && c === chosen ? 'on' : ''} ${c !== null && c === recCall ? 'rec' : ''}`, label, c === null || !legal.has(c), () => act.choose(c!), c === null ? undefined : callName(c));
  });
  const special = (c: Call, cls: string) => btn(`sp ${cls} ${c === chosen ? 'on' : ''} ${c === recCall ? 'rec' : ''}`, callName(c), !legal.has(c), () => act.choose(c));
  return h('div', { class: 'bidpad', role: 'group', 'aria-label': T.ui.bidBox.label },
    h('div', { class: 'row levels' }, levels),
    h('div', { class: 'row strains' }, strains),
    h('div', { class: 'row specials' }, special(PASS, 'pass'), special(DOUBLE, 'dbl'), special(REDOUBLE, 'rdbl'),
      h('button', { class: 'pad go', type: 'button', 'data-fg': 'bid', disabled: chosen === null, onclick: () => chosen !== null && g.submitCall(chosen) },
        chosen === null ? '✓' : suitText(`✓ ${callName(chosen)}`))));
}

/**
 * What the call under the pointer (or keyboard focus) would tell partner. It is
 * swapped in place as you move over the bids, without redrawing the table.
 */
export function bidPreview(g: Game, ui: UIState): HTMLElement {
  if (ui.preview !== null && g.legalCalls().includes(ui.preview)) {
    const view = readAuction(new Auction(g.dealer, [...g.auction.calls, ui.preview]), g.vul);
    const m = view.records[view.records.length - 1].meaning;
    return h('div', { class: 'preview' }, h('b', null, suitText(fmtLabel(callName(ui.preview), m.name))), m.natural ? T.ui.bidBox.notSystem : '', ' — ', suitText(m.desc));
  }
  return h('div', { class: 'preview muted' }, h('span', { class: 'for-hover' }, T.ui.bidBox.hoverHelp), h('span', { class: 'for-pad' }, T.ui.bidBox.pickHelp));
}

/** The line under the table: whose turn it is, or what is happening. */
export function tableStatus(g: Game): { status: string; turn: boolean } {
  const t = T.ui.table;
  if (g.phase === 'review') return { status: t.handOver, turn: false };
  if (g.thinking) return { status: g.thinking, turn: false };
  if (!g.isHumanTurn()) return { status: '', turn: false };
  if (g.phase === 'bidding') return { status: t.yourCall, turn: true };
  const p = g.play!;
  const whose = p.toPlay === S ? t.yourHand : t.northHand;
  return { status: !p.openingLeadMade ? t.yourLead : p.current.cards.length === 0 ? t.leadFrom(whose) : t.playFrom(whose), turn: true };
}

function belt(g: Game, ui: UIState, act: TableActions): HTMLElement {
  const t = T.ui.table;
  const { status, turn } = tableStatus(g);
  const items: (HTMLElement | null)[] = [h('span', { class: `status ${turn ? 'turn' : ''}` }, status)];
  items.push(h('span', { class: 'spacer' }));
  if (g.phase === 'bidding' && g.isHumanTurn()) items.push(h('button', { class: 'btn small', type: 'button', onclick: () => g.autoCall(), title: t.bidForMeTitle }, t.bidForMe));
  if (g.phase === 'play' && g.declarerSide === 0) {
    items.push(h('button', { class: 'btn small', type: 'button', disabled: !g.isHumanTurn(), onclick: async () => act.toast(await g.claim()) }, t.claim));
  }
  if (g.phase === 'play') items.push(h('button', { class: 'btn small', type: 'button', onclick: () => void g.playOut(), title: t.playOutTitle }, t.playOut));
  items.push(h('button', { class: 'btn small', type: 'button', disabled: !g.canUndo, onclick: () => g.undo(), title: t.undoTitle }, t.undo));
  if (g.phase === 'review') {
    items.push(h('button', { class: 'btn small', type: 'button', onclick: () => act.openReview() }, t.review));
    items.push(h('button', { class: 'btn small primary', type: 'button', onclick: () => act.next() }, T.ui.review.nextDeal));
  }
  return h('div', { class: 'belt' }, items);
}

export function renderTable(g: Game, ui: UIState, act: TableActions): HTMLElement {
  // a tap on the table skips the bots' pause
  const felt = h('div', { class: 'felt', onclick: () => g.hurry() },
    seatBlock(g, N),
    seatBlock(g, W),
    centerBlock(g, ui, act),
    seatBlock(g, E),
    seatBlock(g, S),
  );
  return h('div', { class: 'tablewrap', style: 'display:flex;flex-direction:column;gap:12px' }, felt, belt(g, ui, act), biddingBox(g, ui, act));
}

export function tableSignature(g: Game, ui: UIState): string {
  const p = g.play;
  const hint = g.hint;
  return JSON.stringify([
    g.board, g.seed, g.phase, g.auction.calls, p ? p.history().length : -1, g.displayTrick?.cards, g.thinking,
    g.settings.peek, g.settings.tutor, g.settings.autoHint, g.hintRevealed, ui.selectedCall, ui.pickLevel, ui.pickRev, g.canUndo,
    hint && hint.kind === 'card' ? [hint.decision?.card, hint.lead?.[0]?.card] : hint && hint.kind === 'bid' ? hint.advice.call : null,
    g.isHumanTurn(),
  ]);
}

export { isBid, suitOf };
