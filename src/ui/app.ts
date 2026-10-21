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
import { renderTraining, trainingSignature, dueCount, type TrainingActions } from './training';
import { getBoard, decodeDeal } from '../game/journal';
import { importBoards } from '../core/importer';
import { PbnError } from '../core/pbn';

export interface UIState {
  selectedCall: number | null;
  preview: Call | null;
  modal: null | 'review' | 'learn' | 'training' | 'archive' | 'settings' | 'help';
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

const ICONS = {
  learn: '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M1.8 3.4c2.1-.9 4.2-.9 6.2.3 2-1.2 4.1-1.2 6.2-.3v9.3c-2.1-.9-4.2-.9-6.2.3-2-1.2-4.1-1.2-6.2-.3z"/><path d="M8 3.7V13"/></svg>',
  training: '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="8" cy="8" r="6.2"/><circle cx="8" cy="8" r="3.4"/><circle cx="8" cy="8" r="0.9" fill="currentColor"/></svg>',
  settings: '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M2 4h12M2 8h12M2 12h12"/><circle cx="5" cy="4" r="1.6" fill="var(--paper)"/><circle cx="10.5" cy="8" r="1.6" fill="var(--paper)"/><circle cx="6.5" cy="12" r="1.6" fill="var(--paper)"/></svg>',
};

/** A header button: icon and label (only the icon on narrow screens). */
function headerButton(icon: keyof typeof ICONS, label: string, onclick: () => void, extra?: HTMLElement | null): HTMLElement {
  return h('button', { class: 'btn hbtn', type: 'button', title: label, 'aria-label': label, onclick },
    h('span', { class: 'ico', 'aria-hidden': 'true', html: ICONS[icon] }), h('span', { class: 'lbl' }, label), extra);
}

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
  /** An archived board open in the review (a separate, idle game). */
  let viewer: Game | null = null;
  // reviews due, for the header badge (reading the queue on every redraw would be wasteful)
  let due = { at: 0, n: 0 };
  const dueNow = () => {
    if (Date.now() - due.at > 3000) due = { at: Date.now(), n: dueCount() };
    return due.n;
  };

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
      due.at = 0;
      render(true);
    },
    replay: () => {
      ui.modal = null;
      game.newDeal(true);
      render(true);
    },
    next: () => {
      ui.modal = null;
      ui.selectedCall = null;
      game.newDeal();
      render(true);
    },
    practise: (theme: string) => training.practiseTheme(theme),
  };

  /** Play a deal from outside (archive, import, a shared link). */
  function playDeal(spec: Parameters<Game['playDeal']>[0]) {
    viewer = null;
    ui.modal = null;
    ui.selectedCall = null;
    game.playDeal(spec);
    render(true);
  }

  const training: TrainingActions = {
    rerender: () => render(true),
    close: actions.close,
    toast: actions.toast,
    practiseTheme: id => {
      game.updateSettings({ theme: id });
      ui.modal = null;
      ui.selectedCall = null;
      game.newDeal();
      render(true);
    },
    currentTheme: () => game.settings.theme,
    openArchived: id => {
      const rec = getBoard(id);
      if (!rec) return;
      viewer = Game.fromArchive(rec);
      viewer.onChange(() => render());
      ui.modal = 'archive';
      ui.reviewTab = 'summary';
      ui.reviewTrick = null;
      render(true);
    },
    replayArchived: id => {
      const rec = getBoard(id);
      if (rec) playDeal({ deal: decodeDeal(rec.deal), dealer: rec.dealer, vul: rec.vul, board: rec.board });
    },
    openLesson: id => {
      ui.modal = 'learn';
      ui.learnTab = 'lessons';
      ui.lessonId = id;
      render(true);
    },
    importDeal: text => {
      try {
        const [b] = importBoards(text);
        playDeal({ deal: b.deal, dealer: b.dealer, vul: b.vul, board: b.board });
        return null;
      } catch (e) {
        return T.practice.importError(e instanceof PbnError ? e.code : 'syntax');
      }
    },
  };

  const archiveActions = {
    rerender: () => render(true),
    toast: actions.toast,
    close: () => {
      viewer = null;
      ui.modal = 'training';
      render(true);
    },
    replay: () => {
      const v = viewer;
      if (v) playDeal({ deal: v.deal, dealer: v.dealer, vul: v.vul, board: v.board });
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
        c ? h('span', null, `${t.contract} `, h('b', null, suitText(`${contractName(c)} ${SEAT_NAMES[c.declarer]}`))) : null,
        g.settings.theme ? h('span', { class: 'topicchip' },
          suitText(T.practice.topicChip(T.practice.themes[g.settings.theme as keyof typeof T.practice.themes]?.name ?? g.settings.theme)),
          h('button', { type: 'button', 'aria-label': T.practice.stopTopic, title: T.practice.stopTopic, onclick: () => game.updateSettings({ theme: null }) }, '×')) : null),
      h('span', { class: 'spacer' }),
      languagePicker(),
      toggle(t.tutor, g.settings.tutor, v => setSetting('tutor', v), t.tutorTitle),
      headerButton('learn', t.learn, () => { ui.modal = 'learn'; render(true); }),
      headerButton('training', T.practice.title, () => { ui.modal = 'training'; render(true); }, dueNow() ? h('span', { class: 'badge', 'aria-label': T.practice.tileDue }, String(dueNow())) : null),
      headerButton('settings', t.settings, () => { ui.modal = 'settings'; render(true); }),
      h('button', { class: 'btn primary newdeal', type: 'button', onclick: () => { ui.selectedCall = null; game.newDeal(); } }, t.newDeal),
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
    rHeader.update(JSON.stringify([game.board, game.dealer, game.vul, game.contract, game.settings.tutor, game.settings.theme, dueNow()]), () => renderHeader());
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
    const modalSig = ui.modal === 'review' ? 'review' + reviewSignature(game, ui)
      : ui.modal === 'archive' && viewer ? 'archive' + reviewSignature(viewer, ui)
        : ui.modal === 'training' ? 'training' + trainingSignature()
          : String(ui.modal) + (ui.modal === 'learn' ? ui.learnTab + ui.lessonId : '');
    rModal.update(modalSig, () => {
      if (!ui.modal) return null;
      let content: HTMLElement;
      if (ui.modal === 'review') content = renderReview(game, ui, actions);
      else if (ui.modal === 'learn') content = renderLearn(ui, actions);
      else if (ui.modal === 'training') content = renderTraining(training);
      else if (ui.modal === 'archive' && viewer) content = renderReview(viewer, ui, archiveActions);
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
    viewer?.relocalize();
    relocalizeDrills();
    renderShell();
    rHeader.force();
    rTable.force();
    rPanel.force();
    render(true);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !ui.modal) return;
    if (ui.modal === 'archive') archiveActions.close();
    else actions.close();
  });
  renderShell();
  render(true);
  // a shared link (…#b=CODE) opens its deal
  const shared = location.hash.match(/[#&]b=([A-Za-z0-9_-]+)/);
  if (shared) training.importDeal(shared[0]);
}
