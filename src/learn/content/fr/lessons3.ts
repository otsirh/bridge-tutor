// Leçons, partie 3.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_3: Lesson[] = [
  {
    id: 'michaels-and-unusual-2nt',
    title: 'Le Michaels et le 2SA Unusual',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Comment montrer un bicolore en une seule enchère après une ouverture adverse, et comment le partenaire choisit la couleur.',
    body: `
<h3>Deux couleurs en une enchère</h3>
<p>Avec deux couleurs cinquièmes, vous voulez les montrer vite : les enchères seront peut-être au palier de 4 avant que vous ayez une deuxième occasion de parler. Deux interventions conventionnelles le permettent, chacune promettant au moins <strong>cinq cartes dans chacune de deux couleurs</strong>.</p>
<table>
<thead><tr><th>Ils ouvrent</th><th>Vous dites</th><th>Montre</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>2♣ (Michaels)</td><td>♥ et ♠</td></tr>
<tr><td>1♦</td><td>2♦ (Michaels)</td><td>♥ et ♠</td></tr>
<tr><td>1♥</td><td>2♥ (Michaels)</td><td>♠ et une mineure</td></tr>
<tr><td>1♠</td><td>2♠ (Michaels)</td><td>♥ et une mineure</td></tr>
<tr><td>1♣</td><td>2SA (Unusual)</td><td>♦ et ♥</td></tr>
<tr><td>1♦</td><td>2SA (Unusual)</td><td>♣ et ♥</td></tr>
<tr><td>1♥ ou 1♠</td><td>2SA (Unusual)</td><td>♣ et ♦</td></tr>
</tbody>
</table>
<p>Le Michaels est un cue-bid dans la couleur d’ouverture. Sur une mineure, il montre les deux majeures ; sur une majeure, il montre l’autre majeure et une mineure non précisée. Le 2SA Unusual montre les <strong>deux couleurs non nommées les moins chères</strong>.</p>
<div class="hand" data-cards="S:KQ1074 H:AJ963 D:5 C:84" data-label="1♦ à votre droite : dites 2♦"></div>
<div class="hand" data-cards="S:4 H:72 D:KQ1074 C:AQ1063" data-label="1♠ à votre droite : dites 2SA"></div>

<h3>Quelle force ?</h3>
<p>La zone est large. Le plus souvent, la main est modeste (environ 8-12 H) avec de bonnes couleurs, et le but est de disputer le contrat, de trouver un sacrifice ou d’indiquer l’entame. Avec une main forte (environ 16+), vous commencez aussi par l’enchère bicolore, puis vous reparlez pour montrer votre force supplémentaire. Avec une main intermédiaire, beaucoup de joueurs préfèrent intervenir dans la couleur la plus chère et nommer l’autre plus tard.</p>
<p>La qualité des couleurs compte, surtout vulnérable : les honneurs doivent se trouver dans vos longues, pas dans vos courtes.</p>

<h3>Répondre au bicolore</h3>
<div class="auction" data-calls="1D 2D P" data-dealer="W"></div>
<div class="hand" data-cards="S:J4 H:Q852 D:K73 C:J1064" data-label="Vous êtes Sud : dites 2♥"></div>
<ul>
<li><strong>Choisissez une couleur</strong> au palier le plus bas, celle où vous avez le plus de cartes. Ici, quatre cœurs contre deux piques : 2♥. À longueur égale entre une majeure et une mineure, préférez la majeure, qui marque davantage.</li>
<li><strong>Sautez</strong> avec un bon fit et des valeurs utiles : une courte dans la couleur adverse, et des As et des Rois dans les couleurs du partenaire.</li>
<li><strong>Demandez la manche</strong> quand le fit est grand et que vos honneurs sont utiles. Un fit de dix cartes face à un 5-5 gagne souvent la manche avec peu de points.</li>
<li><strong>Après un Michaels majeure-mineure</strong> (1♥ – 2♥), nommez la majeure du partenaire si elle vous convient, ou dites 2SA pour demander sa mineure quand vous avez un bon fit en mineure et pas de fit en majeure.</li>
<li><strong>Après le 2SA Unusual</strong>, dites 3♣ ou 3♦ (la plus longue), ou sautez à la manche avec un fit.</li>
</ul>
<div class="hand" data-cards="S:7 H:J852 D:K1063 C:KJ63" data-label="1♥ – 2♥ – passe : dites 2SA"></div>
<p>Votre partenaire a cinq piques et cinq cartes dans une mineure. Avec un singleton pique mais quatre cartes dans chaque mineure, dites 2SA : votre partenaire nomme sa mineure et vous passez, avec un fit de neuf cartes quelle qu’elle soit.</p>

<h3>Exploiter l’information en défense</h3>
<p>Si les adversaires remportent les enchères, le bicolore du partenaire est un cadeau pour la défense : vous connaissez au moins dix de ses cartes. Comptez à partir de là la main du déclarant, et entamez ou contre-attaquez dans la couleur où votre partenaire peut couper ou faire des levées.</p>
<div class="warn">N’employez pas le Michaels ni le 2SA Unusual avec un 5-4. Votre partenaire choisira une couleur en comptant sur cinq cartes, et vous jouerez un fit de sept cartes contré.</div>
<div class="tip">À vulnérabilité favorable, une enchère bicolore suivie d’un grand saut du partenaire dans votre couleur peut voler le contrat ou trouver un sacrifice bon marché. Votre partenaire doit soutenir avec tout grand fit : la loi des levées totales favorise les enchères avec de la distribution.</div>
`,
    keyPoints: [
      'Michaels : un cue-bid dans la mineure d’ouverture (1m – 2m) montre les deux majeures ; un cue-bid dans la majeure d’ouverture (1M – 2M) montre l’autre majeure et une mineure ; 5-5 ou plus.',
      'Le 2SA Unusual montre les deux couleurs non nommées les moins chères, 5-5 ou plus.',
      'La plupart des mains sont modestes ; avec une main forte, reparlez ensuite.',
      'Le partenaire choisit la couleur où il a le plus de cartes, et saute ou demande la manche avec un grand fit.',
      'Après 1M – 2M, 2SA du partenaire demande la mineure.',
    ],
    quiz: [
      {
        q: 'Votre adversaire de droite ouvre de 1♣. Quelle enchère montre cinq piques et cinq cœurs ?',
        options: ['Contre', '2♣', '2SA', '1♥'],
        answer: 1,
        explain: 'Un cue-bid sur une ouverture en mineure (Michaels) montre les deux majeures. 2SA sur 1♣ montre les deux couleurs non nommées les moins chères, carreau et cœur.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 1♥ et vous dites 2SA. Qu’avez-vous montré ?',
        options: ['15-18 régulier', 'Trèfle et carreau', 'Pique et une mineure', 'Pique et trèfle'],
        answer: 1,
        explain: 'Le 2SA Unusual montre les deux couleurs non nommées les moins chères. Sur 1♥, ce sont trèfle et carreau.',
      },
      {
        q: 'Votre adversaire de gauche ouvre de 1♦, votre partenaire dit 2♦ (Michaels), votre adversaire de droite passe. Vous avez ♠J4 ♥Q852 ♦K73 ♣J1064. Que dites-vous ?',
        options: ['2♠', '2♥', '2SA', 'Passe'],
        answer: 1,
        explain: 'Votre partenaire a au moins cinq cartes dans chaque majeure. Vous avez quatre cœurs et deux piques : cœur est le meilleur fit, nommez-le au palier le plus bas.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 1♠ et vous dites 2♠. Que montrez-vous ?',
        options: ['Des piques', 'Cœur et une mineure', 'Les deux mineures', 'Une main régulière forte'],
        answer: 1,
        explain: 'Un cue-bid sur une ouverture en majeure montre l’autre majeure plus une mineure, au moins 5-5. Votre partenaire peut dire 2SA pour savoir quelle mineure.',
      },
      {
        q: 'Votre adversaire de droite ouvre de 1♣ et vous dites 2SA. Que montrez-vous ?',
        options: ['Trèfle et carreau', 'Carreau et cœur', 'Les deux majeures', 'Cœur et pique'],
        answer: 1,
        explain: 'Sur 1♣, les couleurs non nommées sont carreau, cœur et pique ; les deux moins chères sont carreau et cœur.',
      },
    ],
  },

  {
    id: 'defending-suit-contracts',
    title: 'Le flanc contre un contrat à la couleur',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Comment choisir entre défense active et défense passive, obtenir des coupes, jouer atout au bon moment et forcer le déclarant.',
    body: `
<h3>D’où viennent les levées de la défense</h3>
<p>Contre un contrat à la couleur, la défense fait des levées avec ses honneurs, avec des coupes et avec ses propres atouts. Le déclarant, lui, cherche à se débarrasser de ses perdantes en les coupant au mort ou en les défaussant sur les levées maîtresses du mort. Une bonne défense commence par une question simple quand le mort s’étale : <strong>comment le déclarant va-t-il gagner son contrat, et d’où viendront nos levées ?</strong></p>

<h3>Actif ou passif ?</h3>
<p><strong>Soyez actif</strong> (encaissez ou affranchissez vite vos levées, même avec un certain risque) quand le mort a une longue couleur solide qui fournira des défausses. Les levées que vous ne prenez pas maintenant disparaîtront.</p>
<p><strong>Soyez passif</strong> (jouez des cartes sûres qui ne donnent rien) quand le mort est plat, n’offre aucune défausse, et que le déclarant devra de toute façon perdre ses perdantes. Ouvrir de nouvelles couleurs lui donne alors souvent une levée qu’il ne pouvait pas faire seul.</p>
<div class="deal" data-n="S:K94 H:KQJ104 D:862 C:A5" data-e="S:762 H:A83 D:KJ94 C:874" data-caption="Sud joue 4♠ après 1♠ – 2♥ – 2♠ – 4♠. Votre partenaire entame de la ♣Q ; le mort prend de l’As et joue le ♥K."></div>
<p>Vous prenez de l’♥A. Réfléchissez maintenant : les cœurs du mort sont affranchis, et dès que le déclarant aura tiré les atouts, ses perdantes à carreau seront défaussées dessus. Le seul espoir est de prendre les levées à carreau <em>maintenant</em>. Contre-attaquez du ♦J, à travers la main du déclarant : si votre partenaire a l’♦A et le déclarant la ♦Q, vous pouvez faire trois levées à carreau. Un retour passif à trèfle permettrait au déclarant de tirer les atouts et de jeter ses carreaux.</p>

<h3>Obtenir des coupes</h3>
<ul>
<li>L’entame d’un singleton est idéale quand vous avez le contrôle de l’atout (comme l’As d’atout) ou que votre partenaire peut avoir une reprise de main : vous reprenez la main, rejoignez votre partenaire et coupez à nouveau.</li>
<li>Quand vous donnez une coupe à votre partenaire, utilisez l’appel préférentiel pour indiquer où se trouve votre reprise.</li>
<li>Comptez les atouts du déclarant : inutile de jouer pour une coupe si votre partenaire ne peut plus avoir d’atout.</li>
</ul>

<h3>Quand jouer atout</h3>
<ul>
<li>Quand le mort est court dans une couleur annexe où votre camp est fort, et que le déclarant va chercher à y couper des perdantes.</li>
<li>Quand le déclarant a montré deux couleurs et que le mort a donné la préférence à la seconde : le mort coupera la première.</li>
<li>Quand votre partenaire a transformé votre contre d’appel : il a des atouts longs et solides et veut qu’on tire ceux du déclarant.</li>
<li>Pas quand le déclarant a de longues couleurs annexes maîtresses à encaisser, ni quand une entame atout risque de l’aider à capturer les honneurs d’atout de votre partenaire.</li>
</ul>

<h3>La défense en force</h3>
<p>Si vous avez quatre atouts, ou que les atouts du déclarant sont courts, obligez-le à couper encore et encore en jouant votre longue couleur. Chaque coupe raccourcit ses atouts ; vous finirez peut-être avec plus d’atouts que lui, et il perdra le contrôle. Le jeu en force fonctionne le mieux quand les atouts du déclarant sont dans la main longue et que le mort ne peut pas absorber le jeu en force.</p>

<h3>La promotion d’atout</h3>
<p>L’atout est pique. Le déclarant a ♠A K 10 9 8 7, vous (Ouest) avez ♠Q 6 et votre partenaire ♠J 3. Si on le laisse faire, le déclarant encaisse l’As et le Roi, et votre Dame tombe. Mais supposons que vous jouiez une couleur annexe où votre partenaire et le déclarant sont tous deux chicane. Votre partenaire coupe du ♠J, le déclarant doit surcouper de l’As ou du Roi, et votre ♠Q 6 n’a plus en face qu’un seul gros honneur : la Dame fera une levée. Cette promotion d’atout s’appelle un <strong>uppercut</strong>. Quand vous voyez une promotion de ce genre, votre partenaire doit couper le plus haut possible.</p>
<div class="tip">Comptez vos levées. Si vous voyez la levée de chute, prenez-la ; si vous voyez que le déclarant a son compte, cherchez une coupe ou une promotion d’atout qui pourrait en créer une.</div>
<div class="warn">N’encaissez pas de levées dans une couleur où le déclarant est chicane et où le mort coupe : vous ne faites que l’aider. Et ne donnez pas de « coupe et défausse » (jouer une couleur où le déclarant et le mort sont tous deux chicane), qui lui permet de couper d’une main et de défausser une perdante de l’autre.</div>
`,
    keyPoints: [
      'Demandez-vous comment le déclarant va gagner son contrat et d’où viendront vos levées.',
      'Soyez actif quand le mort a une longue couleur pour défausser ; passif quand le mort est plat.',
      'L’entame d’un singleton fonctionne le mieux avec le contrôle de l’atout ou une reprise chez le partenaire.',
      'Jouez atout quand le mort va couper, ou quand votre partenaire a transformé votre contre d’appel.',
      'Avec quatre atouts, jouez en force ; ne donnez jamais de coupe et défausse.',
    ],
    quiz: [
      {
        q: 'Le mort a une longue couleur annexe solide qui fournira des défausses. Quel type de défense convient en général ?',
        options: ['Passive : attendre que le déclarant se trompe', 'Active : prendre ou affranchir vite vos levées', 'Jouer atout à chaque occasion', 'Donner au déclarant une coupe et défausse'],
        answer: 1,
        explain: 'Une fois les atouts tirés, le déclarant défaussera ses perdantes sur la couleur du mort. Les levées que la défense ne prend pas vite disparaîtront.',
      },
      {
        q: 'Le mort est un 4-3-3-3 plat, sans longue couleur, et le déclarant devra de toute façon perdre ses perdantes annexes. Quel type de défense convient en général ?',
        options: ['Passive : éviter d’ouvrir de nouvelles couleurs', 'Active : changer de couleur à chaque levée', 'Entamer sous vos As', 'Encaisser immédiatement toutes vos levées'],
        answer: 0,
        explain: 'Sans source de défausses, les perdantes du déclarant ne disparaîtront pas. Ouvrir de nouvelles couleurs risque de lui offrir une levée qu’il ne pouvait pas faire seul.',
      },
      {
        q: 'Vous avez quatre atouts contre 4♥. Quel plan de défense est souvent le meilleur ?',
        options: ['Jouer atout', 'Forcer le déclarant à couper en jouant votre longue couleur', 'Entamer un singleton', 'Entamer sous des honneurs dans chaque couleur'],
        answer: 1,
        explain: 'Chaque coupe raccourcit les atouts du déclarant. Avec quatre atouts, deux ou trois jeux en force peuvent vous laisser plus d’atouts que lui, et il perd le contrôle.',
      },
      {
        q: 'Vous avez contré 1♦ d’appel et votre partenaire a passé pour punir. Qu’entamez-vous ?',
        options: ['Votre meilleure majeure', 'Atout', 'Un singleton trèfle', 'La couleur que votre partenaire aimerait'],
        answer: 1,
        explain: 'Le passe de votre partenaire montre des carreaux longs et solides. L’entame atout empêche le déclarant de faire ses petits atouts en coupant, et les carreaux de votre partenaire feront les levées.',
      },
      {
        q: 'Quand l’entame d’un singleton est-elle la plus intéressante contre un contrat à la couleur ?',
        options: ['Quand vous avez l’As d’atout ou que votre partenaire a probablement une reprise', 'Quand vous avez quatre atouts', 'Quand le mort est connu court dans la couleur', 'Toujours'],
        answer: 0,
        explain: 'Après la coupe, il faut redonner la main à votre partenaire, ou reprendre vous-même la main avant que les atouts soient tirés. Le contrôle de l’atout et les reprises du partenaire le permettent.',
      },
    ],
  },

  {
    id: 'suit-combinations-and-odds',
    title: 'Répartitions et combinaison des chances',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Les probabilités a priori des répartitions, la combinaison des chances, et les notions de base des places vacantes et du choix restreint.',
    body: `
<h3>Comment se répartissent les cartes adverses</h3>
<p>Avant que la moindre carte soit jouée, la probabilité de chaque répartition ne dépend que du nombre de cartes que les défenseurs détiennent dans la couleur :</p>
<table>
<thead><tr><th>Manquantes</th><th>Répartition</th><th>Probabilité</th></tr></thead>
<tbody>
<tr><td>2</td><td>1-1 / 2-0</td><td>52 % / 48 %</td></tr>
<tr><td>3</td><td>2-1 / 3-0</td><td>78 % / 22 %</td></tr>
<tr><td>4</td><td>3-1 / 2-2 / 4-0</td><td>50 % / 41 % / 10 %</td></tr>
<tr><td>5</td><td>3-2 / 4-1 / 5-0</td><td>68 % / 28 % / 4 %</td></tr>
<tr><td>6</td><td>4-2 / 3-3 / 5-1 / 6-0</td><td>48 % / 36 % / 15 % / 1,5 %</td></tr>
<tr><td>7</td><td>4-3 / 5-2 / 6-1 / 7-0</td><td>62 % / 31 % / 7 % / 0,5 %</td></tr>
</tbody>
</table>
<p>Une règle utile : un nombre <strong>impair</strong> de cartes manquantes tend à se répartir le plus également possible (3-2, 4-3), mais un nombre <strong>pair</strong> non (4-2 est plus probable que 3-3, et 3-1 plus probable que 2-2).</p>
<p>Deux autres chiffres à connaître : une impasse, c’est 50 % ; avoir besoin d’une impasse sur deux, c’est 75 %, et des deux, 25 %.</p>

<h3>Combiner les chances</h3>
<p>Souvent, un contrat peut se gagner de plusieurs façons. Tout l’art consiste à essayer les chances dans un ordre qui permet d’utiliser la seconde si la première échoue.</p>
<div class="deal" data-n="S:954 H:743 D:Q52 C:AKQ2" data-s="S:AQ6 H:A852 D:AK7 C:763" data-caption="3SA joué par Sud. Ouest entame du ♥K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Comptez :</strong> ♠A, ♥A, ♦AKQ, ♣AKQ : huit levées. La neuvième peut venir d’une répartition 3-3 des trèfles (36 %), qui rend maître le ♣2 du mort, ou de l’impasse à pique (50 %), qui réussit quand Est a le ♠K.</p>
<p><strong>Le danger :</strong> une fois votre ♥A parti, les cœurs d’Ouest sont affranchis. Si vous faites l’impasse à pique et qu’elle échoue en Ouest, Ouest encaisse assez de cœurs pour vous faire chuter, et vous n’essayez jamais les trèfles.</p>
<p><strong>Le bon ordre :</strong> testez d’abord les trèfles. Encaisser l’♣A, le K et la Q ne coûte rien : si les deux défenseurs fournissent trois fois, le ♣2 est votre neuvième levée et vous n’avez pas besoin de l’impasse. Si les trèfles ne sont pas répartis 3-3, vous finissez au mort et pouvez encore jouer pique vers votre A Q. Votre chance est de 36 % + (64 % × 50 %) = 68 %, au lieu de 50 % pour l’impasse seule.</p>
<div class="tip">Essayez d’abord la chance qui ne fait pas perdre la main. Gardez pour la fin l’impasse, qui risque de donner la main à l’adversaire dangereux.</div>

<h3>Les places vacantes</h3>
<p>Une fois le jeu commencé, les chiffres a priori changent. Si l’on sait qu’Ouest a cinq cœurs et Est un seul, alors parmi les cartes encore inconnues, Ouest a 8 places et Est 12. N’importe quelle carte manquante, par exemple le ♠K, se trouve maintenant en Est 12 fois sur 20, soit 60 %, au lieu de 50 %. La main qui a le plus de places vacantes a plus de chances de détenir n’importe quelle carte donnée. C’est pourquoi compter la main est si important.</p>

<h3>Le choix restreint</h3>
<p>Vous avez A K 10 7 5 face à 6 4 3 2, et il vous manque Q, J, 9 et 8. Vous encaissez l’As et Est fournit la Dame. Au tour suivant, Ouest fournit petit. Faut-il jouer le Roi (en espérant qu’Est avait Q J) ou faire l’impasse au 10 (en espérant qu’Est avait la Dame sèche) ?</p>
<p>Faites l’impasse. Avec la Dame sèche, Est n’avait pas le choix ; avec Q J, il aurait pu tout aussi bien fournir le Valet. La Dame sèche est donc environ deux fois plus probable que Q J précisément : l’impasse réussit environ 65 % du temps. Ce principe du <strong>choix restreint</strong> s’applique chaque fois qu’un adversaire fournit l’un de deux honneurs équivalents.</p>

<h3>Repères pour la Dame</h3>
<ul>
<li>Huit cartes, il manque la Dame : impasse (environ 40 % avec A K J x x et environ 51 % avec A K J 10 x, contre environ 33 % pour le jeu en tête).</li>
<li>Neuf cartes, il manque la Dame : jeu en tête (environ 53 % contre environ 51 % pour l’impasse).</li>
<li>Les informations tirées des enchères (qui a ouvert, qui a barré, qui a montré de la longueur) valent plus que ces petits écarts.</li>
</ul>
<div class="warn">Ces pourcentages ne sont qu’un point de départ. Un défenseur qui a montré de longues couleurs aux enchères a moins de chances d’avoir de la longueur dans la couleur que vous jouez.</div>
`,
    keyPoints: [
      'Cinq manquantes : 3-2 68 %. Six manquantes : 4-2 48 %, 3-3 36 %. Quatre manquantes : 3-1 50 %, 2-2 41 %, 4-0 10 %.',
      'Un nombre impair de cartes manquantes tend à se répartir également ; un nombre pair, non.',
      'Combinez les chances : testez d’abord ce qui ne fait pas perdre la main ; gardez pour la fin l’impasse vers la main dangereuse.',
      'Places vacantes : la main qui a le plus de cartes inconnues a plus de chances de détenir une carte donnée.',
      'Choix restreint : quand un adversaire fournit l’un de deux honneurs équivalents, jouez-le pour le singleton.',
    ],
    quiz: [
      {
        q: 'Les adversaires ont six cartes dans une couleur. Quelle est la répartition la plus probable ?',
        options: ['3-3', '4-2', '5-1', '6-0'],
        answer: 1,
        explain: '4-2 se produit environ 48 % du temps, contre 36 % pour 3-3. Avec un nombre pair de cartes manquantes, la répartition égale est l’exception, pas la règle.',
      },
      {
        q: 'Les adversaires ont cinq cartes dans une couleur. Quelle est la probabilité d’une répartition 3-2 ?',
        options: ['50 %', '62 %', '68 %', '78 %'],
        answer: 2,
        explain: 'Environ 68 %. 4-1 vaut environ 28 % et 5-0 environ 4 %.',
      },
      {
        q: 'Vous pouvez tenter une répartition 3-3 (36 %) puis, en cas d’échec, une impasse (50 %). Quelle est la chance combinée ?',
        options: ['50 %', '68 %', '86 %', '43 %'],
        answer: 1,
        explain: '36 % plus la moitié des 64 % restants : 36 + 32 = 68 %.',
      },
      {
        q: 'Dans la donne à 3SA ci-dessus, pourquoi encaisser les trèfles avant de faire l’impasse à pique ?',
        options: ['Pour compter la main', 'Tester les trèfles ne fait pas perdre la main, alors qu’une impasse perdante permet à Ouest d’encaisser ses cœurs', 'Parce que l’impasse a plus de chances de réussir plus tard', 'Pour débloquer les trèfles'],
        answer: 1,
        explain: 'Si l’impasse échoue, Ouest déroule ses cœurs et vous n’essayez jamais les trèfles. Encaisser d’abord les trèfles garde les deux chances.',
      },
      {
        q: 'Vous avez A K 10 7 5 face à 6 4 3 2. Sur l’As, Est fournit la Dame. Au tour suivant, Ouest fournit petit. Que faut-il faire ?',
        options: ['Jouer le Roi', 'Faire l’impasse au 10', 'C’est exactement 50-50', 'Jouer de l’autre main'],
        answer: 1,
        explain: 'Choix restreint : avec Q J, Est pouvait fournir l’un ou l’autre honneur, mais avec la Dame sèche il n’avait pas le choix. Le singleton est la teneur la plus probable : l’impasse réussit environ 65 % du temps.',
      },
    ],
  },

  {
    id: 'balancing',
    title: 'Le réveil',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quand et comment réveiller les enchères en position de réveil, et pourquoi vous pouvez y parler avec moins.',
    body: `
<h3>La position de réveil</h3>
<p>Vous êtes en position de <strong>réveil</strong> quand votre passe mettrait fin aux enchères. Par exemple, Ouest ouvre de 1♥, votre partenaire passe, Est passe, et c’est à vous. Les adversaires se sont arrêtés à un palier bas, ce qui vous renseigne : Est a moins de 6 points, et Ouest n’est en général pas très fort. La force manquante doit bien se trouver quelque part, et une grande partie est dans la main de votre partenaire. Il a peut-être passé avec une bonne main simplement faute d’enchère adaptée, par exemple avec de la longueur à cœur.</p>

<h3>Empruntez un Roi</h3>
<p>En position de réveil, vous pouvez donc parler avec environ <strong>3 H de moins</strong> qu’en position directe, comme si vous aviez emprunté un Roi à votre partenaire. Celui-ci doit alors penser à vous rendre ce Roi et ne pas enchérir comme si votre action était de pleine valeur.</p>
<div class="auction" data-calls="1H P P" data-dealer="W"></div>
<table>
<thead><tr><th>Réveil après 1♥ – passe – passe</th><th>Signification approximative</th></tr></thead>
<tbody>
<tr><td>Intervention à la couleur</td><td>Environ 5-13 H et une couleur convenable</td></tr>
<tr><td>Contre</td><td>Environ 9+ H, court à cœur, du soutien dans les autres couleurs (ou une main forte)</td></tr>
<tr><td>1SA</td><td>Environ 11-14 H, main régulière, avec un arrêt à cœur</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:KJ84 H:73 D:A1063 C:Q85" data-label="1♥ – passe – passe – ? : contrez"></div>
<p>10 H et une courte à cœur : trop léger pour un contre direct, mais c’est un contre de réveil normal.</p>
<div class="hand" data-cards="S:K94 H:AJ6 D:Q1073 C:K82" data-label="1♦ – passe – passe – ? : 1SA"></div>
<p>13 H, main régulière, avec les carreaux arrêtés : un 1SA de réveil, qui montre environ 11-14, et non les 15-18 d’une intervention directe à 1SA.</p>

<h3>Quand ils ont trouvé un fit</h3>
<div class="auction" data-calls="1S P 2S P P" data-dealer="E"></div>
<div class="hand" data-cards="S:73 H:QJ85 D:K1064 C:A92" data-label="Réveillez par un contre"></div>
<p>Les adversaires ont trouvé un fit à pique et se sont arrêtés au palier de 2 : ils n’ont donc qu’environ la moitié des points d’honneur. S’ils ont huit ou neuf piques, votre camp a très probablement un fit lui aussi. Les laisser jouer un contrat au palier de 2 quand vous avez un fit est en général une politique perdante. Contrez d’appel, en invitant votre partenaire à nommer sa meilleure couleur au palier de 3.</p>

<h3>Quand ne pas réveiller</h3>
<ul>
<li><strong>Quand vous êtes long dans leur couleur.</strong> Votre partenaire y est alors court, et avec des valeurs il aurait en général contré. Ils sont peut-être dans un mauvais contrat : laissez-les le jouer.</li>
<li><strong>Quand ils n’ont pas de fit et qu’ils peinent.</strong> Si l’ouvreur a nommé une deuxième couleur et que le répondant a donné une préférence à contrecœur, ils vont peut-être chuter : ne les sauvez pas.</li>
<li><strong>Après 1SA – passe – passe</strong>, ne réveillez qu’avec une bonne couleur ou de la distribution. Le partenaire de l’ouvreur peut avoir jusqu’à 7 points, et la force est plus également répartie.</li>
</ul>
<div class="hand" data-cards="S:Q74 H:KJ953 D:A5 C:J82" data-label="1♥ – passe – passe – ? : passez"></div>
<p>11 H, mais cinq cœurs, la couleur de l’ouvreur. Votre partenaire a probablement un ou deux cœurs au plus, et il n’a pas contré : il est donc faible. 1♥ a de bonnes chances de chuter ; passez.</p>
<div class="tip">Quand votre partenaire réveille, souvenez-vous qu’il a déjà compté une partie de vos valeurs. Enchérissez un palier plus prudemment que face à une action en position directe.</div>
<div class="warn">Ne punissez pas votre partenaire d’avoir réveillé les enchères. Si vous avez une bonne main et que votre partenaire réveille par un contre, demandez-vous s’il ne fait pas un réveil léger avant de sauter à la manche.</div>
`,
    keyPoints: [
      'En position de réveil, vous pouvez parler avec environ 3 H de moins qu’en position directe (« emprunter un Roi »).',
      'Après 1♥ – passe – passe : une couleur avec environ 5-13, un contre avec environ 9+, 1SA avec environ 11-14.',
      'Ne laissez pas les adversaires jouer au palier de 2 quand ils ont trouvé un fit : disputez le contrat.',
      'Méfiez-vous du réveil quand vous êtes long dans leur couleur.',
      'Quand votre partenaire réveille, rendez-lui son Roi : ne surenchérissez pas en réponse.',
    ],
    quiz: [
      {
        q: '1♥ – passe – passe – ? Vous avez ♠KJ84 ♥73 ♦A1063 ♣Q85 (10 H).',
        options: ['Passe', 'Contre', '1♠', '1SA'],
        answer: 1,
        explain: 'Une courte à cœur et du soutien dans les autres couleurs. 10 H, c’est léger pour un contre direct, mais parfait en position de réveil.',
      },
      {
        q: '1♦ – passe – passe – ? Vous avez ♠K94 ♥AJ6 ♦Q1073 ♣K82 (13 H).',
        options: ['Passe', 'Contre', '1SA', '2SA'],
        answer: 2,
        explain: 'Un 1SA de réveil montre environ 11-14 avec un arrêt. C’est exactement cette main.',
      },
      {
        q: '1♥ – passe – passe – ? Vous avez ♠Q74 ♥KJ953 ♦A5 ♣J82 (11 H).',
        options: ['Passe', 'Contre', '1SA', '2♦'],
        answer: 0,
        explain: 'Avec cinq cartes dans la couleur de l’ouvreur, votre partenaire est court à cœur et aurait contré avec des valeurs. 1♥ risque fort de chuter ; passez.',
      },
      {
        q: 'Pourquoi pouvez-vous réveiller avec moins de points qu’en position directe ?',
        options: ['Parce que les adversaires sont faibles, votre partenaire a forcément des valeurs', 'Parce que le règlement le permet', 'Parce que vous êtes vulnérable', 'Parce que les adversaires ne peuvent pas contrer'],
        answer: 0,
        explain: 'Si les adversaires s’arrêtent à un palier bas, la force restante se partage entre votre partenaire et vous. Votre partenaire a peut-être passé avec une main correcte faute de bonne enchère.',
      },
      {
        q: 'Les adversaires enchérissent 1♠ – 2♠ et passent. En position de réveil, quel est le principe général ?',
        options: ['Toujours passer : ils ont un fit', 'Disputer le contrat : quand ils ont un fit au palier de 2, votre camp en a probablement un aussi', 'Ne parler qu’avec 12+ H', 'Contrer pour punir'],
        answer: 1,
        explain: 'S’ils ont huit ou neuf atouts, vous avez probablement un fit vous aussi. Les laisser jouer au palier de 2 est en général pire que de lutter jusqu’au palier de 3.',
      },
    ],
  },

  {
    id: 'law-of-total-tricks',
    title: 'La loi des levées totales',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Comment le nombre d’atouts détenus par les deux camps guide les décisions dans les batailles de partielle.',
    body: `
<h3>La loi</h3>
<p>Le <strong>nombre total de levées</strong> d’une donne est la somme des levées que Nord–Sud peuvent faire dans leur meilleure couleur d’atout et de celles qu’Est–Ouest peuvent faire dans la leur. La loi des levées totales dit que ce total est à peu près égal au <strong>nombre total d’atouts</strong> : la longueur du plus long fit de Nord–Sud plus celle du plus long fit d’Est–Ouest.</p>
<p>Si vous avez neuf piques et eux huit cœurs, il y a environ 17 levées totales : s’ils peuvent faire neuf levées à cœur, vous pouvez en faire environ huit à pique, et ainsi de suite.</p>

<h3>La règle pratique</h3>
<p>Dans une séquence compétitive, enchérissez jusqu’au palier qui correspond au nombre d’atouts de votre camp :</p>
<table>
<thead><tr><th>Atouts de votre camp</th><th>Lutter jusqu’à</th></tr></thead>
<tbody>
<tr><td>8</td><td>Le palier de 2 (8 levées)</td></tr>
<tr><td>9</td><td>Le palier de 3 (9 levées)</td></tr>
<tr><td>10</td><td>Le palier de 4 (10 levées)</td></tr>
</tbody>
</table>
<p>La logique : avec neuf atouts, vous êtes « protégé » au palier de 3, car même si vous chutez, les adversaires peuvent probablement gagner quelque chose eux-mêmes. Avec huit seulement, enchérir au palier de 3 est risqué quand ils en ont huit aussi, car le total n’est que de 16.</p>

<h3>Un exemple</h3>
<div class="auction" data-calls="1S 2H 2S 3H" data-dealer="S"></div>
<div class="hand" data-cards="S:AQJ852 H:73 D:KJ4 C:Q5" data-label="Ouvreur : dites 3♠"></div>
<p>Le soutien de votre partenaire montre trois atouts. Avec six piques, votre camp en a neuf : luttez jusqu’à 3♠. S’ils peuvent gagner 3♥, le total d’environ 17 levées suggère que vous ferez huit ou neuf levées à pique : 3♠ est un bon résultat dans tous les cas.</p>
<div class="hand" data-cards="S:AQJ85 H:73 D:KJ4 C:Q52" data-label="Ouvreur : passez"></div>
<p>Avec cinq piques, votre camp en a huit. Si les deux camps ont huit atouts (16 au total) et qu’ils font neuf levées à cœur, vous n’en ferez que sept à pique : 3♠ chuterait de deux. Passez et défendez ; vos valeurs hors de la couleur de pique pourraient bien faire chuter 3♥.</p>

<h3>Les ajustements</h3>
<p>La loi est une approximation. Attendez-vous à <strong>plus</strong> de levées totales que d’atouts avec :</p>
<ul>
<li>un double fit (un second fit dans une couleur annexe),</li>
<li>des courtes dans les couleurs adverses combinées à de longs atouts,</li>
<li>des honneurs concentrés dans vos propres longues couleurs.</li>
</ul>
<p>Attendez-vous à <strong>moins</strong> de levées totales avec :</p>
<ul>
<li>des Dames et des Valets dans les couleurs adverses (bons en défense, mauvais en attaque),</li>
<li>une distribution plate (4-3-3-3) dans l’une des mains,</li>
<li>des atouts de mauvaise qualité.</li>
</ul>

<h3>Les principes de la bataille de la partielle</h3>
<ul>
<li>Ne laissez pas jouer les adversaires au palier de 2 quand votre camp a un fit de huit cartes et qu’ils en ont un aussi.</li>
<li>Avec neuf atouts, luttez jusqu’au palier de 3 ; barrez par vos soutiens quand vous avez des atouts en plus, surtout à vulnérabilité favorable.</li>
<li>Ne dites pas trois sur trois avec seulement huit atouts, sauf avec de la distribution en plus : défendez plutôt.</li>
<li>Chuter d’une levée non contré (−50 ou −100) vaut mieux que de les laisser gagner une partielle (−110 ou −140).</li>
</ul>
<div class="tip">Quand votre partenaire intervient et que vous avez quatre cartes de soutien et une main faible, pensez à la loi : neuf ou dix atouts à vous deux signifient que vous devez soutenir jusqu’au palier correspondant, pour compliquer la tâche des adversaires.</div>
<div class="warn">N’utilisez pas la loi pour demander des manches et des chelems avec des mains faibles. C’est un guide pour les décisions de partielle en compétition, quand les deux camps enchérissent.</div>
`,
    keyPoints: [
      'Levées totales (meilleurs contrats des deux camps) ≈ atouts totaux (plus longs fits des deux camps).',
      'Luttez jusqu’au palier égal au nombre d’atouts de votre camp : 8 → palier de 2, 9 → de 3, 10 → de 4.',
      'Avec huit atouts de chaque côté, trois sur trois est en général une erreur : défendez.',
      'Ajustez à la hausse pour les doubles fits et les courtes ; à la baisse pour les petits honneurs dans leurs couleurs et les distributions plates.',
      'Une petite chute non contrée vaut mieux que de les laisser gagner une partielle.',
    ],
    quiz: [
      {
        q: 'Votre camp a neuf atouts dans une bataille de partielle. Jusqu’à quel palier la loi suggère-t-elle de lutter ?',
        options: ['Le palier de 2', 'Le palier de 3', 'Le palier de 4', 'Le palier de 5'],
        answer: 1,
        explain: 'Enchérissez jusqu’au palier qui correspond à vos atouts : neuf atouts, neuf levées, le palier de 3.',
      },
      {
        q: 'Chaque camp a un fit de huit cartes. Les adversaires disent 3♥ sur votre 2♠. Que suggère la loi ?',
        options: ['Dire 3♠', 'Défendre : avec 16 levées totales, s’ils en font neuf, vous n’en faites que sept', 'Dire 4♠', 'Contrer pour punir quelle que soit votre main'],
        answer: 1,
        explain: 'Avec 16 atouts au total, les levées totalisent environ 16. Si 3♥ gagne, 3♠ chute de deux ; si 3♠ gagnait, 3♥ chuterait. Dans les deux cas, défendre est au moins aussi bon.',
      },
      {
        q: 'Quelle caractéristique annonce plus de levées totales que d’atouts ?',
        options: ['Des Dames et des Valets dans la couleur adverse', 'Une distribution 4-3-3-3', 'Un double fit avec une courte dans la couleur adverse', 'Des atouts faibles'],
        answer: 2,
        explain: 'Un second fit et une courte permettent aux deux camps de faire plus de levées dans leur propre contrat que le seul nombre d’atouts ne le laisse prévoir.',
      },
      {
        q: 'Vous avez ouvert de 1♠ avec six piques et un minimum. 1♠ – (2♥) – 2♠ – (3♥) – ?',
        options: ['Passe', '3♠', '4♠', 'Contre'],
        answer: 1,
        explain: 'Votre partenaire a trois piques : votre camp en a neuf. Lutter jusqu’à 3♠ est exactement ce que recommande la loi.',
      },
      {
        q: 'Lequel de ces éléments est un ajustement négatif, annonçant moins de levées totales ?',
        options: ['Une courte dans la couleur adverse', 'Des Dames et des Valets dans les couleurs adverses', 'Un fit de dix cartes', 'Un second fit'],
        answer: 1,
        explain: 'Les petits honneurs dans les couleurs adverses font des levées en défense mais servent peu quand vous jouez le contrat : les deux camps ont tendance à faire moins de levées comme déclarant.',
      },
    ],
  },

  {
    id: 'vulnerability-imps-matchpoints',
    title: 'Vulnérabilité, IMP, tournoi par paires et par',
    topic: 'Scoring & tactics',
    level: 'Intermediate',
    summary: 'Comment la vulnérabilité et le mode de marque modifient vos décisions aux enchères et au jeu.',
    body: `
<h3>La vulnérabilité</h3>
<p>Chaque donne indique qui est vulnérable. Du point de vue de votre camp, il y a quatre combinaisons, que l’on décrit en général ainsi :</p>
<ul>
<li><strong>Favorable :</strong> vous non vulnérables, eux vulnérables. Barrez et sacrifiez librement ; vos levées de chute coûtent peu et leurs manches rapportent beaucoup.</li>
<li><strong>Égale :</strong> les deux camps non vulnérables, ou les deux vulnérables.</li>
<li><strong>Défavorable :</strong> vous vulnérables, eux non. Prudence : chuter coûte 100 par levée sans contre et 200-300 contré, alors que leurs manches valent moins.</li>
</ul>
<p>La vulnérabilité modifie aussi vos décisions de manche : une manche vulnérable rapporte une prime de 500 au lieu de 300, et elle mérite donc d’être demandée avec des valeurs plus justes, surtout en IMP.</p>

<h3>Par quatre : les IMP</h3>
<p>Dans un match par quatre, les mêmes donnes sont jouées aux deux tables, et l’écart de marque est converti en IMP (International Match Points) :</p>
<table>
<thead><tr><th>Écart</th><th>IMP</th><th>Écart</th><th>IMP</th></tr></thead>
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
<p>Un écart de 0-10 vaut 0 ; 3500-3990 vaut 23, et 4000 ou plus vaut 24. L’échelle croît lentement : les gros écarts viennent des manches et des chelems, et les levées de mieux comptent à peine. D’où la stratégie en IMP :</p>
<ul>
<li><strong>Demandez les manches agressivement.</strong> Non vulnérable, demander 4♠ rapporte 6 IMP quand il gagne (+420 contre +170) et en coûte 5 quand il chute (−50 contre +140) : il vaut la peine de le demander à partir d’environ 45 %. Vulnérable : gain de 10 (+620 contre +170), perte de 6 (−100 contre +140) : il vaut la peine de le demander à partir d’environ 37 %.</li>
<li>Les <strong>petits chelems</strong> valent la peine d’être demandés à partir d’environ 50 % ; les <strong>grands chelems</strong> seulement bien au-delà de 50 % (le point d’équilibre est d’environ 56-57 %, et en pratique on veut une quasi-certitude).</li>
<li><strong>La sécurité d’abord au jeu</strong> : renoncez à une levée de mieux pour assurer le contrat.</li>
</ul>

<h3>Par paires : la marque au pourcentage</h3>
<p>Dans un tournoi par paires, votre résultat sur chaque donne est comparé à celui de toutes les autres paires qui ont joué dans votre orientation, et vous marquez un point (deux, selon certaines méthodes) pour chaque paire que vous battez. L’<em>ampleur</em> de l’écart ne compte pas, seulement le nombre de paires battues. Les priorités changent :</p>
<ul>
<li>Les levées de mieux comptent : +450 bat +420 aussi sûrement que +620 bat +170.</li>
<li>Les dénominations qui marquent plus comptent : 3SA avec dix levées (+430) bat 4♠ avec dix levées (+420). Avec deux mains régulières et un fit 4-4 en majeure, on choisit parfois 3SA pour cette raison.</li>
<li>Les partielles se disputent âprement : +110 contre +90 est un gros écart au pourcentage, et pousser les adversaires un palier plus haut pour les faire chuter est souvent l’action gagnante.</li>
<li>Contrer une partielle pour +200 peut battre toutes les paires qui ont marqué +110 ou +140, mais s’ils la gagnent contrée, vous avez un zéro.</li>
<li>Les maniements de sécurité qui coûtent une levée de mieux ne se justifient que si le contrat lui-même est vraiment en danger.</li>
</ul>

<h3>Le par</h3>
<p>Le résultat <strong>par</strong> est celui qu’on obtient quand les deux camps enchérissent parfaitement en connaissant les quatre jeux. Par exemple, si Est–Ouest, vulnérables, peuvent gagner 4♠ (620) et que Nord–Sud, non vulnérables, peuvent faire huit levées à carreau, le par est 5♦ contré trois de chute pour Nord–Sud : −500 vaut mieux pour eux que −620. Les résultats réels sont comparés au par pour voir quel camp a gagné, et réfléchir au par forme un bon jugement en compétition.</p>
<div class="tip">Avant chaque donne, notez la vulnérabilité. Demandez-vous : « Combien vaut leur manche, et combien puis-je me permettre de perdre ? »</div>
<div class="warn">Ne prenez pas de risques inutiles pour des levées de mieux en IMP, et ne faites pas de maniements de sécurité qui coûtent des levées de mieux par paires quand le contrat n’est pas en danger. Le bon coup peut dépendre du mode de marque.</div>
`,
    keyPoints: [
      'La vulnérabilité favorable (vous non vulnérables, eux vulnérables) est le moment de barrer et de sacrifier ; la défavorable, celui d’être prudent.',
      'En IMP : demandez les manches non vulnérables à environ 45 %, vulnérables à environ 37 %, les petits chelems à 50 %.',
      'En IMP : les levées de mieux comptent peu ; protégez le contrat.',
      'Par paires : chaque paire battue compte, donc les levées de mieux et les dénominations qui marquent plus comptent.',
      'Le par est le résultat d’enchères parfaites des deux camps, sacrifices compris.',
    ],
    quiz: [
      {
        q: 'Que signifie « vulnérabilité défavorable » ?',
        options: ['Les deux camps vulnérables', 'Vous vulnérables, eux non vulnérables', 'Vous non vulnérables, eux vulnérables', 'Aucun camp vulnérable'],
        answer: 1,
        explain: 'Défavorable signifie que vos levées de chute coûtent cher et que leurs manches valent relativement peu : le pire moment pour sacrifier ou barrer à tout-va.',
      },
      {
        q: 'En IMP, à partir de quelle probabilité environ une manche vulnérable mérite-t-elle d’être demandée ?',
        options: ['Environ 37 %', 'Environ 50 %', 'Environ 60 %', 'Environ 75 %'],
        answer: 0,
        explain: 'Vous gagnez 10 IMP (+620 contre +170) quand elle gagne et en perdez 6 (−100 contre +140) quand elle chute : le point d’équilibre est d’environ 6/16 = 37,5 %.',
      },
      {
        q: 'Par paires, pourquoi +430 contre +420 compte-t-il ?',
        options: ['Ça ne compte pas : l’écart est minime', 'Chaque paire que vous dépassez compte, si petit que soit l’écart', 'À cause de l’échelle des IMP', 'Parce que le sans-atout donne une prime'],
        answer: 1,
        explain: 'Par paires, seul le classement compte. Dix points battent une paire aussi sûrement que mille.',
      },
      {
        q: 'En IMP, combien vaut un écart de 250 points ?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explain: '220-260 vaut 6 IMP. Par exemple, +420 contre +170 quand une équipe demande une manche non vulnérable et que l’autre s’arrête en partielle.',
      },
      {
        q: 'Les adversaires, vulnérables, peuvent gagner 4♠ (620). Vous êtes non vulnérable et comptez chuter de trois à 5♦ contré. Que vaut ce sacrifice ?',
        options: ['Une perte de 800', 'Une perte de 500, ce qui vaut mieux que −620', 'Une perte de 300', 'Un gain'],
        answer: 1,
        explain: 'Non vulnérable, trois de chute contré font 100 + 200 + 200 = 500. C’est 120 de moins que leur manche : le sacrifice est payant si 4♠ gagne vraiment.',
      },
    ],
  },

  {
    id: 'safety-plays',
    title: 'Les maniements de sécurité',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Comment renoncer à un peu, en général une levée de mieux, pour protéger le contrat contre une mauvaise répartition.',
    body: `
<h3>Une assurance pour votre contrat</h3>
<p>Un <strong>maniement de sécurité</strong> est une façon de jouer une couleur (ou toute la main) qui protège contre une mauvaise répartition, en général au prix d’une petite chance de levée supplémentaire. Vous prenez une assurance : vous renoncez à un peu sur les répartitions favorables pour éviter la catastrophe sur les mauvaises. La première question est donc toujours : <em>de combien de levées ai-je besoin dans cette couleur ?</em> Le meilleur maniement pour quatre levées est souvent différent du meilleur maniement pour cinq.</p>

<h3>Garder une fourchette des deux côtés</h3>
<p>Vous avez A Q 9 6 5 au mort face à K 10 4 3 en main ; il vous manque J 8 7 2, et il vous faut cinq levées. La plupart du temps, n’importe quel maniement raisonnable réussit ; le danger, ce sont les quatre cartes manquantes dans une seule main.</p>
<ul>
<li><strong>Encaissez d’abord l’As.</strong> Si Ouest défausse, Est a J 8 7, placé devant votre K 10 : vous jouez deux fois du mort et faites l’impasse. Si Est défausse, Ouest a J 8 7 devant la Q 9 du mort : vous jouez deux fois de votre main et faites l’impasse. Cinq levées, quel que soit le défenseur qui a la longueur.</li>
<li>Encaisser d’abord le Roi est une erreur : si Ouest défausse alors, le J 8 7 d’Est se trouve derrière l’A Q 9 restant du mort, votre 10 4 3 ne peut pas capturer le Valet, et Est fait forcément une levée.</li>
</ul>
<p>La règle générale : quand vous avez tous les gros honneurs sauf un, encaissez d’abord l’honneur qui laisse une position d’impasse dans les <em>deux</em> mains.</p>

<h3>Renoncer à une levée de mieux pour assurer le contrat</h3>
<p>Vous avez A K 10 5 4 au mort face à 8 7 6, et il vous faut quatre levées ; vous pouvez vous permettre d’en perdre une. Le maniement naturel, As, Roi et un troisième tour, ne fait quatre levées qu’environ 73 % du temps : il échoue contre les répartitions 5-0 et la plupart des 4-1.</p>
<p>Mieux : encaissez l’As, puis jouez vers le mort et, si Ouest fournit petit, mettez le 10. Si Est prend d’un honneur, la couleur était en général répartie 3-2 et le Roi et les longues sont maîtres ; si le 10 fait la levée, vous avez capturé la longueur d’Ouest. Ce maniement fait quatre levées environ 82 % du temps : en plus de toutes les répartitions 3-2, il résiste à toutes les 4-1 où Ouest a la longueur. Le prix est une chance un peu plus faible de faire cinq levées, ce qui ne compte que si vous en avez besoin.</p>

<h3>Laisser passer par sécurité</h3>
<p>Le mort a A K 7 6 5 4 et une seule remontée extérieure ; vous avez 3 2 et il vous faut quatre levées. Si vous jouez l’As, le Roi et un troisième tour, une répartition 4-1 vous laisse deux perdantes dans la couleur et aucun moyen de revenir aux longues. Laissez plutôt passer complètement le premier tour. Ensuite, vous pourrez jouer vers l’As et le Roi et, si la couleur était 4-1, concéder un tour de plus et utiliser la remontée extérieure pour encaisser les deux dernières. Quatre levées contre toute répartition 3-2 ou 4-1 : 96 %.</p>

<h3>La sécurité sur l’ensemble de la main</h3>
<p>La sécurité ne concerne pas seulement une couleur isolée. Supposons qu’à 3SA vous comptiez neuf levées, et qu’une impasse puisse vous en donner une dixième, mais que, si elle échoue, le défenseur qui prend puisse encaisser quatre levées dans sa longue. Ne la faites pas. Par quatre, une levée de mieux vaut 1 IMP au plus, et le contrat vaut bien davantage. De même, avant de prendre un risque dans une couleur, demandez-vous si une autre couleur pourrait fournir les levées sans aucun risque.</p>
<div class="tip">Avant de toucher à une couleur clé, demandez-vous : « Quelle est la pire répartition à laquelle je peux faire face, et quel maniement y fait face ? »</div>

<h3>Maniements de sécurité et mode de marque</h3>
<ul>
<li><strong>Par quatre (IMP) :</strong> faites presque tous les maniements de sécurité qui protègent le contrat. Une levée de mieux rapporte très peu ; une manche chutée coûte beaucoup.</li>
<li><strong>Par paires (au pourcentage) :</strong> les levées de mieux comptent, car toutes les paires qui jouent le même contrat sont vos concurrentes. Ne faites un maniement de sécurité que si le contrat est vraiment en danger, ou si vous pensez être dans un meilleur contrat que le reste de la salle.</li>
</ul>
<div class="warn">Un maniement de sécurité fait sans nécessité, ou qui protège contre le mauvais danger, n’est qu’une levée perdue. Comptez d’abord vos levées ; décidez ensuite si vous avez besoin d’une assurance, et laquelle.</div>
`,
    keyPoints: [
      'Décidez d’abord de combien de levées vous avez besoin dans la couleur ; le meilleur maniement en dépend.',
      'Avec A Q 9 x x face à K 10 x x, encaissez d’abord l’As pour garder une impasse contre l’un ou l’autre défenseur.',
      'Avec A K 10 x x face à x x x et quatre levées nécessaires, encaissez l’As puis faites l’impasse au 10.',
      'Laissez passer un premier tour quand les remontées manquent et que vous pouvez vous permettre une perdante.',
      'En IMP, faites volontiers les maniements de sécurité ; par paires, seulement quand le contrat est en danger.',
    ],
    quiz: [
      {
        q: 'Vous avez A Q 9 6 5 face à K 10 4 3 et il vous faut cinq levées. Quelle carte encaisser d’abord ?',
        options: ['L’As', 'Le Roi', 'La Dame', 'Peu importe'],
        answer: 0,
        explain: 'Après l’As, vous gardez K 10 derrière Est et Q 9 derrière Ouest : une répartition 4-0 peut être capturée quel que soit le défenseur qui a les quatre cartes.',
      },
      {
        q: 'Vous avez A K 10 5 4 face à 8 7 6 et il ne vous faut que quatre levées. Quel est le maniement de sécurité ?',
        options: ['Encaisser l’As et le Roi, puis jouer un troisième tour', 'Encaisser l’As, puis jouer vers le mort et faire l’impasse au 10 si Ouest fournit petit', 'Jouer le 10 du mort', 'Laisser passer les deux premiers tours'],
        answer: 1,
        explain: 'Ce maniement protège contre Q J 9 x en Ouest, tout en faisant quatre levées sur toutes les répartitions normales : environ 82 %, contre environ 73 % en encaissant les gros honneurs.',
      },
      {
        q: 'Le mort a A K 7 6 5 4 et une remontée extérieure ; vous avez 3 2. Il vous faut quatre levées dans la couleur. Que faites-vous ?',
        options: ['As, Roi, puis un troisième tour', 'Laisser passer le premier tour', 'Jouer le 3 et faire l’impasse au 7', 'Encaisser l’As et espérer'],
        answer: 1,
        explain: 'Laisser passer le premier tour préserve les gros honneurs du mort comme remontées. Vous faites alors quatre levées contre les répartitions 3-2 et 4-1, environ 96 % du temps.',
      },
      {
        q: 'Par quatre, vous comptez neuf levées à 3SA. Une impasse pourrait en donner une dixième, mais si elle échoue, la défense peut dérouler une couleur. Que faites-vous ?',
        options: ['Faire l’impasse pour la levée de mieux', 'Encaisser vos neuf levées', 'Concéder d’abord une levée', 'Jouer pour un squeeze'],
        answer: 1,
        explain: 'La levée de mieux ne vaut presque rien en IMP, alors que la chute coûte une manche. Assurez le contrat.',
      },
      {
        q: 'Pourquoi fait-on moins souvent des maniements de sécurité par paires ?',
        options: ['Parce qu’ils y sont interdits', 'Parce qu’une levée de mieux peut battre les autres paires qui jouent le même contrat', 'Parce que les manches y marquent moins', 'Parce que les défenseurs y sont plus faibles'],
        answer: 1,
        explain: 'Par paires, +450 bat +420 aussi sûrement que +420 bat −50. Renoncer à une levée de mieux coûte des points chaque fois que le contrat n’était pas vraiment en danger.',
      },
    ],
  },

  {
    id: 'avoidance-play',
    title: 'Le jeu d’évitement : tenir l’adversaire dangereux à l’écart de la main',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Comment organiser le jeu pour que, si vous devez perdre une levée, vous la perdiez au profit du défenseur qui ne peut pas vous nuire.',
    body: `
<h3>Main dangereuse et main inoffensive</h3>
<p>Souvent, un seul défenseur peut vous nuire. À sans-atout, c’est celui qui a des levées affranchies dans sa longue couleur. À l’atout, ce peut être celui qui peut jouer à travers un Roi, ou qui peut donner une coupe à son partenaire. Repérez tôt la <strong>main dangereuse</strong>, et prévoyez de perdre les levées que vous devez perdre au profit de la <strong>main inoffensive</strong>. C’est le jeu d’évitement.</p>

<h3>Un exemple complet</h3>
<div class="deal" data-n="S:54 H:K83 D:KQ5 C:AJ1093" data-e="S:97 H:Q975 D:J643 C:Q86" data-s="S:A632 H:AJ4 D:A72 C:K72" data-w="S:KQJ108 H:1062 D:1098 C:54" data-caption="3SA joué par Sud. Ouest entame du ♠K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Comptez :</strong> ♠A, ♥AK, ♦AKQ, ♣AK : huit levées de tête. Les trèfles fourniront les levées supplémentaires, mais vous devrez peut-être en perdre une sur la ♣Q.</p>
<p><strong>Étape 1, le laisser-passer.</strong> Vous avez six piques à vous deux : selon la règle des 7, laissez passer une fois. Laissez passer le ♠K et prenez le deuxième pique. Est avait deux piques, il n’en a donc plus : <strong>Est est la main inoffensive, Ouest la main dangereuse.</strong></p>
<p><strong>Étape 2, le choix de l’impasse.</strong> Les trèfles offrent une impasse dans les deux sens : vous pouvez chercher la Dame chez l’un ou l’autre défenseur. Jouez le ♣K de votre main, puis un petit trèfle vers le mort et, quand Ouest fournit petit, faites l’impasse au 10. Si Ouest a la Dame, l’impasse réussit. Si c’est Est qui l’a, comme ici, Est prend mais n’a plus de pique à rejouer. Vous prenez sa contre-attaque et faites dix levées : un pique, deux cœurs, trois carreaux et quatre trèfles.</p>
<p>L’impasse dans l’autre sens (jouer le ♣J à travers Est vers votre Roi) réussirait par hasard avec cette répartition, mais elle échouerait chaque fois qu’Ouest aurait la Dame, et Ouest encaisserait alors ses piques. Le jeu d’évitement gagne où que soit la Dame.</p>
<p>Et l’impasse à cœur, en jouant vers l’A J ? Elle aussi perdrait au profit d’Ouest s’il avait la ♥Q. Préférez la couleur où l’impasse perdante va dans la main inoffensive.</p>
<div class="tip">Avec une impasse dans les deux sens, demandez-vous d’abord : « Si cette impasse échoue, importe-t-il de savoir qui prend ? » Si oui, faites l’impasse vers la main inoffensive, et ne vous en remettez à la devinette que si les deux défenseurs sont aussi dangereux l’un que l’autre.</div>

<h3>Autres techniques d’évitement</h3>
<ul>
<li><strong>Laisser passer vers la main inoffensive.</strong> Quand une couleur doit concéder une levée, faites en sorte que le défenseur inoffensif la prenne : jouez de la main qui vous permet de fournir petit pendant que la main dangereuse ne peut pas prendre à bon compte.</li>
<li><strong>Protéger un Roi.</strong> Avec K x en main et la main dangereuse à votre droite, une carte jouée à travers votre Roi est fatale : tenez la main dangereuse à l’écart de la main.</li>
<li><strong>Jouer vers les honneurs</strong> pour que ce soit le partenaire de la main dangereuse qui doive prendre, et non la main dangereuse elle-même.</li>
<li><strong>À l’atout</strong>, le danger peut être une coupe : si un défenseur est connu court dans une couleur, tenez son partenaire à l’écart de la main pour qu’il ne puisse pas lui donner la coupe.</li>
</ul>
<div class="warn">L’évitement ne fonctionne que si vous savez quel défenseur est dangereux. Observez l’entame, les enchères et les cartes jouées aux premières levées, et identifiez le détenteur de la longue couleur avant d’attaquer votre couleur clé.</div>
`,
    keyPoints: [
      'Repérez la main dangereuse (souvent le défenseur qui a des levées affranchies) et la main inoffensive.',
      'Si une levée doit être perdue, perdez-la au profit de la main inoffensive.',
      'Combinez laisser-passer et évitement : faites du partenaire du joueur long la main inoffensive, puis faites l’impasse vers cette main.',
      'Avec une impasse dans les deux sens, choisissez le sens qui ne perd qu’au profit de la main inoffensive.',
      'Préférez une source de levées où l’option perdante va dans la main inoffensive.',
    ],
    quiz: [
      {
        q: 'À sans-atout, quel défenseur est en général la main dangereuse ?',
        options: ['Celui qui a le plus de H', 'Celui qui a des levées affranchies dans sa longue couleur', 'Celui qui est à votre gauche', 'Toujours celui qui a entamé'],
        answer: 1,
        explain: 'La main dangereuse est celle qui peut encaisser assez de levées pour vous faire chuter dès qu’elle a la main, normalement le défenseur qui a la longue couleur affranchie.',
      },
      {
        q: 'Dans la donne ci-dessus, pourquoi laisser passer le premier pique ?',
        options: ['Pour gagner une levée de plus à pique', 'Pour épuiser les piques d’Est, qui devient ainsi la main inoffensive', 'Pour cacher votre longueur à pique', 'Pour créer une remontée au mort'],
        answer: 1,
        explain: 'Est avait deux piques. Après avoir pris le deuxième tour, Est n’en a plus : il ne peut pas vous nuire quand il a la main.',
      },
      {
        q: 'Dans la donne ci-dessus, dans quel sens faire l’impasse à trèfle ?',
        options: ['Chercher la Dame en Ouest, pour qu’une impasse perdante aille en Est', 'Chercher la Dame en Est', 'Jouer en tête', 'Tirer à pile ou face'],
        answer: 0,
        explain: 'Jouer vers le mort et faire l’impasse au 10 réussit si Ouest a la Dame, et ne perd qu’au profit d’Est, qui n’a plus de pique. Le contrat est assuré dans tous les cas.',
      },
      {
        q: 'Pourquoi ne pas tenter l’impasse à cœur (en jouant vers l’A J) pour la neuvième levée ?',
        options: ['Elle perdrait si Ouest, la main dangereuse, avait la ♥Q', 'Elle ne peut pas réussir', 'Elle demande deux remontées', 'Les cœurs sont bloqués'],
        answer: 0,
        explain: 'Jouer vers l’A J fait l’impasse contre Est mais perd contre la Dame d’Ouest, qui encaisserait alors ses piques. L’impasse à trèfle ne perd qu’au profit de la main inoffensive.',
      },
      {
        q: 'Vous avez K x en main et la main dangereuse est à votre droite. Quel est le risque ?',
        options: ['Aucun', 'Une carte jouée par la main dangereuse à travers votre Roi peut le prendre au piège', 'Votre Roi sera coupé', 'Vous risquez de bloquer la couleur'],
        answer: 1,
        explain: 'Si le défenseur de droite prend la main, l’As de son partenaire est placé derrière votre Roi. Tenez ce défenseur à l’écart de la main, ou faites en sorte que l’autre défenseur prenne toute levée que vous devez perdre.',
      },
    ],
  },

  {
    id: 'counting-on-defense',
    title: 'Compter en flanc',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Comment les défenseurs comptent les points, la distribution et les levées du déclarant pour trouver la bonne défense.',
    body: `
<h3>Trois choses à compter</h3>
<p>Les bons défenseurs semblent voir à travers le dos des cartes. Leur secret, c’est le comptage. À partir des enchères et des premières levées, ils reconstituent trois choses :</p>
<ol>
<li><strong>Les points :</strong> combien de H ont le déclarant et le partenaire.</li>
<li><strong>La distribution :</strong> combien de cartes le déclarant a dans chaque couleur.</li>
<li><strong>Les levées :</strong> combien de levées le déclarant peut faire, et combien il en faut à la défense.</li>
</ol>

<h3>Compter les points</h3>
<p>Partez des enchères. Une ouverture de 1SA montre 15-17, un deux faible 5-10, un soutien limite 10-12. Quand le mort s’étale, ajoutez ses H aux vôtres et retranchez le tout de 40.</p>
<p>Exemple : Sud ouvre de 1SA et Nord dit 3SA. Le mort a 10 H et vous 9. Votre partenaire a 40 − 10 − 9 − (15 à 17) = 4 à 6 H. S’il a déjà montré le ♠K en faisant une levée avec, il a au plus 3 H de plus : il ne peut donc pas avoir un autre As. Tout autre As manquant est donc chez le déclarant, et inutile d’espérer que votre partenaire reprenne la main pour encaisser sa longue couleur.</p>
<p>Le même calcul fonctionne dans l’autre sens. Si le déclarant, qui a montré 15-17, a déjà fourni l’♠AQ, l’♥AK et le ♦K (16), il ne peut pas avoir aussi l’♣A (cela ferait 20). C’est votre partenaire qui l’a, et vous pouvez jouer trèfle sans crainte à travers le K du mort.</p>

<h3>Compter la distribution</h3>
<p>Chaque main a 13 cartes. Servez-vous d’abord des enchères : une ouverture de 1♥ promet cinq cœurs ou plus ; 1♠ suivi de 2♥ montre au moins cinq piques et quatre cœurs ; une ouverture de 1SA exclut un singleton. Ajoutez-y les signaux de parité de votre partenaire et le moment où un joueur défausse.</p>
<table>
<thead><tr><th>Source</th><th>Ce que vous apprenez</th></tr></thead>
<tbody>
<tr><td>L’ouverture et la redemande du déclarant</td><td>La longueur des couleurs nommées ; main régulière ou non</td></tr>
<tr><td>Le mort</td><td>13 cartes que vous voyez</td></tr>
<tr><td>Les signaux de parité du partenaire</td><td>La longueur du partenaire dans les couleurs du déclarant, donc aussi celle du déclarant</td></tr>
<tr><td>Un joueur qui défausse</td><td>Sa longueur exacte dans cette couleur</td></tr>
</tbody>
</table>
<p>Exemple : le déclarant a ouvert de 1♠ et redemandé 2♥ : il a donc au moins 5-4 en majeures. La parité de votre partenaire montre que le déclarant a deux carreaux. Cela fait onze cartes : le déclarant a donc au plus deux trèfles, et si les enchères suggèrent un 5-4-2-2, il en a exactement deux. Si le déclarant joue alors trèfle vers K Q x x au mort et que vous avez l’As, vous savez si laisser passer peut le couper du reste de la couleur.</p>
<div class="tip">Comptez la main le plus tôt possible, idéalement dès la troisième levée. Notez mentalement les quatre longueurs (par exemple « 5-4-2-2 ») et mettez-les à jour chaque fois qu’une carte vous apprend quelque chose.</div>

<h3>Compter les levées</h3>
<p>Demandez-vous : « Combien de levées le déclarant peut-il faire une fois en main ? » Si la réponse atteint déjà le contrat, vous devez prendre vos levées maintenant : contre-attaquez, encaissez, ou prenez tout de suite la levée de chute. Si le déclarant manque de levées, défendez passivement et laissez-le les perdre.</p>
<p>Exemple : contre 4♠, le mort a ♣A K Q J 5, et les enchères et le début du jeu montrent que le déclarant a une couleur de pique solide et l’♥A. Une fois les atouts tirés, le déclarant compte cinq piques, cinq trèfles et l’♥A : onze levées. Si vous avez des levées à cœur ou à carreau, il faut les prendre immédiatement, même au risque de jouer sous un Roi.</p>
<p>À l’inverse, après une séquence 1SA – 3SA avec un mort plat et sans longue couleur, le déclarant n’a peut-être que sept ou huit levées. La défense doit alors éviter d’ouvrir de nouvelles couleurs et attendre : le déclarant devra rendre des levées.</p>

<h3>Tout mettre ensemble</h3>
<p>Compter n’est pas un calcul unique, c’est une habitude. À chaque levée, demandez-vous ce que la carte jouée vous apprend sur les quatre mains. À mesure que le tableau s’éclaircit, la bonne défense devient souvent évidente, et quand elle ne l’est pas, le comptage vous dit au moins quelles répartitions sont nécessaires pour faire chuter le contrat. Jouez pour ces répartitions.</p>
<div class="warn">Ne comptez pas seulement les levées de votre camp. La question est toujours de savoir si le déclarant peut gagner son contrat, et comment votre camp peut l’en empêcher.</div>
`,
    keyPoints: [
      'Comptez les points : à partir des enchères, du mort et de votre main, déduisez les H de votre partenaire.',
      'Comptez la distribution : enchères, mort, signaux de parité du partenaire et défausses font 13.',
      'Comptez les levées du déclarant : s’il en a assez, prenez vos levées maintenant ; sinon, défendez passivement.',
      'Quand le déclarant a montré une zone de points, les honneurs déjà joués limitent ce qu’il peut encore détenir.',
      'Supposez la répartition qui permet de faire chuter le contrat et défendez en conséquence.',
    ],
    quiz: [
      {
        q: 'Sud a ouvert de 1SA (15-17) et Nord a dit 3SA. Le mort a 10 H et vous 9. Combien de H a votre partenaire ?',
        options: ['0-2', '4-6', '7-9', '10-12'],
        answer: 1,
        explain: '40 − 10 − 9 = 21 pour le déclarant et votre partenaire ensemble. Le déclarant a 15-17 : votre partenaire a donc 4-6.',
      },
      {
        q: 'Le déclarant a ouvert de 1SA (15-17) et a déjà montré l’♠AQ, l’♥AK et le ♦K. Qui a l’♣A ?',
        options: ['Le déclarant', 'Votre partenaire', 'Impossible de le savoir', 'Le mort'],
        answer: 1,
        explain: 'Le déclarant a montré 16 H. L’♣A le porterait à 20, hors de sa zone : c’est donc votre partenaire qui l’a.',
      },
      {
        q: 'Le déclarant a ouvert de 1♠ et redemandé 2♥. La parité de votre partenaire montre que le déclarant a deux carreaux. Combien de trèfles le déclarant peut-il avoir au plus ?',
        options: ['Un', 'Deux', 'Trois', 'Quatre'],
        answer: 1,
        explain: 'Au moins cinq piques et quatre cœurs, plus deux carreaux, cela fait onze : le déclarant a au plus deux trèfles.',
      },
      {
        q: 'Contre 4♠, vous comptez onze levées pour le déclarant dès qu’il reprendra la main. Que doit faire la défense ?',
        options: ['Défendre passivement', 'Prendre ou affranchir immédiatement ses levées', 'Jouer atout', 'Attendre que le déclarant se trompe'],
        answer: 1,
        explain: 'Si le déclarant a les levées nécessaires, une défense passive le laisse simplement les encaisser. Votre seule chance est de prendre vos levées maintenant.',
      },
      {
        q: 'Contre 3SA, le mort est plat et le déclarant semble n’avoir que sept ou huit levées. Quel type de défense est en général le meilleur ?',
        options: ['Passive : éviter d’ouvrir de nouvelles couleurs', 'Attaquer chaque couleur à tour de rôle', 'Encaisser tous vos As immédiatement', 'Entamer sous vos Rois'],
        answer: 0,
        explain: 'Le déclarant manque de levées. Ouvrir de nouvelles couleurs risque de lui en offrir une ; des sorties sûres l’obligent à trouver ses levées tout seul.',
      },
    ],
  },

  {
    id: 'penalty-doubles-and-sacrifices',
    title: 'Contres punitifs et sacrifices',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Quand contrer les adversaires pour punir, et quand monter dans un contrat que vous comptez chuter parce qu’il coûte moins que le leur.',
    body: `
<h3>Les contres punitifs</h3>
<p>Beaucoup de contres à bas palier sont d’appel : les contres punitifs naissent donc de quelques situations claires :</p>
<ul>
<li><strong>Après une séquence de contre Spoutnik :</strong> le répondant passe avec une forte teneur dans la couleur de l’intervenant, et l’ouvreur réveille par un contre que le répondant transforme (voir la leçon « Le contre Spoutnik »).</li>
<li><strong>Après un surcontre de votre camp</strong> (1♥ – X – XX), vous avez montré la majorité des points, et les contres sur les enchères de sauvetage adverses sont punitifs.</li>
<li><strong>Quand les adversaires se sont avancés</strong> jusqu’à une manche ou une partielle élevée sur un misfit ou dans une séquence compétitive, et que vous avez des levées d’atout.</li>
<li><strong>Quand vous avez déjà décrit votre main</strong> et que votre partenaire a des valeurs : un contre de l’un ou de l’autre dit alors « nous pouvons faire chuter ce contrat ».</li>
</ul>
<h4>Repères</h4>
<ul>
<li>Les levées d’atout sont la meilleure raison de contrer. Les honneurs dans les couleurs annexes peuvent être coupés ou pris en impasse.</li>
<li>Ne contrez pas une manche demandée librement sur vos seuls honneurs. Les adversaires savent ce qui leur manque, et votre contre indique au déclarant où sont les honneurs.</li>
<li>Pensez à ce qui se passe si le contrat gagne. 2♥ contré réussi marque 470 ou 670 : une partielle est devenue une manche.</li>
<li>Pensez à leurs possibilités de fuite. Contrer 1♠ quand ils peuvent facilement se réfugier dans un meilleur fit rapporte peu.</li>
</ul>

<h3>Combien coûte une chute contrée ?</h3>
<table>
<thead><tr><th>Chute</th><th>Non vuln. contré</th><th>Vuln. contré</th></tr></thead>
<tbody>
<tr><td>1</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>300</td><td>500</td></tr>
<tr><td>3</td><td>500</td><td>800</td></tr>
<tr><td>4</td><td>800</td><td>1100</td></tr>
</tbody>
</table>

<h3>Les sacrifices</h3>
<p>Un <strong>sacrifice</strong> est un contrat que vous comptez chuter, parce que la pénalité coûtera moins que ce que marquerait le contrat adverse. Comparez les chiffres :</p>
<table>
<thead><tr><th>Leur manche</th><th>Valeur</th><th>Vous pouvez vous permettre (contré), non vuln.</th><th>Vous pouvez vous permettre (contré), vuln.</th></tr></thead>
<tbody>
<tr><td>Non vulnérable</td><td>420</td><td>2 de chute (300)</td><td>1 de chute (200)</td></tr>
<tr><td>Vulnérable</td><td>620</td><td>3 de chute (500)</td><td>2 de chute (500)</td></tr>
</tbody>
</table>
<p>Les sacrifices sont donc les moins chers à <strong>vulnérabilité favorable</strong> : vous non vulnérables, eux vulnérables.</p>
<div class="auction" data-calls="1S 2H 4S" data-dealer="W"></div>
<div class="hand" data-cards="S:5 H:K9743 D:Q862 C:J74" data-label="Vulnérabilité favorable : dites 5♥"></div>
<p>Votre partenaire est intervenu à 2♥ et Est a sauté à 4♠. Vous avez cinq cartes de soutien à cœur, un singleton pique et peu de défense : 4♠ va presque sûrement gagner et marquer 620. 5♥ contré chutera probablement de deux ou trois levées : 300 ou 500. Dites 5♥ tout de suite, avant que les adversaires puissent échanger davantage d’informations.</p>

<h3>Quand ne pas sacrifier</h3>
<ul>
<li><strong>Quand leur contrat peut chuter.</strong> Un sacrifice contre un contrat qui aurait chuté est un <em>faux sacrifice</em> : vous transformez une marque positive en marque négative. Si vous avez des levées de défense, défendez.</li>
<li><strong>Quand le coût est trop élevé.</strong> Vulnérable contre non vulnérables, il n’existe presque jamais de sacrifice rentable contre une manche.</li>
<li><strong>Quand vous avez déjà décrit votre main et que votre partenaire est mieux placé pour décider</strong> : c’est le joueur qui a le plus d’informations qui décide. Ne passez pas outre la décision de défendre de votre partenaire. Si votre partenaire a fait un passe forcing, suivez les accords de la paire.</li>
<li><strong>Quand les adversaires pourraient continuer.</strong> Livrés à eux-mêmes, ils iront peut-être jusqu’à un contrat au palier de 5 qui chute ; un sacrifice, au contraire, peut les pousser vers un chelem qui gagne.</li>
</ul>
<div class="tip">« Le palier de 5 appartient aux adversaires » : quand ils disent cinq sur votre manche au palier de 4, défendre (souvent en contrant) est en général juste. Monter à six pour sacrifier est rarement rentable.</div>
<div class="warn">Décidez tôt. Un sacrifice annoncé vite, avant que les adversaires aient échangé des informations, est bien plus efficace qu’un sacrifice fait après qu’ils ont découvert exactement où jouer.</div>
`,
    keyPoints: [
      'Les contres punitifs fonctionnent le mieux avec des levées d’atout, après que votre camp a montré la majorité des points.',
      'Ne contrez pas une manche demandée librement sur vos seuls honneurs annexes, et méfiez-vous de transformer une partielle en manche par un contre.',
      'Un sacrifice est payant quand la pénalité est inférieure à la valeur de leur contrat.',
      'Contre une manche vulnérable (620), non vulnérable vous pouvez chuter de trois contré (500) ; contre une manche non vulnérable (420), de deux (300).',
      'Évitez les faux sacrifices : si vous avez des levées de défense, défendez.',
    ],
    quiz: [
      {
        q: 'Personne n’est vulnérable. Les adversaires peuvent gagner 4♠ (420). De combien de levées pouvez-vous chuter contré dans un sacrifice ?',
        options: ['Une', 'Deux', 'Trois', 'Quatre'],
        answer: 1,
        explain: 'Deux de chute contré non vulnérable font 300, moins que 420. Trois de chute font 500, plus que leur manche.',
      },
      {
        q: 'À vulnérabilité favorable, les adversaires peuvent gagner 4♠ vulnérable (620). De combien pouvez-vous chuter contré ?',
        options: ['Deux', 'Trois', 'Quatre', 'Cinq'],
        answer: 1,
        explain: 'Trois de chute contré non vulnérable coûtent 500, moins que 620. Quatre de chute coûtent 800.',
      },
      {
        q: 'Qu’est-ce qu’un faux sacrifice ?',
        options: ['Un sacrifice qui coûte exactement la valeur de leur manche', 'Un sacrifice contre un contrat qui aurait chuté', 'Un sacrifice au palier de 6', 'Un sacrifice que les adversaires oublient de contrer'],
        answer: 1,
        explain: 'Si leur contrat allait chuter, votre sacrifice transforme une marque positive en marque négative. Des valeurs défensives sont une raison de ne pas sacrifier.',
      },
      {
        q: 'Les adversaires enchérissent 1♥ – 3♥ – 4♥ sans intervention. Vous avez 12 H mais seulement de petits cœurs. Faut-il contrer ?',
        options: ['Oui : vous avez une main d’ouverture', 'Non : des honneurs hors de l’atout justifient rarement de contrer une manche demandée librement', 'Oui, pour demander une entame', 'Seulement vulnérable'],
        answer: 1,
        explain: 'Ils savent qu’il leur manque des honneurs. Votre contre rapporte peu s’ils chutent d’une levée, coûte cher s’ils gagnent, et aide le déclarant à placer les honneurs manquants.',
      },
      {
        q: 'Pourquoi contrer une partielle à bas palier peut-il coûter cher ?',
        options: ['Ça ne coûte jamais cher', 'Parce que si elle gagne, la valeur des levées contrées peut atteindre la manche : 2♥ contré marque 470 ou 670', 'Parce que les adversaires reçoivent une prime quand ils sont contrés', 'Parce qu’il faut entamer atout'],
        answer: 1,
        explain: 'Contré, 2♥ a une valeur des levées de 120, ce qui compte comme une manche. Soyez sûr de faire chuter une partielle avant de la contrer.',
      },
    ],
  },

  {
    id: 'slam-controls-and-cue-bids',
    title: 'Contrôles et cue-bids : quand ne pas utiliser le Blackwood',
    topic: 'Slam bidding',
    level: 'Advanced',
    summary: 'Pourquoi compter les As ne suffit pas pour le chelem, et comment les cue-bids de contrôle vérifient que chaque couleur est tenue.',
    body: `
<h3>Les contrôles</h3>
<p>Pour gagner un chelem, il vous faut assez de levées, mais vous devez aussi empêcher les adversaires de faire deux levées avant que vous ayez démarré. Une couleur est <strong>contrôlée</strong> si les adversaires ne peuvent pas y encaisser deux levées rapides :</p>
<ul>
<li><strong>Contrôle de premier tour :</strong> l’As ou une chicane (à l’atout).</li>
<li><strong>Contrôle de deuxième tour :</strong> le Roi ou un singleton.</li>
</ul>
<p>Pour un petit chelem, il vous faut au moins un contrôle de deuxième tour dans chaque couleur annexe, et pas plus d’une perdante de premier tour au total. Pour un grand chelem, il faut un contrôle de premier tour partout et aucune perdante.</p>
<p>Certains joueurs comptent les contrôles avec A = 2 et K = 1 (12 dans le jeu). Les mains riches en As et en Rois gagnent des chelems que 33 points faits de Dames et de Valets ne gagnent pas.</p>

<h3>Là où le Blackwood échoue</h3>
<div class="deal" data-n="S:K5 H:AKJ84 D:83 C:AJ104" data-s="S:AQ63 H:Q1052 D:72 C:KQ5" data-caption="Nord ouvre de 1♥ et Sud soutient par 2SA Jacoby."></div>
<p>Nord a 16 H et Sud 13, avec un fit de neuf cartes à cœur : un essai de chelem est raisonnable. Si Sud utilise le Blackwood, Nord montre deux As, Sud a le troisième, et Sud dit 6♥. La défense encaisse l’♦A et le ♦K. Le Blackwood a dit que trois As étaient présents, mais il ne pouvait pas dire à Sud qu’aucune des deux mains ne contrôlait les carreaux.</p>
<p>N’employez pas le Blackwood quand :</p>
<ul>
<li>vous avez deux petites cartes (ou plus) dans une couleur que personne n’a nommée, et vous ne savez pas si votre partenaire la contrôle ;</li>
<li>vous avez une chicane : l’As du partenaire dans votre chicane est perdu, mais le Blackwood le compte ;</li>
<li>la réponse risque de vous emmener trop haut, par exemple avec trèfle comme atout, où une réponse de 5♥ ne vous permet plus de vous arrêter à 5♣.</li>
</ul>

<h3>Les cue-bids (enchères de contrôle)</h3>
<p>Une fois l’atout fixé dans une séquence forcing, une couleur nouvelle au palier de 4 n’est pas une vraie couleur : elle montre un <strong>contrôle</strong> dans cette couleur et un intérêt pour le chelem. Le partenaire répond en montrant à son tour son contrôle le moins cher, ou conclut dans la couleur d’atout. Dans le style moderne courant, un cue-bid montre un contrôle de premier ou de deuxième tour (As, Roi, chicane ou singleton), et l’on nomme d’abord le moins cher : <strong>sauter une couleur nie un contrôle dans celle-ci</strong>.</p>
<div class="auction" data-calls="1H P 2NT P 3NT P 4C P 4H P P P" data-dealer="N"></div>
<p>Après le 2SA Jacoby, le 3SA de Nord montre une main moyenne (15-17) sans courte, la redemande Jacoby standard. Sud dit 4♣ : un contrôle à trèfle et un intérêt pour le chelem. Nord n’a pas de contrôle à carreau : au lieu de montrer son contrôle à pique, il conclut à 4♥, en sautant 4♦, ce qui nie un contrôle à carreau. Sud n’a pas non plus de contrôle à carreau : il passe. Les deux mains ont fait leur travail, et la paire s’arrête sans risque à la manche.</p>
<p>Si Nord avait eu le ♦K au lieu du ♠K, il aurait fait un cue-bid à 4♦ sur 4♣. Toutes les couleurs auraient alors été contrôlées, Sud aurait pu poursuivre vers le chelem, et le Blackwood aurait pu servir sans risque à vérifier les As à la fin.</p>
<p>Les robots enchérissent ainsi une fois une majeure fixée dans une séquence forcing de manche, après un soutien 2SA Jacoby ou un splinter. Ils utilisent aussi un contrôle comme essai de chelem dans une séquence naturelle : quand le partenaire vient de nommer une majeure qu’ils peuvent soutenir à la manche, et que le chelem est probable si le partenaire a un peu plus que ce qu’il a montré, une couleur nouvelle au palier de 4 (que leur camp n’a pas nommée) fixe la majeure du partenaire et montre un contrôle. Leurs cue-bids montrent des contrôles de premier ou de deuxième tour, le moins cher d’abord, en dessous de la manche dans la majeure fixée.</p>

<h3>Combiner les outils</h3>
<ol>
<li>Fixez l’atout dans une séquence forcing.</li>
<li>Faites des cue-bids pour vérifier que chaque couleur annexe est contrôlée.</li>
<li>Quand toutes les couleurs sont tenues, utilisez le Blackwood (les robots jouent le Blackwood à 5 clés) pour vérifier qu’il ne vous manque pas deux As, ou un As et le Roi d’atout.</li>
<li>Demandez le chelem, ou arrêtez-vous.</li>
</ol>
<div class="tip">Avant de dire 4SA, demandez-vous : « Si mon partenaire montre le bon nombre d’As, saurai-je quoi dire ? » Si la réponse est non, faites plutôt un cue-bid.</div>
<div class="warn">Assurez-vous que votre paire est d’accord sur les cue-bids avant de vous y essayer. Un cue-bid que votre partenaire prend pour une couleur naturelle peut aboutir à un contrat très étrange.</div>
`,
    keyPoints: [
      'Un chelem demande que chaque couleur annexe soit contrôlée : un As ou une chicane (premier tour), ou un Roi ou un singleton (deuxième tour).',
      'Le Blackwood compte les As mais ne dit pas lesquels, ni si une couleur annexe a deux perdantes rapides.',
      'N’employez pas le Blackwood avec une chicane, avec deux petites cartes dans une couleur non nommée, ou quand la réponse risque de vous emmener trop haut.',
      'Les cue-bids montrent les contrôles, le moins cher d’abord ; sauter une couleur nie un contrôle dans celle-ci.',
      'Faites d’abord des cue-bids pour vérifier chaque couleur, puis le Blackwood pour vérifier les As.',
    ],
    quiz: [
      {
        q: 'Quelles teneurs donnent un contrôle de deuxième tour dans un contrat à l’atout ?',
        options: ['As ou chicane', 'Roi ou singleton', 'Dame ou doubleton', 'Deux honneurs quelconques'],
        answer: 1,
        explain: 'Avec le Roi ou un singleton, les adversaires peuvent faire au plus une levée rapide dans la couleur. L’As ou une chicane est un contrôle de premier tour.',
      },
      {
        q: 'Dans la donne ci-dessus, pourquoi le Blackwood mène-t-il à un mauvais chelem ?',
        options: ['Parce qu’il manque deux As', 'Parce qu’aucune des deux mains ne contrôle les carreaux, ce que le Blackwood ne peut pas révéler', 'Parce que les cœurs sont mal répartis', 'Parce que Nord a trop peu de points'],
        answer: 1,
        explain: 'Il ne manque qu’un As, mais c’est l’♦A, et le ♦K manque aussi. Les adversaires encaissent deux levées à carreau d’emblée.',
      },
      {
        q: 'L’atout cœur est fixé dans une séquence forcing. Votre partenaire fait un cue-bid à 4♣ et vous dites 4♥, en sautant 4♦. Qu’avez-vous dit à votre partenaire ?',
        options: ['J’ai un contrôle à carreau', 'Je n’ai pas de contrôle à carreau', 'J’ai l’♠A', 'Je veux jouer à carreau'],
        answer: 1,
        explain: 'Les cue-bids se font du moins cher au plus cher. En sautant 4♦, vous niez un contrôle à carreau : votre partenaire sait qu’il doit s’arrêter s’il ne contrôle pas lui-même les carreaux.',
      },
      {
        q: 'Vous avez une chicane à trèfle et voulez explorer un chelem à pique. Pourquoi le Blackwood est-il un mauvais choix ?',
        options: ['Parce que les chicanes comptent comme des As', 'Parce que l’♣A de votre partenaire serait perdu, et pourtant le Blackwood le compterait', 'Parce que 4SA serait quantitatif', 'Parce qu’il faut 37 points'],
        answer: 1,
        explain: 'Le Blackwood vous dit combien d’As a votre partenaire, pas lesquels. L’As face à votre chicane n’apporte rien.',
      },
      {
        q: 'Quel est l’ordre raisonnable des outils pour un chelem à la couleur ?',
        options: ['Le Blackwood d’abord, puis les cue-bids', 'Fixer l’atout, faire des cue-bids de contrôle, puis le Blackwood', 'Demander le chelem directement avec 33 points', 'Le Gerber, puis le Blackwood'],
        answer: 1,
        explain: 'Les cue-bids révèlent si chaque couleur est tenue ; le Blackwood vérifie ensuite qu’il ne manque pas deux As à la paire.',
      },
    ],
  },

  {
    id: 'squeezes-and-endplays',
    title: 'Initiation aux squeezes et aux mises en main',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Deux techniques avancées qui créent une levée à partir de rien, en obligeant un défenseur à défausser une garde ou à jouer dans votre force.',
    body: `
<h3>Quand impasses et répartitions ne suffisent pas</h3>
<p>Certaines levées ne se gagnent ni par la force ni par l’impasse. Elles se gagnent parce qu’un défenseur est <em>obligé</em> de les céder, soit parce qu’il doit défausser une carte dont il a besoin (un <strong>squeeze</strong>), soit parce qu’il doit jouer alors que chaque carte jouée coûte une levée (une <strong>mise en main</strong>). Les deux se produisent en général en fin de donne, et les deux demandent un comptage minutieux.</p>

<h3>Le squeeze simple</h3>
<p>Un squeeze fonctionne quand un seul défenseur garde deux couleurs. Quand vous jouez votre dernière levée maîtresse dans une troisième couleur, ce défenseur doit lâcher l’une des gardes, et la couleur abandonnée vous donne une levée supplémentaire.</p>
<div class="deal" data-n="S:- H:AJ D:- C:3" data-w="S:- H:KQ D:Q C:-" data-e="S:- H:- D:98 C:7" data-s="S:A H:2 D:J C:-" data-caption="Sans-atout. Sud a la main ; il lui faut les trois levées."></div>
<p>Ouest garde les cœurs (le K Q face à l’A J du mort) et les carreaux (la Q face à votre J). Sud joue l’♠A, la <strong>carte d’expulsion</strong>, et Ouest doit défausser avant le mort :</p>
<ul>
<li>Si Ouest jette la ♦Q, votre ♦J est maître.</li>
<li>Si Ouest jette un cœur, le mort défausse le ♣3 ; vous jouez le ♥2 vers l’As, ce qui fait tomber l’honneur restant d’Ouest, et le ♥J du mort fait la dernière levée.</li>
</ul>
<p>Sans le squeeze, vous n’auriez fait que deux levées.</p>
<h4>Ce qu’il faut pour un squeeze</h4>
<ul>
<li><strong>Des menaces :</strong> des cartes qui deviendront maîtresses si le défenseur lâche sa garde (ici le ♥J du mort et votre ♦J).</li>
<li><strong>Un défenseur occupé dans les deux couleurs.</strong> Si son partenaire pouvait garder l’une des couleurs, il n’y aurait pas de squeeze.</li>
<li><strong>Des communications</strong> pour atteindre les menaces après la défausse (ici l’♥A, avec un cœur dans votre main pour y aller).</li>
<li><strong>Le bon compte :</strong> au moment où vous jouez la carte d’expulsion, vous devez pouvoir faire toutes les levées restantes moins une. Perdre <em>tôt</em> les levées que vous devez perdre, pour qu’il en soit ainsi, s’appelle <strong>rectifier le compte</strong>. Signe typique : vous voyez qu’un squeeze est possible mais vous avez deux perdantes ; concédez tôt une levée, pour qu’il n’en reste qu’une.</li>
</ul>
<div class="tip">Vous n’êtes pas toujours obligé de voir le squeeze à l’avance. Dérouler une longue couleur jusqu’au bout, en gardant vos cartes menaces, donne aux défenseurs de nombreuses occasions de mal défausser, et parfois ils ne peuvent tout simplement pas l’éviter.</div>

<h3>La mise en main</h3>
<p>Une mise en main donne la main à un défenseur au moment où toute carte qu’il joue vous rapporte une levée : il doit jouer dans votre fourchette, ou vous donner une coupe et défausse.</p>
<div class="deal" data-n="S:- H:3 D:- C:AQ" data-w="S:- H:- D:J109 C:-" data-e="S:- H:A D:- C:K8" data-s="S:- H:6 D:- C:42" data-caption="Sans-atout. Sud a la main ; Est a le ♣K."></div>
<p>Si vous jouez trèfle et faites l’impasse à la Dame, Est prend du Roi et encaisse l’♥A : vous faites une levée. Jouez plutôt le ♥6. Est prend de l’As et n’a plus que des trèfles : il doit jouer sous son Roi vers l’A Q du mort, et vous faites deux levées.</p>
<h4>Élimination et mise en main à l’atout</h4>
<p>Dans un contrat à l’atout, la même idée s’appelle une élimination. Tirez les atouts mais gardez-en au moins un dans chaque main. <strong>Éliminez</strong> les couleurs annexes dans lesquelles le défenseur pourrait sortir sans danger, en les encaissant ou en les coupant. Puis remettez le défenseur en main dans la couleur qui vous reste. Il doit alors soit jouer dans votre fourchette, soit jouer une couleur où vous êtes chicane dans les deux mains, ce qui vous permet de couper d’une main et de défausser une perdante de l’autre.</p>
<p>Les jeux d’élimination transforment souvent une impasse à 50 % en certitude : avec A J x face à K 10 x et la Dame manquante, vous n’avez jamais à deviner si un défenseur doit attaquer la couleur pour vous.</p>
<div class="warn">Une mise en main échoue si le défenseur a encore une carte de sortie sûre. Avant de le remettre en main, vérifiez que chaque couleur dans laquelle il pourrait sortir a été éliminée de sa main ou des deux vôtres.</div>
`,
    keyPoints: [
      'Un squeeze oblige un défenseur qui garde deux couleurs à défausser l’une de ses gardes.',
      'Un squeeze demande des menaces, un défenseur occupé, des communications et le compte rectifié (toutes les levées restantes moins une).',
      'Une mise en main donne la main à un défenseur quand chaque carte qu’il joue coûte une levée à son camp.',
      'Élimination et mise en main : tirez les atouts (en en gardant dans les deux mains), éliminez les couleurs annexes, puis remettez le défenseur en main.',
      'Dérouler une longue couleur en gardant vos menaces donne aux défenseurs l’occasion de se tromper.',
    ],
    quiz: [
      {
        q: 'Quelle est la condition essentielle d’un squeeze simple ?',
        options: ['Les deux défenseurs sont chicane dans une couleur', 'Un seul défenseur garde deux couleurs', 'Vous avez tous les As', 'Les atouts sont répartis 3-2'],
        answer: 1,
        explain: 'Si un défenseur doit garder deux couleurs, il ne peut pas garder les deux quand il est obligé de défausser. Si son partenaire peut garder l’une d’elles, il n’y a pas de squeeze.',
      },
      {
        q: 'Que signifie « rectifier le compte » ?',
        options: ['Compter les points adverses', 'Perdre tôt les levées que vous devez perdre, pour pouvoir faire toutes les levées restantes moins une quand vous jouez la carte d’expulsion', 'Tirer le dernier atout', 'Compter deux fois vos levées maîtresses'],
        answer: 1,
        explain: 'Un squeeze exige que le défenseur n’ait plus de carte de réserve. Si vous avez encore deux perdantes, le défenseur a une carte libre à jeter ; concéder tôt une levée la lui enlève.',
      },
      {
        q: 'Dans la position de squeeze ci-dessus, que se passe-t-il si Ouest défausse la ♦Q ?',
        options: ['Le ♦J de Sud devient maître', 'Le ♥J du mort devient maître', 'Est fait une levée à carreau', 'Rien ne change'],
        answer: 0,
        explain: 'Ouest était le seul à garder contre le ♦J. Une fois la Dame partie, votre Valet est le plus haut carreau restant.',
      },
      {
        q: 'Dans la position de mise en main ci-dessus, pourquoi Est doit-il vous donner une levée ?',
        options: ['Est doit fournir à cœur', 'Après avoir pris de l’♥A, Est n’a plus que des trèfles et doit jouer sous son K vers l’A Q', 'Est est squeezé', 'Est doit couper'],
        answer: 1,
        explain: 'Remis en main par l’♥A, Est n’a pas de sortie sûre. Quel que soit le trèfle qu’il joue, la Dame du mort fait la levée, et l’As fait ensuite tomber le Roi.',
      },
      {
        q: 'Dans une élimination suivie d’une mise en main à l’atout, que devez-vous garder avant de remettre un défenseur en main ?',
        options: ['Un atout dans chacune de vos mains', 'Tous vos As', 'Une remontée chez le partenaire du défenseur', 'Un atout perdant'],
        answer: 0,
        explain: 'Avec des atouts dans les deux mains, un défenseur qui joue une couleur où vous êtes chicane vous donne une coupe et défausse. Il ne lui reste alors qu’à jouer dans votre fourchette.',
      },
    ],
  },
];
