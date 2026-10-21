// Progress: headline numbers and the hand history.

import { SEAT_LETTERS, STRAIN_SYMBOLS } from '../core/cards';
import { contractName } from '../core/auction';
import { loadHistory, saveHistory, type HandRecord } from '../game/storage';
import { T, fmtNum, fmtPct, fmtDate, fmtSigned } from '../i18n';
import { h, suitText } from './dom';

export interface StatsActions {
  rerender(): void;
  close(): void;
}

const pct = (a: number, b: number) => (b ? fmtPct(a / b) : '—');

// Records keep the contract and declarer as they were shown when the hand was
// played ("3БК", "Ю", "Passed out"…); show them in the active language.
const passedOut = (x: HandRecord) => x.contract === 'Passed out' || x.contract === 'Всички пас';
const contractText = (x: HandRecord) => (passedOut(x) ? contractName(null) : x.contract.replace(/NT|БК/, STRAIN_SYMBOLS[4]));
const declarerText = (x: HandRecord) => {
  const i = Math.max('NESW'.indexOf(x.declarer), 'СИЮЗ'.indexOf(x.declarer));
  return i >= 0 ? SEAT_LETTERS[i] : x.declarer;
};

function tile(k: string, v: string, n: string) {
  return h('div', { class: 'tile' }, h('div', { class: 'k' }, k), h('div', { class: 'v mono' }, v), h('div', { class: 'n' }, n));
}

export function renderStats(act: StatsActions): HTMLElement {
  const t = T.ui.stats;
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
    tile(t.handsPlayed, String(hist.length), hist.length ? t.lastOn(fmtDate(hist[hist.length - 1].date)) : t.playFirst),
    tile(t.contractsMade, pct(made, decl.length), t.asDeclarer(made, decl.length)),
    tile(t.contractsBeaten, pct(set, def.length), t.onDefence(set, def.length)),
    tile(t.biddingAccuracy, pct(agreed, bids), t.callsMatched(agreed, bids)),
    tile(t.tricksLost, avgCost === null ? '—' : fmtNum(avgCost, 2), t.tricksLostNote),
    tile(t.impsVsPar, avgImps === null ? '—' : (avgImps > 0 ? '+' : '') + fmtNum(avgImps, 1), t.impsNote),
  );
  const rows = [...hist].reverse().slice(0, 60).map((x: HandRecord) => h('tr', null,
    h('td', null, fmtDate(x.date)),
    h('td', null, String(x.board)),
    h('td', null, suitText(contractText(x)), x.declarer !== '-' ? ` ${declarerText(x)}` : ''),
    h('td', null, x.role === 'none' ? '—' : t.role[x.role]),
    h('td', null, passedOut(x) ? '—' : x.result === 0 ? '=' : fmtSigned(x.result)),
    h('td', null, fmtSigned(x.scoreNS)),
    h('td', null, x.impsVsPar === null ? '—' : fmtSigned(x.impsVsPar)),
    h('td', null, x.bidsTotal ? `${x.bidsAgreed}/${x.bidsTotal}` : '—'),
    h('td', null, x.ddCost === null ? '—' : String(x.ddCost))));
  return h('div', { class: 'modal', role: 'dialog', 'aria-label': t.title },
    h('div', { class: 'head' }, h('h2', null, t.title), h('span', { style: 'flex:1' }),
      hist.length ? h('button', { class: 'btn small', type: 'button', onclick: () => { saveHistory([]); act.rerender(); } }, t.clear) : null,
      h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.ui.common.close, onclick: () => act.close() }, '✕')),
    h('div', { class: 'body' }, tiles,
      h('h3', { style: 'margin-top:20px' }, t.hands),
      hist.length ? h('div', { class: 'scroll-x' }, h('table', { class: 'hist' }, h('thead', null, h('tr', null, t.columns.map(c => h('th', null, c)))), h('tbody', null, rows)))
        : h('p', { class: 'muted' }, t.empty),
      h('p', { class: 'small muted', style: 'margin-top:14px' }, t.footnote)));
}
