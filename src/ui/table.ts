// The felt: four hands, the trick or the auction, the bidding box.

import { type Seat, type Card, N, E, S, W, SEAT_NAMES, STRAIN_SYMBOLS, suitOf } from '../core/cards';
import { type Call, PASS, DOUBLE, REDOUBLE, bid, callName, isBid, contractName } from '../core/auction';
import { readAuction } from '../bidding/engine';
import { Auction } from '../core/auction';
import type { Game } from '../game/game';
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
}

function seatTitle(g: Game, seat: Seat): string {
  if (seat === S) return 'Вие · Юг';
  if (seat === N) return 'Партньор · Север';
  return SEAT_NAMES[seat];
}

function recommendedCard(g: Game): Card | null {
  if (!g.settings.tutor || !(g.settings.autoHint || g.hintRevealed)) return null;
  const hint = g.hint;
  if (!hint || hint.kind !== 'card') return null;
  if (hint.decision && hint.decision.samples > 0) return hint.decision.card;
  if (hint.lead && hint.lead.length && !hint.decision) return hint.lead[0].card;
  return null;
}

function seatBlock(g: Game, seat: Seat, ui: UIState, act: TableActions): HTMLElement {
  const area = ['north', 'east', 'south', 'west'][seat];
  const p = g.play;
  const c = g.contract;
  const chips: (HTMLElement | null)[] = [];
  if (g.dealer === seat) chips.push(h('span', { class: 'chip', title: 'Раздаващ' }, 'Раздава'));
  chips.push(h('span', { class: `chip ${g.vulnerable(seat) ? 'vul' : 'nv'}`, title: g.vulnerable(seat) ? 'В зона' : 'Извън зона' }, g.vulnerable(seat) ? 'В зона' : 'Извън'));
  if (c && p) {
    if (seat === c.declarer) chips.push(h('span', { class: 'chip role' }, 'Разиграващ'));
    if (seat === p.dummy) chips.push(h('span', { class: 'chip role' }, 'Мъртвак'));
  }
  const actor = g.actor;
  if (actor === seat && g.phase !== 'review') chips.push(h('span', { class: 'chip turn' }, g.humanControls(seat) ? 'Ваш ред' : 'На ход'));
  const showHcp = g.visible(seat) && (g.settings.tutor || g.phase === 'review');
  const label = h('div', { class: 'seat-label' }, h('span', { class: 'name' }, seatTitle(g, seat)), ...chips, showHcp ? h('span', null, `${g.hcpOf(seat)} т.`) : null);
  const hand = p ? p.hands[seat] : g.deal[seat];
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
    body = h('div', { class: 'backs', 'aria-label': `${n} карти` }, Array.from({ length: Math.min(n, big ? 13 : 6) }, () => backEl()), h('span', { class: 'count' }, `${n}`));
  }
  const thinking = g.thinking && actor === seat ? h('div', { class: 'thinking' }, 'мисли') : null;
  return h('div', { class: `seat ${area}` }, seat === S ? null : label, body, seat === S ? label : null, thinking);
}

