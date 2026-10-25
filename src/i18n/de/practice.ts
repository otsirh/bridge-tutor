// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';
import type { Seat, Vulnerability } from '../../core/cards';

/** "1 Entscheidung", "5 Entscheidungen" */
const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
const decisions = (n: number) => count(n, 'Entscheidung', 'Entscheidungen');

export const practice: Text['practice'] = {
  title: 'Training',
  close: 'Schließen',
  tabs: { today: 'Heute', review: 'Wiederholen', problems: 'Aufgaben', skills: 'Fähigkeiten', topics: 'Themen', history: 'Verlauf' },

  skills: {
    'bid.opening': { name: 'Eröffnen', desc: 'Ob Sie eröffnen und welche Eröffnung Ihre Hand beschreibt: 1 in Farbe, 1SA, 2♣, schwache Zweier und Sperreröffnungen.' },
    'bid.response': { name: 'Antworten', desc: 'Ihre Ansagen, nachdem Partner eröffnet hat: Hebungen, neue Farben, SA-Antworten und die Wahl des Vollspiels.' },
    'bid.rebid': { name: 'Wiedergebot des Eröffners', desc: 'Ihre zweite Ansage nach der Eröffnung: Sie zeigen Stärke und Verteilung, damit Partner den Kontrakt bestimmen kann.' },
    'bid.notrump': { name: 'SA-Reizungen', desc: '1SA- und 2SA-Eröffnungen und die Antworten darauf: Stayman, Transfers, Einladungen.' },
    'bid.competitive': { name: 'Konkurrenzreizung', desc: 'Wenn auch die Gegner reizen: Gegenreizungen, Informations- und negative Kontras, Zweifärber, Wiederbelebung, der Kampf um den Teilkontrakt.' },
    'bid.slam': { name: 'Schlemmreizung', desc: 'Schlemm erkennen, nach Assen fragen und rechtzeitig aufhören.' },
    'play.lead': { name: 'Ausspiel', desc: 'Farbe und Karte für das Ausspiel wählen, bevor Sie den Dummy sehen.' },
    'play.declarer': { name: 'Alleinspiel', desc: 'Zählen und planen, Schnitte, Farben hochspielen, Trumpfbehandlung, Übergänge.' },
    'play.defense': { name: 'Gegenspiel', desc: 'Zweite und dritte Hand, Markierungen, Farbwechsel, die Hand des Alleinspielers zählen.' },
  },

  themes: {
    'openings': { name: 'Eröffnungen', desc: 'Sie eröffnen als Erster die Reizung.' },
    'responses': { name: 'Antworten auf Partners Eröffnung', desc: 'Partner eröffnet, die Gegner schweigen: Finden Sie Ihre Antwort.' },
    'rebids': { name: 'Wiedergebot des Eröffners', desc: 'Sie eröffnen, Partner antwortet: Beschreiben Sie Ihre Hand.' },
    'notrump': { name: 'SA-Reizungen', desc: 'Ihre Seite eröffnet 1SA oder 2SA.' },
    'stayman-transfers': { name: 'Stayman und Transfers', desc: 'Partner eröffnet 1SA oder 2SA, und Sie haben eine Oberfarbe: Stayman oder Transfer.' },
    'major-raises': { name: 'Hebung von Partners Oberfarbe', desc: 'Partner eröffnet 1♥ oder 1♠, und Sie haben Unterstützung: einfache Hebung, Limit-Hebung, Jacoby 2SA oder Vollspiel.' },
    'strong-2c': { name: 'Starkes 2♣', desc: 'Ihre Seite hat eine sehr starke Hand und eröffnet 2♣.' },
    'preempts': { name: 'Schwache Zweier und Sperreröffnungen', desc: 'Ihre Seite eröffnet mit einer langen Farbe und einer schwachen Hand.' },
    'competitive': { name: 'Kampf um den Kontrakt', desc: 'Beide Seiten reizen: Entscheiden Sie, wann Sie mitreizen, kontrieren oder verteidigen.' },
    'overcalls': { name: 'Gegenreizungen', desc: 'Die Gegner eröffnen, und Sie haben eine Farbe zu zeigen.' },
    'takeout-doubles': { name: 'Informationskontras', desc: 'Geben Sie ein Informationskontra, oder antworten Sie auf das Informationskontra des Partners.' },
    'negative-doubles': { name: 'Negative Kontras', desc: 'Partner eröffnet, die Gegner reizen dazwischen, und Sie zeigen die ungereizte Oberfarbe mit Kontra.' },
    'two-suiters': { name: 'Michaels und Unusual 2SA', desc: 'Ihre Seite zeigt einen Zweifärber mit einem einzigen Gebot.' },
    'over-notrump': { name: 'Gegen 1SA reizen', desc: 'Die Gegner eröffnen 1SA, und Ihre Seite kontriert oder reizt eine lange Farbe.' },
    'over-preempts': { name: 'Gegen Sperreröffnungen reizen', desc: 'Die Gegner eröffnen mit einem schwachen Zweier oder einer Sperre, und Ihre Seite kontriert, reizt eine Farbe oder Sans Atout.' },
    'opening-doubled': { name: 'Wenn die Gegner kontrieren', desc: 'Ihre Seite eröffnet, und der nächste Spieler kontriert: Zeigen Sie sofort Stärke und Fit.' },
    'balancing': { name: 'Wiederbelebung', desc: 'Die Gegner bleiben niedrig stehen, und Sie sitzen in der Wiederbelebungsposition.' },
    'partscore-battle': { name: 'Der Kampf um den Teilkontrakt', desc: 'Beide Seiten haben einen Fit und kämpfen auf der Zweier- und Dreierstufe (Gesetz der totalen Stiche).' },
    'slam': { name: 'Schlemm', desc: 'Ihre Seite hat genug Stärke, um nach Schlemm zu suchen.' },
    'declarer': { name: 'Alleinspiel', desc: 'Ihre Seite spielt den Kontrakt: zählen, planen, dann spielen.' },
    'nt-games': { name: '3SA als Alleinspieler', desc: 'Spielen Sie 3SA: Gewinner zählen, lange Farben hochspielen, ducken, auf die Übergänge achten.' },
    'suit-games': { name: 'Farbvollspiele als Alleinspieler', desc: 'Spielen Sie ein Vollspiel in Farbe: Verlierer zählen, schnappen, zur richtigen Zeit Trumpf ziehen.' },
    'leads': { name: 'Ausspiel', desc: 'Ost ist Alleinspieler: Sie spielen aus.' },
    'defense': { name: 'Gegenspiel', desc: 'Die Gegner spielen den Kontrakt, und Sie verteidigen mit Partner.' },
    'defense-nt': { name: 'Gegenspiel gegen SA', desc: 'Partner spielt gegen SA aus: das Spiel der dritten Hand und die Elferregel.' },
    'defense-suit': { name: 'Gegenspiel gegen Farbkontrakte', desc: 'Verteidigen Sie gegen einen Trumpfkontrakt: abziehen, schnappen oder passiv bleiben.' },
  },

  dealing: (topic: string) => (topic ? `Ein Board zum Thema „${topic}“ wird ausgeteilt…` : 'Wird ausgeteilt…'),
  notEnough: 'noch nicht genug Entscheidungen',
  you: 'Sie',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'keiner in Gefahr';
    if (v === 'Both') return 'alle in Gefahr';
    return v === ours ? 'Sie in Gefahr, die Gegner nicht' : 'die Gegner in Gefahr, Sie nicht';
  },

  topicChip: (topic: string) => `Thema: ${topic}`,
  importTitle: 'Ein Spiel von anderswo nachspielen',
  importText: 'Fügen Sie eine PBN-Datei, eine BBO-Hand (LIN oder ein Handviewer-Link), eine Verteilung wie „N:AKQ2.K73.J52.Q8 …“ oder einen Code bzw. Link aus Bridge Tutor ein.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  Code',
  importBtnPlay: 'Dieses Spiel spielen',
  importError: (code: string) => {
    if (code === 'empty') return 'Fügen Sie zuerst ein Spiel ein.';
    if (code === 'share') return 'Das sieht nicht wie ein Spiel aus: Prüfen Sie, ob der ganze Text oder Link kopiert wurde.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'Das Spiel ist unvollständig oder enthält eine Karte doppelt.';
    return 'Das Spiel konnte nicht gelesen werden.';
  },
  historyTitle: 'Ihre Boards',
  practiseLesson: 'Am Tisch üben',
  practiseLessonText: 'Spiele mit dem Tutor, in denen dieses Thema vorkommt.',
  lessonDone: 'Bestanden',
  quizScore: (right: number, total: number) => `Erster Versuch: ${right} von ${total} richtig`,
  quizRetry: 'Quiz wiederholen',
  practicedCount: (n: number) => (n === 1 ? '1 Board geübt' : `${n} Boards geübt`),

  // Today
  tileStreak: 'Tage in Folge',
  tileStreakNote: (n: number) => (n ? 'weiter so' : 'spielen Sie heute ein Board, um zu beginnen'),
  tileDue: 'Zu wiederholen',
  tileDueNote: (total: number) => `${decisions(total)} in der Wiederholung`,
  tileBoards: 'Gespielte Boards',
  tileBoardsNote: (date: string) => `zuletzt am ${date}`,
  tileBoardsNone: 'spielen Sie Ihr erstes Board',
  tileBidding: 'Reizgenauigkeit',
  tileBiddingNote: (right: number, total: number) => `${right} von ${total} Ansagen wie im System`,
  nextSteps: 'Wie geht es weiter?',
  stepReviewTitle: (n: number) => `${count(n, 'Fehlentscheidung', 'Fehlentscheidungen')} wiederholen`,
  stepReviewText: 'Ihre eigenen Fehler kommen wieder, bis Sie sie richtig lösen, jedes Mal ein paar Tage später – so wiederholen Sie sie am schnellsten nicht mehr.',
  startReview: 'Wiederholung starten',
  stepWeakTitle: (skill: string) => `Üben Sie: ${skill}`,
  stepWeakNew: 'Entscheidungen dieser Art hatten Sie bisher nur wenige. Üben Sie ein paar Boards, die dafür ausgeteilt werden.',
  stepWeakText: (pct: string, n: number) =>
    `${pct} richtig ${n === 1 ? 'bei Ihrer letzten Entscheidung' : `bei Ihren letzten ${n} Entscheidungen`} – Ihr schwächster Bereich. Üben Sie Boards, die dafür ausgeteilt werden, und lesen Sie die Lektion, falls noch nicht geschehen.`,
  practiseAtTable: 'Am Tisch üben',
  readLesson: (title: string) => `Lektion: ${title}`,
  stepCourseTitle: (title: string) => `Kurs fortsetzen: ${title}`,
  stepCourseText: (i: number, total: number) => `Lektion ${i} von ${total}. Eine Lektion gilt als abgeschlossen, wenn Sie im ersten Versuch 80% des Quiz richtig beantworten.`,
  openLesson: 'Lektion öffnen',
  stepProblemsTitle: 'Die richtige Karte finden',
  stepProblemsText: 'Aufgaben aus echten Spielen, in denen eine Karte klar am besten ist: Alleinspiel, Gegenspiel und Ausspiel.',
  openProblems: 'Aufgaben lösen',
  howItWorks: 'Jedes beendete Board wird mit seiner Analyse gespeichert. Ansagen, die vom System abweichen, und Karten, die mit Ihrem damaligen Wissen klar schlechter waren (nicht nur im Nachhinein), kommen in Ihre Wiederholung.',

  // Review
  reviewEmptyTitle: 'Noch keine Fehler zu wiederholen',
  reviewEmptyText: 'Spielen Sie ein paar Boards: Ansagen, die vom System abweichen, und Karten, die Sie mit Ihrem damaligen Wissen etwas gekostet haben, erscheinen hier.',
  reviewDoneTitle: 'Alles erledigt',
  reviewDoneText: (total: number, next: string) => `${total === 1 ? '1 Entscheidung ist' : `${total} Entscheidungen sind`} für später eingeplant (die nächste am ${next}).`,
  sessionScore: (right: number, done: number) => `Diese Runde: ${right}/${done} richtig`,
  itemFrom: (date: string, board: number) => `aus Board ${board}, ${date}`,
  freshDeal: 'Neues Blatt, gleiche Idee',
  itemFromDrill: (date: string) => `aus der Reizübung, ${date}`,
  itemFromProblem: (date: string) => `aus einer Aufgabe, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'neu' : `Stufe ${box} von ${last}`),
  dueLeft: (n: number) => `${n} fällig`,
  next: 'Weiter',
  nextIn: (days: number) => (days === 0 ? 'Heute später noch einmal.' : days === 1 ? 'Nächste Wiederholung morgen.' : `Nächste Wiederholung in ${days} Tagen.`),
  again: 'Sie kommt wieder, bis Sie sie richtig lösen.',
  showBoard: 'Ganzes Board zeigen',
  simulating: 'Diese Karte wird in Verteilungen simuliert, die zu Ihrem Wissen passen…',
  bidPrompt: 'Ihre Ansage.',
  youAre: (seat: string, vul: string) => `Sie sitzen ${seat}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Richtig: ${call} – ${rule}`,
  bidWrong: (call: string, rule: string) => `Das System reizt ${call} – ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `Ihr ${call} würde als „${name}“ verstanden: ${desc}`,
  atTableYouBid: (call: string) => `Am Tisch war Ihre Ansage ${call}.`,
  cardPrompt: 'Ihre Karte.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) => `${contract} von ${declarer}; Sie spielen die Karte von ${seat} in Stich ${trick}.`,
  dummyLabel: (seat: string) => `Dummy (${seat})`,
  trickSoFar: 'Dieser Stich:',
  yourHand: (seat: string) => `Ihre Hand (${seat})`,
  cardRight: 'Richtig – mit dieser Karte lief es am besten.',
  cardWrong: (cards: string) => `Am besten: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `In ${n} Verteilungen, die zu Reizung und Spiel passten, brachte ${best} Ihrer Seite durchschnittlich ${bt} Stiche (${declaring ? 'Kontrakt erfüllt' : 'Kontrakt geschlagen'} in ${bs} der Fälle); ${yours}, Ihre Karte am Tisch, brachte durchschnittlich ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `In ${n} Verteilungen, die zu Reizung und Spiel passten, brachte ${best} Ihrer Seite durchschnittlich ${bt} Stiche (${declaring ? 'Kontrakt erfüllt' : 'Kontrakt geschlagen'} in ${bs} der Fälle); ${yours}, Ihre Antwort auf die Aufgabe, brachte durchschnittlich ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) => `${card} brachte in ${n} neuen Verteilungen durchschnittlich ${t} Stiche (${s}).`,

  // Problems
  problems: {
    intro: 'Stellungen aus echten Spielen, in denen die Simulation eine Karte klar als beste zeigt – finden Sie sie. Jedes Spiel wird vom System gereizt und von den Bots bis zu Ihrer Entscheidung gespielt.',
    filterLabel: 'Art der Aufgabe',
    filters: { mixed: 'Gemischt', declarer: 'Alleinspiel', defense: 'Gegenspiel', lead: 'Ausspiel' },
    kinds: { declarer: 'Alleinspiel', defense: 'Gegenspiel', lead: 'Ausspiel' },
    session: (right: number, done: number) => `Diese Runde: ${right}/${done} richtig`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `Insgesamt: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Bereit: ${declarer} Alleinspiel · ${defense} Gegenspiel · ${lead} Ausspiel`,
    boardLine: (board: number, vul: string) => `Board ${board}, ${vul}.`,

    preparing: 'Eine Aufgabe wird vorbereitet…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Ein Board für das Alleinspiel wird ausgeteilt…' : kind === 'defense' ? 'Ein Board für das Gegenspiel wird ausgeteilt…' : 'Ein Board mit einem Ausspielproblem wird ausgeteilt…',
    stagePlaying: (trick: number) => `Die Bots spielen Stich ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Ihre Entscheidung in Stich ${trick} wird getestet: ${done} von ${total} Verteilungen…` : 'Das Spiel wird geprüft…',
    tried: (n: number) => (n === 1 ? 'Bisher 1 Spiel versucht.' : `Bisher ${n} Spiele versucht.`),
    waitNote: 'Nur Stellungen mit einer klaren Antwort werden behalten, deshalb kann es ein paar Spiele dauern. Aufgaben werden im Hintergrund vorbereitet, solange dieser Tab offen ist, und bis zu 6 jeder Art werden für das nächste Mal aufbewahrt.',
    leadNote: 'Klare Ausspielaufgaben sind selten: Die Vorbereitung kann ein bis zwei Minuten dauern.',

    qDeclarer: (contract: string, seat: string) => `Sie sind Alleinspieler in ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} ist Alleinspieler in ${contract}; Sie spielen als ${seat} gegen.`,
    qLead: (contract: string, declarer: string) => `${declarer} ist Alleinspieler in ${contract}, und Sie spielen aus.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `Sie haben ${card} ausgespielt.` : who === 'partner' ? `Partner (${seat}) hat ${card} ausgespielt.` : `${seat} hat ${card} ausgespielt.`,
    tally: (trick: number, won: number, lost: number) => `Stich ${trick}: Bisher hat Ihre Seite ${count(won, 'Stich', 'Stiche')}, die Gegner ${lost}.`,
    askLead: 'Welche Karte spielen Sie aus?',
    askPlan: (fromDummy: boolean) => `Planen Sie das Spiel: Welche Karte ${fromDummy ? 'vom Tisch' : 'aus Ihrer Hand'}?`,
    askDeclarer: (fromDummy: boolean) => `Welche Karte ${fromDummy ? 'vom Tisch' : 'aus Ihrer Hand'} spielen Sie jetzt?`,
    askDefence: 'Welche Karte spielen Sie?',

    right: (cards: string) => `Richtig! Am besten: ${cards}.`,
    wrong: (cards: string) => `Diesmal nicht. Am besten: ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `In ${n} Verteilungen, die zur Reizung und zum bisherigen Spiel passen, brachte ${best} Ihrer Seite durchschnittlich ${t} Stiche und ${declaring ? 'erfüllte den Kontrakt' : 'schlug den Kontrakt'} in ${s} der Fälle.`,
    yourLine: (card: string, t: string, s: string) => `Ihre Karte ${card}: ${t} Stiche, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `Beste der übrigen Karten, ${card}: ${t} Stiche, ${s}.`,
    colCard: 'Karte',
    colTricks: 'Stiche',
    colMakes: 'Erfüllt',
    colSets: 'Fällt',
    addedToReview: 'Zu Ihrer Wiederholung hinzugefügt: Diese Stellung kommt wieder, bis Sie sie richtig lösen.',
    whyThisSuit: 'Warum diese Farbe:',
    next: 'Nächste Aufgabe',
    skip: 'Überspringen',
    showDeal: 'Ganzes Spiel zeigen',
    hideDeal: 'Spiel ausblenden',
    playFromStart: 'Dieses Spiel von Anfang an spielen',
    declarerTag: 'Alleinspieler',
    dummyTag: 'Dummy',
  },

  // Skills
  skillsIntro: 'Genauigkeit bei Ihren letzten Entscheidungen in jedem Bereich. Bei der Reizung zählen Ansagen, die dem System entsprachen; beim Spiel Karten, die mit Ihrem damaligen Wissen nicht klar schlechter waren als die beste.',
  decisions,
  practise: 'Üben',

  // Topics
  topicsIntro: 'Wählen Sie ein Thema, und die nächsten Boards werden so ausgeteilt, dass es vorkommt – am Tisch, mit Tutor, Analyse und allem anderen wie gewohnt.',
  nowPractising: 'Sie üben gerade:',
  stopTopic: 'Zurück zu normalen Spielen',
  dealAnother: 'Noch ein Board',

  // History
  review: 'Analyse',
  replay: 'Nochmal spielen',
  historyCols: ['Datum', 'Board', 'Kontrakt', 'Ergebnis', 'Score NS', 'IMPs gegen Par', 'Ansagen', 'Kartenfehler · verlorene Stiche'],
  historyEmpty: 'Noch keine Boards. Jedes beendete Board wird hier mit seiner Analyse aufbewahrt.',
  historyNote: 'Kartenfehler: Karten, die mit Ihrem damaligen Wissen klar schlechter waren. Verlorene Stiche: was Ihre Karten gegenüber perfektem Spiel aller (Double Dummy) gekostet haben – manchmal verliert der richtige Spielzug im Nachhinein.',
  backupTitle: 'Sicherung',
  backupText: 'Ihr Fortschritt ist nur in diesem Browser gespeichert. Speichern Sie eine Sicherungsdatei, um ihn zu schützen oder auf ein anderes Gerät zu übertragen.',
  exportBtn: 'Sicherung speichern',
  importBtn: 'Aus Datei wiederherstellen',
  restored: 'Fortschritt wiederhergestellt.',
  restoreFailed: 'Diese Datei ist keine Sicherung von Bridge Tutor.',
};
