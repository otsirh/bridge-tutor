// App shell: header, table, tutor panel and the dialogs.

import { type Call, contractName } from '../core/auction';
import { SEAT_NAMES } from '../core/cards';
import { Game } from '../game/game';
import type { Settings, DealMode } from '../game/storage';
import { T, LANGUAGES, type Lang, lang, isLang, setLang, onLangChange } from '../i18n';
import { h, Region, suitText } from './dom';
import { renderTable, tableSignature } from './table';
import { renderPanel, panelSignature } from './panel';
import { renderReview, reviewSignature } from './review';
import { renderLearn, relocalizeDrills } from './learn';
import { renderStats } from './stats';

export interface UIState {
  selectedCall: number | null;
  preview: Call | null;
  modal: null | 'review' | 'learn' | 'stats' | 'settings' | 'help';
  reviewTab: 'summary' | 'bidding' | 'play';
  reviewTrick: number | null;
  learnTab: 'lessons' | 'bid' | 'lead' | 'count' | 'glossary';
  lessonId: string | null;
  autoOpenedReview: string;
}

type Theme = 'system' | 'light' | 'dark';
const THEME_KEY = 'bridge-tutor.theme';

function loadTheme(): Theme {
  try {
    const t = localStorage.getItem(THEME_KEY);
    return t === 'light' || t === 'dark' ? t : 'system';
  } catch {
    return 'system';
  }
}

// whatever the host page set before we touched it (kept for "System")
const hostTheme = document.documentElement.getAttribute('data-theme');

function applyTheme(t: Theme) {
  if (t === 'system') {
    if (hostTheme) document.documentElement.setAttribute('data-theme', hostTheme);
    else document.documentElement.removeAttribute('data-theme');
  } else document.documentElement.setAttribute('data-theme', t);
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {
    /* ignore */
  }
}

const DEAL_MODES: DealMode[] = ['random', 'declare', 'defend', 'slam', 'competitive', 'strong'];

/** Options for a settings select, labelled in the active language. */
function options<K extends string>(keys: readonly K[], labels: Record<K, string>): [K, string][] {
  return keys.map(k => [k, labels[k]]);
}

function pickLanguage(v: string) {
  if (isLang(v)) setLang(v);
}

const GLOBE =
  '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="8" cy="8" r="6.4"/><path d="M1.6 8h12.8M8 1.6C6.1 3.4 5.2 5.5 5.2 8s.9 4.6 2.8 6.4M8 1.6c1.9 1.8 2.8 3.9 2.8 6.4s-.9 4.6-2.8 6.4"/></svg>';

/** The header's language switch: each language under its own name (only the globe on phones). */
function languagePicker(): HTMLElement {
  return h('label', { class: 'langpick', title: T.ui.header.language },
    h('span', { class: 'globe', 'aria-hidden': 'true', html: GLOBE }),
    h('select', { 'aria-label': T.ui.header.language, onchange: (e: Event) => pickLanguage((e.target as HTMLSelectElement).value) },
      LANGUAGES.map(l => h('option', { value: l.id, lang: l.id, selected: l.id === lang() }, l.name))));
}

