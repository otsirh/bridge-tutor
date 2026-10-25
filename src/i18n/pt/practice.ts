// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';
import type { Seat, Vulnerability } from '../../core/cards';

/** "1 decisão", "5 decisões" */
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const practice: Text['practice'] = {
  title: 'Treino',
  close: 'Fechar',
  tabs: { today: 'Hoje', review: 'Revisão', problems: 'Problemas', skills: 'Habilidades', topics: 'Temas', history: 'Histórico' },

  skills: {
    'bid.opening': { name: 'Abertura do leilão', desc: 'Se você deve abrir e qual abertura descreve a sua mão: 1 em naipe, 1ST, 2♣, dois fracos e barragens.' },
    'bid.response': { name: 'Respostas', desc: 'As suas vozes depois que o parceiro abre: apoios, naipes novos, respostas em sem trunfo e a escolha do game.' },
    'bid.rebid': { name: 'Remarcação do abridor', desc: 'A sua segunda voz depois de abrir: mostrar a força e a distribuição para que o parceiro decida o contrato.' },
    'bid.notrump': { name: 'Leilões em sem trunfo', desc: 'As aberturas de 1ST e 2ST e as respostas: Stayman, transfers, convites.' },
    'bid.competitive': { name: 'Leilão competitivo', desc: 'Quando os adversários também marcam: intervenções, dobres informativos e negativos, bicolores, reabertura, a disputa do parcial.' },
    'bid.slam': { name: 'Leilão de slam', desc: 'Reconhecer o slam, perguntar pelos ases e parar a tempo.' },
    'play.lead': { name: 'Saídas', desc: 'Escolher o naipe e a carta de saída antes de ver o morto.' },
    'play.declarer': { name: 'Carteio', desc: 'Contar e planejar, finesses, firmar naipes, manejo dos trunfos, entradas.' },
    'play.defense': { name: 'Defesa', desc: 'Segunda e terceira mão, sinais, trocas de naipe, contar a mão do declarante.' },
  },

  themes: {
    'openings': { name: 'Aberturas', desc: 'Você é o primeiro a abrir o leilão.' },
    'responses': { name: 'Respondendo ao parceiro', desc: 'O parceiro abre e os adversários ficam calados: encontre a sua resposta.' },
    'rebids': { name: 'Remarcação do abridor', desc: 'Você abre, o parceiro responde: descreva a sua mão.' },
    'notrump': { name: 'Leilões em sem trunfo', desc: 'O seu lado abre 1ST ou 2ST.' },
    'stayman-transfers': { name: 'Stayman e transfers', desc: 'O parceiro abre 1ST ou 2ST e você tem um rico: Stayman ou transfer.' },
    'major-raises': { name: 'Apoiando o rico do parceiro', desc: 'O parceiro abre 1♥ ou 1♠ e você tem apoio: simples, limite, Jacoby 2ST ou game.' },
    'strong-2c': { name: '2♣ forte', desc: 'O seu lado tem uma mão grande que abre 2♣.' },
    'preempts': { name: 'Dois fracos e barragens', desc: 'O seu lado abre com um naipe longo e mão fraca.' },
    'competitive': { name: 'Disputando o contrato', desc: 'Os dois lados marcam: decida quando competir, dobrar ou defender.' },
    'overcalls': { name: 'Intervenções', desc: 'Os adversários abrem e você tem um naipe para mostrar.' },
    'takeout-doubles': { name: 'Dobres informativos', desc: 'Dobre informativo, ou a resposta ao dobre informativo do parceiro.' },
    'negative-doubles': { name: 'Dobres negativos', desc: 'O parceiro abre, eles intervêm e você mostra o rico não marcado com um dobre.' },
    'two-suiters': { name: 'Michaels e 2ST Unusual', desc: 'O seu lado mostra uma mão bicolor numa só voz.' },
    'over-notrump': { name: 'Competir sobre 1ST', desc: 'Os adversários abrem 1ST e o seu lado dobra ou marca um naipe longo.' },
    'over-preempts': { name: 'Competir sobre barragens', desc: 'Os adversários abrem com um dois fraco ou uma barragem e o seu lado dobra, intervém ou marca sem trunfo.' },
    'opening-doubled': { name: 'Quando nos dobram', desc: 'O seu lado abre e o jogador seguinte dobra: mostre logo a sua força e o seu fit.' },
    'balancing': { name: 'Reabertura', desc: 'Eles param baixo e é a sua vez na posição de reabertura.' },
    'partscore-battle': { name: 'A disputa do parcial', desc: 'Os dois lados têm fit e brigam nos níveis 2 e 3 (Lei das Vazas Totais).' },
    'slam': { name: 'Slams', desc: 'O seu lado tem força para procurar o slam.' },
    'declarer': { name: 'Carteio', desc: 'O seu lado joga o contrato: conte, planeje e depois jogue.' },
    'nt-games': { name: '3ST como declarante', desc: 'Jogue 3ST: conte as vencedoras, firme os naipes longos, deixe passar, cuide das entradas.' },
    'suit-games': { name: 'Games em naipe como declarante', desc: 'Jogue um game em naipe: conte as perdedoras, corte, tire os trunfos na hora certa.' },
    'leads': { name: 'Saídas', desc: 'Leste é o declarante: você faz a saída.' },
    'defense': { name: 'Defesa', desc: 'Os adversários jogam o contrato e você defende com o parceiro.' },
    'defense-nt': { name: 'Defesa contra sem trunfo', desc: 'O parceiro sai contra sem trunfo: o jogo de terceira mão e a Regra do 11.' },
    'defense-suit': { name: 'Defesa contra contratos em naipe', desc: 'Defenda um contrato com trunfo: bata as suas vazas, corte ou fique passivo.' },
  },

  dealing: (topic: string) => (topic ? `Dando uma mão de: ${topic}…` : 'Dando as cartas…'),
  notEnough: 'ainda não há decisões suficientes',
  you: 'Você',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'ninguém vulnerável';
    if (v === 'Both') return 'todos vulneráveis';
    return v === ours ? 'vocês vulneráveis, eles não' : 'eles vulneráveis, vocês não';
  },

  // header and table
  topicChip: (topic: string) => `Tema: ${topic}`,
  // importing a deal
  importTitle: 'Jogar uma mão de outro lugar',
  importText: 'Cole um arquivo PBN, uma mão do BBO (LIN ou link do visualizador), uma mão como "N:AKQ2.K73.J52.Q8 …", ou um código ou link de compartilhamento do Tutor de Bridge.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  código de compartilhamento',
  importBtnPlay: 'Jogar esta mão',
  importError: (code: string) => {
    if (code === 'empty') return 'Cole uma mão primeiro.';
    if (code === 'share') return 'Isto não parece uma mão: confira se o texto ou o link foi copiado inteiro.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'A mão está incompleta ou tem uma carta repetida.';
    return 'Não foi possível ler a mão.';
  },
  historyTitle: 'Suas mãos',
  // lessons
  practiseLesson: 'Treinar isto na mesa',
  practiseLessonText: 'Mãos em que este tema aparece, jogadas com o tutor.',
  lessonDone: 'Concluída',
  quizScore: (right: number, total: number) => `Primeira tentativa: ${right} de ${total} certas`,
  quizRetry: 'Refazer o teste',
  practicedCount: (n: number) => (n === 1 ? '1 mão treinada' : `${n} mãos treinadas`),

  // Today
  tileStreak: 'Dias seguidos',
  tileStreakNote: (n: number) => (n ? 'continue assim' : 'jogue uma mão hoje para começar'),
  tileDue: 'Para revisar',
  tileDueNote: (total: number) => `${plural(total, 'decisão', 'decisões')} na fila de revisão`,
  tileBoards: 'Mãos jogadas',
  tileBoardsNote: (date: string) => `a última em ${date}`,
  tileBoardsNone: 'jogue a sua primeira mão',
  tileBidding: 'Precisão no leilão',
  tileBiddingNote: (right: number, total: number) => `${right} de ${total} vozes de acordo com o sistema`,
  nextSteps: 'O que fazer agora',
  stepReviewTitle: (n: number) => `Revise ${plural(n, 'decisão', 'decisões')} em que você errou`,
  stepReviewText: 'Os seus próprios erros voltam até você acertar, com alguns dias de intervalo a cada vez — o jeito mais rápido de parar de repeti-los.',
  startReview: 'Começar a revisão',
  stepWeakTitle: (skill: string) => `Trabalhe em: ${skill}`,
  stepWeakNew: 'Você ainda tomou poucas decisões deste tipo. Treine algumas mãos escolhidas para isso.',
  stepWeakText: (pct: string, n: number) => `${pct} de acertos nas suas últimas ${plural(n, 'decisão', 'decisões')} — a sua área mais fraca. Treine mãos escolhidas para ela e leia a lição, se ainda não leu.`,
  practiseAtTable: 'Treinar na mesa',
  readLesson: (title: string) => `Leia: ${title}`,
  stepCourseTitle: (title: string) => `Continue o curso: ${title}`,
  stepCourseText: (i: number, total: number) => `Lição ${i} de ${total}. Uma lição conta como concluída quando você acerta 80% do teste na primeira tentativa.`,
  openLesson: 'Abrir a lição',
  stepProblemsTitle: 'Encontre a jogada certa',
  stepProblemsText: 'Problemas de mãos reais em que uma carta é claramente a melhor: carteio, defesa e saídas.',
  openProblems: 'Resolver problemas',
  howItWorks: 'Cada mão que você termina é guardada com a análise. As vozes que diferem do sistema e as cartas que foram claramente piores com a informação que você tinha (não só em retrospecto) vão para a sua fila de revisão.',

  // Review
  reviewEmptyTitle: 'Ainda não há erros para revisar',
  reviewEmptyText: 'Jogue algumas mãos: as vozes que diferem do sistema e as cartas que custaram caro com a informação que você tinha vão aparecer aqui.',
  reviewDoneTitle: 'Tudo em dia',
  reviewDoneText: (total: number, next: string) => `${plural(total, 'decisão está agendada', 'decisões estão agendadas')} para mais tarde (a próxima em ${next}).`,
  sessionScore: (right: number, done: number) => `Nesta sessão: ${right}/${done} certas`,
  itemFrom: (date: string, board: number) => `da mão ${board}, ${date}`,
  freshDeal: 'Mão nova, mesma ideia',
  itemFromDrill: (date: string) => `do exercício de leilão, ${date}`,
  itemFromProblem: (date: string) => `de um problema, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'nova' : `etapa ${box} de ${last}`),
  dueLeft: (n: number) => `${n} para hoje`,
  next: 'Próxima',
  nextIn: (days: number) => (days === 0 ? 'De novo mais tarde, hoje.' : days === 1 ? 'Próxima revisão amanhã.' : `Próxima revisão em ${days} dias.`),
  again: 'Ela vai voltar até você acertar.',
  showBoard: 'Mostrar a mão inteira',
  simulating: 'Simulando essa carta em distribuições compatíveis com o que você sabe…',
  bidPrompt: 'Sua voz.',
  youAre: (seat: string, vul: string) => `Você é ${seat}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Certo: ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `O sistema marca ${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `O seu ${call} seria entendido como ${name}: ${desc}`,
  atTableYouBid: (call: string) => `Na mesa você marcou ${call}.`,
  cardPrompt: 'Sua carta.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) => `${contract} por ${declarer}; você joga a carta de ${seat} na vaza ${trick}.`,
  dummyLabel: (seat: string) => `Morto (${seat})`,
  trickSoFar: 'Esta vaza:',
  yourHand: (seat: string) => `Sua mão (${seat})`,
  cardRight: 'Certo — essa foi a carta que se saiu melhor.',
  cardWrong: (cards: string) => `Melhor: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `Em ${n} distribuições compatíveis com o leilão e o carteio, ${best} fez em média ${bt} vazas para o seu lado (${declaring ? 'cumprindo' : 'derrubando o contrato'} em ${bs} dos casos); ${yours}, a sua carta na mesa, fez em média ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `Em ${n} distribuições compatíveis com o leilão e o carteio, ${best} fez em média ${bt} vazas para o seu lado (${declaring ? 'cumprindo' : 'derrubando o contrato'} em ${bs} dos casos); ${yours}, a sua resposta ao problema, fez em média ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) => `${card} fez em média ${t} vazas (${s}) em ${n} distribuições novas.`,

  // Problems
  problems: {
    intro: 'Posições de mãos reais em que a simulação mostra uma carta claramente melhor — encontre-a. Cada mão é marcada pelo sistema e jogada pelos robôs até a sua decisão.',
    filterLabel: 'Tipo de problema',
    filters: { mixed: 'Variados', declarer: 'Carteio', defense: 'Defesa', lead: 'Saídas' },
    kinds: { declarer: 'Carteio', defense: 'Defesa', lead: 'Saída' },
    session: (right: number, done: number) => `Nesta sessão: ${right}/${done} certos`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `No total: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Prontos: ${declarer} de carteio · ${defense} de defesa · ${lead} de saída`,
    boardLine: (board: number, vul: string) => `Mão ${board}, ${vul}.`,

    // waiting for the first problem
    preparing: 'Preparando um problema…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Dando uma mão para o carteio…' : kind === 'defense' ? 'Dando uma mão para defender…' : 'Dando uma mão com uma saída a fazer…',
    stagePlaying: (trick: number) => `Os robôs estão jogando a vaza ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Testando a sua decisão na vaza ${trick}: ${done} de ${total} distribuições…` : 'Verificando a mão…',
    tried: (n: number) => (n === 1 ? '1 mão testada até agora.' : `${n} mãos testadas até agora.`),
    waitNote: 'Só ficam as posições com uma resposta clara, então pode levar algumas mãos. Os problemas são preparados em segundo plano enquanto esta aba está aberta, e até 6 de cada tipo ficam guardados para a próxima vez.',
    leadNote: 'Problemas de saída claros são raros: preparar um pode levar um ou dois minutos.',

    // the question
    qDeclarer: (contract: string, seat: string) => `Você é o declarante em ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} é o declarante em ${contract}; você defende como ${seat}.`,
    qLead: (contract: string, declarer: string) => `${declarer} é o declarante em ${contract}, e a saída é sua.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `Você saiu com ${card}.` : who === 'partner' ? `O parceiro (${seat}) saiu com ${card}.` : `${seat} saiu com ${card}.`,
    tally: (trick: number, won: number, lost: number) => `Vaza ${trick}: até agora o seu lado tem ${plural(won, 'vaza', 'vazas')}, os adversários ${lost}.`,
    askLead: 'Com que carta você sai?',
    askPlan: (fromDummy: boolean) => `Planeje o carteio: que carta ${fromDummy ? 'do morto' : 'da sua mão'}?`,
    askDeclarer: (fromDummy: boolean) => `Que carta ${fromDummy ? 'do morto' : 'da sua mão'} agora?`,
    askDefence: 'Que carta você joga?',

    // the answer
    right: (cards: string) => `Certo! Melhor: ${cards}.`,
    wrong: (cards: string) => `Desta vez não. Melhor: ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `Em ${n} distribuições compatíveis com o leilão e o carteio até aqui, ${best} fez em média ${t} vazas para o seu lado e ${declaring ? 'cumpriu o contrato' : 'derrubou o contrato'} em ${s} dos casos.`,
    yourLine: (card: string, t: string, s: string) => `A sua carta, ${card}: ${t} vazas, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `A melhor das outras, ${card}: ${t} vazas, ${s}.`,
    colCard: 'Carta',
    colTricks: 'Vazas',
    colMakes: 'Cumpre',
    colSets: 'Derruba',
    addedToReview: 'Adicionada à sua fila de revisão: esta posição volta até você acertar.',
    whyThisSuit: 'Por que este naipe:',
    next: 'Próximo problema',
    skip: 'Pular',
    showDeal: 'Mostrar a mão inteira',
    hideDeal: 'Esconder a mão',
    playFromStart: 'Jogar esta mão desde o início',
    declarerTag: 'declarante',
    dummyTag: 'morto',
  },

  // Skills
  skillsIntro: 'Precisão nas suas decisões mais recentes em cada área. No leilão contam as vozes de acordo com o sistema; no carteio e na defesa, as cartas que não foram claramente piores que a melhor com a informação que você tinha.',
  decisions: (n: number) => plural(n, 'decisão', 'decisões'),
  practise: 'Treinar',

  // Topics
  topicsIntro: 'Escolha um tema e as próximas mãos serão dadas para que ele apareça — na mesa, com o tutor, a análise e todo o resto, como sempre.',
  nowPractising: 'Treinando agora:',
  stopTopic: 'Voltar às mãos normais',
  dealAnother: 'Dar outra',

  // History
  review: 'Rever',
  replay: 'Jogar de novo',
  historyCols: ['Data', 'Mão', 'Contrato', 'Resultado', 'Pontos NS', 'IMPs vs. par', 'Vozes', 'Erros de carta · vazas perdidas'],
  historyEmpty: 'Ainda não há mãos. Cada mão que você termina fica guardada aqui com a análise.',
  historyNote: 'Erros de carta: cartas claramente piores com a informação que você tinha. Vazas perdidas: o que as suas cartas custaram em comparação com o jogo perfeito de todos (com cartas abertas) — às vezes a jogada certa perde em retrospecto.',
  backupTitle: 'Backup',
  backupText: 'O seu progresso fica guardado só neste navegador. Salve um arquivo de backup para mantê-lo seguro ou levá-lo para outro aparelho.',
  exportBtn: 'Salvar backup',
  importBtn: 'Restaurar de arquivo',
  restored: 'Progresso restaurado.',
  restoreFailed: 'Esse arquivo não é um backup do Tutor de Bridge.',
};
