import { describe, it, expect } from 'vitest';
import { boardDealer, boardVulnerability } from '../src/core/cards';
import { THEMES, LESSON_THEMES, themeById, dealForTheme, fitsTheme } from '../src/game/themes';
import { SKILLS } from '../src/game/skills';

describe('practice themes', () => {
  it('every lesson theme and skill theme exists', () => {
    for (const id of Object.values(LESSON_THEMES)) expect(themeById(id), id).toBeTruthy();
    for (const s of SKILLS) expect(themeById(s.theme), s.theme).toBeTruthy();
  });

  it('finds a fitting deal for every theme within the time budget', async () => {
    const rows: string[] = [];
    for (const t of THEMES) {
      let found = 0, tries = 0, ms = 0;
      for (let k = 0; k < 4; k++) {
        const board = 1 + ((k * 5) % 16);
        const t0 = Date.now();
        // the search stops as soon as a deal fits, so a generous budget only matters on a slow machine (CI)
        const r = await dealForTheme(t.id, boardDealer(board), boardVulnerability(board), 1000 + k * 77, 15000);
        ms += Date.now() - t0;
        tries += r.tries;
        if (r.found) {
          found++;
          expect(fitsTheme(t, r.deal, boardDealer(board), boardVulnerability(board))).toBe(true);
        }
      }
      rows.push(`${t.id.padEnd(18)} found ${found}/4  avg tries ${Math.round(tries / 4)}  avg ${Math.round(ms / 4)} ms`);
      expect(found, t.id).toBeGreaterThanOrEqual(3);
    }
    console.log(rows.join('\n'));
  }, 300000);
});
