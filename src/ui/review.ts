// The post-hand review: result vs par, the bidding call by call, the play
// trick by trick with double-dummy verdicts, and the lessons to take away.

import { type Seat, type Card, N, E, S, W, SEAT_NAMES, SEAT_LETTERS, STRAIN_SYMBOLS, cardName, suitOf } from '../core/cards';
import { callName, contractName } from '../core/auction';
import { PlayState } from '../core/play';
import { describeShown } from '../bidding/types';
import type { Game, CardReview } from '../game/game';
import { h, suitText } from './dom';
import { diagramHand, cardText } from './cards';
import type { UIState } from './app';

export interface ReviewActions {
  rerender(): void;
  close(): void;
}

function hero(g: Game): HTMLElement {
  const rv = g.review!;
  const c = rv.contract;
  const tiles: HTMLElement[] = [];
  if (c) {
    const diff = rv.declTricks - (c.level + 6);
    tiles.push(tile('Договор', suitText(`${contractName(c)} ${SEAT_LETTERS[c.declarer]}`), diff >= 0 ? (diff ? `изпълнен с ${diff} ${diff > 1 ? 'надвзятки' : 'надвзятка'}` : 'изпълнен точно') : `без ${-diff}`));
  } else tiles.push(tile('Договор', 'Всички пас', 'без резултат'));
  tiles.push(tile('Резултат (С/Ю)', (rv.scoreNS > 0 ? '+' : '') + rv.scoreNS, c ? `${rv.declTricks} ${tricksWord(rv.declTricks)} за разиграващия` : ''));
  if (rv.par) tiles.push(tile('Пар', (rv.par.scoreNS > 0 ? '+' : '') + rv.par.scoreNS, suitText(rv.par.contracts.join(', '))));
  else tiles.push(tile('Пар', '…', 'изчислявам всичките 20 договора'));
  if (rv.impsVsPar !== null) tiles.push(tile('Спрямо пар', (rv.impsVsPar > 0 ? '+' : '') + rv.impsVsPar + ' IMP', rv.impsVsPar >= 0 ? 'на или над пар при открити карти' : 'под пар при открити карти'));
  if (c && rv.ddResult !== null) tiles.push(tile('При открити карти', `${rv.ddResult} ${tricksWord(rv.ddResult)}`, `при най-добра игра на всички: ${rv.ddResult - (c.level + 6) >= 0 ? 'изпълнява се' : 'пада'}`));
  const mine = g.calls.filter(x => x.human);
  if (mine.length) tiles.push(tile('Вашата лицитация', `${mine.filter(x => x.agrees).length}/${mine.length}`, 'обяви според системата'));
  const costs = humanCosts(g);
  if (costs.done) tiles.push(tile('Вашата игра', costs.total === 0 ? 'Без грешки' : `−${costs.total} ${tricksWord(costs.total)}`, `при открити карти, ${costs.count} карти`));
  else if (g.cards.some(x => x.human)) tiles.push(tile('Вашата игра', '…', `анализирам ${Math.round(rv.progress * 100)}%`));
  return h('div', { class: 'result-hero' }, tiles);
}

function tricksWord(n: number) {
  return n === 1 ? 'взятка' : 'взятки';
}

export function vulLabel(v: string) {
  return v === 'None' ? 'никой в зона' : v === 'Both' ? 'всички в зона' : v === 'NS' ? 'С/Ю в зона' : 'И/З в зона';
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
  const lbl = (s: Seat) => `${SEAT_NAMES[s]}${s === S ? ' (вие)' : ''} · ${hands[s].reduce((t, c) => t + Math.max(0, (c % 13) - 8), 0)} т.`;
  return h('div', { class: 'diagram' },
    h('div', { class: 'n' }, diagramHand(hands[N], lbl(N))),
    h('div', { class: 'w' }, diagramHand(hands[W], lbl(W))),
    h('div', { class: 'c' }, center ?? `Раздаване ${g.board}\n${vulLabel(g.vul)}`),
    h('div', { class: 'e' }, diagramHand(hands[E], lbl(E))),
    h('div', { class: 's' }, diagramHand(hands[S], lbl(S))));
}

function ddTableEl(g: Game): HTMLElement {
  const t = g.review!.table;
  if (!t) return h('p', { class: 'muted' }, 'Изчислявам таблицата при открити карти…');
  const rows = [4, 3, 2, 1, 0].map(st => h('tr', null, h('th', null, suitText(STRAIN_SYMBOLS[st])), [N, S, E, W].map(d => {
    const tricks = t[st][d];
    return h('td', { class: tricks >= 7 ? 'make' : '' }, tricks >= 7 ? String(tricks - 6) : '—');
  })));
  return h('div', { class: 'scroll-x' },
    h('table', { class: 'ddt' }, h('thead', null, h('tr', null, h('th', null, ''), ['С', 'Ю', 'И', 'З'].map(x => h('th', null, x)))), h('tbody', null, rows)),
    h('p', { class: 'small muted' }, 'Най-високото ниво, което всеки разиграващ изпълнява във всеки цвят и без коз при перфектна игра на всички (— = нито едно ниво).'));
}

