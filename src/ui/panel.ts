// The tutor's notebook: advice, reasoning, counting, feedback.

import { type Seat, N, E, S, W, SEAT_NAMES, SUIT_SYMBOLS, suitOf, partnerOf, hcp as handHcp, cardName, rankLabel } from '../core/cards';
import { callName } from '../core/auction';
import { handInfo, evaluationSummary } from '../core/eval';
import { describeShown } from '../bidding/types';
import type { Game } from '../game/game';
import type { BidAdvice } from '../bidding/engine';
import { explainPlay } from '../tutor/principles';
import { readPlay } from '../tutor/signals';
import { h, suitText } from './dom';
import { cardText } from './cards';
import type { UIState } from './app';

export interface PanelActions {
  rerender(): void;
  selectCall(i: number | null): void;
}

const pct = (x: number) => `${Math.round(x * 100)}%`;

function checkList(checks: { text: string; ok: boolean; value?: string }[]): HTMLElement {
  return h('ul', { class: 'checks' }, checks.map(c => h('li', null,
    h('span', { class: c.ok ? 'ok' : 'no', 'aria-label': c.ok ? 'изпълнено' : 'не е изпълнено' }, c.ok ? '✓' : '✗'),
    h('span', null, suitText(c.text), c.value ? h('span', { class: 'val' }, ` — ${c.value}`) : null))));
}

function bidAdviceBox(a: BidAdvice): HTMLElement {
  const box = h('div', { class: 'box' },
    h('div', { class: 'advice-call' }, suitText(callName(a.call)), h('span', { class: 'tag' }, a.rule?.name ?? 'Пас')),
    h('p', { class: 'advice-desc' }, suitText(a.rule?.desc ?? 'Нито едно правило не е по-добро от пас.')),
    a.checks.length ? checkList(a.checks) : null,
    a.meaning.shown ? h('p', { class: 'small muted', style: 'margin:8px 0 0' }, 'Партньорът ще я разбере като: ', suitText(describeShown(a.meaning.shown) || 'без конкретно обещание')) : null,
  );
  const alts = a.alternatives.slice(0, 8);
  const altEl = alts.length
    ? h('div', null, h('h3', null, 'Други разгледани обяви'), h('div', { class: 'alts' }, alts.map(rc => {
      const failed = rc.checks.filter(c => !c.ok);
      return h('details', null,
        h('summary', null, suitText(`${callName(rc.rule.call)} · ${rc.rule.name}`), failed.length ? h('span', { class: 'why' }, ` — изисква ${failed[0].text}`) : null),
        h('p', { class: 'small', style: 'margin:6px 0' }, suitText(rc.rule.desc)),
        checkList(rc.checks));
    })))
    : null;
  return h('div', null, box, altEl);
}

