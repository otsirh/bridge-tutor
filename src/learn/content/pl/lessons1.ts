// Lessons, part 1 (Polish).
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_1: Lesson[] = [
  {
    id: 'how-bridge-works',
    title: 'Jak się gra w brydża',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Rozdanie, licytacja, kontrakt i rozgrywka – od pierwszej odzywki do ostatniej lewy.',
    body: `
<h3>Czterech graczy, dwie pary</h3>
<p>Brydż jest grą par. Północ i Południe grają razem przeciwko Wschodowi i Zachodowi, a partnerzy siedzą naprzeciwko siebie. Rozdaje się całą talię 52 kart, więc każdy gracz ma 13 kart. W obrębie koloru starszeństwo kart biegnie od asa (najwyższej karty) przez K, Q, J, 10, 9 i tak dalej aż do dwójki. Celem jest zdobywanie <strong>lew</strong>: lewa to po jednej karcie od każdego gracza, zagranych kolejno zgodnie z ruchem wskazówek zegara.</p>

<h3>Część 1: licytacja</h3>
<p>Zanim padnie pierwsza karta, odbywa się licytacja. Pierwszy odzywa się rozdający, a licytacja toczy się zgodnie z ruchem wskazówek zegara. W swojej kolejce gracz może <strong>spasować</strong>, złożyć <strong>odzywkę</strong>, dać <strong>kontrę</strong> na odzywkę przeciwnika albo <strong>rekontrę</strong> na kontrę przeciwnika.</p>
<p>Odzywka ma wysokość (od 1 do 7) i miano (kolor atutowy albo bez atu). Wysokość to liczba lew, które obiecujesz <em>ponad sześć</em>: 1♠ obiecuje 7 lew z pikami jako atutami, a 3BA – 9 lew bez koloru atutowego. Pierwszych sześciu lew się więc nie licytuje: zawsze dolicza się je do wysokości odzywki.</p>
<p>Miana mają ustaloną kolejność, od najniższego do najwyższego: ♣, ♦, ♥, ♠, BA. Każda odzywka musi być wyższa od poprzedniej: albo na wyższej wysokości, albo na tej samej wysokości w wyższym mianie. Po 1♥ możesz zalicytować 1♠ lub 1BA, ale żeby zgłosić trefle, musisz powiedzieć co najmniej 2♣.</p>
<p>Licytacja kończy się, gdy po odzywce, kontrze lub rekontrze padną kolejno trzy pasy. Ostatnia odzywka staje się <strong>kontraktem</strong>. Jeśli na początku spasują wszyscy czterej gracze, rozdanie jest przepasowane i nikt go nie rozgrywa.</p>
<div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
<p>Północ otwiera 1♥, Południe podnosi do 2♥, a Północ skacze na 4♥. Wszyscy pasują, więc kontraktem jest 4♥: para Północ–Południe musi wziąć co najmniej 10 z 13 lew z kierami jako atutami.</p>

<h3>Wysokości kontraktów</h3>
<table>
<thead><tr><th>Wysokość</th><th>Potrzebne lewy</th><th>Uwagi</th></tr></thead>
<tbody>
<tr><td>1</td><td>7</td><td>częściówka</td></tr>
<tr><td>2</td><td>8</td><td>częściówka</td></tr>
<tr><td>3</td><td>9</td><td>3BA to dograna</td></tr>
<tr><td>4</td><td>10</td><td>4♥ i 4♠ to dograne</td></tr>
<tr><td>5</td><td>11</td><td>5♣ i 5♦ to dograne</td></tr>
<tr><td>6</td><td>12</td><td>szlemik (mały szlem)</td></tr>
<tr><td>7</td><td>13</td><td>szlem (wielki szlem)</td></tr>
</tbody>
</table>
<p>Za dograne i szlemy dostaje się duże premie. Dlatego tak wiele w licytacji kręci się wokół jednego pytania: czy nasza para ma dość siły na dograną?</p>

<h3>Kto rozgrywa?</h3>
<p><strong>Rozgrywającym</strong> zostaje ten gracz z pary, która wygrała licytację, który <em>pierwszy</em> wymienił miano ostatecznego kontraktu. W licytacji powyżej kiery pierwsza zgłosiła Północ, więc to ona rozgrywa, choć Południe też licytowało kiery. Partner rozgrywającego zostaje <strong>dziadkiem</strong>.</p>

<h3>Część 2: rozgrywka</h3>
<ol>
<li>Gracz siedzący na lewo od rozgrywającego wykonuje <strong>pierwszy wist</strong>. Gdy rozgrywa Północ, wistuje Wschód.</li>
<li>Następnie dziadek wykłada wszystkie 13 kart odkrytych na stół, posortowanych według kolorów. Rozgrywający gra kartami z obu rąk; dziadek nie bierze już udziału w grze.</li>
<li>Gra toczy się zgodnie z ruchem wskazówek zegara. Każdy gracz musi <strong>dołożyć do koloru</strong> (zagrać kartę w kolorze wyjścia), jeśli może.</li>
<li>Gracz, który nie ma kart w kolorze wyjścia (ma w nim <strong>renons</strong>), może zagrać atut, czyli <strong>przebić</strong>, albo wyrzucić dowolną inną kartę, czyli dać <strong>zrzutkę</strong>.</li>
<li>Lewę bierze najwyższy zagrany do niej atut, a jeśli atutu nie było – najwyższa karta w kolorze wyjścia. Zwycięzca lewy wychodzi do następnej.</li>
</ol>
<p>Przykład: atutami są kiery, a Wschód wychodzi ♠K. Południe dokłada ♠4, Zachód ♠9, a Północ, która nie ma pików, przebija ♥2. Lewę bierze Północ, bo każdy atut bije każdą kartę innego koloru. W kontrakcie bez atu atutów nie ma, więc lewę zawsze bierze najwyższa karta w kolorze wyjścia.</p>
<div class="tip">Zrzutka nigdy nie bierze lewy. Lewę może wziąć tylko karta w kolorze wyjścia albo atut.</div>

<h3>Ugrany albo przegrany kontrakt</h3>
<p>Po rozegraniu wszystkich 13 lew strona rozgrywającego zapisuje punkty, jeśli wzięła co najmniej tyle lew, ile zadeklarowała; lewy ponad kontrakt to <strong>nadróbki</strong>. Jeśli rozgrywającemu zabraknie lew, obrońcy zapisują karę za każdą brakującą lewę, czyli <strong>wpadkę</strong>. Kontra zwiększa zarówno nagrodę za ugranie kontraktu, jak i karę za jego przegranie.</p>
<div class="warn">Niedołożenie do koloru, gdy się może, to <strong>rewokacja</strong>; karą jest przeniesienie lew na stronę przeciwną. Zanim zagrasz kartę innego koloru, sprawdź jeszcze raz, czy naprawdę nie masz koloru wyjścia.</div>
`,
    keyPoints: [
      'Czterech graczy w dwóch parach; każdy ma 13 kart.',
      'Odzywka na wysokości N obiecuje 6 + N lew; kolejność mian: ♣, ♦, ♥, ♠, BA.',
      'Licytacja kończy się po trzech kolejnych pasach; ostatnia odzywka jest kontraktem.',
      'Rozgrywa ten gracz strony wygrywającej licytację, który pierwszy wymienił miano kontraktu; wistuje gracz siedzący na lewo od rozgrywającego.',
      'Musisz dołożyć do koloru, jeśli możesz; jeśli nie możesz, wolno ci przebić albo dać zrzutkę.',
      'Dograne: 3BA, 4♥, 4♠, 5♣, 5♦. Szlemy: każdy kontrakt na wysokości 6 lub 7.',
    ],
    quiz: [
      {
        q: 'Ostateczny kontrakt to 3BA. Ile lew potrzebuje rozgrywający?',
        options: ['3', '6', '9', '10'],
        answer: 2,
        explain: 'Do wysokości dodaj sześć (pierwszych sześć lew): 3 + 6 = 9 lew.',
      },
      {
        q: 'Północ otwiera 1♠, Wschód pasuje, Południe licytuje 2♠ i wszyscy pasują. Kto rozgrywa, a kto wychodzi pierwszym wistem?',
        options: ['Rozgrywa Południe, wistuje Zachód', 'Rozgrywa Północ, wistuje Wschód', 'Rozgrywa Północ, wistuje Zachód', 'Rozgrywa Południe, wistuje Wschód'],
        answer: 1,
        explain: 'Północ pierwsza w tej parze zgłosiła piki, więc to ona rozgrywa. Pierwszy wist wykonuje gracz siedzący na lewo od rozgrywającego, czyli Wschód.',
      },
      {
        q: 'Atutami są piki. Wychodzi kier, a ty nie masz kierów. Co możesz zrobić?',
        options: ['Musisz przebić pikiem', 'Możesz przebić pikiem albo zrzucić dowolną kartę', 'Musisz zrzucić trefla albo karo', 'Musisz zagrać najniższą kartę'],
        answer: 1,
        explain: 'Obowiązkowe jest tylko dokładanie do koloru. Gdy masz renons w kolorze wyjścia, możesz przebić albo dać zrzutkę; przebicie często jest dobrym pomysłem, ale nigdy nie jest obowiązkowe.',
      },
      {
        q: 'Twój prawy przeciwnik otworzył 1♥. Która z tych odzywek jest dozwolona?',
        options: ['1♦', '1♣', '1BA', '1♥'],
        answer: 2,
        explain: 'Odzywka musi być wyższa od poprzedniej. Na wysokości jednego wyżej od kierów są tylko piki i bez atu, więc dozwolone są 1♠ i 1BA; trefle i kara trzeba by zalicytować na wysokości dwóch.',
      },
      {
        q: 'Który z tych kontraktów jest dograną?',
        options: ['3♥', '4♦', '3BA', '2BA'],
        answer: 2,
        explain: 'Dograna wymaga 9 lew w bez atu, 10 w kolorze starszym i 11 w młodszym. 3BA spełnia ten warunek; 3♥ i 4♦ są o jedną wysokość za nisko, a 2BA to o jedną lewę za mało do dograny.',
      },
    ],
  },

  {
    id: 'hand-evaluation',
    title: 'Ocena ręki',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Jak liczyć punkty honorowe, długości i krótkości oraz jak reguła 20, reguła 15, liczenie przegrywających i szybkie lewy uściślają ocenę.',
    body: `
<h3>Punkty honorowe</h3>
<p>Podstawową miarą siły są <strong>punkty honorowe</strong> (PC): as 4, król 3, dama 2, walet 1. W talii jest 40 PC, więc przeciętna ręka ma 10.</p>
<div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="17 PC"></div>
<p>♠AK = 7, ♥KJ = 4, ♦Q = 2, ♣A = 4: 17 PC. Ręka jest zrównoważona, więc otwiera się ją 1BA (15-17).</p>
<p>Przydatne progi dla łącznej siły pary: około 25 na dograną 3BA lub w kolorze starszym, 29 na dograną w kolorze młodszym, 33 na szlemika i 37 na szlema. Punkty są wskazówką, a nie gwarancją: liczą się też układ, fit i położenie honorów.</p>

<h3>Punkty za długość: ocena własnych kolorów</h3>
<p>Długie kolory dają dodatkowe lewy, gdy wypadną już wysokie karty. Oceniając rękę do otwarcia lub rebidu, dodaj 1 punkt za każdą kartę ponad cztery w dowolnym kolorze: piątka dodaje 1, szóstka 2.</p>

<h3>Punkty w poparciu: ocena fitu</h3>
<p>Gdy wiesz już, że masz fit w kolorze partnera, krótkie kolory zyskują na wartości, bo twoje atuty mogą przebijać lewy przeciwników. Podnosząc partnera, licz krótkości zamiast długości:</p>
<table>
<thead><tr><th>Krótkość</th><th>Z 4+ atutami</th><th>Z 3 atutami</th></tr></thead>
<tbody>
<tr><td>Renons</td><td>5</td><td>3</td></tr>
<tr><td>Singiel</td><td>3</td><td>2</td></tr>
<tr><td>Dubel</td><td>1</td><td>1</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:5 H:K1083 D:A9742 C:J62" data-label="Partner otworzył 1♥"></div>
<p>Tylko 8 PC, ale przy czterech atutach i singlu dodajesz 3, co daje 11 punktów w poparciu. To podniesienie inwitujące do 3♥ (10-12).</p>
<div class="warn">Krótkość jest coś warta tylko wtedy, gdy masz fit. Bez fitu singiel w kolorze partnera to minus, a nie plus: zapowiada misfit.</div>

<h3>Korekty oceny</h3>
<ul>
<li>Honory w długich kolorach są warte więcej niż w krótkich: ♠KQJ54 weźmie lewy, ♠KQ – niekoniecznie.</li>
<li>Niewsparte honory w krótkich kolorach są warte mniej: singlowy K, Q lub J albo Q lub J w dublu. Odejmij punkt.</li>
<li>4-3-3-3 to najmniej użyteczny układ; rozważ odjęcie punktu.</li>
<li>Skala 4-3-2-1 lekko zaniża wartość asów i dziesiątek, a lekko zawyża wartość dam i waletów.</li>
</ul>

<h3>Reguła 20 i reguła 15</h3>
<p>Na pierwszej, drugiej lub trzeciej ręce otwórz rękę z 10 lub 11 PC, jeśli PC plus liczba kart w dwóch najdłuższych kolorach daje co najmniej 20.</p>
<div class="hand" data-cards="S:KQ1065 H:AJ874 D:5 C:32" data-label="Reguła 20: otwórz 1♠"></div>
<p>10 PC + 5 + 5 = 20, więc otwierasz, a z dwiema piątkami otwierasz wyższy kolor: 1♠. Porównaj ♠QJ5 ♥K92 ♦QJ84 ♣Q73: 11 PC + 4 + 3 = 18, więc pas. Rozproszone damy i walety oraz płaski układ sprawiają, że to słabe otwarcie.</p>
<p>Na czwartej ręce, po trzech pasach, otwieraj z 13 lub więcej PC; z 10-12 PC stosuj regułę 15: otwórz tylko wtedy, gdy PC plus liczba pików daje co najmniej 15. Jeśli spasujesz, rozdanie jest przepasowane, więc otwierasz tylko wtedy, gdy twoja para ma szansę wygrać walkę o częściówkę – a większość takich walk rozstrzygają piki.</p>

<h3>Liczenie przegrywających</h3>
<p>Gdy znajdziesz fit co najmniej ośmiokartowy, liczenie przegrywających (LTC) daje drugą opinię, opartą na układzie. Spójrz na trzy pierwsze karty każdego koloru i licz jedną przegrywającą za każdego brakującego wśród nich asa, króla lub damę:</p>
<table>
<thead><tr><th>Karty w kolorze</th><th>Przegrywające</th></tr></thead>
<tbody>
<tr><td>Renons</td><td>0</td></tr>
<tr><td>Singlowy A / inny singiel</td><td>0 / 1</td></tr>
<tr><td>AK / Ax lub Kx / Qx lub xx</td><td>0 / 1 / 2</td></tr>
<tr><td>AKQ</td><td>0</td></tr>
<tr><td>AKx, AQx, KQx</td><td>1</td></tr>
<tr><td>Axx, Kxx, Qxx</td><td>2</td></tr>
<tr><td>xxx</td><td>3</td></tr>
</tbody>
</table>
<p>Dodaj swoje przegrywające do przegrywających partnera i odejmij sumę od 24: wynik to mniej więcej liczba lew, które para weźmie z tym kolorem jako atutem. Minimalne otwarcie ma około 7 przegrywających.</p>
<div class="hand" data-cards="S:K872 H:4 D:A8652 C:853" data-label="Partner otworzył 1♠"></div>
<p>♠K87 = 2 przegrywające, ♥4 = 1, ♦A86 = 2, ♣853 = 3: razem 8 przegrywających. 24 − (7 + 8) = 9 lew, więc inwitujesz odzywką 3♠. Liczenie punktów daje to samo: 7 PC + 3 za singla = 10 punktów w poparciu, czyli podniesienie inwitujące.</p>

<h3>Szybkie lewy</h3>
<p>Szybkie lewy mierzą siłę obronną, czyli lewy, których oczekujesz w pierwszych dwóch rundach koloru: AK = 2, AQ = 1½, A = 1, KQ = 1, Kx = ½. Solidne otwarcie lub kontra wywołująca ma zwykle około 2 szybkich lew. Ręce z niewieloma szybkimi lewami i silnym układem lepiej nadają się do rozgrywania niż do obrony.</p>
`,
    keyPoints: [
      'PC: as 4, król 3, dama 2, walet 1; w talii jest ich 40, w przeciętnej ręce 10.',
      'Oceniając własną rękę, dodaj punkt za każdą kartę ponad cztery; podnosząc partnera, licz zamiast tego krótkości (renons 5, singiel 3, dubel 1 przy czterech atutach).',
      'Reguła 20 dla lekkich otwarć na pierwszej, drugiej lub trzeciej ręce; reguła 15 (PC + piki) na czwartej ręce.',
      'LTC: lewy ≈ 24 − łączna liczba przegrywających; minimalne otwarcie ma około 7 przegrywających.',
      'Około 25 punktów łącznie na 3BA lub dograną w starszym, 29 na dograną w młodszym, 33 na szlemika.',
    ],
    quiz: [
      {
        q: 'Ile PC ma ręka ♠AQ4 ♥KJ62 ♦J953 ♣K7?',
        options: ['12', '13', '14', '15'],
        answer: 2,
        explain: '♠AQ = 6, ♥KJ = 4, ♦J = 1, ♣K = 3: 14 PC.',
      },
      {
        q: 'Pierwsza ręka. Masz 10 PC, pięć kierów i pięć trefli. Co robisz?',
        options: ['Pas: otwarcie wymaga 12 PC', 'Otwierasz 1♥: reguła 20 jest spełniona', 'Otwierasz 1♣: z dwiema piątkami otwiera się niższy kolor', 'Otwierasz 2♥'],
        answer: 1,
        explain: '10 PC + 5 + 5 = 20, więc ręka spełnia regułę 20. Z dwiema piątkami otwierasz wyższy kolor, czyli 1♥ (trefle możesz pokazać później).',
      },
      {
        q: 'Partner otwiera 1♥. Masz cztery kiery i renons pik. Ile punktów za krótkość dodajesz?',
        options: ['1', '3', '5', '0'],
        answer: 2,
        explain: 'Przy czterech lub więcej atutach renons jest wart 5 punktów w poparciu: każdego pika partnera można przebić w twojej ręce.',
      },
      {
        q: 'Masz rękę z 7 przegrywającymi, partner ma 8 przegrywających, a fit atutowy jest ośmiokartowy. Ile lew przewiduje LTC?',
        options: ['7', '9', '8', '10'],
        answer: 1,
        explain: '24 − (7 + 8) = 9. Skoro zakłada się, że otwierający ma 7 przegrywających, odpowiadający z 8 przegrywającymi powinien inwitować na wysokości trzech, a nie licytować dograną.',
      },
      {
        q: 'Czwarta ręka po trzech pasach: ♠KJ63 ♥A82 ♦Q74 ♣J93 (11 PC). Co robisz?',
        options: ['Pas: 11 PC to za mało', 'Otwierasz 1♣: 11 + 4 piki = 15', 'Otwierasz 1♠', 'Otwierasz 1BA'],
        answer: 1,
        explain: 'Reguła 15 jest spełniona: 11 PC + 4 piki = 15. Bez piątki w starszym i z układem 3-3 w młodszych otwierasz 1♣. 1♠ obiecywałoby pięć pików, a 1BA wymaga 15-17.',
      },
    ],
  },

  {
    id: 'opening-bids',
    title: 'Otwarcie licytacji',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Które ręce otwierać i jakie otwarcie wybrać: od jednego w kolor po 1BA, 2BA, 2♣ i otwarcia blokujące.',
    body: `
<h3>Otwarcia w skrócie</h3>
<table>
<thead><tr><th>Otwarcie</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>12-21 PC, 3+ trefli (dłuższy młodszy; z 3-3 w młodszych otwórz 1♣)</td></tr>
<tr><td>1♦</td><td>12-21 PC, 3+ kar (dłuższy młodszy; z 4-4 w młodszych otwórz 1♦)</td></tr>
<tr><td>1♥ / 1♠</td><td>12-21 PC, 5+ kart w kolorze</td></tr>
<tr><td>1BA</td><td>15-17 PC, ręka zrównoważona (może zawierać piątkę)</td></tr>
<tr><td>2♣</td><td>Silne i sztuczne: 22+ PC lub 9+ lew rozgrywkowych</td></tr>
<tr><td>2♦ / 2♥ / 2♠</td><td>Słabe dwa: szóstka i 5-10 PC</td></tr>
<tr><td>2BA</td><td>20-21 PC, ręka zrównoważona</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Blok: siódemka i 5-10 PC</td></tr>
<tr><td>4♥ / 4♠</td><td>Blok: ósemka (albo siódemka z dodatkową układowością)</td></tr>
</tbody>
</table>

<h3>Czy to ręka na otwarcie?</h3>
<p>Z 12 lub więcej PC otwieraj, z wyjątkiem czwartej ręki. Z 10-11 PC na pierwszej, drugiej lub trzeciej ręce otwórz, jeśli spełniona jest reguła 20 (PC + długości dwóch najdłuższych kolorów ≥ 20). Na czwartej ręce otwieraj z 13 lub więcej PC, a z 10-12 PC tylko wtedy, gdy spełniona jest reguła 15 (PC + liczba pików ≥ 15). Ręce z długim kolorem i mniejszą siłą mogą się za to nadawać na słabe dwa albo otwarcie blokujące.</p>

<h3>Ręce zrównoważone: decydują punkty</h3>
<p>Ręka zrównoważona nie ma renonsu ani singla i ma co najwyżej jeden dubel: 4-3-3-3, 4-4-3-2 lub 5-3-3-2. Z ręką zrównoważoną twoim planem jest zawsze pokazanie siły w bez atu – od razu albo w następnej odzywce:</p>
<table>
<thead><tr><th>PC</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Otwórz jeden w kolor, rebid 1BA</td></tr>
<tr><td>15-17</td><td>Otwórz 1BA</td></tr>
<tr><td>18-19</td><td>Otwórz jeden w kolor, potem skocz na 2BA</td></tr>
<tr><td>20-21</td><td>Otwórz 2BA</td></tr>
<tr><td>22-24</td><td>Otwórz 2♣, potem rebid 2BA</td></tr>
<tr><td>25-27</td><td>Otwórz 2♣, potem rebid 3BA</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ5 H:K3 D:KJ84 C:QJ62" data-label="Otwórz 1BA: 16 PC, ręka zrównoważona"></div>
<div class="hand" data-cards="S:AJ4 H:K83 D:Q1074 C:KJ5" data-label="Otwórz 1♦: 14 PC, w planie rebid 1BA"></div>

<h3>Wybór koloru</h3>
<ul>
<li>Z piątką lub dłuższym kolorem starszym otwórz w nim, nawet ze zrównoważonymi 12-14.</li>
<li>Z dwiema piątkami (albo dwiema szóstkami) otwórz wyższy kolor.</li>
<li>Z szóstką i piątką otwórz dłuższy kolor.</li>
<li>Bez piątki w starszym otwórz dłuższy młodszy. Z 3-3 w młodszych otwórz 1♣, z 4-4 – 1♦.</li>
<li>Czwórek w kolorach starszych nigdy się nie otwiera. Z 4-4 w starszych i bez piątki otwórz młodszy; partner zalicytuje czwórkę w starszym, jeśli ją ma.</li>
</ul>
<div class="hand" data-cards="S:KQ1074 H:A63 D:K82 C:95" data-label="Otwórz 1♠: 12 PC, pięć pików"></div>
<div class="hand" data-cards="S:A5 H:973 D:KJ84 C:AQ96" data-label="Otwórz 1♦: 4-4 w młodszych"></div>
<div class="hand" data-cards="S:AJ84 H:KQ5 D:J73 C:K62" data-label="Otwórz 1♣: 3-3 w młodszych"></div>
<p>Ostatnia ręka ma cztery piki, ale do otwarcia w starszym potrzeba pięciu kart, a z trzema kartami w każdym młodszym otwarciem jest 1♣. Jeśli partner ma cztery piki, odpowie 1♠ i fit się znajdzie.</p>

<h3>Otwarcia silne i słabe</h3>
<p>2BA pokazuje 20-21 w układzie zrównoważonym; 2♣ to jedyne forsujące otwarcie i obejmuje każdą rękę z 22+ PC lub z około dziewięcioma lewami rozgrywkowymi. Na drugim biegunie słabe dwa i otwarcia blokujące odbierają przeciwnikom przestrzeń licytacyjną, gdy masz długi kolor, ale niewiele siły obronnej. Każde z nich ma własną lekcję.</p>
<div class="hand" data-cards="S:AK5 H:KQ2 D:AJ43 C:KJ7" data-label="Otwórz 2BA: 21 PC, ręka zrównoważona"></div>
<div class="tip">Zaplanuj rebid, zanim otworzysz. Ze zrównoważonymi 12-14 dasz rebid 1BA, ze zrównoważonymi 18-19 skoczysz na 2BA, z dwoma kolorami zalicytujesz drugi. Jeśli nie ma sensownego rebidu, przemyśl otwarcie jeszcze raz.</div>
<div class="warn">Nigdy nie otwieraj 1♥ ani 1♠ z czterema kartami. Partner podniesie z trzykartowym poparciem, licząc na co najmniej ośmiokartowy fit.</div>
`,
    keyPoints: [
      'Otwieraj z 12+ PC; z 10-11 stosuj regułę 20 (pierwsza, druga lub trzecia ręka). Na czwartej ręce otwieraj z 13+ albo z 10-12, jeśli spełniona jest reguła 15.',
      '1♥/1♠ obiecują pięć kart; bez piątki w starszym otwórz dłuższy młodszy (1♣ z 3-3, 1♦ z 4-4).',
      'Ręce zrównoważone: 12-14 otwórz kolor i daj rebid 1BA; 15-17 1BA; 18-19 skok na 2BA; 20-21 2BA; 22+ 2♣.',
      'Dwie piątki: otwórz wyższy kolor; 6-5: otwórz dłuższy.',
      'Zaplanuj rebid, zanim otworzysz.',
    ],
    quiz: [
      {
        q: 'Masz ♠K6 ♥AQ1083 ♦AJ1074 ♣5 (14 PC). Co otwierasz?',
        options: ['1♥', '1♦', '1BA', '2♥'],
        answer: 0,
        explain: 'Z dwiema piątkami otwierasz wyższy kolor. Po 1♥ możesz następnie zalicytować kara, a partner tanio wybierze między twoimi kolorami.',
      },
      {
        q: 'Masz ♠J5 ♥K82 ♦AQ6 ♣KJ1073 (14 PC). Co otwierasz?',
        options: ['1♣', '1BA', '1♦', 'Pas'],
        answer: 0,
        explain: 'Ręka jest zrównoważona, ale ma tylko 14 PC – za mało na 1BA (15-17). Otwórz dłuższy młodszy, 1♣, a rebidem 1BA pokaż zrównoważone 12-14.',
      },
      {
        q: 'Masz ♠KQ4 ♥AJ6 ♦Q1092 ♣KJ5 (16 PC). Co otwierasz?',
        options: ['1♦', '1BA', '2BA', '1♣'],
        answer: 1,
        explain: '16 PC w układzie 3-3-4-3 to podręcznikowe otwarcie 1BA. Jedna odzywka opisuje zarówno siłę, jak i układ.',
      },
      {
        q: 'Masz ♠AJ8 ♥Q1074 ♦K92 ♣Q83 (12 PC). Co otwierasz?',
        options: ['1♥', '1♣', '1♦', 'Pas'],
        answer: 1,
        explain: 'Do otwarcia w starszym potrzeba pięciu kart, więc 1♥ odpada. Bez piątki w starszym otwierasz dłuższy młodszy; z 3-3 w młodszych jest to 1♣.',
      },
      {
        q: 'Masz zrównoważone 18 PC. Jaki jest twój plan?',
        options: ['Otworzyć 1BA', 'Otworzyć 2BA', 'Otworzyć jeden w kolor, a w następnej odzywce skoczyć na 2BA', 'Otworzyć 2♣'],
        answer: 2,
        explain: 'Zrównoważone 18-19 to za dużo na 1BA (15-17) i za mało na 2BA (20-21). Otwórz jeden w kolor, a w następnej odzywce skocz na 2BA.',
      },
    ],
  },

  {
    id: 'responding-to-one-of-a-suit',
    title: 'Odpowiedzi na otwarcie jeden w kolor',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Jak odpowiadający podnosi, licytuje nowy kolor lub bez atu po otwarciu partnera jeden w kolor.',
    body: `
<h3>Podstawowe zasady</h3>
<p>Otwarcie partnera na wysokości jednego pokazuje 12-21 PC, więc z 6 lub więcej punktami odpowiadaj: nawet słaba ręka może wystarczyć na dograną naprzeciw silnego otwarcia. Z mniej niż 6 punktami pasuj. Twoje pierwsze zadanie to powiedzieć partnerowi o ficie, drugie – pokazać przedział siły.</p>

<h3>Odpowiedzi na 1♥ lub 1♠</h3>
<p>Partner ma co najmniej pięć kart, więc już trzykartowe poparcie daje ośmiokartowy fit. Poparcie partnera to twój najważniejszy priorytet.</p>
<table>
<thead><tr><th>Odpowiedź</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>2 w kolor otwarcia</td><td>6-10 punktów w poparciu, poparcie 3+</td></tr>
<tr><td>3 w kolor otwarcia (skok)</td><td>Podniesienie inwitujące: 10-12 punktów w poparciu, poparcie 4+, inwit</td></tr>
<tr><td>2BA</td><td>Jacoby: 13+ punktów, poparcie 4+, forsujące do dograny</td></tr>
<tr><td>4 w kolor otwarcia</td><td>Słaba ręka układowa: poparcie 5+, mniej niż 10 PC</td></tr>
<tr><td>Podwójny skok w nowy kolor</td><td>Splinter: poparcie 4+, singiel lub renons w tym kolorze, 13-16 punktów</td></tr>
<tr><td>1♠ po 1♥</td><td>6+ punktów, 4+ pików, forsujące</td></tr>
<tr><td>1BA</td><td>6-10, bez fitu, nieforsujące (po 1♥ zaprzecza czterem pikom)</td></tr>
<tr><td>Nowy kolor na wysokości 2</td><td>10+ (dla bezpieczeństwa 11+), co najmniej 4 karty (5+ przy 2♥ po 1♠); forsujące na jedno okrążenie</td></tr>
<tr><td>Skok w nowy kolor</td><td>19+ punktów, forsujące do dograny</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q84 H:K1063 D:752 C:J94" data-label="Partner otworzył 1♠: licytuj 2♠"></div>
<p>6 PC i trzykartowe poparcie: podnieś do 2♠. Nie licytuj 1BA ani nie szukaj kierów na wysokości dwóch; odpowiedź 2♥ wymaga pięciu kierów i 10+ punktów.</p>
<div class="hand" data-cards="S:K1074 H:5 D:A963 C:8642" data-label="Partner otworzył 1♠: licytuj 3♠"></div>
<p>7 PC plus 3 za singla przy czterech atutach = 10 punktów w poparciu: podniesienie inwitujące. Partner pasuje z minimum, a z większą siłą licytuje dograną.</p>
<div class="hand" data-cards="S:KQ62 H:A84 D:K1073 C:Q5" data-label="Partner otworzył 1♠: licytuj 2BA"></div>
<p>14 PC z czterema atutami: Jacoby 2BA ustala piki jako atuty i forsuje do dograny, zostawiając miejsce na szukanie szlemika.</p>
<p>Z singlem i 13-16 punktami lepiej opisuje rękę splinter: po 1♠ ręka ♠KQ74 ♥A853 ♦K962 ♣5 licytuje 4♣. Zobacz lekcję „Splintery i odwrócone Drury”.</p>
<p>Z 6 PC, pięcioma kierami i singlem, ♠4 ♥QJ852 ♦K9763 ♣82, skocz po 1♥ na 4♥. Przeciwnicy na pewno mają fit i sporo punktów, a ty chcesz, żeby zgadywali na wysokości pięciu.</p>

<h4>Trzykartowe poparcie i 10-12 punktów</h4>
<p>Skok na trzy obiecuje zwykle cztery atuty. Mając tylko trzy, najpierw zalicytuj nowy kolor, a w następnej odzywce popraj kolor starszy partnera: po 1♥ ręka ♠A84 ♥K93 ♦KJ752 ♣64 licytuje 2♦, a potem 4♥ – 11 punktów i fit naprzeciw otwarcia zwykle wystarczą na dograną. (Tylko gdy krótkość podnosi do 11–12 punktów rękę ze zbyt małą liczbą PC na dwa nad jeden, z trzema atutami od razu skacze się na 3♥: 1BA zaprzeczałoby poparciu.) Z trzykartowym poparciem i 13+ najpierw zalicytuj nowy kolor, a potem dograną w kolorze starszym partnera.</p>

<h3>Odpowiedzi na 1♣ lub 1♦</h3>
<p>Partner może mieć w młodszym tylko trzy karty, a fit w starszym jest więcej wart, więc najpierw szukaj fitu w starszym.</p>
<table>
<thead><tr><th>Odpowiedź</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>Nowy kolor na wysokości 1</td><td>6+ punktów, co najmniej 4 karty, forsujące. Najpierw licytuj dłuższy kolor; z dwiema czwórkami licytuj tańszą (od dołu).</td></tr>
<tr><td>1BA</td><td>6-10, ręka zrównoważona, bez czwórki w starszym</td></tr>
<tr><td>2BA</td><td>13-15, ręka zrównoważona, bez czwórki w starszym, forsujące do dograny</td></tr>
<tr><td>3BA</td><td>16-17, ręka zrównoważona</td></tr>
<tr><td>Podniesienie na 2</td><td>6-10, 5+ trefli lub 4+ kar, bez czwórki w starszym</td></tr>
<tr><td>Podniesienie skokiem na 3</td><td>10-12, takie samo poparcie, inwit</td></tr>
<tr><td>1♦ – 2♣</td><td>10+ punktów, forsujące</td></tr>
<tr><td>Skok w nowy kolor</td><td>19+ punktów</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:J4 H:KQ73 D:Q85 C:9642" data-label="Partner otworzył 1♦: licytuj 1♥"></div>
<p>8 PC i czwórka w starszym: pokaż ją na wysokości jednego. Odzywka 1BA mogłaby zgubić fit 4-4 w kierach.</p>
<div class="hand" data-cards="S:Q73 H:K82 D:J65 C:Q1074" data-label="Partner otworzył 1♣: licytuj 1BA"></div>
<p>8 PC, ręka zrównoważona, bez czwórki w starszym. Cztery trefle nie wystarczą, by podnieść kolor partnera, który może być trzykartowy; 1BA opisuje tę rękę.</p>
<p>Z 11 PC, pięcioma karami i bez czwórki w starszym, ♠K5 ♥832 ♦KJ763 ♣A94, podnieś 1♦ do 3♦ (10-12). Ze zrównoważonymi 11-12 bez starszego, na przykład ♠KQ5 ♥J104 ♦A963 ♣J72 po 1♣, nie ma bezpośredniej odzywki: odpowiedz 1♦, a w następnej odzywce zalicytuj 2BA, inwitując dograną.</p>
<div class="warn">Nie skacz na 2BA po 1♣ lub 1♦ z 11 lub 12 punktami. Ten skok pokazuje 13-15 i forsuje partnera do dograny. Najpierw zalicytuj nowy kolor, a w następnym okrążeniu zainwituj odzywką 2BA.</div>
<div class="tip">Nowy kolor odpowiadającego forsuje na jedno okrążenie. Możesz zalicytować kolor ze skromną ręką, a siłę opisać w następnej odzywce.</div>
`,
    keyPoints: [
      'Odpowiadaj z 6+ punktami; poparcie koloru starszego partnera to najważniejszy priorytet.',
      'Po 1♥/1♠: 2 w kolor = 6-10 z poparciem 3+; 3 w kolor = 10-12 z 4+; 2BA = 13+ z 4+ (Jacoby); 4 w kolor = słaba ręka z 5+.',
      'Nowy kolor na wysokości dwóch wymaga 10+ (dla bezpieczeństwa 11+) i jest forsujący; 2♥ po 1♠ wymaga pięciu kierów.',
      'Po 1♣/1♦: najpierw zalicytuj czwórkę w starszym na wysokości jednego; 1BA = 6-10, 2BA = 13-15, 3BA = 16-17, wszystkie z ręką zrównoważoną bez starszego.',
      'Ze zrównoważonymi 11-12 najpierw zalicytuj nowy kolor, a potem zainwituj odzywką 2BA.',
    ],
    quiz: [
      {
        q: 'Partner otwiera 1♥. Masz ♠K72 ♥Q84 ♦J953 ♣Q62 (8 PC). Co odpowiadasz?',
        options: ['1BA', '2♥', '3♥', '1♠'],
        answer: 1,
        explain: 'Trzykartowe poparcie do piątki w starszym oznacza ośmiokartowy fit; z 6-10 punktami pojedyncze podniesienie do 2♥ od razu mówi o tym partnerowi. 1♠ wymagałoby czterech pików.',
      },
      {
        q: 'Partner otwiera 1♠. Masz ♠Q1075 ♥A94 ♦KQ63 ♣K8 (14 PC). Co odpowiadasz?',
        options: ['4♠', '3♠', '2BA', '2♦'],
        answer: 2,
        explain: '2BA (Jacoby) pokazuje 13+ z 4+ atutami i forsuje do dograny. 3♠ byłoby tylko podniesieniem inwitującym, a 4♠ to słabe, układowe podniesienie, więc obie odzywki zaniżyłyby siłę tej ręki.',
      },
      {
        q: 'Partner otwiera 1♦. Masz ♠AJ85 ♥K1062 ♦74 ♣953 (8 PC). Co odpowiadasz?',
        options: ['1♠', '1♥', '1BA', '2♦'],
        answer: 1,
        explain: 'Z dwiema czwórkami licytuj od dołu: najpierw 1♥. Jeśli partner ma cztery piki, może teraz powiedzieć 1♠, więc żaden fit nie zginie.',
      },
      {
        q: 'Partner otwiera 1♣. Masz ♠K94 ♥Q73 ♦AJ5 ♣K1062 (13 PC). Co odpowiadasz?',
        options: ['1BA', '2BA', '3BA', '1♦'],
        answer: 1,
        explain: 'Ręka zrównoważona, bez czwórki w starszym, 13 PC: 2BA pokazuje 13-15 i forsuje do dograny. 1♦ obiecywałoby cztery kara, a 3BA pokazuje 16-17.',
      },
      {
        q: 'Partner otwiera 1♠. Masz ♠5 ♥AQ94 ♦K8 ♣QJ7532 (12 PC). Co odpowiadasz?',
        options: ['2♥', '2♣', '1BA', '3♣'],
        answer: 1,
        explain: 'Odpowiedź 2♥ na 1♠ obiecuje pięć kierów. Zalicytuj swój długi kolor, 2♣, który jest forsujący; być może później będzie okazja pokazać kiery. 3♣ byłoby skokiem w nowy kolor, pokazującym 19+.',
      },
    ],
  },

  {
    id: 'openers-rebid',
    title: 'Rebid otwierającego',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Jak otwierający drugą odzywką pokazuje rękę minimalną, średnią lub maksymalną i opisuje układ, łącznie z rewersami i skokami w nowy kolor.',
    body: `
<h3>Najpierw sklasyfikuj rękę</h3>
<p>Twoje otwarcie obejmowało szeroki przedział, 12-21. Rebid go zawęża. Przelicz punkty jeszcze raz w świetle odpowiedzi partnera (jeśli znalazł się fit, dodaj punkty w poparciu) i zaklasyfikuj rękę do jednego z trzech przedziałów:</p>
<table>
<thead><tr><th>Przedział</th><th>Punkty</th><th>Typowa odzywka</th></tr></thead>
<tbody>
<tr><td>Minimum</td><td>12-15</td><td>Najtańsza odzywka opisowa</td></tr>
<tr><td>Średnia ręka</td><td>16-18</td><td>Skok albo rewers z 17+</td></tr>
<tr><td>Maksimum</td><td>19-21</td><td>Dograna albo forsowanie skokiem w nowy kolor</td></tr>
</tbody>
</table>

<h3>Po odpowiedzi na wysokości jednego</h3>
<div class="auction" data-calls="1D P 1S P" data-dealer="N"></div>
<p>Odpowiadający ma 6+ punktów i co najmniej cztery piki. Możliwości otwierającego:</p>
<table>
<thead><tr><th>Rebid</th><th>Punkty</th><th>Pokazuje</th></tr></thead>
<tbody>
<tr><td>2♠</td><td>12-15</td><td>Czterokartowe poparcie w pikach</td></tr>
<tr><td>3♠</td><td>16-18</td><td>Czterokartowe poparcie, inwit</td></tr>
<tr><td>4♠</td><td>19-21</td><td>Czterokartowe poparcie, do gry</td></tr>
<tr><td>1BA</td><td>12-14</td><td>Ręka zrównoważona</td></tr>
<tr><td>2BA (skok)</td><td>18-19</td><td>Ręka zrównoważona, inwit</td></tr>
<tr><td>2♦</td><td>12-15</td><td>Zwykle sześć kar</td></tr>
<tr><td>3♦ (skok)</td><td>16-18</td><td>Dobra szóstka</td></tr>
<tr><td>2♣ (nowy, niższy kolor)</td><td>12-18</td><td>Cztery lub więcej trefli, nieforsujące</td></tr>
<tr><td>2♥ (rewers)</td><td>17+</td><td>Kara dłuższe od kierów, forsujące na jedno okrążenie</td></tr>
<tr><td>3♣ (skok w nowy kolor)</td><td>19+</td><td>Forsujące do dograny</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:K84 H:Q5 D:AJ963 C:K72" data-label="1♦ – 1♠: rebid 1BA"></div>
<p>13 PC i ręka zrównoważona: 1BA. Podniesienie do 2♠ obiecuje cztery piki, a partner może mieć ich tylko cztery.</p>
<div class="hand" data-cards="S:AQ85 H:72 D:AKJ63 C:Q8" data-label="1♦ – 1♠: rebid 3♠"></div>
<p>16 PC plus po 1 za każdy z dwóch dubli (w kierach i treflach) przy czterech atutach: 16 + 1 + 1 = 18 punktów w poparciu, czyli średnia ręka. Skocz na 3♠, inwitując dograną. Z minimum (12-15) podnieś do 2♠, z 19+ zalicytuj 4♠.</p>

<h3>Rewersy</h3>
<p><strong>Rewers</strong> to rebid w nowym kolorze na wysokości dwóch, który jest <em>wyższy</em> od twojego pierwszego koloru, np. 1♦ – 1♠ – 2♥ albo 1♣ – 1♥ – 2♦. Żeby dać preferencję na twój pierwszy kolor, partner musi teraz wejść na wysokość trzech, dlatego rewers obiecuje dodatkową siłę (17+) i forsuje na jedno okrążenie. Pokazuje też, że pierwszy kolor jest dłuższy od drugiego.</p>
<div class="hand" data-cards="S:5 H:AQ74 D:AKJ85 C:K63" data-label="1♦ – 1♠: rewers 2♥"></div>
<p>17 PC, pięć kar i cztery kiery: 2♥ jedną odzywką pokazuje układ i dodatkową siłę.</p>
<div class="warn">Z minimum nie dawaj rewersu. Z ręką ♠5 ♥AQ74 ♦AJ985 ♣Q63 (13 PC) po 1♦ – 1♠ powtórz kolor: 2♦. Nie zgubisz fitu w kierach: z czterema kierami i czterema pikami partner odpowiedziałby najpierw 1♥.</div>

<h3>Skoki w nowy kolor i skoki we własny kolor</h3>
<p>Skok w nowy kolor (1♦ – 1♠ – 3♣) pokazuje 19+ i forsuje do dograny. Skok we własny kolor (1♥ – 1♠ – 3♥) pokazuje 16-18 i dobrą szóstkę; jest inwitujący, a nie forsujący.</p>
<div class="hand" data-cards="S:K6 H:A4 D:AKJ63 C:KQ104" data-label="1♦ – 1♠: skok w nowy kolor 3♣"></div>
<p>20 PC: o wiele za dużo na nieforsujące 2♣ i poza przedziałem 18-19 rebidu 2BA. 3♣ forsuje do dograny, a ty szukasz najlepszego kontraktu.</p>

<h3>Po 1BA lub po podniesieniu</h3>
<p>Po 1♠ – 1BA odpowiadający ma 6-10 i zwykle nie ma fitu. Ze zrównoważonym minimum pasuj; z szóstką powtórz kolor; pokaż drugi kolor (nowy kolor niższy od pierwszego nie jest forsujący) albo zainwituj skokiem, mając 16-18 lub więcej. Po 1♠ – 2♠ odpowiadający ma 6-10 z poparciem: z minimum pasuj, ze średnią ręką zainwituj odzywką 3♠, z maksimum zalicytuj 4♠. Dobrą wskazówką jest tu liczenie przegrywających: z 6 przegrywającymi inwituj, z 5 licytuj dograną.</p>
<div class="tip">Odpowiedź na wysokości dwóch (1♠ – 2♣) już pokazuje 10+ i forsuje na jedno okrążenie, więc otwierający może dać naturalny, opisowy rebid i nie musi skakać tylko po to, żeby licytacja trwała dalej.</div>
`,
    keyPoints: [
      'Sklasyfikuj rękę: minimum 12-15, średnia 16-18, maksimum 19-21.',
      'Rebid 1BA = zrównoważone 12-14; skok na 2BA = zrównoważone 18-19.',
      'Z czterokartowym poparciem podnieś starszy kolor odpowiadającego: na wysokość dwóch z minimum, trzech ze średnią ręką, do dograny z maksimum.',
      'Rewers (wyższy nowy kolor na wysokości dwóch) pokazuje 17+, jest forsujący i pokazuje, że pierwszy kolor jest dłuższy.',
      'Skok otwierającego w nowy kolor pokazuje 19+ i forsuje do dograny.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠. Masz ♠Q4 ♥K83 ♦AQ1063 ♣K72 (14 PC). Jaki jest twój rebid?',
        options: ['1BA', '2♦', '2BA', '2♠'],
        answer: 0,
        explain: 'Ręka jest zrównoważona i ma 12-14 PC, czyli dokładnie to, co pokazuje 1BA. 2♦ sugeruje sześć kar, a 2♠ obiecuje cztery piki.',
      },
      {
        q: '1♣ – 1♥. Masz ♠A5 ♥KQ94 ♦K6 ♣AQ872 (18 PC). Jaki jest twój rebid?',
        options: ['2♥', '3♥', '4♥', '2BA'],
        answer: 2,
        explain: 'Z czterokartowym poparciem licz punkty w poparciu: 18 PC + 1 za każdy dubel = 20, czyli maksimum. Zalicytuj dograną: 4♥.',
      },
      {
        q: 'W której z tych licytacji otwierający daje rewers?',
        options: ['1♥ – 1♠ – 2♣', '1♦ – 1♠ – 2♥', '1♠ – 1BA – 2♥', '1♣ – 1♥ – 1♠'],
        answer: 1,
        explain: 'Kiery są wyższe od kar, a 2♥ pada na wysokości dwóch, więc żeby wybrać pierwszy kolor otwierającego, partner musi zalicytować 3♦. W pozostałych licytacjach drugi kolor jest niższy albo zgłoszony na wysokości jednego.',
      },
      {
        q: '1♦ – 1♥. Masz ♠A6 ♥J4 ♦AKJ852 ♣K93 (16 PC). Jaki jest twój rebid?',
        options: ['2♦', '3♦', '2BA', '1BA'],
        answer: 1,
        explain: 'Średnia ręka z dobrą szóstką: skok na 3♦ pokazuje 16-18 i inwituje. 2♦ pokazałoby minimum, a 1BA lub 2BA – rękę zrównoważoną.',
      },
      {
        q: '1♠ – 2♠. Masz ♠AQJ84 ♥K73 ♦A62 ♣95 (14 PC). Co robisz?',
        options: ['Pas', '3♠', '4♠', '2BA'],
        answer: 0,
        explain: '14 PC + 1 za piątego pika = 15, czyli minimum. LTC się zgadza: ♠AQJ 1, ♥K73 2, ♦A62 2, ♣95 2 = 7 przegrywających, tyle co minimalne otwarcie. Naprzeciw podniesienia 6-10 dograna jest mało prawdopodobna, więc pasuj.',
      },
    ],
  },

  {
    id: 'notrump-bidding',
    title: 'Otwarcia bez atu i odpowiedzi',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Odpowiedzi na 1BA i 2BA: Stayman, transfery Jacoby’ego, transfer na młodszy, inwity i ilościowe 4BA.',
    body: `
<h3>Dlaczego otwarcia bez atu są łatwe</h3>
<p>1BA pokazuje 15-17 PC i rękę zrównoważoną (może zawierać piątkę). Ponieważ ręka otwierającego jest tak dobrze określona, odpowiadający zwykle od razu wie, gdzie para powinna grać, i zostaje kapitanem. Dodaj swoje punkty do 15-17 partnera: z łączną siłą 25 lub więcej chcesz grać dograną.</p>

<h3>Odpowiedzi na 1BA</h3>
<table>
<thead><tr><th>Odpowiedź</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>Pas</td><td>0-7 bez długiego starszego</td></tr>
<tr><td>2♣</td><td>Stayman: 8+ PC i czwórka w starszym</td></tr>
<tr><td>2♦</td><td>Transfer: 5+ kierów, dowolna siła. Otwierający licytuje 2♥.</td></tr>
<tr><td>2♥</td><td>Transfer: 5+ pików, dowolna siła. Otwierający licytuje 2♠.</td></tr>
<tr><td>2♠</td><td>Transfer na trefle: otwierający licytuje 3♣. Słaba ręka z długim młodszym; spasuj 3♣ albo zalicytuj 3♦.</td></tr>
<tr><td>2BA</td><td>8-9, inwit</td></tr>
<tr><td>3BA</td><td>10-15, do gry</td></tr>
<tr><td>4♣</td><td>Gerber: pytanie o asy</td></tr>
<tr><td>4♦ / 4♥</td><td>Transfer Texas: 6+ kierów / pików i siła na dograną. Otwierający licytuje 4♥ / 4♠.</td></tr>
<tr><td>4BA</td><td>16-17, ilościowe: inwit do 6BA</td></tr>
</tbody>
</table>

<h3>Stayman</h3>
<p>2♣ pyta otwierającego o czwórkę w starszym. Otwierający odpowiada 2♦ (brak czwórki w starszym), 2♥ (cztery kiery, być może również cztery piki) albo 2♠ (cztery piki, bez czterech kierów). Dalej:</p>
<ul>
<li>Jeśli fit się znalazł, podnieś na trzy, by zainwitować, albo na cztery, by grać dograną.</li>
<li>Jeśli nie, zalicytuj 2BA z 8-9 albo 3BA z 10-15.</li>
<li>Jeśli otwierający pokazał kiery, a ty masz piki, zalicytuj 2BA lub 3BA. Otwierający, który może mieć oba starsze, przejdzie na piki, jeśli ma ich cztery.</li>
</ul>
<div class="hand" data-cards="S:KJ84 H:Q1063 D:A72 C:85" data-label="Partner otworzył 1BA: licytuj 2♣"></div>
<p>10 PC i dwie czwórki w starszych. Na 2♦ zalicytuj 3BA, na 2♥ – 4♥, na 2♠ – 4♠. Stayman wymaga 8+ PC, bo po odpowiedzi 2♦ musisz móc zalicytować co najmniej 2BA.</p>

<h3>Transfery Jacoby’ego</h3>
<p>Z piątką lub dłuższym kolorem starszym daj transfer: zalicytuj kolor poniżej swojego i pozwól, by twój kolor zgłosił otwierający. Rozgrywającym zostaje silna ręka, a pierwszy wist wychodzi do niej, a nie przez nią. Transfery działają przy każdej sile, od zera do siły szlemowej.</p>
<div class="hand" data-cards="S:Q97542 H:83 D:J62 C:74" data-label="Partner otworzył 1BA: 2♥, potem pas"></div>
<p>3 PC. 2♠ zagra się dużo lepiej niż 1BA. Daj transfer odzywką 2♥ i spasuj 2♠ otwierającego.</p>
<p>Po przyjęciu transferu odpowiadający kontynuuje:</p>
<table>
<thead><tr><th>Następna odzywka</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>Pas</td><td>0-7, zamknięcie licytacji</td></tr>
<tr><td>2BA</td><td>8-9 z dokładnie pięcioma kartami w starszym (wybiera otwierający)</td></tr>
<tr><td>3 w kolor starszy</td><td>8-9 z sześcioma lub więcej kartami, inwit</td></tr>
<tr><td>3BA</td><td>10-15 z dokładnie pięcioma kartami (otwierający wybiera 3BA albo 4 w starszy)</td></tr>
<tr><td>4 w kolor starszy</td><td>10-15 z sześcioma lub więcej kartami, do gry (przy transferach Texas zalicytuj od razu 4♦ lub 4♥)</td></tr>
<tr><td>Nowy kolor</td><td>Naturalny i forsujący</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:6 H:KJ1074 D:A85 C:Q963" data-label="Partner otworzył 1BA: 2♦, potem 3BA"></div>
<p>10 PC i pięć kierów. Daj transfer, a potem zalicytuj 3BA. Z trzema lub więcej kierami otwierający licytuje 4♥, z dublem pasuje.</p>
<p>Z czterokartowym poparciem i 17 PC otwierający <strong>superakceptuje</strong> transfer skokiem: 1BA – 2♦ – 3♥. Odpowiadający licytuje wtedy dograną praktycznie z każdą ręką, bo fit jest co najmniej dziewięciokartowy, a otwierający ma górę przedziału.</p>

<h3>Długie młodsze, inwity i próby szlemowe</h3>
<p>Ze słabą ręką i sześcioma lub więcej kartami w młodszym zalicytuj 2♠: otwierający musi powiedzieć 3♣, a ty pasujesz z treflami albo licytujesz 3♦ z karami. Z ręką ♠52 ♥742 ♦J3 ♣Q108653: 1BA – 2♠ – 3♣ – pas.</p>
<p>2BA inwituje dograną z 8-9. Otwierający pasuje z 15, licytuje 3BA z 17, a z 16 decyduje według oceny (przyjmuje z dobrymi dziesiątkami i dziewiątkami albo z piątką). 4BA nie jest tu Blackwoodem: pokazuje 16-17 i prosi otwierającego o 6BA z maksimum. Z ręką ♠KQ5 ♥AJ4 ♦KJ63 ♣Q72 (16 PC) zalicytuj 4BA: 16 + 15-17 = 31-33 łącznie, więc szlemik jest dobry tylko wtedy, gdy otwierający ma górę przedziału.</p>

<h3>Odpowiedzi na 2BA</h3>
<p>Otwarcie 2BA pokazuje 20-21. Te same narzędzia działają o wysokość wyżej: 3♣ to Stayman, 3♦ i 3♥ to transfery, 4♦ i 4♥ to transfery Texas, 3BA pokazuje 4-10 punktów, a 4BA (11-12) jest ilościowe. Nawet 4 punkty wystarczą, by podnieść do dograny.</p>
<div class="tip">Z piątką w starszym i siłą na dograną najpierw daj transfer, a potem zalicytuj 3BA. Otwierający zna swoją rękę i wie, że masz pięć kart, więc to on dokonuje ostatecznego wyboru między 3BA a czterema w kolor starszy.</div>
<div class="warn">Nie używaj Staymana ze zrównoważoną ręką 8+ bez czwórki w starszym. Skończy się na zgadywaniu; po prostu zalicytuj 2BA lub 3BA.</div>
`,
    keyPoints: [
      '1BA = zrównoważone 15-17; odpowiadający dodaje punkty i wyznacza kontrakt.',
      '2♣ Stayman (8+, czwórka w starszym): odpowiedzi 2♦ brak, 2♥ kiery (być może także piki), 2♠ tylko piki.',
      '2♦ i 2♥ to transfery na kiery i piki przy dowolnej sile; 2♠ to transfer na trefle dla słabej ręki z długim młodszym.',
      '2BA = 8-9 inwit, 3BA = 10-15, 4BA = 16-17 ilościowe (nie Blackwood).',
      'Z czterokartowym poparciem i 17 PC otwierający superakceptuje transfer skokiem na trzy w kolor starszy.',
      'Po 2BA: 3♣ Stayman, 3♦/3♥ transfery, 4♦/4♥ Texas, 3BA z 4-10, 4BA ilościowe.',
    ],
    quiz: [
      {
        q: 'Partner otwiera 1BA. Masz ♠J8752 ♥84 ♦932 ♣Q65 (3 PC). Jaki jest twój plan?',
        options: ['Pas', '2♥ (transfer), potem pas na 2♠', '2♠', '2♣'],
        answer: 1,
        explain: 'Słaba ręka z pięcioma pikami zagra lepiej w 2♠ niż w 1BA, bo długie atuty dają lewy. Daj transfer odzywką 2♥ i pasuj. 2♠ byłoby transferem na trefle, a Stayman 2♣ wymaga 8+.',
      },
      {
        q: '1BA – 2♣ – 2♥. Masz ♠KJ84 ♥A962 ♦Q73 ♣J5 (11 PC). Co teraz?',
        options: ['3BA', '4♥', '3♥', '2BA'],
        answer: 1,
        explain: 'Otwierający ma cztery kiery, więc jest fit 4-4, a 11 + 15-17 wystarcza na dograną. Zalicytuj 4♥; fit 4-4 w starszym zwykle gra się lepiej niż 3BA.',
      },
      {
        q: 'Twoje otwarcie to 1BA z ręką ♠KQ75 ♥AJ83 ♦K4 ♣Q62. Partner licytuje 2♣. Co odpowiadasz?',
        options: ['2♥', '2♠', '2♦', '2BA'],
        answer: 0,
        explain: 'Z oboma starszymi odpowiedz najpierw 2♥. Jeśli partner ma piki, a nie kiery, zalicytuje 2BA lub 3BA, a ty przejdziesz na piki.',
      },
      {
        q: '1BA – 2♦ – 2♥ – 3BA. Twoje otwarcie 1BA zawiera trzy kiery. Co robisz?',
        options: ['Pas, bo partner wybrał 3BA', '4♥: partner pokazał pięć kierów, więc macie ośmiokartowy fit', '4BA', '3♥'],
        answer: 1,
        explain: 'Transfer, a potem 3BA, pokazuje dokładnie pięć kierów i siłę na dograną. Z trzykartowym poparciem otwierający wybiera 4♥, z dublem pasuje na 3BA.',
      },
      {
        q: 'Partner otwiera 2BA. Masz ♠Q8642 ♥K7 ♦J73 ♣1052 (6 PC). Jaki jest twój plan?',
        options: ['3♠', '3♥, a na 3♠ – 3BA', '3BA', 'Pas'],
        answer: 1,
        explain: '20-21 naprzeciw 6 wystarcza na dograną. Daj transfer odzywką 3♥, a potem zalicytuj 3BA, pokazując dokładnie pięć pików; otwierający wybierze 4♠ z trzykartowym poparciem albo spasuje z dwiema kartami.',
      },
    ],
  },

  {
    id: 'planning-the-play',
    title: 'Plan rozgrywki',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Zanim zagrasz do pierwszej lewy, policz pewne lewy (w bez atu) albo przegrywające (w kontrakcie kolorowym) i ułóż plan.',
    body: `
<h3>Zatrzymaj się i zaplanuj przed pierwszą lewą</h3>
<p>Gdy dziadek wyłoży karty, większość początkujących od razu gra do pierwszej lewy. Silni gracze robią pauzę. To właśnie w pierwszej lewie często wygrywa się albo przegrywa kontrakt, a nie zaplanujesz jej, dopóki nie obejrzysz całości. Za każdym razem stosuj tę samą procedurę:</p>
<ol>
<li><strong>Policz.</strong> W bez atu policz pewne lewy: te, które weźmiesz bez oddania ręki. W kontrakcie kolorowym policz przegrywające w ręce z długimi atutami.</li>
<li><strong>Porównaj.</strong> Ilu dodatkowych lew potrzebujesz (w bez atu) albo ilu przegrywających musisz się pozbyć (w kolorze)?</li>
<li><strong>Znajdź źródła.</strong> Dodatkowe lewy dają wyrabianie długich kolorów, wybijanie wysokich kart, impasy i przebitki w ręce z krótszymi atutami. Przegrywające znikają dzięki przebitkom na stole, zrzutkom na lewy dziadka albo impasom.</li>
<li><strong>Poszukaj zagrożeń.</strong> Ile razy musisz oddać rękę? Który przeciwnik jest groźny? Czy masz potrzebne dojścia?</li>
<li><strong>Ustal kolejność rozgrywki</strong>, zaczynając od tego, którą kartę zagrać ze stołu i która ręka ma wziąć pierwszą lewę.</li>
</ol>

<h3>Przykład w bez atu: licz pewne lewy</h3>
<div class="deal" data-n="S:A5 H:KQJ10 D:742 C:8653" data-s="S:K83 H:654 D:AKQ C:A972" data-caption="3BA rozgrywa Południe. Zachód wistuje ♠Q."></div>
<div class="auction" data-calls="1NT P 2C P 2D P 3NT P P P" data-dealer="S"></div>
<p><strong>Liczenie:</strong> ♠AK (2), ♦AKQ (3), ♣A (1): sześć pewnych lew. Potrzebujesz jeszcze trzech.</p>
<p><strong>Źródła:</strong> kiery. Gdy wybijesz ♥A, kiery dziadka KQJ10 dadzą trzy lewy. Trefle nic nie dają: obrońcy mają K, Q, J i 10.</p>
<p><strong>Zagrożenie:</strong> obrońcy mogą przetrzymać ♥A aż do trzeciej rundy. Wtedy ostatni kier dziadka jest wysoki, ale potrzebujesz dojścia, żeby do niego dotrzeć. Jedynym bocznym dojściem do dziadka jest ♠A.</p>
<p><strong>Plan:</strong> w pierwszej lewie zagraj ze stołu nisko i weź lewę ♠K w ręce, zachowując ♠A jako dojście. Potem od razu graj kiery. Kiedykolwiek obrońcy wezmą asa, masz dziewięć lew: dwie pikowe, trzy kierowe, trzy karowe i jedną treflową. Jeśli nieostrożnie weźmiesz pierwszą lewę ♠A, obrońca, który przetrzyma ♥A do trzeciej rundy, odetnie czwartego kiera dziadka i weźmiesz tylko osiem lew.</p>
<div class="tip">Wybijaj wysokie karty przeciwników wcześnie, póki masz zatrzymania we wszystkich kolorach. Pewne lewy ściągaj na końcu, a nie na początku.</div>

<h3>Przykład w kolorze: licz przegrywające</h3>
<div class="deal" data-n="S:1064 H:A65 D:84 C:AJ876" data-s="S:AKQJ5 H:K84 D:A732 C:2" data-caption="4♠ rozgrywa Południe. Zachód wistuje ♥Q."></div>
<div class="auction" data-calls="1S P 2S P 4S P P P" data-dealer="S"></div>
<p><strong>Przegrywające w ręce Południa:</strong> piki – żadnej; kiery – jedna (trzecia runda); kara – trzy (siódemka, trójka i dwójka); trefle – żadnej (♣A dziadka pokrywa twojego singla). Razem cztery. Możesz sobie pozwolić na trzy.</p>
<p><strong>Źródło:</strong> dziadek ma tylko dwa kara. Po ♦A i jeszcze jednej rundzie dziadek będzie miał renons i przebije twoje trzecie karo małym atutem. Ta przebitka to dodatkowa lewa, bo bierze ją ręka z <em>krótszymi</em> atutami: własne atuty Południa i tak są lewami.</p>
<p><strong>Zagrożenie:</strong> jeśli najpierw ściągniesz trzy rundy atutów, dziadkowi nie zostanie atut do przebitki. Musisz zachować na stole co najmniej jeden atut, dopóki nie wykonasz przebitki.</p>
<p><strong>Plan:</strong> weź wist ♥A ze stołu, zagraj karo do asa i oddaj karo. Jeśli obrońcy wezmą lewę i zagrają atut (to ich najlepsza obrona), weź go i od razu przebij karo na stole. Teraz ściągnij atuty. Oddajesz jedną lewę kierową i dwie karowe.</p>
<div class="warn">„Zawsze najpierw ściągaj atuty” to dobry nawyk z jednym ważnym wyjątkiem: gdy potrzebujesz atutów dziadka do przebitek, wykonaj przebitki, zanim atuty znikną.</div>

<h3>Liczenie to nawyk</h3>
<p>Liczenie zajmuje kilka sekund, a brak liczenia potrafi drogo kosztować. W bez atu, jeśli pewne lewy już wystarczają do realizacji kontraktu, weź je i unikaj zbędnego ryzyka. Jeśli brakuje ci lew, zdecyduj, skąd przyjdą dodatkowe, <em>zanim</em> dotkniesz karty, bo często zależy od tego kolejność rozgrywki i wybór ręki, która weźmie pierwszą lewę.</p>
`,
    keyPoints: [
      'Zaplanuj rozgrywkę przed pierwszą lewą: policz, porównaj, znajdź źródła, poszukaj zagrożeń, a potem ustal kolejność.',
      'W bez atu licz pewne lewy; w kontrakcie kolorowym licz przegrywające w ręce z długimi atutami.',
      'Wybijaj wysokie karty przeciwników wcześnie, póki masz zatrzymania.',
      'Przebitki w ręce z krótszymi atutami (zwykle u dziadka) dają lewy; zachowaj atuty dziadka, dopóki nie wykonasz przebitek.',
      'Chroń dojścia, których będziesz potrzebować później.',
    ],
    quiz: [
      {
        q: 'Co najpierw liczysz w kontrakcie bez atu?',
        options: ['Przegrywające', 'Pewne lewy', 'Atuty', 'PC przeciwników'],
        answer: 1,
        explain: 'W bez atu nie ma przebitek, więc naturalną miarą są lewy, które weźmiesz bez oddania ręki. To, czego brakuje, mówi ci, ile lew musi przyjść z długich kolorów lub impasów.',
      },
      {
        q: 'Która przebitka daje dodatkową lewę?',
        options: ['Przebitka w ręce z długimi atutami', 'Przebitka w ręce z krótkimi atutami', 'Obie tak samo', 'Żadna'],
        answer: 1,
        explain: 'Długie atuty i tak wezmą lewy, więc przebijanie nimi zużywa tylko lewę, którą już masz. Przebitka atutem z krótszej ręki (zwykle dziadka) daje lewę, której te małe atuty inaczej by nie wzięły.',
      },
      {
        q: 'Dlaczego w rozdaniu 3BA powyżej bierze się pierwszą lewę ♠K w ręce, a nie ♠A na stole?',
        options: ['Żeby zachować ♠A dziadka jako dojście do kierów', 'Bo król jest wyższą kartą', 'Żeby przetrzymać zatrzymanie w pikach', 'Żeby odblokować piki'],
        answer: 0,
        explain: 'Jeśli obrońcy przetrzymają ♥A do trzeciej rundy, ostatni kier dziadka będzie wysoki, ale nie będzie jak do niego dojść – chyba że dziadek nadal ma ♠A.',
      },
      {
        q: 'Co pójdzie źle w rozdaniu 4♠ powyżej, jeśli rozgrywający od razu ściągnie trzy rundy atutów?',
        options: ['Nic, to najbezpieczniejsza rozgrywka', 'Dziadkowi nie zostanie atut do przebicia trzeciego kara', 'Obrońcy przebiją kiera', 'Rozgrywający straci kontrolę nad treflami'],
        answer: 1,
        explain: 'Dziadek miał tylko trzy atuty. Trzy rundy atutów zużywają je wszystkie, a rozgrywającemu zostają trzy przegrywające karowe oraz kierowa: o jedną za dużo.',
      },
    ],
  },

  {
    id: 'opening-leads',
    title: 'Pierwszy wist',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Jak wybrać kolor wistu i właściwą kartę w tym kolorze – przeciwko bez atu i przeciwko kontraktom kolorowym.',
    body: `
<h3>Dwie decyzje: kolor i karta</h3>
<p>Pierwszy wist to jedyna karta, którą zagrywasz, nie widząc dziadka, więc warto trzymać się dobrych nawyków. Najpierw wybierz kolor na podstawie licytacji i swojej ręki, a potem wyjdź w tym kolorze kartą zgodną z przyjętymi zasadami wistów, żeby partner mógł odczytać, co masz.</p>

<h3>Wybór koloru przeciwko bez atu</h3>
<ul>
<li>Jeśli partner licytował kolor, wistuj w niego, chyba że masz bardzo dobrą alternatywę.</li>
<li>W przeciwnym razie wistuj w swój najdłuższy i najsilniejszy kolor. Kontrakt bez atu to wyścig: obrońcy próbują wyrobić długie karty, zanim rozgrywający ściągnie swoje lewy.</li>
<li>Wybieraj kolory niezalicytowane. Unikaj kolorów licytowanych przez przeciwników.</li>
<li>Z bardzo słabą ręką bez dojść długi kolor, którego i tak nigdy nie ściągniesz, może być bezcelowy; lepszy bywa wist w prawdopodobnie długi kolor partnera (często starszy, którego przeciwnicy nie wymienili).</li>
</ul>

<h3>Wybór koloru przeciwko kontraktowi kolorowemu</h3>
<ul>
<li><strong>Dobre wisty:</strong> najwyższa z sekwensu; kolor partnera; singiel (zwłaszcza gdy masz asa atutowego albo partner może mieć dojście); as z AK.</li>
<li><strong>Wistuj w atu</strong>, gdy licytacja sugeruje, że dziadek będzie przebijał przegrywające rozgrywającego: rozgrywający pokazał dwa kolory, a dziadek wybrał drugi, albo dziadek pokazał krótkość.</li>
<li><strong>Unikaj:</strong> wistu spod asa (rozgrywający może wziąć lewę singlowym królem, a ty możesz nigdy nie wziąć lewy asem); wistu spod króla w widełki AQ rozgrywającego; wistu z honoru w dublu, np. Qx.</li>
</ul>
<div class="warn">Nigdy nie wistuj spod asa przeciwko kontraktowi kolorowemu. Jeśli musisz zagrać w ten kolor, wyjdź asem.</div>

<h3>Którą kartą wistować</h3>
<table>
<thead><tr><th>Karty w kolorze</th><th>Przeciwko bez atu</th><th>Przeciwko kolorowi</th></tr></thead>
<tbody>
<tr><td>K Q J 5</td><td>K</td><td>K</td></tr>
<tr><td>Q J 10 4</td><td>Q</td><td>Q</td></tr>
<tr><td>J 10 9 4</td><td>J</td><td>J</td></tr>
<tr><td>10 9 8 3</td><td>10</td><td>10</td></tr>
<tr><td>K Q 10 5</td><td>K</td><td>K</td></tr>
<tr><td>K J 10 5</td><td>J</td><td>J</td></tr>
<tr><td>Q 10 9 4</td><td>10</td><td>10</td></tr>
<tr><td>A K 7 4</td><td>A</td><td>A</td></tr>
<tr><td>K J 8 5 3</td><td>5 (czwarta od góry)</td><td>5, choć wist spod króla jest ryzykowny</td></tr>
<tr><td>A 10 6 3</td><td>3 (czwarta od góry)</td><td>Unikaj; jeśli musisz – A</td></tr>
<tr><td>Q 8 5</td><td>5</td><td>5</td></tr>
<tr><td>8 5 2</td><td>8 (najwyższa z blotek)</td><td>8</td></tr>
<tr><td>9 4</td><td>9</td><td>9</td></tr>
<tr><td>7 (singiel)</td><td>rzadko się nim wistuje</td><td>7, często dobry wist</td></tr>
</tbody>
</table>
<p>Zasady stojące za tabelą: wistuj najwyższą z sekwensu (trzy kolejne karty albo dwie kolejne i trzecia z jedną przerwą, jak w KQ10); z sekwensu wewnętrznego, takiego jak KJ10 lub Q109, wistuj najwyższą z przylegających kart (waletem lub dziesiątką); z AK wistuj asem; z dubla i z trzech blotek wistuj najwyższą; z honoru z dwiema lub trzema blotkami wistuj nisko (trzecią od góry z trzech kart, czwartą od góry z czterech); a przeciwko bez atu wistuj czwartą od góry ze swojego długiego koloru.</p>

<h3>Przykłady</h3>
<div class="hand" data-cards="S:KJ1074 H:83 D:Q62 C:A95" data-label="Wistujesz przeciwko 1BA – 3BA"></div>
<p>Wyjdź ♠J, najwyższą z sekwensu wewnętrznego KJ10. Piki to twój długi kolor, a wist waletem mówi też partnerowi, że masz dziesiątkę, ale nie masz damy.</p>
<div class="hand" data-cards="S:73 H:AK5 D:QJ104 C:9862" data-label="Wistujesz przeciwko 1♠ – 2♠ – 4♠"></div>
<p>Dwa bezpieczne wybory: ♥A (as z AK) i ♦Q (najwyższa z sekwensu). ♥A bierze lewę i pozwala obejrzeć dziadka, zanim zdecydujesz, co dalej, a sygnał partnera powie ci, czy kontynuować kiery.</p>
<div class="auction" data-calls="1S P 1NT P 2D P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ109 H:A73 D:852 C:J64" data-label="Wschód: wistujesz przeciwko 2♦"></div>
<p>Wistuj w atu. Północ ma pięć lub więcej pików i cztery lub więcej kar, a preferencja Południa dla kar sugeruje krótkość w pikach. Twoje silne piki oznaczają, że rozgrywający może uratować przegrywające pikowe tylko przebitkami na stole; każda runda atutów, którą zagrasz, odbiera dziadkowi jedną przebitkę.</p>
<div class="tip">Po każdym pierwszym wiście zadaj sobie pytanie, co on mówi partnerowi. Wisty według ustalonych zasad pozwalają drugiemu obrońcy policzyć kolor już od pierwszej lewy.</div>
`,
    keyPoints: [
      'Najpierw wybierz kolor: przeciwko bez atu kolor partnera, potem twój długi kolor; przeciwko kontraktowi kolorowemu sekwensy, kolor partnera, singiel albo atut.',
      'Wistuj najwyższą z sekwensu; z KJ10 waletem, z Q109 dziesiątką; z AK asem.',
      'Przeciwko bez atu wistuj czwartą od góry z najdłuższego i najsilniejszego koloru.',
      'Z dubla i z trzech blotek wistuj najwyższą; z honoru z dwiema lub trzema blotkami – nisko.',
      'Nigdy nie wistuj spod asa przeciwko kontraktowi kolorowemu; wistuj w atu, gdy dziadek prawdopodobnie będzie przebijał.',
    ],
    quiz: [
      {
        q: 'Wistujesz przeciwko 3BA, a twoim długim kolorem jest ♠KQ1086. Którą kartą wychodzisz?',
        options: ['♠K', '♠8', '♠6', '♠Q'],
        answer: 0,
        explain: 'KQ10 to przerwany sekwens, więc wyjdź królem. To bezpieczne i zaczyna wyrabiać kolor; czwarta od góry (ósemka) mogłaby dać rozgrywającemu tanią lewę waletem.',
      },
      {
        q: 'Który z tych wistów przeciwko 4♥ jest najgorszy?',
        options: ['♦Q z ♦QJ10', '♣2 z ♣AJ62', 'Singiel pikowy', '♣8 z ♣852'],
        answer: 1,
        explain: 'Wist spod asa przeciwko kontraktowi kolorowemu to klasyczny przegrywający wist: rozgrywający może wziąć tanią lewę królem lub damą, a twój as może później zostać przebity.',
      },
      {
        q: 'Partner wszedł 1♠, a przeciwnicy doszli do 3BA. Masz ♠Q85. Którą kartą wychodzisz?',
        options: ['♠Q', '♠8', '♠5', 'W inny kolor'],
        answer: 2,
        explain: 'Wistuj w kolor partnera, a z honoru z dwiema blotkami wyjdź nisko. Wist damą mógłby ją zmarnować, jeśli partner ma AJ, a gdy ją zachowasz, twoja strona może nią później pobić jeden z honorów rozgrywającego.',
      },
      {
        q: 'Decydujesz się wistować z ♦94. Którą kartą?',
        options: ['♦9', '♦4', 'Obojętnie którą', 'Żadną: nigdy nie wistuj z dubla'],
        answer: 0,
        explain: 'Z dubla wistuj najwyższą. Gdy później zagrasz czwórkę, partner zobaczy najpierw wyższą, potem niższą kartę i będzie wiedział, że kolor był u ciebie dwukartowy.',
      },
      {
        q: 'Kiedy wist atutowy jest najbardziej atrakcyjny?',
        options: ['Gdy masz asa atutowego', 'Gdy licytacja wskazuje, że dziadek jest krótki w bocznym kolorze rozgrywającego i będzie przebijał', 'Gdy masz singla w bocznym kolorze', 'Zawsze, gdy przeciwnicy grają w kolorze starszym'],
        answer: 1,
        explain: 'Wist atutowy ogranicza przebitki dziadka. Jest najlepszy, gdy rozgrywający pokazał drugi kolor, dziadek dał preferencję albo wiadomo, że dziadek jest krótki w kolorze, w którym jesteś silny.',
      },
    ],
  },

  {
    id: 'duplicate-scoring',
    title: 'Zapis porównawczy',
    topic: 'Scoring & tactics',
    level: 'Beginner',
    summary: 'Jak liczy się wynik rozdania w brydżu porównawczym: wartość lew, premie za częściówkę, dograną i szlemy, nadróbki, wpadki i wpływ kontry.',
    body: `
<h3>Każde rozdanie liczy się osobno</h3>
<p>W brydżu porównawczym każde rozdanie zapisuje się oddzielnie. Nie przenosi się częściówek z jednego rozdania na następne, jak w brydżu robrowym. Przy każdym rozdaniu zaznaczone jest, kto jest <strong>po partii</strong>; strona po partii dostaje większe premie za dograną i szlemy, ale płaci też wyższe kary za wpadki.</p>

<h3>Krok 1: zapis za lewy</h3>
<p>Do zapisu za lewy liczą się tylko lewy zalicytowane i ugrane:</p>
<table>
<thead><tr><th>Miano</th><th>Za każdą zalicytowaną i ugraną lewę</th></tr></thead>
<tbody>
<tr><td>♣ lub ♦</td><td>20</td></tr>
<tr><td>♥ lub ♠</td><td>30</td></tr>
<tr><td>BA</td><td>40 za pierwszą lewę, 30 za każdą następną</td></tr>
</tbody>
</table>
<p>Kontrakty z kontrą dają podwójny zapis za lewy, z rekontrą – poczwórny. 2♥ jest więc warte 60, ale 2♥ z kontrą – 120.</p>

<h3>Krok 2: premie</h3>
<table>
<thead><tr><th>Premia</th><th>Przed partią</th><th>Po partii</th></tr></thead>
<tbody>
<tr><td>Częściówka (zapis za lewy poniżej 100)</td><td>50</td><td>50</td></tr>
<tr><td>Dograna (zapis za lewy 100 lub więcej)</td><td>300</td><td>500</td></tr>
<tr><td>Szlemik (wysokość 6)</td><td>dodatkowo 500</td><td>dodatkowo 750</td></tr>
<tr><td>Szlem (wysokość 7)</td><td>dodatkowo 1000</td><td>dodatkowo 1500</td></tr>
<tr><td>Ugranie kontraktu z kontrą (premia za kontrę)</td><td>50</td><td>50</td></tr>
<tr><td>Ugranie kontraktu z rekontrą</td><td>100</td><td>100</td></tr>
</tbody>
</table>
<p>Premie za szlemy dolicza się do premii za dograną. Dograna wymaga zapisu za lewy 100: 3BA (40 + 30 + 30), 4♥ lub 4♠ (120), 5♣ lub 5♦ (100).</p>

<h3>Krok 3: nadróbki</h3>
<p>Nadróbki bez kontry liczy się według zwykłej wartości lewy (20, 30 lub 30 w bez atu). Nadróbki z kontrą są warte po 100 przed partią i po 200 po partii; z rekontrą – 200 i 400.</p>

<h3>Przegrany kontrakt: wpadki</h3>
<table>
<thead><tr><th>Wpadki</th><th>Przed</th><th>Przed, z kontrą</th><th>Po</th><th>Po, z kontrą</th></tr></thead>
<tbody>
<tr><td>1</td><td>50</td><td>100</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>100</td><td>300</td><td>200</td><td>500</td></tr>
<tr><td>3</td><td>150</td><td>500</td><td>300</td><td>800</td></tr>
<tr><td>4</td><td>200</td><td>800</td><td>400</td><td>1100</td></tr>
<tr><td>5</td><td>250</td><td>1100</td><td>500</td><td>1400</td></tr>
</tbody>
</table>
<p>Z kontrą przed partią: 100 za pierwszą wpadkę, po 200 za drugą i trzecią, po 300 za każdą następną. Z kontrą po partii: 200 za pierwszą, po 300 za każdą następną. Wpadki z rekontrą są warte dwa razy tyle, co z kontrą.</p>

<h3>Wyniki warte zapamiętania</h3>
<table>
<thead><tr><th>Kontrakt ugrany bez nadróbek</th><th>Przed partią</th><th>Po partii</th></tr></thead>
<tbody>
<tr><td>1BA</td><td>90</td><td>90</td></tr>
<tr><td>2♥ lub 2♠, 3♣ lub 3♦</td><td>110</td><td>110</td></tr>
<tr><td>2BA</td><td>120</td><td>120</td></tr>
<tr><td>3♥ lub 3♠</td><td>140</td><td>140</td></tr>
<tr><td>3BA</td><td>400</td><td>600</td></tr>
<tr><td>4♥ lub 4♠</td><td>420</td><td>620</td></tr>
<tr><td>5♣ lub 5♦</td><td>400</td><td>600</td></tr>
<tr><td>6♥ lub 6♠</td><td>980</td><td>1430</td></tr>
<tr><td>6BA</td><td>990</td><td>1440</td></tr>
<tr><td>7♠</td><td>1510</td><td>2210</td></tr>
<tr><td>7BA</td><td>1520</td><td>2220</td></tr>
<tr><td>2♥ lub 2♠ z kontrą</td><td>470</td><td>670</td></tr>
<tr><td>1BA z kontrą</td><td>180</td><td>180</td></tr>
</tbody>
</table>
<p>Przykład: 4♠ z jedenastoma lewami, przed partią. Zapis za lewy 4 × 30 = 120, premia za dograną 300, jedna nadróbka 30: razem 450. Ten sam wynik po partii: 120 + 500 + 30 = 650.</p>
<p>Przykład: 3BA z kontrą, dziesięć lew, po partii. Zapis za lewy (40 + 30 + 30) × 2 = 200, premia za dograną 500, premia za kontrę 50, jedna nadróbka z kontrą 200: razem 950.</p>
<div class="warn">Kontra może zamienić częściówkę w dograną: 2♥ z kontrą ma zapis za lewy 120, więc ugranie daje 470 lub 670 zamiast 110. Nie kontruj karnie kontraktu na niskiej wysokości, jeśli nie spodziewasz się go obłożyć.</div>
<div class="tip">Zauważ, że 5♣ i 3BA dają ten sam zapis, ale 3BA wymaga o dwie lewy mniej. To jeden z powodów, dla których dograne w bez atu i w kolorach starszych są lepsze od dogranych w młodszych.</div>
`,
    keyPoints: [
      'Wartość lew: młodsze 20, starsze 30, bez atu 40, a potem 30; z kontrą ×2, z rekontrą ×4.',
      'Dograna (zapis za lewy 100+) daje 300 przed partią lub 500 po partii; częściówka daje 50.',
      'Premie za szlemy: szlemik 500/750, szlem 1000/1500, doliczane do premii za dograną.',
      'Wpadki: 50/100 bez kontry; z kontrą 100-300-500-800 przed partią i 200-500-800-1100 po partii.',
      'Ugranie kontraktu z kontrą daje 50 premii za kontrę, a nadróbki z kontrą są warte po 100 lub 200.',
    ],
    quiz: [
      {
        q: 'Ugrywasz 4♥ bez nadróbek, po partii. Ile zapisujesz?',
        options: ['420', '620', '650', '600'],
        answer: 1,
        explain: 'Zapis za lewy 4 × 30 = 120 plus premia za dograną po partii 500: 620.',
      },
      {
        q: 'Bierzesz dziesięć lew w 3BA, przed partią. Ile zapisujesz?',
        options: ['400', '430', '460', '630'],
        answer: 1,
        explain: '40 + 30 + 30 = 100 za kontrakt, 300 za dograną przed partią i 30 za nadróbkę: 430.',
      },
      {
        q: 'Przed partią wpadasz bez trzech z kontrą. Ile zapisują przeciwnicy?',
        options: ['300', '500', '800', '150'],
        answer: 1,
        explain: 'Przed partią z kontrą: 100 za pierwszą wpadkę i po 200 za drugą i trzecią: 100 + 200 + 200 = 500.',
      },
      {
        q: 'Przeciwnicy ugrywają 2♠ z kontrą, przed partią. Ile zapisują?',
        options: ['110', '220', '470', '670'],
        answer: 2,
        explain: 'Z kontrą zapis za lewy wynosi 2 × 30 × 2 = 120, a to już dograna: 120 + 300 premii za dograną + 50 premii za kontrę = 470.',
      },
      {
        q: 'Ugrywasz 6♠ bez nadróbek, przed partią. Ile zapisujesz?',
        options: ['980', '1430', '920', '1010'],
        answer: 0,
        explain: 'Zapis za lewy 6 × 30 = 180, premia za dograną 300 i premia za szlemika 500: 980. Po partii byłoby to 180 + 500 + 750 = 1430.',
      },
    ],
  },

  {
    id: 'establishing-long-suits',
    title: 'Wyrabianie długich kolorów',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Jak zamienić blotki długiego koloru w lewy i jak zachować dojścia potrzebne, by je ściągnąć.',
    body: `
<h3>Skąd się biorą dodatkowe lewy</h3>
<p>W większości kontraktów bez atu brakujące lewy pochodzą z długich kolorów. Gdy przeciwnikom skończą się karty w kolorze, każda twoja pozostała karta w tym kolorze jest lewą, nawet dwójka. Zamienianie blotek w lewy nazywa się <strong>wyrabianiem</strong> koloru.</p>

<h3>Liczenie rund</h3>
<p>Żeby wiedzieć, ile lew da kolor, zastanów się, jak prawdopodobnie dzielą się karty przeciwników. Z A K 6 4 2 naprzeciw 7 5 3 masz osiem kart, a przeciwnicy pięć. Jeśli ich karty dzielą się 3-2 (w 68% przypadków), trzy rundy je wyczerpią: bierzesz asem i królem, oddajesz jedną rundę, a ostatnie dwie karty są lewami. Cztery lewy. Przy podziale 4-1 potrzebujesz czterech rund i kolor daje tylko trzy lewy.</p>
<table>
<thead><tr><th>Brakujące karty</th><th>Najbardziej prawdopodobny podział</th><th>Szansa</th></tr></thead>
<tbody>
<tr><td>5</td><td>3-2</td><td>68%</td></tr>
<tr><td>6</td><td>4-2 (3-3 to tylko 36%)</td><td>48%</td></tr>
<tr><td>7</td><td>4-3</td><td>62%</td></tr>
</tbody>
</table>

<h3>Lewę, którą musisz oddać, oddaj wcześnie</h3>
<div class="deal" data-n="S:765 H:83 D:AK642 C:742" data-s="S:AK4 H:AQ5 D:753 C:AKJ5" data-caption="3BA rozgrywa Południe. Zachód wistuje ♠Q."></div>
<div class="auction" data-calls="2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Liczenie:</strong> ♠AK, ♥A, ♦AK, ♣AK: siedem pewnych lew. Potrzeba dwóch więcej, a mogą je dać kara, jeśli podzielą się 3-2.</p>
<p><strong>Pułapka:</strong> dziadek nie ma dojścia poza karami. Jeśli zagrasz ♦A, ♦K i trzecie karo, obrońcy wezmą trzecią rundę, a dwa długie kara dziadka zostaną odcięte. Weźmiesz siedem lew.</p>
<p><strong>Rozwiązanie:</strong> weź ♠A i od razu zagraj małe karo z obu rąk, <em>przepuszczając</em> pierwszą rundę. Weź lewę po powrocie obrońców, zagraj karo do asa i ściągnij króla; jeśli kolor podzielił się 3-2, przeciwnikom skończyły się kara, a ty nadal jesteś na stole i ściągasz dwa długie kara. Dziewięć lew: dwie pikowe, kierowa, cztery karowe i dwie treflowe.</p>
<p>Przepuszczenie nic nie kosztuje: jedną lewę karową i tak musisz oddać. Przepuszczając, oddajesz ją wtedy, gdy dziadek ma jeszcze A i K, by na niego wrócić.</p>
<div class="tip">Gdy w kolorze trzeba oddać lewę, a długa ręka ma mało dojść, oddaj tę lewę w pierwszej rundzie, a nie w ostatniej.</div>

<h3>Odblokowanie: najpierw wysokie karty z krótkiej ręki</h3>
<p>Z ♣KQ3 naprzeciw ♣A8642 zagraj najpierw króla i damę, a potem przejdź trójką do asa. Jeśli najpierw ściągniesz asa, K i Q zostaną same w jednej ręce i kolor się zablokuje: bez bocznego dojścia nie wrócisz do długich kart. Ta sama zasada działa zawsze, gdy jedna ręka jest krótka: najpierw ściągaj honory z krótkiej ręki.</p>

<h3>Wybijanie wysokich kart przeciwników</h3>
<p>Niektóre kolory w ogóle nie mają problemu z blotkami; trzeba w nich tylko wybić asa przeciwników. KQJ10 naprzeciw blotek daje trzy lewy, gdy as już wypadnie. Takie kolory zaczynaj grać wcześnie, póki masz zatrzymania w pozostałych kolorach, żeby obrońcy nie zdążyli przedtem wyrobić własnego długiego koloru.</p>

<h3>Który kolor wyrabiać</h3>
<ul>
<li>Wybieraj kolor, w którym trzeba oddać najmniej lew i który ma najbardziej prawdopodobny korzystny podział.</li>
<li>Oddawaj rękę raczej temu przeciwnikowi, który nie może ci zaszkodzić (zobacz lekcje „Przepuszczanie i dojścia” oraz „Unikanie: nie wpuszczaj groźnego przeciwnika do ręki”).</li>
<li>Sprawdź dojścia: kolor, który możesz wyrobić, ale do którego nigdy nie dojdziesz, nie jest nic wart.</li>
<li>W kontrakcie kolorowym długie kolory boczne wyrabia się tak samo, często przebijając blotki w ręce z długimi atutami, aż pozostałe staną się wysokie.</li>
</ul>
<div class="warn">Nie ściągaj najpierw wszystkich pewnych lew, „żeby zobaczyć, co się stanie”. Każda ściągnięta lewa wyrabia też lewy obrońcom i niszczy twoje dojścia i zatrzymania.</div>
`,
    keyPoints: [
      'Blotki stają się lewami, gdy przeciwnikom skończą się karty w kolorze.',
      'Licz rundy: przy pięciu brakujących kartach podział 3-2 (68%) wymaga trzech rund.',
      'Przepuść rundę, którą musisz oddać, póki długa ręka ma jeszcze wysokie karty jako dojścia.',
      'Odblokowuj, ściągając najpierw honory z krótkiej ręki.',
      'Zaczynaj grać swój długi kolor wcześnie, zanim obrońcy wyrobią swój.',
    ],
    quiz: [
      {
        q: 'Masz A K 6 4 2 naprzeciw 7 5 3. Ile lew może dać ten kolor, jeśli pięć brakujących kart dzieli się 3-2?',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explain: 'Trzy rundy wyczerpują podział 3-2. Dwie z tych rund bierzesz, jedną oddajesz; pozostałe dwie karty w długiej ręce są lewami: 4 lewy.',
      },
      {
        q: 'Dlaczego w rozdaniu 3BA powyżej przepuszcza się pierwszą rundę kar?',
        options: ['Żeby sprawdzić, kto ma damę', 'Żeby zachować ♦A i ♦K jako dojścia do długich kar', 'Żeby przepuścić piki', 'Bo przepuszczenie zawsze daje dodatkową lewę'],
        answer: 1,
        explain: 'Dziadek nie ma bocznego dojścia. Gdy najpierw oddasz nieuniknioną lewę karową, po asie i królu długie karty można ściągnąć bez potrzeby powrotu na stół.',
      },
      {
        q: 'Masz ♣KQ3 w ręce i ♣A8642 na stole, bez innego dojścia do dziadka. Jak grasz trefle?',
        options: ['Najpierw as, potem król i dama', 'Najpierw król i dama, potem mały trefl do asa', 'Wyjście dwójką ze stołu', 'To bez znaczenia'],
        answer: 1,
        explain: 'Najpierw ściągnij honory z krótkiej ręki. Po królu i damie możesz jeszcze przejść trójką do asa i, jeśli kolor podzielił się 3-2, ściągnąć długie karty. Gdy zaczniesz od asa, K i Q zablokują kolor.',
      },
      {
        q: 'Przeciwnicy mają w kolorze sześć kart. Jak często dzielą się one 3-3?',
        options: ['36%', '48%', '50%', '68%'],
        answer: 0,
        explain: 'Przy parzystej liczbie brakujących kart równy podział jest mniej prawdopodobny, niż mogłoby się wydawać: 3-3 to około 36%, a 4-2 – około 48%.',
      },
    ],
  },

  {
    id: 'finesses',
    title: 'Impasy',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Jak brać lewy kartami, które nie są najwyższe, grając w ich kierunku, i kiedy impasować, a kiedy grać z góry na spadnięcie honoru.',
    body: `
<h3>Idea</h3>
<p>Impas to próba wzięcia lewy kartą, która nie jest najwyższą kartą pozostającą w grze, przez zagranie jej <em>po</em> przeciwniku, który ma wyższą kartę. Robisz to, grając <strong>w kierunku</strong> karty, która ma wziąć lewę.</p>
<p>Najprostszy przypadek: dziadek (Północ) ma ♠A Q, a ty (Południe) dwa małe piki. Zagraj małego pika z ręki. Jeśli Zachód dołoży nisko, zagraj damę. Jeśli króla ma Zachód, dama bierze; jeśli ma go Wschód, dama przegrywa. Tak czy inaczej as pozostaje lewą. Zwykły impas udaje się w połowie przypadków, a próba nic nie kosztuje, skoro i tak musisz zagrać ten kolor.</p>

<h3>Gra w kierunku honoru</h3>
<p>Z K 5 na stole i 6 4 w ręce zagraj z ręki w kierunku króla. Jeśli asa ma Zachód, król weźmie lewę: jeśli Zachód zagra asa, król będzie wyrobiony; jeśli Zachód przepuści, król od razu weźmie lewę. Jeśli zamiast tego wyjdziesz królem ze stołu, nie weźmie on lewy, dopóki as jest w grze.</p>
<div class="warn">Wyjście honorem ma sens tylko wtedy, gdy możesz sobie pozwolić na jego przykrycie, czyli gdy masz karty tuż pod nim. Wyjdź damą z Q J 10 naprzeciw A 3 2, ale nie z Q 3 2 w ręce naprzeciw A 5 4 na stole: jeśli dama zostanie przykryta, nie zostanie ci nic do wypromowania. Zamiast tego zagraj nisko ze stołu w kierunku damy, która weźmie lewę zawsze, gdy króla ma Wschód.</div>

<h3>Impasy powtórzone i podwójne</h3>
<table>
<thead><tr><th>Układ</th><th>Jak grać</th><th>Wynik</th></tr></thead>
<tbody>
<tr><td>A Q naprzeciw 3 2</td><td>Graj w kierunku A Q i impasuj damą</td><td>2 lewy w 50%</td></tr>
<tr><td>K 5 naprzeciw 6 4</td><td>Graj w kierunku K</td><td>1 lewa w 50%</td></tr>
<tr><td>A Q 10 naprzeciw 4 3 2</td><td>Impasuj dziesiątką, potem damą</td><td>3 lewy w 25%, co najmniej 2 lewy w 75%</td></tr>
<tr><td>A J 10 naprzeciw 4 3 2</td><td>Impasuj dziesiątką (lub waletem); jeśli przegra, impasuj ponownie</td><td>2 lewy w 75% (nie wychodzi tylko wtedy, gdy zarówno K, jak i Q leżą źle)</td></tr>
<tr><td>A K J naprzeciw 4 3 2</td><td>Impasuj waletem</td><td>3 lewy w około 50%</td></tr>
</tbody>
</table>
<p>Podwójny impas udaje się, gdy co najmniej jeden z dwóch brakujących honorów jest dobrze położony; każdy honor niezależnie znajduje się u Zachodu albo u Wschodu, więc szansa, że oba leżą źle, wynosi ½ × ½ = 25%.</p>

<h3>Impas czy z góry? „Osiem – impas, dziewięć – z góry”</h3>
<p>Gdy brakuje ci damy i nie masz innych wskazówek:</p>
<ul>
<li>Z <strong>ośmioma</strong> kartami (brakuje pięciu) impasuj. Impas (po wcześniejszym ściągnięciu asa na wypadek singlowej damy) udaje się w około 40% przypadków przy A K J x x (w około 51% przy A K J 10 x); gra na spadnięcie damy wychodzi tylko w około 33%.</li>
<li>Z <strong>dziewięcioma</strong> kartami (brakuje czterech) ściągnij asa i króla, licząc, że dama spadnie. To wychodzi w około 53% przypadków, impas – w około 51%.</li>
</ul>
<p>Ta reguła rozstrzyga tylko sytuacje wątpliwe. Informacje z licytacji (gracz, który otworzył albo zablokował, ma większość wysokich kart lub większość długości) albo z wcześniejszej rozgrywki ważą więcej niż te niewielkie różnice.</p>

<h3>Impas w praktyce</h3>
<div class="deal" data-n="S:7432 H:Q52 D:QJ7 C:KQ6" data-s="S:AQJ105 H:AK3 D:K84 C:A5" data-caption="6♠ rozgrywa Południe. Zachód wistuje ♥J."></div>
<p>Musisz oddać ♦A, więc szlemik zależy od tego, czy nie oddasz lewy atutowej. Brakuje ♠K, a z dziewięcioma atutami impasujesz go: możesz go wyłapać tylko wtedy, gdy ma go Wschód, bo Wschód gra przed twoimi A Q J 10 (albo gdy Zachód ma singlowego króla).</p>
<p>Weź wist ♥Q dziadka, żeby być we właściwej ręce, i zagraj małego atuta. Jeśli Wschód dołoży nisko, zagraj dziesiątkę (lub waleta). Jeśli weźmie ona lewę, być może trzeba będzie powtórzyć impas, więc wróć na stół ♣K i zagraj kolejnego atuta. Planowanie dojść do powtórzonego impasu to część zadania: dziadek ma dwa szybkie dojścia (♥Q i ♣K) i należy je wykorzystać na kolor atutowy, a nie zmarnować.</p>
<div class="tip">Reguła „osiem – impas, dziewięć – z góry” dotyczy damy. Gdy brakuje ci króla, nadal impasujesz go z dziewięcioma lub dziesięcioma kartami; dopiero z jedenastoma gra z góry jest nieco lepsza (52%).</div>
`,
    keyPoints: [
      'Graj w kierunku karty, która ma wziąć lewę; zwykły impas to szansa 50%.',
      'Wychodź honorem do impasu tylko wtedy, gdy masz karty tuż pod nim.',
      'Podwójny impas (A Q 10, A J 10) daje co najmniej jedną dodatkową lewę w 75% przypadków.',
      'Brak damy: z ośmioma kartami impasuj, z dziewięcioma graj z góry („osiem – impas, dziewięć – z góry”).',
      'Planuj dojścia do powtarzanych impasów.',
    ],
    quiz: [
      {
        q: 'Dziadek ma ♥A Q, a ty ♥7 4. Jak grasz kiery, próbując wziąć dwie lewy?',
        options: ['Ściągasz asa, potem wychodzisz damą', 'Wychodzisz damą ze stołu', 'Grasz małego kiera z ręki i dokładasz damę, jeśli Zachód dołoży nisko', 'Grasz asa i liczysz, że spadnie król'],
        answer: 2,
        explain: 'Dama może wziąć lewę tylko wtedy, gdy zostanie zagrana po królu. Graj z ręki, żeby Zachód musiał zagrać przed dziadkiem; jeśli Zachód ma króla, dama weźmie lewę.',
      },
      {
        q: 'Z A Q 10 na stole i 4 3 2 w ręce: jak często podwójny impas da ci co najmniej dwie lewy?',
        options: ['25%', '50%', '75%', '90%'],
        answer: 2,
        explain: 'Weźmiesz co najmniej dwie lewy, chyba że zarówno K, jak i J ma Wschód. Każda z tych kart jest u Zachodu w połowie przypadków, więc obie leżą źle tylko w ¼ przypadków.',
      },
      {
        q: 'Masz A K J 5 2 naprzeciw 6 4 3 (osiem kart), brakuje damy. Jaka jest najlepsza rozgrywka, gdy licytacja nic nie podpowiada?',
        options: ['Ściągnąć asa i króla', 'Ściągnąć asa, potem zaimpasować waletem', 'Wyjść waletem', 'Przepuścić jedną rundę'],
        answer: 1,
        explain: 'Z ośmioma kartami impas (około 40%, po wcześniejszym ściągnięciu asa na wypadek singlowej damy) jest lepszy od gry z góry (około 33%).',
      },
      {
        q: 'Masz A K J 5 4 naprzeciw 7 6 3 2 (dziewięć kart), brakuje damy. Jaka jest najlepsza rozgrywka bez żadnych wskazówek?',
        options: ['Ściągnąć asa i króla', 'Od razu zaimpasować waletem', 'Wyjść waletem', 'Przepuścić jedną rundę'],
        answer: 0,
        explain: '„Dziewięć – z góry”: gdy brakuje tylko czterech kart, dama spada pod asa i króla w około 53% przypadków, nieco częściej, niż udaje się impas (około 51%).',
      },
      {
        q: 'Dziadek ma ♦K 7 3, a ty ♦8 4 2. Jak dać sobie największą szansę na lewę?',
        options: ['Wyjść królem ze stołu', 'Zagrać nisko z ręki w kierunku króla', 'Zagrać nisko ze stołu', 'Poczekać, aż obrońcy zagrają ten kolor'],
        answer: 1,
        explain: 'Gra w kierunku króla daje lewę zawsze, gdy asa ma Zachód. Wyjście królem przegrywa z asem, gdziekolwiek on jest.',
      },
    ],
  },

  {
    id: 'second-and-third-hand',
    title: 'Druga ręka nisko, trzecia wysoko',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Podstawowe zasady dla obrońców grających do lewy jako drudzy i trzeci, kiedy je łamać i kiedy przykryć honor honorem.',
    body: `
<h3>Druga ręka nisko</h3>
<p>Gdy rozgrywający gra małą kartę w kierunku dziadka (albo ze stołu w kierunku swojej ręki), obrońca grający jako drugi powinien zwykle zagrać <strong>nisko</strong>. Partner gra do lewy jako ostatni i często może ją tanio wziąć, a twoja wysoka karta zostaje, by później pobić jeden z honorów rozgrywającego.</p>
<p>Przykład: dziadek ma ♠K J 5, a rozgrywający gra z ręki małego pika w jego kierunku. Siedzisz jako drugi z ♠A 7 3. Jeśli zagrasz asa, zbierzesz tylko blotki, a K i J dziadka zostaną na później. Jeśli zagrasz nisko, rozgrywający musi zgadywać: jeśli dołoży waleta, a damę ma partner, wasza strona weźmie dwie lewy; jeśli dołoży króla, twój as i tak weźmie lewę później.</p>

<h3>Kiedy druga ręka powinna zagrać wysoko</h3>
<ul>
<li><strong>Żeby ściągnąć lewę, która obkłada kontrakt</strong>, albo lewę, której nie możesz stracić, np. gdy rozgrywający zaraz zrzuci swoje przegrywające.</li>
<li><strong>Gdy zagrany zostaje honor</strong>: wtedy pytanie brzmi, czy go przykryć (zobacz niżej).</li>
<li><strong>Żeby rozdzielić przylegające honory.</strong> Załóżmy, że dziadek ma K 10 3, rozgrywający A 6 2, a ty siedzisz przed dziadkiem z Q J 4. Jeśli rozgrywający zagra nisko, a ty dołożysz nisko, rozgrywający zaimpasuje dziesiątką, potem ściągnie A i K i spadną twoje Q i J: nie weźmiesz żadnej lewy. Zagraj waleta w pierwszej rundzie (a damę, gdy rozgrywający znów zagra w kierunku dziadka), a na pewno weźmiesz jedną lewę.</li>
</ul>

<h3>Trzecia ręka wysoko</h3>
<p>Gdy partner wychodzi małą kartą, a dziadek dokłada nisko, zagraj <strong>najwyższą</strong> kartę, żeby rozgrywający nie wziął lewy tanio, albo żeby wybić jego wysoką kartę i wypromować kartę partnera.</p>
<ul>
<li>Z przylegającymi wysokimi kartami zagraj <strong>najniższą</strong> z nich: z K Q 5 zagraj damę, z Q J 4 waleta. Partner odczyta wtedy, gdzie jest wyższa karta.</li>
<li>Graj tylko tak wysoko, jak trzeba. Jeśli dziadek dołożył dziewiątkę, a ty masz Q 10 2, wystarczy dziesiątka.</li>
<li><strong>Impasuj przeciw dziadkowi.</strong> Jeśli dziadek ma K 7 3 i dokłada nisko, a ty masz A J 4, zagraj waleta. Król dziadka jest złapany pod twoim asem: jeśli damę ma rozgrywający, weźmie on tę lewę, ale twój as nadal siedzi nad królem; jeśli damę ma partner, walet weźmie lewę.</li>
</ul>

<h3>Przykryj honor honorem</h3>
<p>Gdy zagrany zostaje honor, a ty masz wyższy, przykrycie zmusza rozgrywającego do użycia dwóch wysokich kart, by pobić jedną twoją. To może wypromować niższą kartę, np. dziesiątkę lub dziewiątkę, w twojej ręce albo u partnera.</p>
<table>
<thead><tr><th>Pozycja</th><th>Kara</th></tr></thead>
<tbody>
<tr><td>Północ (dziadek)</td><td>J 7 3</td></tr>
<tr><td>Zachód (partner)</td><td>10 2</td></tr>
<tr><td>Wschód (ty)</td><td>Q 9 4</td></tr>
<tr><td>Południe (rozgrywający)</td><td>A K 8 6 5</td></tr>
</tbody>
</table>
<p>Rozgrywający wychodzi ze stołu ♦J. Jeśli dołożysz nisko, walet weźmie lewę, a potem pod A i K spadnie twoja dama: rozgrywający nie odda żadnej lewy. Jeśli przykryjesz damą, rozgrywający weźmie asem i ściągnie króla, zbijając dziesiątkę partnera, ale teraz twoja dziewiątka jest wyższa od wszystkich kar, które zostały rozgrywającemu. Przykrycie stworzyło lewę z niczego.</p>

<h4>Kiedy nie przykrywać</h4>
<ul>
<li>Gdy zagrany honor jest jednym z przylegających honorów (dziadek ma Q J 10 4 i wychodzi damą): poczekaj i przykryj ostatni z nich, jeśli w ogóle.</li>
<li>Gdy wyraźnie nie ma czego wypromować, np. w kolorze atutowym, gdy rozgrywający pokazał długi, silny kolor.</li>
<li>Gdy honor wychodzi z ręki rozgrywającego, a przykrycie pomogłoby mu tylko wyłapać kolor: zanim zareagujesz, pomyśl, co ma rozgrywający.</li>
</ul>
<div class="tip">Czy przykrywać – to pytanie o promocję. Zapytaj siebie: „Jeśli przykryję, która nasza karta może stać się lewą?”. Jeśli żadna, nie przykrywaj.</div>
<div class="warn">Nie zastanawiaj się długo, by potem zagrać nisko: przerwa zdradza rozgrywającemu, że masz brakujący honor. Przemyśl takie sytuacje, gdy tylko dziadek wyłoży karty, żeby być gotowym, kiedy nastąpią.</div>
`,
    keyPoints: [
      'Druga ręka nisko: zachowaj wysokie karty na honory rozgrywającego; partner gra jako ostatni.',
      'Łam tę zasadę, by wziąć lewę obkładającą kontrakt albo rozdzielić przylegające honory.',
      'Trzecia ręka wysoko, ale najniższą z przylegających kart i tylko tak wysoko, jak trzeba.',
      'Impasuj przeciw honorowi dziadka, gdy siedzisz za nim.',
      'Przykryj honor honorem, gdy może to wypromować kartę twojej strony; nie przykrywaj pierwszego z przylegających honorów.',
    ],
    quiz: [
      {
        q: 'Rozgrywający gra z ręki niską kartę w kierunku K J 5 dziadka. Masz A 7 3 na drugiej ręce. Co zwykle grasz?',
        options: ['Asa', 'Niską kartę', 'Siódemkę, jako sygnał', 'To nigdy nie ma znaczenia'],
        answer: 1,
        explain: 'Druga ręka nisko. Wzięcie asem zbiera tylko blotki i zostawia przy życiu zarówno K, jak i J dziadka. Niska karta zmusza rozgrywającego do zgadywania, a damę może mieć partner.',
      },
      {
        q: 'Partner wychodzi niską kartą przeciwko 3BA. Dziadek ma 7 5 2 i dokłada nisko. Masz K Q 8. Którą kartę zagrywasz?',
        options: ['K', 'Q', '8', 'Dowolny honor'],
        answer: 1,
        explain: 'Trzecia ręka wysoko, najniższą z przylegających kart: damą. Jeśli wybije ona asa, partner będzie wiedział, że masz też króla.',
      },
      {
        q: 'Partner wychodzi nisko. Dziadek ma K 7 3 i dokłada nisko. Masz A J 4. Którą kartę zagrywasz?',
        options: ['A', 'J', '4', 'K jest u dziadka, więc to bez znaczenia'],
        answer: 1,
        explain: 'Impasuj przeciw dziadkowi: walet weźmie lewę, jeśli damę ma partner, a twój as zostanie nad królem dziadka. Zagranie asa wyrobiłoby króla dziadka.',
      },
      {
        q: 'Dziadek ma ♠Q J 10 4 i wychodzi damą. Masz ♠K 6 3 za dziadkiem. Czy przykryć?',
        options: ['Tak, zawsze przykrywaj honor', 'Nie, nie przykrywaj pierwszego z przylegających honorów', 'Tylko jeśli partner dał sygnał', 'Tak, szóstką'],
        answer: 1,
        explain: 'Przykrycie damy pozwala rozgrywającemu wziąć asem, a wtedy walet i dziesiątka są wysokie. Poczekaj: jeśli rozgrywający nadal będzie wychodził honorami, przykryj ostatni, bo wtedy przykrycie może coś wypromować.',
      },
      {
        q: 'Po co przykrywa się honor honorem?',
        options: ['Żeby wziąć lewę', 'Żeby rozgrywający użył dwóch honorów na jeden twój, co promuje niższą kartę twojej strony', 'Żeby pokazać partnerowi siłę', 'Żeby zmusić rozgrywającego do przebicia'],
        answer: 1,
        explain: 'Przykrycie rzadko samo bierze lewę. Jego wartość to promocja: gdy wypadną dwa honory rozgrywającego, niższa karta, np. dziesiątka lub dziewiątka, może stać się lewą.',
      },
    ],
  },
];
