// Tutor: play principles, declarer planning, leads, signals, hand evaluation, scoring.
//
// Suits and seats arrive as indexes, cards as card ids and ranks as numbers;
// the Polish forms come from ./grammar. Holdings ("KJ104") and split odds
// ("3-2 68%, …") arrive ready-made.

import { type Card, SUIT_SYMBOLS, cardName, rankLabel, rankOf, suitOf } from '../../core/cards';
import type { Height, Look } from '../../engine/signalling';
import type { Text } from '../en';
import { core } from './core';
import { SEAT, SUIT, adj, cards, count, nSuit, plural } from './grammar';

/** Leading toward the honours in the other hand: "w kierunku …" (genitive). */
const TOWARD = { aq: 'A-Q', king: 'króla', queen: 'damy', honours: 'honorów' };
/** "Masz asa / króla / damę." */
const HONOUR: Record<number, string> = { 14: 'asa', 13: 'króla', 12: 'damę' };
/** Length as the first part of an adjective: "trzy|kartowy". */
const LEN = ['zero', 'jedno', 'dwu', 'trzy', 'cztero', 'pięcio', 'sześcio', 'siedmio', 'ośmio', 'dziewięcio', 'dziesięcio', 'jedenasto', 'dwunasto', 'trzynasto'];
/** "2 lub 4", "1, 3 lub 5" (the three shortest). */
const orList = (ns: number[]) => {
  const xs = ns.slice(0, 3);
  return xs.length > 1 ? `${xs.slice(0, -1).join(', ')} lub ${xs[xs.length - 1]}` : String(xs[0]);
};
/** How a signal card looks from across the table: "Najpierw wyższa, potem niższa (♣8, potem ♣3)", "♣7 wygląda na wysoką (…)". */
const looks = (card: Card, l: Look) =>
  l.echo !== null
    ? `${l.height === 'high' ? 'Najpierw wyższa, potem niższa' : 'Najpierw niższa, potem wyższa'} (${cardName(card)}, potem ${cardName(l.echo)})`
    : l.sure && rankOf(card) === 2
      ? `${cardName(card)} jest zawsze niska`
      : l.sure
        ? `${cardName(card)} jest ${l.height === 'high' ? 'wysoka' : 'niska'} (żadna ${l.height === 'high' ? 'wyższa' : 'niższa'} blotka nie jest już ukryta)`
        : `${cardName(card)} wygląda na ${l.height === 'high' ? 'wysoką' : 'niską'} (część ${l.height === 'high' ? 'niższych' : 'wyższych'} blotek jest jeszcze ukryta)`;

