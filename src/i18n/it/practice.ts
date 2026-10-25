// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';

import type { Seat, Vulnerability } from '../../core/cards';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
const decisions = (n: number) => plural(n, 'decisione', 'decisioni');

export const practice: Text['practice'] = {
  title: 'Allenamento',
  close: 'Chiudi',
  tabs: { today: 'Oggi', review: 'Ripasso', problems: 'Problemi', techniques: 'Tecniche', skills: 'Abilità', topics: 'Temi', history: 'Storico' },

  skills: {
    'bid.opening': { name: 'Aprire la licita', desc: 'Se aprire e quale apertura descrive la tua mano: uno a colore, 1SA, 2♣, due deboli e barrage.' },
    'bid.response': { name: 'Le risposte', desc: 'Le tue dichiarazioni dopo l’apertura del compagno: appoggi, nuovi colori, risposte a senza atout e la scelta della manche.' },
    'bid.rebid': { name: 'La ridichiarazione dell’apertore', desc: 'La tua seconda dichiarazione dopo l’apertura: mostrare forza e distribuzione perché il compagno possa scegliere il contratto.' },
    'bid.notrump': { name: 'Licite a senza atout', desc: 'Le aperture di 1SA e 2SA e le relative risposte: Stayman, transfer, inviti.' },
    'bid.competitive': { name: 'Licita competitiva', desc: 'Quando dichiarano anche gli avversari: interventi, contro informativi e sputnik, bicolori, riapertura, la lotta per il parziale.' },
    'bid.slam': { name: 'Licita di slam', desc: 'Riconoscere lo slam, chiedere gli assi e fermarsi in tempo.' },
    'play.lead': { name: 'Attacchi', desc: 'Scegliere il colore e la carta d’attacco prima di vedere il morto.' },
    'play.declarer': { name: 'Gioco col morto', desc: 'Conteggio e piano di gioco, impasse, affrancamento dei colori, gestione delle atout, rientri.' },
    'play.defense': { name: 'Difesa', desc: 'Secondo e terzo di mano, segnali, cambi di colore, conteggio della mano del giocante.' },
  },

  themes: {
    'openings': { name: 'Aperture', desc: 'Sei il primo ad aprire la licita.' },
    'responses': { name: 'Rispondere al compagno', desc: 'Il compagno apre e gli avversari tacciono: trova la tua risposta.' },
    'rebids': { name: 'La ridichiarazione dell’apertore', desc: 'Apri, il compagno risponde: descrivi la tua mano.' },
    'notrump': { name: 'Licite a senza atout', desc: 'La tua linea apre 1SA o 2SA.' },
    'stayman-transfers': { name: 'Stayman e transfer', desc: 'Il compagno apre 1SA o 2SA e hai una nobile: Stayman o transfer.' },
    'major-raises': { name: 'Appoggiare la nobile del compagno', desc: 'Il compagno apre 1♥ o 1♠ e hai appoggio: semplice, limite, 2SA Jacoby o manche.' },
    'strong-2c': { name: '2♣ forte', desc: 'La tua linea ha una mano forte che apre 2♣.' },
    'preempts': { name: 'Due deboli e barrage', desc: 'La tua linea apre con un colore lungo e una mano debole.' },
    'competitive': { name: 'La lotta per il contratto', desc: 'Dichiarano entrambe le linee: decidi quando competere, contrare o difendere.' },
    'overcalls': { name: 'Interventi', desc: 'Gli avversari aprono e hai un colore da mostrare.' },
    'takeout-doubles': { name: 'Contro informativi', desc: 'Contra per informazione, o rispondi al contro informativo del compagno.' },
    'negative-doubles': { name: 'Contro sputnik', desc: 'Il compagno apre, gli avversari intervengono e tu mostri la nobile non dichiarata con un contro.' },
    'two-suiters': { name: 'Michaels e 2SA Unusual', desc: 'La tua linea mostra una bicolore con una sola dichiarazione.' },
    'over-notrump': { name: 'Competere sull’1SA', desc: 'Gli avversari aprono 1SA e la tua linea contra o dichiara un colore lungo.' },
    'over-preempts': { name: 'Competere sui barrage', desc: 'Gli avversari aprono con un due debole o un barrage e la tua linea contra, interviene o dichiara a senza atout.' },
    'opening-doubled': { name: 'Quando ci contrano', desc: 'La tua linea apre e il giocatore successivo contra: mostra subito forza e fit.' },
    'balancing': { name: 'Riapertura', desc: 'Gli avversari si fermano bassi e tocca a te in posizione di riapertura.' },
    'partscore-battle': { name: 'La lotta per il parziale', desc: 'Entrambe le linee hanno un fit e si battono a livello di due e di tre (Legge delle prese totali).' },
    'slam': { name: 'Slam', desc: 'La tua linea ha la forza per cercare lo slam.' },
    'declarer': { name: 'Gioco col morto', desc: 'Il contratto è della tua linea: conta, pianifica, poi gioca.' },
    'nt-games': { name: '3SA come giocante', desc: 'Gioca 3SA: conta le vincenti, affranca i colori lunghi, liscia, attento ai rientri.' },
    'suit-games': { name: 'Manche a colore come giocante', desc: 'Gioca una manche a colore: conta le perdenti, taglia, batti atout al momento giusto.' },
    'leads': { name: 'Attacchi', desc: 'Gioca Est: tocca a te attaccare.' },
    'defense': { name: 'Difesa', desc: 'Gli avversari giocano il contratto e tu difendi con il compagno.' },
    'defense-nt': { name: 'Difesa contro i senza atout', desc: 'Il compagno attacca contro un contratto a senza atout: il gioco del terzo di mano e la regola dell’11.' },
    'defense-suit': { name: 'Difesa contro i contratti a colore', desc: 'Difendi contro un contratto ad atout: incassa, taglia o resta passivo.' },
  },

  dealing: (topic: string) => (topic ? `Distribuisco un board per: ${topic}…` : 'Distribuisco le carte…'),
  notEnough: 'ancora poche decisioni',
  you: 'Tu',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'tutti in prima';
    if (v === 'Both') return 'tutti in zona';
    return v === ours ? 'tu in zona, loro in prima' : 'loro in zona, tu in prima';
  },

  // header and table
  topicChip: (topic: string) => `Tema: ${topic}`,
  // importing a deal
  importTitle: 'Gioca una smazzata da un’altra fonte',
  importText: 'Incolla un file PBN, una mano di BBO (LIN o un link handviewer), una smazzata come «N:AKQ2.K73.J52.Q8 …», oppure un codice o un link di condivisione di Bridge Tutor.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  codice di condivisione',
  importBtnPlay: 'Gioca questa smazzata',
  importError: (code: string) => {
    if (code === 'empty') return 'Prima incolla una smazzata.';
    if (code === 'share') return 'Non sembra una smazzata: controlla di aver copiato tutto il testo o tutto il link.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'La smazzata è incompleta o contiene due volte la stessa carta.';
    return 'Impossibile leggere la smazzata.';
  },
  historyTitle: 'I tuoi board',
  // lessons
  practiseLesson: 'Esercitati al tavolo',
  practiseLessonText: 'Smazzate in cui compare questo argomento, da giocare con il tutor.',
  lessonDone: 'Superata',
  quizScore: (right: number, total: number) => `Al primo tentativo: ${right} giuste su ${total}`,
  quizRetry: 'Rifai il quiz',
  practicedCount: (n: number) => (n === 1 ? '1 board giocato' : `${n} board giocati`),
  practiseTechnique: (name: string) => `Esercitati nella tecnica: ${name}`,
  practiseTechniqueText: 'Smazzate intere in cui decide il contratto, giocate al tavolo e spiegate dopo.',
  practiseTechniqueBtn: 'Esercitati nella tecnica',

  // Today
  tileStreak: 'Giorni di fila',
  tileStreakNote: (n: number) => (n ? 'continua così' : 'gioca un board oggi per iniziare'),
  tileDue: 'Da ripassare',
  tileDueNote: (total: number) => `${decisions(total)} da ripassare`,
  tileBoards: 'Board giocati',
  tileBoardsNote: (date: string) => `l’ultimo il ${date}`,
  tileBoardsNone: 'gioca il tuo primo board',
  tileBidding: 'Precisione in licita',
  tileBiddingNote: (right: number, total: number) => `${right} dichiarazioni su ${total} conformi al sistema`,
  nextSteps: 'Cosa fare adesso',
  stepReviewTitle: (n: number) => (n === 1 ? 'Ripassa la decisione che hai sbagliato' : `Ripassa le ${n} decisioni che hai sbagliato`),
  stepReviewText: 'I tuoi errori tornano finché non li risolvi, ogni volta a qualche giorno di distanza: è il modo più rapido per smettere di ripeterli.',
  startReview: 'Inizia il ripasso',
  stepWeakTitle: (skill: string) => `Da migliorare: ${skill}`,
  stepWeakNew: 'Hai affrontato ancora poche decisioni di questo tipo. Gioca qualche board distribuito apposta.',
  stepWeakText: (pct: string, n: number) =>
    `${pct} di risposte giuste ${n === 1 ? 'nella tua ultima decisione' : `nelle tue ultime ${n} decisioni`}: è il tuo punto più debole. Gioca qualche board distribuito apposta e, se non l’hai ancora fatto, leggi la lezione.`,
  practiseAtTable: 'Esercitati al tavolo',
  readLesson: (title: string) => `Leggi: ${title}`,
  stepCourseTitle: (title: string) => `Continua il corso: ${title}`,
  stepCourseText: (i: number, total: number) => `Lezione ${i} di ${total}. Una lezione è superata quando al primo tentativo rispondi giusto all’80% del quiz.`,
  openLesson: 'Apri la lezione',
  stepProblemsTitle: 'Trova la giocata giusta',
  stepProblemsText: 'Problemi tratti da smazzate reali in cui una carta è nettamente la migliore: gioco col morto, difesa e attacchi.',
  openProblems: 'Risolvi i problemi',
  stepTechniquesTitle: 'Esercitati in una tecnica del giocante',
  stepTechniquesText: 'Smazzate intere in cui una tecnica decide il contratto — impasse, colpo in bianco, sblocco, gioco in atout — spiegate dopo la mano.',
  openTechniques: 'Esercitati nelle tecniche',
  howItWorks: 'Ogni board che concludi viene salvato con la sua analisi. Le dichiarazioni diverse dal sistema e le carte nettamente peggiori con le informazioni che avevi (non solo col senno di poi) finiscono nella tua lista di ripasso.',

  // Review
  reviewEmptyTitle: 'Ancora nessun errore da ripassare',
  reviewEmptyText: 'Gioca qualche board: qui compariranno le dichiarazioni diverse dal sistema e le carte che ti sono costate prese con le informazioni che avevi.',
  reviewDoneTitle: 'Tutto in pari',
  reviewDoneText: (total: number, next: string) => `${total === 1 ? '1 decisione è programmata' : `${total} decisioni sono programmate`} per più avanti (la prossima il ${next}).`,
  sessionScore: (right: number, done: number) => `In questa sessione: ${right}/${done} giuste`,
  itemFrom: (date: string, board: number) => `dal board ${board}, ${date}`,
  freshDeal: 'Nuova smazzata, stessa idea',
  itemFromDrill: (date: string) => `dall’esercizio di licita, ${date}`,
  itemFromProblem: (date: string) => `da un problema, ${date}`,
  itemFromTechnique: (date: string) => `dall’allenamento sulle tecniche, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'nuova' : `livello ${box} di ${last}`),
  dueLeft: (n: number) => `${n} da fare`,
  next: 'Avanti',
  nextIn: (days: number) => (days === 0 ? 'Di nuovo più tardi, oggi.' : days === 1 ? 'Prossimo ripasso domani.' : `Prossimo ripasso tra ${days} giorni.`),
  again: 'Tornerà finché non la risolvi.',
  showBoard: 'Mostra il board completo',
  simulating: 'Simulo quella carta nelle distribuzioni compatibili con ciò che sai…',
  bidPrompt: 'Tocca a te dichiarare.',
  youAre: (seat: string, vul: string) => `Sei ${seat}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Esatto: ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `Il sistema dichiara ${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `Il tuo ${call} verrebbe letto come ${name}: ${desc}`,
  atTableYouBid: (call: string) => `Al tavolo hai dichiarato ${call}.`,
  cardPrompt: 'Tocca a te giocare.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) => `${contract} giocato da ${declarer}; giochi la carta di ${seat} alla presa ${trick}.`,
  dummyLabel: (seat: string) => `Morto (${seat})`,
  trickSoFar: 'Questa presa:',
  yourHand: (seat: string) => `La tua mano (${seat})`,
  cardRight: 'Esatto: è la carta che ha reso di più.',
  cardWrong: (cards: string) => `Migliore: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `Su ${n} distribuzioni compatibili con la licita e il gioco, ${best} ha fatto in media ${bt} prese per la tua linea (${declaring ? 'mantenendo il contratto' : 'battendo il contratto'} nel ${bs} dei casi); ${yours}, la carta che hai giocato al tavolo, in media ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `Su ${n} distribuzioni compatibili con la licita e il gioco, ${best} ha fatto in media ${bt} prese per la tua linea (${declaring ? 'mantenendo il contratto' : 'battendo il contratto'} nel ${bs} dei casi); ${yours}, la tua risposta al problema, in media ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) => `${card} ha fatto in media ${t} prese (${s}) su ${n} nuove distribuzioni.`,

  // Problems
  problems: {
    intro: 'Posizioni tratte da smazzate reali in cui la simulazione indica una carta nettamente migliore: trovala. Ogni smazzata è dichiarata dal sistema e giocata dai bot fino alla tua decisione.',
    filterLabel: 'Tipo di problema',
    filters: { mixed: 'Misti', declarer: 'Gioco col morto', defense: 'Difesa', lead: 'Attacchi' },
    kinds: { declarer: 'Gioco col morto', defense: 'Difesa', lead: 'Attacco' },
    session: (right: number, done: number) => `In questa sessione: ${right}/${done} giusti`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `In totale: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Pronti: ${declarer} col morto · ${defense} in difesa · ${lead} d’attacco`,
    boardLine: (board: number, vul: string) => `Board ${board}, ${vul}.`,

    // waiting for the first problem
    preparing: 'Preparo un problema…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Distribuisco un board da giocare col morto…' : kind === 'defense' ? 'Distribuisco un board da difendere…' : 'Distribuisco un board con un attacco da scegliere…',
    stagePlaying: (trick: number) => `I bot stanno giocando la presa ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Verifico la decisione alla presa ${trick}: ${done} distribuzioni su ${total}…` : 'Controllo la smazzata…',
    tried: (n: number) => (n === 1 ? '1 smazzata provata finora.' : `${n} smazzate provate finora.`),
    waitNote: 'Si tengono solo le posizioni con una risposta netta, quindi possono servire alcune smazzate. I problemi vengono preparati in background finché questa scheda è aperta, e se ne conservano fino a 6 per tipo per la volta successiva.',
    leadNote: 'I problemi d’attacco con una risposta netta sono rari: prepararne uno può richiedere un paio di minuti.',

    // the question
    qDeclarer: (contract: string, seat: string) => `Sei il giocante a ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} è il giocante a ${contract}; tu difendi in ${seat}.`,
    qLead: (contract: string, declarer: string) => `${declarer} è il giocante a ${contract} e tocca a te attaccare.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `Hai attaccato con ${card}.` : who === 'partner' ? `Il compagno (${seat}) ha attaccato con ${card}.` : `${seat} ha attaccato con ${card}.`,
    tally: (trick: number, won: number, lost: number) => `Presa ${trick}: finora la tua linea ha fatto ${won} ${won === 1 ? 'presa' : 'prese'}, gli avversari ${lost}.`,
    askLead: 'Con quale carta attacchi?',
    askPlan: (fromDummy: boolean) => `Pianifica il gioco: quale carta ${fromDummy ? 'dal morto' : 'dalla tua mano'}?`,
    askDeclarer: (fromDummy: boolean) => `Quale carta giochi ora ${fromDummy ? 'dal morto' : 'dalla tua mano'}?`,
    askDefence: 'Quale carta giochi?',

    // the answer
    right: (cards: string) => `Esatto! Migliore: ${cards}.`,
    wrong: (cards: string) => `Non questa volta. Migliore: ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `Su ${n} distribuzioni compatibili con la licita e il gioco fin qui, ${best} ha fatto in media ${t} prese per la tua linea e ${declaring ? 'ha mantenuto il contratto' : 'ha battuto il contratto'} nel ${s} dei casi.`,
    yourLine: (card: string, t: string, s: string) => `La tua carta, ${card}: ${t} prese, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `La migliore delle altre, ${card}: ${t} prese, ${s}.`,
    colCard: 'Carta',
    colTricks: 'Prese',
    colMakes: 'Mantiene',
    colSets: 'Batte',
    addedToReview: 'Aggiunta al ripasso: questa posizione tornerà finché non la risolvi.',
    whyThisSuit: 'Perché questo colore:',
    next: 'Prossimo problema',
    skip: 'Salta',
    showDeal: 'Mostra la smazzata completa',
    hideDeal: 'Nascondi la smazzata',
    playFromStart: 'Gioca questa smazzata dall’inizio',
    declarerTag: 'giocante',
    dummyTag: 'morto',
  },

  // Techniques: whole deals where one declarer technique decides the contract
  techniques: {
    intro: 'Smazzate intere in cui una tecnica del giocante decide il contratto. Gioca la mano al tavolo; poi l’analisi mostra il momento chiave — se hai trovato la tecnica, con la simulazione che lo dimostra — e la lezione che la insegna. Ogni smazzata è dichiarata dal sistema e verificata con la simulazione usando solo ciò che il giocante poteva vedere.',
    filterLabel: 'Tecnica',
    any: 'Tutte',
    names: {
      finesse: 'Impasse',
      holdUp: 'Colpo in bianco',
      duck: 'Cedere un giro',
      unblock: 'Sblocco',
      drawTrumps: 'Battere atout',
      ruffShort: 'Tagliare dalla mano corta',
      safety: 'Giocata di sicurezza',
    },
    descs: {
      finesse: 'Gioca la carta che vince quando l’onore mancante è in mano al difensore che ha già giocato: la donna da A-Q, o il re verso cui hai giocato.',
      holdUp: 'A senza atout, lascia che i difensori vincano il loro colore una o due volte prima di usare il tuo fermo.',
      duck: 'Cedi presto un giro del tuo colore lungo, finché la mano lunga conserva le carte alte come rientri.',
      unblock: 'Gioca prima le carte alte della mano più corta, così puoi ancora raggiungere la mano lunga.',
      drawTrumps: 'Togli le atout ai difensori prima che possano tagliare le tue vincenti.',
      ruffShort: 'Taglia le perdenti nella mano con meno atout: ogni taglio lì è una presa in più.',
      safety: 'Rinuncia a una possibile presa in più per mantenere il contratto.',
    },
    why: {
      finesse: 'Un’impasse riesce ogni volta che le carte più alte che ti mancano sono in mano al difensore che ha già giocato alla presa: allora il tuo onore (o quello del compagno, che lasci correre) fa la presa. Qui era nettamente la possibilità migliore: incassare una carta più alta rende solo se l’onore mancante cade, e giocare piccolo regala la presa.',
      holdUp: 'Il colpo in bianco: rifiutando di vincere subito il colore dei difensori, esaurisci il difensore che ne ha meno carte. Se quel difensore va in presa più tardi, non ha più carte del colore da rigiocare, e le lunghe non vengono mai incassate. Se vinci il primo giro, i difensori possono incassare il loro colore appena uno dei due va in presa.',
      duck: 'Cedere un giro del colore lungo regala presto una presa — di solito una che perderesti comunque — mentre la mano lunga conserva le sue carte alte. Quando riprendi la mano puoi ancora raggiungere le lunghe; se vinci i primi giri, le ultime possono restare isolate, senza modo di arrivarci.',
      unblock: 'Lo sblocco: gioca prima le carte alte della mano più corta. Così le ultime carte del colore restano nella mano lunga e hai ancora una carta piccola per raggiungerle; se giochi prima gli onori della mano lunga, il colore si blocca e le lunghe restano irraggiungibili.',
      drawTrumps: 'Battere atout: finché i difensori hanno atout, possono tagliare le tue vincenti nei colori laterali. Ogni giro di atout ne toglie una a ciascun difensore; qui batterle subito era nettamente la scelta migliore.',
      ruffShort: 'Tagliare dalla mano corta: un taglio nella mano con meno atout è una presa in più, perché quelle atout non farebbero prese da sole; tagliare nella mano lunga non rende nulla in più. Fallo finché la mano corta ha ancora atout: battere atout prima potrebbe togliergliele.',
      safety: 'Una giocata di sicurezza: un’altra carta ha fatto in media più prese, ma questa ha mantenuto il contratto più spesso. Rinuncia a una possibile presa in più per proteggersi dalle distribuzioni in cui il gioco più ambizioso fallisce: quando il contratto è in gioco, gioca per il contratto.',
    },
    hints: 'Indica la tecnica prima della mano',
    hintsNote: 'Disattivato: l’analisi ti dice quale tecnica serviva nella smazzata, come succederebbe al tavolo.',
    play: 'Gioca una smazzata',
    ready: (n: number) => (n === 1 ? '1 smazzata pronta' : `${n} smazzate pronte`),
    score: (right: number, done: number) => `Trovate: ${right} su ${done}`,
    techScore: (name: string, right: number, done: number) => `${name}: ${right}/${done}`,
    lessonLink: (title: string) => `Lezione: ${title}`,
    preparing: 'Preparazione di una smazzata…',
    waitNote: 'Si tengono solo le smazzate in cui la tecnica decide nettamente il contratto, quindi trovarne una può richiedere qualche minuto. Vengono preparate in background finché questa scheda è aperta e mentre giochi una smazzata di tecnica; se ne conservano fino a 3 per tecnica per la volta successiva. Alcune tecniche capitano di rado (cedere un giro, sblocco, taglio dalla mano corta, giocate di sicurezza): per quelle ci vuole di più.',

    // at the table
    noteTitle: 'Allenamento sulle tecniche',
    noteHidden: 'Una decisione di questa mano richiede una tecnica del giocante. Trovala: il tutor tiene per sé i consigli sulle carte finché quel momento non è passato, e l’analisi lo spiega.',
    noteLookFor: (name: string, desc: string) => `Cerca: ${name}. ${desc} Il tutor tiene per sé i consigli sulle carte finché quel momento non è passato.`,
    withheld: 'Allenamento sulle tecniche: questa decisione spetta a te. I consigli del tutor sulle carte tornano quando il momento chiave è passato.',

    // the review
    reviewTitle: (name: string) => `La tecnica: ${name}`,
    found: (trick: number, card: string) => `Trovata: ${card} alla presa ${trick}.`,
    missed: (trick: number, card: string, best: string) => `Alla presa ${trick} hai giocato ${card}; la tecnica era ${best}.`,
    offScript: (trick: number) => `Il gioco ha preso un’altra strada prima del momento chiave (presa ${trick}), che quindi non si è presentato. Gioca la smazzata dal momento chiave per provarlo.`,
    auto: (trick: number) => `Il momento chiave (presa ${trick}) è stato giocato per te, con un reclamo o giocando la mano fino in fondo.`,
    simBest: (n: number, best: string, t: string, s: string) => `Su ${n} distribuzioni compatibili con la licita e il gioco fin lì, ${best} ha fatto in media ${t} prese e ha mantenuto il contratto nel ${s} dei casi.`,
    simYours: (card: string, t: string, s: string) => `La tua carta, ${card}: ${t} prese, contratto mantenuto nel ${s} dei casi.`,
    simOther: (card: string, t: string, s: string) => `La migliore delle altre, ${card}: ${t} prese, contratto mantenuto nel ${s} dei casi.`,
    tryAgain: 'Riprova il momento chiave',
    playFromKey: 'Gioca dal momento chiave',
    next: 'Prossima smazzata di tecnica',
    addedToReview: 'Aggiunto al ripasso: il momento chiave tornerà finché non lo risolvi.',
  },

  // Skills
  skillsIntro: 'Precisione nelle tue decisioni più recenti in ogni area. Per la licita contano le dichiarazioni conformi al sistema; per il gioco, le carte che non erano nettamente peggiori della migliore con le informazioni che avevi.',
  decisions,
  practise: 'Esercitati',

  // Topics
  topicsIntro: 'Scegli un tema e i prossimi board verranno distribuiti in modo che compaia: al tavolo, con il tutor, l’analisi e tutto il resto come al solito.',
  nowPractising: 'Tema attuale:',
  stopTopic: 'Torna alle smazzate normali',
  dealAnother: 'Distribuiscine un altro',

  // History
  review: 'Analisi',
  replay: 'Rigioca',
  historyCols: ['Data', 'Board', 'Contratto', 'Risultato', 'Punteggio NS', 'IMP vs par', 'Dichiarazioni', 'Errori di carta · prese perse'],
  historyEmpty: 'Ancora nessun board. Ogni board che concludi resta qui con la sua analisi.',
  historyNote: 'Errori di carta: carte nettamente peggiori con le informazioni che avevi. Prese perse: quanto sono costate le tue carte rispetto al gioco perfetto di tutti (a carte viste); a volte la giocata giusta perde col senno di poi.',
  backupTitle: 'Backup',
  backupText: 'I tuoi progressi sono salvati solo in questo browser. Salva un file di backup per tenerli al sicuro o per trasferirli su un altro dispositivo.',
  exportBtn: 'Salva il backup',
  importBtn: 'Ripristina da file',
  restored: 'Progressi ripristinati.',
  restoreFailed: 'Questo file non è un backup di Bridge Tutor.',
};
