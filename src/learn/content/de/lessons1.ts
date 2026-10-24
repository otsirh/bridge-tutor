// Lessons, part 1.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_1: Lesson[] = [
  {
    id: 'how-bridge-works',
    title: 'So funktioniert Bridge',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Das Austeilen, die Reizung, der Kontrakt und das Spiel der Karten – von der ersten Ansage bis zum letzten Stich.',
    body: `
<h3>Vier Spieler, zwei Partnerschaften</h3>
<p>Bridge ist ein Partnerschaftsspiel. Nord und Süd spielen gemeinsam gegen Ost und West, und die Partner sitzen einander gegenüber. Alle 52 Karten werden verteilt, jeder Spieler erhält also 13 Karten. Innerhalb einer Farbe ist das Ass die höchste Karte, es folgen K, Q, J, 10, 9 und so weiter bis hinunter zur 2. Ziel des Spiels ist es, <strong>Stiche</strong> zu gewinnen: Ein Stich besteht aus je einer Karte jedes Spielers, im Uhrzeigersinn gespielt.</p>

<h3>Teil 1: die Reizung</h3>
<p>Bevor die erste Karte gespielt wird, wird gereizt. Der Teiler gibt die erste Ansage ab, danach geht die Reizung im Uhrzeigersinn weiter. Wer an der Reihe ist, darf <strong>passen</strong>, ein <strong>Gebot</strong> abgeben, ein Gebot der Gegner <strong>kontrieren</strong> oder ein Kontra der Gegner <strong>rekontrieren</strong>.</p>
<p>Ein Gebot besteht aus einer Stufe (1 bis 7) und einer Denomination (einer Trumpffarbe oder Sans Atout). Die Stufe gibt an, wie viele Stiche Sie <em>über sechs hinaus</em> versprechen: 1♠ verspricht 7 Stiche mit Pik als Trumpf, 3SA verspricht 9 Stiche ohne Trumpffarbe. Die ersten sechs Stiche nennt man das <strong>Buch</strong>.</p>
<p>Die Denominationen sind von unten nach oben geordnet: ♣, ♦, ♥, ♠, SA. Jedes Gebot muss höher sein als das vorherige: entweder auf einer höheren Stufe oder auf derselben Stufe in einer höherrangigen Denomination. Nach 1♥ dürfen Sie 1♠ oder 1SA bieten; um Treff zu nennen, müssen Sie mindestens 2♣ bieten.</p>
<p>Die Reizung endet, wenn nach einem Gebot, Kontra oder Rekontra dreimal hintereinander gepasst wird. Das letzte Gebot ist der <strong>Kontrakt</strong>. Passen gleich zu Beginn alle vier Spieler, ist das Spiel eingepasst, und die Karten werden nicht gespielt.</p>
<div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
<p>Nord eröffnet 1♥, Süd hebt auf 2♥, und Nord springt auf 4♥. Danach passen alle, der Kontrakt lautet also 4♥: Nord-Süd müssen mit Coeur als Trumpf mindestens 10 der 13 Stiche gewinnen.</p>

<h3>Die Stufen eines Kontrakts</h3>
<table>
<thead><tr><th>Stufe</th><th>Benötigte Stiche</th><th>Anmerkung</th></tr></thead>
<tbody>
<tr><td>1</td><td>7</td><td>Teilkontrakt</td></tr>
<tr><td>2</td><td>8</td><td>Teilkontrakt</td></tr>
<tr><td>3</td><td>9</td><td>3SA ist ein Vollspiel</td></tr>
<tr><td>4</td><td>10</td><td>4♥ und 4♠ sind Vollspiele</td></tr>
<tr><td>5</td><td>11</td><td>5♣ und 5♦ sind Vollspiele</td></tr>
<tr><td>6</td><td>12</td><td>Kleinschlemm</td></tr>
<tr><td>7</td><td>13</td><td>Großschlemm</td></tr>
</tbody>
</table>
<p>Vollspiele und Schlemmkontrakte bringen hohe Prämien. Deshalb dreht sich so viel beim Reizen um eine einzige Frage: Hat unsere Seite genug Stärke für ein Vollspiel?</p>

<h3>Wer spielt den Kontrakt?</h3>
<p><strong>Alleinspieler</strong> wird der Spieler der Seite, die die Reizung gewonnen hat, der die Denomination des Endkontrakts <em>als Erster</em> genannt hat. In der Reizung oben hat Nord zuerst Coeur geboten; Nord ist also Alleinspieler, obwohl auch Süd Coeur geboten hat. Der Partner des Alleinspielers wird zum <strong>Dummy</strong>.</p>

<h3>Teil 2: das Spiel</h3>
<ol>
<li>Der Spieler links vom Alleinspieler macht das <strong>Ausspiel</strong>. Ist Nord Alleinspieler, spielt Ost aus.</li>
<li>Danach legt der Dummy alle 13 Karten offen auf den Tisch, nach Farben sortiert. Der Alleinspieler spielt die Karten beider Hände; der Dummy nimmt am weiteren Spiel nicht teil.</li>
<li>Gespielt wird im Uhrzeigersinn. Jeder Spieler muss <strong>bedienen</strong> (eine Karte der ausgespielten Farbe zugeben), wenn er kann.</li>
<li>Wer keine Karte der ausgespielten Farbe hat (eine <strong>Chicane</strong>), darf einen Trumpf spielen – das nennt man <strong>schnappen</strong> – oder eine beliebige andere Karte zugeben; das ist ein <strong>Abwurf</strong>.</li>
<li>Den Stich gewinnt der höchste Trumpf oder, wenn kein Trumpf gespielt wurde, die höchste Karte der ausgespielten Farbe. Wer den Stich gewinnt, spielt zum nächsten Stich aus.</li>
</ol>
<p>Beispiel: Coeur ist Trumpf, und Ost spielt den ♠K aus. Süd gibt die ♠4 zu, West die ♠9, und Nord, der kein Pik hat, schnappt mit der ♥2. Nord gewinnt den Stich, denn jeder Trumpf schlägt jede Karte einer anderen Farbe. In einem SA-Kontrakt gibt es keinen Trumpf, dort gewinnt also immer die höchste Karte der ausgespielten Farbe.</p>
<div class="tip">Eine abgeworfene Karte kann nie einen Stich gewinnen. Gewinnen kann nur eine Karte der ausgespielten Farbe oder ein Trumpf.</div>

<h3>Erfüllt oder gefallen</h3>
<p>Wenn alle 13 Stiche gespielt sind, erhält die Seite des Alleinspielers Punkte, falls sie mindestens so viele Stiche gewonnen hat, wie sie angesagt hat; zusätzliche Stiche sind <strong>Überstiche</strong>. Bleibt der Alleinspieler darunter, bekommen die Gegenspieler für jeden <strong>Unterstich</strong> Strafpunkte gutgeschrieben. Ein Kontra erhöht sowohl die Belohnung für den erfüllten Kontrakt als auch die Strafe für das Scheitern.</p>
<div class="warn">Wer nicht bedient, obwohl er könnte, begeht einen <strong>Revoke</strong>; das wird bestraft, indem Stiche an die andere Seite übertragen werden. Bevor Sie eine Karte einer anderen Farbe spielen, prüfen Sie noch einmal, ob Sie wirklich keine Karte der ausgespielten Farbe haben.</div>
`,
    keyPoints: [
      'Vier Spieler in zwei Partnerschaften; jeder Spieler hat 13 Karten.',
      'Ein Gebot auf Stufe N verspricht 6 + N Stiche; die Rangfolge der Denominationen ist ♣, ♦, ♥, ♠, SA.',
      'Die Reizung endet nach drei Passe in Folge; das letzte Gebot ist der Kontrakt.',
      'Alleinspieler ist, wer auf der siegreichen Seite die Denomination des Endkontrakts als Erster genannt hat; der Spieler links von ihm spielt aus.',
      'Sie müssen bedienen, wenn Sie können; sonst dürfen Sie schnappen oder abwerfen.',
      'Vollspiele: 3SA, 4♥, 4♠, 5♣, 5♦. Schlemm: jeder Kontrakt auf der Sechser- oder Siebenerstufe.',
    ],
    quiz: [
      {
        q: 'Der Endkontrakt lautet 3SA. Wie viele Stiche braucht der Alleinspieler?',
        options: ['3', '6', '9', '10'],
        answer: 2,
        explain: 'Zählen Sie sechs (das Buch) zur Stufe hinzu: 3 + 6 = 9 Stiche.',
      },
      {
        q: 'Nord eröffnet 1♠, Ost passt, Süd bietet 2♠, und alle passen. Wer ist Alleinspieler, und wer spielt aus?',
        options: ['Süd ist Alleinspieler, West spielt aus', 'Nord ist Alleinspieler, Ost spielt aus', 'Nord ist Alleinspieler, West spielt aus', 'Süd ist Alleinspieler, Ost spielt aus'],
        answer: 1,
        explain: 'Nord hat auf seiner Seite als Erster Pik genannt, also ist Nord Alleinspieler. Ausgespielt wird vom Spieler links vom Alleinspieler, also von Ost.',
      },
      {
        q: 'Pik ist Trumpf. Coeur wird ausgespielt, und Sie haben kein Coeur. Was dürfen Sie tun?',
        options: ['Sie müssen mit einem Pik schnappen', 'Sie dürfen mit einem Pik schnappen oder eine beliebige Karte abwerfen', 'Sie müssen ein Treff oder ein Karo abwerfen', 'Sie müssen Ihre niedrigste Karte spielen'],
        answer: 1,
        explain: 'Pflicht ist nur das Bedienen. Haben Sie keine Karte der ausgespielten Farbe, dürfen Sie frei wählen, ob Sie schnappen oder abwerfen; Schnappen ist oft richtig, aber nie vorgeschrieben.',
      },
      {
        q: 'Ihr rechter Gegner hat 1♥ eröffnet. Welches dieser Gebote ist erlaubt?',
        options: ['1♦', '1♣', '1SA', '1♥'],
        answer: 2,
        explain: 'Ein Gebot muss das vorherige überbieten. Auf der Einerstufe stehen nur Pik und Sans Atout über Coeur, erlaubt sind also 1♠ und 1SA; Treff und Karo müssten auf der Zweierstufe geboten werden.',
      },
      {
        q: 'Welcher dieser Kontrakte ist ein Vollspiel?',
        options: ['3♥', '4♦', '3SA', '2SA'],
        answer: 2,
        explain: 'Ein Vollspiel braucht 9 Stiche in SA, 10 in einer Oberfarbe und 11 in einer Unterfarbe. 3SA erfüllt das; 3♥ und 4♦ liegen eine Stufe darunter, und 2SA ist einen Stich vom Vollspiel entfernt.',
      },
    ],
  },

  {
    id: 'hand-evaluation',
    title: 'Die Bewertung der Hand',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Wie Sie Figurenpunkte, Länge und Kürze zählen und wie Zwanzigerregel, Fünfzehnerregel, Verliererzählung und schnelle Stiche die Zählung verfeinern.',
    body: `
<h3>Figurenpunkte</h3>
<p>Das übliche Maß für die Stärke einer Hand sind die <strong>Figurenpunkte</strong> (FP): Ass 4, König 3, Dame 2, Bube 1. Im ganzen Kartenspiel gibt es 40 FP, eine durchschnittliche Hand hat also 10.</p>
<div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="17 FP"></div>
<p>♠AK = 7, ♥KJ = 4, ♦Q = 2, ♣A = 4: 17 FP. Die Hand ist ausgeglichen, sie wird also mit 1SA (15–17) eröffnet.</p>
<p>Nützliche Richtwerte für die gemeinsamen Punkte der Partnerschaft: etwa 25 für ein Vollspiel in 3SA oder in einer Oberfarbe, 29 für ein Vollspiel in einer Unterfarbe, 33 für einen Kleinschlemm und 37 für einen Großschlemm. Punkte sind ein Anhaltspunkt, keine Garantie: Verteilung, Fit und die Lage der Figuren spielen ebenfalls eine Rolle.</p>

<h3>Längenpunkte: die eigenen Farben bewerten</h3>
<p>Lange Farben bringen zusätzliche Stiche, sobald die hohen Karten gefallen sind. Wenn Sie Ihre Hand für die Eröffnung oder das Wiedergebot bewerten, zählen Sie für jede Karte über vier in einer Farbe 1 Punkt dazu: Eine Fünferlänge bringt 1 Punkt, eine Sechserlänge 2.</p>

<h3>Unterstützungspunkte: einen Fit bewerten</h3>
<p>Sobald Sie wissen, dass Sie einen Fit in Partners Farbe haben, gewinnen kurze Farben an Wert, denn mit Ihren Trümpfen können Sie die Gewinner der Gegner schnappen. Wenn Sie Partners Farbe heben, zählen Sie statt der Länge die Kürze:</p>
<table>
<thead><tr><th>Kürze</th><th>Mit 4+ Trümpfen</th><th>Mit 3 Trümpfen</th></tr></thead>
<tbody>
<tr><td>Chicane</td><td>5</td><td>3</td></tr>
<tr><td>Single</td><td>3</td><td>2</td></tr>
<tr><td>Double</td><td>1</td><td>1</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:5 H:K1083 D:A9742 C:J62" data-label="Partner hat 1♥ eröffnet"></div>
<p>Nur 8 FP, aber mit vier Trümpfen und einem Single zählen Sie 3 dazu, macht 11 Unterstützungspunkte. Das ist eine Limit-Hebung auf 3♥ (10–12).</p>
<div class="warn">Kürze ist nur etwas wert, wenn Sie einen Fit haben. Ohne Fit ist ein Single in Partners Farbe ein Minus, kein Plus: Es warnt vor einem Misfit.</div>

<h3>Die Zählung korrigieren</h3>
<ul>
<li>Figuren in langen Farben zählen mehr als Figuren in kurzen: ♠KQJ54 wird Stiche machen, ♠KQ vielleicht nicht.</li>
<li>Ungeschützte Figuren in kurzen Farben sind weniger wert: ein blanker König, eine blanke Dame oder ein blanker Bube, ebenso Dame oder Bube zweit. Ziehen Sie einen Punkt ab.</li>
<li>4-3-3-3 ist die ungünstigste Verteilung; erwägen Sie, einen Punkt abzuziehen.</li>
<li>Asse und Zehnen werden von der Skala 4-3-2-1 leicht unterbewertet, Damen und Buben leicht überbewertet.</li>
</ul>

<h3>Zwanzigerregel und Fünfzehnerregel</h3>
<p>An erster, zweiter oder dritter Position eröffnen Sie eine Hand mit 10 oder 11 FP, wenn die FP plus die Kartenzahl Ihrer beiden längsten Farben 20 oder mehr ergeben.</p>
<div class="hand" data-cards="S:KQ1065 H:AJ874 D:5 C:32" data-label="Zwanzigerregel: 1♠ eröffnen"></div>
<p>10 FP + 5 + 5 = 20, also eröffnen Sie, und mit zwei Fünferlängen die höherrangige Farbe: 1♠. Zum Vergleich ♠QJ5 ♥K92 ♦QJ84 ♣Q73: 11 FP + 4 + 3 = 18, also passen Sie. Die verstreuten Damen und Buben und die flache Verteilung machen daraus eine schlechte Eröffnung.</p>
<p>An vierter Position, nach drei Passe, gilt die Fünfzehnerregel: Eröffnen Sie, wenn die FP plus die Anzahl Ihrer Pikkarten 15 oder mehr ergeben. Passen Sie, wird das Spiel eingepasst; eröffnen wollen Sie also nur, wenn Ihre Seite den Kampf um den Teilkontrakt wahrscheinlich gewinnt – und diesen Kampf entscheidet meistens die Pikfarbe.</p>

<h3>Verliererzählung</h3>
<p>Ist ein Fit von 8+ Karten gefunden, liefert die Verliererzählung (Losing Trick Count, LTC) eine zweite Meinung, die auf der Verteilung beruht. Betrachten Sie die ersten drei Karten jeder Farbe und zählen Sie für jedes Ass, jeden König und jede Dame, die darunter fehlen, einen Verlierer:</p>
<table>
<thead><tr><th>Kombination</th><th>Verlierer</th></tr></thead>
<tbody>
<tr><td>Chicane</td><td>0</td></tr>
<tr><td>Single-A / anderes Single</td><td>0 / 1</td></tr>
<tr><td>AK / Ax oder Kx / Qx oder xx</td><td>0 / 1 / 2</td></tr>
<tr><td>AKQ</td><td>0</td></tr>
<tr><td>AKx, AQx, KQx</td><td>1</td></tr>
<tr><td>Axx, Kxx, Qxx</td><td>2</td></tr>
<tr><td>xxx</td><td>3</td></tr>
</tbody>
</table>
<p>Addieren Sie Ihre Verlierer und die des Partners und ziehen Sie die Summe von 24 ab: Das Ergebnis ist ungefähr die Zahl der Stiche, die die Partnerschaft mit dieser Farbe als Trumpf macht. Eine Minimum-Eröffnung hat etwa 7 Verlierer.</p>
<div class="hand" data-cards="S:K872 H:4 D:A8652 C:853" data-label="Partner hat 1♠ eröffnet"></div>
<p>♠K87 = 2 Verlierer, ♥4 = 1, ♦A86 = 2, ♣853 = 3: 8 Verlierer. 24 − (7 + 8) = 9 Stiche, also laden Sie mit 3♠ ein. Die Punktzählung kommt zum selben Ergebnis: 7 FP + 3 für das Single = 10 Unterstützungspunkte, eine Limit-Hebung.</p>

<h3>Schnelle Stiche</h3>
<p>Schnelle Stiche messen die Verteidigungsstärke, also die Stiche, die Sie in den ersten beiden Runden einer Farbe erwarten: AK = 2, AQ = 1½, A = 1, KQ = 1, Kx = ½. Eine solide Eröffnung oder ein Informationskontra hat meist etwa 2 schnelle Stiche. Hände mit wenigen schnellen Stichen und viel Verteilung eignen sich besser zum Alleinspiel als zur Verteidigung.</p>
`,
    keyPoints: [
      'FP: Ass 4, König 3, Dame 2, Bube 1; 40 im ganzen Spiel, 10 in einer Durchschnittshand.',
      'Für die eigene Hand zählen Sie einen Punkt pro Karte über vier; wenn Sie Partner heben, zählen Sie stattdessen die Kürze (mit vier Trümpfen: Chicane 5, Single 3, Double 1).',
      'Zwanzigerregel für leichte Eröffnungen an erster, zweiter oder dritter Position; Fünfzehnerregel (FP + Pikkarten) an vierter Position.',
      'Verliererzählung: Stiche ≈ 24 − gemeinsame Verlierer; eine Minimum-Eröffnung hat etwa 7 Verlierer.',
      'Etwa 25 gemeinsame Punkte für 3SA oder ein Vollspiel in Oberfarbe, 29 für ein Vollspiel in Unterfarbe, 33 für einen Kleinschlemm.',
    ],
    quiz: [
      {
        q: 'Wie viele FP hat ♠AQ4 ♥KJ62 ♦J953 ♣K7?',
        options: ['12', '13', '14', '15'],
        answer: 2,
        explain: '♠AQ = 6, ♥KJ = 4, ♦J = 1, ♣K = 3: 14 FP.',
      },
      {
        q: 'Erste Position. Sie haben 10 FP mit fünf Coeur und fünf Treff. Was tun Sie?',
        options: ['Passen: Eine Eröffnung braucht 12 FP', '1♥ eröffnen: Die Zwanzigerregel ist erfüllt', '1♣ eröffnen: Mit zwei Fünferlängen eröffnet man die niedrigere', '2♥ eröffnen'],
        answer: 1,
        explain: '10 FP + 5 + 5 = 20, die Hand erfüllt also die Zwanzigerregel. Mit zwei Fünferlängen eröffnen Sie die höherrangige Farbe, also 1♥ (Treff können Sie später zeigen).',
      },
      {
        q: 'Partner eröffnet 1♥. Sie haben vier Coeur und eine Pik-Chicane. Wie viele Kürzepunkte zählen Sie dazu?',
        options: ['1', '3', '5', '0'],
        answer: 2,
        explain: 'Mit vier oder mehr Trümpfen ist eine Chicane 5 Unterstützungspunkte wert: Jedes Pik des Partners kann in Ihrer Hand geschnappt werden.',
      },
      {
        q: 'Sie haben eine Hand mit 7 Verlierern, Partner hat 8 Verlierer, und Sie haben einen 8er-Fit. Wie viele Stiche sagt die Verliererzählung voraus?',
        options: ['7', '9', '8', '10'],
        answer: 1,
        explain: '24 − (7 + 8) = 9. Da man beim Eröffner 7 Verlierer annimmt, sollte ein Antwortender mit 8 Verlierern auf der Dreierstufe einladen, statt das Vollspiel zu bieten.',
      },
      {
        q: 'Vierte Position nach drei Passe: ♠KJ63 ♥A82 ♦Q74 ♣J93 (11 FP). Was tun Sie?',
        options: ['Passen: 11 FP reichen nicht', '1♣ eröffnen: 11 + 4 Pik = 15', '1♠ eröffnen', '1SA eröffnen'],
        answer: 1,
        explain: 'Die Fünfzehnerregel ist erfüllt: 11 FP + 4 Pik = 15. Ohne Fünferoberfarbe und mit 3-3 in den Unterfarben eröffnen Sie 1♣. 1♠ würde fünf Pik versprechen, und 1SA verlangt 15–17.',
      },
    ],
  },

  {
    id: 'opening-bids',
    title: 'Die Eröffnung',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Welche Hände man eröffnet und welches Eröffnungsgebot man wählt – von 1 in Farbe über 1SA, 2SA und 2♣ bis zu den Sperreröffnungen.',
    body: `
<h3>Die Eröffnungen im Überblick</h3>
<table>
<thead><tr><th>Eröffnung</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>12–21 FP, 3+ Treff (die längere Unterfarbe; mit 3-3 in den Unterfarben 1♣ eröffnen)</td></tr>
<tr><td>1♦</td><td>12–21 FP, 3+ Karo (die längere Unterfarbe; mit 4-4 in den Unterfarben 1♦ eröffnen)</td></tr>
<tr><td>1♥ / 1♠</td><td>12–21 FP, 5+ Karten in der Farbe</td></tr>
<tr><td>1SA</td><td>15–17 FP, ausgeglichen (eine Fünferlänge ist möglich)</td></tr>
<tr><td>2♣</td><td>Stark und künstlich: 22+ FP oder 9+ Spielstiche</td></tr>
<tr><td>2♦ / 2♥ / 2♠</td><td>Schwache Zwei: eine Sechserlänge und 5–10 FP</td></tr>
<tr><td>2SA</td><td>20–21 FP, ausgeglichen</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Sperreröffnung: eine Siebenerlänge und 5–10 FP</td></tr>
<tr><td>4♥ / 4♠</td><td>Sperreröffnung: eine Achterlänge (oder eine Siebenerlänge mit zusätzlicher Verteilung)</td></tr>
</tbody>
</table>

<h3>Ist es eine Eröffnungshand?</h3>
<p>Mit 12 oder mehr FP eröffnen Sie, außer an vierter Position. Mit 10–11 FP an erster, zweiter oder dritter Position eröffnen Sie, wenn die Zwanzigerregel erfüllt ist (FP + die Längen Ihrer beiden längsten Farben ≥ 20). An vierter Position eröffnen Sie mit 13 oder mehr FP, mit 10–12 FP aber nur, wenn die Fünfzehnerregel erfüllt ist (FP + Anzahl der Pikkarten ≥ 15). Hände mit einer langen Farbe und weniger Punkten eignen sich eher für eine schwache Zwei oder eine Sperreröffnung.</p>

<h3>Ausgeglichene Hände: Die Punkte entscheiden</h3>
<p>Eine ausgeglichene Hand hat keine Chicane, kein Single und höchstens ein Double: 4-3-3-3, 4-4-3-2 oder 5-3-3-2. Mit einer ausgeglichenen Hand planen Sie immer, Ihre Stärke in SA zu zeigen, entweder sofort oder mit dem nächsten Gebot:</p>
<table>
<thead><tr><th>FP</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>12–14</td><td>1 in Farbe eröffnen, Wiedergebot 1SA</td></tr>
<tr><td>15–17</td><td>1SA eröffnen</td></tr>
<tr><td>18–19</td><td>1 in Farbe eröffnen, dann Sprung auf 2SA</td></tr>
<tr><td>20–21</td><td>2SA eröffnen</td></tr>
<tr><td>22–24</td><td>2♣ eröffnen, Wiedergebot 2SA</td></tr>
<tr><td>25–27</td><td>2♣ eröffnen, Wiedergebot 3SA</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ5 H:K3 D:KJ84 C:QJ62" data-label="1SA eröffnen: 16 FP, ausgeglichen"></div>
<div class="hand" data-cards="S:AJ4 H:K83 D:Q1074 C:KJ5" data-label="1♦ eröffnen: 14 FP, Wiedergebot 1SA geplant"></div>

<h3>Die Wahl der Farbe</h3>
<ul>
<li>Mit einer Fünfer- oder längeren Oberfarbe eröffnen Sie diese, auch mit ausgeglichenen 12–14.</li>
<li>Mit zwei Fünferlängen (oder zwei Sechserlängen) eröffnen Sie die höherrangige Farbe.</li>
<li>Mit einer Sechser- und einer Fünferlänge eröffnen Sie die längere.</li>
<li>Ohne Fünferoberfarbe eröffnen Sie die längere Unterfarbe. Mit 3-3 in den Unterfarben eröffnen Sie 1♣, mit 4-4 1♦.</li>
<li>Vierer-Oberfarben werden nie eröffnet. Mit 4-4 in den Oberfarben und ohne Fünferlänge eröffnen Sie eine Unterfarbe; Partner bietet eine Vierer-Oberfarbe, wenn er eine hat.</li>
</ul>
<div class="hand" data-cards="S:KQ1074 H:A63 D:K82 C:95" data-label="1♠ eröffnen: 12 FP, fünf Pik"></div>
<div class="hand" data-cards="S:A5 H:973 D:KJ84 C:AQ96" data-label="1♦ eröffnen: 4-4 in den Unterfarben"></div>
<div class="hand" data-cards="S:AJ84 H:KQ5 D:J73 C:K62" data-label="1♣ eröffnen: 3-3 in den Unterfarben"></div>
<p>Die letzte Hand hat vier Pik, aber für die Eröffnung einer Oberfarbe braucht man fünf Karten, und mit je drei Karten in beiden Unterfarben lautet die Eröffnung 1♣. Hat Partner vier Pik, antwortet er 1♠, und der Fit ist gefunden.</p>

<h3>Starke und schwache Eröffnungen</h3>
<p>2SA zeigt 20–21 ausgeglichen; 2♣ ist die einzige forcierende Eröffnung und umfasst alle Hände mit 22+ FP oder etwa neun Spielstichen. Am anderen Ende nehmen schwache Zweier und Sperreröffnungen den Gegnern Reizraum, wenn Sie eine lange Farbe, aber wenig Verteidigung haben. Jede dieser Eröffnungen hat ihre eigene Lektion.</p>
<div class="hand" data-cards="S:AK5 H:KQ2 D:AJ43 C:KJ7" data-label="2SA eröffnen: 21 FP, ausgeglichen"></div>
<div class="tip">Planen Sie Ihr Wiedergebot, bevor Sie eröffnen. Mit ausgeglichenen 12–14 bieten Sie danach 1SA, mit ausgeglichenen 18–19 springen Sie auf 2SA, mit zwei Farben bieten Sie die zweite. Gibt es kein sinnvolles Wiedergebot, überdenken Sie die Eröffnung.</div>
<div class="warn">Eröffnen Sie nie 1♥ oder 1♠ mit nur vier Karten. Partner hebt schon mit Dreierunterstützung und erwartet mindestens einen 8er-Fit.</div>
`,
    keyPoints: [
      'Eröffnen Sie mit 12+ FP; mit 10–11 gilt die Zwanzigerregel (erste, zweite oder dritte Position). An vierter Position eröffnen Sie mit 13+ oder mit 10–12, wenn die Fünfzehnerregel erfüllt ist.',
      '1♥/1♠ versprechen fünf Karten; ohne Fünferoberfarbe eröffnen Sie die längere Unterfarbe (1♣ mit 3-3, 1♦ mit 4-4).',
      'Ausgeglichen: mit 12–14 eine Farbe eröffnen und 1SA wiederbieten; 15–17 1SA; 18–19 Sprung auf 2SA; 20–21 2SA; 22+ 2♣.',
      'Zwei Fünferlängen: die höherrangige eröffnen; 6-5: die längere eröffnen.',
      'Planen Sie Ihr Wiedergebot, bevor Sie eröffnen.',
    ],
    quiz: [
      {
        q: 'Sie halten ♠K6 ♥AQ1083 ♦AJ1074 ♣5 (14 FP). Was eröffnen Sie?',
        options: ['1♥', '1♦', '1SA', '2♥'],
        answer: 0,
        explain: 'Mit zwei Fünferlängen eröffnen Sie die höherrangige Farbe. Nach 1♥ können Sie als Nächstes Karo bieten, und Partner kann billig zwischen Ihren Farben wählen.',
      },
      {
        q: 'Sie halten ♠J5 ♥K82 ♦AQ6 ♣KJ1073 (14 FP). Was eröffnen Sie?',
        options: ['1♣', '1SA', '1♦', 'Passe'],
        answer: 0,
        explain: 'Die Hand ist ausgeglichen, hat aber nur 14 FP, zu wenig für 1SA (15–17). Eröffnen Sie die längere Unterfarbe, 1♣, und bieten Sie danach 1SA, um 12–14 ausgeglichen zu zeigen.',
      },
      {
        q: 'Sie halten ♠KQ4 ♥AJ6 ♦Q1092 ♣KJ5 (16 FP). Was eröffnen Sie?',
        options: ['1♦', '1SA', '2SA', '1♣'],
        answer: 1,
        explain: '16 FP mit einer 3-3-4-3-Verteilung sind eine 1SA-Eröffnung wie aus dem Lehrbuch. Ein einziges Gebot beschreibt sowohl Ihre Stärke als auch Ihre Verteilung.',
      },
      {
        q: 'Sie halten ♠AJ8 ♥Q1074 ♦K92 ♣Q83 (12 FP). Was eröffnen Sie?',
        options: ['1♥', '1♣', '1♦', 'Passe'],
        answer: 1,
        explain: 'Um eine Oberfarbe zu eröffnen, brauchen Sie fünf Karten, 1♥ scheidet also aus. Ohne Fünferoberfarbe eröffnen Sie die längere Unterfarbe; bei 3-3 in den Unterfarben ist das 1♣.',
      },
      {
        q: 'Sie haben ausgeglichene 18 FP. Wie sieht Ihr Plan aus?',
        options: ['1SA eröffnen', '2SA eröffnen', '1 in Farbe eröffnen und beim nächsten Gebot auf 2SA springen', '2♣ eröffnen'],
        answer: 2,
        explain: 'Ausgeglichene 18–19 sind zu stark für 1SA (15–17) und zu schwach für 2SA (20–21). Eröffnen Sie 1 in Farbe und springen Sie beim nächsten Gebot auf 2SA.',
      },
    ],
  },

  {
    id: 'responding-to-one-of-a-suit',
    title: 'Antworten auf 1 in Farbe',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Wie der Antwortende nach Partners Eröffnung von 1 in Farbe hebt, eine neue Farbe bietet oder SA reizt.',
    body: `
<h3>Grundsätze</h3>
<p>Partners Eröffnung auf der Einerstufe zeigt 12–21 FP; mit 6 oder mehr Punkten sollten Sie daher antworten, denn gegenüber einem starken Eröffner kann selbst eine schwache Hand für ein Vollspiel reichen. Mit weniger als 6 Punkten passen Sie. Ihre erste Aufgabe ist es, Partner von einem Fit zu berichten, die zweite, Ihren Stärkebereich zu zeigen.</p>

<h3>Antworten auf 1♥ oder 1♠</h3>
<p>Partner hat mindestens fünf Karten, Dreierunterstützung ergibt also bereits einen 8er-Fit. Partner zu unterstützen hat oberste Priorität.</p>
<table>
<thead><tr><th>Antwort</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>2 in der Oberfarbe</td><td>6–10 Unterstützungspunkte, Unterstützung mit 3+ Karten</td></tr>
<tr><td>3 in der Oberfarbe (Sprung)</td><td>Limit-Hebung: 10–12 Unterstützungspunkte, Unterstützung mit 4+ Karten, einladend</td></tr>
<tr><td>2SA</td><td>Jacoby: 13+ Punkte, Unterstützung mit 4+ Karten, vollspielforcierend</td></tr>
<tr><td>4 in der Oberfarbe</td><td>Schwach und verteilungsstark: Unterstützung mit 5+ Karten, unter 10 FP</td></tr>
<tr><td>Doppelsprung in neuer Farbe</td><td>Splinter: Unterstützung mit 4+ Karten, Single oder Chicane in dieser Farbe, 13–16 Punkte</td></tr>
<tr><td>1♠ über 1♥</td><td>6+ Punkte, 4+ Pik, forcierend</td></tr>
<tr><td>1SA</td><td>6–10, kein Fit, nicht forcierend (über 1♥ verneint es vier Pik)</td></tr>
<tr><td>Neue Farbe auf der Zweierstufe</td><td>10+ (sicherer 11+), 4+ Karten, für 2♥ über 1♠ 5+; rundenforcierend</td></tr>
<tr><td>Sprungwechsel</td><td>19+ Punkte, vollspielforcierend</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q84 H:K1063 D:752 C:J94" data-label="Partner hat 1♠ eröffnet: 2♠ bieten"></div>
<p>6 FP und Dreierunterstützung: Heben Sie auf 2♠. Bieten Sie nicht 1SA, und suchen Sie auch nicht auf der Zweierstufe nach einem Coeur-Fit; eine 2♥-Antwort verlangt fünf Coeur und 10+ Punkte.</p>
<div class="hand" data-cards="S:K1074 H:5 D:A963 C:8642" data-label="Partner hat 1♠ eröffnet: 3♠ bieten"></div>
<p>7 FP plus 3 für das Single mit vier Trümpfen = 10 Unterstützungspunkte: eine Limit-Hebung. Partner passt mit Minimum und bietet mit mehr das Vollspiel.</p>
<div class="hand" data-cards="S:KQ62 H:A84 D:K1073 C:Q5" data-label="Partner hat 1♠ eröffnet: 2SA bieten"></div>
<p>14 FP mit vier Trümpfen: Jacoby 2SA legt Pik als Trumpf fest und ist vollspielforcierend; so bleibt Raum, einen Schlemm zu erkunden.</p>
<p>Mit einem Single und 13–16 Punkten beschreibt ein Splinter die Hand besser: Mit ♠KQ74 ♥A853 ♦K962 ♣5 bieten Sie über 1♠ 4♣. Siehe die Lektion „Splinter-Hebungen und Reverse Drury“.</p>
<p>Mit 6 FP, fünf Coeur und einem Single, ♠4 ♥QJ852 ♦K9763 ♣82, springen Sie über 1♥ auf 4♥. Die Gegner haben sicher einen Fit und reichlich Punkte, und Sie wollen sie zwingen, auf der Fünferstufe zu raten.</p>

<h4>Dreierunterstützung und 10–12 Punkte</h4>
<p>Der Sprung auf die Dreierstufe verspricht normalerweise vier Trümpfe. Mit nur drei Trümpfen bieten Sie zuerst eine neue Farbe und unterstützen danach Partners Oberfarbe: Mit ♠A84 ♥K93 ♦KJ752 ♣64 bieten Sie über 1♥ zuerst 2♦ und dann 4♥ – 11 Punkte und ein Fit gegenüber einer Eröffnung reichen meist für das Vollspiel. (Nur wenn eine Kürze ein Blatt mit zu wenig Figurenpunkten für ein Zwei-über-eins auf 11–12 Punkte hebt, springen Sie mit drei Trümpfen sofort auf 3♥: 1SA würde die Unterstützung verneinen.) Mit Dreierunterstützung und 13+ bieten Sie zuerst eine neue Farbe und dann das Vollspiel in der Oberfarbe.</p>

<h3>Antworten auf 1♣ oder 1♦</h3>
<p>Partner hat in der Unterfarbe vielleicht nur drei Karten, und ein Fit in einer Oberfarbe ist mehr wert; suchen Sie also zuerst nach einer Oberfarbe.</p>
<table>
<thead><tr><th>Antwort</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Neue Farbe auf der Einerstufe</td><td>6+ Punkte, 4+ Karten, forcierend. Bieten Sie zuerst die längere Farbe; mit zwei Viererlängen die billigere (von unten nach oben).</td></tr>
<tr><td>1SA</td><td>6–10, ausgeglichen, keine Vierer-Oberfarbe</td></tr>
<tr><td>2SA</td><td>13–15, ausgeglichen, keine Vierer-Oberfarbe, vollspielforcierend</td></tr>
<tr><td>3SA</td><td>16–17, ausgeglichen</td></tr>
<tr><td>Hebung auf 2</td><td>6–10, 5+ Treff oder 4+ Karo, keine Vierer-Oberfarbe</td></tr>
<tr><td>Sprunghebung auf 3</td><td>10–12, dieselbe Unterstützung, einladend</td></tr>
<tr><td>1♦ – 2♣</td><td>10+ Punkte, forcierend</td></tr>
<tr><td>Sprungwechsel</td><td>19+ Punkte</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:J4 H:KQ73 D:Q85 C:9642" data-label="Partner hat 1♦ eröffnet: 1♥ bieten"></div>
<p>8 FP und eine Vierer-Oberfarbe: Zeigen Sie sie auf der Einerstufe. Mit 1SA könnten Sie einen 4-4-Fit in Coeur verlieren.</p>
<div class="hand" data-cards="S:Q73 H:K82 D:J65 C:Q1074" data-label="Partner hat 1♣ eröffnet: 1SA bieten"></div>
<p>8 FP, ausgeglichen, keine Vierer-Oberfarbe. Vier Treff reichen nicht, um Partners womöglich nur dreikartige Farbe zu heben; 1SA beschreibt die Hand.</p>
<p>Mit 11 FP, fünf Karo und ohne Vierer-Oberfarbe, ♠K5 ♥832 ♦KJ763 ♣A94, heben Sie 1♦ auf 3♦ (10–12). Mit ausgeglichenen 11–12 ohne Oberfarbe, zum Beispiel ♠KQ5 ♥J104 ♦A963 ♣J72 über 1♣, gibt es kein direktes Gebot: Antworten Sie 1♦ und bieten Sie danach 2SA, um zum Vollspiel einzuladen.</p>
<div class="warn">Springen Sie über 1♣ oder 1♦ nicht mit 11 oder 12 Punkten auf 2SA. Dieser Sprung zeigt 13–15 und zwingt Partner ins Vollspiel. Bieten Sie zuerst eine neue Farbe und laden Sie in der nächsten Runde mit 2SA ein.</div>
<div class="tip">Eine neue Farbe des Antwortenden ist rundenforcierend. Sie können also auch mit einer bescheidenen Hand eine Farbe bieten und Ihre Stärke mit dem nächsten Gebot beschreiben.</div>
`,
    keyPoints: [
      'Antworten Sie mit 6+ Punkten; Partners Oberfarbe zu unterstützen hat oberste Priorität.',
      'Über 1♥/1♠: Hebung auf 2 = 6–10 mit 3+ Unterstützung; auf 3 = 10–12 mit 4+; 2SA = 13+ mit 4+ (Jacoby); auf 4 = schwach mit 5+.',
      'Eine neue Farbe auf der Zweierstufe verlangt 10+ (sicherer 11+) und ist forcierend; 2♥ über 1♠ verlangt fünf Coeur.',
      'Über 1♣/1♦: zuerst eine Vierer-Oberfarbe auf der Einerstufe bieten; 1SA = 6–10, 2SA = 13–15, 3SA = 16–17, jeweils ausgeglichen ohne Oberfarbe.',
      'Mit ausgeglichenen 11–12 zuerst eine neue Farbe bieten und danach mit 2SA einladen.',
    ],
    quiz: [
      {
        q: 'Partner eröffnet 1♥. Sie halten ♠K72 ♥Q84 ♦J953 ♣Q62 (8 FP). Was antworten Sie?',
        options: ['1SA', '2♥', '3♥', '1♠'],
        answer: 1,
        explain: 'Dreierunterstützung für eine Fünfer-Oberfarbe bedeutet einen 8er-Fit; mit 6–10 Punkten teilt die einfache Hebung auf 2♥ das Partner sofort mit. 1♠ würde vier Pik verlangen.',
      },
      {
        q: 'Partner eröffnet 1♠. Sie halten ♠Q1075 ♥A94 ♦KQ63 ♣K8 (14 FP). Was antworten Sie?',
        options: ['4♠', '3♠', '2SA', '2♦'],
        answer: 2,
        explain: '2SA (Jacoby) zeigt 13+ mit 4+ Trümpfen und ist vollspielforcierend. 3♠ wäre nur eine Limit-Hebung und 4♠ eine schwache, verteilungsstarke Hebung; beides würde diese Hand unterbewerten.',
      },
      {
        q: 'Partner eröffnet 1♦. Sie halten ♠AJ85 ♥K1062 ♦74 ♣953 (8 FP). Was antworten Sie?',
        options: ['1♠', '1♥', '1SA', '2♦'],
        answer: 1,
        explain: 'Mit zwei Viererlängen bieten Sie von unten nach oben: zuerst 1♥. Hat Partner vier Pik, kann er anschließend 1♠ bieten; so geht keiner der beiden Fits verloren.',
      },
      {
        q: 'Partner eröffnet 1♣. Sie halten ♠K94 ♥Q73 ♦AJ5 ♣K1062 (13 FP). Was antworten Sie?',
        options: ['1SA', '2SA', '3SA', '1♦'],
        answer: 1,
        explain: 'Ausgeglichen, keine Vierer-Oberfarbe, 13 FP: 2SA zeigt 13–15 und ist vollspielforcierend. 1♦ würde vier Karo versprechen, und 3SA zeigt 16–17.',
      },
      {
        q: 'Partner eröffnet 1♠. Sie halten ♠5 ♥AQ94 ♦K8 ♣QJ7532 (12 FP). Was antworten Sie?',
        options: ['2♥', '2♣', '1SA', '3♣'],
        answer: 1,
        explain: 'Eine 2♥-Antwort auf 1♠ verspricht fünf Coeur. Bieten Sie Ihre lange Farbe, 2♣ – das ist forcierend –, und zeigen Sie Coeur vielleicht später. 3♣ wäre ein Sprungwechsel mit 19+.',
      },
    ],
  },

  {
    id: 'openers-rebid',
    title: 'Das Wiedergebot des Eröffners',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Wie der Eröffner mit dem zweiten Gebot ein Minimum, eine mittlere oder eine maximale Hand zeigt und seine Verteilung beschreibt – einschließlich Revers und Sprungwechsel.',
    body: `
<h3>Zuerst die Hand einordnen</h3>
<p>Ihre Eröffnung umfasste einen weiten Bereich, 12–21. Das Wiedergebot grenzt ihn ein. Zählen Sie Ihre Punkte im Licht von Partners Antwort neu (rechnen Sie Unterstützungspunkte dazu, wenn Sie einen Fit gefunden haben), und ordnen Sie die Hand einem von drei Bereichen zu:</p>
<table>
<thead><tr><th>Bereich</th><th>Punkte</th><th>Typisches Vorgehen</th></tr></thead>
<tbody>
<tr><td>Minimum</td><td>12–15</td><td>Das billigste beschreibende Gebot</td></tr>
<tr><td>Mittel</td><td>16–18</td><td>Ein Sprung oder mit 17+ ein Revers</td></tr>
<tr><td>Maximum</td><td>19–21</td><td>Vollspiel bieten oder mit einem Sprungwechsel forcieren</td></tr>
</tbody>
</table>

<h3>Nach einer Antwort auf der Einerstufe</h3>
<div class="auction" data-calls="1D P 1S P" data-dealer="N"></div>
<p>Der Antwortende hat 6+ Punkte und vier oder mehr Pik. Die Möglichkeiten des Eröffners:</p>
<table>
<thead><tr><th>Wiedergebot</th><th>Punkte</th><th>Zeigt</th></tr></thead>
<tbody>
<tr><td>2♠</td><td>12–15</td><td>Viererunterstützung in Pik</td></tr>
<tr><td>3♠</td><td>16–18</td><td>Viererunterstützung, einladend</td></tr>
<tr><td>4♠</td><td>19–21</td><td>Viererunterstützung, zum Spielen</td></tr>
<tr><td>1SA</td><td>12–14</td><td>Ausgeglichen</td></tr>
<tr><td>2SA (Sprung)</td><td>18–19</td><td>Ausgeglichen, einladend</td></tr>
<tr><td>2♦</td><td>12–15</td><td>Meist sechs Karo</td></tr>
<tr><td>3♦ (Sprung)</td><td>16–18</td><td>Eine gute Sechserlänge</td></tr>
<tr><td>2♣ (neue, niedrigere Farbe)</td><td>12–18</td><td>Vier oder mehr Treff, nicht forcierend</td></tr>
<tr><td>2♥ (Revers)</td><td>17+</td><td>Mehr Karo als Coeur, rundenforcierend</td></tr>
<tr><td>3♣ (Sprungwechsel)</td><td>19+</td><td>Vollspielforcierend</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:K84 H:Q5 D:AJ963 C:K72" data-label="1♦ – 1♠: Wiedergebot 1SA"></div>
<p>13 FP und ausgeglichen: 1SA. Eine Hebung auf 2♠ verspricht vier Pik, und Partner hat vielleicht nur vier.</p>
<div class="hand" data-cards="S:AQ85 H:72 D:AKJ63 C:Q8" data-label="1♦ – 1♠: Wiedergebot 3♠"></div>
<p>16 FP plus je 1 für die beiden Doubles (Coeur und Treff) mit vier Trümpfen: 16 + 1 + 1 = 18 Unterstützungspunkte, eine mittlere Hand. Springen Sie auf 3♠, um zum Vollspiel einzuladen. Mit Minimum (12–15) heben Sie auf 2♠, mit 19+ bieten Sie 4♠.</p>

<h3>Revers</h3>
<p>Ein <strong>Revers</strong> ist ein Wiedergebot in einer neuen Farbe auf der Zweierstufe, die <em>höher</em> ist als Ihre erste Farbe, etwa 1♦ – 1♠ – 2♥ oder 1♣ – 1♥ – 2♦. Um Ihre erste Farbe vorzuziehen, muss Partner jetzt auf die Dreierstufe gehen; deshalb verspricht ein Revers Extrastärke (17+) und ist rundenforcierend. Außerdem zeigt er, dass Ihre erste Farbe länger ist als die zweite.</p>
<div class="hand" data-cards="S:5 H:AQ74 D:AKJ85 C:K63" data-label="1♦ – 1♠: Revers 2♥"></div>
<p>17 FP, fünf Karo und vier Coeur: 2♥ zeigt die Verteilung und die Extrawerte mit einem einzigen Gebot.</p>
<div class="warn">Mit einem Minimum bieten Sie keinen Revers. Mit ♠5 ♥AQ74 ♦AJ985 ♣Q63 (13 FP) bieten Sie nach 1♦ – 1♠ 2♦. Einen Coeur-Fit verpassen Sie dadurch nicht: Mit vier Coeur und vier Pik hätte Partner zuerst 1♥ geantwortet.</div>

<h3>Sprungwechsel und Sprünge in der eigenen Farbe</h3>
<p>Ein Sprung in eine neue Farbe (1♦ – 1♠ – 3♣) zeigt 19+ und ist vollspielforcierend. Ein Sprung in der eigenen Farbe (1♥ – 1♠ – 3♥) zeigt 16–18 und eine gute Sechserlänge; er ist einladend, nicht forcierend.</p>
<div class="hand" data-cards="S:K6 H:A4 D:AKJ63 C:KQ104" data-label="1♦ – 1♠: Sprungwechsel 3♣"></div>
<p>20 FP: viel zu stark für ein nicht forcierendes 2♣ und außerhalb des Bereichs 18–19 eines 2SA-Wiedergebots. 3♣ forciert bis zum Vollspiel, während Sie den besten Kontrakt suchen.</p>

<h3>Nach 1SA oder einer Hebung</h3>
<p>Nach 1♠ – 1SA hat der Antwortende 6–10 und meist keinen Fit. Mit einem ausgeglichenen Minimum passen Sie; eine Sechserlänge bieten Sie wieder; Sie können eine zweite Farbe zeigen (eine neue Farbe, die niedriger ist als die erste, ist nicht forcierend), oder Sie laden mit 16–18 oder mehr durch einen Sprung ein. Nach 1♠ – 2♠ hat der Antwortende 6–10 mit Unterstützung: Mit Minimum passen Sie, mit einer mittleren Hand laden Sie mit 3♠ ein, und mit Maximum bieten Sie 4♠. Die Verliererzählung ist hier ein guter Wegweiser: Mit 6 Verlierern laden Sie ein, mit 5 bieten Sie das Vollspiel.</p>
<div class="tip">Eine Antwort auf der Zweierstufe (1♠ – 2♣) zeigt bereits 10+ und ist rundenforcierend. Der Eröffner kann also ein natürliches, beschreibendes Wiedergebot abgeben und muss nicht springen, nur um die Reizung offen zu halten.</div>
`,
    keyPoints: [
      'Ordnen Sie die Hand ein: Minimum 12–15, mittel 16–18, Maximum 19–21.',
      'Wiedergebot 1SA = 12–14 ausgeglichen; Sprung auf 2SA = 18–19 ausgeglichen.',
      'Heben Sie die Oberfarbe des Antwortenden mit Viererunterstützung: mit Minimum auf die Zweierstufe, mit mittlerer Hand auf die Dreierstufe, mit Maximum ins Vollspiel.',
      'Ein Revers (höherrangige neue Farbe auf der Zweierstufe) zeigt 17+, ist forcierend und zeigt, dass die erste Farbe länger ist.',
      'Ein Sprungwechsel des Eröffners zeigt 19+ und ist vollspielforcierend.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠. Sie halten ♠Q4 ♥K83 ♦AQ1063 ♣K72 (14 FP). Was ist Ihr Wiedergebot?',
        options: ['1SA', '2♦', '2SA', '2♠'],
        answer: 0,
        explain: 'Die Hand ist ausgeglichen mit 12–14 FP, genau das zeigt 1SA. 2♦ deutet sechs Karo an, und 2♠ verspricht vier Pik.',
      },
      {
        q: '1♣ – 1♥. Sie halten ♠A5 ♥KQ94 ♦K6 ♣AQ872 (18 FP). Was ist Ihr Wiedergebot?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 2,
        explain: 'Mit Viererunterstützung zählen Sie Unterstützungspunkte: 18 FP + je 1 für jedes Double = 20, ein Maximum. Bieten Sie das Vollspiel: 4♥.',
      },
      {
        q: 'Welche dieser Reizungen enthält einen Revers des Eröffners?',
        options: ['1♥ – 1♠ – 2♣', '1♦ – 1♠ – 2♥', '1♠ – 1SA – 2♥', '1♣ – 1♥ – 1♠'],
        answer: 1,
        explain: 'Coeur steht über Karo, und 2♥ liegt auf der Zweierstufe; um die erste Farbe des Eröffners vorzuziehen, muss Partner also auf 3♦ gehen. In den anderen Reizungen ist die zweite Farbe niedriger oder wird auf der Einerstufe geboten.',
      },
      {
        q: '1♦ – 1♥. Sie halten ♠A6 ♥J4 ♦AKJ852 ♣K93 (16 FP). Was ist Ihr Wiedergebot?',
        options: ['2♦', '3♦', '2SA', '1SA'],
        answer: 1,
        explain: 'Eine mittlere Hand mit einer guten Sechserlänge: Der Sprung auf 3♦ zeigt 16–18 und lädt ein. 2♦ würde ein Minimum zeigen, 1SA oder 2SA eine ausgeglichene Hand.',
      },
      {
        q: '1♠ – 2♠. Sie halten ♠AQJ84 ♥K73 ♦A62 ♣95 (14 FP). Was tun Sie?',
        options: ['Passe', '3♠', '4♠', '2SA'],
        answer: 0,
        explain: '14 FP + 1 für das fünfte Pik = 15, ein Minimum. Die Verliererzählung bestätigt das: ♠AQJ 1, ♥K73 2, ♦A62 2, ♣95 2 = 7 Verlierer, die Zahl einer Minimum-Eröffnung. Gegenüber einer Hebung mit 6–10 ist ein Vollspiel unwahrscheinlich, also passen Sie.',
      },
    ],
  },

  {
    id: 'notrump-bidding',
    title: 'SA-Eröffnungen und Antworten',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Antworten auf 1SA und 2SA mit Stayman, Jacoby-Transfers, dem Transfer in eine Unterfarbe, Einladungen und dem quantitativen 4SA.',
    body: `
<h3>Warum SA-Eröffnungen einfach sind</h3>
<p>1SA zeigt 15–17 FP und eine ausgeglichene Hand (eine Fünferlänge ist möglich). Weil die Hand des Eröffners so genau beschrieben ist, weiß der Antwortende meist sofort, wohin die Partnerschaft gehört, und übernimmt als „Kapitän“ die Führung. Addieren Sie Ihre Punkte zu Partners 15–17: Mit gemeinsam 25 oder mehr wollen Sie ins Vollspiel.</p>

<h3>Antworten auf 1SA</h3>
<table>
<thead><tr><th>Antwort</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Passe</td><td>0–7 ohne lange Oberfarbe</td></tr>
<tr><td>2♣</td><td>Stayman: 8+ FP und eine Vierer-Oberfarbe</td></tr>
<tr><td>2♦</td><td>Transfer: 5+ Coeur, beliebige Stärke. Der Eröffner bietet 2♥.</td></tr>
<tr><td>2♥</td><td>Transfer: 5+ Pik, beliebige Stärke. Der Eröffner bietet 2♠.</td></tr>
<tr><td>2♠</td><td>Transfer nach Treff: Der Eröffner bietet 3♣. Eine schwache Hand mit langer Unterfarbe; Sie passen auf 3♣ oder bieten 3♦.</td></tr>
<tr><td>2SA</td><td>8–9, einladend</td></tr>
<tr><td>3SA</td><td>10–15, zum Spielen</td></tr>
<tr><td>4♣</td><td>Gerber: fragt nach Assen</td></tr>
<tr><td>4♦ / 4♥</td><td>Texas-Transfer: 6+ Coeur / Pik und Vollspielwerte. Der Eröffner bietet 4♥ / 4♠.</td></tr>
<tr><td>4SA</td><td>16–17, quantitativ: lädt zu 6SA ein</td></tr>
</tbody>
</table>

<h3>Stayman</h3>
<p>2♣ fragt den Eröffner nach einer Vierer-Oberfarbe. Der Eröffner antwortet 2♦ (keine Vierer-Oberfarbe), 2♥ (vier Coeur, eventuell auch vier Pik) oder 2♠ (vier Pik, nicht vier Coeur). Danach gilt:</p>
<ul>
<li>Ist ein Fit gefunden, heben Sie auf drei, um einzuladen, oder auf vier zum Spielen.</li>
<li>Wenn nicht, bieten Sie mit 8–9 2SA oder mit 10–15 3SA.</li>
<li>Hat der Eröffner Coeur gezeigt und Sie haben Pik, bieten Sie 2SA oder 3SA. Der Eröffner, der beide Oberfarben haben kann, korrigiert mit vier Pik in Pik.</li>
</ul>
<div class="hand" data-cards="S:KJ84 H:Q1063 D:A72 C:85" data-label="Partner hat 1SA eröffnet: 2♣ bieten"></div>
<p>10 FP und zwei Vierer-Oberfarben. Über 2♦ bieten Sie 3SA, über 2♥ 4♥, über 2♠ 4♠. Stayman verlangt 8+ FP, weil Sie nach der Antwort 2♦ mindestens 2SA bieten können müssen.</p>

<h3>Jacoby-Transfers</h3>
<p>Mit einer Fünfer- oder längeren Oberfarbe bieten Sie einen Transfer: Sie bieten die Farbe darunter und lassen den Eröffner Ihre Farbe nennen. So wird die starke Hand Alleinspieler, und das Ausspiel kommt in ihre Figuren. Transfers funktionieren mit jeder Stärke, von gar nichts bis zu Schlemmwerten.</p>
<div class="hand" data-cards="S:Q97542 H:83 D:J62 C:74" data-label="Partner hat 1SA eröffnet: 2♥, dann Passe"></div>
<p>3 FP. 2♠ spielt sich viel besser als 1SA. Bieten Sie den Transfer 2♥ und passen Sie auf das 2♠ des Eröffners.</p>
<p>Ist der Transfer ausgeführt, reizt der Antwortende so weiter:</p>
<table>
<thead><tr><th>Nächstes Gebot</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Passe</td><td>0–7, Abschluss</td></tr>
<tr><td>2SA</td><td>8–9 mit genau fünf Karten in der Oberfarbe (der Eröffner wählt)</td></tr>
<tr><td>3 in der Oberfarbe</td><td>8–9 mit sechs oder mehr Karten, einladend</td></tr>
<tr><td>3SA</td><td>10–15 mit genau fünf Karten (der Eröffner wählt zwischen 3SA und 4 in der Oberfarbe)</td></tr>
<tr><td>4 in der Oberfarbe</td><td>10–15 mit sechs oder mehr Karten, zum Spielen (mit Texas-Transfers bieten Sie stattdessen sofort 4♦ oder 4♥)</td></tr>
<tr><td>Neue Farbe</td><td>Natürlich und forcierend</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:6 H:KJ1074 D:A85 C:Q963" data-label="Partner hat 1SA eröffnet: 2♦, dann 3SA"></div>
<p>10 FP und fünf Coeur. Bieten Sie den Transfer, dann 3SA. Mit drei oder mehr Coeur bietet der Eröffner 4♥; mit einem Double passt er.</p>
<p>Mit Viererunterstützung und 17 FP nimmt der Eröffner den Transfer mit einem Sprung an, einem <strong>Super-Akzept</strong>: 1SA – 2♦ – 3♥. Der Antwortende bietet dann mit fast allem das Vollspiel, denn der Fit hat mindestens neun Karten, und der Eröffner ist am oberen Ende seines Bereichs.</p>

<h3>Lange Unterfarben, Einladungen und Schlemmversuche</h3>
<p>Mit einer schwachen Hand und sechs oder mehr Karten in einer Unterfarbe bieten Sie 2♠: Der Eröffner muss 3♣ bieten, und Sie passen mit Treff oder bieten mit Karo 3♦. Mit ♠52 ♥742 ♦J3 ♣Q108653: 1SA – 2♠ – 3♣ – Passe.</p>
<p>2SA lädt mit 8–9 zum Vollspiel ein. Der Eröffner passt mit 15, bietet mit 17 3SA und entscheidet mit 16 nach Urteil (er nimmt mit guten Zehnen und Neunen oder einer Fünferlänge an). 4SA ist hier nicht Blackwood: Es zeigt 16–17 und bittet den Eröffner, mit Maximum 6SA zu bieten. Mit ♠KQ5 ♥AJ4 ♦KJ63 ♣Q72 (16 FP) bieten Sie 4SA: 16 + 15–17 = gemeinsam 31–33, der Schlemm ist also nur gut, wenn der Eröffner am oberen Ende seines Bereichs liegt.</p>

<h3>Antworten auf 2SA</h3>
<p>Die 2SA-Eröffnung zeigt 20–21. Es gelten dieselben Werkzeuge eine Stufe höher: 3♣ ist Stayman, 3♦ und 3♥ sind Transfers, 4♦ und 4♥ sind Texas-Transfers, 3SA zeigt 4–10 Punkte, und 4SA (11–12) ist quantitativ. Schon 4 Punkte reichen, um ins Vollspiel zu heben.</p>
<div class="tip">Mit einer Fünfer-Oberfarbe und genug für ein Vollspiel bieten Sie zuerst den Transfer und dann 3SA. Der Eröffner kennt seine eigene Hand und weiß, dass Sie fünf Karten haben; er trifft die endgültige Wahl zwischen 3SA und vier in der Oberfarbe.</div>
<div class="warn">Verwenden Sie Stayman nicht mit einer ausgeglichenen Hand mit 8+ ohne Vierer-Oberfarbe. Sie müssten danach raten; bieten Sie einfach 2SA oder 3SA.</div>
`,
    keyPoints: [
      '1SA = 15–17 ausgeglichen; der Antwortende addiert die Punkte und bestimmt den Kontrakt.',
      '2♣ Stayman (8+, eine Vierer-Oberfarbe): Antworten 2♦ keine, 2♥ Coeur (eventuell auch Pik), 2♠ nur Pik.',
      '2♦ und 2♥ sind Transfers nach Coeur und Pik mit beliebiger Stärke; 2♠ ist ein Transfer nach Treff für eine schwache Hand mit langer Unterfarbe.',
      '2SA = 8–9 einladend, 3SA = 10–15, 4SA = 16–17 quantitativ (nicht Blackwood).',
      'Mit Viererunterstützung und 17 nimmt der Eröffner den Transfer mit einem Sprung auf drei in der Oberfarbe an (Super-Akzept).',
      'Über 2SA: 3♣ Stayman, 3♦/3♥ Transfers, 4♦/4♥ Texas, 3SA mit 4–10, 4SA quantitativ.',
    ],
    quiz: [
      {
        q: 'Partner eröffnet 1SA. Sie halten ♠J8752 ♥84 ♦932 ♣Q65 (3 FP). Wie ist Ihr Plan?',
        options: ['Passen', '2♥ (Transfer), dann auf 2♠ passen', '2♠ bieten', '2♣ bieten'],
        answer: 1,
        explain: 'Eine schwache Hand mit fünf Pik spielt sich in 2♠ besser als in 1SA, weil die langen Trümpfe Stiche bringen. Bieten Sie den Transfer 2♥ und passen Sie. 2♠ wäre ein Transfer nach Treff, und 2♣ Stayman verlangt 8+.',
      },
      {
        q: '1SA – 2♣ – 2♥. Sie halten ♠KJ84 ♥A962 ♦Q73 ♣J5 (11 FP). Was nun?',
        options: ['3SA', '4♥', '3♥', '2SA'],
        answer: 1,
        explain: 'Der Eröffner hat vier Coeur, es gibt also einen 4-4-Fit, und 11 + 15–17 reicht für ein Vollspiel. Bieten Sie 4♥; ein 4-4-Fit in Oberfarbe spielt sich meist besser als 3SA.',
      },
      {
        q: 'Sie haben mit ♠KQ75 ♥AJ83 ♦K4 ♣Q62 1SA eröffnet. Partner bietet 2♣. Was antworten Sie?',
        options: ['2♥', '2♠', '2♦', '2SA'],
        answer: 0,
        explain: 'Mit beiden Oberfarben antworten Sie zuerst 2♥. Hat Partner Pik statt Coeur, bietet er 2SA oder 3SA, und Sie korrigieren in Pik.',
      },
      {
        q: '1SA – 2♦ – 2♥ – 3SA. Sie haben mit drei Coeur eröffnet. Was tun Sie?',
        options: ['Passen, weil Partner 3SA gewählt hat', '4♥ bieten: Partner hat fünf Coeur gezeigt, Sie haben also einen 8er-Fit', '4SA bieten', '3♥ bieten'],
        answer: 1,
        explain: 'Transfer und danach 3SA zeigt genau fünf Coeur und Vollspielwerte. Mit Dreierunterstützung wählt der Eröffner 4♥; mit einem Double passt er auf 3SA.',
      },
      {
        q: 'Partner eröffnet 2SA. Sie halten ♠Q8642 ♥K7 ♦J73 ♣1052 (6 FP). Wie ist Ihr Plan?',
        options: ['3♠ bieten', '3♥ bieten, dann über 3♠ 3SA', '3SA bieten', 'Passen'],
        answer: 1,
        explain: '20–21 gegenüber 6 reicht für ein Vollspiel. Bieten Sie den Transfer 3♥ und dann 3SA, um genau fünf Pik zu zeigen; der Eröffner wählt mit Dreierunterstützung 4♠ oder passt mit zwei Karten.',
      },
    ],
  },

  {
    id: 'planning-the-play',
    title: 'Den Spielplan machen',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Zählen Sie vor dem ersten Stich Ihre sicheren Stiche (in SA) oder Ihre Verlierer (im Farbkontrakt) und machen Sie einen Plan.',
    body: `
<h3>Vor dem ersten Stich innehalten und planen</h3>
<p>Wenn der Dummy aufgelegt wird, spielen die meisten Anfänger sofort eine Karte zum ersten Stich. Starke Spieler halten inne. Oft wird der Kontrakt schon im ersten Stich gewonnen oder verloren, und planen können Sie ihn erst, wenn Sie das Gesamtbild betrachtet haben. Gehen Sie jedes Mal nach demselben Schema vor:</p>
<ol>
<li><strong>Zählen.</strong> In SA zählen Sie Ihre sicheren Stiche: Stiche, die Sie machen können, ohne das Spiel abzugeben. Im Farbkontrakt zählen Sie die Verlierer in der Hand mit den langen Trümpfen.</li>
<li><strong>Vergleichen.</strong> Wie viele zusätzliche Stiche brauchen Sie (SA), bzw. wie viele Verlierer müssen Sie loswerden (Farbkontrakt)?</li>
<li><strong>Quellen finden.</strong> Zusätzliche Stiche entstehen durch das Hochspielen langer Farben, das Austreiben hoher Karten, durch Schnitte und durch Schnapper in der Hand mit den kürzeren Trümpfen. Verlierer verschwinden, indem Sie sie am Tisch schnappen, auf Gewinner des Dummys abwerfen oder durch Schnitte vermeiden.</li>
<li><strong>Gefahren erkennen.</strong> Wie oft müssen Sie das Spiel abgeben? Welcher Gegner ist gefährlich? Haben Sie die nötigen Übergänge?</li>
<li><strong>Die Reihenfolge festlegen</strong> – angefangen damit, welche Karte Sie vom Tisch spielen und welche Hand den ersten Stich gewinnen soll.</li>
</ol>

<h3>Ein SA-Beispiel: Gewinner zählen</h3>
<div class="deal" data-n="S:A5 H:KQJ10 D:742 C:8653" data-s="S:K83 H:654 D:AKQ C:A972" data-caption="3SA von Süd. West spielt die ♠Q aus."></div>
<div class="auction" data-calls="1NT P 2C P 2D P 3NT P P P" data-dealer="S"></div>
<p><strong>Zählen:</strong> ♠AK (2), ♦AKQ (3), ♣A (1): sechs sichere Stiche. Sie brauchen drei weitere.</p>
<p><strong>Quellen:</strong> Coeur. Sobald das ♥A ausgetrieben ist, liefern KQJ10 am Tisch drei Stiche. Treff bringt nichts: Die Gegenspieler halten K, Q, J und 10.</p>
<p><strong>Gefahr:</strong> Die Gegenspieler können das ♥A bis zur dritten Runde zurückhalten. Dann ist das letzte Coeur am Tisch zwar ein Gewinner, aber Sie brauchen einen Übergang, um es zu erreichen. Der einzige Übergang zum Dummy außerhalb von Coeur ist das ♠A.</p>
<p><strong>Plan:</strong> Spielen Sie im ersten Stich klein vom Tisch und gewinnen Sie mit dem ♠K in der Hand; so bleibt das ♠A als Übergang erhalten. Spielen Sie dann sofort Coeur. Wann immer die Gegenspieler ihr Ass nehmen, haben Sie neun Stiche: zwei Pik, drei Coeur, drei Karo und ein Treff. Gewinnen Sie den ersten Stich dagegen leichtfertig mit dem ♠A und hält ein Gegenspieler das ♥A bis zur dritten Runde zurück, bleibt das vierte Coeur am Tisch abgeschnitten, und Sie machen nur acht Stiche.</p>
<div class="tip">Treiben Sie die hohen Karten der Gegner früh aus, solange Sie noch in jeder Farbe Stopper haben. Ziehen Sie Ihre sicheren Stiche zuletzt ab, nicht zuerst.</div>

<h3>Ein Farbbeispiel: Verlierer zählen</h3>
<div class="deal" data-n="S:1064 H:A65 D:84 C:AJ876" data-s="S:AKQJ5 H:K84 D:A732 C:2" data-caption="4♠ von Süd. West spielt die ♥Q aus."></div>
<div class="auction" data-calls="1S P 2S P 4S P P P" data-dealer="S"></div>
<p><strong>Verlierer in der Hand von Süd zählen:</strong> Pik keiner; Coeur einer (die dritte Runde); Karo drei (die 7, die 3 und die 2); Treff keiner (das ♣A am Tisch deckt Ihr Single). Insgesamt vier. Abgeben dürfen Sie drei.</p>
<p><strong>Quelle:</strong> Der Dummy hat nur zwei Karo. Nach dem ♦A und einer weiteren Runde hat der Tisch kein Karo mehr und kann Ihr drittes Karo mit einem kleinen Trumpf schnappen. Dieser Schnapper bringt einen zusätzlichen Stich, weil ihn die Hand mit den <em>kürzeren</em> Trümpfen macht: Die Trümpfe von Süd sind ohnehin Gewinner.</p>
<p><strong>Gefahr:</strong> Ziehen Sie zuerst drei Runden Trumpf, bleibt am Tisch kein Trumpf für den Schnapper. Sie müssen mindestens einen Trumpf am Tisch behalten, bis der Schnapper ausgeführt ist.</p>
<p><strong>Plan:</strong> Gewinnen Sie das Ausspiel mit dem ♥A am Tisch, spielen Sie Karo zu Ihrem Ass und geben Sie ein Karo ab. Gewinnen die Gegenspieler und spielen Trumpf nach (ihre beste Verteidigung), nehmen Sie den Stich und schnappen sofort ein Karo am Tisch. Jetzt ziehen Sie Trumpf. Sie verlieren ein Coeur und zwei Karo.</p>
<div class="warn">„Immer zuerst Trumpf ziehen“ ist eine gute Gewohnheit mit einer großen Ausnahme: Wenn Sie die Trümpfe des Dummys zum Schnappen brauchen, schnappen Sie, bevor die Trümpfe weg sind.</div>

<h3>Zählen ist Gewohnheitssache</h3>
<p>Das Zählen dauert ein paar Sekunden, und wer nicht zählt, zahlt einen hohen Preis. Erreichen Ihre sicheren Stiche in SA schon das Ziel, ziehen Sie sie ab und vermeiden Sie unnötige Risiken. Fehlen Ihnen Stiche, entscheiden Sie, woher die zusätzlichen Stiche kommen sollen, <em>bevor</em> Sie eine Karte anfassen – denn davon hängen oft die Reihenfolge des Spiels und die Wahl der Hand ab, die den ersten Stich gewinnt.</p>
`,
    keyPoints: [
      'Planen Sie vor dem ersten Stich: zählen, vergleichen, Quellen finden, Gefahren erkennen, dann die Reihenfolge festlegen.',
      'In SA zählen Sie sichere Stiche, im Farbkontrakt die Verlierer in der Hand mit den langen Trümpfen.',
      'Treiben Sie die hohen Karten der Gegner früh aus, solange Sie noch Stopper haben.',
      'Schnapper in der Hand mit den kürzeren Trümpfen (meist am Tisch) bringen Stiche; behalten Sie die Trümpfe des Dummys, bis die Schnapper ausgeführt sind.',
      'Schützen Sie die Übergänge, die Sie später brauchen.',
    ],
    quiz: [
      {
        q: 'Was sollten Sie in einem SA-Kontrakt zuerst zählen?',
        options: ['Ihre Verlierer', 'Ihre sicheren Stiche', 'Ihre Trümpfe', 'Die FP der Gegner'],
        answer: 1,
        explain: 'In SA gibt es keine Schnapper; das natürliche Maß sind daher die Stiche, die Sie machen können, ohne das Spiel abzugeben. Die Differenz zeigt Ihnen, wie viele Stiche aus langen Farben oder Schnitten kommen müssen.',
      },
      {
        q: 'Welcher Schnapper bringt einen Stich?',
        options: ['Ein Schnapper in der Hand mit den langen Trümpfen', 'Ein Schnapper in der Hand mit den kurzen Trümpfen', 'Beide gleichermaßen', 'Keiner von beiden'],
        answer: 1,
        explain: 'Ihre langen Trümpfe würden ohnehin Stiche machen; mit ihnen zu schnappen verbraucht nur einen Gewinner. Ein Schnapper mit den Trümpfen der kurzen Hand (meist am Tisch) bringt einen Stich, den diese kleinen Trümpfe sonst nicht machen könnten.',
      },
      {
        q: 'Warum gewinnen Sie im 3SA-Spiel oben den ersten Stich mit dem ♠K in der Hand und nicht mit dem ♠A am Tisch?',
        options: ['Um das ♠A am Tisch als Übergang zur Coeurfarbe zu behalten', 'Weil der König die höhere Karte ist', 'Um den Pik-Stopper zurückzuhalten', 'Um die Pikfarbe zu deblockieren'],
        answer: 0,
        explain: 'Halten die Gegenspieler das ♥A bis zur dritten Runde zurück, ist das letzte Coeur am Tisch ein Gewinner, den Sie nicht erreichen können – es sei denn, der Tisch hat noch das ♠A.',
      },
      {
        q: 'Was geht im 4♠-Spiel oben schief, wenn der Alleinspieler sofort drei Runden Trumpf zieht?',
        options: ['Nichts, das ist das sicherste Spiel', 'Am Tisch bleibt kein Trumpf, um das dritte Karo zu schnappen', 'Die Gegenspieler können ein Coeur schnappen', 'Der Alleinspieler verliert die Kontrolle über Treff'],
        answer: 1,
        explain: 'Der Dummy hatte nur drei Trümpfe. Drei Runden Trumpf verbrauchen sie alle, und dem Alleinspieler bleiben drei Karo-Verlierer plus ein Coeur: einer zu viel.',
      },
    ],
  },

  {
    id: 'opening-leads',
    title: 'Das Ausspiel',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Wie Sie die Farbe und darin die richtige Karte für das Ausspiel wählen – gegen SA und gegen Farbkontrakte.',
    body: `
<h3>Zwei Entscheidungen: Farbe und Karte</h3>
<p>Das Ausspiel ist die einzige Karte, die Sie spielen, ohne den Dummy zu sehen; gute Gewohnheiten zahlen sich hier besonders aus. Wählen Sie zuerst anhand der Reizung und Ihrer Hand die Farbe, und spielen Sie dann in dieser Farbe die übliche Karte aus, damit Partner erkennen kann, was Sie halten.</p>

<h3>Die Farbwahl gegen SA</h3>
<ul>
<li>Hat Partner eine Farbe geboten, spielen Sie sie aus, sofern Sie keine sehr gute Alternative haben.</li>
<li>Sonst spielen Sie Ihre längste und stärkste Farbe aus. SA ist ein Wettlauf: Die Gegenspieler versuchen, ihre Längen hochzuspielen, bevor der Alleinspieler seine eigenen Stiche abziehen kann.</li>
<li>Bevorzugen Sie ungereizte Farben. Meiden Sie Farben, die die Gegner geboten haben.</li>
<li>Mit einer sehr schwachen Hand ohne Übergänge kann eine lange Farbe, die Sie nie abziehen können, sinnlos sein; ein Ausspiel in Partners vermutlich langer Farbe (oft eine Oberfarbe, die die Gegner nicht genannt haben) kann besser sein.</li>
</ul>

<h3>Die Farbwahl gegen einen Farbkontrakt</h3>
<ul>
<li><strong>Gute Ausspiele:</strong> die oberste Karte einer Sequenz; Partners Farbe; ein Single (vor allem, wenn Sie das Trumpfass halten oder Partner einen Übergang haben könnte); das Ass von AK.</li>
<li><strong>Spielen Sie Trumpf aus</strong>, wenn die Reizung darauf hindeutet, dass der Dummy Verlierer des Alleinspielers schnappen wird: Der Alleinspieler hat zwei Farben gezeigt und der Dummy die zweite vorgezogen, oder der Dummy hat Kürze gezeigt.</li>
<li><strong>Vermeiden Sie:</strong> von einem Ass weg auszuspielen (der Alleinspieler macht vielleicht einen blanken König, und Ihr Ass kommt womöglich nie zum Stich); von einem König weg in die AQ-Gabel des Alleinspielers auszuspielen; eine Figur zweit wie Qx auszuspielen.</li>
</ul>
<div class="warn">Spielen Sie gegen einen Farbkontrakt nie unter einem Ass aus. Wenn Sie die Farbe unbedingt ausspielen müssen, dann das Ass.</div>

<h3>Welche Karte ausspielen?</h3>
<table>
<thead><tr><th>Kombination</th><th>Gegen SA</th><th>Gegen Farbkontrakt</th></tr></thead>
<tbody>
<tr><td>K Q J 5</td><td>K</td><td>K</td></tr>
<tr><td>Q J 10 4</td><td>Q</td><td>Q</td></tr>
<tr><td>J 10 9 4</td><td>J</td><td>J</td></tr>
<tr><td>10 9 8 3</td><td>10</td><td>10</td></tr>
<tr><td>K Q 10 5</td><td>K</td><td>K</td></tr>
<tr><td>K J 10 5</td><td>J</td><td>J</td></tr>
<tr><td>Q 10 9 4</td><td>10</td><td>10</td></tr>
<tr><td>A K 7 4</td><td>A</td><td>A</td></tr>
<tr><td>K J 8 5 3</td><td>5 (vierthöchste)</td><td>5, aber ein Ausspiel vom König ist riskant</td></tr>
<tr><td>A 10 6 3</td><td>3 (vierthöchste)</td><td>Vermeiden; wenn es sein muss, das A</td></tr>
<tr><td>Q 8 5</td><td>5</td><td>5</td></tr>
<tr><td>8 5 2</td><td>8 (Top of Nothing)</td><td>8</td></tr>
<tr><td>9 4</td><td>9</td><td>9</td></tr>
<tr><td>7 (Single)</td><td>selten ausgespielt</td><td>7, oft ein gutes Ausspiel</td></tr>
</tbody>
</table>
<p>Die Regeln hinter der Tabelle: Spielen Sie die oberste Karte einer Sequenz aus (drei aufeinanderfolgende Karten oder zwei aufeinanderfolgende plus die übernächste wie bei KQ10); aus einer inneren Sequenz wie KJ10 oder Q109 die oberste der aufeinanderfolgenden Karten (den J bzw. die 10); von AK das Ass; von einem Double die höhere Karte und von drei kleinen Karten die höchste; von einer Figur mit zwei oder drei kleinen Karten eine niedrige (die dritthöchste von drei, die vierthöchste von vier); und gegen SA die vierthöchste Ihrer langen Farbe.</p>

<h3>Beispiele</h3>
<div class="hand" data-cards="S:KJ1074 H:83 D:Q62 C:A95" data-label="Sie spielen gegen 1SA – 3SA aus"></div>
<p>Spielen Sie den ♠J aus, die oberste Karte der inneren Sequenz KJ10. Pik ist Ihre lange Farbe, und das Ausspiel des Buben sagt Partner außerdem, dass Sie die 10 halten, aber nicht die Q.</p>
<div class="hand" data-cards="S:73 H:AK5 D:QJ104 C:9862" data-label="Ausspiel gegen 1♠ – 2♠ – 4♠"></div>
<p>Zwei sichere Möglichkeiten: das ♥A (Ass von AK) und die ♦Q (oberste Karte einer Sequenz). Das ♥A gewinnt den Stich und lässt Sie den Dummy sehen, bevor Sie entscheiden, wie es weitergeht; Partners Markierung sagt Ihnen dann, ob Sie Coeur fortsetzen sollen.</p>
<div class="auction" data-calls="1S P 1NT P 2D P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ109 H:A73 D:852 C:J64" data-label="Ost: Ausspiel gegen 2♦"></div>
<p>Spielen Sie Trumpf aus. Nord hat fünf oder mehr Pik und vier oder mehr Karo, und Süds Präferenz für Karo deutet auf Kürze in Pik hin. Da Sie starke Pik halten, kann der Alleinspieler seine Pik-Verlierer nur retten, indem er sie am Tisch schnappt; jede Trumpfrunde, die Sie spielen, nimmt dem Dummy einen Schnapper weg.</p>
<div class="tip">Fragen Sie sich nach jedem Ausspiel, was es Partner sagt. Mit den üblichen Ausspielen kann der andere Gegenspieler die Farbe schon ab dem ersten Stich zählen.</div>
`,
    keyPoints: [
      'Wählen Sie zuerst die Farbe: gegen SA Partners Farbe, sonst Ihre lange Farbe; gegen Farbkontrakte Sequenzen, Partners Farbe, Singles oder Trumpf.',
      'Spielen Sie die oberste Karte einer Sequenz aus; von KJ10 den J, von Q109 die 10; von AK das A.',
      'Gegen SA spielen Sie die vierthöchste Karte Ihrer längsten und stärksten Farbe aus.',
      'Von einem Double und von drei kleinen Karten die höchste; von einer Figur mit zwei oder drei kleinen Karten eine niedrige.',
      'Spielen Sie gegen einen Farbkontrakt nie unter einem Ass aus; spielen Sie Trumpf aus, wenn der Dummy wahrscheinlich schnappen wird.',
    ],
    quiz: [
      {
        q: 'Sie spielen gegen 3SA aus, Ihre lange Farbe ist ♠KQ1086. Welche Karte spielen Sie aus?',
        options: ['♠K', '♠8', '♠6', '♠Q'],
        answer: 0,
        explain: 'KQ10 ist eine unterbrochene Sequenz, also spielen Sie den König aus. Das ist sicher und beginnt, die Farbe hochzuspielen; die vierthöchste (die 8) könnte dem Alleinspieler einen billigen Stich mit dem J schenken.',
      },
      {
        q: 'Welches dieser Ausspiele gegen 4♥ ist das schlechteste?',
        options: ['Die ♦Q von ♦QJ10', 'Die ♣2 von ♣AJ62', 'Ein Pik-Single', 'Die ♣8 von ♣852'],
        answer: 1,
        explain: 'Unter dem Ass auszuspielen ist gegen einen Farbkontrakt das klassische Verlustausspiel: Der Alleinspieler macht vielleicht einen billigen Stich mit König oder Dame, und Ihr Ass wird später womöglich geschnappt.',
      },
      {
        q: 'Partner hat mit 1♠ gegengereizt, die Gegner sind in 3SA gelandet. Sie halten ♠Q85. Welche Karte spielen Sie aus?',
        options: ['♠Q', '♠8', '♠5', 'Eine andere Farbe'],
        answer: 2,
        explain: 'Spielen Sie Partners Farbe aus, und von einer Figur mit zwei kleinen Karten eine niedrige. Die Q auszuspielen könnte sie verschwenden, wenn Partner AJ hält; behalten Sie sie dagegen, kann Ihre Seite damit später eine Figur des Alleinspielers fangen.',
      },
      {
        q: 'Sie entscheiden sich, von ♦94 auszuspielen. Welche Karte?',
        options: ['♦9', '♦4', 'Egal, beide sind gleich gut', 'Keine: nie von einem Double ausspielen'],
        answer: 0,
        explain: 'Spielen Sie von einem Double die höhere Karte aus. Wenn Sie später die 4 spielen, sieht Partner hoch-tief und weiß, dass Sie zwei Karten hatten.',
      },
      {
        q: 'Wann ist ein Trumpfausspiel am attraktivsten?',
        options: ['Wenn Sie das Trumpfass halten', 'Wenn die Reizung darauf hindeutet, dass der Dummy in der Nebenfarbe des Alleinspielers kurz ist und schnappen wird', 'Wenn Sie ein Single in einer Nebenfarbe haben', 'Immer, wenn die Gegner eine Oberfarbe spielen'],
        answer: 1,
        explain: 'Trumpfausspiele verringern die Schnapper, die der Dummy machen kann. Am besten sind sie, wenn der Alleinspieler eine zweite Farbe gezeigt hat, der Dummy Präferenz gegeben hat oder der Dummy bekanntermaßen in einer Farbe kurz ist, in der Sie stark sind.',
      },
    ],
  },

  {
    id: 'duplicate-scoring',
    title: 'Die Turnierabrechnung',
    topic: 'Scoring & tactics',
    level: 'Beginner',
    summary: 'Wie ein Spiel im Turnierbridge abgerechnet wird: Stichwerte, Prämien für Teilkontrakt, Vollspiel und Schlemm, Überstiche, Unterstiche und die Wirkung von Kontra und Rekontra.',
    body: `
<h3>Jedes Spiel zählt für sich</h3>
<p>Im Turnierbridge wird jedes Spiel einzeln abgerechnet. Anders als im Robberbridge werden Teilkontrakte nicht ins nächste Spiel übertragen. Auf jedem Board ist vermerkt, wer <strong>in Gefahr</strong> ist; in Gefahr steigen sowohl die Prämien für Vollspiel und Schlemm als auch die Strafen für Unterstiche.</p>

<h3>Schritt 1: der Stichwert</h3>
<p>Für den Stichwert zählen nur gebotene und erfüllte Stiche:</p>
<table>
<thead><tr><th>Denomination</th><th>Pro gebotenem und erfülltem Stich</th></tr></thead>
<tbody>
<tr><td>♣ oder ♦</td><td>20</td></tr>
<tr><td>♥ oder ♠</td><td>30</td></tr>
<tr><td>SA</td><td>40 für den ersten Stich, 30 für jeden weiteren</td></tr>
</tbody>
</table>
<p>Kontrierte Kontrakte zählen den doppelten Stichwert, rekontrierte den vierfachen. 2♥ ist also 60 wert, 2♥ kontriert dagegen 120.</p>

<h3>Schritt 2: Prämien</h3>
<table>
<thead><tr><th>Prämie</th><th>Nicht in Gefahr</th><th>In Gefahr</th></tr></thead>
<tbody>
<tr><td>Teilkontrakt (Stichwert unter 100)</td><td>50</td><td>50</td></tr>
<tr><td>Vollspiel (Stichwert 100 oder mehr)</td><td>300</td><td>500</td></tr>
<tr><td>Kleinschlemm (Sechserstufe)</td><td>500 zusätzlich</td><td>750 zusätzlich</td></tr>
<tr><td>Großschlemm (Siebenerstufe)</td><td>1000 zusätzlich</td><td>1500 zusätzlich</td></tr>
<tr><td>Erfüllter kontrierter Kontrakt („Kontra-Prämie“)</td><td>50</td><td>50</td></tr>
<tr><td>Erfüllter rekontrierter Kontrakt</td><td>100</td><td>100</td></tr>
</tbody>
</table>
<p>Schlemmprämien kommen zur Vollspielprämie hinzu. Ein Vollspiel braucht einen Stichwert von 100: 3SA (40 + 30 + 30), 4♥ oder 4♠ (120), 5♣ oder 5♦ (100).</p>

<h3>Schritt 3: Überstiche</h3>
<p>Nicht kontrierte Überstiche zählen ihren normalen Stichwert (20, 30 bzw. 30 in SA). Kontrierte Überstiche zählen nicht in Gefahr je 100 und in Gefahr je 200, rekontrierte 200 bzw. 400.</p>

<h3>Wenn der Kontrakt fällt: Unterstiche</h3>
<table>
<thead><tr><th>Faller</th><th>Nicht in Gefahr</th><th>Nicht in Gefahr, kontriert</th><th>In Gefahr</th><th>In Gefahr, kontriert</th></tr></thead>
<tbody>
<tr><td>1</td><td>50</td><td>100</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>100</td><td>300</td><td>200</td><td>500</td></tr>
<tr><td>3</td><td>150</td><td>500</td><td>300</td><td>800</td></tr>
<tr><td>4</td><td>200</td><td>800</td><td>400</td><td>1100</td></tr>
<tr><td>5</td><td>250</td><td>1100</td><td>500</td><td>1400</td></tr>
</tbody>
</table>
<p>Kontriert und nicht in Gefahr: 100 für den ersten Unterstich, je 200 für den zweiten und dritten, danach je 300. Kontriert und in Gefahr: 200 für den ersten, je 300 für jeden weiteren. Rekontrierte Unterstiche zählen das Doppelte der kontrierten Werte.</p>

<h3>Ergebnisse, die man auswendig kennen sollte</h3>
<table>
<thead><tr><th>Genau erfüllter Kontrakt</th><th>Nicht in Gefahr</th><th>In Gefahr</th></tr></thead>
<tbody>
<tr><td>1SA</td><td>90</td><td>90</td></tr>
<tr><td>2♥ oder 2♠, 3♣ oder 3♦</td><td>110</td><td>110</td></tr>
<tr><td>2SA</td><td>120</td><td>120</td></tr>
<tr><td>3♥ oder 3♠</td><td>140</td><td>140</td></tr>
<tr><td>3SA</td><td>400</td><td>600</td></tr>
<tr><td>4♥ oder 4♠</td><td>420</td><td>620</td></tr>
<tr><td>5♣ oder 5♦</td><td>400</td><td>600</td></tr>
<tr><td>6♥ oder 6♠</td><td>980</td><td>1430</td></tr>
<tr><td>6SA</td><td>990</td><td>1440</td></tr>
<tr><td>7♠</td><td>1510</td><td>2210</td></tr>
<tr><td>7SA</td><td>1520</td><td>2220</td></tr>
<tr><td>2♥ oder 2♠ kontriert</td><td>470</td><td>670</td></tr>
<tr><td>1SA kontriert</td><td>180</td><td>180</td></tr>
</tbody>
</table>
<p>Rechenbeispiel: 4♠ mit elf Stichen, nicht in Gefahr. Stichwert 4 × 30 = 120, Vollspielprämie 300, ein Überstich 30: zusammen 450. Dasselbe Ergebnis in Gefahr: 120 + 500 + 30 = 650.</p>
<p>Rechenbeispiel: 3SA kontriert mit zehn Stichen, in Gefahr. Stichwert (40 + 30 + 30) × 2 = 200, Vollspielprämie 500, Kontra-Prämie 50, ein kontrierter Überstich 200: zusammen 950.</p>
<div class="warn">Ein Kontra kann aus einem Teilkontrakt ein Vollspiel machen: 2♥ kontriert hat einen Stichwert von 120, erfüllt bringt es also 470 oder 670 statt 110. Kontrieren Sie einen niedrigen Kontrakt nur dann zur Strafe, wenn Sie erwarten, ihn zu schlagen.</div>
<div class="tip">Beachten Sie, dass 5♣ und 3SA gleich viel zählen, 3SA aber zwei Stiche weniger braucht. Das ist ein Grund, warum Vollspiele in SA und in Oberfarben denen in Unterfarben vorgezogen werden.</div>
`,
    keyPoints: [
      'Stichwerte: Unterfarben 20, Oberfarben 30, SA 40 und dann 30; kontriert ×2, rekontriert ×4.',
      'Ein Vollspiel (Stichwert 100+) bringt nicht in Gefahr 300, in Gefahr 500; ein Teilkontrakt bringt 50.',
      'Schlemmprämien: Kleinschlemm 500/750, Großschlemm 1000/1500, zusätzlich zur Vollspielprämie.',
      'Unterstiche: nicht kontriert 50/100; kontriert nicht in Gefahr 100-300-500-800 und in Gefahr 200-500-800-1100.',
      'Ein erfüllter kontrierter Kontrakt bringt zusätzlich 50 (Kontra-Prämie), und kontrierte Überstiche sind je 100 oder 200 wert.',
    ],
    quiz: [
      {
        q: 'Sie erfüllen 4♥ genau, in Gefahr. Was schreiben Sie?',
        options: ['420', '620', '650', '600'],
        answer: 1,
        explain: 'Stichwert 4 × 30 = 120, plus die Vollspielprämie in Gefahr von 500: 620.',
      },
      {
        q: 'Sie machen in 3SA zehn Stiche, nicht in Gefahr. Was schreiben Sie?',
        options: ['400', '430', '460', '630'],
        answer: 1,
        explain: '40 + 30 + 30 = 100 für den Kontrakt, 300 für ein Vollspiel nicht in Gefahr und 30 für den Überstich: 430.',
      },
      {
        q: 'Nicht in Gefahr fällt Ihr kontrierter Kontrakt dreimal. Was schreiben die Gegner?',
        options: ['300', '500', '800', '150'],
        answer: 1,
        explain: 'Nicht in Gefahr und kontriert: 100 für den ersten Unterstich und je 200 für den zweiten und dritten: 100 + 200 + 200 = 500.',
      },
      {
        q: 'Die Gegner erfüllen 2♠ kontriert, nicht in Gefahr. Was schreiben sie?',
        options: ['110', '220', '470', '670'],
        answer: 2,
        explain: 'Kontriert beträgt der Stichwert 2 × 30 × 2 = 120, das ist ein Vollspiel: 120 + 300 Vollspielprämie + 50 Kontra-Prämie = 470.',
      },
      {
        q: 'Sie erfüllen 6♠ genau, nicht in Gefahr. Was schreiben Sie?',
        options: ['980', '1430', '920', '1010'],
        answer: 0,
        explain: 'Stichwert 6 × 30 = 180, Vollspielprämie 300 und Kleinschlemmprämie 500: 980. In Gefahr wären es 180 + 500 + 750 = 1430.',
      },
    ],
  },

  {
    id: 'establishing-long-suits',
    title: 'Lange Farben hochspielen',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Wie Sie die kleinen Karten einer langen Farbe zu Gewinnern machen und die Übergänge behalten, die Sie zum Abziehen brauchen.',
    body: `
<h3>Woher zusätzliche Stiche kommen</h3>
<p>In den meisten SA-Kontrakten stammen die zusätzlichen Stiche, die Sie brauchen, aus langen Farben. Sobald die Gegner in einer Farbe keine Karten mehr haben, ist jede Karte, die Ihnen darin noch bleibt, ein Gewinner, selbst eine 2. Kleine Karten auf diese Weise zu Gewinnern zu machen nennt man eine Farbe <strong>hochspielen</strong>.</p>

<h3>Die Runden zählen</h3>
<p>Um zu wissen, wie viele Stiche eine Farbe bringt, überlegen Sie, wie die Karten der Gegner wahrscheinlich verteilt sind. Mit A K 6 4 2 gegenüber 7 5 3 haben Sie acht Karten und die Gegner fünf. Sitzen ihre Karten 3-2 (in 68% der Fälle), sind sie nach drei Runden erschöpft: Sie gewinnen mit A und K, geben eine Runde ab, und die letzten beiden Karten sind Gewinner. Vier Stiche. Sitzen sie 4-1, brauchen Sie vier Runden, und die Farbe bringt nur drei Stiche.</p>
<table>
<thead><tr><th>Fehlende Karten</th><th>Wahrscheinlichste Verteilung</th><th>Wahrscheinlichkeit</th></tr></thead>
<tbody>
<tr><td>5</td><td>3-2</td><td>68%</td></tr>
<tr><td>6</td><td>4-2 (3-3 nur 36%)</td><td>48%</td></tr>
<tr><td>7</td><td>4-3</td><td>62%</td></tr>
</tbody>
</table>

<h3>Den unvermeidlichen Stich früh abgeben</h3>
<div class="deal" data-n="S:765 H:83 D:AK642 C:742" data-s="S:AK4 H:AQ5 D:753 C:AKJ5" data-caption="3SA von Süd. West spielt die ♠Q aus."></div>
<div class="auction" data-calls="2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Zählen:</strong> ♠AK, ♥A, ♦AK, ♣AK: sieben sichere Stiche. Zwei weitere werden gebraucht, und Karo kann sie liefern, wenn die Farbe 3-2 sitzt.</p>
<p><strong>Die Falle:</strong> Der Dummy hat außerhalb von Karo keinen Übergang. Spielen Sie ♦A, ♦K und ein drittes Karo, gewinnen die Gegenspieler die dritte Runde, und die beiden langen Karo am Tisch sind abgeschnitten. Sie machen nur sieben Stiche.</p>
<p><strong>Die Lösung:</strong> Nehmen Sie das ♠A und spielen Sie sofort aus beiden Händen ein kleines Karo – Sie <em>ducken</em> die erste Runde. Gewinnen Sie das Rückspiel der Gegenspieler, spielen Sie Karo zum Ass und ziehen Sie den König ab; sitzt die Farbe 3-2, haben die Gegner jetzt kein Karo mehr, und Sie sind noch am Tisch, um die beiden langen Karo abzuziehen. Neun Stiche: zwei Pik, ein Coeur, vier Karo und zwei Treff.</p>
<p>Das Ducken kostet nichts: Einen Karostich mussten Sie ohnehin abgeben. Durch das Ducken geben Sie ihn nur zu einem Zeitpunkt ab, an dem der Dummy noch A und K hat, um wieder hinzukommen.</p>
<div class="tip">Muss eine Farbe einen Stich abgeben und hat die lange Hand wenige Übergänge, dann geben Sie diesen Stich in der ersten Runde ab, nicht in der letzten.</div>

<h3>Deblockieren: hohe Karten zuerst aus der kurzen Hand</h3>
<p>Mit ♣KQ3 gegenüber ♣A8642 spielen Sie zuerst König und Dame und gehen dann mit der 3 zum Ass hinüber. Ziehen Sie zuerst das Ass ab, bleiben K und Q allein in einer Hand zurück, und die Farbe ist blockiert: Ohne Übergang in einer anderen Farbe kommen Sie nicht mehr an die langen Karten. Dasselbe gilt immer, wenn eine Hand kurz ist: Ziehen Sie zuerst die Figuren der kurzen Hand ab.</p>

<h3>Die hohen Karten der Gegner austreiben</h3>
<p>Manche Farben haben gar kein Problem mit kleinen Karten; bei ihnen muss nur das Ass der Gegner ausgetrieben werden. KQJ10 gegenüber kleinen Karten bringt drei Stiche, sobald das Ass weg ist. Beginnen Sie solche Farben früh, solange Sie in den anderen Farben noch Stopper haben, damit die Gegenspieler nicht zuerst ihre eigene lange Farbe hochspielen.</p>

<h3>Welche Farbe hochspielen?</h3>
<ul>
<li>Bevorzugen Sie die Farbe, die am wenigsten Stiche abgeben muss und mit der wahrscheinlichsten Verteilung auskommt.</li>
<li>Geben Sie das Spiel lieber an den Gegner ab, der Ihnen nicht schaden kann (siehe die Lektionen „Hold-up und Übergänge“ und „Vermeidungsspiel: den gefährlichen Gegner fernhalten“).</li>
<li>Prüfen Sie die Übergänge: Eine Farbe, die Sie hochspielen, aber nie erreichen können, ist nichts wert.</li>
<li>Im Farbkontrakt werden lange Nebenfarben genauso hochgespielt, oft indem Sie die kleinen Karten in der Hand mit den langen Trümpfen schnappen, bis die restlichen hoch sind.</li>
</ul>
<div class="warn">Ziehen Sie nicht erst alle sicheren Stiche ab, „um zu sehen, was passiert“. Jeder Gewinner, den Sie abziehen, macht auch Karten der Gegenspieler hoch und zerstört Ihre eigenen Übergänge und Stopper.</div>
`,
    keyPoints: [
      'Kleine Karten werden zu Gewinnern, sobald die Gegner keine Karten der Farbe mehr haben.',
      'Zählen Sie die Runden: Fehlen fünf Karten, braucht eine 3-2-Verteilung (68%) drei Runden.',
      'Ducken Sie die Runde, die Sie abgeben müssen, solange die lange Hand ihre hohen Karten noch als Übergänge hat.',
      'Deblockieren Sie, indem Sie zuerst die Figuren der kurzen Hand abziehen.',
      'Beginnen Sie Ihre lange Farbe früh, bevor die Gegenspieler ihre hochspielen.',
    ],
    quiz: [
      {
        q: 'Sie halten A K 6 4 2 gegenüber 7 5 3. Wie viele Stiche kann die Farbe bringen, wenn die fünf fehlenden Karten 3-2 sitzen?',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explain: 'Nach drei Runden ist eine 3-2-Verteilung erschöpft. Zwei dieser Runden gewinnen Sie, eine geben Sie ab; die beiden restlichen Karten der langen Hand sind Gewinner: 4 Stiche.',
      },
      {
        q: 'Warum ducken Sie im 3SA-Spiel oben die erste Karorunde?',
        options: ['Um herauszufinden, wer die Dame hat', 'Um ♦A und ♦K als Übergänge zu den langen Karo zu behalten', 'Für ein Hold-up in Pik', 'Weil Ducken immer einen zusätzlichen Stich bringt'],
        answer: 1,
        explain: 'Der Dummy hat keinen Übergang in einer anderen Farbe. Wenn Sie den unvermeidlichen Karostich zuerst abgeben, können Sie nach A und K die langen Karten abziehen, ohne noch einmal zum Dummy gelangen zu müssen.',
      },
      {
        q: 'Sie halten ♣KQ3 in der Hand und ♣A8642 am Tisch, ohne anderen Übergang zum Tisch. Wie spielen Sie Treff?',
        options: ['Zuerst das Ass, dann König und Dame', 'Zuerst König und Dame, dann ein kleines Treff zum Ass', 'Die 2 vom Tisch spielen', 'Das ist egal'],
        answer: 1,
        explain: 'Ziehen Sie zuerst die Figuren der kurzen Hand ab. Nach K und Q können Sie mit der 3 noch zum Ass hinübergehen und, wenn die Farbe 3-2 saß, die langen Karten abziehen. Spielen Sie zuerst das Ass, blockieren K und Q die Farbe.',
      },
      {
        q: 'Die Gegner halten sechs Karten einer Farbe. Wie oft sitzen sie 3-3?',
        options: ['36%', '48%', '50%', '68%'],
        answer: 0,
        explain: 'Fehlt eine gerade Zahl von Karten, ist eine gleichmäßige Verteilung seltener, als man denkt: 3-3 kommt in etwa 36% der Fälle vor, 4-2 in etwa 48%.',
      },
    ],
  },

  {
    id: 'finesses',
    title: 'Schnitte',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Wie Sie mit Karten, die nicht die höchsten sind, Stiche gewinnen, indem Sie in ihre Richtung spielen – und wann Sie schneiden, statt auf Fall zu spielen.',
    body: `
<h3>Die Idee</h3>
<p>Ein Schnitt ist der Versuch, einen Stich mit einer Karte zu gewinnen, die nicht die höchste im Spiel ist, indem Sie sie <em>nach</em> dem Gegner spielen, der die höhere Karte hält. Dazu spielen Sie <strong>in Richtung</strong> der Karte, die den Stich gewinnen soll.</p>
<p>Der einfachste Fall: Der Dummy (Nord) hat ♠A Q, Sie (Süd) haben zwei kleine Pik. Spielen Sie ein kleines Pik aus Ihrer Hand. Gibt West klein zu, spielen Sie die Dame. Hat West den König, gewinnt die Dame; hat ihn Ost, verliert sie. In jedem Fall bleibt das Ass ein Gewinner. Ein einfacher Schnitt gelingt in der Hälfte der Fälle, und der Versuch kostet nichts, wenn Sie die Farbe ohnehin spielen müssen.</p>

<h3>In Richtung einer Figur spielen</h3>
<p>Mit K 5 am Tisch und 6 4 in der Hand spielen Sie aus der Hand in Richtung König. Hält West das Ass, macht der König einen Stich: Nimmt West das Ass, ist der König hoch; duckt West, gewinnt der König. Spielen Sie dagegen den König vom Tisch aus, kann er nie gewinnen, solange das Ass draußen ist.</p>
<div class="warn">Eine Figur auszuspielen ist nur richtig, wenn Sie es sich leisten können, dass sie gedeckt wird, also wenn Sie die Karten direkt darunter halten. Spielen Sie die Dame von Q J 10 gegenüber A 3 2 aus, aber nicht von Q 3 2 in der Hand gegenüber A 5 4 am Tisch: Wird die Dame gedeckt, haben Sie nichts mehr, das hoch werden könnte. Spielen Sie stattdessen vom Tisch klein in Richtung Dame; sie macht dann einen Stich, wann immer Ost den König hält.</div>

<h3>Wiederholte Schnitte und Doppelschnitte</h3>
<table>
<thead><tr><th>Kombination</th><th>Spielweise</th><th>Ergebnis</th></tr></thead>
<tbody>
<tr><td>A Q gegenüber 3 2</td><td>In Richtung A Q spielen und mit der Q schneiden</td><td>2 Stiche 50%</td></tr>
<tr><td>K 5 gegenüber 6 4</td><td>In Richtung K spielen</td><td>1 Stich 50%</td></tr>
<tr><td>A Q 10 gegenüber 4 3 2</td><td>Mit der 10 schneiden, später mit der Q</td><td>3 Stiche 25%, mindestens 2 Stiche 75%</td></tr>
<tr><td>A J 10 gegenüber 4 3 2</td><td>Mit der 10 (oder dem J) schneiden; verliert der Schnitt, noch einmal schneiden</td><td>2 Stiche 75% (scheitert nur, wenn K und Q beide falsch sitzen)</td></tr>
<tr><td>A K J gegenüber 4 3 2</td><td>Mit dem J schneiden</td><td>3 Stiche etwa 50%</td></tr>
</tbody>
</table>
<p>Ein Doppelschnitt gelingt, wenn mindestens eine der beiden fehlenden Figuren gut sitzt. Jede Figur sitzt unabhängig von der anderen bei West oder bei Ost; die Chance, dass beide falsch sitzen, beträgt also ½ × ½ = 25%.</p>

<h3>Schneiden oder auf Fall spielen? „Mit acht immer, mit neun nie“</h3>
<p>Wenn Ihnen die Dame fehlt und Sie keine weiteren Anhaltspunkte haben:</p>
<ul>
<li>Mit <strong>acht</strong> Karten (fünf fehlen) schneiden Sie. Der Schnitt (nachdem Sie zuerst das Ass abgezogen haben, falls die Dame blank sitzt) gelingt mit A K J x x in etwa 40% der Fälle (mit A K J 10 x in etwa 51%); auf den Fall der Dame zu spielen klappt nur in etwa 33%.</li>
<li>Mit <strong>neun</strong> Karten (vier fehlen) ziehen Sie Ass und König ab und hoffen, dass die Dame fällt. Das klappt in etwa 53% der Fälle, der Schnitt in etwa 51%.</li>
</ul>
<p>Die Regel entscheidet nur bei Gleichstand. Informationen aus der Reizung (wer eröffnet oder gesperrt hat, hält den Großteil der hohen Karten bzw. der Länge) oder aus dem bisherigen Spiel wiegen schwerer als diese kleinen Unterschiede.</p>

<h3>Ein Schnitt in der Praxis</h3>
<div class="deal" data-n="S:7432 H:Q52 D:QJ7 C:KQ6" data-s="S:AQJ105 H:AK3 D:K84 C:A5" data-caption="6♠ von Süd. West spielt den ♥J aus."></div>
<p>Das ♦A müssen Sie abgeben, der Schlemm hängt also davon ab, keinen Trumpfstich zu verlieren. Der ♠K fehlt, und mit neun Trümpfen schneiden Sie gegen ihn: Fangen können Sie ihn nur, wenn Ost ihn hält, denn Ost spielt vor Ihrem A Q J 10 (oder wenn West einen blanken König hat).</p>
<p>Gewinnen Sie das Ausspiel mit der ♥Q am Tisch, damit Sie in der richtigen Hand sind, und spielen Sie einen kleinen Trumpf. Gibt Ost klein zu, legen Sie die 10 (oder den J). Gewinnt diese Karte, müssen Sie den Schnitt vielleicht wiederholen; gehen Sie also mit dem ♣K zum Tisch zurück und spielen Sie noch einmal Trumpf. Die Übergänge für einen wiederholten Schnitt zu planen gehört dazu: Der Dummy hat zwei schnelle Übergänge (die ♥Q und den ♣K), und Sie sollten sie für die Trumpffarbe nutzen, statt sie zu verschwenden.</p>
<div class="tip">Die Regel „mit acht immer, mit neun nie“ betrifft die Dame. Fehlt Ihnen der König, schneiden Sie auch mit neun oder zehn Karten; erst mit elf Karten ist das Spiel auf Fall etwas besser (52%).</div>
`,
    keyPoints: [
      'Spielen Sie in Richtung der Karte, die gewinnen soll; ein einfacher Schnitt ist eine 50%-Chance.',
      'Spielen Sie für einen Schnitt nur dann eine Figur aus, wenn Sie die Karten direkt darunter halten.',
      'Ein Doppelschnitt (A Q 10, A J 10) bringt in 75% der Fälle mindestens einen zusätzlichen Stich.',
      'Fehlt die Dame: mit acht Karten schneiden, mit neun auf Fall spielen („mit acht immer, mit neun nie“).',
      'Planen Sie Ihre Übergänge für wiederholte Schnitte.',
    ],
    quiz: [
      {
        q: 'Der Dummy hat ♥A Q, Sie haben ♥7 4. Wie spielen Sie Coeur, um zwei Stiche zu versuchen?',
        options: ['Das Ass abziehen, dann die Dame ausspielen', 'Die Dame vom Tisch ausspielen', 'Ein kleines Coeur aus der Hand spielen und die Dame legen, wenn West klein zugibt', 'Das Ass spielen und hoffen, dass der König fällt'],
        answer: 2,
        explain: 'Die Dame kann nur gewinnen, wenn sie nach dem König gespielt wird. Spielen Sie aus der Hand, damit West vor dem Dummy spielen muss; hat West den König, gewinnt die Dame.',
      },
      {
        q: 'Mit A Q 10 am Tisch und 4 3 2 in der Hand: Wie oft bringt Ihnen der Doppelschnitt mindestens zwei Stiche?',
        options: ['25%', '50%', '75%', '90%'],
        answer: 2,
        explain: 'Sie machen mindestens zwei Stiche, außer wenn K und J beide bei Ost sitzen. Jede der beiden Karten sitzt in der Hälfte der Fälle bei West, beide sitzen also nur in ¼ der Fälle falsch.',
      },
      {
        q: 'Sie halten A K J 5 2 gegenüber 6 4 3 (acht Karten), die Dame fehlt. Was ist ohne Hinweise aus der Reizung das beste Spiel?',
        options: ['Ass und König abziehen', 'Das Ass abziehen, dann mit dem Buben schneiden', 'Den Buben ausspielen', 'Eine Runde ducken'],
        answer: 1,
        explain: 'Mit acht Karten ist der Schnitt (etwa 40%, wobei Sie zuerst das Ass abziehen, falls die Dame blank sitzt) besser als das Spiel auf Fall (etwa 33%).',
      },
      {
        q: 'Sie halten A K J 5 4 gegenüber 7 6 3 2 (neun Karten), die Dame fehlt. Was ist ohne Hinweise das beste Spiel?',
        options: ['Ass und König abziehen', 'Sofort mit dem Buben schneiden', 'Den Buben ausspielen', 'Eine Runde ducken'],
        answer: 0,
        explain: '„Mit neun nie“: Fehlen nur vier Karten, fällt die Dame unter Ass und König in etwa 53% der Fälle, etwas öfter, als der Schnitt gelingt (etwa 51%).',
      },
      {
        q: 'Der Dummy hat ♦K 7 3, Sie haben ♦8 4 2. Wie geben Sie sich die beste Chance auf einen Stich?',
        options: ['Den König vom Tisch ausspielen', 'Aus der Hand klein in Richtung König spielen', 'Klein vom Tisch spielen', 'Warten, bis die Gegenspieler die Farbe anspielen'],
        answer: 1,
        explain: 'Wenn Sie in Richtung König spielen, gewinnen Sie einen Stich, wann immer West das Ass hält. Spielen Sie den König aus, verliert er gegen das Ass, egal wo es sitzt.',
      },
    ],
  },

  {
    id: 'second-and-third-hand',
    title: 'Zweite Hand tief, dritte Hand hoch',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Die Grundregeln für Gegenspieler an zweiter und dritter Stelle eines Stichs, wann man sie bricht und wann man eine Figur mit einer Figur deckt.',
    body: `
<h3>Zweite Hand tief</h3>
<p>Spielt der Alleinspieler eine kleine Karte in Richtung Dummy (oder vom Dummy in Richtung seiner Hand), sollte der Gegenspieler an zweiter Stelle meist <strong>tief</strong> zugeben. Partner spielt als Letzter zum Stich und kann ihn oft billig gewinnen, während Ihre hohe Karte erhalten bleibt, um später eine Figur des Alleinspielers zu fangen.</p>
<p>Beispiel: Der Dummy hat ♠K J 5, und der Alleinspieler spielt aus der Hand ein kleines Pik in diese Richtung. Sie sitzen an zweiter Stelle mit ♠A 7 3. Nehmen Sie das Ass, fangen Sie nur kleine Karten, und K und J am Tisch bleiben beide für später. Geben Sie klein zu, muss der Alleinspieler raten: Legt er den Buben und Partner hält die Dame, macht Ihre Seite zwei Stiche; legt er den König, kommt Ihr Ass später trotzdem zum Stich.</p>

<h3>Wann die zweite Hand hoch spielen sollte</h3>
<ul>
<li><strong>Um den Stich abzuziehen, der den Kontrakt schlägt</strong>, oder einen Stich, den Sie nicht verlieren dürfen – etwa wenn der Alleinspieler gleich seine Verlierer abwerfen will.</li>
<li><strong>Wenn eine Figur ausgespielt wird</strong>: Dann stellt sich die Frage, ob Sie decken (siehe unten).</li>
<li><strong>Um aufeinanderfolgende Figuren zu splitten.</strong> Angenommen, der Dummy hat K 10 3, der Alleinspieler A 6 2, und Sie sitzen mit Q J 4 vor dem Dummy. Spielt der Alleinspieler klein und Sie geben klein zu, schneidet er mit der 10, zieht dann A und K ab, und Ihre Q und Ihr J fallen beide: kein Stich für Sie. Legen Sie in der ersten Runde den J (und die Q, wenn der Alleinspieler das nächste Mal in Richtung Dummy spielt), machen Sie sicher einen Stich.</li>
</ul>

<h3>Dritte Hand hoch</h3>
<p>Spielt Partner eine kleine Karte aus und der Dummy gibt klein zu, spielen Sie Ihre <strong>höchste</strong> Karte: So gewinnt der Alleinspieler den Stich nicht billig, oder Sie treiben seine hohe Karte heraus und werten Partners Karten auf.</p>
<ul>
<li>Mit aufeinanderfolgenden hohen Karten spielen Sie die <strong>niedrigste</strong> davon: von K Q 5 die Q, von Q J 4 den J. Partner kann dann ablesen, wo die höhere Karte sitzt.</li>
<li>Spielen Sie nur so hoch wie nötig. Hat der Dummy die 9 gespielt und Sie halten Q 10 2, genügt die 10.</li>
<li><strong>Schneiden Sie gegen den Dummy.</strong> Hat der Dummy K 7 3 und gibt klein zu, und Sie halten A J 4, spielen Sie den J. Der König am Tisch ist unter Ihrem Ass gefangen: Hält der Alleinspieler die Dame, gewinnt er diesen Stich, aber Ihr Ass sitzt weiterhin hinter dem K; hält Partner die Dame, gewinnt der J.</li>
</ul>

<h3>Figur mit Figur decken</h3>
<p>Wird eine Figur ausgespielt und Sie halten eine höhere, zwingen Sie den Alleinspieler durch Decken, zwei seiner hohen Karten zu verwenden, um eine Ihrer Figuren zu fangen. Dadurch kann eine niedrigere Karte wie eine 10 oder 9 in Ihrer Hand oder der des Partners hoch werden.</p>
<table>
<thead><tr><th>Platz</th><th>Karo</th></tr></thead>
<tbody>
<tr><td>Nord (Dummy)</td><td>J 7 3</td></tr>
<tr><td>West (Partner)</td><td>10 2</td></tr>
<tr><td>Ost (Sie)</td><td>Q 9 4</td></tr>
<tr><td>Süd (Alleinspieler)</td><td>A K 8 6 5</td></tr>
</tbody>
</table>
<p>Der Alleinspieler spielt den ♦J vom Tisch. Geben Sie klein zu, gewinnt der J, und A und K holen danach Ihre Dame heraus: Der Alleinspieler verliert keinen Stich. Decken Sie mit der Q, gewinnt der Alleinspieler mit dem A und zieht den K ab, wobei Partners 10 fällt – aber jetzt ist Ihre 9 höher als jedes Karo, das dem Alleinspieler noch bleibt. Das Decken hat aus dem Nichts einen Stich geschaffen.</p>

<h4>Wann Sie nicht decken</h4>
<ul>
<li>Wenn die ausgespielte Figur eine von mehreren aufeinanderfolgenden Figuren ist (der Dummy hat Q J 10 4 und spielt die Q aus): Warten Sie und decken Sie, wenn überhaupt, die letzte davon.</li>
<li>Wenn es offensichtlich nichts aufzuwerten gibt, etwa in der Trumpffarbe, wenn der Alleinspieler eine lange, starke Farbe gezeigt hat.</li>
<li>Wenn die Figur aus der Hand des Alleinspielers kommt und Decken ihm nur helfen würde, die Farbe verlustlos zu spielen: Überlegen Sie, was der Alleinspieler hält, bevor Sie reagieren.</li>
</ul>
<div class="tip">Ob Sie decken, ist eine Frage der Aufwertung. Fragen Sie sich: „Welche unserer Karten könnte zum Gewinner werden, wenn ich decke?“ Lautet die Antwort „keine“, decken Sie nicht.</div>
<div class="warn">Zögern Sie nicht erst und geben dann klein zu: Die Pause verrät dem Alleinspieler, dass Sie die fehlende Figur halten. Denken Sie über solche Situationen nach, sobald der Dummy aufliegt, damit Sie bereit sind, wenn sie eintreten.</div>
`,
    keyPoints: [
      'Zweite Hand tief: Behalten Sie Ihre hohen Karten, um Figuren des Alleinspielers zu fangen; Partner spielt als Letzter.',
      'Brechen Sie die Regel, um den Stich zu machen, der den Kontrakt schlägt, oder um aufeinanderfolgende Figuren zu splitten.',
      'Dritte Hand hoch – aber die niedrigste von aufeinanderfolgenden Karten und nur so hoch wie nötig.',
      'Schneiden Sie gegen die Figur des Dummys, wenn Sie hinter ihr sitzen.',
      'Decken Sie eine Figur mit einer Figur, wenn dadurch eine Karte Ihrer Seite hoch werden kann; decken Sie nicht die erste von aufeinanderfolgenden Figuren.',
    ],
    quiz: [
      {
        q: 'Der Alleinspieler spielt aus der Hand eine kleine Karte in Richtung K J 5 am Tisch. Sie halten an zweiter Stelle A 7 3. Was spielen Sie normalerweise?',
        options: ['Das Ass', 'Eine kleine Karte', 'Die 7, als Markierung', 'Das ist nie wichtig'],
        answer: 1,
        explain: 'Zweite Hand tief. Mit dem Ass fangen Sie nur kleine Karten, und K und J am Tisch bleiben beide im Spiel. Geben Sie klein zu, muss der Alleinspieler raten, und vielleicht hält Partner die Dame.',
      },
      {
        q: 'Partner spielt gegen 3SA eine kleine Karte aus. Der Dummy hat 7 5 2 und gibt klein zu. Sie halten K Q 8. Welche Karte spielen Sie?',
        options: ['K', 'Q', '8', 'Eine der beiden Figuren'],
        answer: 1,
        explain: 'Dritte Hand hoch, die niedrigste von aufeinanderfolgenden Karten: die Q. Treibt sie das Ass heraus, weiß Partner, dass Sie auch den K halten.',
      },
      {
        q: 'Partner spielt klein aus. Der Dummy hat K 7 3 und gibt klein zu. Sie halten A J 4. Welche Karte spielen Sie?',
        options: ['A', 'J', '4', 'Der K liegt am Tisch, also ist es egal'],
        answer: 1,
        explain: 'Schneiden Sie gegen den Dummy: Der J gewinnt, wenn Partner die Q hat, und Ihr Ass bleibt hinter dem König am Tisch. Mit dem Ass würden Sie den König am Tisch hochmachen.',
      },
      {
        q: 'Der Dummy hält ♠Q J 10 4, und die Q wird ausgespielt. Sie halten ♠K 6 3 hinter dem Dummy. Sollten Sie decken?',
        options: ['Ja, eine Figur immer decken', 'Nein, nicht die erste von aufeinanderfolgenden Figuren decken', 'Nur wenn Partner markiert hat', 'Ja, mit der 6'],
        answer: 1,
        explain: 'Decken Sie die Q, gewinnt der Alleinspieler mit dem Ass, und J und 10 sind hoch. Warten Sie: Spielt der Alleinspieler weiter Figuren aus, decken Sie die letzte – erst dann kann Decken etwas aufwerten.',
      },
      {
        q: 'Warum deckt man eine Figur mit einer Figur?',
        options: ['Um den Stich zu gewinnen', 'Damit der Alleinspieler zwei Figuren für eine Ihrer Figuren aufwenden muss und eine niedrigere Karte Ihrer Seite hoch wird', 'Um Partner Ihre Stärke zu zeigen', 'Um den Alleinspieler zum Schnappen zu zwingen'],
        answer: 1,
        explain: 'Durch Decken gewinnt man selten den Stich selbst. Sein Wert liegt in der Aufwertung: Sind zwei Figuren des Alleinspielers weg, kann eine niedrigere Karte wie eine 10 oder 9 zum Gewinner werden.',
      },
    ],
  },
];
