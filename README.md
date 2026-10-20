# Бридж треньор (Bridge Tutor)

Контрактен бридж срещу три бота, с треньор, който можете да включите по всяко време. Целият интерфейс, обясненията, уроците и упражненията са на български.

Contract bridge against three bots, with a tutor you can switch on at any moment. The interface is in Bulgarian.

You sit South; North is your partner. When your side declares you play both hands.

## Run it

```sh
npm install
npm run dev        # http://localhost:5173
```

`npm run build` writes a single self-contained `dist/index.html` (open it directly or host it anywhere).
`npm test` runs the engine tests (solver vs brute force, scoring, auction rules).

## What the tutor does

- **Bidding**: the recommended call, the rule behind it and a checklist of its requirements against
  your hand ("13+ HCP — you have 14"), plus every other call it considered and why it doesn't fit.
  Hover any bid in the bidding box to see what it would tell partner. Click any call in the auction
  to see what it showed (alerts for artificial bids).
- **Card play**: the card that does best across many simulated layouts of the hidden hands that fit
  the auction and the play so far (each solved double-dummy), with tricks / success rate / score per
  card and the principle behind it (second hand low, cover an honour, lead toward honours, ...).
- **Declarer plan** when dummy comes down: top tricks or losers suit by suit, and where extra tricks come from.
- **Counting**: how many HCP each hidden hand can hold given the auction and what you see, who has shown out, trumps left.
- **Coach**: asks you to confirm when your call or card is clearly worse than the recommendation.
- **Think first**: by default the recommendation stays hidden until you ask for it.
- **Review** after each hand: score vs double-dummy par in IMPs, the double-dummy table, every call
  compared with the system, every card checked double-dummy (tricks lost marked), and a list of
  things to take away. Replay the same deal to try again.
- **Learn**: lessons with quizzes, a glossary, and drills (bidding, opening leads, declarer counting).
- **Progress**: contracts made/beaten, bidding accuracy, tricks lost per hand, IMPs vs par.

Undo, claim, play-out, practice deal types (declarer practice, defence, slams, competitive) and
"show all hands" are in the table controls and Settings.

## System

Standard American Yellow Card: 15–17 1NT, 20–21 2NT, five-card majors, better minor, strong 2♣,
weak twos, Stayman, Jacoby transfers (and a minor-suit transfer), Jacoby 2NT, limit raises,
negative doubles, takeout doubles, Michaels, Unusual 2NT, weak jump overcalls, Blackwood, Gerber,
quantitative 4NT. Standard leads and attitude signals. Duplicate scoring.

## Layout

| Path | What |
|---|---|
| `src/core` | cards, auction, play, scoring (incl. IMPs and par), hand evaluation |
| `src/bidding` | the rule-based SAYC engine: each rule's conditions drive the bots, the explanations and the inferences |
| `src/engine` | double-dummy solver (partition-search transposition table), deal sampler, Monte Carlo play, opening leads, worker pool |
| `src/tutor` | declarer planner and play principles |
| `src/game` | game controller and local storage |
| `src/ui` | the interface |
| `src/learn` | lesson content |
