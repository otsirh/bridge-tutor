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
}

export const DEFAULT_SETTINGS: Settings = {
  tutor: true,
  autoHint: false,
  coach: true,
  peek: false,
  speed: 'normal',
  dealMode: 'random',
  strength: 'standard',
};

export interface HandRecord {
  date: number;
  board: number;
  contract: string;
  declarer: string; // 'N' 'E' 'S' 'W' or '-'
  role: 'declarer' | 'defender' | 'none';
  result: number; // tricks relative to contract (+1 = one overtrick, -2 = down two)
  scoreNS: number;
  parNS: number | null;
  impsVsPar: number | null;
  bidsTotal: number; // your calls
  bidsAgreed: number; // calls that matched the system
  cardsPlayed: number; // cards you chose
  ddCost: number | null; // tricks lost double-dummy by your cards
}

const KEY_SETTINGS = 'bridge-tutor.settings.v1';
const KEY_HISTORY = 'bridge-tutor.history.v1';
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
  return read(KEY_SETTINGS, DEFAULT_SETTINGS);
}

export function saveSettings(s: Settings) {
  write(KEY_SETTINGS, s);
}

export function loadHistory(): HandRecord[] {
  try {
    const raw = localStorage.getItem(KEY_HISTORY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function saveHistory(h: HandRecord[]) {
  write(KEY_HISTORY, h.slice(-500));
}

export function addHistory(rec: HandRecord) {
  const h = loadHistory();
  const i = h.findIndex(x => x.date === rec.date);
  if (i >= 0) h[i] = rec;
  else h.push(rec);
  saveHistory(h);
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
