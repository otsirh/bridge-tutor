// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';
import type { Seat, Vulnerability } from '../../core/cards';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const practice: Text['practice'] = {
  title: 'Training',
  close: 'Sluiten',
  tabs: { today: 'Vandaag', review: 'Herhalen', problems: 'Opgaven', skills: 'Vaardigheden', topics: 'Onderwerpen', history: 'Geschiedenis' },

  skills: {
    'bid.opening': { name: 'Openen', desc: 'Of je opent, en welke opening je hand beschrijft: één in een kleur, 1SA, 2♣, zwakke twee en preëmpts.' },
    'bid.response': { name: 'Antwoorden', desc: 'Je biedingen nadat partner heeft geopend: verhogingen, nieuwe kleuren, SA-antwoorden en de keuze van de manche.' },
    'bid.rebid': { name: 'Herbieding van de openaar', desc: 'Je tweede bod na je opening: je kracht en verdeling laten zien, zodat partner het contract kan bepalen.' },
    'bid.notrump': { name: 'SA-biedingen', desc: '1SA- en 2SA-openingen en de antwoorden daarop: Stayman, transfers, invites.' },
    'bid.competitive': { name: 'Competitief bieden', desc: 'Als de tegenstanders ook bieden: volgbiedingen, informatie- en negatieve doubletten, tweekleurenhanden, balanceren en de strijd om de deelscore.' },
    'bid.slam': { name: 'Slembieden', desc: 'Slem herkennen, naar azen vragen en op tijd stoppen.' },
    'play.lead': { name: 'Uitkomsten', desc: 'De kleur en de kaart kiezen waarmee je uitkomt, voordat je de dummy ziet.' },
    'play.declarer': { name: 'Afspel', desc: 'Tellen en plannen, snitten, kleuren vrijspelen, troefbehandeling, entrees.' },
    'play.defense': { name: 'Tegenspel', desc: 'Tweede en derde hand, signalen, van kleur wisselen, de hand van de leider tellen.' },
  },

  themes: {
    'openings': { name: 'Openingsbiedingen', desc: 'Jij mag als eerste de bieding openen.' },
    'responses': { name: 'Antwoorden op partner', desc: 'Partner opent en de tegenstanders blijven stil: vind je antwoord.' },
    'rebids': { name: 'Herbieding van de openaar', desc: 'Jij opent, partner antwoordt: beschrijf je hand.' },
    'notrump': { name: 'SA-biedingen', desc: 'Jullie openen 1SA of 2SA.' },
    'stayman-transfers': { name: 'Stayman en transfers', desc: 'Partner opent 1SA of 2SA en jij hebt een hoge kleur: Stayman of een transfer.' },
    'major-raises': { name: 'De hoge kleur van partner verhogen', desc: 'Partner opent 1♥ of 1♠ en jij hebt steun: enkele verhoging, inviterend, Jacoby 2SA of manche.' },
    'strong-2c': { name: 'Sterke 2♣', desc: 'Jullie hebben een grote hand die 2♣ opent.' },
    'preempts': { name: 'Zwakke twee en preëmpts', desc: 'Jullie openen met een lange kleur en een zwakke hand.' },
    'competitive': { name: 'Strijd om het contract', desc: 'Beide kanten bieden: bepaal wanneer je meebiedt, doubleert of tegenspeelt.' },
    'overcalls': { name: 'Volgbiedingen', desc: 'De tegenstanders openen en jij hebt een kleur om te laten zien.' },
    'takeout-doubles': { name: 'Informatiedoubletten', desc: 'Geef een informatiedoublet, of reageer op het informatiedoublet van partner.' },
    'negative-doubles': { name: 'Negatieve doubletten', desc: 'Partner opent, zij komen tussen en jij toont de ongeboden hoge kleur met een doublet.' },
    'two-suiters': { name: 'Michaels en Unusual 2SA', desc: 'Jullie tonen een tweekleurenhand met één bod.' },
    'over-notrump': { name: 'Bieden over 1SA', desc: 'De tegenstanders openen 1SA en jullie doubleren of bieden een lange kleur.' },
    'over-preempts': { name: 'Bieden over preëmpts', desc: 'De tegenstanders openen met een zwakke twee of een preëmpt en jullie doubleren, komen tussen of bieden sans atout.' },
    'opening-doubled': { name: 'Als zij ons doubleren', desc: 'Jullie openen en de volgende speler doubleert: laat meteen je kracht en je fit zien.' },
    'balancing': { name: 'Balanceren', desc: 'Zij stoppen laag en jij zit in de balanspositie.' },
    'partscore-battle': { name: 'De strijd om de deelscore', desc: 'Beide kanten hebben een fit en vechten op 2- en 3-niveau (wet van het totaal aantal slagen).' },
    'slam': { name: 'Slems', desc: 'Jullie hebben de kracht om naar slem te zoeken.' },
    'declarer': { name: 'Afspel', desc: 'Jullie spelen het contract: eerst tellen en plannen, dan spelen.' },
    'nt-games': { name: '3SA als leider', desc: 'Speel 3SA: tel je vaste slagen, speel lange kleuren vrij, duik op tijd en let op je entrees.' },
    'suit-games': { name: 'Troefmanches als leider', desc: 'Speel een manche in een kleur: tel je verliezers, troef in en trek troef op het juiste moment.' },
    'leads': { name: 'Uitkomsten', desc: 'Oost is leider: jij komt uit.' },
    'defense': { name: 'Tegenspel', desc: 'De tegenstanders spelen het contract en jij speelt samen met partner tegen.' },
    'defense-nt': { name: 'Tegenspel tegen SA', desc: 'Partner komt uit tegen een SA-contract: spel in derde hand en de regel van 11.' },
    'defense-suit': { name: 'Tegenspel tegen troefcontracten', desc: 'Speel tegen een troefcontract: incasseren, introeven of passief blijven.' },
  },

  dealing: (topic: string) => (topic ? `Spel wordt gedeeld voor: ${topic}…` : 'Spel wordt gedeeld…'),
  notEnough: 'nog niet genoeg beslissingen',
  you: 'Jij',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'niemand kwetsbaar';
    if (v === 'Both') return 'allen kwetsbaar';
    return v === ours ? 'jullie kwetsbaar, zij niet' : 'zij kwetsbaar, jullie niet';
  },

  topicChip: (topic: string) => `Onderwerp: ${topic}`,
  importTitle: 'Een spel van elders spelen',
  importText: 'Plak een PBN-bestand, een BBO-spel (LIN of een handviewer-link), een spel als "N:AKQ2.K73.J52.Q8 …", of een deelcode of link van Bridge Tutor.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  deelcode',
  importBtnPlay: 'Dit spel spelen',
  importError: (code: string) => {
    if (code === 'empty') return 'Plak eerst een spel.';
    if (code === 'share') return 'Dit lijkt geen spel: controleer of de hele tekst of link is gekopieerd.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'Het spel is onvolledig of bevat een kaart twee keer.';
    return 'Het spel kon niet worden gelezen.';
  },
  historyTitle: 'Jouw spellen',
  practiseLesson: 'Oefen dit aan tafel',
  practiseLessonText: 'Spellen waarin dit onderwerp voorkomt, gespeeld met de tutor.',
  lessonDone: 'Gehaald',
  quizScore: (right: number, total: number) => `Eerste poging: ${right} van de ${total} goed`,
  quizRetry: 'Doe de quiz opnieuw',
  practicedCount: (n: number) => (n === 1 ? '1 spel geoefend' : `${n} spellen geoefend`),

  // Today
  tileStreak: 'Dagen op rij',
  tileStreakNote: (n: number) => (n ? 'ga zo door' : 'speel vandaag een spel om te beginnen'),
  tileDue: 'Te herhalen',
  tileDueNote: (total: number) => `${plural(total, 'beslissing', 'beslissingen')} in je herhaallijst`,
  tileBoards: 'Gespeelde spellen',
  tileBoardsNote: (date: string) => `laatst op ${date}`,
  tileBoardsNone: 'speel je eerste spel',
  tileBidding: 'Biednauwkeurigheid',
  tileBiddingNote: (right: number, total: number) => `${right} van de ${total} biedingen volgens het systeem`,
  nextSteps: 'Wat ga je nu doen?',
  stepReviewTitle: (n: number) => `Herhaal ${plural(n, 'beslissing', 'beslissingen')} die je fout had`,
  stepReviewText: 'Je eigen fouten komen terug tot je ze goed hebt, telkens een paar dagen later — de snelste manier om ze niet meer te maken.',
  startReview: 'Begin met herhalen',
  stepWeakTitle: (skill: string) => `Werk aan: ${skill}`,
  stepWeakNew: 'Je hebt nog maar weinig beslissingen van deze soort genomen. Oefen een paar spellen die hiervoor gedeeld zijn.',
  stepWeakText: (pct: string, n: number) => `${pct} goed over je laatste ${plural(n, 'beslissing', 'beslissingen')} — je zwakste onderdeel. Oefen spellen die hiervoor gedeeld zijn, en lees de les als je dat nog niet hebt gedaan.`,
  practiseAtTable: 'Oefen aan tafel',
  readLesson: (title: string) => `Lees: ${title}`,
  stepCourseTitle: (title: string) => `Ga verder met de cursus: ${title}`,
  stepCourseText: (i: number, total: number) => `Les ${i} van ${total}. Een les telt als afgerond als je bij de eerste poging 80% van de quiz goed hebt.`,
  openLesson: 'Les openen',
  stepProblemsTitle: 'Vind de juiste kaart',
  stepProblemsText: 'Opgaven uit echte spellen waarin één kaart duidelijk de beste is: afspel, tegenspel en uitkomsten.',
  openProblems: 'Opgaven oplossen',
  howItWorks: 'Elk spel dat je uitspeelt, wordt bewaard met de analyse. Biedingen die van het systeem afwijken en kaarten die duidelijk slechter waren met de informatie die je had (niet alleen achteraf), komen in je herhaallijst.',

  // Review
  reviewEmptyTitle: 'Nog geen fouten om te herhalen',
  reviewEmptyText: 'Speel een paar spellen: biedingen die van het systeem afwijken en kaarten die je iets kostten met de informatie die je had, verschijnen hier.',
  reviewDoneTitle: 'Alles is bijgewerkt',
  reviewDoneText: (total: number, next: string) => `${plural(total, 'beslissing staat', 'beslissingen staan')} gepland voor later (de volgende op ${next}).`,
  sessionScore: (right: number, done: number) => `Deze sessie: ${right}/${done} goed`,
  itemFrom: (date: string, board: number) => `uit spel ${board}, ${date}`,
  freshDeal: 'Nieuw spel, hetzelfde idee',
  itemFromDrill: (date: string) => `uit de biedoefening, ${date}`,
  itemFromProblem: (date: string) => `uit een opgave, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'nieuw' : `stap ${box} van ${last}`),
  dueLeft: (n: number) => `nog ${n}`,
  next: 'Volgende',
  nextIn: (days: number) => (days === 0 ? 'Later vandaag nog een keer.' : days === 1 ? 'Volgende herhaling morgen.' : `Volgende herhaling over ${days} dagen.`),
  again: 'Deze beslissing komt terug tot je hem goed hebt.',
  showBoard: 'Toon het hele spel',
  simulating: 'Die kaart wordt gesimuleerd in liggingen die passen bij wat je weet…',
  bidPrompt: 'Jouw bod.',
  youAre: (seat: string, vul: string) => `Jij bent ${seat}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Goed: ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `Het systeem biedt ${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `Jouw ${call} wordt gelezen als ${name}: ${desc}`,
  atTableYouBid: (call: string) => `Aan tafel bood je ${call}.`,
  cardPrompt: 'Jouw kaart.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) => `${contract} door ${declarer}; jij speelt de kaart van ${seat} in slag ${trick}.`,
  dummyLabel: (seat: string) => `Dummy (${seat})`,
  trickSoFar: 'Deze slag:',
  yourHand: (seat: string) => `Jouw hand (${seat})`,
  cardRight: 'Goed — dat is de kaart die het best scoorde.',
  cardWrong: (cards: string) => `Beste: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `In ${n} liggingen die bij de bieding en het spel pasten, leverde ${best} jouw kant gemiddeld ${bt} slagen op (${declaring ? 'contract gemaakt' : 'contract down'} in ${bs} van de gevallen); ${yours}, jouw kaart aan tafel, gemiddeld ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `In ${n} liggingen die bij de bieding en het spel pasten, leverde ${best} jouw kant gemiddeld ${bt} slagen op (${declaring ? 'contract gemaakt' : 'contract down'} in ${bs} van de gevallen); ${yours}, jouw antwoord op de opgave, gemiddeld ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) => `${card} leverde gemiddeld ${t} slagen op (${s}) over ${n} nieuwe liggingen.`,

  // Problems
  problems: {
    intro: 'Posities uit echte spellen waarin de simulatie één kaart duidelijk als beste aanwijst — vind die kaart. Elk spel wordt door het systeem geboden en door de bots gespeeld tot aan jouw beslissing.',
    filterLabel: 'Soort opgave',
    filters: { mixed: 'Gemengd', declarer: 'Afspel', defense: 'Tegenspel', lead: 'Uitkomsten' },
    kinds: { declarer: 'Afspel', defense: 'Tegenspel', lead: 'Uitkomst' },
    session: (right: number, done: number) => `Deze sessie: ${right}/${done} goed`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `Totaal: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Klaar: ${declarer} afspel · ${defense} tegenspel · ${lead} uitkomst`,
    boardLine: (board: number, vul: string) => `Spel ${board}, ${vul}.`,

    preparing: 'Een opgave wordt voorbereid…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Een spel delen voor het afspel…' : kind === 'defense' ? 'Een spel delen om tegen te spelen…' : 'Een spel delen waarin jij moet uitkomen…',
    stagePlaying: (trick: number) => `De bots spelen slag ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Je beslissing in slag ${trick} wordt getest: ${done} van ${total} liggingen…` : 'Het spel wordt gecontroleerd…',
    tried: (n: number) => (n === 1 ? 'Tot nu toe 1 spel geprobeerd.' : `Tot nu toe ${n} spellen geprobeerd.`),
    waitNote: 'Alleen posities met een duidelijk antwoord worden bewaard, dus het kan een paar spellen duren. Opgaven worden op de achtergrond voorbereid zolang dit tabblad openstaat, en van elke soort worden er tot 6 bewaard voor de volgende keer.',
    leadNote: 'Duidelijke uitkomstproblemen zijn zeldzaam: het voorbereiden kan een minuut of twee duren.',

    qDeclarer: (contract: string, seat: string) => `Jij bent leider in ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} is leider in ${contract}; jij speelt tegen als ${seat}.`,
    qLead: (contract: string, declarer: string) => `${declarer} is leider in ${contract} en jij komt uit.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `Jij kwam uit met ${card}.` : who === 'partner' ? `Partner (${seat}) kwam uit met ${card}.` : `${seat} kwam uit met ${card}.`,
    tally: (trick: number, won: number, lost: number) => `Slag ${trick}: jouw kant heeft tot nu toe ${won} ${won === 1 ? 'slag' : 'slagen'}, de tegenstanders ${lost}.`,
    askLead: 'Met welke kaart kom je uit?',
    askPlan: (fromDummy: boolean) => `Maak een speelplan: welke kaart speel je ${fromDummy ? 'uit de dummy' : 'uit je hand'}?`,
    askDeclarer: (fromDummy: boolean) => `Welke kaart speel je nu ${fromDummy ? 'uit de dummy' : 'uit je hand'}?`,
    askDefence: 'Welke kaart speel je?',

    right: (cards: string) => `Goed! Beste: ${cards}.`,
    wrong: (cards: string) => `Deze keer niet. Beste: ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `In ${n} liggingen die passen bij de bieding en het spel tot nu toe, leverde ${best} jouw kant gemiddeld ${t} slagen op en ${declaring ? 'werd het contract gemaakt' : 'ging het contract down'} in ${s} van de gevallen.`,
    yourLine: (card: string, t: string, s: string) => `Jouw ${card}: ${t} slagen, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `De beste van de rest, ${card}: ${t} slagen, ${s}.`,
    colCard: 'Kaart',
    colTricks: 'Slagen',
    colMakes: 'Gemaakt',
    colSets: 'Down',
    addedToReview: 'Toegevoegd aan je herhaallijst: deze positie komt terug tot je die goed hebt.',
    whyThisSuit: 'Waarom deze kleur:',
    next: 'Volgende opgave',
    skip: 'Overslaan',
    showDeal: 'Toon het hele spel',
    hideDeal: 'Verberg het spel',
    playFromStart: 'Speel dit spel vanaf het begin',
    declarerTag: 'leider',
    dummyTag: 'dummy',
  },

  // Skills
  skillsIntro: 'Je nauwkeurigheid over je meest recente beslissingen per onderdeel. Bij het bieden tellen de biedingen die met het systeem overeenkwamen; bij het kaartspel de kaarten die niet duidelijk slechter waren dan de beste kaart, met de informatie die je had.',
  decisions: (n: number) => plural(n, 'beslissing', 'beslissingen'),
  practise: 'Oefenen',

  // Topics
  topicsIntro: 'Kies een onderwerp en de volgende spellen worden zo gedeeld dat het aan bod komt — aan tafel, met de tutor, de nabespreking en alles zoals gewoonlijk.',
  nowPractising: 'Je oefent nu:',
  stopTopic: 'Terug naar gewone spellen',
  dealAnother: 'Nog een spel',

  // History
  review: 'Nabespreken',
  replay: 'Opnieuw spelen',
  historyCols: ['Datum', 'Spel', 'Contract', 'Resultaat', 'Score NZ', 'IMP’s t.o.v. par', 'Biedingen', 'Kaartfouten · verloren slagen'],
  historyEmpty: 'Nog geen spellen. Elk spel dat je uitspeelt, wordt hier met de analyse bewaard.',
  historyNote: 'Kaartfouten: kaarten die duidelijk slechter waren met de informatie die je had. Verloren slagen: wat je kaarten kostten vergeleken met perfect spel van iedereen (double dummy) — soms verliest het juiste spel achteraf toch.',
  backupTitle: 'Back-up',
  backupText: 'Je voortgang wordt alleen in deze browser bewaard. Sla een back-upbestand op om hem veilig te stellen of naar een ander apparaat over te zetten.',
  exportBtn: 'Back-up opslaan',
  importBtn: 'Herstellen uit bestand',
  restored: 'Voortgang hersteld.',
  restoreFailed: 'Dat bestand is geen back-up van Bridge Tutor.',
};