function cardAdviceBox(g: Game): HTMLElement | null {
  const hint = g.hint;
  if (!hint || hint.kind !== 'card') return null;
  const parts: (HTMLElement | null)[] = [];
  if (hint.lead) {
    parts.push(h('div', { class: 'box' },
      h('div', { class: 'advice-call' }, cardText(hint.lead[0].card), h('span', { class: 'tag' }, 'Първи извод по учебник')),
      h('p', { class: 'advice-desc' }, suitText(hint.lead[0].suitReason)),
      h('p', { class: 'small', style: 'margin:6px 0 0' }, suitText(hint.lead[0].cardReason)),
      hint.lead.length > 1 ? h('div', { class: 'small muted', style: 'margin-top:8px' }, 'Други цветове: ', hint.lead.slice(1).map((l, i) => h('span', null, i ? ' · ' : '', cardText(l.card), ` (${l.suitReason.split(':')[0].split('.')[0]})`))) : null,
      !hint.decision && !hint.pending ? h('button', { class: 'btn small', type: 'button', style: 'margin-top:10px', onclick: () => g.simulateLead() }, 'Симулирай изводите (по-бавно)') : null,
    ));
  }
  if (hint.pending) {
    const frac = hint.total ? hint.done / hint.total : 0;
    parts.push(h('div', { class: 'box' }, h('div', { class: 'small' }, `Симулирам разпределения според лицитацията… ${hint.done}${hint.total ? '/' + hint.total : ''}`), h('div', { class: 'progress' }, h('i', { style: `width:${Math.round(frac * 100)}%` }))));
  }
  const d = hint.decision;
  if (d && d.samples > 0) {
    const p = g.play!;
    const sit = g.situation(p.toPlay);
    const ours = (p.toPlay & 1) === (p.contract.declarer & 1);
    const best = d.stats[0];
    const rows = d.stats.slice(0, 10).map(s => h('tr', { class: d.equal.includes(s.card) ? 'best' : '' },
      h('td', null, cardText(s.card)),
      h('td', null, s.tricks.toFixed(2)),
      h('td', null, pct(s.success)),
      h('td', null, h('div', { class: 'bar' }, h('i', { style: `width:${Math.round(s.success * 100)}%` }))),
      h('td', null, (s.score >= 0 ? '+' : '') + Math.round(s.score))));
    const principle = explain(g, d.card, sit);
    parts.push(h('div', { class: 'box' },
      h('div', { class: 'advice-call' }, cardText(d.card), h('span', { class: 'tag' }, d.equal.length > 1 ? `или всяка от ${d.equal.length} равностойни карти` : 'най-добра в симулацията')),
      h('p', { class: 'small', style: 'margin:8px 0 0' }, `В ${d.samples} разпределения, съвместими с лицитацията и играта, ${cardName(d.card)} носи средно ${best.tricks.toFixed(2)} взятки за вашата страна и ${ours ? 'изпълнява договора' : 'сваля договора'} в ${pct(best.success)} от случаите.`),
      principle,
      h('table', { class: 'stats-table' }, h('thead', null, h('tr', null, h('th', null, 'Карта'), h('th', null, 'Взятки'), h('th', null, ours ? 'Изпълнява' : 'Сваля'), h('th', null, ''), h('th', null, 'Резултат'))), h('tbody', null, rows)),
    ));
  } else if (d && d.samples === 0 && d.equal.length === 1) {
    parts.push(h('div', { class: 'box small' }, 'Имате само една възможна карта.'));
  }
  return h('div', null, parts);
}

function explain(g: Game, card: number, sit: ReturnType<Game['situation']>): HTMLElement {
  const pr = explainPlay(sit, card);
  return h('div', { class: 'principle' }, h('b', null, pr.title), suitText(pr.text));
}

function planBox(g: Game): HTMLElement | null {
  const plan = g.plan;
  const p = g.play;
  if (!plan || !p || g.declarerSide !== 0) return null;
  return h('div', { class: 'box plan' },
    h('div', null, suitText(plan.summary)),
    h('div', { class: 'suits' },
      h('span', { class: 'hd' }, ''), h('span', { class: 'hd' }, 'Разиграващ'), h('span', { class: 'hd' }, 'Мъртвак'), h('span', { class: 'hd' }, plan.kind === 'winners' ? 'Сигурни взятки' : 'Губещи'),
      plan.suits.map(sp => [
        suitText(SUIT_SYMBOLS[sp.suit]),
        h('span', { class: 'mono' }, sp.decl.map(rankLabel).join(' ') || '—'),
        h('span', { class: 'mono' }, sp.dummy.map(rankLabel).join(' ') || '—'),
        h('span', { class: 'mono' }, String(plan.kind === 'winners' ? sp.winners : sp.losers)),
      ])),
    plan.ideas.length ? h('ul', null, plan.ideas.map(i => h('li', null, suitText(i)))) : null,
  );
}

