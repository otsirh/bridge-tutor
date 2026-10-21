// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Seat, Vulnerability } from '../../core/cards';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const practice = {
  title: 'Training',
  close: 'Close',
  tabs: { today: 'Today', review: 'Review', skills: 'Skills', topics: 'Topics', history: 'History' },

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
  howItWorks: 'Every board you finish is saved with its analysis. Calls that differ from the system and cards that were clearly worse with the information you had (not just in hindsight) go into your review queue.',

  // Review
  reviewEmptyTitle: 'No mistakes to review yet',
  reviewEmptyText: 'Play some boards: calls that differ from the system and cards that cost you with the information you had will appear here.',
  reviewDoneTitle: 'All caught up',
  reviewDoneText: (total: number, next: string) => `${plural(total, 'decision is', 'decisions are')} scheduled for later (next on ${next}).`,
  sessionScore: (right: number, done: number) => `This session: ${right}/${done} right`,
  itemFrom: (date: string, board: number) => `from board ${board}, ${date}`,
  itemFromDrill: (date: string) => `from the bidding drill, ${date}`,
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
  cardFresh: (card: string, t: string, s: string, n: number) => `${card} averaged ${t} tricks (${s}) over ${n} new layouts.`,

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
