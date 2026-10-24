// Lessons, part 3.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_3: Lesson[] = [
  {
    id: 'michaels-and-unusual-2nt',
    title: 'Michaels und Unusual 2SA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wie Sie nach einer gegnerischen Eröffnung eine Zweifärberhand mit einem einzigen Gebot zeigen und wie der Partner die Farbe wählt.',
    body: `
<h3>Zwei Farben mit einem Gebot</h3>
<p>Mit zwei Fünferlängen wollen Sie beide Farben schnell zeigen; bis Sie wieder an der Reihe sind, steht die Reizung vielleicht schon auf der Viererstufe. Zwei konventionelle Gegenreizungen leisten das, und jede verspricht mindestens <strong>fünf Karten in jeder von zwei Farben</strong>.</p>
<table>
<thead><tr><th>Gegner eröffnet</th><th>Sie reizen</th><th>Zeigt</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>2♣ (Michaels)</td><td>♥ und ♠</td></tr>
<tr><td>1♦</td><td>2♦ (Michaels)</td><td>♥ und ♠</td></tr>
<tr><td>1♥</td><td>2♥ (Michaels)</td><td>♠ und eine Unterfarbe</td></tr>
<tr><td>1♠</td><td>2♠ (Michaels)</td><td>♥ und eine Unterfarbe</td></tr>
<tr><td>1♣</td><td>2SA (Unusual)</td><td>♦ und ♥</td></tr>
<tr><td>1♦</td><td>2SA (Unusual)</td><td>♣ und ♥</td></tr>
<tr><td>1♥ oder 1♠</td><td>2SA (Unusual)</td><td>♣ und ♦</td></tr>
</tbody>
</table>
<p>Michaels ist ein Cuebid in der Farbe des Eröffners. Über einer Unterfarbe zeigt es beide Oberfarben, über einer Oberfarbe die andere Oberfarbe und eine nicht genannte Unterfarbe. Unusual 2SA zeigt die <strong>beiden niedrigsten ungereizten Farben</strong>.</p>
<div class="hand" data-cards="S:KQ1074 H:AJ963 D:5 C:84" data-label="Rechter Gegner eröffnet 1♦: Sie reizen 2♦"></div>
<div class="hand" data-cards="S:4 H:72 D:KQ1074 C:AQ1063" data-label="Rechter Gegner eröffnet 1♠: Sie reizen 2SA"></div>

<h3>Wie stark?</h3>
<p>Die Spanne ist groß. Meist ist die Hand bescheiden (etwa 8–12 FP) mit guten Farben, und es geht darum mitzureizen, ein Opfergebot zu finden oder das Ausspiel zu lenken. Mit einer starken Hand (etwa 16+) beginnen Sie ebenfalls mit dem Zweifärbergebot und reizen danach weiter, um die Extrastärke zu zeigen. Mit einer mittleren Hand reizen viele Spieler lieber die höhere Farbe einfach gegen und bringen die andere später.</p>
<p>Die Qualität der Farben zählt, besonders in Gefahr: Die Figuren sollten in Ihren langen Farben sitzen, nicht in den kurzen.</p>

<h3>Die Antwort des Partners</h3>
<div class="auction" data-calls="1D 2D P" data-dealer="W"></div>
<div class="hand" data-cards="S:J4 H:Q852 D:K73 C:J1064" data-label="Sie sind Süd: 2♥ reizen"></div>
<ul>
<li><strong>Wählen Sie eine Farbe</strong> auf der billigsten Stufe, und zwar die, in der Sie mehr Karten haben. Hier vier Coeur gegen zwei Pik: 2♥. Bei gleicher Länge in einer Ober- und einer Unterfarbe ziehen Sie die Oberfarbe vor, sie zählt mehr.</li>
<li><strong>Springen Sie</strong> mit gutem Fit und nützlichen Werten: Kürze in der Farbe der Gegner, Asse und Könige in den Farben des Partners.</li>
<li><strong>Reizen Sie das Vollspiel</strong>, wenn der Fit groß ist und Ihre Figuren arbeiten. Mit einem Zehnerfit gegenüber einer 5-5-Hand wird das Vollspiel oft schon mit wenigen Punkten erfüllt.</li>
<li><strong>Nach einem Michaels für Oberfarbe und Unterfarbe</strong> (1♥ – 2♥) reizen Sie die Oberfarbe des Partners, wenn sie Ihnen passt, oder 2SA als Frage nach der Unterfarbe, wenn Sie einen guten Fit in den Unterfarben und keinen in der Oberfarbe haben.</li>
<li><strong>Nach Unusual 2SA</strong> reizen Sie 3♣ oder 3♦ (die längere), oder Sie springen mit Fit ins Vollspiel.</li>
</ul>
<div class="hand" data-cards="S:7 H:J852 D:K1063 C:KJ63" data-label="1♥ – 2♥ – Passe: Sie reizen 2SA"></div>
<p>Der Partner hat fünf Pik und fünf Karten in einer Unterfarbe. Mit Single Pik, aber vier Karten in jeder Unterfarbe reizen Sie 2SA: Der Partner nennt seine Unterfarbe, und Sie passen – Sie haben in jedem Fall einen Neunerfit.</p>

<h3>Die Information im Gegenspiel nutzen</h3>
<p>Gewinnen die Gegner die Reizung, ist die Zweifärberhand des Partners ein Geschenk für das Gegenspiel: Sie kennen mindestens zehn seiner Karten. Zählen Sie damit die Hand des Alleinspielers aus, und spielen Sie – zum Ausspiel oder als Wechsel – die Farbe an, in der der Partner schnappen oder Stiche machen kann.</p>
<div class="warn">Verwenden Sie Michaels oder Unusual 2SA nicht mit einer 5-4-Hand. Der Partner wählt eine Farbe in Erwartung von fünf Karten, und Sie spielen kontriert in einem Siebenerfit.</div>
<div class="tip">In günstiger Gefahrenlage kann ein Zweifärbergebot, gefolgt von einem großen Sprung des Partners in Ihrer Farbe, den Gegnern den Kontrakt stehlen oder zu einem billigen Opfergebot führen. Der Partner sollte mit jedem großen Fit heben: Das Gesetz der totalen Stiche spricht dafür, mit Verteilung zu reizen.</div>
`,
    keyPoints: [
      'Michaels: Ein Cuebid in der Unterfarbe des Eröffners (1m – 2m) zeigt beide Oberfarben, ein Cuebid in seiner Oberfarbe (1M – 2M) die andere Oberfarbe und eine Unterfarbe; mindestens 5-5.',
      'Unusual 2SA zeigt die beiden niedrigsten ungereizten Farben, mindestens 5-5.',
      'Die meisten Hände sind bescheiden; mit einer starken Hand reizen Sie danach noch einmal.',
      'Der Partner des Gegenreizers wählt die Farbe, in der er mehr Karten hat, und springt oder reizt mit großem Fit das Vollspiel.',
      'Nach 1M – 2M fragt 2SA des Partners nach der Unterfarbe.',
    ],
    quiz: [
      {
        q: 'Ihr rechter Gegner eröffnet 1♣. Welches Gebot zeigt fünf Pik und fünf Coeur?',
        options: ['Kontra', '2♣', '2SA', '1♥'],
        answer: 1,
        explain: 'Ein Cuebid über einer Unterfarbeneröffnung (Michaels) zeigt beide Oberfarben. 2SA über 1♣ zeigt die beiden niedrigsten ungereizten Farben, Karo und Coeur.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 1♥, und Sie reizen 2SA. Was haben Sie gezeigt?',
        options: ['15–18 FP, ausgeglichen', 'Treff und Karo', 'Pik und eine Unterfarbe', 'Pik und Treff'],
        answer: 1,
        explain: 'Unusual 2SA zeigt die beiden niedrigsten ungereizten Farben. Über 1♥ sind das Treff und Karo.',
      },
      {
        q: 'Ihr linker Gegner eröffnet 1♦, Ihr Partner reizt 2♦ (Michaels), Ihr rechter Gegner passt. Sie halten ♠J4 ♥Q852 ♦K73 ♣J1064. Was reizen Sie?',
        options: ['2♠', '2♥', '2SA', 'Passe'],
        answer: 1,
        explain: 'Der Partner hat mindestens fünf Karten in jeder Oberfarbe. Sie haben vier Coeur und zwei Pik, also ist Coeur der bessere Fit: Reizen Sie die Farbe auf der billigsten Stufe.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 1♠, und Sie reizen 2♠. Was zeigt das?',
        options: ['Pik', 'Coeur und eine Unterfarbe', 'Beide Unterfarben', 'Eine starke ausgeglichene Hand'],
        answer: 1,
        explain: 'Ein Cuebid über einer Oberfarbeneröffnung zeigt die andere Oberfarbe und eine Unterfarbe, mindestens 5-5. Mit 2SA kann der Partner herausfinden, welche Unterfarbe es ist.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 1♣, und Sie reizen 2SA. Was zeigt das?',
        options: ['Treff und Karo', 'Karo und Coeur', 'Beide Oberfarben', 'Coeur und Pik'],
        answer: 1,
        explain: 'Über 1♣ sind Karo, Coeur und Pik ungereizt; die beiden niedrigsten davon sind Karo und Coeur.',
      },
    ],
  },

  {
    id: 'defending-suit-contracts',
    title: 'Gegenspiel gegen Farbkontrakte',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Wie Sie zwischen aktivem und passivem Gegenspiel wählen, Schnapper bekommen, im richtigen Moment Trumpf spielen und den Alleinspieler zum Schnappen zwingen.',
    body: `
<h3>Woher die Stiche der Gegenspieler kommen</h3>
<p>Gegen einen Farbkontrakt macht das Gegenspiel seine Stiche mit hohen Karten, mit Schnappern und mit eigenen Trümpfen. Der Alleinspieler versucht unterdessen, seine Verlierer loszuwerden, indem er sie am Tisch schnappt oder auf die Gewinner des Dummys abwirft. Gutes Gegenspiel beginnt, sobald der Dummy liegt, mit einer einfachen Frage: <strong>Wie will der Alleinspieler den Kontrakt erfüllen, und woher kommen unsere Stiche?</strong></p>

<h3>Aktiv oder passiv?</h3>
<p><strong>Spielen Sie aktiv</strong> (Stiche schnell abziehen oder hochspielen, auch mit einem gewissen Risiko), wenn der Dummy eine lange, starke Farbe hat, die Abwürfe liefern wird. Jeder Stich, den Sie jetzt nicht machen, verschwindet.</p>
<p><strong>Spielen Sie passiv</strong> (sichere Karten, die nichts verschenken), wenn der Dummy flach ist, keine Abwürfe bietet und der Alleinspieler seine Verlierer ohnehin abgeben muss. Neue Farben anzuspielen schenkt ihm dann oft einen Stich, den er allein nicht machen könnte.</p>
<div class="deal" data-n="S:K94 H:KQJ104 D:862 C:A5" data-e="S:762 H:A83 D:KJ94 C:874" data-caption="Süd spielt 4♠ nach 1♠ – 2♥ – 2♠ – 4♠. Der Partner spielt die ♣Q aus; der Dummy nimmt mit dem Ass und spielt den ♥K."></div>
<p>Sie nehmen mit dem ♥A. Jetzt überlegen Sie: Die Coeurs des Dummys sind hochgespielt, und sobald der Alleinspieler Trumpf gezogen hat, wirft er seine Karo-Verlierer darauf ab. Die einzige Hoffnung sind Karostiche, und zwar <em>jetzt</em>. Wechseln Sie zum ♦J, durch die Hand des Alleinspielers: Hat der Partner das ♦A und der Alleinspieler die ♦Q, machen Sie drei Karostiche. Ein passives Treff-Rückspiel ließe den Alleinspieler Trumpf ziehen und die Karos abwerfen.</p>

<h3>Schnapper bekommen</h3>
<ul>
<li>Ein Single-Ausspiel ist am besten, wenn Sie die Trumpfkontrolle haben (etwa das Trumpf-Ass) oder der Partner einen Übergang haben könnte: Sie kommen ans Spiel, bringen den Partner ans Spiel und schnappen noch einmal.</li>
<li>Wenn Sie dem Partner einen Schnapper geben, zeigen Sie mit einer Farbpräferenz-Markierung, wo Ihr Übergang liegt.</li>
<li>Zählen Sie die Trümpfe des Alleinspielers: Es hat keinen Sinn, auf einen Schnapper zu spielen, wenn der Partner keinen Trumpf mehr haben kann.</li>
</ul>

<h3>Wann Sie Trumpf spielen sollten</h3>
<ul>
<li>Wenn der Dummy in einer Nebenfarbe kurz ist, in der Ihre Seite stark ist, und der Alleinspieler dort Verlierer schnappen will.</li>
<li>Wenn der Alleinspieler zwei Farben gezeigt und der Dummy Präferenz für die zweite gegeben hat: Der Dummy wird die erste schnappen.</li>
<li>Wenn der Partner Ihr Informationskontra zur Strafe stehen lässt: Er hat lange, starke Trümpfe und möchte, dass Trumpf gezogen wird.</li>
<li>Nicht, wenn der Alleinspieler lange Gewinner in einer Nebenfarbe abziehen kann oder wenn ein Trumpfausspiel ihm helfen könnte, die Trumpffiguren des Partners zu fangen.</li>
</ul>

<h3>Das forcierende Gegenspiel</h3>
<p>Halten Sie vier Trümpfe oder ist der Alleinspieler kurz in Trumpf, zwingen Sie ihn immer wieder zum Schnappen, indem Sie Ihre lange Farbe spielen. Jeder Schnapper verkürzt seine Trümpfe; irgendwann haben Sie vielleicht mehr Trümpfe als er, und er verliert die Kontrolle. Das forcierende Gegenspiel wirkt am besten, wenn die Trümpfe des Alleinspielers in der langen Hand sitzen und der Dummy nicht an seiner Stelle schnappen kann.</p>

<h3>Trumpfpromotion</h3>
<p>Pik ist Trumpf. Der Alleinspieler hat ♠A K 10 9 8 7, Sie (West) haben ♠Q 6 und der Partner ♠J 3. Ohne Störung zieht der Alleinspieler Ass und König ab, und Ihre Dame fällt. Spielen Sie aber eine Nebenfarbe, in der sowohl der Partner als auch der Alleinspieler Chicane haben, schnappt der Partner mit dem ♠J, der Alleinspieler muss mit Ass oder König überschnappen, und nun steht Ihr ♠Q 6 nur noch einer hohen Figur gegenüber: Die Dame macht einen Stich. Diese Trumpfpromotion nennt man <strong>Uppercut</strong>. Wenn Sie eine solche Promotion sehen, sollte der Partner so hoch wie möglich schnappen.</p>
<div class="tip">Zählen Sie Ihre Stiche. Sehen Sie den Stich, der den Kontrakt schlägt, nehmen Sie ihn; sehen Sie, dass der Alleinspieler genug Stiche hat, suchen Sie einen Schnapper oder eine Trumpfpromotion, die einen zusätzlichen Stich schaffen könnte.</div>
<div class="warn">Ziehen Sie keine Gewinner in einer Farbe ab, in der der Alleinspieler Chicane hat und am Tisch geschnappt wird: Sie helfen nur ihm. Und geben Sie keinen „Schnapper mit Abwurf“ (Ausspiel einer Farbe, in der Alleinspieler und Dummy beide Chicane haben): Der Alleinspieler schnappt in einer Hand und wirft in der anderen einen Verlierer ab.</div>
`,
    keyPoints: [
      'Fragen Sie sich, wie der Alleinspieler den Kontrakt erfüllen will und woher Ihre Stiche kommen.',
      'Spielen Sie aktiv, wenn der Dummy eine lange Farbe für Abwürfe hat, und passiv, wenn er flach ist.',
      'Single-Ausspiele wirken am besten mit Trumpfkontrolle oder einem Übergang zum Partner.',
      'Spielen Sie Trumpf, wenn der Dummy schnappen wird oder wenn der Partner Ihr Informationskontra stehen gelassen hat.',
      'Mit vier Trümpfen forcieren Sie den Alleinspieler; geben Sie nie einen Schnapper mit Abwurf.',
    ],
    quiz: [
      {
        q: 'Der Dummy hat eine lange, starke Nebenfarbe, die Abwürfe liefern wird. Welches Gegenspiel ist meist richtig?',
        options: ['Passiv: warten, bis der Alleinspieler sich vergreift', 'Aktiv: die eigenen Stiche schnell abziehen oder hochspielen', 'Bei jeder Gelegenheit Trumpf spielen', 'Dem Alleinspieler einen Schnapper mit Abwurf geben'],
        answer: 1,
        explain: 'Sobald Trumpf gezogen ist, wirft der Alleinspieler seine Verlierer auf die Farbe des Dummys ab. Stiche, die das Gegenspiel nicht schnell macht, verschwinden.',
      },
      {
        q: 'Der Dummy ist eine flache 4-3-3-3-Hand ohne lange Farbe, und der Alleinspieler muss seine Verlierer in den Nebenfarben ohnehin abgeben. Welches Gegenspiel ist meist richtig?',
        options: ['Passiv: keine neuen Farben anspielen', 'Aktiv: in jedem Stich eine neue Farbe spielen', 'Unter den eigenen Assen ausspielen', 'Sofort alle Gewinner abziehen'],
        answer: 0,
        explain: 'Ohne Abwurfmöglichkeiten verschwinden die Verlierer des Alleinspielers nicht. Wer neue Farben anspielt, riskiert, ihm einen Stich zu schenken, den er allein nicht machen könnte.',
      },
      {
        q: 'Sie halten vier Trümpfe gegen 4♥ des Alleinspielers. Welcher Plan ist oft am besten?',
        options: ['Trumpf spielen', 'Den Alleinspieler mit Ihrer langen Farbe zum Schnappen zwingen', 'Ein Single ausspielen', 'In jeder Farbe von Figuren ausspielen'],
        answer: 1,
        explain: 'Jeder Schnapper verkürzt die Trümpfe des Alleinspielers. Mit vier eigenen Trümpfen können zwei oder drei erzwungene Schnapper dazu führen, dass Sie mehr Trümpfe haben als er – dann verliert er die Kontrolle.',
      },
      {
        q: 'Sie haben 1♦ mit Informationskontra kontriert, und der Partner hat es zur Strafe stehen lassen. Was spielen Sie aus?',
        options: ['Ihre beste Oberfarbe', 'Einen Trumpf', 'Ein Treff-Single', 'Die Farbe, die der Partner gern hätte'],
        answer: 1,
        explain: 'Das Passe des Partners zeigt lange, starke Karos. Ein Trumpfausspiel hindert den Alleinspieler daran, kleine Trümpfe durch Schnappen zu verwerten, und die Karos des Partners machen die Stiche.',
      },
      {
        q: 'Wann ist ein Single-Ausspiel gegen einen Farbkontrakt am attraktivsten?',
        options: ['Wenn Sie das Trumpf-Ass halten oder der Partner wahrscheinlich einen Übergang hat', 'Wenn Sie vier Trümpfe halten', 'Wenn bekannt ist, dass der Dummy in der Farbe kurz ist', 'Immer'],
        answer: 0,
        explain: 'Nach dem Schnapper müssen Sie den Partner wieder ans Spiel bringen oder selbst ans Spiel kommen, bevor Trumpf gezogen ist. Trumpfkontrolle und Übergänge beim Partner machen das möglich.',
      },
    ],
  },

  {
    id: 'suit-combinations-and-odds',
    title: 'Farbverteilungen und kombinierte Chancen',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Die A-priori-Wahrscheinlichkeiten der Farbverteilungen, wie man Chancen kombiniert und die Grundgedanken der freien Plätze und der eingeschränkten Wahl.',
    body: `
<h3>Wie die Karten der Gegner verteilt sind</h3>
<p>Bevor eine Karte gespielt ist, hängt die Wahrscheinlichkeit jeder Verteilung nur davon ab, wie viele Karten die Gegenspieler in der Farbe halten:</p>
<table>
<thead><tr><th>Es fehlen</th><th>Verteilung</th><th>Wahrscheinlichkeit</th></tr></thead>
<tbody>
<tr><td>2</td><td>1-1 / 2-0</td><td>52% / 48%</td></tr>
<tr><td>3</td><td>2-1 / 3-0</td><td>78% / 22%</td></tr>
<tr><td>4</td><td>3-1 / 2-2 / 4-0</td><td>50% / 41% / 10%</td></tr>
<tr><td>5</td><td>3-2 / 4-1 / 5-0</td><td>68% / 28% / 4%</td></tr>
<tr><td>6</td><td>4-2 / 3-3 / 5-1 / 6-0</td><td>48% / 36% / 15% / 1,5%</td></tr>
<tr><td>7</td><td>4-3 / 5-2 / 6-1 / 7-0</td><td>62% / 31% / 7% / 0,5%</td></tr>
</tbody>
</table>
<p>Eine nützliche Faustregel: Eine <strong>ungerade</strong> Zahl fehlender Karten verteilt sich meist so gleichmäßig wie möglich (3-2, 4-3), eine <strong>gerade</strong> Zahl dagegen meist nicht (4-2 ist wahrscheinlicher als 3-3 und 3-1 wahrscheinlicher als 2-2).</p>
<p>Zwei weitere Zahlen, die Sie kennen sollten: Ein Schnitt sitzt zu 50%; brauchen Sie einen von zwei Schnitten, sind es 75%, brauchen Sie beide, 25%.</p>

<h3>Chancen kombinieren</h3>
<p>Oft lässt sich ein Kontrakt auf mehr als einem Weg erfüllen. Die Kunst besteht darin, die Chancen in einer Reihenfolge zu probieren, in der Sie die zweite noch nutzen können, wenn die erste scheitert.</p>
<div class="deal" data-n="S:954 H:743 D:Q52 C:AKQ2" data-s="S:AQ6 H:A852 D:AK7 C:763" data-caption="3SA von Süd. West spielt den ♥K aus."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Zählen:</strong> ♠A, ♥A, ♦AKQ, ♣AKQ: acht Stiche. Der neunte kann aus einer 3-3-Verteilung in Treff kommen (36%), dann ist die ♣2 des Dummys ein Gewinner, oder aus dem Pikschnitt (50%), der gelingt, wenn Ost den ♠K hat.</p>
<p><strong>Die Gefahr:</strong> Sobald Ihr ♥A weg ist, sind die Coeurs von West hochgespielt. Schneiden Sie in Pik und verlieren an West, zieht West genug Coeurstiche ab, um Sie zu schlagen, und Sie kommen nie dazu, die Treffs zu probieren.</p>
<p><strong>Die richtige Reihenfolge:</strong> Testen Sie zuerst Treff. Ass, König und Dame in Treff abzuziehen kostet nichts: Bedienen beide Gegenspieler dreimal, ist die ♣2 Ihr neunter Stich, und Sie brauchen den Schnitt gar nicht. Sitzen die Treffs nicht, enden Sie am Tisch und können immer noch Pik zu Ihrem A Q spielen. Ihre Chance beträgt 36% + (64% × 50%) = 68% statt 50% für den Schnitt allein.</p>
<div class="tip">Probieren Sie zuerst die Chance, die keinen Stich abgibt. Den Schnitt, der den gefährlichen Gegner ans Spiel bringen kann, heben Sie sich bis zuletzt auf.</div>

<h3>Freie Plätze</h3>
<p>Sobald das Spiel begonnen hat, ändern sich die A-priori-Zahlen. Weiß man, dass West fünf Coeur hält und Ost nur eines, hat West unter den restlichen unbekannten Karten 8 freie Plätze und Ost 12. Jede bestimmte fehlende Karte, etwa der ♠K, sitzt jetzt in 12 von 20 Fällen bei Ost, also zu 60% statt zu 50%. Die Hand mit mehr freien Plätzen hält mit größerer Wahrscheinlichkeit jede beliebige Karte. Deshalb ist das Auszählen der Hand so wichtig.</p>

<h3>Eingeschränkte Wahl</h3>
<p>Sie halten A K 10 7 5 gegenüber 6 4 3 2; es fehlen Q, J, 9 und 8. Sie ziehen das Ass ab, und Ost wirft die Dame. In der nächsten Runde bedient West klein. Sollen Sie den König spielen (in der Hoffnung, dass Ost mit Q J begonnen hat) oder mit der 10 schneiden (in der Hoffnung, dass Ost die Dame single hatte)?</p>
<p>Schneiden Sie. Mit der Dame single hatte Ost keine Wahl; mit Q J hätte Ost genauso gut den Buben spielen können. Eine Single-Dame ist deshalb etwa doppelt so wahrscheinlich wie gerade Q J: Der Schnitt gelingt in etwa 65% der Fälle. Dieses <strong>Prinzip der eingeschränkten Wahl</strong> gilt immer dann, wenn ein Gegner eine von zwei gleichwertigen Figuren spielt.</p>

<h3>Faustregeln für die Dame</h3>
<ul>
<li>Acht Karten ohne die Dame: schneiden (etwa 40% mit A K J x x und etwa 51% mit A K J 10 x, gegenüber etwa 33% für das Spiel auf Fall).</li>
<li>Neun Karten ohne die Dame: auf Fall spielen (etwa 53% gegenüber etwa 51% für den Schnitt).</li>
<li>Informationen aus der Reizung (wer eröffnet hat, wer gesperrt hat, wer Länge gezeigt hat) wiegen mehr als diese kleinen Unterschiede.</li>
</ul>
<div class="warn">Diese Prozentzahlen sind nur ein Ausgangspunkt. Ein Gegenspieler, der in der Reizung lange Farben gezeigt hat, hält mit geringerer Wahrscheinlichkeit Länge in der Farbe, die Sie gerade spielen.</div>
`,
    keyPoints: [
      'Fünf Karten fehlen: 3-2 68%. Sechs fehlen: 4-2 48%, 3-3 36%. Vier fehlen: 3-1 50%, 2-2 41%, 4-0 10%.',
      'Eine ungerade Zahl fehlender Karten verteilt sich meist gleichmäßig, eine gerade Zahl meist nicht.',
      'Chancen kombinieren: Probieren Sie zuerst, was keinen Stich abgibt; den Schnitt zur gefährlichen Hand heben Sie sich bis zuletzt auf.',
      'Freie Plätze: Die Hand mit mehr unbekannten Karten hält mit größerer Wahrscheinlichkeit jede beliebige Karte.',
      'Eingeschränkte Wahl: Wirft ein Gegner eine von zwei gleichwertigen Figuren, spielen Sie ihn auf das Single.',
    ],
    quiz: [
      {
        q: 'Die Gegner haben sechs Karten in einer Farbe. Welche Verteilung ist am wahrscheinlichsten?',
        options: ['3-3', '4-2', '5-1', '6-0'],
        answer: 1,
        explain: '4-2 kommt in etwa 48% der Fälle vor, 3-3 in 36%. Bei einer geraden Zahl fehlender Karten ist die gleichmäßige Verteilung die Ausnahme, nicht die Regel.',
      },
      {
        q: 'Die Gegner haben fünf Karten in einer Farbe. Wie oft sind sie 3-2 verteilt?',
        options: ['50%', '62%', '68%', '78%'],
        answer: 2,
        explain: 'In etwa 68% der Fälle. 4-1 kommt in etwa 28% vor, 5-0 in etwa 4%.',
      },
      {
        q: 'Sie können auf eine 3-3-Verteilung spielen (36%) und, wenn das scheitert, schneiden (50%). Wie hoch ist die kombinierte Chance?',
        options: ['50%', '68%', '86%', '43%'],
        answer: 1,
        explain: '36% plus die Hälfte der übrigen 64%: 36 + 32 = 68%.',
      },
      {
        q: 'Warum ziehen Sie im 3SA-Spiel oben die Treffs ab, bevor Sie in Pik schneiden?',
        options: ['Um die Hand auszuzählen', 'Der Treff-Test gibt keinen Stich ab, ein verlorener Schnitt dagegen lässt West die Coeurs abziehen', 'Weil der Schnitt später eher gelingt', 'Um Treff zu deblockieren'],
        answer: 1,
        explain: 'Verliert der Schnitt, zieht West die Coeurs ab, und Sie kommen nie dazu, die Treffs zu probieren. Ziehen Sie zuerst die Treffs ab, bleiben beide Chancen erhalten.',
      },
      {
        q: 'Sie halten A K 10 7 5 gegenüber 6 4 3 2. Auf das Ass wirft Ost die Dame. In der nächsten Runde bedient West klein. Was ist am besten?',
        options: ['Den König spielen', 'Mit der 10 schneiden', 'Es ist genau 50:50', 'Von der anderen Hand ausspielen'],
        answer: 1,
        explain: 'Eingeschränkte Wahl: Mit Q J hätte Ost jede der beiden Figuren spielen können, mit der Dame single gab es keine Wahl. Das Single ist die wahrscheinlichere Haltung, daher gelingt der Schnitt in etwa 65% der Fälle.',
      },
    ],
  },

  {
    id: 'balancing',
    title: 'Wiederbelebung',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wann und wie Sie die Reizung in der Wiederbelebungsposition wieder eröffnen und warum Sie dort mit weniger reizen dürfen.',
    body: `
<h3>Die Wiederbelebungsposition</h3>
<p>Sie sitzen in der <strong>Wiederbelebungsposition</strong>, wenn Ihr Passe die Reizung beenden würde. Beispiel: West eröffnet 1♥, Ihr Partner passt, Ost passt, und Sie sind an der Reihe. Die Gegner sind auf niedriger Stufe stehen geblieben, und das verrät Ihnen etwas: Ost hat weniger als 6 Punkte, und West ist meist nicht sehr stark. Die fehlende Stärke muss irgendwo sein, und ein großer Teil davon steckt in der Hand Ihres Partners. Er hat vielleicht mit einer guten Hand gepasst, einfach weil es kein passendes Gebot gab, zum Beispiel mit Länge in Coeur.</p>

<h3>Einen König borgen</h3>
<p>In der Wiederbelebungsposition dürfen Sie deshalb mit etwa <strong>3 FP weniger</strong> handeln, als Sie in der direkten Position bräuchten – als hätten Sie sich vom Partner einen König geborgt. Der Partner muss dann daran denken, den König zurückzugeben, und darf nicht so reizen, als hätten Sie ein vollwertiges Gebot abgegeben.</p>
<div class="auction" data-calls="1H P P" data-dealer="W"></div>
<table>
<thead><tr><th>Wiederbelebung nach 1♥ – Passe – Passe</th><th>Ungefähre Bedeutung</th></tr></thead>
<tbody>
<tr><td>Gegenreizung in Farbe</td><td>Etwa 5–13 FP und eine ordentliche Farbe</td></tr>
<tr><td>Kontra</td><td>Etwa 9+ FP, kurz in Coeur, Unterstützung für die anderen Farben (oder eine starke Hand)</td></tr>
<tr><td>1SA</td><td>Etwa 11–14 FP, ausgeglichen, mit Coeur-Stopper</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:KJ84 H:73 D:A1063 C:Q85" data-label="1♥ – Passe – Passe – ?: Kontra"></div>
<p>10 FP und kurz in Coeur: zu wenig für ein direktes Kontra, aber ein normales Wiederbelebungskontra.</p>
<div class="hand" data-cards="S:K94 H:AJ6 D:Q1073 C:K82" data-label="1♦ – Passe – Passe – ?: 1SA"></div>
<p>13 FP, ausgeglichen, mit Karo-Stopper: ein 1SA zur Wiederbelebung, das etwa 11–14 FP zeigt und nicht die 15–18 FP einer direkten 1SA-Gegenreizung.</p>

<h3>Wenn die Gegner einen Fit gefunden haben</h3>
<div class="auction" data-calls="1S P 2S P P" data-dealer="E"></div>
<div class="hand" data-cards="S:73 H:QJ85 D:K1064 C:A92" data-label="Mit Kontra wiederbeleben"></div>
<p>Die Gegner haben einen Pik-Fit gefunden und sind auf der Zweierstufe stehen geblieben, haben also nur etwa die Hälfte der Figurenpunkte. Haben sie acht oder neun Pik, hat Ihre Seite sehr wahrscheinlich ebenfalls einen Fit. Mit einem Fit einen Kontrakt auf der Zweierstufe kampflos herzugeben, ist auf Dauer ein Verlustgeschäft. Kontrieren Sie zur Information und laden Sie den Partner ein, seine beste Farbe auf der Dreierstufe zu reizen.</p>

<h3>Wann Sie nicht wiederbeleben</h3>
<ul>
<li><strong>Wenn Sie lang in der Farbe der Gegner sind.</strong> Dann ist der Partner dort kurz und hätte mit Werten meist kontriert. Vielleicht sitzen die Gegner in einem schlechten Kontrakt – lassen Sie sie ihn spielen.</li>
<li><strong>Wenn die Gegner keinen Fit haben und sich quälen.</strong> Hat der Eröffner eine zweite Farbe gereizt und der Antwortende widerwillig Präferenz gegeben, fallen sie vielleicht ohnehin: Retten Sie sie nicht.</li>
<li><strong>Nach 1SA – Passe – Passe</strong> beleben Sie nur mit einer guten Farbe oder mit Verteilung wieder. Der Partner des Eröffners kann bis zu 7 Punkte haben, und die Stärke ist gleichmäßiger verteilt.</li>
</ul>
<div class="hand" data-cards="S:Q74 H:KJ953 D:A5 C:J82" data-label="1♥ – Passe – Passe – ?: Passe"></div>
<p>11 FP, aber fünf Coeur – die Farbe des Eröffners. Der Partner hat wahrscheinlich höchstens ein oder zwei Coeur und hat nicht kontriert, ist also schwach. 1♥ fällt wahrscheinlich; passen Sie.</p>
<div class="tip">Belebt der Partner wieder, denken Sie daran, dass er einen Teil Ihrer Werte schon mitgezählt hat. Reizen Sie eine Stufe vorsichtiger als gegenüber einem Gebot aus der direkten Position.</div>
<div class="warn">Bestrafen Sie den Partner nicht dafür, dass er die Reizung wiederbelebt. Halten Sie eine gute Hand und der Partner belebt mit Kontra wieder, überlegen Sie, ob es ein leichtes Wiederbelebungsgebot ist, bevor Sie ins Vollspiel springen.</div>
`,
    keyPoints: [
      'In der Wiederbelebungsposition dürfen Sie mit etwa 3 FP weniger handeln als in der direkten Position („einen König borgen“).',
      'Nach 1♥ – Passe – Passe: eine Farbe mit etwa 5–13 FP, Kontra mit etwa 9+ FP, 1SA mit etwa 11–14 FP.',
      'Lassen Sie die Gegner nicht auf der Zweierstufe spielen, wenn sie einen Fit gefunden haben: Reizen Sie mit.',
      'Seien Sie vorsichtig mit der Wiederbelebung, wenn Sie lang in der Farbe der Gegner sind.',
      'Belebt der Partner wieder, geben Sie den König zurück: Überreizen Sie nicht.',
    ],
    quiz: [
      {
        q: '1♥ – Passe – Passe – ? Sie halten ♠KJ84 ♥73 ♦A1063 ♣Q85 (10 FP).',
        options: ['Passe', 'Kontra', '1♠', '1SA'],
        answer: 1,
        explain: 'Kurz in Coeur und Unterstützung für die anderen Farben. 10 FP sind knapp für ein direktes Kontra, in der Wiederbelebungsposition aber völlig in Ordnung.',
      },
      {
        q: '1♦ – Passe – Passe – ? Sie halten ♠K94 ♥AJ6 ♦Q1073 ♣K82 (13 FP).',
        options: ['Passe', 'Kontra', '1SA', '2SA'],
        answer: 2,
        explain: '1SA zur Wiederbelebung zeigt etwa 11–14 FP mit Stopper. Das ist genau diese Hand.',
      },
      {
        q: '1♥ – Passe – Passe – ? Sie halten ♠Q74 ♥KJ953 ♦A5 ♣J82 (11 FP).',
        options: ['Passe', 'Kontra', '1SA', '2♦'],
        answer: 0,
        explain: 'Mit fünf Karten in der Farbe des Eröffners ist der Partner in Coeur kurz und hätte mit Werten kontriert. 1♥ kann gut fallen; passen Sie.',
      },
      {
        q: 'Warum dürfen Sie mit weniger Punkten wiederbeleben, als Sie in der direkten Position bräuchten?',
        options: ['Weil die Gegner schwach sind, muss der Partner Werte halten', 'Weil die Regeln es erlauben', 'Weil Sie in Gefahr sind', 'Weil die Gegner nicht kontrieren können'],
        answer: 0,
        explain: 'Bleiben die Gegner auf niedriger Stufe stehen, ist die restliche Stärke zwischen Ihnen und dem Partner aufgeteilt. Der Partner hat vielleicht mit einer ordentlichen Hand gepasst, weil ihm ein gutes Gebot fehlte.',
      },
      {
        q: 'Die Gegner reizen 1♠ – 2♠ und passen. Welcher Grundsatz gilt in der Wiederbelebungsposition?',
        options: ['Immer passen: Sie haben einen Fit', 'Mitreizen: Haben die Gegner auf der Zweierstufe einen Fit, hat Ihre Seite wahrscheinlich auch einen', 'Nur mit 12+ FP reizen', 'Strafkontra'],
        answer: 1,
        explain: 'Haben die Gegner acht oder neun Trümpfe, haben Sie wahrscheinlich einen eigenen Fit. Sie auf der Zweierstufe spielen zu lassen, ist meist schlechter, als bis zur Dreierstufe mitzureizen.',
      },
    ],
  },

  {
    id: 'law-of-total-tricks',
    title: 'Das Gesetz der totalen Stiche',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Wie die Zahl der Trümpfe beider Seiten die Entscheidungen im Kampf um den Teilkontrakt leitet.',
    body: `
<h3>Das Gesetz</h3>
<p>Die <strong>Gesamtzahl der Stiche</strong> eines Spiels ist definiert als die Stiche, die Nord-Süd in ihrer besten Trumpffarbe machen können, plus die Stiche, die Ost-West in ihrer besten Trumpffarbe machen können. Das Gesetz der totalen Stiche besagt, dass diese Summe ungefähr der <strong>Gesamtzahl der Trümpfe</strong> entspricht: der Länge des längsten Fits von Nord-Süd plus der Länge des längsten Fits von Ost-West.</p>
<p>Haben Sie neun Pik und die Gegner acht Coeur, gibt es etwa 17 Stiche insgesamt: Können die Gegner neun Stiche in Coeur machen, machen Sie etwa acht in Pik, und so weiter.</p>

<h3>Die praktische Regel</h3>
<p>Reizen Sie in einer umkämpften Reizung bis zu der Stufe, die der Zahl der Trümpfe Ihrer Seite entspricht:</p>
<table>
<thead><tr><th>Trümpfe Ihrer Seite</th><th>Mitreizen bis</th></tr></thead>
<tbody>
<tr><td>8</td><td>Zweierstufe (8 Stiche)</td></tr>
<tr><td>9</td><td>Dreierstufe (9 Stiche)</td></tr>
<tr><td>10</td><td>Viererstufe (10 Stiche)</td></tr>
</tbody>
</table>
<p>Die Logik dahinter: Mit neun Trümpfen sind Sie auf der Dreierstufe „sicher“, denn selbst wenn Sie fallen, können die Gegner wahrscheinlich selbst etwas erfüllen. Mit nur acht Trümpfen ist die Dreierstufe riskant, wenn die Gegner ebenfalls acht haben, denn die Summe beträgt nur 16.</p>

<h3>Ein Beispiel</h3>
<div class="auction" data-calls="1S 2H 2S 3H" data-dealer="S"></div>
<div class="hand" data-cards="S:AQJ852 H:73 D:KJ4 C:Q5" data-label="Eröffner: 3♠ reizen"></div>
<p>Die Hebung des Partners zeigt drei Trümpfe. Mit sechs Pik hat Ihre Seite neun: Reizen Sie bis 3♠ mit. Können die Gegner 3♥ erfüllen, deutet die Summe von etwa 17 Stichen darauf hin, dass Sie in Pik acht oder neun machen – 3♠ ist also in jedem Fall ein gutes Ergebnis.</p>
<div class="hand" data-cards="S:AQJ85 H:73 D:KJ4 C:Q52" data-label="Eröffner: Passe"></div>
<p>Mit fünf Pik hat Ihre Seite acht. Haben beide Seiten acht Trümpfe (16 insgesamt) und machen die Gegner neun Stiche in Coeur, machen Sie in Pik nur sieben: 3♠ hätte zwei Faller. Passen Sie und spielen Sie gegen; Ihre Werte außerhalb von Pik können 3♥ gut schlagen.</p>

<h3>Korrekturen</h3>
<p>Das Gesetz ist eine Näherung. Rechnen Sie mit <strong>mehr</strong> Stichen insgesamt als Trümpfen bei:</p>
<ul>
<li>einem Doppelfit (einem zweiten Fit in einer Nebenfarbe),</li>
<li>Kürze in den Farben der Gegner zusammen mit langen Trümpfen,</li>
<li>Figuren, die in Ihren eigenen langen Farben konzentriert sind.</li>
</ul>
<p>Rechnen Sie mit <strong>weniger</strong> Stichen insgesamt bei:</p>
<ul>
<li>Damen und Buben in den Farben der Gegner (gut im Gegenspiel, schwach im Alleinspiel),</li>
<li>flacher Verteilung (4-3-3-3) in einer der Hände,</li>
<li>schwachen Trümpfen.</li>
</ul>

<h3>Grundsätze im Kampf um den Teilkontrakt</h3>
<ul>
<li>Geben Sie auf der Zweierstufe nicht auf, wenn Ihre Seite einen 8er-Fit hat und die Gegner ebenfalls einen.</li>
<li>Reizen Sie mit neun Trümpfen bis zur Dreierstufe mit; sperren Sie mit Hebungen, wenn Sie zusätzliche Trümpfe haben, besonders in günstiger Gefahrenlage.</li>
<li>Reizen Sie mit nur acht Trümpfen nicht drei über drei, außer Sie haben zusätzliche Verteilung: Spielen Sie lieber gegen.</li>
<li>Einmal unkontriert zu fallen (−50 oder −100) ist besser, als die Gegner einen Teilkontrakt erfüllen zu lassen (−110 oder −140).</li>
</ul>
<div class="tip">Reizt der Partner gegen und Sie haben Viererunterstützung und eine schwache Hand, denken Sie an das Gesetz: Neun oder zehn gemeinsame Trümpfe bedeuten, dass Sie bis zur passenden Stufe heben sollten – das macht es den Gegnern schwerer.</div>
<div class="warn">Reizen Sie mit dem Gesetz keine Vollspiele und Schlemms auf schwache Hände. Es ist ein Leitfaden für umkämpfte Teilkontrakt-Entscheidungen, bei denen beide Seiten reizen.</div>
`,
    keyPoints: [
      'Gesamtzahl der Stiche (bester Kontrakt beider Seiten) ≈ Gesamtzahl der Trümpfe (längster Fit beider Seiten).',
      'Reizen Sie bis zu der Stufe mit, die der Trumpfzahl Ihrer Seite entspricht: 8 → Zweierstufe, 9 → Dreierstufe, 10 → Viererstufe.',
      'Mit je acht Trümpfen ist drei über drei meist falsch: Spielen Sie gegen.',
      'Korrigieren Sie nach oben bei Doppelfit und Kürzen, nach unten bei weichen Figuren in den gegnerischen Farben und flacher Verteilung.',
      'Ein kleines unkontriertes Minus ist besser, als die Gegner einen Teilkontrakt erfüllen zu lassen.',
    ],
    quiz: [
      {
        q: 'Ihre Seite hat in einer umkämpften Teilkontrakt-Reizung neun Trümpfe. Bis zu welcher Stufe empfiehlt das Gesetz mitzureizen?',
        options: ['Zweierstufe', 'Dreierstufe', 'Viererstufe', 'Fünferstufe'],
        answer: 1,
        explain: 'Reizen Sie bis zu der Stufe, die Ihrer Trumpfzahl entspricht: neun Trümpfe, neun Stiche, Dreierstufe.',
      },
      {
        q: 'Jede Seite hat einen 8er-Fit. Die Gegner reizen 3♥ über Ihr 2♠. Was empfiehlt das Gesetz?',
        options: ['3♠ reizen', 'Gegenspielen: Bei 16 Stichen insgesamt machen Sie nur sieben, wenn die Gegner neun machen', '4♠ reizen', 'Strafkontra, egal mit welcher Hand'],
        answer: 1,
        explain: 'Bei insgesamt 16 Trümpfen ergeben die Stiche zusammen etwa 16. Wird 3♥ erfüllt, hat 3♠ zwei Faller; würde 3♠ erfüllt, fällt 3♥. So oder so ist Gegenspielen mindestens genauso gut.',
      },
      {
        q: 'Welches Merkmal spricht für mehr Stiche insgesamt als Trümpfe?',
        options: ['Damen und Buben in der Farbe der Gegner', 'Eine 4-3-3-3-Verteilung', 'Ein Doppelfit mit Kürze in der Farbe der Gegner', 'Schwache Trümpfe'],
        answer: 2,
        explain: 'Ein zweiter Fit und Kürzen lassen beide Seiten in ihren eigenen Kontrakten mehr Stiche machen, als die Trumpfzahl allein vermuten lässt.',
      },
      {
        q: 'Sie haben mit sechs Pik und Minimum 1♠ eröffnet. 1♠ – (2♥) – 2♠ – (3♥) – ?',
        options: ['Passe', '3♠', '4♠', 'Kontra'],
        answer: 1,
        explain: 'Der Partner hat drei Pik, Ihre Seite also neun. Bis 3♠ mitzureizen ist genau das, was das Gesetz empfiehlt.',
      },
      {
        q: 'Welche Korrektur ist negativ, spricht also für weniger Stiche insgesamt?',
        options: ['Kürze in der Farbe der Gegner', 'Damen und Buben in den Farben der Gegner', 'Ein Zehnerfit', 'Ein zweiter Fit'],
        answer: 1,
        explain: 'Weiche Figuren in den gegnerischen Farben machen im Gegenspiel Stiche, nützen aber wenig, wenn Sie selbst spielen – deshalb machen beide Seiten als Alleinspieler eher weniger Stiche.',
      },
    ],
  },

  {
    id: 'vulnerability-imps-matchpoints',
    title: 'Gefahrenlage, IMPs, Matchpunkte und Par',
    topic: 'Scoring & tactics',
    level: 'Intermediate',
    summary: 'Wie die Gefahrenlage und die Wertungsform Ihre Entscheidungen in Reizung und Spiel verändern.',
    body: `
<h3>Gefahrenlage</h3>
<p>Für jedes Spiel ist angegeben, wer in Gefahr ist. Aus Sicht Ihrer Seite gibt es vier Kombinationen, die man meist so beschreibt:</p>
<ul>
<li><strong>Günstig:</strong> Sie nicht in Gefahr, die Gegner in Gefahr. Sperren und opfern Sie großzügig; Ihre Unterstiche sind billig und die Vollspiele der Gegner teuer.</li>
<li><strong>Gleich:</strong> beide Seiten nicht in Gefahr oder beide in Gefahr.</li>
<li><strong>Ungünstig:</strong> Sie in Gefahr, die Gegner nicht. Vorsicht: Jeder Unterstich kostet unkontriert 100 und kontriert 200–300, während die Vollspiele der Gegner weniger wert sind.</li>
</ul>
<p>Die Gefahrenlage verändert auch Ihre Vollspielentscheidungen: Ein Vollspiel in Gefahr bringt eine Prämie von 500 statt 300, daher lohnt es sich, Vollspiele in Gefahr schon mit knapperen Werten zu reizen, besonders bei IMPs.</p>

<h3>Teamturnier: IMPs</h3>
<p>In einem Teamkampf werden an beiden Tischen dieselben Spiele gespielt, und die Ergebnisdifferenz wird in International Match Points (IMPs) umgerechnet:</p>
<table>
<thead><tr><th>Differenz</th><th>IMPs</th><th>Differenz</th><th>IMPs</th></tr></thead>
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
<p>Differenzen von 0–10 ergeben 0 IMPs; 3500–3990 ergeben 23 und ab 4000 gibt es 24. Die Skala wächst langsam, daher kommen große Ausschläge von Vollspielen und Schlemms, und Überstiche spielen kaum eine Rolle. Daraus ergibt sich die IMP-Strategie:</p>
<ul>
<li><strong>Reizen Sie Vollspiele aggressiv.</strong> Nicht in Gefahr gewinnt ein gereiztes 4♠ 6 IMPs, wenn es erfüllt wird (+420 gegen +170), und verliert 5, wenn es fällt (−50 gegen +140): Es lohnt sich ab etwa 45%. In Gefahr gewinnen Sie 10 (+620 gegen +170) und verlieren 6 (−100 gegen +140): Es lohnt sich ab etwa 37%.</li>
<li><strong>Kleinschlemms</strong> lohnen sich ab etwa 50%, <strong>Großschlemms</strong> nur deutlich darüber (die Gewinnschwelle liegt bei etwa 56–57%, und in der Praxis wollen Sie fast Gewissheit).</li>
<li><strong>Sicherheit zuerst im Alleinspiel</strong>: Geben Sie einen Überstich auf, um den Kontrakt abzusichern.</li>
</ul>

<h3>Paarturnier: Matchpunkte</h3>
<p>In einem Paarturnier wird Ihr Ergebnis an jedem Board mit dem aller anderen Paare verglichen, die in Ihrer Richtung gespielt haben, und Sie bekommen für jedes Paar, das Sie übertreffen, einen Punkt (bei manchen Wertungsarten zwei). Die <em>Höhe</em> der Differenz zählt nicht, nur wie viele Paare Sie schlagen. Das verschiebt die Prioritäten:</p>
<ul>
<li>Überstiche zählen: +450 schlägt +420 genauso sicher wie +620 die +170.</li>
<li>Höher bewertete Denominationen zählen: 3SA mit zehn Stichen (+430) schlägt 4♠ mit zehn Stichen (+420). Mit zwei ausgeglichenen Händen und einem 4-4-Fit in Oberfarbe wählt man aus diesem Grund manchmal 3SA.</li>
<li>Um Teilkontrakte wird hart gekämpft: +110 gegen +90 ist bei Matchpunkten ein großer Unterschied, und die Gegner eine Stufe höher zu treiben, wo sie fallen, ist oft das Erfolgsrezept.</li>
<li>Ein kontrierter Teilkontrakt für +200 kann alle schlagen, die +110 oder +140 geschrieben haben – wird er aber kontriert erfüllt, bekommen Sie einen Nuller.</li>
<li>Sicherheitsspiele, die einen Überstich kosten, sind nur richtig, wenn der Kontrakt selbst ernsthaft in Gefahr ist.</li>
</ul>

<h3>Par</h3>
<p>Das <strong>Par</strong>-Ergebnis ist das, was herauskommt, wenn beide Seiten in Kenntnis aller vier Hände perfekt reizen. Beispiel: Können Ost-West in Gefahr 4♠ erfüllen (620) und Nord-Süd nicht in Gefahr acht Stiche in Karo machen, ist Par 5♦ kontriert mit drei Fallern von Nord-Süd: −500 ist für sie besser als −620. Echte Ergebnisse werden mit dem Par verglichen, um zu sehen, welche Seite gewonnen hat, und das Nachdenken über Par schult das Urteilsvermögen in der Konkurrenzreizung.</p>
<div class="tip">Achten Sie vor jedem Spiel auf die Gefahrenlage. Fragen Sie sich: „Wie viel ist das Vollspiel der Gegner wert, und wie viel kann ich mir leisten zu verlieren?“</div>
<div class="warn">Gehen Sie bei IMPs keine unnötigen Risiken für Überstiche ein, und spielen Sie bei Matchpunkten keine Sicherheitsspiele, die Überstiche kosten, wenn der Kontrakt nicht in Gefahr ist. Das richtige Spiel kann von der Wertungsform abhängen.</div>
`,
    keyPoints: [
      'Günstige Gefahrenlage (Sie nicht in Gefahr, die Gegner in Gefahr) ist die Zeit zum Sperren und Opfern; ungünstige die Zeit für Vorsicht.',
      'IMPs: Vollspiele nicht in Gefahr ab etwa 45% reizen, in Gefahr ab etwa 37%, Kleinschlemms ab 50%.',
      'IMPs: Überstiche zählen wenig; sichern Sie den Kontrakt ab.',
      'Matchpunkte: Jedes Paar, das Sie schlagen, zählt, daher sind Überstiche und höher bewertete Denominationen wichtig.',
      'Par ist das Ergebnis perfekter Reizung beider Seiten, einschließlich Opfergeboten.',
    ],
    quiz: [
      {
        q: 'Was bedeutet „ungünstige Gefahrenlage“?',
        options: ['Beide Seiten in Gefahr', 'Sie in Gefahr, die Gegner nicht in Gefahr', 'Sie nicht in Gefahr, die Gegner in Gefahr', 'Keine Seite in Gefahr'],
        answer: 1,
        explain: 'Ungünstig heißt: Ihre Unterstiche sind teuer und die Vollspiele der Gegner vergleichsweise billig – der schlechteste Moment für Opfergebote oder wilde Sperrgebote.',
      },
      {
        q: 'Wie oft muss bei IMPs ein Vollspiel in Gefahr ungefähr erfüllt werden, damit es sich lohnt, es zu reizen?',
        options: ['Etwa 37%', 'Etwa 50%', 'Etwa 60%', 'Etwa 75%'],
        answer: 0,
        explain: 'Sie gewinnen 10 IMPs (+620 gegen +170), wenn es erfüllt wird, und verlieren 6 (−100 gegen +140), wenn es fällt; die Gewinnschwelle liegt also bei etwa 6/16 = 37,5%.',
      },
      {
        q: 'Warum ist bei Matchpunkten +430 gegen +420 wichtig?',
        options: ['Ist es nicht: Der Unterschied ist winzig', 'Jedes Paar, das Sie übertreffen, zählt, wie klein der Abstand auch ist', 'Wegen der IMP-Skala', 'Weil es für Sans Atout eine Prämie gibt'],
        answer: 1,
        explain: 'Im Paarturnier zählt nur die Rangfolge. Zehn Punkte schlagen ein Paar genauso sicher wie tausend.',
      },
      {
        q: 'Wie viele IMPs ergibt eine Differenz von 250 Punkten?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explain: '220–260 sind 6 IMPs. Zum Beispiel +420 gegen +170, wenn ein Team ein Vollspiel nicht in Gefahr reizt und das andere im Teilkontrakt bleibt.',
      },
      {
        q: 'Die Gegner können in Gefahr 4♠ erfüllen (620). Sie sind nicht in Gefahr und rechnen damit, in 5♦ kontriert mit drei Fallern unterzugehen. Was ist das wert?',
        options: ['Ein Verlust von 800', 'Ein Verlust von 500, besser als −620', 'Ein Verlust von 300', 'Ein Gewinn'],
        answer: 1,
        explain: 'Nicht in Gefahr kosten drei Faller kontriert 100 + 200 + 200 = 500. Das ist 120 weniger als das Vollspiel der Gegner, das Opfergebot gewinnt also, wenn 4♠ wirklich erfüllt wird.',
      },
    ],
  },

  {
    id: 'safety-plays',
    title: 'Sicherheitsspiele',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Wie Sie ein wenig aufgeben, meist einen Überstich, um den Kontrakt gegen eine schlechte Verteilung abzusichern.',
    body: `
<h3>Eine Versicherung für Ihren Kontrakt</h3>
<p>Ein <strong>Sicherheitsspiel</strong> ist eine Art, eine Farbe (oder die ganze Hand) zu behandeln, die gegen einen schlechten Stand schützt, meist auf Kosten einer kleinen Chance auf einen Extrastich. Sie kaufen eine Versicherung: Bei den guten Verteilungen geben Sie ein wenig auf, um bei den schlechten die Katastrophe zu vermeiden. Die erste Frage lautet deshalb immer: <em>Wie viele Stiche brauche ich aus dieser Farbe?</em> Das beste Spiel für vier Stiche ist oft ein anderes als das beste Spiel für fünf.</p>

<h3>Eine Gabel auf beiden Seiten behalten</h3>
<p>Sie halten A Q 9 6 5 am Tisch gegenüber K 10 4 3 in der Hand; es fehlen J 8 7 2, und Sie brauchen fünf Stiche. Meist funktioniert jedes vernünftige Spiel; die Gefahr besteht darin, dass alle vier fehlenden Karten in einer Hand sitzen.</p>
<ul>
<li><strong>Ziehen Sie zuerst das Ass ab.</strong> Bedient West nicht, hält Ost J 8 7 vor Ihrem K 10: Sie spielen zweimal vom Tisch und schneiden. Bedient Ost nicht, hält West J 8 7 vor Q 9 des Dummys: Sie spielen zweimal von der Hand und schneiden. Fünf Stiche, egal welcher Gegenspieler die Länge hat.</li>
<li>Zuerst den König abzuziehen ist ein Fehler: Bedient West dann nicht, sitzt J 8 7 von Ost hinter dem verbliebenen A Q 9 des Dummys, Ihr 10 4 3 kann den Buben nicht fangen, und Ost muss einen Stich machen.</li>
</ul>
<p>Die allgemeine Regel: Halten Sie alle hohen Figuren bis auf eine, ziehen Sie zuerst die Figur ab, die in <em>beiden</em> Händen eine Schnittposition übrig lässt.</p>

<h3>Einen Überstich aufgeben, um den Kontrakt zu sichern</h3>
<p>Sie halten A K 10 5 4 am Tisch gegenüber 8 7 6 und brauchen vier Stiche; einen dürfen Sie abgeben. Das natürliche Spiel – Ass, König und eine dritte Runde – bringt nur in etwa 73% der Fälle vier Stiche: Es scheitert an 5-0-Verteilungen und an den meisten 4-1-Verteilungen.</p>
<p>Besser: Ziehen Sie das Ass ab, spielen Sie dann zum Tisch und legen Sie die 10 ein, wenn West klein bedient. Gewinnt Ost mit einer Figur, waren die Karten meist 3-2 verteilt, und der König und die langen Karten sind hoch; gewinnt die 10, haben Sie die Länge von West gefangen. So machen Sie in etwa 82% der Fälle vier Stiche: Neben jeder 3-2-Verteilung meistern Sie auch alle 4-1-Verteilungen, bei denen West die Länge hält. Der Preis ist eine etwas geringere Chance auf fünf Stiche, was nur zählt, wenn Sie sie brauchen.</p>

<h3>Ducken zur Sicherheit</h3>
<p>Der Dummy hat A K 7 6 5 4 und nur einen Übergang außerhalb der Farbe; Sie haben 3 2 und brauchen vier Stiche. Spielen Sie Ass, König und eine dritte Runde, bleiben Ihnen bei einer 4-1-Verteilung zwei Verlierer in der Farbe und kein Weg zurück zu den langen Karten. Ducken Sie stattdessen die erste Runde ganz. Später spielen Sie zu Ass und König und geben, falls die Farbe 4-1 stand, eine weitere Runde ab; mit dem Übergang außerhalb der Farbe ziehen Sie dann die letzten beiden ab. Vier Stiche gegen jede 3-2- oder 4-1-Verteilung: 96%.</p>

<h3>Sicherheit für die ganze Hand</h3>
<p>Sicherheit betrifft nicht nur einzelne Farben. Angenommen, Sie zählen in 3SA neun Stiche, und ein Schnitt könnte einen zehnten bringen – verliert er aber, kann der Gegenspieler, der den Stich bekommt, vier Stiche in seiner langen Farbe abziehen. Schneiden Sie nicht. Im Teamturnier ist ein Überstich höchstens 1 IMP wert, der Kontrakt dagegen viel mehr. Ebenso sollten Sie sich fragen, bevor Sie in einer Farbe ein Risiko eingehen, ob eine andere Farbe die Stiche ganz ohne Risiko liefern könnte.</p>
<div class="tip">Bevor Sie eine Schlüsselfarbe anfassen, fragen Sie sich: „Welches ist die schlechteste Verteilung, mit der ich fertigwerden kann, und welches Spiel wird mit ihr fertig?“</div>

<h3>Sicherheitsspiele und die Wertungsform</h3>
<ul>
<li><strong>Teamturnier (IMPs):</strong> Nehmen Sie fast jedes Sicherheitsspiel wahr, das den Kontrakt schützt. Ein Überstich bringt sehr wenig, ein verlorenes Vollspiel kostet viel.</li>
<li><strong>Paarturnier (Matchpunkte):</strong> Überstiche zählen, denn alle anderen im selben Kontrakt sind Ihre Konkurrenten. Spielen Sie nur dann auf Sicherheit, wenn der Kontrakt wirklich in Gefahr ist oder wenn Sie vermuten, in einem besseren Kontrakt zu sitzen als der Rest des Saals.</li>
</ul>
<div class="warn">Ein Sicherheitsspiel, das Sie ohne Not wählen oder das gegen die falsche Gefahr schützt, ist einfach ein verschenkter Stich. Zählen Sie zuerst Ihre Stiche; entscheiden Sie dann, ob Sie eine Versicherung brauchen und welche.</div>
`,
    keyPoints: [
      'Entscheiden Sie zuerst, wie viele Stiche Sie aus der Farbe brauchen; davon hängt das beste Spiel ab.',
      'Mit A Q 9 x x gegenüber K 10 x x ziehen Sie zuerst das Ass ab, damit Ihnen gegen beide Gegenspieler ein Schnitt bleibt.',
      'Mit A K 10 x x gegenüber x x x, wenn Sie vier Stiche brauchen: Ass abziehen, dann mit der 10 schneiden.',
      'Ducken Sie eine frühe Runde, wenn Übergänge knapp sind und Sie sich einen Verlierer leisten können.',
      'Bei IMPs spielen Sie großzügig auf Sicherheit, bei Matchpunkten nur, wenn der Kontrakt in Gefahr ist.',
    ],
    quiz: [
      {
        q: 'Sie halten A Q 9 6 5 gegenüber K 10 4 3 und brauchen fünf Stiche. Welche Karte ziehen Sie zuerst ab?',
        options: ['Das Ass', 'Den König', 'Die Dame', 'Das ist egal'],
        answer: 0,
        explain: 'Nach dem Ass behalten Sie K 10 hinter Ost und Q 9 hinter West, sodass Sie eine 4-0-Verteilung auffangen können, egal welcher Gegenspieler die vier Karten hat.',
      },
      {
        q: 'Sie halten A K 10 5 4 gegenüber 8 7 6 und brauchen nur vier Stiche. Was ist das Sicherheitsspiel?',
        options: ['Ass und König abziehen, dann eine dritte Runde spielen', 'Das Ass abziehen, dann zum Tisch spielen und mit der 10 schneiden, wenn West klein bedient', 'Die 10 vom Tisch ausspielen', 'Die ersten beiden Runden ducken'],
        answer: 1,
        explain: 'So schützen Sie sich gegen Q J 9 x bei West und machen bei allen normalen Verteilungen trotzdem vier Stiche: etwa 82% gegenüber etwa 73%, wenn Sie die hohen Karten abziehen.',
      },
      {
        q: 'Der Dummy hat A K 7 6 5 4 und einen Übergang außerhalb der Farbe; Sie haben 3 2. Sie brauchen vier Stiche aus der Farbe. Was tun Sie?',
        options: ['Ass, König, dann eine dritte Runde', 'Die erste Runde ducken', 'Die 3 spielen und mit der 7 schneiden', 'Das Ass abziehen und hoffen'],
        answer: 1,
        explain: 'Wenn Sie die erste Runde ducken, bleiben die hohen Karten des Dummys als Übergänge erhalten. Dann machen Sie sowohl gegen 3-2 als auch gegen 4-1 vier Stiche, in etwa 96% der Fälle.',
      },
      {
        q: 'Bei IMPs zählen Sie in 3SA neun Stiche. Ein Schnitt könnte einen zehnten bringen, aber wenn er verliert, kann das Gegenspiel eine Farbe abziehen. Was tun Sie?',
        options: ['Für den Überstich schneiden', 'Ihre neun Stiche nehmen', 'Zuerst einen Stich ducken', 'Auf einen Squeeze spielen'],
        answer: 1,
        explain: 'Der Überstich ist bei IMPs fast nichts wert, ein Faller kostet dagegen ein Vollspiel. Bringen Sie den Kontrakt nach Hause.',
      },
      {
        q: 'Warum spielt man bei Matchpunkten seltener auf Sicherheit?',
        options: ['Weil es dort verboten ist', 'Weil ein Überstich die anderen Paare im selben Kontrakt schlagen kann', 'Weil Vollspiele weniger zählen', 'Weil die Gegenspieler schwächer sind'],
        answer: 1,
        explain: 'Im Paarturnier schlägt +450 die +420 genauso sicher wie +420 die −50. Einen Überstich aufzugeben kostet Matchpunkte, wann immer der Kontrakt nie wirklich in Gefahr war.',
      },
    ],
  },

  {
    id: 'avoidance-play',
    title: 'Vermeidungsspiel: den gefährlichen Gegner fernhalten',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Wie Sie das Spiel so anlegen, dass Sie einen unvermeidlichen Stich an den Gegenspieler abgeben, der Ihnen nicht schaden kann.',
    body: `
<h3>Gefährliche und ungefährliche Hand</h3>
<p>Oft kann Ihnen nur einer der Gegenspieler schaden. In SA ist es derjenige mit hochgespielten Gewinnern in seiner langen Farbe. Im Farbkontrakt kann es derjenige sein, der durch einen König spielen oder seinem Partner einen Schnapper geben kann. Erkennen Sie die <strong>gefährliche Hand</strong> früh, und planen Sie, jeden Stich, den Sie abgeben müssen, an die <strong>ungefährliche Hand</strong> abzugeben. Das ist das Vermeidungsspiel.</p>

<h3>Ein vollständiges Beispiel</h3>
<div class="deal" data-n="S:54 H:K83 D:KQ5 C:AJ1093" data-e="S:97 H:Q975 D:J643 C:Q86" data-s="S:A632 H:AJ4 D:A72 C:K72" data-w="S:KQJ108 H:1062 D:1098 C:54" data-caption="3SA von Süd. West spielt den ♠K aus."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Zählen:</strong> ♠A, ♥AK, ♦AKQ, ♣AK: acht sichere Stiche. Die zusätzlichen Stiche kommen aus Treff, aber vielleicht müssen Sie einen an die ♣Q abgeben.</p>
<p><strong>Schritt 1: das Hold-up.</strong> Sie haben zusammen sechs Pik, also halten Sie nach der Siebenerregel einmal zurück. Ducken Sie den ♠K und nehmen Sie den zweiten Pikstich. Ost hatte zwei Pik und hat jetzt keines mehr: <strong>Ost ist die ungefährliche Hand, West die gefährliche.</strong></p>
<p><strong>Schritt 2: die Richtung des Schnitts wählen.</strong> Treff lässt sich in beide Richtungen schneiden: Sie können die Dame bei jedem der beiden Gegenspieler vermuten. Spielen Sie den ♣K von der Hand, dann ein kleines Treff zum Tisch, und schneiden Sie mit der 10, wenn West klein bedient. Hat West die Dame, gewinnt der Schnitt. Hat Ost sie, wie hier, gewinnt Ost, hat aber kein Pik mehr zum Zurückspielen. Sie nehmen den Wechsel und machen zehn Stiche: einen Pik, zwei Coeur, drei Karo und vier Treff.</p>
<p>Der Schnitt in die andere Richtung (den ♣J durch Ost zu Ihrem König) würde bei dieser Verteilung zufällig auch funktionieren, aber er verlöre immer dann, wenn West die Dame hielte – und West würde dann die Piks abziehen. Das Vermeidungsspiel gewinnt, wo immer die Dame sitzt.</p>
<p>Und der Coeurschnitt, also zum A J zu spielen? Auch er verlöre an West, wenn West die ♥Q hielte. Ziehen Sie die Farbe vor, in der ein verlorener Schnitt an die ungefährliche Hand geht.</p>
<div class="tip">Bei einem Schnitt in beide Richtungen fragen Sie sich zuerst: „Wenn dieser Schnitt verliert, spielt es eine Rolle, wer den Stich bekommt?“ Wenn ja, schneiden Sie zur ungefährlichen Hand; raten müssen Sie nur, wenn beide Gegenspieler gleich gefährlich sind.</div>

<h3>Weitere Vermeidungstechniken</h3>
<ul>
<li><strong>Zur ungefährlichen Hand ducken.</strong> Muss eine Farbe einen Stich abgeben, sorgen Sie dafür, dass der ungefährliche Gegenspieler ihn bekommt: Spielen Sie von der Hand aus, die es Ihnen erlaubt, klein zu bleiben, während die gefährliche Hand den Stich nicht billig gewinnen kann.</li>
<li><strong>Einen König schützen.</strong> Mit K x in der Hand und der gefährlichen Hand rechts von Ihnen ist ein Ausspiel durch Ihren König tödlich – lassen Sie die gefährliche Hand also nicht ans Spiel.</li>
<li><strong>Spielen Sie zu Figuren hin</strong>, sodass der Partner der gefährlichen Hand den Stich nehmen muss und nicht die gefährliche Hand selbst.</li>
<li><strong>Im Farbkontrakt</strong> kann die Gefahr ein Schnapper sein: Ist ein Gegenspieler bekanntermaßen in einer Farbe kurz, lassen Sie seinen Partner nicht ans Spiel, damit er den Schnapper nicht geben kann.</li>
</ul>
<div class="warn">Vermeidungsspiel funktioniert nur, wenn Sie wissen, welcher Gegenspieler gefährlich ist. Achten Sie auf das Ausspiel, die Reizung und die Karten der ersten Stiche, und finden Sie heraus, wer die lange Farbe hält, bevor Sie Ihre Schlüsselfarbe angehen.</div>
`,
    keyPoints: [
      'Erkennen Sie die gefährliche Hand (oft der Gegenspieler mit hochgespielten Gewinnern) und die ungefährliche Hand.',
      'Müssen Sie einen Stich abgeben, geben Sie ihn an die ungefährliche Hand ab.',
      'Kombinieren Sie Hold-up und Vermeidungsspiel: Machen Sie den Partner des Spielers mit der langen Farbe zur ungefährlichen Hand und schneiden Sie dann zu ihm.',
      'Bei einem Schnitt in beide Richtungen wählen Sie die Richtung, die nur an die ungefährliche Hand verliert.',
      'Ziehen Sie eine Stichquelle vor, bei der die Verlustvariante an die ungefährliche Hand geht.',
    ],
    quiz: [
      {
        q: 'Welcher Gegenspieler ist in SA meist die gefährliche Hand?',
        options: ['Der mit mehr FP', 'Der mit hochgespielten Gewinnern in seiner langen Farbe', 'Der links von Ihnen', 'Immer der, der ausgespielt hat'],
        answer: 1,
        explain: 'Die gefährliche Hand ist die, die genug Stiche abziehen kann, um Sie zu schlagen, sobald sie ans Spiel kommt – normalerweise der Gegenspieler mit der langen, hochgespielten Farbe.',
      },
      {
        q: 'Warum ducken Sie im Spiel oben den ersten Pikstich?',
        options: ['Um einen zusätzlichen Pikstich zu gewinnen', 'Um Ost die Piks zu nehmen, damit Ost die ungefährliche Hand wird', 'Um Ihre Piklänge zu verbergen', 'Um einen Übergang zum Tisch zu schaffen'],
        answer: 1,
        explain: 'Ost hatte zwei Pik. Nachdem Sie die zweite Runde genommen haben, hat Ost keines mehr und kann Ihnen am Ausspiel nicht schaden.',
      },
      {
        q: 'In welche Richtung sollten Sie im Spiel oben in Treff schneiden?',
        options: ['Die Dame bei West schneiden, damit ein verlorener Schnitt an Ost geht', 'Die Dame bei Ost schneiden', 'Auf Fall spielen', 'Eine Münze werfen'],
        answer: 0,
        explain: 'Zum Tisch zu spielen und mit der 10 zu schneiden gewinnt, wenn West die Dame hat, und verliert nur an Ost, der kein Pik mehr hat. Der Kontrakt ist in beiden Fällen sicher.',
      },
      {
        q: 'Warum versuchen Sie für den neunten Stich nicht den Coeurschnitt (zum A J spielen)?',
        options: ['Er verlöre, wenn West, die gefährliche Hand, die ♥Q hielte', 'Er kann nicht gewinnen', 'Er braucht zwei Übergänge', 'Coeur ist blockiert'],
        answer: 0,
        explain: 'Zum A J zu spielen schneidet gegen Ost, verliert aber an die Dame von West – und West würde dann die Piks abziehen. Der Treffschnitt verliert nur an die ungefährliche Hand.',
      },
      {
        q: 'Sie halten K x in der Hand, und die gefährliche Hand sitzt rechts von Ihnen. Worin liegt das Risiko?',
        options: ['Es gibt keins', 'Ein Ausspiel der gefährlichen Hand durch Ihren König könnte ihn fangen', 'Ihr König wird geschnappt', 'Sie könnten die Farbe blockieren'],
        answer: 1,
        explain: 'Kommt der Gegenspieler rechts von Ihnen ans Spiel, sitzt das Ass seines Partners über Ihrem König. Lassen Sie diesen Gegenspieler nicht ans Spiel, oder sorgen Sie dafür, dass der andere jeden Stich bekommt, den Sie abgeben müssen.',
      },
    ],
  },

  {
    id: 'counting-on-defense',
    title: 'Zählen im Gegenspiel',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Wie Gegenspieler die Punkte, die Verteilung und die Stiche des Alleinspielers zählen, um das richtige Gegenspiel zu finden.',
    body: `
<h3>Drei Dinge zählen</h3>
<p>Starke Gegenspieler scheinen durch die Rückseiten der Karten zu sehen. Ihr Geheimnis ist das Zählen. Aus der Reizung und den ersten Stichen erschließen sie drei Dinge:</p>
<ol>
<li><strong>Punkte:</strong> wie viele FP der Alleinspieler und der Partner haben.</li>
<li><strong>Verteilung:</strong> wie viele Karten der Alleinspieler in jeder Farbe hält.</li>
<li><strong>Stiche:</strong> wie viele Stiche der Alleinspieler machen kann und wie viele das Gegenspiel braucht.</li>
</ol>

<h3>Punkte zählen</h3>
<p>Beginnen Sie mit der Reizung. Eine 1SA-Eröffnung hat 15–17 FP, eine schwache Zwei 5–10, eine Limit-Hebung 10–12. Sobald der Dummy liegt, addieren Sie seine FP zu Ihren und ziehen die Summe von 40 ab.</p>
<p>Beispiel: Süd eröffnet 1SA, und Nord hebt auf 3SA. Der Dummy hat 10 FP, Sie haben 9. Der Partner hat 40 − 10 − 9 − (15 bis 17) = 4 bis 6 FP. Hat der Partner schon den ♠K gezeigt, indem er damit einen Stich gemacht hat, bleiben ihm höchstens 3 weitere FP, er kann also kein weiteres Ass halten. Jedes andere fehlende Ass sitzt daher beim Alleinspieler, und es ist sinnlos zu hoffen, dass der Partner ans Spiel kommt, um seine lange Farbe abzuziehen.</p>
<p>Dieselbe Rechnung funktioniert auch umgekehrt. Hat der Alleinspieler, der 15–17 FP gezeigt hat, bereits ♠AQ, ♥AK und ♦K vorgezeigt (16), kann er nicht auch noch das ♣A halten (das wären 20). Der Partner hat es, und Sie können gefahrlos Treff durch den König des Dummys spielen.</p>

<h3>Die Verteilung zählen</h3>
<p>Jede Hand hat 13 Karten. Nutzen Sie zuerst die Reizung: Eine 1♥-Eröffnung hat fünf oder mehr Coeur; 1♠ gefolgt von 2♥ zeigt mindestens fünf Pik und vier Coeur; eine 1SA-Eröffnung hat kein Single. Hinzu kommen die Längenmarkierungen des Partners und der Moment, in dem ein Spieler nicht mehr bedient.</p>
<table>
<thead><tr><th>Quelle</th><th>Was Sie erfahren</th></tr></thead>
<tbody>
<tr><td>Eröffnung und Wiedergebot des Alleinspielers</td><td>Länge in den gereizten Farben; ausgeglichen oder nicht</td></tr>
<tr><td>Dummy</td><td>13 Karten, die Sie sehen</td></tr>
<tr><td>Längenmarkierungen des Partners</td><td>Die Länge des Partners in den Farben des Alleinspielers und damit auch die des Alleinspielers</td></tr>
<tr><td>Ein Spieler bedient nicht mehr</td><td>Seine genaue Länge in dieser Farbe</td></tr>
</tbody>
</table>
<p>Beispiel: Der Alleinspieler hat 1♠ eröffnet und 2♥ wiedergeboten, hat also mindestens 5-4 in den Oberfarben. Die Längenmarkierung des Partners zeigt, dass der Alleinspieler zwei Karo hat. Das sind elf Karten, also hat der Alleinspieler höchstens zwei Treff, und deutet die Reizung auf 5-4-2-2 hin, genau zwei. Spielt der Alleinspieler nun ein Treff zum K Q x x des Dummys und Sie halten das Ass, wissen Sie, ob Ducken ihn vom Rest der Farbe abschneiden kann.</p>
<div class="tip">Zählen Sie die Hand so früh wie möglich aus, am besten bis zum dritten Stich. Behalten Sie die vier Farblängen im Kopf (zum Beispiel „5-4-2-2“) und aktualisieren Sie sie, sobald eine Karte Ihnen etwas verrät.</div>

<h3>Stiche zählen</h3>
<p>Fragen Sie sich: „Wie viele Stiche kann der Alleinspieler machen, sobald er am Spiel ist?“ Reicht das bereits für den Kontrakt, müssen Sie Ihre Stiche jetzt holen: wechseln, abziehen oder sofort den Stich holen, der den Kontrakt schlägt. Fehlen dem Alleinspieler Stiche, spielen Sie passiv gegen und lassen ihn diese Stiche verlieren.</p>
<p>Beispiel: Gegen 4♠ hat der Dummy ♣A K Q J 5, und Reizung und erste Stiche zeigen, dass der Alleinspieler eine starke Pikfarbe und das ♥A hat. Sobald Trumpf gezogen ist, zählt er fünf Pik, fünf Treff und das ♥A: elf Stiche. Haben Sie Stiche in Coeur oder Karo, müssen sie sofort geholt werden, selbst auf die Gefahr hin, von einem König weg auszuspielen.</p>
<p>Umgekehrt hat der Alleinspieler nach einer Reizung 1SA – 3SA mit flachem Dummy ohne lange Farbe vielleicht nur sieben oder acht Stiche. Dann sollte das Gegenspiel keine neuen Farben anspielen und abwarten: Der Alleinspieler wird Stiche abgeben müssen.</p>

<h3>Alles zusammen</h3>
<p>Zählen ist keine einmalige Rechnung, sondern eine Gewohnheit. Fragen Sie sich in jedem Stich, was die gespielte Karte über die vier Hände verrät. Wird das Bild klarer, liegt das richtige Gegenspiel oft auf der Hand; und wenn nicht, sagt Ihnen die Zählung wenigstens, welche Verteilungen Sie brauchen, damit der Kontrakt fällt. Spielen Sie auf diese Verteilungen.</p>
<div class="warn">Zählen Sie nicht nur die Stiche Ihrer eigenen Seite. Die Frage ist immer, ob der Alleinspieler den Kontrakt erfüllen kann und wie Ihre Seite das verhindern kann.</div>
`,
    keyPoints: [
      'Punkte zählen: Aus Reizung, Dummy und Ihrer Hand ermitteln Sie die FP des Partners.',
      'Verteilung zählen: Reizung, Dummy, Längenmarkierungen des Partners und Nicht-mehr-Bedienen ergeben zusammen 13.',
      'Stiche des Alleinspielers zählen: Hat er genug, holen Sie Ihre Stiche jetzt; wenn nicht, spielen Sie passiv gegen.',
      'Hat der Alleinspieler eine Spanne gezeigt, begrenzen die bereits gespielten Figuren, was er sonst noch halten kann.',
      'Unterstellen Sie die Verteilung, bei der der Kontrakt geschlagen werden kann, und spielen Sie entsprechend gegen.',
    ],
    quiz: [
      {
        q: 'Süd hat 1SA (15–17) eröffnet, Nord hat auf 3SA gehoben. Der Dummy hat 10 FP, Sie haben 9. Wie viele FP hat der Partner?',
        options: ['0–2', '4–6', '7–9', '10–12'],
        answer: 1,
        explain: '40 − 10 − 9 = 21 für Alleinspieler und Partner zusammen. Der Alleinspieler hat 15–17, also hat der Partner 4–6.',
      },
      {
        q: 'Der Alleinspieler hat 1SA (15–17) eröffnet und bereits ♠AQ, ♥AK und ♦K gezeigt. Wer hat das ♣A?',
        options: ['Der Alleinspieler', 'Der Partner', 'Das lässt sich nicht wissen', 'Der Dummy'],
        answer: 1,
        explain: 'Der Alleinspieler hat 16 FP gezeigt. Mit dem ♣A käme er auf 20, außerhalb seiner Spanne, also muss der Partner es haben.',
      },
      {
        q: 'Der Alleinspieler hat 1♠ eröffnet und 2♥ wiedergeboten. Die Längenmarkierung des Partners zeigt, dass er zwei Karo hat. Wie viele Treff kann er höchstens halten?',
        options: ['Eins', 'Zwei', 'Drei', 'Vier'],
        answer: 1,
        explain: 'Mindestens fünf Pik und vier Coeur plus zwei Karo ergeben elf, also hat der Alleinspieler höchstens zwei Treff.',
      },
      {
        q: 'Gegen 4♠ zählen Sie elf Stiche für den Alleinspieler, sobald er wieder ans Spiel kommt. Was sollte das Gegenspiel tun?',
        options: ['Passiv gegenspielen', 'Die eigenen Stiche sofort holen oder hochspielen', 'Trumpf spielen', 'Auf einen Fehler des Alleinspielers warten'],
        answer: 1,
        explain: 'Hat der Alleinspieler die nötigen Stiche, lässt passives Gegenspiel ihn diese einfach machen. Ihre einzige Chance ist, Ihre Stiche jetzt zu holen.',
      },
      {
        q: 'Gegen 3SA ist der Dummy flach, und der Alleinspieler scheint nur sieben oder acht Stiche zu haben. Welches Gegenspiel ist meist am besten?',
        options: ['Passiv: keine neuen Farben anspielen', 'Jede Farbe der Reihe nach angreifen', 'Alle Asse sofort abziehen', 'Unter den eigenen Königen ausspielen'],
        answer: 0,
        explain: 'Dem Alleinspieler fehlen Stiche. Wer neue Farben anspielt, riskiert, ihm einen zu schenken; mit sicheren Abspielen muss er die Stiche ohne Hilfe finden.',
      },
    ],
  },

  {
    id: 'penalty-doubles-and-sacrifices',
    title: 'Strafkontras und Opfergebote',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Wann Sie die Gegner zur Strafe kontrieren und wann Sie einen Kontrakt reizen, der voraussichtlich fällt, weil er weniger kostet als der Kontrakt der Gegner.',
    body: `
<h3>Strafkontras</h3>
<p>Viele Kontras auf niedriger Stufe sind Informationskontras; Strafkontras entstehen deshalb in wenigen klaren Situationen:</p>
<ul>
<li><strong>Nach einer Sequenz mit negativem Kontra:</strong> Der Antwortende passt mit einer starken Haltung in der Farbe des Gegenreizers, der Eröffner belebt mit Kontra wieder, und der Antwortende lässt es stehen (siehe die Lektion „Negative Kontras“).</li>
<li><strong>Nachdem Ihre Seite rekontriert hat</strong> (1♥ – Kontra – Rekontra), haben Sie die Mehrheit der Stärke gezeigt, und Kontras gegen die Fluchtgebote der Gegner sind Strafkontras.</li>
<li><strong>Wenn sich die Gegner überreizt haben</strong> – in ein Vollspiel oder einen hohen Teilkontrakt, bei einem Misfit oder in einer umkämpften Reizung – und Sie Trumpfstiche halten.</li>
<li><strong>Wenn Sie Ihre Hand bereits beschrieben haben</strong> und der Partner Werte hat: Ein Kontra von einem von Ihnen heißt dann „Den schlagen wir“.</li>
</ul>
<h4>Richtlinien</h4>
<ul>
<li>Trumpfstiche sind der beste Grund für ein Kontra. Hohe Karten in Nebenfarben können geschnappt oder geschnitten werden.</li>
<li>Kontrieren Sie ein freiwillig gereiztes Vollspiel nicht allein wegen hoher Karten. Die Gegner wissen, was ihnen fehlt, und Ihr Kontra verrät dem Alleinspieler, wo die Figuren sitzen.</li>
<li>Bedenken Sie, was passiert, wenn der Kontrakt erfüllt wird. 2♥ kontriert erfüllt bringt 470 oder 670: Aus einem Teilkontrakt ist ein Vollspiel geworden.</li>
<li>Bedenken Sie, wohin die Gegner flüchten können. 1♠ zu kontrieren, wenn sie bequem in einen besseren Fit ausweichen können, bringt wenig.</li>
</ul>

<h3>Was kostet ein kontrierter Faller?</h3>
<table>
<thead><tr><th>Faller</th><th>Nicht in Gefahr, kontriert</th><th>In Gefahr, kontriert</th></tr></thead>
<tbody>
<tr><td>1</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>300</td><td>500</td></tr>
<tr><td>3</td><td>500</td><td>800</td></tr>
<tr><td>4</td><td>800</td><td>1100</td></tr>
</tbody>
</table>

<h3>Opfergebote</h3>
<p>Ein <strong>Opfergebot</strong> ist ein Kontrakt, in dem Sie zu fallen erwarten, weil die Strafe weniger kostet, als der Kontrakt der Gegner einbringen würde. Vergleichen Sie die Zahlen:</p>
<table>
<thead><tr><th>Vollspiel der Gegner</th><th>Wert</th><th>Ihr Spielraum (kontriert), nicht in Gefahr</th><th>Ihr Spielraum (kontriert), in Gefahr</th></tr></thead>
<tbody>
<tr><td>Nicht in Gefahr</td><td>420</td><td>2 Faller (300)</td><td>1 Faller (200)</td></tr>
<tr><td>In Gefahr</td><td>620</td><td>3 Faller (500)</td><td>2 Faller (500)</td></tr>
</tbody>
</table>
<p>Opfergebote sind also in <strong>günstiger Gefahrenlage</strong> am billigsten: Sie nicht in Gefahr, die Gegner in Gefahr.</p>
<div class="auction" data-calls="1S 2H 4S" data-dealer="W"></div>
<div class="hand" data-cards="S:5 H:K9743 D:Q862 C:J74" data-label="Günstige Gefahrenlage: 5♥ reizen"></div>
<p>Der Partner hat 2♥ gegengereizt, und Ost ist auf 4♠ gesprungen. Sie haben Fünferunterstützung in Coeur, ein Single Pik und wenig Verteidigung: 4♠ wird fast sicher erfüllt und bringt 620. 5♥ kontriert geht wahrscheinlich mit zwei oder drei Fallern unter: 300 oder 500. Reizen Sie 5♥ sofort, bevor die Gegner weitere Informationen austauschen können.</p>

<h3>Wann Sie nicht opfern</h3>
<ul>
<li><strong>Wenn der Kontrakt der Gegner fallen könnte.</strong> Ein Opfergebot gegen einen Kontrakt, der gefallen wäre, ist ein <em>Phantomopfer</em>: Sie machen aus einem Plus ein Minus. Haben Sie Verteidigungsstiche, spielen Sie gegen.</li>
<li><strong>Wenn der Preis zu hoch ist.</strong> In Gefahr gegen nicht in Gefahr gibt es gegen ein Vollspiel fast nie ein lohnendes Opfer.</li>
<li><strong>Wenn Sie Ihre Hand schon beschrieben haben und der Partner die Entscheidung besser treffen kann</strong>: Wer mehr weiß, entscheidet. Setzen Sie sich nicht über die Entscheidung des Partners hinweg, gegenzuspielen. Hat der Partner ein forcierendes Passe abgegeben, halten Sie sich an Ihre Partnerschaftsabsprache.</li>
<li><strong>Wenn die Gegner weiterreizen könnten.</strong> In Ruhe gelassen, gehen sie vielleicht in einen Kontrakt auf Fünferstufe, der fällt; ein Opfergebot dagegen kann sie in einen Schlemm treiben, der erfüllt wird.</li>
</ul>
<div class="tip">„Die Fünferstufe gehört den Gegnern“: Reizen sie fünf über Ihr Vollspiel auf Viererstufe, ist Gegenspielen (oft mit Kontra) meist richtig. Ein Opfergebot auf Sechserstufe lohnt sich selten.</div>
<div class="warn">Entscheiden Sie früh. Ein Opfergebot, das schnell abgegeben wird, bevor die Gegner Informationen ausgetauscht haben, ist viel wirksamer als eines, nachdem sie genau herausgefunden haben, wohin sie gehören.</div>
`,
    keyPoints: [
      'Strafkontras wirken am besten mit Trumpfstichen, nachdem Ihre Seite die Mehrheit der Stärke gezeigt hat.',
      'Kontrieren Sie freiwillig gereizte Vollspiele nicht allein wegen hoher Karten in Nebenfarben, und hüten Sie sich davor, einen Teilkontrakt ins Vollspiel zu kontrieren.',
      'Ein Opfergebot lohnt sich, wenn die Strafe geringer ist als der Wert des gegnerischen Kontrakts.',
      'Gegen ein Vollspiel in Gefahr (620) dürfen Sie nicht in Gefahr kontriert dreimal fallen (500); gegen ein Vollspiel nicht in Gefahr (420) zweimal (300).',
      'Vermeiden Sie Phantomopfer: Haben Sie Verteidigungsstiche, spielen Sie gegen.',
    ],
    quiz: [
      {
        q: 'Beide Seiten sind nicht in Gefahr. Die Gegner können 4♠ erfüllen (420). Wie viele Faller kontriert können Sie sich bei einem Opfergebot leisten?',
        options: ['Einen', 'Zwei', 'Drei', 'Vier'],
        answer: 1,
        explain: 'Zwei Faller kontriert nicht in Gefahr kosten 300, weniger als 420. Drei Faller kosten 500, mehr als das Vollspiel der Gegner.',
      },
      {
        q: 'In günstiger Gefahrenlage können die Gegner 4♠ in Gefahr erfüllen (620). Wie viele Faller kontriert können Sie sich leisten?',
        options: ['Zwei', 'Drei', 'Vier', 'Fünf'],
        answer: 1,
        explain: 'Drei Faller kontriert nicht in Gefahr kosten 500, weniger als 620. Vier Faller kosten 800.',
      },
      {
        q: 'Was ist ein Phantomopfer?',
        options: ['Ein Opfergebot, das genau den Wert des gegnerischen Vollspiels kostet', 'Ein Opfergebot gegen einen Kontrakt, der gefallen wäre', 'Ein Opfergebot auf der Sechserstufe', 'Ein Opfergebot, das die Gegner nicht kontrieren'],
        answer: 1,
        explain: 'Wäre der Kontrakt der Gegner gefallen, macht Ihr Opfergebot aus einem Plus ein Minus. Verteidigungswerte sind ein Grund, nicht zu opfern.',
      },
      {
        q: 'Die Gegner reizen ungestört 1♥ – 3♥ – 4♥. Sie halten 12 FP, aber nur kleine Coeurs. Sollten Sie kontrieren?',
        options: ['Ja: Sie haben eine Eröffnungshand', 'Nein: Hohe Karten außerhalb der Trumpffarbe rechtfertigen selten ein Kontra gegen ein freiwillig gereiztes Vollspiel', 'Ja, um ein bestimmtes Ausspiel zu verlangen', 'Nur in Gefahr'],
        answer: 1,
        explain: 'Die Gegner rechnen damit, dass ihnen hohe Karten fehlen. Ihr Kontra bringt wenig, wenn sie einmal fallen, kostet viel, wenn sie erfüllen, und hilft dem Alleinspieler, die fehlenden Figuren zu orten.',
      },
      {
        q: 'Warum kann es teuer werden, einen niedrigen Teilkontrakt zu kontrieren?',
        options: ['Das wird es nie', 'Weil der kontrierte Stichwert bei Erfüllung das Vollspiel erreichen kann: 2♥ kontriert bringt 470 oder 670', 'Weil die Gegner eine Prämie dafür bekommen, kontriert zu werden', 'Weil Sie Trumpf ausspielen müssen'],
        answer: 1,
        explain: 'Kontriert hat 2♥ einen Stichwert von 120, und das zählt als Vollspiel. Rechnen Sie fest damit, einen Teilkontrakt zu schlagen, bevor Sie ihn kontrieren.',
      },
    ],
  },

  {
    id: 'slam-controls-and-cue-bids',
    title: 'Kontrollen und Cuebids: wann Blackwood nicht passt',
    topic: 'Slam bidding',
    level: 'Advanced',
    summary: 'Warum Asse zu zählen für einen Schlemm nicht genügt und wie Kontroll-Cuebids herausfinden, ob jede Farbe abgedeckt ist.',
    body: `
<h3>Kontrollen</h3>
<p>Für einen Schlemm brauchen Sie genug Stiche, und Sie müssen außerdem verhindern, dass die Gegner zwei Stiche machen, bevor Sie loslegen können. Eine Farbe ist <strong>kontrolliert</strong>, wenn die Gegner darin nicht zwei schnelle Stiche abziehen können:</p>
<ul>
<li><strong>Erstrundenkontrolle:</strong> das Ass oder eine Chicane (im Farbkontrakt).</li>
<li><strong>Zweitrundenkontrolle:</strong> der König oder ein Single.</li>
</ul>
<p>Für einen Kleinschlemm brauchen Sie in jeder Nebenfarbe mindestens die Zweitrundenkontrolle und insgesamt höchstens einen Verlierer in der ersten Runde. Für einen Großschlemm brauchen Sie überall die Erstrundenkontrolle und gar keinen Verlierer.</p>
<p>Manche Spieler zählen Kontrollen mit A = 2 und K = 1 (12 im ganzen Spiel). Hände reich an Assen und Königen erfüllen Schlemms, die 33 Punkte aus Damen und Buben nicht erfüllen.</p>

<h3>Wo Blackwood versagt</h3>
<div class="deal" data-n="S:K5 H:AKJ84 D:83 C:AJ104" data-s="S:AQ63 H:Q1052 D:72 C:KQ5" data-caption="Nord eröffnet 1♥, und Süd hebt mit Jacoby 2SA."></div>
<p>Nord hat 16 FP und Süd 13, dazu ein Neunerfit in Coeur: Ein Schlemmversuch ist vernünftig. Fragt Süd mit Blackwood, zeigt Nord zwei Asse, Süd hat das dritte, und Süd reizt 6♥. Das Gegenspiel zieht ♦A und ♦K ab. Blackwood hat verraten, dass drei Asse vorhanden sind, konnte Süd aber nicht sagen, dass keine der beiden Hände Karo kontrolliert.</p>
<p>Verwenden Sie Blackwood nicht, wenn:</p>
<ul>
<li>Sie zwei (oder mehr) kleine Karten in einer Farbe haben, die niemand gereizt hat, und nicht wissen, ob der Partner sie kontrolliert;</li>
<li>Sie eine Chicane haben: Das Ass des Partners in Ihrer Chicane-Farbe ist wertlos, aber Blackwood zählt es mit;</li>
<li>die Antwort Sie zu hoch bringen könnte, etwa mit Treff als Trumpf, wo Ihnen eine Antwort von 5♥ keinen Weg mehr lässt, in 5♣ stehen zu bleiben.</li>
</ul>

<h3>Cuebids (Kontrollgebote)</h3>
<p>Ist in einer forcierenden Reizung eine Trumpffarbe vereinbart, zeigt ein Gebot in einer neuen Farbe auf der Viererstufe keine eigene Farbe, sondern eine <strong>Kontrolle</strong> in dieser Farbe und Schlemminteresse. Der Partner antwortet, indem er seinerseits seine billigste Kontrolle zeigt, oder er schließt in der Trumpffarbe ab. Im heute üblichen Stil zeigt ein Cuebid eine Erst- oder Zweitrundenkontrolle (Ass, König, Chicane oder Single), und Sie zeigen die billigste zuerst – <strong>wer eine Farbe überspringt, verneint darin eine Kontrolle</strong>.</p>
<div class="auction" data-calls="1H P 2NT P 3NT P 4C P 4H P P P" data-dealer="N"></div>
<p>Nach Jacoby 2SA zeigt das 3SA von Nord eine mittlere Hand (15–17) ohne Kürze, das übliche Wiedergebot nach Jacoby. Süd reizt 4♣: eine Treffkontrolle und Schlemminteresse. Nord hat keine Karokontrolle, also zeigt Nord nicht die Pikkontrolle, sondern schließt mit 4♥ ab und überspringt dabei 4♦: Das verneint eine Karokontrolle. Auch Süd hat keine Karokontrolle und passt. Beide Hände haben ihre Aufgabe erfüllt, und die Partnerschaft bleibt sicher im Vollspiel.</p>
<p>Hätte Nord den ♦K statt des ♠K gehalten, hätte Nord über 4♣ ein Cuebid von 4♦ abgegeben. Dann wäre jede Farbe kontrolliert, Süd könnte Richtung Schlemm weitergehen, und am Ende könnte Blackwood gefahrlos die Asse überprüfen.</p>
<p>Die Bots reizen so, sobald in einer vollspielforcierenden Reizung eine Oberfarbe vereinbart ist, nach einer Jacoby-2SA-Hebung oder einem Splinter. Sie nutzen ein Kontrollgebot auch als Schlemmversuch in einer natürlichen Reizung: Hat der Partner gerade eine Oberfarbe gereizt, die sie bis zum Vollspiel heben können, und ist ein Schlemm wahrscheinlich, falls der Partner etwas mehr hat als gezeigt, dann vereinbart eine neue Farbe auf der Viererstufe (eine, die ihre Seite noch nicht gereizt hat) die Oberfarbe des Partners und zeigt eine Kontrolle. Ihre Cuebids zeigen Erst- oder Zweitrundenkontrollen, die billigste zuerst, unterhalb des Vollspiels in der vereinbarten Oberfarbe.</p>

<h3>Die Werkzeuge kombinieren</h3>
<ol>
<li>Vereinbaren Sie die Trumpffarbe in einer forcierenden Reizung.</li>
<li>Stellen Sie mit Cuebids sicher, dass jede Nebenfarbe kontrolliert ist.</li>
<li>Sind alle Farben abgedeckt, prüfen Sie mit Blackwood (die Bots spielen Roman Key Card Blackwood), dass Ihnen nicht zwei Asse fehlen oder ein Ass und der Trumpfkönig.</li>
<li>Reizen Sie den Schlemm oder schließen Sie ab.</li>
</ol>
<div class="tip">Bevor Sie 4SA reizen, fragen Sie sich: „Weiß ich, was ich reizen soll, wenn der Partner die richtige Zahl an Assen zeigt?“ Wenn nicht, geben Sie stattdessen ein Cuebid ab.</div>
<div class="warn">Vergewissern Sie sich, dass Ihre Partnerschaft Cuebids vereinbart hat, bevor Sie es versuchen. Ein Cuebid, das der Partner als natürliche Farbe versteht, kann in einem sehr merkwürdigen Kontrakt enden.</div>
`,
    keyPoints: [
      'Ein Schlemm braucht Kontrolle in jeder Nebenfarbe: Ass oder Chicane (erste Runde), König oder Single (zweite Runde).',
      'Blackwood zählt die Asse, kann aber nicht sagen, welche es sind oder ob eine Nebenfarbe zwei schnelle Verlierer hat.',
      'Verwenden Sie Blackwood nicht mit einer Chicane, mit zwei kleinen Karten in einer ungereizten Farbe oder wenn die Antwort Sie zu hoch tragen könnte.',
      'Cuebids zeigen Kontrollen, die billigste zuerst; wer eine Farbe überspringt, verneint darin eine Kontrolle.',
      'Prüfen Sie zuerst mit Cuebids jede Farbe und dann mit Blackwood die Asse.',
    ],
    quiz: [
      {
        q: 'Welche Haltungen geben im Farbkontrakt eine Zweitrundenkontrolle?',
        options: ['Ass oder Chicane', 'König oder Single', 'Dame oder Double', 'Zwei beliebige Figuren'],
        answer: 1,
        explain: 'Mit dem König oder einem Single können die Gegner in der Farbe höchstens einen schnellen Stich machen. Ass oder Chicane sind Erstrundenkontrollen.',
      },
      {
        q: 'Warum führt Blackwood im Spiel oben in einen schlechten Schlemm?',
        options: ['Weil zwei Asse fehlen', 'Weil keine Hand Karo kontrolliert, was Blackwood nicht aufdecken kann', 'Weil Coeur schlecht sitzt', 'Weil Nord zu wenige Punkte hat'],
        answer: 1,
        explain: 'Es fehlt nur ein Ass, aber es ist das ♦A, und der ♦K fehlt ebenfalls. Die Gegner ziehen sofort zwei Karostiche ab.',
      },
      {
        q: 'Coeur ist in einer forcierenden Reizung vereinbart. Der Partner gibt ein Cuebid von 4♣ ab, und Sie reizen 4♥ und überspringen 4♦. Was haben Sie dem Partner mitgeteilt?',
        options: ['Ich habe eine Karokontrolle', 'Ich habe keine Karokontrolle', 'Ich habe das ♠A', 'Ich möchte in Karo spielen'],
        answer: 1,
        explain: 'Cuebids werden von unten nach oben abgegeben. Wenn Sie 4♦ überspringen, verneinen Sie eine Karokontrolle, und der Partner weiß, dass er stehen bleiben muss, wenn er Karo nicht selbst kontrolliert.',
      },
      {
        q: 'Sie haben eine Chicane in Treff und wollen einen Schlemm in Pik ausloten. Warum ist Blackwood eine schlechte Wahl?',
        options: ['Weil Chicanen als Asse zählen', 'Weil das ♣A des Partners wertlos wäre, Blackwood es aber mitzählen würde', 'Weil 4SA quantitativ wäre', 'Weil Sie 37 Punkte brauchen'],
        answer: 1,
        explain: 'Blackwood sagt Ihnen, wie viele Asse der Partner hat, nicht welche. Das Ass gegenüber Ihrer Chicane trägt nichts bei.',
      },
      {
        q: 'In welcher Reihenfolge setzen Sie die Werkzeuge für einen Farbschlemm sinnvoll ein?',
        options: ['Erst Blackwood, dann Cuebids', 'Trumpf vereinbaren, Kontrollen per Cuebid zeigen, dann Blackwood', 'Mit 33 Punkten direkt den Schlemm reizen', 'Gerber, dann Blackwood'],
        answer: 1,
        explain: 'Cuebids zeigen, ob jede Farbe abgedeckt ist; Blackwood stellt dann sicher, dass der Partnerschaft nicht zwei Asse fehlen.',
      },
    ],
  },

  {
    id: 'squeezes-and-endplays',
    title: 'Squeeze und Endspiel: eine Einführung',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Zwei fortgeschrittene Techniken, die aus dem Nichts einen Stich schaffen, indem sie einen Gegenspieler zwingen, einen Schutz abzuwerfen oder in Ihre Stärke auszuspielen.',
    body: `
<h3>Wenn Schnitte und Verteilungen nicht reichen</h3>
<p>Manche Stiche lassen sich weder mit Gewalt noch mit einem Schnitt gewinnen. Man gewinnt sie, weil ein Gegenspieler <em>gezwungen</em> ist, sie herzugeben – entweder weil er eine Karte abwerfen muss, die er braucht (ein <strong>Squeeze</strong>), oder weil er ausspielen muss, wenn jedes Ausspiel einen Stich kostet (ein <strong>Endspiel</strong>). Beides geschieht meist gegen Ende des Spiels, und beides verlangt sorgfältiges Zählen.</p>

<h3>Der einfache Squeeze</h3>
<p>Ein Squeeze funktioniert, wenn ein einziger Gegenspieler zwei Farben allein schützt. Wenn Sie Ihren letzten Gewinner in einer dritten Farbe spielen, muss dieser Gegenspieler einen der Schutzwerte abwerfen, und die aufgegebene Farbe bringt Ihnen einen Extrastich.</p>
<div class="deal" data-n="S:- H:AJ D:- C:3" data-w="S:- H:KQ D:Q C:-" data-e="S:- H:- D:98 C:7" data-s="S:A H:2 D:J C:-" data-caption="Sans Atout. Süd ist am Ausspiel und braucht alle drei Stiche."></div>
<p>West schützt Coeur (K Q gegen A J des Dummys) und Karo (die Dame gegen Ihren Buben). Süd spielt das ♠A aus, die <strong>Squeezekarte</strong>, und West muss vor dem Dummy abwerfen:</p>
<ul>
<li>Wirft West die ♦Q ab, ist Ihr ♦J ein Gewinner.</li>
<li>Wirft West ein Coeur ab, wirft der Dummy die ♣3 ab; Sie spielen die ♥2 zum Ass, die verbliebene Figur von West fällt, und der ♥J des Dummys macht den letzten Stich.</li>
</ul>
<p>Ohne den Squeeze hätten Sie nur zwei Stiche gemacht.</p>
<h4>Was ein Squeeze braucht</h4>
<ul>
<li><strong>Drohkarten:</strong> Karten, die zu Gewinnern werden, wenn der Gegenspieler den Schutz aufgibt (hier der ♥J des Dummys und Ihr ♦J).</li>
<li><strong>Einen Gegenspieler, der in beiden Farben gebunden ist.</strong> Kann sein Partner eine der Farben schützen, gibt es keinen Squeeze.</li>
<li><strong>Übergänge</strong>, um die Drohkarten nach dem Abwurf zu erreichen (hier das ♥A, mit einem Coeur in Ihrer Hand, um hinzukommen).</li>
<li><strong>Die richtige Stichzahl:</strong> Wenn die Squeezekarte gespielt wird, müssen Sie alle restlichen Stiche bis auf einen gewinnen können. Die unvermeidlichen Verlierer <em>früh</em> abzugeben, damit das zutrifft, nennt man <strong>Verliererzahl korrigieren</strong>. Ein typisches Zeichen: Sie sehen, dass ein Squeeze möglich ist, haben aber zwei Verlierer – ducken Sie früh einen Stich, damit nur noch einer übrig bleibt.</li>
</ul>
<div class="tip">Sie müssen den Squeeze nicht immer im Voraus sehen. Wenn Sie eine lange Farbe bis zum Ende abspielen und dabei Ihre Drohkarten behalten, haben die Gegenspieler viele Gelegenheiten, falsch abzuwerfen – und manchmal können sie es schlicht nicht vermeiden.</div>

<h3>Das Endspiel</h3>
<p>Beim Endspiel (Einwurf) bringen Sie einen Gegenspieler in dem Moment ans Spiel, in dem jede Karte, die er ausspielt, Ihnen einen Stich gibt: Er muss in Ihre Gabel spielen oder Ihnen einen Schnapper mit Abwurf geben.</p>
<div class="deal" data-n="S:- H:3 D:- C:AQ" data-w="S:- H:- D:J109 C:-" data-e="S:- H:A D:- C:K8" data-s="S:- H:6 D:- C:42" data-caption="Sans Atout. Süd ist am Ausspiel; Ost hat den ♣K."></div>
<p>Spielen Sie Treff und schneiden mit der Dame, gewinnt Ost mit dem König und zieht das ♥A ab: Sie machen einen Stich. Spielen Sie stattdessen die ♥6. Ost gewinnt mit dem Ass und hat nur noch Treff, muss also vom König weg in A Q des Dummys spielen, und Sie machen zwei Stiche.</p>
<h4>Elimination und Endspiel im Farbkontrakt</h4>
<p>Im Trumpfkontrakt heißt dieselbe Idee Eliminationsspiel. Ziehen Sie Trumpf, behalten Sie aber in jeder Hand mindestens einen. <strong>Eliminieren</strong> Sie die Nebenfarben, in denen der Gegenspieler sicher abspielen könnte, indem Sie sie abziehen oder ausschnappen. Werfen Sie den Gegenspieler dann mit der verbliebenen Farbe ein. Er muss nun entweder in Ihre Gabel spielen oder eine Farbe, in der Sie in beiden Händen Chicane haben – dann schnappen Sie in einer Hand und werfen in der anderen einen Verlierer ab.</p>
<p>Eliminationsspiele machen aus einem 50%-Schnitt oft eine sichere Sache: Mit A J x gegenüber K 10 x, wenn die Dame fehlt, müssen Sie nie raten, wenn ein Gegenspieler die Farbe für Sie anspielen muss.</p>
<div class="warn">Ein Endspiel scheitert, wenn der Gegenspieler noch eine sichere Karte zum Ausspielen hat. Prüfen Sie vor dem Einwurf, dass jede Farbe, mit der er abspielen könnte, aus seiner Hand oder aus Ihren beiden Händen eliminiert ist.</div>
`,
    keyPoints: [
      'Ein Squeeze zwingt einen Gegenspieler, der zwei Farben schützt, einen der Schutzwerte abzuwerfen.',
      'Ein Squeeze braucht Drohkarten, einen gebundenen Gegenspieler, Übergänge und die korrigierte Verliererzahl (alle restlichen Stiche bis auf einen).',
      'Ein Endspiel bringt einen Gegenspieler ans Spiel, wenn jedes Ausspiel seiner Seite einen Stich kostet.',
      'Elimination und Endspiel: Trumpf ziehen (in beiden Händen welche behalten), die Nebenfarben eliminieren, dann den Gegenspieler einwerfen.',
      'Wenn Sie eine lange Farbe abspielen und dabei Ihre Drohkarten behalten, geben Sie den Gegenspielern Gelegenheit zum Fehler.',
    ],
    quiz: [
      {
        q: 'Was ist die entscheidende Voraussetzung für einen einfachen Squeeze?',
        options: ['Beide Gegenspieler haben in einer Farbe Chicane', 'Ein Gegenspieler allein schützt zwei Farben', 'Sie halten alle Asse', 'Trumpf sitzt 3-2'],
        answer: 1,
        explain: 'Muss ein Gegenspieler Schutzwerte in zwei Farben behalten, kann er nicht beide halten, wenn er abwerfen muss. Kann sein Partner eine der Farben schützen, gibt es keinen Squeeze.',
      },
      {
        q: 'Was bedeutet „Verliererzahl korrigieren“?',
        options: ['Die Punkte der Gegner zählen', 'Die unvermeidlichen Verlierer früh abgeben, damit Sie beim Spielen der Squeezekarte alle restlichen Stiche bis auf einen gewinnen können', 'Den letzten Trumpf ziehen', 'Die eigenen Gewinner zweimal zählen'],
        answer: 1,
        explain: 'Für einen Squeeze müssen dem Gegenspieler die überflüssigen Karten ausgehen. Haben Sie noch zwei Verlierer, hat er eine überflüssige Karte zum Abwerfen; ein früh geduckter Stich nimmt sie ihm.',
      },
      {
        q: 'Was passiert in der Squeeze-Endposition oben, wenn West die ♦Q abwirft?',
        options: ['Der ♦J von Süd wird ein Gewinner', 'Der ♥J des Dummys wird ein Gewinner', 'Ost gewinnt einen Karostich', 'Nichts ändert sich'],
        answer: 0,
        explain: 'West war der einzige Schutz gegen den ♦J. Ist die Dame weg, ist Ihr Bube das höchste verbliebene Karo.',
      },
      {
        q: 'Warum muss Ost Ihnen in der Endspiel-Position oben einen Stich geben?',
        options: ['Ost muss Coeur bedienen', 'Nach dem Stich mit dem ♥A hat Ost nur noch Treff und muss vom König in A Q spielen', 'Ost wird gesqueezt', 'Ost muss schnappen'],
        answer: 1,
        explain: 'Mit dem ♥A eingeworfen, hat Ost kein sicheres Abspiel. Mit jedem Treff, das Ost spielt, gewinnt die Dame des Dummys, und das Ass holt danach den König.',
      },
      {
        q: 'Was müssen Sie bei Elimination und Endspiel im Farbkontrakt behalten, bevor Sie einen Gegenspieler einwerfen?',
        options: ['Einen Trumpf in jeder Ihrer beiden Hände', 'Alle Ihre Asse', 'Einen Übergang zum Partner des Gegenspielers', 'Einen verlierenden Trumpf'],
        answer: 0,
        explain: 'Mit Trümpfen in beiden Händen gibt Ihnen ein Gegenspieler, der eine Farbe spielt, in der Sie Chicane haben, einen Schnapper mit Abwurf. Damit bleibt ihm nur das Ausspiel in Ihre Gabel.',
      },
    ],
  },
];