function lessons(g: Game): HTMLElement {
  const rv = g.review!;
  const items: HTMLElement[] = [];
  for (const c of g.calls) {
    if (!c.human || c.agrees || !c.advice) continue;
    items.push(h('li', null, suitText(`Лицитация: обявихте ${callName(c.call)} (${c.meaning.name}); системата обявява ${callName(c.advice.call)} — ${c.advice.rule?.name ?? 'Пас'}. `), h('span', { class: 'muted' }, suitText(c.advice.rule?.desc ?? ''))));
  }
  g.cards.forEach((e, i) => {
    if (!e.human) return;
    const r = rv.cards[i];
    if (!r || r.bestSide - r.gotSide <= 0) return;
    const best = r.values.filter(v => v.side === r.bestSide).map(v => cardName(v.card));
    items.push(h('li', null, suitText(`Взятка ${e.trick + 1}: ${cardName(e.card)} струва ${r.bestSide - r.gotSide} ${tricksWord(r.bestSide - r.gotSide)} при открити карти (по-добре: ${best.slice(0, 3).join(', ')}). `),
      e.advice && e.advice.samples > 0 && e.advice.equal.includes(e.card) ? h('span', { class: 'muted' }, 'Но с информацията, която имахте, това беше най-добрата карта — анализът при открити карти вижда всички ръце.') : e.principle ? h('span', { class: 'muted' }, `${e.principle.title}.`) : null));
  });
  if (rv.contract && rv.par && rv.table) {
    const c = rv.contract;
    const t = rv.table[c.strain][c.declarer];
    const need = c.level + 6;
    items.push(h('li', null, suitText(`Договор: ${contractName(c)} ${t >= need ? 'се изпълнява' : 'не се изпълнява'} при открити карти (${t} ${tricksWord(t)}). Пар: ${rv.par.contracts.join(', ')}.`)));
  }
  if (!items.length) items.push(h('li', null, 'Чисто раздаване: няма разлики с лицитацията на системата и няма грешки при открити карти.'));
  return h('ul', null, items);
}

function biddingTab(g: Game): HTMLElement {
  return h('div', { class: 'feed' }, g.calls.map(c => h('div', { class: `item ${c.human ? (c.agrees ? 'good' : 'warn') : 'info'}` },
    h('b', null, suitText(`${SEAT_NAMES[c.seat]}: ${callName(c.call)} — ${c.meaning.name}`)),
    h('div', null, suitText(c.meaning.desc)),
    describeShown(c.meaning.shown) ? h('div', { class: 'small muted' }, 'Показва: ', suitText(describeShown(c.meaning.shown))) : null,
    c.human && c.advice && !c.agrees ? h('div', { class: 'small', style: 'margin-top:4px' }, suitText(`Системата: ${callName(c.advice.call)} (${c.advice.rule?.name ?? 'Пас'}) — ${c.advice.rule?.desc ?? ''}`)) : null)));
}

