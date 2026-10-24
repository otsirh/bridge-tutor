// Lessons, part 3.
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_3: Lesson[] = [
  {
    id: 'michaels-and-unusual-2nt',
    title: 'Michaels e o 2ST Unusual',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Como mostrar uma mão bicolor numa só voz depois que um adversário abre, e como o parceiro escolhe o naipe.',
    body: `
<h3>Dois naipes numa só voz</h3>
<p>Com dois naipes de cinco cartas você quer mostrar os dois depressa; o leilão pode estar no nível 4 antes que você tenha uma segunda chance. Duas intervenções convencionais fazem isso, e cada uma promete pelo menos <strong>cinco cartas em cada um de dois naipes</strong>.</p>
<table>
<thead><tr><th>Eles abrem</th><th>Você marca</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>2♣ (Michaels)</td><td>♥ e ♠</td></tr>
<tr><td>1♦</td><td>2♦ (Michaels)</td><td>♥ e ♠</td></tr>
<tr><td>1♥</td><td>2♥ (Michaels)</td><td>♠ e um pobre</td></tr>
<tr><td>1♠</td><td>2♠ (Michaels)</td><td>♥ e um pobre</td></tr>
<tr><td>1♣</td><td>2ST (Unusual)</td><td>♦ e ♥</td></tr>
<tr><td>1♦</td><td>2ST (Unusual)</td><td>♣ e ♥</td></tr>
<tr><td>1♥ ou 1♠</td><td>2ST (Unusual)</td><td>♣ e ♦</td></tr>
</tbody>
</table>
<p>O Michaels é um cue-bid no naipe do abridor. Sobre um pobre, mostra os dois ricos; sobre um rico, mostra o outro rico e um pobre não especificado. O 2ST Unusual mostra os <strong>dois naipes mais baixos não marcados</strong>.</p>
<div class="hand" data-cards="S:KQ1074 H:AJ963 D:5 C:84" data-label="O adversário à direita abre 1♦: marque 2♦"></div>
<div class="hand" data-cards="S:4 H:72 D:KQ1074 C:AQ1063" data-label="O adversário à direita abre 1♠: marque 2ST"></div>

<h3>Com que força?</h3>
<p>A faixa é ampla. Na maioria das vezes a mão é modesta (cerca de 8-12 PH) com bons naipes, e o objetivo é competir, achar um sacrifício ou indicar a saída. Com uma mão forte (cerca de 16+), você também começa com a voz bicolor e depois marca de novo para mostrar a força extra. Com uma mão intermediária, muitos jogadores preferem intervir no naipe mais alto e marcar o outro depois.</p>
<p>A qualidade dos naipes importa, sobretudo vulnerável: as honras devem estar nos naipes longos, não nos curtos.</p>

<h3>Respondendo</h3>
<div class="auction" data-calls="1D 2D P" data-dealer="W"></div>
<div class="hand" data-cards="S:J4 H:Q852 D:K73 C:J1064" data-label="Você é Sul: marque 2♥"></div>
<ul>
<li><strong>Escolha um naipe</strong> no nível mais barato, aquele em que tem mais cartas. Aqui, quatro copas contra duas espadas: 2♥. Com o mesmo comprimento num rico e num pobre, prefira o rico, que vale mais pontos.</li>
<li><strong>Salte</strong> com um bom fit e valores úteis: naipe curto no naipe dos adversários, e ases e reis nos naipes do parceiro.</li>
<li><strong>Vá ao game</strong> quando o fit for grande e as suas honras estiverem trabalhando. Um fit de dez cartas diante de uma mão 5-5 muitas vezes faz game com poucos pontos.</li>
<li><strong>Depois de um Michaels rico-pobre</strong> (1♥ – 2♥), marque o rico do parceiro se gostar dele, ou marque 2ST para perguntar pelo pobre quando tiver um bom fit no pobre e nenhum fit no rico.</li>
<li><strong>Depois do 2ST Unusual</strong>, marque 3♣ ou 3♦ (o que for mais longo), ou salte ao game com fit.</li>
</ul>
<div class="hand" data-cards="S:7 H:J852 D:K1063 C:KJ63" data-label="1♥ – 2♥ – passo: marque 2ST"></div>
<p>O parceiro tem cinco espadas e cinco cartas num pobre. Com singleton de espadas, mas quatro cartas em cada pobre, marque 2ST: o parceiro diz qual é o pobre dele e você passa, com um fit de nove cartas seja qual for.</p>

<h3>Usando a informação na defesa</h3>
<p>Se os adversários ganharem o leilão, a bicolor do parceiro é um presente para a defesa: você conhece pelo menos dez cartas dele. Conte a mão do declarante a partir disso e saia ou troque para o naipe em que o parceiro pode cortar ou fazer vazas.</p>
<div class="warn">Não use o Michaels nem o 2ST Unusual com uma mão 5-4. O parceiro vai escolher um naipe esperando cinco cartas, e vocês vão jogar um fit de sete cartas dobrado.</div>
<div class="tip">Com vulnerabilidade favorável, uma voz bicolor seguida de um grande salto do parceiro no seu naipe pode roubar o leilão ou achar um sacrifício barato. O parceiro deve apoiar com qualquer fit grande: a Lei das Vazas Totais favorece marcar com distribuição.</div>
`,
    keyPoints: [
      'Michaels: um cue-bid no pobre do abridor (1m – 2m) mostra os dois ricos; um cue-bid no rico do abridor (1M – 2M) mostra o outro rico e um pobre; 5-5 ou mais.',
      'O 2ST Unusual mostra os dois naipes mais baixos não marcados, 5-5 ou mais.',
      'A maioria das mãos é modesta; com uma mão forte, marque de novo depois.',
      'O parceiro escolhe o naipe em que tem mais cartas, e salta ou marca game com um fit grande.',
      'Depois de 1M – 2M, 2ST do parceiro pergunta pelo pobre.',
    ],
    quiz: [
      {
        q: 'O adversário à direita abre 1♣. Qual voz mostra cinco espadas e cinco copas?',
        options: ['Dobre', '2♣', '2ST', '1♥'],
        answer: 1,
        explain: 'Um cue-bid numa abertura de naipe pobre (Michaels) mostra os dois ricos. 2ST sobre 1♣ mostra os dois naipes mais baixos não marcados, ouros e copas.',
      },
      {
        q: 'O adversário à direita abre 1♥ e você marca 2ST. O que mostrou?',
        options: ['15-18 balanceada', 'Paus e ouros', 'Espadas e um pobre', 'Espadas e paus'],
        answer: 1,
        explain: 'O 2ST Unusual mostra os dois naipes mais baixos não marcados. Sobre 1♥, são paus e ouros.',
      },
      {
        q: 'O adversário à esquerda abre 1♦, o parceiro marca 2♦ (Michaels), o adversário à direita passa. Você tem ♠J4 ♥Q852 ♦K73 ♣J1064. O que marca?',
        options: ['2♠', '2♥', '2ST', 'Passo'],
        answer: 1,
        explain: 'O parceiro tem pelo menos cinco cartas em cada rico. Você tem quatro copas e duas espadas, então copas é o melhor fit: marque-o no nível mais barato.',
      },
      {
        q: 'O adversário à direita abre 1♠ e você marca 2♠. O que isso mostra?',
        options: ['Espadas', 'Copas e um pobre', 'Os dois pobres', 'Uma mão forte balanceada'],
        answer: 1,
        explain: 'Um cue-bid numa abertura de naipe rico mostra o outro rico mais um pobre, pelo menos 5-5. O parceiro pode marcar 2ST para descobrir qual é o pobre.',
      },
      {
        q: 'O adversário à direita abre 1♣ e você marca 2ST. O que isso mostra?',
        options: ['Paus e ouros', 'Ouros e copas', 'Os dois ricos', 'Copas e espadas'],
        answer: 1,
        explain: 'Sobre 1♣, os naipes não marcados são ouros, copas e espadas; os dois mais baixos são ouros e copas.',
      },
    ],
  },

  {
    id: 'defending-suit-contracts',
    title: 'A defesa contra contratos em naipe',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Como escolher entre defesa ativa e passiva, conseguir cortes, jogar trunfo no momento certo e forçar o declarante.',
    body: `
<h3>De onde vêm as vazas da defesa</h3>
<p>Contra um contrato em naipe, a defesa faz vazas com cartas altas, com cortes e com os seus próprios trunfos. O declarante, enquanto isso, tenta se livrar das perdedoras cortando-as no morto ou descartando-as nas vencedoras do morto. A boa defesa começa com uma pergunta simples quando o morto desce: <strong>como o declarante vai cumprir o contrato, e de onde virão as nossas vazas?</strong></p>

<h3>Ativa ou passiva?</h3>
<p><strong>Seja ativo</strong> (bata ou firme vazas depressa, mesmo com algum risco) quando o morto tiver um naipe longo e forte que vai fornecer descartes. As vazas que você não fizer agora vão desaparecer.</p>
<p><strong>Seja passivo</strong> (jogue cartas seguras que não entregam nada) quando o morto for plano, não tiver fonte de descartes, e o declarante tiver de perder aquelas perdedoras de qualquer jeito. Abrir naipes novos nesse caso muitas vezes dá ao declarante uma vaza que ele não faria sozinho.</p>
<div class="deal" data-n="S:K94 H:KQJ104 D:862 C:A5" data-e="S:762 H:A83 D:KJ94 C:874" data-caption="Sul joga 4♠ depois de 1♠ – 2♥ – 2♠ – 4♠. O parceiro sai com a ♣Q; o morto ganha com o ás e joga o ♥K."></div>
<p>Você ganha com o ♥A. Agora pense: as copas do morto estão firmes, e assim que o declarante tirar os trunfos, as perdedoras de ouros serão descartadas nelas. A única esperança é fazer as vazas de ouros <em>agora</em>. Troque para o ♦J, através da mão do declarante: se o parceiro tiver o ♦A e o declarante a ♦Q, vocês podem fazer três vazas de ouros. Uma volta passiva em paus deixaria o declarante tirar os trunfos e descartar os ouros.</p>

<h3>Conseguindo cortes</h3>
<ul>
<li>A saída de singleton é melhor quando você tem o controle do trunfo (como o ás de trunfo) ou o parceiro pode ter uma entrada: você ganha a mão, chega ao parceiro e corta de novo.</li>
<li>Ao dar um corte ao parceiro, use um sinal de preferência de naipe para mostrar onde está a sua entrada.</li>
<li>Conte os trunfos do declarante: não adianta jogar para um corte quando o parceiro não pode ter mais trunfos.</li>
</ul>

<h3>Quando jogar trunfo</h3>
<ul>
<li>Quando o morto é curto num naipe lateral em que o seu lado é forte, e o declarante vai tentar cortar perdedoras ali.</li>
<li>Quando o declarante mostrou dois naipes e o morto deu preferência ao segundo: o morto vai cortar o primeiro.</li>
<li>Quando o parceiro passa o seu dobre informativo para punir: ele tem trunfos longos e fortes e quer que os trunfos sejam tirados.</li>
<li>Não quando o declarante tem vencedoras longas em naipe lateral para bater, nem quando uma saída de trunfo pode ajudar o declarante a capturar as honras de trunfo do parceiro.</li>
</ul>

<h3>A defesa de forçamento</h3>
<p>Se você tem quatro trunfos, ou os trunfos do declarante são curtos, obrigue-o a cortar várias vezes jogando o seu naipe longo. Cada corte encurta os trunfos do declarante; no fim você pode ter mais trunfos que ele, e o declarante perde o controle. A defesa de forçamento funciona melhor quando os trunfos do declarante estão na mão longa e o morto não pode receber o forçamento.</p>

<h3>Promoção de trunfo</h3>
<p>Espadas são trunfo. O declarante tem ♠A K 10 9 8 7, você (Oeste) tem ♠Q 6 e o parceiro tem ♠J 3. Se nada acontecer, o declarante bate o ás e o rei e a sua dama cai. Mas suponha que você jogue um naipe lateral em que o parceiro e o declarante estão em chicana. O parceiro corta com o ♠J, o declarante tem de sobrecortar com o ás ou o rei, e agora a sua ♠Q 6 fica diante de uma só honra alta: a dama vai fazer uma vaza. Essa promoção de trunfo chama-se <strong>uppercut</strong>. Quando você enxerga uma promoção como essa, o parceiro deve cortar o mais alto possível.</p>
<div class="tip">Conte as suas vazas. Se você enxerga a vaza que derruba o contrato, faça-a; se enxerga que o declarante já tem o suficiente, procure um corte ou uma promoção de trunfo que possa criar mais uma.</div>
<div class="warn">Não bata vencedoras num naipe em que o declarante está em chicana e o morto corta: você só ajuda o declarante. E não dê um “corte e descarte” (jogar um naipe em que o declarante e o morto estão ambos em chicana), que permite ao declarante cortar numa mão e descartar uma perdedora da outra.</div>
`,
    keyPoints: [
      'Pergunte-se como o declarante vai cumprir o contrato e de onde virão as suas vazas.',
      'Seja ativo quando o morto tiver um naipe longo para descartes; passivo quando o morto for plano.',
      'Saídas de singleton funcionam melhor com controle do trunfo ou uma entrada na mão do parceiro.',
      'Jogue trunfo quando o morto for cortar, ou quando o parceiro tiver passado o seu dobre informativo.',
      'Com quatro trunfos, force o declarante; nunca dê um corte e descarte.',
    ],
    quiz: [
      {
        q: 'O morto tem um naipe lateral longo e forte que vai fornecer descartes. Que tipo de defesa costuma ser o certo?',
        options: ['Passiva: esperar que o declarante erre', 'Ativa: fazer ou firmar as suas vazas depressa', 'Jogar trunfo a cada oportunidade', 'Dar ao declarante um corte e descarte'],
        answer: 1,
        explain: 'Depois de tirar os trunfos, o declarante vai descartar as perdedoras no naipe do morto. As vazas que a defesa não fizer depressa vão sumir.',
      },
      {
        q: 'O morto é um 4-3-3-3 plano, sem naipe longo, e o declarante tem de perder as perdedoras laterais de qualquer jeito. Que tipo de defesa costuma ser o certo?',
        options: ['Passiva: evitar abrir naipes novos', 'Ativa: trocar de naipe a cada vaza', 'Sair debaixo dos seus ases', 'Bater todas as suas vencedoras de imediato'],
        answer: 0,
        explain: 'Sem fonte de descartes, as perdedoras do declarante não vão embora. Abrir naipes novos arrisca dar ao declarante uma vaza que ele não faria sozinho.',
      },
      {
        q: 'Você tem quatro trunfos contra o 4♥ do declarante. Que plano de defesa costuma ser o melhor?',
        options: ['Jogar trunfo', 'Forçar o declarante a cortar jogando o seu naipe longo', 'Sair de singleton', 'Sair de honras em todos os naipes'],
        answer: 1,
        explain: 'Cada corte encurta os trunfos do declarante. Com quatro trunfos, dois ou três forçamentos podem deixá-lo com mais trunfos que o declarante, e ele perde o controle.',
      },
      {
        q: 'Você deu um dobre informativo sobre 1♦ e o parceiro passou para punir. De onde você sai?',
        options: ['Do seu melhor rico', 'De trunfo', 'De um singleton de paus', 'Do naipe que o parceiro gostaria'],
        answer: 1,
        explain: 'O passo do parceiro mostra ouros longos e fortes. Uma saída de trunfo impede o declarante de fazer trunfos pequenos cortando, e os ouros do parceiro farão as vazas.',
      },
      {
        q: 'Quando a saída de singleton é mais atraente contra um contrato em naipe?',
        options: ['Quando você tem o ás de trunfo ou o parceiro provavelmente tem uma entrada', 'Quando você tem quatro trunfos', 'Quando se sabe que o morto é curto no naipe', 'Sempre'],
        answer: 0,
        explain: 'Você precisa dar a mão ao parceiro depois do corte, ou recuperar a mão antes que os trunfos sejam tirados. O controle do trunfo e as entradas do parceiro tornam isso possível.',
      },
    ],
  },

  {
    id: 'suit-combinations-and-odds',
    title: 'Divisões de naipes e combinação de chances',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'As probabilidades a priori das divisões de naipes, como combinar chances e as ideias básicas de lugares vagos e escolha restrita.',
    body: `
<h3>Como se dividem as cartas dos adversários</h3>
<p>Antes que qualquer carta seja jogada, a chance de cada divisão depende só de quantas cartas os defensores têm no naipe:</p>
<table>
<thead><tr><th>Faltam</th><th>Divisão</th><th>Chance</th></tr></thead>
<tbody>
<tr><td>2</td><td>1-1 / 2-0</td><td>52% / 48%</td></tr>
<tr><td>3</td><td>2-1 / 3-0</td><td>78% / 22%</td></tr>
<tr><td>4</td><td>3-1 / 2-2 / 4-0</td><td>50% / 41% / 10%</td></tr>
<tr><td>5</td><td>3-2 / 4-1 / 5-0</td><td>68% / 28% / 4%</td></tr>
<tr><td>6</td><td>4-2 / 3-3 / 5-1 / 6-0</td><td>48% / 36% / 15% / 1,5%</td></tr>
<tr><td>7</td><td>4-3 / 5-2 / 6-1 / 7-0</td><td>62% / 31% / 7% / 0,5%</td></tr>
</tbody>
</table>
<p>Uma regra útil: um número <strong>ímpar</strong> de cartas faltando tende a se dividir da forma mais igual possível (3-2, 4-3), mas um número <strong>par</strong> tende a não se dividir igualmente (4-2 é mais provável que 3-3, e 3-1 mais provável que 2-2).</p>
<p>Mais dois números para saber: uma finesse é 50%; precisar de uma de duas finesses é 75%, precisar das duas é 25%.</p>

<h3>Combinando chances</h3>
<p>Muitas vezes um contrato pode ser cumprido de mais de um jeito. A arte é tentar as chances numa ordem que permita usar a segunda se a primeira falhar.</p>
<div class="deal" data-n="S:954 H:743 D:Q52 C:AKQ2" data-s="S:AQ6 H:A852 D:AK7 C:763" data-caption="3ST por Sul. Oeste sai com o ♥K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Conte:</strong> ♠A, ♥A, ♦AKQ, ♣AKQ: oito vazas. A nona pode vir de uma divisão 3-3 em paus (36%), que torna o ♣2 do morto vencedor, ou da finesse de espadas (50%), que ganha quando Leste tem o ♠K.</p>
<p><strong>O perigo:</strong> depois que o seu ♥A sai, as copas de Oeste ficam firmes. Se você fizer a finesse de espadas e ela perder para Oeste, Oeste bate copas suficientes para derrubá-lo, e você nunca chega a tentar os paus.</p>
<p><strong>A ordem certa:</strong> teste primeiro os paus. Bater o ♣A, o K e a Q não custa nada: se os dois defensores servirem três vezes, o ♣2 é a sua nona vaza e você nem precisa da finesse. Se os paus não se dividirem, você termina no morto e ainda pode jogar espada em direção ao seu A Q. A sua chance é 36% + (64% × 50%) = 68%, em vez dos 50% da finesse sozinha.</p>
<div class="tip">Tente primeiro a chance que não perde a mão. Deixe para o fim a finesse, que pode perder a mão para o adversário perigoso.</div>

<h3>Lugares vagos</h3>
<p>Depois que o carteio começa, os números a priori mudam. Se se sabe que Oeste tem cinco copas e Leste só uma, então, das cartas restantes desconhecidas, Oeste tem 8 lugares e Leste 12. Qualquer carta específica que falte, como o ♠K, está agora com Leste 12 vezes em 20, ou 60%, e não 50%. A mão com mais lugares vagos tem mais chance de ter qualquer carta determinada. É por isso que contar a mão importa tanto.</p>

<h3>Escolha restrita</h3>
<p>Você tem A K 10 7 5 diante de 6 4 3 2, faltando Q, J, 9 e 8. Você bate o ás e Leste deixa cair a dama. Na volta seguinte, Oeste serve baixo. Deve jogar o rei (esperando que Leste tivesse Q J) ou fazer a finesse do 10 (esperando que Leste tivesse a dama seca)?</p>
<p>Faça a finesse. Com a dama seca, Leste não tinha escolha; com Q J, Leste poderia igualmente ter jogado o valete. Então a dama seca é cerca de duas vezes mais provável que exatamente Q J: a finesse ganha cerca de 65% das vezes. Esse princípio da <strong>escolha restrita</strong> vale sempre que um adversário joga uma de duas honras equivalentes.</p>

<h3>Regras práticas para a dama</h3>
<ul>
<li>Oito cartas, faltando a dama: finesse (cerca de 40% com A K J x x e cerca de 51% com A K J 10 x, contra cerca de 33% da queda).</li>
<li>Nove cartas, faltando a dama: jogue pela queda (cerca de 53% contra cerca de 51% da finesse).</li>
<li>A informação do leilão (quem abriu, quem fez barragem, quem mostrou comprimento) vale mais que essas pequenas margens.</li>
</ul>
<div class="warn">Essas porcentagens são só um ponto de partida. Um defensor que mostrou naipes longos no leilão tem menos chance de ter comprimento no naipe que você está jogando.</div>
`,
    keyPoints: [
      'Cinco faltando: 3-2 68%. Seis faltando: 4-2 48%, 3-3 36%. Quatro faltando: 3-1 50%, 2-2 41%, 4-0 10%.',
      'Números ímpares de cartas faltando tendem a se dividir igualmente; números pares, não.',
      'Combine chances: teste primeiro o que não perde a mão; deixe para o fim a finesse contra a mão perigosa.',
      'Lugares vagos: a mão com mais cartas desconhecidas tem mais chance de ter qualquer carta determinada.',
      'Escolha restrita: quando um adversário deixa cair uma de duas honras equivalentes, jogue-o pelo singleton.',
    ],
    quiz: [
      {
        q: 'Os adversários têm seis cartas num naipe. Qual é a divisão mais provável?',
        options: ['3-3', '4-2', '5-1', '6-0'],
        answer: 1,
        explain: '4-2 acontece cerca de 48% das vezes, contra 36% de 3-3. Com um número par faltando, a divisão igual é a exceção, não a regra.',
      },
      {
        q: 'Os adversários têm cinco cartas num naipe. Com que frequência se dividem 3-2?',
        options: ['50%', '62%', '68%', '78%'],
        answer: 2,
        explain: 'Cerca de 68%. 4-1 é cerca de 28% e 5-0 cerca de 4%.',
      },
      {
        q: 'Você pode tentar uma divisão 3-3 (36%) e, se falhar, fazer uma finesse (50%). Qual é a chance combinada?',
        options: ['50%', '68%', '86%', '43%'],
        answer: 1,
        explain: '36% mais metade dos 64% restantes: 36 + 32 = 68%.',
      },
      {
        q: 'Na mão de 3ST acima, por que bater os paus antes de fazer a finesse de espadas?',
        options: ['Para contar a mão', 'Testar os paus não perde a mão, enquanto uma finesse perdida deixa Oeste bater as copas', 'Porque a finesse tem mais chance de funcionar depois', 'Para desbloquear os paus'],
        answer: 1,
        explain: 'Se a finesse perder, Oeste corre as copas e você nunca chega a tentar os paus. Bater os paus primeiro mantém as duas chances vivas.',
      },
      {
        q: 'Você tem A K 10 7 5 diante de 6 4 3 2. No ás, Leste deixa cair a dama. Na volta seguinte, Oeste joga baixo. O que é melhor?',
        options: ['Jogar o rei', 'Fazer a finesse do 10', 'É exatamente 50-50', 'Jogar da outra mão'],
        answer: 1,
        explain: 'Escolha restrita: de Q J, Leste poderia ter jogado qualquer das honras, mas com a dama seca não havia escolha. A dama seca é a mais provável, então a finesse ganha cerca de 65% das vezes.',
      },
    ],
  },

  {
    id: 'balancing',
    title: 'Reabertura',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quando e como reabrir o leilão na posição em que o seu passo encerraria o leilão, e por que ali você pode marcar com menos.',
    body: `
<h3>A posição de reabertura</h3>
<p>Você está na posição de <strong>reabertura</strong> quando o seu passo encerraria o leilão. Por exemplo: Oeste abre 1♥, o parceiro passa, Leste passa, e é a sua vez. Os adversários pararam num nível baixo, e isso diz alguma coisa: Leste tem menos de 6 pontos, e Oeste em geral não é muito forte. A força que falta tem de estar em algum lugar, e boa parte dela está na mão do parceiro. O parceiro pode ter passado com uma boa mão simplesmente por não ter uma voz adequada, por exemplo com comprimento em copas.</p>

<h3>Pegue um rei emprestado</h3>
<p>Por isso, na posição de reabertura você pode agir com cerca de <strong>3 PH a menos</strong> do que precisaria na posição direta, como se tivesse pegado um rei emprestado do parceiro. O parceiro deve então lembrar de devolver o rei e não marcar como se você tivesse uma ação de valor completo.</p>
<div class="auction" data-calls="1H P P" data-dealer="W"></div>
<table>
<thead><tr><th>Ação de reabertura depois de 1♥ – passo – passo</th><th>Significado aproximado</th></tr></thead>
<tbody>
<tr><td>Intervenção em naipe</td><td>Cerca de 5-13 PH e um naipe razoável</td></tr>
<tr><td>Dobre</td><td>Cerca de 9+ PH, curto em copas, apoio para os outros naipes (ou uma mão forte)</td></tr>
<tr><td>1ST</td><td>Cerca de 11-14 PH, balanceada, com parada em copas</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:KJ84 H:73 D:A1063 C:Q85" data-label="1♥ – P – P – ?: dobre"></div>
<p>10 PH e copas curtas: leve demais para um dobre direto, mas um dobre de reabertura normal.</p>
<div class="hand" data-cards="S:K94 H:AJ6 D:Q1073 C:K82" data-label="1♦ – P – P – ?: 1ST"></div>
<p>13 PH, balanceada, com ouros parados: um 1ST de reabertura, que mostra cerca de 11-14, e não os 15-18 de uma intervenção direta de 1ST.</p>

<h3>Quando eles acharam um fit</h3>
<div class="auction" data-calls="1S P 2S P P" data-dealer="E"></div>
<div class="hand" data-cards="S:73 H:QJ85 D:K1064 C:A92" data-label="Reabra com um dobre"></div>
<p>Os adversários acharam um fit em espadas e pararam no nível 2, então têm só cerca de metade da força em cartas altas. Se eles têm oito ou nove espadas, o seu lado muito provavelmente também tem um fit. Deixá-los jogar um contrato no nível 2 com fit costuma ser uma política perdedora. Dê um dobre informativo, convidando o parceiro a marcar o melhor naipe dele no nível 3.</p>

<h3>Quando não reabrir</h3>
<ul>
<li><strong>Quando você é longo no naipe deles.</strong> Então o parceiro é curto nele e, com valores, em geral teria dobrado. Eles podem estar num contrato ruim; deixe que o joguem.</li>
<li><strong>Quando eles não têm fit e estão em dificuldade.</strong> Se o abridor remarcou um segundo naipe e o respondedor deu uma preferência relutante, eles podem estar caindo: não os salve.</li>
<li><strong>Depois de 1ST – passo – passo</strong>, reabra só com um bom naipe ou distribuição. O parceiro do abridor pode ter até 7 pontos, e a força está mais bem dividida.</li>
</ul>
<div class="hand" data-cards="S:Q74 H:KJ953 D:A5 C:J82" data-label="1♥ – P – P – ?: passe"></div>
<p>11 PH, mas cinco copas — o naipe do abridor. O parceiro provavelmente tem no máximo uma ou duas copas e não dobrou, então é fraco. 1♥ provavelmente vai cair; passe.</p>
<div class="tip">Quando o parceiro reabre, lembre-se de que ele já contou com parte dos seus valores. Marque um nível mais cauteloso do que marcaria diante de uma ação na posição direta.</div>
<div class="warn">Não castigue o parceiro por reabrir o leilão. Se você tem uma boa mão e o parceiro reabre com um dobre, pense se ele não está fazendo uma reabertura leve antes de saltar ao game.</div>
`,
    keyPoints: [
      'Na posição de reabertura você pode agir com cerca de 3 PH a menos que na posição direta (“pegar um rei emprestado”).',
      'Depois de 1♥ – P – P: um naipe com cerca de 5-13, um dobre com cerca de 9+, 1ST com cerca de 11-14.',
      'Não deixe os adversários jogarem no nível 2 quando acharam um fit; compita.',
      'Cuidado ao reabrir quando você é longo no naipe deles.',
      'Quando o parceiro reabre, devolva o rei: não exagere na resposta.',
    ],
    quiz: [
      {
        q: '1♥ – P – P – ? Você tem ♠KJ84 ♥73 ♦A1063 ♣Q85 (10 PH).',
        options: ['Passo', 'Dobre', '1♠', '1ST'],
        answer: 1,
        explain: 'Copas curtas e apoio para os outros naipes. 10 PH é leve para um dobre direto, mas está bem na posição de reabertura.',
      },
      {
        q: '1♦ – P – P – ? Você tem ♠K94 ♥AJ6 ♦Q1073 ♣K82 (13 PH).',
        options: ['Passo', 'Dobre', '1ST', '2ST'],
        answer: 2,
        explain: 'Um 1ST de reabertura mostra cerca de 11-14 com parada. É exatamente esta mão.',
      },
      {
        q: '1♥ – P – P – ? Você tem ♠Q74 ♥KJ953 ♦A5 ♣J82 (11 PH).',
        options: ['Passo', 'Dobre', '1ST', '2♦'],
        answer: 0,
        explain: 'Com cinco cartas no naipe do abridor, o parceiro é curto em copas e teria dobrado com valores. 1♥ pode muito bem cair; passe.',
      },
      {
        q: 'Por que você pode reabrir com menos pontos do que precisaria na posição direta?',
        options: ['Como os adversários são fracos, o parceiro deve ter alguns valores', 'Porque as regras permitem', 'Porque você está vulnerável', 'Porque os adversários não podem dobrar'],
        answer: 0,
        explain: 'Se os adversários param num nível baixo, a força restante está dividida entre você e o parceiro. O parceiro pode ter passado com uma mão razoável por falta de uma boa voz.',
      },
      {
        q: 'Os adversários marcam 1♠ – 2♠ e passam. Na posição de reabertura, qual é o princípio geral?',
        options: ['Passar sempre: eles têm fit', 'Competir: quando eles têm fit no nível 2, o seu lado provavelmente também tem', 'Marcar só com 12+ PH', 'Dobrar para punir'],
        answer: 1,
        explain: 'Se eles têm oito ou nove trunfos, vocês provavelmente têm um fit próprio. Deixá-los jogar no nível 2 costuma ser pior que competir até o nível 3.',
      },
    ],
  },
  {
    id: 'law-of-total-tricks',
    title: 'A Lei das Vazas Totais',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Como o número de trunfos dos dois lados orienta as decisões competitivas na disputa do parcial.',
    body: `
<h3>A Lei</h3>
<p>O <strong>total de vazas</strong> de uma mão é a soma das vazas que Norte–Sul fazem no seu melhor naipe de trunfo com as vazas que Leste–Oeste fazem no deles. A Lei das Vazas Totais diz que esse total é aproximadamente igual ao <strong>total de trunfos</strong>: o comprimento do maior fit de Norte–Sul mais o comprimento do maior fit de Leste–Oeste.</p>
<p>Se vocês têm nove espadas e eles oito copas, há cerca de 17 vazas totais: se eles fazem nove vazas em copas, vocês fazem umas oito em espadas, e assim por diante.</p>

<h3>A regra prática</h3>
<p>Num leilão competitivo, marque até o nível igual ao número de trunfos do seu lado:</p>
<table>
<thead><tr><th>Trunfos do seu lado</th><th>Compita até</th></tr></thead>
<tbody>
<tr><td>8</td><td>O nível 2 (8 vazas)</td></tr>
<tr><td>9</td><td>O nível 3 (9 vazas)</td></tr>
<tr><td>10</td><td>O nível 4 (10 vazas)</td></tr>
</tbody>
</table>
<p>A lógica: com nove trunfos você está “seguro” no nível 3, porque mesmo que caia, os adversários provavelmente cumpririam alguma coisa. Com só oito, marcar no nível 3 é arriscado quando eles também têm oito, porque o total é só 16.</p>

<h3>Um exemplo</h3>
<div class="auction" data-calls="1S 2H 2S 3H" data-dealer="S"></div>
<div class="hand" data-cards="S:AQJ852 H:73 D:KJ4 C:Q5" data-label="Abridor: marque 3♠"></div>
<p>O apoio do parceiro mostra três trunfos. Com seis espadas, o seu lado tem nove: compita até 3♠. Se eles cumprem 3♥, o total de cerca de 17 vazas sugere que vocês fazem oito ou nove em espadas, então 3♠ é um bom resultado de qualquer jeito.</p>
<div class="hand" data-cards="S:AQJ85 H:73 D:KJ4 C:Q52" data-label="Abridor: passe"></div>
<p>Com cinco espadas, o seu lado tem oito. Se os dois lados têm oito trunfos (16 no total) e eles fazem nove vazas em copas, vocês fazem só sete em espadas: 3♠ cairia duas. Passe e defenda; os seus valores fora de espadas podem muito bem derrubar 3♥.</p>

<h3>Ajustes</h3>
<p>A Lei é uma aproximação. Espere <strong>mais</strong> vazas totais do que trunfos com:</p>
<ul>
<li>um fit duplo (um segundo fit num naipe lateral),</li>
<li>naipes curtos nos naipes dos adversários combinados com trunfos longos,</li>
<li>honras concentradas nos seus próprios naipes longos.</li>
</ul>
<p>Espere <strong>menos</strong> vazas totais com:</p>
<ul>
<li>damas e valetes nos naipes dos adversários (bons para a defesa, ruins para o ataque),</li>
<li>distribuição plana (4-3-3-3) em qualquer das mãos,</li>
<li>trunfos de má qualidade.</li>
</ul>

<h3>Princípios da disputa do parcial</h3>
<ul>
<li>Não entregue o leilão no nível 2 quando o seu lado tem um fit de oito cartas e os adversários também têm um.</li>
<li>Com nove trunfos, compita até o nível 3; faça apoios de barragem quando tiver trunfos extras, sobretudo com vulnerabilidade favorável.</li>
<li>Não marque três sobre três com só oito trunfos, a menos que tenha distribuição extra: defenda.</li>
<li>Cair uma sem dobre (−50 ou −100) é melhor que deixá-los cumprir um parcial (−110 ou −140).</li>
</ul>
<div class="tip">Quando o parceiro intervém e você tem apoio de quatro cartas e mão fraca, pense na Lei: nove ou dez trunfos entre vocês significam que você deve apoiar até o nível correspondente, dificultando a vida dos adversários.</div>
<div class="warn">Não use a Lei para marcar games e slams com mãos fracas. Ela é um guia para decisões competitivas de parcial, em que os dois lados estão marcando.</div>
`,
    keyPoints: [
      'Total de vazas (os melhores contratos dos dois lados) ≈ total de trunfos (os maiores fits dos dois lados).',
      'Compita até o nível igual ao número de trunfos do seu lado: 8 → nível 2, 9 → nível 3, 10 → nível 4.',
      'Com oito trunfos de cada lado, três sobre três costuma ser errado: defenda.',
      'Ajuste para cima com fits duplos e naipes curtos; para baixo com honras moles nos naipes deles e distribuição plana.',
      'Um pequeno resultado negativo sem dobre é melhor que deixá-los cumprir um parcial.',
    ],
    quiz: [
      {
        q: 'O seu lado tem nove trunfos num leilão competitivo de parcial. Até que nível a Lei sugere competir?',
        options: ['O nível 2', 'O nível 3', 'O nível 4', 'O nível 5'],
        answer: 1,
        explain: 'Marque até o nível igual aos seus trunfos: nove trunfos, nove vazas, o nível 3.',
      },
      {
        q: 'Cada lado tem um fit de oito cartas. Os adversários marcam 3♥ sobre o seu 2♠. O que a Lei sugere?',
        options: ['Marcar 3♠', 'Defender: com 16 vazas totais, se eles fazem nove, vocês fazem só sete', 'Marcar 4♠', 'Dobrar para punir, seja qual for a sua mão'],
        answer: 1,
        explain: 'Com 16 trunfos no total, as vazas somam cerca de 16. Se 3♥ cumpre, 3♠ cai duas; se 3♠ cumpriria, 3♥ cai. De qualquer forma, defender é pelo menos tão bom quanto.',
      },
      {
        q: 'Qual característica sugere mais vazas totais do que o número de trunfos?',
        options: ['Damas e valetes no naipe dos adversários', 'Uma distribuição 4-3-3-3', 'Um fit duplo com naipe curto no naipe dos adversários', 'Trunfos fracos'],
        answer: 2,
        explain: 'Um segundo fit e naipes curtos permitem que os dois lados façam mais vazas nos seus próprios contratos do que a contagem de trunfos sugere.',
      },
      {
        q: 'Você abriu 1♠ com seis espadas e mínimo. 1♠ – (2♥) – 2♠ – (3♥) – ?',
        options: ['Passo', '3♠', '4♠', 'Dobre'],
        answer: 1,
        explain: 'O parceiro tem três espadas, então o seu lado tem nove. Competir até 3♠ é o que a Lei recomenda.',
      },
      {
        q: 'Qual é um ajuste negativo, que sugere menos vazas totais?',
        options: ['Naipe curto no naipe dos adversários', 'Damas e valetes nos naipes dos adversários', 'Um fit de dez cartas', 'Um segundo fit'],
        answer: 1,
        explain: 'Honras moles nos naipes dos adversários fazem vazas na defesa, mas servem pouco quando você é o declarante, então os dois lados tendem a fazer menos vazas jogando.',
      },
    ],
  },

  {
    id: 'vulnerability-imps-matchpoints',
    title: 'Vulnerabilidade, IMPs, matchpoints e par',
    topic: 'Scoring & tactics',
    level: 'Intermediate',
    summary: 'Como a vulnerabilidade e a forma de pontuação mudam as suas decisões no leilão e no carteio.',
    body: `
<h3>Vulnerabilidade</h3>
<p>Cada mão indica quem está vulnerável. Do ponto de vista do seu lado, há quatro combinações, em geral descritas assim:</p>
<ul>
<li><strong>Favorável:</strong> vocês não vulneráveis, eles vulneráveis. Faça barragens e sacrifícios à vontade; as suas vazas abaixo são baratas e os games deles são caros.</li>
<li><strong>Igual:</strong> os dois lados não vulneráveis, ou os dois vulneráveis.</li>
<li><strong>Desfavorável:</strong> vocês vulneráveis, eles não. Cuidado: cair custa 100 por vaza sem dobre e 200-300 dobrado, enquanto os games deles valem menos.</li>
</ul>
<p>A vulnerabilidade também muda as decisões de game: um game vulnerável vale 500 extras em vez de 300, então vale a pena marcar games vulneráveis com valores mais justos, especialmente em IMPs.</p>

<h3>Equipes: IMPs</h3>
<p>Num match de equipes, as mesmas mãos são jogadas nas duas mesas, e a diferença de pontos é convertida em International Match Points (IMPs):</p>
<table>
<thead><tr><th>Diferença</th><th>IMPs</th><th>Diferença</th><th>IMPs</th></tr></thead>
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
<p>Diferenças de 0-10 valem 0; 3500-3990 valem 23 e 4000+ valem 24. A escala cresce devagar, então as grandes oscilações vêm de games e slams, e as vazas a mais quase não importam. Daí a estratégia em IMPs:</p>
<ul>
<li><strong>Marque games com agressividade.</strong> Não vulnerável, marcar 4♠ ganha 6 IMPs quando cumpre (+420 contra +170) e perde 5 quando cai (−50 contra +140): vale a pena com cerca de 45%. Vulnerável: ganha 10 (+620 contra +170) e perde 6 (−100 contra +140): vale a pena com cerca de 37%.</li>
<li><strong>Pequenos slams</strong> valem a pena com cerca de 50%; <strong>grand slams</strong>, só bem acima de 50% (o ponto de equilíbrio é cerca de 56-57%, e na prática você quer quase certeza).</li>
<li><strong>Segurança em primeiro lugar no carteio</strong>: abra mão de uma vaza a mais para proteger o contrato.</li>
</ul>

<h3>Pares: matchpoints</h3>
<p>Num torneio de pares, o seu resultado em cada mão é comparado com o de todos os outros pares que jogaram na sua direção, e você ganha um ponto (dois, em alguns métodos de pontuação) por cada um que superar. O <em>tamanho</em> da diferença não importa, só quantos pares você supera. Isso muda as prioridades:</p>
<ul>
<li>As vazas a mais importam: +450 supera +420 com a mesma certeza com que +620 supera +170.</li>
<li>Denominações que pontuam mais importam: 3ST com dez vazas (+430) supera 4♠ com dez (+420). Com duas mãos balanceadas e um fit 4-4 num rico, às vezes se escolhe 3ST por esse motivo.</li>
<li>Os parciais são disputados com garra: +110 contra +90 é uma grande diferença em matchpoints, e empurrar os adversários um nível acima para que caiam muitas vezes é a ação vencedora.</li>
<li>Dobrar um parcial por +200 pode superar todos os que marcaram +110 ou +140, mas, se eles cumprirem dobrado, você tira zero.</li>
<li>Jogadas de segurança que custam uma vaza a mais só são certas quando o próprio contrato corre perigo real.</li>
</ul>

<h3>Par</h3>
<p>O resultado <strong>par</strong> é o que acontece quando os dois lados marcam perfeitamente, conhecendo as quatro mãos. Por exemplo, se Leste–Oeste, vulneráveis, cumprem 4♠ (620) e Norte–Sul, não vulneráveis, fazem oito vazas em ouros, o par é 5♦ dobrado três abaixo por Norte–Sul: −500 é melhor para eles que −620. Os resultados reais são comparados com o par para ver qual lado ganhou, e pensar no par treina um bom julgamento competitivo.</p>
<div class="tip">Antes de cada mão, repare na vulnerabilidade. Pergunte-se: “Quanto vale o game deles, e quanto eu posso me dar ao luxo de perder?”</div>
<div class="warn">Não corra riscos desnecessários por vazas a mais em IMPs, e não faça jogadas de segurança que custam vazas a mais em matchpoints quando o contrato não está em perigo. A jogada certa pode depender da forma de pontuação.</div>
`,
    keyPoints: [
      'A vulnerabilidade favorável (vocês não vulneráveis, eles vulneráveis) é a hora de barragens e sacrifícios; a desfavorável é a hora de ter cuidado.',
      'IMPs: marque games não vulneráveis com cerca de 45%, games vulneráveis com cerca de 37%, pequenos slams com 50%.',
      'IMPs: as vazas a mais importam pouco; proteja o contrato.',
      'Matchpoints: cada par superado conta, então vazas a mais e denominações que pontuam mais importam.',
      'O par é o resultado do leilão perfeito dos dois lados, incluindo sacrifícios.',
    ],
    quiz: [
      {
        q: 'O que significa “vulnerabilidade desfavorável”?',
        options: ['Os dois lados vulneráveis', 'Vocês vulneráveis, eles não vulneráveis', 'Vocês não vulneráveis, eles vulneráveis', 'Nenhum lado vulnerável'],
        answer: 1,
        explain: 'Desfavorável significa que as suas vazas abaixo são caras e os games deles são relativamente baratos: o pior momento para sacrificar ou fazer barragens loucas.',
      },
      {
        q: 'Em IMPs, com que frequência, aproximadamente, um game vulnerável precisa cumprir para valer a pena marcá-lo?',
        options: ['Cerca de 37%', 'Cerca de 50%', 'Cerca de 60%', 'Cerca de 75%'],
        answer: 0,
        explain: 'Você ganha 10 IMPs (+620 contra +170) quando cumpre e perde 6 (−100 contra +140) quando cai, então o ponto de equilíbrio é cerca de 6/16 = 37,5%.',
      },
      {
        q: 'Em matchpoints, por que +430 contra +420 importa?',
        options: ['Não importa: a diferença é mínima', 'Cada par que você supera conta, por menor que seja a margem', 'Por causa da escala de IMPs', 'Porque sem trunfo ganha um bônus'],
        answer: 1,
        explain: 'Em pares, só a classificação importa. Dez pontos superam um par com a mesma certeza que mil.',
      },
      {
        q: 'Em IMPs, quantos IMPs vale uma diferença de 250 pontos?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explain: '220-260 são 6 IMPs. Por exemplo, +420 contra +170 quando uma equipe marca um game não vulnerável e a outra para num parcial.',
      },
      {
        q: 'Os adversários, vulneráveis, cumprem 4♠ (620). Vocês não estão vulneráveis e esperam cair três em 5♦ dobrado. Quanto isso vale?',
        options: ['Uma perda de 800', 'Uma perda de 500, que é melhor que −620', 'Uma perda de 300', 'Um ganho'],
        answer: 1,
        explain: 'Não vulnerável, três abaixo dobrado são 100 + 200 + 200 = 500. São 120 a menos que o game deles, então o sacrifício compensa se 4♠ realmente cumpre.',
      },
    ],
  },

  {
    id: 'safety-plays',
    title: 'Jogadas de segurança',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Como abrir mão de um pouco, em geral de uma vaza a mais, para proteger o contrato contra uma divisão ruim.',
    body: `
<h3>Um seguro para o seu contrato</h3>
<p>Uma <strong>jogada de segurança</strong> é um modo de jogar um naipe (ou a mão inteira) que protege contra uma divisão ruim, em geral ao custo de uma pequena chance de vaza extra. Você compra um seguro: abre mão de um pouco nas distribuições boas para evitar o desastre nas ruins. Por isso a primeira pergunta é sempre: <em>de quantas vazas preciso neste naipe?</em> A melhor jogada para quatro vazas muitas vezes é diferente da melhor jogada para cinco.</p>

<h3>Mantenha uma forquilha dos dois lados</h3>
<p>Você tem A Q 9 6 5 no morto diante de K 10 4 3 na mão, faltando J 8 7 2, e precisa de cinco vazas. Na maioria das vezes qualquer jogada sensata funciona; o perigo é as quatro cartas que faltam estarem numa só mão.</p>
<ul>
<li><strong>Bata primeiro o ás.</strong> Se Oeste não servir, Leste tem J 8 7, à frente do seu K 10, então você joga duas vezes do morto e faz a finesse. Se Leste não servir, Oeste tem J 8 7 à frente do Q 9 do morto, então você joga duas vezes da mão e faz a finesse. Cinco vazas, seja qual for o defensor com o comprimento.</li>
<li>Bater primeiro o rei é um erro: se Oeste então não servir, o J 8 7 de Leste fica atrás do A Q 9 restante do morto, o seu 10 4 3 não consegue capturar o valete, e Leste faz uma vaza.</li>
</ul>
<p>A regra geral: quando você tem todas as honras altas menos uma, bata primeiro a honra que deixa uma posição de finesse nas <em>duas</em> mãos.</p>

<h3>Abrir mão de uma vaza a mais para garantir o contrato</h3>
<p>Você tem A K 10 5 4 no morto diante de 8 7 6 e precisa de quatro vazas; pode se permitir perder uma. A jogada natural, ás, rei e mais uma, faz quatro vazas só cerca de 73% das vezes: falha contra as divisões 5-0 e a maioria das 4-1.</p>
<p>Melhor: bata o ás, depois jogue em direção ao morto e, se Oeste jogar baixo, ponha o 10. Se Leste ganhar com uma honra, o naipe em geral se dividiu 3-2 e o rei e as cartas longas estão bons; se o 10 ganhar, você capturou o comprimento de Oeste. Isso faz quatro vazas cerca de 82% das vezes: além de todas as divisões 3-2, resolve todas as 4-1 em que Oeste tem o comprimento. O preço é uma chance um pouco menor de cinco vazas, que só importa se você precisar delas.</p>

<h3>Ceder por segurança</h3>
<p>O morto tem A K 7 6 5 4 e só uma entrada lateral; você tem 3 2 e precisa de quatro vazas. Se jogar o ás, o rei e uma terceira volta, uma divisão 4-1 deixa você com duas perdedoras no naipe e sem como voltar às cartas longas. Em vez disso, ceda inteiramente a primeira volta. Depois você pode jogar para o ás e o rei e, se o naipe for 4-1, ceder mais uma volta e usar a entrada lateral para bater as duas últimas. Quatro vazas contra qualquer divisão 3-2 ou 4-1: 96%.</p>

<h3>Segurança para a mão inteira</h3>
<p>Segurança não é só questão de naipes isolados. Suponha que em 3ST você conte nove vazas, e uma finesse poderia dar a décima, mas, se perder, o defensor que ganha pode bater quatro vazas no naipe longo dele. Não a faça. Em equipes, uma vaza a mais vale no máximo 1 IMP e o contrato vale muito mais. Do mesmo modo, antes de correr um risco num naipe, pergunte-se se outro naipe poderia fornecer as vazas sem risco nenhum.</p>
<div class="tip">Antes de tocar num naipe decisivo, pergunte-se: “Qual é a pior divisão que eu consigo enfrentar, e que jogada a enfrenta?”</div>

<h3>Jogadas de segurança e a forma de pontuação</h3>
<ul>
<li><strong>Equipes (IMPs):</strong> faça quase todas as jogadas de segurança que protegem o contrato. Uma vaza a mais ganha muito pouco; um game que cai perde muito.</li>
<li><strong>Pares (matchpoints):</strong> as vazas a mais importam, porque todos os outros no mesmo contrato competem com você. Faça uma jogada de segurança só quando o contrato estiver realmente em perigo, ou quando suspeitar que está num contrato melhor que o do resto da sala.</li>
</ul>
<div class="warn">Uma jogada de segurança feita quando não era necessária, ou que protege contra o perigo errado, é só uma vaza perdida. Conte primeiro as suas vazas; depois decida se precisa de seguro e de que tipo.</div>
`,
    keyPoints: [
      'Decida primeiro de quantas vazas precisa no naipe; a melhor jogada depende disso.',
      'Com A Q 9 x x diante de K 10 x x, bata primeiro o ás para manter uma finesse contra qualquer dos defensores.',
      'Com A K 10 x x diante de x x x, precisando de quatro vazas, bata o ás e depois faça a finesse do 10.',
      'Ceda uma volta cedo quando faltam entradas e você pode se permitir uma perdedora.',
      'Em IMPs, faça jogadas de segurança à vontade; em matchpoints, só quando o contrato corre risco.',
    ],
    quiz: [
      {
        q: 'Você tem A Q 9 6 5 diante de K 10 4 3 e precisa de cinco vazas. Que carta deve bater primeiro?',
        options: ['O ás', 'O rei', 'A dama', 'Tanto faz'],
        answer: 0,
        explain: 'Depois do ás, você mantém K 10 atrás de Leste e Q 9 atrás de Oeste, então uma divisão 4-0 pode ser capturada, seja qual for o defensor com as quatro cartas.',
      },
      {
        q: 'Você tem A K 10 5 4 diante de 8 7 6 e precisa de só quatro vazas. Qual é a jogada de segurança?',
        options: ['Bater o ás e o rei, depois jogar uma terceira volta', 'Bater o ás, depois jogar em direção ao morto e fazer a finesse do 10 se Oeste jogar baixo', 'Jogar o 10 do morto', 'Ceder as duas primeiras voltas'],
        answer: 1,
        explain: 'Isso protege contra Oeste ter Q J 9 x e ainda faz quatro vazas em todas as divisões normais: cerca de 82%, contra cerca de 73% de bater as cartas altas.',
      },
      {
        q: 'O morto tem A K 7 6 5 4 e uma entrada lateral; você tem 3 2. Você precisa de quatro vazas no naipe. O que faz?',
        options: ['Ás, rei e depois uma terceira volta', 'Ceder a primeira volta', 'Jogar o 3 e fazer a finesse do 7', 'Bater o ás e torcer'],
        answer: 1,
        explain: 'Ceder a primeira volta preserva as cartas altas do morto como entradas. Assim você faz quatro vazas contra divisões 3-2 e 4-1, cerca de 96% das vezes.',
      },
      {
        q: 'Em IMPs você conta nove vazas em 3ST. Uma finesse poderia dar a décima, mas, se perder, a defesa pode correr um naipe. O que faz?',
        options: ['Fazer a finesse pela vaza a mais', 'Fazer as suas nove vazas', 'Ceder uma vaza primeiro', 'Jogar por um squeeze'],
        answer: 1,
        explain: 'A vaza a mais não vale quase nada em IMPs, enquanto cair custa um game. Garanta o contrato.',
      },
      {
        q: 'Por que as jogadas de segurança são feitas com menos frequência em matchpoints?',
        options: ['Porque lá são proibidas', 'Porque uma vaza a mais pode superar os outros pares no mesmo contrato', 'Porque os games valem menos', 'Porque os defensores são mais fracos'],
        answer: 1,
        explain: 'Em pares, +450 supera +420 com a mesma certeza com que +420 supera −50. Abrir mão de uma vaza a mais custa matchpoints sempre que o contrato nunca esteve realmente em perigo.',
      },
    ],
  },

  {
    id: 'avoidance-play',
    title: 'Jogada de evitação: o adversário perigoso fora da mão',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Como organizar o carteio para que, se tiver de perder uma vaza, você a perca para o defensor que não pode prejudicá-lo.',
    body: `
<h3>Mão perigosa e mão segura</h3>
<p>Muitas vezes só um defensor pode prejudicá-lo. Em sem trunfo, é o que tem vencedoras firmes no naipe longo. Num contrato em naipe, pode ser o que consegue jogar através de um rei, ou dar um corte ao parceiro. Identifique cedo a <strong>mão perigosa</strong> e planeje perder as vazas que tiver de perder para a <strong>mão segura</strong>. Isso é a jogada de evitação.</p>

<h3>Um exemplo completo</h3>
<div class="deal" data-n="S:54 H:K83 D:KQ5 C:AJ1093" data-e="S:97 H:Q975 D:J643 C:Q86" data-s="S:A632 H:AJ4 D:A72 C:K72" data-w="S:KQJ108 H:1062 D:1098 C:54" data-caption="3ST por Sul. Oeste sai com o ♠K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Conte:</strong> ♠A, ♥AK, ♦AKQ, ♣AK: oito vazas firmes. Os paus vão fornecer as vazas extras, mas talvez você tenha de perder uma para a ♣Q.</p>
<p><strong>Passo 1, deixar passar.</strong> Vocês têm seis espadas entre as duas mãos, então, pela Regra do 7, você deixa passar uma vez. Ceda o ♠K e ganhe a segunda espada. Leste começou com duas espadas, então agora não tem nenhuma: <strong>Leste é a mão segura, Oeste a mão perigosa.</strong></p>
<p><strong>Passo 2, escolha a finesse.</strong> Os paus são uma adivinhação de duas vias: você poderia fazer a finesse da dama contra qualquer dos defensores. Jogue o ♣K da mão, depois um pau baixo em direção ao morto e, quando Oeste jogar baixo, faça a finesse do 10. Se Oeste tiver a dama, a finesse ganha. Se Leste a tiver, como aqui, Leste ganha mas não tem espada para devolver. Você ganha a troca e faz dez vazas: uma de espadas, duas de copas, três de ouros e quatro de paus.</p>
<p>Fazer a finesse para o outro lado (jogando o ♣J através de Leste em direção ao seu rei) por acaso funcionaria nesta distribuição, mas perderia sempre que Oeste tivesse a dama, e Oeste então bateria as espadas. A linha de evitação ganha onde quer que esteja a dama.</p>
<p>E a finesse de copas, jogando em direção ao A J? Também perderia para Oeste se Oeste tivesse a ♥Q. Prefira o naipe em que a finesse perdida vai para a mão segura.</p>
<div class="tip">Com uma finesse de duas vias, pergunte primeiro: “Se esta finesse perder, importa quem ganha?” Se importar, faça a finesse contra a mão segura, e só recorra à adivinhação quando os dois defensores forem igualmente perigosos.</div>

<h3>Outras técnicas de evitação</h3>
<ul>
<li><strong>Ceda para a mão segura.</strong> Quando um naipe tem de entregar uma vaza, faça o defensor seguro ganhá-la: jogue da mão que lhe permite jogar baixo enquanto a mão perigosa não consegue ganhar barato.</li>
<li><strong>Proteja um rei.</strong> Com K x na mão e a mão perigosa à sua direita, uma saída através do seu rei é fatal, então mantenha a mão perigosa sem a mão.</li>
<li><strong>Jogue em direção às honras</strong> para que seja o parceiro da mão perigosa quem tenha de ganhar, e não a mão perigosa.</li>
<li><strong>Em contratos em naipe</strong>, o perigo pode ser um corte: se se sabe que um defensor é curto num naipe, mantenha o parceiro dele sem a mão, para que o corte não possa ser dado.</li>
</ul>
<div class="warn">A evitação só funciona se você souber qual defensor é perigoso. Observe a saída, o leilão e as cartas jogadas nas primeiras vazas, e descubra quem tem o naipe longo antes de começar o seu naipe decisivo.</div>
`,
    keyPoints: [
      'Identifique a mão perigosa (muitas vezes o defensor com vencedoras firmes) e a mão segura.',
      'Se tiver de perder uma vaza, perca-a para a mão segura.',
      'Combine deixar passar com a evitação: faça do parceiro de quem tem o naipe longo a mão segura e depois faça a finesse contra essa mão.',
      'Com uma finesse de duas vias, escolha a direção que só perde para a mão segura.',
      'Prefira a fonte de vazas em que a opção perdedora vai para a mão segura.',
    ],
    quiz: [
      {
        q: 'Em sem trunfo, qual defensor costuma ser a mão perigosa?',
        options: ['O que tem mais PH', 'O que tem vencedoras firmes no naipe longo', 'O que está à sua esquerda', 'Sempre o que fez a saída'],
        answer: 1,
        explain: 'A mão perigosa é a que consegue bater vazas suficientes para derrubá-lo quando ganha a mão, normalmente o defensor com o naipe longo firme.',
      },
      {
        q: 'Na mão acima, por que ceder a primeira espada?',
        options: ['Para ganhar uma vaza extra de espadas', 'Para esgotar as espadas de Leste, de modo que Leste vire a mão segura', 'Para esconder o seu comprimento em espadas', 'Para criar uma entrada no morto'],
        answer: 1,
        explain: 'Leste tinha duas espadas. Depois de você ganhar a segunda volta, Leste não tem nenhuma, então não pode prejudicá-lo quando ganhar a mão.',
      },
      {
        q: 'Na mão acima, para que lado você deve fazer a finesse de paus?',
        options: ['Contra Oeste, de modo que uma finesse perdida vá para Leste', 'Contra Leste', 'Jogar pela queda', 'Tirar cara ou coroa'],
        answer: 0,
        explain: 'Jogar em direção ao morto e fazer a finesse do 10 ganha se Oeste tiver a dama, e só perde para Leste, que não tem espadas. O contrato está seguro de qualquer jeito.',
      },
      {
        q: 'Por que não tentar a finesse de copas (jogando em direção ao A J) para a nona vaza?',
        options: ['Perderia se Oeste, a mão perigosa, tivesse a ♥Q', 'Não pode ganhar', 'Precisa de duas entradas', 'As copas estão bloqueadas'],
        answer: 0,
        explain: 'Jogar em direção ao A J faz a finesse contra Leste, mas perde para a dama de Oeste, e Oeste então bateria as espadas. A finesse de paus só perde para a mão segura.',
      },
      {
        q: 'Você tem K x na mão e a mão perigosa está à sua direita. Qual é o risco?',
        options: ['Nenhum', 'Uma saída da mão perigosa através do seu rei pode capturá-lo', 'O seu rei será cortado', 'Você pode bloquear o naipe'],
        answer: 1,
        explain: 'Se o defensor à sua direita ganhar a mão, o ás do parceiro dele fica sobre o seu rei. Mantenha esse defensor sem a mão, ou faça o outro defensor ganhar qualquer vaza que você tenha de perder.',
      },
    ],
  },
  {
    id: 'counting-on-defense',
    title: 'Contando na defesa',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Como os defensores contam os pontos, a distribuição e as vazas do declarante para achar a defesa certa.',
    body: `
<h3>Três coisas para contar</h3>
<p>Os bons defensores parecem enxergar através do verso das cartas. O segredo deles é contar. A partir do leilão e das primeiras vazas, eles deduzem três coisas:</p>
<ol>
<li><strong>Pontos:</strong> quantos PH têm o declarante e o parceiro.</li>
<li><strong>Distribuição:</strong> quantas cartas o declarante tem em cada naipe.</li>
<li><strong>Vazas:</strong> quantas vazas o declarante pode fazer, e de quantas a defesa precisa.</li>
</ol>

<h3>Contando os pontos</h3>
<p>Comece pelo leilão. Uma abertura de 1ST tem 15-17, um dois fraco 5-10, um apoio limite 10-12. Quando o morto aparecer, some os PH dele aos seus e subtraia de 40.</p>
<p>Exemplo: Sul abre 1ST e Norte apoia para 3ST. O morto tem 10 PH e você tem 9. O parceiro tem 40 − 10 − 9 − (15 a 17) = 4 a 6 PH. Se o parceiro já mostrou o ♠K ganhando uma vaza com ele, tem no máximo mais 3 PH, então não pode ter outro ás. Qualquer outro ás que falte está, portanto, com o declarante, e não adianta esperar que o parceiro ganhe a mão para bater o naipe longo dele.</p>
<p>A mesma conta funciona ao contrário. Se o declarante, que mostrou 15-17, já apareceu com ♠AQ, ♥AK e ♦K (16), não pode ter também o ♣A (seriam 20). Quem tem é o parceiro, e você pode jogar paus com segurança através do K do morto.</p>

<h3>Contando a distribuição</h3>
<p>Toda mão tem 13 cartas. Use primeiro o leilão: uma abertura de 1♥ tem cinco ou mais copas; 1♠ seguido de 2♥ mostra pelo menos cinco espadas e quatro copas; uma abertura de 1ST não tem singleton. Some os sinais de contagem do parceiro e o momento em que um jogador deixa de servir.</p>
<table>
<thead><tr><th>Fonte</th><th>O que você aprende</th></tr></thead>
<tbody>
<tr><td>A abertura e a remarcação do declarante</td><td>Comprimento nos naipes marcados; balanceada ou não</td></tr>
<tr><td>O morto</td><td>13 cartas que você vê</td></tr>
<tr><td>Os sinais de contagem do parceiro</td><td>O comprimento do parceiro nos naipes do declarante, e portanto o do declarante</td></tr>
<tr><td>Um jogador que deixa de servir</td><td>O comprimento exato dele nesse naipe</td></tr>
</tbody>
</table>
<p>Exemplo: o declarante abriu 1♠ e remarcou 2♥, então tem pelo menos 5-4 nos ricos. A contagem do parceiro mostra que o declarante tem dois ouros. Isso soma onze cartas, então o declarante tem no máximo dois paus, e, se o leilão sugere 5-4-2-2, tem exatamente dois. Se o declarante agora jogar paus em direção ao K Q x x do morto e você tiver o ás, você sabe se ceder pode isolá-lo do resto do naipe.</p>
<div class="tip">Conte a mão o mais cedo possível, de preferência até a terceira vaza. Guarde de cabeça os quatro comprimentos (por exemplo “5-4-2-2”) e atualize-os cada vez que uma carta lhe disser algo.</div>

<h3>Contando as vazas</h3>
<p>Pergunte-se: “Quantas vazas o declarante pode fazer quando ganhar a mão?” Se a resposta já alcança o contrato, você tem de fazer as suas vazas agora: troque de naipe, bata, ou faça já a vaza que derruba. Se faltam vazas ao declarante, defenda passivamente e deixe que ele as perca.</p>
<p>Exemplo: contra 4♠, o morto tem ♣A K Q J 5, e o leilão e o começo do carteio mostram que o declarante tem um naipe forte de espadas e o ♥A. Depois de tirar os trunfos, o declarante conta cinco espadas, cinco paus e o ♥A: onze vazas. Se você tem vazas em copas ou ouros, elas têm de ser feitas imediatamente, mesmo com o risco de sair debaixo de um rei.</p>
<p>Ao contrário, contra um leilão 1ST – 3ST com um morto plano e sem naipe longo, o declarante pode ter só sete ou oito vazas. Nesse caso a defesa deve evitar abrir naipes novos e esperar: o declarante terá de entregar vazas.</p>

<h3>Juntando tudo</h3>
<p>Contar não é um cálculo único, mas um hábito. A cada vaza, pergunte-se o que a carta jogada diz sobre as quatro mãos. À medida que o quadro fica claro, a defesa certa muitas vezes se torna óbvia, e, quando não se torna, a contagem pelo menos diz de quais distribuições você precisa para que o contrato caia. Jogue por essas distribuições.</p>
<div class="warn">Não conte só as vazas do seu lado. A pergunta é sempre se o declarante pode cumprir o contrato, e como o seu lado pode impedir.</div>
`,
    keyPoints: [
      'Conte os pontos: com o leilão, o morto e a sua mão, deduza os PH do parceiro.',
      'Conte a distribuição: leilão, morto, sinais de contagem do parceiro e naipes que faltam somam 13.',
      'Conte as vazas do declarante: se ele tem o bastante, faça as suas vazas agora; se não, defenda passivamente.',
      'Quando o declarante mostrou uma faixa, as honras já jogadas limitam o que mais ele pode ter.',
      'Suponha a distribuição que permite derrubar o contrato e defenda de acordo.',
    ],
    quiz: [
      {
        q: 'Sul abriu 1ST (15-17) e Norte apoiou para 3ST. O morto tem 10 PH e você tem 9. Quantos PH tem o parceiro?',
        options: ['0-2', '4-6', '7-9', '10-12'],
        answer: 1,
        explain: '40 − 10 − 9 = 21 para o declarante e o parceiro juntos. O declarante tem 15-17, então o parceiro tem 4-6.',
      },
      {
        q: 'O declarante abriu 1ST (15-17) e já mostrou ♠AQ, ♥AK e ♦K. Quem tem o ♣A?',
        options: ['O declarante', 'O parceiro', 'Não dá para saber', 'O morto'],
        answer: 1,
        explain: 'O declarante mostrou 16 PH. O ♣A o levaria a 20, fora da faixa, então o parceiro tem de tê-lo.',
      },
      {
        q: 'O declarante abriu 1♠ e remarcou 2♥. A contagem do parceiro mostra que o declarante tem dois ouros. Quantos paus, no máximo, o declarante pode ter?',
        options: ['Um', 'Dois', 'Três', 'Quatro'],
        answer: 1,
        explain: 'Pelo menos cinco espadas e quatro copas mais dois ouros somam onze, então o declarante tem no máximo dois paus.',
      },
      {
        q: 'Contra 4♠, você conta onze vazas para o declarante quando ele recuperar a mão. O que a defesa deve fazer?',
        options: ['Defender passivamente', 'Fazer ou firmar as suas vazas imediatamente', 'Jogar trunfo', 'Esperar que o declarante erre'],
        answer: 1,
        explain: 'Se o declarante tem as vazas de que precisa, a defesa passiva só deixa que ele as faça. A sua única chance é fazer as suas vazas agora.',
      },
      {
        q: 'Contra 3ST, o morto é plano e o declarante parece ter só sete ou oito vazas. Que tipo de defesa costuma ser o melhor?',
        options: ['Passiva: evitar abrir naipes novos', 'Atacar cada naipe por vez', 'Bater todos os seus ases de uma vez', 'Sair debaixo dos seus reis'],
        answer: 0,
        explain: 'Faltam vazas ao declarante. Abrir naipes novos arrisca lhe dar uma; saídas seguras obrigam o declarante a achar as vazas sozinho.',
      },
    ],
  },

  {
    id: 'penalty-doubles-and-sacrifices',
    title: 'Dobres punitivos e sacrifícios',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Quando dobrar os adversários para punir, e quando continuar até um contrato que você espera que caia porque custa menos que o deles.',
    body: `
<h3>Dobres punitivos</h3>
<p>Muitos dobres em nível baixo são informativos, então os dobres punitivos surgem de algumas situações claras:</p>
<ul>
<li><strong>Depois de uma sequência de dobre negativo:</strong> o respondedor passa com cartas fortes no naipe do interventor, e o abridor reabre com um dobre que o respondedor passa (veja a lição “Dobres negativos”).</li>
<li><strong>Depois que o seu lado redobrou</strong> (1♥ – X – XX), vocês mostraram que a força é sua, e os dobres das vozes de fuga dos adversários são punitivos.</li>
<li><strong>Quando os adversários se esticaram</strong> até um game ou um parcial alto num misfit ou num leilão competitivo, e você tem vazas de trunfo.</li>
<li><strong>Quando você já descreveu a sua mão</strong> e o parceiro tem valores: um dobre de qualquer um dos dois diz então “podemos derrubar isto”.</li>
</ul>
<h4>Orientações</h4>
<ul>
<li>Vazas de trunfo são o melhor motivo para dobrar. Cartas altas em naipes laterais podem ser cortadas ou capturadas por finesse.</li>
<li>Não dobre um game marcado livremente só com cartas altas. Os adversários sabem o que lhes falta, e o seu dobre diz ao declarante onde estão as honras.</li>
<li>Pense no que acontece se o contrato cumprir. 2♥ dobrado cumprido vale 470 ou 670: um parcial virou game.</li>
<li>Pense para onde eles podem fugir. Dobrar 1♠ quando eles têm uma fuga fácil para um fit melhor ganha pouco.</li>
</ul>

<h3>Quanto custa cair dobrado?</h3>
<table>
<thead><tr><th>Abaixo</th><th>Não vul. dobrado</th><th>Vul. dobrado</th></tr></thead>
<tbody>
<tr><td>1</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>300</td><td>500</td></tr>
<tr><td>3</td><td>500</td><td>800</td></tr>
<tr><td>4</td><td>800</td><td>1100</td></tr>
</tbody>
</table>

<h3>Sacrifícios</h3>
<p>Um <strong>sacrifício</strong> é um contrato em que você espera cair, porque a multa vai custar menos do que o contrato dos adversários valeria. Compare os números:</p>
<table>
<thead><tr><th>O game deles</th><th>Vale</th><th>Você pode perder (dobrado), não vul.</th><th>Você pode perder (dobrado), vul.</th></tr></thead>
<tbody>
<tr><td>Não vulnerável</td><td>420</td><td>2 abaixo (300)</td><td>1 abaixo (200)</td></tr>
<tr><td>Vulnerável</td><td>620</td><td>3 abaixo (500)</td><td>2 abaixo (500)</td></tr>
</tbody>
</table>
<p>Por isso os sacrifícios são mais baratos com <strong>vulnerabilidade favorável</strong>: vocês não vulneráveis, eles vulneráveis.</p>
<div class="auction" data-calls="1S 2H 4S" data-dealer="W"></div>
<div class="hand" data-cards="S:5 H:K9743 D:Q862 C:J74" data-label="Vulnerabilidade favorável: marque 5♥"></div>
<p>O parceiro interveio com 2♥ e Leste saltou para 4♠. Você tem apoio de cinco cartas em copas, singleton de espadas e pouca defesa: 4♠ quase certamente vai cumprir, valendo 620. 5♥ dobrado provavelmente cai duas ou três: 300 ou 500. Marque 5♥ agora, antes que os adversários possam trocar mais informação.</p>

<h3>Quando não sacrificar</h3>
<ul>
<li><strong>Quando o contrato deles pode cair.</strong> Um sacrifício contra um contrato que teria caído é um <em>sacrifício fantasma</em>: você transforma um resultado positivo em negativo. Se você tem vazas de defesa, defenda.</li>
<li><strong>Quando o custo é alto demais.</strong> Vulnerável contra não vulnerável, quase nunca há um sacrifício lucrativo contra um game.</li>
<li><strong>Quando você já descreveu a sua mão e o parceiro está em melhor posição para decidir</strong>: quem tem mais informação toma a decisão. Não contrarie a decisão do parceiro de defender. Se o parceiro fez um passo forcing, siga o acordo da dupla.</li>
<li><strong>Quando os adversários podem continuar marcando.</strong> Deixados em paz, eles podem seguir até um contrato no nível 5 que cai; um sacrifício, por outro lado, pode empurrá-los para um slam que cumpre.</li>
</ul>
<div class="tip">“O nível 5 pertence aos adversários”: quando eles marcam cinco sobre o seu game no nível 4, defender (muitas vezes dobrando) costuma ser o certo. Marcar seis para sacrificar raramente compensa.</div>
<div class="warn">Decida cedo. Um sacrifício marcado depressa, antes que os adversários troquem informação, é muito mais eficaz do que um feito depois que eles descobriram exatamente onde devem jogar.</div>
`,
    keyPoints: [
      'Os dobres punitivos funcionam melhor com vazas de trunfo, depois que o seu lado mostrou ter a força.',
      'Não dobre games marcados livremente só com cartas altas laterais, e cuidado ao dobrar um parcial para game.',
      'Um sacrifício compensa quando a multa é menor que o valor do contrato deles.',
      'Contra um game vulnerável (620), não vulnerável você pode cair três dobrado (500); contra um game não vulnerável (420), duas (300).',
      'Evite sacrifícios fantasma: se você tem vazas de defesa, defenda.',
    ],
    quiz: [
      {
        q: 'Os dois lados não estão vulneráveis. Os adversários cumprem 4♠ (420). Quantas vazas abaixo dobrado você pode se permitir num sacrifício?',
        options: ['Uma', 'Duas', 'Três', 'Quatro'],
        answer: 1,
        explain: 'Duas abaixo dobrado, não vulnerável, são 300, menos que 420. Três abaixo são 500, mais que o game deles.',
      },
      {
        q: 'Com vulnerabilidade favorável, os adversários cumprem um 4♠ vulnerável (620). Quantas abaixo dobrado você pode se permitir?',
        options: ['Duas', 'Três', 'Quatro', 'Cinco'],
        answer: 1,
        explain: 'Três abaixo dobrado, não vulnerável, custam 500, menos que 620. Quatro abaixo custam 800.',
      },
      {
        q: 'O que é um sacrifício fantasma?',
        options: ['Um sacrifício que custa exatamente o valor do game deles', 'Um sacrifício contra um contrato que teria caído', 'Um sacrifício no nível 6', 'Um sacrifício que os adversários não dobram'],
        answer: 1,
        explain: 'Se o contrato deles ia cair, o seu sacrifício transforma um resultado positivo em negativo. Valores de defesa são um motivo para não sacrificar.',
      },
      {
        q: 'Os adversários marcam 1♥ – 3♥ – 4♥ sem interferência. Você tem 12 PH, mas só copas pequenas. Deve dobrar?',
        options: ['Sim: você tem mão de abertura', 'Não: cartas altas fora do trunfo raramente justificam dobrar um game marcado livremente', 'Sim, para pedir uma saída', 'Só se estiver vulnerável'],
        answer: 1,
        explain: 'Eles esperam que lhes faltem cartas altas. O seu dobre ganha pouco se caírem uma, custa muito se cumprirem e ajuda o declarante a localizar as honras que faltam.',
      },
      {
        q: 'Por que dobrar um parcial baixo pode sair caro?',
        options: ['Nunca sai', 'Porque, se cumprir, os pontos de vaza dobrados podem chegar ao game: 2♥ dobrado vale 470 ou 670', 'Porque os adversários ganham um bônus por serem dobrados', 'Porque você tem de sair de trunfo'],
        answer: 1,
        explain: 'Dobrado, 2♥ tem 120 pontos de vaza, o que conta como game. Espere derrubar um parcial antes de dobrá-lo.',
      },
    ],
  },

  {
    id: 'slam-controls-and-cue-bids',
    title: 'Controles e cue-bids: quando não usar o Blackwood',
    topic: 'Slam bidding',
    level: 'Advanced',
    summary: 'Por que contar ases não basta para o slam, e como os cue-bids de controle descobrem se todos os naipes estão cobertos.',
    body: `
<h3>Controles</h3>
<p>Para cumprir um slam você precisa de vazas suficientes, e também tem de impedir que os adversários façam duas vazas antes de você deslanchar. Um naipe está <strong>controlado</strong> se os adversários não podem bater nele duas vazas rápidas:</p>
<ul>
<li><strong>Controle de primeira volta:</strong> o ás ou uma chicana (num contrato em naipe).</li>
<li><strong>Controle de segunda volta:</strong> o rei ou um singleton.</li>
</ul>
<p>Para um pequeno slam você precisa de pelo menos controle de segunda volta em todos os naipes laterais e de no máximo uma perdedora de primeira volta no total. Para um grand slam você precisa de controle de primeira volta em todos os naipes e de nenhuma perdedora.</p>
<p>Alguns jogadores contam os controles com A = 2 e K = 1 (12 no baralho). Mãos ricas em ases e reis fazem slams que 33 pontos feitos de damas e valetes não fazem.</p>

<h3>Onde o Blackwood falha</h3>
<div class="deal" data-n="S:K5 H:AKJ84 D:83 C:AJ104" data-s="S:AQ63 H:Q1052 D:72 C:KQ5" data-caption="Norte abre 1♥ e Sul apoia com Jacoby 2ST."></div>
<p>Norte tem 16 PH e Sul 13, com um fit de nove cartas em copas: uma tentativa de slam é razoável. Se Sul usar o Blackwood, Norte mostra dois ases, Sul tem o terceiro, e Sul marca 6♥. A defesa bate o ♦A e o ♦K. O Blackwood disse que havia três ases, mas não podia dizer a Sul que nenhuma das mãos controla os ouros.</p>
<p>Não use o Blackwood quando:</p>
<ul>
<li>você tem duas cartas pequenas (ou mais) num naipe que ninguém marcou e não sabe se o parceiro o controla;</li>
<li>você tem uma chicana: o ás do parceiro no naipe da sua chicana é desperdiçado, mas o Blackwood o conta;</li>
<li>a resposta pode levá-lo alto demais, por exemplo com paus como trunfo, em que uma resposta de 5♥ não deixa como parar em 5♣.</li>
</ul>

<h3>Cue-bids (de controle)</h3>
<p>Depois de combinado o naipe de trunfo num leilão forcing, a voz de um naipe novo no nível 4 não é um naipe próprio: mostra um <strong>controle</strong> nesse naipe e interesse em slam. O parceiro responde mostrando por sua vez o seu controle mais barato, ou para no naipe de trunfo. No estilo moderno mais comum, um cue-bid mostra controle de primeira ou de segunda volta (ás, rei, chicana ou singleton), e você mostra primeiro o mais barato, então <strong>pular um naipe nega controle nele</strong>.</p>
<div class="auction" data-calls="1H P 2NT P 3NT P 4C P 4H P P P" data-dealer="N"></div>
<p>Depois do Jacoby 2ST, o 3ST de Norte mostra uma mão média (15-17) sem naipe curto, a remarcação padrão ao Jacoby. Sul marca 4♣: controle em paus e interesse em slam. Norte não tem controle em ouros, então, em vez de mostrar o controle de espadas, Norte para em 4♥, pulando 4♦: isso nega controle em ouros. Sul também não tem controle em ouros, então passa. As duas mãos cumpriram o seu papel, e a dupla para com segurança no game.</p>
<p>Se Norte tivesse o ♦K em vez do ♠K, teria feito cue-bid de 4♦ sobre 4♣. Aí todos os naipes estariam controlados, Sul poderia seguir rumo ao slam, e o Blackwood seria seguro para conferir os ases no fim.</p>
<p>Os robôs marcam assim depois de combinado um rico num leilão forcing de game, após um apoio Jacoby 2ST ou um splinter. Também usam um cue-bid de controle como tentativa de slam num leilão natural: quando o parceiro acabou de marcar um rico que eles poderiam apoiar a game, e o slam é provável se o parceiro tiver um pouco mais do que mostrou, um naipe novo no nível 4 (um que o lado deles não marcou) apoia o rico do parceiro e mostra um controle. Os cue-bids deles mostram controles de primeira ou de segunda volta, o mais barato primeiro, abaixo do game no rico combinado.</p>

<h3>Combinando as ferramentas</h3>
<ol>
<li>Combine o trunfo num leilão forcing.</li>
<li>Faça cue-bids para garantir que todos os naipes laterais estão controlados.</li>
<li>Quando todos os naipes estiverem cobertos, use o Blackwood (os robôs jogam o Blackwood de cartas-chave) para garantir que não faltam dois ases, ou um ás e o rei de trunfo.</li>
<li>Marque o slam, ou pare.</li>
</ol>
<div class="tip">Antes de marcar 4ST, pergunte-se: “Se o parceiro mostrar o número certo de ases, vou saber o que marcar?” Se a resposta for não, faça um cue-bid.</div>
<div class="warn">Confirme que a sua dupla combinou os cue-bids antes de tentá-los. Um cue-bid que o parceiro entende como naipe natural pode terminar num contrato muito estranho.</div>
`,
    keyPoints: [
      'Um slam exige todos os naipes laterais controlados: um ás ou chicana (primeira volta), ou um rei ou singleton (segunda volta).',
      'O Blackwood conta ases, mas não diz quais, nem se um naipe lateral tem duas perdedoras rápidas.',
      'Não use o Blackwood com uma chicana, com duas cartas pequenas num naipe não marcado, ou quando a resposta pode levá-lo alto demais.',
      'Os cue-bids mostram controles, o mais barato primeiro; pular um naipe nega controle nele.',
      'Faça primeiro os cue-bids para conferir cada naipe, depois use o Blackwood para conferir os ases.',
    ],
    quiz: [
      {
        q: 'Quais cartas dão controle de segunda volta num naipe, num contrato com trunfo?',
        options: ['Ás ou chicana', 'Rei ou singleton', 'Dama ou doubleton', 'Duas honras quaisquer'],
        answer: 1,
        explain: 'Com o rei ou um singleton, os adversários podem fazer no máximo uma vaza rápida no naipe. O ás ou uma chicana é controle de primeira volta.',
      },
      {
        q: 'Na mão acima, por que o Blackwood leva a um slam ruim?',
        options: ['Porque faltam dois ases', 'Porque nenhuma das mãos controla os ouros, o que o Blackwood não consegue revelar', 'Porque as copas se dividem mal', 'Porque Norte tem poucos pontos'],
        answer: 1,
        explain: 'Falta só um ás, mas é o ♦A, e o ♦K também falta. Os adversários batem duas vazas de ouros de saída.',
      },
      {
        q: 'Copas estão combinadas num leilão forcing. O parceiro faz cue-bid de 4♣ e você marca 4♥, pulando 4♦. O que disse ao parceiro?',
        options: ['Tenho controle em ouros', 'Não tenho controle em ouros', 'Tenho o ♠A', 'Quero jogar em ouros'],
        answer: 1,
        explain: 'Os cue-bids são feitos do mais barato para o mais caro. Ao pular 4♦ você nega controle em ouros, então o parceiro sabe que deve parar, a menos que ele mesmo controle os ouros.',
      },
      {
        q: 'Você tem chicana em paus e quer explorar um slam em espadas. Por que o Blackwood é uma escolha ruim?',
        options: ['Porque chicanas contam como ases', 'Porque o ♣A do parceiro seria desperdiçado, e mesmo assim o Blackwood o contaria', 'Porque 4ST seria quantitativo', 'Porque você precisa de 37 pontos'],
        answer: 1,
        explain: 'O Blackwood diz quantos ases o parceiro tem, não quais. O ás diante da sua chicana não contribui com nada.',
      },
      {
        q: 'Qual é uma ordem sensata de ferramentas para um slam em naipe?',
        options: ['Blackwood primeiro, depois cue-bids', 'Combinar o trunfo, fazer cue-bids de controle, depois Blackwood', 'Marcar o slam direto com 33 pontos', 'Gerber, depois Blackwood'],
        answer: 1,
        explain: 'Os cue-bids revelam se todos os naipes estão cobertos; o Blackwood então garante que não faltam dois ases à dupla.',
      },
    ],
  },

  {
    id: 'squeezes-and-endplays',
    title: 'Introdução aos squeezes e às jogadas de entrega',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Duas técnicas avançadas que criam uma vaza do nada, obrigando um defensor a descartar uma guarda ou a jogar contra a sua força.',
    body: `
<h3>Quando finesses e divisões não bastam</h3>
<p>Algumas vazas não se ganham pela força nem por finesse. Ganham-se porque um defensor é <em>obrigado</em> a entregá-las, seja por ter de descartar uma carta de que precisa (um <strong>squeeze</strong>), seja por ter de jogar quando qualquer carta custa uma vaza (uma <strong>jogada de entrega</strong>). As duas costumam acontecer no fim da mão, e as duas exigem contagem cuidadosa.</p>

<h3>O squeeze simples</h3>
<p>Um squeeze funciona quando um único defensor guarda dois naipes. Quando você joga a sua última vencedora num terceiro naipe, esse defensor tem de largar uma das guardas, e o naipe abandonado lhe dá uma vaza extra.</p>
<div class="deal" data-n="S:- H:AJ D:- C:3" data-w="S:- H:KQ D:Q C:-" data-e="S:- H:- D:98 C:7" data-s="S:A H:2 D:J C:-" data-caption="Sem trunfo. Sul está com a mão e precisa das três vazas."></div>
<p>Oeste guarda as copas (K Q contra o A J do morto) e os ouros (a Q contra o seu J). Sul joga o ♠A, a <strong>carta de squeeze</strong>, e Oeste tem de descartar antes do morto:</p>
<ul>
<li>Se Oeste largar a ♦Q, o seu ♦J é vencedor.</li>
<li>Se Oeste largar uma copa, o morto descarta o ♣3; você joga o ♥2 para o ás, derrubando a honra restante de Oeste, e o ♥J do morto ganha a última vaza.</li>
</ul>
<p>Sem o squeeze, você teria só duas vazas.</p>
<h4>Do que um squeeze precisa</h4>
<ul>
<li><strong>Ameaças:</strong> cartas que viram vencedoras se o defensor largar a guarda (aqui o ♥J do morto e o seu ♦J).</li>
<li><strong>Um defensor ocupado nos dois naipes.</strong> Se o parceiro dele pudesse guardar um dos naipes, não haveria squeeze.</li>
<li><strong>Entradas</strong> para chegar às ameaças depois do descarte (aqui o ♥A, com uma copa na sua mão para chegar lá).</li>
<li><strong>A contagem certa:</strong> quando a carta de squeeze é jogada, você tem de poder ganhar todas as vazas restantes menos uma. Perder <em>cedo</em> as vazas que tem de perder, para que isso seja verdade, chama-se <strong>retificar a contagem</strong>. Um sinal típico: você vê que um squeeze é possível, mas tem duas perdedoras; ceda uma vaza cedo, para que reste só uma.</li>
</ul>
<div class="tip">Nem sempre é preciso enxergar o squeeze com antecedência. Correr um naipe longo até o fim, guardando as suas cartas de ameaça, dá aos defensores muitas chances de descartar errado, e às vezes eles simplesmente não conseguem evitar.</div>

<h3>A jogada de entrega</h3>
<p>Uma jogada de entrega dá a mão a um defensor num momento em que qualquer carta que ele jogue lhe dá uma vaza: ele tem de jogar contra a sua forquilha, ou lhe dar um corte e descarte.</p>
<div class="deal" data-n="S:- H:3 D:- C:AQ" data-w="S:- H:- D:J109 C:-" data-e="S:- H:A D:- C:K8" data-s="S:- H:6 D:- C:42" data-caption="Sem trunfo. Sul está com a mão; Leste tem o ♣K."></div>
<p>Se você jogar paus e fizer a finesse da dama, Leste ganha com o rei e bate o ♥A: você faz uma vaza. Em vez disso, jogue o ♥6. Leste ganha com o ás e agora só tem paus, então tem de sair debaixo do rei contra o A Q do morto, e você faz duas vazas.</p>
<h4>Eliminação e entrega num contrato em naipe</h4>
<p>Num contrato com trunfo, a mesma ideia se chama eliminação. Tire os trunfos, mas guarde pelo menos um em cada mão. <strong>Elimine</strong> os naipes laterais pelos quais o defensor poderia sair com segurança, batendo-os ou cortando-os. Depois entregue a mão ao defensor no naipe que sobrou. O defensor terá então de jogar contra a sua forquilha ou jogar um naipe em que você está em chicana nas duas mãos, o que lhe permite cortar numa mão e descartar uma perdedora da outra.</p>
<p>As jogadas de eliminação muitas vezes transformam uma finesse de 50% numa certeza: com A J x diante de K 10 x e faltando a dama, você nunca precisa adivinhar se um defensor for obrigado a abrir o naipe para você.</p>
<div class="warn">Uma jogada de entrega falha se o defensor ainda tiver uma carta segura para jogar. Antes da entrega, confira que todos os naipes pelos quais o defensor poderia sair foram eliminados da mão dele ou das suas duas mãos.</div>
`,
    keyPoints: [
      'Um squeeze obriga um defensor que guarda dois naipes a descartar uma das guardas.',
      'Um squeeze precisa de ameaças, um defensor ocupado, entradas e a contagem retificada (todas as vazas restantes menos uma).',
      'Uma jogada de entrega dá a mão a um defensor quando qualquer carta que ele jogue custa uma vaza ao lado dele.',
      'Eliminação e entrega: tire os trunfos (guardando alguns nas duas mãos), elimine os naipes laterais e depois entregue a mão ao defensor.',
      'Correr um naipe longo guardando as suas ameaças dá aos defensores a chance de errar.',
    ],
    quiz: [
      {
        q: 'Qual é a condição essencial para um squeeze simples?',
        options: ['Os dois defensores estão em chicana num naipe', 'Um único defensor guarda dois naipes', 'Você tem todos os ases', 'Os trunfos se dividem 3-2'],
        answer: 1,
        explain: 'Se um defensor tem de guardar dois naipes, não consegue manter as duas guardas quando é obrigado a descartar. Se o parceiro dele puder guardar um dos naipes, não há squeeze.',
      },
      {
        q: 'O que significa “retificar a contagem”?',
        options: ['Contar os pontos dos adversários', 'Perder cedo as vazas que você tem de perder, para que, quando a carta de squeeze for jogada, você possa ganhar todas as vazas restantes menos uma', 'Tirar o último trunfo', 'Contar duas vezes as suas vencedoras'],
        answer: 1,
        explain: 'Um squeeze precisa que o defensor fique sem cartas sobrando. Se você ainda tem duas perdedoras, o defensor tem uma carta sobrando para descartar; ceder uma vaza cedo a elimina.',
      },
      {
        q: 'No final de squeeze acima, o que acontece se Oeste descartar a ♦Q?',
        options: ['O ♦J de Sul vira vencedor', 'O ♥J do morto vira vencedor', 'Leste ganha uma vaza de ouros', 'Nada muda'],
        answer: 0,
        explain: 'Oeste era a única guarda contra o ♦J. Quando a dama sai, o seu valete é o ouro mais alto que resta.',
      },
      {
        q: 'No final de jogada de entrega acima, por que Leste tem de lhe dar uma vaza?',
        options: ['Leste tem de servir copas', 'Depois de ganhar com o ♥A, Leste só tem paus e tem de sair do K contra o A Q', 'Leste está sob squeeze', 'Leste tem de cortar'],
        answer: 1,
        explain: 'Com a mão entregue pelo ♥A, Leste não tem saída segura. Qualquer pau que Leste jogue deixa a dama do morto ganhar, e o ás então derruba o rei.',
      },
      {
        q: 'Numa eliminação e entrega num contrato em naipe, o que você precisa guardar antes de entregar a mão a um defensor?',
        options: ['Um trunfo em cada uma das suas mãos', 'Todos os seus ases', 'Uma entrada para o parceiro do defensor', 'Um trunfo perdedor'],
        answer: 0,
        explain: 'Com trunfos nas duas mãos, um defensor que jogue um naipe em que você está em chicana lhe dá um corte e descarte. Assim só lhe restam saídas contra a sua forquilha.',
      },
    ],
  },
];
