// Lessons, part 3 (Polish).
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_3: Lesson[] = [
  {
    id: 'michaels-and-unusual-2nt',
    title: 'Michaels i nienaturalne 2BA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Jak po otwarciu przeciwnika pokazać dwukolorówkę jedną odzywką i jak partner wybiera kolor.',
    body: `
<h3>Dwa kolory jedną odzywką</h3>
<p>Z dwiema piątkami chcesz szybko pokazać oba kolory; zanim dostaniesz drugą szansę, licytacja może być już na wysokości czterech. Służą do tego dwa konwencyjne wejścia, każde obiecuje co najmniej <strong>po pięć kart w dwóch kolorach</strong>.</p>
<table>
<thead><tr><th>Przeciwnicy otwierają</th><th>Licytujesz</th><th>Pokazuje</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>2♣ (Michaels)</td><td>♥ i ♠</td></tr>
<tr><td>1♦</td><td>2♦ (Michaels)</td><td>♥ i ♠</td></tr>
<tr><td>1♥</td><td>2♥ (Michaels)</td><td>♠ i młodszy</td></tr>
<tr><td>1♠</td><td>2♠ (Michaels)</td><td>♥ i młodszy</td></tr>
<tr><td>1♣</td><td>2BA (nienaturalne)</td><td>♦ i ♥</td></tr>
<tr><td>1♦</td><td>2BA (nienaturalne)</td><td>♣ i ♥</td></tr>
<tr><td>1♥ lub 1♠</td><td>2BA (nienaturalne)</td><td>♣ i ♦</td></tr>
</tbody>
</table>
<p>Michaels to cue bid w kolor otwarcia. Po otwarciu w młodszy pokazuje oba starsze; po otwarciu w starszy pokazuje drugi starszy i nieokreślony młodszy. Nienaturalne 2BA pokazuje <strong>dwa najniższe niezalicytowane kolory</strong>.</p>
<div class="hand" data-cards="S:KQ1074 H:AJ963 D:5 C:84" data-label="Prawy przeciwnik otwiera 1♦: licytuj 2♦"></div>
<div class="hand" data-cards="S:4 H:72 D:KQ1074 C:AQ1063" data-label="Prawy przeciwnik otwiera 1♠: licytuj 2BA"></div>

<h3>Jaka siła?</h3>
<p>Przedział jest szeroki. Najczęściej ręka jest skromna (około 8-12 PC) z dobrymi kolorami, a celem jest walka o kontrakt, znalezienie obrony albo wskazanie wistu. Z silną ręką (około 16+) też zaczynasz od odzywki dwukolorowej, a potem licytujesz ponownie, żeby pokazać nadwyżkę. Z ręką pośrednią wielu graczy woli wejść wyższym kolorem, a niższy zalicytować później.</p>
<p>Jakość kolorów ma znaczenie, zwłaszcza po partii: honory powinny być w długich kolorach, a nie w krótkich.</p>

<h3>Odpowiedzi partnera</h3>
<div class="auction" data-calls="1D 2D P" data-dealer="W"></div>
<div class="hand" data-cards="S:J4 H:Q852 D:K73 C:J1064" data-label="Grasz na Południu: licytuj 2♥"></div>
<ul>
<li><strong>Wybierz kolor</strong> najtaniej, jak się da — ten, w którym masz więcej kart. Tutaj cztery kiery przeciw dwóm pikom: 2♥. Przy równej długości w starszym i młodszym wybierz starszy, wyżej punktowany.</li>
<li><strong>Skocz</strong> z dobrym fitem i przydatnymi wartościami: krótkością w kolorze przeciwników oraz asami i królami w kolorach partnera.</li>
<li><strong>Licytuj dograną</strong>, gdy fit jest duży, a twoje honory pracują. Dziesięciokartowy fit naprzeciw ręki 5-5 często daje dograną z niewielką liczbą punktów.</li>
<li><strong>Po Michaelsie ze starszym i młodszym</strong> (1♥ – 2♥) licytuj starszy partnera, jeśli ci odpowiada, albo 2BA, pytając o młodszy, gdy masz dobry fit w młodszych i brak fitu w starszym.</li>
<li><strong>Po nienaturalnym 2BA</strong> licytuj 3♣ lub 3♦ (dłuższy z nich) albo z fitem skocz do dograny.</li>
</ul>
<div class="hand" data-cards="S:7 H:J852 D:K1063 C:KJ63" data-label="1♥ – 2♥ – pas: licytuj 2BA"></div>
<p>Partner ma pięć pików i pięć kart w młodszym. Z singlem pik, ale czterema kartami w każdym młodszym licytuj 2BA: partner wskaże swój młodszy, a ty spasujesz, z dziewięciokartowym fitem bez względu na to, który to kolor.</p>

<h3>Wykorzystanie informacji w obronie</h3>
<p>Jeśli to przeciwnicy wygrają licytację, dwukolorówka partnera jest prezentem dla obrony: znasz co najmniej dziesięć jego kart. Policz na tej podstawie rękę rozgrywającego i wistuj lub zmieniaj kolor na ten, w którym partner może przebić albo wziąć lewy.</p>
<div class="warn">Nie używaj Michaelsa ani nienaturalnego 2BA z ręką 5-4. Partner wybierze kolor, oczekując piątki, i zagracie fit siedmiokartowy z kontrą.</div>
<div class="tip">Przy korzystnych założeniach odzywka dwukolorowa, a po niej duży skok partnera w twój kolor, może ukraść kontrakt albo znaleźć tanią obronę. Partner powinien podnosić z każdym dużym fitem: prawo totalnej liczby lew sprzyja licytowaniu z układem.</div>
`,
    keyPoints: [
      'Michaels: cue bid w młodszy otwarcia (1m – 2m) pokazuje oba starsze; cue bid w starszy otwarcia (1M – 2M) pokazuje drugi starszy i młodszy; 5-5 lub lepiej.',
      'Nienaturalne 2BA pokazuje dwa najniższe niezalicytowane kolory, 5-5 lub lepiej.',
      'Większość takich rąk jest skromna; z silną ręką licytuj później ponownie.',
      'Partner wybiera kolor, w którym ma więcej kart, a z dużym fitem skacze lub licytuje dograną.',
      'Po 1M – 2M odzywka 2BA partnera pyta o młodszy.',
    ],
    quiz: [
      {
        q: 'Prawy przeciwnik otwiera 1♣. Która odzywka pokazuje pięć pików i pięć kierów?',
        options: ['Kontra', '2♣', '2BA', '1♥'],
        answer: 1,
        explain: 'Cue bid w młodszy otwarcia (Michaels) pokazuje oba starsze. 2BA po 1♣ pokazuje dwa najniższe niezalicytowane kolory: kara i kiery.',
      },
      {
        q: 'Prawy przeciwnik otwiera 1♥, a ty licytujesz 2BA. Co pokazujesz?',
        options: ['15-18 w ręce zrównoważonej', 'Trefle i kara', 'Piki i młodszy', 'Piki i trefle'],
        answer: 1,
        explain: 'Nienaturalne 2BA pokazuje dwa najniższe niezalicytowane kolory. Po 1♥ są to trefle i kara.',
      },
      {
        q: 'Lewy przeciwnik otwiera 1♦, partner licytuje 2♦ (Michaels), prawy przeciwnik pasuje. Masz ♠J4 ♥Q852 ♦K73 ♣J1064. Co licytujesz?',
        options: ['2♠', '2♥', '2BA', 'Pas'],
        answer: 1,
        explain: 'Partner ma co najmniej po pięć kart w każdym starszym. Ty masz cztery kiery i dwa piki, więc kiery to lepszy fit: zalicytuj je najtaniej.',
      },
      {
        q: 'Prawy przeciwnik otwiera 1♠, a ty licytujesz 2♠. Co to pokazuje?',
        options: ['Piki', 'Kiery i młodszy', 'Oba młodsze', 'Silną rękę zrównoważoną'],
        answer: 1,
        explain: 'Cue bid w starszy otwarcia pokazuje drugi starszy plus młodszy, co najmniej 5-5. Partner może zalicytować 2BA, żeby dowiedzieć się, który młodszy.',
      },
      {
        q: 'Prawy przeciwnik otwiera 1♣, a ty licytujesz 2BA. Co to pokazuje?',
        options: ['Trefle i kara', 'Kara i kiery', 'Oba starsze', 'Kiery i piki'],
        answer: 1,
        explain: 'Po 1♣ niezalicytowane kolory to kara, kiery i piki; dwa najniższe to kara i kiery.',
      },
    ],
  },

  {
    id: 'defending-suit-contracts',
    title: 'Obrona przeciw kontraktom kolorowym',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Jak wybrać między obroną aktywną a pasywną, zdobywać przebitki, grać w atu we właściwym momencie i forsować rozgrywającego.',
    body: `
<h3>Skąd biorą się lewy obrony</h3>
<p>Przeciw kontraktowi kolorowemu obrona bierze lewy wysokimi kartami, przebitkami i własnymi atutami. Rozgrywający tymczasem próbuje pozbyć się przegrywających, przebijając je u dziadka albo zrzucając na lewy dziadka. Dobra obrona zaczyna się od prostego pytania, gdy dziadek się wyłoży: <strong>jak rozgrywający ugra kontrakt i skąd wezmą się nasze lewy?</strong></p>

<h3>Aktywnie czy pasywnie?</h3>
<p><strong>Graj aktywnie</strong> (szybko ściągaj lub wyrabiaj lewy, nawet z pewnym ryzykiem), gdy dziadek ma długi, mocny kolor, który da zrzutki. Lewy, których nie weźmiesz teraz, znikną.</p>
<p><strong>Graj pasywnie</strong> (bezpiecznymi kartami, które niczego nie oddają), gdy dziadek jest płaski, nie ma źródła zrzutek, a rozgrywający i tak będzie musiał oddać swoje przegrywające. Otwieranie nowych kolorów często daje wtedy rozgrywającemu lewę, której sam by nie zrobił.</p>
<div class="deal" data-n="S:K94 H:KQJ104 D:862 C:A5" data-e="S:762 H:A83 D:KJ94 C:874" data-caption="Południe gra 4♠ po 1♠ – 2♥ – 2♠ – 4♠. Partner wistuje ♣Q; dziadek bierze asem i gra ♥K."></div>
<p>Bierzesz ♥A. Teraz pomyśl: kiery dziadka są wyrobione i gdy tylko rozgrywający ściągnie atuty, zrzuci na nie przegrywające kara. Jedyną nadzieją jest wzięcie lew karowych <em>teraz</em>. Zmień kolor na ♦J, przez rękę rozgrywającego: jeśli partner ma ♦A, a rozgrywający ♦Q, weźmiecie trzy lewy karowe. Pasywny powrót w trefle pozwoliłby rozgrywającemu ściągnąć atuty i wyrzucić kara.</p>

<h3>Zdobywanie przebitek</h3>
<ul>
<li>Wist singlem jest najlepszy, gdy masz kontrolę atutową (np. asa atutowego) albo partner może mieć dojście: dochodzisz do ręki, przechodzisz do partnera i znów przebijasz.</li>
<li>Dając partnerowi przebitkę, sygnałem preferencyjnym pokaż, gdzie masz dojście.</li>
<li>Licz atuty rozgrywającego: nie ma sensu grać do przebitki, gdy partner nie może mieć już atutów.</li>
</ul>

<h3>Kiedy grać w atu</h3>
<ul>
<li>Gdy dziadek jest krótki w kolorze bocznym, w którym twoja strona jest silna, a rozgrywający będzie próbował przebijać tam przegrywające.</li>
<li>Gdy rozgrywający pokazał dwa kolory, a dziadek dał preferencję na drugi: dziadek będzie przebijał pierwszy.</li>
<li>Gdy partner spasował na twoją kontrę wywołującą, zamieniając ją na karną: ma długie, mocne atuty i chce, żeby je ściągnąć.</li>
<li>Nie wtedy, gdy rozgrywający ma długie lewy w kolorze bocznym do odegrania albo gdy wist w atu może mu pomóc złapać honory atutowe partnera.</li>
</ul>

<h3>Obrona forsująca</h3>
<p>Jeśli masz cztery atuty albo atuty rozgrywającego są krótkie, zmuszaj go do przebijania raz za razem, grając swój długi kolor. Każda przebitka skraca atuty rozgrywającego; w końcu możesz mieć więcej atutów niż on, a rozgrywający traci kontrolę. Obrona forsująca działa najlepiej, gdy atuty rozgrywającego są w długiej ręce, a dziadek nie może przyjąć forsowania.</p>

<h3>Promocja atutowa</h3>
<p>Atutami są piki. Rozgrywający ma ♠A K 10 9 8 7, ty (Zachód) ♠Q 6, a partner ♠J 3. Gdy nikt mu nie przeszkadza, rozgrywający ściąga asa i króla, a twoja dama spada. Ale załóżmy, że grasz kolor boczny, w którym partner i rozgrywający mają renons. Partner przebija ♠J, rozgrywający musi nadbić asem lub królem i teraz twoje ♠Q 6 stoją naprzeciw tylko jednego starszego honoru: dama weźmie lewę. Taka promocja atutowa to <strong>uppercut</strong>. Gdy widzisz możliwość takiej promocji, partner powinien przebijać możliwie wysoko.</p>
<div class="tip">Licz swoje lewy. Jeśli widzisz lewę obkładającą, weź ją; jeśli widzisz, że rozgrywający ma dość lew, szukaj przebitki albo promocji atutowej, która mogłaby ją stworzyć.</div>
<div class="warn">Nie ściągaj lew w kolorze, w którym rozgrywający ma renons, a dziadek przebija: tylko pomagasz rozgrywającemu. I nie dawaj „przebitki ze zrzutką” (wyjścia w kolor, w którym renons mają i rozgrywający, i dziadek), która pozwala przebić w jednej ręce i zrzucić przegrywającą z drugiej.</div>
`,
    keyPoints: [
      'Zapytaj, jak rozgrywający ugra kontrakt i skąd wezmą się twoje lewy.',
      'Graj aktywnie, gdy dziadek ma długi kolor na zrzutki; pasywnie, gdy dziadek jest płaski.',
      'Wist singlem działa najlepiej z kontrolą atutową albo z dojściem do ręki partnera.',
      'Graj w atu, gdy dziadek będzie przebijał albo gdy partner spasował na twoją kontrę wywołującą.',
      'Z czterema atutami forsuj rozgrywającego; nigdy nie dawaj przebitki ze zrzutką.',
    ],
    quiz: [
      {
        q: 'Dziadek ma długi, mocny kolor boczny, który da zrzutki. Jaka obrona jest zwykle właściwa?',
        options: ['Pasywna: czekaj na błąd rozgrywającego', 'Aktywna: szybko bierz lub wyrabiaj lewy', 'Graj w atu przy każdej okazji', 'Daj rozgrywającemu przebitkę ze zrzutką'],
        answer: 1,
        explain: 'Po ściągnięciu atutów rozgrywający zrzuci przegrywające na kolor dziadka. Lewy, których obrona nie weźmie szybko, znikną.',
      },
      {
        q: 'Dziadek ma płaski układ 4-3-3-3 bez długiego koloru, a rozgrywający i tak musi oddać przegrywające w kolorach bocznych. Jaka obrona jest zwykle właściwa?',
        options: ['Pasywna: unikaj otwierania nowych kolorów', 'Aktywna: w każdej lewie zmieniaj kolor', 'Wistuj spod asów', 'Od razu ściągnij wszystkie lewy'],
        answer: 0,
        explain: 'Bez źródła zrzutek przegrywające rozgrywającego nie znikną. Otwieranie nowych kolorów grozi oddaniem lewy, której rozgrywający sam by nie zrobił.',
      },
      {
        q: 'Masz cztery atuty przeciw 4♥ rozgrywającego. Jaki plan obrony jest często najlepszy?',
        options: ['Grać w atu', 'Zmuszać rozgrywającego do przebijania, grając swój długi kolor', 'Wistować singlem', 'Grać spod honorów w każdym kolorze'],
        answer: 1,
        explain: 'Każda przebitka skraca atuty rozgrywającego. Z twoimi czterema atutami dwa lub trzy forsowania mogą zostawić ci więcej atutów niż rozgrywającemu, który traci kontrolę.',
      },
      {
        q: 'Twoja wywołująca kontra 1♦ została przez partnera zamieniona pasem na karną. Czym wistujesz?',
        options: ['Najlepszym starszym', 'W atu', 'Singlem trefl', 'W kolor, którego chciałby partner'],
        answer: 1,
        explain: 'Pas partnera pokazuje długie, mocne kara. Wist w atu nie pozwala rozgrywającemu wziąć lew małymi atutami przez przebitki, a kara partnera wezmą lewy.',
      },
      {
        q: 'Kiedy wist singlem przeciw kontraktowi kolorowemu jest najbardziej atrakcyjny?',
        options: ['Gdy masz asa atutowego albo partner prawdopodobnie ma dojście', 'Gdy masz cztery atuty', 'Gdy wiadomo, że dziadek jest krótki w tym kolorze', 'Zawsze'],
        answer: 0,
        explain: 'Po przebitce musisz przekazać rękę partnerowi albo odzyskać ją samodzielnie, zanim atuty zostaną ściągnięte. Umożliwiają to kontrola atutowa i dojścia partnera.',
      },
    ],
  },

  {
    id: 'defending-against-notrump',
    title: 'Obrona przeciw bez atu',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Jak obrona wygrywa wyścig przeciw bez atu: odblokowanie, zwrot właściwej karty, utrzymanie kontaktu, atak na dojścia rozgrywającego i dobre zrzutki.',
    body: `
<h3>Wyścig po lewy</h3>
<p>W bez atu nic nie zatrzyma długiego koloru, gdy już zostanie wyrobiony. Obie strony się ścigają: rozgrywający, żeby wyrobić dość lew, obrona, żeby pierwsza wyrobić i ściągnąć swój długi kolor. Większość kłopotów obrony to kłopoty z <strong>komunikacją</strong>: długi kolor jest w jednej ręce, a dojścia często w drugiej. Dobra obrona utrzymuje kolor w ruchu między obrońcami i przecina komunikację rozgrywającego.</p>

<h3>Trzecia ręka: wysoko i nie na drodze partnera</h3>
<p>Trzecia ręka gra wysoko (zob. lekcję „Druga ręka nisko, trzecia wysoko”). W bez atu ma drugi obowiązek: nie <strong>blokować</strong> koloru partnera. Z honorem w dublu w długim kolorze partnera pozbądź się tego honoru wcześnie, nawet jeśli musisz w tym celu przejąć kartę partnera.</p>
<table>
<thead><tr><th>Pozycja</th><th>Kiery</th></tr></thead>
<tbody>
<tr><td>Północ (dziadek)</td><td>6 5 2</td></tr>
<tr><td>Zachód (partner, wistuje K)</td><td>K Q 10 9 7</td></tr>
<tr><td>Wschód (ty)</td><td>A 3</td></tr>
<tr><td>Południe (rozgrywający)</td><td>J 8 4</td></tr>
</tbody>
</table>
<p>Jeśli dołożysz 3, rozgrywający przepuści. Partner kontynuuje damą i twój as musi wziąć drugą rundę: nie masz już kiera do zwrotu, walet rozgrywającego nadal zatrzymuje kolor, a partner potrzebuje jeszcze dwóch dojść, żeby wyrobić i ściągnąć kiery. Zamiast tego <strong>przejmij</strong> króla asem i zwróć 3. Walet rozgrywającego jest w pułapce, a obrona bierze pięć pierwszych lew kierowych.</p>
<ul>
<li>Odblokuj, gdy wist partnera pokazuje mocny kolor (najwyższą kartę sekwensu, np. K Q 10 albo Q J 10), a ty masz honor w dublu: zagraj honor wcześnie, żeby twoja ostatnia karta była blotką.</li>
<li>Z trzema kartami z honorem (A x x, K x x) graj wysoko i zachowaj blotkę do zwrotu: niczego nie blokujesz.</li>
</ul>

<h3>Zwrot w kolor partnera</h3>
<p>Gdy weźmiesz lewę i wracasz w kolor partnera, wybrana karta mówi mu, ile kart ci zostało, a więc ile ma rozgrywający.</p>
<table>
<thead><tr><th>Miałeś</th><th>Bierzesz</th><th>Zwracasz</th><th>Zasada</th></tr></thead>
<tbody>
<tr><td>A 9 3</td><td>A</td><td>9</td><td>Zostały dwie karty: zwróć wyższą</td></tr>
<tr><td>A 8 5 2</td><td>A</td><td>2</td><td>Zostały trzy lub więcej: zwróć swoją pierwotną czwartą od góry</td></tr>
<tr><td>K 10 6 4 2</td><td>K</td><td>4</td><td>Pierwotna czwarta od góry, nie najniższa karta</td></tr>
</tbody>
</table>
<p>Wysoka karta mówi „została mi najwyżej jedna”; niska mówi „zostały mi jeszcze co najmniej dwie”. Partner może wtedy ustalić, czy rozgrywający ma jeszcze zatrzymanie i czy brać teraz, czy przepuścić. Zwrot wyższej z dwóch kart chroni też przed zablokowaniem koloru: jeśli zatrzymasz 9, może ona wziąć trzecią rundę, choć to partner powinien być na wiście.</p>

<h3>Przepuszczenie dla zachowania kontaktu</h3>
<p>Obrońca z długim kolorem musi czasem wcześnie oddać lewę, póki partner ma jeszcze kartę w tym kolorze do zwrotu.</p>
<div class="deal" data-n="S:109 H:A64 D:KQJ105 C:K83" data-e="S:752 H:1072 D:A83 C:10964" data-s="S:QJ4 H:KQ5 D:742 C:AQJ2" data-w="S:AK863 H:J983 D:96 C:75" data-caption="3BA gra Południe po 1BA – 3BA. Zachód wistuje ♠A, a Wschód dokłada ♠2."></div>
<p>Dwójka Wschodu zaprzecza honorowi pikowemu, więc rozgrywający ma ♠Q J. Zachód liczy: Południe ma 15-17 PC, dziadek 13, a Zachód 8, więc Wschód ma najwyżej 4. Rozgrywający wygra kontrakt, wybijając ♦A, więc jedyną nadzieją obrony jest to, że ma go Wschód.</p>
<p>Jeśli Zachód ściągnie ♠K i zagra trzeciego pika, rozgrywający bierze ostatnim honorem, a Wschód, który miał trzy piki, nie ma już żadnego. Wschód bierze ♦A, ale nie może dojść do Zachodu, którego dwa długie piki nigdy nie wezmą lewy: rozgrywający robi dziesięć lew. Zamiast tego Zachód gra w drugiej lewie <strong>małego pika</strong>. Rozgrywający bierze, ale Wschód zachowuje pika. Gdy Wschód weźmie ♦A, zwraca go, a Zachód ściąga ♠K i dwa ostatnie piki: bez jednej.</p>
<p>Mały pik już w pierwszym wiście dałby to samo. Zasada: gdy twój kolor jest długi, a nie masz bocznego dojścia, oddaj lewę, którą i tak musisz oddać, <em>póki partner ma jeszcze kartę w tym kolorze</em>.</p>

<h3>Atak na dojścia rozgrywającego</h3>
<p>Rozgrywający też ma kłopoty z komunikacją, a obrona może je pogłębić.</p>
<ul>
<li><strong>Przetrzymaj asa</strong>, gdy dziadek ma długi kolor i żadnego bocznego dojścia, i weź go wtedy, gdy rozgrywający zagra z ręki ostatnią kartę w tym kolorze. Sygnał ilościowy partnera mówi ci, kiedy (zob. lekcję „Sygnały w obronie”).</li>
<li><strong>Wybij dojście dziadka</strong>, zanim długi kolor zostanie wyrobiony, nawet kosztem lewy.</li>
</ul>
<div class="hand" data-cards="S:A42 H:765 D:KQJ109 C:83" data-label="Dziadek, przeciw 3BA"></div>
<p>Jesteś Wschodem z ♠K 7 3 i ♦A 6 2, a rozgrywający ma dwa kara. Samo przetrzymanie ♦A nie wystarczy: rozgrywający wróciłby asem pik do wyrobionych kar. Dlatego gdy weźmiesz lewę, zanim zagrano karo, wyjdź <strong>♠K</strong>. Jeśli rozgrywający weźmie asem, dziadek nie ma już dojścia: przetrzymujesz ♦A do drugiej rundy i kara dziadka są martwe. Jeśli rozgrywający przepuści, twój król wziął lewę i możesz zagrać kolejnego pika. Poświęcenie honoru, żeby tak usunąć dojście, nazywa się <strong>zagraniem Merrimac</strong>. Jest rzadkie, ale pytanie, które za nim stoi, już nie: które dojście rozgrywającego jest najważniejsze?</p>

<h3>Zrzutki</h3>
<p>Gdy rozgrywający gra długi kolor, obrońcy muszą zrzucać, a jedna zła zrzutka może mu oddać kontrakt.</p>
<ul>
<li><strong>Trzymaj długość dziadka.</strong> Z ♣Q 10 8 3 za ♣K J 7 4 dziadka zachowaj wszystkie cztery trefle: zrzucisz jednego, a ostatni trefl dziadka może stać się lewą. Karty dziadka widać, więc to najłatwiejsza zasada.</li>
<li><strong>Trzymaj długość rozgrywającego.</strong> Policz jego kolory z licytacji i rozgrywki i zachowaj zatrzymanie w każdym kolorze, w którym tylko ty możesz zatrzymać jego długą kartę.</li>
<li><strong>Podzielcie się pracą.</strong> Kolor potrzebuje tylko jednego strażnika. Zostaw partnerowi kolor, który on może trzymać (pomagają w tym sygnały ilościowe), a sam trzymaj drugi.</li>
<li><strong>Daj sygnał pierwszą zrzutką:</strong> wysoka karta prosi o kolor, niska mówi, że go nie chcesz. Zrzucaj z koloru, który możesz oddać; nigdy nie wyrzucaj potrzebnej karty tylko po to, żeby dać sygnał.</li>
<li><strong>Zachowaj lewy wyrobionego koloru</strong>, póki ty albo partner możecie jeszcze dojść do ręki, żeby je ściągnąć.</li>
</ul>
<div class="tip">Policz lewy rozgrywającego, zanim zaczniesz zrzucać. Jeśli ma osiem lew i potrzebuje dziewiątej, kolor, który mógłby mu ją dać, jest kolorem, który musisz trzymać.</div>
<div class="warn">Planuj zrzutki wcześnie. Wahanie, a potem obnażenie honoru mówi rozgrywającemu dokładnie, gdzie on jest.</div>
`,
    keyPoints: [
      'W bez atu o wyścigu decyduje komunikacja: utrzymuj długi kolor w ruchu między obrońcami.',
      'Odblokowanie: z honorem w dublu w mocnym kolorze partnera zagraj honor wcześnie, w razie potrzeby przejmując jego kartę.',
      'Z dwóch pozostałych kart zwróć wyższą; z trzech lub więcej swoją pierwotną czwartą od góry.',
      'Obrońca z długim kolorem i bez dojścia przepuszcza rundę, póki partner ma jeszcze kartę do zwrotu.',
      'Atakuj dojścia rozgrywającego; przy zrzutkach trzymaj długość dziadka i pilnuj długich kart rozgrywającego.',
    ],
    quiz: [
      {
        q: 'Przeciw 3BA partner wistuje ♥K (z K Q 10 9 7). Dziadek ma ♥6 5 2, a ty ♥A 3. Co grasz?',
        options: ['Trójkę, żeby król partnera wziął lewę', 'Asa, a potem zwracasz 3', 'Asa, a potem zmieniasz kolor', 'To bez znaczenia'],
        answer: 1,
        explain: 'Przejmij i zwróć 3. Jeśli dołożysz małego, rozgrywający przepuści, a twój as musi wziąć drugą rundę bez kiera do zwrotu, podczas gdy walet rozgrywającego wciąż zatrzymuje kolor.',
      },
      {
        q: 'Bierzesz pikowy wist partnera przeciw 3BA asem z ♠A 9 3. Którego pika zwracasz?',
        options: ['Dziewiątkę', 'Trójkę', 'Obojętnie', 'Nie wracam w piki'],
        answer: 0,
        explain: 'Z dwiema pozostałymi kartami zwróć wyższą. Partner widzi 9 i wie, że został ci najwyżej jeden pik.',
      },
      {
        q: 'Bierzesz asem z ♦A 8 5 2. Które karo zwracasz?',
        options: ['Ósemkę', 'Piątkę', 'Dwójkę', 'Żadne: zmieniam kolor'],
        answer: 2,
        explain: 'Z trzema lub więcej pozostałymi kartami zwróć swoją pierwotną czwartą od góry, tu 2. Niska karta mówi partnerowi, że masz jeszcze co najmniej dwa kara.',
      },
      {
        q: 'Dlaczego w rozdaniu 3BA powyżej Zachód powinien w drugiej lewie zagrać małego pika?',
        options: ['Żeby sprawdzić, kto ma ♠Q', 'Żeby Wschód zachował pika do zwrotu, gdy weźmie ♦A', 'Bo ♠K mógłby zostać przebity', 'Żeby rozgrywający zużył dojścia dziadka'],
        answer: 1,
        explain: 'Wschód miał trzy piki. Jeśli Zachód ściągnie króla i zagra trzeciego pika, Wschód nie będzie miał już żadnego, gdy dojdzie do ręki. Przepuszczenie teraz utrzymuje kontakt między rękami.',
      },
      {
        q: 'Rozgrywający gra długi kolor. Dziadek ma ♣K J 7 4, a ty ♣Q 10 8 3 za nim. Co trzymasz?',
        options: ['Wszystkie cztery trefle', 'Tylko Q i 10', 'Tylko damę', 'To zależy od pierwszej zrzutki partnera'],
        answer: 0,
        explain: 'Trzymaj długość dziadka. Gdy tylko zrzucisz trefla, czwarty trefl dziadka może stać się lewą.',
      },
    ],
  },

  {
    id: 'suit-combinations-and-odds',
    title: 'Podziały kolorów i łączenie szans',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Prawdopodobieństwa a priori podziałów kolorów, łączenie szans oraz podstawy wolnych miejsc i zasady ograniczonego wyboru.',
    body: `
<h3>Jak dzielą się karty przeciwników</h3>
<p>Zanim padnie jakakolwiek karta, szansa każdego podziału zależy tylko od tego, ile kart w kolorze mają obrońcy:</p>
<table>
<thead><tr><th>Brakuje</th><th>Podział</th><th>Szansa</th></tr></thead>
<tbody>
<tr><td>2</td><td>1-1 / 2-0</td><td>52% / 48%</td></tr>
<tr><td>3</td><td>2-1 / 3-0</td><td>78% / 22%</td></tr>
<tr><td>4</td><td>3-1 / 2-2 / 4-0</td><td>50% / 41% / 10%</td></tr>
<tr><td>5</td><td>3-2 / 4-1 / 5-0</td><td>68% / 28% / 4%</td></tr>
<tr><td>6</td><td>4-2 / 3-3 / 5-1 / 6-0</td><td>48% / 36% / 15% / 1,5%</td></tr>
<tr><td>7</td><td>4-3 / 5-2 / 6-1 / 7-0</td><td>62% / 31% / 7% / 0,5%</td></tr>
</tbody>
</table>
<p>Przydatna reguła: <strong>nieparzysta</strong> liczba brakujących kart dzieli się zwykle możliwie równo (3-2, 4-3), a <strong>parzysta</strong> zwykle nie (4-2 jest bardziej prawdopodobne niż 3-3, a 3-1 niż 2-2).</p>
<p>Jeszcze dwie liczby warte zapamiętania: impas to 50%; gdy wystarczy jeden z dwóch impasów — 75%, gdy potrzebne są oba — 25%.</p>

<h3>Łączenie szans</h3>
<p>Często kontrakt można ugrać na więcej niż jeden sposób. Sztuka polega na tym, by próbować szans w takiej kolejności, która pozwoli skorzystać z drugiej, gdy pierwsza zawiedzie.</p>
<div class="deal" data-n="S:954 H:743 D:Q52 C:AKQ2" data-s="S:AQ6 H:A852 D:AK7 C:763" data-caption="3BA gra Południe. Zachód wistuje ♥K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Liczenie:</strong> ♠A, ♥A, ♦AKQ, ♣AKQ: osiem lew. Dziewiąta może przyjść z podziału trefli 3-3 (36%), dzięki któremu ♣2 dziadka staje się lewą, albo z impasu pikowego (50%), który wychodzi, gdy ♠K ma Wschód.</p>
<p><strong>Zagrożenie:</strong> gdy twój ♥A zniknie, kiery Zachodu są wyrobione. Jeśli zaimpasujesz pika i impas nie wyjdzie, Zachód odegra dość kierów, by cię obłożyć, i nigdy nie spróbujesz trefli.</p>
<p><strong>Właściwa kolejność:</strong> najpierw sprawdź trefle. Ściągnięcie ♣A, K i Q nic nie kosztuje: jeśli obaj obrońcy dołożą trzy razy, ♣2 jest dziewiątą lewą i impas w ogóle nie jest potrzebny. Jeśli trefle się nie podzielą, kończysz na stole i nadal możesz zagrać pika w kierunku swoich A Q. Twoja szansa to 36% + (64% × 50%) = 68% zamiast 50% samego impasu.</p>
<div class="tip">Najpierw sprawdź szansę, która nie oddaje ręki. Impas, który może oddać rękę groźnemu przeciwnikowi, zostaw na koniec.</div>

<h3>Wolne miejsca</h3>
<p>Gdy rozgrywka się zaczęła, liczby a priori się zmieniają. Jeśli wiadomo, że Zachód ma pięć kierów, a Wschód tylko jednego, to wśród pozostałych nieznanych kart Zachód ma 8 miejsc, a Wschód 12. Każda konkretna brakująca karta, np. ♠K, jest teraz u Wschodu w 12 przypadkach na 20, czyli z prawdopodobieństwem 60%, a nie 50%. Ręka z większą liczbą wolnych miejsc ma większe szanse na posiadanie dowolnej karty. Dlatego liczenie ręki jest tak ważne.</p>

<h3>Zasada ograniczonego wyboru</h3>
<p>Masz A K 10 7 5 naprzeciw 6 4 3 2, brakuje ci Q, J, 9 i 8. Ściągasz asa, a Wschód dokłada damę. W następnej rundzie Zachód dokłada blotkę. Zagrać króla (licząc, że Wschód miał Q J) czy zaimpasować dziesiątką (licząc, że Wschód miał damę singlową)?</p>
<p>Impasuj. Z damą singlową Wschód nie miał wyboru; z Q J równie dobrze mógł zagrać waleta. Dlatego dama singlowa jest mniej więcej dwa razy bardziej prawdopodobna niż konkretnie Q J: impas wychodzi w około 65% przypadków. Ta <strong>zasada ograniczonego wyboru</strong> obowiązuje zawsze, gdy przeciwnik zagrywa jeden z dwóch równorzędnych honorów.</p>

<h3>Praktyczne reguły dla damy</h3>
<ul>
<li>Osiem kart bez damy: impasuj (około 40% z A K J x x i około 51% z A K J 10 x, wobec około 33% na wypadnięcie damy).</li>
<li>Dziewięć kart bez damy: graj na wypadnięcie (około 53% wobec około 51% impasu).</li>
<li>Informacja z licytacji (kto otworzył, kto zablokował, kto pokazał długość) jest warta więcej niż te niewielkie różnice.</li>
</ul>
<div class="warn">Te procenty to tylko punkt wyjścia. Obrońca, który w licytacji pokazał długie kolory, ma mniejsze szanse na długość w kolorze, który rozgrywasz.</div>
`,
    keyPoints: [
      'Brakuje pięciu: 3-2 68%. Brakuje sześciu: 4-2 48%, 3-3 36%. Brakuje czterech: 3-1 50%, 2-2 41%, 4-0 10%.',
      'Nieparzysta liczba brakujących kart dzieli się zwykle równo; parzysta zwykle nie.',
      'Łącz szanse: najpierw sprawdź to, co nie oddaje ręki; impas w stronę groźnej ręki zostaw na koniec.',
      'Wolne miejsca: ręka z większą liczbą nieznanych kart ma większe szanse na posiadanie danej karty.',
      'Zasada ograniczonego wyboru: gdy przeciwnik dokłada jeden z dwóch równorzędnych honorów, graj na singla u niego.',
    ],
    quiz: [
      {
        q: 'Przeciwnicy mają w kolorze sześć kart. Jaki podział jest najbardziej prawdopodobny?',
        options: ['3-3', '4-2', '5-1', '6-0'],
        answer: 1,
        explain: '4-2 zdarza się w około 48% przypadków wobec 36% dla 3-3. Przy parzystej liczbie brakujących kart równy podział jest wyjątkiem, a nie regułą.',
      },
      {
        q: 'Przeciwnicy mają w kolorze pięć kart. Jak często dzielą się 3-2?',
        options: ['50%', '62%', '68%', '78%'],
        answer: 2,
        explain: 'Około 68%. 4-1 to około 28%, a 5-0 około 4%.',
      },
      {
        q: 'Możesz spróbować podziału 3-3 (36%), a gdy zawiedzie, zaimpasować (50%). Jaka jest łączna szansa?',
        options: ['50%', '68%', '86%', '43%'],
        answer: 1,
        explain: '36% plus połowa pozostałych 64%: 36 + 32 = 68%.',
      },
      {
        q: 'Dlaczego w powyższym rozdaniu z 3BA ściąga się trefle przed impasem pikowym?',
        options: ['Żeby policzyć rękę', 'Sprawdzenie trefli nie oddaje ręki, a nieudany impas pozwala Zachodowi odegrać kiery', 'Bo impas ma większe szanse później', 'Żeby odblokować trefle'],
        answer: 1,
        explain: 'Jeśli impas nie wyjdzie, Zachód odegra kiery i nigdy nie spróbujesz trefli. Ściągnięcie najpierw trefli zachowuje obie szanse.',
      },
      {
        q: 'Masz A K 10 7 5 naprzeciw 6 4 3 2. Na asa Wschód dokłada damę. W następnej rundzie Zachód dokłada blotkę. Co jest najlepsze?',
        options: ['Zagrać króla', 'Zaimpasować dziesiątką', 'To dokładnie 50 na 50', 'Zagrać z drugiej ręki'],
        answer: 1,
        explain: 'Zasada ograniczonego wyboru: z Q J Wschód mógł zagrać którykolwiek honor, a z damą singlową nie miał wyboru. Singiel jest bardziej prawdopodobny, więc impas wychodzi w około 65% przypadków.',
      },
    ],
  },

  {
    id: 'ruffing-finesse-and-loser-on-loser',
    title: 'Impas przebitkowy, przegrywająca na przegrywającą i wyrobienie koloru przebitkami',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Trzy sposoby, w jakie rozgrywający tworzy lewy atutami: impas przebitkowy, zrzucenie przegrywającej na przegrywającą i wyrobienie bocznego koloru przebitkami.',
    body: `
<h3>Impas przebitkowy</h3>
<p>Zwykły impas gra się <em>w stronę</em> widełek. <strong>Impas przebitkowy</strong> gra honor <em>przez</em> obrońcę, który może mieć brakującą wyższą kartę, mając za nim renons i gotowy atut. Jeśli obrońca przykryje, przebijasz i pozostałe honory są lewami; jeśli nie, zrzucasz przegrywającą.</p>
<p>Z ♦K Q J 10 u dziadka i bez kara w ręce zagraj ♦K. Jeśli Wschód przykryje asem, przebij, a Q J 10 są wyrobione. Jeśli Wschód dołoży małe, zrzuć przegrywającą: gdy król weźmie, zyskałeś lewę, a gdy Zachód weźmie asem, tylko zamieniłeś jedną przegrywającą na drugą. Tak czy inaczej pozostałe honory dadzą zrzutki.</p>

<h4>Który impas?</h4>
<p>Z A Q J 10 naprzeciw singla masz wybór. Zwykły impas (gra w stronę A Q) udaje się, gdy króla ma <strong>Zachód</strong>; impas przebitkowy (najpierw as, potem dama) udaje się, gdy ma go <strong>Wschód</strong>. Same w sobie są równie dobre, więc niech zdecyduje reszta rozdania: licytacja może wskazać, gdzie jest król, a często jeden obrońca jest groźny, a drugi nie. Wybierz impas, który jeśli się nie uda, odda lewę nieszkodliwemu obrońcy.</p>
<div class="deal" data-n="S:J103 H:AQJ102 D:762 C:84" data-e="S:62 H:K743 D:J84 C:9653" data-s="S:AKQ984 H:6 D:K53 C:A72" data-w="S:75 H:985 D:AQ109 C:KQJ10" data-caption="4♠ gra Południe. Zachód wistuje ♣K."></div>
<p>Groźny jest Wschód: karo zagrane przez Wschód, przez twojego ♦K, mogłoby dać obronie trzy lewy karowe. Zachód jest nieszkodliwy: karo zagrane przez Zachód idzie do twojego króla.</p>
<ul>
<li><strong>Zwykły impas</strong>, kier do damy, przegrywa z królem Wschodu. Wschód zmienia na ♦J i jesteś bez dwóch.</li>
<li><strong>Impas przebitkowy:</strong> kier do asa, potem ♥Q. Jeśli Wschód przykryje, przebij, a pozostałe kiery dziadka zajmą się twoimi karami; jeśli Wschód dołoży małego, zrzuć karo. Przy tym układzie robisz dwanaście lew.</li>
</ul>
<p>A gdyby ♥K miał Zachód? Wtedy impas przebitkowy się nie udaje, ale lewę dostaje Zachód, który nie może zagrać kara przez twojego króla, a ty już zrzuciłeś karo na ♥Q: i tak robisz dziesięć lew. Impas przebitkowy wygrywa kontrakt bez względu na to, kto ma króla.</p>

<h3>Przegrywająca na przegrywającą</h3>
<p>Czasem najlepszą odpowiedzią na lewę, którą i tak oddasz, nie jest przebicie, lecz zrzucenie na nią przegrywającej z innego koloru. Liczba lew się nie zmienia, bo jedna przegrywająca zastępuje drugą, ale zachowujesz atuty, kontrolę albo dojścia.</p>
<div class="deal" data-n="S:542 H:9862 D:764 C:A83" data-e="S:J3 H:107 D:J532 C:K9642" data-s="S:AK10987 H:43 D:AKQ C:75" data-w="S:Q6 H:AKQJ5 D:1098 C:QJ10" data-caption="4♠ gra Południe. Zachód ściąga ♥A i ♥K, Wschód gra górą-dołem, a Zachód kontynuuje ♥Q."></div>
<p>Wschód przebija trzeciego kiera ♠J. Jeśli nadbijesz, ♠Q 6 Zachodu znajdzie się nad twoim jedynym pozostałym wysokim honorem i dama zostanie promowana: oddasz dwa kiery, atu i trefla, bez jednej. Zamiast tego zrzuć przegrywającego trefla. Walet Wschodu bierze lewę, ale twoje atuty pozostają nietknięte: as i król wyłapią damę Zachodu, a przegrywającego trefla już nie ma. Dziesięć lew.</p>
<p>Inne częste zastosowania:</p>
<ul>
<li><strong>Zachowanie kontroli:</strong> gdy obrona gra kolor, który musiałbyś przebić w długiej ręce, zrzutka przegrywającej zachowuje długość atutów (zob. lekcję „Gospodarka atutami”).</li>
<li><strong>Wyrobienie koloru:</strong> z ♦Q J 10 9 u dziadka, bez kara w ręce i bez asa i króla zagraj damę, a potem waleta, za każdym razem zrzucając przegrywającą. Oddajesz dwie lewy, które i tak byś oddał, a 10 i 9 są teraz lewami.</li>
<li><strong>Wpustka:</strong> obrońca, który weźmie lewę „przegrywająca na przegrywającą”, może być zmuszony zagrać w twoje widełki albo dać ci przebitkę ze zrzutką (zob. lekcję „Wprowadzenie do przymusów i wpustek”).</li>
</ul>

<h3>Wyrobienie koloru przebitkami</h3>
<p>Długi boczny kolor dziadka można <strong>wyrobić przebitkami</strong>: przebijaj jego blotki w ręce, aż obrońcy nie będą mieli już kart w tym kolorze, a reszta koloru da zrzutki. Każda przebitka wymaga dojścia z powrotem do dziadka, a na końcu potrzebujesz jeszcze jednego, żeby ściągnąć długie karty, więc policz dojścia, zanim zaczniesz.</p>
<table>
<thead><tr><th>Dziadek</th><th>Twoja ręka</th><th>Podział</th><th>Potrzebne przebitki</th><th>Długie karty</th></tr></thead>
<tbody>
<tr><td>A K 6 5 4 2</td><td>3</td><td>3-3</td><td>1</td><td>3</td></tr>
<tr><td>A K 6 5 4 2</td><td>3</td><td>4-2</td><td>2</td><td>2</td></tr>
<tr><td>A 6 5 4 3</td><td>7</td><td>4-3</td><td>3</td><td>1</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K85 H:A6543 D:K52 C:64" data-e="S:6 H:K98 D:876 C:QJ10987" data-s="S:AQJ10932 H:7 D:A43 C:A5" data-w="S:74 H:QJ102 D:QJ109 C:K32" data-caption="6♠ gra Południe. Zachód wistuje ♦Q."></div>
<p>Masz jedenaście pewnych lew: siedem pików, ♥A, ♦A K i ♣A. Dwunasta musi przyjść z kierów dziadka, które przy podziale 4-3 wymagają trzech przebitek, więc po ♥A potrzebujesz trzech dojść do dziadka: ♠8, ♠K i ♦K.</p>
<ol>
<li>Weź ♦Q <strong>asem</strong>, żeby zachować ♦K dziadka jako dojście.</li>
<li>Zagraj kiera do asa i przebij kiera ♠9.</li>
<li>Zagraj ♠2 do ósemki dziadka i przebij kolejnego kiera ♠10.</li>
<li>Zagraj ♠3 do króla i przebij trzeciego kiera ♠J. Teraz obrona nie ma już ani kierów, ani atutów.</li>
<li>Przejdź do dziadka ♦K i ściągnij piątego kiera, zrzucając przegrywającego trefla. Oddajesz tylko karo.</li>
</ol>
<p>Jeśli weźmiesz pierwszą lewę królem dziadka albo najpierw ściągniesz dwie rundy atutów, zabraknie ci dojścia: szlemik będzie bez jednej.</p>
<div class="tip">Zaplanuj dojścia, zanim dotkniesz koloru: po jednym na każdą przebitkę i jedno, żeby ściągnąć długie karty. Atuty dziadka są często dojściami, więc graj do nich małymi atutami, a przebijaj wysokimi.</div>
<div class="warn">Przebijaj wysoko zawsze, gdy obrońca mógł już wyjść z koloru i mógłby nadbić.</div>
`,
    keyPoints: [
      'Impas przebitkowy gra honor przez obrońcę, który może mieć brakującą kartę: jeśli przykryje, przebijasz; jeśli nie, zrzucasz przegrywającą.',
      'Z A Q J 10 naprzeciw singla wybierz między zwykłym impasem a przebitkowym, pytając, któremu obrońcy możesz oddać lewę.',
      'Przegrywająca na przegrywającą: zrzuć przegrywającą zamiast przebijać, gdy przebitka kosztowałaby lewę atutową, kontrolę albo dojście.',
      'Żeby wyrobić kolor przebitkami, potrzebujesz dojścia na każdą przebitkę i jeszcze jednego do ściągnięcia długich kart.',
      'Używaj atutów dziadka jako dojść; nie ściągaj atutów, zanim ich nie wykorzystasz.',
    ],
    quiz: [
      {
        q: 'Dziadek ma ♦K Q J 10, a ty nie masz kar. Grasz ♦K, a Wschód dokłada małe. Co robisz?',
        options: ['Przebijam', 'Zrzucam przegrywającą', 'Zrzucam wygrywającą', 'Lepiej zagram inny kolor'],
        answer: 1,
        explain: 'To impas przebitkowy. Jeśli król weźmie, zyskałeś lewę; jeśli Zachód weźmie asem, tylko zamieniłeś jedną przegrywającą na drugą, a Q J 10 są lewami.',
      },
      {
        q: 'Masz ♥A Q J 10 u dziadka naprzeciw singla. Kiedy udaje się impas przebitkowy (as, potem dama)?',
        options: ['Gdy króla ma Zachód', 'Gdy króla ma Wschód', 'Zawsze, gdy kiery dzielą się 3-3', 'Zawsze'],
        answer: 1,
        explain: 'Damę gra się przez Wschód: Wschód przykrywa i przebijasz albo Wschód przepuszcza i dama bierze. Zwykły impas, w stronę A Q, to ten, który udaje się, gdy króla ma Zachód.',
      },
      {
        q: 'Dlaczego w rozdaniu 4♠ powyżej impas przebitkowy jest lepszy od zwykłego?',
        options: ['Częściej się udaje', 'Jeśli się nie uda, lewę dostaje Zachód, który nie może zaatakować twojego ♦K', 'Oszczędza dojście', 'Jednocześnie ściąga atuty'],
        answer: 1,
        explain: 'Każdy impas udaje się w połowie przypadków, ale zwykły oddaje lewę Wschodowi, który może zagrać karo przez twojego króla. Jeśli impas przebitkowy się nie uda, na wiście jest Zachód, a ty już zrzuciłeś karo.',
      },
      {
        q: 'W rozdaniu „przegrywająca na przegrywającą” Wschód przebija trzeciego kiera ♠J. Co robisz?',
        options: ['Nadbijam asem', 'Nadbijam królem', 'Zrzucam przegrywającego trefla', 'Zrzucam karo'],
        answer: 2,
        explain: 'Nadbicie promuje ♠Q 6 Zachodu do lewy. Zrzutka trefla, który i tak był przegrywający, zostawia twoje atuty nietknięte, a as i król wyłapią potem damę.',
      },
      {
        q: 'Dziadek ma ♥A 6 5 4 3, a ty singla. Kiery obrońców dzielą się 4-3. Ile razy musisz przebić, zanim ostatni kier dziadka stanie się lewą?',
        options: ['Raz', 'Dwa razy', 'Trzy razy', 'Cztery razy'],
        answer: 2,
        explain: 'Po asie obrońcy mają jeszcze pięć kierów, trzy w jednej ręce. Musisz przebić trzy rundy i po każdej przebitce potrzebujesz dojścia do dziadka.',
      },
    ],
  },

  {
    id: 'balancing',
    title: 'Wznowienie licytacji',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Kiedy i jak wznowić licytację na pozycji, na której pas ją kończy, i dlaczego można tam licytować z mniejszą siłą.',
    body: `
<h3>Pozycja wznawiająca</h3>
<p>Jesteś na pozycji <strong>wznawiającej</strong> (tzw. reopen), gdy twój pas zakończyłby licytację. Na przykład Zachód otwiera 1♥, partner pasuje, Wschód pasuje i teraz twoja kolej. Przeciwnicy zatrzymali się nisko, a to coś mówi: Wschód ma mniej niż 6 punktów, a Zachód zwykle nie jest bardzo silny. Brakująca siła musi gdzieś być, a w dużej części jest w ręce partnera. Partner mógł spasować z dobrą ręką po prostu dlatego, że nie miał odpowiedniej odzywki, na przykład z długością w kierach.</p>

<h3>Pożycz króla</h3>
<p>Dlatego na pozycji wznawiającej możesz licytować z mniej więcej <strong>3 PC mniej</strong> niż na pozycji bezpośredniej — to tak, jakby pożyczyć od partnera króla. Partner musi potem pamiętać, żeby tego króla „oddać”, i nie licytować tak, jakby twoja odzywka była pełnowartościowa.</p>
<div class="auction" data-calls="1H P P" data-dealer="W"></div>
<table>
<thead><tr><th>Wznowienie po 1♥ – pas – pas</th><th>Przybliżone znaczenie</th></tr></thead>
<tbody>
<tr><td>Wejście kolorem</td><td>Około 5-13 PC i przyzwoity kolor</td></tr>
<tr><td>Kontra</td><td>Około 9+ PC, krótkie kiery, poparcie w pozostałych kolorach (albo silna ręka)</td></tr>
<tr><td>1BA</td><td>Około 11-14 PC, ręka zrównoważona z zatrzymaniem kierowym</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:KJ84 H:73 D:A1063 C:Q85" data-label="1♥ – pas – pas – ?: kontra"></div>
<p>10 PC i krótkie kiery: za mało na kontrę na pozycji bezpośredniej, ale to zwykła kontra wznawiająca.</p>
<div class="hand" data-cards="S:K94 H:AJ6 D:Q1073 C:K82" data-label="1♦ – pas – pas – ?: 1BA"></div>
<p>13 PC, ręka zrównoważona, kara zatrzymane: 1BA na wznowieniu, które pokazuje mniej więcej 11-14, a nie 15-18 jak bezpośrednie wejście 1BA.</p>

<h3>Gdy przeciwnicy znaleźli fit</h3>
<div class="auction" data-calls="1S P 2S P P" data-dealer="E"></div>
<div class="hand" data-cards="S:73 H:QJ85 D:K1064 C:A92" data-label="Wznów kontrą"></div>
<p>Przeciwnicy znaleźli fit pikowy i zatrzymali się na wysokości dwóch, więc mają tylko mniej więcej połowę siły. Jeśli mają osiem lub dziewięć pików, wasza strona bardzo prawdopodobnie też ma fit. Oddawanie im kontraktu na wysokości dwóch, gdy macie fit, to zwykle strategia przegrywająca. Daj kontrę wywołującą, zapraszając partnera do zalicytowania najlepszego koloru na wysokości trzech.</p>

<h3>Kiedy nie wznawiać</h3>
<ul>
<li><strong>Gdy masz długość w ich kolorze.</strong> Wtedy partner jest w nim krótki i z siłą zwykle by skontrował. Przeciwnicy mogą grać kiepski kontrakt; pozwól im go grać.</li>
<li><strong>Gdy przeciwnicy nie mają fitu i się męczą.</strong> Jeśli otwierający zalicytował drugi kolor, a odpowiadający niechętnie dał preferencję, mogą właśnie przegrywać: nie ratuj ich.</li>
<li><strong>Po 1BA – pas – pas</strong> wznawiaj tylko z dobrym kolorem albo układem. Partner otwierającego może mieć do 7 punktów, a siła jest rozłożona bardziej równomiernie.</li>
</ul>
<div class="hand" data-cards="S:Q74 H:KJ953 D:A5 C:J82" data-label="1♥ – pas – pas – ?: pas"></div>
<p>11 PC, ale pięć kierów — w kolorze otwarcia. Partner ma zapewne najwyżej jednego lub dwa kiery i nie skontrował, więc jest słaby. 1♥ prawdopodobnie przegra; pasuj.</p>
<div class="tip">Gdy partner wznawia licytację, pamiętaj, że już policzył część twojej siły. Licytuj o jedną wysokość ostrożniej niż naprzeciw odzywki z pozycji bezpośredniej.</div>
<div class="warn">Nie karz partnera za wznowienie licytacji. Jeśli masz dobrą rękę, a partner wznowił kontrą, zanim skoczysz do dograny, zastanów się, czy nie jest to lekkie wznowienie.</div>
`,
    keyPoints: [
      'Na pozycji wznawiającej możesz licytować z około 3 PC mniej niż na pozycji bezpośredniej („pożycz króla”).',
      'Po 1♥ – pas – pas: kolor z około 5-13, kontra z około 9+, 1BA z około 11-14.',
      'Nie pozwalaj przeciwnikom grać na wysokości dwóch, gdy znaleźli fit; walcz o kontrakt.',
      'Uważaj ze wznawianiem, gdy masz długość w ich kolorze.',
      'Gdy partner wznawia, oddaj mu króla: nie przelicytowuj w odpowiedzi.',
    ],
    quiz: [
      {
        q: '1♥ – pas – pas – ? Masz ♠KJ84 ♥73 ♦A1063 ♣Q85 (10 PC).',
        options: ['Pas', 'Kontra', '1♠', '1BA'],
        answer: 1,
        explain: 'Krótkie kiery i poparcie w pozostałych kolorach. 10 PC to mało na kontrę na pozycji bezpośredniej, ale na pozycji wznawiającej w sam raz.',
      },
      {
        q: '1♦ – pas – pas – ? Masz ♠K94 ♥AJ6 ♦Q1073 ♣K82 (13 PC).',
        options: ['Pas', 'Kontra', '1BA', '2BA'],
        answer: 2,
        explain: '1BA na wznowieniu pokazuje około 11-14 z zatrzymaniem. To dokładnie ta ręka.',
      },
      {
        q: '1♥ – pas – pas – ? Masz ♠Q74 ♥KJ953 ♦A5 ♣J82 (11 PC).',
        options: ['Pas', 'Kontra', '1BA', '2♦'],
        answer: 0,
        explain: 'Masz pięć kart w kolorze otwarcia, więc partner jest krótki w kierach i z siłą by skontrował. 1♥ może przegrać; pasuj.',
      },
      {
        q: 'Dlaczego na pozycji wznawiającej możesz licytować z mniejszą liczbą punktów niż na pozycji bezpośredniej?',
        options: ['Bo przeciwnicy są słabi, więc partner musi mieć jakąś siłę', 'Bo pozwalają na to przepisy', 'Bo jesteś po partii', 'Bo przeciwnicy nie mogą kontrować'],
        answer: 0,
        explain: 'Jeśli przeciwnicy zatrzymali się nisko, pozostała siła jest podzielona między ciebie i partnera. Partner mógł spasować z przyzwoitą ręką z braku dobrej odzywki.',
      },
      {
        q: 'Przeciwnicy licytują 1♠ – 2♠ i pasują. Jaka jest ogólna zasada na pozycji wznawiającej?',
        options: ['Zawsze pasuj: mają fit', 'Walcz: gdy mają fit na wysokości dwóch, wasza strona zapewne też go ma', 'Licytuj tylko z 12+ PC', 'Kontra karna'],
        answer: 1,
        explain: 'Jeśli mają osiem lub dziewięć atutów, zapewne macie własny fit. Pozwolenie im grać na wysokości dwóch jest zwykle gorsze niż walka do wysokości trzech.',
      },
    ],
  },

  {
    id: 'law-of-total-tricks',
    title: 'Prawo totalnej liczby lew',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Jak liczba atutów obu stron pomaga podejmować decyzje w walce o częściówkę.',
    body: `
<h3>Prawo</h3>
<p><strong>Totalna liczba lew</strong> w rozdaniu to liczba lew, które N/S mogą wziąć w swoim najlepszym kolorze atutowym, plus liczba lew, które E/W mogą wziąć w swoim. Prawo totalnej liczby lew mówi, że ta suma jest w przybliżeniu równa <strong>totalnej liczbie atutów</strong>: długości najdłuższego fitu N/S plus długości najdłuższego fitu E/W.</p>
<p>Jeśli macie dziewięć pików, a przeciwnicy osiem kierów, totalna liczba lew wynosi około 17: jeśli oni wezmą dziewięć lew w kierach, wy weźmiecie około ośmiu w pikach, i tak dalej.</p>

<h3>Reguła praktyczna</h3>
<p>W licytacji konkurencyjnej licytuj do wysokości równej liczbie atutów twojej strony:</p>
<table>
<thead><tr><th>Atuty twojej strony</th><th>Walcz do</th></tr></thead>
<tbody>
<tr><td>8</td><td>Wysokości 2 (8 lew)</td></tr>
<tr><td>9</td><td>Wysokości 3 (9 lew)</td></tr>
<tr><td>10</td><td>Wysokości 4 (10 lew)</td></tr>
</tbody>
</table>
<p>Logika: z dziewięcioma atutami twoja strona jest „bezpieczna” na wysokości trzech, bo nawet jeśli przegrasz, przeciwnicy zapewne sami by coś ugrali. Z tylko ośmioma licytacja na wysokości trzech jest ryzykowna, gdy przeciwnicy też mają osiem, bo suma wynosi tylko 16.</p>

<h3>Przykład</h3>
<div class="auction" data-calls="1S 2H 2S 3H" data-dealer="S"></div>
<div class="hand" data-cards="S:AQJ852 H:73 D:KJ4 C:Q5" data-label="Otwierający: licytuj 3♠"></div>
<p>Podniesienie partnera pokazuje trzy atuty. Z sześcioma pikami twoja strona ma dziewięć: walcz do 3♠. Jeśli przeciwnicy ugrywają 3♥, suma około 17 lew sugeruje, że weźmiecie osiem lub dziewięć lew w pikach, więc 3♠ to dobry wynik w każdym przypadku.</p>
<div class="hand" data-cards="S:AQJ85 H:73 D:KJ4 C:Q52" data-label="Otwierający: pas"></div>
<p>Z pięcioma pikami twoja strona ma osiem. Jeśli obie strony mają po osiem atutów (razem 16), a przeciwnicy biorą dziewięć lew w kierach, wy bierzecie tylko siedem w pikach: 3♠ byłoby bez dwóch. Spasuj i broń się; twoje wartości poza pikami mogą obłożyć 3♥.</p>

<h3>Korekty</h3>
<p>Prawo jest przybliżeniem. Spodziewaj się <strong>większej</strong> totalnej liczby lew niż atutów przy:</p>
<ul>
<li>podwójnym ficie (drugim ficie w kolorze bocznym),</li>
<li>krótkościach w kolorach przeciwników w połączeniu z długimi atutami,</li>
<li>honorach skupionych we własnych długich kolorach.</li>
</ul>
<p>Spodziewaj się <strong>mniejszej</strong> totalnej liczby lew przy:</p>
<ul>
<li>damach i waletach w kolorach przeciwników (dobre w obronie, słabe w ataku),</li>
<li>płaskim układzie (4-3-3-3) w którejkolwiek ręce,</li>
<li>słabej jakości atutów.</li>
</ul>

<h3>Zasady walki o częściówkę</h3>
<ul>
<li>Nie oddawaj kontraktu na wysokości dwóch, gdy twoja strona ma ośmiokartowy fit, a przeciwnicy też.</li>
<li>Z dziewięcioma atutami walcz do wysokości trzech; z nadwyżką atutów blokuj podniesieniami, zwłaszcza przy korzystnych założeniach.</li>
<li>Nie licytuj trzech nad trzema z tylko ośmioma atutami, chyba że masz dodatkowy układ: lepiej się broń.</li>
<li>Bez jednej bez kontry (−50 lub −100) jest lepsze niż pozwolenie przeciwnikom ugrać częściówkę (−110 lub −140).</li>
</ul>
<div class="tip">Gdy partner wchodzi, a ty masz czterokartowe poparcie i słabą rękę, pomyśl o prawie: dziewięć lub dziesięć atutów w obu rękach oznacza, że warto podnieść do odpowiedniej wysokości, utrudniając życie przeciwnikom.</div>
<div class="warn">Nie używaj prawa do licytowania dogranych i szlemów słabymi rękami. To wskazówka do decyzji w walce o częściówkę, gdy licytują obie strony.</div>
`,
    keyPoints: [
      'Totalna liczba lew (najlepsze kontrakty obu stron) ≈ totalna liczba atutów (najdłuższe fity obu stron).',
      'Walcz do wysokości równej liczbie atutów twojej strony: 8 → wysokość dwóch, 9 → trzech, 10 → czterech.',
      'Gdy obie strony mają po osiem atutów, trzy nad trzema to zwykle błąd: broń się.',
      'Koryguj w górę przy podwójnym ficie i krótkościach, w dół przy miękkich honorach w ich kolorach i płaskim układzie.',
      'Mały minus bez kontry jest lepszy niż pozwolenie przeciwnikom ugrać częściówkę.',
    ],
    quiz: [
      {
        q: 'W walce o częściówkę twoja strona ma dziewięć atutów. Do jakiej wysokości prawo radzi walczyć?',
        options: ['Do wysokości 2', 'Do wysokości 3', 'Do wysokości 4', 'Do wysokości 5'],
        answer: 1,
        explain: 'Licytuj do wysokości równej liczbie atutów: dziewięć atutów, dziewięć lew, wysokość trzech.',
      },
      {
        q: 'Każda strona ma ośmiokartowy fit. Przeciwnicy licytują 3♥ nad twoim 2♠. Co sugeruje prawo?',
        options: ['Licytuj 3♠', 'Broń się: przy 16 lewach łącznie, jeśli oni wezmą dziewięć, wy weźmiecie tylko siedem', 'Licytuj 4♠', 'Kontra karna bez względu na rękę'],
        answer: 1,
        explain: 'Przy 16 atutach łącznie lewy sumują się do około 16. Jeśli 3♥ wychodzi, 3♠ jest bez dwóch; jeśli 3♠ by wyszło, 3♥ pada. Tak czy inaczej obrona jest co najmniej równie dobra.',
      },
      {
        q: 'Która cecha sugeruje więcej lew łącznie niż atutów?',
        options: ['Damy i walety w kolorze przeciwników', 'Układ 4-3-3-3', 'Podwójny fit z krótkością w kolorze przeciwników', 'Słabe atuty'],
        answer: 2,
        explain: 'Drugi fit i krótkość pozwalają obu stronom wziąć we własnych kontraktach więcej lew, niż wynikałoby z samej liczby atutów.',
      },
      {
        q: 'Otwierasz 1♠ z sześcioma pikami i minimum. 1♠ – (2♥) – 2♠ – (3♥) – ?',
        options: ['Pas', '3♠', '4♠', 'Kontra'],
        answer: 1,
        explain: 'Partner ma trzy piki, więc twoja strona ma dziewięć. Walka do 3♠ to dokładnie to, co zaleca prawo.',
      },
      {
        q: 'Która korekta jest ujemna, czyli sugeruje mniej lew łącznie?',
        options: ['Krótkość w kolorze przeciwników', 'Damy i walety w kolorach przeciwników', 'Dziesięciokartowy fit', 'Drugi fit'],
        answer: 1,
        explain: 'Miękkie honory w kolorach przeciwników biorą lewy w obronie, ale niewiele dają przy rozgrywce, więc obie strony jako rozgrywający biorą zwykle mniej lew.',
      },
    ],
  },

  {
    id: 'vulnerability-imps-matchpoints',
    title: 'Założenia, IMP-y, maksy i par',
    topic: 'Scoring & tactics',
    level: 'Intermediate',
    summary: 'Jak założenia i rodzaj zapisu zmieniają twoje decyzje w licytacji i rozgrywce.',
    body: `
<h3>Założenia</h3>
<p>Każde rozdanie ma określone założenia, czyli kto jest po partii. Z punktu widzenia twojej strony są cztery kombinacje, zwykle opisywane tak:</p>
<ul>
<li><strong>Korzystne:</strong> wy przed partią, oni po partii. Blokuj i broń się licytacyjnie śmiało; wasze wpadki są tanie, a ich dograne drogie.</li>
<li><strong>Równe:</strong> obie strony przed partią albo obie po partii.</li>
<li><strong>Niekorzystne:</strong> wy po partii, oni przed. Uważaj: wpadka kosztuje 100 za lewę bez kontry i 200-300 z kontrą, a ich dograne są warte mniej.</li>
</ul>
<p>Założenia zmieniają też decyzje o dogranej: dograna po partii daje 500 premii zamiast 300, więc po partii warto licytować dograne z mniejszym zapasem siły, zwłaszcza na IMP-y.</p>

<h3>Mecze drużynowe: IMP-y</h3>
<p>W meczu drużynowym te same rozdania gra się przy obu stołach, a różnicę zapisów przelicza się na międzynarodowe punkty meczowe (IMP):</p>
<table>
<thead><tr><th>Różnica</th><th>IMP</th><th>Różnica</th><th>IMP</th></tr></thead>
<tbody>
<tr><td>20-40</td><td>1</td><td>600-740</td><td>12</td></tr>
<tr><td>50-80</td><td>2</td><td>750-890</td><td>13</td></tr>
<tr><td>90-120</td><td>3</td><td>900-1090</td><td>14</td></tr>
<tr><td>130-160</td><td>4</td><td>1100-1290</td><td>15</td></tr>
<tr><td>170-210</td><td>5</td><td>1300-1490</td><td>16</td></tr>
<tr><td>220-260</td><td>6</td><td>1500-1740</td><td>17</td></tr>
<tr><td>270-310</td><td>7</td><td>1750-1990</td><td>18</td></tr>
<tr><td>320-360</td><td>8</td><td>2000-2240</td><td>19</td></tr>
<tr><td>370-420</td><td>9</td><td>2250-2490</td><td>20</td></tr>
<tr><td>430-490</td><td>10</td><td>2500-2990</td><td>21</td></tr>
<tr><td>500-590</td><td>11</td><td>3000-3490</td><td>22</td></tr>
</tbody>
</table>
<p>Różnica 0-10 daje 0; 3500-3990 daje 23, a 4000+ daje 24. Skala rośnie powoli, więc duże różnice biorą się z dogranych i szlemów, a nadróbki prawie się nie liczą. Stąd strategia na IMP-y:</p>
<ul>
<li><strong>Licytuj dograne agresywnie.</strong> Przed partią 4♠ zyskuje 6 IMP, gdy wychodzi (+420 wobec +170), i traci 5, gdy pada (−50 wobec +140): opłaca się już przy około 45%. Po partii: zysk 10 (+620 wobec +170), strata 6 (−100 wobec +140): opłaca się przy około 37%.</li>
<li><strong>Szlemiki</strong> warto licytować przy około 50% szans; <strong>szlemy</strong> tylko przy szansach wyraźnie powyżej 50% (próg opłacalności to około 56-57%, a w praktyce chcesz niemal pewności).</li>
<li><strong>W rozgrywce bezpieczeństwo przede wszystkim</strong>: zrezygnuj z nadróbki, żeby zabezpieczyć kontrakt.</li>
</ul>

<h3>Turnieje par: zapis maksymalny</h3>
<p>W turnieju par twój wynik w każdym rozdaniu porównuje się z wynikami wszystkich par, które grały na twojej linii, i za każdą pokonaną parę dostajesz punkt (w niektórych sposobach liczenia dwa). <em>Wielkość</em> różnicy nie ma znaczenia, liczy się tylko, ile par pokonasz. To zmienia priorytety:</p>
<ul>
<li>Nadróbki się liczą: +450 bije +420 tak samo pewnie, jak +620 bije +170.</li>
<li>Liczy się wyżej punktowane miano: 3BA z dziesięcioma lewami (+430) bije 4♠ z dziesięcioma (+420). Z dwiema rękami zrównoważonymi i fitem 4-4 w starszym czasem z tego powodu wybiera się 3BA.</li>
<li>O częściówki walczy się zażarcie: +110 wobec +90 to duża różnica na maksy, a wypchnięcie przeciwników o wysokość wyżej, żeby przegrali, często jest zwycięskim posunięciem.</li>
<li>Kontra częściówki na +200 może pobić wszystkich, którzy zapisali +110 lub +140, ale jeśli przeciwnicy ugrają kontrakt z kontrą, dostajesz zero.</li>
<li>Zagrania bezpieczeństwa kosztujące nadróbkę są słuszne tylko wtedy, gdy sam kontrakt jest naprawdę zagrożony.</li>
</ul>

<h3>Par</h3>
<p>Wynik <strong>par</strong> to rezultat bezbłędnej licytacji obu stron, które znają wszystkie cztery ręce. Na przykład jeśli E/W po partii mogą ugrać 4♠ (620), a N/S przed partią mogą wziąć osiem lew w karach, par to 5♦ z kontrą bez trzech na linii N/S: −500 jest dla nich lepsze niż −620. Prawdziwe wyniki porównuje się z parem, żeby zobaczyć, która strona zyskała, a myślenie o parze wyrabia dobrą ocenę w licytacji konkurencyjnej.</p>
<div class="tip">Przed każdym rozdaniem zwróć uwagę na założenia. Zapytaj siebie: „Ile jest warta ich dograna i ile mogę stracić?”</div>
<div class="warn">Nie ryzykuj niepotrzebnie dla nadróbek na IMP-y i nie stosuj na maksy zagrań bezpieczeństwa kosztujących nadróbkę, gdy kontrakt nie jest zagrożony. Właściwe zagranie może zależeć od rodzaju zapisu.</div>
`,
    keyPoints: [
      'Korzystne założenia (wy przed partią, oni po) to czas na bloki i obrony; niekorzystne to czas na ostrożność.',
      'IMP-y: licytuj dograne przed partią przy około 45%, po partii przy około 37%, szlemiki przy 50%.',
      'IMP-y: nadróbki niewiele znaczą; chroń kontrakt.',
      'Maksy: liczy się każda pokonana para, więc nadróbki i wyżej punktowane miana mają znaczenie.',
      'Par to wynik bezbłędnej licytacji obu stron, łącznie z obronami.',
    ],
    quiz: [
      {
        q: 'Co oznaczają „niekorzystne założenia”?',
        options: ['Obie strony po partii', 'Wy po partii, oni przed partią', 'Wy przed partią, oni po partii', 'Obie strony przed partią'],
        answer: 1,
        explain: 'Niekorzystne założenia oznaczają, że wasze wpadki są drogie, a ich dograne stosunkowo tanie: najgorszy moment na obrony licytacyjne i dzikie bloki.',
      },
      {
        q: 'Na IMP-y: jak często, mniej więcej, musi wychodzić dograna po partii, żeby opłacało się ją licytować?',
        options: ['Około 37%', 'Około 50%', 'Około 60%', 'Około 75%'],
        answer: 0,
        explain: 'Zyskujesz 10 IMP (+620 wobec +170), gdy wychodzi, i tracisz 6 (−100 wobec +140), gdy pada, więc próg opłacalności to około 6/16 = 37,5%.',
      },
      {
        q: 'Dlaczego na maksy różnica +430 wobec +420 ma znaczenie?',
        options: ['Nie ma: różnica jest znikoma', 'Liczy się każda pokonana para, bez względu na to, jak mała jest różnica', 'Z powodu skali IMP', 'Bo bez atu dostaje premię'],
        answer: 1,
        explain: 'W turnieju par liczy się tylko kolejność. Dziesięć punktów pokonuje parę tak samo pewnie jak tysiąc.',
      },
      {
        q: 'Na IMP-y: ile IMP daje różnica 250 punktów?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explain: '220-260 to 6 IMP. Na przykład +420 wobec +170, gdy jedna drużyna licytuje dograną przed partią, a druga zatrzymuje się w częściówce.',
      },
      {
        q: 'Przeciwnicy po partii mogą ugrać 4♠ (620). Jesteś przed partią i spodziewasz się bez trzech w 5♦ z kontrą. Ile to jest warte?',
        options: ['Strata 800', 'Strata 500, czyli lepiej niż −620', 'Strata 300', 'Zysk'],
        answer: 1,
        explain: 'Przed partią bez trzech z kontrą to 100 + 200 + 200 = 500. To o 120 mniej niż ich dograna, więc obrona się opłaca, jeśli 4♠ naprawdę wychodzi.',
      },
    ],
  },

  {
    id: 'safety-plays',
    title: 'Zagrania bezpieczeństwa',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Jak oddać niewiele, zwykle nadróbkę, żeby zabezpieczyć kontrakt przed złym podziałem.',
    body: `
<h3>Ubezpieczenie kontraktu</h3>
<p><strong>Zagranie bezpieczeństwa</strong> to sposób rozgrywania koloru (albo całego rozdania), który chroni przed złym podziałem, zwykle kosztem niewielkiej szansy na dodatkową lewę. Kupujesz ubezpieczenie: oddajesz trochę przy dobrych układach, żeby uniknąć katastrofy przy złych. Dlatego pierwsze pytanie zawsze brzmi: <em>ile lew potrzebuję z tego koloru?</em> Najlepsza rozgrywka na cztery lewy często różni się od najlepszej na pięć.</p>

<h3>Zachowaj widełki po obu stronach</h3>
<p>Masz A Q 9 6 5 u dziadka naprzeciw K 10 4 3 w ręce, brakuje J 8 7 2, a potrzebujesz pięciu lew. Zwykle wystarczy każda rozsądna rozgrywka; zagrożeniem jest tylko to, że wszystkie cztery brakujące karty są w jednej ręce.</p>
<ul>
<li><strong>Najpierw ściągnij asa.</strong> Jeśli Zachód nie dołoży, Wschód ma J 8 7 przed twoimi K 10, więc dwa razy wychodzisz ze stołu i impasujesz. Jeśli nie dołoży Wschód, Zachód ma J 8 7 przed Q 9 dziadka, więc dwa razy wychodzisz z ręki i impasujesz. Pięć lew bez względu na to, który obrońca ma długość.</li>
<li>Ściągnięcie najpierw króla to błąd: jeśli potem Zachód nie dołoży, J 8 7 Wschodu siedzą za pozostałymi A Q 9 dziadka, twoje 10 4 3 nie złapią waleta i Wschód musi wziąć lewę.</li>
</ul>
<p>Ogólna zasada: gdy masz wszystkie starsze honory oprócz jednego, najpierw ściągnij ten honor, który zostawia pozycję impasową w <em>obu</em> rękach.</p>

<h3>Rezygnacja z nadróbki dla pewności kontraktu</h3>
<p>Masz A K 10 5 4 u dziadka naprzeciw 8 7 6 i potrzebujesz czterech lew; możesz oddać jedną. Naturalna rozgrywka — as, król i trzecia runda — daje cztery lewy tylko w około 73% przypadków: zawodzi przy podziale 5-0 i przy większości podziałów 4-1.</p>
<p>Lepiej: ściągnij asa, potem wyjdź w kierunku stołu i jeśli Zachód dołoży blotkę, zagraj dziesiątkę. Jeśli Wschód weźmie honorem, kolor zwykle podzielił się 3-2 i król oraz długie karty są dobre; jeśli dziesiątka weźmie, wyłapujesz długość Zachodu. Ta rozgrywka daje cztery lewy w około 82% przypadków: oprócz każdego podziału 3-2 radzi sobie ze wszystkimi podziałami 4-1, w których długość ma Zachód. Ceną jest nieco mniejsza szansa na pięć lew, co ma znaczenie tylko wtedy, gdy ich potrzebujesz.</p>

<h3>Przepuszczenie dla bezpieczeństwa</h3>
<p>Dziadek ma A K 7 6 5 4 i tylko jedno boczne dojście; ty masz 3 2 i potrzebujesz czterech lew. Jeśli zagrasz asa, króla i trzecią rundę, podział 4-1 zostawi ci dwie przegrywające w kolorze i żadnej drogi do długich kart. Zamiast tego oddaj całkowicie pierwszą rundę. Później możesz zagrać do asa i króla, a jeśli kolor dzielił się 4-1, oddać jeszcze jedną rundę i bocznym dojściem odegrać dwie ostatnie karty. Cztery lewy przy każdym podziale 3-2 i 4-1: 96%.</p>

<h3>Bezpieczeństwo całego rozdania</h3>
<p>Bezpieczeństwo nie dotyczy tylko pojedynczych kolorów. Załóżmy, że w 3BA liczysz dziewięć lew, a impas mógłby dać dziesiątą, ale jeśli nie wyjdzie, obrońca, który weźmie lewę, odegra cztery lewy w długim kolorze. Nie impasuj. W zapisie drużynowym nadróbka jest warta najwyżej 1 IMP, a kontrakt znacznie więcej. Podobnie, zanim zaryzykujesz w jednym kolorze, sprawdź, czy inny kolor nie da potrzebnych lew bez żadnego ryzyka.</p>
<div class="tip">Zanim dotkniesz kluczowego koloru, zapytaj: „Z jakim najgorszym podziałem mogę sobie poradzić i która rozgrywka sobie z nim radzi?”</div>

<h3>Zagrania bezpieczeństwa a rodzaj zapisu</h3>
<ul>
<li><strong>Mecze (IMP-y):</strong> stosuj prawie każde zagranie bezpieczeństwa, które chroni kontrakt. Nadróbka daje bardzo mało; przegrana dograna kosztuje dużo.</li>
<li><strong>Turnieje par (maksy):</strong> nadróbki się liczą, bo rywalizujesz ze wszystkimi, którzy grają ten sam kontrakt. Stosuj zagranie bezpieczeństwa tylko wtedy, gdy kontrakt jest naprawdę zagrożony albo gdy podejrzewasz, że grasz lepszy kontrakt niż reszta sali.</li>
</ul>
<div class="warn">Zagranie bezpieczeństwa wykonane bez potrzeby albo chroniące przed niewłaściwym zagrożeniem to po prostu stracona lewa. Najpierw policz lewy; potem zdecyduj, czy potrzebujesz ubezpieczenia i jakiego.</div>
`,
    keyPoints: [
      'Najpierw ustal, ile lew potrzebujesz z koloru; od tego zależy najlepsza rozgrywka.',
      'Z A Q 9 x x naprzeciw K 10 x x najpierw ściągnij asa, żeby zachować impas przeciw każdemu z obrońców.',
      'Z A K 10 x x naprzeciw x x x, gdy potrzebujesz czterech lew, ściągnij asa, a potem impasuj dziesiątką.',
      'Gdy brakuje dojść, a możesz oddać jedną lewę, przepuść wczesną rundę.',
      'Na IMP-y stosuj zagrania bezpieczeństwa swobodnie, na maksy tylko wtedy, gdy kontrakt jest zagrożony.',
    ],
    quiz: [
      {
        q: 'Masz A Q 9 6 5 naprzeciw K 10 4 3 i potrzebujesz pięciu lew. Którą kartę ściągnąć najpierw?',
        options: ['Asa', 'Króla', 'Damę', 'To bez znaczenia'],
        answer: 0,
        explain: 'Po asie zostają ci K 10 za Wschodem i Q 9 za Zachodem, więc podział 4-0 da się wyłapać bez względu na to, który obrońca ma cztery karty.',
      },
      {
        q: 'Masz A K 10 5 4 naprzeciw 8 7 6 i potrzebujesz tylko czterech lew. Na czym polega zagranie bezpieczeństwa?',
        options: ['Ściągnąć asa i króla, potem zagrać trzecią rundę', 'Ściągnąć asa, potem wyjść w kierunku stołu i zaimpasować dziesiątką, jeśli Zachód dołoży blotkę', 'Zagrać dziesiątkę ze stołu', 'Przepuścić dwie pierwsze rundy'],
        answer: 1,
        explain: 'To chroni przed Q J 9 x u Zachodu i nadal daje cztery lewy przy wszystkich normalnych podziałach: około 82% wobec około 73% przy ściąganiu z góry.',
      },
      {
        q: 'Dziadek ma A K 7 6 5 4 i jedno boczne dojście; ty masz 3 2. Potrzebujesz z koloru czterech lew. Co robisz?',
        options: ['As, król, potem trzecia runda', 'Przepuszczam pierwszą rundę', 'Gram trójkę i impasuję siódemką', 'Ściągam asa i liczę na szczęście'],
        answer: 1,
        explain: 'Przepuszczenie pierwszej rundy zachowuje wysokie karty dziadka jako dojścia. Wtedy bierzesz cztery lewy zarówno przy podziale 3-2, jak i 4-1, w około 96% przypadków.',
      },
      {
        q: 'Na IMP-y liczysz w 3BA dziewięć lew. Impas mógłby dać dziesiątą, ale jeśli nie wyjdzie, obrona odegra kolor. Co robisz?',
        options: ['Impasuję dla nadróbki', 'Biorę swoje dziewięć lew', 'Najpierw oddaję lewę', 'Gram na przymus'],
        answer: 1,
        explain: 'Na IMP-y nadróbka nie jest prawie nic warta, a wpadka kosztuje dograną. Zabezpiecz kontrakt.',
      },
      {
        q: 'Dlaczego na maksy rzadziej stosuje się zagrania bezpieczeństwa?',
        options: ['Bo są tam niedozwolone', 'Bo nadróbka może pokonać inne pary grające ten sam kontrakt', 'Bo dograne mniej punktują', 'Bo obrońcy są słabsi'],
        answer: 1,
        explain: 'W turnieju par +450 bije +420 tak samo pewnie, jak +420 bije −50. Oddanie nadróbki kosztuje punkty za każdym razem, gdy kontrakt tak naprawdę nie był zagrożony.',
      },
    ],
  },

  {
    id: 'avoidance-play',
    title: 'Unikanie: nie wpuszczaj groźnego przeciwnika do ręki',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Jak ułożyć rozgrywkę, żeby lewę, którą musisz oddać, oddać obrońcy, który nie może ci zaszkodzić.',
    body: `
<h3>Ręka groźna i ręka bezpieczna</h3>
<p>Często tylko jeden obrońca może ci zaszkodzić. W bez atu to ten, który ma wyrobione lewy w długim kolorze. W kontrakcie kolorowym może to być ten, który może zagrać przez króla albo dać partnerowi przebitkę. Wcześnie rozpoznaj <strong>rękę groźną</strong> i planuj oddawanie wszystkich koniecznych lew <strong>ręce bezpiecznej</strong>. To jest gra na unikanie.</p>

<h3>Pełny przykład</h3>
<div class="deal" data-n="S:54 H:K83 D:KQ5 C:AJ1093" data-e="S:97 H:Q975 D:J643 C:Q86" data-s="S:A632 H:AJ4 D:A72 C:K72" data-w="S:KQJ108 H:1062 D:1098 C:54" data-caption="3BA gra Południe. Zachód wistuje ♠K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Liczenie:</strong> ♠A, ♥AK, ♦AKQ, ♣AK: osiem lew z góry. Dodatkowe lewy dadzą trefle, ale być może trzeba będzie oddać jedną damie trefl.</p>
<p><strong>Krok 1: przepuszczenie.</strong> Masz w obu rękach sześć pików, więc według reguły 7 przepuszczasz raz. Przepuść ♠K i weź drugiego pika. Wschód miał dwa piki, więc teraz nie ma żadnego: <strong>Wschód to ręka bezpieczna, Zachód groźna.</strong></p>
<p><strong>Krok 2: wybór impasu.</strong> W treflach można impasować w obie strony: damę możesz próbować złapać u każdego z obrońców. Zagraj ♣K z ręki, potem wyjdź małym treflem w kierunku stołu i gdy Zachód dołoży blotkę, zaimpasuj dziesiątką. Jeśli damę ma Zachód, impas wychodzi. Jeśli ma ją Wschód, jak tutaj, Wschód bierze lewę, ale nie ma pika do zagrania. Bierzesz zmianę koloru i dziesięć lew: pika, dwa kiery, trzy kara i cztery trefle.</p>
<p>Impas w drugą stronę (walet przez Wschód w kierunku twojego króla) akurat przy tym układzie by się udał, ale przegrywałby zawsze, gdy damę ma Zachód, a Zachód odegrałby wtedy piki. Gra na unikanie wygrywa bez względu na to, gdzie jest dama.</p>
<p>A impas kierowy, wyjście w kierunku A J? Też przegrałby z Zachodem, gdyby Zachód miał ♥Q. Wybieraj kolor, w którym nieudany impas trafia do ręki bezpiecznej.</p>
<div class="tip">Przy impasie w obie strony najpierw zapytaj: „Jeśli ten impas nie wyjdzie, czy ma znaczenie, kto weźmie lewę?” Jeśli ma, impasuj w stronę ręki bezpiecznej, a zgadywanie zostaw na sytuacje, gdy obaj obrońcy są równie groźni.</div>

<h3>Inne techniki unikania</h3>
<ul>
<li><strong>Oddaj lewę ręce bezpiecznej.</strong> Gdy w kolorze trzeba oddać lewę, ułóż grę tak, żeby wziął ją obrońca bezpieczny: wychodź z tej ręki, która pozwala dołożyć blotkę, gdy ręka groźna nie może tanio wziąć lewy.</li>
<li><strong>Chroń króla.</strong> Z K x w ręce, gdy ręka groźna siedzi po twojej prawej, wyjście przez twojego króla jest zabójcze, więc nie wpuszczaj ręki groźnej do ręki.</li>
<li><strong>Graj w kierunku honorów</strong> tak, żeby lewę musiał wziąć partner ręki groźnej, a nie ona sama.</li>
<li><strong>W kontraktach kolorowych</strong> zagrożeniem może być przebitka: jeśli wiadomo, że jeden z obrońców jest krótki w kolorze, nie wpuszczaj do ręki jego partnera, żeby nie mógł dać przebitki.</li>
</ul>
<div class="warn">Unikanie działa tylko wtedy, gdy wiesz, który obrońca jest groźny. Obserwuj wist, licytację i karty z pierwszych lew i ustal posiadacza długiego koloru, zanim zaczniesz grać kluczowy kolor.</div>
`,
    keyPoints: [
      'Rozpoznaj rękę groźną (często obrońcę z wyrobionymi lewami) i rękę bezpieczną.',
      'Jeśli lewę trzeba oddać, oddaj ją ręce bezpiecznej.',
      'Łącz przepuszczenie z unikaniem: zrób z partnera posiadacza długiego koloru rękę bezpieczną, a potem impasuj w jego stronę.',
      'Przy impasie w obie strony wybierz kierunek, w którym przegrywasz tylko z ręką bezpieczną.',
      'Wybieraj źródło lew, w którym nieudana opcja trafia do ręki bezpiecznej.',
    ],
    quiz: [
      {
        q: 'Który obrońca jest zwykle ręką groźną w bez atu?',
        options: ['Ten z większą liczbą PC', 'Ten z wyrobionymi lewami w długim kolorze', 'Ten po twojej lewej', 'Zawsze ten, który wistował'],
        answer: 1,
        explain: 'Ręka groźna to ta, która po dojściu do ręki odegra dość lew, żeby cię obłożyć — zwykle obrońca z długim, wyrobionym kolorem.',
      },
      {
        q: 'Dlaczego w powyższym rozdaniu przepuszcza się pierwszego pika?',
        options: ['Żeby wziąć dodatkową lewę pikową', 'Żeby wyczerpać piki Wschodu, tak by Wschód stał się ręką bezpieczną', 'Żeby ukryć długość pików', 'Żeby stworzyć dojście do stołu'],
        answer: 1,
        explain: 'Wschód miał dwa piki. Po wzięciu drugiej rundy nie ma żadnego, więc po dojściu do ręki nie może ci zaszkodzić.',
      },
      {
        q: 'W którą stronę w powyższym rozdaniu impasować trefle?',
        options: ['Impasować damę u Zachodu, żeby nieudany impas trafił do Wschodu', 'Impasować damę u Wschodu', 'Grać na wypadnięcie damy', 'Rzucić monetą'],
        answer: 0,
        explain: 'Wyjście w kierunku stołu i impas dziesiątką wygrywa, gdy damę ma Zachód, a przegrywa tylko ze Wschodem, który nie ma pików. Kontrakt jest bezpieczny w każdym przypadku.',
      },
      {
        q: 'Dlaczego nie spróbować impasu kierowego (wyjście w kierunku A J) po dziewiątą lewę?',
        options: ['Przegrałby, gdyby ♥Q miał Zachód, czyli ręka groźna', 'Nie może wyjść', 'Wymaga dwóch dojść', 'Kiery są zablokowane'],
        answer: 0,
        explain: 'Wyjście w kierunku A J to impas przeciw Wschodowi, ale przegrywa z damą Zachodu, a Zachód odegrałby wtedy piki. Impas treflowy przegrywa tylko z ręką bezpieczną.',
      },
      {
        q: 'Masz w ręce K x, a ręka groźna siedzi po twojej prawej. Na czym polega ryzyko?',
        options: ['Nie ma ryzyka', 'Wyjście ręki groźnej przez twojego króla może go złapać', 'Twój król zostanie przebity', 'Możesz zablokować kolor'],
        answer: 1,
        explain: 'Jeśli obrońca po twojej prawej dojdzie do ręki, as jego partnera siedzi nad twoim królem. Nie wpuszczaj tego obrońcy do ręki albo ułóż grę tak, żeby każdą lewę, którą musisz oddać, wziął drugi obrońca.',
      },
    ],
  },

  {
    id: 'dummy-reversal-and-trump-coup',
    title: 'Odwrócony dziadek i coup atutowy',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Dwa zagrania, w których celowo przebija się w długiej ręce atutowej: atuty dziadka ściągają atuty obrońców albo skracasz własne atuty, żeby zaimpasować, gdy dziadek nie ma już atutu do zagrania.',
    body: `
<h3>Przebitki w długiej ręce</h3>
<p>Lekcja „Gospodarka atutami” wyjaśnia, że przebitki w krótkiej ręce atutowej dają lewy, a przebitki w długiej ręce zwykle nie. Dwie techniki odwracają tę zasadę. W grze na <strong>odwróconego dziadka</strong> przebijasz w ręce tyle razy, że ściąganie atutów przejmują atuty dziadka. W <strong>coupie atutowym</strong> przebijasz, żeby skrócić swoje atuty i móc wyłapać honor atutowy obrońcy bez grania w atu.</p>

<h3>Odwrócony dziadek</h3>
<p>Z pięcioma atutami w ręce i trzema u dziadka zwykle robisz pięć lew atutowych. Przebij trzy razy w ręce, a potem ściągnij atuty trzema atutami dziadka, a zrobisz sześć: trzy przebitki i trzy rundy atutów z dziadka. Dziadek stał się ręką główną, a twoje przebitki są teraz przebitkami w krótkiej ręce.</p>
<div class="deal" data-n="S:KQJ H:A654 D:853 C:K42" data-e="S:532 H:10872 D:964 C:973" data-s="S:A10987 H:3 D:A72 C:AQJ10" data-w="S:64 H:KQJ9 D:KQJ10 C:865" data-caption="6♠ gra Południe. Zachód wistuje ♦K."></div>
<p><strong>Policz:</strong> pięć pików, ♥A, ♦A i cztery trefle to jedenaście lew. Dziadek nie może niczego przebić, bo ma tyle kar i trefli co ty, a twoje dwa przegrywające kara nie mają dokąd odejść.</p>
<p><strong>Odwróć dziadka:</strong> przebij w ręce trzy małe kiery dziadka i pozwól, żeby ♠K Q J ściągnęły atuty. Dojścia do dziadka to ♥A, ♠K, ♠Q i ♣K.</p>
<ol>
<li>Weź ♦A i zagraj kiera do asa.</li>
<li>Przebij kiera i zagraj małego pika do króla.</li>
<li>Przebij kiera i zagraj pika do damy.</li>
<li>Przebij ostatniego kiera ♠A i przejdź do dziadka treflem do króla.</li>
<li>Ściągnij ostatni atut ♠J, zrzucając karo, i weź resztę trefli.</li>
</ol>
<p>Sześć lew atutowych (trzy przebitki i trzy rundy z dziadka), ♥A, ♦A i cztery trefle to dwanaście. Plan wymaga podziału atutów 3-2, żeby trzy atuty dziadka mogły je ściągnąć, i potrzebuje każdego dojścia. Dlatego 6♠ pokonuje tylko wist w atu: zabiera rundę atutów, zanim zaczną się przebitki, i rozgrywającemu brakuje dojścia.</p>
<div class="tip">Test odwróconego dziadka: dodaj przebitki, które możesz zrobić w ręce, do długości atutów dziadka. Jeśli suma przekracza twoją własną długość atutów, a atuty dziadka są dość mocne, żeby ściągnąć atuty obrońców, odwrócenie dziadka daje lewę.</div>

<h3>Coup atutowy</h3>
<p>Czasem obrońca ma honor atutowy za twoimi widełkami, np. ♠K x za twoimi ♠A Q, a dziadek nie ma już atutu, żeby zagrać przez niego. Nie możesz zaimpasować, grając atu sam. Ale jeśli pod koniec rozdania gra dziadek, a obrońca ma już tylko atuty, musi zagrać jeden z nich <em>przed</em> tobą i impas udaje się bez atutu u dziadka. To jest <strong>coup atutowy</strong>. Żeby zadziałał, musisz najpierw skrócić swoje atuty przebitkami, aż nie będziesz ich miał więcej niż obrońca.</p>
<div class="deal" data-n="S:54 H:AK76 D:AKQJ C:765" data-e="S:K876 H:QJ9 D:10985 C:32" data-s="S:AQJ1093 H:54 D:7632 C:4" data-w="S:2 H:10832 D:4 C:AKQJ1098" data-caption="6♠ gra Południe. Zachód ściąga ♣A i zmienia na ♥10."></div>
<p>Nie możesz już nic oddać. Weź ♥A i zagraj pika: Wschód dokłada małego, a twoja 9 bierze. Przejdź do dziadka ♦A i powtórz impas: 10 bierze, a Zachód zrzuca. Wschód miał cztery atuty i wciąż ma ♠K 8 za twoimi ♠A Q J 3, a dziadek nie ma już pików. Jeśli teraz ściągniesz asa, król Wschodu weźmie lewę: bez jednej.</p>
<p>Zamiast tego skróć atuty. Masz cztery wobec dwóch Wschodu, więc musisz przebić dwa razy:</p>
<ol>
<li>Przejdź do dziadka ♦K, ściągnij ♥K i przebij trefla ♠3.</li>
<li>Przejdź do dziadka ♦Q i przebij kiera ♠J. Teraz masz ♠A Q, tyle atutów co Wschód.</li>
<li>Przejdź do dziadka ♦J; Wschód dokłada do koloru. W dwunastej lewie gra dziadek.</li>
</ol>
<p>Przebij jednego trefla i jednego kiera, a nie dwa trefle: wtedy Wschód za każdym razem musi dokładać do koloru i nigdy nie dostaje wolnej zrzutki. Gdyby ją dostał, zrzuciłby karo i później przebił jedną z wygrywających kar dziadka.</p>
<div class="deal" data-n="S:- H:6 D:- C:6" data-e="S:K8 H:- D:- C:-" data-s="S:AQ H:- D:- C:-" data-w="S:- H:- D:- C:KQ" data-caption="Dwie ostatnie lewy. Atu pik, gra dziadek."></div>
<p>Wschód ma same atuty i musi zagrać jeden przed tobą: ♠8, a ty bierzesz damą, albo ♠K, a ty bierzesz asem. Dwanaście lew.</p>
<h4>Czego potrzebuje coup atutowy</h4>
<ul>
<li><strong>Nie więcej atutów niż obrońca</strong> na końcu: skróć swoje przebitkami, w razie potrzeby nawet przebijając wygrywające karty dziadka (to tak zwany <em>wielki coup</em>).</li>
<li><strong>Dojścia do dziadka</strong> na każdy impas atutowy, każdą przebitkę i ostatnie wyjście.</li>
<li><strong>Właściwy moment:</strong> w chwili coupu obrońca może mieć już tylko atuty. Policzenie jego ręki mówi ci, kiedy to nastąpi.</li>
</ul>
<div class="warn">Skracaj atuty tylko wtedy, gdy wiesz, że musisz. Gdyby atuty dzieliły się 3-3, król spadłby pod asa, a przebijanie w ręce tylko zmarnowałoby atuty. Tutaj zrzutka Zachodu w drugiej rundzie powiedziała ci, że Wschód miał cztery.</div>
`,
    keyPoints: [
      'W grze na odwróconego dziadka przebijasz w długiej ręce atutowej tak często, że atuty dziadka ściągają atuty obrońców.',
      'Daje lewę, gdy przebitki w ręce plus długość atutów dziadka przewyższają twoją długość atutów; wymaga dobrych atutów u dziadka i dojść.',
      'Coup atutowy wyłapuje honor atutowy obrońcy bez grania w atu: gra dziadek, a obrońca musi zagrać pierwszy.',
      'Przed coupem atutowym skróć swoje atuty przebitkami, aż nie będziesz miał ich więcej niż obrońca.',
      'Najpierw policz atuty obrońcy; coup jest potrzebny tylko przy złym podziale.',
    ],
    quiz: [
      {
        q: 'Na czym polega gra na odwróconego dziadka?',
        options: ['Na przebijaniu u dziadka przegrywających dziadka', 'Na przebijaniu we własnej długiej ręce atutowej tak często, że atuty dziadka ściągają atuty obrońców', 'Na tym, że dziadek rozgrywa', 'Na przejściu do bez atu'],
        answer: 1,
        explain: 'Role rąk się odwracają: twoje atuty służą do przebijania, a krótsze, ale mocne atuty dziadka ściągają atuty obrońców.',
      },
      {
        q: 'Masz pięć atutów, a dziadek trzy mocne. Ile przebitek w ręce potrzebujesz, żeby odwrócony dziadek dał lewę?',
        options: ['Jednej', 'Dwóch', 'Trzech', 'Pięciu'],
        answer: 2,
        explain: 'Trzy przebitki i trzy rundy atutów z dziadka to sześć lew atutowych, o jedną więcej niż twoje pięć.',
      },
      {
        q: 'Który wist pokonuje 6♠ w rozdaniu z odwróconym dziadkiem powyżej?',
        options: ['♦K', 'Kier', 'Atu', 'Trefl'],
        answer: 2,
        explain: 'Wist w atu zabiera rundę atutów, zanim rozgrywający może zacząć przebijać, a potem brakuje mu dojścia, żeby dokończyć odwrócenie.',
      },
      {
        q: 'Co musisz zrobić przed coupem atutowym?',
        options: ['Ściągnąć wszystkie atuty obrońców', 'Skrócić swoje atuty przebitkami, aż nie będziesz miał ich więcej niż obrońca', 'Zachować atut u dziadka', 'Zagrać swoje widełki atutowe'],
        answer: 1,
        explain: 'Na końcu obrońca może mieć tylko atuty, a ty nie więcej atutów niż on, żeby wyjście z dziadka zmusiło go do zagrania przed tobą.',
      },
      {
        q: 'Dlaczego w końcówce coupu atutowego powyżej król Wschodu nie bierze lewy?',
        options: ['Wschód musi zagrać atut przed tobą, a ty grasz wyżej', 'Król został już zagrany', 'Króla ma Zachód', 'Wschód jest w przymusie w kierach'],
        answer: 0,
        explain: 'Gra dziadek, a Wschodowi zostały tylko ♠K 8. Cokolwiek zagra, bierzesz kartą tuż nad nią.',
      },
    ],
  },

  {
    id: 'counting-on-defense',
    title: 'Liczenie w obronie',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Jak obrońcy liczą punkty, układ i lewy rozgrywającego, żeby znaleźć właściwą obronę.',
    body: `
<h3>Trzy rzeczy do policzenia</h3>
<p>Silni obrońcy zdają się widzieć karty przez koszulki. Ich sekretem jest liczenie. Z licytacji i kilku pierwszych lew ustalają trzy rzeczy:</p>
<ol>
<li><strong>Punkty:</strong> ile PC mają rozgrywający i partner.</li>
<li><strong>Układ:</strong> ile kart ma rozgrywający w każdym kolorze.</li>
<li><strong>Lewy:</strong> ile lew może wziąć rozgrywający i ile potrzebuje obrona.</li>
</ol>

<h3>Liczenie punktów</h3>
<p>Zacznij od licytacji. Otwierający 1BA ma 15-17, słabe dwa 5-10, podniesienie inwitujące 10-12. Gdy dziadek się wyłoży, dodaj jego PC do swoich i odejmij od 40.</p>
<p>Przykład: Południe otwiera 1BA, a Północ podnosi do 3BA. Dziadek ma 10 PC, a ty 9. Partner ma 40 − 10 − 9 − (15 do 17) = 4 do 6 PC. Jeśli partner pokazał już ♠K, biorąc nim lewę, ma najwyżej 3 PC więcej, więc nie może mieć jeszcze asa. Każdy inny brakujący as jest zatem u rozgrywającego i nie ma co liczyć, że partner dojdzie do ręki, żeby odegrać swój długi kolor.</p>
<p>To samo liczenie działa w drugą stronę. Jeśli rozgrywający, który pokazał 15-17, wyłożył już ♠AQ, ♥AK i ♦K (16), nie może mieć także ♣A (miałby 20). Ma go partner, więc możesz bezpiecznie grać trefle przez króla dziadka.</p>

<h3>Liczenie układu</h3>
<p>Każda ręka ma 13 kart. Najpierw wykorzystaj licytację: otwarcie 1♥ to co najmniej pięć kierów; 1♠, a potem 2♥ pokazuje co najmniej pięć pików i cztery kiery; otwierający 1BA nie ma singla. Dodaj sygnały ilościowe partnera i moment, w którym ktoś nie dokłada do koloru.</p>
<table>
<thead><tr><th>Źródło</th><th>Czego się dowiadujesz</th></tr></thead>
<tbody>
<tr><td>Otwarcie i rebid rozgrywającego</td><td>Długość w licytowanych kolorach; czy ręka jest zrównoważona</td></tr>
<tr><td>Dziadek</td><td>13 kart, które widzisz</td></tr>
<tr><td>Sygnały ilościowe partnera</td><td>Długość partnera w kolorach rozgrywającego, a więc i rozgrywającego</td></tr>
<tr><td>Gracz, który nie dokłada do koloru</td><td>Jego dokładna długość w tym kolorze</td></tr>
</tbody>
</table>
<p>Przykład: rozgrywający otworzył 1♠ i zalicytował 2♥, więc ma co najmniej 5-4 w starszych. Sygnał ilościowy partnera pokazuje, że rozgrywający ma dwa kara. To jedenaście kart, więc rozgrywający ma najwyżej dwa trefle, a jeśli licytacja wskazuje na 5-4-2-2 — dokładnie dwa. Jeśli rozgrywający gra teraz trefla w kierunku K Q x x dziadka, a ty masz asa, wiesz, czy przepuszczenie odetnie go od reszty koloru.</p>
<div class="tip">Policz rękę jak najwcześniej, najlepiej do trzeciej lewy. Zapamiętaj cztery długości (np. „5-4-2-2”) i aktualizuj je za każdym razem, gdy jakaś karta coś ci powie.</div>

<h3>Liczenie lew</h3>
<p>Zapytaj: „Ile lew weźmie rozgrywający, gdy dojdzie do ręki?” Jeśli wystarczy mu to na kontrakt, musisz brać swoje lewy teraz: zmień kolor, ściągnij lewy albo od razu weź lewę obkładającą. Jeśli rozgrywającemu brakuje lew, broń się pasywnie i pozwól mu je oddać.</p>
<p>Przykład: przeciw 4♠ dziadek ma ♣A K Q J 5, a licytacja i początek rozgrywki pokazują, że rozgrywający ma mocny kolor pikowy i ♥A. Po ściągnięciu atutów rozgrywający liczy pięć pików, pięć trefli i ♥A: jedenaście lew. Jeśli macie lewy w kierach lub karach, trzeba je wziąć natychmiast, nawet kosztem wyjścia spod króla.</p>
<p>Odwrotnie, po licytacji 1BA – 3BA z płaskim dziadkiem bez długiego koloru rozgrywający może mieć tylko siedem lub osiem lew. Wtedy obrona powinna unikać otwierania nowych kolorów i czekać: rozgrywający będzie musiał oddawać lewy.</p>

<h3>Wszystko razem</h3>
<p>Liczenie to nie jednorazowy rachunek, lecz nawyk. W każdej lewie pytaj, co zagrana karta mówi o czterech rękach. Gdy obraz staje się jasny, właściwa obrona często staje się oczywista, a gdy nie jest, liczenie przynajmniej mówi, jakich układów potrzebujesz, żeby kontrakt upadł. Graj na te układy.</p>
<div class="warn">Nie licz tylko lew swojej strony. Pytanie zawsze brzmi, czy rozgrywający może ugrać kontrakt i jak twoja strona może temu zapobiec.</div>
`,
    keyPoints: [
      'Licz punkty: z licytacji, dziadka i własnej ręki ustal PC partnera.',
      'Licz układ: licytacja, dziadek, sygnały ilościowe partnera i braki do koloru sumują się do 13.',
      'Licz lewy rozgrywającego: jeśli ma ich dość, bierz swoje lewy teraz; jeśli nie, broń się pasywnie.',
      'Gdy rozgrywający pokazał przedział siły, zagrane już honory ograniczają to, co może jeszcze mieć.',
      'Zakładaj układ, przy którym kontrakt da się obłożyć, i broń się zgodnie z nim.',
    ],
    quiz: [
      {
        q: 'Południe otworzyło 1BA (15-17), a Północ podniosła do 3BA. Dziadek ma 10 PC, a ty 9. Ile PC ma partner?',
        options: ['0-2', '4-6', '7-9', '10-12'],
        answer: 1,
        explain: '40 − 10 − 9 = 21 dla rozgrywającego i partnera razem. Rozgrywający ma 15-17, więc partner ma 4-6.',
      },
      {
        q: 'Rozgrywający otworzył 1BA (15-17) i pokazał już ♠AQ, ♥AK i ♦K. Kto ma ♣A?',
        options: ['Rozgrywający', 'Partner', 'Nie da się tego ustalić', 'Dziadek'],
        answer: 1,
        explain: 'Rozgrywający pokazał 16 PC. ♣A dałby mu 20, poza przedziałem, więc musi go mieć partner.',
      },
      {
        q: 'Rozgrywający otworzył 1♠ i zalicytował 2♥. Sygnał ilościowy partnera pokazuje, że rozgrywający ma dwa kara. Ile najwyżej trefli może mieć rozgrywający?',
        options: ['Jednego', 'Dwa', 'Trzy', 'Cztery'],
        answer: 1,
        explain: 'Co najmniej pięć pików i cztery kiery plus dwa kara to jedenaście kart, więc rozgrywający ma najwyżej dwa trefle.',
      },
      {
        q: 'Przeciw 4♠ liczysz rozgrywającemu jedenaście lew, gdy tylko odzyska rękę. Co powinna zrobić obrona?',
        options: ['Bronić się pasywnie', 'Natychmiast brać lub wyrabiać swoje lewy', 'Grać w atu', 'Czekać na błąd rozgrywającego'],
        answer: 1,
        explain: 'Jeśli rozgrywający ma potrzebne lewy, pasywna obrona tylko pozwala mu je wziąć. Jedyną szansą jest wziąć swoje lewy teraz.',
      },
      {
        q: 'Przeciw 3BA dziadek jest płaski, a rozgrywający ma chyba tylko siedem lub osiem lew. Jaka obrona jest zwykle najlepsza?',
        options: ['Pasywna: unikaj otwierania nowych kolorów', 'Atakuj po kolei każdy kolor', 'Od razu ściągnij wszystkie asy', 'Wistuj spod królów'],
        answer: 0,
        explain: 'Rozgrywającemu brakuje lew. Otwieranie nowych kolorów grozi oddaniem mu lewy; bezpieczne wyjścia zmuszają go do szukania lew bez twojej pomocy.',
      },
    ],
  },

  {
    id: 'penalty-doubles-and-sacrifices',
    title: 'Kontry karne i obrony',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Kiedy kontrować przeciwników karnie, a kiedy licytować dalej kontrakt, który zapewne przegra, bo kosztuje mniej niż ich kontrakt.',
    body: `
<h3>Kontry karne</h3>
<p>Wiele kontr na niskich wysokościach jest wywołujących, więc kontry karne biorą się z kilku jasnych sytuacji:</p>
<ul>
<li><strong>Po sekwencji z kontrą negatywną:</strong> odpowiadający pasuje z mocnym kolorem wchodzącego, a otwierający wznawia licytację kontrą, na którą odpowiadający pasuje (zob. lekcję „Kontra negatywna”).</li>
<li><strong>Po rekontrze twojej strony</strong> (1♥ – X – XX) pokazaliście przewagę siły, więc kontry ucieczek przeciwników są karne.</li>
<li><strong>Gdy przeciwnicy się zapędzili</strong> do dograny lub wysokiej częściówki przy misficie albo w licytacji konkurencyjnej, a ty masz lewy atutowe.</li>
<li><strong>Gdy twoja ręka jest już opisana</strong>, a partner ma siłę: kontra któregokolwiek z was mówi wtedy „obłożymy to”.</li>
</ul>
<h4>Wskazówki</h4>
<ul>
<li>Lewy atutowe to najlepszy powód do kontry. Wysokie karty w kolorach bocznych mogą zostać przebite albo zaimpasowane.</li>
<li>Nie kontruj swobodnie wylicytowanej dograny tylko na wysokich kartach. Przeciwnicy wiedzą, czego im brakuje, a twoja kontra mówi rozgrywającemu, gdzie są honory.</li>
<li>Pomyśl, co się stanie, jeśli kontrakt wyjdzie. 2♥ z kontrą ugrane to 470 lub 670: częściówka zamienia się w dograną.</li>
<li>Pomyśl, dokąd mogą uciec. Kontra 1♠, gdy przeciwnicy mają łatwą ucieczkę do lepszego fitu, niewiele daje.</li>
</ul>

<h3>Ile kosztuje wpadka z kontrą?</h3>
<table>
<thead><tr><th>Wpadka</th><th>Przed partią z kontrą</th><th>Po partii z kontrą</th></tr></thead>
<tbody>
<tr><td>1</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>300</td><td>500</td></tr>
<tr><td>3</td><td>500</td><td>800</td></tr>
<tr><td>4</td><td>800</td><td>1100</td></tr>
</tbody>
</table>

<h3>Obrony</h3>
<p><strong>Obrona</strong> (licytacyjna) to kontrakt, w którym spodziewasz się wpadki, bo kara będzie mniejsza niż zapis przeciwników za ich kontrakt. Porównaj liczby:</p>
<table>
<thead><tr><th>Ich dograna</th><th>Wartość</th><th>Możesz stracić (z kontrą), przed partią</th><th>Możesz stracić (z kontrą), po partii</th></tr></thead>
<tbody>
<tr><td>Przed partią</td><td>420</td><td>bez dwóch (300)</td><td>bez jednej (200)</td></tr>
<tr><td>Po partii</td><td>620</td><td>bez trzech (500)</td><td>bez dwóch (500)</td></tr>
</tbody>
</table>
<p>Dlatego obrony są najtańsze przy <strong>korzystnych założeniach</strong>: wy przed partią, oni po partii.</p>
<div class="auction" data-calls="1S 2H 4S" data-dealer="W"></div>
<div class="hand" data-cards="S:5 H:K9743 D:Q862 C:J74" data-label="Korzystne założenia: licytuj 5♥"></div>
<p>Partner wszedł 2♥, a Wschód skoczył do 4♠. Masz pięciokartowe poparcie kierowe, singla pik i niewiele obrony: 4♠ prawie na pewno wyjdzie, dając 620. 5♥ z kontrą zapewne będzie bez dwóch lub bez trzech: 300 lub 500. Licytuj 5♥ od razu, zanim przeciwnicy wymienią więcej informacji.</p>

<h3>Kiedy nie bronić się licytacyjnie</h3>
<ul>
<li><strong>Gdy ich kontrakt może przegrać.</strong> Obrona przeciw kontraktowi, który by upadł, to <em>obrona fantomowa</em>: zamieniasz plus na minus. Jeśli masz lewy obronne, broń się kartami.</li>
<li><strong>Gdy koszt jest za wysoki.</strong> Po partii przeciw przed partią praktycznie nigdy nie ma opłacalnej obrony przeciw dogranej.</li>
<li><strong>Gdy twoja ręka jest już opisana, a partner jest w lepszej pozycji do decyzji</strong>: decyduje gracz z większą wiedzą. Nie zmieniaj decyzji partnera o obronie kartami. Jeśli partner dał pas forsujący, postępuj zgodnie z ustaleniami pary.</li>
<li><strong>Gdy przeciwnicy mogą licytować dalej.</strong> Zostawieni w spokoju mogą wejść na wysokość pięciu i przegrać; obrona natomiast może ich wepchnąć w szlemika, który wychodzi.</li>
</ul>
<div class="tip">„Wysokość pięciu należy do przeciwników”: gdy licytują pięć nad twoją dograną na wysokości czterech, obrona kartami (często z kontrą) jest zwykle właściwa. Licytowanie sześciu jako obrony rzadko się opłaca.</div>
<div class="warn">Decyduj wcześnie. Obrona zalicytowana szybko, zanim przeciwnicy wymienią informacje, jest znacznie skuteczniejsza niż taka, którą licytujesz, gdy już dokładnie wiedzą, gdzie grać.</div>
`,
    keyPoints: [
      'Kontry karne najlepiej działają z lewami atutowymi, po tym jak twoja strona pokazała przewagę siły.',
      'Nie kontruj swobodnie wylicytowanych dogranych na samych wysokich kartach w kolorach bocznych i uważaj, żeby kontrą nie zamienić częściówki w dograną.',
      'Obrona się opłaca, gdy kara jest mniejsza niż wartość ich kontraktu.',
      'Przeciw dogranej po partii (620) przed partią możesz być bez trzech z kontrą (500); przeciw dogranej przed partią (420) bez dwóch (300).',
      'Unikaj obron fantomowych: jeśli masz lewy obronne, broń się kartami.',
    ],
    quiz: [
      {
        q: 'Obie strony są przed partią. Przeciwnicy mogą ugrać 4♠ (420). Ile lew bez z kontrą możesz sobie pozwolić w obronie?',
        options: ['Jedną', 'Dwie', 'Trzy', 'Cztery'],
        answer: 1,
        explain: 'Bez dwóch z kontrą przed partią to 300, mniej niż 420. Bez trzech to 500, więcej niż ich dograna.',
      },
      {
        q: 'Przy korzystnych założeniach przeciwnicy mogą ugrać 4♠ po partii (620). Ile lew bez z kontrą możesz sobie pozwolić?',
        options: ['Dwie', 'Trzy', 'Cztery', 'Pięć'],
        answer: 1,
        explain: 'Bez trzech z kontrą przed partią kosztuje 500, mniej niż 620. Bez czterech kosztuje 800.',
      },
      {
        q: 'Co to jest obrona fantomowa?',
        options: ['Obrona kosztująca dokładnie tyle, ile ich dograna', 'Obrona przeciw kontraktowi, który by upadł', 'Obrona na wysokości sześciu', 'Obrona, której przeciwnicy nie skontrowali'],
        answer: 1,
        explain: 'Jeśli ich kontrakt przegrywał, twoja obrona zamienia plus na minus. Wartości obronne to powód, żeby się nie bronić licytacyjnie.',
      },
      {
        q: 'Przeciwnicy licytują 1♥ – 3♥ – 4♥ bez przeszkód. Masz 12 PC, ale tylko małe kiery. Czy kontrować?',
        options: ['Tak: masz siłę otwarcia', 'Nie: wysokie karty poza atutami rzadko uzasadniają kontrę swobodnie wylicytowanej dograny', 'Tak, żeby poprosić o wist', 'Tylko po partii'],
        answer: 1,
        explain: 'Przeciwnicy wiedzą, że brakuje im wysokich kart. Twoja kontra niewiele zyska, jeśli przegrają bez jednej, dużo kosztuje, jeśli ugrają, i pomaga rozgrywającemu umiejscowić brakujące honory.',
      },
      {
        q: 'Dlaczego kontra niskiej częściówki może być kosztowna?',
        options: ['Nigdy nie jest', 'Bo jeśli kontrakt wyjdzie, zapis za lewy z kontrą może dać dograną: 2♥ z kontrą to 470 lub 670', 'Bo przeciwnicy dostają premię za kontrę', 'Bo musisz wistować w atu'],
        answer: 1,
        explain: 'Z kontrą 2♥ daje 120 za lewy, co liczy się jak dograna. Kontruj częściówkę tylko wtedy, gdy spodziewasz się ją obłożyć.',
      },
    ],
  },

  {
    id: 'leads-against-slams-and-doubles',
    title: 'Wisty przeciw szlemom i kontraktom z kontrą',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Jak wybrać wist przeciw szlemowi, przeciw kontraktowi z kontrą lub obronie licytacyjnej i jak partner może poprosić kontrą o wist.',
    body: `
<h3>Przeciw szlemom w bez atu: nic nie oddawaj</h3>
<p>Gdy przeciwnicy licytują 6BA albo 7BA, mają razem około 33 PC lub więcej, a twoja strona ma bardzo mało. Rzadko zdążysz wyrobić długi kolor, więc twoim zadaniem jest nie oddać rozgrywającemu lewy. Wybierz najbezpieczniejszy wist: najwyższą kartę sekwensu albo kolor bez honoru. Nie wistuj spod króla ani spod damy: przeciw szlemowi to często dwunasta lewa.</p>
<div class="hand" data-cards="S:K1074 H:Q963 D:872 C:J3" data-label="Na wiście przeciw 1BA – 6BA"></div>
<p>Wyjdź ♦8, najwyższą z trzech blotek. Pik albo kier mogłyby dać rozgrywającemu lewę z honorami, których nie widzisz; karo niczego nie oddaje, a twój ♠K i twoja ♥Q mogą jeszcze wziąć lewę, jeśli rozgrywający będzie musiał je odnaleźć.</p>

<h3>Przeciw szlemom w kolor: atakować czy czekać?</h3>
<p>Przeciw sześciu w kolorze zadajesz to samo pytanie co przeciw każdemu kontraktowi kolorowemu (zob. lekcję „Obrona przeciw kontraktom kolorowym”), ale potrzebujesz dwóch lew i masz tylko jeden wist.</p>
<ul>
<li><strong>Atakuj</strong>, gdy licytacja pokazuje długi kolor boczny, który da zrzutki. Wistuj spod króla (albo damy) w kolor nielicytowany, licząc, że partner ma asa albo damę, żeby wyrobić lewę, zanim przyjdą zrzutki.</li>
<li><strong>Graj pasywnie</strong>, gdy przeciwnicy najwyraźniej licytowali na siłę, z rękami zrównoważonymi i bez długiego koloru bocznego. Rozgrywający musi wtedy sam znaleźć dwanaście lew, a bezpieczny wist, często w atu, niczego nie oddaje.</li>
<li><strong>Singiel</strong> warto wyjść, gdy partner może mieć asa: weźmie nim i da ci przebitkę.</li>
</ul>
<div class="hand" data-cards="S:K852 H:74 D:9643 C:Q93" data-label="Na wiście przeciw 6♥; dziadek pokazał długie, mocne trefle"></div>
<p>Wyjdź ♠2. Po ściągnięciu atutów rozgrywający zrzuci przegrywające na trefle dziadka, więc obrona musi wyrobić swoje lewy wcześniej. Pik spod króla może znaleźć u partnera asa albo damę i zbudować lewę na czas. Karo byłoby bezpieczne, ale zbyt wolne.</p>
<h4>Wist asem</h4>
<p>Wyjdź asem bez króla przeciw szlemikowi w kolor, gdy dziadek pokazał długi kolor boczny, więc kolor twojego asa mógłby zniknąć w zrzutkach, albo gdy masz dobre szanse na drugą lewę, np. lewę atutową lub króla siedzącego za kolorem rozgrywającego. W przeciwnym razie zachowaj go: as weźmie swoją lewę także później, a wist nim może wyrobić rozgrywającemu króla i damę. Przeciw 6BA as jest pewną lewą, więc nie ma pośpiechu, żeby go zagrać.</p>
<p>Przeciw szlemowi wyjdź najbezpieczniej, jak możesz, często w atu: rozgrywający potrzebuje wszystkich lew, więc każda oddana lewa jest zabójcza.</p>

<h3>Kontry wistowe</h3>
<p>Gdy przeciwnik robi sztuczną odzywkę, kontra następnego gracza zwykle nie ma nic wspólnego z karą: prosi partnera o wist w ten kolor.</p>
<table>
<thead><tr><th>Partner kontruje</th><th>Znaczenie</th></tr></thead>
<tbody>
<tr><td>Staymana: 1BA – 2♣</td><td>Wyjdź w trefla: partner ma dobry kolor treflowy</td></tr>
<tr><td>Transfer: 1BA – 2♦</td><td>Wyjdź w karo</td></tr>
<tr><td>Cue bid lub odzywkę kontrolną, np. 4♣ w drodze do szlemika w kiery</td><td>Wyjdź w trefla</td></tr>
<tr><td>Odpowiedź na Blackwooda, np. 5♦</td><td>Wyjdź w karo</td></tr>
</tbody>
</table>
<p>Brak kontry też coś mówi: jeśli partner mógł skontrować cue bid 4♦ i tego nie zrobił, prawdopodobnie nie chce wistu w karo.</p>
<div class="auction" data-calls="1NT P 2C X 2H P 4H P P P" data-dealer="S"></div>
<div class="hand" data-cards="S:Q1084 H:75 D:K963 C:842" data-label="Zachód: na wiście przeciw 4♥"></div>
<p>Bez kontry wyszedłbyś może w pika albo w karo, w obu przypadkach spod honoru. Kontra Wschodu na Staymana poprosiła o trefla, więc wyjdź ♣8, najwyższą z trzech blotek. Wschód ma dobry kolor treflowy, a ty nie musisz otwierać pozostałych kolorów.</p>

<h3>Wisty przeciw kontraktom z kontrą</h3>
<table>
<thead><tr><th>Sytuacja</th><th>Wist</th></tr></thead>
<tbody>
<tr><td>Partner kontruje 3BA po tym, jak licytował kolor</td><td>Kolor partnera</td></tr>
<tr><td>Partner kontruje 3BA; ty licytowałeś kolor, a on nie</td><td>Twój kolor</td></tr>
<tr><td>Partner kontruje 3BA; żaden z was nie licytował</td><td>Pierwszy kolor licytowany przez dziadka</td></tr>
<tr><td>Partner kontruje szlemika</td><td>Nietypowy wist (zob. niżej)</td></tr>
<tr><td>Twoja strona skontrowała ich obronę licytacyjną</td><td>Zwykle atu</td></tr>
<tr><td>Partner pasuje na twoją kontrę wywołującą dla kary</td><td>Atu</td></tr>
</tbody>
</table>
<p>Dlaczego atu przeciw obronie licytacyjnej? Broniąca się strona ma mało wysokich kart i liczy na lewy z przebitek; twoja strona ma wysokie karty, które i tak wezmą swoje lewy. Każda runda atutów zabiera przebitki. To popularne uzgodnienia: upewnij się, że twój partner gra tak samo.</p>

<h3>Kontra Lightnera</h3>
<p>Kontra karna na swobodnie wylicytowanego szlemika niewiele daje. 6♠ bez jednej daje z kontrą 50 lub 100 więcej niż bez kontry, ale jeśli zostanie ugrany, kontra kosztuje 230, dużo więcej po rekontrze, i ostrzega rozgrywającego przed złym podziałem. Dlatego według konwencji nazwanej od Theodore’a Lightnera kontra na szlemika dana przez gracza, który <em>nie</em> wistuje, prosi o <strong>nietypowy wist</strong>:</p>
<ul>
<li>nie w atu i nie w kolor nielicytowany, bo w niego wyszedłbyś i tak;</li>
<li>zwykle w pierwszy kolor boczny licytowany przez dziadka, często dlatego, że partner ma w nim renons;</li>
<li>jeśli partner licytował kolor, kontra mówi też: nie wychodź w mój kolor.</li>
</ul>
<div class="auction" data-calls="1S P 2H P 3S P 4NT P 5H P 6S X P P P" data-dealer="S"></div>
<div class="hand" data-cards="S:73 H:84 D:QJ109 C:K8652" data-label="Zachód: na wiście po kontrze Wschodu"></div>
<p>Twój normalny wist to ♦Q. Kontra Wschodu prosi o coś nietypowego: pierwszy kolor licytowany przez dziadka, kiery. Wyjdź ♥8. Wschód ma prawdopodobnie renons kier i przebije, a potem obronie wystarczy jeszcze jedna lewa.</p>
<div class="warn">Nie dawaj kontry wistowej tylko dlatego, że masz w kolorze wysokie karty. Kontruj, gdy naprawdę chcesz tego wistu, i pamiętaj, że przeciwnicy też mogą wykorzystać kontrę: mogą zrekontrować albo po prostu ominąć ten kontrakt.</div>
`,
    keyPoints: [
      'Przeciw 6BA i 7BA wistuj bezpiecznie: nie spod honorów.',
      'Przeciw szlemikowi w kolor atakuj (często spod króla), gdy dziadek ma długi kolor na zrzutki; w przeciwnym razie graj pasywnie.',
      'Wyjdź asem przeciw szlemikowi, gdy mógłby zniknąć w zrzutkach albo liczysz na drugą lewę; w przeciwnym razie go zachowaj.',
      'Kontra sztucznej odzywki, np. Staymana, transferu lub cue bidu, prosi o wist w ten kolor.',
      'Kontra Lightnera na szlemika prosi o nietypowy wist, zwykle w pierwszy kolor boczny dziadka; przeciw skontrowanej obronie licytacyjnej wyjdź w atu.',
    ],
    quiz: [
      {
        q: 'Jesteś na wiście przeciw 1BA – 6BA z ♠K 10 7 4 ♥Q 9 6 3 ♦8 7 2 ♣J 3. Co wistujesz?',
        options: ['♠4', '♥3', '♦8', '♣J'],
        answer: 2,
        explain: 'Przeciw szlemikowi w bez atu wistuj bezpiecznie. ♦8 niczego nie oddaje; wist spod króla, damy albo waleta może dać rozgrywającemu dwunastą lewę.',
      },
      {
        q: 'Przeciwnicy licytują 6♥ po tym, jak dziadek pokazał długie, mocne trefle. Jaki wist jest zwykle właściwy?',
        options: ['Pasywny: atu', 'Atakujący: spod króla w kolor nielicytowany, żeby wyrobić lewę, zanim rozgrywający zdąży zrzucić', 'Trefl, żeby odciąć dziadka', 'Zawsze as'],
        answer: 1,
        explain: 'Po ściągnięciu atutów przegrywające rozgrywającego odejdą na trefle dziadka. Obrona musi zbudować swoje lewy wcześniej.',
      },
      {
        q: 'Przeciwnicy licytują 1BA – 2♣ (Stayman), a partner kontruje. O co prosi ta kontra?',
        options: ['O karę w 2♣', 'O wist w trefla', 'O odzywkę w kolor starszy', 'Pokazuje silną rękę zrównoważoną'],
        answer: 1,
        explain: '2♣ jest sztuczne, więc kontra jest wistowa: partner ma dobry kolor treflowy i chce, żebyś w niego wyszedł.',
      },
      {
        q: 'Partner daje kontrę Lightnera na 6♠. Dziadek licytował kiery, a ty masz dwa kiery i ♦Q J 10 9. Co wistujesz?',
        options: ['♦Q', 'Kiera', 'Atu', 'Trefla'],
        answer: 1,
        explain: 'Kontra prosi o nietypowy wist, zwykle w pierwszy kolor boczny dziadka. Partner ma prawdopodobnie renons kier.',
      },
      {
        q: 'Skontrowałeś obronę licytacyjną przeciwników 5♦. Jaki wist jest zwykle najlepszy?',
        options: ['Atu', 'Twój najdłuższy kolor', 'As, żeby zobaczyć dziadka', 'Singiel'],
        answer: 0,
        explain: 'Broniąca się strona ma mało wysokich kart i bierze lewy przebitkami. Wisty w atu zabierają te przebitki, a twoje wysokie karty i tak wezmą swoje lewy.',
      },
    ],
  },

  {
    id: 'slam-controls-and-cue-bids',
    title: 'Kontrole i cue bidy: kiedy nie używać Blackwooda',
    topic: 'Slam bidding',
    level: 'Advanced',
    summary: 'Dlaczego do szlemika nie wystarczy liczenie asów i jak cue bidy kontrolne pozwalają sprawdzić, czy każdy kolor jest pokryty.',
    body: `
<h3>Kontrole</h3>
<p>Do ugrania szlemika potrzebujesz dość lew, a do tego musisz nie pozwolić przeciwnikom wziąć dwóch lew, zanim zaczniesz grać. Kolor jest <strong>kontrolowany</strong>, jeśli przeciwnicy nie mogą odegrać w nim dwóch szybkich lew:</p>
<ul>
<li><strong>Kontrola pierwszej rundy:</strong> as albo renons (w kontrakcie kolorowym).</li>
<li><strong>Kontrola drugiej rundy:</strong> król albo singiel.</li>
</ul>
<p>Na szlemika potrzebujesz co najmniej kontroli drugiej rundy w każdym kolorze bocznym i najwyżej jednej przegrywającej w pierwszej rundzie łącznie. Na szlema potrzebujesz kontroli pierwszej rundy wszędzie i zero przegrywających.</p>
<p>Niektórzy gracze liczą kontrole jako A = 2 i K = 1 (w talii jest ich 12). Ręce bogate w asy i króle dają szlemiki, których nie da 33 punktów złożonych z dam i waletów.</p>

<h3>Gdzie Blackwood zawodzi</h3>
<div class="deal" data-n="S:K5 H:AKJ84 D:83 C:AJ104" data-s="S:AQ63 H:Q1052 D:72 C:KQ5" data-caption="Północ otwiera 1♥, a Południe podnosi przez Jacoby 2BA."></div>
<p>Północ ma 16 PC, Południe 13, a fit kierowy jest dziewięciokartowy: próba szlemowa jest rozsądna. Jeśli Południe użyje Blackwooda, Północ pokaże dwa asy, Południe ma trzeciego i licytuje 6♥. Obrona ściąga ♦A i ♦K. Blackwood powiedział, że są trzy asy, ale nie mógł powiedzieć Południu, że żadna ręka nie kontroluje kar.</p>
<p>Nie używaj Blackwooda, gdy:</p>
<ul>
<li>masz dwie (lub więcej) blotki w kolorze, którego nikt nie licytował, i nie wiesz, czy partner go kontroluje;</li>
<li>masz renons: as partnera w twoim renonsie jest zmarnowany, a Blackwood go liczy;</li>
<li>odpowiedź może wynieść cię za wysoko, np. przy treflach w atu, gdy po odpowiedzi 5♥ nie da się zatrzymać w 5♣.</li>
</ul>

<h3>Cue bidy (cue bidy kontrolne)</h3>
<p>Gdy w licytacji forsującej uzgodniono kolor atutowy, odzywka w nowy kolor na wysokości czterech nie jest własnym kolorem: pokazuje <strong>kontrolę</strong> w tym kolorze i zainteresowanie szlemem. Partner odpowiada, pokazując z kolei swoją najtańszą kontrolę, albo zamyka licytację w kolorze atutowym. W popularnym współczesnym stylu cue bid pokazuje kontrolę pierwszej lub drugiej rundy (as, król, renons lub singiel), a licytuje się najpierw najtańszą, więc <strong>pominięcie koloru zaprzecza kontroli w nim</strong>.</p>
<div class="auction" data-calls="1H P 2NT P 3NT P 4C P 4H P P P" data-dealer="N"></div>
<p>Po Jacoby 2BA odzywka 3BA Północy pokazuje średnią rękę (15-17) bez krótkości — standardowy rebid w tej konwencji. Południe licytuje 4♣: kontrola treflowa i zainteresowanie szlemem. Północ nie ma kontroli karowej, więc zamiast pokazywać kontrolę pikową, zamyka licytację na 4♥, omijając 4♦: to zaprzecza kontroli w karach. Południe też nie ma kontroli karowej, więc pasuje. Obie ręce zrobiły swoje, a para bezpiecznie zatrzymuje się w dogranej.</p>
<p>Gdyby Północ miała ♦K zamiast ♠K, na 4♣ dałaby cue bid 4♦. Wtedy każdy kolor byłby kontrolowany, Południe mogłoby iść w stronę szlemika, a na koniec Blackwood mógłby bezpiecznie sprawdzić asy.</p>
<p>Boty licytują w ten sposób po uzgodnieniu koloru starszego w licytacji forsującej do dograny, po podniesieniu Jacoby 2BA albo po splinterze. Używają też cue bidu kontrolnego jako próby szlemowej w licytacji naturalnej: gdy partner właśnie zalicytował kolor starszy, który mogą podnieść do dograny, a szlemik jest realny, jeśli partner ma trochę więcej, niż pokazał, nowy kolor na wysokości czterech (niezalicytowany przez ich stronę) uzgadnia starszy partnera i pokazuje kontrolę. Ich cue bidy pokazują kontrole pierwszej lub drugiej rundy, najpierw najtańsze, poniżej dograny w uzgodnionym starszym.</p>

<h3>Łączenie narzędzi</h3>
<ol>
<li>Uzgodnij atut w licytacji forsującej.</li>
<li>Cue bidami upewnij się, że każdy kolor boczny jest kontrolowany.</li>
<li>Gdy wszystkie kolory są pokryte, użyj Blackwooda (boty grają Roman Key Card Blackwood), żeby upewnić się, że nie brakuje dwóch asów albo asa i króla atutowego.</li>
<li>Zalicytuj szlemika albo zamknij licytację.</li>
</ol>
<div class="tip">Zanim zalicytujesz 4BA, zapytaj: „Jeśli partner pokaże właściwą liczbę asów, czy będę wiedzieć, co licytować?” Jeśli nie, daj raczej cue bid.</div>
<div class="warn">Upewnij się, że twoja para ma uzgodnione cue bidy, zanim ich spróbujesz. Cue bid odczytany przez partnera jako naturalny kolor może skończyć się bardzo dziwnym kontraktem.</div>
`,
    keyPoints: [
      'Szlemik wymaga kontroli w każdym kolorze bocznym: asa lub renonsu (pierwsza runda) albo króla lub singla (druga runda).',
      'Blackwood liczy asy, ale nie mówi, które to asy ani czy w kolorze bocznym są dwie szybkie przegrywające.',
      'Nie używaj Blackwooda z renonsem, z dwiema blotkami w niezalicytowanym kolorze ani wtedy, gdy odpowiedź może wynieść cię za wysoko.',
      'Cue bidy pokazują kontrole, najpierw najtańsze; pominięcie koloru zaprzecza kontroli w nim.',
      'Najpierw cue bidami sprawdź każdy kolor, potem Blackwoodem sprawdź asy.',
    ],
    quiz: [
      {
        q: 'Które posiadanie daje kontrolę drugiej rundy w kontrakcie kolorowym?',
        options: ['As lub renons', 'Król lub singiel', 'Dama lub dubel', 'Dowolne dwa honory'],
        answer: 1,
        explain: 'Z królem lub singlem przeciwnicy mogą wziąć w kolorze najwyżej jedną szybką lewę. As lub renons to kontrola pierwszej rundy.',
      },
      {
        q: 'Dlaczego w powyższym rozdaniu Blackwood prowadzi do złego szlemika?',
        options: ['Bo brakuje dwóch asów', 'Bo żadna ręka nie kontroluje kar, czego Blackwood nie może ujawnić', 'Bo kiery źle się dzielą', 'Bo Północ ma za mało punktów'],
        answer: 1,
        explain: 'Brakuje tylko jednego asa, ale to ♦A, a do tego brakuje ♦K. Przeciwnicy od razu odgrywają dwie lewy karowe.',
      },
      {
        q: 'W licytacji forsującej uzgodniono kiery. Partner daje cue bid 4♣, a ty licytujesz 4♥, omijając 4♦. Co to mówi partnerowi?',
        options: ['Mam kontrolę karową', 'Nie mam kontroli karowej', 'Mam ♠A', 'Chcę grać w kara'],
        answer: 1,
        explain: 'Cue bidy licytuje się od najtańszego. Omijając 4♦, zaprzeczasz kontroli karowej, więc partner wie, że musi się zatrzymać, chyba że sam kontroluje kara.',
      },
      {
        q: 'Masz renons trefl i chcesz zbadać szlemika w pikach. Dlaczego Blackwood to zły wybór?',
        options: ['Bo renonsy liczą się jak asy', 'Bo ♣A partnera byłby zmarnowany, a Blackwood by go policzył', 'Bo 4BA byłoby ilościowe', 'Bo potrzebujesz 37 punktów'],
        answer: 1,
        explain: 'Blackwood mówi, ile asów ma partner, a nie które. As naprzeciw twojego renonsu nic nie wnosi.',
      },
      {
        q: 'Jaka jest rozsądna kolejność narzędzi przy szlemiku w kolor?',
        options: ['Najpierw Blackwood, potem cue bidy', 'Uzgodnić atut, cue bidami pokazać kontrole, potem Blackwood', 'Licytować szlemika od razu z 33 punktami', 'Gerber, potem Blackwood'],
        answer: 1,
        explain: 'Cue bidy pokazują, czy każdy kolor jest pokryty; Blackwood upewnia potem, że parze nie brakuje dwóch asów.',
      },
    ],
  },

  {
    id: 'squeezes-and-endplays',
    title: 'Wprowadzenie do przymusów i wpustek',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Dwie zaawansowane techniki, które tworzą lewę z niczego, zmuszając obrońcę do zrzucenia zatrzymania albo do wyjścia w twoją siłę.',
    body: `
<h3>Gdy impasy i podziały nie wystarczają</h3>
<p>Niektórych lew nie da się wziąć siłą ani impasem. Bierze się je dlatego, że obrońca jest <em>zmuszony</em> je oddać: albo musi zrzucić potrzebną kartę (<strong>przymus</strong>), albo musi wyjść, gdy każde wyjście kosztuje lewę (<strong>wpustka</strong>). Oba zwykle zdarzają się pod koniec rozdania i oba wymagają starannego liczenia.</p>

<h3>Przymus prosty</h3>
<p>Przymus działa, gdy tylko jeden obrońca pilnuje dwóch kolorów. Gdy zagrywasz ostatnią lewę w trzecim kolorze, ten obrońca musi oddać jedno z zatrzymań, a porzucony kolor daje ci dodatkową lewę.</p>
<div class="deal" data-n="S:- H:AJ D:- C:3" data-w="S:- H:KQ D:Q C:-" data-e="S:- H:- D:98 C:7" data-s="S:A H:2 D:J C:-" data-caption="Bez atu. Wychodzi Południe; Południe potrzebuje wszystkich trzech lew."></div>
<p>Zachód pilnuje kierów (K Q przeciw A J dziadka) i kar (Q przeciw twojemu waletowi). Południe gra ♠A, czyli <strong>kartę przymusową</strong>, a Zachód musi zrzucić przed dziadkiem:</p>
<ul>
<li>Jeśli Zachód zrzuci ♦Q, twój ♦J staje się lewą.</li>
<li>Jeśli Zachód zrzuci kiera, dziadek zrzuca ♣3; grasz ♥2 do asa, spada ostatni honor Zachodu, a ♥J dziadka bierze ostatnią lewę.</li>
</ul>
<p>Bez przymusu byłyby tylko dwie lewy.</p>
<h4>Czego potrzebuje przymus</h4>
<ul>
<li><strong>Groźby:</strong> karty, które staną się lewami, jeśli obrońca odda zatrzymanie (tutaj ♥J dziadka i twój ♦J).</li>
<li><strong>Jeden obrońca zajęty w obu kolorach.</strong> Jeśli partner może pilnować jednego z kolorów, przymusu nie ma.</li>
<li><strong>Dojścia</strong>, żeby po zrzutce dotrzeć do gróźb (tutaj ♥A, do którego masz kiera w ręce).</li>
<li><strong>Właściwy stan lew:</strong> w chwili zagrania karty przymusowej musisz móc wziąć wszystkie pozostałe lewy oprócz jednej. Oddanie <em>wcześniej</em> lew, które i tak trzeba oddać, żeby tak było, to <strong>korekta liczby lew</strong>. Typowy znak: widzisz, że przymus jest możliwy, ale masz dwie przegrywające; oddaj wcześnie jedną lewę, żeby została tylko jedna.</li>
</ul>
<div class="tip">Nie zawsze musisz zobaczyć przymus z góry. Odgrywanie długiego koloru do końca z zachowaniem gróźb daje obrońcom wiele okazji do błędnej zrzutki, a czasem po prostu nie mogą jej uniknąć.</div>

<h3>Wpustka</h3>
<p>Wpustka wpuszcza obrońcę do ręki w momencie, gdy każda karta, którą zagra, daje ci lewę: musi zagrać w twoje widełki albo dać ci przebitkę ze zrzutką.</p>
<div class="deal" data-n="S:- H:3 D:- C:AQ" data-w="S:- H:- D:J109 C:-" data-e="S:- H:A D:- C:K8" data-s="S:- H:6 D:- C:42" data-caption="Bez atu. Wychodzi Południe; Wschód ma ♣K."></div>
<p>Jeśli zagrasz trefla i zaimpasujesz damą, Wschód weźmie królem i ściągnie ♥A: weźmiesz jedną lewę. Zamiast tego zagraj ♥6. Wschód bierze asem i zostają mu tylko trefle, więc musi wyjść spod króla w A Q dziadka, a ty bierzesz dwie lewy.</p>
<h4>Eliminacja i wpustka w kontrakcie kolorowym</h4>
<p>W kontrakcie atutowym ta sama idea nazywa się eliminacją. Ściągnij atuty, ale zostaw co najmniej jeden w każdej ręce. <strong>Wyeliminuj</strong> kolory boczne, w których obrońca mógłby bezpiecznie wyjść, ściągając je albo przebijając. Potem wpuść obrońcę kolorem, który ci został. Obrońca musi wtedy albo zagrać w twoje widełki, albo w kolor, w którym masz renons w obu rękach, co pozwala przebić w jednej ręce i zrzucić przegrywającą z drugiej.</p>
<p>Eliminacja często zamienia impas 50% w pewność: z A J x naprzeciw K 10 x bez damy nie musisz zgadywać, jeśli to obrońca musi otworzyć dla ciebie ten kolor.</p>
<div class="warn">Wpustka zawodzi, jeśli obrońca ma jeszcze bezpieczną kartę do zagrania. Przed wpuszczeniem sprawdź, czy każdy kolor, w którym obrońca mógłby wyjść, został wyeliminowany z jego ręki albo z obu twoich.</div>
`,
    keyPoints: [
      'Przymus zmusza obrońcę, który pilnuje dwóch kolorów, do zrzucenia jednego z zatrzymań.',
      'Przymus wymaga gróźb, jednego zajętego obrońcy, dojść i skorygowanej liczby lew (wszystkie pozostałe lewy oprócz jednej).',
      'Wpustka wpuszcza obrońcę do ręki, gdy każde wyjście kosztuje jego stronę lewę.',
      'Eliminacja i wpustka: ściągnij atuty (zostawiając je w obu rękach), wyeliminuj kolory boczne, potem wpuść obrońcę.',
      'Odgrywanie długiego koloru z zachowaniem gróźb daje obrońcom okazję do błędu.',
    ],
    quiz: [
      {
        q: 'Jaki jest podstawowy warunek przymusu prostego?',
        options: ['Obaj obrońcy mają renons w kolorze', 'Jeden obrońca sam pilnuje dwóch kolorów', 'Masz wszystkie asy', 'Atuty dzielą się 3-2'],
        answer: 1,
        explain: 'Jeśli jeden obrońca musi trzymać zatrzymania w dwóch kolorach, nie utrzyma obu, gdy będzie musiał zrzucać. Jeśli jego partner może pilnować jednego z nich, przymusu nie ma.',
      },
      {
        q: 'Co oznacza „korekta liczby lew”?',
        options: ['Liczenie punktów przeciwników', 'Wczesne oddanie lew, które trzeba oddać, tak by w chwili zagrania karty przymusowej móc wziąć wszystkie pozostałe lewy oprócz jednej', 'Ściągnięcie ostatniego atutu', 'Liczenie własnych lew dwa razy'],
        answer: 1,
        explain: 'Przymus wymaga, żeby obrońcy zabrakło wolnych kart. Jeśli masz jeszcze dwie przegrywające, obrońca ma zbędną kartę do zrzucenia; wcześniejsze oddanie lewy mu ją odbiera.',
      },
      {
        q: 'Co się stanie w powyższej końcówce przymusowej, jeśli Zachód zrzuci ♦Q?',
        options: ['♦J Południa staje się lewą', '♥J dziadka staje się lewą', 'Wschód bierze lewę karową', 'Nic się nie zmienia'],
        answer: 0,
        explain: 'Zachód był jedynym obrońcą pilnującym przeciw ♦J. Gdy dama odejdzie, twój walet jest najwyższym karem.',
      },
      {
        q: 'Dlaczego w powyższej końcówce z wpustką Wschód musi oddać ci lewę?',
        options: ['Wschód musi dołożyć do kierów', 'Po wzięciu ♥A Wschód ma już tylko trefle i musi wyjść spod króla w A Q', 'Wschód jest w przymusie', 'Wschód musi przebić'],
        answer: 1,
        explain: 'Wpuszczony asem kier Wschód nie ma bezpiecznego wyjścia. Każdy trefl Wschodu pozwala damie dziadka wziąć lewę, a potem pod asa spada król.',
      },
      {
        q: 'Co musisz zachować przed wpuszczeniem obrońcy w eliminacji z wpustką w kontrakcie kolorowym?',
        options: ['Atut w każdej z twoich rąk', 'Wszystkie asy', 'Dojście do partnera obrońcy', 'Przegrywający atut'],
        answer: 0,
        explain: 'Z atutami w obu rękach obrońca, który zagra kolor, w którym masz renons, daje ci przebitkę ze zrzutką. Zostają mu tylko wyjścia w twoje widełki.',
      },
    ],
  },
];
