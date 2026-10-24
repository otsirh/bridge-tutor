// Interface: table, tutor panel, review, Learn room, progress, settings.
//
// Grouped by screen. Plain strings are labels; functions build a sentence
// around values the code passes in (numbers for counts, so each language can
// pick its plural; already formatted text for calls, cards, decimals and
// percentages). Suit symbols in any text are coloured by the UI.

import type { Text } from '../en';

const tricks = (n: number) => `${n} ${n === 1 ? 'baza' : 'bazas'}`;
const multas = (n: number) => `${n} ${n === 1 ? 'multa' : 'multas'}`;
const cartas = (n: number) => `${n} ${n === 1 ? 'carta' : 'cartas'}`;

export const ui: Text['ui'] = {
  /** Words used on several screens. */
  common: {
    close: 'Cerrar',
    you: 'Tú',
    partner: 'Compañero',
    declarer: 'Declarante',
    dummy: 'Muerto',
    /** Plan tables: winners in notrump, losers in a suit contract. */
    topTricks: 'Bazas firmes',
    losers: 'Perdedoras',
    sideNS: 'N/S',
    sideEW: 'E/O',
    shows: 'Muestra: ',
    alert: 'Alerta',
    nextHand: 'Siguiente mano',
    board: (n: number) => `Mano ${n}`,
    /** "4♥ por Sur" */
    contractBy: (contract: string, seat: string) => `${contract} por ${seat}`,
    /** Vulnerability in a sentence or under a diagram. */
    vul: { None: 'nadie vulnerable', NS: 'N/S vulnerables', EW: 'E/O vulnerables', Both: 'todos vulnerables' },
  },

  /** Top bar. */
  header: {
    /** App name: the brand and the browser tab title. */
    title: 'Bridge Tutor',
    board: 'Mano',
    dealer: 'Dador',
    vul: 'Vul.',
    /** Who is vulnerable, shown after "Vul.". */
    vulValue: { None: 'Nadie', NS: 'N/S (nosotros)', EW: 'E/O (ellos)', Both: 'Todos' },
    contract: 'Contrato',
    tutor: 'Tutor',
    tutorTitle: 'Pistas, explicaciones y consejos',
    learn: 'Aprender',
    settings: 'Ajustes',
    newDeal: 'Nueva mano',
    newDealConfirm: '¿Abandonar esta mano?',
    language: 'Idioma',
    languageOffline: 'Estás sin conexión: este idioma se cargará cuando vuelvas a tener conexión.',
    /** Screen-reader names of the two columns. */
    tableRegion: 'Mesa',
    tutorRegion: 'Tutor',
  },

  /** The felt: seats, auction, trick, status line. */
  table: {
    dealerChip: 'Dador',
    dealerTitle: 'Dador',
    vulChip: 'Vul',
    vulTitle: 'Vulnerable',
    nvChip: 'No vul',
    nvTitle: 'No vulnerable',
    yourTurn: 'Tu turno',
    toPlay: 'Le toca',
    /** Face-down hand. */
    cards: (n: number) => cartas(n),
    thinking: 'pensando',
    alertTitle: 'Alerta: voz artificial',
    /** Under the contract in the middle of the table. */
    by: (seat: string) => `por ${seat}`,
    /** Trick tally. */
    we: 'Nosotros',
    they: 'Ellos',
    defence: 'Defensa',
    // status line
    handOver: 'Mano terminada.',
    yourCall: 'Te toca hablar.',
    yourLead: 'Te toca salir.',
    yourHand: 'tu mano',
    northHand: 'la mano de Norte',
    leadFrom: (hand: string) => `Sal desde ${hand}.`,
    playFrom: (hand: string) => `Juega desde ${hand}.`,
    bidForMe: 'Declara por mí',
    bidForMeTitle: 'Deja que el sistema declare esta mano por ti',
    claim: 'Reclamar el resto',
    playOut: 'Jugar hasta el final',
    playOutTitle: 'El programa juega el resto a doble muerto',
    undo: '↶ Deshacer',
    undoTitle: 'Retira tu última voz o carta',
    review: 'Analizar la mano',
  },

  /** Bidding box under the table. */
  bidBox: {
    label: 'Caja de subasta',
    notSystem: ' (no es una voz del sistema: se lee de forma natural)',
    hoverHelp: 'Pasa el cursor sobre una voz para ver qué le diría a tu compañero.',
    pickHelp: 'Elige una voz para ver qué le dice a tu compañero; tócala otra vez (o ✓) para declararla.',
  },

  /** The tutor's column. */
  panel: {
    title: 'Tutor',
    yourCall: 'Tu voz',
    yourPlay: 'Tu jugada',
    showCall: 'Mostrar la voz recomendada',
    showCard: 'Mostrar la carta recomendada',
    countFirst: 'Cuenta primero',
    showPlan: 'Mostrar el plan',
    declarerPlan: 'El plan del declarante',
    counting: 'Recuento',
    readingPlay: 'Lectura del carteo',
    auctionSays: 'Lo que dice la subasta',
    yourHand: 'Tu mano',
    notes: 'Notas',
    // think first (before the recommendation is shown)
    thinkBid: (hcp: number, tp: number, shape: string, balanced: boolean) =>
      `Piensa primero: tienes ${hcp} PH (${tp} con la longitud), distribución ${shape}${balanced ? ', mano equilibrada' : ''}. `,
    partnerShown: (what: string) => `Tu compañero ha mostrado: ${what}. `,
    partnerNothing: 'Tu compañero aún no ha mostrado nada. ',
    thinkBidQuestion: '¿Cuál es tu plan y qué voz describe mejor tu mano?',
    thinkPlay: 'Piensa primero: ¿qué carta gana más bazas según lo que han mostrado la subasta y el carteo? Cuenta los puntos y la distribución de las manos ocultas.',
    // recommended call
    met: 'se cumple',
    notMet: 'no se cumple',
    noRuleBetter: 'Ninguna regla encaja mejor que pasar.',
    partnerReads: 'Tu compañero la entenderá así: ',
    noPromise: 'sin ninguna promesa concreta',
    otherCalls: 'Otras voces consideradas',
    /** Why another call doesn't fit: its first unmet condition. */
    needs: (cond: string) => ` — requiere ${cond}`,
    // recommended card
    bookLead: 'Salida de manual',
    otherSuits: 'Otros palos: ',
    simulateLeads: 'Simular las salidas (más lento)',
    simulating: (done: number, total: number) => `Simulando repartos compatibles con la subasta… ${done}${total ? '/' + total : ''}`,
    equalCards: (n: number) => `o cualquiera de las ${n} cartas equivalentes`,
    bestInSim: 'la mejor en la simulación',
    simSummary: (samples: number, card: string, avg: string, ours: boolean, pct: string) =>
      `En ${samples} repartos compatibles con la subasta y el carteo, ${card} da una media de ${avg} bazas a tu bando y ${ours ? 'cumple el contrato' : 'derrota el contrato'} el ${pct} de las veces.`,
    colCard: 'Carta',
    colTricks: 'Bazas',
    colMakes: 'Cumple',
    colSets: 'Multa',
    colScore: 'Puntos',
    onlyCard: 'Solo hay una carta legal.',
    // counting
    seenHcp: (seen: number, rest: number) => `Ves ${seen} PH, así que hay ${rest} en las dos manos ocultas.`,
    hiddenHcp: (a: string, ra: string, b: string, rb: string) => `${a}: ${ra} PH · ${b}: ${rb} PH (combinando la subasta con lo que ves).`,
    showedOut: (seat: string, suits: string) => `${seat} ya no tiene ${suits}.`,
    trumpsOut: (suit: string, n: number) => `Triunfos (${suit}) que quedan en las manos ocultas: ${n}.`,
    // what the auction says
    partnerTag: ' (compañero)',
    nothingShown: 'Todavía no ha mostrado nada.',
    /** A call you made, clicked in the auction. */
    systemPreferred: (call: string, rule: string) => `El sistema prefería ${call} (${rule}).`,
    // "are you sure?" before a clearly worse call or card
    sureAbout: (what: string) => `¿Estás seguro de ${what}?`,
    partnerWouldRead: (call: string, name: string, desc: string) => `Tu compañero entendería ${call} así: ${name} — ${desc}`,
    handDoesntMatch: 'Tu mano no encaja: ',
    systemBids: (call: string, rule: string) => `El sistema declara ${call} — ${rule}.`,
    cardWarning: (samples: number, best: string, bestAvg: string, bestPct: string, card: string, mineAvg: string, minePct: string) =>
      `En ${samples} repartos simulados, ${best} da una media de ${bestAvg} bazas (éxito del ${bestPct}); ${card}, una media de ${mineAvg} (${minePct}).`,
    bidIt: (call: string) => `Declarar ${call}`,
    playIt: (card: string) => `Jugar ${card}`,
    anyway: (what: string) => `${what} de todos modos`,
    letMeThink: 'Déjame pensar',
  },

  /** The first visit: where to start. */
  welcome: {
    title: 'Te damos la bienvenida a Bridge Tutor',
    intro: 'Juega al bridge contra tres bots, con un tutor a tu lado que explica cada voz y cada carta. ¿Por dónde quieres empezar?',
    newTitle: 'Soy principiante',
    newDesc: 'Empieza por la primera lección: cómo se reparte, se subasta y se juega una mano.',
    rulesTitle: 'Conozco las reglas',
    rulesDesc: 'Juega con los consejos del tutor a la vista desde el principio mientras te sueltas.',
    playTitle: 'Solo jugar',
    playDesc: 'El tutor espera a que se lo pidas, así piensas tú primero.',
    note: 'Puedes cambiarlo cuando quieras en Ajustes.',
  },

  /** Notes in the tutor's feed, written as the hand goes. */
  notes: {
    welcomeTitle: 'Te damos la bienvenida a la mesa',
    welcomeText:
      'Eres Sur y Norte es tu compañero; los bots juegan Standard American (SAYC). Declara con la caja de subasta que hay bajo la mesa y luego haz clic en las cartas para jugarlas. El tutor explica cada voz (haz clic en ella en la subasta), te sugiere una voz o una carta cuando se lo pides y analiza la mano al final. Siempre puedes deshacer una jugada.',
    contract: (contractBy: string) => `Contrato: ${contractBy}`,
    youDefend: (leader: string) => `Estás en defensa. ${leader} hace la salida.`,
    youDeclare: 'Tu bando juega el contrato: juegas tu mano y la de Norte.',
    callOk: (call: string) => `${call} — coincide con el sistema`,
    callOff: (call: string, systemCall: string) => `${call} — el sistema declara ${systemCall}`,
    callOffText: (call: string, meaning: string, systemCall: string, rule: string) =>
      `Tu ${call} se entendería así: ${meaning}. El sistema prefiere ${systemCall} (${rule}).`,
    cardOff: (card: string, best: string) => `${card} — ${best} era mejor`,
    cardOffText: (samples: number, best: string, bestAvg: string, bestPct: string, mineAvg: string, minePct: string, card: string) =>
      `En ${samples} repartos simulados, ${best} dio una media de ${bestAvg} bazas (éxito del ${bestPct}) frente a ${mineAvg} (${minePct}) con ${card}.`,
    madeExactly: 'cumplido justo',
    madePlus: (n: number) => `cumplido +${n}`,
    down: (n: number) => multas(n),
    resultText: (score: string) => `Puntuación de Norte-Sur: ${score}.`,
  },

  /** Messages from the game itself. */
  game: {
    thinking: (seat: string) => `${seat} está pensando…`,
    playingOut: 'Jugando el resto de la mano…',
    claimOnlyDeclarer: 'Solo puedes reclamar como declarante.',
    claimUnchecked: 'No se ha podido comprobar la reclamación.',
    claimNotYet: (lose: number, remaining: number) => `Todavía no: con la mejor defensa perderías ${lose} de las ${remaining} bazas que quedan.`,
    claimAccepted: 'Reclamación aceptada.',
  },

  /** Post-hand review. */
  review: {
    label: 'Análisis de la mano',
    tabs: { summary: 'Resumen', bidding: 'Subasta', play: 'Carteo' },
    replay: 'Volver a jugar esta mano',
    nextDeal: 'Siguiente mano',
    // result tiles
    contract: 'Contrato',
    madeExactly: 'cumplido justo',
    madeOver: (n: number) => `cumplido con ${n} ${n === 1 ? 'baza' : 'bazas'} de más`,
    down: (n: number) => multas(n),
    noScore: 'sin puntuación',
    score: 'Puntos (N/S)',
    declTricks: (n: number) => `${tricks(n)} para el declarante`,
    par: 'Par',
    solvingPar: 'resolviendo los 20 contratos',
    vsPar: 'frente al par',
    imps: (n: number) => (Math.abs(n) === 1 ? 'IMP' : 'IMPs'),
    atOrAbovePar: 'igual o por encima del par a doble muerto',
    belowPar: 'por debajo del par a doble muerto',
    doubleDummy: 'A doble muerto',
    bestPlayAll: (makes: boolean) => `con el mejor carteo de los cuatro: ${makes ? 'se cumple' : 'no se cumple'}`,
    systemContract: 'Contrato del sistema',
    systemSame: 'el mismo que el tuyo',
    systemDiff: (imps: string) => `el tuyo, con el mejor carteo: ${imps}`,
    bidOnlyNote: 'Solo subasta: los contratos se puntúan con el mejor carteo de los cuatro.',
    yourBidding: 'Tu subasta',
    callsMatching: 'voces que coinciden con el sistema',
    yourPlay: 'Tu carteo',
    noErrors: 'Sin errores',
    ddCards: (n: number) => `a doble muerto, ${cartas(n)}`,
    analysing: (pct: string) => `analizando ${pct}`,
    sdTitle: 'Con lo que sabías',
    sdErrors: (n: number) => (n === 1 ? '1 error claro' : `${n} errores claros`),
    sdNote: (n: number) => `a simple muerto, ${n === 1 ? '1 carta revisada' : `${n} cartas revisadas`}`,
    sdChecking: (done: number, total: number) => `revisando tus cartas ${done}/${total}`,
    keyMoments: 'Momentos clave',
    keyMomentsText: 'Las decisiones en las que más importaba la carta, con la información que tenías.',
    tryAgain: 'Reintentar desde aquí',
    keyMoment: (trick: number, card: string, right: boolean) => `Baza ${trick}: jugaste ${card}${right ? ', la mejor carta.' : '.'}`,
    keyMomentNumbers: (best: string, bs: string, worst: string, ws: string) => `La mejor, ${best} (éxito del ${bs}); la peor, ${worst} (${ws}).`,
    keyMomentTricks: (best: string, bt: string, worst: string, wt: string) => `La mejor, ${best} (${bt} bazas de media); la peor, ${worst} (${wt}).`,
    // sharing
    share: 'Compartir esta mano',
    shareText: 'Un enlace o un código abren esta mano en Bridge Tutor; el PBN funciona en la mayoría de los programas de bridge; BBO muestra la mano completa.',
    copyLink: 'Copiar enlace',
    copyCode: 'Copiar código',
    copyPBN: 'Copiar PBN',
    openBBO: 'Abrir en el visor de BBO',
    copied: 'Copiado.',
    copyManual: 'Copia este texto',
    // summary tab
    takeaways: 'Lo que debes recordar',
    theDeal: 'La mano',
    ddMakes: 'Contratos que se cumplen a doble muerto',
    youTag: ' (tú)',
    solvingTable: 'Resolviendo la tabla a doble muerto…',
    ddTableNote: 'El nivel más alto que cada declarante cumple en cada denominación si todos juegan a la perfección (— = ni siquiera uno).',
    lessonBid: (call: string, meaning: string, systemCall: string, rule: string) =>
      `Subasta: declaraste ${call} (${meaning}); el sistema declara ${systemCall} — ${rule}. `,
    lessonCard: (trick: number, card: string, cost: number, better: string) =>
      `Baza ${trick}: ${card} costó ${tricks(cost)} a doble muerto (mejor: ${better}). `,
    bestOnInfo: 'Pero era la mejor carta con la información que tenías: el análisis a doble muerto ve todas las manos.',
    lessonContract: (contract: string, makes: boolean, t: number, par: string) =>
      `Contrato: ${contract} ${makes ? 'se cumple' : 'no se cumple'} a doble muerto (${tricks(t)}). El par es ${par}.`,
    missedGame: (contract: string, hcp: string) => `Había manga: ${contract} se cumple con el mejor carteo, y la pareja sumaba ${hcp}.`,
    missedSlam: (contract: string, hcp: string) => `Había slam: ${contract} se cumple con el mejor carteo, y la pareja sumaba ${hcp}.`,
    cleanHand: 'Mano limpia: ninguna discrepancia en la subasta y ningún error de carteo a doble muerto.',
    // bidding tab
    system: (call: string, rule: string, desc: string) => `Sistema: ${call} (${rule}) — ${desc}`,
    // play tab
    noPlay: 'No hubo carteo: todos pasaron.',
    analysingAll: (pct: string) => `Analizando cada carta a doble muerto… ${pct}`,
    playLegend: 'Subrayadas = tus cartas. La marca roja indica cuántas bazas costó esa carta si todos juegan a la perfección. Haz clic en una baza para ver la posición.',
    costTitle: 'Bazas perdidas a doble muerto',
    youCost: (n: number) => `tú −${n}`,
    forced: ' — forzada o sin analizar.',
    verdict: (got: number, side: string, best: number) => ` → ${tricks(got)} para ${side} (máximo ${best}). `,
    options: 'Opciones: ',
    beforeTrick: (n: number) => `Antes de la baza ${n}`,
    trick: (n: number) => `Baza ${n}`,
  },

  /** The Learn room: lessons, drills, glossary. */
  learn: {
    title: 'Aprender',
    tabs: { lessons: 'Lecciones', bid: 'Práctica de subasta', lead: 'Práctica de salidas', count: 'Práctica de recuento', glossary: 'Glosario' },
    lessonsNav: 'Lecciones',
    noLessons: 'No se han encontrado lecciones.',
    loadingLessons: 'Cargando las lecciones…',
    /** Lesson topics and levels, keyed by their ids in the lesson files. */
    topics: {
      Basics: 'Fundamentos',
      Bidding: 'Subasta',
      'Competitive bidding': 'Subasta competitiva',
      'Slam bidding': 'Subasta de slam',
      'Declarer play': 'Carteo del declarante',
      Defense: 'Defensa',
      'Scoring & tactics': 'Puntuación y táctica',
    },
    levels: { Beginner: 'Principiante', Intermediate: 'Intermedio', Advanced: 'Avanzado' },
    keyPoints: 'Puntos clave',
    checkYourself: 'Ponte a prueba',
    right: 'Correcto. ',
    notQuite: 'No exactamente. ',
    // drills
    score: (ok: number, total: number) => `  Aciertos ${ok}/${total}`,
    bidDrill: 'Práctica de subasta. ',
    bidPrompt: (vul: string) => `Eres Sur, ${vul}. ¿Qué declaras?`,
    rightCall: (call: string, rule: string) => `Correcto: ${call} — ${rule}`,
    systemBids: (call: string, rule: string) => `El sistema declara ${call} — ${rule}`,
    yourCallReads: (call: string, name: string, desc: string) => `Tu ${call} se entendería como ${name}: ${desc}`,
    doesntFit: 'No encaja porque: ',
    leadDrill: 'Práctica de salidas. ',
    leadPrompt: (contract: string) => `El declarante, Este, juega ${contract}. Elige tu salida.`,
    rightSuitScore: (ok: number, total: number) => `  Palo correcto ${ok}/${total}`,
    bookLead: 'La salida de manual.',
    rightSuit: (card: string) => `Palo correcto; la carta estándar es ${card}.`,
    bookLeadIs: (card: string) => `La salida de manual es ${card}.`,
    leadNoMatter: (def: number, need: number) =>
      `En esta mano concreta, cualquier salida da a la defensa ${tricks(def)} a doble muerto (necesita ${need}): aquí la salida no cambiaba nada.`,
    defenceNeeds: (need: number) => `En esta mano concreta (a doble muerto, con todas las manos a la vista) la defensa necesita ${tricks(need)}:`,
    defTricks: (n: number) => `${tricks(n)} para la defensa`,
    beatsIt: 'lo derrota',
    solvingDeal: 'Resolviendo esta mano a doble muerto…',
    wholeDeal: 'La mano completa',
    /** "Oeste (muerto)", "Este (declarante)" under the diagram. */
    dummyTag: 'muerto',
    declarerTag: 'declarante',
    countDrill: 'Práctica de recuento del declarante. ',
    countPrompt: (contract: string, lead: string, question: string) => `Eres el declarante en ${contract}; Oeste sale con ${lead}. ${question}`,
    countTopTricks: '¿Cuántas bazas firmes (ganadoras seguras) tienes?',
    countLosers: '¿Cuántas perdedoras tienes? Cuéntalas en la mano con más triunfos (la mano principal) y deja que las cartas altas de la otra mano cubran las que puedan.',
    correct: 'Correcto.',
    theCountIs: (n: number) => `La cuenta correcta es ${n}.`,
  },

  /** Progress: headline numbers and the hand history. */
  settings: {
    title: 'Ajustes',
    tutor: { title: 'Tutor', desc: 'Pistas, explicación de cada voz, ayuda para contar y el plan del declarante. Actívalo o desactívalo cuando quieras.' },
    autoHint: { title: 'Mostrar las recomendaciones enseguida', desc: 'Desactivado: el tutor te pide que pienses primero y muestra su elección cuando se la pides.' },
    coach: { title: 'Avisarme antes de un error', desc: 'Cuando tu voz o tu carta es claramente peor que la recomendada, el tutor te pide que lo confirmes.' },
    peek: { title: 'Mostrar las cuatro manos', desc: 'Modo práctica: ves todas las cartas mientras juegas (los bots siguen jugando limpio).' },
    dealMode: { title: 'Manos', desc: 'Elige qué tipo de manos quieres practicar. Se aplica desde la siguiente mano.' },
    biddingOnly: { title: 'Solo subasta', desc: 'Practica solo la subasta: al terminar, tu contrato se puntúa con el mejor carteo y se compara con el del sistema, sin jugar las cartas.' },
    strength: { title: 'Nivel de los bots', desc: 'Cuántos repartos simulan los bots y el tutor antes de cada carta. Cuanto más profundo, más fuerte y más lento.' },
    speed: { title: 'Velocidad', desc: 'Pausa entre las cartas de los bots.' },
    theme: { title: 'Tema', desc: 'Sigue la configuración de tu dispositivo salvo que elijas otro.' },
    language: { title: 'Idioma', desc: 'Para toda la aplicación, el tutor y las lecciones. Cámbialo cuando quieras: la mano en curso se conserva.' },
    dealModes: {
      random: 'Manos al azar',
      declare: 'Practicar el carteo (N/S fuertes)',
      defend: 'Practicar la defensa (E/O fuertes)',
      slam: 'Buscar slams (31+ en N/S)',
      competitive: 'Subastas competitivas',
      strong: 'Tienes una mano fuerte',
    },
    strengths: { quick: 'Rápido', standard: 'Estándar', deep: 'Profundo' },
    speeds: { slow: 'Lenta', normal: 'Normal', fast: 'Rápida' },
    themes: { system: 'Automático', light: 'Claro', dark: 'Oscuro' },
    systemNote:
      'Sistema: Standard American Yellow Card (SAYC) — 1SA de 15–17, mayores quintos, Stayman, transfers de Jacoby y 2SA Jacoby, aperturas de dos débil, doblos negativos, Michaels y 2SA inusual, Blackwood o Roman Key Card Blackwood, salidas y señales estándar — más las convenciones de abajo. Puntuación de bridge duplicado.',
    install: { title: 'Instalar la aplicación', desc: 'Añade Bridge Tutor a tu pantalla de inicio o a tu escritorio. Se abre en su propia ventana y funciona sin conexión.', button: 'Instalar' },
    conventionsTitle: 'Convenciones',
    conventionsNote: 'Las juegan tú, tu compañero y los rivales. Los cambios se aplican desde la siguiente mano.',
    lessonLink: 'Lección',
  },
};