function countingBox(g: Game): HTMLElement | null {
  const p = g.play;
  if (!p || !p.openingLeadMade) return null;
  const me: Seat = g.declarerSide === 0 ? p.contract.declarer : S;
  const lines: HTMLElement[] = [];
  const known = new Set<Seat>([S]);
  if (g.declarerSide === 0) known.add(N);
  known.add(p.dummy);
  const original = (s: Seat) => [...p.hands[s], ...p.playedBy(s)];
  const knownHcp = [...known].reduce((t: number, s) => t + handHcp(original(s)), 0);
  const hidden = ([N, E, S, W] as Seat[]).filter(s => !known.has(s));
  const rangeOf = (s: Seat) => g.view.shown[s].hcp;
  if (hidden.length === 2) {
    const [a, b] = hidden;
    const restTotal = 40 - knownHcp;
    const ra = rangeOf(a), rb = rangeOf(b);
    const aMin = Math.max(ra[0], restTotal - Math.min(rb[1], 37)), aMax = Math.min(ra[1], restTotal - rb[0]);
    const bMin = Math.max(rb[0], restTotal - Math.min(ra[1], 37)), bMax = Math.min(rb[1], restTotal - ra[0]);
    lines.push(h('div', null, `Виждате ${knownHcp} т., значи ${restTotal} т. са в двете скрити ръце.`));
    lines.push(h('div', null, `${SEAT_NAMES[a]}: ${fmtRange(aMin, aMax)} т. · ${SEAT_NAMES[b]}: ${fmtRange(bMin, bMax)} т. (по лицитацията и видимите карти).`));
  }
  // voids shown in play
  for (const s of [N, E, S, W] as Seat[]) {
    if (s === me) continue;
    const outs = new Set<number>();
    for (const t of p.tricks) t.cards.forEach((c, i) => {
      const seat = (t.leader + i) & 3;
      if (seat === s && i > 0 && suitOf(c) !== suitOf(t.cards[0])) outs.add(suitOf(t.cards[0]));
    });
    if (outs.size) lines.push(h('div', null, `${SEAT_NAMES[s]} няма вече `, suitText([...outs].map(x => SUIT_SYMBOLS[x]).join(' ')), '.'));
  }
  // remaining trumps
  if (p.trump < 4) {
    const out = 13 - [...known].reduce((t: number, s) => t + original(s).filter(c => suitOf(c) === p.trump).length, 0);
    const playedHidden = hidden.reduce((t: number, s) => t + p.playedBy(s).filter(c => suitOf(c) === p.trump).length, 0);
    lines.push(h('div', null, suitText(`Козове (${SUIT_SYMBOLS[p.trump]}) в скритите ръце: ${out - playedHidden}.`)));
  }
  return h('div', { class: 'box small' }, lines);
}

function fmtRange(a: number, b: number) {
  a = Math.max(0, a);
  b = Math.max(a, b);
  return a === b ? `${a}` : `${a}–${b}`;
}

function inferences(g: Game): HTMLElement {
  const seats: Seat[] = [N, E, W];
  return h('div', { class: 'infer' }, seats.map(s => {
    const calls = g.calls.filter(c => c.seat === s && c.call !== 0);
    const d = describeShown(g.view.shown[s]);
    return h('div', { class: 'box' },
      h('div', { class: 'who' }, SEAT_NAMES[s], s === N ? ' (партньор)' : ''),
      h('div', { class: 'what' }, d ? suitText(d) : 'Още нищо не е показал.'),
      calls.length ? h('div', { class: 'small muted', style: 'margin-top:4px' }, calls.map((c, i) => h('span', null, i ? ' · ' : '', suitText(`${callName(c.call)} = ${c.meaning.name}`)))) : null);
  }));
}

