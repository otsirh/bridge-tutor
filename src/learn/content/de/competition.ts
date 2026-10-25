// Lektionen zum Wettbewerb gegen die gegnerische 1SA-Eröffnung und gegen
// Sperren sowie zur Antwort, wenn die Gegner unsere Eröffnung kontrieren.
// Markup-Regeln: siehe src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_COMPETITION: Lesson[] = [
  {
    id: 'competing-over-1nt',
    title: 'Reizen gegen gegnerisches 1SA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wann Sie gegen die starke 1SA-Eröffnung der Gegner kontrieren oder gegenreizen, wann Sie still bleiben und wie der Partner antwortet.',
    body: `
<h3>Eine starke, genaue Eröffnung</h3>
<p>Eröffnet ein Gegner 1SA, zeigt er 15–17 FP und eine ausgeglichene Hand. Für die drei anderen Spieler bleiben höchstens 25 FP, und der Partner des Eröffners weiß fast genau, was seine Seite hält. Ihre Seite hat selten ein Vollspiel, also reizen Sie aus einem von zwei Gründen: mit einer starken Hand, um die Gegner zur Strafe zu kontrieren; mit einer langen Farbe, um um den Teilkontrakt zu kämpfen. Ein Gebot auf der Zweierstufe nimmt den Gegnern außerdem Stayman und Transfers.</p>

<h3>Was die Bots spielen</h3>
<table>
<thead><tr><th>Gebot über 1SA</th><th>Zeigt</th></tr></thead>
<tbody>
<tr><td>Kontra</td><td>15+ FP, beliebige Verteilung: zur Strafe. Der Partner passt</td></tr>
<tr><td>2♣ / 2♦</td><td>Natürlich: 8–15 FP und eine Sechser- oder längere Farbe</td></tr>
<tr><td>2♥ / 2♠</td><td>Natürlich: 8–15 FP und eine Sechserlänge oder eine gute Fünferlänge (zwei der drei höchsten Figuren oder drei der fünf höchsten)</td></tr>
<tr><td>Passe</td><td>Alles andere</td></tr>
</tbody>
</table>
<p>Die gereizte Farbe muss Ihre längste sein. Sprünge und 2SA werden nicht verwendet.</p>
<p>Turnierspieler benutzen hier oft eine Konvention, mit der sie auch Zweifärber zeigen können: Landy und Cappelletti zeigen mit 2♣ bzw. 2♦ beide Oberfarben, und bei DONT zeigt das Kontra jede Einfärberhand. Es lohnt sich, sie zu lernen, sobald Sie einen festen Partner haben. Die Bots spielen die natürliche Methode oben, und der Tutor beurteilt Ihre Gebote danach.</p>

<h3>Beispiele</h3>
<p>West hat 1SA eröffnet, und Sie sind Nord, in der direkten Position.</p>
<div class="hand" data-cards="S:KQJ974 H:83 D:A52 C:84" data-label="1SA – ?: 2♠"></div>
<p>10 FP und sechs starke Pik: kämpfen Sie mit. Der Partner weiß, was Sie halten, und kann mit Unterstützung heben.</p>
<div class="hand" data-cards="S:KQ1095 H:A83 D:J52 C:84" data-label="1SA – ?: 2♠"></div>
<p>Nur fünf Pik, aber K-Q-10-9 ist eine gute Farbe, und zwar eine Oberfarbe: ein Gebot auf der Zweierstufe wert.</p>
<div class="hand" data-cards="S:A83 H:K4 D:KQJ852 C:84" data-label="1SA – ?: 2♦"></div>
<p>13 FP und sechs Karo. Eine Unterfarbe braucht sechs Karten.</p>

<h3>Das Strafkontra</h3>
<p>Ein Kontra auf 1SA zeigt 15+ FP, so viel wie der Eröffner. Ihre Seite hat mindestens die Hälfte der Punkte, der Eröffner muss oft mit einem schwachen Dummy spielen, und in der direkten Position spielen Sie mit Ihrer guten Hand aus. Der Partner passt, was er auch hält: In diesem System ist das Kontra ein Strafkontra, und der Partner lässt es stehen.</p>
<div class="hand" data-cards="S:AQ5 H:KJ4 D:KQ102 C:Q84" data-label="1SA – ?: Kontra"></div>
<div class="hand" data-cards="S:AKJ1074 H:K3 D:A52 C:84" data-label="1SA – ?: Kontra"></div>
<p>Die erste Hand ist das klassische Strafkontra: 17 FP und nichts zu reizen. Die zweite kontriert ebenfalls: Mit 15+ FP kontrieren die Bots bei jeder Verteilung, statt 2♠ zu reizen. Die Pik machen auch in der Verteidigung Stiche, denn Sie spielen sie aus.</p>

<h3>Wann Sie still bleiben</h3>
<ul>
<li><strong>Eine ausgeglichene Hand mit weniger als 15 FP.</strong> Auch 13 oder 14 reichen nicht für ein Kontra, und zu reizen gibt es nichts.</li>
<li><strong>Eine Fünfer-Unterfarbe oder eine schwache Fünfer-Oberfarbe.</strong> Auf der Zweierstufe können die Gegner Sie kontrieren, und eine Unterfarbe braucht sechs Karten.</li>
<li><strong>Beide Oberfarben, aber keine lange Farbe.</strong> Für solche Hände gibt es Konventionen wie Landy oder Cappelletti; mit natürlichen Methoden passen Sie.</li>
<li><strong>Weniger als 8 FP</strong>, selbst mit einer langen Farbe.</li>
</ul>
<div class="hand" data-cards="S:A83 H:K4 D:KQ852 C:J84" data-label="1SA – ?: Passe"></div>
<div class="hand" data-cards="S:Q8652 H:A83 D:K52 C:K4" data-label="1SA – ?: Passe"></div>
<p>Die erste Hand hat 13 FP, aber nur eine Fünfer-Unterfarbe. Die zweite hat fünf Pik, aber Q-8-6-5-2 ist keine Farbe, die man auf der Zweierstufe reizt, wenn der Partner vielleicht nichts hat.</p>
<div class="tip">Passe ist oft das beste Gebot. Ein 1SA-Eröffner mit schwachem Dummy fällt öfter, als man denkt, und solange Sie passen, kann Sie niemand kontrieren.</div>

<h3>In der Wiederbelebungsposition</h3>
<div class="auction" data-calls="1NT P P" data-dealer="W"></div>
<p>Folgen auf 1SA zwei Passe, ist der Partner des Eröffners schwach, also hat Ihr Partner einige Werte. Borgen Sie einen König: Die Bots kontrieren mit <strong>12+ FP</strong> (weiterhin zur Strafe) und reizen eine Farbe mit <strong>5–12 FP</strong>, mit denselben Anforderungen an die Farbe wie in der direkten Position.</p>
<div class="hand" data-cards="S:KQ1095 H:83 D:952 C:J84" data-label="1SA – Passe – Passe – ?: 2♠"></div>
<div class="hand" data-cards="S:KQ105 H:A94 D:K52 C:Q84" data-label="1SA – Passe – Passe – ?: Kontra"></div>
<p>Mit nur 6 FP würde die erste Hand in der direkten Position passen, aber in der Wiederbelebungsposition genügt eine gute Fünfer-Oberfarbe. Die zweite, 14 FP und ausgeglichen, kontriert: Der Partner passt, und Sie verteidigen 1SA kontriert.</p>

<h3>Die Antwort des Partners</h3>
<p>Nach dem Kontra des Partners passen Sie: Es ist ein Strafkontra. Nach einer Gegenreizung in einer Oberfarbe auf der Zweierstufe antworten die Bots so:</p>
<div class="auction" data-calls="1NT 2H P" data-dealer="W"></div>
<table>
<thead><tr><th>Gebot des Partners</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>3♥ (Hebung)</td><td>Dreierunterstützung und 6–9 Punkte (Unterstützungspunkte zählen)</td></tr>
<tr><td>3♣</td><td>Künstlich: Dreierunterstützung und 10–12 Punkte. Der Gegenreizer reizt mit 13+ Gesamtpunkten das Vollspiel, sonst 3♥</td></tr>
<tr><td>4♥</td><td>Unterstützung und 13+ Punkte, oder fünf Trümpfe und ein Single</td></tr>
<tr><td>2♠ (neue Farbe)</td><td>Eine gute Fünfer- oder längere Farbe und 8+ FP; nicht forcierend</td></tr>
<tr><td>2SA / 3SA</td><td>Kein Fit: 12–14 FP, einladend / 15+ FP</td></tr>
<tr><td>Passe</td><td>Alles andere, auch ein Misfit mit einer langen Unterfarbe</td></tr>
</tbody>
</table>
<p>Die Gegner haben keine eigene Farbe für ein Cuebid, deshalb verwenden die Bots 3♣, um die gute Hebung zu zeigen. Nach einer Gegenreizung in einer Unterfarbe auf der Zweierstufe braucht eine Hebung Viererunterstützung.</p>
<div class="deal" data-n="S:4 H:AKJ1052 D:Q93 C:J84" data-s="S:Q852 H:Q73 D:K84 C:962" data-caption="West eröffnet 1SA; Nord reizt 2♥ gegen."></div>
<div class="auction" data-calls="1NT 2H P 3H P P P" data-dealer="W"></div>
<p>Nord hat 11 FP und sechs gute Coeur: ein natürliches 2♥. Süd hebt mit drei Trümpfen und 7 Punkten auf 3♥. Mit neun gemeinsamen Trümpfen ist die Dreierstufe sicher genug (Gesetz der totalen Stiche), und die Hebung macht es Ost-West, die mehr als die Hälfte der Punkte haben, schwerer, ihren eigenen Teilkontrakt zu finden. Nord hat nichts extra und passt.</p>
<div class="warn">Reizen Sie über 1SA keine schwache Farbe, nur weil Sie 12 oder 13 Punkte haben: Ohne gute Farbe sind diese Punkte in der Verteidigung mehr wert.</div>
`,
    keyPoints: [
      'Über gegnerisches 1SA zeigt Kontra 15+ FP bei beliebiger Verteilung und ist ein Strafkontra: Der Partner passt.',
      'Farbgebote auf der Zweierstufe sind natürlich: 8–15 FP und eine Sechserlänge oder eine gute Fünfer-Oberfarbe.',
      'Bleiben Sie still mit ausgeglichenen Händen unter 15 FP, mit Fünfer-Unterfarben und schwachen Fünfer-Oberfarben.',
      'In der Wiederbelebungsposition borgen Sie einen König: Kontra mit 12+, eine Farbe mit 5–12.',
      'Antwort auf eine Oberfarbe: Hebung auf drei mit 6–9 und Unterstützung, 3♣ zeigt 10–12, Vollspiel mit 13+.',
    ],
    quiz: [
      {
        q: 'Ihr rechter Gegner eröffnet 1SA (15–17). Sie halten ♠AQ5 ♥KJ4 ♦KQ102 ♣Q84 (17 FP). Was reizen Sie?',
        options: ['Passe', 'Kontra', '2♦', '2SA'],
        answer: 1,
        explain: 'Mit 15+ FP haben Sie so viel wie der Eröffner: Kontrieren Sie zur Strafe. Der Partner passt, und 1SA kontriert sollte fallen.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 1SA. Sie halten ♠A83 ♥K4 ♦KQ852 ♣J84 (13 FP). Was reizen Sie?',
        options: ['2♦', 'Kontra', 'Passe', '2SA'],
        answer: 2,
        explain: 'Eine Unterfarbe auf der Zweierstufe braucht sechs Karten, und ein Kontra braucht 15+ FP. Passen Sie und verteidigen Sie.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 1SA. Sie halten ♠KQJ974 ♥83 ♦A52 ♣84 (10 FP). Was reizen Sie?',
        options: ['Passe', 'Kontra', '2♠', '3♠'],
        answer: 2,
        explain: 'Sechs starke Pik und 8–15 FP: ein natürliches 2♠. Ein Kontra würde 15+ FP zeigen, und Sprünge werden über 1SA nicht verwendet.',
      },
      {
        q: 'Ihr linker Gegner eröffnet 1SA, der Partner reizt 2♥ gegen, und Ihr rechter Gegner passt. Sie halten ♠Q852 ♥Q73 ♦K84 ♣962 (7 FP). Was reizen Sie?',
        options: ['Passe', '3♥', '3♣', '4♥'],
        answer: 1,
        explain: 'Dreierunterstützung und 6–9 Punkte: Heben Sie auf 3♥. Mit neun Trümpfen ist die Dreierstufe sicher genug. 3♣ würde 10–12 Punkte zeigen, und 4♥ braucht 13+.',
      },
      {
        q: 'Links von Ihnen 1SA, dann Passe, Passe. Sie halten ♠KQ1095 ♥83 ♦952 ♣J84 (6 FP). Was reizen Sie?',
        options: ['Passe', 'Kontra', '2♠', '3♠'],
        answer: 2,
        explain: 'In der Wiederbelebungsposition reizen die Bots eine gute Fünfer-Oberfarbe mit 5–12 FP: Der Partner muss einige Werte haben. Ein Kontra würde 12+ FP zeigen und ist ein Strafkontra.',
      },
    ],
  },

  {
    id: 'competing-over-preempts',
    title: 'Reizen gegen Sperren',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Wie Sie kontrieren, gegenreizen oder Sans Atout reizen, wenn die Gegner mit einer schwachen Zwei oder einer Sperre auf der Dreierstufe eröffnen, und wie der Partner antwortet.',
    body: `
<h3>Der Plan des Sperrenden</h3>
<p>Eine schwache Zwei oder eine Sperre auf der Dreierstufe nimmt Ihnen den Raum, den Sie brauchen, um Ihren besten Kontrakt zu finden. Der Sperrende hat die Stufe nach der 2-3-4-Regel gewählt: Er nimmt kontriert zwei Faller in Kauf, wenn er in Gefahr ist und Sie nicht, drei bei gleicher Gefahrenlage und vier, wenn Sie in Gefahr sind und er nicht, denn das kostet etwa so viel wie das Vollspiel, das Sie erfüllen würden. Von Ihrer Seite des Tisches aus betrachtet sagt Ihnen die Regel zweierlei:</p>
<ul>
<li><strong>Rechnen Sie nicht mit einer hohen Strafe.</strong> Selbst kontriert verlieren die Gegner etwa so viel, wie Ihr Vollspiel wert ist. Haben Sie ein Vollspiel, reizen Sie es.</li>
<li><strong>Die Gefahrenlage verrät, wie schwach die Sperre sein kann.</strong> Nicht in Gefahr gegen in Gefahr kann eine Sperre sehr schwach sein, und Ihr Partner hat eher Werte; in Gefahr gegen nicht in Gefahr verspricht sie mehr.</li>
</ul>
<p>So oder so müssen Sie sofort und auf hoher Stufe handeln, oft so, dass der Partner auf der Dreierstufe antworten muss. Sie brauchen also echte Werte. Die Anforderungen der Bots unten sind bei jeder Gefahrenlage gleich.</p>

<h3>Gegen eine schwache Zwei</h3>
<p>Ihr rechter Gegner hat 2♦, 2♥ oder 2♠ eröffnet:</p>
<table>
<thead><tr><th>Gebot</th><th>Zeigt</th></tr></thead>
<tbody>
<tr><td>Kontra</td><td>Informationskontra: 13+ FP, höchstens zwei Karten in der gegnerischen Farbe und mindestens drei in jeder anderen Farbe (ein Double in einer ungereizten Unterfarbe ist mit vier Karten in jeder ungereizten Oberfarbe erlaubt); oder jede Hand mit 17+ FP</td></tr>
<tr><td>2SA</td><td>15–18 FP, ausgeglichen, mit Stopper in der gegnerischen Farbe</td></tr>
<tr><td>Eine Farbe</td><td>13–17 FP und eine gute Fünfer- oder längere Farbe (zwei der drei höchsten Figuren oder drei der fünf höchsten), Ihre längste ungereizte Farbe</td></tr>
<tr><td>Passe</td><td>Alles andere</td></tr>
</tbody>
</table>
<p>Mit einer guten Sechserlänge reizen Sie gegen, statt zu kontrieren. Vergleichen Sie die 13 FP mit den 8, die für eine Gegenreizung auf der Einerstufe genügen: Der Partner muss Ihr Kontra vielleicht ohne jeden Wert auf der Dreierstufe beantworten, und Ihre Gegenreizung liegt schon auf der Zweier- oder Dreierstufe. Schwache Sprung-Gegenreizungen und das Michaels-Cuebid werden gegen Sperren nicht verwendet.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:KQ83 C:K1062" data-label="2♥ – ?: Kontra"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="2♥ – ?: 2♠"></div>
<div class="hand" data-cards="S:AQ4 H:KJ5 D:KQ83 C:J106" data-label="2♥ – ?: 2SA"></div>
<div class="hand" data-cards="S:KJ74 H:5 D:KJ83 C:Q1062" data-label="2♥ – ?: Passe"></div>
<p>Die erste Hand ist das ideale Kontra: 13 FP, ein Coeur-Single und Unterstützung für jede andere Farbe. Die zweite hat eine gute Sechserlänge: Reizen Sie sie. Die dritte ist ausgeglichen, mit 16 FP und gestopptem Coeur. Die vierte hat die perfekte Verteilung, aber nur 10 FP: zu wenig, um den Partner auf die Dreierstufe zu treiben. Mit Länge in der gegnerischen Farbe, etwa ♠K4 ♥AQ1093 ♦K83 ♣J106, passen Sie ebenfalls: Ein Kontra würde den Partner zum Reizen auffordern, und 2SA braucht 15 FP.</p>
<div class="tip">In der Wiederbelebungsposition (2♥ – Passe – Passe – ?) braucht eine Gegenreizung nur 10 FP, ein Kontra aber weiterhin 13.</div>

<h3>Gegen eine Sperre auf der Dreierstufe</h3>
<table>
<thead><tr><th>Gebot</th><th>Zeigt</th></tr></thead>
<tbody>
<tr><td>Kontra</td><td>Informationskontra: 14+ FP und dieselbe Verteilung wie gegen eine schwache Zwei, oder jede Hand mit 17+ FP</td></tr>
<tr><td>3SA</td><td>16–21 FP mit Stopper in der gegnerischen Farbe, zum Spielen. Es kann eine lange, laufende Unterfarbe statt einer ausgeglichenen Hand sein</td></tr>
<tr><td>Eine Farbe auf der Dreierstufe</td><td>13–17 FP und eine gute Fünfer- oder längere Farbe</td></tr>
<tr><td>Passe</td><td>Alles andere</td></tr>
</tbody>
</table>
<p>Mit jeder Stufe höher braucht das Kontra etwas mehr. Gegen eine Sperre auf der Viererstufe braucht es 15+ FP, und der Partner lässt es meist stehen, außer er hat eine lange Farbe und Verteilung.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:AQ83 C:K1062" data-label="3♥ – ?: Kontra"></div>
<div class="hand" data-cards="S:AQ4 H:K5 D:AKQJ83 C:106" data-label="3♥ – ?: 3SA"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="3♥ – ?: 3♠"></div>
<p>Die erste Hand hat 14 FP und die richtige Verteilung: Kontra. Mit dem ♦K statt dem ♦A (13 FP) würden die Bots passen. Die zweite reizt 3SA: Die Karos laufen, und der ♥K sollte Coeur stoppen, denn das Ausspiel kommt von Ost, und West, der die langen Coeurs hat, spielt vor Ihnen. Die dritte reizt ihre gute Sechserlänge.</p>

<h3>Die Antwort auf das Kontra des Partners</h3>
<div class="auction" data-calls="2H X P" data-dealer="W"></div>
<p>Das Kontra des Partners fordert Sie zum Reizen auf, und Sie müssen reizen, so schwach Sie auch sind. Zeigen Sie Ihre Stärke über die Stufe:</p>
<table>
<thead><tr><th>Ihre Hand</th><th>Gebot</th></tr></thead>
<tbody>
<tr><td>0–8 FP</td><td>Ihre beste Farbe auf der niedrigsten Stufe, eine Vierer-Oberfarbe zuerst</td></tr>
<tr><td>9–11 FP</td><td>Ein Sprung in Ihrer besten Farbe, wenn der Sprung noch auf der Dreierstufe liegt (hier 3♠); sonst 2SA mit 11 FP und Coeur-Stopper oder Ihre beste Farbe auf der niedrigsten Stufe</td></tr>
<tr><td>10–11 FP und fünf oder mehr Pik</td><td>4♠</td></tr>
<tr><td>12+ FP</td><td>3♥, das Cuebid: forcierend bis zum Vollspiel. Mit 13–16, einer ausgeglichenen oder halb ausgeglichenen Hand und Coeur-Stopper stattdessen 3SA</td></tr>
<tr><td>Fünf starke Coeur (drei Figuren) und 8+ FP</td><td>Passe: Das Kontra wird zum Strafkontra</td></tr>
</tbody>
</table>
<p>Gegen eine Sperre auf der Dreierstufe ist kein Platz für einen Sprung: Reizen Sie Ihre beste Farbe auf der niedrigsten Stufe, das Vollspiel mit 10–11 FP und fünf Karten in einer ungereizten Oberfarbe, 3SA mit 13–16, einer ausgeglichenen oder halb ausgeglichenen Hand und Stopper, oder das Cuebid mit 12+. Der Kontrierende passt eine Antwort auf der niedrigsten Stufe mit Minimum und hebt nur mit Extrawerten.</p>
<div class="deal" data-n="S:AJ74 H:5 D:KQ83 C:K1062" data-s="S:K963 H:874 D:A52 C:Q84" data-caption="West eröffnet 2♥; Nord kontriert."></div>
<div class="auction" data-calls="2H X P 3S P 4S P P P" data-dealer="W"></div>
<p>Süd hat 9 FP und vier Pik: genug für einen Sprung auf 3♠, denn eine Antwort von 2♠ könnte auch mit gar nichts kommen. Nord nimmt mit 13 FP, vier Trümpfen und einem Coeur-Single (16 Unterstützungspunkte für Pik) die Einladung an. Auf eine Antwort von 2♠ hätte Nord nur mit 3♠ eingeladen.</p>

<h3>Die Antwort auf eine SA-Gegenreizung</h3>
<p>Nach 2SA des Partners gegen eine schwache Zwei (15–18): Reizen Sie 3SA mit 10+ FP; mit einer Sechser-Oberfarbe das Vollspiel mit 9+ FP oder die Farbe auf der Dreierstufe mit 6–8 als Einladung; mit einer schwächeren Hand und einer Fünferlänge reizen Sie diese auf der Dreierstufe zum Spielen; sonst passen Sie. Stayman und Transfers werden hier nicht verwendet. Nach 3SA des Partners gegen eine Sperre auf der Dreierstufe (16–21) passen die Bots mit den meisten Händen. Sie reizen vier in einer Sechser-Oberfarbe mit 9+ FP oder eine schwache Fünferlänge auf der Viererstufe, und mit 12+ FP suchen sie den Schlemm: 4SA ist eine quantitative Einladung mit 12–14 FP, und 6SA wird mit 15+ gereizt.</p>
<div class="warn">Kontrieren Sie eine Sperre nicht zur Strafe, nur weil Sie ein paar hohe Karten in der gegnerischen Farbe haben: Das Kontra der Bots ist ein Informationskontra. Mit Länge in der gegnerischen Farbe passen Sie und warten auf das Kontra des Partners; mit langen, starken Trümpfen können Sie dieses Kontra dann zur Strafe stehen lassen.</div>
`,
    keyPoints: [
      'Gegen eine schwache Zwei brauchen ein Kontra (13+, kurz in der gegnerischen Farbe) und eine Gegenreizung (13–17, gute Farbe) echte Werte; 2SA zeigt 15–18 ausgeglichen mit Stopper.',
      'Gegen eine Sperre auf der Dreierstufe braucht das Kontra 14+; 3SA zeigt 16–21 mit Stopper, zum Spielen.',
      'Mit einer guten Sechserlänge reizen Sie gegen; mit 17+ FP und beliebiger Verteilung kontrieren Sie zuerst.',
      'Der Partner muss reizen: niedrigste Stufe mit 0–8, Sprung mit 9–11, wenn er noch auf der Dreierstufe liegt, Cuebid mit 12+; Passe nur mit starken Trümpfen.',
      'Der Sperrende rechnet kontriert mit zwei bis vier Fallern: Haben Sie ein Vollspiel, reizen Sie es, statt auf eine hohe Strafe zu hoffen.',
    ],
    quiz: [
      {
        q: 'Ihr rechter Gegner eröffnet 2♥. Sie halten ♠AJ74 ♥5 ♦KQ83 ♣K1062 (13 FP). Was reizen Sie?',
        options: ['Passe', 'Kontra', '2♠', '2SA'],
        answer: 1,
        explain: 'Kurz in Coeur, Unterstützung für jede andere Farbe und 13 FP: ein Informationskontra. 2♠ würde eine gute Fünferlänge versprechen.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 2♠. Sie halten ♠KJ5 ♥AQ4 ♦KQ83 ♣J106 (16 FP). Was reizen Sie?',
        options: ['Kontra', '2SA', '3SA', 'Passe'],
        answer: 1,
        explain: 'Ausgeglichen, 15–18, mit Pik-Stopper: 2SA. Ein Kontra würde den Partner auffordern, eine Farbe zu reizen, und Sie sind in Pik nicht kurz.',
      },
      {
        q: 'Ihr rechter Gegner eröffnet 3♥. Sie halten ♠AQ4 ♥K5 ♦AKQJ83 ♣106 (19 FP). Was reizen Sie?',
        options: ['Kontra', '4♦', '3SA', 'Passe'],
        answer: 2,
        explain: '3SA gegen eine Sperre auf der Dreierstufe zeigt 16–21 mit Stopper und ist zum Spielen. Ihre Karos laufen, und der ♥K sitzt gut hinter dem Sperrenden.',
      },
      {
        q: 'Ihr linker Gegner eröffnet 2♥, der Partner kontriert, und Ihr rechter Gegner passt. Sie halten ♠K963 ♥874 ♦A52 ♣Q84 (9 FP). Was reizen Sie?',
        options: ['2♠', '3♠', '4♠', '2SA'],
        answer: 1,
        explain: '9–11 FP mit vier Pik: Springen Sie auf 3♠, um zum Vollspiel einzuladen. 2♠ könnte auch mit gar nichts kommen, und 2SA würde einen Coeur-Stopper versprechen.',
      },
      {
        q: 'Ihr linker Gegner eröffnet 2♥, der Partner kontriert, und Ihr rechter Gegner passt. Sie halten ♠96 ♥KQJ104 ♦Q105 ♣J84 (9 FP). Was reizen Sie?',
        options: ['2SA', '3♣', 'Passe', '3♦'],
        answer: 2,
        explain: 'Fünf starke Coeur und 8+ FP: Passen Sie und machen Sie aus dem Informationskontra des Partners ein Strafkontra. Ihre Coeurs machen Stiche, denn sie sitzen hinter dem Eröffner.',
      },
    ],
  },

  {
    id: 'when-they-double-us',
    title: 'Wenn die Gegner uns kontrieren',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Was der Antwortende nach einem Informationskontra auf die Eröffnung des Partners reizt (Rekontra, Jordan 2SA, Hebungen, neue Farben, 1SA) und wie er flüchtet, wenn 1SA des Partners kontriert wird.',
    body: `
<h3>Die Eröffnung des Partners wird kontriert</h3>
<div class="auction" data-calls="1H X" data-dealer="N"></div>
<p>Der Partner eröffnet 1♥, und Ihr rechter Gegner gibt ein Informationskontra: Eröffnungsstärke, kurz in Coeur, Unterstützung für die anderen Farben. Das Kontra gibt Ihnen neue Möglichkeiten, Ihre Hand zu beschreiben, und Sie brauchen sie: Der Partner des Kontrierenden wird gleich reizen, vielleicht mit einem Sprung, und der Eröffner muss sofort wissen, ob Ihre Seite einen Fit hat und wer die Mehrheit der Stärke hält.</p>

<h3>Was die Bots spielen</h3>
<p>Nach 1♥ oder 1♠ – Kontra wählen die Bots das erste dieser Gebote, das passt:</p>
<table>
<thead><tr><th>Gebot</th><th>Zeigt</th></tr></thead>
<tbody>
<tr><td>2SA (Jordan)</td><td>Künstlich: vier oder mehr Trümpfe und 10+ Unterstützungspunkte, eine Limit-Hebung oder mehr</td></tr>
<tr><td>Rekontra</td><td>10+ FP, meist ohne Fit (höchstens drei Trümpfe)</td></tr>
<tr><td>Sprunghebung (1♥ – X – 3♥)</td><td>Sperrend: vier oder mehr Trümpfe und weniger als 10 FP</td></tr>
<tr><td>Einfache Hebung (1♥ – X – 2♥)</td><td>Drei Trümpfe und 6–10 Unterstützungspunkte (mit vier springen Sie oder reizen 2SA)</td></tr>
<tr><td>1♠ über 1♥</td><td>Vier oder mehr Pik und 6+ FP; forcierend</td></tr>
<tr><td>1SA</td><td>6–9 FP und keines der obigen Gebote</td></tr>
<tr><td>Passe</td><td>Eine schwache Hand</td></tr>
</tbody>
</table>
<p>Beachten Sie, was fehlt: eine neue Farbe auf der Zweierstufe. Nach dem Kontra reizen die Bots nie eine. Mit 10+ FP geben sie Rekontra, mit weniger reizen sie 1SA oder passen.</p>
<div class="hand" data-cards="S:K74 H:Q962 D:A1053 C:J4" data-label="1♥ – X – ?: 2SA"></div>
<div class="hand" data-cards="S:AQ74 H:62 D:KJ53 C:984" data-label="1♥ – X – ?: Rekontra"></div>
<div class="hand" data-cards="S:K74 H:Q9862 D:5 C:J1043" data-label="1♥ – X – ?: 3♥"></div>
<div class="hand" data-cards="S:K74 H:Q96 D:J853 C:Q43" data-label="1♥ – X – ?: 2♥"></div>
<div class="hand" data-cards="S:KQ1074 H:62 D:J53 C:984" data-label="1♥ – X – ?: 1♠"></div>
<div class="hand" data-cards="S:Q4 H:62 D:KJ94 C:Q9843" data-label="1♥ – X – ?: 1SA"></div>
<p>Die erste Hand hat vier Trümpfe und 11 Unterstützungspunkte: Jordan 2SA. Die zweite hat 10 FP und keinen Fit: Rekontra. Die dritte springt mit fünf Trümpfen und 6 FP auf 3♥ und nimmt den Gegnern Reizraum; sie haben bestimmt einen eigenen Fit. Die vierte hebt einfach mit drei Trümpfen. Die fünfte zeigt ihre Pik auf der Einerstufe. Die sechste hat 8 FP und sonst nichts zu sagen: 1SA.</p>
<div class="tip">Die sperrende Sprunghebung wirkt am besten sofort, bevor der Partner des Kontrierenden billig reizen kann. Mit vier Trümpfen und einer schwachen Hand nehmen Sie den Gegnern den Raum.</div>

<h3>Nach einer Unterfarberöffnung</h3>
<p>Nach 1♣ oder 1♦ – Kontra gibt es kein Jordan 2SA: Mit 10+ FP geben Sie Rekontra. Eine Eröffnung von 1♣ oder 1♦ kann nur drei Karten lang sein, deshalb brauchen die Hebungen mehr Trümpfe: vier für die einfache Hebung, fünf für die sperrende Sprunghebung. Mit einer Vierer-Oberfarbe und 6+ FP reizen Sie sie auf der Einerstufe, mit beiden zuerst Coeur.</p>
<div class="hand" data-cards="S:KJ74 H:Q962 D:53 C:J43" data-label="1♦ – X – ?: 1♥"></div>
<div class="hand" data-cards="S:J74 H:62 D:KJ853 C:943" data-label="1♦ – X – ?: 3♦"></div>

<h3>Nach dem Rekontra</h3>
<p>Das Rekontra sagt, dass das Spiel Ihrer Seite gehört. Der Eröffner passt normalerweise und überlässt das Problem den Gegnern: Sie müssen einen Platz zum Spielen finden, und der Partner des Kontrierenden, der vielleicht nichts hat, reizt nur mit einer Fünferlänge. Der Eröffner reizt sofort nur mit Minimum und einer Sechserlänge, also mit schwacher Verteidigung. Landen die Gegner in einer Farbe, kann der Rekontrierende sie mit vier guten Karten in dieser Farbe zur Strafe kontrieren.</p>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-e="S:KQ6 H:5 D:AQ94 C:KJ1062" data-s="S:J1093 H:K6 D:853 C:AQ97" data-w="S:8742 H:109732 D:J6 C:53" data-caption="Nord eröffnet 1♥, und Ost kontriert."></div>
<div class="auction" data-calls="1H X XX P P 2C X P P P" data-dealer="N"></div>
<p>Süd hat 10 FP und nur zwei Coeur: Rekontra. West hat nichts und keine Fünferlänge, also passt er; auch Nord passt, und Ost muss auf der Zweierstufe eine Farbe wählen. Süds ♣A-Q-9-7 sitzen hinter Osts Treff: Kontra. Nord-Süd haben 24 FP, und West kann nicht helfen: Bei bestem Spiel fällt 2♣ kontriert dreimal, das sind 500 Punkte, selbst wenn Ost-West nicht in Gefahr sind.</p>

<h3>Jordan 2SA in Aktion</h3>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-s="S:K74 H:K962 D:A953 C:J3" data-caption="Nord eröffnet 1♥, und Ost kontriert."></div>
<div class="auction" data-calls="1H X 2NT P 4H P P P" data-dealer="N"></div>
<p>Süd hat vier Trümpfe und 12 Unterstützungspunkte: Jordan 2SA, eine Limit-Hebung oder mehr. Nord hat mit 14 FP und einer Fünferlänge mehr als ein Minimum und reizt das Vollspiel. Mit Minimum würde Nord nur 3♥ reizen.</p>

<h3>Wenn unser 1SA kontriert wird</h3>
<div class="auction" data-calls="1NT X" data-dealer="N"></div>
<p>Ein Kontra auf das 1SA des Partners ist ein Strafkontra. Die Möglichkeiten des Antwortenden:</p>
<table>
<thead><tr><th>Gebot</th><th>Zeigt</th></tr></thead>
<tbody>
<tr><td>Rekontra</td><td>8+ FP: Mit den 15–17 des Partners hat Ihre Seite die Mehrheit der Stärke, und die Gegner sind es, die in Schwierigkeiten stecken</td></tr>
<tr><td>2♣ / 2♦ / 2♥ / 2♠</td><td>Zum Spielen: 0–7 FP und fünf oder mehr Karten in der Farbe, Ihrer längsten</td></tr>
<tr><td>Passe</td><td>Alles andere</td></tr>
</tbody>
</table>
<p>Nach dem Kontra gelten Stayman und Transfers nicht mehr: 2♣ zeigt Treff und 2♦ zeigt Karo. Mit einer schwachen Hand kann 1SA kontriert viel kosten, während zwei in Ihrer langen Farbe viel besser spielt.</p>
<div class="hand" data-cards="S:Q74 H:62 D:J9853 C:932" data-label="1SA – X – ?: 2♦"></div>
<div class="hand" data-cards="S:Q74 H:62 D:KJ85 C:Q932" data-label="1SA – X – ?: Rekontra"></div>
<div class="hand" data-cards="S:Q74 H:J62 D:J85 C:9432" data-label="1SA – X – ?: Passe"></div>
<p>Die erste Hand flüchtet in ihre fünf Karo. Die zweite hat 8 FP: Rekontra. Die dritte hat keine Fünferlänge, also passt sie und überlässt es dem Partner, damit zurechtzukommen.</p>
<div class="warn">Reizen Sie nach 1♥ – Kontra mit einer schwachen Hand keine neue Farbe auf der Zweierstufe: Das gehört nicht zum System. Mit 10+ FP geben Sie zuerst Rekontra; mit weniger reizen Sie 1SA oder passen.</div>
`,
    keyPoints: [
      'Nach einem Informationskontra auf 1♥ oder 1♠ zeigt 2SA (Jordan) vier Trümpfe und 10+ Unterstützungspunkte; Rekontra zeigt 10+ FP, meist ohne Fit.',
      'Die Sprunghebung ist sperrend (vier Trümpfe für eine Oberfarbe, fünf für eine Unterfarbe, unter 10 FP); die einfache Hebung zeigt 6–10 mit Unterstützung.',
      'Eine Oberfarbe auf der Einerstufe zeigt vier oder mehr Karten und 6+ FP und ist forcierend; 1SA zeigt 6–9 ohne anderes passendes Gebot.',
      'Nach dem Rekontra passt der Eröffner meist; der Rekontrierende kann die Flucht der Gegner mit vier guten Trümpfen kontrieren.',
      'Wird 1SA des Partners kontriert, geben Sie mit 8+ Rekontra; mit einer schwachen Hand und einer Fünferlänge reizen Sie diese auf der Zweierstufe (natürlich, ohne Stayman und Transfers).',
    ],
    quiz: [
      {
        q: 'Der Partner eröffnet 1♥, und Ihr rechter Gegner kontriert. Sie halten ♠K74 ♥Q962 ♦A1053 ♣J4 (10 FP). Was reizen Sie?',
        options: ['Rekontra', '3♥', '2SA', '2♥'],
        answer: 2,
        explain: 'Vier Trümpfe und 11 Unterstützungspunkte: Jordan 2SA zeigt sofort eine Limit-Hebung oder mehr. Ein Rekontra würde meist vier Trümpfe verneinen, und 3♥ wäre sperrend.',
      },
      {
        q: 'Der Partner eröffnet 1♥, und Ihr rechter Gegner kontriert. Sie halten ♠K74 ♥Q9862 ♦5 ♣J1043 (6 FP). Was reizen Sie?',
        options: ['2♥', '3♥', '4♥', 'Passe'],
        answer: 1,
        explain: 'Fünf Trümpfe, ein Single und weniger als 10 FP: die sperrende Sprunghebung. Sie nimmt dem Partner des Kontrierenden den Raum, den er braucht.',
      },
      {
        q: 'Der Partner eröffnet 1♥, und Ihr rechter Gegner kontriert. Sie halten ♠AQ74 ♥62 ♦KJ53 ♣984 (10 FP). Was reizen Sie?',
        options: ['1♠', 'Rekontra', '2♦', '1SA'],
        answer: 1,
        explain: '10+ FP ohne Fit: Rekontra. Es sagt dem Partner, dass das Spiel Ihrer Seite gehört, und Sie sind bereit, die Gegner zu kontrieren, wenn sie flüchten.',
      },
      {
        q: 'Der Partner eröffnet 1♦, und Ihr rechter Gegner kontriert. Sie halten ♠KJ74 ♥Q962 ♦53 ♣J43 (7 FP). Was reizen Sie?',
        options: ['1♥', '1♠', '1SA', 'Passe'],
        answer: 0,
        explain: 'Mit vier Karten in jeder Oberfarbe und 6+ FP reizen Sie zuerst Coeur, auf der Einerstufe. 1♥ ist forcierend, also können Sie die Pik später noch zeigen, wenn nötig.',
      },
      {
        q: 'Der Partner eröffnet 1SA, und Ihr rechter Gegner kontriert. Sie halten ♠Q74 ♥62 ♦J9853 ♣932 (3 FP). Was reizen Sie?',
        options: ['Passe', '2♣', '2♦', 'Rekontra'],
        answer: 2,
        explain: 'Eine schwache Hand mit fünf Karo: Flüchten Sie nach 2♦, das nach dem Kontra natürlich ist und kein Transfer. 2♣ würde Treff zeigen und ein Rekontra 8+ FP.',
      },
    ],
  },
];
