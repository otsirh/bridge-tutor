// Progress: headline numbers and the hand history.

import { loadHistory, saveHistory, type HandRecord } from '../game/storage';
import { h, suitText } from './dom';

export interface StatsActions {
  rerender(): void;
  close(): void;
}

const pct = (a: number, b: number) => (b ? `${Math.round((a / b) * 100)}%` : '—');

function tile(k: string, v: string, n: string) {
  return h('div', { class: 'tile' }, h('div', { class: 'k' }, k), h('div', { class: 'v mono' }, v), h('div', { class: 'n' }, n));
}

export function renderStats(act: StatsActions): HTMLElement {
  const hist = loadHistory();
  const recent = hist.slice(-30);
  const decl = hist.filter(x => x.role === 'declarer');
  const def = hist.filter(x => x.role === 'defender');
  const made = decl.filter(x => x.result >= 0).length;
  const set = def.filter(x => x.result < 0).length;
  const bids = hist.reduce((t, x) => t + x.bidsTotal, 0);
  const agreed = hist.reduce((t, x) => t + x.bidsAgreed, 0);
  const costed = recent.filter(x => x.ddCost !== null && x.cardsPlayed > 0);
  const avgCost = costed.length ? costed.reduce((t, x) => t + (x.ddCost ?? 0), 0) / costed.length : null;
  const imped = recent.filter(x => x.impsVsPar !== null);
  const avgImps = imped.length ? imped.reduce((t, x) => t + (x.impsVsPar ?? 0), 0) / imped.length : null;

  const tiles = h('div', { class: 'tiles' },
    tile('Изиграни ръце', String(hist.length), hist.length ? `последно на ${new Date(hist[hist.length - 1].date).toLocaleDateString('bg-BG')}` : 'изиграйте първото раздаване'),
    tile('Изпълнени договори', pct(made, decl.length), `${made} от ${decl.length} като разиграващ`),
    tile('Свалени договори', pct(set, def.length), `${set} от ${def.length} в защита`),
    tile('Точност в лицитацията', pct(agreed, bids), `${agreed} от ${bids} обяви според системата`),
    tile('Загубени взятки на ръка', avgCost === null ? '—' : avgCost.toFixed(2), 'вашите карти, при открити карти, последните 30 ръце'),
    tile('IMP спрямо пар', avgImps === null ? '—' : (avgImps > 0 ? '+' : '') + avgImps.toFixed(1), 'средно на ръка, последните 30 (за С/Ю)'),
  );
  const rows = [...hist].reverse().slice(0, 60).map((x: HandRecord) => h('tr', null,
    h('td', null, new Date(x.date).toLocaleDateString('bg-BG')),
    h('td', null, String(x.board)),
    h('td', null, suitText(x.contract), x.declarer !== '-' ? ` ${x.declarer}` : ''),
    h('td', null, x.role === 'none' ? '—' : x.role === 'declarer' ? 'разиграващ' : 'защитник'),
    h('td', null, x.contract === 'Passed out' || x.contract === 'Всички пас' ? '—' : x.result === 0 ? '=' : x.result > 0 ? `+${x.result}` : String(x.result)),
    h('td', null, String(x.scoreNS)),
    h('td', null, x.impsVsPar === null ? '—' : (x.impsVsPar > 0 ? '+' : '') + x.impsVsPar),
    h('td', null, x.bidsTotal ? `${x.bidsAgreed}/${x.bidsTotal}` : '—'),
    h('td', null, x.ddCost === null ? '—' : String(x.ddCost))));
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': 'Напредък' },
    h('div', { class: 'head' }, h('h2', null, 'Напредък'), h('span', { style: 'flex:1' }),
      hist.length ? h('button', { class: 'btn small', type: 'button', onclick: () => { saveHistory([]); act.rerender(); } }, 'Изчисти историята') : null,
      h('button', { class: 'btn ghost', type: 'button', 'aria-label': 'Затвори', onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, tiles,
      h('h3', { style: 'margin-top:20px' }, 'Раздавания'),
      hist.length ? h('div', { class: 'scroll-x' }, h('table', { class: 'hist' }, h('thead', null, h('tr', null, ['Дата', 'Раздаване', 'Договор', 'Вие бяхте', 'Резултат', 'Точки С/Ю', 'IMP спрямо пар', 'Верни обяви', 'Загубени взятки'].map(t => h('th', null, t)))), h('tbody', null, rows)))
        : h('p', { class: 'muted' }, 'Още няма раздавания. Всяко завършено раздаване се записва тук заедно с анализа при открити карти.'),
      h('p', { class: 'small muted', style: 'margin-top:14px' }, '„Загубени взятки“ брои взятките, които вашите карти са подарили спрямо перфектната игра на всички. Анализът при открити карти е поглед назад — понякога загубата е била правилната игра с информацията, която сте имали — но намаляващата тенденция показва, че играта ви се подобрява.')));
}
