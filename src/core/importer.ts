// Read a deal from whatever people paste: a PBN file, BBO LIN (or a handviewer
// link), a bare "N:AKQ2.K73.J52.Q8 ..." deal, or one of our share codes / links.

import { type BoardData, PbnError, parsePBN, parseDealString, parseSeat } from './pbn';
import { parseLIN } from './lin';
import { decodeBoard } from './share';
import { boardDealer, boardVulnerability } from './cards';

export type ImportFormat = 'pbn' | 'lin' | 'deal' | 'share';

export function detectFormat(text: string): ImportFormat {
  const t = text.trim();
  if (/^\s*[[%]/.test(t) || /\[\s*Deal\s+"/i.test(t)) return 'pbn';
  if (/(^|\|)md\|/i.test(t) || /[?&]lin=/i.test(t)) return 'lin';
  if (/^[NESW]:\s*[AKQJT2-9.-]/i.test(t)) return 'deal';
  return 'share';
}

/** The share code inside a share link (…#b=CODE or …?b=CODE), or the text itself. */
export function shareCodeOf(text: string): string {
  const m = text.trim().match(/[#?&]b=([A-Za-z0-9_-]+)/);
  return m ? m[1] : text.trim();
}

/** Parse pasted text into boards. Throws PbnError (language-neutral codes) when it can't. */
export function importBoards(text: string): BoardData[] {
  const t = text.trim();
  if (!t) throw new PbnError('empty');
  switch (detectFormat(t)) {
    case 'pbn':
      return parsePBN(t);
    case 'lin':
      return [parseLIN(t)];
    case 'deal': {
      const deal = parseDealString(t);
      const first = parseSeat(t[0]) ?? 0;
      return [{ board: first + 1, dealer: boardDealer(first + 1), vul: boardVulnerability(first + 1), deal }];
    }
    default:
      return [decodeBoard(shareCodeOf(t))];
  }
}
