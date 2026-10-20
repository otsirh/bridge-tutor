// Card and hand rendering.

import { type Card, suitOf, rankOf, rankLabel, SUIT_SYMBOLS, DISPLAY_SUIT_ORDER, DIAGRAM_SUIT_ORDER, sortHand, isRed } from '../core/cards';
import { h } from './dom';

export interface CardOpts {
  playable?: boolean;
  dim?: boolean;
  rec?: boolean;
  win?: boolean;
  gap?: boolean;
  onClick?: () => void;
  title?: string;
}

export function cardEl(c: Card, o: CardOpts = {}): HTMLElement {
  const s = suitOf(c);
  const cls = ['card', isRed(s) ? 'red' : '', o.playable ? 'playable' : '', o.dim ? 'dim' : '', o.rec ? 'rec' : '', o.win ? 'win' : '', o.gap ? 'gap' : ''].filter(Boolean).join(' ');
  const label = `${rankLabel(rankOf(c))}${SUIT_SYMBOLS[s]}`;
  const el = h(o.playable ? 'button' : 'div', { class: cls, 'aria-label': o.title ?? label, title: o.title, onclick: o.playable ? o.onClick : undefined, type: o.playable ? 'button' : undefined },
    h('span', { class: 'rk' }, rankLabel(rankOf(c))),
    h('span', { class: 'st' }, SUIT_SYMBOLS[s]),
    h('span', { class: 'big' }, SUIT_SYMBOLS[s]),
  );
  return el;
}

export function backEl(): HTMLElement {
  return h('div', { class: 'card back', 'aria-hidden': 'true' });
}

export function handEl(cards: readonly Card[], opts: (c: Card) => CardOpts): HTMLElement {
  const sorted = sortHand(cards, DISPLAY_SUIT_ORDER);
  const el = h('div', { class: 'hand' });
  let prev = -1;
  for (const c of sorted) {
    const s = suitOf(c);
    el.appendChild(cardEl(c, { ...opts(c), gap: prev >= 0 && s !== prev }));
    prev = s;
  }
  return el;
}

/** Hand as four text rows (♠ ♥ ♦ ♣). */
export function miniHand(cards: readonly Card[], label?: string): HTMLElement {
  const el = h('div', { class: 'mini' });
  if (label) el.appendChild(h('div', { class: 'muted small' }, label));
  for (const s of DIAGRAM_SUIT_ORDER) {
    const ranks = cards.filter(c => suitOf(c) === s).map(rankOf).sort((a, b) => b - a);
    el.appendChild(h('div', { class: 'row' }, h('span', { class: `suit ${isRed(s) ? 'red' : 'black'}` }, SUIT_SYMBOLS[s]), ranks.length ? ranks.map(rankLabel).join(' ') : '—'));
  }
  return el;
}

/** Plain text holding per suit, for diagrams. */
export function diagramHand(cards: readonly Card[], label: string): HTMLElement {
  const el = h('div', { class: 'dh' }, h('div', { class: 'lbl' }, label));
  for (const s of DIAGRAM_SUIT_ORDER) {
    const ranks = cards.filter(c => suitOf(c) === s).map(rankOf).sort((a, b) => b - a);
    el.appendChild(h('div', null, h('span', { class: `suit ${isRed(s) ? 'red' : 'black'}` }, SUIT_SYMBOLS[s]), ' ', ranks.length ? ranks.map(rankLabel).join(' ') : '—'));
  }
  return el;
}

export function cardText(c: Card): HTMLElement {
  const s = suitOf(c);
  return h('span', { class: 'cardtext' }, h('span', { class: `suit ${isRed(s) ? 'red' : 'black'}` }, SUIT_SYMBOLS[s]), rankLabel(rankOf(c)));
}
