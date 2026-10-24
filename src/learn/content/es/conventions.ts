// Lessons on the optional conventions (Spanish): Roman Key Card Blackwood,
// splinters and Drury, new minor forcing and fourth suit forcing, Texas transfers.
// Every example auction is the one the bots bid with these hands.

import type { Lesson } from '../../types';

export const LESSONS_4: Lesson[] = [
  {
    id: 'roman-key-card-blackwood',
    title: 'Roman Key Card Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'El 4SA moderno: preguntar por los cuatro Ases y el Rey de triunfo, y después por la Dama de triunfo y los Reyes laterales, para declarar los slams que se cumplen y pararse cuando faltan dos cartas clave.',
    body: `
<h3>Cinco cartas clave</h3>
<p>El Blackwood simple cuenta Ases, pero el Rey y la Dama de triunfo importan igual: un slam al que le faltan un As y el Rey de triunfo está tan condenado como uno al que le faltan dos Ases. El <strong>Roman Key Card Blackwood</strong> (RKCB) trata el Rey de triunfo como un quinto As. Una vez acordado un palo, 4SA pregunta por las <strong>cinco cartas clave</strong>: los cuatro Ases y el Rey de triunfo. Las respuestas también informan de la Dama de triunfo.</p>
<p>El palo de triunfo es el palo acordado; si no se ha acordado ninguno, es el último palo que tu bando ha declarado de forma natural. Los bots de esta aplicación juegan RKCB por defecto (puedes volver al Blackwood simple en los ajustes del sistema).</p>

<h3>Las respuestas (1430)</h3>
<table>
<thead><tr><th>Respuesta</th><th>Cartas clave</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 o 4</td></tr>
<tr><td>5♦</td><td>0 o 3</td></tr>
<tr><td>5♥</td><td>2, sin la Dama de triunfo</td></tr>
<tr><td>5♠</td><td>2, con la Dama de triunfo</td></tr>
</tbody>
</table>
<p>El nombre «1430» viene de las dos primeras respuestas: 5♣ muestra una o cuatro, y 5♦, cero o tres. El que pregunta casi siempre puede saber cuál es. Cuenta tus propias cartas clave y recuerda lo que ha mostrado tu compañero: un compañero que ha abierto y ha hecho un apoyo fuerte no puede tener cero cartas clave, porque fuera de tu mano no hay suficientes cartas altas para completar sus puntos.</p>
<div class="hand" data-cards="S:KJ853 H:A7 D:K94 C:Q62" data-label="Picas acordadas; tu compañero declara 4SA: responde 5♥"></div>
<p>Dos cartas clave, el ♥A y el ♠K, pero no la ♠Q: 5♥.</p>

<h3>Después de la respuesta</h3>
<ul>
<li><strong>Faltan dos cartas clave</strong>, o una y la Dama de triunfo: cierra en cinco del palo de triunfo. Tu compañero debe pasar.</li>
<li><strong>Falta una</strong> y la Dama es tuya: declara el pequeño slam.</li>
<li><strong>No falta ninguna</strong>: declara el pequeño slam, o busca el grande.</li>
</ul>
<p>El que pregunta es el capitán. Una vez que su compañero ha respondido, decide él, y el compañero pasa la voz de cierre o el slam.</p>

<h3>La pregunta por la Dama</h3>
<p>Tras 5♣ o 5♦, la Dama de triunfo sigue sin conocerse. Si importa, el que pregunta declara el <strong>siguiente escalón</strong>, saltándose el palo de triunfo: 5♦ sobre 5♣, 5♥ sobre 5♦. El compañero responde:</p>
<ul>
<li>sin la Dama: vuelve al palo de triunfo al nivel más barato;</li>
<li>con la Dama: declara seis del palo de triunfo (o 5SA, cuando seis de triunfo sería la respuesta «sin Dama»).</li>
</ul>
<div class="deal" data-n="S:A74 H:AK D:AK94 C:AJ102" data-s="S:KJ1053 H:Q43 D:J3 C:Q83" data-caption="Norte abre de 2♣ y Sur muestra un buen palo de picas de cinco cartas."></div>
<div class="auction" data-calls="2C P 2S P 4NT P 5C P 5D P 5S P 6S P P P" data-dealer="N"></div>
<p>Norte tiene los cuatro Ases, así que el 5♣ de Sur muestra una carta clave: el ♠K. Están todas las cartas clave, pero la ♠Q no, hasta donde sabe Norte, así que Norte pregunta con 5♦. El 5♠ de Sur niega la Dama, y Norte se conforma con 6♠: un gran slam sin la Dama de triunfo necesitaría un reparto afortunado.</p>

<h3>Preguntar por Reyes</h3>
<p>Cuando se tienen las cinco cartas clave y la Dama de triunfo y es posible el gran slam, el que pregunta declara <strong>5SA</strong> para preguntar por los Reyes laterales (el Rey de triunfo ya se ha contado): 6♣ = ninguno, 6♦ = uno, 6♥ = dos, 6♠ = tres. 5SA promete que no falta nada, así que el compañero puede declarar el gran slam si tiene bazas extra.</p>

<h3>Un ejemplo completo</h3>
<div class="deal" data-n="S:A54 H:AKQ3 D:A4 C:Q976" data-s="S:K9 H:J1095 D:KQJ106 C:AK"></div>
<div class="auction" data-calls="1C P 1H P 4H P 4NT P 5C P 5D P 6H P P P" data-dealer="N"></div>
<p>Norte salta a 4♥ con apoyo de cuatro cartas y 19+ puntos. Sur tiene 17 PH y una fuente de bazas en diamantes, así que el slam es probable. 5♣ muestra una o cuatro cartas clave. Sur solo tiene el ♣A, y el apoyo fuerte de Norte no se puede completar sin Ases, así que son cuatro. Queda una pregunta, la ♥Q, y 5♦ la hace. Norte la tiene y declara 6♥, y Sur pasa: no falta nada, pero no hay una decimotercera baza con la que contar.</p>
<div class="tip">Antes de declarar 4SA, asegúrate de que la respuesta no puede llevarte por encima del contrato que quieres. Con tréboles o diamantes como triunfo, una respuesta de 5♥ o 5♠ no deja forma de pararse a nivel de cinco, así que necesitas saber que no pueden faltar dos cartas clave.</div>
<div class="warn">El RKCB necesita un palo de triunfo acordado. Tras un sin triunfo natural de tu compañero, 4SA es cuantitativo. Con un fallo, el RKCB no puede decirte si las cartas clave de tu compañero son útiles: haz cue-bids en su lugar.</div>
`,
    keyPoints: [
      'El RKCB pregunta por cinco cartas clave: los cuatro Ases y el Rey de triunfo.',
      'Respuestas (1430): 5♣ 1 o 4, 5♦ 0 o 3, 5♥ 2 sin la Dama de triunfo, 5♠ 2 con ella.',
      'Si faltan dos cartas clave (o una y la Dama), párate a nivel de cinco. Si falta una, declara el pequeño slam.',
      'Tras 5♣ o 5♦, el siguiente escalón pregunta por la Dama de triunfo; sin ella, el compañero vuelve al palo de triunfo.',
      'Después, 5SA pregunta por los Reyes laterales y promete todas las cartas clave y la Dama de triunfo.',
    ],
    quiz: [
      {
        q: 'Los corazones están acordados y tu compañero declara 4SA (RKCB). Tienes ♠A72 ♥K965 ♦Q84 ♣J53. ¿Qué respondes?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 2,
        explain: 'Dos cartas clave, el ♠A y el ♥K, sin la ♥Q: 5♥.',
      },
      {
        q: '¿Qué muestra una respuesta de 5♦ al RKCB?',
        options: ['Una carta clave', 'Cero o tres cartas clave', 'Dos cartas clave y la Dama de triunfo', 'Diamantes'],
        answer: 1,
        explain: 'En las respuestas 1430, 5♣ es una o cuatro y 5♦ es cero o tres; el que pregunta deduce cuál por la subasta.',
      },
      {
        q: 'Las picas están acordadas. Preguntaste con 4SA teniendo dos cartas clave y la ♠Q, y tu compañero responde 5♥ (dos sin la Dama). ¿Y ahora?',
        options: ['Paso', '6♠: falta una carta clave, pero la Dama es tuya', '5♠: faltan dos cartas clave', '5SA'],
        answer: 1,
        explain: 'Dos más dos son cuatro cartas clave, así que falta una, y tú mismo tienes la Dama de triunfo. Declara el pequeño slam.',
      },
      {
        q: 'Las picas están acordadas. El 5♣ de tu compañero muestra una carta clave y tú tienes las otras cuatro, pero no la ♠Q. ¿Qué voz pregunta por la Dama de triunfo?',
        options: ['5♦', '5♥', '5♠', '5SA'],
        answer: 0,
        explain: 'La pregunta por la Dama es el siguiente escalón por encima de la respuesta que no sea el palo de triunfo: 5♦ sobre 5♣.',
      },
      {
        q: 'Tienes todas las cartas clave y la Dama de triunfo y estás pensando en un gran slam. ¿Qué pregunta 5SA?',
        options: ['Otra vez por los Ases', 'Cuántos Reyes laterales tiene tu compañero', 'Por la Dama de triunfo', 'Nada: es para jugar'],
        answer: 1,
        explain: 'Tras el RKCB, 5SA pregunta por los Reyes laterales (el Rey de triunfo ya contó como carta clave) y promete que no falta ninguna carta clave.',
      },
    ],
  },

  {
    id: 'splinters-and-drury',
    title: 'Splinters y Drury inverso',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Dos apoyos al mayor de tu compañero: el splinter, que muestra valores de manga y un corto para que el abridor pueda valorar el slam, y el Drury, que permite a una mano que ya ha pasado mostrar un apoyo invitativo sin riesgo.',
    body: `
<h3>Los splinters</h3>
<p>Un <strong>splinter</strong> es un doble salto en un palo nuevo cuando tu compañero abre de 1♥ o de 1♠. Muestra cuatro o más triunfos, valores de manga (unos 13-16 puntos contando los cortos) y un semifallo o fallo en el palo que declaras. No dice nada más de ese palo, así que se alerta.</p>
<table>
<thead><tr><th>Apertura</th><th>Splinters</th></tr></thead>
<tbody>
<tr><td>1♥</td><td>3♠, 4♣, 4♦</td></tr>
<tr><td>1♠</td><td>4♣, 4♦, 4♥</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AJ92 H:7 D:A1082 C:J1072" data-label="Tu compañero abrió de 1♠: declara 4♥"></div>
<p>10 PH, cuatro triunfos y semifallo de corazón: 10 + 3 por el semifallo = 13 puntos de apoyo. 4♥ se lo dice todo a tu compañero en una sola voz. Con una mano más fuerte, empieza con el 2SA Jacoby; con 10-12 puntos, haz un apoyo invitativo.</p>

<h3>La decisión del abridor: los valores útiles</h3>
<p>Frente a un splinter, el abridor cuenta solo las cartas altas que trabajan. Los honores frente al semifallo de su compañero se desperdician casi por completo: un Rey o una Dama ahí nunca harán baza, porque el compañero falla el palo. Solo el As sigue contando. Sin valores desperdiciados y con unos 16 puntos útiles o más, el abridor busca el slam; si no, cierra en cuatro del mayor.</p>
<div class="deal" data-n="S:Q8763 H:AKJ98 D:43 C:A" data-s="S:AJ92 H:7 D:A1082 C:J1072"></div>
<div class="auction" data-calls="1S P 4H P 4S P P P" data-dealer="N"></div>
<p>Norte tiene 14 PH, pero el ♥K y el ♥J están frente al semifallo de Sur. Sin ellos, Norte tiene unos 10 puntos útiles, así que cierra. Hay once bazas, pero no doce.</p>
<div class="deal" data-n="S:AK875 H:KQ1076 D:K10 C:8" data-s="S:Q932 H:AJ9853 D:A96 C:-"></div>
<div class="auction" data-calls="1S P 4C P 4D P 4H P 4NT P 5S P 6S P P P" data-dealer="N"></div>
<p>Aquí Norte no tiene nada en tréboles, así que sus 15 PH trabajan todos, y los corazones encajan bien. Norte hace un cue-bid de 4♦, mostrando control en diamantes e interés de slam. Sur coopera con 4♥ (el ♥A), y Norte pregunta por cartas clave. El 5♠ de Sur muestra dos cartas clave y la Dama de triunfo, y Norte declara 6♠.</p>

<h3>Drury inverso</h3>
<p>En tercera o cuarta posición, tu compañero puede abrir algo ligero. Si ya has pasado y tienes un apoyo invitativo (tres o más triunfos y 10-12 puntos), un salto a tres del mayor puede dejaros demasiado altos frente a una apertura ligera. El <strong>Drury inverso</strong> lo resuelve: una mano que ya ha pasado declara <strong>2♣</strong> sobre el 1♥ o 1♠ de su compañero para mostrar tres o más triunfos y 10-12 puntos. Es artificial y no dice nada de los tréboles.</p>
<ul>
<li>El abridor repite <strong>dos del mayor</strong> con una apertura mínima o ligera: no hay manga, y tú pasas.</li>
<li>El abridor declara la <strong>manga</strong> con una apertura completa y valores extra.</li>
</ul>
<div class="deal" data-n="S:742 H:AQ82 D:Q42 C:Q73" data-s="S:KQJ98 H:9 D:AJ875 C:105" data-caption="Norte dio y pasó; Sur abrió de 1♠ en tercera posición."></div>
<div class="auction" data-calls="P P 1S P 2C P 2S P P P" data-dealer="N"></div>
<p>El 1♠ de Sur solo tiene 11 PH. Sobre el Drury, 2♠ dice «no hay manga», y la pareja se para con seguridad: nueve bazas son el límite.</p>
<div class="tip">El Drury es solo para manos que ya han pasado, y tiene que estar acordado. En esta aplicación está desactivado por defecto; actívalo en los ajustes del sistema para practicarlo.</div>
<div class="warn">Un splinter promete cuatro triunfos. Con solo tres, haz otra voz: tu compañero contará con el cuarto triunfo para fallar el palo corto.</div>
`,
    keyPoints: [
      'Un splinter (1♥ – 3♠/4♣/4♦, 1♠ – 4♣/4♦/4♥) muestra cuatro o más triunfos, valores de manga y un semifallo o fallo en el palo declarado.',
      'Frente a un splinter, cuenta solo los valores útiles: los honores frente al corto se desperdician, salvo el As.',
      'Con valores desperdiciados, el abridor cierra en manga; con valores útiles, hace un cue-bid o pregunta por cartas clave.',
      'Drury inverso: el 2♣ de una mano que ya ha pasado sobre 1♥/1♠ muestra tres o más triunfos y 10-12 puntos.',
      'Sobre el Drury, dos del mayor es un mínimo; la manga muestra valores extra.',
    ],
    quiz: [
      {
        q: 'Tu compañero abre de 1♠. Tienes ♠KQ74 ♥A853 ♦K962 ♣5 (12 PH). ¿Qué declaras?',
        options: ['2SA', '4♣', '3♠', '4♠'],
        answer: 1,
        explain: 'Cuatro triunfos, semifallo de trébol y 12 + 3 = 15 puntos de apoyo: el splinter 4♣ describe la mano en una sola voz.',
      },
      {
        q: 'Tu compañero abre de 1♥ y declaras 3♠. ¿Qué has mostrado?',
        options: ['Picas largas', 'Cuatro o más corazones, valores de manga y un semifallo o fallo en picas', 'Una mano débil con picas', 'Una parada en picas'],
        answer: 1,
        explain: 'Sobre 1♥, 3♠ es un doble salto en un palo nuevo: un splinter.',
      },
      {
        q: 'Abriste de 1♠ con ♠AK1063 ♥KQ5 ♦Q84 ♣K7 y tu compañero hizo un splinter de 4♥. ¿Qué haces?',
        options: ['Declarar 4♠: tu ♥K y tu ♥Q se desperdician', 'Declarar 4SA', 'Hacer un cue-bid de 5♣', 'Declarar 6♠'],
        answer: 0,
        explain: 'Cinco de tus 17 PH están frente al corto de corazones de tu compañero y no harán bazas. Con unos 12 puntos útiles, cierra.',
      },
      {
        q: '¿Quién puede usar el Drury inverso?',
        options: ['Cualquier respondedor con apoyo', 'Una mano que ya ha pasado con tres o más triunfos y 10-12 puntos, cuando su compañero abre de 1♥ o de 1♠', 'Una mano que ya ha pasado con tréboles largos', 'El abridor con una mano fuerte'],
        answer: 1,
        explain: 'El Drury es un apoyo invitativo de una mano que ya ha pasado y que mantiene baja la subasta frente a una apertura en tercera o cuarta posición que puede ser ligera.',
      },
      {
        q: 'Tu compañero, que ya ha pasado, declara 2♣ (Drury) sobre tu 1♥ en tercera posición. Tienes una mano ligera de 11 puntos. ¿Qué redeclaras?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 0,
        explain: 'Dos del mayor dice que tienes un mínimo y que no hay manga; tu compañero pasa.',
      },
    ],
  },

  {
    id: 'new-minor-and-fourth-suit-forcing',
    title: 'Nuevo menor forcing y cuarto palo forcing',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Dos voces artificiales que permiten al respondedor preguntar en lugar de adivinar: el nuevo menor forcing tras la redeclaración de 1SA del abridor, y el cuarto palo forcing cuando ya se han declarado tres palos.',
    body: `
<h3>Por qué el respondedor necesita preguntar</h3>
<p>Tras 1♦ – 1♠ – 1SA, un respondedor con cinco picas y valores de manga querría saber si el abridor tiene tres picas. 3♠ solo invitaría; 4♠ podría encontrarse con un fit 5-2; 3SA podría perder un fit 5-3. Las voces naturales no pueden hacer la pregunta, así que la hace una voz artificial.</p>

<h3>Nuevo menor forcing</h3>
<p>Tras la redeclaración de 1SA del abridor, la voz del respondedor en <strong>el otro menor</strong> a nivel de dos (1♣ – 1♥ – 1SA – 2♦, o 1♦ – 1♠ – 1SA – 2♣) es artificial y forcing una vuelta. Muestra 11 o más puntos y pregunta por el mayor del respondedor. El respondedor tiene exactamente cinco cartas en él o, tras 1♠, cuatro picas y cuatro corazones; con seis, el respondedor simplemente repite el mayor o declara la manga.</p>
<table>
<thead><tr><th>Respuesta del abridor</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>2 del mayor del respondedor</td><td>Apoyo de tres cartas, mínimo (12-13)</td></tr>
<tr><td>3 del mayor del respondedor</td><td>Apoyo de tres cartas, máximo (14)</td></tr>
<tr><td>2♥ o 3♥ (tras 1♠)</td><td>Cuatro corazones, mínimo o máximo</td></tr>
<tr><td>2SA o 3SA</td><td>Ninguna de las dos cosas, mínimo o máximo</td></tr>
</tbody>
</table>
<p>Después el respondedor fija el contrato: manga con 13 o más (o frente a un máximo), invitación con 11-12 frente a un mínimo, y sin triunfo si no hay fit.</p>
<div class="deal" data-n="S:A108 H:J5 D:A854 C:K1063" data-s="S:QJ964 H:K6 D:Q1092 C:AQ"></div>
<div class="auction" data-calls="1D P 1S P 1NT P 2C P 2S P 4S P P P" data-dealer="N"></div>
<p>Sur tiene 14 PH y cinco picas. 2♣ pregunta; el 2♠ de Norte muestra apoyo de tres cartas, y Sur declara la manga en picas, donde el valor de fallo permite hacer once bazas.</p>
<div class="auction" data-calls="1D P 1H P 1NT P 2C P 2H P 3H P P P" data-dealer="N"></div>
<p>Con 11 PH y cinco corazones (♠5 ♥AQJ62 ♦A32 ♣9743), Sur pregunta con 2♣ y, frente a un mínimo con tres corazones, invita con 3♥. Norte tiene un mínimo y pasa.</p>

<h3>Cuarto palo forcing</h3>
<p>Cuando se han declarado tres palos de forma natural, la voz del respondedor en el <strong>cuarto palo</strong> es artificial y forcing a manga. El respondedor tiene valores de manga pero ninguna voz clara: a menudo un palo de cinco cartas que busca apoyo de tres, o una mano que podría jugar 3SA si el cuarto palo estuviera parado.</p>
<p>El abridor sigue describiendo su mano, en este orden:</p>
<ol>
<li>Apoyo de tres cartas en el palo del respondedor: apóyalo.</li>
<li>Una parada en el cuarto palo: declara sin triunfo.</li>
<li>Longitud extra: repite un segundo palo de cinco cartas, o el primer palo.</li>
</ol>
<div class="deal" data-n="S:AJ74 H:83 D:J1072 C:AQ10" data-s="S:Q96 H:AKQ42 D:85 C:K75"></div>
<div class="auction" data-calls="1D P 1H P 1S P 2C P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Sur tiene 14 PH y cinco buenos corazones. 2♣, el cuarto palo, pide a Norte que se describa. Norte no tiene apoyo de tres cartas en corazones pero tiene los tréboles parados, así que declara 2SA, y Sur sube a 3SA.</p>
<div class="tip">Con una mano equilibrada de manga y el cuarto palo parado, declara simplemente 3SA. El cuarto palo forcing es para las manos que necesitan una respuesta.</div>
<div class="warn">Las dos voces son artificiales: no dicen nada del menor ni del cuarto palo. Alértalas y nunca las pases.</div>
`,
    keyPoints: [
      'Nuevo menor forcing: 1m – 1M – 1SA – dos del otro menor pregunta por apoyo de tres cartas (o cuatro corazones tras 1♠), con 11+ puntos.',
      'El abridor muestra el apoyo o los cuatro corazones a nivel de dos con un mínimo y a nivel de tres con un máximo; 2SA o 3SA no muestra ninguna de las dos cosas.',
      'Cuarto palo forcing: la voz del respondedor en el cuarto palo es artificial y forcing a manga.',
      'El abridor responde mostrando primero apoyo para el palo del respondedor, luego sin triunfo con parada y después longitud extra.',
      'Con una mano equilibrada y parada en el cuarto palo, declara directamente 3SA.',
    ],
    quiz: [
      {
        q: '1♣ – 1♠ – 1SA – ? Tienes ♠KQ1074 ♥A63 ♦Q85 ♣J2 (12 PH). ¿Qué declaras?',
        options: ['2♠', '3♠', '2♦', '3SA'],
        answer: 2,
        explain: '2♦, nuevo menor forcing, pregunta si el abridor tiene tres picas (o cuatro corazones). Después puedes elegir entre las picas y el sin triunfo.',
      },
      {
        q: '1♦ – 1♥ – 1SA – 2♣. Abriste con ♠KJ5 ♥Q73 ♦AQ84 ♣Q62 (14 PH). ¿Qué respondes?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 2,
        explain: 'Apoyo de tres cartas en corazones con un máximo para la redeclaración de 1SA: salta a 3♥.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. ¿Qué muestra 2♦?',
        options: ['Diamantes largos', 'Una voz artificial forcing a manga que pide al abridor que describa su mano', 'Una mano débil', 'Apoyo a picas'],
        answer: 1,
        explain: 'Los diamantes son el cuarto palo. El respondedor tiene valores de manga y está preguntando, no mostrando diamantes.',
      },
      {
        q: '1♣ – 1♥ – 1♠ – 2♦. Abriste con ♠AQ74 ♥J5 ♦K103 ♣KJ96. ¿Qué declaras?',
        options: ['2♥', '2SA', '3♣', '2♠'],
        answer: 1,
        explain: 'No tienes apoyo de tres cartas en corazones, pero el ♦K10x para los diamantes: declara sin triunfo.',
      },
      {
        q: 'Tras 1♦ – 1♠ – 1SA, ¿qué mano debe usar el nuevo menor forcing?',
        options: ['♠KJ84 ♥Q73 ♦K5 ♣J1063', '♠AQ984 ♥K6 ♦J3 ♣Q1052', '♠J9852 ♥43 ♦K82 ♣1074', '♠K1063 ♥Q2 ♦A54 ♣K973'],
        answer: 1,
        explain: 'Cinco picas y 12 PH: pregunta por el apoyo de tres cartas. La primera mano es demasiado débil, la tercera debe redeclarar 2♠, y la última, con cuatro picas y 12 PH, declara 3SA.',
      },
    ],
  },

  {
    id: 'texas-transfers',
    title: 'Transfers Texas',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Cómo declarar la manga en un mayor de seis cartas frente a 1SA o 2SA para que la juegue la mano fuerte, y cómo seguir hacia el slam.',
    body: `
<h3>Transfers a nivel de cuatro</h3>
<p>Frente al 1SA de tu compañero, una mano con un mayor de seis cartas y fuerza para manga quiere jugar cuatro del mayor, y quiere que el declarante sea el abridor de sin triunfo, para que la salida llegue hacia la mano fuerte. Los <strong>transfers Texas</strong> lo consiguen en una sola voz:</p>
<table>
<thead><tr><th>Voz</th><th>Significado</th><th>El abridor declara</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>Seis o más corazones, valores de manga</td><td>4♥</td></tr>
<tr><td>4♥</td><td>Seis o más picas, valores de manga</td><td>4♠</td></tr>
</tbody>
</table>
<p>El abridor tiene que completar el transfer. El respondedor pasa si no tiene interés de slam.</p>
<div class="deal" data-n="S:KJ6 H:742 D:KJ6 C:AK84" data-s="S:A108754 H:3 D:A54 C:Q65"></div>
<div class="auction" data-calls="1NT P 4H P 4S P P P" data-dealer="N"></div>
<p>Sur tiene 10 PH y seis picas: suficiente para manga pero no para slam. 4♥ es el transfer, Norte declara 4♠ y Sur pasa. Juega Norte, así que la salida llega hacia los Reyes de Norte en lugar de a través de ellos.</p>

<h3>¿Texas o Jacoby?</h3>
<table>
<thead><tr><th>Mano del respondedor</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>0-7, cinco o más cartas</td><td>Transfer de Jacoby y luego paso</td></tr>
<tr><td>8-9, seis cartas</td><td>Transfer de Jacoby y luego apoyo a tres</td></tr>
<tr><td>Valores de manga, exactamente cinco cartas</td><td>Transfer de Jacoby y luego 3SA: elige el abridor</td></tr>
<tr><td>Valores de manga, seis o más cartas</td><td>Texas: 4♦ o 4♥</td></tr>
<tr><td>Interés de slam, seis o más cartas</td><td>Texas y luego 4SA (Roman Key Card Blackwood)</td></tr>
</tbody>
</table>

<h3>Seguir hacia el slam</h3>
<div class="deal" data-n="S:K543 H:A63 D:AKQ4 C:85" data-s="S:Q H:KQJ1085 D:765 C:AK10"></div>
<div class="auction" data-calls="1NT P 4D P 4H P 4NT P 5H P 6H P P P" data-dealer="N"></div>
<p>Sur tiene 15 PH y un palo de corazones sexto y fuerte frente a 15-17: el slam es probable. El Texas fija los corazones como triunfo, y 4SA pregunta por cartas clave. El 5♥ de Norte muestra dos, el ♥A y el ♦A, sin la Dama. Sur tiene el ♥K, el ♣A y la ♥Q, así que solo falta una carta clave, y Sur declara 6♥.</p>

<h3>Tras 2SA</h3>
<p>Las mismas voces funcionan sobre una apertura de 2SA (20-21), donde incluso 4 puntos bastan para la manga:</p>
<div class="deal" data-n="S:AQ102 H:AK102 D:K2 C:A65" data-s="S:64 H:Q97543 D:AJ9 C:87"></div>
<div class="auction" data-calls="2NT P 4D P 4H P P P" data-dealer="N"></div>
<div class="tip">El Texas convierte en declarante a la mano fuerte y ahorra espacio para la subasta de slam: tras el transfer, 4SA es Roman Key Card Blackwood para el mayor.</div>
<div class="warn">4♣ sobre 1SA o 2SA es Gerber, no Texas. Y el abridor nunca debe pasar sobre 4♦ o 4♥: el transfer tiene que completarse.</div>
`,
    keyPoints: [
      'Texas: 1SA (o 2SA) – 4♦ muestra seis o más corazones, y 4♥ seis o más picas, con valores de manga.',
      'El abridor siempre completa el transfer, así que juega el abridor de sin triunfo.',
      'El respondedor pasa sin interés de slam; con interés, Texas y luego 4SA pregunta por cartas clave.',
      'Con exactamente cinco cartas y valores de manga, usa en su lugar un transfer de Jacoby y luego 3SA.',
      'Las manos invitativas hacen el transfer a nivel de dos y apoyan a tres.',
    ],
    quiz: [
      {
        q: 'Tu compañero abre de 1SA. Tienes ♠KQ10965 ♥A4 ♦K73 ♣85 (12 PH). ¿Qué declaras?',
        options: ['2♥', '4♥', '4♠', '3♠'],
        answer: 1,
        explain: 'Seis picas y valores de manga: 4♥ es un transfer Texas, y tu compañero declara 4♠.',
      },
      {
        q: '1SA – 4♦. ¿Qué declara el abridor?',
        options: ['Paso', '4♥', '4SA', '5♦'],
        answer: 1,
        explain: '4♦ muestra seis o más corazones; el abridor completa el transfer con 4♥.',
      },
      {
        q: 'Tu compañero abre de 1SA. Tienes ♠J8 ♥KQ1065 ♦A73 ♣Q42 (12 PH, cinco corazones). ¿Cuál es tu plan?',
        options: ['4♦ (Texas)', '2♦ y luego 3SA', '2♦ y luego 4♥', '3SA'],
        answer: 1,
        explain: 'Con exactamente cinco corazones, haz el transfer y declara 3SA: el abridor elige 4♥ con apoyo de tres cartas y pasa con dos.',
      },
      {
        q: '1SA – 4♥ – 4♠ – 4SA. ¿Qué es 4SA?',
        options: ['Cuantitativo', 'Roman Key Card Blackwood para las picas', 'Para jugar', 'Gerber'],
        answer: 1,
        explain: 'El transfer Texas ha fijado las picas como triunfo, así que 4SA pregunta por cartas clave.',
      },
      {
        q: 'Tu compañero abre de 2SA. Tienes ♠64 ♥Q97543 ♦AJ9 ♣87 (7 PH). ¿Qué declaras?',
        options: ['3♦', '4♦', '3♥', 'Paso'],
        answer: 1,
        explain: 'Seis corazones y fuerza suficiente para manga frente a 20-21: Texas 4♦, y tu compañero juega 4♥.',
      },
    ],
  },
];
