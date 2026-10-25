// Lessons, part 2.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_2: Lesson[] = [
  {
    id: 'responders-rebid-and-choosing-game',
    title: 'Wiedergebot des Antwortenden und Vollspielwahl',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Wie der Antwortende mit seinem zweiten Gebot abschließt, einlädt oder forciert und wie man zwischen Oberfarbe, 3SA und fünf in Unterfarbe wählt.',
    body: `
<h3>Der Antwortende wird zum Kapitän</h3>
<p>Nach dem Wiedergebot des Eröffners kennen Sie seine Stärke meist auf drei oder vier Punkte genau und wissen schon einiges über seine Verteilung. Ihr zweites Gebot sollte das Paar in den richtigen Kontrakt bringen oder noch eine Frage stellen. Denken Sie in drei Bereichen:</p>
<table>
<thead><tr><th>Antwortender</th><th>Ziel</th><th>Typische Gebote</th></tr></thead>
<tbody>
<tr><td>6–10</td><td>Im besten Teilkontrakt abschließen</td><td>Passe; Präferenz für die erste Farbe des Eröffners; eine Sechserlänge wiederholen; 1SA</td></tr>
<tr><td>11–12</td><td>Zum Vollspiel einladen</td><td>2SA; Hebung der Farbe des Eröffners auf die Dreierstufe; Sprung in einer guten eigenen Sechserlänge</td></tr>
<tr><td>13+</td><td>Das Vollspiel sicherstellen</td><td>Das Vollspiel direkt reizen oder mit einer neuen Farbe (forcierend) das richtige suchen</td></tr>
</tbody>
</table>
<p>Zwei künstliche Gebote helfen dem Antwortenden, zu fragen statt zu raten: <strong>Neue Unterfarbe forcierend</strong> nach dem 1SA-Wiedergebot des Eröffners und <strong>Vierte Farbe forcierend</strong>, wenn bereits drei Farben gereizt wurden. Beide haben eine eigene Lektion.</p>

<h3>Beispiele</h3>
<div class="auction" data-calls="1D P 1S P 1NT P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ85 H:A73 D:J4 C:Q962" data-label="Antwortender: 2SA"></div>
<p>Der Eröffner hat 12–14 FP ausgeglichen gezeigt. Mit Ihren 12 FP hat das Paar 24–26: Laden Sie mit 2SA ein. Der Eröffner passt mit 12 Punkten und reizt mit 14 Punkten 3SA (mit 13 entscheidet er nach eigenem Urteil). Mit 13+ würden Sie selbst 3SA reizen, mit 10 oder weniger passen.</p>
<div class="auction" data-calls="1H P 1S P 2H P" data-dealer="N"></div>
<div class="hand" data-cards="S:AQ974 H:Q3 D:K82 C:J105" data-label="Antwortender: 3♥"></div>
<p>Der Eröffner hat ein Minimum mit sechs Coeur, also reicht Q3 als Unterstützung für einen 8er-Fit. 12 Punkte gegenüber 12–15: Laden Sie mit 3♥ ein. Ist der Eröffner im oberen Bereich, reizt er 4♥.</p>

<h4>Präferenz</h4>
<p>Zeigt der Eröffner zwei Farben und Sie haben in keiner einen Fit, wählen Sie möglichst billig zwischen ihnen. Die erste Farbe des Eröffners ist mindestens so lang wie die zweite; bei gleicher Länge gehen Sie also zur ersten zurück. Nach 1♥ – 1♠ – 2♣ reizen Sie mit ♥Q43 und ♣97 2♥: Das zeigt keine Extrastärke, sondern nur die bessere Trumpffarbe. Mit ♥4 und ♣J973 passen Sie auf 2♣.</p>

<h3>Die Wahl des Vollspiels</h3>
<ol>
<li><strong>8er-Fit in Oberfarbe? Spielen Sie in der Oberfarbe.</strong> Ein 4-4- oder 5-3-Fit bringt meist mindestens einen Stich mehr als Sans Atout, weil die Hand mit den kürzeren Trümpfen schnappen kann. Selbst mit zwei ausgeglichenen Händen ist 4♥ oder 4♠ in der Regel richtig.</li>
<li><strong>Kein Fit in Oberfarbe? Ziehen Sie 3SA vor</strong>, sofern jede ungereizte Farbe gestoppt ist. 3SA braucht neun Stiche, fünf in Unterfarbe braucht für dasselbe Ergebnis (400 oder 600) elf.</li>
<li><strong>Fünf in Unterfarbe</strong> ist für Hände mit einem großen Fit in Unterfarbe und einer Farbe, die die Gegner in SA abziehen könnten, oder mit Kürzen, die Schnappstiche bringen.</li>
</ol>
<table>
<thead><tr><th>Kontrakt</th><th>Benötigte Punkte zusammen (ungefähr)</th></tr></thead>
<tbody>
<tr><td>3SA, 4♥, 4♠</td><td>25–26</td></tr>
<tr><td>5♣, 5♦</td><td>28–29</td></tr>
<tr><td>Kleinschlemm</td><td>33</td></tr>
<tr><td>Großschlemm</td><td>37</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K72 H:A85 D:AQ963 C:J4" data-s="S:A93 H:Q76 D:KJ84 C:K102" data-caption="1♦ – 2SA – 3SA. Süd ist Alleinspieler."></div>
<div class="auction" data-calls="1D P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Nord-Süd haben 27 FP und einen 9er-Fit in Karo, aber keinen Fit in Oberfarbe, und jede Farbe ist gestoppt. In 3SA haben Sie acht sichere Stiche: zwei in Pik, einen in Coeur und fünf in Karo. Den neunten liefert Treff, sobald das ♣A (und vielleicht die ♣Q) herausgetrieben ist. In 5♦ brauchen Sie elf Stiche und haben einen Pik-Verlierer, mindestens einen Coeur-Verlierer und mindestens einen Treff-Verlierer. 3SA ist das weit bessere Vollspiel.</p>

<h3>Die Grenzen von „25 Punkte für das Vollspiel“</h3>
<ul>
<li><strong>Fit:</strong> Mit einem 9er- oder 10er-Fit und Kürzen kann das Vollspiel schon mit 22–23 Punkten gehen. Bei einem Misfit reichen auch 26 womöglich nicht.</li>
<li><strong>Doppelte Werte:</strong> Figuren gegenüber einer Kürze sind verschwendet. ♠KQJ gegenüber einem Pik-Single trägt im Farbkontrakt wenig bei.</li>
<li><strong>Flache Verteilungen:</strong> Zwei 4-3-3-3-Hände bringen weniger Stiche; ziehen Sie einen Punkt ab.</li>
<li><strong>Stichquellen:</strong> Eine lange, geschlossene Farbe gleicht fehlende Punkte aus. Mit sechs durchlaufenden Karo kann 3SA schon mit 23 FP erfüllt werden.</li>
<li><strong>Stopper:</strong> 3SA mit einer völlig offenen Farbe scheitert, ganz gleich, wie viele Punkte Sie haben.</li>
</ul>
<div class="tip">Mit 13+ Punkten gegenüber einer Eröffnung geben Sie nie ein Gebot ab, das der Partner unterhalb des Vollspiels passen kann. Wenn Sie nicht wissen, wo Sie spielen wollen, reizen Sie eine neue Farbe: Eine neue Farbe des Antwortenden ist forcierend.</div>
<div class="warn">Reizen Sie einen hoffnungslosen Misfit nicht immer weiter. Wenn der Partner ständig seine Farbe wiederholt und Sie Ihre, ist der richtige Kontrakt meist der niedrigste, der noch zu haben ist.</div>
`,
    keyPoints: [
      'Zweites Gebot des Antwortenden: mit 6–10 abschließen, mit 11–12 einladen, mit 13+ das Vollspiel sicherstellen.',
      'Bei gleicher Länge geben Sie Präferenz für die erste Farbe des Eröffners.',
      'Mit einem 8er-Fit in Oberfarbe spielt man meist das Vollspiel in dieser Oberfarbe.',
      'Ohne Fit in Oberfarbe ziehen Sie 3SA fünf in Unterfarbe vor, wenn alle Farben gestoppt sind.',
      'Etwa 25 Punkte für 3SA oder vier in Oberfarbe, 29 für fünf in Unterfarbe, 33 für einen Kleinschlemm; korrigieren Sie nach Fit und Verteilung.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠ – 1SA – ? Sie halten ♠AJ84 ♥K5 ♦Q73 ♣Q1062 (12 FP).',
        options: ['Passe', '2SA', '3SA', '2♠'],
        answer: 1,
        explain: 'Der Eröffner hat 12–14, zusammen sind es also 24–26: Laden Sie mit 2SA ein. Mit Maximum reizt der Eröffner 3SA.',
      },
      {
        q: '1♥ – 1♠ – 2♣ – ? Sie halten ♠KJ753 ♥Q43 ♦J86 ♣97 (7 FP).',
        options: ['Passe', '2♥', '2♠', '2SA'],
        answer: 1,
        explain: 'Der Eröffner hat mindestens fünf Coeur, Sie haben also einen 8er-Fit. 2♥ ist einfache Präferenz und zeigt keine Extrastärke.',
      },
      {
        q: 'Sie haben zusammen 26 FP, einen 4-4-Fit in Pik und zwei ausgeglichene Hände. Welches Vollspiel?',
        options: ['3SA', '4♠', '5♣', 'Reine Glückssache'],
        answer: 1,
        explain: 'Der 4-4-Fit bringt meist einen Extrastich: Eine Hand kann schnappen, während die Trümpfe der anderen noch die gegnerischen Trümpfe ziehen. Spielen Sie 4♠.',
      },
      {
        q: 'Sie haben 27 FP, keinen Fit in Oberfarbe, einen 9er-Fit in Karo, und alle Farben sind gestoppt. Welches Vollspiel?',
        options: ['5♦', '3SA', '4♦', '6♦'],
        answer: 1,
        explain: '3SA braucht neun Stiche, 5♦ elf, und beide bringen gleich viel. Wenn jede Farbe gestoppt ist, ist 3SA das Vollspiel mit den besseren Chancen.',
      },
      {
        q: 'Warum kann das Vollspiel mit 26 FP scheitern?',
        options: ['Gar nicht: Mit 26 FP geht das Vollspiel immer', 'Wegen Misfits, doppelter Werte oder einer ungestoppten Farbe', 'Weil 26 FP eine Schlemmhand sind', 'Nur wenn die Trümpfe 4-1 stehen'],
        answer: 1,
        explain: 'Punkte schätzen die Stichkraft, aber die Stiche hängen auch vom Fit ab, davon, ob die Figuren mitarbeiten, und in SA von den Stoppern.',
      },
    ],
  },

  {
    id: 'strong-openings',
    title: 'Die starken Eröffnungen 2♣ und 2SA',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Wann Sie 2♣ oder 2SA eröffnen, wie der Partner antwortet und wie die starken ausgeglichenen Bereiche zusammenpassen.',
    body: `
<h3>2♣: die ganz große Eröffnung</h3>
<p>2♣ ist künstlich und sagt nichts über Treff aus. Es zeigt entweder <strong>22+ FP</strong> oder etwa <strong>neun Spielstiche</strong> (mit einer Oberfarbe; mit einer Unterfarbe möchte man meist zehn haben, da ein Vollspiel in Unterfarbe elf Stiche braucht). Es ist die einzige forcierende Eröffnung: Der Partner muss auch mit gar nichts antworten.</p>
<div class="hand" data-cards="S:AKQJ975 H:AK4 D:8 C:K2" data-label="2♣ eröffnen: neun Spielstiche"></div>
<p>Nur 20 FP, aber zählen Sie die Stiche: sieben in Pik und zwei in Coeur, mit Chancen auf einen zehnten. Bei einer 1♠-Eröffnung riskieren Sie, dass der Partner mit einer Hand wie ♠83 ♥J852 ♦Q964 ♣Q83 (5 FP) passt, obwohl 4♠ ein ausgezeichneter Kontrakt ist. Eröffnen Sie 2♣ und reizen Sie danach 2♠.</p>
<div class="hand" data-cards="S:AK5 H:KQ4 D:AQJ2 C:KJ7" data-label="2♣ eröffnen, dann 2SA"></div>
<p>23 FP ausgeglichen: 2♣ mit anschließendem 2SA zeigt 22–24.</p>

<h3>Antworten auf 2♣</h3>
<table>
<thead><tr><th>Antwort</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>2♦</td><td>Wartegebot: die normale Antwort mit den meisten Händen, ob schwach oder stark</td></tr>
<tr><td>2♥, 2♠, 3♣, 3♦</td><td>Positiv: eine gute Fünferlänge (zwei der drei höchsten oder drei der fünf höchsten Figuren) und 8+ FP</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q74 H:J863 D:952 C:K84" data-label="Partner hat 2♣ eröffnet: 2♦"></div>
<div class="hand" data-cards="S:52 H:KQJ84 D:A73 C:964" data-label="Partner hat 2♣ eröffnet: 2♥"></div>
<p>Die Antwort 2♦ hält die Reizung niedrig, damit sich die starke Hand beschreiben kann. Auch mit einer ordentlichen Hand reizen Sie ohne gute Farbe 2♦ und zeigen Ihre Werte später.</p>

<h3>Das Wiedergebot des Eröffners</h3>
<ul>
<li><strong>2SA</strong> = 22–24 ausgeglichen. Das ist das einzige Wiedergebot, das der Antwortende passen darf, und zwar mit einer wirklich wertlosen Hand. Der Antwortende spielt dieselben Methoden wie nach einer 2SA-Eröffnung: 3♣ Stayman, 3♦ und 3♥ Transfer, 3SA zum Spielen.</li>
<li><strong>3SA</strong> = 25–27 ausgeglichen.</li>
<li><strong>Eine Farbe</strong> = natürlich, mindestens fünf Karten und forcierend: Der Antwortende muss noch einmal reizen. Heben Sie mit Unterstützung, reizen Sie eine eigene gute Farbe, und mit nichts Brauchbarem geben Sie das billigste Gebot ab.</li>
</ul>

<h3>Die 2SA-Eröffnung</h3>
<p>2SA zeigt <strong>20–21 FP, ausgeglichen</strong>. Es ist nicht forcierend, aber der Antwortende sollte schon mit 4 Punkten das Vollspiel reizen.</p>
<table>
<thead><tr><th>Antwort auf 2SA</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Passe</td><td>0–3</td></tr>
<tr><td>3♣</td><td>Stayman</td></tr>
<tr><td>3♦ / 3♥</td><td>Transfer auf Coeur / Pik</td></tr>
<tr><td>3SA</td><td>4–10, zum Spielen</td></tr>
<tr><td>4SA</td><td>11–12, quantitativ: Mit Maximum reizt der Eröffner 6SA</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ4 H:KJ6 D:AK82 C:QJ5" data-label="2SA eröffnen: 20 FP, ausgeglichen"></div>
<p>Gegenüber dieser Hand transferiert ein Antwortender mit ♠J10642 ♥Q85 ♦73 ♣962 mit 3♥ und passt auf 3♠: 23–24 Punkte zusammen reichen nicht für das Vollspiel, aber mit fünf Trümpfen ist 3♠ sicherer als 2SA.</p>

<h3>Die Leiter der ausgeglichenen Hände</h3>
<table>
<thead><tr><th>FP</th><th>Reizfolge</th></tr></thead>
<tbody>
<tr><td>12–14</td><td>1 in Farbe, dann 1SA</td></tr>
<tr><td>15–17</td><td>1SA</td></tr>
<tr><td>18–19</td><td>1 in Farbe, dann Sprung auf 2SA</td></tr>
<tr><td>20–21</td><td>2SA</td></tr>
<tr><td>22–24</td><td>2♣, dann 2SA</td></tr>
<tr><td>25–27</td><td>2♣, dann 3SA</td></tr>
</tbody>
</table>
<div class="tip">Denken Sie gegenüber 2♣ in Stichen und Kontrollen, nicht nur in Punkten. Ein Ass oder König ist viel mehr wert als verstreute Damen und Buben.</div>
<div class="warn">Eröffnen Sie nicht 2♣, nur weil Sie 20 FP haben. Mit 20–21 ausgeglichen eröffnen Sie 2SA, mit 19–21 und einer gewöhnlichen unausgeglichenen Hand 1 in Farbe. Der Partner antwortet schon mit 6 Punkten, und Sie können Ihre Stärke dann mit einem Sprung oder einem Revers zeigen.</div>
`,
    keyPoints: [
      '2♣ = 22+ FP oder etwa neun Spielstiche; künstlich und forcierend.',
      'Antworten Sie mit den meisten Händen 2♦ (Wartegebot); eine positive Antwort braucht eine gute Fünferlänge (zwei der drei höchsten oder drei der fünf höchsten Figuren) und 8+ FP.',
      '2♣ – 2♦ – 2SA = 22–24 ausgeglichen und darf gepasst werden; jedes Farbwiedergebot des Eröffners ist forcierend.',
      '2SA-Eröffnung = 20–21 ausgeglichen; 3♣ Stayman, 3♦/3♥ Transfer, 3SA mit 4–10, 4SA mit 11–12.',
      'Leiter der ausgeglichenen Hände: 12–14, 15–17, 18–19, 20–21, 22–24, 25–27.',
    ],
    quiz: [
      {
        q: 'Sie halten ♠AKQJ975 ♥AK4 ♦8 ♣K2. Was eröffnen Sie?',
        options: ['1♠', '2♣', '4♠', '2♠'],
        answer: 1,
        explain: 'Mit neun Spielstichen wollen Sie das Vollspiel erreichen, auch wenn der Partner fast nichts hat. Eröffnen Sie also das forcierende 2♣ und reizen Sie danach Pik. 1♠ könnte gepasst werden, und 2♠ wäre eine schwache Zwei.',
      },
      {
        q: 'Der Partner eröffnet 2♣. Sie halten ♠Q74 ♥J863 ♦952 ♣K84 (6 FP). Was reizen Sie?',
        options: ['Passe', '2♦', '2♥', '2SA'],
        answer: 1,
        explain: '2♣ ist forcierend, Sie dürfen also nicht passen. Ohne gute Fünferlänge reizen Sie das Wartegebot 2♦ und lassen den Eröffner seine Hand beschreiben.',
      },
      {
        q: 'Der Partner eröffnet 2♣. Sie halten ♠52 ♥KQJ84 ♦A73 ♣964 (10 FP). Was reizen Sie?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 1,
        explain: 'Eine gute Fünferlänge (KQJ) mit 8+ FP ist eine positive Antwort: 2♥. Damit weiß der Eröffner sofort, dass ein Schlemm wahrscheinlich ist.',
      },
      {
        q: 'Was zeigt 2♣ – 2♦ – 2SA?',
        options: ['20–21 ausgeglichen', '22–24 ausgeglichen', '25–27 ausgeglichen', 'Eine Treff-Farbe'],
        answer: 1,
        explain: 'Mit 20–21 eröffnen Sie direkt 2SA. Der Umweg über 2♣ mit anschließendem 2SA zeigt 22–24; 2♣ und dann 3SA zeigt 25–27.',
      },
      {
        q: 'Der Partner eröffnet 2SA. Sie halten eine ausgeglichene Hand mit 4 FP. Was reizen Sie?',
        options: ['Passe', '3SA', '3♣', '4SA'],
        answer: 1,
        explain: '20–21 plus 4 ergibt 24–25, genug für ein Vollspiel mit Chancen. Über 2SA deckt 3SA den Bereich von 4–10 Punkten ab.',
      },
    ],
  },

  {
    id: 'weak-twos-and-preempts',
    title: 'Schwache Zweier und Sperreröffnungen',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Wie Sie mit einer langen Farbe und einer schwachen Hand eröffnen, um den Gegnern Reizraum zu nehmen, und wie der Partner antwortet.',
    body: `
<h3>Warum sperren?</h3>
<p>Wenn Sie eine lange Farbe und sonst wenig haben, halten die Gegner wahrscheinlich den Großteil der Stärke. Eine hohe Eröffnung nimmt ihnen den Reizraum, den sie brauchen, um ihren besten Kontrakt zu finden. Zugleich beschreibt sie Ihre Hand genau, sodass der Partner weiß, was zu tun ist.</p>

<h3>Die Voraussetzungen</h3>
<table>
<thead><tr><th>Eröffnung</th><th>Farbe</th><th>FP</th></tr></thead>
<tbody>
<tr><td>2♦ / 2♥ / 2♠ (schwache Zwei)</td><td>Sechs Karten</td><td>5–10</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Sieben Karten</td><td>5–10</td></tr>
<tr><td>4♥ / 4♠</td><td>Acht Karten (oder sieben mit extremer Verteilung)</td><td>5–10</td></tr>
</tbody>
</table>
<p>Der Großteil Ihrer Stärke sollte in der langen Farbe sitzen. Eine gute Richtlinie für eine schwache Zwei: zwei der drei höchsten oder drei der fünf höchsten Figuren.</p>
<div class="hand" data-cards="S:84 H:KQ10973 D:J52 C:63" data-label="2♥ eröffnen"></div>
<div class="hand" data-cards="S:7 H:93 D:Q84 C:KQJ9852" data-label="3♣ eröffnen"></div>
<div class="hand" data-cards="S:KQJ98642 H:5 D:Q732 C:-" data-label="4♠ eröffnen"></div>
<p>2♣ ist nie eine schwache Zwei: Es ist die starke künstliche Eröffnung.</p>

<h3>Wie hoch? Die 2-3-4-Regel</h3>
<p>Zählen Sie Ihre Spielstiche: die Stiche, die Sie mit Ihrer Farbe als Trumpf erwarten, wenn der Partner nichts Brauchbares hat. KQJ9852 sind etwa sechs Stiche. Nach einer traditionellen Faustregel dürfen Ihnen zum Kontrakt höchstens fehlen:</p>
<ul>
<li><strong>zwei Stiche</strong>, wenn Sie in Gefahr sind und die Gegner nicht (ungünstige Gefahrenlage),</li>
<li><strong>drei Stiche</strong> bei gleicher Gefahrenlage,</li>
<li><strong>vier Stiche</strong>, wenn Sie nicht in Gefahr sind, die Gegner aber schon (günstige Gefahrenlage).</li>
</ul>
<p>Der Gedanke dahinter: Selbst wenn Sie kontriert werden, sollte die Strafe nicht viel höher sein als der Wert des Vollspiels, das die Gegner wahrscheinlich erfüllt hätten. Mit sechs Spielstichen ist 3♣ (neun Stiche) bei gleicher Gefahrenlage in Ordnung. Moderne Spieler sperren bei günstiger Gefahrenlage aggressiver und bei ungünstiger vorsichtiger.</p>

<h3>Wann Sie nicht sperren</h3>
<ul>
<li>In vierter Hand ergibt eine Sperre keinen Sinn: Mit einer schwachen Hand passen Sie das Spiel einfach ein. Eine Eröffnung auf der Zweier- oder Dreierstufe in vierter Hand zeigt eine ordentliche Hand, die den Kontrakt erfüllen will.</li>
<li>Mit einer guten Hand (11+ FP und einer schönen Farbe) eröffnen Sie stattdessen auf der Einerstufe.</li>
<li>In erster oder zweiter Hand seien Sie vorsichtig mit einer Vierer-Oberfarbe daneben oder mit zwei Assen außerhalb Ihrer Farbe: Der Partner kann eine gute Hand haben, und Sie könnten einen besseren Kontrakt verpassen.</li>
</ul>

<h3>Antworten auf eine schwache Zwei</h3>
<table>
<thead><tr><th>Antwort</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Hebung (2♥ – 3♥)</td><td>Sperrend, nicht einladend: Mit Dreierunterstützung wird die Sperre fortgesetzt</td></tr>
<tr><td>Vollspiel in der Farbe</td><td>Zum Spielen: entweder zum Erfüllen oder als weitere Sperre</td></tr>
<tr><td>2SA</td><td>Forcierend: Der Eröffner soll seine Hand beschreiben</td></tr>
<tr><td>Neue Farbe</td><td>Natürlich, fünf oder mehr Karten, forcierend</td></tr>
<tr><td>3SA</td><td>Zum Spielen</td></tr>
</tbody>
</table>
<p><strong>Die Antworten des Eröffners auf 2SA:</strong> Mit Minimum (etwa 5–7) wiederholt er seine Farbe auf der Dreierstufe; mit Maximum (etwa 8–10) reizt er eine Farbe, in der er außerhalb ein Ass oder einen König hält (ein „Feature“); mit einer geschlossenen Farbe (AKQxxx) reizt er 3SA.</p>
<div class="deal" data-n="S:KQ10974 H:K52 D:83 C:72" data-s="S:A6 H:A84 D:AQ1052 C:K93" data-caption="Nord eröffnet 2♠, Süd fragt mit 2SA."></div>
<div class="auction" data-calls="2S P 2NT P 3H P 4S P P P" data-dealer="N"></div>
<p>Nord hat 8 FP, also ein Maximum, und zeigt den ♥K. Süd mit 17 FP weiß nun, dass die Pikfarbe zusammen mit dem ♠A durchläuft und Coeur gut gehalten ist, und reizt das Vollspiel. Hätte Nord mit 3♠ ein Minimum gezeigt, hätte Süd gepasst.</p>

<h3>Antworten auf eine Sperreröffnung auf der Dreierstufe</h3>
<p>Zählen Sie Stiche, nicht Punkte. Die Farbe des Partners bringt etwa sechs Stiche; für das Vollspiel müssen Sie drei oder vier weitere beisteuern, meist Asse und Könige. Mit Unterstützung und einer schwachen Hand heben Sie, um die Sperre noch höher zu treiben. Denken Sie daran, dass der Partner kaum Verteidigungswerte hat: Verlassen Sie sich nicht auf seine Sperre, um die Gegner zur Strafe zu kontrieren.</p>
<div class="tip">Gegenüber einer Sperre des Partners sind Ihre Asse und Könige Gold wert, Ihre Damen und Buben dagegen sehr wenig, es sei denn, sie sitzen in der Farbe des Partners.</div>
<div class="warn">Die Hebung einer schwachen Zwei ist kein Vollspielversuch. Wenn Sie eine gute Hand haben und mehr wissen wollen, reizen Sie 2SA.</div>
`,
    keyPoints: [
      'Schwache Zwei: sechs Karten, 5–10 FP, die Stärke vor allem in der Farbe; 2♣ ist nie schwach.',
      'Sperre auf der Dreierstufe: sieben Karten, 5–10 FP; vier in Oberfarbe: acht Karten (oder sieben mit Verteilung).',
      '2-3-4-Regel: zwei Stiche Unterschied bei ungünstiger, drei bei gleicher, vier bei günstiger Gefahrenlage.',
      'In vierter Hand wird nicht gesperrt.',
      'Hebungen von Sperren sind sperrend; 2SA auf eine schwache Zwei fragt nach einem Feature (mit Minimum wiederholt der Eröffner seine Farbe).',
    ],
    quiz: [
      {
        q: 'Erste Hand, gleiche Gefahrenlage. Sie halten ♠84 ♥KQ10973 ♦J52 ♣63. Was eröffnen Sie?',
        options: ['Passe', '2♥', '3♥', '1♥'],
        answer: 1,
        explain: 'Sechs gute Coeur und 6 FP sind eine schwache Zwei wie aus dem Lehrbuch. Mit sieben Coeur würden Sie über 3♥ nachdenken, mit 12+ FP 1♥ eröffnen.',
      },
      {
        q: 'Der Partner eröffnet 2♠, der nächste Spieler passt. Sie halten ♠Q73 ♥K842 ♦A65 ♣J94 (10 FP). Was reizen Sie?',
        options: ['Passe', '3♠', '2SA', '4♠'],
        answer: 1,
        explain: 'Gegenüber 5–10 ist ein Vollspiel unwahrscheinlich, aber mit Dreierunterstützung hat Ihre Seite neun Trümpfe, und die Gegner haben irgendwo einen Fit. Heben Sie auf 3♠, um ihnen den Einstieg zu erschweren.',
      },
      {
        q: 'Sie haben mit ♠K5 ♥AQ10984 ♦862 ♣73 (9 FP) 2♥ eröffnet. Der Partner reizt 2SA. Was ist Ihr Wiedergebot?',
        options: ['3♥', '3♠', '3SA', '4♥'],
        answer: 1,
        explain: '9 FP sind ein Maximum, also zeigen Sie mit 3♠ Ihr Feature außerhalb, den ♠K. 3♥ würde ein Minimum zeigen und 3SA eine geschlossene Farbe.',
      },
      {
        q: 'Wie viele Stiche dürfen Ihnen nach der 2-3-4-Regel bei günstiger Gefahrenlage zu Ihrem Kontrakt fehlen?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'Bei günstiger Gefahrenlage kosten vier Faller kontriert 800, nicht viel mehr als die 620, die das Vollspiel der Gegner in Gefahr wert ist. Und Gegner, die selbst ein Vollspiel oder einen Schlemm suchen, kontrieren Sie oft gar nicht.',
      },
      {
        q: 'Der Partner eröffnet 2♥. Was zeigt Ihre Hebung auf 3♥?',
        options: ['Eine Vollspieleinladung', 'Eine sperrende Hebung, nicht einladend', 'Eine forcierende Hebung', 'Eine Hand ohne Coeur'],
        answer: 1,
        explain: 'Die Hebung einer Sperre setzt die Sperre fort. Wenn der Eröffner seine Hand beschreiben soll, reizen Sie 2SA, die forcierende Frage.',
      },
    ],
  },

  {
    id: 'overcalls',
    title: 'Gegenreizungen',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wann Sie nach einer gegnerischen Eröffnung gegenreizen, was die verschiedenen Gegenreizungen zeigen und wie der Partner darauf antwortet.',
    body: `
<h3>Warum gegenreizen?</h3>
<p>Nach einer gegnerischen Eröffnung erfüllt das Reizen einer Farbe (eine <strong>Gegenreizung</strong>) drei Aufgaben: Sie kämpfen um den Teilkontrakt, Sie nehmen den Gegnern Reizraum, und Sie sagen dem Partner, was er ausspielen soll, falls die Gegner den Kontrakt bekommen. Wegen der letzten Aufgabe gilt: <strong>Die Qualität der Farbe zählt mehr als die Punkte</strong>.</p>

<h3>Was die Gegenreizungen zeigen</h3>
<table>
<thead><tr><th>Gegenreizung</th><th>Zeigt</th></tr></thead>
<tbody>
<tr><td>Farbe auf der Einerstufe (1♦ – 1♠)</td><td>8–16 FP, eine gute Fünfer- oder längere Farbe</td></tr>
<tr><td>Farbe auf der Zweierstufe (1♠ – 2♦)</td><td>10–16 FP, eine gute Fünfer-, meist Sechserlänge</td></tr>
<tr><td>Schwache Sprung-Gegenreizung (1♣ – 2♠)</td><td>Eine Sechserlänge, 6–10 FP, wie eine schwache Zwei</td></tr>
<tr><td>1SA</td><td>15–18 FP, ausgeglichen, mit Stopper in der Farbe des Eröffners</td></tr>
</tbody>
</table>
<p>Mit 17+ und einer Hand, die für eine einfache Gegenreizung zu stark ist, beginnen Sie mit einem Informationskontra und reizen Ihre Farbe danach.</p>

<h3>Beispiele (der rechte Gegner hat eröffnet)</h3>
<div class="hand" data-cards="S:KQJ74 H:83 D:952 C:A63" data-label="Rechter Gegner eröffnet 1♦: 1♠"></div>
<p>10 FP und eine starke Farbe, deren Ausspiel Sie sich vom Partner wünschen.</p>
<div class="hand" data-cards="S:73 H:A4 D:KQ10862 C:K95" data-label="Rechter Gegner eröffnet 1♠: 2♦"></div>
<p>12 FP und eine gute Sechserlänge: solide genug für die Zweierstufe.</p>
<div class="hand" data-cards="S:K5 H:AQ8 D:KJ63 C:KJ94" data-label="Rechter Gegner eröffnet 1♣: 1SA"></div>
<p>17 FP, ausgeglichen, Treff gut gestoppt.</p>
<div class="hand" data-cards="S:J7542 H:AJ3 D:K6 C:Q82" data-label="Rechter Gegner eröffnet 1♥: Passe"></div>
<p>11 FP, aber die Pikfarbe ist schwach und die Werte sind verstreut. Eine Gegenreizung würde Pik-Ausspiel verlangen und könnte teuer kontriert werden. Passen Sie.</p>

<h3>Gefahrenlage und Stufe</h3>
<p>Das Risiko einer Gegenreizung ist ein Strafkontra. Auf der Einerstufe ist es gering; auf der Zweierstufe, besonders in Gefahr, brauchen Sie eine gute Farbe, die auch dann Stiche macht, wenn der Rest der Partnerhand schwach ist. Eine Gegenreizung auf der Zweierstufe mit einer Fünferlänge sollte fast einer Eröffnung mit starker Farbe entsprechen.</p>

<h3>Antworten auf die Gegenreizung des Partners</h3>
<table>
<thead><tr><th>Ihre Antwort</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Einfache Hebung</td><td>6–9 mit drei oder mehr Trümpfen</td></tr>
<tr><td>Cuebid in der Farbe des Eröffners</td><td>Limit-Hebung oder besser: 10+ mit drei oder mehr Trümpfen</td></tr>
<tr><td>Sprunghebung</td><td>Sperrend: schwach, mit vier oder mehr Trümpfen</td></tr>
<tr><td>Neue Farbe</td><td>Natürlich, eine gute Fünferlänge oder länger, nicht forcierend</td></tr>
<tr><td>1SA</td><td>Etwa 8–11 mit Stopper in der Farbe des Eröffners</td></tr>
</tbody>
</table>
<div class="auction" data-calls="1H 1S P" data-dealer="W"></div>
<div class="hand" data-cards="S:Q84 H:752 D:KJ63 C:Q94" data-label="Sie sind Süd: 2♠"></div>
<p>8 FP und Dreierunterstützung: Heben Sie auf 2♠. Wenn Sie den Partner sofort unterstützen, wird es für die Gegner schwer, ihren besten Kontrakt zu finden.</p>
<div class="hand" data-cards="S:K962 H:83 D:AQ74 C:K105" data-label="Sie sind Süd: 2♥"></div>
<p>12 FP und vier Trümpfe. Das Cuebid 2♥ zeigt eine Limit-Hebung oder besser; mit einer Minimum-Gegenreizung reizt der Partner 2♠, und Sie laden dann mit 3♠ ein oder reizen das Vollspiel, wenn der Partner mehr zeigt.</p>
<div class="tip">Denken Sie daran, dass die Spanne einer Gegenreizung breit ist (8–16). Springen Sie gegenüber einer Gegenreizung nicht ins Vollspiel, nur weil Sie eine Eröffnungshand haben: Geben Sie zuerst ein Cuebid ab und lassen Sie den Partner seine Hand beschreiben.</div>
<div class="warn">Eine Gegenreizung ist keine Eröffnung. Reizen Sie keine schwache Farbe, nur weil Sie 12 Punkte haben, und verzichten Sie nicht auf eine Gegenreizung mit einer starken Farbe, nur weil Sie bloß 9 haben.</div>
`,
    keyPoints: [
      'Gegenreizung auf der Einerstufe: 8–16 FP, gute 5+-Farbe. Zweierstufe: 10–16, gute 5+-Farbe (meist 6).',
      'Schwache Sprung-Gegenreizung: Sechserlänge, 6–10; 1SA-Gegenreizung: 15–18 ausgeglichen mit Stopper.',
      'Die Qualität der Farbe zählt mehr als Punkte, denn die Gegenreizung lenkt auch das Ausspiel.',
      'Partner des Gegenreizers: einfache Hebung 6–9 mit 3+ Unterstützung; Cuebid = Limit-Hebung oder besser; die Sprunghebung ist sperrend.',
      'Mit 17+, zu stark für eine Gegenreizung, kontrieren Sie zuerst und reizen danach Ihre Farbe.',
    ],
    quiz: [
      {
        q: 'Ihr rechter Gegner eröffnet 1♦. Sie halten ♠KQJ74 ♥83 ♦952 ♣A63. Was reizen Sie?',
        options: ['Passe', '1♠', '2♠', 'Kontra'],
        answer: 1,
        explain: 'Eine gute Fünferlänge mit 10 FP ist eine solide Gegenreizung auf der Einerstufe. 2♠ wäre eine schwache Sprung-Gegenreizung, und ein Kontra würde Unterstützung für Coeur und Treff versprechen.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 1♥. Sie halten ♠J7542 ♥AJ3 ♦K6 ♣Q82 (11 FP). Was reizen Sie?',
        options: ['1♠', 'Passe', '1SA', 'Kontra'],
        answer: 1,
        explain: 'Die Pikfarbe ist zu schwach, um Ausspiel zu verlangen, die Hand ist kein 1SA mit 15–18, und für ein Kontra fehlt die Verteilung. Passen Sie.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 1♣. Sie halten ♠K5 ♥AQ8 ♦KJ63 ♣KJ94 (17 FP). Was reizen Sie?',
        options: ['1♦', '1SA', 'Kontra', '2SA'],
        answer: 1,
        explain: 'Ausgeglichen, 15–18, mit Treff-Stopper: 1SA beschreibt die Hand mit einem einzigen Gebot. Der Partner kann dieselben Antworten wie auf eine 1SA-Eröffnung verwenden.',
      },
      {
        q: 'Ihr linker Gegner hat 1♥ eröffnet, und der Partner hat mit 1♠ gegengereizt. Sie halten ♠K962 ♥83 ♦AQ74 ♣K105 (12 FP). Was reizen Sie?',
        options: ['2♠', '3♠', '2♥', '4♠'],
        answer: 2,
        explain: 'Mit 10+ und Unterstützung geben Sie ein Cuebid in der Farbe der Gegner ab und zeigen damit eine Limit-Hebung oder besser. 3♠ wäre sperrend, und 4♠ könnte gegenüber einer Minimum-Gegenreizung zu hoch sein.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 1♣. Sie halten ♠KJ10984 ♥73 ♦Q52 ♣43 (6 FP). Was reizen Sie?',
        options: ['Passe', '1♠', '2♠', '3♠'],
        answer: 2,
        explain: 'Sechs gute Pik und 6–10 FP sind eine schwache Sprung-Gegenreizung. Sie nimmt den Gegnern die Gebote auf der Einerstufe und schlägt Pik-Ausspiel vor.',
      },
    ],
  },

  {
    id: 'takeout-doubles',
    title: 'Informationskontras',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wie Sie den Partner mit einem Kontra bitten, eine Farbe zu wählen, und wie der Partner und die eröffnende Seite darauf reagieren.',
    body: `
<h3>Was ein Informationskontra aussagt</h3>
<p>Ein Kontra auf eine niedrige Farberöffnung ist nicht zur Strafe gedacht: Es fordert den Partner zum Reizen auf. Es zeigt <strong>12+ FP, Kürze in der eröffneten Farbe und Unterstützung (am besten vier Karten) in den ungereizten Farben</strong>, vor allem in der ungereizten Oberfarbe. Die Alternative ist eine starke Hand mit 17+ und beliebiger Verteilung, die noch einmal reizt, um zu zeigen, was sie wirklich hat.</p>
<div class="hand" data-cards="S:KJ85 H:AQ63 D:4 C:K1072" data-label="Rechter Gegner eröffnet 1♦: Kontra"></div>
<p>13 FP, ein Karo-Single und vier Karten in jeder anderen Farbe: die perfekte Verteilung.</p>
<div class="hand" data-cards="S:K85 H:AQ6 D:K1073 C:Q72" data-label="Rechter Gegner eröffnet 1♦: Passe"></div>
<p>14 FP, aber vier Karo und nur je drei Karten in den Oberfarben. Wenn Sie kontrieren, reizt der Partner mit vier Karten Coeur oder Pik, und Sie landen in einem unglücklichen 4-3-Fit. Passen Sie.</p>

<h3>Antworten auf ein Informationskontra</h3>
<div class="auction" data-calls="1H X P" data-dealer="W"></div>
<p>West hat 1♥ eröffnet, der Partner hat kontriert, Ost hat gepasst. Sie müssen reizen, so schwach Sie auch sind: Mit Passe würden Sie das Kontra in ein Strafkontra auf 1♥ verwandeln. Bevorzugen Sie eine Oberfarbe und zeigen Sie Ihre Stärke über die Stufe:</p>
<table>
<thead><tr><th>Ihre Punkte</th><th>Gebot</th></tr></thead>
<tbody>
<tr><td>0–8</td><td>Ihre beste Farbe auf der niedrigsten Stufe</td></tr>
<tr><td>9–11</td><td>Sprung in Ihrer besten Farbe (einladend)</td></tr>
<tr><td>12+</td><td>Cuebid in der Farbe des Eröffners (forcierend) oder Vollspiel</td></tr>
<tr><td>6–10, ausgeglichen</td><td>1SA, mit Stopper in der Farbe des Eröffners</td></tr>
<tr><td>Passe</td><td>Nur mit langen, starken Trümpfen in der Farbe des Eröffners (zur Strafe)</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q8642 H:753 D:J4 C:982" data-label="1♥ – Kontra – Passe: 1♠"></div>
<div class="hand" data-cards="S:KJ74 H:85 D:A1063 C:Q72" data-label="1♥ – Kontra – Passe: 2♠"></div>
<p>Mit 3 FP reizen Sie ohne Angst 1♠: Der Partner weiß, dass Sie nichts haben können. Mit 10 FP springen Sie auf 2♠ und laden zum Vollspiel ein. Mit ♠AJ74 ♥85 ♦KQ63 ♣Q72 (12 FP) haben Sie Vollspielwerte, aber nur vier Pik: Geben Sie das forcierende Cuebid 2♥ ab und wählen Sie das Vollspiel nach der Antwort des Partners. Mit fünf Pik und 10–11 FP reizen Sie selbst 4♠.</p>
<p>Reizt der Partner des Eröffners (1♥ – Kontra – 2♥), sind Sie nicht mehr zum Reizen gezwungen. Jetzt zeigt ein Gebot gewisse Werte, etwa 6+, und Passe zeigt eine schwache Hand.</p>

<h3>Das Wiedergebot des Kontrierenden</h3>
<p>Die Antwort auf der niedrigsten Stufe kann mit gar nichts abgegeben worden sein, deshalb darf der Kontrierende mit Minimum nicht noch einmal reizen. Mit 12–15 passt er, mit etwa 16–18 hebt er um eine Stufe, mit 19+ springt er. Reizt der Kontrierende eine neue Farbe, zeigt er den starken Typ des Kontras (17+) mit einer eigenen langen Farbe.</p>

<h3>Die eröffnende Seite: Rekontra</h3>
<div class="auction" data-calls="1H X XX" data-dealer="N"></div>
<p>Wird die Eröffnung des Partners kontriert, zeigt ein <strong>Rekontra</strong> 10+ FP. Es sagt dem Eröffner, dass Ihre Seite die Mehrheit der Stärke hat, und meist heißt es, dass Sie eine Gelegenheit suchen, die Gegner zur Strafe zu kontrieren. Nach einer Oberfarberöffnung zeigt <strong>2SA (Jordan)</strong> mindestens Viererunterstützung und eine Limit-Hebung oder mehr (10+ Unterstützungspunkte); ein Rekontra verneint deshalb meist vier Trümpfe. Mit Unterstützung und einer schwächeren Hand heben Sie stattdessen den Partner: Eine einfache Hebung zeigt etwa 6–10 Punkte, eine Sprunghebung (1♥ – Kontra – 3♥) ist ein Sperrgebot mit vier Trümpfen und weniger als 10 FP. Mit einer neuen Farbe und weniger als 10 reizen Sie diese.</p>

<h3>Kontras auf Sperren</h3>
<p>Auch ein Kontra auf eine schwache Zwei oder eine Sperre auf der Dreierstufe ist ein Informationskontra: Eröffnungsstärke, Kürze in der gegnerischen Farbe und Bereitschaft für jede Farbe, die der Partner reizt. Der Partner muss womöglich mit einer schwachen Hand auf der Dreierstufe reizen, daher sollte der Kontrierende solide sein, nicht leicht.</p>
<div class="tip">Das ideale Informationskontra ist kurz in der gegnerischen Farbe und hat vier Karten in jeder ungereizten Oberfarbe. Je kürzer Sie in der gegnerischen Farbe sind, desto leichter dürfen Sie kontrieren.</div>
<div class="warn">Kontrieren Sie nicht mit einer eigenen langen Farbe und einer mittleren Hand: Reizen Sie stattdessen gegen. Ein Informationskontra mit anschließender eigener Farbe zeigt 17+ FP.</div>
`,
    keyPoints: [
      'Informationskontra: 12+ FP, kurz in der gegnerischen Farbe, Unterstützung für die ungereizten Farben; oder 17+ mit beliebiger Verteilung und der Absicht, noch einmal zu reizen.',
      'Der Partner muss reizen: 0–8 billigste Stufe, 9–11 Sprung, 12+ Cuebid oder Vollspiel; 1SA = 6–10 mit Stopper.',
      'Lassen Sie das Kontra nur mit langen, starken Trümpfen in der gegnerischen Farbe stehen.',
      'Der Kontrierende passt eine Minimum-Antwort mit 12–15, hebt mit 16–18 und springt mit 19+.',
      'Rekontra nach einem Informationskontra zeigt 10+ FP; über 1♥ oder 1♠ zeigt 2SA (Jordan) vier Trümpfe und eine Limit-Hebung oder mehr, und eine Sprunghebung ist ein Sperrgebot.',
    ],
    quiz: [
      {
        q: 'Ihr rechter Gegner eröffnet 1♣. Sie halten ♠AQ83 ♥KJ62 ♦Q1074 ♣5 (12 FP). Was reizen Sie?',
        options: ['1♦', 'Kontra', '1♠', 'Passe'],
        answer: 1,
        explain: 'Kurz in Treff und vier Karten in jeder anderen Farbe: ein ideales Informationskontra. Was der Partner auch reizt, Sie haben Unterstützung.',
      },
      {
        q: '1♥ – Kontra – Passe – ? Sie halten ♠Q8642 ♥753 ♦J4 ♣982 (3 FP).',
        options: ['Passe', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Sie müssen reizen: Wenn Sie passen, bleibt 1♥ kontriert zur Strafe stehen, und die Gegner würden es wahrscheinlich mit Überstichen erfüllen. Reizen Sie Ihre beste Farbe auf der niedrigsten Stufe.',
      },
      {
        q: '1♥ – Kontra – Passe – ? Sie halten ♠KJ74 ♥85 ♦A1063 ♣Q72 (10 FP).',
        options: ['1♠', '2♠', '4♠', '2♥'],
        answer: 1,
        explain: '9–11 Punkte: Springen Sie in Ihrer besten Farbe, um zum Vollspiel einzuladen. 1♠ könnte auch mit gar nichts gereizt werden und würde diese Hand unter Wert verkaufen.',
      },
      {
        q: '1♠ – Kontra – Passe – ? Sie halten ♠K104 ♥82 ♦Q963 ♣J752 (6 FP).',
        options: ['2♣', '2♦', '1SA', 'Passe'],
        answer: 2,
        explain: '1SA zeigt 6–10 mit Pik-Stopper, und Sie bleiben auf der Einerstufe. Eine Unterfarbe auf der Zweierstufe wäre eine mögliche Alternative, aber 1SA beschreibt diese ausgeglichene Hand am besten.',
      },
      {
        q: 'Der Partner eröffnet 1♥, und Ihr rechter Gegner kontriert. Was zeigt Ihr Rekontra?',
        options: ['Ein Strafkontra auf 1♥', '10+ FP', 'Coeur-Unterstützung', 'Eine schwache Hand'],
        answer: 1,
        explain: 'Rekontra zeigt 10+ FP und sagt, dass das Spiel Ihrer Seite gehört. Mit Unterstützung und weniger Punkten würden Sie stattdessen heben.',
      },
    ],
  },

  {
    id: 'hold-up-and-entries',
    title: 'Hold-up und Übergänge',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Wie Sie mit einem Hold-up die Verbindung der Gegenspieler unterbrechen und wie Sie Ihre eigenen Übergänge einteilen.',
    body: `
<h3>Der Hold-up</h3>
<p>Gegen SA greifen die Gegenspieler meist ihre lange Farbe an. Gewinnen Sie die erste Runde mit Ihrem einzigen Stopper und geben das Spiel dann an den Partner dieses Gegenspielers ab, kann er die Farbe zurückspielen, und die langen Karten laufen. Beim <strong>Hold-up</strong> verzichten Sie darauf, die erste Runde (oder die ersten Runden) dieser Farbe zu gewinnen, damit der Gegenspieler, der ans Spiel kommen könnte, keine Karte der Farbe mehr zum Zurückspielen hat.</p>
<div class="deal" data-n="S:953 H:K82 D:QJ974 C:K6" data-e="S:72 H:QJ105 D:A63 C:10543" data-s="S:A64 H:A73 D:K105 C:AQ82" data-w="S:KQJ108 H:964 D:82 C:J97" data-caption="3SA von Süd. West spielt den ♠K aus."></div>
<div class="auction" data-calls="1NT P 2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Zählen:</strong> ♠A, ♥AK, ♣AKQ: sechs sichere Stiche. Karo liefert vier weitere, sobald das ♦A herausgetrieben ist. Sie müssen das Spiel einmal abgeben.</p>
<p><strong>Gefahr:</strong> die Pikfarbe von West. Wenn Sie den ersten Pikstich gewinnen und Ost dann mit dem ♦A ans Spiel kommt, spielt Ost Pik zurück, und West macht vier Pikstiche: ein Faller.</p>
<p><strong>Der Hold-up:</strong> Geben Sie auf den ♠K klein zu. West setzt mit der ♠Q fort, und Sie gewinnen mit dem Ass. Ost hat zweimal bedient und besitzt kein Pik mehr. Treiben Sie jetzt das ♦A heraus. Wie die Karten liegen, gewinnt Ost damit, hat kein Pik zum Zurückspielen, und Sie machen zehn Stiche. Hätte West das ♦A, gingen Sie down, aber dann hätte es ohnehin keinen Weg zum Erfüllen gegeben: Der Hold-up ist eine kostenlose zusätzliche Chance.</p>

<h4>Wie oft ducken? Die Siebenerregel</h4>
<p>Ziehen Sie die Anzahl der Karten, die Sie und der Dummy in der Farbe halten, von sieben ab. Das Ergebnis ist die Zahl der Runden, die Sie ducken. Hier haben Sie zusammen sechs Pik, also 7 − 6 = 1: Ducken Sie einmal und gewinnen Sie die zweite Runde. Das setzt voraus, dass die Farbe 5-2 verteilt ist; achten Sie auf die fallenden Karten und passen Sie sich an.</p>

<h4>Wann Sie keinen Hold-up spielen</h4>
<ul>
<li>Wenn der Gegenspieler, der ans Spiel kommen kann, ohnehin keine Karten der Farbe mehr hat oder sich die Farbe nicht abziehen lässt.</li>
<li>Wenn der Hold-up den Gegenspielern erlaubt, auf eine noch gefährlichere Farbe zu wechseln.</li>
<li>Wenn Sie zwei Stopper haben und der gefährliche Gegenspieler nicht zweimal ans Spiel kommen kann. Mit A K x können Sie oft den ersten Stich gewinnen und haben immer noch einen Stopper, wenn die Gegner wieder ans Spiel kommen.</li>
</ul>
<div class="tip">Der Bath Coup: Mit A J x in Ihrer Hand geben Sie klein zu, wenn West den König ausspielt. Setzt West die Farbe fort, bringen Ihnen A und J zwei Stiche; wechselt West die Farbe, hält Ihr A J sie weiterhin: West kann sie nicht wieder spielen, ohne Ihnen einen Stich zu schenken.</div>

<h3>Übergänge einteilen</h3>
<p>Ein Übergang ist eine Karte, mit der Sie einen Stich in einer bestimmten Hand gewinnen und von dort weiterspielen können. Viele Kontrakte gehen nicht aus Mangel an Gewinnern verloren, sondern weil der Weg zu ihnen fehlt.</p>
<ul>
<li><strong>Zählen Sie die Übergänge vor dem ersten Stich.</strong> Entscheiden Sie, welche Hand später am Ausspiel sein muss, und gewinnen Sie den ersten Stich entsprechend.</li>
<li><strong>Deblockieren:</strong> Spielen Sie die hohen Karten zuerst aus der kürzeren Hand. Mit ♦Q3 in der Hand und ♦AKJ105 im Dummy (ohne andere Übergänge zum Dummy) ziehen Sie zuerst die Q ab und spielen dann die 3 zum Dummy.</li>
<li><strong>Ducken</strong> Sie die Runde, die Sie abgeben müssen, solange die lange Hand noch ihre hohen Karten hat (siehe die Lektion „Lange Farben hochspielen“).</li>
<li><strong>Übernehmen</strong> Sie, um die Hand zu wechseln: Mit einer einzelnen ♥Q in der Hand gegenüber ♥AKJ104 und ohne anderen Übergang zum Dummy übernehmen Sie die Q mit dem K und ziehen die Farbe ab.</li>
<li><strong>Bewahren Sie den späten Übergang:</strong> Muss eine Farbe im Dummy hochgespielt werden, verbrauchen Sie zuerst die Übergänge Ihrer Hand und heben die des Dummys für den Schluss auf.</li>
</ul>
<div class="warn">Gewinnen Sie einen Stich nicht in der falschen Hand, „weil es egal ist“. Solange Sie nicht wissen, in welcher Hand Sie später sein müssen, ist es zu früh, eine Karte zu spielen.</div>
`,
    keyPoints: [
      'Ducken Sie mit Ihrem Stopper, damit der Gegenspieler, der ans Spiel kommen kann, keine Karte der gegnerischen Farbe mehr hat.',
      'Siebenerregel: Sieben minus Ihre gemeinsame Kartenzahl in der Farbe ergibt, wie oft Sie ducken (eine Richtlinie für eine 5-2-Verteilung).',
      'Kein Hold-up, wenn ein Farbwechsel gefährlicher wäre oder Sie genug Stopper haben.',
      'Deblockieren Sie, indem Sie die Figuren der kurzen Hand zuerst spielen; übernehmen Sie, um die Hand zu wechseln.',
      'Planen Sie die Übergänge vor dem ersten Stich und gewinnen Sie diesen in der richtigen Hand.',
    ],
    quiz: [
      {
        q: 'Sie und der Dummy halten sechs Karten in der Farbe, die die Gegenspieler gegen 3SA angreifen, und haben nur das Ass als Stopper. Wie oft sollten Sie ducken?',
        options: ['Nie', 'Einmal', 'Zweimal', 'Dreimal'],
        answer: 1,
        explain: 'Siebenerregel: 7 − 6 = 1. Steht die Farbe 5-2 und Sie gewinnen die zweite Runde, hat der Partner des Gegenspielers mit der langen Farbe keine Karte mehr zum Zurückspielen.',
      },
      {
        q: 'Welchen Zweck hat der Hold-up?',
        options: ['Einen Überstich zu machen', 'Dem Partner des Gegenspielers mit der langen Farbe die Karten dieser Farbe zu nehmen, damit er sie nicht zurückspielen kann', 'Herauszufinden, wer die fehlenden Figuren hält', 'Einen Übergang zum Dummy zu sparen'],
        answer: 1,
        explain: 'Hat der Gegenspieler, der ans Spiel kommt, keine Karte der langen Farbe, sind die langen Karten seines Partners abgeschnitten und kommen womöglich nie zum Zug.',
      },
      {
        q: 'Warum hilft der Hold-up im obigen Spiel nicht, wenn West das ♦A hat?',
        options: ['Weil West dann die restlichen Pik abziehen kann', 'Weil Karo blockiert wäre', 'Weil Ost schnappen könnte', 'Er hilft auch in diesem Fall'],
        answer: 0,
        explain: 'Der Hold-up nimmt nur Ost die Pik. Kommt West, die Hand mit den langen Pik, mit dem ♦A ans Spiel, werden die hochgespielten Pik abgezogen. Das kann keine Spielweise verhindern; der Hold-up gewinnt immer dann, wenn Ost das ♦A hat.',
      },
      {
        q: 'Sie haben ♦Q3 in der Hand und ♦AKJ105 im Dummy, der keinen anderen Übergang hat. Wie spielen Sie Karo?',
        options: ['Zuerst die 3 zum Ass spielen', 'Zuerst die Q abziehen, dann die 3 zum Dummy spielen', 'Den Buben vom Dummy ausspielen', 'Die erste Runde ducken'],
        answer: 1,
        explain: 'Spielen Sie die hohe Karte zuerst aus der kurzen Hand. Nach der Q bringt Sie die 3 zum Dummy, und Sie können dort den Rest der Farbe abziehen.',
      },
      {
        q: 'West spielt gegen 3SA den ♣K aus, und Sie halten ♣AJ4 in der Hand. Was ist der Bath Coup?',
        options: ['Sofort mit dem Ass gewinnen', 'Klein zugeben, damit eine Treff-Fortsetzung in Ihr A J läuft', 'Den Buben spielen', 'Vom Dummy abwerfen'],
        answer: 1,
        explain: 'Durch das Ducken laden Sie West ein, die Farbe in Ihr A J hinein fortzusetzen, was Ihnen zwei Stiche bringt; wechselt West die Farbe, halten Sie sie weiterhin.',
      },
    ],
  },

  {
    id: 'trump-management',
    title: 'Die Trumpfbehandlung',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Wann Sie sofort Trumpf ziehen, wann Sie damit warten, wie Sie Schnapper in der kurzen Hand nutzen und wie Sie die Kontrolle über die Trumpffarbe behalten.',
    body: `
<h3>Der Normalfall: Trumpf ziehen</h3>
<p>Sobald Sie Alleinspieler in einem Farbkontrakt sind, bedrohen die Trümpfe der Gegenspieler Ihre Gewinner: Jeder Gewinner in einer Nebenfarbe, den Sie abziehen, könnte geschnappt werden. Der normale Plan ist deshalb, <strong>früh Trumpf zu ziehen</strong> und dabei die fallenden Trümpfe der Gegner mitzuzählen. Haben sie fünf Trümpfe und bedienen beide zwei Runden, ist noch einer draußen; bedient ein Gegenspieler nicht mehr, kennen Sie die genaue Verteilung.</p>

<h3>Gründe, mit dem Trumpfziehen zu warten</h3>
<ol>
<li><strong>Sie brauchen die Trümpfe des Dummys zum Schnappen.</strong> Verlierer in der Hand mit den kürzeren Trümpfen zu schnappen bringt Extrastiche. Würde das Trumpfziehen die Trümpfe des Dummys aufbrauchen, schnappen Sie zuerst (siehe das 4♠-Spiel in der Lektion „Den Spielplan machen“).</li>
<li><strong>Sie müssen schnell Verlierer abwerfen.</strong> Halten die Gegenspieler eine Trumpffigur und kommen damit ans Spiel, sobald Sie Trumpf spielen, sorgen Sie vorher dafür, dass sie dann nicht genug Stiche abziehen können, um den Kontrakt zu schlagen.</li>
<li><strong>Sie brauchen Trümpfe als Übergänge</strong>, zum Beispiel, um eine lange Nebenfarbe zu erreichen oder wiederholt zu schneiden.</li>
<li><strong>Sie planen ein Kreuzschnappen</strong> und nutzen die Trümpfe beider Hände getrennt.</li>
</ol>

<h3>Abwerfen vor dem Trumpfziehen</h3>
<div class="deal" data-n="S:10843 H:AKQ5 D:842 C:Q4" data-s="S:KQJ97 H:64 D:A73 C:K52" data-caption="4♠ von Süd. West spielt den ♦K aus."></div>
<p><strong>Verlierer zählen:</strong> das ♠A, zwei Karo, nachdem das ♦A im ersten Stich herausgetrieben wurde, und das ♣A (die dritte Treffrunde kann im Dummy geschnappt werden). Vier Verlierer.</p>
<p>Spielen Sie jetzt Trumpf, zieht der Gegenspieler, der mit dem ♠A gewinnt, zwei Karostiche ab, und mit dem ♣A, das noch kommt, sind Sie down. Gewinnen Sie stattdessen mit dem ♦A und spielen Sie sofort ♥A, ♥K und ♥Q, wobei Sie auf das dritte Coeur ein Karo aus der Hand abwerfen. Erst dann spielen Sie Trumpf. Sie verlieren das ♠A, einen Karostich und das ♣A.</p>
<p>Das Risiko: Jemand schnappt das dritte Coeur. Das passiert nur, wenn Coeur 5-2 oder schlechter verteilt ist <em>und</em> der Gegenspieler mit dem Double einen Trumpf zum Schnappen hat. Dieses Risiko ist weit kleiner als der sichere Faller, wenn Sie zuerst Trumpf ziehen.</p>
<div class="tip">Fragen Sie sich: „Wenn ich beim Trumpfspielen das Spiel abgebe, wie viele Stiche können die Gegenspieler dann abziehen?“ Sind es zu viele, werden Sie zuerst einen Verlierer los.</div>

<h3>Schnappen: Die kurze Hand gewinnt, die lange nicht</h3>
<p>Mit fünf Trümpfen in der Hand und drei im Dummy machen Ihre fünf Trümpfe ohnehin fünf Stiche. Ein Schnapper in der Hand verbraucht nur einen davon. Ein Schnapper im Dummy ist ein Extrastich, weil die kleinen Trümpfe des Dummys sonst nie einen Stich machen würden. Planen Sie Ihre Schnapper in der Hand mit den <strong>kürzeren</strong> Trümpfen.</p>
<p>Schnappen in der langen Hand ist aus anderen Gründen nützlich: um eine lange Farbe im Dummy hochzuspielen, indem Sie die Karten der Gegner herausschnappen, oder um Ihre Trümpfe für ein Endspiel oder einen Trumpfcoup zu verkürzen.</p>

<h3>Das Kreuzschnappen</h3>
<p>Haben beide Hände eine kurze Farbe, können Sie die Verlierer der einen Hand mit den Trümpfen der anderen schnappen, hin und her, ganz ohne Trumpf zu ziehen. Regeln für das Kreuzschnappen:</p>
<ul>
<li><strong>Ziehen Sie zuerst Ihre Gewinner in den Nebenfarben ab.</strong> Sonst werfen die Gegenspieler während des Kreuzschnappens in diesen Farben ab und schnappen später Ihre Gewinner.</li>
<li>Schnappen Sie hoch, wenn ein Überschnappen möglich ist, damit die Gegenspieler ihre kleinen Trümpfe nicht billig zu Stichen machen.</li>
<li>Zählen Sie: Das Kreuzschnappen sollte genau die Stiche bringen, die Sie brauchen.</li>
</ul>

<h3>Die Kontrolle behalten</h3>
<p>Spielen die Gegenspieler immer wieder eine Farbe, die Sie in Ihrer langen Hand schnappen müssen, haben Sie womöglich bald weniger Trümpfe als ein Gegenspieler: Sie haben die <strong>Trumpfkontrolle</strong> verloren, und die restlichen Trümpfe dieses Gegenspielers machen Stiche, während die lange Farbe seines Partners läuft. Gegenmittel, wenn Sie so forciert werden:</p>
<ul>
<li>Werfen Sie einen Verlierer ab, statt zu schnappen (geben Sie einen Stich ab, den Sie ohnehin verloren hätten), damit das nächste Forcieren kommt, wenn der Dummy schnappen kann.</li>
<li>Ziehen Sie die kleinen Trümpfe der Gegner früh, auch wenn Sie ihren höchsten Trumpf draußen lassen, damit Sie das nächste Forcieren nicht die Kontrolle kostet.</li>
<li>Bevorzugen Sie einen Kontrakt, in dem die Hand mit den kürzeren Trümpfen das Forcieren auffangen kann.</li>
</ul>
<div class="warn">Verschwenden Sie nicht zwei Ihrer Trümpfe, um einen der Gegner zu ziehen, wenn deren letzter Trumpf der höchste ist. Diesen Stich bekommen sie ohnehin; lassen Sie sie ihn nehmen, wann sie wollen, und behalten Sie mit Ihren Trümpfen die Kontrolle über das Spiel.</div>
`,
    keyPoints: [
      'Ziehen Sie normalerweise früh Trumpf und zählen Sie dabei die fallenden Trümpfe der Gegner mit.',
      'Warten Sie damit, wenn Sie die Trümpfe des Dummys zum Schnappen brauchen, vor der Abgabe des Spiels Verlierer abwerfen müssen oder Trumpfübergänge benötigen.',
      'Schnapper in der Hand mit den kürzeren Trümpfen bringen Stiche, Schnapper in der langen Hand meist nicht.',
      'Ziehen Sie vor dem Kreuzschnappen Ihre Gewinner in den Nebenfarben ab.',
      'Geben Sie nicht zwei Trümpfe aus, um den höchsten Trumpf der Gegner zu ziehen.',
    ],
    quiz: [
      {
        q: 'Wann ist es falsch, sofort Trumpf zu ziehen?',
        options: ['Nie: Ziehen Sie immer zuerst Trumpf', 'Wenn Sie die Trümpfe des Dummys brauchen, um Ihre Verlierer zu schnappen', 'Wenn die Gegner fünf Trümpfe haben', 'Wenn Sie neun Trümpfe haben'],
        answer: 1,
        explain: 'Das Trumpfziehen würde die Trümpfe des Dummys ebenso verbrauchen wie die der Gegner. Schnappen Sie zuerst in der kurzen Hand und ziehen Sie dann den Rest.',
      },
      {
        q: 'Was sollte der Alleinspieler im obigen 4♠-Spiel nach dem Gewinn mit dem ♦A tun?',
        options: ['Den ♠K ausspielen', 'Drei Coeurstiche abziehen und dabei ein Karo abwerfen', 'Treff zur ♣Q spielen', 'Ein Karo ducken'],
        answer: 1,
        explain: 'Die Gegenspieler haben das ♠A und zwei Karostiche bereit. Werfen Sie zuerst auf das dritte Coeur ein Karo ab und spielen Sie erst dann Trumpf.',
      },
      {
        q: 'Die Gegner haben noch einen Trumpf: das Ass. Sie haben reichlich Trümpfe und Gewinner. Was tun Sie in der Regel?',
        options: ['Trumpf spielen, um das Ass sofort herauszutreiben', 'Es draußen lassen und Ihre Nebenfarben spielen; der Stich gehört den Gegnern ohnehin', 'Etwas im Dummy schnappen', 'Den Rest abgeben'],
        answer: 1,
        explain: 'Das Ass zu ziehen kostet zwei Ihrer Trümpfe (aus jeder Hand einen) für einen Stich, den die Gegner ohnehin bekommen. Sollen sie damit schnappen, wenn sie wollen; Ihre Trümpfe behalten die Kontrolle.',
      },
      {
        q: 'Sie wollen kreuzschnappen. Was tun Sie zuerst?',
        options: ['Zwei Runden Trumpf ziehen', 'Ihre Gewinner in den Nebenfarben abziehen', 'Mit Ihren niedrigsten Trümpfen schnappen', 'Einen Stich abgeben'],
        answer: 1,
        explain: 'Während des Kreuzschnappens werfen die Gegenspieler ab. Werfen sie in einer Nebenfarbe ab, die Sie noch nicht abgezogen haben, können sie später Ihre Gewinner schnappen.',
      },
      {
        q: 'Sie haben fünf Trümpfe in der Hand und drei im Dummy. Welcher Schnapper bringt einen Extrastich?',
        options: ['Schnappen in der Hand', 'Schnappen im Dummy', 'Beide', 'Keiner'],
        answer: 1,
        explain: 'Ihre fünf Trümpfe machen mit oder ohne Schnapper fünf Stiche. Die drei kleinen Trümpfe des Dummys machen nur durch Schnappen Stiche.',
      },
    ],
  },

  {
    id: 'defensive-signals',
    title: 'Markierungen im Gegenspiel',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Wie die Gegenspieler mit der Höhe der gespielten Karten Ermutigung, Länge und Farbpräferenz zeigen.',
    body: `
<h3>Mit den Karten sprechen</h3>
<p>Die Gegenspieler sehen die Hand des Partners nicht, dürfen aber frei wählen, <em>welche</em> Karte sie spielen. Wenn Sie den Stich nicht gewinnen wollen, sendet die kleine Karte, die Sie spielen, eine Botschaft. Es gibt drei Arten von Standardmarkierungen; die Situation sagt dem Partner, welche Sie gerade geben.</p>
<table>
<thead><tr><th>Markierung</th><th>Wann</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Ermutigung</td><td>Der Partner spielt eine Farbe aus; Ihr erster Abwurf</td><td>Hoch ermutigt, tief entmutigt</td></tr>
<tr><td>Länge</td><td>Der Alleinspieler spielt eine Nebenfarbe an (in Trumpf keine Längenmarkierung)</td><td>Hoch-tief = gerade Anzahl, tief-hoch = ungerade</td></tr>
<tr><td>Farbpräferenz</td><td>Wenn Sie eine Farbe ausspielen, damit der Partner schnappt</td><td>Eine hohe Karte verlangt die höhere der übrigen Farben, eine tiefe die niedrigere; eine mittlere Karte zeigt keine Präferenz</td></tr>
</tbody>
</table>

<h3>Ermutigung</h3>
<p>Gegen 4♥ spielt der Partner das ♠A aus (von AK), und der Dummy hat ♠8 6 4.</p>
<ul>
<li>Mit ♠Q 9 3 spielen Sie die 9: Pik gefällt Ihnen, denn Ihre Dame gewinnt die dritte Runde.</li>
<li>Mit ♠7 5 2 spielen Sie die 2: Sie haben in Pik nichts, also sollte der Partner über einen Farbwechsel nachdenken.</li>
<li>Mit dem Double ♠9 3 spielen Sie erst die 9 und dann die 3: Hoch-tief bittet den Partner fortzusetzen, und Sie schnappen die dritte Runde.</li>
</ul>
<p>Abwürfe funktionieren genauso: Der erste Abwurf zeigt Ermutigung. Der Abwurf der ♣9 sagt „Ich mag Treff“, der Abwurf der ♦2 „Ich will kein Karo“. Werfen Sie nur in einer Farbe ab, die Sie entbehren können. Haben Sie in der gewünschten Farbe keine entbehrliche kleine Karte ab der 6 aufwärts, werfen Sie stattdessen die niedrigste Karte einer Farbe ab, die Sie nicht wollen.</p>

<h3>Länge</h3>
<p>Spielt der Alleinspieler eine Farbe, zeigen Sie, wie viele Karten Sie darin halten: hoch-tief mit einer geraden Anzahl (zwei oder vier), die niedrigste zuerst mit einer ungeraden (drei). Die Längenmarkierung hilft dem Partner, die Verteilung des Alleinspielers zu rekonstruieren, und vor allem sagt sie ihm, wann er ein Ass nehmen muss.</p>
<table>
<thead><tr><th>Platz</th><th>Karo</th></tr></thead>
<tbody>
<tr><td>Nord (Dummy, kein Übergang außerhalb)</td><td>K Q J 10 5</td></tr>
<tr><td>Ost (Sie)</td><td>A 7 3</td></tr>
<tr><td>West und Süd</td><td>9 8 6 4 2 zusammen</td></tr>
</tbody>
</table>
<p>Der Alleinspieler spielt Karo zum Dummy. Sie wollen Ihr Ass in der Runde nehmen, in der der Alleinspieler sein <em>letztes</em> Karo spielt, damit er vom Rest der Farbe im Dummy abgeschnitten ist. Beginnt der Partner mit der 9 (hoch: eine gerade Anzahl, hier zwei), hat der Alleinspieler drei: Ducken Sie zweimal und nehmen Sie die dritte Runde. Spielt der Partner zuerst die 4 (tief: ungerade, hier drei), hat der Alleinspieler zwei: Nehmen Sie die zweite Runde. Ohne die Längenmarkierung des Partners müssten Sie raten.</p>

<h3>Farbpräferenz</h3>
<p>Manchmal haben Ermutigung und Länge keine Bedeutung, und dann weist die Höhe der Karte auf eine andere Farbe. Der klassische Fall ist ein Schnapper. Pik ist Trumpf, und Sie spielen Coeur aus, damit der Partner schnappt. Die übrigen Farben sind Karo und Treff. Spielen Sie ein <strong>hohes</strong> Coeur, um Karo zurückzubekommen (die höhere der beiden), und ein <strong>tiefes</strong> Coeur, um Treff zu verlangen. Halten Sie das ♦A, spielen Sie Ihr höchstes Coeur; der Partner schnappt, spielt Karo zu Ihrem Ass zurück, und Sie geben ihm einen zweiten Schnapper.</p>
<p>Ohne Präferenz spielen Sie eine mittlere Karte. Manche Partnerschaften verwenden Farbpräferenz auch beim Rückspiel der Partnerfarbe; die Bots hier tun das nur, wenn sie einen Schnapper geben.</p>

<h3>Gute Gewohnheiten</h3>
<ul>
<li>Markieren Sie auf das Ausspiel des Partners zuerst Ermutigung, auf das Ausspiel des Alleinspielers Länge; Farbpräferenz nur, wenn die Situation eindeutig ist.</li>
<li>Markieren Sie nicht mit einer Karte, die später einen Stich machen könnte. Aus Q J 10 9 7 kann die 7 als Ermutigung genügen.</li>
<li>Markieren Sie in gleichmäßigem Tempo: Denken Sie nach, wenn der Dummy aufgelegt wird, nicht mitten im Stich.</li>
<li>Geben Sie keine Längenmarkierung, wenn sie nur dem Alleinspieler helfen kann, zum Beispiel wenn er rät, wie er eine Farbe spielen soll, und die Länge für den Partner nutzlos wäre. Die Bots hier markieren immer die Länge, wenn der Alleinspieler eine Nebenfarbe spielt, damit Sie das Lesen üben können.</li>
</ul>
<div class="warn">Eine Markierung ist eine Information, kein Befehl. Der Partner kombiniert sie mit dem, was er im Dummy und in seiner eigenen Hand sieht, und kann gute Gründe haben, etwas anderes zu tun.</div>
`,
    keyPoints: [
      'Ermutigung auf das Ausspiel des Partners und beim ersten Abwurf: hoch ermutigt, tief entmutigt.',
      'Länge, wenn der Alleinspieler eine Nebenfarbe spielt: hoch-tief zeigt eine gerade Anzahl, tief-hoch eine ungerade.',
      'Mit der Längenmarkierung wissen Sie, wann Sie Ihr Ass gegen eine lange Farbe im Dummy ohne Übergänge nehmen.',
      'Farbpräferenz: Eine hohe Karte verlangt die höhere der anderen Farben, eine tiefe die niedrigere; eine mittlere Karte zeigt keine Präferenz.',
      'Verschwenden Sie nie einen möglichen Stich, nur um zu markieren.',
    ],
    quiz: [
      {
        q: 'Der Partner spielt gegen 4♥ das ♠A aus (von AK). Der Dummy hat ♠8 6 4. Sie halten ♠Q 9 3. Welche Karte spielen Sie?',
        options: ['♠Q', '♠9', '♠3', 'Das ist egal'],
        answer: 1,
        explain: 'Die 9 ermutigt. Der Partner setzt mit dem König fort, und Ihre Dame gewinnt die dritte Runde. Mit der 3 würden Sie dem Partner sagen, dass Sie in Pik nichts haben.',
      },
      {
        q: 'Der Alleinspieler spielt eine Farbe an, in der Sie 8 3 halten. Welche Karte spielen Sie zuerst, um Ihre Länge zu zeigen?',
        options: ['Die 8', 'Die 3', 'Egal', 'Keine: nie Länge markieren'],
        answer: 0,
        explain: 'Hoch-tief zeigt eine gerade Anzahl. Spielen Sie jetzt die 8 und beim nächsten Mal die 3; der Partner weiß dann, dass Sie mit zwei (oder vier) Karten begonnen haben.',
      },
      {
        q: 'Ihr erster Abwurf mit Standardmarkierungen ist die ♣2. Was sagt sie?',
        options: ['Ich mag Treff', 'Ich will kein Treff', 'Ich habe zwei Treff', 'Karo ausspielen'],
        answer: 1,
        explain: 'Der erste Abwurf zeigt Ermutigung. Eine tiefe Karte rät von der abgeworfenen Farbe ab.',
      },
      {
        q: 'Der Dummy hat ♦K Q J 10 5 und keinen Übergang außerhalb; Sie halten ♦A 7 3. Der Alleinspieler spielt Karo, und der Partner spielt die 9 und dann die 4. Wann nehmen Sie Ihr Ass?',
        options: ['In der ersten Runde', 'In der zweiten Runde', 'In der dritten Runde', 'Nie'],
        answer: 2,
        explain: 'Hoch-tief des Partners zeigt eine gerade Anzahl, also zwei; der Alleinspieler hatte demnach drei. Nehmen Sie das Ass in der dritten Runde, wenn der Alleinspieler kein Karo mehr hat, um zum Dummy zu gelangen.',
      },
      {
        q: 'Pik ist Trumpf. Sie spielen Coeur aus, damit der Partner schnappt, und wollen Karo zurück. Welches Coeur spielen Sie aus ♥9 8 2?',
        options: ['♥9', '♥8', '♥2', 'Das ist egal'],
        answer: 0,
        explain: 'Das ist eine Situation für Farbpräferenz. Eine hohe Karte verlangt die höhere der übrigen Nebenfarben (Karo statt Treff).',
      },
    ],
  },

  {
    id: 'negative-doubles',
    title: 'Negative Kontras',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wie der Antwortende nach einer Gegenreizung mit einem Kontra die ungereizte Oberfarbe zeigt und wie Lauerpasse und Wiederbelebungskontra zusammenwirken.',
    body: `
<h3>Das Problem</h3>
<p>Der Partner eröffnet 1♦, und Ihr rechter Gegner reizt 1♠ gegen. Sie haben vier Coeur und 9 FP. Ein Gebot von 2♥ würde fünf Coeur und 10+ Punkte versprechen, also können Sie es nicht abgeben, wollen aber einen möglichen Coeur-Fit nicht verlieren. Die Lösung ist das <strong>negative Kontra</strong>: Nach der Eröffnung des Partners und einer Gegenreizung bis einschließlich 2♠ ist ein Kontra des Antwortenden ein Informationskontra und zeigt die ungereizte(n) Oberfarbe(n).</p>

<h3>Was das Kontra zeigt</h3>
<p>Stärke: 6+ FP, wenn die Gegenreizung auf der Einerstufe erfolgt, 8+ auf der Zweierstufe. Verteilung:</p>
<table>
<thead><tr><th>Reizung</th><th>Das Kontra des Antwortenden zeigt</th></tr></thead>
<tbody>
<tr><td>1♣ – (1♦) – X</td><td>Beide Oberfarben (meist je vier)</td></tr>
<tr><td>1♣ oder 1♦ – (1♥) – X</td><td>Genau vier Pik (1♠ würde fünf oder mehr zeigen)</td></tr>
<tr><td>1♣ oder 1♦ – (1♠) – X</td><td>Vier oder mehr Coeur (2♥ würde fünf und 10+ zeigen)</td></tr>
<tr><td>1♥ – (1♠) – X</td><td>Die Unterfarben oder Werte ohne klares Gebot</td></tr>
<tr><td>1♥ – (2♣ oder 2♦) – X</td><td>Vier Pik, 8+ FP</td></tr>
<tr><td>1♠ – (2♣ oder 2♦) – X</td><td>Vier oder mehr Coeur, 8+ FP</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:852 H:KJ74 D:Q3 C:K1065" data-label="1♦ – (1♠) – ?: Kontra"></div>
<div class="hand" data-cards="S:KJ75 H:842 D:Q63 C:J95" data-label="1♣ – (1♥) – ?: Kontra"></div>
<div class="hand" data-cards="S:AQ74 H:5 D:K863 C:J1072" data-label="1♥ – (2♣) – ?: Kontra"></div>
<p>Die erste Hand zeigt ihre vier Coeur. Die zweite hat genau vier Pik und 7 FP: Kontra statt 1♠. Die dritte zeigt vier Pik und genug Stärke für die Zweierstufe.</p>

<h3>Das Wiedergebot des Eröffners nach einem negativen Kontra</h3>
<ul>
<li>Mit vier Karten in der Oberfarbe, die der Partner gezeigt hat, reizen Sie diese: mit Minimum auf der niedrigsten Stufe, mit Extrawerten (etwa 16–18) mit Sprung.</li>
<li>Andernfalls geben Sie Ihr normales Wiedergebot ab: eine Sechserlänge wiederholen, eine zweite Farbe reizen oder mit einem Stopper in der Farbe des Gegenreizers SA reizen.</li>
<li>Mit einer langen, starken Besetzung in der Farbe des Gegenreizers können Sie das Kontra zur Strafe stehen lassen.</li>
</ul>

<h3>Lauerpasse und Wiederbelebungskontra</h3>
<p>Weil das Kontra des Antwortenden ein Informationskontra ist, kann er mit einer starken Besetzung in der Farbe des Gegenreizers nicht zur Strafe kontrieren. Stattdessen <strong>passt</strong> der Antwortende und wartet ab. Ist der Eröffner in der gegengereizten Farbe kurz, sollte er mit einem Kontra wiederbeleben, das der Antwortende durch Passen in ein Strafkontra verwandelt.</p>
<div class="hand" data-cards="S:K5 H:73 D:Q984 C:KQ1093" data-label="1♥ – (2♣) – ?: Passe"></div>
<div class="auction" data-calls="1H 2C P P X P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:A863 H:AQJ74 D:K52 C:6" data-label="Eröffner (Nord): Wiederbelebungskontra"></div>
<p>Süds ♣KQ1093 sitzen hinter den Treffkarten von Ost, und 2♣ kontriert dürfte mehrfach fallen. Nord mit einem Treff-Single belebt mit Kontra wieder, weil das Passe des Partners genau so eine Hand sein kann. Mit Länge in der Farbe des Gegenreizers sollte der Eröffner mit dem Wiederbeleben vorsichtiger sein: Dann lauert der Partner kaum auf eine Strafe.</p>
<div class="tip">Nach einer Gegenreizung ist eine neue Farbe des Antwortenden weiterhin natürlich und forcierend, zeigt aber fünf Karten, da für vier das negative Kontra zur Verfügung stand.</div>
<div class="warn">Ein negatives Kontra ist kein Strafkontra. Wenn Sie die Gegenreizung bestrafen wollen, passen Sie und hoffen, dass der Partner wiederbelebt.</div>
`,
    keyPoints: [
      'Eröffnet der Partner und reizt der rechte Gegner gegen (bis 2♠), ist das Kontra des Antwortenden ein Informationskontra.',
      'Es zeigt die ungereizte(n) Oberfarbe(n): 6+ FP auf der Einerstufe, 8+ auf der Zweierstufe.',
      '1♣/1♦ – (1♥) – X zeigt genau vier Pik; 1♠ würde fünf zeigen.',
      'Mit starker Länge in der Farbe des Gegenreizers passt der Antwortende; ist der Eröffner in dieser Farbe kurz, belebt er mit Kontra wieder.',
      'Der Eröffner reizt natürlich weiter und springt mit Extrawerten in der Oberfarbe des Partners.',
    ],
    quiz: [
      {
        q: '1♦ – (1♠) – ? Sie halten ♠852 ♥KJ74 ♦Q3 ♣K1065 (9 FP).',
        options: ['2♥', 'Kontra', '1SA', 'Passe'],
        answer: 1,
        explain: '2♥ würde fünf Coeur und 10+ Punkte versprechen. Das negative Kontra zeigt vier oder mehr Coeur mit 6+ und hält den Coeur-Fit im Blick.',
      },
      {
        q: '1♣ – (1♥) – ? Sie halten ♠KJ752 ♥84 ♦Q63 ♣J95 (7 FP).',
        options: ['Kontra', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Nach einer 1♥-Gegenreizung zeigt das Kontra genau vier Pik; mit fünf Pik reizen Sie also 1♠.',
      },
      {
        q: '1♥ – (2♣) – ? Sie halten ♠K5 ♥73 ♦Q984 ♣KQ1093 (10 FP).',
        options: ['Kontra', 'Passe', '3SA', '2SA'],
        answer: 1,
        explain: 'Sie würden gern zur Strafe kontrieren, aber Ihr Kontra wäre negativ. Passen Sie und rechnen Sie damit, dass der Partner mit Treff-Kürze mit einem Kontra wiederbelebt; das lassen Sie dann stehen.',
      },
      {
        q: 'Sie haben mit ♠A863 ♥AQJ74 ♦K52 ♣6 1♥ eröffnet. Ihr linker Gegner hat 2♣ gegengereizt, und nach zweimal Passe sind Sie wieder an der Reihe. Was tun Sie?',
        options: ['Passe', 'Kontra', '2♥', '2♠'],
        answer: 1,
        explain: 'Mit einem Single in der Farbe des Gegenreizers beleben Sie mit Kontra wieder. Der Partner hat vielleicht mit einer starken Treffbesetzung gepasst und lässt dann zur Strafe stehen; andernfalls reizt er seine beste Farbe.',
      },
      {
        q: 'Bis zu welcher Gegenreizung bleibt das Kontra des Antwortenden in diesem System ein negatives Kontra (Informationskontra)?',
        options: ['1♠', '2♠', '3♠', '4♠'],
        answer: 1,
        explain: 'Negative Kontras gelten bis einschließlich 2♠. Darüber wird ein Kontra nach Absprache oft ebenfalls als Informationskontra gespielt, aber dieses System legt es nur bis 2♠ fest.',
      },
    ],
  },

  {
    id: 'slam-bidding-and-blackwood',
    title: 'Schlemm erkennen und Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Woran Sie erkennen, dass ein Schlemm möglich ist, und wie Sie mit Blackwood sicherstellen, dass nicht zwei Asse fehlen.',
    body: `
<h3>Warum der Schlemm so wichtig ist</h3>
<p>Ein Kleinschlemm bringt nicht in Gefahr 500 Extrapunkte, in Gefahr 750; ein Großschlemm 1000 oder 1500. Einen erfüllbaren Schlemm zu reizen, den andere verpassen, ist viel wert; einer, der fällt, kostet etwa ebenso viel. Sie brauchen zweierlei: genug <strong>Stiche</strong> (Stärke, Fit und Verteilung) und genug <strong>Kontrollen</strong> (die Gegner dürfen nicht zwei schnelle Stiche abziehen können).</p>

<h3>Anzeichen für einen Schlemm</h3>
<ul>
<li><strong>Gemeinsame Stärke:</strong> etwa 33 Punkte für einen Kleinschlemm und 37 für einen Großschlemm, bei ausgeglichenen Händen. Mit gutem Trumpf-Fit und Verteilung genügen weniger.</li>
<li><strong>Der Partner zeigt Extrawerte</strong>, während auch Sie eine gute Hand haben: ein Sprungwechsel, ein Revers, eine starke 2♣-Eröffnung, eine Sprunghebung gegenüber Ihrer Eröffnung, Jacoby 2SA gegenüber Extrawerten.</li>
<li><strong>Ein großer Fit</strong> (neun oder zehn Trümpfe) plus eine Stichquelle, etwa eine lange Nebenfarbe.</li>
<li><strong>Kontrollen:</strong> Asse, Könige und Kürzen in den Nebenfarben.</li>
</ul>

<h3>Der Plan</h3>
<ol>
<li>Vereinbaren Sie eine Trumpffarbe (oder entscheiden Sie sich für SA).</li>
<li>Stellen Sie fest, dass die gemeinsame Stärke ausreicht.</li>
<li>Prüfen Sie die Kontrollen, meist mit Blackwood.</li>
<li>Reizen Sie den Schlemm oder bleiben Sie auf der Fünferstufe stehen.</li>
</ol>

<h3>Blackwood</h3>
<p>Ist eine Farbe vereinbart, fragt ein Gebot von 4SA den Partner, wie viele Asse er hält:</p>
<table>
<thead><tr><th>Antwort</th><th>Asse</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>0 oder 4</td></tr>
<tr><td>5♦</td><td>1</td></tr>
<tr><td>5♥</td><td>2</td></tr>
<tr><td>5♠</td><td>3</td></tr>
</tbody>
</table>
<p>Aus der Reizung geht immer hervor, ob 5♣ 0 oder 4 bedeutet. Fehlen zwei Asse, schließen Sie mit fünf in Ihrer Trumpffarbe ab; der Partner muss passen. Fehlt eines, reizen Sie den Kleinschlemm. Fehlt keines und Sie interessieren sich für einen Großschlemm, fragen Sie mit <strong>5SA</strong> nach Königen: 6♣ = 0 oder 4, 6♦ = 1, 6♥ = 2, 6♠ = 3. 5SA verspricht, dass das Paar alle vier Asse hält.</p>
<p>Wer Blackwood fragt, ist der Kapitän: Der Partner antwortet nur und akzeptiert dann die Entscheidung.</p>

<h3>Roman Key Card Blackwood</h3>
<p>Die meisten Spieler verwenden heute eine Verfeinerung, <strong>Roman Key Card Blackwood</strong>, und genau das spielen die Bots in dieser App standardmäßig. Es zählt fünf <strong>Schlüsselkarten</strong>, die vier Asse und den Trumpfkönig, und gibt außerdem Auskunft über die Trumpfdame:</p>
<table>
<thead><tr><th>Antwort</th><th>Schlüsselkarten</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 oder 4</td></tr>
<tr><td>5♦</td><td>0 oder 3</td></tr>
<tr><td>5♥</td><td>2, ohne Trumpfdame</td></tr>
<tr><td>5♠</td><td>2, mit Trumpfdame</td></tr>
</tbody>
</table>
<p>Die Entscheidungen funktionieren genauso: Fehlen zwei Schlüsselkarten, bleiben Sie auf der Fünferstufe; fehlt eine, reizen Sie den Kleinschlemm. Die Lektion „Roman Key Card Blackwood“ behandelt die Konvention ausführlich, einschließlich der Frage nach der Trumpfdame.</p>

<h3>Ein Beispiel</h3>
<div class="deal" data-n="S:AK1074 H:KQ6 D:A5 C:Q83" data-s="S:QJ63 H:A84 D:KQ62 C:K5"></div>
<div class="auction" data-calls="1S P 2NT P 3S P 4NT P 5H P 6S P P P" data-dealer="N"></div>
<p>Nord eröffnet mit 18 FP 1♠. Süd reizt mit 15 FP und vier Pik 2SA, die Jacoby-Hebung: vollspielforcierend mit Unterstützung. Nords 3♠ ist der übliche Weg, Extrawerte ohne Single oder Chicane zu zeigen. Süd kann nun zusammen etwa 33 Punkte und einen 9er-Fit zählen, ein Schlemm ist also wahrscheinlich. 4SA fragt nach Assen, 5♥ zeigt zwei. Mit dem ♥A in der Hand weiß Süd, dass nur ein Ass fehlt, und reizt 6♠.</p>
<p>Mit Roman Key Card Blackwood, wie die Bots es spielen, antwortet Nord 5♦: drei Schlüsselkarten, das ♠A, das ♦A und der ♠K. Süd, der nur das ♥A hält, erkennt, dass es drei und nicht null sind; es fehlt also eine Schlüsselkarte. Süd hat die ♠Q, und 6♠ wird genauso erreicht.</p>
<p>Im Spiel ist das ♣A der einzige Verlierer: Der Alleinspieler zieht Trumpf, zieht die Coeurstiche ab und spielt das ♦A, Karo zum König und die ♦Q vom Dummy, auf die er ein Treff von Nord abwirft.</p>

<h3>Die Grenzen von Blackwood</h3>
<p>Blackwood zählt Asse; es sagt Ihnen nicht, <em>welche</em> Asse, oder ob eine Nebenfarbe zwei schnelle Verlierer hat. Verwenden Sie es nicht:</p>
<ul>
<li>mit einer Chicane (das Ass des Partners kann in Ihrer Chicane-Farbe sitzen, wo es verschwendet ist);</li>
<li>mit zwei kleinen Karten in einer ungereizten Farbe (der Partner hat dort vielleicht weder Ass noch König);</li>
<li>wenn eine Antwort auf der Fünferstufe Sie über Ihren sicheren Kontrakt hinaustragen könnte, wie es mit Treff als Trumpf oft passiert.</li>
</ul>
<p>In diesen Fällen sind Kontrollgebote (Cuebids) das richtige Werkzeug; siehe die Lektion „Kontrollen und Cuebids: wann Blackwood nicht passt“.</p>
<div class="warn">4SA ist nicht immer Blackwood. Wenn keine Farbe vereinbart ist und das letzte Gebot des Partners ein natürliches SA-Gebot war (1SA – 4SA, 2SA – 4SA), ist 4SA quantitativ: Es lädt zu 6SA ein. Um über dem SA-Gebot des Partners nach Assen zu fragen, verwenden Sie Gerber 4♣.</div>
`,
    keyPoints: [
      'Ein Kleinschlemm braucht etwa 33 gemeinsame Punkte (Großschlemm etwa 37); Fit und Verteilung können das senken.',
      'Klären Sie zuerst Trumpffarbe und Stärke, dann prüfen Sie die Kontrollen.',
      'Einfaches Blackwood: 5♣ 0/4, 5♦ 1, 5♥ 2, 5♠ 3; 5SA fragt dann nach Königen. Die Bots spielen Roman Key Card Blackwood: 5♣ 1/4, 5♦ 0/3, 5♥ 2, 5♠ 2 und die Trumpfdame.',
      'Fehlen zwei Asse, bleiben Sie auf fünf in der vereinbarten Farbe stehen.',
      'Kein Blackwood mit einer Chicane oder mit zwei schnellen Verlierern in einer ungereizten Farbe.',
    ],
    quiz: [
      {
        q: 'Der Partner reizt 4SA (einfaches Blackwood), und Sie halten ein Ass. Was antworten Sie?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 1,
        explain: '5♣ zeigt 0 oder 4, 5♦ eins, 5♥ zwei, 5♠ drei.',
      },
      {
        q: 'Sie reizen 4SA, und der Partner antwortet 5♥ (zwei Asse). Sie halten die beiden anderen Asse. Was nun?',
        options: ['Mit fünf in der Trumpffarbe abschließen', 'Den Kleinschlemm reizen oder mit 5SA nach Königen fragen, wenn ein Großschlemm möglich ist', '5♥ passen', 'Unabhängig von der Farbe 6SA reizen'],
        answer: 1,
        explain: 'Es fehlt kein Ass, also können die Gegner gegen den Kleinschlemm nicht zwei schnelle Asse abziehen. Wenn die Hände dreizehn Stiche bringen könnten, fragt 5SA nach Königen und sagt dem Partner, dass alle Asse vorhanden sind.',
      },
      {
        q: 'Pik ist vereinbart. Sie reizen 4SA, und der Partner antwortet 5♦ (ein Ass). Sie halten ein Ass. Was tun Sie?',
        options: ['6♠ reizen', '5♠ reizen', '5SA reizen', 'Passe'],
        answer: 1,
        explain: 'Es fehlen zwei Asse, die Gegner könnten also sofort zwei Stiche abziehen. Schließen Sie mit 5♠ ab; der Partner muss passen.',
      },
      {
        q: 'Zwei ausgeglichene Hände mit zusammen 33 FP und kein Trumpf-Fit. Welcher Kontrakt?',
        options: ['3SA', '4SA', '6SA', '7SA'],
        answer: 2,
        explain: 'Mit etwa 33 gemeinsamen FP hat man gute Chancen auf zwölf Stiche in SA. Für einen Großschlemm bräuchte man 37.',
      },
      {
        q: 'Der Partner antwortet auf Ihr 4SA (einfaches Blackwood) mit 5♣. Was zeigt das?',
        options: ['Treff', 'Kein Ass oder alle vier', 'Ein Ass', 'Drei Asse'],
        answer: 1,
        explain: '5♣ bedeutet 0 oder 4 Asse. Die Reizung oder Ihre eigene Hand macht klar, was zutrifft: Halten Sie selbst ein Ass, kann der Partner nicht vier haben.',
      },
    ],
  },

  {
    id: 'gerber-and-quantitative',
    title: 'Gerber und das quantitative 4SA',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Wie Sie nach einer SA-Eröffnung einen Schlemm ausloten: mit Gerber nach Assen fragen und mit einem quantitativen 4SA einladen.',
    body: `
<h3>Schlemm nach einer SA-Eröffnung</h3>
<p>Eröffnet der Partner 1SA (15–17) oder 2SA (20–21), kennen Sie seine Stärke auf zwei oder drei Punkte genau und können oft einfach die Punkte addieren und selbst entscheiden. Zwei Werkzeuge helfen dabei:</p>
<ul>
<li><strong>4SA, quantitativ:</strong> „Partner, reizen Sie 6SA, wenn Sie im oberen Bereich sind.“</li>
<li><strong>4♣, Gerber:</strong> „Partner, wie viele Asse haben Sie?“</li>
</ul>

<h3>Das quantitative 4SA</h3>
<p>Eine direkte Hebung von 1SA auf 4SA ist kein Blackwood. Sie zeigt 16–17 Punkte, zusammen also 31–34, an der Grenze der 33, die man für einen Schlemm braucht. Der Eröffner passt mit Minimum (15) und reizt mit Maximum (17) 6SA; mit 16 entscheidet er nach eigenem Urteil und nimmt mit einer guten Fünferlänge oder guten Zwischenkarten an.</p>
<div class="hand" data-cards="S:KQ5 H:AJ4 D:KJ63 C:Q72" data-label="Partner hat 1SA eröffnet: 4SA"></div>
<p>16 FP, ausgeglichen. Reizen Sie 4SA. Mit 18–21 würden Sie direkt 6SA reizen, da schon ein Minimum des Eröffners 33 ergibt; mit 22 oder mehr reizen Sie 7SA, da schon ein Minimum 37 ergibt.</p>
<p>Über 2SA (20–21) zeigt 4SA 11–12 und bittet den Eröffner, mit Maximum 6SA zu reizen.</p>
<table>
<thead><tr><th>Antwortender nach</th><th>3SA</th><th>4SA (einladend)</th><th>6SA</th><th>7SA</th></tr></thead>
<tbody>
<tr><td>1SA (15–17)</td><td>10–15</td><td>16–17</td><td>18–21</td><td>22+</td></tr>
<tr><td>2SA (20–21)</td><td>4–10</td><td>11–12</td><td>13–16</td><td>17+</td></tr>
</tbody>
</table>

<h3>Gerber</h3>
<p>Ein Sprung auf 4♣ direkt über die 1SA- oder 2SA-Eröffnung des Partners (oder über 2♣ – 2♦ – 2SA) fragt nach Assen:</p>
<table>
<thead><tr><th>Antwort auf 4♣</th><th>Asse</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>0 oder 4</td></tr>
<tr><td>4♥</td><td>1</td></tr>
<tr><td>4♠</td><td>2</td></tr>
<tr><td>4SA</td><td>3</td></tr>
</tbody>
</table>
<p>Nach der Antwort fragt 5♣ des Fragenden nach demselben Schema nach Königen (5♦ = 0 oder 4, 5♥ = 1, 5♠ = 2, 5SA = 3). Jedes andere Gebot legt den Kontrakt fest; ein 4SA-Gebot des Fragenden ist ein Abschlussgebot, und war die Antwort des Partners 4SA, kann der Fragende einfach passen.</p>
<div class="hand" data-cards="S:KQJ1065 H:KQ4 D:KQ3 C:5" data-label="Partner hat 1SA eröffnet: 4♥ (Texas)"></div>
<p>16 FP (zusammen 31–33) und sechs starke Pik: Die Hand ist reich an Stichen, enthält aber kein Ass, die Frage sind also die Asse. Die Bots spielen standardmäßig Texas-Transfers: Reizen Sie 4♥, der Partner vollendet den Transfer mit 4♠, und Ihr 4SA ist dann Roman Key Card Blackwood, das auch König und Dame in Pik mitzählt. Ohne Texas reizen Sie 4♣, Gerber: Auf 4♠ (zwei Asse) passen Sie und spielen 4♠; auf 4SA (drei Asse) reizen Sie 6♠.</p>

<h3>Welches Werkzeug wann?</h3>
<ul>
<li>Nehmen Sie das quantitative 4SA, wenn es um die <strong>Stärke</strong> geht: Sie wissen nicht sicher, ob die gemeinsamen Punkte 33 erreichen.</li>
<li>Nehmen Sie Gerber, wenn es um die <strong>Asse</strong> geht: mit einer stichreichen (unausgeglichenen) Hand, bei der die Stärke nicht das Problem ist. Mit ausgeglichenen Händen und 33+ gemeinsamen FP können nicht zwei Asse fehlen; dann zählen Sie einfach Punkte.</li>
<li>Mit einer langen Farbe gegenüber 1SA transferieren Sie zuerst (oder reizen natürlich), um die Farbe festzulegen, und setzen dann die Schlemmwerkzeuge ein. Mit einer langen, starken Farbe ist das Zählen der Stiche wichtiger als das Zählen der Punkte.</li>
</ul>
<div class="tip">Zählen Sie bis 33 für einen Kleinschlemm in SA und bis 37 für einen Großschlemm. Mit einer Stichquelle, etwa einer geschlossenen Fünfer- oder Sechserlänge, brauchen Sie etwas weniger.</div>
<div class="warn">Verwechseln Sie 1SA – 4SA (quantitativ) nicht mit Blackwood. Wenn Sie gegenüber dem SA des Partners etwas über die Asse wissen wollen, reizen Sie 4♣.</div>
`,
    keyPoints: [
      '1SA – 4SA = 16–17, quantitativ: Mit Maximum reizt der Eröffner 6SA.',
      '2SA – 4SA = 11–12, quantitativ.',
      'Gerber 4♣ über 1SA oder 2SA: 4♦ 0/4, 4♥ 1, 4♠ 2, 4SA 3; 5♣ fragt dann nach Königen.',
      'Quantitatives 4SA, wenn es um die Stärke geht; Gerber, wenn es um die Asse geht.',
      'Ein Schlemm in SA braucht etwa 33 Punkte (Kleinschlemm) oder 37 (Großschlemm).',
    ],
    quiz: [
      {
        q: 'Der Partner eröffnet 1SA, und Sie reizen 4♣ (Gerber). Der Partner hält ein Ass. Wie lautet die Antwort?',
        options: ['4♦', '4♥', '4♠', '4SA'],
        answer: 1,
        explain: 'Die Gerber-Antworten steigen in Stufen ab 4♦: 4♦ = 0 oder 4, 4♥ = 1, 4♠ = 2, 4SA = 3.',
      },
      {
        q: 'Was bedeutet 1SA – 4SA?',
        options: ['Blackwood', 'Eine quantitative Einladung zu 6SA mit 16–17', 'Ein Abschlussgebot', 'Gerber'],
        answer: 1,
        explain: 'Es ist keine Farbe vereinbart, und der Partner hat natürlich SA gereizt, also lädt 4SA zum Schlemm ein. Mit Maximum reizt der Eröffner 6SA, mit Minimum passt er.',
      },
      {
        q: 'Sie haben mit 17 FP 1SA eröffnet. Der Partner hebt auf 4SA. Was tun Sie?',
        options: ['Passe', '5♥ reizen, um zwei Asse zu zeigen', '6SA reizen', '5SA reizen'],
        answer: 2,
        explain: '17 ist das obere Ende des Bereichs: 17 + 16–17 = 33–34. Nehmen Sie die Einladung mit 6SA an.',
      },
      {
        q: 'Der Partner eröffnet 2SA. Sie haben eine ausgeglichene Hand mit 12 FP. Was reizen Sie?',
        options: ['3SA', '4SA', '6SA', '4♣'],
        answer: 1,
        explain: '20–21 + 12 = 32–33. Laden Sie mit 4SA ein (11–12); mit 21 reizt der Partner 6SA.',
      },
      {
        q: '1SA – 4♣ – 4♠ (zwei Asse). Sie haben kein Ass. Was reizen Sie?',
        options: ['6SA', '4SA', '5♣', '7SA'],
        answer: 1,
        explain: 'Es fehlen zwei Asse, ein Schlemm könnte also die ersten beiden Stiche verlieren. 4SA nach der Gerber-Antwort ist ein Abschlussgebot.',
      },
    ],
  },

  {
    id: 'rule-of-eleven',
    title: 'Die Elferregel',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Wie das Ausspiel der vierthöchsten Karte es Gegenspielern und Alleinspieler erlaubt, herauszufinden, wie viele höhere Karten jede Hand hält.',
    body: `
<h3>Die Regel</h3>
<p>Spielt der Partner seine <strong>vierthöchste</strong> Karte aus, ziehen Sie ihren Wert von 11 ab. Das Ergebnis ist die Anzahl der Karten über der ausgespielten Karte, die die <em>drei anderen Hände</em> halten: Dummy, Sie und der Alleinspieler. Den Dummy und Ihre eigene Hand sehen Sie, also können Sie ausrechnen, wie viele höhere Karten der Alleinspieler hat.</p>

<h3>Warum sie funktioniert</h3>
<p>Über einer Karte mit dem Wert r liegen 14 − r Karten (das Ass zählt 14). Ist das Ausspiel die vierthöchste Karte, hält der Ausspieler genau drei davon. Für die drei anderen Hände bleiben 14 − r − 3 = 11 − r.</p>

<h3>Ein Beispiel im Gegenspiel</h3>
<table>
<thead><tr><th>Platz</th><th>Karo</th></tr></thead>
<tbody>
<tr><td>Nord (Dummy)</td><td>Q 10 4</td></tr>
<tr><td>West (Partner, spielt die 7 aus)</td><td>A J 9 7 5</td></tr>
<tr><td>Ost (Sie)</td><td>K 8 2</td></tr>
<tr><td>Süd (Alleinspieler)</td><td>6 3</td></tr>
</tbody>
</table>
<p>Gegen 3SA spielt der Partner die ♦7 aus. 11 − 7 = 4 Karten höher als die 7 in den drei anderen Händen. Der Dummy hat zwei (Q, 10), Sie haben zwei (K, 8). Der Alleinspieler hat also keine und kann die 7 nicht schlagen.</p>
<p>Gibt der Dummy klein zu, können Sie die 2 spielen und die 7 des Partners den Stich gewinnen lassen. Der Partner bleibt am Ausspiel und setzt die Farbe durch Q 10 des Dummys zu Ihrem K 8 fort, und die Gegenspieler machen jeden Karostich. Spielen Sie stattdessen den K, macht Q 10 im Dummy einen Stich, wenn die Farbe fortgesetzt wird.</p>

<h3>Auch der Alleinspieler kann sie nutzen</h3>
<p>Angenommen, West spielt gegen Ihr 3SA die ♠7 aus (vierthöchste). Der Dummy hat ♠A 10 5, und Sie halten ♠K 9 3. 11 − 7 = 4 höhere Karten bei Nord, Ost und Süd; Sie sehen alle vier (A, 10, K, 9). Ost hat kein Pik höher als die 7. Sie können also vom Dummy klein spielen und billig mit der 9 gewinnen; Ass und König bleiben als Stopper erhalten.</p>

<h3>Die niedrigste Karte zeigt die Länge</h3>
<p>Spielt der Partner die 2 als vierthöchste Karte aus, kann er keine fünfte, niedrigere Karte haben: Er hat genau vier Karten in der Farbe. Eine ausgespielte 3, während die 2 anderswo zu sehen ist, erzählt dasselbe. Das hilft Ihnen, die Hand des Alleinspielers zu zählen.</p>

<h3>Wann die Regel versagt</h3>
<p>Die Elferregel gilt nur, wenn wirklich die vierthöchste Karte ausgespielt wurde. Sie gilt nicht für Ausspiele aus Sequenzen (der K aus KQJ), für „Top of Nothing“ oder das Ausspiel vom Double, ebenso wenig für Ausspiele in der Farbe des Partners von einer Figur mit kleinen Karten. Ergibt die Rechnung ein unmögliches Ergebnis (etwa eine negative Zahl höherer Karten beim Alleinspieler), war das Ausspiel nicht die vierthöchste Karte, und auch das verrät Ihnen etwas.</p>
<div class="tip">Rechnen Sie, sobald der Dummy aufgelegt ist, noch bevor die dritte Hand spielt. Dann wissen Sie sofort, ob Sie hoch spielen müssen oder die Karte des Partners gewinnen lassen können.</div>
<div class="warn">Wenden Sie die Regel gegen Farbkontrakte nicht mechanisch an, wenn der Partner aus einer kurzen Farbe ausspielen könnte. Nutzen Sie sie, wenn das Ausspiel eindeutig die vierthöchste Karte aus einer Länge ist, was meist gegen SA der Fall ist.</div>
`,
    keyPoints: [
      'Beim Ausspiel der vierthöchsten Karte gilt: 11 minus ihr Wert = höhere Karten in den drei anderen Händen.',
      'Ziehen Sie ab, was Sie im Dummy und in Ihrer Hand sehen, um zu wissen, wie viele davon der Alleinspieler hält.',
      'Der Alleinspieler kann dieselbe Rechnung für die Hände der Gegenspieler anstellen.',
      'Eine 2 als vierthöchste Karte zeigt genau vier Karten.',
      'Die Regel funktioniert nur, wenn wirklich die vierthöchste Karte ausgespielt wurde.',
    ],
    quiz: [
      {
        q: 'Der Partner spielt die 7 als vierthöchste Karte aus. Wie viele Karten höher als die 7 halten Dummy, Sie und der Alleinspieler zusammen?',
        options: ['3', '4', '5', '7'],
        answer: 1,
        explain: '11 − 7 = 4. Über der 7 liegen sieben Karten (8, 9, 10, J, Q, K, A), und der Partner hält drei davon.',
      },
      {
        q: 'Der Partner spielt gegen 3SA die ♥6 aus (vierthöchste). Der Dummy hat ♥K 9 3, und Sie halten ♥A 10 4. Wie viele Coeur höher als die 6 hält der Alleinspieler?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explain: '11 − 6 = 5. Der Dummy hat zwei höhere (K, 9) und Sie zwei (A, 10), der Alleinspieler also eine.',
      },
      {
        q: 'Der Partner spielt gegen 3SA die ♣2 aus; Sie spielen mit Ausspiel der vierthöchsten Karte. Wie viele Treff hat der Partner?',
        options: ['Drei', 'Genau vier', 'Fünf oder mehr', 'Nicht feststellbar'],
        answer: 1,
        explain: 'Die 2 ist die niedrigste Karte, es gibt also keine darunter: Als vierthöchste Karte zeigt sie genau vier Treff.',
      },
      {
        q: 'Sie sind Alleinspieler in 3SA. West spielt die ♠7 aus (vierthöchste). Der Dummy hat ♠A 10 5, und Sie halten ♠K 9 3. Wie viele Pik höher als die 7 hält Ost?',
        options: ['0', '1', '2', '3'],
        answer: 0,
        explain: '11 − 7 = 4 höhere Karten bei Nord, Ost und Süd, und Sie sehen alle vier (A, 10, K, 9). Ost hat keine, also können Sie billig mit der 9 gewinnen.',
      },
      {
        q: 'Wann gilt die Elferregel nicht?',
        options: ['Gegen SA', 'Wenn nicht die vierthöchste Karte ausgespielt wurde, zum Beispiel die höchste einer Sequenz', 'Wenn der Dummy eine Figur hat', 'Wenn Sie ein Single haben'],
        answer: 1,
        explain: 'Die Rechnung beruht darauf, dass der Ausspieler genau drei höhere Karten hält. Sequenzausspiele, „Top of Nothing“ und ähnliche Ausspiele verletzen diese Annahme.',
      },
    ],
  },
];
