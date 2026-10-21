# Contributing

Thanks for helping make Bridge Tutor better. This guide covers setup, the checks every change must
pass, and the few rules that keep the app trustworthy as a teacher.

## Setup

Node 24, the current LTS (see `.node-version`).

```sh
npm install
npm run dev          # http://localhost:5173
```

| Command | What it does |
|---|---|
| `npx tsc --noEmit` | type-check |
| `npm run lint` | Biome (lint rules in `biome.json`) |
| `npm test` | unit tests (Vitest) |
| `npm run build` | production build of the website in `dist/` (each language is its own chunk, loaded when chosen) |
| `npm run build:single` | one self-contained `dist-single/index.html` |
| `npm run test:e2e` | plays the built app in a real browser (Playwright; run `npm run build` first) |

For the browser tests, `npx playwright install chromium` downloads a browser once; or point
`PW_CHROMIUM` at an installed Chromium-based browser.

CI runs all of these on every push and pull request. Every push to `main` is deployed to
https://bridge-tutor.pages.dev by Cloudflare.

## Ground rules

**No text in code.** Everything people read lives in the catalogues: `src/i18n/<lang>/` (areas
`core`, `ui`, `bidding`, `tutor`, `practice`) and lessons in `src/learn/content/<lang>/`. English
defines the shape; the compiler rejects a language that misses a key. Read `T.<area>.<key>` while
rendering (never into a module-level constant), pass suits and seats as indexes and let each
language word them, and add every new string in every language.

**The bots never depend on the language.** Logic must not compare or search displayed text; rules
and readings carry language-neutral keys and tags. `test/i18n-*.test.ts` checks that whole auctions,
inferences and tutor decisions are identical in every language.

**The tutor must be right.** The app teaches, so a wrong explanation is worse than none:

- Bidding: a rule's conditions are also what the call *shows* (`apply`/`shows`), and the bots'
  card play samples from those inferences, so keep them accurate. Measure bidding changes over
  many deals against double-dummy par before and after, and keep the plain-SAYC fixture test
  meaningful.
- Card play: the bots and the tutor judge cards by simulation with the information available at
  the time, never by looking at hidden hands. Signals come from one module
  (`src/engine/signalling.ts`) shared by the bots, the sampler and the tutor.
- Lessons: every hand, deal, auction and quiz answer must be correct, and identical in every
  language (`test/lessons.test.ts`). Where a lesson presents an auction as the bots', it must be
  the auction they actually bid.

**Data, not words, in storage.** The journal (`src/game/journal.ts`) stores cards, calls and
numbers; text is rendered from them in the active language.

## Common tasks

- **Add a language:** see "Adding a language" in the README.
- **Add a convention:** a switch in `src/bidding/config.ts` (off reproduces today's auctions), the
  rules and their follow-ups under `src/bidding/`, texts in both bidding catalogues, a lesson in
  `src/learn/content/<lang>/conventions.ts`, tests in `test/conventions.test.ts`, and a
  measurement against par.
- **Add a lesson:** add it to every language's content with the same id, diagrams and quiz
  answers; link it to a practice theme in `src/game/themes.ts` (`LESSON_THEMES`) and to a skill
  in `src/game/skills.ts`.
- **Add a practice theme:** a test on the system's own auction in `src/game/themes.ts`, its name
  and description in `src/i18n/<lang>/practice.ts`; `test/themes.test.ts` checks it can be dealt.

## Style

Match the surrounding code: small functions, short comments that explain why, and the same naming
and idioms. `.editorconfig` sets the basics (two spaces, LF, UTF-8).

## Pull requests

Keep changes focused, describe what they improve for players, and fill in the checklist in the
pull request template.
