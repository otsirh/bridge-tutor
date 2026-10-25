// Lições sobre a competição contra o 1ST e as barragens dos adversários, e
// sobre o que fazer quando eles dobram a nossa abertura.
// Regras de marcação: ver src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_COMPETITION: Lesson[] = [
  {
    id: 'competing-over-1nt',
    title: 'Competir sobre o 1ST deles',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Quando dobrar ou intervir sobre o 1ST forte dos adversários, quando ficar de fora e como o parceiro responde.',
    body: `
<h3>Uma abertura forte e precisa</h3>
<p>Quando um adversário abre 1ST, mostra 15-17 PH e uma mão balanceada. Isso deixa no máximo 25 PH para os outros três jogadores, e o parceiro do abridor sabe quase exatamente o que o lado dele tem. O seu lado raramente tem game, então você marca por um de dois motivos: com uma mão forte, para dobrá-los e punir; com um naipe longo, para disputar o parcial. Uma voz no nível 2 ainda tira deles o Stayman e os transfers.</p>

<h3>O que os bots jogam</h3>
<table>
<thead><tr><th>Voz sobre 1ST</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Dobre</td><td>15+ PH, qualquer distribuição: punitivo. O parceiro passa</td></tr>
<tr><td>2♣ / 2♦</td><td>Natural: 8-15 PH e um naipe de seis cartas ou mais</td></tr>
<tr><td>2♥ / 2♠</td><td>Natural: 8-15 PH e um naipe de seis cartas, ou um bom naipe de cinco (duas das três honras maiores ou três das cinco honras)</td></tr>
<tr><td>Passo</td><td>Todo o resto</td></tr>
</tbody>
</table>
<p>O naipe que você marca tem de ser o mais longo. Saltos e 2ST não são usados.</p>
<p>Os jogadores de torneio costumam usar aqui uma convenção que também permite mostrar mãos bicolores: Landy e Cappelletti usam 2♣ ou 2♦ para mostrar os dois ricos, e o DONT usa o dobre para qualquer mão monocolor. Vale a pena aprendê-las quando você tiver um parceiro fixo. Os bots usam o método natural acima, e o tutor julga as suas vozes por ele.</p>

<h3>Exemplos</h3>
<p>Oeste abriu 1ST e você é Norte, na posição direta.</p>
<div class="hand" data-cards="S:KQJ974 H:83 D:A52 C:84" data-label="1ST – ?: marque 2♠"></div>
<p>10 PH e seis espadas sólidas: dispute. O parceiro sabe o que você tem e pode apoiar com apoio.</p>
<div class="hand" data-cards="S:KQ1095 H:A83 D:J52 C:84" data-label="1ST – ?: marque 2♠"></div>
<p>Só cinco espadas, mas K-Q-10-9 é um bom naipe, e rico: vale uma voz no nível 2.</p>
<div class="hand" data-cards="S:A83 H:K4 D:KQJ852 C:84" data-label="1ST – ?: marque 2♦"></div>
<p>13 PH e seis ouros. Um naipe pobre exige seis cartas.</p>

<h3>O dobre punitivo</h3>
<p>O dobre de 1ST mostra 15+ PH, tanto quanto o abridor. O seu lado tem pelo menos metade do baralho, o abridor muitas vezes terá de jogar com um morto fraco, e na posição direta é você quem sai, com a sua mão boa. O parceiro passa, tenha o que tiver: neste sistema o dobre é punitivo, e o parceiro o deixa.</p>
<div class="hand" data-cards="S:AQ5 H:KJ4 D:KQ102 C:Q84" data-label="1ST – ?: dobre"></div>
<div class="hand" data-cards="S:AKJ1074 H:K3 D:A52 C:84" data-label="1ST – ?: dobre"></div>
<p>A primeira mão é o dobre punitivo clássico: 17 PH e nada para marcar. A segunda também dobra: com 15+ PH os bots dobram com qualquer distribuição, em vez de marcar 2♠. As espadas também farão vazas na defesa, já que você sai com elas.</p>

<h3>Quando ficar de fora</h3>
<ul>
<li><strong>Uma mão balanceada com menos de 15 PH.</strong> Nem 13 ou 14 bastam para dobrar, e não há nada para marcar.</li>
<li><strong>Um naipe pobre de cinco cartas, ou um rico de cinco fraco.</strong> No nível 2 os adversários podem dobrar você, e um naipe pobre exige seis cartas.</li>
<li><strong>Os dois ricos mas nenhum naipe longo.</strong> Para essas mãos existem convenções como Landy ou Cappelletti; com métodos naturais, passe.</li>
<li><strong>Menos de 8 PH</strong>, mesmo com um naipe longo.</li>
</ul>
<div class="hand" data-cards="S:A83 H:K4 D:KQ852 C:J84" data-label="1ST – ?: passe"></div>
<div class="hand" data-cards="S:Q8652 H:A83 D:K52 C:K4" data-label="1ST – ?: passe"></div>
<p>A primeira mão tem 13 PH mas só um naipe pobre de cinco. A segunda tem cinco espadas, mas Q-8-6-5-2 não é um naipe para marcar no nível 2 diante de um parceiro que pode não ter nada.</p>
<div class="tip">Passar muitas vezes é a melhor voz. Um abridor de 1ST com um morto fraco cai mais vezes do que se pensa, e enquanto você passa ninguém pode dobrá-lo.</div>

<h3>Na posição de reabertura</h3>
<div class="auction" data-calls="1NT P P" data-dealer="W"></div>
<p>Quando 1ST é seguido de dois passos, o parceiro do abridor é fraco, então o seu parceiro tem alguns valores. Pegue um rei emprestado: os bots dobram com <strong>12+ PH</strong> (ainda punitivo) e marcam um naipe com <strong>5-12 PH</strong>, com as mesmas exigências de naipe da posição direta.</p>
<div class="hand" data-cards="S:KQ1095 H:83 D:952 C:J84" data-label="1ST – passo – passo – ?: marque 2♠"></div>
<div class="hand" data-cards="S:KQ105 H:A94 D:K52 C:Q84" data-label="1ST – passo – passo – ?: dobre"></div>
<p>Com só 6 PH a primeira mão passaria na posição direta, mas na reabertura basta um bom rico de cinco. A segunda, 14 PH e balanceada, dobra: o parceiro passa e vocês defendem 1ST dobrado.</p>

<h3>A resposta do parceiro</h3>
<p>Depois do dobre do parceiro, passe: é punitivo. Depois de uma intervenção no nível 2 num rico, os bots respondem assim:</p>
<div class="auction" data-calls="1NT 2H P" data-dealer="W"></div>
<table>
<thead><tr><th>Voz do parceiro do interventor</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>3♥ (apoio)</td><td>Apoio de três cartas e 6-9 pontos (contam os pontos de apoio)</td></tr>
<tr><td>3♣</td><td>Artificial: apoio de três cartas e 10-12 pontos. O interventor marca o game com 13+ pontos no total; senão, 3♥</td></tr>
<tr><td>4♥</td><td>Apoio e 13+ pontos, ou cinco trunfos e um singleton</td></tr>
<tr><td>2♠ (naipe novo)</td><td>Um bom naipe de cinco cartas ou mais e 8+ PH; não forcing</td></tr>
<tr><td>2ST / 3ST</td><td>Sem fit: 12-14 PH, convite / 15+ PH</td></tr>
<tr><td>Passo</td><td>Todo o resto, inclusive um misfit com um naipe pobre longo</td></tr>
</tbody>
</table>
<p>Os adversários não têm naipe próprio para um cue-bid, por isso os bots usam 3♣ para mostrar o bom apoio. Depois de uma intervenção no nível 2 num naipe pobre, o apoio exige quatro cartas.</p>
<div class="deal" data-n="S:4 H:AKJ1052 D:Q93 C:J84" data-s="S:Q852 H:Q73 D:K84 C:962" data-caption="Oeste abre 1ST; Norte intervém com 2♥."></div>
<div class="auction" data-calls="1NT 2H P 3H P P P" data-dealer="W"></div>
<p>Norte tem 11 PH e seis boas copas: um 2♥ natural. Sul, com três trunfos e 7 pontos, apoia para 3♥. Com nove trunfos entre os dois o nível 3 é bastante seguro (a Lei das Vazas Totais), e o apoio dificulta para Leste-Oeste, que têm mais de metade dos pontos, encontrar o seu próprio parcial. Norte não tem nada a mais e passa.</p>
<div class="warn">Não intervenha sobre 1ST com um naipe fraco só porque você tem 12 ou 13 pontos: sem um bom naipe, esses pontos valem mais na defesa.</div>
`,
    keyPoints: [
      'Sobre o 1ST deles, o dobre mostra 15+ PH com qualquer distribuição e é punitivo: o parceiro passa.',
      'As vozes em naipe no nível 2 são naturais: 8-15 PH e um naipe de seis, ou um bom rico de cinco.',
      'Fique de fora com mãos balanceadas abaixo de 15 PH, naipes pobres de cinco e ricos de cinco fracos.',
      'Na posição de reabertura, pegue um rei emprestado: dobre com 12+, um naipe com 5-12.',
      'Resposta a um rico: apoio no nível 3 com 6-9 e apoio, 3♣ mostra 10-12, game com 13+.',
    ],
    quiz: [
      {
        q: 'O adversário à direita abre 1ST (15-17). Você tem ♠AQ5 ♥KJ4 ♦KQ102 ♣Q84 (17 PH). O que você marca?',
        options: ['Passo', 'Dobre', '2♦', '2ST'],
        answer: 1,
        explain: 'Com 15+ PH você tem tanto quanto o abridor: dobre para punir. O parceiro vai passar, e 1ST dobrado deve cair.',
      },
      {
        q: 'O adversário à direita abre 1ST. Você tem ♠A83 ♥K4 ♦KQ852 ♣J84 (13 PH). O que você marca?',
        options: ['2♦', 'Dobre', 'Passo', '2ST'],
        answer: 2,
        explain: 'Uma voz no nível 2 num naipe pobre exige seis cartas, e um dobre exige 15+ PH. Passe e defenda.',
      },
      {
        q: 'O adversário à direita abre 1ST. Você tem ♠KQJ974 ♥83 ♦A52 ♣84 (10 PH). O que você marca?',
        options: ['Passo', 'Dobre', '2♠', '3♠'],
        answer: 2,
        explain: 'Seis espadas sólidas e 8-15 PH: um 2♠ natural. Um dobre mostraria 15+ PH, e saltos não são usados sobre 1ST.',
      },
      {
        q: 'O adversário à esquerda abre 1ST, o parceiro intervém com 2♥ e o adversário à direita passa. Você tem ♠Q852 ♥Q73 ♦K84 ♣962 (7 PH). O que você marca?',
        options: ['Passo', '3♥', '3♣', '4♥'],
        answer: 1,
        explain: 'Apoio de três cartas e 6-9 pontos: apoie para 3♥. Com nove trunfos o nível 3 é bastante seguro. 3♣ mostraria 10-12 pontos, e 4♥ exige 13+.',
      },
      {
        q: '1ST à sua esquerda, depois passo, passo. Você tem ♠KQ1095 ♥83 ♦952 ♣J84 (6 PH). O que você marca?',
        options: ['Passo', 'Dobre', '2♠', '3♠'],
        answer: 2,
        explain: 'Na posição de reabertura os bots marcam um bom rico de cinco com 5-12 PH: o parceiro tem de ter alguns valores. Um dobre mostraria 12+ PH e é punitivo.',
      },
    ],
  },

  {
    id: 'competing-over-preempts',
    title: 'Competir sobre barragens',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Como dobrar, intervir ou marcar sem trunfo quando os adversários abrem com um dois fraco ou uma barragem no nível 3, e como o parceiro responde.',
    body: `
<h3>O plano de quem faz barragem</h3>
<p>Um dois fraco ou uma barragem no nível 3 tira de você o espaço de que precisa para achar o melhor contrato. Quem faz barragem escolheu o nível pela regra do 2-3-4: aceita cair duas vazas dobrado quando está vulnerável contra não vulneráveis, três com vulnerabilidade igual e quatro quando não está vulnerável contra vulneráveis, porque isso custa mais ou menos o que valeria o seu game. Vista do seu lado da mesa, a regra diz duas coisas:</p>
<ul>
<li><strong>Não conte com uma grande multa.</strong> Mesmo dobrados, eles perdem mais ou menos o que vale o seu game. Se vocês têm game, marque-o.</li>
<li><strong>A vulnerabilidade deles diz quão fracos podem ser.</strong> Não vulneráveis contra vulneráveis, uma barragem pode ser muito fraca, então é mais provável que o parceiro tenha valores; vulneráveis contra não vulneráveis, ela promete mais.</li>
</ul>
<p>De qualquer modo você tem de agir já e num nível alto, muitas vezes obrigando o parceiro a responder no nível 3. Por isso precisa de valores de verdade. As exigências dos bots abaixo são as mesmas em qualquer vulnerabilidade.</p>

<h3>Sobre um dois fraco</h3>
<p>O adversário à direita abriu 2♦, 2♥ ou 2♠:</p>
<table>
<thead><tr><th>Voz</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Dobre</td><td>Informativo: 13+ PH, no máximo duas cartas no naipe deles e três ou mais em cada um dos outros (é permitido um doubleton num pobre não marcado com quatro cartas em cada rico não marcado); ou qualquer mão com 17+ PH</td></tr>
<tr><td>2ST</td><td>15-18 PH, balanceada, com parada no naipe deles</td></tr>
<tr><td>Um naipe</td><td>13-17 PH e um bom naipe de cinco cartas ou mais (duas das três honras maiores ou três das cinco honras), o seu naipe não marcado mais longo</td></tr>
<tr><td>Passo</td><td>Todo o resto</td></tr>
</tbody>
</table>
<p>Com um bom naipe de seis, intervenha em vez de dobrar. Compare os 13 PH com os 8 que bastam para uma intervenção no nível 1: o parceiro pode ter de responder ao seu dobre no nível 3 sem nada, e a sua intervenção já está no nível 2 ou 3. As intervenções fracas em salto e o cue-bid Michaels não são usados sobre uma barragem.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:KQ83 C:K1062" data-label="2♥ – ?: dobre"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="2♥ – ?: marque 2♠"></div>
<div class="hand" data-cards="S:AQ4 H:KJ5 D:KQ83 C:J106" data-label="2♥ – ?: marque 2ST"></div>
<div class="hand" data-cards="S:KJ74 H:5 D:KJ83 C:Q1062" data-label="2♥ – ?: passe"></div>
<p>A primeira mão é o dobre ideal: 13 PH, singleton de copas e apoio para todos os outros naipes. A segunda tem um bom naipe de seis: marque-o. A terceira é balanceada, com 16 PH e as copas paradas. A quarta tem a distribuição perfeita mas só 10 PH: pouco demais para empurrar o parceiro para o nível 3. Com comprimento no naipe deles, como ♠K4 ♥AQ1093 ♦K83 ♣J106, passe também: um dobre pediria ao parceiro que marcasse, e o 2ST exige 15 PH.</p>
<div class="tip">Na posição de reabertura (2♥ – passo – passo – ?) uma intervenção exige só 10 PH, mas um dobre continua exigindo 13.</div>

<h3>Sobre uma barragem no nível 3</h3>
<table>
<thead><tr><th>Voz</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Dobre</td><td>Informativo: 14+ PH e a mesma distribuição que sobre um dois fraco, ou qualquer mão com 17+ PH</td></tr>
<tr><td>3ST</td><td>16-21 PH com parada no naipe deles, para jogar. Pode ser um naipe pobre longo e firme em vez de uma mão balanceada</td></tr>
<tr><td>Um naipe no nível 3</td><td>13-17 PH e um bom naipe de cinco cartas ou mais</td></tr>
<tr><td>Passo</td><td>Todo o resto</td></tr>
</tbody>
</table>
<p>A cada nível acima o dobre exige um pouco mais. Sobre uma barragem no nível 4 exige 15+ PH, e o parceiro em geral o deixa, a não ser que tenha um naipe longo e distribuição.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:AQ83 C:K1062" data-label="3♥ – ?: dobre"></div>
<div class="hand" data-cards="S:AQ4 H:K5 D:AKQJ83 C:106" data-label="3♥ – ?: marque 3ST"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="3♥ – ?: marque 3♠"></div>
<p>A primeira mão tem 14 PH e a distribuição certa: dobre. Com o ♦K no lugar do ♦A (13 PH), os bots passariam. A segunda marca 3ST: os ouros vão correr, e o ♥K deve parar as copas, porque a saída vem de Leste e Oeste, que tem as copas longas, joga antes de você. A terceira marca o seu bom naipe de seis.</p>

<h3>Respondendo ao dobre do parceiro</h3>
<div class="auction" data-calls="2H X P" data-dealer="W"></div>
<p>O dobre do parceiro pede que você marque, e você deve marcar, por mais fraco que esteja. Mostre a força pelo nível:</p>
<table>
<thead><tr><th>A sua mão</th><th>Voz</th></tr></thead>
<tbody>
<tr><td>0-8 PH</td><td>O seu melhor naipe no nível mais barato, primeiro um rico de quatro</td></tr>
<tr><td>9-11 PH</td><td>Um salto no seu melhor naipe se o salto ainda for no nível 3 (aqui 3♠). Com quatro cartas num rico não marcado que você só poderia marcar no nível 3, em vez disso o game nesse rico (sobre 2♠, 4♥). Senão 2ST com 11 PH e parada no naipe deles, ou o seu melhor naipe no nível mais barato</td></tr>
<tr><td>10-11 PH e cinco ou mais espadas</td><td>4♠</td></tr>
<tr><td>12+ PH</td><td>3♥, o cue-bid: forcing para game. Com 13-16, uma mão balanceada ou semibalanceada e parada em copas, 3ST em vez disso</td></tr>
<tr><td>Cinco copas sólidas (três honras) e 8+ PH</td><td>Passo: o dobre vira punitivo</td></tr>
</tbody>
</table>
<p>Sobre uma barragem no nível 3 não há espaço para saltar: com 9-11 PH e quatro ou mais cartas num rico não marcado, marque o game nele; senão, o seu melhor naipe no nível mais barato, 3ST com 13-16, uma mão balanceada ou semibalanceada e parada, ou o cue-bid com 12+. Quem dobrou passa uma resposta no nível mais barato com um mínimo, e só a apoia com valores extras.</p>
<div class="deal" data-n="S:AJ74 H:5 D:KQ83 C:K1062" data-s="S:K963 H:874 D:A52 C:Q84" data-caption="Oeste abre 2♥; Norte dobra."></div>
<div class="auction" data-calls="2H X P 3S P 4S P P P" data-dealer="W"></div>
<p>Sul tem 9 PH e quatro espadas: vale um salto para 3♠, porque uma resposta de 2♠ poderia ser feita sem nada. Norte, com 13 PH, quatro trunfos e singleton de copas (16 pontos de apoio em espadas), aceita o convite. Sobre uma resposta de 2♠, Norte só teria convidado com 3♠.</p>

<h3>Respondendo a uma intervenção em sem trunfo</h3>
<p>Depois do 2ST do parceiro sobre um dois fraco (15-18): marque 3ST com 10+ PH; com um rico de seis, o game com 9+ PH ou três nesse naipe com 6-8 para convidar; com uma mão mais fraca e um naipe de cinco, marque-o no nível 3 para jogar; senão, passe. Stayman e transfers não são usados aqui. Depois do 3ST do parceiro sobre uma barragem no nível 3 (16-21), os bots passam com a maioria das mãos: marcam quatro num rico de seis com 9+ PH, e com 12+ PH procuram o slam. 4ST é um convite quantitativo com 12-14 PH, e 6ST se marca com 15+.</p>
<div class="warn">Não dobre uma barragem para punir porque você tem algumas cartas altas no naipe deles: o dobre dos bots é informativo. Com comprimento no naipe deles, passe e espere o dobre do parceiro; com trunfos longos e fortes, você poderá então deixar esse dobre para punir.</div>
`,
    keyPoints: [
      'Sobre um dois fraco, o dobre (13+, curto no naipe deles) e a intervenção (13-17, bom naipe) exigem valores de verdade; 2ST mostra 15-18 balanceada com parada.',
      'Sobre uma barragem no nível 3 o dobre exige 14+; 3ST mostra 16-21 com parada, para jogar.',
      'Com um bom naipe de seis, intervenha; com 17+ PH de qualquer distribuição, dobre primeiro.',
      'O parceiro tem de marcar: nível mais barato com 0-8, um salto com 9-11 se ainda for no nível 3 (game num rico de quatro que só cabe no nível 3), o cue-bid com 12+; passe só com trunfos sólidos.',
      'Quem faz barragem conta cair de duas a quatro vazas dobrado: se vocês têm game, marque-o em vez de esperar uma grande multa.',
    ],
    quiz: [
      {
        q: 'O adversário à direita abre 2♥. Você tem ♠AJ74 ♥5 ♦KQ83 ♣K1062 (13 PH). O que você marca?',
        options: ['Passo', 'Dobre', '2♠', '2ST'],
        answer: 1,
        explain: 'Curto em copas, apoio para todos os outros naipes e 13 PH: um dobre informativo. 2♠ prometeria um bom naipe de cinco.',
      },
      {
        q: 'O adversário à direita abre 2♠. Você tem ♠KJ5 ♥AQ4 ♦KQ83 ♣J106 (16 PH). O que você marca?',
        options: ['Dobre', '2ST', '3ST', 'Passo'],
        answer: 1,
        explain: 'Balanceada, 15-18, com parada em espadas: 2ST. Um dobre pediria ao parceiro que marcasse um naipe, e você não é curto em espadas.',
      },
      {
        q: 'O adversário à direita abre 3♥. Você tem ♠AQ4 ♥K5 ♦AKQJ83 ♣106 (19 PH). O que você marca?',
        options: ['Dobre', '4♦', '3ST', 'Passo'],
        answer: 2,
        explain: '3ST sobre uma barragem no nível 3 mostra 16-21 com parada e é para jogar. Os seus ouros vão correr, e o ♥K está bem colocado atrás de quem fez a barragem.',
      },
      {
        q: 'O adversário à esquerda abre 2♥, o parceiro dobra e o adversário à direita passa. Você tem ♠K963 ♥874 ♦A52 ♣Q84 (9 PH). O que você marca?',
        options: ['2♠', '3♠', '4♠', '2ST'],
        answer: 1,
        explain: '9-11 PH com quatro espadas: salte para 3♠ para convidar a game. 2♠ poderia ser marcado sem nada, e 2ST prometeria parada em copas.',
      },
      {
        q: 'O adversário à esquerda abre 2♥, o parceiro dobra e o adversário à direita passa. Você tem ♠96 ♥KQJ104 ♦Q105 ♣J84 (9 PH). O que você marca?',
        options: ['2ST', '3♣', 'Passo', '3♦'],
        answer: 2,
        explain: 'Cinco copas sólidas e 8+ PH: passe, e o dobre informativo do parceiro vira punitivo. As suas copas, atrás do abridor, vão fazer vazas.',
      },
    ],
  },

  {
    id: 'when-they-double-us',
    title: 'Quando nos dobram',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'O que o respondedor faz depois de um dobre informativo da abertura do parceiro (redobre, 2ST Jordan, apoios, naipes novos, 1ST), e como fugir quando o 1ST do parceiro é dobrado.',
    body: `
<h3>A abertura do parceiro é dobrada</h3>
<div class="auction" data-calls="1H X" data-dealer="N"></div>
<p>O parceiro abre 1♥ e o adversário à direita faz um dobre informativo: valores de abertura, curto em copas, apoio para os outros naipes. O dobre dá a você novas maneiras de descrever a sua mão, e você precisa delas: o parceiro de quem dobrou vai marcar em seguida, talvez com um salto, e o abridor precisa saber logo se o seu lado tem fit e quem tem a maior parte da força.</p>

<h3>O que os bots jogam</h3>
<p>Depois de 1♥ ou 1♠ – dobre, os bots escolhem a primeira destas vozes que se encaixar:</p>
<table>
<thead><tr><th>Voz</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>2ST (Jordan)</td><td>Artificial: quatro ou mais trunfos e 10+ pontos de apoio, um apoio limite ou mais forte</td></tr>
<tr><td>Redobre</td><td>10+ PH, em geral sem fit (no máximo três trunfos)</td></tr>
<tr><td>Apoio em salto (1♥ – X – 3♥)</td><td>De barragem: quatro ou mais trunfos e menos de 10 PH</td></tr>
<tr><td>Apoio simples (1♥ – X – 2♥)</td><td>Três trunfos e 6-10 pontos de apoio (com quatro, salte ou marque 2ST)</td></tr>
<tr><td>1♠ sobre 1♥</td><td>Quatro ou mais espadas e 6+ PH; forcing</td></tr>
<tr><td>1ST</td><td>6-9 PH e nenhuma das vozes acima</td></tr>
<tr><td>Passo</td><td>Uma mão fraca</td></tr>
</tbody>
</table>
<p>Repare no que falta: um naipe novo no nível 2. Depois do dobre os bots nunca marcam um. Com 10+ PH redobram, e com menos marcam 1ST ou passam.</p>
<div class="hand" data-cards="S:K74 H:Q962 D:A1053 C:J4" data-label="1♥ – X – ?: 2ST"></div>
<div class="hand" data-cards="S:AQ74 H:62 D:KJ53 C:984" data-label="1♥ – X – ?: redobre"></div>
<div class="hand" data-cards="S:K74 H:Q9862 D:5 C:J1043" data-label="1♥ – X – ?: 3♥"></div>
<div class="hand" data-cards="S:K74 H:Q96 D:J853 C:Q43" data-label="1♥ – X – ?: 2♥"></div>
<div class="hand" data-cards="S:KQ1074 H:62 D:J53 C:984" data-label="1♥ – X – ?: 1♠"></div>
<div class="hand" data-cards="S:Q4 H:62 D:KJ94 C:Q9843" data-label="1♥ – X – ?: 1ST"></div>
<p>A primeira mão tem quatro trunfos e 11 pontos de apoio: 2ST Jordan. A segunda tem 10 PH e nenhum fit: redobre. A terceira, com cinco trunfos e 6 PH, salta para 3♥ para tirar espaço dos adversários; eles certamente têm um fit próprio. A quarta faz um apoio simples com três trunfos. A quinta mostra as suas espadas no nível 1. A sexta tem 8 PH e nada mais a dizer: 1ST.</p>
<div class="tip">O apoio em salto de barragem funciona melhor na hora, antes que o parceiro de quem dobrou possa marcar barato. Com quatro trunfos e uma mão fraca, tire o espaço deles.</div>

<h3>Depois de uma abertura num pobre</h3>
<p>Depois de 1♣ ou 1♦ – dobre não há 2ST Jordan: com 10+ PH, redobre. Uma abertura de 1♣ ou 1♦ pode ter só três cartas, por isso os apoios exigem mais trunfos: quatro para o apoio simples, cinco para o apoio em salto de barragem. Com um rico de quatro e 6+ PH, marque-o no nível 1, primeiro copas se tiver os dois.</p>
<div class="hand" data-cards="S:KJ74 H:Q962 D:53 C:J43" data-label="1♦ – X – ?: 1♥"></div>
<div class="hand" data-cards="S:J74 H:62 D:KJ853 C:943" data-label="1♦ – X – ?: 3♦"></div>

<h3>Depois do redobre</h3>
<p>O redobre diz que a mão é do seu lado. O abridor em geral passa e deixa o problema para os adversários: eles têm de achar onde jogar, e o parceiro de quem dobrou, que pode não ter nada, só marca com um naipe de cinco. O abridor marca logo só com um mínimo (no máximo 13 PH) e um naipe de seis, que defende mal. Quando os adversários param num naipe, quem redobrou marca o game se tiver valores para isso, cerca de 12+ PH diante da abertura.</p>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-e="S:KQ6 H:5 D:AJ94 C:KJ1062" data-s="S:J1093 H:K6 D:Q53 C:AQ97" data-w="S:8742 H:109732 D:86 C:53" data-caption="Norte abre 1♥ e Leste dobra."></div>
<div class="auction" data-calls="1H X XX P P 2C 3NT P P P" data-dealer="N"></div>
<p>Sul tem 12 PH e só duas copas: redobre. Oeste não tem nada nem um naipe de cinco, então passa; Norte também passa, e Leste tem de escolher um naipe no nível 2. Sul, com 12 PH diante de uma abertura e duas paradas em paus, marca 3ST, que com o melhor jogo faz nove vazas.</p>

<h3>O 2ST Jordan em ação</h3>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-s="S:K74 H:K962 D:A953 C:J3" data-caption="Norte abre 1♥ e Leste dobra."></div>
<div class="auction" data-calls="1H X 2NT P 4H P P P" data-dealer="N"></div>
<p>Sul tem quatro trunfos e 12 pontos de apoio: 2ST Jordan, um apoio limite ou mais forte. Norte, com 14 PH e um naipe de cinco, tem mais que um mínimo e marca o game. Com um mínimo, Norte marcaria só 3♥.</p>

<h3>Quando o nosso 1ST é dobrado</h3>
<div class="auction" data-calls="1NT X" data-dealer="N"></div>
<p>O dobre do 1ST do parceiro é punitivo. As opções do respondedor:</p>
<table>
<thead><tr><th>Voz</th><th>Mostra</th></tr></thead>
<tbody>
<tr><td>Redobre</td><td>8+ PH: com os 15-17 do parceiro o seu lado tem a maior parte da força, e são os adversários que estão em apuros</td></tr>
<tr><td>2♣ / 2♦ / 2♥ / 2♠</td><td>Para jogar: 0-7 PH e cinco ou mais cartas no naipe, o seu mais longo</td></tr>
<tr><td>Passo</td><td>Qualquer outra mão</td></tr>
</tbody>
</table>
<p>Depois do dobre, Stayman e transfers deixam de valer: 2♣ mostra paus e 2♦ mostra ouros. Com uma mão fraca, 1ST dobrado pode custar caro, enquanto dois no seu naipe longo joga muito melhor.</p>
<div class="hand" data-cards="S:Q74 H:62 D:J9853 C:932" data-label="1ST – X – ?: 2♦"></div>
<div class="hand" data-cards="S:Q74 H:62 D:KJ85 C:Q932" data-label="1ST – X – ?: redobre"></div>
<div class="hand" data-cards="S:Q74 H:J62 D:J85 C:9432" data-label="1ST – X – ?: passe"></div>
<p>A primeira mão foge para os seus cinco ouros. A segunda tem 8 PH: redobre. A terceira não tem naipe de cinco, então passa e deixa o parceiro se virar.</p>
<div class="warn">Depois de 1♥ – dobre, não marque um naipe novo no nível 2 com uma mão fraca: isso não faz parte do sistema. Com 10+ PH redobre primeiro; com menos, marque 1ST ou passe.</div>
`,
    keyPoints: [
      'Depois de um dobre informativo de 1♥ ou 1♠, 2ST (Jordan) mostra quatro trunfos e 10+ pontos de apoio; o redobre mostra 10+ PH, em geral sem fit.',
      'O apoio em salto é de barragem (quatro trunfos para um rico, cinco para um pobre, menos de 10 PH); o apoio simples mostra 6-10 com apoio.',
      'Um rico no nível 1 mostra quatro ou mais cartas e 6+ PH e é forcing; 1ST mostra 6-9 sem outra voz adequada.',
      'Depois do redobre o abridor em geral passa e deixa os adversários procurarem um contrato; com valores de game, quem redobrou marca então o game.',
      'Quando o 1ST do parceiro é dobrado, redobre com 8+; com uma mão fraca e um naipe de cinco, marque-o no nível 2 (natural, sem Stayman nem transfers).',
    ],
    quiz: [
      {
        q: 'O parceiro abre 1♥ e o adversário à direita dobra. Você tem ♠K74 ♥Q962 ♦A1053 ♣J4 (10 PH). O que você marca?',
        options: ['Redobre', '3♥', '2ST', '2♥'],
        answer: 2,
        explain: 'Quatro trunfos e 11 pontos de apoio: o 2ST Jordan mostra logo um apoio limite ou mais forte. Um redobre em geral negaria quatro trunfos, e 3♥ seria de barragem.',
      },
      {
        q: 'O parceiro abre 1♥ e o adversário à direita dobra. Você tem ♠K74 ♥Q9862 ♦5 ♣J1043 (6 PH). O que você marca?',
        options: ['2♥', '3♥', '4♥', 'Passo'],
        answer: 1,
        explain: 'Cinco trunfos, um singleton e menos de 10 PH: o apoio em salto de barragem. Tira do parceiro de quem dobrou o espaço de que ele precisa.',
      },
      {
        q: 'O parceiro abre 1♥ e o adversário à direita dobra. Você tem ♠AQ74 ♥62 ♦KJ53 ♣984 (10 PH). O que você marca?',
        options: ['1♠', 'Redobre', '2♦', '1ST'],
        answer: 1,
        explain: '10+ PH sem fit: redobre. Diz ao parceiro que a mão é do seu lado; o abridor em geral vai passar e deixar os adversários acharem um contrato.',
      },
      {
        q: 'O parceiro abre 1♦ e o adversário à direita dobra. Você tem ♠KJ74 ♥Q962 ♦53 ♣J43 (7 PH). O que você marca?',
        options: ['1♥', '1♠', '1ST', 'Passo'],
        answer: 0,
        explain: 'Com quatro cartas em cada rico e 6+ PH, marque primeiro copas, no nível 1. 1♥ é forcing, então você poderá mostrar as espadas depois, se for preciso.',
      },
      {
        q: 'O parceiro abre 1ST e o adversário à direita dobra. Você tem ♠Q74 ♥62 ♦J9853 ♣932 (3 PH). O que você marca?',
        options: ['Passo', '2♣', '2♦', 'Redobre'],
        answer: 2,
        explain: 'Uma mão fraca com cinco ouros: fuja para 2♦, que depois do dobre é natural, não um transfer. 2♣ mostraria paus, e um redobre 8+ PH.',
      },
    ],
  },
];
