# Bridge Tutor

Contract bridge against three bots, with a tutor you can switch on at any moment, and a training
loop built around your own mistakes. Available in **English** and **Bulgarian** (Български) —
switch at any time, even in the middle of a hand.

You sit South; North is your partner. When your side declares, you play both hands.

## Run it

```sh
npm install
npm run dev        # http://localhost:5173
```

`npm run build` writes a single self-contained `dist/index.html` (open it directly or host it anywhere).
The site is hosted on Cloudflare: build command `npm run build`, output directory `dist`, Node from `.node-version`.
`npm test` runs the unit tests (solver vs brute force, scoring, bidding, both languages, lessons, journal).
`npm run test:e2e` plays the built app in a real browser with Playwright (after `npm run build`; set
`PW_CHROMIUM=/path/to/chrome` to use an installed browser instead of downloading one). CI runs both.

The site works offline and can be installed as an app (manifest and service worker in `public/`).

## How it helps you improve

**At the table** — the tutor explains every decision:

- **Bidding**: the recommended call, the rule behind it and a checklist of its requirements against
  your hand ("13+ HCP — you have 14"), plus every other call it considered and why it doesn't fit.
  Hover any bid to see what it would tell partner; click any call in the auction to see what it showed.
- **Card play**: the card that does best across many simulated layouts of the hidden hands that fit
  the auction and the play so far (each solved double-dummy), with tricks / success rate / score per
  card and the principle behind it (second hand low, cover an honour, lead toward honours, …).
- **Declarer plan** when dummy comes down, **counting** of the hidden hands, **reading** leads and signals.
- **Signals**: the bot defenders give standard attitude, count and suit-preference signals (only with cards that cost nothing), use their partner's signals, and the tutor reads them for you and tells you which card to signal with.
- **Think first**: the recommendation stays hidden until you ask. **Coach**: asks you to confirm a clear mistake.

**After the hand** — the review: score vs double-dummy par in IMPs, the double-dummy table, every call
compared with the system, every card checked both double-dummy (hindsight) and single-dummy (with the
information you had), and the points to take away. Replay the same deal to try again.

**The training loop** (Training room):

- **Review queue**: calls that differed from the system and cards that were clearly worse *with the
  information you had* come back as drills, spaced out over days until you get them right (Leitner boxes).
- **Skills**: accuracy per area (opening, responding, rebids, notrump, competitive, slam, leads,
  declarer play, defence), with the weakest area and its lessons suggested next.
- **Topics**: deals chosen so a topic really comes up — Stayman, negative doubles, balancing, 3NT
  hold-ups, opening leads… (the deal is tested against the system's own auction).
- **History**: every board kept in full — reopen its review or play it again. Back up and restore your
  progress as a file.

**Learn**: 36 lessons with quizzes, each linked to practice deals on its topic, a glossary, and drills
(bidding, opening leads, declarer counting).

## System

Standard American Yellow Card: 15–17 1NT, 20–21 2NT, five-card majors, better minor, strong 2♣,
weak twos, Stayman, Jacoby transfers (and a minor-suit transfer), Jacoby 2NT, limit raises,
negative doubles, takeout doubles, Michaels, Unusual 2NT, weak jump overcalls, Blackwood, Gerber,
quantitative 4NT. Standard leads and signals (attitude, count, suit preference). Duplicate scoring.

Modern conventions, each switchable in Settings (all on by default except Drury): Roman Key Card
Blackwood 1430 with the queen and king asks, splinter raises, control (cue) bidding for slam, new
minor forcing, fourth suit forcing, Texas transfers and reverse Drury. Every convention has a lesson.

## Languages

All text lives in per-language catalogues; the code never contains user-facing strings.

| Path | What |
|---|---|
| `src/i18n/index.ts` | language list, active language (`setLang`, `onLangChange`), formatting helpers |
| `src/i18n/<lang>/` | the catalogue: `core` (cards, seats, calls), `ui`, `bidding`, `tutor`, `practice` |
| `src/learn/content/<lang>/` | lessons and glossary |

English defines the shape of the catalogue; the compiler rejects a language that misses a key or
changes a function's parameters. The bots' behaviour never depends on the language (tests check that
whole auctions and every inference are identical in every language).

**Adding a language** (e.g. German, `de`):

1. Copy `src/i18n/en` to `src/i18n/de` and translate it (keep the keys and function signatures; adapt
   grammar inside the functions — plurals, word order).
2. Add `'de'` to `Lang` and `LANGUAGES` in `src/i18n/index.ts` and register the catalogue there.
3. Optionally add lessons in `src/learn/content/de/` (same ids, diagrams and quiz answers as English;
   `test/lessons.test.ts` checks this) and register them in `src/learn/lessons.ts`. Until then the
   English lessons are shown.
4. `npx tsc --noEmit && npm test`.

## Layout

| Path | What |
|---|---|
| `src/core` | cards, auction, play, scoring (incl. IMPs and par), hand evaluation |
| `src/bidding` | the rule-based SAYC engine: each rule's conditions drive the bots, the explanations and the inferences |
| `src/engine` | double-dummy solver (partition-search transposition table), deal sampler, Monte Carlo play, defensive signalling (shared by the bots, the sampler and the tutor), opening leads, worker pool |
| `src/tutor` | declarer planner, play principles, reading the play |
| `src/game` | game controller, settings, the practice journal (archive, review queue, skills) and practice themes |
| `src/ui` | the interface |
| `src/learn` | lesson content per language |
| `src/i18n` | languages and text catalogues |

## License

MIT — see [LICENSE](LICENSE).