function playTab(g: Game, ui: UIState, act: ReviewActions): HTMLElement {
  const rv = g.review!;
  if (!rv.contract) return h('p', null, 'Няма разиграване: всички пасуваха.');
  const p = new PlayState(rv.contract, g.deal);
  const rows: HTMLElement[] = [];
  const handsAt: Card[][][] = [];
  let idx = 0;
  const byTrick = new Map<number, { e: (typeof g.cards)[number]; i: number }[]>();
  g.cards.forEach((e, i) => {
    if (!byTrick.has(e.trick)) byTrick.set(e.trick, []);
    byTrick.get(e.trick)!.push({ e, i });
  });
  for (let t = 0; t < 13 && byTrick.has(t); t++) {
    handsAt[t] = p.hands.map(x => [...x]);
    const plays = byTrick.get(t)!;
    for (const { e } of plays) p.play(e.card);
    const trick = p.tricks[t];
    const cost = plays.reduce((tot, { i, e }) => tot + (e.human && rv.cards[i] ? Math.max(0, rv.cards[i]!.bestSide - rv.cards[i]!.gotSide) : 0), 0);
    rows.push(h('div', { class: `trickrow ${ui.reviewTrick === t ? 'sel' : ''}`, role: 'button', tabindex: '0', onclick: () => { ui.reviewTrick = ui.reviewTrick === t ? null : t; act.rerender(); } },
      h('span', { class: 'muted mono' }, String(t + 1)),
      plays.map(({ e, i }) => {
        const r = rv.cards[i];
        const c = r ? r.bestSide - r.gotSide : 0;
        return h('span', { class: `tc ${e.human ? 'you' : ''} ${trick.winner === e.seat ? 'won' : ''}` }, h('span', { class: 'who' }, SEAT_LETTERS[e.seat]), cardText(e.card), c > 0 ? h('span', { class: 'cost', title: 'Загубени взятки при открити карти' }, `−${c}`) : null);
      }),
      h('span', { class: 'costcol small muted' }, cost > 0 ? `вие −${cost}` : '')));
    idx++;
  }
  let detail: HTMLElement | null = null;
  if (ui.reviewTrick !== null && handsAt[ui.reviewTrick]) {
    const t = ui.reviewTrick;
    const plays = byTrick.get(t)!;
    const verdicts = plays.map(({ e, i }) => {
      const r: CardReview | null = rv.cards[i];
      if (!r) return h('div', { class: 'small' }, h('b', null, `${SEAT_NAMES[e.seat]}: `), cardText(e.card), ' — принудена или неанализирана.');
      const vals = [...r.values].sort((a, b) => b.side - a.side);
      return h('div', { class: 'small' }, h('b', null, `${SEAT_NAMES[e.seat]}: `), cardText(e.card), ` → ${r.gotSide} ${tricksWord(r.gotSide)} за ${e.seat & 1 ? 'И/З' : 'С/Ю'} (най-добре ${r.bestSide}). `,
        h('span', { class: 'muted' }, 'Възможности: ', vals.map((v, k) => h('span', null, k ? ', ' : '', cardText(v.card), ` ${v.side}`))),
        e.principle ? h('div', { class: 'muted' }, `${e.principle.title}: ${e.principle.text}`) : null);
    });
    detail = h('div', { class: 'box', style: 'margin-top:10px' }, h('b', null, `Преди взятка ${t + 1}`), dealDiagram(g, handsAt[t], `Взятка ${t + 1}`), h('div', { style: 'display:grid;gap:6px;margin-top:10px' }, verdicts));
  }
  return h('div', null,
    rv.progress < 1 ? h('p', { class: 'small muted' }, `Анализирам всяка карта при открити карти… ${Math.round(rv.progress * 100)}%`) : null,
    h('p', { class: 'small muted' }, 'Подчертани = вашите карти. Червеното число показва колко взятки е струвала картата при перфектна игра на всички. Щракнете върху взятка, за да видите позицията.'),
    h('div', { class: 'tricklist' }, rows), detail);
}

export function renderReview(g: Game, ui: UIState, act: ReviewActions): HTMLElement {
  const rv = g.review;
  if (!rv) return h('div');
  const c = rv.contract;
  const title = c ? `${contractName(c)}, разиграва ${SEAT_NAMES[c.declarer]}` : 'Всички пас';
  const tab = ui.reviewTab;
  const tabs = h('div', { class: 'tabs', role: 'tablist' }, (['summary', 'bidding', 'play'] as const).map(t => h('button', { class: `tab ${tab === t ? 'on' : ''}`, type: 'button', role: 'tab', onclick: () => { ui.reviewTab = t; act.rerender(); } }, { summary: 'Обобщение', bidding: 'Лицитация', play: 'Разиграване' }[t])));
  let body: HTMLElement;
  if (tab === 'summary') {
    body = h('div', null, hero(g),
      h('div', { class: 'grid2' },
        h('div', null, h('h3', null, 'Какво да запомните'), lessons(g)),
        h('div', null, h('h3', null, 'Раздаването'), dealDiagram(g), h('h3', null, 'Изпълними договори при открити карти'), ddTableEl(g))));
  } else if (tab === 'bidding') body = biddingTab(g);
  else body = playTab(g, ui, act);
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': 'Разбор' },
    h('div', { class: 'head' }, h('h2', null, suitText(`Раздаване ${g.board}: ${title}`)), tabs, h('span', { style: 'flex:1' }),
      h('button', { class: 'btn', type: 'button', onclick: () => { act.close(); g.newDeal(true); } }, 'Изиграй отново'),
      h('button', { class: 'btn primary', type: 'button', onclick: () => { act.close(); g.newDeal(); } }, 'Следващо раздаване'),
      h('button', { class: 'btn ghost', type: 'button', 'aria-label': 'Затвори', onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, body));
}

export function reviewSignature(g: Game, ui: UIState): string {
  const rv = g.review;
  return JSON.stringify([g.board, g.seed, rv ? [rv.progress, !!rv.table, rv.cards.filter(Boolean).length] : null, ui.reviewTab, ui.reviewTrick]);
}

export { suitOf };
