// Settings and progress kept in the browser (best effort — the app works without it).

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

export function loadSettings(): Settings {
  return { ...DEFAULT_SETTINGS, ...read(KEY_SETTINGS, DEFAULT_SETTINGS) };
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
