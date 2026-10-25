// Settings and progress kept in the browser (best effort — the app works without it).

import type { SystemConfig } from '../bidding/config';

export type DealMode = 'random' | 'declare' | 'defend' | 'slam' | 'competitive' | 'strong';

export interface Settings {
  tutor: boolean; // tutor panel on
  autoHint: boolean; // show the recommendation without clicking
  coach: boolean; // warn before a clear mistake
  peek: boolean; // show all four hands
  speed: 'slow' | 'normal' | 'fast';
  dealMode: DealMode;
  strength: 'quick' | 'standard' | 'deep'; // simulation effort
  theme: string | null; // practice theme the boards are dealt for (src/game/themes.ts), or null
  biddingOnly: boolean; // practise bidding: no card play, the contract is scored with best play
  conventions: Partial<SystemConfig>; // optional conventions switched on or off (src/bidding/config.ts); the rest take their defaults
  techniqueHints: boolean; // technique practice: name the technique before the hand (src/game/techniques.ts)
}

export const DEFAULT_SETTINGS: Settings = {
  tutor: true,
  autoHint: false,
  coach: true,
  peek: false,
  speed: 'normal',
  dealMode: 'random',
  strength: 'standard',
  theme: null,
  biddingOnly: false,
  conventions: {},
  techniqueHints: false,
};

const KEY_SETTINGS = 'bridge-tutor.settings.v1';
const KEY_BOARD = 'bridge-tutor.board.v1';

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
}

const CHOICES: Partial<Record<keyof Settings, readonly unknown[]>> = {
  speed: ['slow', 'normal', 'fast'],
  dealMode: ['random', 'declare', 'defend', 'slam', 'competitive', 'strong'],
  strength: ['quick', 'standard', 'deep'],
};

export function loadSettings(): Settings {
  const s: Settings = { ...DEFAULT_SETTINGS, ...read(KEY_SETTINGS, DEFAULT_SETTINGS) };
  // a value from an older version or an edited backup falls back to the default rather than stopping the table
  const fix = s as unknown as Record<string, unknown>;
  for (const k of Object.keys(DEFAULT_SETTINGS) as (keyof Settings)[]) {
    const def = DEFAULT_SETTINGS[k];
    const choices = CHOICES[k];
    if (choices ? !choices.includes(fix[k]) : def !== null && typeof fix[k] !== typeof def) fix[k] = def;
  }
  if (s.theme !== null && typeof s.theme !== 'string') s.theme = null;
  if (!s.conventions || typeof s.conventions !== 'object' || Array.isArray(s.conventions)) s.conventions = {};
  return s;
}

export function saveSettings(s: Settings) {
  write(KEY_SETTINGS, s);
}

export function loadBoardNumber(): number {
  try {
    const n = Number(localStorage.getItem(KEY_BOARD));
    return Number.isFinite(n) && n >= 1 ? n : 1;
  } catch {
    return 1;
  }
}

export function saveBoardNumber(n: number) {
  try {
    localStorage.setItem(KEY_BOARD, String(n));
  } catch {
    /* ignore */
  }
}