export function mountApp(root: HTMLElement) {
  const game = new Game();
  (window as unknown as { __bridge: Game }).__bridge = game; // handy for debugging in the console
  let theme = loadTheme();
  applyTheme(theme);
  const ui: UIState = { selectedCall: null, preview: null, modal: null, reviewTab: 'summary', reviewTrick: null, learnTab: 'lessons', lessonId: null, autoOpenedReview: '' };

  const header = h('header', { class: 'topbar' });
  const tableCol = h('section', { class: 'tablecol' });
  const panel = h('aside', { class: 'panel' });
  const main = h('main', { class: 'main' }, tableCol, panel);
  const modalRoot = h('div');
  const toastEl = h('div', { class: 'toast', hidden: true, role: 'status' });
  root.appendChild(h('div', { class: 'app' }, header, main));
  root.appendChild(modalRoot);
  root.appendChild(toastEl);

  const rHeader = new Region(header);
  const rTable = new Region(tableCol);
  const rPanel = new Region(panel);
  const rModal = new Region(modalRoot);
  let toastTimer = 0;

  const actions = {
    rerender: () => render(true),
    selectCall: (i: number | null) => {
      ui.selectedCall = i;
      render();
    },
    preview: (c: Call | null) => {
      if (ui.preview === c) return;
      ui.preview = c;
      render();
    },
    toast: (msg: string) => {
      toastEl.textContent = msg;
      toastEl.hidden = false;
      clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => (toastEl.hidden = true), 3200);
    },
    openReview: () => {
      ui.modal = 'review';
      render(true);
    },
    close: () => {
      ui.modal = null;
      render(true);
    },
  };

  const setSetting = <K extends keyof Settings>(k: K, v: Settings[K]) => game.updateSettings({ [k]: v } as Partial<Settings>);

  function toggle(label: string, on: boolean, onChange: (v: boolean) => void, title?: string) {
    return h('button', { class: `toggle ${on ? 'on' : ''}`, type: 'button', role: 'switch', 'aria-checked': on ? 'true' : 'false', title, onclick: () => onChange(!on) }, h('span', { class: 'track' }), label);
  }

  function renderHeader() {
    const g = game;
    const c = g.contract;
    const t = T.ui.header;
    return [
      h('div', { class: 'brand' }, t.title, h('span', { class: 'pips', 'aria-hidden': 'true' }, suitText('♠♥♦♣'))),
      h('div', { class: 'boardinfo' },
        h('span', null, `${t.board} `, h('b', null, String(g.board))),
        h('span', null, `${t.dealer} `, h('b', null, SEAT_NAMES[g.dealer])),
        h('span', null, `${t.vul} `, h('b', null, t.vulValue[g.vul])),
        c ? h('span', null, `${t.contract} `, h('b', null, suitText(`${contractName(c)} ${SEAT_NAMES[c.declarer]}`))) : null),
      h('span', { class: 'spacer' }),
      languagePicker(),
      toggle(t.tutor, g.settings.tutor, v => setSetting('tutor', v), t.tutorTitle),
      h('button', { class: 'btn', type: 'button', onclick: () => { ui.modal = 'learn'; render(true); } }, t.learn),
      h('button', { class: 'btn', type: 'button', onclick: () => { ui.modal = 'stats'; render(true); } }, t.progress),
      h('button', { class: 'btn', type: 'button', onclick: () => { ui.modal = 'settings'; render(true); } }, t.settings),
      h('button', { class: 'btn primary', type: 'button', onclick: () => { ui.selectedCall = null; game.newDeal(); } }, t.newDeal),
    ];
  }

  function renderSettings() {
    const s = game.settings;
    const t = T.ui.settings;
    const row = (title: string, desc: string, control: HTMLElement) => h('div', { class: 'row' }, h('div', null, h('div', { style: 'font-weight:600' }, title), h('div', { class: 'd' }, desc)), control);
    const select = <T extends string>(id: string, value: T, opts: [T, string][], onChange: (v: T) => void) => {
      const el = h('select', { class: 'sel', id, onchange: (e: Event) => onChange((e.target as HTMLSelectElement).value as T) }, opts.map(([v, l]) => h('option', { value: v, selected: v === value }, l)));
      return el;
    };
    return h('div', { class: 'modal', role: 'dialog', 'aria-label': t.title, style: 'max-width:760px' },
      h('div', { class: 'head' }, h('h2', null, t.title), h('span', { style: 'flex:1' }), h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.ui.common.close, onclick: () => actions.close() }, '✕')),
      h('div', { class: 'body' }, h('div', { class: 'settings-grid' },
        row(t.language.title, t.language.desc, select('lang', lang(), LANGUAGES.map((l): [Lang, string] => [l.id, l.name]), setLang)),
        row(t.tutor.title, t.tutor.desc, toggle('', s.tutor, v => { setSetting('tutor', v); render(true); })),
        row(t.autoHint.title, t.autoHint.desc, toggle('', s.autoHint, v => { setSetting('autoHint', v); render(true); })),
        row(t.coach.title, t.coach.desc, toggle('', s.coach, v => { setSetting('coach', v); render(true); })),
        row(t.peek.title, t.peek.desc, toggle('', s.peek, v => { setSetting('peek', v); render(true); })),
        row(t.dealMode.title, t.dealMode.desc, select('dealmode', s.dealMode, options(DEAL_MODES, t.dealModes), v => setSetting('dealMode', v))),
        row(t.strength.title, t.strength.desc, select('strength', s.strength, options(['quick', 'standard', 'deep'], t.strengths), v => setSetting('strength', v))),
        row(t.speed.title, t.speed.desc, select('speed', s.speed, options(['slow', 'normal', 'fast'], t.speeds), v => setSetting('speed', v))),
        row(t.theme.title, t.theme.desc, select('theme', theme, options(['system', 'light', 'dark'], t.themes), v => { theme = v; applyTheme(v); })),
        h('div', { class: 'small muted' }, t.systemNote),
      )));
  }

  /** Text outside the regions: the tab title and the columns' screen-reader names. */
  function renderShell() {
    document.title = T.ui.header.title;
    tableCol.setAttribute('aria-label', T.ui.header.tableRegion);
    panel.setAttribute('aria-label', T.ui.header.tutorRegion);
  }

  function render(forceModal = false) {
    rHeader.update(JSON.stringify([game.board, game.dealer, game.vul, game.contract, game.settings.tutor]), () => renderHeader());
    rTable.update(tableSignature(game, ui), () => renderTable(game, ui, actions));
    main.className = `main ${game.settings.tutor ? '' : 'solo'}`;
    panel.hidden = !game.settings.tutor;
    if (game.settings.tutor) rPanel.update(panelSignature(game, ui), () => renderPanel(game, ui, actions));
    // open the review once per board when the hand ends
    const boardKey = `${game.board}:${game.seed}:${game.calls.length}`;
    if (game.phase === 'review' && ui.autoOpenedReview !== boardKey && ui.modal === null) {
      ui.autoOpenedReview = boardKey;
      ui.modal = 'review';
      ui.reviewTab = 'summary';
      ui.reviewTrick = null;
      forceModal = true;
    }
    if (forceModal) rModal.force();
    const modalSig = ui.modal === 'review' ? 'review' + reviewSignature(game, ui) : String(ui.modal) + (ui.modal === 'learn' ? ui.learnTab + ui.lessonId : '');
    rModal.update(modalSig, () => {
      if (!ui.modal) return null;
      let content: HTMLElement;
      if (ui.modal === 'review') content = renderReview(game, ui, actions);
      else if (ui.modal === 'learn') content = renderLearn(ui, actions);
      else if (ui.modal === 'stats') content = renderStats(actions);
      else content = renderSettings();
      return h('div', { class: 'scrim', onclick: (e: Event) => { if (e.target === e.currentTarget) actions.close(); } }, content);
    });
  }

  game.onChange(() => {
    if (game.phase !== 'bidding') ui.preview = null;
    render();
  });
  // A new language can come at any moment: re-word the game and the drills,
  // then redraw everything, the open dialog included. The hand carries on.
  onLangChange(() => {
    game.relocalize();
    relocalizeDrills();
    renderShell();
    rHeader.force();
    rTable.force();
    rPanel.force();
    render(true);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && ui.modal) actions.close();
  });
  renderShell();
  render(true);
}
