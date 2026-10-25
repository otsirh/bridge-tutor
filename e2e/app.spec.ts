import { test, expect, type Page } from '@playwright/test';
import { encodeBoard } from '../src/core/share';
import { dealCards, mulberry32, rankLabel, rankOf, suitOf, SUIT_SYMBOLS } from '../src/core/cards';
import { bid, PASS } from '../src/core/auction';
import { encodeDeal } from '../src/game/journal';

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
    localStorage.setItem('bridge-tutor.welcome.v1', '1');
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
  for (const tab of ['Review', 'Problems', 'Skills', 'Topics', 'History', 'Today']) {
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

test('problems: solve a ready problem, a miss goes to review, then the next one is prepared', async ({ page }) => {
  // a ready problem in the bank (generating one takes seconds): 3NT by East, South on lead
  const deal = dealCards(mulberry32(11));
  const stats = deal[2].map((c, i) => ({ c, t: 4 - i * 0.1, s: 0.5 - i * 0.03 }));
  const problem = {
    v: 1, id: 'e2e', kind: 'lead', theme: 'leads', board: 1, dealer: 0, vul: 'None', deal: encodeDeal(deal),
    calls: [PASS, bid(1, 4), PASS, bid(3, 4), PASS, PASS, PASS], play: [], seat: 2, skill: 'play.lead', n: 48, stats, answer: [stats[0].c], created: 1,
  };
  await page.addInitScript(pr => {
    if (sessionStorage.getItem('e2e-problems')) return;
    sessionStorage.setItem('e2e-problems', '1');
    const none = { done: 0, right: 0 };
    localStorage.setItem('bridge-tutor.problems.v1', JSON.stringify({ v: 1, bank: [pr], score: { declarer: none, defense: none, lead: none } }));
  }, problem);
  const errors = await open(page);
  await page.locator('header button', { hasText: 'Training' }).click();
  await page.locator('.modal .step button', { hasText: 'Solve problems' }).click();
  const prob = page.locator('.problem');
  await expect(prob.locator('.prompt')).toContainText('East is declarer in 3NT');
  await expect(prob.locator('.prompt')).toContainText('Which card do you lead?');
  await expect(prob.locator('.hand .card.playable')).toHaveCount(13);
  // a wrong card: the reveal, every card's results, the review item
  const label = (c: number) => `${rankLabel(rankOf(c))}${SUIT_SYMBOLS[suitOf(c)]}`;
  await prob.locator(`.hand .card.playable[aria-label="${label(stats[1].c)}"]`).click();
  await expect(prob.locator('.box.warnbox')).toContainText('Not this time');
  await expect(prob.locator('.pstats tbody tr')).toHaveCount(13);
  await expect(prob.locator('.pstats tr.mine')).toHaveCount(1);
  await expect(page.locator('.pscore')).toContainText('This session: 0/1 right');
  const review = await page.evaluate(() => JSON.parse(localStorage.getItem('bridge-tutor.review.v1') || '[]').filter((i: { source?: string }) => i.source === 'problem').length);
  expect(review).toBe(1);
  await page.locator('.pbtns button', { hasText: 'Show the whole deal' }).click();
  await expect(page.locator('.pdeal')).toBeVisible();
  // the bank is empty now: the next problem is being prepared
  await page.locator('.pbtns button', { hasText: 'Next problem' }).click();
  await expect(page.locator('.pwait')).toContainText('Preparing a problem');
  await page.locator('.modal .tab', { hasText: 'Review' }).first().click();
  await expect(page.locator('.modal .body')).toContainText('from a problem');
  expect(errors).toEqual([]);
});

test('technique practice: a ready deal starts at the play, the technique named only when asked', async ({ page }) => {
  const errors = await open(page);
  await page.locator('header button', { hasText: 'Training' }).click();
  await page.locator('.modal .tab', { hasText: 'Techniques' }).click();
  await expect(page.locator('.tfilter .btn')).toHaveCount(8);
  await page.locator('.tfilter .btn', { hasText: 'Finesse' }).click();
  await expect(page.locator('.tdesc')).toContainText('Finesse');
  // name the technique before the hand (a switch, by keyboard)
  const hints = page.locator('.thints [role="switch"]');
  await expect(hints).toHaveAttribute('aria-checked', 'false');
  await hints.focus();
  await page.keyboard.press('Space');
  await expect(hints).toHaveAttribute('aria-checked', 'true');
  await page.locator('.tplay .btn.primary').click();
  await expect(page.locator('.modal')).toHaveCount(0);
  const state = await page.evaluate(() => {
    const g = (window as unknown as { __bridge: { phase: string; technique: { deal: { technique: string } } | null; auction: { calls: number[] } } }).__bridge;
    return { phase: g.phase, technique: g.technique?.deal.technique, calls: g.auction.calls.length };
  });
  expect(state.phase).toBe('play');
  expect(state.technique).toBe('finesse');
  expect(state.calls).toBeGreaterThan(3);
  await expect(page.locator('.panel')).toContainText('Look for: Finesse');
  expect(errors).toEqual([]);
});

test('lesson quiz progress is saved', async ({ page }) => {
  const errors = await open(page);
  await page.locator('header button', { hasText: 'Learn' }).click();
  await page.locator('.lessons-list button', { hasText: /^(✓ )?Finesses/ }).click();
  const questions = page.locator('.quiz .q');
  const n = await questions.count();
  expect(n).toBeGreaterThan(2);
  for (let i = 0; i < n; i++) await questions.nth(i).locator('.opt').first().click();
  await expect(page.locator('.quizscore')).toBeVisible();
  await page.reload();
  await page.locator('header button', { hasText: 'Learn' }).click();
  await page.locator('.lessons-list button', { hasText: /^(✓ )?Finesses/ }).click();
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

test('a first visit is welcomed, and a beginner is taken to the first lesson', async ({ page }) => {
  await page.goto('/');
  const dialog = page.getByRole('dialog', { name: 'Welcome to Bridge Tutor' });
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: /new to bridge/ }).click();
  await expect(page.getByRole('dialog', { name: 'Learn' })).toBeVisible();
  await expect(page.locator('.lessons-list button.on')).toContainText('How bridge works');
  await page.keyboard.press('Escape');
  await page.reload();
  await expect(page.locator('header .brand')).toBeVisible();
  await expect(page.getByRole('dialog')).toHaveCount(0);
});
