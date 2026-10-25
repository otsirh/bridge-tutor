// App shell: header, table, tutor panel and the dialogs.

import { type Call, callName, contractName, isBid, levelOf, strainOf } from '../core/auction';
import { SEAT_NAMES, STRAIN_NAMES, SUIT_NAME_SINGULAR, cardLongName, type Seat } from '../core/cards';
import { Game } from '../game/game';
import { type Settings, type DealMode, saveBoardNumber } from '../game/storage';
import { updateReady } from './update';
import { T, LANGUAGES, type Lang, lang, isLang, setLang, saveLang, onLangChange, fmtLabel } from '../i18n';
import { h, Region, suitText } from './dom';
import { renderTable, tableSignature, bidPreview, tableStatus } from './table';
import { renderPanel, panelSignature } from './panel';
import { renderReview, reviewSignature } from './review';
import { renderLearn, relocalizeDrills } from './learn';
import { renderTraining, trainingSignature, trainingTab, RESTORED_KEY, dueCount, setTrainingTab, showTechniques, takeTechnique, startTechniqueFactory, type TrainingActions } from './training';
import type { TechniqueDeal } from '../game/techniques';
import { getBoard, decodeDeal, loadBoards } from '../game/journal';
import { FIRST_LESSON, ensureLessons, lessonsReady } from '../learn/lessons';
import { importBoards } from '../core/importer';
import { PbnError } from '../core/pbn';
import { CONVENTIONS, DEFAULT_SYSTEM, type ConventionId } from '../bidding/config';

/** Whether a convention is on in these settings (unset = its default). */
function getSystemSetting(s: Settings, id: ConventionId): boolean {
  return s.conventions?.[id] ?? DEFAULT_SYSTEM[id];
}