export const tutor: Text['tutor'] = {
  // -------------------------------------------------------------------------
  // src/tutor/principles.ts
  principles: {
    openingLead: {
      title: 'Pierwszy wist',
      notStandard: (holding: string, rank: number, why: string) => `Z ${holding} standardowo wistuje się ${rankLabel(rank)}: ${why}`,
    },

    drawTrumps: {
      title: 'Ściąganie atutów',
      text: 'Grając w atuty, odbierasz je obrońcom, żeby nie mogli przebijać twoich lew. Ściągaj je wcześnie, chyba że atuty dziadka są potrzebne do przebitek.',
    },
    trumpsDrawn: {
      title: 'Atuty już ściągnięte',
      text: 'Obrońcy nie mają już atutów, więc ta karta niczego nie ściąga: atut weźmie lewę w jednej z twoich rąk — przyda się jako dojście — a każdy kolejny atut zmusza obu obrońców do zrzutki.',
    },
    unblock: {
      title: 'Odblokowanie',
      text: 'Najpierw ściągnij wysoką kartę z krótszej ręki, żeby lewę wzięła potem ręka dłuższa i mogła odegrać resztę koloru.',
    },
    cash: {
      title: 'Ściągnięcie lewy',
      declarer: (card: Card) => `${cardName(card)} to najwyższa pozostała karta w ${SUIT.loc[suitOf(card)]}: weźmie lewę, chyba że ktoś przebije.`,
      defender: 'Weź pewną lewę, zanim rozgrywający zrzuci przegrywające na długim kolorze dziadka.',
    },
    crossToOtherHand: {
      title: 'Przejście do drugiej ręki',
      text: 'Blotka do wysokiej karty w drugiej ręce służy jako dojście — następną kartę możesz zagrać już stamtąd.',
    },
    leadTowardHonours: {
      title: 'Gra w kierunku honorów',
      text: (toward: 'aq' | 'king' | 'queen' | 'honours') =>
        `Zagraj blotkę w kierunku ${TOWARD[toward]}, żeby obrońca po twojej lewej musiał dołożyć kartę, zanim wybierzesz kartę z drugiej ręki — na tym opiera się impas.`,
    },
    develop: {
      title: 'Wyrabianie koloru',
      text: 'Oddając teraz lewę w tym kolorze, wyrabiasz pozostałe karty, póki jeszcze kontrolujesz inne kolory.',
    },

    trumpLead: {
      title: 'Wyjście w atu',
      text: 'Wyjście w atu ogranicza przebitki rozgrywającego u dziadka — szczególnie skuteczne, gdy dziadek jest krótki w kolorze bocznym.',
    },
    lookForRuff: {
      title: 'Szukanie przebitki',
      text: 'Wyjście w krótki kolor w nadziei, że partner dojdzie do ręki i da ci przebitkę.',
    },
    returnPartner: {
      title: 'Powrót w kolor partnera',
      text: 'Partner wybrał ten kolor: grając go z powrotem, kontynuujesz plan partnera — wyrobienie jego długich kart albo danie mu przebitki — zamiast otwierać rozgrywającemu nowy kolor.',
    },
    continueSuit: {
      title: 'Kontynuacja własnego koloru',
      text: 'To kolor z twojego wcześniejszego wyjścia: grając go dalej, pracujesz nad lewami, które twoja strona w nim wyrabia, zamiast otwierać rozgrywającemu nowy kolor.',
    },
    switchSuits: {
      title: 'Zmiana koloru',
      text: 'Graj przez siłę rozgrywającego albo w słabość dziadka: kolor powinien zagrać obrońca siedzący przed silną ręką.',
    },

    overruff: {
      title: 'Nadbitka',
      text: 'Przebicie wyżej niż zagrany już atut bierze lewę.',
    },
    underruff: {
      title: 'Podbitka',
      text: (forced: boolean) =>
        forced
          ? 'W lewie leży już wyższy atut, więc twój nie może jej wziąć — ale zostały ci same atuty, więc musisz dołożyć jeden z nich.'
          : 'W lewie leży już wyższy atut, więc twój nie może jej wziąć: podbitka marnuje atut. Zrzuć raczej przegrywającą z koloru bocznego, chyba że musisz zatrzymać wszystkie karty boczne.',
    },
    ruffPartnersWinner: {
      title: 'Przebicie lewy partnera',
      text: 'Zwykle strata atutu: partner i tak brał tę lewę.',
    },
    ruff: {
      title: 'Przebitka',
      defender: 'Nie masz już zagranego koloru, więc przebitka bierze lewę.',
      short: 'Ta ręka nie ma więcej atutów niż druga, więc przebitka to dodatkowa lewa: atuty drugiej ręki nadal wezmą własne lewy.',
      forced: 'Nie masz już koloru, w który wyszli obrońcy, więc przebij, żeby wziąć lewę. Przebitka w ręce z długimi atutami nie daje dodatkowej lewy i skraca twoje atuty: jeśli obrońcy mogą dalej zmuszać cię do przebijania, możesz stracić kontrolę.',
      long: 'Przebitka w ręce z większą liczbą atutów zużywa atut, który i tak wziąłby lewę, więc sama w sobie nic nie daje — pomaga, gdy wyrabia resztę koloru albo daje wejście do tej ręki.',
    },
    discard: {
      title: 'Zrzutka',
      defender: 'Zrzucaj z koloru, którego nie potrzebujesz, a zachowaj długość w kolorach, w których musisz pilnować długich kart rozgrywającego lub dziadka.',
      declarer: 'Zrzuć przegrywającą z koloru, który nie da lew, i zachowaj karty, które mogą się jeszcze przydać.',
    },

    countSignal: {
      title: 'Sygnał ilościowy',
      text: (n: number, suit: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Rozgrywający gra ten kolor, a partner czeka na sygnał ilościowy: mając ${nSuit(n, suit)} (liczba ${n % 2 ? 'nieparzysta' : 'parzysta'}), standardowo zagrywasz ${cardName(best)}${n % 2 ? '' : ', a potem niższą kartę (najpierw wyższa, potem niższa)'}. ${cardName(card)} pokazałaby liczbę ${n % 2 ? 'parzystą' : 'nieparzystą'}.`
          : n % 2
            ? `Rozgrywający gra ten kolor, więc pokaż ilość: mając ${nSuit(n, suit)} (liczba nieparzysta), zagraj najniższą kartę, ${cardName(card)}. Partner dowie się wtedy, ile kart ma rozgrywający i kiedy wziąć asa.`
            : `Rozgrywający gra ten kolor, więc pokaż ilość: mając ${nSuit(n, suit)} (liczba parzysta), zagraj najpierw wyższą, potem niższą kartę — teraz ${cardName(card)}, następnym razem niższą. Partner dowie się wtedy, ile kart ma rozgrywający i kiedy wziąć asa.`,
    },
    attitudeSignal: {
      title: 'Sygnał zachęcający/zniechęcający',
      text: (reason: 'honour' | 'ruff' | null, honour: number, card: Card, best: Card, right: boolean) =>
        !right
          ? `Partner wyszedł w ten kolor i czeka na twój sygnał: ${reason ? 'chcesz' : 'nie chcesz'} kontynuacji, więc standardowa karta to ${cardName(best)}. ${cardName(card)} mówi coś przeciwnego.`
          : reason === 'honour'
            ? `Partner wyszedł w ten kolor: daj sygnał. Masz ${HONOUR[honour]}, więc zachęć najwyższą blotką, jaką możesz oddać, ${cardName(card)}, a partner będzie kontynuował.`
            : reason === 'ruff'
              ? `Partner wyszedł w ten kolor: daj sygnał. Z dubla zacznij od wyższej karty (${cardName(card)}): najpierw wyższa, potem niższa prosi partnera o kontynuację, a trzecią rundę przebijesz.`
              : `Partner wyszedł w ten kolor: daj sygnał. Nie ma tu czego kontynuować, więc zniechęć najniższą kartą, ${cardName(card)}; partner poszuka zmiany koloru.`,
    },
    discardSignal: {
      title: 'Zrzutka sygnałowa',
      text: (want: boolean, clear: boolean, suit: number, card: Card, best: Card, right: boolean) =>
        want && !clear
          ? `Chcesz wyjścia w ${SUIT.nom[suit]}, ale żadna blotka w ${SUIT.loc[suit]}, którą możesz oddać, nie jest dość wysoka, żeby zachęcić; zrzuć raczej niską kartę z koloru, którego nie chcesz.`
          : want
            ? right
              ? `Wysoka zrzutka zachęca: ${cardName(card)} prosi partnera o wyjście w ${SUIT.nom[suit]}, gdzie masz siłę.`
              : `Chcesz wyjścia w ${SUIT.nom[suit]}, ale ${cardName(card)} to twoja najniższa karta i zniechęca; wysoka (${cardName(best)}) by zachęciła — albo zrzuć niską kartę z koloru, którego nie chcesz.`
            : right
              ? `Niska zrzutka zniechęca: ${cardName(card)} mówi partnerowi, żeby nie grał w ${SUIT.nom[suit]}.`
              : `Wysoka zrzutka prosi partnera o wyjście w ${SUIT.nom[suit]}, czego nie chcesz; zrzuć raczej najniższą kartę (${cardName(best)}).`,
    },
    preferenceSignal: {
      title: 'Sygnał preferencyjny',
      text: (want: Height, sides: number[], card: Card, best: Card, right: boolean) =>
        !right
          ? want === 'middle'
            ? `Partner to przebije i odczyta twoją kartę jako sygnał preferencyjny; bez preferencji zagraj kartę średnią, np. ${cardName(best)}.`
            : `Partner to przebije i odczyta twoją kartę jako sygnał preferencyjny: chcesz powrotu w ${SUIT.nom[want === 'high' ? sides[1] : sides[0]]}, więc zagraj ${cardName(best)}.`
          : want === 'middle'
            ? 'Partner to przebije, a twoja karta mówi mu też, w jaki kolor wrócić: bez preferencji zagraj kartę średnią — ani wysoką, ani niską.'
            : `Partner to przebije, a twoja karta mówi mu też, w jaki kolor wrócić: ${want === 'high' ? 'wysoka' : 'niska'} karta prosi o ${SUIT.nom[want === 'high' ? sides[1] : sides[0]]} (${want === 'high' ? 'wyższy' : 'niższy'} z dwóch pozostałych kolorów bocznych), w których masz asa.`,
    },

    coverHonour: {
      title: 'Przykryj honor honorem',
      text: 'Przykrycie zmusza rozgrywającego do wydania dwóch wysokich kart na jedną lewę, co może awansować niższą kartę w twojej ręce lub u partnera.',
      declarer: 'Przykrycie zmusza obrońców do wydania dwóch wysokich kart na jedną lewę, co może awansować niższą kartę po twojej stronie.',
    },
    secondHandLow: {
      title: 'Druga ręka nisko',
      text: 'Po tobie grają jeszcze partner wychodzącego i twój partner, więc niska karta zachowuje twoją wysoką kartę, żeby później pobiła coś większego.',
    },
    sureTrick: {
      title: 'Pewna lewa',
      text: (card: Card) => `${cardName(card)} to najwyższa pozostała karta w tym kolorze.`,
      safe: (card: Card) => `${cardName(card)} weźmie lewę, chyba że ktoś przebije: obrońca, który jeszcze gra, nie może mieć wyższej karty w tym kolorze.`,
    },
    finesse: {
      title: 'Impas',
      text: (card: Card) => `${cardName(card)} weźmie lewę tylko wtedy, gdy brakujące ci wyższe karty w tym kolorze są u obrońcy, który już zagrał — to impas. Jeśli obrońca, który jeszcze gra, ma jedną z nich, pobije twoją kartę.`,
    },
    splitHonours: {
      title: 'Rozdzielenie honorów',
      text: 'Zagranie jednego z sąsiednich honorów nie pozwala rozgrywającemu tanio wziąć lewy niższą kartą.',
    },

    partnerWinning: {
      title: 'Partner bierze lewę',
      third: 'Karta partnera już bierze lewę, więc zagraj nisko (albo daj sygnał).',
      fourth: 'Nie przejmuj lewy partnera: zagraj najniższą kartę.',
      declarer: 'Karta twojej strony na razie bierze lewę: zagraj nisko i zachowaj wysokie karty.',
    },
    overtake: {
      title: 'Przejęcie',
      text: 'Karta twojej strony już brała lewę: przejęcie kosztuje drugą wysoką kartę w tej samej lewie, więc rób to tylko, żeby odblokować kolor albo dojść do tej ręki.',
    },
    thirdHandHighEquals: {
      title: 'Trzecia ręka wysoko — najniższa z równych',
      text: 'Z sąsiednich kart zagraj tańszą: partner wywnioskuje wtedy, gdzie jest wyższa.',
      wrong: (card: Card, cheapest: Card) => `${cardName(cheapest)} zrobi to samo co ${cardName(card)}: z sąsiednich kart zagraj tańszą, żeby partner mógł wywnioskować, gdzie jest wyższa.`,
    },
    thirdHandHigh: {
      title: 'Trzecia ręka wysoko',
      text: 'Gdy karta partnera nie bierze lewy, zagraj wysoko, żeby wziąć lewę albo wymusić dużą kartę.',
    },
    cantWin: {
      title: 'Tej lewy nie weźmiesz',
      third: 'Zagraj najniższą kartę (albo daj sygnał zachęcający lub zniechęcający, jeśli partner wyszedł w ten kolor).',
      fourth: 'Zagraj najniższą kartę w kolorze.',
    },
    duck: {
      title: 'Przepuszczenie',
      text: 'Możesz wziąć tę lewę, ale ją oddajesz: przepuszczenie zachowuje wysoką kartę na później — żeby utrzymać zatrzymanie, zachować dojście albo komunikację w kolorze.',
    },
    winCheaply: {
      title: 'Bierz tanio',
      text: 'Czwarta ręka: weź lewę najmniejszą kartą, która wystarczy.',
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/planner.ts
  plan: {
    allWinners: 'same lewy z góry',
    topTricks: (n: number) => `${count(n, 'lewa', 'lewy', 'lew')} z góry`,
    noTopTricks: 'brak lew z góry',
    cardsOut: (n: number) => cards(n),

    ntEnough: (total: number, need: number) =>
      `Masz ${count(total, 'lewę', 'lewy', 'lew')} z góry, a potrzebujesz ${need}: bierz swoje lewy — i nie zablokuj koloru (najpierw ściągaj wysokie karty z krótszej ręki).`,
    ntShort: (total: number, need: number) =>
      `Masz ${count(total, 'lewę', 'lewy', 'lew')} z góry, a potrzebujesz ${need}: znajdź jeszcze ${count(need - total, 'lewę', 'lewy', 'lew')}, zanim obrońcy wyrobią swój kolor.`,
    losersOk: (losers: number, allowed: number) =>
      losers === 0
        ? 'Nie ma się czym martwić, przegrywających brak: ściągnij atuty i bierz swoje lewy, chyba że wcześniej trzeba coś przebić lub zrzucić.'
        : `Około ${count(losers, 'przegrywającej', 'przegrywających', 'przegrywających')}, a możesz oddać ${allowed}: ściągnij atuty i bierz swoje lewy, chyba że wcześniej trzeba coś przebić lub zrzucić.`,
    tooManyLosers: (losers: number, allowed: number) =>
      `Około ${count(losers, 'przegrywającej', 'przegrywających', 'przegrywających')}, a możesz oddać tylko ${allowed}: musisz pozbyć się ${losers - allowed === 1 ? 'jednej' : losers - allowed} (przebić je, zrzucić na dodatkowe lewy albo zaimpasować).`,

    establish: (suit: number, total: number, missing: number, odds: string, extra: number) =>
      `Wyrób ${SUIT.nom[suit]}: w obu rękach masz ${cards(total)} (${missing} u przeciwników, ${odds}), więc długie ${SUIT_SYMBOLS[suit]} mogą dać około ${count(extra, 'dodatkowej lewy', 'dodatkowych lew', 'dodatkowych lew')}.`,
    finesseAQ: (suit: number, holding: string) =>
      `Impas w ${SUIT.loc[suit]}: zagraj w kierunku A-Q (${holding}) i jeśli król się nie pokaże, dołóż damę — około 50%.`,
    leadTowardKing: (suit: number, holding: string) =>
      `W ${SUIT.loc[suit]} zagraj w kierunku króla (${holding}): weźmie lewę, jeśli as jest u lewego przeciwnika — około 50%.`,
    doubleFinesse: (suit: number) =>
      `Podwójny impas w ${SUIT.loc[suit]} (A-J-10): impasuj dwa razy; dwie lewy weźmiesz w 76% przypadków.`,
    knockOutAce: (suit: number, withJack: boolean) =>
      `Wybij asa ${SUIT.one[suit]}: K-Q${withJack ? '-J' : ''} da ci wtedy ${withJack ? 'co najmniej 2 lewy' : 'co najmniej 1 lewę'}.`,
    ntDevelopEarly: 'W bez atu wyrabiaj dodatkowe lewy wcześnie, póki kontrolujesz kolory — i policz, ile razy możesz oddać rękę przeciwnikom.',
    ruffInShortHand: (inDummy: boolean, suits: { suit: number; len: number }[]) =>
      `Przebijaj przegrywające ${inDummy ? 'u dziadka' : 'w swojej ręce'} — tam atuty są krótsze: ${suits.map(x => `${SUIT_SYMBOLS[x.suit]} (${x.len || 'renons'})`).join(', ')}. Przebitka w krótszej ręce to dodatkowa lewa; przebitka w ręce z długimi atutami — nie.`,
    discardOnWinners: (inDummy: boolean, extra: number, suit: number, loserSuits: number[]) =>
      `Zrzutki: ${inDummy ? 'dziadek ma' : 'masz'} ${count(extra, 'dodatkową lewę', 'dodatkowe lewy', 'dodatkowych lew')} w ${SUIT_SYMBOLS[suit]} — zrzuć na ${extra === 1 ? 'nią' : 'nie'} przegrywające ${loserSuits.map(s => SUIT_SYMBOLS[s]).join('/')} z drugiej ręki (zwykle po ściągnięciu atutów).`,
    trumpsOut: (n: number, odds: string) =>
      `Atuty: u przeciwników ${plural(n, 'jest', 'są', 'jest')} ${count(n, 'atut', 'atuty', 'atutów')} (${odds}). Ściągnij ${n === 1 ? 'go' : 'je'} wcześnie, chyba że atuty dziadka są potrzebne do przebitek albo najpierw musisz wyrobić kolor boczny.`,
  },

  // -------------------------------------------------------------------------
  // src/engine/leads.ts
  leads: {
    card: {
      singleton: 'Singiel: wistuj nim.',
      ak: 'As z A-K: zostajesz w ręce i widzisz dziadka, zanim zdecydujesz, co dalej.',
      doubleton: 'Wyższa z dubla: najpierw wysoka, potem niska (najpierw wyższa, potem niższa pokazuje dubel i może dać ci przebitkę).',
      sequence: (holding: string) => `Najwyższa z sekwensu (${holding}): obiecuje kartę tuż poniżej i zaprzecza posiadaniu karty powyżej.`,
      interior: (holding: string, rank: number) => `Sekwens wewnętrzny (${holding}): wistuj najwyższą z sąsiednich kart, ${rankLabel(rank)}.`,
      touching: (holding: string) => `Najwyższy z sąsiednich honorów (${holding}).`,
      nothing: 'Najwyższa z trzech blotek: mówi partnerowi, że nie masz tu honoru.',
      small: 'Z czterech lub więcej blotek wistuj drugą od góry, żeby partner nie przypisał ci honoru.',
      partnerLow: 'Nisko z honoru z dwiema blotkami w kolorze partnera (trzecia od góry).',
      fourth: (holding: string) => `Czwarta od góry z najdłuższego i najsilniejszego koloru (${holding}). Partner może zastosować regułę 11.`,
      third: (holding: string) => `Trzecia od góry z honoru z dwiema blotkami (${holding}): zachowaj honor, żeby pobić nim kartę rozgrywającego.`,
    },
    suit: {
      partnerBid: (suit: number) => `Partner licytował ${SUIT.nom[suit]}: wist w kolor partnera rzadko jest błędem i zwykle jest najlepszy.`,
      supported: (suit: number) => `Partner poparł twoje ${SUIT.nom[suit]}: wist w kolor waszej strony jest naturalny.`,
      theyBid: (suit: number) => `Przeciwnicy licytowali ${SUIT.nom[suit]} — wist w ich kolor zwykle pomaga rozgrywającemu.`,
      slamRisky: 'Przeciw szlemowi wist spod honoru bez sąsiednich kart często daje rozgrywającemu lewę, której inaczej by nie wziął.',
      slamSafe: 'Przeciw szlemowi wistuj bezpiecznie: z blotek niczego nie oddajesz, a jedna oddana lewa to zwykle cały kontrakt.',
      ntLong: (suit: number, n: number) =>
        `Przeciw bez atu wistuj w najdłuższy i najsilniejszy kolor (${nSuit(n, suit)}): liczysz na wyrobienie długich kart.`,
      ntSequence: 'Solidny sekwens jest bezpieczny i buduje lewy.',
      ntShort: (n: number) => `${n === 1 ? 'Singiel' : n === 2 ? 'Dubel' : `Kolor ${LEN[n]}kartowy`}: to nie jest idealny wist przeciw bez atu.`,
      trump: 'Wist atutowy: bezpieczny i pasywny, a do tego ogranicza przebitki u dziadka.',
      singleton: 'Singiel: liczysz, że partner szybko weźmie lewę i da ci przebitkę.',
      aceAway: 'Przeciw kontraktowi kolorowemu nigdy nie wistuj spod asa — a wist samym asem rzadko pomaga.',
      sequence: (suit: number) => `Najwyższa z sekwensu w ${SUIT.loc[suit]}: bezpieczny wist, który może wyrobić lewy.`,
      plain: (suit: number, n: number) =>
        n === 1 ? `Singiel ${SUIT.one[suit]}.` : n === 2 ? `Dubel ${SUIT.one[suit]}.` : `${LEN[n][0].toUpperCase()}${LEN[n].slice(1)}kartowy kolor ${adj(suit, 'y')}.`,
    },
  },

  // -------------------------------------------------------------------------
  // src/tutor/signals.ts
  signals: {
    leadBy: {
      you: (card: Card) => `Twój wist: ${cardName(card)}`,
      partner: (card: Card) => `Wist partnera: ${cardName(card)}`,
      seat: (seat: number, card: Card) => `Wist ${SEAT.gen[seat]}: ${cardName(card)}`,
    },
    lead: {
      ace: (vsNT: boolean) =>
        vsNT
          ? 'As: zwykle z A-K (przeciw bez atu może też prosić partnera o odblokowanie).'
          : 'As: zwykle z A-K albo as singiel lub z dubla.',
      king: (vsNT: boolean) =>
        vsNT
          ? 'Król: najwyższa z sekwensu — K-Q (lub A-K). Zaprzecza posiadaniu asa, chyba że to wist z A-K.'
          : 'Król: najwyższa z sekwensu — K-Q. Zaprzecza posiadaniu asa.',
      queen: 'Dama: najwyższa z sekwensu (Q-J…), zaprzecza posiadaniu króla.',
      jack: 'Walet: najwyższa z J-10… albo z sekwensu wewnętrznego, np. K-J-10. Zaprzecza posiadaniu damy.',
      ten: 'Dziesiątka: najwyższa z 10-9… albo z sekwensu wewnętrznego (Q-10-9, K-10-9).',
      nine: 'Dziewiątka: najwyższa z krótkiego lub bezwartościowego koloru albo z 9-8-x.',
      low: (suit: number, vsNT: boolean) =>
        vsNT
          ? `Niska karta w ${SUIT.loc[suit]}: prawdopodobnie czwarta od góry z długiego koloru z honorem. Zastosuj regułę 11.`
          : `Niska karta w ${SUIT.loc[suit]}: zwykle trzecia lub czwarta od góry z honorem — albo singiel.`,
    },
    ruleOf11: {
      title: 'Reguła 11',
      text: (rank: number, above: number, seen: number, declarer: number) =>
        `Reguła 11: 11 − ${rankLabel(rank)} = ${above} — tyle kart wyższych od ${rankLabel(rank)} jest w pozostałych trzech rękach. Widzisz ${seen} (u dziadka i w swojej ręce), więc rozgrywający ma ${declarer}.`,
    },
    read: {
      count: {
        title: (who: number | null, card: Card) => `${cardName(card)} ${who === null ? 'partnera' : SEAT.gen[who]}: sygnał ilościowy`,
        text: (card: Card, look: Look, suit: number, lengths: number[], declarer: boolean) =>
          look.height === null
            ? `${cardName(card)} może być wysoka lub niska: poczekaj na następną kartę w ${SUIT.loc[suit]}, żeby odczytać ilość.`
            : `${looks(card, look)}: ${look.sure ? '' : 'prawdopodobnie '}${look.height === 'high' ? 'parzysta' : 'nieparzysta'} liczba ${SUIT.gen[suit]}${lengths.length ? ` (${orList(lengths)})` : ''}.${declarer ? ' Obrońcy czasem dają fałszywe sygnały, więc traktuj to jako wskazówkę.' : ''}`,
      },
      attitude: {
        title: (card: Card) => `${cardName(card)} partnera na twój wist: zachęta czy odmowa`,
        text: (card: Card, look: Look) =>
          look.height === null
            ? `${cardName(card)} może być wysoka lub niska: jeszcze nie wiadomo, czy partner chce kontynuacji.`
            : `${looks(card, look)}: ${look.height === 'high' ? (look.sure ? 'partner zachęca — kontynuuj kolor.' : 'partner prawdopodobnie zachęca do kontynuacji.') : `partner ${look.sure ? '' : 'prawdopodobnie '}zniechęca — pomyśl o zmianie koloru.`}`,
      },
      discard: {
        title: (card: Card) => `Zrzutka partnera: ${cardName(card)}`,
        text: (card: Card, look: Look, suit: number) =>
          look.height === null
            ? `${cardName(card)} może być wysoka lub niska: jeszcze nie wiadomo, czy partner chce wyjścia w ${SUIT.nom[suit]}.`
            : `${looks(card, look)}: partner ${look.sure ? '' : 'prawdopodobnie '}${look.height === 'high' ? 'chce' : 'nie chce'} wyjścia w ${SUIT.nom[suit]}.`,
      },
      preference: {
        title: (card: Card) => `Partner gra ${cardName(card)} do twojej przebitki: sygnał preferencyjny`,
        text: (card: Card, look: Look, sides: number[]) =>
          look.height === null
            ? `${cardName(card)} nie jest ani wyraźnie wysoka, ani niska: partner może nie mieć preferencji — wróć w kolor, który najbardziej ci odpowiada.`
            : `${looks(card, look)}: partner ${look.sure ? '' : 'prawdopodobnie '}prosi o powrót w ${SUIT.nom[look.height === 'high' ? sides[1] : sides[0]]}, ${look.height === 'high' ? 'wyższy' : 'niższy'} z dwóch pozostałych kolorów bocznych.`,
      },
    },
    badge: {
      count: (even: boolean) => `Ilość: ${even ? 'parzysta' : 'nieparzysta'}`,
      attitude: (encourage: boolean) => `Sygnał: ${encourage ? 'zachęcający' : 'zniechęcający'}`,
      discard: (encourage: boolean, suit: number) => `Zrzutka: ${encourage ? 'zachęca do' : 'zniechęca do'} ${SUIT_SYMBOLS[suit]}`,
      preference: (suit: number | null) => `Preferencja: ${suit === null ? 'brak' : SUIT_SYMBOLS[suit]}`,
    },
  },

  // -------------------------------------------------------------------------
  // src/core/eval.ts
  eval: {
    hcp: 'PC',
    hcpNote: 'A=4 K=3 Q=2 J=1',
    total: 'Punkty łącznie',
    totalNote: (lengthPts: number) => `PC + ${lengthPts} za długość`,
    shape: 'Układ',
    balanced: 'zrównoważony',
    semiBalanced: 'półzrównoważony',
    unbalanced: 'niezrównoważony',
    losers: 'Przegrywające',
    losersNote: 'Liczenie przegrywających (LTC)',
    quickTricks: 'Szybkie lewy',
    quickTricksNote: 'AK=2 AQ=1½ A=1 KQ=1 Kx=½',
    longest: 'Najdłuższy',
    controls: (n: number) => count(n, 'kontrola', 'kontrole', 'kontroli'),
  },

  // -------------------------------------------------------------------------
  // src/core/scoring.ts
  par: {
    contract: (contract: string, declarer: number) =>
      `${contract} na linii ${core.seatLetters[declarer & 1]}/${core.seatLetters[(declarer & 1) + 2]} (${core.seatLetters[declarer]})`,
  },
};