function auctionTable(g: Game, ui: UIState, act: TableActions): HTMLElement {
  const order: Seat[] = [W, N, E, S];
  const head = h('tr', null, order.map(s => h('th', { class: g.vulnerable(s) ? 'vul' : '' }, s === S ? 'ВИЕ' : SEAT_NAMES[s].toUpperCase())));
  const rows: HTMLElement[] = [];
  const cells: (HTMLElement | string)[] = [];
  const startCol = order.indexOf(g.dealer);
  for (let i = 0; i < startCol; i++) cells.push('');
  g.calls.forEach((entry, i) => {
    const call = entry.call;
    const cls = ['call-chip', call === PASS ? 'p' : call === DOUBLE ? 'x' : call === REDOUBLE ? 'xx' : '', ui.selectedCall === i ? 'sel' : ''].join(' ');
    const alert = entry.meaning.artificial ? h('span', { class: 'alert', title: 'Алерт: изкуствена обява' }, '!') : null;
    const btn = h('button', { class: cls, type: 'button', title: `${entry.meaning.name}`, onclick: () => act.selectCall(ui.selectedCall === i ? null : i) }, call === PASS ? 'Пас' : suitText(callName(call)), alert);
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
    h('div', { class: 'contract-badge' }, suitText(contractName(c)), h('small', null, `разиграва ${SEAT_NAMES[c.declarer]}`)),
    h('div', { class: 'tally' },
      h('span', null, ours ? 'Ние ' : 'Те ', h('b', null, String(decl)), ` / ${c.level + 6}`),
      h('span', null, ours ? 'Защита ' : 'Ние ', h('b', null, String(def)))),
  );
}

function biddingBox(g: Game, ui: UIState, act: TableActions): HTMLElement | null {
  if (g.phase !== 'bidding' || !g.isHumanTurn()) return null;
  const legal = new Set(g.legalCalls());
  const recCall = g.settings.tutor && (g.settings.autoHint || g.hintRevealed) && g.hint?.kind === 'bid' ? g.hint.advice.call : null;
  const grid = h('div', { class: 'biddingbox', role: 'group', 'aria-label': 'Кутия за обяви' });
  for (let level = 1; level <= 7; level++) {
    for (let strain = 0; strain < 5; strain++) {
      const c = bid(level, strain);
      grid.appendChild(h('button', {
        class: `bid ${recCall === c ? 'rec' : ''}`,
        type: 'button',
        disabled: !legal.has(c),
        onclick: () => g.submitCall(c),
        onmouseenter: () => act.preview(c),
        onfocus: () => act.preview(c),
        onmouseleave: () => act.preview(null),
      }, `${level}`, strain === 4 ? 'БК' : suitText(STRAIN_SYMBOLS[strain])));
    }
  }
  const special = (c: Call, cls: string, label: string) => h('button', {
    class: `special ${cls} ${recCall === c ? 'rec' : ''}`,
    type: 'button',
    disabled: !legal.has(c),
    onclick: () => g.submitCall(c),
    onmouseenter: () => act.preview(c),
    onfocus: () => act.preview(c),
    onmouseleave: () => act.preview(null),
  }, label);
  const specials = h('div', { class: 'specials' }, special(PASS, 'pass', 'Пас'), special(DOUBLE, 'dbl', 'Контра'), special(REDOUBLE, 'rdbl', 'Реконтра'));
  let preview: HTMLElement;
  if (ui.preview !== null && legal.has(ui.preview)) {
    const view = readAuction(new Auction(g.dealer, [...g.auction.calls, ui.preview]), g.vul);
    const m = view.records[view.records.length - 1].meaning;
    preview = h('div', { class: 'preview' }, h('b', null, suitText(`${callName(ui.preview)}: ${m.name}`)), m.natural ? ' (не е системна обява — разбира се естествено)' : '', ' — ', suitText(m.desc));
  } else {
    preview = h('div', { class: 'preview muted' }, 'Посочете обява, за да видите какво ще каже тя на партньора.');
  }
  return h('div', null, preview, h('div', { class: 'bidwrap' }, grid, specials));
}

function belt(g: Game, ui: UIState, act: TableActions): HTMLElement {
  let status = '';
  let turn = false;
  if (g.phase === 'review') status = 'Раздаването приключи.';
  else if (g.thinking) status = g.thinking;
  else if (g.isHumanTurn()) {
    turn = true;
    if (g.phase === 'bidding') status = 'Ваша обява.';
    else {
      const p = g.play!;
      const seat = p.toPlay;
      const whose = seat === S ? 'вашата ръка' : 'ръката на Север';
      status = !p.openingLeadMade ? 'Ваш първи извод.' : p.current.cards.length === 0 ? `Изведете от ${whose}.` : `Играйте от ${whose}.`;
    }
  }
  const items: (HTMLElement | null)[] = [h('span', { class: `status ${turn ? 'turn' : ''}` }, status)];
  items.push(h('span', { class: 'spacer' }));
  if (g.phase === 'bidding' && g.isHumanTurn()) items.push(h('button', { class: 'btn small', type: 'button', onclick: () => g.autoCall(), title: 'Системата обявява вместо вас' }, 'Обяви вместо мен'));
  if (g.phase === 'play' && g.declarerSide === 0) {
    items.push(h('button', { class: 'btn small', type: 'button', disabled: !g.isHumanTurn(), onclick: async () => act.toast(await g.claim()) }, 'Претендирам за останалите'));
  }
  if (g.phase === 'play') items.push(h('button', { class: 'btn small', type: 'button', onclick: () => void g.playOut(), title: 'Компютърът доиграва при открити карти' }, 'Доиграй'));
  items.push(h('button', { class: 'btn small', type: 'button', disabled: !g.canUndo, onclick: () => g.undo(), title: 'Върнете последната си обява или карта' }, '↶ Върни'));
  if (g.phase === 'review') items.push(h('button', { class: 'btn small primary', type: 'button', onclick: () => act.openReview() }, 'Разбор на раздаването'));
  return h('div', { class: 'belt' }, items);
}

export function renderTable(g: Game, ui: UIState, act: TableActions): HTMLElement {
  const felt = h('div', { class: 'felt' },
    seatBlock(g, N, ui, act),
    seatBlock(g, W, ui, act),
    centerBlock(g, ui, act),
    seatBlock(g, E, ui, act),
    seatBlock(g, S, ui, act),
  );
  return h('div', { class: 'tablewrap', style: 'display:flex;flex-direction:column;gap:12px' }, felt, belt(g, ui, act), biddingBox(g, ui, act));
}

export function tableSignature(g: Game, ui: UIState): string {
  const p = g.play;
  const hint = g.hint;
  return JSON.stringify([
    g.board, g.seed, g.phase, g.auction.calls, p ? p.history().length : -1, g.displayTrick?.cards, g.thinking,
    g.settings.peek, g.settings.tutor, g.settings.autoHint, g.hintRevealed, ui.selectedCall, ui.preview, g.canUndo,
    hint && hint.kind === 'card' ? [hint.decision?.card, hint.lead?.[0]?.card] : hint && hint.kind === 'bid' ? hint.advice.call : null,
    g.isHumanTurn(),
  ]);
}

export { isBid, suitOf };
