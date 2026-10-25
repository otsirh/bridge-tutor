// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';
import type { Seat, Vulnerability } from '../../core/cards';

/** "1 decisión", "5 decisiones" */
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const practice: Text['practice'] = {
  title: 'Entrenamiento',
  close: 'Cerrar',
  tabs: { today: 'Hoy', review: 'Repaso', problems: 'Problemas', techniques: 'Técnicas', skills: 'Habilidades', topics: 'Temas', history: 'Historial' },

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
  practiseTechnique: (name: string) => `Practicar la técnica: ${name}`,
  practiseTechniqueText: 'Manos completas en las que decide el contrato, jugadas en la mesa y explicadas después.',
  practiseTechniqueBtn: 'Practicar la técnica',

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
  stepTechniquesTitle: 'Practica una técnica del declarante',
  stepTechniquesText: 'Manos completas en las que una técnica decide el contrato (impasse, hold-up, agacharse, desbloqueo, manejo de los triunfos, jugada de seguridad), explicadas después de la mano.',
  openTechniques: 'Practicar técnicas',
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
  itemFromTechnique: (date: string) => `de la práctica de técnicas, ${date}`,
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

  // Techniques: whole deals where one declarer technique decides the contract
  techniques: {
    intro: 'Manos completas en las que una técnica del declarante decide el contrato. Juega la mano en la mesa; después, el análisis muestra el momento clave —si encontraste la técnica, con la simulación que lo respalda— y la lección que la enseña. Cada mano la declara el sistema y se comprueba por simulación solo con lo que el declarante podía ver.',
    filterLabel: 'Técnica',
    any: 'Todas',
    names: {
      finesse: 'Impasse',
      holdUp: 'Hold-up',
      duck: 'Agacharse',
      unblock: 'Desbloqueo',
      drawTrumps: 'Destriunfar',
      ruffShort: 'Fallar en la mano corta',
      safety: 'Jugada de seguridad',
    },
    descs: {
      finesse: 'Juega la carta que gana cuando el honor que falta está en el defensor que ya ha jugado: la Dama del A-Q, o el Rey hacia el que jugaste.',
      holdUp: 'A sin triunfo, deja que los defensores ganen su palo una o dos veces antes de usar tu control.',
      duck: 'Cede pronto una vuelta de tu palo largo mientras la mano larga conserva sus cartas altas como entradas.',
      unblock: 'Juega primero las cartas altas de la mano más corta, para poder llegar todavía a la mano larga.',
      drawTrumps: 'Quita los triunfos a los defensores antes de que puedan fallar tus ganadoras.',
      ruffShort: 'Falla perdedoras en la mano con menos triunfos: cada fallo allí es una baza extra.',
      safety: 'Renuncia a una posible baza de más para asegurar el contrato.',
    },
    why: {
      finesse: 'Un impasse gana siempre que la carta más alta que te falta esté en el defensor que ya ha jugado a la baza: entonces tu honor (o el de tu compañero, que dejas correr) se la lleva. Si juegas tu carta más alta, solo ganas si esa carta cae; si juegas baja, regalas la baza.',
      holdUp: 'El hold-up: al no ganar enseguida el palo de los defensores, dejas sin cartas del palo al defensor que tiene menos. Si ese defensor toma la mano más tarde, no le queda carta del palo para devolver, y las cartas largas nunca llegan a cobrarse. Si ganas la primera vuelta, los defensores pueden cobrar su palo en cuanto cualquiera de ellos entre en mano.',
      duck: 'Agacharte en una vuelta de tu palo largo cede pronto una baza —normalmente una que perderías de todos modos— mientras la mano larga conserva sus cartas altas. Cuando recuperes la mano todavía podrás llegar a las cartas largas; si ganas las primeras vueltas, las últimas pueden quedar aisladas, sin forma de alcanzarlas.',
      unblock: 'Desbloqueo: juega primero las cartas altas de la mano más corta. Así las últimas cartas del palo quedan en la mano larga y aún tienes una carta baja para llegar a ellas; si juegas primero los honores de la mano larga, el palo se bloquea y las cartas largas quedan aisladas.',
      drawTrumps: 'Destriunfar: mientras los defensores tengan triunfos, pueden fallar tus ganadoras de los palos laterales. Cada vuelta de triunfo les quita uno a cada uno; aquí destriunfar enseguida fue claramente lo mejor.',
      ruffShort: 'Fallar en la mano corta: un fallo en la mano con menos triunfos es una baza extra, porque esos triunfos no harían bazas por sí mismos; fallar en la mano larga no añade nada. Hazlo mientras la mano corta aún tenga triunfos: destriunfar antes podría quitárselos.',
      safety: 'Una jugada de seguridad: otra carta hizo más bazas de media, pero esta cumplió el contrato más a menudo. Renuncia a una posible baza de más para protegerse de los repartos en los que la jugada más ambiciosa fracasa: cuando el contrato está en juego, juega para cumplirlo.',
    },
    hints: 'Nombrar la técnica antes de la mano',
    hintsNote: 'Desactivado: el análisis te dice qué técnica necesitaba la mano, como pasaría en la mesa.',
    play: 'Jugar una mano',
    ready: (n: number) => (n === 1 ? '1 mano lista' : `${n} manos listas`),
    score: (right: number, done: number) => `Encontradas: ${right} de ${done}`,
    techScore: (name: string, right: number, done: number) => `${name}: ${right}/${done}`,
    lessonLink: (title: string) => `Lección: ${title}`,
    preparing: 'Preparando una mano…',
    waitNote: 'Solo se conservan las manos en las que la técnica decide claramente el contrato, así que encontrar una puede llevar unos minutos. Se preparan en segundo plano mientras esta pestaña está abierta y mientras juegas una mano de técnica; se guardan hasta 3 de cada técnica para la próxima vez.',

    // at the table
    noteTitle: 'Práctica de técnicas',
    noteHidden: 'Una decisión de esta mano requiere una técnica del declarante. Encuéntrala: el tutor se guarda sus consejos de carta hasta que ese momento haya pasado, y el análisis te lo explica.',
    noteLookFor: (name: string, desc: string) => `Busca: ${name}. ${desc} El tutor se guarda sus consejos de carta hasta que ese momento haya pasado.`,
    withheld: 'Práctica de técnicas: esta decisión es tuya. Los consejos de carta del tutor vuelven cuando el momento clave haya pasado.',

    // the review
    reviewTitle: (name: string) => `La técnica: ${name}`,
    found: (trick: number, card: string) => `¡La encontraste! ${card} en la baza ${trick}.`,
    missed: (trick: number, card: string, best: string) => `En la baza ${trick} jugaste ${card}; la técnica era ${best}.`,
    offScript: (trick: number) => `El carteo tomó otro camino antes del momento clave (baza ${trick}), así que no llegó a presentarse. Juega la mano desde el momento clave para intentarlo.`,
    auto: (trick: number) => `El momento clave (baza ${trick}) se jugó por ti, con una reclamación o jugando la mano hasta el final.`,
    simBest: (n: number, best: string, t: string, s: string) => `En ${n} repartos compatibles con la subasta y el carteo hasta ese momento, ${best} hizo una media de ${t} bazas y cumplió el contrato el ${s} de las veces.`,
    simYours: (card: string, t: string, s: string) => `Tu ${card}: ${t} bazas, cumplió el ${s} de las veces.`,
    simOther: (card: string, t: string, s: string) => `La mejor de las demás, ${card}: ${t} bazas, cumplió el ${s} de las veces.`,
    tryAgain: 'Intentar de nuevo el momento clave',
    playFromKey: 'Jugar desde el momento clave',
    next: 'Siguiente mano de técnica',
    addedToReview: 'Añadido a tu cola de repaso: el momento clave volverá hasta que lo resuelvas bien.',
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
