// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Text } from '../en';
import type { Seat, Vulnerability } from '../../core/cards';
import { num, pl, seatGen } from './grammar';

const decisions = (n: number) => num(n, 'решение', 'решения', 'решений');
/** "в 1 раскладе", "в 200 раскладах" */
const layouts = (n: number) => `${n} ${pl(n, 'раскладе', 'раскладах', 'раскладах')}`;

export const practice: Text['practice'] = {
  title: 'Тренировка',
  close: 'Закрыть',
  tabs: { today: 'Сегодня', review: 'Повторение', problems: 'Задачи', skills: 'Навыки', topics: 'Темы', history: 'История' },

  skills: {
    'bid.opening': { name: 'Открытие торговли', desc: 'Открывать ли и каким открытием описать руку: 1 в масти, 1БК, 2♣, слабые два и блоки.' },
    'bid.response': { name: 'Ответы', desc: 'Ваши заявки после открытия партнёра: поддержки, новые масти, бескозырные ответы и выбор гейма.' },
    'bid.rebid': { name: 'Повторная заявка открывающего', desc: 'Ваша вторая заявка после открытия: показать силу и расклад, чтобы партнёр мог выбрать контракт.' },
    'bid.notrump': { name: 'Бескозырная торговля', desc: 'Открытия 1БК и 2БК и ответы на них: Стейман, трансферы, приглашения.' },
    'bid.competitive': { name: 'Конкурентная торговля', desc: 'Когда торгуются и противники: вмешательства, вызывные и негативные контры, двухмастные заявки, балансирование, борьба за частичный контракт.' },
    'bid.slam': { name: 'Шлемовая торговля', desc: 'Распознать шлем, спросить тузы и вовремя остановиться.' },
    'play.lead': { name: 'Первый ход', desc: 'Выбор масти и карты для первого хода, пока болван ещё не открыт.' },
    'play.declarer': { name: 'Розыгрыш', desc: 'Подсчёт и план, прорезки, отработка мастей, игра с козырями, входы.' },
    'play.defense': { name: 'Защита', desc: 'Игра второй и третьей рукой, сигналы, смена масти, подсчёт руки разыгрывающего.' },
  },

  themes: {
    'openings': { name: 'Открытия', desc: 'Вы первым открываете торговлю.' },
    'responses': { name: 'Ответы партнёру', desc: 'Партнёр открывает, противники молчат: найдите ответ.' },
    'rebids': { name: 'Повторная заявка открывающего', desc: 'Вы открываете, партнёр отвечает: опишите свою руку.' },
    'notrump': { name: 'Бескозырная торговля', desc: 'Ваша линия открывает 1БК или 2БК.' },
    'stayman-transfers': { name: 'Стейман и трансферы', desc: 'Партнёр открывает 1БК или 2БК, а у вас мажор: Стейман или трансфер.' },
    'major-raises': { name: 'Поддержка мажора партнёра', desc: 'Партнёр открывает 1♥ или 1♠, и у вас есть поддержка: простая, лимитная, Джекоби 2БК или гейм.' },
    'strong-2c': { name: 'Сильное 2♣', desc: 'У вашей линии большая рука, которая открывает 2♣.' },
    'preempts': { name: 'Слабые два и блоки', desc: 'Ваша линия открывает с длинной мастью и слабой рукой.' },
    'competitive': { name: 'Борьба за контракт', desc: 'Торгуются обе линии: решите, когда бороться, контрировать или защищаться.' },
    'overcalls': { name: 'Вмешательства', desc: 'Противники открывают, а у вас есть масть, которую стоит показать.' },
    'takeout-doubles': { name: 'Вызывные контры', desc: 'Вызывная контра или ответ на вызывную контру партнёра.' },
    'negative-doubles': { name: 'Негативные контры', desc: 'Партнёр открывает, противник вмешивается, а вы показываете незаявленный мажор контрой.' },
    'two-suiters': { name: 'Майклс и необычные 2БК', desc: 'Ваша линия показывает двухмастную руку одной заявкой.' },
    'balancing': { name: 'Балансирование', desc: 'Противники остановились низко, а ваш пас завершит торговлю.' },
    'partscore-battle': { name: 'Борьба за частичный контракт', desc: 'У обеих линий есть фит, и борьба идёт на втором и третьем уровне (закон общего числа взяток).' },
    'slam': { name: 'Шлемы', desc: 'У вашей линии хватает силы, чтобы искать шлем.' },
    'declarer': { name: 'Розыгрыш', desc: 'Контракт разыгрывает ваша линия: подсчёт, план, затем игра.' },
    'nt-games': { name: 'Розыгрыш 3БК', desc: 'Разыграйте 3БК: подсчитайте верные взятки, отработайте длинные масти, применяйте пропуск, следите за входами.' },
    'suit-games': { name: 'Розыгрыш козырных геймов', desc: 'Разыграйте гейм в масти: подсчитайте проигрыши, козыряйте, снимайте козыри в нужный момент.' },
    'leads': { name: 'Первый ход', desc: 'Разыгрывает Восток, первый ход за вами.' },
    'defense': { name: 'Защита', desc: 'Противники разыгрывают контракт, а вы защищаетесь вместе с партнёром.' },
    'defense-nt': { name: 'Защита против БК', desc: 'Партнёр делает первый ход против бескозырного контракта: игра третьей рукой и правило 11.' },
    'defense-suit': { name: 'Защита против козырных контрактов', desc: 'Защита против козырного контракта: отобрать свои взятки, козырять или играть пассивно.' },
  },

  dealing: (topic: string) => (topic ? `Сдаю карты на тему «${topic}»…` : 'Сдаю карты…'),
  notEnough: 'пока мало решений',
  you: 'Вы',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'все до зоны';
    if (v === 'Both') return 'все в зоне';
    return v === ours ? 'вы в зоне, противники до зоны' : 'противники в зоне, вы до зоны';
  },

  // header and table
  topicChip: (topic: string) => `Тема: ${topic}`,
  // importing a deal
  importTitle: 'Сыграть сдачу из другого источника',
  importText: 'Вставьте файл PBN, сдачу из BBO (LIN или ссылку на handviewer), сдачу вида «N:AKQ2.K73.J52.Q8 …» либо код или ссылку из Бридж-тренера.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  код сдачи',
  importBtnPlay: 'Сыграть эту сдачу',
  importError: (code: string) => {
    if (code === 'empty') return 'Сначала вставьте сдачу.';
    if (code === 'share') return 'Это не похоже на сдачу: проверьте, что текст или ссылка скопированы целиком.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'Сдача неполная, или какая-то карта встречается дважды.';
    return 'Не удалось прочитать сдачу.';
  },
  historyTitle: 'Ваши сдачи',
  // lessons
  practiseLesson: 'Потренироваться за столом',
  practiseLessonText: 'Сдачи на эту тему — играете с тренером.',
  lessonDone: 'Пройден',
  quizScore: (right: number, total: number) => `С первой попытки: ${right} из ${total}`,
  quizRetry: 'Пройти тест ещё раз',
  practicedCount: (n: number) => `Сыграно сдач: ${n}`,

  // Today
  tileStreak: 'Дней подряд',
  tileStreakNote: (n: number) => (n ? 'так держать' : 'сыграйте сдачу сегодня, чтобы начать'),
  tileDue: 'К повторению',
  tileDueNote: (total: number) => `${decisions(total)} в очереди повторения`,
  tileBoards: 'Сыграно сдач',
  tileBoardsNote: (date: string) => `последняя — ${date}`,
  tileBoardsNone: 'сыграйте первую сдачу',
  tileBidding: 'Точность торговли',
  tileBiddingNote: (right: number, total: number) => `${right} из ${total} ${pl(total, 'заявки', 'заявок', 'заявок')} ${pl(right, 'совпала', 'совпали', 'совпали')} с системой`,
  nextSteps: 'Что делать дальше',
  stepReviewTitle: (n: number) => `Повторите ошибочные решения: ${n}`,
  stepReviewText: 'Ваши ошибки возвращаются к вам, каждый раз через несколько дней, пока вы не решите их правильно, — это самый быстрый способ перестать их повторять.',
  startReview: 'Начать повторение',
  stepWeakTitle: (skill: string) => `Поработайте над темой: ${skill}`,
  stepWeakNew: 'Решений такого рода у вас пока мало. Сыграйте несколько сдач, подобранных для этой темы.',
  stepWeakText: (pct: string, n: number) =>
    `${pct} верных решений из последних ${n} — это ваше самое слабое место. Тренируйтесь на подобранных сдачах и прочитайте урок, если ещё не читали.`,
  practiseAtTable: 'Тренироваться за столом',
  readLesson: (title: string) => `Прочитать: ${title}`,
  stepCourseTitle: (title: string) => `Продолжить курс: ${title}`,
  stepCourseText: (i: number, total: number) => `Урок ${i} из ${total}. Урок считается пройденным, когда вы с первой попытки правильно отвечаете на 80% вопросов теста.`,
  openLesson: 'Открыть урок',
  stepProblemsTitle: 'Найдите правильную карту',
  stepProblemsText: 'Задачи из реальных сдач, где одна карта явно лучше остальных: розыгрыш, защита и первый ход.',
  openProblems: 'Решать задачи',
  howItWorks: 'Каждая сыгранная сдача сохраняется вместе с анализом. Заявки, расходящиеся с системой, и карты, которые были явно хуже с учётом известной вам информации (а не задним числом), попадают в очередь повторения.',

  // Review
  reviewEmptyTitle: 'Ошибок для повторения пока нет',
  reviewEmptyText: 'Сыграйте несколько сдач: здесь появятся заявки, расходящиеся с системой, и карты, которые стоили вам взяток при той информации, что у вас была.',
  reviewDoneTitle: 'Всё повторено',
  reviewDoneText: (total: number, next: string) =>
    `${num(total, 'решение запланировано', 'решения запланированы', 'решений запланировано')} на потом (следующее — ${next}).`,
  sessionScore: (right: number, done: number) => `В этом сеансе: ${right}/${done} верно`,
  itemFrom: (date: string, board: number) => `из сдачи ${board}, ${date}`,
  itemFromDrill: (date: string) => `из упражнения по торговле, ${date}`,
  itemFromProblem: (date: string) => `из задачи, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'новое' : `шаг ${box} из ${last}`),
  dueLeft: (n: number) => `осталось: ${n}`,
  next: 'Дальше',
  nextIn: (days: number) =>
    days === 0 ? 'Ещё раз сегодня.' : days === 1 ? 'Следующее повторение — завтра.' : `Следующее повторение через ${num(days, 'день', 'дня', 'дней')}.`,
  again: 'Это решение будет возвращаться, пока вы не ответите правильно.',
  showBoard: 'Показать всю сдачу',
  simulating: 'Моделирую эту карту в раскладах, согласующихся с тем, что вы знаете…',
  bidPrompt: 'Ваша заявка.',
  youAre: (seat: string, vul: string) => `Вы — ${seat}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Верно: ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `Система заявляет ${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `Вашу заявку ${call} поймут так: ${name} — ${desc}`,
  atTableYouBid: (call: string) => `За столом вы заявили ${call}.`,
  cardPrompt: 'Ваша карта.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) => `${contract}, разыгрывает ${declarer}; взятка ${trick}, вы играете за ${seat}.`,
  dummyLabel: (seat: string) => `Болван (${seat})`,
  trickSoFar: 'В этой взятке:',
  yourHand: (seat: string) => `Ваша рука (${seat})`,
  cardRight: 'Верно — именно эта карта сыграла лучше всех.',
  cardWrong: (cards: string) => `Лучше всего: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `В ${layouts(n)}, согласующихся с торговлей и розыгрышем, ${best} приносила вашей линии в среднем ${bt} взятки (контракт ${declaring ? 'выполнялся' : 'садился'} в ${bs} случаев); ${yours}, ваша карта за столом, — в среднем ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `В ${layouts(n)}, согласующихся с торговлей и розыгрышем, ${best} приносила вашей линии в среднем ${bt} взятки (контракт ${declaring ? 'выполнялся' : 'садился'} в ${bs} случаев); ${yours}, ваш ответ в задаче, — в среднем ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) =>
    `${card}: в среднем ${t} взятки (${s}) в ${n} ${pl(n, 'новом раскладе', 'новых раскладах', 'новых раскладах')}.`,

  // Problems
  problems: {
    intro: 'Позиции из реальных сдач, где моделирование показывает, что одна карта явно лучше, — найдите её. Каждую сдачу торгует система, а боты разыгрывают её до вашего решения.',
    filterLabel: 'Тип задачи',
    filters: { mixed: 'Все типы', declarer: 'Розыгрыш', defense: 'Защита', lead: 'Первый ход' },
    kinds: { declarer: 'Розыгрыш', defense: 'Защита', lead: 'Первый ход' },
    session: (right: number, done: number) => `В этом сеансе: ${right}/${done} верно`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `За всё время: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Готово: розыгрыш ${declarer} · защита ${defense} · первый ход ${lead}`,
    boardLine: (board: number, vul: string) => `Сдача ${board}, ${vul}.`,

    // waiting for the first problem
    preparing: 'Готовлю задачу…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Сдаю карты для задачи на розыгрыш…' : kind === 'defense' ? 'Сдаю карты для задачи на защиту…' : 'Сдаю карты для задачи на первый ход…',
    stagePlaying: (trick: number) => `Боты играют взятку ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Проверяю ваше решение во взятке ${trick}: ${done} из ${total} ${pl(total, 'расклада', 'раскладов', 'раскладов')}…` : 'Проверяю сдачу…',
    tried: (n: number) => `Пока опробовано сдач: ${n}.`,
    waitNote: 'Сохраняются только позиции с однозначным ответом, поэтому может понадобиться несколько сдач. Задачи готовятся в фоне, пока эта вкладка открыта, и до 6 задач каждого типа сохраняются на будущее.',
    leadNote: 'Однозначные задачи на первый ход встречаются редко: подготовка может занять минуту-другую.',

    // the question
    qDeclarer: (contract: string, seat: string) => `Вы разыгрываете ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} разыгрывает ${contract}; вы в защите (${seat}).`,
    qLead: (contract: string, declarer: string) => `${declarer} разыгрывает ${contract}, первый ход за вами.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `Ваш первый ход — ${card}.` : who === 'partner' ? `Первый ход партнёра (${seat}) — ${card}.` : `Первый ход ${seatGen(seat)} — ${card}.`,
    tally: (trick: number, won: number, lost: number) => `Взятка ${trick}: пока у вашей линии ${num(won, 'взятка', 'взятки', 'взяток')}, у противников ${lost}.`,
    askLead: 'Какой картой вы пойдёте?',
    askPlan: (fromDummy: boolean) => `Спланируйте розыгрыш: какую карту сыграть ${fromDummy ? 'со стола' : 'из руки'}?`,
    askDeclarer: (fromDummy: boolean) => `Какую карту сыграть ${fromDummy ? 'со стола' : 'из руки'} сейчас?`,
    askDefence: 'Какую карту вы сыграете?',

    // the answer
    right: (cards: string) => `Верно! Лучше всего: ${cards}.`,
    wrong: (cards: string) => `На этот раз нет. Лучше всего: ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `В ${layouts(n)}, согласующихся с торговлей и розыгрышем, ${best} приносила вашей линии в среднем ${t} взятки, и контракт ${declaring ? 'выполнялся' : 'садился'} в ${s} случаев.`,
    yourLine: (card: string, t: string, s: string) => `Ваша карта ${card}: ${t} взятки, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `Лучшая из остальных — ${card}: ${t} взятки, ${s}.`,
    colCard: 'Карта',
    colTricks: 'Взятки',
    colMakes: 'Выполнение',
    colSets: 'Ремиз',
    addedToReview: 'Добавлено в очередь повторения: эта позиция будет возвращаться, пока вы не решите её правильно.',
    whyThisSuit: 'Почему эта масть:',
    next: 'Следующая задача',
    skip: 'Пропустить',
    showDeal: 'Показать всю сдачу',
    hideDeal: 'Скрыть сдачу',
    playFromStart: 'Сыграть эту сдачу с начала',
    declarerTag: 'разыгрывающий',
    dummyTag: 'болван',
  },

  // Skills
  skillsIntro: 'Точность ваших последних решений в каждой области. В торговле учитываются заявки, совпавшие с системой; в розыгрыше и защите — карты, которые не были явно хуже лучшей карты с учётом известной вам информации.',
  decisions,
  practise: 'Тренироваться',

  // Topics
  topicsIntro: 'Выберите тему, и следующие сдачи будут подобраны так, чтобы она встретилась, — за столом, с тренером, разбором и всем остальным, как обычно.',
  nowPractising: 'Сейчас тренируем:',
  stopTopic: 'Вернуться к обычным сдачам',
  dealAnother: 'Другая сдача',

  // History
  review: 'Разбор',
  replay: 'Сыграть снова',
  historyCols: ['Дата', 'Сдача', 'Контракт', 'Результат', 'Счёт С/Ю', 'IMP к пару', 'Заявки', 'Ошибки · потеряно взяток'],
  historyEmpty: 'Сдач пока нет. Каждая сыгранная сдача сохраняется здесь вместе с анализом.',
  historyNote: 'Ошибки: карты, которые были явно хуже с учётом известной вам информации. Потеряно взяток: сколько стоили ваши карты по сравнению с безошибочной игрой всех (в открытую) — иногда верная игра задним числом проигрывает.',
  backupTitle: 'Резервная копия',
  backupText: 'Ваш прогресс хранится только в этом браузере. Сохраните резервную копию, чтобы не потерять его или перенести на другое устройство.',
  exportBtn: 'Сохранить копию',
  importBtn: 'Восстановить из файла',
  restored: 'Прогресс восстановлен.',
  restoreFailed: 'Этот файл не является резервной копией Бридж-тренера.',
};