function selectedCallBox(g: Game, ui: UIState, act: PanelActions): HTMLElement | null {
  if (ui.selectedCall === null) return null;
  const entry = g.calls[ui.selectedCall];
  if (!entry) return null;
  const m = entry.meaning;
  return h('div', { class: 'box meaning-pop' },
    h('div', { style: 'display:flex;align-items:center;gap:8px' }, h('b', null, suitText(`${SEAT_NAMES[entry.seat]}: ${callName(entry.call)}`)), h('span', { class: 'spacer', style: 'flex:1' }), h('button', { class: 'btn small ghost', type: 'button', onclick: () => act.selectCall(null), 'aria-label': 'Затвори' }, '✕')),
    h('div', { style: 'margin-top:4px;font-weight:600' }, suitText(m.name), m.artificial ? h('span', { class: 'chip', style: 'margin-left:6px;background:var(--brass);color:#fff' }, 'Алерт') : null),
    h('p', { style: 'margin:6px 0' }, suitText(m.desc)),
    describeShown(m.shown) ? h('div', { class: 'small' }, 'Показва: ', suitText(describeShown(m.shown))) : null,
    m.conds.length ? h('ul', { class: 'checks' }, m.conds.map(t => h('li', null, h('span', { class: 'muted' }, '•'), suitText(t)))) : null,
    entry.human && entry.advice && !entry.agrees ? h('div', { class: 'small', style: 'margin-top:8px;color:var(--warn)' }, 'Системата предпочита ', suitText(callName(entry.advice.call)), ` (${entry.advice.rule?.name ?? 'Пас'}).`) : null,
  );
}

function warningBox(g: Game): HTMLElement | null {
  const w = g.warning;
  if (!w) return null;
  if (w.kind === 'bid') {
    return h('div', { class: 'box warnbox' },
      h('b', null, suitText(`Сигурни ли сте за ${callName(w.call)}?`)),
      h('p', { style: 'margin:6px 0' }, suitText(`Партньорът ще разбере ${callName(w.call)} като: ${w.yourMeaning.name} — ${w.yourMeaning.desc}`)),
      w.failed.length ? h('div', { class: 'small' }, 'Ръката ви не отговаря на това: ', checkList(w.failed.map(f => ({ ...f, ok: false })))) : null,
      h('p', { class: 'small', style: 'margin:6px 0 0' }, 'Системата обявява ', suitText(callName(w.advice.call)), ` — ${w.advice.rule?.name ?? 'Пас'}.`),
      h('div', { class: 'actions' },
        h('button', { class: 'btn primary small', type: 'button', onclick: () => g.submitCall(w.advice.call, true) }, suitText(`Обяви ${callName(w.advice.call)}`)),
        h('button', { class: 'btn small', type: 'button', onclick: () => g.submitCall(w.call, true) }, suitText(`Все пак ${callName(w.call)}`)),
        h('button', { class: 'btn small ghost', type: 'button', onclick: () => g.dismissWarning() }, 'Ще помисля')));
  }
  const d = w.decision;
  const mine = d.stats.find(s => s.card === w.card)!;
  const best = d.stats[0];
  return h('div', { class: 'box warnbox' },
    h('b', null, suitText(`Сигурни ли сте за ${cardName(w.card)}?`)),
    h('p', { style: 'margin:6px 0' }, suitText(`В ${d.samples} симулирани разпределения ${cardName(w.best)} носи средно ${best.tricks.toFixed(2)} взятки (успех ${pct(best.success)}); ${cardName(w.card)} — средно ${mine.tricks.toFixed(2)} (${pct(mine.success)}).`)),
    h('div', { class: 'actions' },
      h('button', { class: 'btn primary small', type: 'button', onclick: () => void g.submitCard(w.best, true) }, suitText(`Играй ${cardName(w.best)}`)),
      h('button', { class: 'btn small', type: 'button', onclick: () => void g.submitCard(w.card, true) }, suitText(`Все пак ${cardName(w.card)}`)),
      h('button', { class: 'btn small ghost', type: 'button', onclick: () => g.dismissWarning() }, 'Ще помисля')));
}

