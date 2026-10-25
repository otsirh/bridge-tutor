// Lessons on the optional conventions (German): Roman Key Card Blackwood,
// splinters and Drury, new minor forcing and fourth suit forcing, Texas transfers.
// Every example auction is the one the bots bid with these hands.

import type { Lesson } from '../../types';

export const LESSONS_4: Lesson[] = [
  {
    id: 'roman-key-card-blackwood',
    title: 'Roman Key Card Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Das moderne 4SA: Frage nach den vier Assen und dem Trumpfkönig, danach nach der Trumpfdame und den Königen in den Nebenfarben – damit Sie die Schlemms reizen, die gehen, und rechtzeitig bremsen, wenn zwei Schlüsselkarten fehlen.',
    body: `
<h3>Fünf Schlüsselkarten</h3>
<p>Das einfache Blackwood zählt nur Asse, doch König und Dame in Trumpf sind genauso wichtig: Ein Schlemm, dem ein Ass und der Trumpfkönig fehlen, ist genauso verloren wie einer, dem zwei Asse fehlen. <strong>Roman Key Card Blackwood</strong> (RKCB) behandelt den Trumpfkönig wie ein fünftes Ass. Sobald eine Farbe vereinbart ist, fragt 4SA nach den <strong>fünf Schlüsselkarten</strong>: den vier Assen und dem Trumpfkönig. Die Antworten verraten außerdem etwas über die Trumpfdame.</p>
<p>Trumpf ist die vereinbarte Farbe; ist keine Farbe vereinbart, gilt die zuletzt natürlich gereizte Farbe Ihrer Seite. Die Bots in dieser App spielen standardmäßig RKCB (in den Systemeinstellungen können Sie auf das einfache Blackwood zurückschalten).</p>

<h3>Die Antworten (1430)</h3>
<table>
<thead><tr><th>Antwort</th><th>Schlüsselkarten</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 oder 4</td></tr>
<tr><td>5♦</td><td>0 oder 3</td></tr>
<tr><td>5♥</td><td>2, ohne Trumpfdame</td></tr>
<tr><td>5♠</td><td>2, mit Trumpfdame</td></tr>
</tbody>
</table>
<p>Der Name „1430“ kommt von den ersten beiden Antworten: 5♣ zeigt eine oder vier, 5♦ null oder drei. Der Fragende kann fast immer erkennen, was gemeint ist. Zählen Sie Ihre eigenen Schlüsselkarten und denken Sie daran, was der Partner gezeigt hat: Ein Partner, der eröffnet und stark gehoben hat, kann nicht null Schlüsselkarten haben – außerhalb Ihrer Hand gibt es nicht genug andere hohe Karten, um seine Punkte zusammenzubringen.</p>
<div class="hand" data-cards="S:KJ853 H:A7 D:K94 C:Q62" data-label="Pik ist vereinbart, der Partner reizt 4SA: Antwort 5♥"></div>
<p>Zwei Schlüsselkarten, das ♥A und der ♠K, aber nicht die ♠Q: 5♥.</p>

<h3>Nach der Antwort</h3>
<ul>
<li><strong>Zwei Schlüsselkarten fehlen</strong> oder eine und die Trumpfdame: Schließen Sie auf der Fünferstufe in der Trumpffarbe ab. Der Partner muss passen.</li>
<li><strong>Eine fehlt</strong> und die Dame haben Sie: Reizen Sie den Kleinschlemm.</li>
<li><strong>Keine fehlt</strong>: Reizen Sie den Kleinschlemm oder suchen Sie den Großschlemm.</li>
</ul>
<p>Der Fragende ist der Kapitän. Hat der Partner geantwortet, entscheidet der Fragende, und der Partner passt auf das Abschlussgebot oder den Schlemm.</p>

<h3>Die Frage nach der Trumpfdame</h3>
<p>Nach 5♣ oder 5♦ ist die Trumpfdame noch unbekannt. Wenn es auf sie ankommt, reizt der Fragende die <strong>nächste Stufe</strong> und überspringt dabei die Trumpffarbe: 5♦ über 5♣, 5♥ über 5♦. Der Partner antwortet:</p>
<ul>
<li>ohne die Dame: Rückkehr in die Trumpffarbe auf der niedrigsten Stufe;</li>
<li>mit der Dame: sechs in der Trumpffarbe (oder 5SA, wenn sechs in Trumpf die Antwort „keine Dame“ wäre).</li>
</ul>
<div class="deal" data-n="S:A74 H:AK D:AK94 C:AJ102" data-s="S:KJ1053 H:Q43 D:J3 C:Q83" data-caption="Nord eröffnet 2♣, und Süd zeigt eine gute Fünferlänge in Pik."></div>
<div class="auction" data-calls="2C P 2S P 4NT P 5C P 5D P 5S P 6S P P P" data-dealer="N"></div>
<p>Nord hält alle vier Asse, also zeigt Süds 5♣ eine Schlüsselkarte: den ♠K. Alle Schlüsselkarten sind vorhanden, aber von der ♠Q weiß Nord nichts, also fragt Nord mit 5♦. Süds 5♠ verneint die Dame, und Nord begnügt sich mit 6♠: Ein Großschlemm ohne Trumpfdame bräuchte eine glückliche Verteilung.</p>

<h3>Die Frage nach Königen</h3>
<p>Sind alle fünf Schlüsselkarten und die Trumpfdame vorhanden und ist ein Großschlemm möglich, reizt der Fragende <strong>5SA</strong> und fragt nach den Königen in den Nebenfarben (der Trumpfkönig ist schon mitgezählt): 6♣ = keiner, 6♦ = einer, 6♥ = zwei, 6♠ = drei. 5SA verspricht, dass nichts fehlt, daher darf der Partner mit zusätzlichen Stichen den Großschlemm reizen.</p>

<h3>Ein vollständiges Beispiel</h3>
<div class="deal" data-n="S:A54 H:AKQ3 D:A4 C:Q976" data-s="S:K9 H:J1095 D:KQJ106 C:AK"></div>
<div class="auction" data-calls="1C P 1H P 4H P 4NT P 5C P 5D P 6H P 7H P P P" data-dealer="N"></div>
<p>Nord springt mit Viererunterstützung und 19+ Punkten auf 4♥. Süd hat 17 FP und mit der Karofarbe eine Stichquelle, also ist ein Schlemm wahrscheinlich. 5♣ zeigt eine oder vier Schlüsselkarten. Süd selbst hat nur das ♣A, und Nords starke Hebung ist ohne Asse nicht denkbar, also sind es vier. Bleibt eine Frage, die ♥Q, und 5♦ stellt sie. Nord hat sie und reizt 6♥. Jetzt kann Süd dreizehn Stiche zählen: vier in Coeur, fünf in Karo (Nords ♦A mit Süds ♦KQJ10) sowie Ass und König in Pik und in Treff. Süd reizt 7♥, und Nord passt.</p>
<div class="tip">Bevor Sie 4SA reizen, vergewissern Sie sich, dass die Antwort Sie nicht über den gewünschten Kontrakt hinausträgt. Ist Treff oder Karo Trumpf, können Sie nach einer Antwort von 5♥ oder 5♠ nicht mehr auf der Fünferstufe stehen bleiben – Sie müssen also wissen, dass nicht zwei Schlüsselkarten fehlen können.</div>
<div class="warn">RKCB braucht eine vereinbarte Trumpffarbe. Nach einem natürlichen SA-Gebot des Partners ist 4SA quantitativ. Mit einer Chicane kann RKCB Ihnen nicht sagen, ob die Schlüsselkarten des Partners nützlich sind: Reizen Sie stattdessen Kontrollgebote (Cuebids).</div>
`,
    keyPoints: [
      'RKCB fragt nach fünf Schlüsselkarten: den vier Assen und dem Trumpfkönig.',
      'Antworten (1430): 5♣ 1 oder 4, 5♦ 0 oder 3, 5♥ 2 ohne Trumpfdame, 5♠ 2 mit Trumpfdame.',
      'Fehlen zwei Schlüsselkarten (oder eine und die Dame): auf der Fünferstufe halten. Fehlt eine: Kleinschlemm reizen.',
      'Nach 5♣ oder 5♦ fragt die nächste Stufe nach der Trumpfdame; ohne sie kehrt der Partner in die Trumpffarbe zurück.',
      '5SA fragt danach nach den Königen in den Nebenfarben und verspricht alle Schlüsselkarten und die Trumpfdame.',
    ],
    quiz: [
      {
        q: 'Coeur ist vereinbart, und der Partner reizt 4SA (RKCB). Sie halten ♠A72 ♥K965 ♦Q84 ♣J53. Was antworten Sie?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 2,
        explain: 'Zwei Schlüsselkarten, das ♠A und der ♥K, ohne die ♥Q: 5♥.',
      },
      {
        q: 'Was zeigt die Antwort 5♦ auf RKCB?',
        options: ['Eine Schlüsselkarte', 'Null oder drei Schlüsselkarten', 'Zwei Schlüsselkarten und die Trumpfdame', 'Karo'],
        answer: 1,
        explain: 'Bei den 1430-Antworten zeigt 5♣ eine oder vier, 5♦ null oder drei; welche Zahl gemeint ist, erschließt der Fragende aus der Reizung.',
      },
      {
        q: 'Pik ist vereinbart. Sie haben mit zwei Schlüsselkarten und der ♠Q 4SA gefragt, und der Partner antwortet 5♥ (zwei ohne Dame). Was nun?',
        options: ['Passe', '6♠: Eine Schlüsselkarte fehlt, aber die Dame haben Sie', '5♠: Zwei Schlüsselkarten fehlen', '5SA'],
        answer: 1,
        explain: 'Zwei plus zwei sind vier Schlüsselkarten, also fehlt eine, und die Trumpfdame halten Sie selbst. Reizen Sie den Kleinschlemm.',
      },
      {
        q: 'Pik ist vereinbart. Die 5♣ des Partners zeigen eine Schlüsselkarte, Sie halten die anderen vier, aber nicht die ♠Q. Welches Gebot fragt nach der Trumpfdame?',
        options: ['5♦', '5♥', '5♠', '5SA'],
        answer: 0,
        explain: 'Die Frage nach der Dame ist die nächste Stufe über der Antwort, die nicht die Trumpffarbe ist: 5♦ über 5♣.',
      },
      {
        q: 'Alle Schlüsselkarten und die Trumpfdame sind bei Ihnen, und Sie denken an einen Großschlemm. Wonach fragt 5SA?',
        options: ['Noch einmal nach Assen', 'Wie viele Könige in Nebenfarben der Partner hält', 'Nach der Trumpfdame', 'Nach nichts: Es ist zum Spielen'],
        answer: 1,
        explain: 'Nach RKCB fragt 5SA nach den Königen in den Nebenfarben (der Trumpfkönig wurde als Schlüsselkarte gezählt) und verspricht, dass keine Schlüsselkarte fehlt.',
      },
    ],
  },

  {
    id: 'splinters-and-drury',
    title: 'Splinter-Hebungen und Reverse Drury',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Zwei Hebungen der Oberfarbe des Partners: der Splinter, der Vollspielwerte und eine Kürze zeigt, damit der Eröffner den Schlemm beurteilen kann, und Drury, mit dem eine gepasste Hand gefahrlos eine Limit-Hebung zeigt.',
    body: `
<h3>Splinter-Hebungen</h3>
<p>Ein <strong>Splinter</strong> ist ein Doppelsprung in einer neuen Farbe, nachdem der Partner 1♥ oder 1♠ eröffnet hat. Er zeigt vier oder mehr Trümpfe, Vollspielwerte (etwa 13–16 Punkte einschließlich Kürze) und ein Single oder eine Chicane in der gereizten Farbe. Über diese Farbe sagt er sonst nichts aus, deshalb wird er alertiert.</p>
<table>
<thead><tr><th>Eröffnung</th><th>Splinter</th></tr></thead>
<tbody>
<tr><td>1♥</td><td>3♠, 4♣, 4♦</td></tr>
<tr><td>1♠</td><td>4♣, 4♦, 4♥</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AJ92 H:7 D:A1082 C:J1072" data-label="Der Partner hat 1♠ eröffnet: Reizen Sie 4♥"></div>
<p>10 FP, vier Trümpfe und ein Coeur-Single: 10 + 3 für das Single = 13 Unterstützungspunkte. 4♥ sagt dem Partner all das mit einem einzigen Gebot. Mit einer stärkeren Hand beginnen Sie mit Jacoby 2SA, mit 10–12 Punkten reizen Sie eine Limit-Hebung.</p>

<h3>Die Entscheidung des Eröffners: arbeitende Werte</h3>
<p>Gegenüber einem Splinter zählt der Eröffner nur die hohen Karten, die mitarbeiten. Figuren gegenüber dem Single des Partners sind meist verschwendet: Ein König oder eine Dame dort macht nie einen Stich, weil der Partner die Farbe schnappt. Nur das Ass zählt weiterhin. Ohne verschwendete Werte und mit etwa 16 oder mehr arbeitenden Punkten sucht der Eröffner den Schlemm, sonst schließt er mit vier in der Oberfarbe ab.</p>
<div class="deal" data-n="S:Q8763 H:AKJ98 D:43 C:A" data-s="S:AJ92 H:7 D:A1082 C:J1072"></div>
<div class="auction" data-calls="1S P 4H P 4S P P P" data-dealer="N"></div>
<p>Nord hat 14 FP, doch ♥K und ♥J liegen gegenüber Süds Single. Ohne sie hat Nord etwa 10 arbeitende Punkte, also schließt Nord ab. Elf Stiche sind da, zwölf nicht.</p>
<div class="deal" data-n="S:AK875 H:KQ1076 D:K10 C:8" data-s="S:Q932 H:AJ9853 D:A96 C:-"></div>
<div class="auction" data-calls="1S P 4C P 4D P 4H P 4NT P 5S P 6S P P P" data-dealer="N"></div>
<p>Hier hat Nord nichts in Treff, also arbeiten alle 15 FP, und die Coeurs passen gut. Nord reizt das Cuebid 4♦ und zeigt damit eine Karokontrolle und Schlemminteresse. Süd macht mit 4♥ mit und zeigt das ♥A, und Nord fragt nach Schlüsselkarten. Süds 5♠ zeigt zwei Schlüsselkarten und die Trumpfdame, und Nord reizt 6♠.</p>

<h3>Reverse Drury</h3>
<p>In dritter oder vierter Hand eröffnet der Partner manchmal etwas leicht. Haben Sie bereits gepasst und halten eine Limit-Hebung (drei oder mehr Trümpfe und 10–12 Punkte), kann ein Sprung auf drei in der Oberfarbe gegenüber einer leichten Eröffnung zu hoch sein. <strong>Reverse Drury</strong> löst das Problem: Eine gepasste Hand reizt über 1♥ oder 1♠ des Partners <strong>2♣</strong> und zeigt damit drei oder mehr Trümpfe und 10–12 Punkte. Das Gebot ist künstlich und sagt nichts über Treff aus.</p>
<ul>
<li>Mit einer Minimum- oder leichten Eröffnung reizt der Eröffner <strong>zwei in der Oberfarbe</strong>: Es gibt kein Vollspiel, und Sie passen.</li>
<li>Mit einer vollwertigen Eröffnung und Extrawerten reizt der Eröffner das <strong>Vollspiel</strong>.</li>
</ul>
<div class="deal" data-n="S:742 H:AQ82 D:Q42 C:Q73" data-s="S:KQJ98 H:9 D:AJ875 C:105" data-caption="Nord hat geteilt und gepasst; Süd eröffnet in dritter Hand 1♠."></div>
<div class="auction" data-calls="P P 1S P 2C P 2S P P P" data-dealer="N"></div>
<p>Süds 1♠ hat nur 11 FP. Über Drury sagt 2♠ „kein Vollspiel“, und das Paar bleibt sicher stehen: Neun Stiche sind die Grenze.</p>
<div class="tip">Drury ist nur für gepasste Hände und muss vereinbart sein. In dieser App ist es standardmäßig ausgeschaltet; schalten Sie es in den Systemeinstellungen ein, um es zu üben.</div>
<div class="warn">Ein Splinter verspricht vier Trümpfe. Mit nur drei reizen Sie etwas anderes: Der Partner rechnet mit dem vierten Trumpf, um die kurze Farbe zu schnappen.</div>
`,
    keyPoints: [
      'Ein Splinter (1♥ – 3♠/4♣/4♦, 1♠ – 4♣/4♦/4♥) zeigt vier oder mehr Trümpfe, Vollspielwerte und ein Single oder eine Chicane in der gereizten Farbe.',
      'Gegenüber einem Splinter zählen nur arbeitende Werte: Figuren gegenüber der Kürze sind verschwendet, außer dem Ass.',
      'Mit verschwendeten Werten schließt der Eröffner im Vollspiel ab; mit arbeitenden Werten reizt er ein Cuebid oder fragt nach Schlüsselkarten.',
      'Reverse Drury: 2♣ einer gepassten Hand über 1♥/1♠ zeigt drei oder mehr Trümpfe und 10–12 Punkte.',
      'Über Drury zeigt zwei in der Oberfarbe ein Minimum; das Vollspiel zeigt Extrawerte.',
    ],
    quiz: [
      {
        q: 'Der Partner eröffnet 1♠. Sie halten ♠KQ74 ♥A853 ♦K962 ♣5 (12 FP). Was reizen Sie?',
        options: ['2SA', '4♣', '3♠', '4♠'],
        answer: 1,
        explain: 'Vier Trümpfe, ein Treff-Single und 12 + 3 = 15 Unterstützungspunkte: Der Splinter 4♣ beschreibt die Hand mit einem Gebot.',
      },
      {
        q: 'Der Partner eröffnet 1♥, und Sie reizen 3♠. Was haben Sie gezeigt?',
        options: ['Lange Pik', 'Vier oder mehr Coeur, Vollspielwerte und ein Single oder eine Chicane in Pik', 'Eine schwache Hand mit Pik', 'Einen Pik-Stopper'],
        answer: 1,
        explain: 'Über 1♥ ist 3♠ ein Doppelsprung in einer neuen Farbe: ein Splinter.',
      },
      {
        q: 'Sie haben mit ♠AK1063 ♥KQ5 ♦Q84 ♣K7 1♠ eröffnet, und der Partner reizt den Splinter 4♥. Was tun Sie?',
        options: ['4♠: Ihr ♥K und Ihre ♥Q sind verschwendet', '4SA', 'Cuebid 5♣', '6♠'],
        answer: 0,
        explain: 'Fünf Ihrer 17 FP liegen gegenüber der Coeur-Kürze des Partners und machen keine Stiche. Mit etwa 12 arbeitenden Punkten schließen Sie ab.',
      },
      {
        q: 'Wer darf Reverse Drury verwenden?',
        options: ['Jeder Antwortende mit Unterstützung', 'Eine gepasste Hand mit drei oder mehr Trümpfen und 10–12 Punkten, nachdem der Partner 1♥ oder 1♠ eröffnet hat', 'Eine gepasste Hand mit langen Treff', 'Der Eröffner mit einer starken Hand'],
        answer: 1,
        explain: 'Drury ist eine Limit-Hebung der gepassten Hand, die die Reizung gegenüber einer womöglich leichten Eröffnung in dritter oder vierter Hand niedrig hält.',
      },
      {
        q: 'Der Partner, eine gepasste Hand, reizt 2♣ (Drury) über Ihre 1♥-Eröffnung in dritter Hand. Sie haben knappe 11 Punkte. Was ist Ihr Wiedergebot?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 0,
        explain: 'Zwei in der Oberfarbe sagt, dass Sie ein Minimum haben und es kein Vollspiel gibt; der Partner passt.',
      },
    ],
  },

  {
    id: 'new-minor-and-fourth-suit-forcing',
    title: 'Neue Unterfarbe und vierte Farbe forcierend',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Zwei künstliche Gebote, mit denen der Antwortende fragt, statt zu raten: Neue Unterfarbe forcierend nach dem 1SA-Wiedergebot des Eröffners und Vierte Farbe forcierend, wenn drei Farben gereizt sind.',
    body: `
<h3>Warum der Antwortende fragen muss</h3>
<p>Nach 1♦ – 1♠ – 1SA möchte der Antwortende mit fünf Pik und Vollspielwerten wissen, ob der Eröffner drei Pik hat. 3♠ wäre nur einladend, 4♠ könnte in einem 5-2-Fit landen, 3SA könnte einen 5-3-Fit verpassen. Mit natürlichen Geboten lässt sich die Frage nicht stellen, also übernimmt das ein künstliches Gebot.</p>

<h3>Neue Unterfarbe forcierend</h3>
<p>Nach dem 1SA-Wiedergebot des Eröffners ist das Gebot des Antwortenden in <strong>der anderen Unterfarbe</strong> auf der Zweierstufe (1♣ – 1♥ – 1SA – 2♦ oder 1♦ – 1♠ – 1SA – 2♣) künstlich und rundenforcierend. Es zeigt 11 oder mehr Punkte und fragt nach der Oberfarbe des Antwortenden. Der Antwortende hat darin genau fünf Karten (nach 1♠ vielleicht dazu vier Coeur; mit je vier Karten in beiden Oberfarben hätte er 1♥ geantwortet); mit sechs reizt er einfach die Oberfarbe noch einmal oder das Vollspiel.</p>
<table>
<thead><tr><th>Antwort des Eröffners</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>2 in der Oberfarbe des Antwortenden</td><td>Dreierunterstützung, Minimum (12–13)</td></tr>
<tr><td>3 in der Oberfarbe des Antwortenden</td><td>Dreierunterstützung, Maximum (14)</td></tr>
<tr><td>2♥ oder 3♥ (nach 1♠)</td><td>Vier Coeur, Minimum oder Maximum</td></tr>
<tr><td>2SA oder 3SA</td><td>Weder noch, Minimum oder Maximum</td></tr>
</tbody>
</table>
<p>Danach legt der Antwortende den Kontrakt fest: Vollspiel mit 13 oder mehr Punkten (oder gegenüber einem Maximum), eine Einladung mit 11–12 gegenüber einem Minimum und Sans Atout ohne Fit.</p>
<div class="deal" data-n="S:A108 H:J5 D:A854 C:K1063" data-s="S:QJ964 H:K6 D:Q1092 C:AQ"></div>
<div class="auction" data-calls="1D P 1S P 1NT P 2C P 2S P 4S P P P" data-dealer="N"></div>
<p>Süd hat 14 FP und fünf Pik. 2♣ fragt; Nords 2♠ zeigt Dreierunterstützung, und Süd reizt das Pik-Vollspiel, in dem der Schnappwert elf Stiche bringt.</p>
<div class="deal" data-n="S:K84 H:K73 D:KJ64 C:Q85" data-s="S:5 H:AQJ62 D:A32 C:9743"></div>
<div class="auction" data-calls="1D P 1H P 1NT P 2C P 2H P 3H P P P" data-dealer="N"></div>
<p>Mit 11 FP und fünf Coeur (♠5 ♥AQJ62 ♦A32 ♣9743) fragt Süd mit 2♣ und lädt gegenüber einem Minimum mit drei Coeur mit 3♥ ein. Nord hat ein Minimum und passt.</p>

<h3>Vierte Farbe forcierend</h3>
<p>Wurden drei Farben natürlich gereizt, ist das Gebot des Antwortenden in der <strong>vierten Farbe</strong> künstlich und vollspielforcierend. Der Antwortende hat Vollspielwerte, aber kein klares Gebot: oft eine Fünferlänge, für die er Dreierunterstützung sucht, oder eine Hand, die 3SA spielen könnte, wenn nur die vierte Farbe gestoppt wäre.</p>
<p>Der Eröffner beschreibt seine Hand weiter, in dieser Reihenfolge:</p>
<ol>
<li>Dreierunterstützung für die Farbe des Antwortenden: Heben Sie sie.</li>
<li>Ein Stopper in der vierten Farbe: Reizen Sie Sans Atout.</li>
<li>Zusätzliche Länge: Wiederholen Sie eine zweite Farbe mit fünf Karten oder die erste Farbe.</li>
</ol>
<div class="deal" data-n="S:AJ74 H:83 D:J1072 C:AQ10" data-s="S:Q96 H:AKQ42 D:85 C:K75"></div>
<div class="auction" data-calls="1D P 1H P 1S P 2C P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Süd hat 14 FP und fünf gute Coeur. 2♣, die vierte Farbe, bittet Nord um eine weitere Beschreibung. Nord hat keine Dreierunterstützung in Coeur, aber einen Treff-Stopper, reizt also 2SA, und Süd hebt auf 3SA.</p>
<div class="tip">Mit einer ausgeglichenen Vollspielhand, einem Stopper in der vierten Farbe und ohne Fünferlänge in Oberfarbe, für die Sie noch einen Fit suchen, reizen Sie einfach 3SA. Vierte Farbe forcierend ist für Hände gedacht, die eine Antwort brauchen.</div>
<div class="warn">Beide Gebote sind künstlich: Sie sagen nichts über die Unterfarbe oder die vierte Farbe aus. Alertieren Sie sie, und passen Sie nie darauf.</div>
`,
    keyPoints: [
      'Neue Unterfarbe forcierend: 1♣/1♦ – 1♥/1♠ – 1SA – zwei in der anderen Unterfarbe fragt mit 11+ Punkten nach Dreierunterstützung (oder nach 1♠ nach vier Coeur).',
      'Mit einem Minimum zeigt der Eröffner Unterstützung oder vier Coeur auf der Zweierstufe, mit einem Maximum auf der Dreierstufe; 2SA oder 3SA zeigt weder noch.',
      'Vierte Farbe forcierend: Das Gebot des Antwortenden in der vierten Farbe ist künstlich und vollspielforcierend.',
      'Der Eröffner antwortet zuerst mit Unterstützung für die Farbe des Antwortenden, dann mit Sans Atout bei einem Stopper, dann mit zusätzlicher Länge.',
      'Mit einer ausgeglichenen Hand, einem Stopper in der vierten Farbe und ohne Fünferlänge in Oberfarbe, für die Sie einen Fit suchen, reizen Sie direkt 3SA.',
    ],
    quiz: [
      {
        q: '1♣ – 1♠ – 1SA – ? Sie halten ♠KQ1074 ♥A63 ♦Q85 ♣J2 (12 FP). Was reizen Sie?',
        options: ['2♠', '3♠', '2♦', '3SA'],
        answer: 2,
        explain: '2♦, Neue Unterfarbe forcierend, fragt, ob der Eröffner drei Pik (oder vier Coeur) hat. Danach können Sie zwischen Pik und Sans Atout wählen.',
      },
      {
        q: '1♦ – 1♥ – 1SA – 2♣. Sie haben mit ♠KJ5 ♥Q73 ♦AQ84 ♣Q62 (14 FP) eröffnet. Was antworten Sie?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 2,
        explain: 'Dreierunterstützung in Coeur und ein Maximum für das 1SA-Wiedergebot: Springen Sie auf 3♥.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Was zeigt 2♦?',
        options: ['Lange Karo', 'Ein künstliches Vollspielforcing, das den Eröffner um eine Beschreibung seiner Hand bittet', 'Eine schwache Hand', 'Unterstützung in Pik'],
        answer: 1,
        explain: 'Karo ist die vierte Farbe. Der Antwortende hat Vollspielwerte und fragt, statt Karo zu zeigen.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Sie haben mit ♠AQ74 ♥J5 ♦K103 ♣KJ96 eröffnet. Was reizen Sie?',
        options: ['2♥', '2SA', '3♣', '2♠'],
        answer: 1,
        explain: 'Keine Dreierunterstützung in Coeur, aber ♦K10x ist ein Karo-Stopper: Reizen Sie Sans Atout.',
      },
      {
        q: 'Mit welcher Hand sollten Sie nach 1♦ – 1♠ – 1SA Neue Unterfarbe forcierend verwenden?',
        options: ['♠KJ84 ♥Q73 ♦K5 ♣J1063', '♠AQ984 ♥K6 ♦J3 ♣Q1052', '♠J9852 ♥43 ♦K82 ♣1074', '♠K1063 ♥Q2 ♦A54 ♣K973'],
        answer: 1,
        explain: 'Fünf Pik und 12 FP: Fragen Sie nach Dreierunterstützung. Die erste Hand ist zu schwach; die dritte auch, mit ihr passen Sie (2♠ würde sechs Pik zeigen); und mit der letzten, vier Pik und 12 FP, laden Sie mit 2SA ein.',
      },
    ],
  },

  {
    id: 'texas-transfers',
    title: 'Texas-Transfers',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Wie Sie mit einer Sechserlänge in Oberfarbe gegenüber 1SA oder 2SA das Vollspiel so reizen, dass die starke Hand spielt, und wie es in Richtung Schlemm weitergeht.',
    body: `
<h3>Transfers auf der Viererstufe</h3>
<p>Gegenüber der 1SA-Eröffnung des Partners möchte eine Hand mit einer Sechserlänge in Oberfarbe und genug für das Vollspiel vier in dieser Oberfarbe spielen – und zwar mit dem SA-Eröffner als Alleinspieler, damit das Ausspiel zur starken Hand kommt. <strong>Texas-Transfers</strong> erledigen das mit einem Gebot:</p>
<table>
<thead><tr><th>Gebot</th><th>Bedeutung</th><th>Der Eröffner reizt</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>Sechs oder mehr Coeur, Vollspielwerte</td><td>4♥</td></tr>
<tr><td>4♥</td><td>Sechs oder mehr Pik, Vollspielwerte</td><td>4♠</td></tr>
</tbody>
</table>
<p>Der Eröffner muss den Transfer ausführen. Ohne Schlemminteresse passt der Antwortende.</p>
<div class="deal" data-n="S:KJ6 H:742 D:KJ6 C:AK84" data-s="S:A108754 H:3 D:A54 C:Q65"></div>
<div class="auction" data-calls="1NT P 4H P 4S P P P" data-dealer="N"></div>
<p>Süd hat 10 FP und sechs Pik: genug für das Vollspiel, aber nicht für einen Schlemm. 4♥ ist der Transfer, Nord reizt 4♠, und Süd passt. Nord ist Alleinspieler, also kommt das Ausspiel zu Nords Königen hin statt durch sie hindurch.</p>

<h3>Texas oder Jacoby?</h3>
<table>
<thead><tr><th>Hand des Antwortenden</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>0–7, fünf oder mehr Karten</td><td>Jacoby-Transfer, dann Passe</td></tr>
<tr><td>8–9, sechs Karten</td><td>Jacoby-Transfer, dann Hebung auf drei</td></tr>
<tr><td>Vollspielwerte, genau fünf Karten</td><td>Jacoby-Transfer, dann 3SA: Der Eröffner wählt</td></tr>
<tr><td>Vollspielwerte, sechs oder mehr Karten</td><td>Texas: 4♦ oder 4♥</td></tr>
<tr><td>Schlemminteresse, sechs oder mehr Karten</td><td>Texas, dann 4SA (Roman Key Card Blackwood)</td></tr>
</tbody>
</table>

<h3>Weiter zum Schlemm</h3>
<div class="deal" data-n="S:K543 H:A63 D:AKQ4 C:85" data-s="S:Q H:KQJ1085 D:765 C:AK10"></div>
<div class="auction" data-calls="1NT P 4D P 4H P 4NT P 5H P 6H P P P" data-dealer="N"></div>
<p>Süd hat 15 FP und eine starke Coeur-Sechserlänge gegenüber 15–17: Ein Schlemm ist wahrscheinlich. Texas legt Coeur als Trumpf fest, und 4SA fragt nach Schlüsselkarten. Nords 5♥ zeigt zwei, das ♥A und das ♦A, ohne die Dame. Süd hält den ♥K, das ♣A und die ♥Q, also fehlt nur eine Schlüsselkarte, und Süd reizt 6♥.</p>

<h3>Nach 2SA</h3>
<p>Dieselben Gebote funktionieren über einer 2SA-Eröffnung (20–21), bei der schon 4 Punkte für das Vollspiel reichen:</p>
<div class="deal" data-n="S:AQ102 H:AK102 D:K2 C:A65" data-s="S:64 H:Q97543 D:AJ9 C:87"></div>
<div class="auction" data-calls="2NT P 4D P 4H P P P" data-dealer="N"></div>
<div class="tip">Texas macht die starke Hand zum Alleinspieler und spart Raum für die Schlemmreizung: Nach dem Transfer ist 4SA Roman Key Card Blackwood für die Oberfarbe.</div>
<div class="warn">4♣ über 1SA oder 2SA ist Gerber, nicht Texas. Und der Eröffner darf auf 4♦ oder 4♥ nie passen: Der Transfer muss ausgeführt werden.</div>
`,
    keyPoints: [
      'Texas: 1SA (oder 2SA) – 4♦ zeigt sechs oder mehr Coeur, 4♥ sechs oder mehr Pik, jeweils mit Vollspielwerten.',
      'Der Eröffner führt den Transfer immer aus, damit der SA-Eröffner Alleinspieler wird.',
      'Ohne Schlemminteresse passt der Antwortende; mit Schlemminteresse reizt er Texas und fragt danach mit 4SA nach Schlüsselkarten.',
      'Mit genau fünf Karten und Vollspielwerten reizen Sie stattdessen einen Jacoby-Transfer und danach 3SA.',
      'Einladende Hände reizen den Transfer auf der Zweierstufe und heben dann auf drei.',
    ],
    quiz: [
      {
        q: 'Der Partner eröffnet 1SA. Sie halten ♠KQ10965 ♥A4 ♦K73 ♣85 (12 FP). Was reizen Sie?',
        options: ['2♥', '4♥', '4♠', '3♠'],
        answer: 1,
        explain: 'Sechs Pik und Vollspielwerte: 4♥ ist ein Texas-Transfer, und der Partner reizt 4♠.',
      },
      {
        q: '1SA – 4♦. Was reizt der Eröffner?',
        options: ['Passe', '4♥', '4SA', '5♦'],
        answer: 1,
        explain: '4♦ zeigt sechs oder mehr Coeur; der Eröffner führt den Transfer mit 4♥ aus.',
      },
      {
        q: 'Der Partner eröffnet 1SA. Sie halten ♠J8 ♥KQ1065 ♦A73 ♣Q42 (12 FP, fünf Coeur). Wie ist Ihr Plan?',
        options: ['4♦ (Texas)', '2♦, dann 3SA', '2♦, dann 4♥', '3SA'],
        answer: 1,
        explain: 'Mit genau fünf Coeur reizen Sie den Transfer und dann 3SA: Der Eröffner wählt mit Dreierunterstützung 4♥ und passt mit zwei Karten.',
      },
      {
        q: '1SA – 4♥ – 4♠ – 4SA. Was ist 4SA?',
        options: ['Quantitativ', 'Roman Key Card Blackwood für Pik', 'Zum Spielen', 'Gerber'],
        answer: 1,
        explain: 'Der Texas-Transfer hat Pik als Trumpf festgelegt, also fragt 4SA nach Schlüsselkarten.',
      },
      {
        q: 'Der Partner eröffnet 2SA. Sie haben ♠64 ♥Q97543 ♦AJ9 ♣87 (7 FP). Was reizen Sie?',
        options: ['3♦', '4♦', '3♥', 'Passe'],
        answer: 1,
        explain: 'Sechs Coeur und genug für das Vollspiel gegenüber 20–21: Texas 4♦, und der Partner spielt 4♥.',
      },
    ],
  },
];
