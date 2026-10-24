// Lessons, part 3 (Spanish).
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_3: Lesson[] = [
  {
    id: 'michaels-and-unusual-2nt',
    title: 'Michaels y el 2SA inusual',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Cómo mostrar una mano bicolor con una sola voz cuando abre un rival, y cómo elige el palo el compañero.',
    body: `
<h3>Dos palos en una voz</h3>
<p>Con dos palos de cinco cartas quieres mostrar los dos enseguida; la subasta puede estar a nivel de cuatro antes de que tengas una segunda oportunidad. Hay dos intervenciones convencionales que lo hacen, y cada una promete al menos <strong>cinco cartas en cada uno de dos palos</strong>.</p>
<table>
<thead><tr><th>Ellos abren</th><th>Tú declaras</th><th>Muestra</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>2♣ (Michaels)</td><td>♥ y ♠</td></tr>
<tr><td>1♦</td><td>2♦ (Michaels)</td><td>♥ y ♠</td></tr>
<tr><td>1♥</td><td>2♥ (Michaels)</td><td>♠ y un menor</td></tr>
<tr><td>1♠</td><td>2♠ (Michaels)</td><td>♥ y un menor</td></tr>
<tr><td>1♣</td><td>2SA (inusual)</td><td>♦ y ♥</td></tr>
<tr><td>1♦</td><td>2SA (inusual)</td><td>♣ y ♥</td></tr>
<tr><td>1♥ o 1♠</td><td>2SA (inusual)</td><td>♣ y ♦</td></tr>
</tbody>
</table>
<p>El Michaels es un cue-bid del palo del abridor. Sobre un menor muestra los dos mayores; sobre un mayor muestra el otro mayor y un menor sin especificar. El 2SA inusual muestra los <strong>dos palos no declarados más bajos</strong>.</p>
<div class="hand" data-cards="S:KQ1074 H:AJ963 D:5 C:84" data-label="El rival de la derecha abre de 1♦: declara 2♦"></div>
<div class="hand" data-cards="S:4 H:72 D:KQ1074 C:AQ1063" data-label="El rival de la derecha abre de 1♠: declara 2SA"></div>

<h3>¿Con cuánta fuerza?</h3>
<p>El rango es amplio. Lo más frecuente es una mano modesta (unos 8-12 PH) con buenos palos, y el objetivo es competir, encontrar un sacrificio o indicar la salida. Con una mano fuerte (unos 16+) también empiezas con la voz bicolor y luego vuelves a hablar para mostrar la fuerza extra. Con una mano intermedia, muchos jugadores prefieren intervenir en el palo más alto y declarar el otro después.</p>
<p>La calidad de los palos importa, sobre todo vulnerable: los honores deben estar en tus palos largos, no en los cortos.</p>

<h3>Responder</h3>
<div class="auction" data-calls="1D 2D P" data-dealer="W"></div>
<div class="hand" data-cards="S:J4 H:Q852 D:K73 C:J1064" data-label="Eres Sur: declara 2♥"></div>
<ul>
<li><strong>Elige un palo</strong> al nivel más barato, aquel en el que tengas más cartas. Aquí, cuatro corazones frente a dos picas: 2♥. Con igual longitud en un mayor y un menor, prefiere el mayor, que puntúa más.</li>
<li><strong>Salta</strong> con un buen fit y valores útiles: cortos en el palo de los rivales, y Ases y Reyes en los palos de tu compañero.</li>
<li><strong>Declara la manga</strong> cuando el fit es grande y tus honores son útiles. Un fit de diez cartas frente a una mano 5-5 a menudo cumple la manga con pocos puntos.</li>
<li><strong>Tras un Michaels mayor-menor</strong> (1♥ – 2♥), declara el mayor de tu compañero si te gusta, o declara 2SA para preguntar por el menor cuando tienes un buen fit en menores y ninguno en el mayor.</li>
<li><strong>Tras el 2SA inusual</strong>, declara 3♣ o 3♦ (el que sea más largo), o salta a la manga con fit.</li>
</ul>
<div class="hand" data-cards="S:7 H:J852 D:K1063 C:KJ63" data-label="1♥ – 2♥ – paso: declara 2SA"></div>
<p>Tu compañero tiene cinco picas y cinco cartas en un menor. Con semifallo de pica pero cuatro cartas en cada menor, declara 2SA: tu compañero nombra su menor y tú pasas, con un fit de nueve cartas sea cual sea.</p>

<h3>Aprovechar la información en defensa</h3>
<p>Si los rivales ganan la subasta, el bicolor de tu compañero es un regalo para la defensa: conoces al menos diez de sus cartas. Cuenta a partir de ahí la mano del declarante, y sal o cambia al palo en el que tu compañero pueda fallar o ganar bazas.</p>
<div class="warn">No uses el Michaels ni el 2SA inusual con una mano 5-4. Tu compañero elegirá un palo contando con cinco cartas y acabaréis jugando doblados un fit de siete.</div>
<div class="tip">Con vulnerabilidad favorable, una voz bicolor seguida de un gran salto de tu compañero en tu palo puede robar la subasta o encontrar un sacrificio barato. Tu compañero debe apoyar con cualquier fit grande: la ley de las bazas totales favorece declarar con distribución.</div>
`,
    keyPoints: [
      'Michaels: un cue-bid del menor del abridor (1m – 2m) muestra los dos mayores; un cue-bid de su mayor (1M – 2M) muestra el otro mayor y un menor; 5-5 o más.',
      'El 2SA inusual muestra los dos palos no declarados más bajos, 5-5 o más.',
      'La mayoría de las manos son modestas; con una mano fuerte, vuelve a hablar después.',
      'El compañero elige el palo en el que tiene más cartas, y salta o declara la manga con un gran fit.',
      'Tras 1M – 2M, el 2SA del compañero pregunta por el menor.',
    ],
    quiz: [
      {
        q: 'El rival de tu derecha abre de 1♣. ¿Qué voz muestra cinco picas y cinco corazones?',
        options: ['Doblo', '2♣', '2SA', '1♥'],
        answer: 1,
        explain: 'Un cue-bid sobre una apertura de menor (Michaels) muestra los dos mayores. 2SA sobre 1♣ muestra los dos palos no declarados más bajos, diamantes y corazones.',
      },
      {
        q: 'El rival de tu derecha abre de 1♥ y declaras 2SA. ¿Qué has mostrado?',
        options: ['15-18 equilibrada', 'Tréboles y diamantes', 'Picas y un menor', 'Picas y tréboles'],
        answer: 1,
        explain: 'El 2SA inusual muestra los dos palos no declarados más bajos. Sobre 1♥ son los tréboles y los diamantes.',
      },
      {
        q: 'El rival de tu izquierda abre de 1♦, tu compañero declara 2♦ (Michaels) y el de tu derecha pasa. Tienes ♠J4 ♥Q852 ♦K73 ♣J1064. ¿Qué declaras?',
        options: ['2♠', '2♥', '2SA', 'Paso'],
        answer: 1,
        explain: 'Tu compañero tiene al menos cinco cartas en cada mayor. Tú tienes cuatro corazones y dos picas, así que los corazones son el mejor fit: decláralos al nivel más barato.',
      },
      {
        q: 'El rival de tu derecha abre de 1♠ y declaras 2♠. ¿Qué muestra?',
        options: ['Picas', 'Corazones y un menor', 'Los dos menores', 'Una mano equilibrada fuerte'],
        answer: 1,
        explain: 'Un cue-bid sobre una apertura de mayor muestra el otro mayor más un menor, al menos 5-5. Tu compañero puede declarar 2SA para averiguar cuál es el menor.',
      },
      {
        q: 'El rival de tu derecha abre de 1♣ y declaras 2SA. ¿Qué muestra?',
        options: ['Tréboles y diamantes', 'Diamantes y corazones', 'Los dos mayores', 'Corazones y picas'],
        answer: 1,
        explain: 'Sobre 1♣ los palos no declarados son diamantes, corazones y picas; los dos más bajos son diamantes y corazones.',
      },
    ],
  },

  {
    id: 'defending-suit-contracts',
    title: 'La defensa contra contratos a palo',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Cómo elegir entre una defensa activa y una pasiva, conseguir fallos, salir de triunfo en el momento adecuado y acortar al declarante.',
    body: `
<h3>De dónde salen las bazas de la defensa</h3>
<p>Contra un contrato a palo, la defensa hace bazas con cartas altas, con fallos y con sus propios triunfos. El declarante, mientras tanto, intenta deshacerse de sus perdedoras fallándolas en el muerto o descartándolas sobre las ganadoras del muerto. Una buena defensa empieza con una pregunta sencilla cuando baja el muerto: <strong>¿cómo va a cumplir el declarante el contrato y de dónde van a salir nuestras bazas?</strong></p>

<h3>¿Activa o pasiva?</h3>
<p><strong>Sé activo</strong> (cobra o afirma bazas rápido, aunque sea con algún riesgo) cuando el muerto tiene un palo largo y fuerte que le dará descartes. Las bazas que no hagas ahora desaparecerán.</p>
<p><strong>Sé pasivo</strong> (juega cartas seguras que no regalen nada) cuando el muerto es plano, no tiene fuente de descartes y el declarante tendrá que perder esas perdedoras de todos modos. Abrir palos nuevos en ese caso a menudo le regala al declarante una baza que no podría hacer solo.</p>
<div class="deal" data-n="S:K94 H:KQJ104 D:862 C:A5" data-e="S:762 H:A83 D:KJ94 C:874" data-caption="Sur juega 4♠ tras 1♠ – 2♥ – 2♠ – 4♠. Tu compañero sale con la ♣Q; el muerto gana con el As y juega el ♥K."></div>
<p>Ganas con el ♥A. Ahora piensa: los corazones del muerto están afirmados y, en cuanto el declarante destriunfe, descartará sobre ellos sus perdedoras de diamante. La única esperanza es hacer las bazas de diamante <em>ahora</em>. Cambia al ♦J, a través de la mano del declarante: si tu compañero tiene el ♦A y el declarante la ♦Q, podéis hacer tres bazas de diamante. Una vuelta pasiva a trébol dejaría al declarante destriunfar y tirar los diamantes.</p>

<h3>Conseguir fallos</h3>
<ul>
<li>La salida de semifallo es mejor cuando tienes el control del triunfo (por ejemplo, el As de triunfo) o tu compañero puede tener una entrada: entras, llegas a tu compañero y vuelves a fallar.</li>
<li>Cuando le das un fallo a tu compañero, usa una señal de preferencia de palo para mostrar dónde está tu entrada.</li>
<li>Cuenta los triunfos del declarante: no tiene sentido jugar para un fallo cuando a tu compañero no le pueden quedar triunfos.</li>
</ul>

<h3>Cuándo salir de triunfo</h3>
<ul>
<li>Cuando el muerto es corto en un palo lateral en el que tu bando es fuerte y el declarante intentará fallar ahí sus perdedoras.</li>
<li>Cuando el declarante ha mostrado dos palos y el muerto ha dado preferencia al segundo: el muerto fallará el primero.</li>
<li>Cuando tu compañero pasa tu doblo informativo para castigar: tiene triunfos largos y fuertes y quiere que se saquen.</li>
<li>No cuando el declarante tiene ganadoras largas en un palo lateral por cobrar, ni cuando una salida de triunfo podría ayudarle a capturar los honores de triunfo de tu compañero.</li>
</ul>

<h3>La defensa de acortamiento</h3>
<p>Si tienes cuatro triunfos, o los triunfos del declarante son cortos, oblígale a fallar una y otra vez jugando tu palo largo. Cada fallo acorta los triunfos del declarante; al final puedes tener más triunfos que él, y el declarante pierde el control. La defensa de acortamiento funciona mejor cuando los triunfos del declarante están en la mano larga y el muerto no puede absorber el acortamiento.</p>

<h3>La promoción de triunfo</h3>
<p>Las picas son triunfo. El declarante tiene ♠A K 10 9 8 7, tú (Oeste) ♠Q 6 y tu compañero ♠J 3. Si no haces nada, el declarante cobra el As y el Rey y tu Dama cae. Pero supón que juegas un palo lateral en el que tu compañero y el declarante tienen fallo. Tu compañero falla con el ♠J, el declarante tiene que sobrefallar con el As o el Rey, y ahora tu ♠Q 6 se enfrenta a un solo honor mayor: la Dama hará baza. Esta promoción de triunfo se llama <strong>uppercut</strong>. Cuando veas una promoción así, tu compañero debe fallar lo más alto posible.</p>
<div class="tip">Cuenta tus bazas. Si ves la baza de la multa, cóbrala; si ves que el declarante tiene suficientes, busca un fallo o una promoción de triunfo que pueda crearla.</div>
<div class="warn">No cobres ganadoras en un palo en el que el declarante tiene fallo y el muerto está fallando: solo ayudas al declarante. Y no des «fallo y descarte» (jugar un palo en el que tienen fallo tanto el declarante como el muerto), que le permite fallar en una mano y descartar una perdedora de la otra.</div>
`,
    keyPoints: [
      'Pregúntate cómo va a cumplir el declarante y de dónde saldrán tus bazas.',
      'Sé activo cuando el muerto tenga un palo largo para descartes; pasivo cuando el muerto sea plano.',
      'Las salidas de semifallo funcionan mejor con control del triunfo o con una entrada en la mano de tu compañero.',
      'Sal de triunfo cuando el muerto vaya a fallar, o cuando tu compañero haya pasado tu doblo informativo.',
      'Con cuatro triunfos, acorta al declarante; nunca des fallo y descarte.',
    ],
    quiz: [
      {
        q: 'El muerto tiene un palo lateral largo y fuerte que le dará descartes. ¿Qué tipo de defensa suele ser la correcta?',
        options: ['Pasiva: esperar a que el declarante se equivoque', 'Activa: hacer o afirmar tus bazas rápido', 'Salir de triunfo cada vez', 'Dar fallo y descarte al declarante'],
        answer: 1,
        explain: 'Una vez sacados los triunfos, el declarante descartará sus perdedoras sobre el palo del muerto. Las bazas que la defensa no haga rápido desaparecerán.',
      },
      {
        q: 'El muerto es un 4-3-3-3 plano sin palo largo y el declarante tiene que perder de todos modos sus perdedoras laterales. ¿Qué tipo de defensa suele ser la correcta?',
        options: ['Pasiva: evitar abrir palos nuevos', 'Activa: cambiar de palo en cada baza', 'Salir por debajo de tus Ases', 'Cobrar todas tus ganadoras de inmediato'],
        answer: 0,
        explain: 'Sin fuente de descartes, las perdedoras del declarante no van a desaparecer. Abrir palos nuevos se arriesga a regalarle una baza que no podría hacer él solo.',
      },
      {
        q: 'Tienes cuatro triunfos contra el 4♥ del declarante. ¿Qué plan defensivo suele ser el mejor?',
        options: ['Salir de triunfo', 'Obligar al declarante a fallar jugando tu palo largo', 'Salir de un semifallo', 'Salir desde honores en todos los palos'],
        answer: 1,
        explain: 'Cada fallo acorta los triunfos del declarante. Con cuatro triunfos tuyos, dos o tres acortamientos pueden dejarte con más triunfos que él, y el declarante pierde el control.',
      },
      {
        q: 'Doblaste 1♦ como informativo y tu compañero pasó para castigar. ¿En qué sales?',
        options: ['En tu mejor mayor', 'De triunfo', 'De un semifallo de trébol', 'En el palo que le gustaría a tu compañero'],
        answer: 1,
        explain: 'El paso de tu compañero muestra diamantes largos y fuertes. Salir de triunfo impide que el declarante haga sus triunfos pequeños fallando, y los diamantes de tu compañero harán las bazas.',
      },
      {
        q: '¿Cuándo es más atractiva una salida de semifallo contra un contrato a palo?',
        options: ['Cuando tienes el As de triunfo o es probable que tu compañero tenga una entrada', 'Cuando tienes cuatro triunfos', 'Cuando se sabe que el muerto es corto en el palo', 'Siempre'],
        answer: 0,
        explain: 'Necesitas dar la mano a tu compañero tras el fallo, o recuperar tú la mano antes de que se saquen los triunfos. El control del triunfo y las entradas de tu compañero lo hacen posible.',
      },
    ],
  },

  {
    id: 'suit-combinations-and-odds',
    title: 'Repartos de los palos y combinación de posibilidades',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Las probabilidades a priori de los repartos, cómo combinar posibilidades y las ideas básicas de los huecos libres y la elección restringida.',
    body: `
<h3>Cómo se reparten las cartas de los rivales</h3>
<p>Antes de jugar ninguna carta, la probabilidad de cada reparto depende solo de cuántas cartas del palo tienen los defensores:</p>
<table>
<thead><tr><th>Faltan</th><th>Reparto</th><th>Probabilidad</th></tr></thead>
<tbody>
<tr><td>2</td><td>1-1 / 2-0</td><td>52% / 48%</td></tr>
<tr><td>3</td><td>2-1 / 3-0</td><td>78% / 22%</td></tr>
<tr><td>4</td><td>3-1 / 2-2 / 4-0</td><td>50% / 41% / 10%</td></tr>
<tr><td>5</td><td>3-2 / 4-1 / 5-0</td><td>68% / 28% / 4%</td></tr>
<tr><td>6</td><td>4-2 / 3-3 / 5-1 / 6-0</td><td>48% / 36% / 15% / 1,5%</td></tr>
<tr><td>7</td><td>4-3 / 5-2 / 6-1 / 7-0</td><td>62% / 31% / 7% / 0,5%</td></tr>
</tbody>
</table>
<p>Una regla útil: un número <strong>impar</strong> de cartas que faltan tiende a repartirse lo más equilibrado posible (3-2, 4-3), pero un número <strong>par</strong> tiende a no hacerlo (el 4-2 es más probable que el 3-3, y el 3-1 más que el 2-2).</p>
<p>Otros dos números que conviene saber: un impasse es un 50%; necesitar uno de dos impasses es un 75%, y necesitar los dos, un 25%.</p>

<h3>Combinar posibilidades</h3>
<p>A menudo un contrato puede cumplirse de más de una forma. La habilidad está en probar las posibilidades en un orden que te permita usar la segunda si falla la primera.</p>
<div class="deal" data-n="S:954 H:743 D:Q52 C:AKQ2" data-s="S:AQ6 H:A852 D:AK7 C:763" data-caption="3SA por Sur. Oeste sale con el ♥K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Cuenta:</strong> ♠A, ♥A, ♦AKQ, ♣AKQ: ocho bazas. La novena puede salir de un reparto 3-3 en tréboles (36%), que convierte en ganador el ♣2 del muerto, o del impasse en picas (50%), que gana cuando Este tiene el ♠K.</p>
<p><strong>El peligro:</strong> una vez que ha caído tu ♥A, los corazones de Oeste están afirmados. Si haces el impasse en picas y falla con Oeste, Oeste cobra corazones suficientes para multarte y nunca llegas a probar los tréboles.</p>
<p><strong>El orden correcto:</strong> prueba primero los tréboles. Cobrar el ♣A, K y Q no cuesta nada: si los dos defensores sirven tres veces, el ♣2 es tu novena baza y no necesitas el impasse. Si los tréboles no están 3-3, terminas en el muerto y aún puedes jugar una pica hacia tu A Q. Tus probabilidades son 36% + (64% × 50%) = 68%, en lugar del 50% del impasse solo.</p>
<div class="tip">Prueba primero la posibilidad que no cede la mano. Deja para el final el impasse, que puede ceder la mano al rival peligroso.</div>

<h3>Huecos libres</h3>
<p>Una vez empezado el carteo, las cifras a priori cambian. Si se sabe que Oeste tiene cinco corazones y Este solo uno, entre las cartas desconocidas que quedan Oeste tiene 8 huecos y Este 12. Cualquier carta concreta que falte, como el ♠K, está ahora en Este 12 veces de cada 20, un 60%, en lugar de un 50%. La mano con más huecos libres tiene más probabilidades de tener una carta determinada. Por eso es tan importante contar la mano.</p>

<h3>La elección restringida</h3>
<p>Tienes A K 10 7 5 frente a 6 4 3 2, y te faltan la Q, el J, el 9 y el 8. Cobras el As y Este deja caer la Dama. En la siguiente vuelta, Oeste sirve con una baja. ¿Juegas el Rey (esperando que Este empezara con Q J) o haces el impasse al 10 (esperando que Este tuviera la Dama sola)?</p>
<p>Haz el impasse. Con la Dama semifallo, Este no tenía elección; con Q J, Este podía haber jugado igualmente el Valet. Así que la Dama semifallo es aproximadamente el doble de probable que Q J en concreto: el impasse gana alrededor del 65% de las veces. Este principio de <strong>elección restringida</strong> se aplica siempre que un rival juega uno de dos honores equivalentes.</p>

<h3>Reglas prácticas para la Dama</h3>
<ul>
<li>Ocho cartas sin la Dama: impasse (alrededor del 40% con A K J x x y alrededor del 51% con A K J 10 x, frente a alrededor del 33% de la caída).</li>
<li>Nueve cartas sin la Dama: juega a la caída (alrededor del 53% frente a alrededor del 51% del impasse).</li>
<li>La información de la subasta (quién abrió, quién hizo un barrage, quién mostró longitud) vale más que estos pequeños márgenes.</li>
</ul>
<div class="warn">Estos porcentajes son solo un punto de partida. Un defensor que ha mostrado palos largos en la subasta tiene menos probabilidades de tener longitud en el palo que estás jugando.</div>
`,
    keyPoints: [
      'Faltan cinco: 3-2 el 68%. Faltan seis: 4-2 el 48%, 3-3 el 36%. Faltan cuatro: 3-1 el 50%, 2-2 el 41%, 4-0 el 10%.',
      'Un número impar de cartas que faltan tiende a repartirse equilibrado; un número par, no.',
      'Combina posibilidades: prueba primero lo que no cede la mano y deja para el final el impasse hacia la mano peligrosa.',
      'Huecos libres: la mano con más cartas desconocidas tiene más probabilidades de tener una carta determinada.',
      'Elección restringida: cuando un rival deja caer uno de dos honores equivalentes, juega a que ese rival lo tenía semifallo.',
    ],
    quiz: [
      {
        q: 'Los rivales tienen seis cartas de un palo. ¿Cuál es el reparto más probable?',
        options: ['3-3', '4-2', '5-1', '6-0'],
        answer: 1,
        explain: 'El 4-2 se da alrededor del 48% de las veces, frente al 36% del 3-3. Cuando falta un número par de cartas, el reparto equilibrado es la excepción, no la regla.',
      },
      {
        q: 'Los rivales tienen cinco cartas de un palo. ¿Con qué frecuencia se reparten 3-2?',
        options: ['50%', '62%', '68%', '78%'],
        answer: 2,
        explain: 'Alrededor del 68%. El 4-1 ronda el 28% y el 5-0 el 4%.',
      },
      {
        q: 'Puedes probar un reparto 3-3 (36%) y, si falla, hacer un impasse (50%). ¿Cuál es la probabilidad combinada?',
        options: ['50%', '68%', '86%', '43%'],
        answer: 1,
        explain: 'El 36% más la mitad del 64% restante: 36 + 32 = 68%.',
      },
      {
        q: 'En la mano de 3SA de arriba, ¿por qué cobrar los tréboles antes de hacer el impasse en picas?',
        options: ['Para contar la mano', 'Probar los tréboles no cede la mano, mientras que un impasse fallido deja a Oeste cobrar los corazones', 'Porque el impasse tiene más probabilidades de salir más tarde', 'Para desbloquear los tréboles'],
        answer: 1,
        explain: 'Si el impasse falla, Oeste corre los corazones y nunca llegas a probar los tréboles. Cobrar primero los tréboles mantiene vivas las dos posibilidades.',
      },
      {
        q: 'Tienes A K 10 7 5 frente a 6 4 3 2. Sobre el As, Este deja caer la Dama. En la siguiente vuelta Oeste juega bajo. ¿Qué es lo mejor?',
        options: ['Jugar el Rey', 'Hacer el impasse al 10', 'Es exactamente un 50-50', 'Jugar desde la otra mano'],
        answer: 1,
        explain: 'Elección restringida: con Q J, Este podía haber jugado cualquiera de los dos honores, pero con la Dama semifallo no tenía elección. El semifallo es la tenencia más probable, así que el impasse gana alrededor del 65% de las veces.',
      },
    ],
  },

  {
    id: 'balancing',
    title: 'La reapertura',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Cuándo y cómo reabrir la subasta en posición de reapertura, y por qué ahí se puede declarar con menos.',
    body: `
<h3>La posición de reapertura</h3>
<p>Estás en <strong>posición de reapertura</strong> cuando tu paso terminaría la subasta. Por ejemplo, Oeste abre de 1♥, tu compañero pasa, Este pasa y te toca a ti. Los rivales se han parado a un nivel bajo, y eso te dice algo: Este tiene menos de 6 puntos y Oeste normalmente no es muy fuerte. La fuerza que falta tiene que estar en algún sitio, y buena parte está en la mano de tu compañero. Tu compañero puede haber pasado con una buena mano simplemente porque no tenía una voz adecuada, por ejemplo con longitud en corazones.</p>

<h3>Pide prestado un Rey</h3>
<p>Así que en posición de reapertura puedes actuar con unos <strong>3 PH menos</strong> de los que necesitarías en posición directa, como si le hubieras pedido prestado un Rey a tu compañero. Tu compañero debe acordarse de devolverte ese Rey y no declarar como si hubieras hecho una voz con todos los valores.</p>
<div class="auction" data-calls="1H P P" data-dealer="W"></div>
<table>
<thead><tr><th>Acción de reapertura tras 1♥ – paso – paso</th><th>Significado aproximado</th></tr></thead>
<tbody>
<tr><td>Intervención a palo</td><td>Unos 5-13 PH y un palo razonable</td></tr>
<tr><td>Doblo</td><td>Unos 9+ PH, corto en corazones, apoyo para los demás palos (o una mano fuerte)</td></tr>
<tr><td>1SA</td><td>Unos 11-14 PH, equilibrada, con parada en corazones</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:KJ84 H:73 D:A1063 C:Q85" data-label="1♥ – P – P – ?: doblo"></div>
<p>10 PH y corto en corazones: demasiado ligero para un doblo en posición directa, pero un doblo de reapertura normal.</p>
<div class="hand" data-cards="S:K94 H:AJ6 D:Q1073 C:K82" data-label="1♦ – P – P – ?: 1SA"></div>
<p>13 PH, equilibrada, con los diamantes parados: un 1SA de reapertura, que muestra aproximadamente 11-14 en lugar de los 15-18 de una intervención directa de 1SA.</p>

<h3>Cuando han encontrado fit</h3>
<div class="auction" data-calls="1S P 2S P P" data-dealer="E"></div>
<div class="hand" data-cards="S:73 H:QJ85 D:K1064 C:A92" data-label="Reabre con un doblo"></div>
<p>Los rivales han encontrado fit en picas y se han parado a nivel de dos, así que solo tienen aproximadamente la mitad de los puntos de honor. Si tienen ocho o nueve picas, es muy probable que tu bando también tenga fit. Dejarles jugar un contrato a nivel de dos cuando tienes fit suele ser una política perdedora. Dobla como informativo, invitando a tu compañero a declarar su mejor palo a nivel de tres.</p>

<h3>Cuándo no reabrir</h3>
<ul>
<li><strong>Cuando eres largo en su palo.</strong> Entonces tu compañero es corto en él y, con valores, normalmente habría doblado. Puede que estén en un mal contrato; déjales jugarlo.</li>
<li><strong>Cuando no tienen fit y van con dificultades.</strong> Si el abridor ha redeclarado un segundo palo y el respondedor ha dado una preferencia a regañadientes, puede que vayan a multarse: no los rescates.</li>
<li><strong>Tras 1SA – paso – paso</strong>, reabre solo con un buen palo o con distribución. El compañero del abridor puede tener hasta 7 puntos, y la fuerza está más repartida.</li>
</ul>
<div class="hand" data-cards="S:Q74 H:KJ953 D:A5 C:J82" data-label="1♥ – P – P – ?: paso"></div>
<p>11 PH, pero cinco corazones situados detrás del abridor. Tu compañero tiene probablemente como mucho uno o dos corazones y no ha doblado, así que es débil. Es probable que 1♥ se multe; pasa.</p>
<div class="tip">Cuando reabre tu compañero, recuerda que ya ha contado con parte de tus valores. Declara un nivel más prudente de lo que harías frente a una acción en posición directa.</div>
<div class="warn">No castigues a tu compañero por reabrir la subasta. Si tienes una buena mano y tu compañero reabre con un doblo, piensa si está haciendo una reapertura ligera antes de saltar a la manga.</div>
`,
    keyPoints: [
      'En posición de reapertura puedes actuar con unos 3 PH menos que en posición directa («pedir prestado un Rey»).',
      'Tras 1♥ – P – P: un palo con unos 5-13, un doblo con unos 9+, 1SA con unos 11-14.',
      'No dejes que los rivales jueguen a nivel de dos cuando han encontrado fit: compite.',
      'Ten cuidado al reabrir cuando eres largo en su palo.',
      'Cuando tu compañero reabre, devuélvele el Rey: no te pases al responder.',
    ],
    quiz: [
      {
        q: '1♥ – P – P – ? Tienes ♠KJ84 ♥73 ♦A1063 ♣Q85 (10 PH).',
        options: ['Paso', 'Doblo', '1♠', '1SA'],
        answer: 1,
        explain: 'Corto en corazones y con apoyo para los demás palos. 10 PH es poco para un doblo directo, pero está bien en posición de reapertura.',
      },
      {
        q: '1♦ – P – P – ? Tienes ♠K94 ♥AJ6 ♦Q1073 ♣K82 (13 PH).',
        options: ['Paso', 'Doblo', '1SA', '2SA'],
        answer: 2,
        explain: 'Un 1SA de reapertura muestra unos 11-14 con parada. Es exactamente esta mano.',
      },
      {
        q: '1♥ – P – P – ? Tienes ♠Q74 ♥KJ953 ♦A5 ♣J82 (11 PH).',
        options: ['Paso', 'Doblo', '1SA', '2♦'],
        answer: 0,
        explain: 'Con cinco corazones estás situado detrás del abridor, y tu compañero, que es corto en corazones, habría doblado con valores. Es muy posible que 1♥ se multe; pasa.',
      },
      {
        q: '¿Por qué puedes reabrir con menos puntos de los que necesitarías en posición directa?',
        options: ['Porque, si los rivales son débiles, tu compañero tiene que tener algunos valores', 'Porque el reglamento lo permite', 'Porque eres vulnerable', 'Porque los rivales no pueden doblar'],
        answer: 0,
        explain: 'Si los rivales se paran a nivel bajo, la fuerza restante está repartida entre tu compañero y tú. Tu compañero puede haber pasado una mano decente por falta de una buena voz.',
      },
      {
        q: 'Los rivales declaran 1♠ – 2♠ y pasan. En posición de reapertura, ¿cuál es el principio general?',
        options: ['Pasar siempre: tienen fit', 'Competir: cuando tienen fit a nivel de dos, tu bando probablemente también lo tiene', 'Declarar solo con 12+ PH', 'Doblar de castigo'],
        answer: 1,
        explain: 'Si tienen ocho o nueve triunfos, probablemente tengáis un fit propio. Dejarles jugar a nivel de dos suele ser peor que competir hasta el nivel de tres.',
      },
    ],
  },

  {
    id: 'law-of-total-tricks',
    title: 'La ley de las bazas totales',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Cómo el número de triunfos que tienen los dos bandos guía las decisiones competitivas en la lucha por el parcial.',
    body: `
<h3>La ley</h3>
<p>El <strong>número total de bazas</strong> de una mano se define como las bazas que Norte-Sur pueden hacer en su mejor palo de triunfo más las que Este-Oeste pueden hacer en el suyo. La ley de las bazas totales dice que ese total es aproximadamente igual al <strong>número total de triunfos</strong>: la longitud del fit más largo de Norte-Sur más la del fit más largo de Este-Oeste.</p>
<p>Si tenéis nueve picas y ellos ocho corazones, hay unas 17 bazas totales: si ellos pueden hacer nueve bazas en corazones, vosotros podéis hacer unas ocho en picas, y así sucesivamente.</p>

<h3>La regla práctica</h3>
<p>En una subasta competitiva, declara hasta el nivel que corresponde al número de triunfos que tiene tu bando:</p>
<table>
<thead><tr><th>Triunfos de tu bando</th><th>Compite hasta</th></tr></thead>
<tbody>
<tr><td>8</td><td>El nivel de 2 (8 bazas)</td></tr>
<tr><td>9</td><td>El nivel de 3 (9 bazas)</td></tr>
<tr><td>10</td><td>El nivel de 4 (10 bazas)</td></tr>
</tbody>
</table>
<p>La lógica: con nueve triunfos estás «a salvo» a nivel de tres, porque aunque te multen, los rivales probablemente cumplirían algo. Con solo ocho, declarar a nivel de tres es arriesgado cuando ellos también tienen ocho, porque el total es solo 16.</p>

<h3>Un ejemplo</h3>
<div class="auction" data-calls="1S 2H 2S 3H" data-dealer="S"></div>
<div class="hand" data-cards="S:AQJ852 H:73 D:KJ4 C:Q5" data-label="Abridor: declara 3♠"></div>
<p>El apoyo de tu compañero muestra tres triunfos. Con seis picas, tu bando tiene nueve: compite hasta 3♠. Si ellos cumplen 3♥, el total de unas 17 bazas sugiere que harás ocho o nueve en picas, así que 3♠ es un buen resultado en cualquier caso.</p>
<div class="hand" data-cards="S:AQJ85 H:73 D:KJ4 C:Q52" data-label="Abridor: paso"></div>
<p>Con cinco picas, tu bando tiene ocho. Si los dos bandos tienen ocho triunfos (16 en total) y ellos hacen nueve bazas en corazones, tú haces solo siete en picas: 3♠ se multaría en dos. Pasa y defiende; tus valores fuera de las picas bien pueden multar 3♥.</p>

<h3>Ajustes</h3>
<p>La ley es una aproximación. Espera <strong>más</strong> bazas totales que triunfos con:</p>
<ul>
<li>un doble fit (un segundo fit en un palo lateral),</li>
<li>cortos en los palos de los rivales combinados con triunfos largos,</li>
<li>honores concentrados en tus propios palos largos.</li>
</ul>
<p>Espera <strong>menos</strong> bazas totales con:</p>
<ul>
<li>Damas y Valets en los palos de los rivales (buenos para defender, malos para jugar),</li>
<li>distribución plana (4-3-3-3) en cualquiera de las manos,</li>
<li>triunfos de mala calidad.</li>
</ul>

<h3>Principios de la lucha por el parcial</h3>
<ul>
<li>No vendas a nivel de dos cuando tu bando tiene un fit de ocho cartas y los rivales también.</li>
<li>Con nueve triunfos, compite hasta el nivel de tres; con triunfos de más, haz apoyos de barrage, sobre todo con vulnerabilidad favorable.</li>
<li>No declares tres sobre tres con solo ocho triunfos salvo que tengas distribución extra: defiende.</li>
<li>Una multa sin doblar (−50 o −100) es mejor que dejarles cumplir un parcial (−110 o −140).</li>
</ul>
<div class="tip">Cuando tu compañero interviene y tú tienes apoyo de cuatro cartas y una mano débil, piensa en la ley: nueve o diez triunfos entre los dos significan que debes apoyar hasta el nivel que corresponde, complicándoselo a los rivales.</div>
<div class="warn">No uses la ley para declarar mangas y slams con manos débiles. Es una guía para las decisiones competitivas de parcial, en las que declaran los dos bandos.</div>
`,
    keyPoints: [
      'Bazas totales (los mejores contratos de los dos bandos) ≈ triunfos totales (los fits más largos de los dos bandos).',
      'Compite hasta el nivel igual al número de triunfos de tu bando: 8 → nivel de dos, 9 → de tres, 10 → de cuatro.',
      'Con ocho triunfos cada bando, declarar tres sobre tres suele ser un error: defiende.',
      'Ajusta al alza con dobles fits y cortos; a la baja con honores blandos en sus palos y distribución plana.',
      'Una pequeña multa sin doblar es mejor que dejarles cumplir un parcial.',
    ],
    quiz: [
      {
        q: 'Tu bando tiene nueve triunfos en una subasta competitiva de parcial. ¿Hasta qué nivel aconseja competir la ley?',
        options: ['El nivel de 2', 'El nivel de 3', 'El nivel de 4', 'El nivel de 5'],
        answer: 1,
        explain: 'Declara hasta el nivel que corresponde a tus triunfos: nueve triunfos, nueve bazas, nivel de tres.',
      },
      {
        q: 'Cada bando tiene un fit de ocho cartas. Los rivales declaran 3♥ sobre tu 2♠. ¿Qué aconseja la ley?',
        options: ['Declarar 3♠', 'Defender: con 16 bazas totales, si ellos hacen nueve tú solo haces siete', 'Declarar 4♠', 'Doblar de castigo tengas lo que tengas'],
        answer: 1,
        explain: 'Con 16 triunfos en total, las bazas suman unas 16. Si 3♥ se cumple, 3♠ se multa en dos; si 3♠ se cumpliera, 3♥ se multa. En cualquier caso, defender es al menos igual de bueno.',
      },
      {
        q: '¿Qué característica sugiere más bazas totales que el número de triunfos?',
        options: ['Damas y Valets en el palo de los rivales', 'Una distribución 4-3-3-3', 'Un doble fit con cortos en el palo de los rivales', 'Triunfos débiles'],
        answer: 2,
        explain: 'Un segundo fit y los cortos permiten a los dos bandos hacer en sus propios contratos más bazas de las que sugiere solo el número de triunfos.',
      },
      {
        q: 'Abriste de 1♠ con seis picas y un mínimo. 1♠ – (2♥) – 2♠ – (3♥) – ?',
        options: ['Paso', '3♠', '4♠', 'Doblo'],
        answer: 1,
        explain: 'Tu compañero tiene tres picas, así que tu bando tiene nueve. Competir hasta 3♠ es lo que recomienda la ley.',
      },
      {
        q: '¿Cuál es un ajuste a la baja, que sugiere menos bazas totales?',
        options: ['Cortos en el palo de los rivales', 'Damas y Valets en los palos de los rivales', 'Un fit de diez cartas', 'Un segundo fit'],
        answer: 1,
        explain: 'Los honores blandos en los palos de los rivales hacen bazas en defensa pero sirven de poco cuando juegas tú, así que los dos bandos tienden a hacer menos bazas como declarantes.',
      },
    ],
  },

  {
    id: 'vulnerability-imps-matchpoints',
    title: 'Vulnerabilidad, IMPs, match points y par',
    topic: 'Scoring & tactics',
    level: 'Intermediate',
    summary: 'Cómo la vulnerabilidad y la forma de puntuación cambian tus decisiones de subasta y de carteo.',
    body: `
<h3>Vulnerabilidad</h3>
<p>Cada mano indica quién es vulnerable. Desde el punto de vista de tu bando hay cuatro combinaciones, que se suelen describir así:</p>
<ul>
<li><strong>Favorable:</strong> tú no vulnerable y ellos vulnerables. Haz barrages y sacrificios con libertad; tus multas son baratas y sus mangas son caras.</li>
<li><strong>Igual:</strong> los dos bandos no vulnerables, o los dos vulnerables.</li>
<li><strong>Desfavorable:</strong> tú vulnerable y ellos no. Ten cuidado: cada multa cuesta 100 sin doblar y 200-300 doblada, mientras que sus mangas valen menos.</li>
</ul>
<p>La vulnerabilidad también cambia tus decisiones de manga: una manga vulnerable vale 500 de prima en lugar de 300, así que merece la pena declarar las mangas vulnerables con valores más justos, sobre todo en IMPs.</p>

<h3>Equipos: los IMPs</h3>
<p>En un encuentro por equipos se juegan las mismas manos en las dos mesas y la diferencia de puntuación se convierte en International Match Points (IMPs):</p>
<table>
<thead><tr><th>Diferencia</th><th>IMPs</th><th>Diferencia</th><th>IMPs</th></tr></thead>
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
<p>Las diferencias de 0-10 valen 0; las de 3500-3990 valen 23 y las de 4000 o más, 24. La escala crece despacio, así que las grandes diferencias vienen de las mangas y los slams, y las bazas de más apenas cuentan. De ahí la estrategia en IMPs:</p>
<ul>
<li><strong>Declara las mangas con agresividad.</strong> No vulnerable, declarar 4♠ gana 6 IMPs cuando se cumple (+420 frente a +170) y pierde 5 cuando falla (−50 frente a +140): merece la pena con alrededor de un 45%. Vulnerable: ganas 10 (+620 frente a +170) y pierdes 6 (−100 frente a +140): merece la pena con alrededor de un 37%.</li>
<li><strong>Los pequeños slams</strong> merecen declararse con alrededor de un 50%; <strong>los grandes slams</strong>, solo con bastante más del 50% (el punto de equilibrio está en un 56-57%, y en la práctica quieres casi la certeza).</li>
<li><strong>La seguridad primero en el carteo</strong>: renuncia a una baza de más para proteger el contrato.</li>
</ul>

<h3>Parejas: los match points</h3>
<p>En un torneo de parejas, tu puntuación en cada mano se compara con la de todas las demás parejas que jugaron en tu misma línea, y ganas un punto (dos, en algunos sistemas de puntuación) por cada una a la que superas. El <em>tamaño</em> de la diferencia no importa, solo a cuántas parejas superas. Eso cambia las prioridades:</p>
<ul>
<li>Las bazas de más importan: +450 gana a +420 con la misma seguridad con la que +620 gana a +170.</li>
<li>Las denominaciones que puntúan más importan: 3SA con diez bazas (+430) gana a 4♠ con diez (+420). Con dos manos equilibradas y un fit 4-4 en un mayor, a veces se elige 3SA por este motivo.</li>
<li>Los parciales se pelean a muerte: +110 frente a +90 es una gran diferencia en match points, y empujar a los rivales un nivel más arriba para que se multen suele ser la acción ganadora.</li>
<li>Doblar un parcial y cobrar +200 puede superar a todos los que puntuaron +110 o +140, pero si lo cumplen doblado, tienes un cero.</li>
<li>Las jugadas de seguridad que cuestan una baza de más solo son correctas cuando el contrato corre peligro de verdad.</li>
</ul>

<h3>El par</h3>
<p>El resultado <strong>par</strong> es lo que ocurre cuando los dos bandos declaran a la perfección conociendo las cuatro manos. Por ejemplo, si Este-Oeste, vulnerables, pueden cumplir 4♠ (620) y Norte-Sur, no vulnerables, pueden hacer ocho bazas en diamantes, el par es 5♦ doblado por Norte-Sur con tres multas: −500 es mejor para ellos que −620. Los resultados reales se comparan con el par para ver qué bando ganó, y pensar en el par entrena un buen criterio competitivo.</p>
<div class="tip">Antes de cada mano, fíjate en la vulnerabilidad. Pregúntate: «¿Cuánto vale su manga y cuánto me puedo permitir perder?».</div>
<div class="warn">En IMPs no corras riesgos innecesarios por las bazas de más, y en match points no hagas jugadas de seguridad que cuesten bazas de más cuando el contrato no corre peligro. La jugada correcta puede depender de la forma de puntuación.</div>
`,
    keyPoints: [
      'Vulnerabilidad favorable (tú no vulnerable, ellos vulnerables): momento de barrages y sacrificios; desfavorable: momento de prudencia.',
      'IMPs: declara las mangas no vulnerables con alrededor de un 45%, las vulnerables con alrededor de un 37%, los pequeños slams con un 50%.',
      'IMPs: las bazas de más importan poco; protege el contrato.',
      'Match points: cuenta cada pareja a la que superas, así que importan las bazas de más y las denominaciones que puntúan más.',
      'El par es el resultado de una subasta perfecta de los dos bandos, sacrificios incluidos.',
    ],
    quiz: [
      {
        q: '¿Qué significa «vulnerabilidad desfavorable»?',
        options: ['Los dos bandos vulnerables', 'Tú vulnerable y ellos no vulnerables', 'Tú no vulnerable y ellos vulnerables', 'Ningún bando vulnerable'],
        answer: 1,
        explain: 'Desfavorable significa que tus multas son caras y sus mangas relativamente baratas: el peor momento para sacrificarse o hacer barrages alocados.',
      },
      {
        q: 'En IMPs, ¿con qué frecuencia aproximada debe cumplirse una manga vulnerable para que merezca la pena declararla?',
        options: ['Alrededor del 37%', 'Alrededor del 50%', 'Alrededor del 60%', 'Alrededor del 75%'],
        answer: 0,
        explain: 'Ganas 10 IMPs (+620 frente a +170) cuando se cumple y pierdes 6 (−100 frente a +140) cuando falla, así que el punto de equilibrio está en 6/16 = 37,5%.',
      },
      {
        q: 'En match points, ¿por qué importa +430 frente a +420?',
        options: ['No importa: la diferencia es mínima', 'Cuenta cada pareja a la que superas, por pequeño que sea el margen', 'Por la escala de IMPs', 'Porque el sin triunfo tiene una prima'],
        answer: 1,
        explain: 'En parejas solo importa la clasificación. Diez puntos superan a una pareja con la misma seguridad que mil.',
      },
      {
        q: 'En IMPs, ¿cuántos IMPs supone una diferencia de 250 puntos?',
        options: ['4', '5', '6', '7'],
        answer: 2,
        explain: '220-260 son 6 IMPs. Por ejemplo, +420 frente a +170 cuando un equipo declara una manga no vulnerable y el otro se para en un parcial.',
      },
      {
        q: 'Los rivales, vulnerables, pueden cumplir 4♠ (620). Tú no eres vulnerable y esperas tres multas en 5♦ doblado. ¿Cuánto vale eso?',
        options: ['Una pérdida de 800', 'Una pérdida de 500, que es mejor que −620', 'Una pérdida de 300', 'Una ganancia'],
        answer: 1,
        explain: 'No vulnerable, tres multas dobladas son 100 + 200 + 200 = 500. Son 120 menos que su manga, así que el sacrificio gana si 4♠ se cumple de verdad.',
      },
    ],
  },

  {
    id: 'safety-plays',
    title: 'Jugadas de seguridad',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Cómo renunciar a un poco, normalmente a una baza de más, para proteger el contrato contra un mal reparto.',
    body: `
<h3>Un seguro para tu contrato</h3>
<p>Una <strong>jugada de seguridad</strong> es una forma de jugar un palo (o la mano entera) que te protege contra un mal reparto, normalmente a costa de una pequeña posibilidad de hacer una baza más. Contratas un seguro: renuncias a un poco en los repartos buenos para evitar el desastre en los malos. Por eso la primera pregunta siempre es: <em>¿cuántas bazas necesito de este palo?</em> La mejor jugada para hacer cuatro bazas suele ser distinta de la mejor para hacer cinco.</p>

<h3>Conserva una horquilla a cada lado</h3>
<p>Tienes A Q 9 6 5 en el muerto frente a K 10 4 3 en la mano, te faltan J 8 7 2 y necesitas cinco bazas. Casi siempre funciona cualquier jugada sensata; el peligro está en que las cuatro cartas que faltan estén en una sola mano.</p>
<ul>
<li><strong>Cobra primero el As.</strong> Si Oeste no sirve, Este tiene J 8 7, situados delante de tu K 10, así que juegas dos veces desde el muerto y haces el impasse. Si el que no sirve es Este, Oeste tiene J 8 7 delante de la Q 9 del muerto, así que juegas dos veces desde la mano y haces el impasse. Cinco bazas tenga quien tenga la longitud.</li>
<li>Cobrar primero el Rey es un error: si entonces Oeste no sirve, el J 8 7 de Este queda detrás del A Q 9 que le queda al muerto, tu 10 4 3 no puede capturar el Valet y Este tiene que hacer una baza.</li>
</ul>
<p>La regla general: cuando tienes todos los honores mayores menos uno, cobra primero el honor que deja una posición de impasse en <em>las dos</em> manos.</p>

<h3>Renunciar a una baza de más para asegurar el contrato</h3>
<p>Tienes A K 10 5 4 en el muerto frente a 8 7 6 y necesitas cuatro bazas; puedes permitirte perder una. La jugada natural, As, Rey y otra, solo hace cuatro bazas alrededor del 73% de las veces: falla contra los repartos 5-0 y contra la mayoría de los 4-1.</p>
<p>Mejor: cobra el As, juega luego hacia el muerto y, si Oeste juega bajo, pon el 10. Si Este gana con un honor, el palo suele estar 3-2 y el Rey y las cartas largas son buenas; si el 10 gana, has capturado la longitud de Oeste. Así haces cuatro bazas alrededor del 82% de las veces: además de todos los repartos 3-2, resuelves todos los 4-1 en los que Oeste tiene la longitud. El precio es una probabilidad algo menor de hacer cinco bazas, que solo importa si las necesitas.</p>

<h3>Agacharse por seguridad</h3>
<p>El muerto tiene A K 7 6 5 4 y una sola entrada lateral; tú tienes 3 2 y necesitas cuatro bazas. Si juegas el As, el Rey y una tercera vuelta, un reparto 4-1 te deja con dos perdedoras en el palo y sin forma de volver a las cartas largas. En lugar de eso, agáchate por completo en la primera vuelta. Después podrás jugar al As y al Rey y, si el palo estaba 4-1, ceder una vuelta más y usar la entrada lateral para cobrar las dos últimas. Cuatro bazas contra cualquier reparto 3-2 o 4-1: un 96%.</p>

<h3>Seguridad para la mano entera</h3>
<p>La seguridad no se limita a un solo palo. Supón que en 3SA cuentas nueve bazas y un impasse podría darte la décima, pero si falla, el defensor que gana puede cobrar cuatro bazas de su palo largo. No lo hagas. En la puntuación por equipos, una baza de más vale como mucho 1 IMP y el contrato vale muchísimo más. Del mismo modo, antes de arriesgarte en un palo, pregúntate si otro palo podría darte las bazas sin ningún riesgo.</p>
<div class="tip">Antes de tocar un palo clave, pregúntate: «¿Cuál es el peor reparto que puedo resolver y qué jugada lo resuelve?».</div>

<h3>Las jugadas de seguridad y la forma de puntuación</h3>
<ul>
<li><strong>Equipos (IMPs):</strong> haz casi todas las jugadas de seguridad que protejan el contrato. Una baza de más gana muy poco; una manga fallada pierde mucho.</li>
<li><strong>Parejas (match points):</strong> las bazas de más importan, porque todos los que juegan el mismo contrato compiten contigo. Haz una jugada de seguridad solo cuando el contrato esté de verdad en peligro, o cuando sospeches que estás en un contrato mejor que el resto de la sala.</li>
</ul>
<div class="warn">Una jugada de seguridad que haces sin necesitarla, o que te protege contra el peligro equivocado, no es más que una baza perdida. Cuenta primero tus bazas; luego decide si necesitas un seguro y de qué tipo.</div>
`,
    keyPoints: [
      'Decide primero cuántas bazas necesitas del palo; la mejor jugada depende de ello.',
      'Con A Q 9 x x frente a K 10 x x, cobra primero el As para conservar un impasse contra cualquiera de los dos defensores.',
      'Con A K 10 x x frente a x x x y cuatro bazas necesarias, cobra el As y luego haz el impasse al 10.',
      'Agáchate pronto en una vuelta cuando escaseen las entradas y te puedas permitir una perdedora.',
      'En IMPs haz jugadas de seguridad con libertad; en match points, solo cuando el contrato corra peligro.',
    ],
    quiz: [
      {
        q: 'Tienes A Q 9 6 5 frente a K 10 4 3 y necesitas cinco bazas. ¿Qué carta debes cobrar primero?',
        options: ['El As', 'El Rey', 'La Dama', 'Da igual'],
        answer: 0,
        explain: 'Tras el As conservas K 10 detrás de Este y Q 9 detrás de Oeste, así que puedes capturar un reparto 4-0 tenga quien tenga las cuatro cartas.',
      },
      {
        q: 'Tienes A K 10 5 4 frente a 8 7 6 y solo necesitas cuatro bazas. ¿Cuál es la jugada de seguridad?',
        options: ['Cobrar el As y el Rey y jugar una tercera vuelta', 'Cobrar el As, jugar luego hacia el muerto y hacer el impasse al 10 si Oeste juega bajo', 'Salir con el 10 del muerto', 'Agacharse en las dos primeras vueltas'],
        answer: 1,
        explain: 'Te protege si Oeste tiene Q J 9 x y sigue haciendo cuatro bazas con todos los repartos normales: alrededor del 82%, frente a alrededor del 73% de cobrar las cartas altas.',
      },
      {
        q: 'El muerto tiene A K 7 6 5 4 y una entrada lateral; tú tienes 3 2. Necesitas cuatro bazas del palo. ¿Qué haces?',
        options: ['As, Rey y una tercera vuelta', 'Agacharte en la primera vuelta', 'Jugar el 3 y hacer el impasse al 7', 'Cobrar el As y esperar'],
        answer: 1,
        explain: 'Agacharte en la primera vuelta conserva las cartas altas del muerto como entradas. Así haces cuatro bazas tanto con repartos 3-2 como 4-1, alrededor del 96% de las veces.',
      },
      {
        q: 'En IMPs cuentas nueve bazas en 3SA. Un impasse podría darte la décima, pero si falla la defensa puede correr un palo. ¿Qué haces?',
        options: ['Hacer el impasse para la baza de más', 'Cobrar tus nueve bazas', 'Ceder antes una baza', 'Jugar a un squeeze'],
        answer: 1,
        explain: 'En IMPs la baza de más no vale casi nada, mientras que la multa te cuesta una manga. Asegura el contrato.',
      },
      {
        q: '¿Por qué se hacen menos jugadas de seguridad en match points?',
        options: ['Porque allí están prohibidas', 'Porque una baza de más puede superar a las demás parejas que juegan el mismo contrato', 'Porque las mangas puntúan menos', 'Porque los defensores son más débiles'],
        answer: 1,
        explain: 'En parejas, +450 gana a +420 con la misma seguridad con la que +420 gana a −50. Renunciar a una baza de más cuesta match points siempre que el contrato no estuviera realmente en peligro.',
      },
    ],
  },

  {
    id: 'avoidance-play',
    title: 'Evitación: que el rival peligroso no tome la mano',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Cómo organizar el carteo para que, si tienes que perder una baza, la pierdas con el defensor que no puede hacerte daño.',
    body: `
<h3>Mano peligrosa y mano segura</h3>
<p>A menudo solo uno de los defensores puede hacerte daño. A sin triunfo, es el que tiene ganadoras afirmadas en su palo largo. En un contrato a palo, puede ser el que puede jugar a través de un Rey, o el que puede dar un fallo a su compañero. Identifica pronto la <strong>mano peligrosa</strong> y planifica perder las bazas que tengas que perder con la <strong>mano segura</strong>. Esto es la jugada de evitación.</p>

<h3>Un ejemplo completo</h3>
<div class="deal" data-n="S:54 H:K83 D:KQ5 C:AJ1093" data-e="S:97 H:Q975 D:J643 C:Q86" data-s="S:A632 H:AJ4 D:A72 C:K72" data-w="S:KQJ108 H:1062 D:1098 C:54" data-caption="3SA por Sur. Oeste sale con el ♠K."></div>
<div class="auction" data-calls="1NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Cuenta:</strong> ♠A, ♥AK, ♦AKQ, ♣AK: ocho bazas firmes. Los tréboles darán las bazas extra, pero puede que tengas que perder una con la ♣Q.</p>
<p><strong>Paso 1, el hold-up.</strong> Tienes seis picas entre las dos manos, así que, por la regla del 7, te agachas una vez. Cede el ♠K y gana la segunda pica. Este empezó con dos picas, así que ya no le queda ninguna: <strong>Este es la mano segura y Oeste la peligrosa.</strong></p>
<p><strong>Paso 2, elige el impasse.</strong> Los tréboles son una adivinanza en dos direcciones: podrías hacer el impasse a la Dama contra cualquiera de los dos defensores. Juega el ♣K de tu mano, luego un trébol pequeño hacia el muerto y, cuando Oeste juegue bajo, haz el impasse al 10. Si Oeste tiene la Dama, el impasse gana. Si la tiene Este, como aquí, Este gana pero no tiene pica que devolver. Ganas el cambio y haces diez bazas: una pica, dos corazones, tres diamantes y cuatro tréboles.</p>
<p>Hacer el impasse en la otra dirección (jugar el ♣J a través de Este hacia tu Rey) funcionaría en esta distribución concreta, pero perdería siempre que Oeste tuviera la Dama, y Oeste cobraría entonces las picas. La línea de evitación gana esté donde esté la Dama.</p>
<p>¿Y el impasse en corazones, jugando hacia el A J? También perdería con Oeste si Oeste tuviera la ♥Q. Prefiere el palo en el que el impasse fallido va a la mano segura.</p>
<div class="tip">Con un impasse en dos direcciones, pregúntate primero: «Si este impasse falla, ¿importa quién gane?». Si importa, haz el impasse hacia la mano segura, y recurre a adivinar solo cuando los dos defensores sean igual de peligrosos.</div>

<h3>Otras técnicas de evitación</h3>
<ul>
<li><strong>Agáchate hacia la mano segura.</strong> Cuando un palo tiene que ceder una baza, organiza las cosas para que la gane el defensor seguro: juega desde la mano que te permite poner una carta baja mientras la mano peligrosa no puede ganar barato.</li>
<li><strong>Protege un Rey.</strong> Con K x en tu mano y la mano peligrosa a tu derecha, una salida a través de tu Rey es mortal, así que no dejes que la mano peligrosa tome la mano.</li>
<li><strong>Juega hacia los honores</strong> para que tenga que ganar el compañero de la mano peligrosa, y no la mano peligrosa.</li>
<li><strong>En contratos a palo</strong>, el peligro puede ser un fallo: si se sabe que un defensor es corto en un palo, no dejes que su compañero tome la mano para que no pueda darle el fallo.</li>
</ul>
<div class="warn">La evitación solo funciona si sabes qué defensor es peligroso. Fíjate en la salida, en la subasta y en las cartas jugadas en las primeras bazas, y deduce quién tiene el palo largo antes de empezar con tu palo clave.</div>
`,
    keyPoints: [
      'Identifica la mano peligrosa (a menudo el defensor con ganadoras afirmadas) y la mano segura.',
      'Si tienes que perder una baza, piérdela con la mano segura.',
      'Combina el hold-up con la evitación: convierte en mano segura al compañero del jugador con el palo largo y haz luego el impasse hacia esa mano.',
      'Con un impasse en dos direcciones, elige la dirección en la que solo pierdes con la mano segura.',
      'Prefiere una fuente de bazas en la que la opción perdedora vaya a la mano segura.',
    ],
    quiz: [
      {
        q: 'A sin triunfo, ¿qué defensor suele ser la mano peligrosa?',
        options: ['El que tiene más PH', 'El que tiene ganadoras afirmadas en su palo largo', 'El que está a tu izquierda', 'El que hizo la salida, siempre'],
        answer: 1,
        explain: 'La mano peligrosa es la que puede cobrar bazas suficientes para multarte cuando toma la mano, normalmente el defensor con el palo largo afirmado.',
      },
      {
        q: 'En la mano de arriba, ¿por qué agacharse en la primera pica?',
        options: ['Para ganar una baza extra de pica', 'Para agotar las picas de Este y convertirlo en la mano segura', 'Para ocultar tu longitud en picas', 'Para crear una entrada al muerto'],
        answer: 1,
        explain: 'Este tenía dos picas. Tras ganar la segunda vuelta, no le queda ninguna, así que no puede hacerte daño cuando tome la mano.',
      },
      {
        q: 'En la mano de arriba, ¿en qué dirección debes hacer el impasse en tréboles?',
        options: ['Contra Oeste, para que si falla gane Este', 'Contra Este', 'Jugar a la caída', 'A cara o cruz'],
        answer: 0,
        explain: 'Jugar hacia el muerto y hacer el impasse al 10 gana si Oeste tiene la Dama, y solo pierde con Este, que no tiene picas. El contrato está a salvo en cualquier caso.',
      },
      {
        q: '¿Por qué no probar el impasse en corazones (jugando hacia el A J) para la novena baza?',
        options: ['Perdería si Oeste, la mano peligrosa, tuviera la ♥Q', 'No puede ganar', 'Necesita dos entradas', 'Los corazones están bloqueados'],
        answer: 0,
        explain: 'Jugar hacia el A J hace el impasse contra Este pero pierde con la Dama de Oeste, y entonces Oeste cobraría las picas. El impasse en tréboles solo pierde con la mano segura.',
      },
      {
        q: 'Tienes K x en la mano y la mano peligrosa está a tu derecha. ¿Cuál es el riesgo?',
        options: ['Ninguno', 'Una salida de la mano peligrosa a través de tu Rey podría atraparlo', 'Te fallarán el Rey', 'Puedes bloquear el palo'],
        answer: 1,
        explain: 'Si el defensor de tu derecha toma la mano, el As de su compañero queda por encima de tu Rey. No dejes que ese defensor tome la mano, u organiza que cualquier baza que tengas que perder la gane el otro defensor.',
      },
    ],
  },

  {
    id: 'counting-on-defense',
    title: 'Contar en defensa',
    topic: 'Defense',
    level: 'Advanced',
    summary: 'Cómo cuentan los defensores los puntos, la distribución y las bazas del declarante para encontrar la defensa correcta.',
    body: `
<h3>Tres cosas que contar</h3>
<p>Los buenos defensores parecen ver a través del dorso de las cartas. Su secreto es contar. A partir de la subasta y de las primeras bazas deducen tres cosas:</p>
<ol>
<li><strong>Puntos:</strong> cuántos PH tienen el declarante y tu compañero.</li>
<li><strong>Distribución:</strong> cuántas cartas tiene el declarante en cada palo.</li>
<li><strong>Bazas:</strong> cuántas bazas puede hacer el declarante y cuántas necesita la defensa.</li>
</ol>

<h3>Contar los puntos</h3>
<p>Empieza por la subasta. Un abridor de 1SA tiene 15-17, un dos débil 5-10, un apoyo invitativo 10-12. Cuando baja el muerto, suma sus PH a los tuyos y resta de 40.</p>
<p>Ejemplo: Sur abre de 1SA y Norte sube a 3SA. El muerto tiene 10 PH y tú 9. Tu compañero tiene 40 − 10 − 9 − (15 a 17) = de 4 a 6 PH. Si tu compañero ya ha mostrado el ♠K ganando una baza con él, tiene como mucho 3 PH más, así que no puede tener otro As. Por tanto, cualquier otro As que falte lo tiene el declarante, y no tiene sentido esperar que tu compañero entre para cobrar su palo largo.</p>
<p>La misma cuenta funciona al revés. Si el declarante, que ha mostrado 15-17, ya ha enseñado el ♠AQ, el ♥AK y el ♦K (16), no puede tener además el ♣A (serían 20). Lo tiene tu compañero, y puedes jugar tréboles con tranquilidad a través del K del muerto.</p>

<h3>Contar la distribución</h3>
<p>Cada mano tiene 13 cartas. Usa primero la subasta: un abridor de 1♥ tiene cinco o más corazones; 1♠ seguido de 2♥ muestra al menos cinco picas y cuatro corazones; un abridor de 1SA no tiene semifallo. Añade las señales de cuenta de tu compañero y el momento en que un jugador no sirve.</p>
<table>
<thead><tr><th>Fuente</th><th>Qué averiguas</th></tr></thead>
<tbody>
<tr><td>La apertura y la redeclaración del declarante</td><td>La longitud en los palos declarados; si es equilibrada o no</td></tr>
<tr><td>El muerto</td><td>13 cartas que puedes ver</td></tr>
<tr><td>Las señales de cuenta de tu compañero</td><td>La longitud de tu compañero en los palos del declarante y, por tanto, la del declarante</td></tr>
<tr><td>Un jugador que no sirve</td><td>Su longitud exacta en ese palo</td></tr>
</tbody>
</table>
<p>Ejemplo: el declarante abrió de 1♠ y redeclaró 2♥, así que tiene al menos 5-4 en los mayores. La cuenta de tu compañero muestra que el declarante tiene dos diamantes. Eso suma once cartas, así que el declarante tiene como mucho dos tréboles y, si la subasta sugiere 5-4-2-2, tiene exactamente dos. Si el declarante juega ahora un trébol hacia el K Q x x del muerto y tú tienes el As, sabes si agacharte puede dejarle sin acceso al resto del palo.</p>
<div class="tip">Cuenta la mano lo antes posible, idealmente hacia la tercera baza. Lleva en la cabeza las cuatro longitudes (por ejemplo, «5-4-2-2») y actualízalas cada vez que una carta te diga algo.</div>

<h3>Contar las bazas</h3>
<p>Pregúntate: «¿Cuántas bazas puede hacer el declarante cuando tome la mano?». Si la respuesta ya alcanza el contrato, tienes que hacer tus bazas ahora: cambia de palo, cobra o haz enseguida la baza de la multa. Si al declarante le faltan bazas, defiende de forma pasiva y deja que sea él quien las pierda.</p>
<p>Ejemplo: contra 4♠, el muerto tiene ♣A K Q J 5, y la subasta y las primeras bazas muestran que el declarante tiene un palo de picas fuerte y el ♥A. Una vez sacados los triunfos, el declarante puede contar cinco picas, cinco tréboles y el ♥A: once bazas. Si tienes bazas en corazones o en diamantes, hay que hacerlas de inmediato, aunque sea a riesgo de salir por debajo de un Rey.</p>
<p>Al contrario, en una subasta 1SA – 3SA con un muerto plano y sin palo largo, el declarante puede tener solo siete u ocho bazas. Entonces la defensa debe evitar abrir palos nuevos y esperar: el declarante tendrá que regalar bazas.</p>

<h3>Juntarlo todo</h3>
<p>Contar no es un cálculo único, sino un hábito. En cada baza, pregúntate qué te dice la carta jugada sobre las cuatro manos. A medida que el panorama se aclara, la defensa correcta a menudo se vuelve evidente, y cuando no lo es, la cuenta al menos te dice qué distribuciones necesitas para que el contrato falle. Juega a esas distribuciones.</p>
<div class="warn">No cuentes solo las bazas de tu bando. La pregunta siempre es si el declarante puede cumplir el contrato y cómo puede impedirlo tu bando.</div>
`,
    keyPoints: [
      'Cuenta los puntos: con la subasta, el muerto y tu mano, deduce los PH de tu compañero.',
      'Cuenta la distribución: la subasta, el muerto, las señales de cuenta de tu compañero y los fallos suman 13.',
      'Cuenta las bazas del declarante: si tiene suficientes, haz tus bazas ahora; si no, defiende pasivo.',
      'Cuando el declarante ha mostrado un rango, los honores que ya ha jugado limitan lo que más puede tener.',
      'Supón la distribución que permite multar el contrato y defiende en consecuencia.',
    ],
    quiz: [
      {
        q: 'Sur abrió de 1SA (15-17) y Norte subió a 3SA. El muerto tiene 10 PH y tú 9. ¿Cuántos PH tiene tu compañero?',
        options: ['0-2', '4-6', '7-9', '10-12'],
        answer: 1,
        explain: '40 − 10 − 9 = 21 entre el declarante y tu compañero. El declarante tiene 15-17, así que tu compañero tiene 4-6.',
      },
      {
        q: 'El declarante abrió de 1SA (15-17) y ya ha mostrado el ♠AQ, el ♥AK y el ♦K. ¿Quién tiene el ♣A?',
        options: ['El declarante', 'Tu compañero', 'No se puede saber', 'El muerto'],
        answer: 1,
        explain: 'El declarante ha mostrado 16 PH. El ♣A le llevaría a 20, fuera de su rango, así que tiene que tenerlo tu compañero.',
      },
      {
        q: 'El declarante abrió de 1♠ y redeclaró 2♥. La cuenta de tu compañero muestra que el declarante tiene dos diamantes. ¿Cuántos tréboles puede tener como máximo?',
        options: ['Uno', 'Dos', 'Tres', 'Cuatro'],
        answer: 1,
        explain: 'Al menos cinco picas y cuatro corazones más dos diamantes suman once, así que el declarante tiene como mucho dos tréboles.',
      },
      {
        q: 'Contra 4♠, cuentas once bazas para el declarante en cuanto recupere la mano. ¿Qué debe hacer la defensa?',
        options: ['Defender pasivo', 'Hacer o afirmar sus bazas de inmediato', 'Salir de triunfo', 'Esperar a que el declarante se equivoque'],
        answer: 1,
        explain: 'Si el declarante tiene las bazas que necesita, una defensa pasiva solo le deja hacerlas. Tu única oportunidad es hacer tus bazas ahora.',
      },
      {
        q: 'Contra 3SA, el muerto es plano y el declarante parece tener solo siete u ocho bazas. ¿Qué tipo de defensa suele ser la mejor?',
        options: ['Pasiva: evitar abrir palos nuevos', 'Atacar todos los palos por turno', 'Cobrar todos tus Ases de golpe', 'Salir por debajo de tus Reyes'],
        answer: 0,
        explain: 'Al declarante le faltan bazas. Abrir palos nuevos se arriesga a regalarle una; las salidas seguras le obligan a encontrar las bazas sin ayuda.',
      },
    ],
  },

  {
    id: 'penalty-doubles-and-sacrifices',
    title: 'Doblos de castigo y sacrificios',
    topic: 'Competitive bidding',
    level: 'Advanced',
    summary: 'Cuándo doblar de castigo a los rivales y cuándo seguir declarando hasta un contrato que esperas que falle porque cuesta menos que el suyo.',
    body: `
<h3>Doblos de castigo</h3>
<p>Muchos doblos a nivel bajo son informativos, así que los doblos de castigo surgen de unas pocas situaciones claras:</p>
<ul>
<li><strong>Tras una secuencia de doblo negativo:</strong> el respondedor pasa con una tenencia fuerte en el palo del interventor, y el abridor reabre con un doblo que el respondedor pasa (consulta la lección “El doblo negativo”).</li>
<li><strong>Después de que tu bando haya redoblado</strong> (1♥ – X – XX), habéis mostrado la mayor parte de la fuerza, y los doblos de las voces de escape de los rivales son de castigo.</li>
<li><strong>Cuando los rivales se han estirado</strong> hasta una manga o un parcial alto con un misfit o en una subasta competitiva, y tú tienes bazas de triunfo.</li>
<li><strong>Cuando ya has descrito tu mano</strong> y tu compañero tiene valores: un doblo de cualquiera de los dos dice entonces «podemos multar esto».</li>
</ul>
<h4>Pautas</h4>
<ul>
<li>Las bazas de triunfo son la mejor razón para doblar. Las cartas altas en los palos laterales pueden ser falladas o capturadas con un impasse.</li>
<li>No dobles una manga declarada libremente solo con cartas altas. Los rivales saben lo que les falta, y tu doblo le dice al declarante dónde están los honores.</li>
<li>Piensa en qué pasa si se cumple. 2♥ doblado cumplido vale 470 o 670: un parcial se ha convertido en manga.</li>
<li>Piensa adónde pueden escapar. Doblar 1♠ cuando tienen una huida fácil a un fit mejor gana poco.</li>
</ul>

<h3>¿Cuánto cuesta una multa doblada?</h3>
<table>
<thead><tr><th>Multas</th><th>No vul doblado</th><th>Vul doblado</th></tr></thead>
<tbody>
<tr><td>1</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>300</td><td>500</td></tr>
<tr><td>3</td><td>500</td><td>800</td></tr>
<tr><td>4</td><td>800</td><td>1100</td></tr>
</tbody>
</table>

<h3>Sacrificios</h3>
<p>Un <strong>sacrificio</strong> es un contrato en el que esperas multarte porque la multa costará menos de lo que puntuaría el contrato de los rivales. Compara las cifras:</p>
<table>
<thead><tr><th>Su manga</th><th>Vale</th><th>Puedes permitirte (doblado), no vul</th><th>Puedes permitirte (doblado), vul</th></tr></thead>
<tbody>
<tr><td>No vulnerable</td><td>420</td><td>2 multas (300)</td><td>1 multa (200)</td></tr>
<tr><td>Vulnerable</td><td>620</td><td>3 multas (500)</td><td>2 multas (500)</td></tr>
</tbody>
</table>
<p>Así que los sacrificios son más baratos con <strong>vulnerabilidad favorable</strong>: tú no vulnerable y ellos vulnerables.</p>
<div class="auction" data-calls="1S 2H 4S" data-dealer="W"></div>
<div class="hand" data-cards="S:5 H:K9743 D:Q862 C:J74" data-label="Vulnerabilidad favorable: declara 5♥"></div>
<p>Tu compañero intervino con 2♥ y Este saltó a 4♠. Tienes apoyo de cinco cartas en corazones, semifallo de pica y poca defensa: 4♠ se cumplirá casi seguro y puntuará 620. 5♥ doblado probablemente se multe en dos o tres: 300 o 500. Declara 5♥ ya, antes de que los rivales puedan intercambiar más información.</p>

<h3>Cuándo no sacrificarse</h3>
<ul>
<li><strong>Cuando su contrato puede fallar.</strong> Un sacrificio contra un contrato que se habría multado es un <em>falso sacrificio</em>: conviertes un resultado positivo en uno negativo. Si tienes bazas defensivas, defiende.</li>
<li><strong>Cuando el coste es demasiado alto.</strong> Vulnerable contra no vulnerables, casi nunca hay un sacrificio rentable contra una manga.</li>
<li><strong>Cuando ya has descrito tu mano y tu compañero está en mejor posición para decidir</strong>: decide el jugador con más información. No contradigas la decisión de tu compañero de defender. Si tu compañero ha hecho un paso forcing, sigue lo que tengáis acordado.</li>
<li><strong>Cuando los rivales podrían seguir declarando.</strong> Si les dejas solos, pueden subir a un contrato a nivel de cinco que falle; un sacrificio, en cambio, puede empujarlos a un slam que se cumpla.</li>
</ul>
<div class="tip">«El nivel de cinco es de los rivales»: cuando declaran cinco sobre tu manga a nivel de cuatro, defender (a menudo doblando) suele ser lo correcto. Declarar seis para sacrificarte rara vez compensa.</div>
<div class="warn">Decide pronto. Un sacrificio declarado enseguida, antes de que los rivales hayan intercambiado información, es mucho más eficaz que uno hecho cuando ya han averiguado exactamente dónde deben jugar.</div>
`,
    keyPoints: [
      'Los doblos de castigo funcionan mejor con bazas de triunfo, después de que tu bando haya mostrado la mayor parte de la fuerza.',
      'No dobles mangas declaradas libremente solo con cartas altas en los palos laterales, y cuidado con doblar un parcial que se convierte en manga.',
      'Un sacrificio compensa cuando la multa es menor que el valor de su contrato.',
      'Contra una manga vulnerable (620), no vulnerable puedes permitirte tres multas dobladas (500); contra una no vulnerable (420), dos (300).',
      'Evita los falsos sacrificios: si tienes bazas defensivas, defiende.',
    ],
    quiz: [
      {
        q: 'Ningún bando es vulnerable. Los rivales pueden cumplir 4♠ (420). ¿Cuántas multas dobladas puedes permitirte en un sacrificio?',
        options: ['Una', 'Dos', 'Tres', 'Cuatro'],
        answer: 1,
        explain: 'Dos multas dobladas sin ser vulnerable son 300, menos que 420. Tres multas son 500, más que su manga.',
      },
      {
        q: 'Con vulnerabilidad favorable, los rivales pueden cumplir un 4♠ vulnerable (620). ¿Cuántas multas dobladas puedes permitirte?',
        options: ['Dos', 'Tres', 'Cuatro', 'Cinco'],
        answer: 1,
        explain: 'Tres multas dobladas sin ser vulnerable cuestan 500, menos que 620. Cuatro cuestan 800.',
      },
      {
        q: '¿Qué es un falso sacrificio?',
        options: ['Un sacrificio que cuesta exactamente lo que vale su manga', 'Un sacrificio contra un contrato que se habría multado', 'Un sacrificio a nivel de seis', 'Un sacrificio que los rivales no doblan'],
        answer: 1,
        explain: 'Si su contrato iba a fallar, tu sacrificio convierte un resultado positivo en uno negativo. Los valores defensivos son un motivo para no sacrificarse.',
      },
      {
        q: 'Los rivales declaran 1♥ – 3♥ – 4♥ sin interferencia. Tienes 12 PH pero solo corazones pequeños. ¿Debes doblar?',
        options: ['Sí: tienes una mano de apertura', 'No: las cartas altas fuera del triunfo rara vez justifican doblar una manga declarada libremente', 'Sí, para pedir una salida', 'Solo si eres vulnerable'],
        answer: 1,
        explain: 'Ya cuentan con que les faltan cartas altas. Tu doblo gana poco si se multan en una, cuesta mucho si cumplen y ayuda al declarante a situar los honores que faltan.',
      },
      {
        q: '¿Por qué puede salir caro doblar un parcial bajo?',
        options: ['Nunca sale caro', 'Porque, si se cumple, el valor de bazas doblado puede llegar a manga: 2♥ doblado vale 470 o 670', 'Porque los rivales reciben una prima por ser doblados', 'Porque tienes que salir de triunfo'],
        answer: 1,
        explain: 'Doblado, 2♥ tiene un valor de bazas de 120, que cuenta como manga. Espera multar un parcial antes de doblarlo.',
      },
    ],
  },

  {
    id: 'slam-controls-and-cue-bids',
    title: 'Controles y cue-bids: cuándo no usar el Blackwood',
    topic: 'Slam bidding',
    level: 'Advanced',
    summary: 'Por qué contar Ases no basta para el slam y cómo los cue-bids de control averiguan si todos los palos están cubiertos.',
    body: `
<h3>Los controles</h3>
<p>Para cumplir un slam necesitas bazas suficientes y, además, impedir que los rivales hagan dos bazas antes de que te pongas en marcha. Un palo está <strong>controlado</strong> si los rivales no pueden cobrar en él dos bazas rápidas:</p>
<ul>
<li><strong>Control de primera vuelta:</strong> el As o un fallo (en un contrato a palo).</li>
<li><strong>Control de segunda vuelta:</strong> el Rey o un semifallo.</li>
</ul>
<p>Para un pequeño slam necesitas al menos control de segunda vuelta en todos los palos laterales y no más de una perdedora de primera vuelta en total. Para un gran slam necesitas control de primera vuelta en todos los palos y ninguna perdedora.</p>
<p>Algunos jugadores cuentan los controles con A = 2 y K = 1 (12 en la baraja). Las manos ricas en Ases y Reyes cumplen slams que no cumplen 33 puntos hechos de Damas y Valets.</p>

<h3>Dónde falla el Blackwood</h3>
<div class="deal" data-n="S:K5 H:AKJ84 D:83 C:AJ104" data-s="S:AQ63 H:Q1052 D:72 C:KQ5" data-caption="Norte abre de 1♥ y Sur apoya con el 2SA Jacoby."></div>
<p>Norte tiene 16 PH y Sur 13, con un fit de nueve cartas en corazones: una tentativa de slam es razonable. Si Sur usa el Blackwood, Norte muestra dos Ases, Sur tiene el tercero y declara 6♥. La defensa cobra el ♦A y el ♦K. El Blackwood dijo que había tres Ases, pero no podía decirle a Sur que ninguna de las dos manos controla los diamantes.</p>
<p>No uses el Blackwood cuando:</p>
<ul>
<li>tienes dos cartas pequeñas (o más) en un palo que nadie ha declarado y no sabes si tu compañero lo controla;</li>
<li>tienes un fallo: el As de tu compañero en el palo de tu fallo se desperdicia, pero el Blackwood lo cuenta;</li>
<li>la respuesta podría llevarte demasiado alto, por ejemplo con tréboles como triunfo, donde una respuesta de 5♥ no te deja forma de pararte en 5♣.</li>
</ul>

<h3>Los cue-bids (cue-bids de control)</h3>
<p>Una vez acordado el palo de triunfo en una subasta forcing, la voz de un palo nuevo a nivel de cuatro no muestra un palo propio: muestra un <strong>control</strong> en ese palo e interés de slam. El compañero responde mostrando a su vez su control más barato, o cierra en el palo de triunfo. En el estilo moderno más habitual, un cue-bid muestra control de primera o de segunda vuelta (As, Rey, fallo o semifallo), y se declara primero el más barato, así que <strong>saltarse un palo niega control en él</strong>.</p>
<div class="auction" data-calls="1H P 2NT P 3NT P 4C P 4H P P P" data-dealer="N"></div>
<p>Tras el 2SA Jacoby, el 3SA de Norte muestra una mano intermedia (15-17) sin cortos, la redeclaración estándar del Jacoby. Sur declara 4♣: control en tréboles e interés de slam. Norte no tiene control en diamantes, así que, en lugar de mostrar el control de picas, cierra en 4♥, saltándose 4♦: eso niega control en diamantes. Sur tampoco tiene control en diamantes, así que pasa. Las dos manos han hecho su trabajo y la pareja se para con seguridad en la manga.</p>
<p>Si Norte hubiera tenido el ♦K en lugar del ♠K, habría hecho un cue-bid de 4♦ sobre 4♣. Entonces todos los palos estarían controlados, Sur podría seguir hacia el slam y el Blackwood serviría al final para comprobar los Ases con seguridad.</p>
<p>Los bots declaran así una vez acordado un mayor en una subasta forcing a manga, tras un apoyo 2SA Jacoby o un splinter. También usan un cue-bid de control como tentativa de slam en una subasta natural: cuando el compañero acaba de declarar un mayor que podrían apoyar a manga, y el slam es probable si el compañero tiene algo más de lo mostrado, un palo nuevo a nivel de cuatro (que su bando no ha declarado) acepta el mayor del compañero y muestra un control. Sus cue-bids muestran controles de primera o de segunda vuelta, primero el más barato, por debajo de la manga en el mayor acordado.</p>

<h3>Combinar las herramientas</h3>
<ol>
<li>Acordad el triunfo en una subasta forcing.</li>
<li>Haced cue-bids para aseguraros de que todos los palos laterales están controlados.</li>
<li>Cuando todos los palos estén cubiertos, usad el Blackwood (los bots juegan Roman Key Card Blackwood) para aseguraros de que no faltan dos Ases, o un As y el Rey de triunfo.</li>
<li>Declarad el slam, o cerrad.</li>
</ol>
<div class="tip">Antes de declarar 4SA, pregúntate: «Si mi compañero muestra el número adecuado de Ases, ¿sabré qué declarar?». Si la respuesta es no, haz un cue-bid.</div>
<div class="warn">Asegúrate de que tu pareja tiene acordados los cue-bids antes de usarlos. Un cue-bid que tu compañero entiende como un palo natural puede acabar en un contrato muy extraño.</div>
`,
    keyPoints: [
      'Un slam necesita todos los palos laterales controlados: un As o un fallo (primera vuelta), o un Rey o un semifallo (segunda vuelta).',
      'El Blackwood cuenta Ases, pero no puede decirte cuáles, ni si un palo lateral tiene dos perdedoras rápidas.',
      'No uses el Blackwood con un fallo, con dos cartas pequeñas en un palo no declarado ni cuando la respuesta pueda llevarte demasiado alto.',
      'Los cue-bids muestran controles, primero el más barato; saltarse un palo niega control en él.',
      'Haz primero cue-bids para comprobar todos los palos y usa después el Blackwood para comprobar los Ases.',
    ],
    quiz: [
      {
        q: '¿Qué tenencias dan control de segunda vuelta en un palo en un contrato con triunfo?',
        options: ['As o fallo', 'Rey o semifallo', 'Dama o doubleton', 'Dos honores cualesquiera'],
        answer: 1,
        explain: 'Con el Rey o un semifallo, los rivales pueden hacer como mucho una baza rápida en el palo. El As o un fallo son control de primera vuelta.',
      },
      {
        q: 'En la mano de arriba, ¿por qué el Blackwood lleva a un mal slam?',
        options: ['Porque faltan dos Ases', 'Porque ninguna de las dos manos controla los diamantes, algo que el Blackwood no puede revelar', 'Porque los corazones están mal repartidos', 'Porque Norte tiene muy pocos puntos'],
        answer: 1,
        explain: 'Solo falta un As, pero es el ♦A, y también falta el ♦K. Los rivales cobran dos bazas de diamante de golpe.',
      },
      {
        q: 'Los corazones están acordados en una subasta forcing. Tu compañero hace un cue-bid de 4♣ y tú declaras 4♥, saltándote 4♦. ¿Qué le has dicho?',
        options: ['Tengo control en diamantes', 'No tengo control en diamantes', 'Tengo el ♠A', 'Quiero jugar en diamantes'],
        answer: 1,
        explain: 'Los cue-bids se hacen primero el más barato. Al saltarte 4♦ niegas control en diamantes, así que tu compañero sabe que debe pararse salvo que él mismo controle los diamantes.',
      },
      {
        q: 'Tienes fallo a trébol y quieres explorar un slam en picas. ¿Por qué el Blackwood es una mala elección?',
        options: ['Porque los fallos cuentan como Ases', 'Porque el ♣A de tu compañero se desperdiciaría, y aun así el Blackwood lo contaría', 'Porque 4SA sería cuantitativo', 'Porque necesitas 37 puntos'],
        answer: 1,
        explain: 'El Blackwood te dice cuántos Ases tiene tu compañero, no cuáles. El As frente a tu fallo no aporta nada.',
      },
      {
        q: '¿Cuál es un orden sensato de herramientas para un slam a palo?',
        options: ['Primero el Blackwood y luego los cue-bids', 'Acordar el triunfo, hacer cue-bids de control y después el Blackwood', 'Declarar el slam directamente con 33 puntos', 'Gerber y luego Blackwood'],
        answer: 1,
        explain: 'Los cue-bids revelan si todos los palos están cubiertos; después el Blackwood asegura que a la pareja no le faltan dos Ases.',
      },
    ],
  },

  {
    id: 'squeezes-and-endplays',
    title: 'Introducción a los squeezes y las puestas en mano',
    topic: 'Declarer play',
    level: 'Advanced',
    summary: 'Dos técnicas avanzadas que crean una baza de la nada obligando a un defensor a descartar una guarda o a jugar hacia tu fuerza.',
    body: `
<h3>Cuando los impasses y los repartos no bastan</h3>
<p>Algunas bazas no se pueden ganar por la fuerza ni con un impasse. Se ganan porque un defensor se ve <em>obligado</em> a cederlas, ya sea porque tiene que descartar una carta que necesita (un <strong>squeeze</strong>) o porque tiene que jugar cuando cualquier salida le cuesta una baza (una <strong>puesta en mano</strong>). Las dos suelen darse al final de la mano, y las dos exigen contar con cuidado.</p>

<h3>El squeeze simple</h3>
<p>Un squeeze funciona cuando un defensor es el único que guarda dos palos. Cuando juegas tu última ganadora de un tercer palo, ese defensor tiene que soltar una de las guardas, y el palo abandonado te da una baza extra.</p>
<div class="deal" data-n="S:- H:AJ D:- C:3" data-w="S:- H:KQ D:Q C:-" data-e="S:- H:- D:98 C:7" data-s="S:A H:2 D:J C:-" data-caption="Sin triunfo. Sale Sur, que necesita las tres bazas."></div>
<p>Oeste guarda los corazones (el K Q frente al A J del muerto) y los diamantes (la Q frente a tu J). Sur juega el ♠A, la <strong>carta de squeeze</strong>, y Oeste tiene que descartarse antes que el muerto:</p>
<ul>
<li>Si Oeste tira la ♦Q, tu ♦J es ganador.</li>
<li>Si Oeste tira un corazón, el muerto se descarta del ♣3; juegas el ♥2 al As, que hace caer el honor que le queda a Oeste, y el ♥J del muerto gana la última baza.</li>
</ul>
<p>Sin el squeeze, solo habrías hecho dos bazas.</p>
<h4>Qué necesita un squeeze</h4>
<ul>
<li><strong>Amenazas:</strong> cartas que se convertirán en ganadoras si el defensor suelta la guarda (aquí el ♥J del muerto y tu ♦J).</li>
<li><strong>Un defensor ocupado en los dos palos.</strong> Si su compañero pudiera guardar uno de los palos, no hay squeeze.</li>
<li><strong>Entradas</strong> para llegar a las amenazas después del descarte (aquí el ♥A, con un corazón en tu mano para llegar a él).</li>
<li><strong>La cuenta correcta:</strong> cuando se juega la carta de squeeze, tienes que poder ganar todas las bazas restantes menos una. Perder <em>pronto</em> las bazas que tienes que perder, para que eso se cumpla, se llama <strong>rectificar la cuenta</strong>. Una señal típica: ves que es posible un squeeze pero tienes dos perdedoras; cede una baza pronto para que solo quede una.</li>
</ul>
<div class="tip">No siempre tienes que ver el squeeze de antemano. Correr un palo largo hasta el final, conservando tus cartas de amenaza, da a los defensores muchas ocasiones de descartarse mal, y a veces simplemente no pueden evitarlo.</div>

<h3>La puesta en mano</h3>
<p>Una puesta en mano da la mano a un defensor en un momento en que cualquier carta que juegue te da una baza: tiene que jugar hacia tu horquilla o darte fallo y descarte.</p>
<div class="deal" data-n="S:- H:3 D:- C:AQ" data-w="S:- H:- D:J109 C:-" data-e="S:- H:A D:- C:K8" data-s="S:- H:6 D:- C:42" data-caption="Sin triunfo. Sale Sur; Este tiene el ♣K."></div>
<p>Si juegas un trébol y haces el impasse a la Dama, Este gana con el Rey y cobra el ♥A: haces una baza. En lugar de eso, juega el ♥6. Este gana con el As y ahora solo le quedan tréboles, así que tiene que jugar por debajo del Rey hacia el A Q del muerto, y haces dos bazas.</p>
<h4>Eliminación y puesta en mano en un contrato a palo</h4>
<p>En un contrato con triunfo, la misma idea se llama eliminación. Saca los triunfos, pero conserva al menos uno en cada mano. <strong>Elimina</strong> los palos laterales por los que el defensor podría salir sin riesgo, cobrándolos o fallándolos. Después pon en mano al defensor con el palo que te queda. El defensor tendrá que jugar hacia tu horquilla o jugar un palo en el que tienes fallo en las dos manos, lo que te permite fallar en una mano y descartar una perdedora de la otra.</p>
<p>Las jugadas de eliminación a menudo convierten un impasse del 50% en una certeza: con A J x frente a K 10 x y sin la Dama, nunca tienes que adivinar si un defensor tiene que abrirte el palo.</p>
<div class="warn">Una puesta en mano falla si al defensor aún le queda una carta segura para salir. Antes de ponerle en mano, comprueba que todos los palos por los que podría salir se han eliminado de su mano o de las dos tuyas.</div>
`,
    keyPoints: [
      'Un squeeze obliga a un defensor que guarda dos palos a descartar una de las guardas.',
      'Un squeeze necesita amenazas, un defensor ocupado, entradas y la cuenta rectificada (todas las bazas restantes menos una).',
      'Una puesta en mano da la mano a un defensor cuando cualquier salida le cuesta una baza a su bando.',
      'Eliminación y puesta en mano: saca los triunfos (conservando alguno en las dos manos), elimina los palos laterales y después pon en mano al defensor.',
      'Correr un palo largo conservando tus amenazas da a los defensores ocasiones de equivocarse.',
    ],
    quiz: [
      {
        q: '¿Cuál es la condición esencial para un squeeze simple?',
        options: ['Los dos defensores tienen fallo en un palo', 'Un solo defensor guarda dos palos', 'Tienes todos los Ases', 'Los triunfos están 3-2'],
        answer: 1,
        explain: 'Si un defensor tiene que conservar guardas en dos palos, no puede conservar las dos cuando se ve obligado a descartarse. Si su compañero puede guardar uno de ellos, no hay squeeze.',
      },
      {
        q: '¿Qué significa «rectificar la cuenta»?',
        options: ['Contar los puntos de los rivales', 'Perder pronto las bazas que tienes que perder, para que al jugar la carta de squeeze puedas ganar todas las bazas restantes menos una', 'Sacar el último triunfo', 'Contar dos veces tus propias ganadoras'],
        answer: 1,
        explain: 'Un squeeze necesita que el defensor se quede sin cartas de sobra. Si aún tienes dos perdedoras, el defensor tiene una carta sobrante que tirar; ceder pronto una baza se la quita.',
      },
      {
        q: 'En el final de squeeze de arriba, ¿qué ocurre si Oeste se descarta de la ♦Q?',
        options: ['El ♦J de Sur se convierte en ganador', 'El ♥J del muerto se convierte en ganador', 'Este gana un diamante', 'No cambia nada'],
        answer: 0,
        explain: 'Oeste era la única guarda contra el ♦J. Una vez que se va la Dama, tu Valet es el diamante más alto que queda.',
      },
      {
        q: 'En el final de puesta en mano de arriba, ¿por qué tiene que darte Este una baza?',
        options: ['Este tiene que servir a corazón', 'Tras ganar con el ♥A, a Este solo le quedan tréboles y tiene que jugar desde el K hacia el A Q', 'Este está en squeeze', 'Este tiene que fallar'],
        answer: 1,
        explain: 'Puesto en mano con el ♥A, Este no tiene salida segura. Cualquier trébol que juegue permite ganar a la Dama del muerto, y después el As hace caer el Rey.',
      },
      {
        q: 'En una eliminación y puesta en mano en un contrato a palo, ¿qué debes conservar antes de poner en mano a un defensor?',
        options: ['Un triunfo en cada una de tus manos', 'Todos tus Ases', 'Una entrada a la mano del compañero del defensor', 'Un triunfo perdedor'],
        answer: 0,
        explain: 'Con triunfos en las dos manos, un defensor que juega un palo en el que tienes fallo te da fallo y descarte. Eso le deja como única salida jugar hacia tu horquilla.',
      },
    ],
  },
];