function thinkFirst(g: Game): HTMLElement {
  const hi = handInfo(g.deal[S]);
  const partner = g.view.shown[N];
  const pd = describeShown(partner);
  if (g.phase === 'bidding') {
    return h('div', { class: 'small', style: 'margin-bottom:8px' },
      `Първо помислете: имате ${hi.hcp} т. (${hi.tp} с дължината), разпределение ${hi.shape.join('-')}${hi.balanced ? ', балансирана ръка' : ''}. `,
      pd ? suitText(`Партньорът е показал: ${pd}. `) : 'Партньорът още нищо не е показал. ',
      'Какъв е планът ви и коя обява описва най-добре ръката ви?');
  }
  return h('div', { class: 'small', style: 'margin-bottom:8px' }, 'Първо помислете: коя карта носи най-много взятки според лицитацията и досегашната игра? Пребройте точките и разпределението на скритите ръце.');
}

export function renderPanel(g: Game, ui: UIState, act: PanelActions): HTMLElement {
  const parts: (HTMLElement | null)[] = [];
  parts.push(h('h2', null, 'Треньор'));
  parts.push(warningBox(g));
  parts.push(selectedCallBox(g, ui, act));

  if (g.isHumanTurn() && g.hint) {
    parts.push(h('h3', null, g.phase === 'bidding' ? 'Вашата обява' : 'Вашата карта'));
    const show = g.settings.autoHint || g.hintRevealed;
    if (!show) {
      parts.push(thinkFirst(g));
      parts.push(h('button', { class: 'reveal', type: 'button', onclick: () => g.revealHint() }, g.phase === 'bidding' ? 'Покажи препоръчаната обява' : 'Покажи препоръчаната карта'));
    } else if (g.hint.kind === 'bid') parts.push(bidAdviceBox(g.hint.advice));
    else parts.push(cardAdviceBox(g));
  } else if (g.thinking) {
    parts.push(h('p', { class: 'muted small' }, g.thinking));
  }

  if (g.phase === 'play') {
    const pb = planBox(g);
    if (pb) parts.push(h('h3', null, 'План на разиграващия'), pb);
    const cb = countingBox(g);
    if (cb) parts.push(h('h3', null, 'Броене'), cb);
    const p = g.play!;
    if (p.openingLeadMade) {
      const viewer = g.declarerSide === 0 ? p.contract.declarer : S;
      const readings = readPlay(p.tricks, p.trump, viewer, p.dummy, [...p.hands[p.dummy]], [...p.hands[S]]);
      if (readings.length) parts.push(h('h3', null, 'Какво казва играта'), h('div', { class: 'feed' }, readings.map(r => h('div', { class: 'item info' }, h('b', null, suitText(r.title)), suitText(r.text)))));
    }
  }

  parts.push(h('h3', null, 'Какво казва лицитацията'));
  parts.push(inferences(g));

  if (g.phase === 'bidding') {
    const hi = handInfo(g.deal[S]);
    parts.push(h('h3', null, 'Вашата ръка'));
    parts.push(h('div', { class: 'kv' }, evaluationSummary(hi).map(x => h('div', { class: 'cell' }, h('div', { class: 'k' }, x.label), h('div', { class: 'v' }, suitText(x.value)), h('div', { class: 'n' }, x.note)))));
  }

  if (g.feedback.length) {
    parts.push(h('h3', null, 'Бележки'));
    parts.push(h('div', { class: 'feed' }, g.feedback.slice(0, 14).map(f => h('div', { class: `item ${f.tone}` }, h('b', null, suitText(f.title)), suitText(f.text)))));
  }
  return h('div', null, parts);
}

export function panelSignature(g: Game, ui: UIState): string {
  const hint = g.hint;
  return JSON.stringify([
    g.board, g.seed, g.phase, g.auction.calls.length, g.play ? g.play.history().length : -1, g.thinking, g.settings, g.hintRevealed,
    ui.selectedCall, g.warning ? [g.warning.kind, g.warning.kind === 'bid' ? g.warning.call : g.warning.card] : null,
    hint ? (hint.kind === 'bid' ? ['b', hint.advice.call] : ['c', hint.pending, hint.done, hint.total, hint.decision?.card, hint.decision?.samples, hint.lead?.length]) : null,
    g.feedback.length, g.isHumanTurn(), !!g.plan,
  ]);
}

export { partnerOf };
