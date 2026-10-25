// Lecciones sobre la competición contra el 1SA y los barrages de los rivales,
// y sobre qué hacer cuando doblan nuestra apertura.
// Reglas de marcado: ver src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_COMPETITION: Lesson[] = [
  {
    id: 'competing-over-1nt',
    title: 'Competir sobre su 1SA',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Cuándo doblar o intervenir sobre el 1SA fuerte de los rivales, cuándo quedarse fuera y cómo responde el compañero.',
    body: `
<h3>Una apertura fuerte y precisa</h3>
<p>Cuando un rival abre de 1SA muestra 15-17 PH y una mano equilibrada. Eso deja como mucho 25 PH para los otros tres jugadores, y el compañero del abridor sabe casi exactamente lo que tiene su bando. Tu bando rara vez tiene manga, así que declaras por uno de dos motivos: con una mano fuerte, para doblarlos de castigo; con un palo largo, para disputar el parcial. Una voz a nivel de dos, además, les quita el Stayman y las transferencias.</p>

<h3>Qué juegan los bots</h3>
<table>
<thead><tr><th>Voz sobre 1SA</th><th>Muestra</th></tr></thead>
<tbody>
<tr><td>Doblo</td><td>15+ PH, cualquier distribución: de castigo. El compañero pasa</td></tr>
<tr><td>2♣ / 2♦</td><td>Natural: 8-15 PH y un palo de seis o más cartas</td></tr>
<tr><td>2♥ / 2♠</td><td>Natural: 8-15 PH y un palo de seis cartas, o un buen palo de cinco (dos de los tres honores mayores o tres de los cinco mayores)</td></tr>
<tr><td>Paso</td><td>Todo lo demás</td></tr>
</tbody>
</table>
<p>El palo que declaras debe ser el más largo. Los saltos y el 2SA no se usan.</p>
<p>Los jugadores de torneo suelen usar aquí una convención que les permite mostrar también manos bicolores: Landy y Cappelletti usan 2♣ o 2♦ para mostrar los dos mayores, y DONT usa el doblo para cualquier mano unicolor. Vale la pena aprenderlas cuando tengas un compañero fijo. Los bots usan el método natural de arriba, y el tutor juzga tus voces con él.</p>

<h3>Ejemplos</h3>
<p>Oeste ha abierto de 1SA y tú eres Norte, en posición directa.</p>
<div class="hand" data-cards="S:KQJ974 H:83 D:A52 C:84" data-label="1SA – ?: declara 2♠"></div>
<p>10 PH y seis picas fuertes: compite. Tu compañero sabe lo que tienes y puede apoyar con apoyo.</p>
<div class="hand" data-cards="S:KQ1095 H:A83 D:J52 C:84" data-label="1SA – ?: declara 2♠"></div>
<p>Solo cinco picas, pero K-Q-10-9 es un buen palo, y además mayor: vale una voz a nivel de dos.</p>
<div class="hand" data-cards="S:A83 H:K4 D:KQJ852 C:84" data-label="1SA – ?: declara 2♦"></div>
<p>13 PH y seis diamantes. Un menor necesita seis cartas.</p>

<h3>El doblo de castigo</h3>
<p>El doblo de 1SA muestra 15+ PH, tanto como el abridor. Tu bando tiene al menos la mitad de la baraja, el abridor tendrá que jugar a menudo con un muerto débil, y en posición directa saldrás tú con tu buena mano. Tu compañero pasa, tenga lo que tenga: en este sistema el doblo es de castigo, y el compañero lo deja.</p>
<div class="hand" data-cards="S:AQ5 H:KJ4 D:KQ102 C:Q84" data-label="1SA – ?: doblo"></div>
<div class="hand" data-cards="S:AKJ1074 H:K3 D:A52 C:84" data-label="1SA – ?: doblo"></div>
<p>La primera mano es el doblo de castigo clásico: 17 PH y nada que declarar. La segunda también dobla: con 15+ PH los bots doblan con cualquier distribución, en vez de declarar 2♠. Las picas también harán bazas en defensa, ya que saldrás tú con ellas.</p>

<h3>Cuándo quedarse fuera</h3>
<ul>
<li><strong>Una mano equilibrada con menos de 15 PH.</strong> Ni siquiera 13 o 14 bastan para doblar, y no hay nada que declarar.</li>
<li><strong>Un menor de cinco cartas o un mayor de cinco pobre.</strong> A nivel de dos los rivales pueden doblarte, y un menor necesita seis cartas.</li>
<li><strong>Los dos mayores pero ningún palo largo.</strong> Para estas manos existen convenciones como Landy o Cappelletti; con métodos naturales, pasa.</li>
<li><strong>Menos de 8 PH</strong>, incluso con un palo largo.</li>
</ul>
<div class="hand" data-cards="S:A83 H:K4 D:KQ852 C:J84" data-label="1SA – ?: paso"></div>
<div class="hand" data-cards="S:Q8652 H:A83 D:K52 C:K4" data-label="1SA – ?: paso"></div>
<p>La primera mano tiene 13 PH pero solo un menor de cinco. La segunda tiene cinco picas, pero Q-8-6-5-2 no es un palo para declarar a nivel de dos frente a un compañero que puede no tener nada.</p>
<div class="tip">Pasar es a menudo la mejor voz. Un abridor de 1SA con un muerto débil se multa más a menudo de lo que crees, y mientras pasas nadie puede doblarte.</div>

<h3>En posición de reapertura</h3>
<div class="auction" data-calls="1NT P P" data-dealer="W"></div>
<p>Cuando 1SA va seguido de dos pasos, el compañero del abridor es débil, así que tu compañero tiene algunos valores. Pide prestado un Rey: los bots doblan con <strong>12+ PH</strong> (sigue siendo de castigo) y declaran un palo con <strong>5-12 PH</strong>, con los mismos requisitos de palo que en posición directa.</p>
<div class="hand" data-cards="S:KQ1095 H:83 D:952 C:J84" data-label="1SA – paso – paso – ?: declara 2♠"></div>
<div class="hand" data-cards="S:KQ105 H:A94 D:K52 C:Q84" data-label="1SA – paso – paso – ?: doblo"></div>
<p>Con solo 6 PH la primera mano pasaría en posición directa, pero en reapertura basta un buen mayor de cinco. La segunda, 14 PH y equilibrada, dobla: tu compañero pasa y defendéis 1SA doblado.</p>

<h3>La respuesta del compañero</h3>
<p>Tras el doblo del compañero, pasa: es de castigo. Tras una intervención a nivel de dos en un mayor, los bots responden así:</p>
<div class="auction" data-calls="1NT 2H P" data-dealer="W"></div>
<table>
<thead><tr><th>Voz del compañero del interventor</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>3♥ (apoyo)</td><td>Apoyo de tres cartas y 6-12 puntos (cuentan los puntos de apoyo). El interventor declara la manga solo con un máximo, unos 15 PH</td></tr>
<tr><td>4♥</td><td>Apoyo y 13+ puntos, o cinco triunfos y un semifallo</td></tr>
<tr><td>2♠ (palo nuevo)</td><td>Un buen palo de cinco o más cartas y 8+ PH; no forcing</td></tr>
<tr><td>2SA / 3SA</td><td>Sin fit: 12-14 PH, invitativo / 15+ PH</td></tr>
<tr><td>Paso</td><td>Todo lo demás, incluido un misfit con un menor largo</td></tr>
</tbody>
</table>
<p>Los rivales no tienen palo propio para hacer un cue-bid, así que no hay apoyo con cue-bid: el apoyo a 3♥ recoge tanto las manos competitivas como las invitativas. Tras una intervención a nivel de dos en un menor, el apoyo necesita cuatro cartas.</p>
<div class="deal" data-n="S:4 H:AKJ1052 D:Q93 C:J84" data-s="S:Q852 H:Q73 D:K84 C:962" data-caption="Oeste abre de 1SA; Norte interviene con 2♥."></div>
<div class="auction" data-calls="1NT 2H P 3H P P P" data-dealer="W"></div>
<p>Norte tiene 11 PH y seis buenos corazones: un 2♥ natural. Sur, con tres triunfos y 7 puntos, apoya a 3♥. Con nueve triunfos entre los dos el nivel de tres es bastante seguro (la Ley de las bazas totales), y el apoyo le pone más difícil a Este-Oeste, que tienen más de la mitad de los puntos, encontrar su propio parcial. Norte no tiene nada extra y pasa.</p>
<div class="warn">No intervengas sobre 1SA con un palo pobre solo porque tienes 12 o 13 puntos: sin un buen palo, esos puntos valen más en defensa.</div>
`,
    keyPoints: [
      'Sobre su 1SA, el doblo muestra 15+ PH con cualquier distribución y es de castigo: el compañero pasa.',
      'Las voces a palo a nivel de dos son naturales: 8-15 PH y un palo de seis, o un buen mayor de cinco.',
      'Quédate fuera con manos equilibradas de menos de 15 PH, menores de cinco y mayores de cinco pobres.',
      'En posición de reapertura, pide prestado un Rey: doblo con 12+, un palo con 5-12.',
      'Respuesta a un mayor: apoyo a tres con 6-12 y apoyo, manga con 13+.',
    ],
    quiz: [
      {
        q: 'El rival de la derecha abre de 1SA (15-17). Tienes ♠AQ5 ♥KJ4 ♦KQ102 ♣Q84 (17 PH). ¿Qué declaras?',
        options: ['Paso', 'Doblo', '2♦', '2SA'],
        answer: 1,
        explain: 'Con 15+ PH tienes tanto como el abridor: dobla de castigo. Tu compañero pasará, y 1SA doblado debería multarse.',
      },
      {
        q: 'El rival de la derecha abre de 1SA. Tienes ♠A83 ♥K4 ♦KQ852 ♣J84 (13 PH). ¿Qué declaras?',
        options: ['2♦', 'Doblo', 'Paso', '2SA'],
        answer: 2,
        explain: 'Una voz a nivel de dos en un menor necesita seis cartas, y un doblo necesita 15+ PH. Pasa y defiende.',
      },
      {
        q: 'El rival de la derecha abre de 1SA. Tienes ♠KQJ974 ♥83 ♦A52 ♣84 (10 PH). ¿Qué declaras?',
        options: ['Paso', 'Doblo', '2♠', '3♠'],
        answer: 2,
        explain: 'Seis picas fuertes y 8-15 PH: un 2♠ natural. Un doblo mostraría 15+ PH, y los saltos no se usan sobre 1SA.',
      },
      {
        q: 'El rival de la izquierda abre de 1SA, tu compañero interviene con 2♥ y el rival de la derecha pasa. Tienes ♠Q852 ♥Q73 ♦K84 ♣962 (7 PH). ¿Qué declaras?',
        options: ['Paso', '3♥', '3♣', '4♥'],
        answer: 1,
        explain: 'Apoyo de tres cartas y 6-9 puntos: apoya a 3♥. Con nueve triunfos el nivel de tres es bastante seguro. 3♣ mostraría un palo de tréboles, y 4♥ necesita 13+.',
      },
      {
        q: '1SA a tu izquierda, paso, paso. Tienes ♠KQ1095 ♥83 ♦952 ♣J84 (6 PH). ¿Qué declaras?',
        options: ['Paso', 'Doblo', '2♠', '3♠'],
        answer: 2,
        explain: 'En posición de reapertura los bots declaran un buen mayor de cinco con 5-12 PH: tu compañero tiene que tener algunos valores. Un doblo mostraría 12+ PH y es de castigo.',
      },
    ],
  },

  {
    id: 'competing-over-preempts',
    title: 'Competir sobre barrages',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Cómo doblar, intervenir o declarar sin triunfo cuando los rivales abren de dos débil o con un barrage a nivel de tres, y cómo responde el compañero.',
    body: `
<h3>El plan del barragista</h3>
<p>Un dos débil o un barrage a nivel de tres te quita el espacio que necesitas para encontrar tu mejor contrato. El barragista eligió el nivel con la regla del 2-3-4: está dispuesto a multarse dos bazas doblado cuando es vulnerable contra no vulnerables, tres con vulnerabilidad igual y cuatro cuando no es vulnerable contra vulnerables, porque eso cuesta más o menos lo que la manga que cumplirías. Vista desde tu lado de la mesa, la regla te dice dos cosas:</p>
<ul>
<li><strong>No cuentes con una gran multa.</strong> Incluso doblados, pierden más o menos lo que vale tu manga. Si tienes manga, declárala.</li>
<li><strong>Su vulnerabilidad te dice lo débiles que pueden ser.</strong> No vulnerables contra vulnerables, un barrage puede ser muy débil, así que es más probable que tu compañero tenga valores; vulnerables contra no vulnerables, promete más.</li>
</ul>
<p>En cualquier caso tienes que actuar enseguida y a nivel alto, a menudo obligando a tu compañero a responder a nivel de tres. Así que necesitas valores de verdad. Los requisitos de los bots que siguen son los mismos con cualquier vulnerabilidad.</p>

<h3>Sobre un dos débil</h3>
<p>El rival de la derecha ha abierto de 2♦, 2♥ o 2♠:</p>
<table>
<thead><tr><th>Voz</th><th>Muestra</th></tr></thead>
<tbody>
<tr><td>Doblo</td><td>Informativo: 13+ PH, como mucho dos cartas en su palo y tres o más en cada uno de los demás (se permite un doubleton en un menor no declarado con cuatro cartas en cada mayor no declarado); o cualquier mano con 17+ PH</td></tr>
<tr><td>2SA</td><td>15-18 PH, equilibrada, con parada en su palo</td></tr>
<tr><td>Un palo</td><td>13-17 PH y un buen palo de cinco o más cartas (dos de los tres honores mayores o tres de los cinco mayores), tu palo no declarado más largo</td></tr>
<tr><td>Paso</td><td>Todo lo demás</td></tr>
</tbody>
</table>
<p>Con un buen palo de seis, interviene en vez de doblar. Compara los 13 PH con los 8 que bastan para intervenir a nivel de uno: tu compañero puede tener que responder a tu doblo a nivel de tres sin nada, y tu intervención ya está a nivel de dos o de tres. Las intervenciones débiles a salto y el cue-bid Michaels no se usan sobre un barrage.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:KQ83 C:K1062" data-label="2♥ – ?: doblo"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="2♥ – ?: declara 2♠"></div>
<div class="hand" data-cards="S:AQ4 H:KJ5 D:KQ83 C:J106" data-label="2♥ – ?: declara 2SA"></div>
<div class="hand" data-cards="S:KJ74 H:5 D:KJ83 C:Q1062" data-label="2♥ – ?: paso"></div>
<p>La primera mano es el doblo ideal: 13 PH, semifallo de corazón y apoyo para todos los demás palos. La segunda tiene un buen palo de seis: decláralo. La tercera es equilibrada, con 16 PH y los corazones parados. La cuarta tiene la distribución perfecta pero solo 10 PH: demasiado poco para empujar a tu compañero a nivel de tres. Con longitud en su palo, como ♠K4 ♥AQ1093 ♦K83 ♣J106, pasa también: un doblo pediría a tu compañero que declare, y el 2SA necesita 15 PH.</p>
<div class="tip">En posición de reapertura (2♥ – paso – paso – ?) una intervención solo necesita 10 PH, pero un doblo sigue necesitando 13.</div>

<h3>Sobre un barrage a nivel de tres</h3>
<table>
<thead><tr><th>Voz</th><th>Muestra</th></tr></thead>
<tbody>
<tr><td>Doblo</td><td>Informativo: 14+ PH y la misma distribución que sobre un dos débil, o cualquier mano con 17+ PH</td></tr>
<tr><td>3SA</td><td>16-21 PH con parada en su palo, para jugar. Puede ser un menor largo que corre en vez de una mano equilibrada</td></tr>
<tr><td>Un palo a nivel de tres</td><td>13-17 PH y un buen palo de cinco o más cartas</td></tr>
<tr><td>Paso</td><td>Todo lo demás</td></tr>
</tbody>
</table>
<p>Cada nivel más alto, el doblo necesita un poco más. Sobre un barrage a nivel de cuatro necesita 15+ PH, y el compañero normalmente lo deja, salvo que tenga un palo largo y distribución.</p>
<div class="hand" data-cards="S:AJ74 H:5 D:AQ83 C:K1062" data-label="3♥ – ?: doblo"></div>
<div class="hand" data-cards="S:AQ4 H:K5 D:AKQJ83 C:106" data-label="3♥ – ?: declara 3SA"></div>
<div class="hand" data-cards="S:AQJ1074 H:5 D:K83 C:K106" data-label="3♥ – ?: declara 3♠"></div>
<p>La primera mano tiene 14 PH y la distribución adecuada: doblo. Con el ♦K en lugar del ♦A (13 PH), los bots pasarían. La segunda declara 3SA: los diamantes correrán, y el ♥K debería parar los corazones, porque la salida viene de Este y Oeste, que tiene los corazones largos, juega antes que tú. La tercera declara su buen palo de seis.</p>

<h3>Responder al doblo del compañero</h3>
<div class="auction" data-calls="2H X P" data-dealer="W"></div>
<p>El doblo de tu compañero te pide que declares, y debes hacerlo, por débil que seas. Muestra tu fuerza por el nivel:</p>
<table>
<thead><tr><th>Tu mano</th><th>Voz</th></tr></thead>
<tbody>
<tr><td>0-8 PH</td><td>Tu mejor palo al nivel más barato, primero un mayor de cuatro</td></tr>
<tr><td>9-11 PH</td><td>Un salto en tu mejor palo si el salto sigue siendo a nivel de tres (aquí 3♠). Con cuatro cartas en un mayor no declarado que solo podrías declarar a nivel de tres, la manga en ese mayor (sobre 2♠, 4♥). Si no, 2SA con 11 PH y parada en su palo, o tu mejor palo al nivel más barato</td></tr>
<tr><td>10-11 PH y cinco o más picas</td><td>4♠</td></tr>
<tr><td>12+ PH</td><td>3♥, el cue-bid: forcing a manga. Con 13-16, una mano equilibrada o semiequilibrada y parada en corazones, 3SA en su lugar</td></tr>
<tr><td>Cinco corazones fuertes (tres honores) y 8+ PH</td><td>Paso: el doblo se convierte en doblo de castigo</td></tr>
</tbody>
</table>
<p>Sobre un barrage a nivel de tres no hay sitio para saltar: con 9-11 PH y cuatro o más cartas en un mayor no declarado, declara la manga en él; si no, tu mejor palo al nivel más barato, 3SA con 13-16, una mano equilibrada o semiequilibrada y parada, o el cue-bid con 12+. El doblador pasa una respuesta al nivel más barato con un mínimo, y solo la apoya con valores extra.</p>
<div class="deal" data-n="S:AJ74 H:5 D:KQ83 C:K1062" data-s="S:K963 H:874 D:A52 C:Q84" data-caption="Oeste abre de 2♥; Norte dobla."></div>
<div class="auction" data-calls="2H X P 3S P 4S P P P" data-dealer="W"></div>
<p>Sur tiene 9 PH y cuatro picas: vale un salto a 3♠, porque una respuesta de 2♠ podría hacerse sin nada. Norte, con 13 PH, cuatro triunfos y semifallo de corazón (16 puntos de apoyo para picas), acepta la invitación. Sobre una respuesta de 2♠, Norte solo habría invitado con 3♠.</p>

<h3>Responder a una intervención a sin triunfo</h3>
<p>Tras el 2SA de tu compañero sobre un dos débil (15-18): declara 3SA con 10+ PH; con un mayor de seis, la manga con 9+ PH o tres de ese palo con 6-8 para invitar; con una mano más débil y un palo de cinco, decláralo a nivel de tres para jugar; si no, pasa. El Stayman y las transferencias no se usan aquí. Tras el 3SA de tu compañero sobre un barrage a nivel de tres (16-21), los bots pasan con la mayoría de las manos: declaran cuatro de un mayor de seis con 9+ PH, y con 12+ PH buscan el slam. 4SA es una invitación cuantitativa con 12-14 PH, y 6SA se declara con 15+.</p>
<div class="warn">No dobles un barrage de castigo porque tienes unas cuantas cartas altas en su palo: el doblo de los bots es informativo. Con longitud en su palo, pasa y espera al doblo de tu compañero; con triunfos largos y fuertes podrás dejar entonces ese doblo de castigo.</div>
`,
    keyPoints: [
      'Sobre un dos débil, el doblo (13+, corto en su palo) y la intervención (13-17, buen palo) necesitan valores de verdad; 2SA muestra 15-18 equilibrada con parada.',
      'Sobre un barrage a nivel de tres el doblo necesita 14+; 3SA muestra 16-21 con parada, para jugar.',
      'Con un buen palo de seis, interviene; con 17+ PH de cualquier distribución, dobla primero.',
      'El compañero debe declarar: al nivel más barato con 0-8, un salto con 9-11 si sigue siendo a nivel de tres (manga en un mayor de cuatro que solo cabe a nivel de tres), el cue-bid con 12+; pasa solo con triunfos fuertes.',
      'El barragista cuenta con multarse de dos a cuatro bazas doblado: si tienes manga, declárala en vez de esperar una gran multa.',
    ],
    quiz: [
      {
        q: 'El rival de la derecha abre de 2♥. Tienes ♠AJ74 ♥5 ♦KQ83 ♣K1062 (13 PH). ¿Qué declaras?',
        options: ['Paso', 'Doblo', '2♠', '2SA'],
        answer: 1,
        explain: 'Corto en corazones, apoyo para todos los demás palos y 13 PH: un doblo informativo. 2♠ prometería un buen palo de cinco.',
      },
      {
        q: 'El rival de la derecha abre de 2♠. Tienes ♠KJ5 ♥AQ4 ♦KQ83 ♣J106 (16 PH). ¿Qué declaras?',
        options: ['Doblo', '2SA', '3SA', 'Paso'],
        answer: 1,
        explain: 'Equilibrada, 15-18, con parada en picas: 2SA. Un doblo pediría a tu compañero que declare un palo, y no eres corto en picas.',
      },
      {
        q: 'El rival de la derecha abre de 3♥. Tienes ♠AQ4 ♥K5 ♦AKQJ83 ♣106 (19 PH). ¿Qué declaras?',
        options: ['Doblo', '4♦', '3SA', 'Paso'],
        answer: 2,
        explain: '3SA sobre un barrage a nivel de tres muestra 16-21 con parada y es para jugar. Tus diamantes correrán, y el ♥K está bien situado detrás del barragista.',
      },
      {
        q: 'El rival de la izquierda abre de 2♥, tu compañero dobla y el rival de la derecha pasa. Tienes ♠K963 ♥874 ♦A52 ♣Q84 (9 PH). ¿Qué declaras?',
        options: ['2♠', '3♠', '4♠', '2SA'],
        answer: 1,
        explain: '9-11 PH con cuatro picas: salta a 3♠ para invitar a manga. 2♠ podría hacerse sin nada, y 2SA prometería parada en corazones.',
      },
      {
        q: 'El rival de la izquierda abre de 2♥, tu compañero dobla y el rival de la derecha pasa. Tienes ♠96 ♥KQJ104 ♦Q105 ♣J84 (9 PH). ¿Qué declaras?',
        options: ['2SA', '3♣', 'Paso', '3♦'],
        answer: 2,
        explain: 'Cinco corazones fuertes y 8+ PH: pasa, y el doblo informativo de tu compañero se convierte en un doblo de castigo. Tus corazones harán bazas, situados detrás del abridor.',
      },
    ],
  },

  {
    id: 'when-they-double-us',
    title: 'Cuando nos doblan',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Qué hace el respondedor tras un doblo informativo a la apertura de su compañero (redoblo, 2SA Jordan, apoyos, palos nuevos, 1SA) y cómo escapar cuando doblan el 1SA del compañero.',
    body: `
<h3>Doblan la apertura de tu compañero</h3>
<div class="auction" data-calls="1H X" data-dealer="N"></div>
<p>Tu compañero abre de 1♥ y el rival de la derecha hace un doblo informativo: valores de apertura, corto en corazones, apoyo para los demás palos. El doblo te da nuevas formas de describir tu mano, y las necesitas: el compañero del doblador va a declarar enseguida, quizá con un salto, y el abridor tiene que saber de inmediato si vuestro bando tiene fit y quién tiene la mayor parte de la fuerza.</p>

<h3>Qué juegan los bots</h3>
<p>Tras 1♥ o 1♠ – doblo, los bots eligen la primera de estas voces que encaje:</p>
<table>
<thead><tr><th>Voz</th><th>Muestra</th></tr></thead>
<tbody>
<tr><td>2SA (Jordan)</td><td>Artificial: cuatro o más triunfos y 10+ puntos de apoyo, un apoyo invitativo o más fuerte</td></tr>
<tr><td>Redoblo</td><td>10+ PH, normalmente sin fit (como mucho tres triunfos)</td></tr>
<tr><td>Apoyo a salto (1♥ – X – 3♥)</td><td>De barrage: cuatro o más triunfos y menos de 10 PH</td></tr>
<tr><td>Apoyo simple (1♥ – X – 2♥)</td><td>Tres triunfos y 6-10 puntos de apoyo (con cuatro, salta o declara 2SA)</td></tr>
<tr><td>1♠ sobre 1♥</td><td>Cuatro o más picas y 6+ PH; forcing</td></tr>
<tr><td>1SA</td><td>6-9 PH y ninguna de las voces anteriores</td></tr>
<tr><td>Paso</td><td>Una mano débil</td></tr>
</tbody>
</table>
<p>Fíjate en lo que falta: un palo nuevo a nivel de dos. Tras el doblo los bots nunca declaran uno. Con 10+ PH redoblan, y con menos declaran 1SA o pasan.</p>
<div class="hand" data-cards="S:K74 H:Q962 D:A1053 C:J4" data-label="1♥ – X – ?: 2SA"></div>
<div class="hand" data-cards="S:AQ74 H:62 D:KJ53 C:984" data-label="1♥ – X – ?: redoblo"></div>
<div class="hand" data-cards="S:K74 H:Q9862 D:5 C:J1043" data-label="1♥ – X – ?: 3♥"></div>
<div class="hand" data-cards="S:K74 H:Q96 D:J853 C:Q43" data-label="1♥ – X – ?: 2♥"></div>
<div class="hand" data-cards="S:KQ1074 H:62 D:J53 C:984" data-label="1♥ – X – ?: 1♠"></div>
<div class="hand" data-cards="S:Q4 H:62 D:KJ94 C:Q9843" data-label="1♥ – X – ?: 1SA"></div>
<p>La primera mano tiene cuatro triunfos y 11 puntos de apoyo: 2SA Jordan. La segunda tiene 10 PH y ningún fit: redoblo. La tercera, con cinco triunfos y 6 PH, salta a 3♥ para quitar espacio a los rivales; seguro que tienen un fit propio. La cuarta hace un apoyo simple con tres triunfos. La quinta muestra sus picas a nivel de uno. La sexta tiene 8 PH y nada más que decir: 1SA.</p>
<div class="tip">El apoyo a salto de barrage funciona mejor de inmediato, antes de que el compañero del doblador pueda declarar barato. Con cuatro triunfos y una mano débil, quítales el espacio.</div>

<h3>Tras una apertura en menor</h3>
<p>Tras 1♣ o 1♦ – doblo no hay 2SA Jordan: con 10+ PH, redobla. Una apertura de 1♣ o 1♦ puede ser de solo tres cartas, así que los apoyos necesitan más triunfos: cuatro para el apoyo simple, cinco para el apoyo a salto de barrage. Con un mayor de cuatro y 6+ PH, decláralo a nivel de uno, primero corazones si tienes los dos.</p>
<div class="hand" data-cards="S:KJ74 H:Q962 D:53 C:J43" data-label="1♦ – X – ?: 1♥"></div>
<div class="hand" data-cards="S:J74 H:62 D:KJ853 C:943" data-label="1♦ – X – ?: 3♦"></div>

<h3>Después del redoblo</h3>
<p>El redoblo dice que la mano es de tu bando. El abridor normalmente pasa y deja el problema a los rivales: tienen que encontrar dónde jugar, y el compañero del doblador, que puede no tener nada, solo declara con un palo de cinco. El abridor declara enseguida solo con un mínimo (13 PH o menos) y un palo de seis, que defiende mal. Cuando los rivales acaban en un palo, el redoblador declara la manga si tiene valores para ello, unos 12+ PH frente a la apertura. Con 10-11 PH y cuatro cartas en su palo encabezadas por dos de los tres honores mayores, el redoblador los dobla en su lugar: tras un redoblo, un doblo de tu bando es de castigo.</p>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-e="S:KQ6 H:5 D:AJ94 C:KJ1062" data-s="S:J1093 H:K6 D:Q53 C:AQ97" data-w="S:8742 H:109732 D:86 C:53" data-caption="Norte abre de 1♥ y Este dobla."></div>
<div class="auction" data-calls="1H X XX P P 2C 3NT P P P" data-dealer="N"></div>
<p>Sur tiene 12 PH y solo dos corazones: redoblo. Oeste no tiene nada ni un palo de cinco, así que pasa; Norte también pasa, y Este tiene que elegir un palo a nivel de dos. Sur, con 12 PH frente a una apertura y los tréboles parados dos veces, declara 3SA, que con el mejor juego cumple nueve bazas.</p>

<h3>El 2SA Jordan en acción</h3>
<div class="deal" data-n="S:A5 H:AQJ84 D:K1072 C:84" data-s="S:K74 H:K962 D:A953 C:J3" data-caption="Norte abre de 1♥ y Este dobla."></div>
<div class="auction" data-calls="1H X 2NT P 4H P P P" data-dealer="N"></div>
<p>Sur tiene cuatro triunfos y 12 puntos de apoyo: 2SA Jordan, un apoyo invitativo o más fuerte. Norte, con 14 PH y un palo de cinco, tiene más que un mínimo y declara la manga. Con un mínimo, Norte solo declararía 3♥.</p>

<h3>Cuando doblan nuestro 1SA</h3>
<div class="auction" data-calls="1NT X" data-dealer="N"></div>
<p>El doblo del 1SA de tu compañero es de castigo. Las opciones del respondedor:</p>
<table>
<thead><tr><th>Voz</th><th>Muestra</th></tr></thead>
<tbody>
<tr><td>Redoblo</td><td>8+ PH: con los 15-17 de tu compañero, vuestro bando tiene la mayor parte de la fuerza, y son los rivales quienes están en apuros</td></tr>
<tr><td>2♣ / 2♦ / 2♥ / 2♠</td><td>Para jugar: 0-7 PH y cinco o más cartas en el palo, el más largo</td></tr>
<tr><td>Paso</td><td>Cualquier otra mano</td></tr>
</tbody>
</table>
<p>Tras el doblo no hay Stayman ni transferencias: 2♣ muestra tréboles y 2♦ muestra diamantes. Con una mano débil, 1SA doblado puede costar mucho, mientras que dos de tu palo largo se juega mucho mejor.</p>
<div class="hand" data-cards="S:Q74 H:62 D:J9853 C:932" data-label="1SA – X – ?: 2♦"></div>
<div class="hand" data-cards="S:Q74 H:62 D:KJ85 C:Q932" data-label="1SA – X – ?: redoblo"></div>
<div class="hand" data-cards="S:Q74 H:J62 D:J85 C:9432" data-label="1SA – X – ?: paso"></div>
<p>La primera mano escapa a sus cinco diamantes. La segunda tiene 8 PH: redoblo. La tercera no tiene palo de cinco, así que pasa y deja que su compañero se las arregle. Tras el redoblo, el abridor pasa: los rivales tienen que encontrar dónde jugar.</p>
<div class="warn">Tras 1♥ – doblo, no declares un palo nuevo a nivel de dos con una mano débil: no forma parte del sistema. Con 10+ PH redobla primero; con menos, declara 1SA o pasa.</div>
`,
    keyPoints: [
      'Tras un doblo informativo de 1♥ o 1♠, 2SA (Jordan) muestra cuatro triunfos y 10+ puntos de apoyo; el redoblo muestra 10+ PH, normalmente sin fit.',
      'El apoyo a salto es de barrage (cuatro triunfos para un mayor, cinco para un menor, menos de 10 PH); el apoyo simple muestra 6-10 con apoyo.',
      'Un mayor a nivel de uno muestra cuatro o más cartas y 6+ PH y es forcing; 1SA muestra 6-9 sin otra voz que hacer.',
      'Tras el redoblo el abridor suele pasar y deja que los rivales busquen contrato; luego el redoblador declara la manga con valores de manga, o los dobla si tiene una tenencia fuerte en su palo.',
      'Cuando doblan el 1SA de tu compañero, redobla con 8+; con una mano débil y un palo de cinco, decláralo a nivel de dos (natural, sin Stayman ni transferencias).',
    ],
    quiz: [
      {
        q: 'Tu compañero abre de 1♥ y el rival de la derecha dobla. Tienes ♠K74 ♥Q962 ♦A1053 ♣J4 (10 PH). ¿Qué declaras?',
        options: ['Redoblo', '3♥', '2SA', '2♥'],
        answer: 2,
        explain: 'Cuatro triunfos y 11 puntos de apoyo: el 2SA Jordan muestra enseguida un apoyo invitativo o más fuerte. Un redoblo normalmente negaría cuatro triunfos, y 3♥ sería de barrage.',
      },
      {
        q: 'Tu compañero abre de 1♥ y el rival de la derecha dobla. Tienes ♠K74 ♥Q9862 ♦5 ♣J1043 (6 PH). ¿Qué declaras?',
        options: ['2♥', '3♥', '4♥', 'Paso'],
        answer: 1,
        explain: 'Cinco triunfos, un semifallo y menos de 10 PH: el apoyo a salto de barrage. Le quita al compañero del doblador el espacio que necesita.',
      },
      {
        q: 'Tu compañero abre de 1♥ y el rival de la derecha dobla. Tienes ♠AQ74 ♥62 ♦KJ53 ♣984 (10 PH). ¿Qué declaras?',
        options: ['1♠', 'Redoblo', '2♦', '1SA'],
        answer: 1,
        explain: '10+ PH sin fit: redoblo. Le dice a tu compañero que la mano es de vuestro bando; el abridor normalmente pasará y dejará que los rivales encuentren un contrato.',
      },
      {
        q: 'Tu compañero abre de 1♦ y el rival de la derecha dobla. Tienes ♠KJ74 ♥Q962 ♦53 ♣J43 (7 PH). ¿Qué declaras?',
        options: ['1♥', '1♠', '1SA', 'Paso'],
        answer: 0,
        explain: 'Con cuatro cartas en cada mayor y 6+ PH, declara primero corazones, a nivel de uno. 1♥ es forcing, así que podrás mostrar las picas más tarde si hace falta.',
      },
      {
        q: 'Tu compañero abre de 1SA y el rival de la derecha dobla. Tienes ♠Q74 ♥62 ♦J9853 ♣932 (3 PH). ¿Qué declaras?',
        options: ['Paso', '2♣', '2♦', 'Redoblo'],
        answer: 2,
        explain: 'Una mano débil con cinco diamantes: escapa a 2♦, que tras el doblo es natural, no una transferencia. 2♣ mostraría tréboles, y un redoblo 8+ PH.',
      },
    ],
  },
];