export interface UIState {
  selectedCall: number | null;
  preview: Call | null;
  /** The level chosen on the phone's bidding pad, and a counter that redraws the pad when its choice changes. */
  pickLevel: number | null;
  pickRev: number;
  /** Your own count before the declarer plan is shown ("think first"): for which board, and the number you gave. */
  planCount: { board: string; n: number | null; skipped: boolean };
  modal: null | 'review' | 'learn' | 'training' | 'archive' | 'settings' | 'help' | 'welcome';
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

/**
 * Switch language. A language not yet downloaded can fail to load: offline, we
 * say so and stay; online, the app was updated since this page loaded (its old
 * files are gone), so we reload into the new version in that language.
 */
function pickLanguage(v: string, onOffline: () => void) {
  if (!isLang(v)) return;
  setLang(v).catch(() => {
    if (navigator.onLine) {
      saveLang(v);
      location.reload();
    } else onOffline();
  });
}

const GLOBE =
  '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="8" cy="8" r="6.4"/><path d="M1.6 8h12.8M8 1.6C6.1 3.4 5.2 5.5 5.2 8s.9 4.6 2.8 6.4M8 1.6c1.9 1.8 2.8 3.9 2.8 6.4s-.9 4.6-2.8 6.4"/></svg>';

const ICONS = {
  learn: '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M1.8 3.4c2.1-.9 4.2-.9 6.2.3 2-1.2 4.1-1.2 6.2-.3v9.3c-2.1-.9-4.2-.9-6.2.3-2-1.2-4.1-1.2-6.2-.3z"/><path d="M8 3.7V13"/></svg>',
  training: '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="8" cy="8" r="6.2"/><circle cx="8" cy="8" r="3.4"/><circle cx="8" cy="8" r="0.9" fill="currentColor"/></svg>',
  deal: '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><rect x="2.2" y="3.4" width="7.4" height="10.4" rx="1.2" transform="rotate(-10 5.9 8.6)"/><rect x="6.6" y="2.2" width="7.4" height="10.4" rx="1.2" fill="var(--brass)"/><path d="M10.3 5.4v4.4M8.1 7.6h4.4"/></svg>',
  settings: '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M2 4h12M2 8h12M2 12h12"/><circle cx="5" cy="4" r="1.6" fill="var(--paper)"/><circle cx="10.5" cy="8" r="1.6" fill="var(--paper)"/><circle cx="6.5" cy="12" r="1.6" fill="var(--paper)"/></svg>',
};

/** A header button: icon and label (only the icon on narrow screens). */
function headerButton(icon: keyof typeof ICONS, label: string, onclick: () => void, extra?: HTMLElement | null): HTMLElement {
  return h('button', { class: 'btn hbtn', type: 'button', title: label, 'aria-label': label, onclick },
    h('span', { class: 'ico', 'aria-hidden': 'true', html: ICONS[icon] }), h('span', { class: 'lbl' }, label), extra);
}

/** The header's language switch: each language under its own name (only the globe on phones). */
function languagePicker(onOffline: () => void): HTMLElement {
  return h('label', { class: 'langpick', title: T.ui.header.language },
    h('span', { class: 'globe', 'aria-hidden': 'true', html: GLOBE }),
    h('select', { 'aria-label': T.ui.header.language, onchange: (e: Event) => pickLanguage((e.target as HTMLSelectElement).value, onOffline) },
      LANGUAGES.map(l => h('option', { value: l.id, lang: l.id, selected: l.id === lang() }, l.name))));
}

const WELCOME_KEY = 'bridge-tutor.welcome.v1';

/** A first visit: no boards played and the welcome never answered. */
function firstVisit(): boolean {
  try {
    return !localStorage.getItem(WELCOME_KEY) && loadBoards().length === 0;
  } catch {
    return false;
  }
}

function welcomeSeen() {
  try {
    localStorage.setItem(WELCOME_KEY, '1');
  } catch {
    /* ignore */
  }
}

/** The browser's offer to install the app (Chrome, Edge, Android), kept until used. */
interface InstallPrompt extends Event {
  prompt(): Promise<void>;
}
let installPrompt: InstallPrompt | null = null;

export function mountApp(root: HTMLElement) {
  const game = new Game();
  (window as unknown as { __bridge: Game }).__bridge = game; // handy for debugging in the console
  let theme = loadTheme();
  applyTheme(theme);
  const ui: UIState = { selectedCall: null, preview: null, pickLevel: null, pickRev: 0, planCount: { board: '', n: null, skipped: false }, modal: null, reviewTab: 'summary', reviewTrick: null, learnTab: 'lessons', lessonId: null, autoOpenedReview: '' };

  const header = h('header', { class: 'topbar' });
  const tableCol = h('section', { class: 'tablecol' });
  const panel = h('aside', { class: 'panel' });
  const main = h('main', { class: 'main' }, tableCol, panel);
  const modalRoot = h('div');
  const toastEl = h('div', { class: 'toast', hidden: true, role: 'status' });
  // what happens at the table, read out by screen readers
  const announcer = h('div', { class: 'sr-only', 'aria-live': 'polite' });
  const appEl = h('div', { class: 'app' }, header, main);
  root.appendChild(appEl);
  root.appendChild(modalRoot);
  root.appendChild(toastEl);
  root.appendChild(announcer);

  const rHeader = new Region(header);
  const rTable = new Region(tableCol);
  const rPanel = new Region(panel);
  const rModal = new Region(modalRoot);
  let toastTimer = 0;
  /** A language could not be loaded offline: say so and show the current one again. */
  function languageOffline() {
    actions.toast(T.ui.header.languageOffline);
    rHeader.force();
    if (ui.modal === 'settings') rModal.force();
    render();
  }

  /** "New deal" in the middle of a hand asks once more before throwing the hand away. */
  let confirmNew = false;
  let confirmTimer = 0;
  function newDealClicked() {
    const started = game.phase !== 'review' && (game.calls.some(e => e.human) || game.cards.some(e => e.human));
    if (started && !confirmNew) {
      confirmNew = true;
      clearTimeout(confirmTimer);
      confirmTimer = window.setTimeout(() => { confirmNew = false; render(); }, 4000);
      render();
      return;
    }
    confirmNew = false;
    ui.selectedCall = null;
    if (moveToNewVersion()) return;
    game.newDeal();
  }
  /** A new version took over while this tab was open: the next deal starts in it (src/ui/update.ts). */
  function moveToNewVersion(): boolean {
    if (!updateReady()) return false;
    if (game.seed) saveBoardNumber(game.board + 1);
    location.reload();
    return true;
  }
  /** The control that opened the dialog: focus goes back to it on close. */
  let opener: HTMLElement | null = null;
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
      tableCol.querySelector('.preview')?.replaceWith(bidPreview(game, ui));
    },
    pickLevel: (level: number) => {
      ui.pickLevel = level;
      ui.preview = null;
      ui.pickRev++;
      render();
    },
    choose: (c: Call) => {
      if (ui.preview === c) {
        game.submitCall(c);
        return;
      }
      ui.preview = c;
      ui.pickRev++;
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
      if (ui.modal === 'welcome') welcomeSeen();
      ui.modal = null;
      due.at = 0;
      render(true);
    },
    replay: () => {
      ui.modal = null;
      // the same board again: its review opens again at the end
      ui.autoOpenedReview = '';
      game.newDeal(true);
      render(true);
    },
    retry: (index: number) => {
      if (!game.rewindTo(index)) return;
      ui.modal = null;
      // the hand is open again: the review shows once more when it ends
      ui.autoOpenedReview = '';
      render(true);
    },
    next: () => {
      ui.modal = null;
      ui.selectedCall = null;
      if (moveToNewVersion()) return;
      game.newDeal();
      render(true);
    },
    practise: (theme: string) => training.practiseTheme(theme),
    practiseTechnique: (id: TechniqueDeal['technique']) => {
      showTechniques(id);
      ui.modal = 'training';
      render(true);
    },
    openLesson: (id: string) => training.openLesson(id),
    nextTechnique: () => {
      const td = takeTechnique();
      if (td) return playTechnique(td);
      // none ready: the Techniques tab shows one being prepared
      setTrainingTab('techniques');
      ui.modal = 'training';
      render(true);
    },
    playFromKey: () => {
      const run = game.technique;
      if (run) playTechnique(run.deal, true);
    },
  };

  /** Play a deal from outside (archive, import, a shared link). */
  function playDeal(spec: Parameters<Game['playDeal']>[0]) {
    viewer?.dispose();
    viewer = null;
    ui.modal = null;
    ui.selectedCall = null;
    game.playDeal(spec);
    render(true);
  }

  /** Play a technique deal (from its key moment with `fromKey`); more are prepared while it is played. */
  function playTechnique(td: TechniqueDeal, fromKey = false) {
    viewer?.dispose();
    viewer = null;
    ui.modal = null;
    ui.selectedCall = null;
    // the review opens when the hand ends, even for a deal (or board number) played before
    ui.autoOpenedReview = '';
    game.playTechnique(td, { hints: game.settings.techniqueHints, fromKey });
    startTechniqueFactory(training);
    render(true);
  }

  const training: TrainingActions = {
    rerender: () => render(true),
    close: actions.close,
    toast: actions.toast,
    playDeal: spec => playDeal(spec),
    // problem generation waits while the bots are thinking, so it never slows the table
    handBusy: () => game.thinking !== null,
    playTechnique: td => playTechnique(td),
    techniqueHints: () => game.settings.techniqueHints,
    setTechniqueHints: on => game.updateSettings({ techniqueHints: on }),
    techniqueInPlay: () => !!game.technique && game.phase === 'play',
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
      viewer?.dispose();
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
      viewer?.dispose();
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

  /** A switch; `name` is its screen-reader name when it has no visible label. */
  function toggle(label: string, on: boolean, onChange: (v: boolean) => void, title?: string, name?: string) {
    return h('button', { class: `toggle ${on ? 'on' : ''}`, type: 'button', role: 'switch', 'aria-checked': on ? 'true' : 'false', 'aria-label': name, title, onclick: () => onChange(!on) }, h('span', { class: 'track' }), label ? h('span', { class: 'tlabel' }, label) : null);
  }

  function renderHeader() {
    const g = game;
    const c = g.contract;
    const t = T.ui.header;
    return [
      h('h1', { class: 'brand' }, t.title, h('span', { class: 'pips', 'aria-hidden': 'true' }, suitText('♠♥♦♣'))),
      h('div', { class: 'boardinfo' },
        h('span', null, `${t.board} `, h('b', null, String(g.board))),
        h('span', null, `${t.dealer} `, h('b', null, SEAT_NAMES[g.dealer])),
        h('span', null, `${t.vul} `, h('b', null, t.vulValue[g.vul])),
        c ? h('span', null, `${t.contract} `, h('b', null, suitText(`${contractName(c)} ${SEAT_NAMES[c.declarer]}`))) : null,
        g.settings.theme ? h('span', { class: 'topicchip' },
          suitText(T.practice.topicChip(T.practice.themes[g.settings.theme as keyof typeof T.practice.themes]?.name ?? g.settings.theme)),
          h('button', { type: 'button', 'aria-label': T.practice.stopTopic, title: T.practice.stopTopic, onclick: () => game.updateSettings({ theme: null }) }, '×')) : null),
      h('span', { class: 'spacer' }),
      languagePicker(languageOffline),
      toggle(t.tutor, g.settings.tutor, v => setSetting('tutor', v), t.tutorTitle, t.tutor),
      headerButton('learn', t.learn, () => { ui.modal = 'learn'; render(true); }),
      headerButton('training', T.practice.title, () => { ui.modal = 'training'; render(true); }, dueNow() ? h('span', { class: 'badge', 'aria-label': T.practice.tileDue }, String(dueNow())) : null),
      headerButton('settings', t.settings, () => { ui.modal = 'settings'; render(true); }),
      h('button', { class: `btn primary newdeal ${confirmNew ? 'confirm' : ''}`, type: 'button', 'data-key': 'newdeal', 'aria-label': confirmNew ? t.newDealConfirm : t.newDeal, title: t.newDeal, onclick: newDealClicked },
        h('span', { class: 'ico', 'aria-hidden': 'true', html: ICONS.deal }), h('span', { class: 'lbl' }, confirmNew ? t.newDealConfirm : t.newDeal)),
    ];
  }

  function renderSettings() {
    const s = game.settings;
    const t = T.ui.settings;
    const row = (title: string, desc: string, control: HTMLElement) => h('div', { class: 'row' }, h('div', null, h('div', { style: 'font-weight:600' }, title), h('div', { class: 'd' }, desc)), control);
    const select = <T extends string>(id: string, name: string, value: T, opts: [T, string][], onChange: (v: T) => void) =>
      h('select', { class: 'sel', id, 'aria-label': name, onchange: (e: Event) => onChange((e.target as HTMLSelectElement).value as T) }, opts.map(([v, l]) => h('option', { value: v, selected: v === value }, l)));
    return h('div', { class: 'modal', role: 'dialog', 'aria-label': t.title, style: 'max-width:760px' },
      h('div', { class: 'head' }, h('h2', null, t.title), h('span', { style: 'flex:1' }), h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.ui.common.close, onclick: () => actions.close() }, '✕')),
      h('div', { class: 'body' }, h('div', { class: 'settings-grid' },
        row(t.language.title, t.language.desc, select('lang', t.language.title, lang(), LANGUAGES.map((l): [Lang, string] => [l.id, l.name]), l => pickLanguage(l, languageOffline))),
        installPrompt ? row(t.install.title, t.install.desc, h('button', { class: 'btn small primary', type: 'button', onclick: () => { void installPrompt?.prompt(); } }, t.install.button)) : null,
        row(t.tutor.title, t.tutor.desc, toggle('', s.tutor, v => { setSetting('tutor', v); render(true); }, undefined, t.tutor.title)),
        row(t.autoHint.title, t.autoHint.desc, toggle('', s.autoHint, v => { setSetting('autoHint', v); render(true); }, undefined, t.autoHint.title)),
        row(t.coach.title, t.coach.desc, toggle('', s.coach, v => { setSetting('coach', v); render(true); }, undefined, t.coach.title)),
        row(t.peek.title, t.peek.desc, toggle('', s.peek, v => { setSetting('peek', v); render(true); }, undefined, t.peek.title)),
        row(t.dealMode.title, t.dealMode.desc, select('dealmode', t.dealMode.title, s.dealMode, options(DEAL_MODES, t.dealModes), v => setSetting('dealMode', v))),
        row(t.biddingOnly.title, t.biddingOnly.desc, toggle('', s.biddingOnly, v => { setSetting('biddingOnly', v); render(true); }, undefined, t.biddingOnly.title)),
        row(t.strength.title, t.strength.desc, select('strength', t.strength.title, s.strength, options(['quick', 'standard', 'deep'], t.strengths), v => setSetting('strength', v))),
        row(t.speed.title, t.speed.desc, select('speed', t.speed.title, s.speed, options(['slow', 'normal', 'fast'], t.speeds), v => setSetting('speed', v))),
        row(t.theme.title, t.theme.desc, select('theme', t.theme.title, theme, options(['system', 'light', 'dark'], t.themes), v => { theme = v; applyTheme(v); })),
        h('div', { class: 'small muted' }, t.systemNote),
        h('h3', { style: 'margin:8px 0 0' }, t.conventionsTitle),
        h('div', { class: 'small muted' }, t.conventionsNote),
        CONVENTIONS.map(c => {
          const on = getSystemSetting(s, c.id);
          const tx = T.bidding.conventions[c.id];
          return row(tx.name, tx.desc, h('div', { style: 'display:flex;gap:8px;align-items:center' },
            c.lesson ? h('button', { class: 'btn small ghost', type: 'button', onclick: () => training.openLesson(c.lesson!) }, t.lessonLink) : null,
            toggle('', on, v => { setSetting('conventions', { ...s.conventions, [c.id]: v }); render(true); }, undefined, tx.name)));
        }),
      )));
  }

  /** The first visit: three ways in, for a beginner, a player who knows the rules, and one who just wants to play. */
  function renderWelcome() {
    const w = T.ui.welcome;
    const choice = (title: string, desc: string, onclick: () => void) =>
      h('button', { class: 'welcome-choice', type: 'button', onclick: () => { welcomeSeen(); onclick(); } }, h('b', null, title), h('span', null, desc));
    return h('div', { class: 'modal', role: 'dialog', 'aria-label': w.title, style: 'max-width:600px' },
      h('div', { class: 'head' }, h('h2', null, w.title), h('span', { style: 'flex:1' }), h('button', { class: 'btn ghost', type: 'button', 'aria-label': T.ui.common.close, onclick: () => actions.close() }, '✕')),
      h('div', { class: 'body' },
        h('p', { style: 'margin:0 0 14px' }, w.intro),
        h('div', { class: 'welcome-choices' },
          choice(w.newTitle, w.newDesc, () => training.openLesson(FIRST_LESSON)),
          choice(w.rulesTitle, w.rulesDesc, () => { game.updateSettings({ tutor: true, autoHint: true }); actions.close(); }),
          choice(w.playTitle, w.playDesc, () => actions.close())),
        h('p', { class: 'small muted', style: 'margin:14px 0 0' }, w.note)));
  }

  /** Text outside the regions: the tab title and the columns' screen-reader names. */
  function renderShell() {
    document.title = T.ui.header.title;
    tableCol.setAttribute('aria-label', T.ui.header.tableRegion);
    panel.setAttribute('aria-label', T.ui.header.tutorRegion);
  }

  /** Lessons load on demand: when a room that shows them is open without them, fetch them and draw it again. */
  function needLessons() {
    if ((ui.modal === 'learn' || ui.modal === 'training') && !lessonsReady()) {
      ensureLessons().then(() => render(true), () => {});
    }
  }

  function render(forceModal = false) {
    needLessons();
    // an archived board's analysis stops as soon as its review is no longer shown
    if (viewer && ui.modal !== 'archive') {
      viewer.dispose();
      viewer = null;
    }
    rHeader.update(JSON.stringify([game.board, game.dealer, game.vul, game.contract, game.settings.tutor, game.settings.theme, dueNow(), confirmNew]), () => renderHeader());
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
      else if (ui.modal === 'welcome') content = renderWelcome();
      else content = renderSettings();
      return h('div', { class: 'scrim', onclick: (e: Event) => { if (e.target === e.currentTarget) actions.close(); } }, content);
    }, [ui.modal, ui.modal === 'learn' ? `${ui.learnTab}:${ui.lessonId}` : ui.modal === 'training' ? trainingTab() : ui.reviewTab].join('|'));
    manageDialogFocus();
  }

  /** A dialog is modal: the page behind it is inert, focus moves in, and returns to its opener when it closes. */
  function manageDialogFocus() {
    const dlg = modalRoot.querySelector<HTMLElement>('.modal');
    const wasOpen = appEl.inert;
    appEl.inert = !!dlg;
    if (!dlg) {
      if (wasOpen && opener?.isConnected) opener.focus({ preventScroll: true });
      if (wasOpen) opener = null;
      return;
    }
    dlg.setAttribute('aria-modal', 'true');
    dlg.tabIndex = -1;
    if (!wasOpen) opener = document.activeElement instanceof HTMLElement && appEl.contains(document.activeElement) ? document.activeElement : null;
    if (!dlg.contains(document.activeElement)) dlg.focus({ preventScroll: true });
  }

  /** A call in words, for screen readers ("2 hearts"; symbols are read inconsistently). */
  const spokenCall = (c: Call) => (!isBid(c) ? callName(c) : `${levelOf(c)} ${levelOf(c) === 1 && strainOf(c) < 4 ? SUIT_NAME_SINGULAR[strainOf(c)] : STRAIN_NAMES[strainOf(c)]}`);

  /** Announce the calls and cards made since the last change, then whose turn it is. */
  let heard = { deal: '', calls: 0, cards: 0, status: '' };
  function announce() {
    const deal = `${game.board}:${game.seed}`;
    const calls = game.auction.calls;
    const cards = game.play?.history() ?? [];
    if (deal !== heard.deal || calls.length < heard.calls || cards.length < heard.cards) heard = { deal, calls: calls.length, cards: cards.length, status: '' };
    const lines: string[] = [];
    calls.slice(heard.calls).forEach((c, i) => lines.push(fmtLabel(SEAT_NAMES[((game.dealer + heard.calls + i) & 3) as Seat], spokenCall(c))));
    for (const e of cards.slice(heard.cards)) lines.push(fmtLabel(SEAT_NAMES[e.seat], cardLongName(e.card)));
    const { status, turn } = tableStatus(game);
    if (turn && (lines.length || status !== heard.status)) lines.push(status);
    heard = { deal, calls: calls.length, cards: cards.length, status: turn ? status : '' };
    if (lines.length) announcer.textContent = lines.join('. ');
  }

  game.onChange(() => {
    if (game.phase !== 'bidding' || !game.isHumanTurn()) {
      ui.preview = null;
      ui.pickLevel = null;
    }
    render();
    announce();
  });
  // A new language can come at any moment: re-word the game and the drills,
  // then redraw everything, the open dialog included. The hand carries on.
  onLangChange(() => {
    void ensureLessons().catch(() => {});
    game.relocalize();
    viewer?.relocalize();
    relocalizeDrills();
    renderShell();
    rHeader.force();
    rTable.force();
    rPanel.force();
    render(true);
  });
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    installPrompt = e as InstallPrompt;
    if (ui.modal === 'settings') render(true);
  });
  window.addEventListener('appinstalled', () => {
    installPrompt = null;
    if (ui.modal === 'settings') render(true);
  });
  // touch screens have no hover: tapping a chip (NV, Dealer, …) shows what its tooltip says
  document.addEventListener('click', e => {
    const chip = (e.target as Element | null)?.closest?.('.chip[title]');
    if (chip) actions.toast(chip.getAttribute('title')!);
  });
    document.addEventListener('keydown', e => {
    // Space with nothing focused skips the bots' pause
    if (e.key === ' ' && e.target === document.body && !ui.modal) {
      e.preventDefault();
      game.hurry();
      return;
    }
    if (e.key !== 'Escape' || !ui.modal) return;
    if (ui.modal === 'archive') archiveActions.close();
    else actions.close();
  });
  renderShell();
  // fetch the lessons once the browser has a quiet moment, so the Learn room opens at once
  const whenIdle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 2000));
  whenIdle(() => void ensureLessons().catch(() => {}));
  // a shared link (…#b=CODE) opens its deal; otherwise a first visit is welcomed
  const shared = location.hash.match(/[#&]b=([A-Za-z0-9_-]+)/);
  if (!shared && firstVisit()) ui.modal = 'welcome';
  render(true);
  if (shared) {
    const err = training.importDeal(shared[0]);
    if (err) actions.toast(err);
    // the link has done its job: a reload starts a fresh deal, and a broken link doesn't linger
    history.replaceState(null, '', location.pathname + location.search);
  }
  try {
    if (sessionStorage.getItem(RESTORED_KEY)) {
      sessionStorage.removeItem(RESTORED_KEY);
      actions.toast(T.practice.restored);
    }
  } catch {
    /* storage unavailable */
  }
}
