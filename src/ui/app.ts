// App shell: header, table, tutor panel and the dialogs.

import type { Call } from '../core/auction';
import { SEAT_NAMES } from '../core/cards';
import { Game } from '../game/game';
import type { Settings, DealMode } from '../game/storage';
import { h, Region, suitText } from './dom';
import { renderTable, tableSignature } from './table';
import { renderPanel, panelSignature } from './panel';
import { renderReview, reviewSignature } from './review';
import { renderLearn } from './learn';
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

const DEAL_MODES: [DealMode, string][] = [
  ['random', 'Случайни раздавания'],
  ['declare', 'Разиграване (силни С/Ю)'],
  ['defend', 'Защита (силни И/З)'],
  ['slam', 'Слемове (31+ т. за С/Ю)'],
  ['competitive', 'Състезателни лицитации'],
  ['strong', 'Силна ръка за вас'],
];

export function mountApp(root: HTMLElement) {
  const game = new Game();
  (window as unknown as { __bridge: Game }).__bridge = game; // handy for debugging in the console
  let theme = loadTheme();
  applyTheme(theme);
  const ui: UIState = { selectedCall: null, preview: null, modal: null, reviewTab: 'summary', reviewTrick: null, learnTab: 'lessons', lessonId: null, autoOpenedReview: '' };

  const header = h('header', { class: 'topbar' });
  const tableCol = h('section', { class: 'tablecol', 'aria-label': 'Маса' });
  const panel = h('aside', { class: 'panel', 'aria-label': 'Треньор' });
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
    return [
      h('div', { class: 'brand' }, 'Бридж треньор', h('span', { class: 'pips', 'aria-hidden': 'true' }, suitText('♠♥♦♣'))),
      h('div', { class: 'boardinfo' },
        h('span', null, 'Раздаване ', h('b', null, String(g.board))),
        h('span', null, 'Раздава ', h('b', null, SEAT_NAMES[g.dealer])),
        h('span', null, 'Зона ', h('b', null, g.vul === 'None' ? 'никой' : g.vul === 'Both' ? 'всички' : g.vul === 'NS' ? 'С/Ю (ние)' : 'И/З (те)')),
        c ? h('span', null, 'Договор ', h('b', null, suitText(`${c.level}${['♣', '♦', '♥', '♠', 'БК'][c.strain]}${c.doubled === 1 ? 'X' : c.doubled === 2 ? 'XX' : ''} ${SEAT_NAMES[c.declarer]}`))) : null),
      h('span', { class: 'spacer' }),
      toggle('Треньор', g.settings.tutor, v => setSetting('tutor', v), 'Подсказки, обяснения и съвети'),
      h('button', { class: 'btn', type: 'button', onclick: () => { ui.modal = 'learn'; render(true); } }, 'Уроци'),
      h('button', { class: 'btn', type: 'button', onclick: () => { ui.modal = 'stats'; render(true); } }, 'Напредък'),
      h('button', { class: 'btn', type: 'button', onclick: () => { ui.modal = 'settings'; render(true); } }, 'Настройки'),
      h('button', { class: 'btn primary', type: 'button', onclick: () => { ui.selectedCall = null; game.newDeal(); } }, 'Ново раздаване'),
    ];
  }

  function renderSettings() {
    const s = game.settings;
    const row = (title: string, desc: string, control: HTMLElement) => h('div', { class: 'row' }, h('div', null, h('div', { style: 'font-weight:600' }, title), h('div', { class: 'd' }, desc)), control);
    const select = <T extends string>(id: string, value: T, opts: [T, string][], onChange: (v: T) => void) => {
      const el = h('select', { class: 'sel', id, onchange: (e: Event) => onChange((e.target as HTMLSelectElement).value as T) }, opts.map(([v, l]) => h('option', { value: v, selected: v === value }, l)));
      return el;
    };
    return h('div', { class: 'modal', role: 'dialog', 'aria-label': 'Настройки', style: 'max-width:760px' },
      h('div', { class: 'head' }, h('h2', null, 'Настройки'), h('span', { style: 'flex:1' }), h('button', { class: 'btn ghost', type: 'button', 'aria-label': 'Затвори', onclick: () => actions.close() }, '✕')),
      h('div', { class: 'body' }, h('div', { class: 'settings-grid' },
        row('Треньор', 'Подсказки, обяснение на всяка обява, помощ при броенето и план за разиграването. Включвайте и изключвайте по всяко време.', toggle('', s.tutor, v => { setSetting('tutor', v); render(true); })),
        row('Показвай препоръката веднага', 'Изключено: треньорът първо ви кара да помислите и показва избора си, когато поискате.', toggle('', s.autoHint, v => { setSetting('autoHint', v); render(true); })),
        row('Предупреждавай ме за грешки', 'Когато обявата или картата ви е явно по-слаба от препоръката, треньорът иска потвърждение.', toggle('', s.coach, v => { setSetting('coach', v); render(true); })),
        row('Покажи и четирите ръце', 'Режим за упражнения: виждате всички карти (ботовете продължават да играят честно).', toggle('', s.peek, v => { setSetting('peek', v); render(true); })),
        row('Раздавания', 'Какви ръце да упражнявате. Важи от следващото раздаване.', select('dealmode', s.dealMode, DEAL_MODES, v => setSetting('dealMode', v))),
        row('Сила на ботовете', 'Колко разпределения симулират ботовете и треньорът преди всяка карта. По-дълбоко е по-силно, но по-бавно.', select('strength', s.strength, [['quick', 'Бързо'], ['standard', 'Стандартно'], ['deep', 'Дълбоко']], v => setSetting('strength', v))),
        row('Скорост', 'Пауза между картите на ботовете.', select('speed', s.speed, [['slow', 'Бавно'], ['normal', 'Нормално'], ['fast', 'Бързо']], v => setSetting('speed', v))),
        row('Тема', 'Следва системната, освен ако не изберете.', select('theme', theme, [['system', 'Системна'], ['light', 'Светла'], ['dark', 'Тъмна']], v => { theme = v; applyTheme(v); })),
        h('div', { class: 'small muted' }, 'Система: Standard American Yellow Card (SAYC) — 1БК 15–17 т., петкартови мажори, Стейман, трансфери на Якоби и Якоби 2БК, слабо две, негативни контри, Майкълс и необичайно 2БК, Блекууд. Дубликатно отчитане.'),
      )));
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
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && ui.modal) actions.close();
  });
  render(true);
}
