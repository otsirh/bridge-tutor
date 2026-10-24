// Leçons sur les conventions facultatives : Blackwood à 5 clés, splinters et
// Drury inversé, nouvelle mineure forcing et quatrième couleur forcing, Texas
// au palier de 4. Chaque séquence d’exemple est celle que les robots enchérissent
// avec ces mains.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_4: Lesson[] = [
  {
    id: 'roman-key-card-blackwood',
    title: 'Le Blackwood à 5 clés',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Le 4SA moderne : demander les quatre As et le Roi d’atout, puis la Dame d’atout et les Rois hors atout, pour demander les chelems qui gagnent et s’arrêter quand il manque deux clés.',
    body: `
<h3>Cinq clés</h3>
<p>Le Blackwood simple compte les As, mais le Roi et la Dame d’atout comptent tout autant : un chelem auquel il manque un As et le Roi d’atout est aussi voué à l’échec qu’un chelem auquel il manque deux As. Le <strong>Blackwood à 5 clés</strong> traite le Roi d’atout comme un cinquième As. Une fois une couleur fixée, 4SA demande les <strong>cinq clés</strong> : les quatre As et le Roi d’atout. Les réponses renseignent aussi sur la Dame d’atout.</p>
<p>L’atout est la couleur fixée ; si aucune couleur n’a été fixée, c’est la dernière couleur nommée naturellement par votre camp. Les robots de cette application jouent par défaut le Blackwood à 5 clés (vous pouvez revenir au Blackwood simple dans les réglages du système).</p>

<h3>Les réponses (1430)</h3>
<table>
<thead><tr><th>Réponse</th><th>Clés</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 ou 4</td></tr>
<tr><td>5♦</td><td>0 ou 3</td></tr>
<tr><td>5♥</td><td>2, sans la Dame d’atout</td></tr>
<tr><td>5♠</td><td>2, avec la Dame d’atout</td></tr>
</tbody>
</table>
<p>Le nom « 1430 » vient des deux premières réponses : 5♣ montre une ou quatre clés, 5♦ zéro ou trois. Celui qui interroge peut presque toujours trancher. Comptez vos propres clés, et souvenez-vous de ce qu’a montré votre partenaire : un partenaire qui a ouvert et fait un soutien fort ne peut pas avoir zéro clé, car il n’y a pas assez d’autres honneurs hors de votre main pour faire ses points.</p>
<div class="hand" data-cards="S:KJ853 H:A7 D:K94 C:Q62" data-label="Atout pique fixé ; le partenaire dit 4SA : répondez 5♥"></div>
<p>Deux clés, l’♥A et le ♠K, mais pas la ♠Q : 5♥.</p>

<h3>Après la réponse</h3>
<ul>
<li><strong>Il manque deux clés</strong>, ou une clé et la Dame d’atout : arrêtez-vous à cinq dans la couleur d’atout. Votre partenaire doit passer.</li>
<li><strong>Il en manque une</strong> et la Dame est chez vous : demandez le petit chelem.</li>
<li><strong>Il n’en manque aucune</strong> : demandez le petit chelem, ou cherchez le grand.</li>
</ul>
<p>Celui qui interroge est le capitaine. Une fois que le partenaire a répondu, c’est lui qui décide, et le partenaire passe sur l’arrêt ou sur le chelem.</p>

<h3>La demande de la Dame d’atout</h3>
<p>Après 5♣ ou 5♦, la Dame d’atout reste inconnue. Si elle compte, celui qui interroge dit le <strong>palier suivant</strong>, en sautant la couleur d’atout : 5♦ sur 5♣, 5♥ sur 5♦. Le partenaire répond :</p>
<ul>
<li>sans la Dame : il revient dans la couleur d’atout au palier le plus bas ;</li>
<li>avec la Dame : il dit six dans la couleur d’atout (ou 5SA, quand six à l’atout serait la réponse « sans la Dame »).</li>
</ul>
<div class="deal" data-n="S:A74 H:AK D:AK94 C:AJ102" data-s="S:KJ1053 H:Q43 D:J3 C:Q83" data-caption="Nord ouvre de 2♣ et Sud montre un beau pique cinquième."></div>
<div class="auction" data-calls="2C P 2S P 4NT P 5C P 5D P 5S P 6S P P P" data-dealer="N"></div>
<p>Nord a les quatre As : le 5♣ de Sud montre donc une clé, le ♠K. Toutes les clés sont là, mais pas la ♠Q, pour autant que Nord le sache : Nord la demande par 5♦. Le 5♠ de Sud nie la Dame, et Nord se contente de 6♠ : un grand chelem sans la Dame d’atout demanderait une répartition favorable.</p>

<h3>La demande des Rois</h3>
<p>Quand les cinq clés et la Dame d’atout sont là et qu’un grand chelem est possible, celui qui interroge dit <strong>5SA</strong> pour demander les Rois hors atout (le Roi d’atout a déjà été compté) : 6♣ = aucun, 6♦ = un, 6♥ = deux, 6♠ = trois. 5SA promet que rien ne manque : le partenaire peut donc demander le grand chelem avec des levées supplémentaires.</p>

<h3>Un exemple complet</h3>
<div class="deal" data-n="S:A54 H:AKQ3 D:A4 C:Q976" data-s="S:K9 H:J1095 D:KQJ106 C:AK"></div>
<div class="auction" data-calls="1C P 1H P 4H P 4NT P 5C P 5D P 6H P P P" data-dealer="N"></div>
<p>Nord saute à 4♥ avec quatre cartes de soutien et 19+ points. Sud a 17 H et une source de levées à carreau : le chelem est probable. 5♣ montre une ou quatre clés. Sud n’a que l’♣A, et le soutien fort de Nord est impossible sans As : c’est donc quatre. Il reste une question, la ♥Q, et 5♦ la pose. Nord l’a et dit 6♥, et Sud passe : rien ne manque, mais il n’y a pas de treizième levée sur laquelle compter.</p>
<div class="tip">Avant de dire 4SA, vérifiez que la réponse ne peut pas vous faire dépasser le contrat que vous visez. Avec trèfle ou carreau comme atout, une réponse de 5♥ ou 5♠ ne vous permet plus de vous arrêter au palier de 5 : vous devez savoir qu’il ne peut pas manquer deux clés.</div>
<div class="warn">Le Blackwood à 5 clés exige un atout fixé. Après un sans-atout naturel du partenaire, 4SA est quantitatif. Avec une chicane, le Blackwood ne peut pas vous dire si les clés de votre partenaire sont utiles : faites plutôt des cue-bids.</div>
`,
    keyPoints: [
      'Le Blackwood à 5 clés demande cinq clés : les quatre As et le Roi d’atout.',
      'Réponses (1430) : 5♣ 1 ou 4, 5♦ 0 ou 3, 5♥ 2 sans la Dame d’atout, 5♠ 2 avec.',
      'Il manque deux clés (ou une et la Dame) : arrêtez-vous à cinq. Il en manque une : demandez le petit chelem.',
      'Après 5♣ ou 5♦, le palier suivant demande la Dame d’atout ; sans elle, le partenaire revient dans la couleur d’atout.',
      '5SA demande ensuite les Rois hors atout et promet toutes les clés et la Dame d’atout.',
    ],
    quiz: [
      {
        q: 'L’atout cœur est fixé et votre partenaire dit 4SA (Blackwood à 5 clés). Vous avez ♠A72 ♥K965 ♦Q84 ♣J53. Que répondez-vous ?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 2,
        explain: 'Deux clés, l’♠A et le ♥K, sans la ♥Q : 5♥.',
      },
      {
        q: 'Que montre une réponse de 5♦ au Blackwood à 5 clés ?',
        options: ['Une clé', 'Zéro ou trois clés', 'Deux clés et la Dame d’atout', 'Des carreaux'],
        answer: 1,
        explain: 'Dans les réponses 1430, 5♣ montre une ou quatre clés, 5♦ zéro ou trois ; celui qui interroge tranche d’après les enchères.',
      },
      {
        q: 'L’atout pique est fixé. Vous avez interrogé par 4SA avec deux clés et la ♠Q, et votre partenaire répond 5♥ (deux sans la Dame). Et maintenant ?',
        options: ['Passe', '6♠ : il manque une clé, mais la Dame est chez vous', '5♠ : il manque deux clés', '5SA'],
        answer: 1,
        explain: 'Deux plus deux font quatre clés : il en manque une, et vous avez vous-même la Dame d’atout. Demandez le petit chelem.',
      },
      {
        q: 'L’atout pique est fixé. Le 5♣ de votre partenaire montre une clé et vous avez les quatre autres, mais pas la ♠Q. Quelle enchère demande la Dame d’atout ?',
        options: ['5♦', '5♥', '5♠', '5SA'],
        answer: 0,
        explain: 'La demande de la Dame est le palier suivant au-dessus de la réponse, hors couleur d’atout : 5♦ sur 5♣.',
      },
      {
        q: 'Toutes les clés et la Dame d’atout sont chez vous et vous envisagez un grand chelem. Que demande 5SA ?',
        options: ['Encore les As', 'Combien de Rois hors atout a votre partenaire', 'La Dame d’atout', 'Rien : c’est pour jouer'],
        answer: 1,
        explain: 'Après le Blackwood à 5 clés, 5SA demande les Rois hors atout (le Roi d’atout a été compté comme une clé) et promet qu’aucune clé ne manque.',
      },
    ],
  },

  {
    id: 'splinters-and-drury',
    title: 'Les splinters et le Drury inversé',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Deux soutiens de la majeure du partenaire : le splinter, qui montre les valeurs de manche et une courte pour que l’ouvreur puisse juger du chelem, et le Drury, qui permet à une main passée de montrer sans risque un soutien limite.',
    body: `
<h3>Les splinters</h3>
<p>Un <strong>splinter</strong> est un double saut dans une couleur nouvelle après une ouverture de 1♥ ou 1♠ du partenaire. Il montre quatre atouts ou plus, les valeurs de manche (environ 13-16 points en comptant les courtes) et un singleton ou une chicane dans la couleur nommée. Il ne dit rien d’autre sur cette couleur : il est donc alerté.</p>
<table>
<thead><tr><th>Ouverture</th><th>Splinters</th></tr></thead>
<tbody>
<tr><td>1♥</td><td>3♠, 4♣, 4♦</td></tr>
<tr><td>1♠</td><td>4♣, 4♦, 4♥</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AJ92 H:7 D:A1082 C:J1072" data-label="Le partenaire a ouvert de 1♠ : dites 4♥"></div>
<p>10 H, quatre atouts et un singleton cœur : 10 + 3 pour le singleton = 13 points HD. 4♥ dit tout cela à votre partenaire en une seule enchère. Avec une main plus forte, commencez par le 2SA Jacoby ; avec 10-12 points, faites un soutien limite.</p>

<h3>La décision de l’ouvreur : les valeurs utiles</h3>
<p>Face à un splinter, l’ouvreur ne compte que les honneurs utiles. Les honneurs face au singleton du partenaire sont en grande partie perdus : un Roi ou une Dame dans cette couleur ne fera jamais de levée, puisque le partenaire coupe la couleur. Seul l’As compte encore. Sans valeurs perdues et avec environ 16 points utiles ou plus, l’ouvreur cherche le chelem ; sinon, il conclut à quatre dans la majeure.</p>
<div class="deal" data-n="S:Q8763 H:AKJ98 D:43 C:A" data-s="S:AJ92 H:7 D:A1082 C:J1072"></div>
<div class="auction" data-calls="1S P 4H P 4S P P P" data-dealer="N"></div>
<p>Nord a 14 H, mais le ♥K et le ♥J sont face au singleton de Sud. Sans eux, Nord a environ 10 points utiles : il conclut. Onze levées sont là, pas douze.</p>
<div class="deal" data-n="S:AK875 H:KQ1076 D:K10 C:8" data-s="S:Q932 H:AJ9853 D:A96 C:-"></div>
<div class="auction" data-calls="1S P 4C P 4D P 4H P 4NT P 5S P 6S P P P" data-dealer="N"></div>
<p>Ici, Nord n’a rien à trèfle : ses 15 H sont tous utiles, et les cœurs s’accordent bien. Nord fait un cue-bid à 4♦, qui montre un contrôle à carreau et un intérêt pour le chelem. Sud coopère par 4♥ (l’♥A), et Nord demande les clés. Le 5♠ de Sud montre deux clés et la Dame d’atout, et Nord dit 6♠.</p>

<h3>Le Drury inversé</h3>
<p>En 3e ou 4e position, votre partenaire peut ouvrir un peu léger. Si vous avez déjà passé et que vous avez un soutien limite (trois atouts ou plus et 10-12 points), un saut à trois dans la majeure peut vous emmener trop haut face à une ouverture légère. Le <strong>Drury inversé</strong> résout ce problème : une main passée dit <strong>2♣</strong> sur l’ouverture de 1♥ ou 1♠ du partenaire pour montrer trois atouts ou plus et 10-12 points. C’est artificiel et ne dit rien sur les trèfles.</p>
<ul>
<li>L’ouvreur redemande <strong>deux dans la majeure</strong> avec une ouverture minimum ou légère : il n’y a pas de manche, et vous passez.</li>
<li>L’ouvreur demande <strong>la manche</strong> avec une vraie ouverture et des valeurs supplémentaires.</li>
</ul>
<div class="deal" data-n="S:742 H:AQ82 D:Q42 C:Q73" data-s="S:KQJ98 H:9 D:AJ875 C:105" data-caption="Nord a donné et passé ; Sud a ouvert de 1♠ en 3e position."></div>
<div class="auction" data-calls="P P 1S P 2C P 2S P P P" data-dealer="N"></div>
<p>Le 1♠ de Sud ne compte que 11 H. Sur le Drury, 2♠ dit « pas de manche », et la paire s’arrête sans risque : neuf levées sont le maximum.</p>
<div class="tip">Le Drury est réservé aux mains passées, et il doit faire l’objet d’un accord. Dans cette application, il est désactivé par défaut ; activez-le dans les réglages du système pour vous y entraîner.</div>
<div class="warn">Un splinter promet quatre atouts. Avec trois seulement, faites une autre enchère : votre partenaire comptera sur le quatrième atout pour couper la couleur courte.</div>
`,
    keyPoints: [
      'Un splinter (1♥ – 3♠/4♣/4♦, 1♠ – 4♣/4♦/4♥) montre quatre atouts ou plus, les valeurs de manche et un singleton ou une chicane dans la couleur nommée.',
      'Face à un splinter, ne comptez que les valeurs utiles : les honneurs face à la courte sont perdus, sauf l’As.',
      'Avec des valeurs perdues, l’ouvreur conclut à la manche ; avec des valeurs utiles, il fait un cue-bid ou demande les clés.',
      'Drury inversé : le 2♣ d’une main passée sur 1♥/1♠ montre trois atouts ou plus et 10-12 points.',
      'Sur le Drury, deux dans la majeure montre un minimum ; la manche montre des valeurs supplémentaires.',
    ],
    quiz: [
      {
        q: 'Votre partenaire ouvre de 1♠. Vous avez ♠KQ74 ♥A853 ♦K962 ♣5 (12 H). Que dites-vous ?',
        options: ['2SA', '4♣', '3♠', '4♠'],
        answer: 1,
        explain: 'Quatre atouts, un singleton trèfle et 12 + 3 = 15 points HD : le splinter 4♣ décrit la main en une seule enchère.',
      },
      {
        q: 'Votre partenaire ouvre de 1♥ et vous dites 3♠. Qu’avez-vous montré ?',
        options: ['De longs piques', 'Quatre cœurs ou plus, les valeurs de manche et un singleton ou une chicane à pique', 'Une main faible avec des piques', 'Un arrêt à pique'],
        answer: 1,
        explain: 'Sur 1♥, 3♠ est un double saut dans une couleur nouvelle : un splinter.',
      },
      {
        q: 'Vous avez ouvert de 1♠ avec ♠AK1063 ♥KQ5 ♦Q84 ♣K7 et votre partenaire a fait un splinter à 4♥. Que faites-vous ?',
        options: ['Je dis 4♠ : mon ♥K et ma ♥Q sont perdus', 'Je dis 4SA', 'Je fais un cue-bid à 5♣', 'Je dis 6♠'],
        answer: 0,
        explain: 'Cinq de vos 17 H sont face à la courte à cœur de votre partenaire et ne feront pas de levée. Avec environ 12 points utiles, concluez.',
      },
      {
        q: 'Qui peut employer le Drury inversé ?',
        options: ['N’importe quel répondant avec du soutien', 'Une main passée avec trois atouts ou plus et 10-12 points, après une ouverture de 1♥ ou 1♠ du partenaire', 'Une main passée avec de longs trèfles', 'L’ouvreur avec une main forte'],
        answer: 1,
        explain: 'Le Drury est un soutien limite de main passée qui garde les enchères basses face à une ouverture peut-être légère en 3e ou 4e position.',
      },
      {
        q: 'Votre partenaire, main passée, dit 2♣ (Drury) sur votre 1♥ en 3e position. Vous avez une main légère de 11 points. Quelle est votre redemande ?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 0,
        explain: 'Deux dans la majeure dit que vous avez un minimum et qu’il n’y a pas de manche ; votre partenaire passe.',
      },
    ],
  },

  {
    id: 'new-minor-and-fourth-suit-forcing',
    title: 'Nouvelle mineure forcing et quatrième couleur forcing',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Deux enchères artificielles qui permettent au répondant de demander au lieu de deviner : la nouvelle mineure forcing après une redemande de 1SA de l’ouvreur, et la quatrième couleur forcing quand trois couleurs ont été nommées.',
    body: `
<h3>Pourquoi le répondant doit interroger</h3>
<p>Après 1♦ – 1♠ – 1SA, un répondant qui a cinq piques et les valeurs de manche aimerait savoir si l’ouvreur a trois piques. 3♠ ne serait qu’une proposition ; 4♠ risque de tomber sur un fit 5-2 ; 3SA risque de rater un fit 5-3. Les enchères naturelles ne permettent pas de poser la question : une enchère artificielle s’en charge.</p>

<h3>La nouvelle mineure forcing</h3>
<p>Après une redemande de 1SA de l’ouvreur, le répondant qui nomme <strong>l’autre mineure</strong> au palier de 2 (1♣ – 1♥ – 1SA – 2♦, ou 1♦ – 1♠ – 1SA – 2♣) fait une enchère artificielle et forcing un tour. Elle montre 11 points ou plus et interroge sur la majeure du répondant. Celui-ci y a exactement cinq cartes ou, après 1♠, quatre piques et quatre cœurs ; avec six cartes, il répète simplement sa majeure ou demande la manche.</p>
<table>
<thead><tr><th>Réponse de l’ouvreur</th><th>Signification</th></tr></thead>
<tbody>
<tr><td>2 dans la majeure du répondant</td><td>Soutien de trois cartes, minimum (12-13)</td></tr>
<tr><td>3 dans la majeure du répondant</td><td>Soutien de trois cartes, maximum (14)</td></tr>
<tr><td>2♥ ou 3♥ (après 1♠)</td><td>Quatre cœurs, minimum ou maximum</td></tr>
<tr><td>2SA ou 3SA</td><td>Ni l’un ni l’autre, minimum ou maximum</td></tr>
</tbody>
</table>
<p>Le répondant fixe ensuite le contrat : la manche avec 13 points ou plus (ou face à un maximum), une proposition avec 11-12 face à un minimum, et le sans-atout sans fit.</p>
<div class="deal" data-n="S:A108 H:J5 D:A854 C:K1063" data-s="S:QJ964 H:K6 D:Q1092 C:AQ"></div>
<div class="auction" data-calls="1D P 1S P 1NT P 2C P 2S P 4S P P P" data-dealer="N"></div>
<p>Sud a 14 H et cinq piques. 2♣ interroge ; le 2♠ de Nord montre trois cartes de soutien, et Sud demande la manche à pique, où les coupes permettent de faire onze levées.</p>
<div class="auction" data-calls="1D P 1H P 1NT P 2C P 2H P 3H P P P" data-dealer="N"></div>
<p>Avec 11 H et cinq cœurs (♠5 ♥AQJ62 ♦A32 ♣9743), Sud interroge par 2♣ et, face à un minimum avec trois cœurs, propose la manche par 3♥. Nord a un minimum et passe.</p>

<h3>La quatrième couleur forcing</h3>
<p>Quand trois couleurs ont été nommées naturellement, la <strong>quatrième couleur</strong> dite par le répondant est artificielle et forcing de manche. Le répondant a les valeurs de manche mais pas d’enchère évidente : souvent une couleur cinquième en quête d’un soutien de trois cartes, ou une main qui pourrait jouer 3SA si seulement la quatrième couleur était arrêtée.</p>
<p>L’ouvreur précise alors sa main, dans cet ordre :</p>
<ol>
<li>Trois cartes de soutien dans la couleur du répondant : il la soutient.</li>
<li>Un arrêt dans la quatrième couleur : il dit sans-atout.</li>
<li>De la longueur en plus : il répète une deuxième couleur cinquième, ou la première couleur.</li>
</ol>
<div class="deal" data-n="S:AJ74 H:83 D:J1072 C:AQ10" data-s="S:Q96 H:AKQ42 D:85 C:K75"></div>
<div class="auction" data-calls="1D P 1H P 1S P 2C P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Sud a 14 H et cinq beaux cœurs. 2♣, la quatrième couleur, demande à Nord de se décrire. Nord n’a pas trois cartes de soutien à cœur mais a les trèfles arrêtés : il dit 2SA, et Sud soutient à 3SA.</p>
<div class="tip">Avec une main régulière de manche et la quatrième couleur arrêtée, dites simplement 3SA. La quatrième couleur forcing sert aux mains qui ont besoin d’une réponse.</div>
<div class="warn">Les deux enchères sont artificielles : elles ne disent rien sur la mineure ni sur la quatrième couleur. Alertez-les, et ne passez jamais dessus.</div>
`,
    keyPoints: [
      'Nouvelle mineure forcing : 1m – 1M – 1SA – deux dans l’autre mineure demande un soutien de trois cartes (ou quatre cœurs après 1♠), avec 11+ points.',
      'L’ouvreur montre le soutien ou quatre cœurs au palier de 2 avec un minimum et au palier de 3 avec un maximum ; 2SA ou 3SA ne montre ni l’un ni l’autre.',
      'Quatrième couleur forcing : la quatrième couleur dite par le répondant est artificielle et forcing de manche.',
      'L’ouvreur répond d’abord par le soutien dans la couleur du répondant, puis par sans-atout avec un arrêt, puis par de la longueur en plus.',
      'Avec une main régulière et un arrêt dans la quatrième couleur, dites directement 3SA.',
    ],
    quiz: [
      {
        q: '1♣ – 1♠ – 1SA – ? Vous avez ♠KQ1074 ♥A63 ♦Q85 ♣J2 (12 H). Que dites-vous ?',
        options: ['2♠', '3♠', '2♦', '3SA'],
        answer: 2,
        explain: '2♦, nouvelle mineure forcing, demande si l’ouvreur a trois piques (ou quatre cœurs). Vous pourrez ensuite choisir entre pique et sans-atout.',
      },
      {
        q: '1♦ – 1♥ – 1SA – 2♣. Vous avez ouvert avec ♠KJ5 ♥Q73 ♦AQ84 ♣Q62 (14 H). Que répondez-vous ?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 2,
        explain: 'Trois cartes de soutien à cœur avec un maximum pour la redemande de 1SA : sautez à 3♥.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Que montre 2♦ ?',
        options: ['De longs carreaux', 'Un forcing de manche artificiel qui demande à l’ouvreur de décrire sa main', 'Une main faible', 'Du soutien à pique'],
        answer: 1,
        explain: 'Carreau est la quatrième couleur. Le répondant a les valeurs de manche et interroge ; il ne montre pas de carreaux.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Vous avez ouvert avec ♠AQ74 ♥J5 ♦K103 ♣KJ96. Que dites-vous ?',
        options: ['2♥', '2SA', '3♣', '2♠'],
        answer: 1,
        explain: 'Pas trois cartes de soutien à cœur, mais le ♦K10x arrête les carreaux : dites sans-atout.',
      },
      {
        q: 'Après 1♦ – 1♠ – 1SA, quelle main doit employer la nouvelle mineure forcing ?',
        options: ['♠KJ84 ♥Q73 ♦K5 ♣J1063', '♠AQ984 ♥K6 ♦J3 ♣Q1052', '♠J9852 ♥43 ♦K82 ♣1074', '♠K1063 ♥Q2 ♦A54 ♣K973'],
        answer: 1,
        explain: 'Cinq piques et 12 H : demandez un soutien de trois cartes. La première main est trop faible, la troisième doit redemander 2♠, et la dernière, avec quatre piques et 12 H, dit 3SA.',
      },
    ],
  },

  {
    id: 'texas-transfers',
    title: 'Les Texas au palier de 4',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Comment demander la manche dans une majeure sixième face à 1SA ou 2SA pour que la main forte la joue, et comment poursuivre vers le chelem.',
    body: `
<h3>Des Texas au palier de 4</h3>
<p>Face au 1SA du partenaire, une main avec une majeure sixième et assez pour la manche veut jouer quatre dans la majeure, et veut que l’ouvreur à sans-atout soit déclarant, pour que l’entame vienne vers la main forte. Les <strong>Texas au palier de 4</strong> le permettent en une seule enchère :</p>
<table>
<thead><tr><th>Enchère</th><th>Signification</th><th>L’ouvreur dit</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>Six cœurs ou plus, valeurs de manche</td><td>4♥</td></tr>
<tr><td>4♥</td><td>Six piques ou plus, valeurs de manche</td><td>4♠</td></tr>
</tbody>
</table>
<p>L’ouvreur doit accepter le Texas. Le répondant passe s’il n’a pas d’intérêt pour le chelem.</p>
<div class="deal" data-n="S:KJ6 H:742 D:KJ6 C:AK84" data-s="S:A108754 H:3 D:A54 C:Q65"></div>
<div class="auction" data-calls="1NT P 4H P 4S P P P" data-dealer="N"></div>
<p>Sud a 10 H et six piques : assez pour la manche, pas pour le chelem. 4♥ est un Texas, Nord dit 4♠ et Sud passe. Nord est déclarant : l’entame vient donc vers les Rois de Nord au lieu de passer à travers.</p>

<h3>Texas à 4 ou Texas Jacoby ?</h3>
<table>
<thead><tr><th>Main du répondant</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>0-7, cinq cartes ou plus</td><td>Texas Jacoby, puis passe</td></tr>
<tr><td>8-9, six cartes</td><td>Texas Jacoby, puis soutien à 3</td></tr>
<tr><td>Valeurs de manche, exactement cinq cartes</td><td>Texas Jacoby, puis 3SA : l’ouvreur choisit</td></tr>
<tr><td>Valeurs de manche, six cartes ou plus</td><td>Texas à 4 : 4♦ ou 4♥</td></tr>
<tr><td>Intérêt pour le chelem, six cartes ou plus</td><td>Texas à 4, puis 4SA (Blackwood à 5 clés)</td></tr>
</tbody>
</table>

<h3>Poursuivre vers le chelem</h3>
<div class="deal" data-n="S:K543 H:A63 D:AKQ4 C:85" data-s="S:Q H:KQJ1085 D:765 C:AK10"></div>
<div class="auction" data-calls="1NT P 4D P 4H P 4NT P 5H P 6H P P P" data-dealer="N"></div>
<p>Sud a 15 H et un beau cœur sixième face à 15-17 : le chelem est probable. Le Texas fixe l’atout cœur, et 4SA demande les clés. Le 5♥ de Nord en montre deux, l’♥A et l’♦A, sans la Dame. Sud a le ♥K, l’♣A et la ♥Q : il ne manque donc qu’une clé, et Sud dit 6♥.</p>

<h3>Après 2SA</h3>
<p>Les mêmes enchères fonctionnent sur une ouverture de 2SA (20-21), où même 4 points suffisent pour la manche :</p>
<div class="deal" data-n="S:AQ102 H:AK102 D:K2 C:A65" data-s="S:64 H:Q97543 D:AJ9 C:87"></div>
<div class="auction" data-calls="2NT P 4D P 4H P P P" data-dealer="N"></div>
<div class="tip">Le Texas à 4 fait jouer la main forte et économise de l’espace pour les enchères de chelem : après le Texas, 4SA est un Blackwood à 5 clés pour la majeure.</div>
<div class="warn">4♣ sur 1SA ou 2SA est le Gerber, pas un Texas. Et l’ouvreur ne doit jamais passer sur 4♦ ou 4♥ : le Texas doit être accepté.</div>
`,
    keyPoints: [
      'Texas à 4 : 1SA (ou 2SA) – 4♦ montre six cœurs ou plus, 4♥ six piques ou plus, avec les valeurs de manche.',
      'L’ouvreur accepte toujours le Texas : c’est donc l’ouvreur à sans-atout qui joue le contrat.',
      'Le répondant passe sans intérêt pour le chelem ; avec un intérêt, le Texas suivi de 4SA demande les clés.',
      'Avec exactement cinq cartes et les valeurs de manche, employez plutôt un Texas Jacoby suivi de 3SA.',
      'Les mains de proposition font un Texas au palier de 2 puis soutiennent à 3.',
    ],
    quiz: [
      {
        q: 'Votre partenaire ouvre de 1SA. Vous avez ♠KQ10965 ♥A4 ♦K73 ♣85 (12 H). Que dites-vous ?',
        options: ['2♥', '4♥', '4♠', '3♠'],
        answer: 1,
        explain: 'Six piques et les valeurs de manche : 4♥ est un Texas, et votre partenaire dit 4♠.',
      },
      {
        q: '1SA – 4♦. Que dit l’ouvreur ?',
        options: ['Passe', '4♥', '4SA', '5♦'],
        answer: 1,
        explain: '4♦ montre six cœurs ou plus ; l’ouvreur accepte le Texas par 4♥.',
      },
      {
        q: 'Votre partenaire ouvre de 1SA. Vous avez ♠J8 ♥KQ1065 ♦A73 ♣Q42 (12 H, cinq cœurs). Quel est votre plan ?',
        options: ['4♦ (Texas à 4)', '2♦, puis 3SA', '2♦, puis 4♥', '3SA'],
        answer: 1,
        explain: 'Avec exactement cinq cœurs, faites le Texas et dites 3SA : l’ouvreur choisit 4♥ avec trois cartes de soutien et passe avec deux.',
      },
      {
        q: '1SA – 4♥ – 4♠ – 4SA. Qu’est-ce que 4SA ?',
        options: ['Quantitatif', 'Blackwood à 5 clés pour pique', 'Pour jouer', 'Gerber'],
        answer: 1,
        explain: 'Le Texas à 4 a fixé l’atout pique : 4SA demande donc les clés.',
      },
      {
        q: 'Votre partenaire ouvre de 2SA. Vous avez ♠64 ♥Q97543 ♦AJ9 ♣87 (7 H). Que dites-vous ?',
        options: ['3♦', '4♦', '3♥', 'Passe'],
        answer: 1,
        explain: 'Six cœurs et assez pour la manche face à 20-21 : Texas 4♦, et votre partenaire joue 4♥.',
      },
    ],
  },
];
