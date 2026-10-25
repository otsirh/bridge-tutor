// Practice: the Training room — next steps, the review queue of your own
// mistakes, skills, practice topics, the board archive and backups.

import type { Seat, Vulnerability } from '../../core/cards';
import type { Text } from '../en';
import { boards, count, decisions, plural, seatAs } from './grammar';

/** "w 1 układzie", "w 200 układach" */
const layouts = (n: number) => `${n} ${n === 1 ? 'układzie' : 'układach'}`;

export const practice: Text['practice'] = {
  title: 'Trening',
  close: 'Zamknij',
  tabs: { today: 'Dziś', review: 'Powtórki', problems: 'Zadania', skills: 'Umiejętności', topics: 'Tematy', history: 'Historia' },

  skills: {
    'bid.opening': { name: 'Otwarcie licytacji', desc: 'Czy otworzyć i które otwarcie opisuje twoją rękę: jeden w kolor, 1BA, 2♣, słabe dwa i otwarcia blokujące.' },
    'bid.response': { name: 'Odpowiedzi', desc: 'Twoje odzywki po otwarciu partnera: podniesienia, nowe kolory, odpowiedzi w bez atu i wybór dograny.' },
    'bid.rebid': { name: 'Rebid otwierającego', desc: 'Druga odzywka po twoim otwarciu: pokaż siłę i układ, żeby partner mógł wybrać kontrakt.' },
    'bid.notrump': { name: 'Licytacja po otwarciach w bez atu', desc: 'Otwarcia 1BA i 2BA oraz odpowiedzi na nie: Stayman, transfery, inwity.' },
    'bid.competitive': { name: 'Licytacja konkurencyjna', desc: 'Gdy licytują też przeciwnicy: wejścia, kontry wywołujące i negatywne, dwukolorówki, wznowienie licytacji, walka o częściówkę.' },
    'bid.slam': { name: 'Licytacja szlemowa', desc: 'Jak rozpoznać szlemika, zapytać o asy i zatrzymać się w porę.' },
    'play.lead': { name: 'Pierwszy wist', desc: 'Wybór koloru i karty do wistu, zanim zobaczysz dziadka.' },
    'play.declarer': { name: 'Rozgrywka', desc: 'Liczenie i plan, impasy, wyrabianie kolorów, gospodarka atutami, dojścia.' },
    'play.defense': { name: 'Obrona', desc: 'Druga i trzecia ręka, sygnały, zmiana koloru, liczenie ręki rozgrywającego.' },
  },

  themes: {
    'openings': { name: 'Otwarcia', desc: 'Otwierasz licytację jako pierwszy.' },
    'responses': { name: 'Odpowiedzi na otwarcie partnera', desc: 'Partner otwiera, przeciwnicy milczą: znajdź odpowiedź.' },
    'rebids': { name: 'Rebid otwierającego', desc: 'Otwierasz, partner odpowiada: opisz swoją rękę.' },
    'notrump': { name: 'Licytacja po otwarciach w bez atu', desc: 'Twoja strona otwiera 1BA lub 2BA.' },
    'stayman-transfers': { name: 'Stayman i transfery', desc: 'Partner otwiera 1BA lub 2BA, a ty masz kolor starszy: Stayman albo transfer.' },
    'major-raises': { name: 'Podniesienia koloru starszego partnera', desc: 'Partner otwiera 1♥ lub 1♠, a ty masz poparcie: pojedyncze, inwitujące, Jacoby 2BA albo do dograny.' },
    'strong-2c': { name: 'Silne 2♣', desc: 'Twoja strona ma bardzo silną rękę, która otwiera 2♣.' },
    'preempts': { name: 'Słabe dwa i otwarcia blokujące', desc: 'Twoja strona otwiera z długim kolorem i słabą ręką.' },
    'competitive': { name: 'Walka o kontrakt', desc: 'Licytują obie strony: zdecyduj, kiedy licytować dalej, kontrować lub bronić.' },
    'overcalls': { name: 'Wejścia', desc: 'Przeciwnicy otwierają, a ty masz kolor do pokazania.' },
    'takeout-doubles': { name: 'Kontry wywołujące', desc: 'Kontra wywołująca albo odpowiedź na kontrę wywołującą partnera.' },
    'negative-doubles': { name: 'Kontry negatywne', desc: 'Partner otwiera, przeciwnik wchodzi, a ty kontrą pokazujesz niezalicytowany kolor starszy.' },
    'two-suiters': { name: 'Michaels i nienaturalne 2BA', desc: 'Twoja strona pokazuje dwukolorówkę jedną odzywką.' },
    'over-notrump': { name: 'Licytacja po ich 1BA', desc: 'Przeciwnicy otwierają 1BA, a twoja strona kontruje albo licytuje długi kolor.' },
    'over-preempts': { name: 'Licytacja po otwarciach blokujących', desc: 'Przeciwnicy otwierają słabym dwa albo blokiem, a twoja strona kontruje, wchodzi kolorem albo licytuje bez atu.' },
    'opening-doubled': { name: 'Gdy kontrują nasze otwarcie', desc: 'Twoja strona otwiera, a następny gracz kontruje: od razu pokaż siłę i fit.' },
    'balancing': { name: 'Wznowienie licytacji', desc: 'Przeciwnicy stają nisko, a ty jesteś na pozycji wznawiającej.' },
    'partscore-battle': { name: 'Walka o częściówkę', desc: 'Obie strony mają fit i walczą na wysokości dwóch i trzech (prawo totalnej liczby lew).' },
    'slam': { name: 'Szlemy', desc: 'Twoja strona ma siłę, żeby szukać szlemika.' },
    'declarer': { name: 'Rozgrywka', desc: 'Twoja strona gra kontrakt: policz, zaplanuj, potem graj.' },
    'nt-games': { name: '3BA jako rozgrywający', desc: 'Rozgrywasz 3BA: policz lewy, wyrób długie kolory, przepuszczaj, pilnuj dojść.' },
    'suit-games': { name: 'Dograne w kolor jako rozgrywający', desc: 'Rozgrywasz dograną w kolor: policz przegrywające, przebijaj, ściągaj atuty we właściwym momencie.' },
    'leads': { name: 'Pierwszy wist', desc: 'Rozgrywa Wschód, a ty wistujesz.' },
    'defense': { name: 'Obrona', desc: 'Przeciwnicy grają kontrakt, a ty bronisz razem z partnerem.' },
    'defense-nt': { name: 'Obrona przeciw bez atu', desc: 'Partner wistuje przeciw bez atu: gra trzeciej ręki i reguła 11.' },
    'defense-suit': { name: 'Obrona przeciw kontraktom kolorowym', desc: 'Obrona przeciw kontraktowi w kolor: ściągaj, przebijaj albo graj pasywnie.' },
  },

  dealing: (topic: string) => (topic ? `Rozdaję rozdanie na temat: ${topic}…` : 'Rozdaję…'),
  notEnough: 'jeszcze za mało decyzji',
  you: 'Ty',
  vul: (v: Vulnerability, seat: Seat) => {
    const ours = (seat & 1) === 0 ? 'NS' : 'EW';
    if (v === 'None') return 'obie strony przed partią';
    if (v === 'Both') return 'obie strony po partii';
    return v === ours ? 'wy po partii, oni przed' : 'oni po partii, wy przed';
  },

  topicChip: (topic: string) => `Temat: ${topic}`,
  importTitle: 'Zagraj rozdanie z innego źródła',
  importText: 'Wklej plik PBN, rozdanie z BBO (LIN lub link do przeglądarki rozdań), rozdanie w postaci „N:AKQ2.K73.J52.Q8 …” albo kod lub link z Trenera brydża.',
  importPlaceholder: '[Deal "N:…"]  ·  https://www.bridgebase.com/tools/handviewer.html?lin=…  ·  kod rozdania',
  importBtnPlay: 'Zagraj to rozdanie',
  importError: (code: string) => {
    if (code === 'empty') return 'Najpierw wklej rozdanie.';
    if (code === 'share') return 'To nie wygląda na rozdanie: sprawdź, czy skopiowano cały tekst lub link.';
    if (code === 'cards' || code === 'duplicate' || code === 'missing-hand') return 'Rozdanie jest niekompletne albo jakaś karta występuje dwa razy.';
    return 'Nie udało się odczytać rozdania.';
  },
  historyTitle: 'Twoje rozdania',
  practiseLesson: 'Przećwicz to przy stole',
  practiseLessonText: 'Rozdania, w których pojawia się ten temat, rozgrywane z trenerem.',
  lessonDone: 'Zaliczona',
  quizScore: (right: number, total: number) => `Za pierwszym razem: ${right} z ${total} dobrze`,
  quizRetry: 'Rozwiąż quiz jeszcze raz',
  practicedCount: (n: number) => `${boards(n)} ${plural(n, 'przećwiczone', 'przećwiczone', 'przećwiczonych')}`,

  // Today
  tileStreak: 'Dni z rzędu',
  tileStreakNote: (n: number) => (n ? 'tak trzymaj' : 'zagraj dziś rozdanie, żeby zacząć'),
  tileDue: 'Do powtórki',
  tileDueNote: (total: number) => `${decisions(total)} w kolejce powtórek`,
  tileBoards: 'Rozegrane rozdania',
  tileBoardsNote: (date: string) => `ostatnio ${date}`,
  tileBoardsNone: 'zagraj pierwsze rozdanie',
  tileBidding: 'Trafność licytacji',
  tileBiddingNote: (right: number, total: number) => `odzywki zgodne z systemem: ${right} z ${total}`,
  nextSteps: 'Co dalej',
  stepReviewTitle: (n: number) => `Powtórz ${count(n, 'błędną decyzję', 'błędne decyzje', 'błędnych decyzji')}`,
  stepReviewText: 'Twoje błędy wracają co kilka dni, dopóki nie odpowiesz dobrze — to najszybszy sposób, żeby ich nie powtarzać.',
  startReview: 'Zacznij powtórkę',
  stepWeakTitle: (skill: string) => `Popracuj nad: ${skill}`,
  stepWeakNew: 'Masz jeszcze mało decyzji tego rodzaju. Zagraj kilka rozdań przygotowanych pod ten temat.',
  stepWeakText: (pct: string, n: number) =>
    `${pct} dobrych odpowiedzi w ${n === 1 ? 'ostatniej decyzji' : `ostatnich ${n} decyzjach`} — to twój najsłabszy obszar. Ćwicz rozdania przygotowane pod ten temat i przeczytaj lekcję, jeśli jeszcze jej nie znasz.`,
  practiseAtTable: 'Ćwicz przy stole',
  readLesson: (title: string) => `Przeczytaj: ${title}`,
  stepCourseTitle: (title: string) => `Kontynuuj kurs: ${title}`,
  stepCourseText: (i: number, total: number) => `Lekcja ${i} z ${total}. Lekcja jest zaliczona, gdy za pierwszym razem odpowiesz dobrze na 80% pytań quizu.`,
  openLesson: 'Otwórz lekcję',
  stepProblemsTitle: 'Znajdź właściwe zagranie',
  stepProblemsText: 'Zadania z prawdziwych rozdań, w których jedna karta jest wyraźnie najlepsza: rozgrywka, obrona i pierwszy wist.',
  openProblems: 'Rozwiązuj zadania',
  howItWorks: 'Każde ukończone rozdanie zapisuje się razem z analizą. Odzywki niezgodne z systemem i karty wyraźnie gorsze przy informacjach dostępnych w danej chwili (nie tylko z perspektywy czasu) trafiają do kolejki powtórek.',

  // Review
  reviewEmptyTitle: 'Na razie nie ma błędów do powtórki',
  reviewEmptyText: 'Zagraj kilka rozdań: pojawią się tu odzywki niezgodne z systemem i karty, które kosztowały cię lewy przy informacjach dostępnych w danej chwili.',
  reviewDoneTitle: 'Wszystko powtórzone',
  reviewDoneText: (total: number, next: string) =>
    `${decisions(total)} ${plural(total, 'czeka', 'czekają', 'czeka')} na później (następna ${next}).`,
  sessionScore: (right: number, done: number) => `Ta sesja: ${right}/${done} dobrze`,
  itemFrom: (date: string, board: number) => `z rozdania ${board}, ${date}`,
  freshDeal: 'Nowe rozdanie, ta sama zasada',
  itemFromDrill: (date: string) => `z ćwiczenia licytacji, ${date}`,
  itemFromProblem: (date: string) => `z zadania, ${date}`,
  itemBox: (box: number, last: number) => (box === 0 ? 'nowa' : `etap ${box} z ${last}`),
  dueLeft: (n: number) => `${n} do powtórki`,
  next: 'Dalej',
  nextIn: (days: number) =>
    days === 0 ? 'Jeszcze raz dziś.' : days === 1 ? 'Następna powtórka jutro.' : `Następna powtórka za ${count(days, 'dzień', 'dni', 'dni')}.`,
  again: 'Wróci, dopóki nie odpowiesz dobrze.',
  showBoard: 'Pokaż całe rozdanie',
  simulating: 'Symuluję tę kartę w układach zgodnych z tym, co wiesz…',
  bidPrompt: 'Twoja odzywka.',
  youAre: (seat: string, vul: string) => `Grasz na pozycji ${seatAs(seat, 'gen')}, ${vul}.`,
  bidRight: (call: string, rule: string) => `Dobrze: ${call} — ${rule}`,
  bidWrong: (call: string, rule: string) => `System licytuje ${call} — ${rule}`,
  yourCallMeans: (call: string, name: string, desc: string) => `Twoje ${call} zostanie zrozumiane jako ${name}: ${desc}`,
  atTableYouBid: (call: string) => `Przy stole twoja odzywka to ${call}.`,
  cardPrompt: 'Twoja karta.',
  cardSituation: (contract: string, declarer: string, seat: string, trick: number) =>
    `${contract}, rozgrywa ${declarer}; grasz kartą ${seatAs(seat, 'gen')} w ${trick}. lewie.`,
  dummyLabel: (seat: string) => `Dziadek (${seat})`,
  trickSoFar: 'Ta lewa:',
  yourHand: (seat: string) => `Twoja ręka (${seat})`,
  cardRight: 'Dobrze — ta karta wypadła najlepiej.',
  cardWrong: (cards: string) => `Najlepsza: ${cards}`,
  cardSim: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `W ${layouts(n)} zgodnych z licytacją i rozgrywką ${best} daje twojej stronie średnio ${bt} lewy (${declaring ? 'kontrakt wychodzi' : 'kontrakt pada'} w ${bs} przypadków); ${yours}, twoja karta przy stole — średnio ${mt} (${ms}).`,
  cardSimProblem: (n: number, best: string, bt: string, bs: string, yours: string, mt: string, ms: string, declaring: boolean) =>
    `W ${layouts(n)} zgodnych z licytacją i rozgrywką ${best} daje twojej stronie średnio ${bt} lewy (${declaring ? 'kontrakt wychodzi' : 'kontrakt pada'} w ${bs} przypadków); ${yours}, twoja odpowiedź w zadaniu — średnio ${mt} (${ms}).`,
  cardFresh: (card: string, t: string, s: string, n: number) => `${card}: średnio ${t} lewy (${s}) w ${n} nowych ${n === 1 ? 'układzie' : 'układach'}.`,

  // Problems
  problems: {
    intro: 'Pozycje z prawdziwych rozdań, w których symulacja wskazuje jedną wyraźnie najlepszą kartę — znajdź ją. Każde rozdanie licytuje system, a boty rozgrywają je aż do twojej decyzji.',
    filterLabel: 'Rodzaj zadania',
    filters: { mixed: 'Różne', declarer: 'Rozgrywka', defense: 'Obrona', lead: 'Pierwszy wist' },
    kinds: { declarer: 'Rozgrywka', defense: 'Obrona', lead: 'Pierwszy wist' },
    session: (right: number, done: number) => `Ta sesja: ${right}/${done} dobrze`,
    kindScore: (kind: string, right: number, done: number) => `${kind}: ${right}/${done}`,
    allTime: (right: number, done: number) => `Łącznie: ${right}/${done}`,
    ready: (declarer: number, defense: number, lead: number) => `Gotowe: rozgrywka ${declarer} · obrona ${defense} · wist ${lead}`,
    boardLine: (board: number, vul: string) => `Rozdanie ${board}, ${vul}.`,

    preparing: 'Przygotowuję zadanie…',
    stageDealing: (kind: 'declarer' | 'defense' | 'lead') =>
      kind === 'declarer' ? 'Rozdaję rozdanie do rozgrywki…' : kind === 'defense' ? 'Rozdaję rozdanie do obrony…' : 'Rozdaję rozdanie z wistem do wybrania…',
    stagePlaying: (trick: number) => `Boty grają lewę ${trick}…`,
    stageTesting: (trick: number, done: number, total: number) =>
      total ? `Sprawdzam twoją decyzję w lewie ${trick}: ${done} z ${total} układów…` : 'Sprawdzam rozdanie…',
    tried: (n: number) => `Sprawdzono już ${boards(n)}.`,
    waitNote: 'Zostają tylko pozycje z jednoznaczną odpowiedzią, więc może to zająć kilka rozdań. Zadania przygotowują się w tle, gdy ta karta przeglądarki jest otwarta, a do następnego razu zostaje do 6 zadań każdego rodzaju.',
    leadNote: 'Wyraźne zadania na pierwszy wist zdarzają się rzadko: przygotowanie jednego może potrwać minutę lub dwie.',

    qDeclarer: (contract: string, seat: string) => `Rozgrywasz ${contract} (${seat}).`,
    qDefence: (contract: string, declarer: string, seat: string) => `${declarer} rozgrywa ${contract}; bronisz jako ${seat}.`,
    qLead: (contract: string, declarer: string) => `${declarer} rozgrywa ${contract}, a ty wistujesz.`,
    led: (who: 'you' | 'partner' | 'opponent', seat: string, card: string) =>
      who === 'you' ? `Twój wist: ${card}.` : who === 'partner' ? `Wist partnera (${seat}): ${card}.` : `Wist ${seatAs(seat, 'gen')}: ${card}.`,
    tally: (trick: number, won: number, lost: number) =>
      `Lewa ${trick}: na razie twoja strona ma ${count(won, 'lewę', 'lewy', 'lew')}, przeciwnicy ${lost}.`,
    askLead: 'Którą kartą wistujesz?',
    askPlan: (fromDummy: boolean) => `Zaplanuj rozgrywkę: którą kartę ${fromDummy ? 'ze stołu' : 'z ręki'}?`,
    askDeclarer: (fromDummy: boolean) => `Którą kartę teraz ${fromDummy ? 'ze stołu' : 'z ręki'}?`,
    askDefence: 'Którą kartę zagrywasz?',

    right: (cards: string) => `Dobrze! Najlepsza: ${cards}.`,
    wrong: (cards: string) => `Tym razem nie. Najlepsza: ${cards}.`,
    simLine: (n: number, best: string, t: string, s: string, declaring: boolean) =>
      `W ${layouts(n)} zgodnych z licytacją i dotychczasową rozgrywką ${best} daje twojej stronie średnio ${t} lewy, a ${declaring ? 'kontrakt wychodzi' : 'kontrakt pada'} w ${s} przypadków.`,
    yourLine: (card: string, t: string, s: string) => `Twoja karta, ${card}: ${t} lewy, ${s}.`,
    nextBest: (card: string, t: string, s: string) => `Najlepsza z pozostałych, ${card}: ${t} lewy, ${s}.`,
    colCard: 'Karta',
    colTricks: 'Lewy',
    colMakes: 'Wychodzi',
    colSets: 'Pada',
    addedToReview: 'Dodano do kolejki powtórek: ta pozycja będzie wracać, dopóki nie odpowiesz dobrze.',
    whyThisSuit: 'Dlaczego ten kolor:',
    next: 'Następne zadanie',
    skip: 'Pomiń',
    showDeal: 'Pokaż całe rozdanie',
    hideDeal: 'Ukryj rozdanie',
    playFromStart: 'Zagraj to rozdanie od początku',
    declarerTag: 'rozgrywający',
    dummyTag: 'dziadek',
  },

  // Skills
  skillsIntro: 'Trafność twoich ostatnich decyzji w każdym obszarze. W licytacji liczą się odzywki zgodne z systemem; w rozgrywce — karty, które nie były wyraźnie gorsze od najlepszej przy informacjach dostępnych w danej chwili.',
  decisions: (n: number) => decisions(n),
  practise: 'Ćwicz',

  // Topics
  topicsIntro: 'Wybierz temat, a kolejne rozdania będą tak rozdawane, żeby się pojawił — przy stole, z trenerem, analizą i wszystkim innym jak zwykle.',
  nowPractising: 'Teraz ćwiczysz:',
  stopTopic: 'Wróć do zwykłych rozdań',
  dealAnother: 'Rozdaj następne',

  // History
  review: 'Analiza',
  replay: 'Zagraj ponownie',
  historyCols: ['Data', 'Rozdanie', 'Kontrakt', 'Wynik', 'Zapis NS', 'IMP względem para', 'Odzywki', 'Błędy w grze · stracone lewy'],
  historyEmpty: 'Nie ma jeszcze rozdań. Każde ukończone rozdanie trafia tutaj razem z analizą.',
  historyNote: 'Błędy w grze: karty wyraźnie gorsze przy informacjach dostępnych w danej chwili. Stracone lewy: ile kosztowały twoje karty w porównaniu z bezbłędną grą wszystkich (w otwarte karty) — czasem właściwe zagranie przegrywa z perspektywy czasu.',
  backupTitle: 'Kopia zapasowa',
  backupText: 'Twoje postępy są zapisane tylko w tej przeglądarce. Zapisz kopię zapasową, żeby je zabezpieczyć albo przenieść na inne urządzenie.',
  exportBtn: 'Zapisz kopię',
  importBtn: 'Przywróć z pliku',
  restored: 'Postępy przywrócone.',
  restoreFailed: 'Ten plik nie jest kopią zapasową Trenera brydża.',
};
