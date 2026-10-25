# Changelog

All notable changes to Bridge Tutor. Dates are when a version went live.

## Unreleased

### Bots and tutor
- Bidding: no notrump on shapely hands without stoppers, better competition after overcalls and
  takeout doubles, misfit rescues, overcalls with a good six-card suit, Michaels and the Unusual 2NT
  read correctly, and countable grand slams bid. Average loss against double-dummy par fell from
  4.86 to 4.65 IMPs a board over 750 deals.
- Card play: each card's principle now matches it (overruff and underruff, returning partner's
  suit, declarer's ruffs, trumps already drawn…); the bots sample more layouts in the first tricks;
  passive opening leads against slams.
- Double-dummy solver: no more hangs on the hardest deals, and a rare one-trick error is fixed.

### Learning
- Bidding only: practise auctions without card play, scored with best play.
- The review shows the system's contract and a missed game or slam; key moments can be played again.
- Reviews of bidding mistakes alternate with a fresh deal on the same rule.
- With think-first on, declarer counts losers or top tricks before the plan is shown.
- Skill accuracy counts only real decisions; the next lesson follows the course's levels.
- A first visit is welcomed, with a path for beginners.
- Lesson corrections from a teacher's review, and seven new glossary terms.

### Everywhere
- Phones: one-row header, a compact table, and a bidding pad that shows a call's meaning before you make it.
- Keyboard and screen readers: every bid and card reachable, focus kept, modal dialogs, spoken calls and cards.
- Better contrast; a tap on the table skips the bots' pause; New deal asks before leaving a hand.
- Faster start: fonts don't block the first paint, and lessons load after the first screen.

## [1.0.0] — 2026-10-25

The first complete version.

### Play and tutor
- Contract bridge against three bots (SAYC), with a tutor you can switch on at any moment: the
  recommended call or card, why, and what else was considered.
- Card play by simulation: layouts of the hidden hands consistent with the bidding and the play,
  each solved double-dummy; declarer plan, counting, reading the play.
- Modern conventions, each switchable: Roman Key Card Blackwood, splinters, control bids, new minor
  forcing, fourth suit forcing, Texas transfers, reverse Drury.
- Standard defensive signals given by the bots and read by the tutor.

### Learning
- Hand review against double-dummy par, with your cards judged on the information you had, key
  moments, and sharing as a link, code, PBN or BBO hand.
- Training room: a spaced-repetition review queue of your own mistakes, accuracy by skill, practice
  topics dealt so the topic comes up, and the full history of your boards.
- 40 lessons with quizzes and practice deals, a glossary, and drills.

### Everywhere
- Twelve languages, switchable at any time; each loads only when it is chosen.
- Installable, works offline; progress backup and restore.

[1.0.0]: https://github.com/otsirh/bridge-tutor/releases/tag/v1.0.0
