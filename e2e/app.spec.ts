import { test, expect, type Page } from '@playwright/test';
import { encodeBoard } from '../src/core/share';
import { dealCards, mulberry32 } from '../src/core/cards';

/** Quick settings so a whole hand plays in seconds. */
const FAST = { speed: 'fast', strength: 'quick', autoHint: false, coach: false, tutor: true, dealMode: 'declare' };

async function open(page: Page, lang = 'en', settings: object = FAST) {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => {
    if (m.type() === 'error') errors.push(m.text());
  });
  await page.addInitScript(([s, l]) => {
    if (sessionStorage.getItem('e2e-init')) return; // keep what the test saved across reloads
    sessionStorage.setItem('e2e-init', '1');
    localStorage.setItem('bridge-tutor.settings.v1', JSON.stringify(s));
    localStorage.setItem('bridge-tutor.lang.v1', l as string);
  }, [settings, lang] as const);
  await page.goto('/');
  await expect(page.locator('header .brand')).toBeVisible();
  return errors;
}

type GameState = { phase: string; human: boolean };

/** Play the hand to the end: the system's call for you, then any legal card. */
async function playHand(page: Page) {
  for (let i = 0; i < 2000; i++) {
    const st = await page.evaluate(() => {
      const g = (window as unknown as { __bridge: { phase: string; isHumanTurn(): boolean } }).__bridge;
      return { phase: g.phase, human: g.isHumanTurn() } as GameState;
    });
    if (st.phase === 'review') return;
    if (st.human) {
      await page.evaluate(() => {
        const g = (window as unknown as { __bridge: { phase: string; autoCall(): void; play: { legal(): number[] }; submitCard(c: number, force: boolean): Promise<void> } }).__bridge;
        if (g.phase === 'bidding') g.autoCall();
        else void g.submitCard(g.play.legal()[0], true);
      });
    }
    await page.waitForTimeout(100);
  }
  throw new Error('the hand did not finish');
}

test('plays a whole hand and reviews it', async ({ page }) => {
  const errors = await open(page);
  await playHand(page);
  const review = page.locator('.modal[role="dialog"]').first();
  await expect(review).toBeVisible();
  await expect(review.locator('.result-hero .tile').first()).toBeVisible();
  // the double-dummy table and the card analysis complete
  await expect(review.locator('table.ddt')).toBeVisible({ timeout: 60_000 });
  await expect(review.getByText('Share this deal')).toBeVisible();
  expect(errors).toEqual([]);
});

test('switches language in the middle of a hand', async ({ page }) => {
  const errors = await open(page);
  await expect(page.locator('header')).toContainText('Training');
  await page.locator('header .langpick select').selectOption('bg');
  await expect(page.locator('header')).toContainText('Тренировка');
  await expect(page).toHaveTitle('Бридж треньор');
  expect(await page.evaluate(() => document.documentElement.lang)).toBe('bg');
  await page.locator('header .langpick select').selectOption('en');
  await expect(page.locator('header')).toContainText('Training');
  expect(errors).toEqual([]);
});

test('training room tabs and importing a shared deal', async ({ page }) => {
  const errors = await open(page);
  await page.locator('header button', { hasText: 'Training' }).click();
  for (const tab of ['Review', 'Skills', 'Topics', 'History', 'Today']) {
    await page.locator('.modal .tab', { hasText: tab }).first().click();
    await expect(page.locator('.modal .body')).toBeVisible();
  }
  const deal = dealCards(mulberry32(7));
  const code = encodeBoard({ board: 9, dealer: 0, vul: 'EW', deal });
  await page.locator('.modal .tab', { hasText: 'History' }).first().click();
  await page.locator('.importbox textarea').fill(`https://example.org/#b=${code}`);
  await page.locator('.importbox button').click();
  await expect(page.locator('.modal')).toHaveCount(0);
  const got = await page.evaluate(() => {
    const g = (window as unknown as { __bridge: { board: number; dealer: number; vul: string; deal: number[][] } }).__bridge;
    return { board: g.board, dealer: g.dealer, vul: g.vul, south: [...g.deal[2]].sort((a, b) => a - b) };
  });
  expect(got).toEqual({ board: 9, dealer: 0, vul: 'EW', south: [...deal[2]].sort((a, b) => a - b) });
  expect(errors).toEqual([]);
});

test('lesson quiz progress is saved', async ({ page }) => {
  const errors = await open(page);
  await page.locator('header button', { hasText: 'Learn' }).click();
  await page.locator('.lessons-list button', { hasText: 'Finesses' }).click();
  const questions = page.locator('.quiz .q');
  const n = await questions.count();
  expect(n).toBeGreaterThan(2);
  for (let i = 0; i < n; i++) await questions.nth(i).locator('.opt').first().click();
  await expect(page.locator('.quizscore')).toBeVisible();
  await page.reload();
  await page.locator('header button', { hasText: 'Learn' }).click();
  await page.locator('.lessons-list button', { hasText: 'Finesses' }).click();
  await expect(page.locator('.quizscore')).toBeVisible();
  expect(errors).toEqual([]);
});

test('phone layout: no sideways scrolling, compact header', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors = await open(page, 'bg');
  const m = await page.evaluate(() => ({ scroll: document.scrollingElement!.scrollWidth, width: innerWidth, header: document.querySelector('header')!.getBoundingClientRect().height }));
  expect(m.scroll).toBeLessThanOrEqual(m.width);
  expect(m.header).toBeLessThan(170);
  expect(errors).toEqual([]);
});

test('ships the files for installing and offline use', async ({ request }) => {
  for (const path of ['/manifest.webmanifest', '/sw.js', '/icons/icon-192.png', '/icons/icon-512.png', '/og-image.png']) {
    const res = await request.get(path);
    expect(res.status(), path).toBe(200);
  }
  const manifest = await (await request.get('/manifest.webmanifest')).json();
  expect(manifest.icons.length).toBeGreaterThanOrEqual(2);
});
