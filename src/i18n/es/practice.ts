// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';
import type { Seat, Vulnerability } from '../../core/cards';

/** "1 decisión", "5 decisiones" */
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const practice: Text['practice'] = {
  title: 'Entrenamiento',
  close: 'Cerrar',
  tabs: { today: 'Hoy', review: 'Repaso', problems: 'Problemas', skills: 'Habilidades', topics: 'Temas', history: 'Historial' },

  skills: {
    'bid.opening': { name: 'Abrir la subasta', desc: 'Si abrir o no, y qué apertura describe tu mano: uno a palo, 1SA, 2♣, aperturas de dos débil y barrages.' },
    'bid.response': { name: 'Responder', desc: 'Tus voces cuando abre tu compañero: apoyos, palos nuevos, respuestas a sin triunfo y la elección de la manga.' },
    'bid.rebid': { name: 'La redeclaración del abridor', desc: 'Tu segunda voz después de abrir: muestra tu fuerza y tu distribución para que tu compañero pueda fijar el contrato.' },
    'bid.notrump': { name: 'Subastas a sin triunfo', desc: 'Las aperturas de 1SA y 2SA y sus respuestas: Stayman, transfers, invitaciones.' },
    'bid.competitive': { name: 'Subasta competitiva', desc: 'Cuando también declaran los rivales: intervenciones, doblos informativos y negativos, bicolores, reapertura, la lucha por el parcial.' },
    'bid.slam': { name: 'Subasta de slam', desc: 'Reconocer el slam, preguntar por Ases y pararse a tiempo.' },
    'play.lead': { name: 'Salidas', desc: 'Elegir el palo y la carta de salida antes de ver el muerto.' },
    'play.declarer': { name: 'Carteo del declarante', desc: 'Contar y planificar, impasses, afirmar palos, manejo de los triunfos, entradas.' },
    'play.defense': { name: 'Defensa', desc: 'Segunda y tercera mano, señales, cambios de palo, contar la mano del declarante.' },
  },

  themes: {
    'openings': { name: 'Aperturas', desc: 'Eres el primero en abrir la subasta.' },
    'responses': { name: 'Responder a tu compañero', desc: 'Tu compañero abre y los rivales callan: encuentra tu respuesta.' },
    'rebids': { name: 'La redeclaración del abridor', desc: 'Abres y tu compañero responde: describe tu mano.' },
    'notrump': { name: 'Subastas a sin triunfo', desc: 'Tu bando abre de 1SA o de 2SA.' },
    'stayman-transfers': { name: 'Stayman y transfers', desc: 'Tu compañero abre de 1SA o de 2SA y tienes un mayor: Stayman o transfer.' },
    'major-raises': { name: 'Apoyar el mayor de tu compañero', desc: 'Tu compañero abre de 1♥ o de 1♠ y tienes apoyo: simple, invitativo, 2SA Jacoby o manga.' },
    'strong-2c': { name: '2♣ fuerte', desc: 'Tu bando tiene una mano muy fuerte que abre de 2♣.' },
    'preempts': { name: 'Aperturas de dos débil y barrages', desc: 'Tu bando abre con un palo largo y una mano débil.' },
    'competitive': { name: 'La lucha por el contrato', desc: 'Declaran los dos bandos: decide cuándo competir, cuándo doblar y cuándo defender.' },
    'overcalls': { name: 'Intervenciones', desc: 'Los rivales abren y tienes un palo que mostrar.' },
    'takeout-doubles': { name: 'Doblos informativos', desc: 'Dobla como informativo o responde al doblo informativo de tu compañero.' },
    'negative-doubles': { name: 'Doblos negativos', desc: 'Tu compañero abre, los rivales intervienen y muestras el mayor no declarado con un doblo.' },
    'two-suiters': { name: 'Michaels y 2SA inusual', desc: 'Tu bando muestra una mano bicolor con una sola voz.' },
    'balancing': { name: 'Reapertura', desc: 'Los rivales se paran bajo y te toca hablar en posición de reapertura.' },
    'partscore-battle': { name: 'La lucha por el parcial', desc: 'Los dos bandos tienen fit y luchan a nivel de dos y de tres (ley de las bazas totales).' },
    'slam': { name: 'Slams', desc: 'Tu bando tiene fuerza para buscar el slam.' },
    'declarer': { name: 'Carteo del declarante', desc: 'Tu bando juega el contrato: cuenta, planifica y luego juega.' },
    'nt-games': { name: '3SA como declarante', desc: 'Juega 3SA: cuenta tus ganadoras, afirma los palos largos, agáchate y vigila tus entradas.' },
    'suit-games': { name: 'Mangas a palo como declarante', desc: 'Juega una manga a palo: cuenta las perdedoras, falla y destriunfa en el momento adecuado.' },
    'leads': { name: 'Salidas', desc: 'El declarante es Este: tú haces la salida.' },
    'defense': { name: 'Defensa', desc: 'Los rivales juegan el contrato y tú defiendes con tu compañero.' },
    'defense-nt': { name: 'Defensa contra sin triunfo', desc: 'Tu compañero sale contra sin triunfo: el juego de tercera mano y la regla del 11.' },
    'defense-suit': { name: 'Defensa contra contratos a palo', desc: 'Defiende un contrato con triunfo: cobra, falla o juega pasivo.' },
  },

  dealing: (topic: string) => (topic ? `Repartiendo una mano de: ${topic}…` : 'Repartiendo…'),
  notEnough: 'todavía no hay suficientes decisiones',
  you: 'Tú',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'nadie vulnerable';
    if (v === 'Both') return 'todos vulnerables';
    return v === ours ? 'tu bando vulnerable y ellos no' : 'ellos vulnerables y tu bando no';
  },

  // header and table
  topicChip: (topic: string) => `Tema: ${topic}`,
  // importing a deal
  importTitle: 'Jugar una mano de otro sitio',
  importText: 'Pega un archivo PBN, una mano de BBO (LIN o un enlace del handviewer), una mano como “N:AKQ2.K73.J52.Q8 …”, o un código o enlace para compartir de Bridge Tutor.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  código para compartir',
  importBtnPlay: 'Jugar esta mano',
  importError: (code: string) => {
    if (code === 'empty') return 'Primero pega una mano.';
    if (code === 'share') return 'Esto no parece una mano: comprueba que has copiado el texto o el enlace completo.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'La mano está incompleta o tiene alguna carta repetida.';
    return 'No se ha podido leer la mano.';
  },
  historyTitle: 'Tus manos',
  // lessons
  practiseLesson: 'Practicar esto en la mesa',
  practiseLessonText: 'Manos en las que aparece este tema, jugadas con el tutor.',
  lessonDone: 'Superada',
  quizScore: (right: number, total: number) => `Al primer intento: ${right} de ${total} correctas`,
  quizRetry: 'Repetir el test',
  practicedCount: (n: number) => (n === 1 ? '1 mano practicada' : `${n} manos practicadas`),

  // Today
  tileStreak: 'Días seguidos',
  tileStreakNote: (n: number) => (n ? 'no pierdas la racha' : 'juega una mano hoy para empezar'),
  tileDue: 'Por repasar',
  tileDueNote: (total: number) => `${plural(total, 'decisión', 'decisiones')} en la cola de repaso`,
  tileBoards: 'Manos jugadas',
  tileBoardsNote: (date: string) => `la última, el ${date}`,
  tileBoardsNone: 'juega tu primera mano',
  tileBidding: 'Precisión en la subasta',
  tileBiddingNote: (right: number, total: number) => `${right} de ${total} voces coincidieron con el sistema`,
  nextSteps: 'Qué hacer ahora',
  stepReviewTitle: (n: number) => `Repasa ${n === 1 ? 'la decisión que fallaste' : `las ${n} decisiones que fallaste`}`,
  stepReviewText: 'Tus propios errores vuelven hasta que los resuelves bien, cada vez con unos días de separación: la forma más rápida de dejar de repetirlos.',
  startReview: 'Empezar el repaso',
  stepWeakTitle: (skill: string) => `Trabaja en: ${skill}`,
  stepWeakNew: 'Todavía has tomado pocas decisiones de este tipo. Practica unas cuantas manos repartidas para ello.',
  stepWeakText: (pct: string, n: number) => `${pct} de aciertos en ${n === 1 ? 'tu última decisión' : `tus últimas ${n} decisiones`}: tu punto más débil. Practica manos repartidas para ello y lee la lección si aún no lo has hecho.`,
  practiseAtTable: 'Practicar en la mesa',
  readLesson: (title: string) => `Lee: ${title}`,
  stepCourseTitle: (title: string) => `Sigue el curso: ${title}`,
  stepCourseText: (i: number, total: number) => `Lección ${i} de ${total}. Una lección cuenta como superada cuando aciertas el 80% de su test al primer intento.`,
  openLesson: 'Abrir la lección',
  stepProblemsTitle: 'Encuentra la jugada correcta',
  stepProblemsText: 'Problemas sacados de manos reales en los que una carta es claramente la mejor: carteo del declarante, defensa y salidas.',
  openProblems: 'Resolver problemas',
  howItWorks: 'Cada mano que terminas se guarda con su análisis. Las voces que se apartan del sistema y las cartas que eran claramente peores con la información que tenías (no solo a toro pasado) van a tu cola de repaso.',

  // Review
  reviewEmptyTitle: 'Todavía no hay errores que repasar',
  reviewEmptyText: 'Juega unas cuantas manos: aquí aparecerán las voces que se apartan del sistema y las cartas que te costaron bazas con la información que tenías.',
  reviewDoneTitle: 'Todo repasado',
  reviewDoneText: (total: number, next: string) => `${plural(total, 'decisión programada', 'decisiones programadas')} para más adelante (la próxima, el ${next}).`,
  sessionScore: (right: number, done: number) => `Esta sesión: ${right}/${done} correctas`,
  itemFrom: (date: string, board: number) => `de la mano ${board}, ${date}`,
  freshDeal: 'Mano nueva, misma idea',
  itemFromDrill: (date: string) => `de la práctica de subasta, ${date}`,
  itemFromProblem: (date: string) => `de un problema, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'nueva' : `paso ${box} de ${last}`),
  dueLeft: (n: number) => plural(n, 'pendiente', 'pendientes'),
  next: 'Siguiente',
  nextIn: (days: number) => (days === 0 ? 'Otra vez hoy, más tarde.' : days === 1 ? 'Próximo repaso: mañana.' : `Próximo repaso dentro de ${days} días.`),
  again: 'Volverá hasta que la resuelvas bien.',
  showBoard: 'Mostrar la mano completa',
  simulating: 'Simulando esa carta en repartos compatibles con lo que sabes…',
  bidPrompt: 'Te toca hablar.',
  youAre: (seat: string, vul: string) => `Eres ${seat}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Correcto: ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `El sistema declara ${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `Tu ${call} se entendería como ${name}: ${desc}`,
  atTableYouBid: (call: string) => `En la mesa declaraste ${call}.`,
  cardPrompt: 'Te toca jugar.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) => `${contract} por ${declarer}; juegas la carta de ${seat} en la baza ${trick}.`,
  dummyLabel: (seat: string) => `Muerto (${seat})`,
  trickSoFar: 'Esta baza:',
  yourHand: (seat: string) => `Tu mano (${seat})`,
  cardRight: 'Correcto: es la carta que mejor resultado dio.',
  cardWrong: (cards: string) => `La mejor: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `En ${n} repartos compatibles con la subasta y el carteo, ${best} dio una media de ${bt} bazas a tu bando (${declaring ? 'cumpliendo' : 'derrotando el contrato'} el ${bs} de las veces); ${yours}, tu carta en la mesa, dio una media de ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `En ${n} repartos compatibles con la subasta y el carteo, ${best} dio una media de ${bt} bazas a tu bando (${declaring ? 'cumpliendo' : 'derrotando el contrato'} el ${bs} de las veces); ${yours}, tu respuesta al problema, dio una media de ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) => `${card} dio una media de ${t} bazas (${s}) en ${n} repartos nuevos.`,

  // Problems
  problems: {
    intro: 'Posiciones de manos reales en las que la simulación muestra que una carta es claramente la mejor: encuéntrala. Cada mano la declara el sistema y la juegan los bots hasta el momento de tu decisión.',
    filterLabel: 'Tipo de problema',
    filters: { mixed: 'Variados', declarer: 'Carteo', defense: 'Defensa', lead: 'Salidas' },
    kinds: { declarer: 'Carteo del declarante', defense: 'Defensa', lead: 'Salida' },
    session: (right: number, done: number) => `Esta sesión: ${right}/${done} correctos`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `En total: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Listos: ${declarer} de carteo · ${defense} de defensa · ${lead} de salida`,
    boardLine: (board: number, vul: string) => `Mano ${board}, ${vul}.`,

    // waiting for the first problem
    preparing: 'Preparando un problema…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Repartiendo una mano para jugar como declarante…' : kind === 'defense' ? 'Repartiendo una mano para defender…' : 'Repartiendo una mano en la que te toca salir…',
    stagePlaying: (trick: number) => `Los bots están jugando la baza ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Comprobando tu decisión en la baza ${trick}: ${done} de ${total} repartos…` : 'Comprobando la mano…',
    tried: (n: number) => (n === 1 ? '1 mano probada hasta ahora.' : `${n} manos probadas hasta ahora.`),
    waitNote: 'Solo se conservan las posiciones con una respuesta clara, así que pueden hacer falta varias manos. Los problemas se preparan en segundo plano mientras esta pestaña está abierta, y se guardan hasta 6 de cada tipo para la próxima vez.',
    leadNote: 'Los problemas de salida claros son raros: preparar uno puede llevar un par de minutos.',

    // the question
    qDeclarer: (contract: string, seat: string) => `Eres el declarante en ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} es el declarante en ${contract}; defiendes como ${seat}.`,
    qLead: (contract: string, declarer: string) => `${declarer} es el declarante en ${contract} y te toca salir.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `Saliste con ${card}.` : who === 'partner' ? `Tu compañero (${seat}) salió con ${card}.` : `${seat} salió con ${card}.`,
    tally: (trick: number, won: number, lost: number) => `Baza ${trick}: hasta ahora tu bando lleva ${won} ${won === 1 ? 'baza' : 'bazas'} y los rivales ${lost}.`,
    askLead: '¿Con qué carta sales?',
    askPlan: (fromDummy: boolean) => `Planifica el carteo: ¿qué carta juegas ${fromDummy ? 'del muerto' : 'de tu mano'}?`,
    askDeclarer: (fromDummy: boolean) => `¿Qué carta juegas ahora ${fromDummy ? 'del muerto' : 'de tu mano'}?`,
    askDefence: '¿Qué carta juegas?',

    // the answer
    right: (cards: string) => `¡Correcto! La mejor: ${cards}.`,
    wrong: (cards: string) => `Esta vez no. La mejor: ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `En ${n} repartos compatibles con la subasta y el carteo hasta ahora, ${best} hizo una media de ${t} bazas para tu bando y ${declaring ? 'cumplió el contrato' : 'derrotó el contrato'} el ${s} de las veces.`,
    yourLine: (card: string, t: string, s: string) => `Tu ${card}: ${t} bazas, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `La mejor de las demás, ${card}: ${t} bazas, ${s}.`,
    colCard: 'Carta',
    colTricks: 'Bazas',
    colMakes: 'Cumple',
    colSets: 'Multa',
    addedToReview: 'Añadida a tu cola de repaso: esta posición volverá hasta que la resuelvas bien.',
    whyThisSuit: 'Por qué este palo:',
    next: 'Siguiente problema',
    skip: 'Saltar',
    showDeal: 'Mostrar la mano completa',
    hideDeal: 'Ocultar la mano',
    playFromStart: 'Jugar esta mano desde el principio',
    declarerTag: 'declarante',
    dummyTag: 'muerto',
  },

  // Skills
  skillsIntro: 'Precisión en tus decisiones más recientes de cada área. En la subasta cuentan las voces que coincidieron con el sistema; en el carteo, las cartas que no eran claramente peores que la mejor con la información que tenías.',
  decisions: (n: number) => plural(n, 'decisión', 'decisiones'),
  practise: 'Practicar',

  // Topics
  topicsIntro: 'Elige un tema y las siguientes manos se repartirán para que aparezca: en la mesa, con el tutor, el análisis y todo lo demás como siempre.',
  nowPractising: 'Practicando ahora:',
  stopTopic: 'Volver a las manos normales',
  dealAnother: 'Repartir otra',

  // History
  review: 'Analizar',
  replay: 'Volver a jugar',
  historyCols: ['Fecha', 'Mano', 'Contrato', 'Resultado', 'Puntos NS', 'IMPs frente al par', 'Voces', 'Errores de carta · bazas perdidas'],
  historyEmpty: 'Todavía no hay manos. Cada mano que terminas se guarda aquí con su análisis.',
  historyNote: 'Errores de carta: cartas que eran claramente peores con la información que tenías. Bazas perdidas: lo que te costaron tus cartas comparado con el carteo perfecto de todos (a doble muerto); a veces la jugada correcta pierde a toro pasado.',
  backupTitle: 'Copia de seguridad',
  backupText: 'Tu progreso se guarda solo en este navegador. Guarda una copia de seguridad para no perderlo o para pasarlo a otro dispositivo.',
  exportBtn: 'Guardar copia',
  importBtn: 'Restaurar desde archivo',
  restored: 'Progreso restaurado.',
  restoreFailed: 'Ese archivo no es una copia de seguridad de Bridge Tutor.',
};
