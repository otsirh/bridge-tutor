// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Seat, Vulnerability } from '../../core/cards';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const practice = {
  title: 'Training',
  close: 'Close',
  tabs: { today: 'Today', review: 'Review', problems: 'Problems', techniques: 'Techniques', skills: 'Skills', topics: 'Topics', history: 'History' },

  skills: {
    'bid.opening': { name: 'Opening the bidding', desc: 'Whether to open, and which opening describes your hand: one of a suit, 1NT, 2♣, weak twos and preempts.' },
    'bid.response': { name: 'Responding', desc: 'Your calls after partner opens: raises, new suits, notrump responses, and choosing the game.' },
    'bid.rebid': { name: 'Opener’s rebid', desc: 'Your second call after opening: showing your strength and shape so partner can place the contract.' },
    'bid.notrump': { name: 'Notrump auctions', desc: '1NT and 2NT openings and the responses to them: Stayman, transfers, invitations.' },
    'bid.competitive': { name: 'Competitive bidding', desc: 'When the opponents bid too: overcalls, takeout and negative doubles, two-suiters, balancing, the partscore battle.' },
    'bid.slam': { name: 'Slam bidding', desc: 'Recognising slam, asking for aces, and stopping in time.' },
    'play.lead': { name: 'Opening leads', desc: 'Choosing the suit and the card to lead before you see dummy.' },
    'play.declarer': { name: 'Declarer play', desc: 'Counting and planning, finesses, establishing suits, trump management, entries.' },
    'play.defense': { name: 'Defence', desc: 'Second and third hand, signals, switching, counting declarer’s hand.' },
  },

  themes: {
    'openings': { name: 'Opening bids', desc: 'You are the first to open the bidding.' },
    'responses': { name: 'Responding to partner', desc: 'Partner opens and the opponents stay quiet: find your response.' },
    'rebids': { name: 'Opener’s rebid', desc: 'You open, partner responds: describe your hand.' },
    'notrump': { name: 'Notrump auctions', desc: 'Your side opens 1NT or 2NT.' },
    'stayman-transfers': { name: 'Stayman and transfers', desc: 'Partner opens 1NT or 2NT and you hold a major: Stayman or a transfer.' },
    'major-raises': { name: 'Raising partner’s major', desc: 'Partner opens 1♥ or 1♠ and you have support: simple, limit, Jacoby 2NT or game.' },
    'strong-2c': { name: 'Strong 2♣', desc: 'Your side has a big hand that opens 2♣.' },
    'preempts': { name: 'Weak twos and preempts', desc: 'Your side opens with a long suit and a weak hand.' },
    'competitive': { name: 'Competing for the contract', desc: 'Both sides bid: decide when to compete, double or defend.' },
    'overcalls': { name: 'Overcalls', desc: 'The opponents open and you have a suit to show.' },
    'takeout-doubles': { name: 'Takeout doubles', desc: 'Double for takeout, or answer partner’s takeout double.' },
    'negative-doubles': { name: 'Negative doubles', desc: 'Partner opens, they overcall, and you show the unbid major with a double.' },
    'two-suiters': { name: 'Michaels and Unusual 2NT', desc: 'Your side shows a two-suited hand with one bid.' },
    'balancing': { name: 'Balancing', desc: 'They stop low and it is your turn in the passout seat.' },
    'partscore-battle': { name: 'The partscore battle', desc: 'Both sides have a fit and fight at the two and three level (Law of Total Tricks).' },
    'slam': { name: 'Slams', desc: 'Your side has the strength to look for slam.' },
    'declarer': { name: 'Declarer play', desc: 'Your side plays the contract: count, plan, then play.' },
    'nt-games': { name: '3NT as declarer', desc: 'Play 3NT: count your winners, set up long suits, hold up, watch your entries.' },
    'suit-games': { name: 'Suit games as declarer', desc: 'Play a game in a suit: count losers, ruff, draw trumps at the right time.' },
    'leads': { name: 'Opening leads', desc: 'East declares: you make the opening lead.' },
    'defense': { name: 'Defence', desc: 'The opponents play the contract and you defend with partner.' },
    'defense-nt': { name: 'Defending notrump', desc: 'Partner leads against notrump: third hand play and the Rule of 11.' },
    'defense-suit': { name: 'Defending suit contracts', desc: 'Defend a trump contract: cash, ruff, or stay passive.' },
  },

  dealing: (topic: string) => (topic ? `Dealing a board for: ${topic}…` : 'Dealing…'),
  notEnough: 'not enough decisions yet',
  you: 'You',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'neither side vulnerable';
    if (v === 'Both') return 'both sides vulnerable';
    return v === ours ? 'you are vulnerable, they are not' : 'they are vulnerable, you are not';
  },

  // header and table
  topicChip: (topic: string) => `Topic: ${topic}`,
  // importing a deal
  importTitle: 'Play a deal from elsewhere',
  importText: 'Paste a PBN file, a BBO hand (LIN or a handviewer link), a deal like "N:AKQ2.K73.J52.Q8 …", or a Bridge Tutor share code or link.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  share code',
  importBtnPlay: 'Play this deal',
  importError: (code: string) => {
    if (code === 'empty') return 'Paste a deal first.';
    if (code === 'share') return 'This doesn’t look like a deal: check that the whole text or link was copied.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'The deal is incomplete or has a card twice.';
    return 'The deal could not be read.';
  },
  historyTitle: 'Your boards',
  // lessons
  practiseLesson: 'Practise this at the table',
  practiseLessonText: 'Deals where this topic comes up, played with the tutor.',
  lessonDone: 'Passed',
  quizScore: (right: number, total: number) => `First try: ${right} of ${total} right`,
  quizRetry: 'Try the quiz again',
  practicedCount: (n: number) => (n === 1 ? '1 board practised' : `${n} boards practised`),
  practiseTechnique: (name: string) => `Practise the technique: ${name}`,
  practiseTechniqueText: 'Whole deals where it decides the contract, played at the table and explained afterwards.',
  practiseTechniqueBtn: 'Practise the technique',

  // Today
  tileStreak: 'Days in a row',
  tileStreakNote: (n: number) => (n ? 'keep it going' : 'play a board today to start'),
  tileDue: 'To review',
  tileDueNote: (total: number) => `${plural(total, 'decision', 'decisions')} in the review queue`,
  tileBoards: 'Boards played',
  tileBoardsNote: (date: string) => `last on ${date}`,
  tileBoardsNone: 'play your first board',
  tileBidding: 'Bidding accuracy',
  tileBiddingNote: (right: number, total: number) => `${right} of ${total} calls matched the system`,
  nextSteps: 'What to do next',
  stepReviewTitle: (n: number) => `Review ${plural(n, 'decision', 'decisions')} you got wrong`,
  stepReviewText: 'Your own mistakes come back until you get them right, a few days apart each time — the fastest way to stop repeating them.',
  startReview: 'Start review',
  stepWeakTitle: (skill: string) => `Work on: ${skill}`,
  stepWeakNew: 'You have played few decisions of this kind yet. Practise a few boards dealt for it.',
  stepWeakText: (pct: string, n: number) => `${pct} right over your last ${plural(n, 'decision', 'decisions')} — your weakest area. Practise boards dealt for it, and read the lesson if you haven't.`,
  practiseAtTable: 'Practise at the table',
  readLesson: (title: string) => `Read: ${title}`,
  stepCourseTitle: (title: string) => `Continue the course: ${title}`,
  stepCourseText: (i: number, total: number) => `Lesson ${i} of ${total}. A lesson counts as done when you get 80% of its quiz right at the first try.`,
  openLesson: 'Open lesson',
  stepProblemsTitle: 'Find the right play',
  stepProblemsText: 'Problems from real deals where one card is clearly best: declarer play, defence and opening leads.',
  openProblems: 'Solve problems',
  stepTechniquesTitle: 'Practise a declarer technique',
  stepTechniquesText: 'Whole deals where one technique decides the contract — a finesse, the hold-up, ducking, unblocking, trump play, a safety play — explained after the hand.',
  openTechniques: 'Practise techniques',
  howItWorks: 'Every board you finish is saved with its analysis. Calls that differ from the system and cards that were clearly worse with the information you had (not just in hindsight) go into your review queue.',

  // Review
  reviewEmptyTitle: 'No mistakes to review yet',
  reviewEmptyText: 'Play some boards: calls that differ from the system and cards that cost you with the information you had will appear here.',
  reviewDoneTitle: 'All caught up',
  reviewDoneText: (total: number, next: string) => `${plural(total, 'decision is', 'decisions are')} scheduled for later (next on ${next}).`,
  sessionScore: (right: number, done: number) => `This session: ${right}/${done} right`,
  itemFrom: (date: string, board: number) => `from board ${board}, ${date}`,
  freshDeal: 'New deal, same idea',
  itemFromDrill: (date: string) => `from the bidding drill, ${date}`,
  itemFromProblem: (date: string) => `from a problem, ${date}`,
  itemFromTechnique: (date: string) => `from technique practice, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'new' : `step ${box} of ${last}`),
  dueLeft: (n: number) => `${n} due`,
  next: 'Next',
  nextIn: (days: number) => (days === 0 ? 'Again later today.' : days === 1 ? 'Next review tomorrow.' : `Next review in ${days} days.`),
  again: 'It will come back again until you get it right.',
  showBoard: 'Show the whole board',
  simulating: 'Simulating that card in layouts that fit what you know…',
  bidPrompt: 'Your call.',
  youAre: (seat: string, vul: string) => `You are ${seat}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Right: ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `The system bids ${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `Your ${call} would be read as ${name}: ${desc}`,
  atTableYouBid: (call: string) => `At the table you bid ${call}.`,
  cardPrompt: 'Your card.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) => `${contract} by ${declarer}; you play ${seat}'s card at trick ${trick}.`,
  dummyLabel: (seat: string) => `Dummy (${seat})`,
  trickSoFar: 'This trick:',
  yourHand: (seat: string) => `Your hand (${seat})`,
  cardRight: 'Right — that is the card that did best.',
  cardWrong: (cards: string) => `Best: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `In ${n} layouts that fitted the bidding and play, ${best} averaged ${bt} tricks for your side (${declaring ? 'making' : 'beating the contract'} ${bs} of the time); ${yours}, your card at the table, averaged ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `In ${n} layouts that fitted the bidding and play, ${best} averaged ${bt} tricks for your side (${declaring ? 'making' : 'beating the contract'} ${bs} of the time); ${yours}, your answer to the problem, averaged ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) => `${card} averaged ${t} tricks (${s}) over ${n} new layouts.`,

  // Problems
  problems: {
    intro: 'Positions from real deals where the simulation shows one card clearly best — find it. Each deal is bid by the system and played by the bots up to your decision.',
    filterLabel: 'Kind of problem',
    filters: { mixed: 'Mixed', declarer: 'Declarer play', defense: 'Defence', lead: 'Opening leads' },
    kinds: { declarer: 'Declarer play', defense: 'Defence', lead: 'Opening lead' },
    session: (right: number, done: number) => `This session: ${right}/${done} right`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `All time: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Ready: ${declarer} declarer · ${defense} defence · ${lead} lead`,
    boardLine: (board: number, vul: string) => `Board ${board}, ${vul}.`,

    // waiting for the first problem
    preparing: 'Preparing a problem…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Dealing a board for declarer play…' : kind === 'defense' ? 'Dealing a board to defend…' : 'Dealing a board with an opening lead to make…',
    stagePlaying: (trick: number) => `The bots are playing trick ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Testing your decision at trick ${trick}: ${done} of ${total} layouts…` : 'Checking the deal…',
    tried: (n: number) => (n === 1 ? '1 deal tried so far.' : `${n} deals tried so far.`),
    waitNote: 'Only positions with a clear answer are kept, so it can take a few deals. Problems are prepared in the background while this tab is open, and up to 6 of each kind are kept for next time.',
    leadNote: 'Clear opening-lead problems are rare: preparing one can take a minute or two.',

    // the question
    qDeclarer: (contract: string, seat: string) => `You are declarer in ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} is declarer in ${contract}; you defend as ${seat}.`,
    qLead: (contract: string, declarer: string) => `${declarer} is declarer in ${contract}, and you are on lead.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `You led the ${card}.` : who === 'partner' ? `Partner (${seat}) led the ${card}.` : `${seat} led the ${card}.`,
    tally: (trick: number, won: number, lost: number) => `Trick ${trick}: so far your side has ${won} ${won === 1 ? 'trick' : 'tricks'}, the opponents ${lost}.`,
    askLead: 'Which card do you lead?',
    askPlan: (fromDummy: boolean) => `Plan the play: which card ${fromDummy ? 'from dummy' : 'from your hand'}?`,
    askDeclarer: (fromDummy: boolean) => `Which card ${fromDummy ? 'from dummy' : 'from your hand'} now?`,
    askDefence: 'Which card do you play?',

    // the answer
    right: (cards: string) => `Right! Best: ${cards}.`,
    wrong: (cards: string) => `Not this time. Best: ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `In ${n} layouts that fit the bidding and the play so far, ${best} took ${t} tricks on average for your side and ${declaring ? 'made the contract' : 'beat the contract'} ${s} of the time.`,
    yourLine: (card: string, t: string, s: string) => `Your ${card}: ${t} tricks, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `The best of the rest, ${card}: ${t} tricks, ${s}.`,
    colCard: 'Card',
    colTricks: 'Tricks',
    colMakes: 'Makes',
    colSets: 'Beats it',
    addedToReview: 'Added to your review queue: this position comes back until you get it right.',
    whyThisSuit: 'Why this suit:',
    next: 'Next problem',
    skip: 'Skip',
    showDeal: 'Show the whole deal',
    hideDeal: 'Hide the deal',
    playFromStart: 'Play this deal from the start',
    declarerTag: 'declarer',
    dummyTag: 'dummy',
  },

  // Techniques: whole deals where one declarer technique decides the contract
  techniques: {
    intro: 'Whole deals where one declarer technique decides the contract. Play the hand at the table; the review then shows the key moment — whether you found the technique, with the simulation behind it — and the lesson that teaches it. Each deal is bid by the system and tested by simulation with only what declarer could see.',
    filterLabel: 'Technique',
    any: 'Any',
    names: {
      finesse: 'Finesse',
      holdUp: 'Hold-up',
      duck: 'Ducking',
      unblock: 'Unblocking',
      drawTrumps: 'Drawing trumps',
      ruffShort: 'Ruffing in the short hand',
      safety: 'Safety play',
    },
    descs: {
      finesse: 'Play the card that wins when the missing honour sits with the defender who has already played — the queen from A Q, or the king you led towards.',
      holdUp: 'Against notrump, let the defenders win their suit once or twice before you take your stopper.',
      duck: 'Give up an early round of your long suit while the long hand keeps its high cards as entries.',
      unblock: 'Play the high cards of the shorter hand first, so you can still reach the long hand.',
      drawTrumps: 'Take the defenders’ trumps before they can ruff your winners.',
      ruffShort: 'Ruff losers in the hand with fewer trumps: each ruff there is an extra trick.',
      safety: 'Give up a possible overtrick to make sure of the contract.',
    },
    why: {
      finesse: 'A finesse wins whenever the higher cards you are missing are with the defender who has already played to the trick: then your honour (or partner’s, left to run) holds the trick. Here that was clearly the best chance: cashing a higher card instead gains only if the missing honour drops, and playing low gives the trick away.',
      holdUp: 'The hold-up: by refusing to win the defenders’ suit at once, you exhaust the defender who has fewer cards in it. If that defender gains the lead later, there is no card of the suit left to return, and the long cards never run. Win the first round and the defenders can cash their suit as soon as either of them gets in.',
      duck: 'Ducking a round of your long suit gives up a trick early — usually one you would lose anyway — while the long hand still has its high cards. When you regain the lead you can still reach the long cards; win the early rounds and the last ones may be stranded with no way to reach them.',
      unblock: 'Unblocking: play the high cards from the shorter hand first. Then the last cards of the suit are in the long hand and you still hold a low card to reach them; play the long hand’s honours first and the suit blocks, with the long cards stranded.',
      drawTrumps: 'Drawing trumps: while the defenders still hold trumps, they can ruff your winners in the side suits. Each round of trumps takes one from each defender; here drawing them now did clearly better than anything else.',
      ruffShort: 'Ruffing in the short hand: a ruff in the hand with fewer trumps is an extra trick, since those trumps would take no tricks of their own; ruffing in the long hand makes nothing extra. Do it while the short hand still has trumps — drawing trumps first could take them away.',
      safety: 'A safety play: another card took more tricks on average, but this one made the contract more often. It gives up a possible overtrick to guard against the layouts where the greedier play fails — when the contract is at stake, play for the contract.',
    },
    hints: 'Name the technique before the hand',
    hintsNote: 'Off: the review tells you which technique the deal needed, as it would be at the table.',
    play: 'Play a deal',
    ready: (n: number) => (n === 1 ? '1 deal ready' : `${n} deals ready`),
    score: (right: number, done: number) => `Found: ${right} of ${done}`,
    techScore: (name: string, right: number, done: number) => `${name}: ${right}/${done}`,
    lessonLink: (title: string) => `Lesson: ${title}`,
    preparing: 'Preparing a deal…',
    waitNote: 'Only deals where the technique clearly decides the contract are kept, so finding one can take a few minutes. They are prepared in the background while this tab is open and while you play a technique deal; up to 3 of each technique are kept for next time. Some techniques come up rarely (ducking, unblocking, ruffing in the short hand, safety plays): those take longer.',

    // at the table
    noteTitle: 'Technique practice',
    noteHidden: 'One decision in this hand calls for a declarer technique. Find it: the tutor keeps its card advice to itself until that moment is behind you, and the review explains it.',
    noteLookFor: (name: string, desc: string) => `Look for: ${name}. ${desc} The tutor keeps its card advice to itself until that moment is behind you.`,
    withheld: 'Technique practice: this decision is up to you. The tutor’s card advice comes back once the key moment is behind you.',

    // the review
    reviewTitle: (name: string) => `The technique: ${name}`,
    found: (trick: number, card: string) => `You found it: ${card} at trick ${trick}.`,
    missed: (trick: number, card: string, best: string) => `At trick ${trick} you played ${card}; the technique was ${best}.`,
    offScript: (trick: number) => `The play took another path before the key moment (trick ${trick}), so it did not come up. Play the deal from the key moment to try it.`,
    auto: (trick: number) => `The key moment (trick ${trick}) was played for you, by a claim or by playing the hand out.`,
    simBest: (n: number, best: string, t: string, s: string) => `In ${n} layouts that fit the bidding and the play so far, ${best} averaged ${t} tricks and made the contract ${s} of the time.`,
    simYours: (card: string, t: string, s: string) => `Your ${card}: ${t} tricks, made ${s}.`,
    simOther: (card: string, t: string, s: string) => `The best other card, ${card}: ${t} tricks, made ${s}.`,
    tryAgain: 'Try the key moment again',
    playFromKey: 'Play from the key moment',
    next: 'Next technique deal',
    addedToReview: 'Added to your review queue: the key moment comes back until you get it right.',
  },

  // Skills
  skillsIntro: 'Accuracy over your most recent decisions in each area. Bidding counts calls that matched the system; play counts cards that were not clearly worse than the best card with the information you had.',
  decisions: (n: number) => plural(n, 'decision', 'decisions'),
  practise: 'Practise',

  // Topics
  topicsIntro: 'Choose a topic and the next boards are dealt so that it comes up — at the table, with the tutor, the review and everything else as usual.',
  nowPractising: 'Now practising:',
  stopTopic: 'Back to ordinary deals',
  dealAnother: 'Deal another',

  // History
  review: 'Review',
  replay: 'Play again',
  historyCols: ['Date', 'Board', 'Contract', 'Result', 'Score NS', 'IMPs vs par', 'Calls', 'Card errors · tricks lost'],
  historyEmpty: 'No boards yet. Every board you finish is kept here with its analysis.',
  historyNote: 'Card errors: cards that were clearly worse with the information you had. Tricks lost: what your cards cost compared with perfect play by everyone (double dummy) — sometimes the right play loses in hindsight.',
  backupTitle: 'Backup',
  backupText: 'Your progress is stored in this browser only. Save a backup file to keep it safe or to move it to another device.',
  exportBtn: 'Save backup',
  importBtn: 'Restore from file',
  restored: 'Progress restored.',
  restoreFailed: 'That file is not a Bridge Tutor backup.',
};
