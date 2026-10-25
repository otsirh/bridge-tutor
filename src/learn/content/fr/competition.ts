// Leçons sur la compétition contre le 1SA et les barrages adverses, et sur la
// conduite à tenir quand l’adversaire contre notre ouverture.
// Règles de balisage : voir src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_COMPETITION: Lesson[] = [
  {
    id: 'competing-over-1nt',
    title: 'Intervenir sur leur 1SA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quand contrer ou intervenir sur le 1SA fort des adversaires, quand rester en dehors, et comment le partenaire répond.',
    body: `
<h3>Une ouverture forte et précise</h3>
<p>Quand un adversaire ouvre de 1SA, il montre 15-17 H et une main régulière. Il reste au plus 25 H pour les trois autres joueurs, et le partenaire de l’ouvreur sait presque exactement ce que détient son camp. Votre camp a rarement une manche : vous parlez donc pour l’une de deux raisons. Avec une main forte, pour les contrer et les punir ; avec une longue couleur, pour disputer la partielle. Une enchère au palier de 2 leur enlève en plus le Stayman et les Texas.</p>

<h3>Ce que jouent les bots</h3>
<table>
<thead><tr><th>Enchère sur 1SA</th><th>Montre</th></tr></thead>
<tbody>
<tr><td>Contre</td><td>15+ H, n’importe quelle distribution : punitif. Le partenaire passe</td></tr>
<tr><td>2♣ / 2♦</td><td>Naturel : 8-15 H et une couleur de six cartes ou plus</td></tr>
<tr><td>2♥ / 2♠</td><td>Naturel : 8-15 H et une couleur de six cartes, ou une bonne couleur de cinq (deux des trois gros honneurs ou trois des cinq honneurs)</td></tr>
<tr><td>Passe</td><td>Tout le reste</td></tr>
</tbody>
</table>
<p>La couleur nommée doit être votre plus longue. Les sauts et 2SA ne sont pas utilisés.</p>
<p>Les joueurs de tournoi utilisent souvent ici une convention qui leur permet aussi de montrer des bicolores : Landy et Cappelletti utilisent 2♣ ou 2♦ pour montrer les deux majeures, et DONT utilise le contre pour n’importe quel unicolore. Elles valent la peine d’être apprises quand vous aurez un partenaire régulier. Les bots utilisent la méthode naturelle ci-dessus, et le tuteur juge vos enchères d’après elle.</p>

<h3>Exemples</h3>
<p>Ouest a ouvert de 1SA et vous êtes Nord, en position directe.</p>
<div class="hand" data-cards="S:KQJ974 H:83 D:A52 C:84" data-label="1SA – ? : dites 2♠"></div>
<p>10 H et six piques solides : disputez la partielle. Votre partenaire sait ce que vous avez et peut soutenir avec du soutien.</p>
<div class="hand" data-cards="S:KQ1095 H:A83 D:J52 C:84" data-label="1SA – ? : dites 2♠"></div>
<p>Seulement cinq piques, mais K-Q-10-9 est une bonne couleur, et une majeure : elle vaut une enchère au palier de 2.</p>
<div class="hand" data-cards="S:A83 H:K4 D:KQJ852 C:84" data-label="1SA – ? : dites 2♦"></div>
<p>13 H et six carreaux. Une mineure demande six cartes.</p>

<h3>Le contre punitif</h3>
<p>Le contre de 1SA montre 15+ H, autant que l’ouvreur. Votre camp a au moins la moitié des points, l’ouvreur devra souvent jouer avec un mort faible, et en position directe c’est vous qui entamez, avec votre bonne main. Le partenaire passe, quoi qu’il ait : dans ce système le contre est punitif, et le partenaire le laisse.</p>
<div class="hand" data-cards="S:AQ5 H:KJ4 D:KQ102 C:Q84" data-label="1SA – ? : contrez"></div>
<div class="hand" data-cards="S:AKJ1074 H:K3 D:A52 C:84" data-label="1SA – ? : contrez"></div>
<p>La première main est le contre punitif classique : 17 H et rien à nommer. La seconde contre aussi : avec 15+ H les bots contrent quelle que soit leur distribution, plutôt que de dire 2♠. Les piques feront aussi des levées en défense, puisque c’est vous qui les entamerez.</p>

<h3>Quand rester en dehors</h3>
<ul>
<li><strong>Une main régulière de moins de 15 H.</strong> Même 13 ou 14 ne suffisent pas pour contrer, et il n’y a rien à nommer.</li>
<li><strong>Une mineure cinquième, ou une majeure cinquième pauvre.</strong> Au palier de 2 les adversaires peuvent vous contrer, et une mineure demande six cartes.</li>
<li><strong>Les deux majeures mais aucune longue couleur.</strong> Des conventions comme Landy ou Cappelletti existent pour ces mains ; avec des méthodes naturelles, passez.</li>
<li><strong>Moins de 8 H</strong>, même avec une longue couleur.</li>
</ul>
<div class="hand" data-cards="S:A83 H:K4 D:KQ852 C:J84" data-label="1SA – ? : passez"></div>
<div class="hand" data-cards="S:Q8652 H:A83 D:K52 C:K4" data-label="1SA – ? : passez"></div>
<p>La première main a 13 H mais seulement une mineure cinquième. La seconde a cinq piques, mais Q-8-6-5-2 n’est pas une couleur à nommer au palier de 2 face à un partenaire qui n’a peut-être rien.</p>
<div class="tip">Passer est souvent la meilleure enchère. Un ouvreur de 1SA face à un mort faible chute plus souvent qu’on ne le croit, et tant que vous passez, personne ne peut vous contrer.</div>

<h3>En position de réveil</h3>
<div class="auction" data-calls="1NT P P" data-dealer="W"></div>
<p>Quand 1SA est suivi de deux passes, le partenaire de l’ouvreur est faible, donc votre partenaire a quelques valeurs. Empruntez un Roi : les bots contrent avec <strong>12+ H</strong> (toujours punitif) et nomment une couleur avec <strong>5-12 H</strong>, avec les mêmes exigences de couleur qu’en position directe.</p>
<div class="hand" data-cards="S:KQ1095 H:83 D:952 C:J84" data-label="1SA – passe – passe – ? : dites 2♠"></div>
<div class="hand" data-cards="S:KQ105 H:A94 D:K52 C:Q84" data-label="1SA – passe – passe – ? : contrez"></div>
<p>Avec seulement 6 H, la première main passerait en position directe, mais en réveil une bonne majeure cinquième suffit. La seconde, 14 H et régulière, contre : le partenaire passe et vous défendez 1SA contré.</p>

<h3>La réponse du partenaire</h3>
<p>Après le contre du partenaire, passez : il est punitif. Après une intervention au palier de 2 dans une majeure, les bots répondent ainsi :</p>
<div class="auction" data-calls="1NT 2H P" data-dealer="W"></div>
<table>
<thead><tr><th>Enchère du partenaire de l’intervenant</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>3♥ (soutien)</td><td>Soutien de trois cartes et 6-12 points (les points de soutien comptent). L’intervenant dit la manche seulement avec un maximum, environ 15 H</td></tr>
<tr><td>4♥</td><td>Soutien et 13+ points, ou cinq atouts et un singleton</td></tr>
<tr><td>2♠ (couleur nouvelle)</td><td>Une bonne couleur de cinq cartes ou plus et 8+ H ; non forcing</td></tr>
<tr><td>2SA / 3SA</td><td>Pas de fit : 12-14 H, proposition / 15+ H</td></tr>
<tr><td>Passe</td><td>Tout le reste, y compris un misfit avec une longue mineure</td></tr>
</tbody>
</table>
<p>Les adversaires n’ont pas de couleur à eux pour un cue-bid, donc il n’y a pas de soutien par cue-bid : le soutien à 3♥ couvre à la fois les mains compétitives et les mains invitationnelles. Après une intervention au palier de 2 dans une mineure, le soutien demande quatre cartes.</p>
<div class="deal" data-n="S:4 H:AKJ1052 D:Q93 C:J84" data-s="S:Q852 H:Q73 D:K84 C:962" data-caption="Ouest ouvre de 1SA ; Nord intervient à 2♥."></div>
<div class="auction" data-calls="1NT 2H P 3H P P P" data-dealer="W"></div>
<p>Nord a 11 H et six bons cœurs : un 2♥ naturel. Sud, avec trois atouts et 7 points, soutient à 3♥. Avec neuf atouts à vous deux, le palier de 3 est assez sûr (loi des levées totales), et le soutien complique la tâche d’Est-Ouest, qui ont plus de la moitié des points, pour trouver leur propre partielle. Nord n’a rien de plus et passe.</p>
<div class="warn">N’intervenez pas sur 1SA avec une couleur pauvre simplement parce que vous avez 12 ou 13 points : sans bonne couleur, ces points valent davantage en défense.</div>
`,
    keyPoints: [
      'Sur leur 1SA, le contre montre 15+ H avec n’importe quelle distribution et est punitif : le partenaire passe.',
      'Les enchères à la couleur au palier de 2 sont naturelles : 8-15 H et une sixième, ou une bonne majeure cinquième.',
      'Restez en dehors avec une main régulière de moins de 15 H, une mineure cinquième ou une majeure cinquième pauvre.',
      'En position de réveil, empruntez un Roi : contre avec 12+, une couleur avec 5-12.',
      'Réponse à une majeure : soutien à 3 avec 6-12 et du soutien, manche avec 13+.',
    ],
    quiz: [
      {
        q: 'Votre adversaire de droite ouvre de 1SA (15-17). Vous avez ♠AQ5 ♥KJ4 ♦KQ102 ♣Q84 (17 H). Que dites-vous ?',
        options: ['Passe', 'Contre', '2♦', '2SA'],
        answer: 1,
        explain: 'Avec 15+ H vous avez autant que l’ouvreur : contrez pour punir. Le partenaire passera, et 1SA contré devrait chuter.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 1SA. Vous avez ♠A83 ♥K4 ♦KQ852 ♣J84 (13 H). Que dites-vous ?',
        options: ['2♦', 'Contre', 'Passe', '2SA'],
        answer: 2,
        explain: 'Une enchère au palier de 2 dans une mineure demande six cartes, et un contre demande 15+ H. Passez et défendez.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 1SA. Vous avez ♠KQJ974 ♥83 ♦A52 ♣84 (10 H). Que dites-vous ?',
        options: ['Passe', 'Contre', '2♠', '3♠'],
        answer: 2,
        explain: 'Six piques solides et 8-15 H : un 2♠ naturel. Un contre montrerait 15+ H, et les sauts ne sont pas utilisés sur 1SA.',
      },
      {
        q: 'Votre adversaire de gauche ouvre de 1SA, votre partenaire intervient à 2♥ et votre adversaire de droite passe. Vous avez ♠Q852 ♥Q73 ♦K84 ♣962 (7 H). Que dites-vous ?',
        options: ['Passe', '3♥', '3♣', '4♥'],
        answer: 1,
        explain: 'Soutien de trois cartes et 6-9 points : soutenez à 3♥. Avec neuf atouts, le palier de 3 est assez sûr. 3♣ montrerait des trèfles, et 4♥ demande 13+.',
      },
      {
        q: '1SA à votre gauche, puis passe, passe. Vous avez ♠KQ1095 ♥83 ♦952 ♣J84 (6 H). Que dites-vous ?',
        options: ['Passe', 'Contre', '2♠', '3♠'],
        answer: 2,
        explain: 'En position de réveil, les bots nomment une bonne majeure cinquième avec 5-12 H : le partenaire a forcément quelques valeurs. Un contre montrerait 12+ H et serait punitif.',
      },
    ],
  },

  {
    id: 'competing-over-preempts',
    title: 'Intervenir sur les barrages',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Comment contrer, intervenir ou dire Sans-Atout quand les adversaires ouvrent d’un deux faible ou d’un barrage au palier de 3, et comment le partenaire répond.',
    body: `
<h3>Le plan du barrageur</h3>
<p>Un deux faible ou un barrage au palier de 3 vous prend l’espace dont vous avez besoin pour trouver votre meilleur contrat. Le barrageur a choisi le palier selon la règle des 2-3-4 : il accepte de chuter de deux levées contré quand il est vulnérable contre non vulnérables, de trois à vulnérabilité égale et de quatre quand il est non vulnérable contre vulnérables, parce que cela coûte à peu près ce que rapporterait votre manche. Vue de votre côté de la table, la règle vous dit deux choses :</p>
<ul>
<li><strong>Ne comptez pas sur une grosse pénalité.</strong> Même contrés, ils perdent à peu près ce que vaut votre manche. Si vous avez la manche, demandez-la.</li>
<li><strong>Leur vulnérabilité vous dit à quel point ils peuvent être faibles.</strong> Non vulnérable contre vulnérables, un barrage peut être très faible, et votre partenaire a plus de chances d’avoir des valeurs ; vulnérable contre non vulnérables, il promet davantage.</li>
</ul>
<p>Dans tous les cas, vous devez agir tout de suite et à un palier élevé, souvent en obligeant le partenaire à répondre au palier de 3. Il vous faut donc de vraies valeurs. Les exigences des bots ci-dessous sont les mêmes à toute vulnérabilité.</p>

<h3>Sur un deux faible</h3>
<p>Votre adversaire de droite a ouvert de 2♦, 2♥ ou 2♠ :</p>
<table>
<thead><tr><th>Enchère</th><th>Montre</th></tr></thead>
<tbody>
<tr><td>Contre</td><td>D’appel : 13+ H, au plus deux cartes dans leur couleur et au moins trois dans chacune des autres (un doubleton dans une mineure non nommée est permis avec quatre cartes dans chaque majeure non nommée) ; ou n’importe quelle main de 17+ H</td></tr>
<tr><td>2SA</td><td>15-18 H, main régulière, avec un arrêt dans leur couleur</td></tr>
<tr><td>Une couleur</td><td>13-17 H et une bonne couleur de cinq cartes ou plus (deux des trois gros honneurs ou trois des cinq honneurs), votre plus longue couleur non nommée</td></tr>
<tr><td>Passe</td><td>Tout le reste</td></tr>
</tbody>
</table>
<p>Avec une bonne sixième, intervenez plutôt que de contrer. Comparez ces 13 H aux 8 qui suffisent pour une intervention au palier de 1 : le partenaire devra peut-être répondre à votre contre au palier de 3 sans rien, et votre intervention est déjà au palier de 2 ou de 3. Les interventions à saut faibles et le cue-bid Michaels ne sont pas utilisés sur un barrage.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:KQ83 C:K1062" data-label="2♥ – ? : contrez"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="2♥ – ? : dites 2♠"></div>
<div class="hand" data-cards="S:AQ4 H:KJ5 D:KQ83 C:J106" data-label="2♥ – ? : dites 2SA"></div>
<div class="hand" data-cards="S:KJ74 H:5 D:KJ83 C:Q1062" data-label="2♥ – ? : passez"></div>
<p>La première main est le contre idéal : 13 H, un singleton cœur et du soutien dans toutes les autres couleurs. La deuxième a une bonne sixième : nommez-la. La troisième est régulière, avec 16 H et les cœurs arrêtés. La quatrième a la distribution parfaite mais seulement 10 H : trop peu pour pousser le partenaire au palier de 3. Avec de la longueur dans leur couleur, comme ♠K4 ♥AQ1093 ♦K83 ♣J106, passez aussi : un contre demanderait au partenaire de parler, et 2SA demande 15 H.</p>
<div class="tip">En position de réveil (2♥ – passe – passe – ?), une intervention ne demande que 10 H, mais un contre en demande toujours 13.</div>

<h3>Sur un barrage au palier de 3</h3>
<table>
<thead><tr><th>Enchère</th><th>Montre</th></tr></thead>
<tbody>
<tr><td>Contre</td><td>D’appel : 14+ H et la même distribution que sur un deux faible, ou n’importe quelle main de 17+ H</td></tr>
<tr><td>3SA</td><td>16-21 H avec un arrêt dans leur couleur, pour le jouer. Ce peut être une longue mineure maîtresse plutôt qu’une main régulière</td></tr>
<tr><td>Une couleur au palier de 3</td><td>13-17 H et une bonne couleur de cinq cartes ou plus</td></tr>
<tr><td>Passe</td><td>Tout le reste</td></tr>
</tbody>
</table>
<p>À chaque palier de plus, le contre demande un peu plus. Sur un barrage au palier de 4, il demande 15+ H, et le partenaire le laisse en général, sauf s’il a une longue couleur et de la distribution.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:AQ83 C:K1062" data-label="3♥ – ? : contrez"></div>
<div class="hand" data-cards="S:AQ4 H:K5 D:AKQJ83 C:106" data-label="3♥ – ? : dites 3SA"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="3♥ – ? : dites 3♠"></div>
<p>La première main a 14 H et la bonne distribution : contrez. Avec le ♦K au lieu du ♦A (13 H), les bots passeraient. La deuxième dit 3SA : les carreaux sont maîtres, et le ♥K devrait arrêter les cœurs, car l’entame vient d’Est et Ouest, qui a les cœurs longs, joue avant vous. La troisième nomme sa bonne sixième.</p>

<h3>Répondre au contre du partenaire</h3>
<div class="auction" data-calls="2H X P" data-dealer="W"></div>
<p>Le contre du partenaire vous demande de parler, et vous devez le faire, même très faible. Montrez votre force par le palier :</p>
<table>
<thead><tr><th>Votre main</th><th>Enchère</th></tr></thead>
<tbody>
<tr><td>0-8 H</td><td>Votre meilleure couleur au palier le plus bas, une majeure quatrième d’abord</td></tr>
<tr><td>9-11 H</td><td>Un saut dans votre meilleure couleur si le saut reste au palier de 3 (ici 3♠). Avec quatre cartes dans une majeure non nommée que vous ne pourriez nommer qu’au palier de 3, la manche dans cette majeure (sur 2♠, 4♥). Sinon 2SA avec 11 H et un arrêt dans leur couleur, ou votre meilleure couleur au palier le plus bas</td></tr>
<tr><td>10-11 H et cinq piques ou plus</td><td>4♠</td></tr>
<tr><td>12+ H</td><td>3♥, le cue-bid : forcing de manche. Avec 13-16, une main régulière ou semi-régulière et un arrêt à cœur, 3SA à la place</td></tr>
<tr><td>Cinq cœurs solides (trois honneurs) et 8+ H</td><td>Passe : le contre devient punitif</td></tr>
</tbody>
</table>
<p>Sur un barrage au palier de 3, il n’y a pas de place pour sauter : avec 9-11 H et quatre cartes ou plus dans une majeure non nommée, dites la manche dans cette majeure ; sinon nommez votre meilleure couleur au palier le plus bas, 3SA avec 13-16, une main régulière ou semi-régulière et un arrêt, ou le cue-bid avec 12+. Le contreur passe une réponse au palier le plus bas avec un minimum, et ne la soutient qu’avec des valeurs en plus.</p>
<div class="deal" data-n="S:AJ74 H:5 D:KQ83 C:K1062" data-s="S:K963 H:874 D:A52 C:Q84" data-caption="Ouest ouvre de 2♥ ; Nord contre."></div>
<div class="auction" data-calls="2H X P 3S P 4S P P P" data-dealer="W"></div>
<p>Sud a 9 H et quatre piques : il vaut un saut à 3♠, car une réponse de 2♠ pourrait être faite avec rien. Nord, avec 13 H, quatre atouts et un singleton cœur (16 points de soutien à pique), accepte la proposition. Sur une réponse de 2♠, Nord se serait contenté de proposer la manche par 3♠.</p>

<h3>Répondre à une intervention à Sans-Atout</h3>
<p>Après le 2SA du partenaire sur un deux faible (15-18) : dites 3SA avec 10+ H ; avec une majeure sixième, la manche avec 9+ H ou trois dans cette couleur avec 6-8 pour proposer ; avec une main plus faible et une cinquième, nommez-la au palier de 3 pour la jouer ; sinon passez. Le Stayman et les Texas ne sont pas utilisés ici. Après le 3SA du partenaire sur un barrage au palier de 3 (16-21), les bots passent avec la plupart des mains : ils disent quatre dans une majeure sixième avec 9+ H, et avec 12+ H ils cherchent le chelem. 4SA est une proposition quantitative avec 12-14 H, et 6SA se dit avec 15+.</p>
<div class="warn">Ne contrez pas un barrage pour punir parce que vous avez quelques gros honneurs dans leur couleur : le contre des bots est d’appel. Avec de la longueur dans leur couleur, passez et attendez le contre du partenaire ; avec des atouts longs et solides, vous pourrez alors laisser ce contre pour punir.</div>
`,
    keyPoints: [
      'Sur un deux faible, le contre (13+, court dans leur couleur) et l’intervention (13-17, bonne couleur) demandent de vraies valeurs ; 2SA montre 15-18 régulier avec un arrêt.',
      'Sur un barrage au palier de 3, le contre demande 14+ ; 3SA montre 16-21 avec un arrêt, pour le jouer.',
      'Avec une bonne sixième, intervenez ; avec 17+ H de n’importe quelle distribution, contrez d’abord.',
      'Le partenaire doit parler : palier le plus bas avec 0-8, un saut avec 9-11 s’il reste au palier de 3 (la manche avec une majeure quatrième qui ne trouve place qu’au palier de 3), le cue-bid avec 12+ ; passe seulement avec des atouts solides.',
      'Le barrageur s’attend à chuter de deux à quatre levées contré : si vous avez la manche, demandez-la plutôt que d’espérer une grosse pénalité.',
    ],
    quiz: [
      {
        q: 'Votre adversaire de droite ouvre de 2♥. Vous avez ♠AJ74 ♥5 ♦KQ83 ♣K1062 (13 H). Que dites-vous ?',
        options: ['Passe', 'Contre', '2♠', '2SA'],
        answer: 1,
        explain: 'Court à cœur, du soutien dans toutes les autres couleurs et 13 H : un contre d’appel. 2♠ promettrait une bonne cinquième.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 2♠. Vous avez ♠KJ5 ♥AQ4 ♦KQ83 ♣J106 (16 H). Que dites-vous ?',
        options: ['Contre', '2SA', '3SA', 'Passe'],
        answer: 1,
        explain: 'Régulier, 15-18, avec un arrêt à pique : 2SA. Un contre demanderait au partenaire de nommer une couleur, et vous n’êtes pas court à pique.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 3♥. Vous avez ♠AQ4 ♥K5 ♦AKQJ83 ♣106 (19 H). Que dites-vous ?',
        options: ['Contre', '4♦', '3SA', 'Passe'],
        answer: 2,
        explain: '3SA sur un barrage au palier de 3 montre 16-21 avec un arrêt et est pour le jouer. Vos carreaux sont maîtres, et le ♥K est bien placé derrière le barrageur.',
      },
      {
        q: 'Votre adversaire de gauche ouvre de 2♥, votre partenaire contre et votre adversaire de droite passe. Vous avez ♠K963 ♥874 ♦A52 ♣Q84 (9 H). Que dites-vous ?',
        options: ['2♠', '3♠', '4♠', '2SA'],
        answer: 1,
        explain: '9-11 H avec quatre piques : sautez à 3♠ pour proposer la manche. 2♠ pourrait être dit avec rien, et 2SA promettrait un arrêt à cœur.',
      },
      {
        q: 'Votre adversaire de gauche ouvre de 2♥, votre partenaire contre et votre adversaire de droite passe. Vous avez ♠96 ♥KQJ104 ♦Q105 ♣J84 (9 H). Que dites-vous ?',
        options: ['2SA', '3♣', 'Passe', '3♦'],
        answer: 2,
        explain: 'Cinq cœurs solides et 8+ H : passez, et le contre d’appel du partenaire devient punitif. Vos cœurs, placés derrière l’ouvreur, feront des levées.',
      },
    ],
  },

  {
    id: 'when-they-double-us',
    title: 'Quand ils nous contrent',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Ce que fait le répondant après un contre d’appel de l’ouverture du partenaire (surcontre, 2SA Jordan, soutiens, couleurs nouvelles, 1SA), et comment se sauver quand le 1SA du partenaire est contré.',
    body: `
<h3>L’ouverture du partenaire est contrée</h3>
<div class="auction" data-calls="1H X" data-dealer="N"></div>
<p>Votre partenaire ouvre de 1♥ et votre adversaire de droite fait un contre d’appel : des valeurs d’ouverture, court à cœur, du soutien dans les autres couleurs. Le contre vous donne de nouveaux moyens de décrire votre main, et vous en avez besoin : le partenaire du contreur va parler aussitôt, peut-être en sautant, et l’ouvreur doit savoir tout de suite si votre camp a un fit et qui détient la majorité des points.</p>

<h3>Ce que jouent les bots</h3>
<p>Après 1♥ ou 1♠ – contre, les bots choisissent la première de ces enchères qui convient :</p>
<table>
<thead><tr><th>Enchère</th><th>Montre</th></tr></thead>
<tbody>
<tr><td>2SA (Jordan)</td><td>Artificiel : quatre atouts ou plus et 10+ points de soutien, un soutien limite ou mieux</td></tr>
<tr><td>Surcontre</td><td>10+ H, en général sans fit (au plus trois atouts)</td></tr>
<tr><td>Soutien à saut (1♥ – X – 3♥)</td><td>Barrage : quatre atouts ou plus et moins de 10 H</td></tr>
<tr><td>Soutien simple (1♥ – X – 2♥)</td><td>Trois atouts et 6-10 points de soutien (avec quatre, sautez ou dites 2SA)</td></tr>
<tr><td>1♠ sur 1♥</td><td>Quatre piques ou plus et 6+ H ; forcing</td></tr>
<tr><td>1SA</td><td>6-9 H et aucune des enchères ci-dessus</td></tr>
<tr><td>Passe</td><td>Une main faible</td></tr>
</tbody>
</table>
<p>Remarquez ce qui manque : une couleur nouvelle au palier de 2. Après le contre, les bots n’en nomment jamais. Avec 10+ H ils surcontrent, et avec moins ils disent 1SA ou passent.</p>
<div class="hand" data-cards="S:K74 H:Q962 D:A1053 C:J4" data-label="1♥ – X – ? : 2SA"></div>
<div class="hand" data-cards="S:AQ74 H:62 D:KJ53 C:984" data-label="1♥ – X – ? : surcontre"></div>
<div class="hand" data-cards="S:K74 H:Q9862 D:5 C:J1043" data-label="1♥ – X – ? : 3♥"></div>
<div class="hand" data-cards="S:K74 H:Q96 D:J853 C:Q43" data-label="1♥ – X – ? : 2♥"></div>
<div class="hand" data-cards="S:KQ1074 H:62 D:J53 C:984" data-label="1♥ – X – ? : 1♠"></div>
<div class="hand" data-cards="S:Q4 H:62 D:KJ94 C:Q9843" data-label="1♥ – X – ? : 1SA"></div>
<p>La première main a quatre atouts et 11 points de soutien : 2SA Jordan. La deuxième a 10 H et pas de fit : surcontre. La troisième, avec cinq atouts et 6 H, saute à 3♥ pour prendre l’espace des adversaires ; ils ont sûrement un fit à eux. La quatrième fait un soutien simple avec trois atouts. La cinquième montre ses piques au palier de 1. La sixième a 8 H et rien d’autre à dire : 1SA.</p>
<div class="tip">Le soutien à saut de barrage est le plus efficace tout de suite, avant que le partenaire du contreur puisse parler à bon marché. Avec quatre atouts et une main faible, prenez-leur l’espace.</div>

<h3>Après une ouverture en mineure</h3>
<p>Après 1♣ ou 1♦ – contre, il n’y a pas de 2SA Jordan : avec 10+ H, surcontrez. Une ouverture de 1♣ ou 1♦ peut n’avoir que trois cartes, donc les soutiens demandent plus d’atouts : quatre pour le soutien simple, cinq pour le soutien à saut de barrage. Avec une majeure quatrième et 6+ H, nommez-la au palier de 1, cœur d’abord avec les deux.</p>
<div class="hand" data-cards="S:KJ74 H:Q962 D:53 C:J43" data-label="1♦ – X – ? : 1♥"></div>
<div class="hand" data-cards="S:J74 H:62 D:KJ853 C:943" data-label="1♦ – X – ? : 3♦"></div>

<h3>Après le surcontre</h3>
<p>Le surcontre dit que la donne appartient à votre camp. L’ouvreur passe normalement et laisse le problème aux adversaires : ils doivent trouver où jouer, et le partenaire du contreur, qui n’a peut-être rien, ne parle qu’avec une cinquième. L’ouvreur reparle tout de suite seulement avec un minimum (13 H au plus) et une sixième, qui défend mal. Quand les adversaires aboutissent dans une couleur, le surcontreur dit la manche s’il en a les valeurs, environ 12+ H face à l’ouverture. Avec 10-11 H et quatre cartes dans leur couleur, dont deux des trois plus gros honneurs, le surcontreur les contre plutôt : après un surcontre, un contre de votre camp est punitif.</p>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-e="S:KQ6 H:5 D:AJ94 C:KJ1062" data-s="S:J1093 H:K6 D:Q53 C:AQ97" data-w="S:8742 H:109732 D:86 C:53" data-caption="Nord ouvre de 1♥ et Est contre."></div>
<div class="auction" data-calls="1H X XX P P 2C 3NT P P P" data-dealer="N"></div>
<p>Sud a 12 H et seulement deux cœurs : surcontre. Ouest n’a rien ni cinquième, donc il passe ; Nord passe aussi, et Est doit choisir une couleur au palier de 2. Sud, avec 12 H face à une ouverture et deux arrêts à trèfle, dit 3SA, qui fait neuf levées avec le meilleur jeu.</p>

<h3>Le 2SA Jordan en action</h3>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-s="S:K74 H:K962 D:A953 C:J3" data-caption="Nord ouvre de 1♥ et Est contre."></div>
<div class="auction" data-calls="1H X 2NT P 4H P P P" data-dealer="N"></div>
<p>Sud a quatre atouts et 12 points de soutien : 2SA Jordan, un soutien limite ou mieux. Nord, avec 14 H et une cinquième, a plus qu’un minimum et dit la manche. Avec un minimum, Nord dirait seulement 3♥.</p>

<h3>Quand notre 1SA est contré</h3>
<div class="auction" data-calls="1NT X" data-dealer="N"></div>
<p>Le contre du 1SA du partenaire est punitif. Les possibilités du répondant :</p>
<table>
<thead><tr><th>Enchère</th><th>Montre</th></tr></thead>
<tbody>
<tr><td>Surcontre</td><td>8+ H : avec les 15-17 du partenaire, votre camp a la majorité des points, et ce sont les adversaires qui sont en difficulté</td></tr>
<tr><td>2♣ / 2♦ / 2♥ / 2♠</td><td>Pour jouer : 0-7 H et cinq cartes ou plus dans la couleur, votre plus longue</td></tr>
<tr><td>Passe</td><td>Toute autre main</td></tr>
</tbody>
</table>
<p>Après le contre, le Stayman et les Texas ne s’appliquent plus : 2♣ montre des trèfles et 2♦ des carreaux. Avec une main faible, 1SA contré peut coûter cher, alors que deux dans votre longue couleur se joue bien mieux.</p>
<div class="hand" data-cards="S:Q74 H:62 D:J9853 C:932" data-label="1SA – X – ? : 2♦"></div>
<div class="hand" data-cards="S:Q74 H:62 D:KJ85 C:Q932" data-label="1SA – X – ? : surcontre"></div>
<div class="hand" data-cards="S:Q74 H:J62 D:J85 C:9432" data-label="1SA – X – ? : passe"></div>
<p>La première main se sauve dans ses cinq carreaux. La deuxième a 8 H : surcontre. La troisième n’a pas de cinquième, donc elle passe et laisse le partenaire se débrouiller. Après le surcontre, l’ouvreur passe : les adversaires doivent trouver où jouer.</p>
<div class="warn">Après 1♥ – contre, ne nommez pas une couleur nouvelle au palier de 2 avec une main faible : cela ne fait pas partie du système. Avec 10+ H surcontrez d’abord ; avec moins, dites 1SA ou passez.</div>
`,
    keyPoints: [
      'Après un contre d’appel de 1♥ ou 1♠, 2SA (Jordan) montre quatre atouts et 10+ points de soutien ; le surcontre montre 10+ H, en général sans fit.',
      'Le soutien à saut est un barrage (quatre atouts pour une majeure, cinq pour une mineure, moins de 10 H) ; le soutien simple montre 6-10 avec du soutien.',
      'Une majeure au palier de 1 montre quatre cartes ou plus et 6+ H et est forcing ; 1SA montre 6-9 sans autre enchère adaptée.',
      'Après le surcontre, l’ouvreur passe en général et laisse les adversaires chercher un contrat ; le surcontreur dit ensuite la manche avec des valeurs de manche, ou les contre avec une forte tenue dans leur couleur.',
      'Quand le 1SA du partenaire est contré, surcontrez avec 8+ ; avec une main faible et une cinquième, nommez-la au palier de 2 (naturel, sans Stayman ni Texas).',
    ],
    quiz: [
      {
        q: 'Votre partenaire ouvre de 1♥ et votre adversaire de droite contre. Vous avez ♠K74 ♥Q962 ♦A1053 ♣J4 (10 H). Que dites-vous ?',
        options: ['Surcontre', '3♥', '2SA', '2♥'],
        answer: 2,
        explain: 'Quatre atouts et 11 points de soutien : le 2SA Jordan montre tout de suite un soutien limite ou mieux. Un surcontre nierait en général quatre atouts, et 3♥ serait un barrage.',
      },
      {
        q: 'Votre partenaire ouvre de 1♥ et votre adversaire de droite contre. Vous avez ♠K74 ♥Q9862 ♦5 ♣J1043 (6 H). Que dites-vous ?',
        options: ['2♥', '3♥', '4♥', 'Passe'],
        answer: 1,
        explain: 'Cinq atouts, un singleton et moins de 10 H : le soutien à saut de barrage. Il prend au partenaire du contreur l’espace dont il a besoin.',
      },
      {
        q: 'Votre partenaire ouvre de 1♥ et votre adversaire de droite contre. Vous avez ♠AQ74 ♥62 ♦KJ53 ♣984 (10 H). Que dites-vous ?',
        options: ['1♠', 'Surcontre', '2♦', '1SA'],
        answer: 1,
        explain: '10+ H sans fit : surcontre. Il dit au partenaire que la donne appartient à votre camp ; l’ouvreur passera en général et laissera les adversaires trouver un contrat.',
      },
      {
        q: 'Votre partenaire ouvre de 1♦ et votre adversaire de droite contre. Vous avez ♠KJ74 ♥Q962 ♦53 ♣J43 (7 H). Que dites-vous ?',
        options: ['1♥', '1♠', '1SA', 'Passe'],
        answer: 0,
        explain: 'Avec quatre cartes dans chaque majeure et 6+ H, nommez d’abord les cœurs, au palier de 1. 1♥ est forcing, vous pourrez donc montrer les piques plus tard si nécessaire.',
      },
      {
        q: 'Votre partenaire ouvre de 1SA et votre adversaire de droite contre. Vous avez ♠Q74 ♥62 ♦J9853 ♣932 (3 H). Que dites-vous ?',
        options: ['Passe', '2♣', '2♦', 'Surcontre'],
        answer: 2,
        explain: 'Une main faible avec cinq carreaux : sauvez-vous à 2♦, qui est naturel après le contre, pas un Texas. 2♣ montrerait des trèfles, et un surcontre 8+ H.',
      },
    ],
  },
];
