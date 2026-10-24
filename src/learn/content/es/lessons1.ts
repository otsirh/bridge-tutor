// Lessons, part 1 (Spanish).
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_1: Lesson[] = [
  {
    id: 'how-bridge-works',
    title: 'Cómo funciona el bridge',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'El reparto, la subasta, el contrato y el carteo, desde la primera voz hasta la última baza.',
    body: `
<h3>Cuatro jugadores, dos parejas</h3>
<p>El bridge es un juego de parejas. Norte y Sur juegan juntos contra Este y Oeste, y los compañeros se sientan uno frente al otro. Se reparte la baraja entera de 52 cartas, así que cada jugador recibe 13. Dentro de un palo, las cartas van del As (la más alta) pasando por K, Q, J, 10, 9 y así hasta el 2. El objetivo es ganar <strong>bazas</strong>: una baza es una carta de cada jugador, jugadas por turno en el sentido de las agujas del reloj.</p>

<h3>Primera parte: la subasta</h3>
<p>Antes de jugar ninguna carta hay una subasta. Habla primero el dador y la subasta avanza en el sentido de las agujas del reloj. En su turno, cada jugador puede <strong>pasar</strong>, hacer una <strong>declaración</strong>, <strong>doblar</strong> una declaración de los rivales o <strong>redoblar</strong> un doblo de los rivales.</p>
<p>Una declaración tiene un nivel (de 1 a 7) y una denominación (un palo de triunfo, o sin triunfo). El nivel es el número de bazas que te comprometes a ganar <em>por encima de seis</em>: 1♠ promete 7 bazas con picas como triunfo y 3SA promete 9 bazas sin palo de triunfo. Las seis primeras bazas forman el <strong>libro</strong>.</p>
<p>Las denominaciones se ordenan, de menor a mayor: ♣, ♦, ♥, ♠, SA. Cada declaración debe ser superior a la anterior: o a un nivel más alto, o al mismo nivel en una denominación de mayor rango. Después de 1♥ puedes declarar 1♠ o 1SA, pero para nombrar los tréboles tienes que declarar al menos 2♣.</p>
<p>La subasta termina cuando a una declaración, un doblo o un redoblo le siguen tres pasos seguidos. La última declaración es el <strong>contrato</strong>. Si los cuatro jugadores pasan de entrada, las cartas se recogen y no se juega la mano.</p>
<div class="auction" data-calls="1H P 2H P 4H P P P" data-dealer="N"></div>
<p>Norte abre de 1♥, Sur apoya a 2♥ y Norte salta a 4♥. Todos pasan y el contrato es 4♥: Norte-Sur deben ganar al menos 10 de las 13 bazas con corazones como triunfo.</p>

<h3>Niveles del contrato</h3>
<table>
<thead><tr><th>Nivel</th><th>Bazas necesarias</th><th>Notas</th></tr></thead>
<tbody>
<tr><td>1</td><td>7</td><td>parcial</td></tr>
<tr><td>2</td><td>8</td><td>parcial</td></tr>
<tr><td>3</td><td>9</td><td>3SA es manga</td></tr>
<tr><td>4</td><td>10</td><td>4♥ y 4♠ son manga</td></tr>
<tr><td>5</td><td>11</td><td>5♣ y 5♦ son manga</td></tr>
<tr><td>6</td><td>12</td><td>pequeño slam</td></tr>
<tr><td>7</td><td>13</td><td>gran slam</td></tr>
</tbody>
</table>
<p>Las mangas y los slams dan primas muy grandes. Por eso buena parte de la subasta gira en torno a una pregunta: ¿tiene nuestro bando fuerza suficiente para la manga?</p>

<h3>¿Quién juega la mano?</h3>
<p>El <strong>declarante</strong> es el jugador del bando que gana la subasta que nombró <em>primero</em> la denominación del contrato final. En la subasta anterior Norte declaró corazones primero, así que Norte es el declarante aunque Sur también declarara corazones. El compañero del declarante pasa a ser el <strong>muerto</strong>.</p>

<h3>Segunda parte: el carteo</h3>
<ol>
<li>El jugador a la izquierda del declarante hace la <strong>salida</strong>. Si el declarante es Norte, sale Este.</li>
<li>A continuación el muerto extiende sus 13 cartas boca arriba sobre la mesa, ordenadas por palos. El declarante juega las cartas de las dos manos; el muerto ya no interviene.</li>
<li>El juego sigue en el sentido de las agujas del reloj. Cada jugador está obligado a <strong>servir</strong> (jugar una carta del palo que se ha salido) si puede.</li>
<li>Un jugador sin cartas del palo jugado (con <strong>fallo</strong> en ese palo) puede jugar un triunfo, lo que se llama <strong>fallar</strong>, o tirar cualquier otra carta, que es un <strong>descarte</strong>.</li>
<li>Gana la baza el triunfo más alto que se haya jugado en ella o, si no se ha jugado ningún triunfo, la carta más alta del palo de salida. Quien gana una baza sale a la siguiente.</li>
</ol>
<p>Ejemplo: los corazones son triunfo y Este sale con el ♠K. Sur juega el ♠4, Oeste el ♠9 y Norte, que no tiene picas, falla con el ♥2. Norte gana la baza, porque cualquier triunfo gana a cualquier carta de otro palo. En un contrato a sin triunfo no hay triunfos, así que siempre gana la carta más alta del palo de salida.</p>
<div class="tip">Un descarte nunca puede ganar una baza. Solo pueden ganarla una carta del palo de salida o un triunfo.</div>

<h3>Cumplir o multar el contrato</h3>
<p>Cuando se han jugado las 13 bazas, el bando declarante puntúa si ha hecho al menos las bazas que se comprometió a hacer; las bazas sobrantes son <strong>bazas de más</strong>. Si el declarante se queda corto, los defensores cobran una penalización por cada baza que falte: cada una es una <strong>multa</strong>. Un doblo aumenta tanto el premio por cumplir el contrato como la penalización por fallarlo.</p>
<div class="warn">No servir cuando podías hacerlo es un <strong>renuncio</strong>, y se castiga transfiriendo bazas al otro bando. Antes de jugar una carta de otro palo, comprueba de nuevo que de verdad no te queda ninguna del palo de salida.</div>
`,
    keyPoints: [
      'Cuatro jugadores en dos parejas; cada jugador tiene 13 cartas.',
      'Una declaración de nivel N promete 6 + N bazas; las denominaciones se ordenan ♣, ♦, ♥, ♠, SA.',
      'La subasta termina tras tres pasos seguidos; la última declaración es el contrato.',
      'El declarante es el primer jugador del bando ganador que nombró la denominación final; sale el jugador a su izquierda.',
      'Si puedes, debes servir; si no puedes, puedes fallar o descartarte.',
      'Mangas: 3SA, 4♥, 4♠, 5♣, 5♦. Slams: cualquier contrato a nivel de 6 o 7.',
    ],
    quiz: [
      {
        q: 'El contrato final es 3SA. ¿Cuántas bazas necesita el declarante?',
        options: ['3', '6', '9', '10'],
        answer: 2,
        explain: 'Suma seis (el libro) al nivel: 3 + 6 = 9 bazas.',
      },
      {
        q: 'Norte abre de 1♠, Este pasa, Sur declara 2♠ y todos pasan. ¿Quién es el declarante y quién hace la salida?',
        options: ['Declara Sur, sale Oeste', 'Declara Norte, sale Este', 'Declara Norte, sale Oeste', 'Declara Sur, sale Este'],
        answer: 1,
        explain: 'Norte fue el primer jugador del bando que nombró las picas, así que Norte es el declarante. La salida la hace el jugador a la izquierda del declarante, que es Este.',
      },
      {
        q: 'Las picas son triunfo. Se sale a corazón y no tienes corazones. ¿Qué puedes hacer?',
        options: ['Estás obligado a fallar con una pica', 'Puedes fallar con una pica o descartarte de cualquier carta', 'Estás obligado a descartarte de un trébol o un diamante', 'Estás obligado a jugar tu carta más baja'],
        answer: 1,
        explain: 'Lo único obligatorio es servir. Cuando tienes fallo en el palo de salida, eres libre de fallar o de descartarte; fallar suele ser lo correcto, pero nunca es obligatorio.',
      },
      {
        q: 'El rival de tu derecha ha abierto de 1♥. ¿Cuál de estas declaraciones es legal?',
        options: ['1♦', '1♣', '1SA', '1♥'],
        answer: 2,
        explain: 'Una declaración debe superar a la anterior. A nivel de uno, solo las picas y el sin triunfo están por encima de los corazones, así que 1♠ y 1SA son legales; los tréboles y los diamantes habría que declararlos a nivel de dos.',
      },
      {
        q: '¿Cuál de estos contratos es una manga?',
        options: ['3♥', '4♦', '3SA', '2SA'],
        answer: 2,
        explain: 'La manga requiere 9 bazas a sin triunfo, 10 en un mayor y 11 en un menor. 3SA lo es; a 3♥ y a 4♦ les falta un nivel, y a 2SA le falta una baza para la manga.',
      },
    ],
  },

  {
    id: 'hand-evaluation',
    title: 'Valorar la mano',
    topic: 'Basics',
    level: 'Beginner',
    summary: 'Cómo contar los puntos de honor, la longitud y los cortos, y cómo la regla del 20, la regla del 15, las perdedoras y las bazas rápidas afinan la valoración.',
    body: `
<h3>Puntos de honor</h3>
<p>La medida estándar de la fuerza son los <strong>puntos de honor</strong> (PH): As 4, Rey 3, Dama 2, Valet 1. En la baraja hay 40 PH, así que una mano media tiene 10.</p>
<div class="hand" data-cards="S:AK52 H:KJ3 D:Q72 C:A85" data-label="17 PH"></div>
<p>♠AK = 7, ♥KJ = 4, ♦Q = 2, ♣A = 4: 17 PH. La mano es equilibrada, así que se abre de 1SA (15-17).</p>
<p>Objetivos útiles para la suma de la pareja: unos 25 para la manga a 3SA o en un mayor, 29 para la manga en un menor, 33 para el pequeño slam y 37 para el gran slam. Los puntos son una guía, no una garantía: la distribución, el fit y la posición de los honores también cuentan.</p>

<h3>Puntos de longitud: valorar tus propios palos</h3>
<p>Los palos largos dan bazas extra cuando ya han salido las cartas altas. Cuando valoras tu mano para abrir o para redeclarar, suma 1 punto por cada carta a partir de la quinta en cualquier palo: un palo de cinco cartas suma 1 y uno de seis suma 2.</p>

<h3>Puntos de apoyo: valorar un fit</h3>
<p>Cuando sabes que tienes fit en el palo de tu compañero, los palos cortos ganan valor porque tus triunfos pueden fallar las ganadoras de los rivales. Al apoyar a tu compañero, cuenta los cortos en lugar de la longitud:</p>
<table>
<thead><tr><th>Corto</th><th>Con 4+ triunfos</th><th>Con 3 triunfos</th></tr></thead>
<tbody>
<tr><td>Fallo</td><td>5</td><td>3</td></tr>
<tr><td>Semifallo</td><td>3</td><td>2</td></tr>
<tr><td>Doubleton</td><td>1</td><td>1</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:5 H:K1083 D:A9742 C:J62" data-label="Tu compañero abrió de 1♥"></div>
<p>Solo 8 PH, pero con cuatro triunfos y un semifallo sumas 3, lo que da 11 puntos de apoyo. Es un apoyo invitativo a 3♥ (10-12).</p>
<div class="warn">Los cortos solo valen algo cuando hay fit. Sin fit, un semifallo en el palo de tu compañero resta en lugar de sumar: avisa de un misfit.</div>

<h3>Ajustar la valoración</h3>
<ul>
<li>Los honores en palos largos pesan más que los honores en palos cortos: ♠KQJ54 hará bazas; ♠KQ quizá no.</li>
<li>Los honores sin apoyo en palos cortos valen menos: un K, Q o J semifallo, o una Q o J doubleton. Resta un punto.</li>
<li>4-3-3-3 es la distribución menos útil; plantéate restar un punto.</li>
<li>La escala 4-3-2-1 infravalora un poco los Ases y los dieces y sobrevalora un poco las Damas y los Valets.</li>
</ul>

<h3>La regla del 20 y la regla del 15</h3>
<p>En primera, segunda o tercera posición, abre una mano de 10 u 11 PH si los PH más el número de cartas de tus dos palos más largos suman 20 o más.</p>
<div class="hand" data-cards="S:KQ1065 H:AJ874 D:5 C:32" data-label="Regla del 20: abre de 1♠"></div>
<p>10 PH + 5 + 5 = 20, así que se abre, y con dos palos de cinco cartas se abre el de mayor rango: 1♠. Compárala con ♠QJ5 ♥K92 ♦QJ84 ♣Q73: 11 PH + 4 + 3 = 18, así que pasas. Las Damas y los Valets dispersos y la distribución plana hacen que sea una mala apertura.</p>
<p>En cuarta posición, después de tres pasos, usa la regla del 15: abre si los PH más el número de picas suman 15 o más. Si pasas, la mano se recoge, así que solo te interesa abrir cuando es probable que tu bando gane la lucha por el parcial, y la mayoría de esas luchas las decide el palo de picas.</p>

<h3>El cómputo de perdedoras</h3>
<p>Una vez encontrado un fit de 8 o más cartas, el cómputo de perdedoras (LTC, Losing Trick Count) da una segunda opinión basada en la distribución. Mira las tres primeras cartas de cada palo y cuenta una perdedora por cada As, Rey o Dama que falte entre ellas:</p>
<table>
<thead><tr><th>Tenencia</th><th>Perdedoras</th></tr></thead>
<tbody>
<tr><td>Fallo</td><td>0</td></tr>
<tr><td>A semifallo / otro semifallo</td><td>0 / 1</td></tr>
<tr><td>AK / Ax o Kx / Qx o xx</td><td>0 / 1 / 2</td></tr>
<tr><td>AKQ</td><td>0</td></tr>
<tr><td>AKx, AQx, KQx</td><td>1</td></tr>
<tr><td>Axx, Kxx, Qxx</td><td>2</td></tr>
<tr><td>xxx</td><td>3</td></tr>
</tbody>
</table>
<p>Suma tus perdedoras a las de tu compañero y resta el total de 24: el resultado es, aproximadamente, el número de bazas que hará la pareja con ese palo como triunfo. Una apertura mínima tiene unas 7 perdedoras.</p>
<div class="hand" data-cards="S:K872 H:4 D:A8652 C:853" data-label="Tu compañero abrió de 1♠"></div>
<p>♠K87 = 2 perdedoras, ♥4 = 1, ♦A86 = 2, ♣853 = 3: 8 perdedoras. 24 − (7 + 8) = 9 bazas, así que invitas con 3♠. Los puntos dicen lo mismo: 7 PH + 3 por el semifallo = 10 puntos de apoyo, un apoyo invitativo.</p>

<h3>Bazas rápidas</h3>
<p>Las bazas rápidas miden la fuerza defensiva, es decir, las bazas que esperas hacer en las dos primeras vueltas de un palo: AK = 2, AQ = 1½, A = 1, KQ = 1, Kx = ½. Una apertura o un doblo informativo sólidos suelen tener unas 2 bazas rápidas. Las manos con pocas bazas rápidas y mucha distribución son mejores para jugar la mano que para defender.</p>
`,
    keyPoints: [
      'PH: As 4, Rey 3, Dama 2, Valet 1; 40 en la baraja y 10 en una mano media.',
      'Para tu propia mano suma un punto por cada carta a partir de la quinta; al apoyar a tu compañero cuenta en su lugar los cortos (fallo 5, semifallo 3, doubleton 1 con cuatro triunfos).',
      'Regla del 20 para las aperturas ligeras en primera, segunda o tercera posición; regla del 15 (PH + picas) en cuarta posición.',
      'LTC: bazas ≈ 24 − perdedoras de la pareja, y una apertura mínima tiene unas 7 perdedoras.',
      'Unos 25 puntos entre los dos para 3SA o la manga en un mayor, 29 para la manga en un menor y 33 para el pequeño slam.',
    ],
    quiz: [
      {
        q: '¿Cuántos PH tiene ♠AQ4 ♥KJ62 ♦J953 ♣K7?',
        options: ['12', '13', '14', '15'],
        answer: 2,
        explain: '♠AQ = 6, ♥KJ = 4, ♦J = 1, ♣K = 3: 14 PH.',
      },
      {
        q: 'Primera posición. Tienes 10 PH con cinco corazones y cinco tréboles. ¿Qué haces?',
        options: ['Pasar: una apertura necesita 12 PH', 'Abrir de 1♥: se cumple la regla del 20', 'Abrir de 1♣: con dos palos de cinco se abre el más bajo', 'Abrir de 2♥'],
        answer: 1,
        explain: '10 PH + 5 + 5 = 20, así que la mano cumple la regla del 20. Con dos palos de cinco cartas abres el de mayor rango, es decir, 1♥ (los tréboles los puedes mostrar después).',
      },
      {
        q: 'Tu compañero abre de 1♥. Tienes cuatro corazones y fallo a picas. ¿Cuántos puntos por cortos sumas?',
        options: ['1', '3', '5', '0'],
        answer: 2,
        explain: 'Con cuatro o más triunfos, un fallo vale 5 puntos de apoyo: cada pica que tenga tu compañero se puede fallar en tu mano.',
      },
      {
        q: 'Tu mano tiene 7 perdedoras y la de tu compañero 8, con un fit de ocho triunfos. ¿Cuántas bazas predice el LTC?',
        options: ['7', '9', '8', '10'],
        answer: 1,
        explain: '24 − (7 + 8) = 9. Como se supone que el abridor tiene 7 perdedoras, un respondedor con 8 perdedoras debe invitar a nivel de tres en lugar de declarar la manga.',
      },
      {
        q: 'Cuarta posición tras tres pasos: ♠KJ63 ♥A82 ♦Q74 ♣J93 (11 PH). ¿Qué haces?',
        options: ['Pasar: 11 PH no bastan', 'Abrir de 1♣: 11 + 4 picas = 15', 'Abrir de 1♠', 'Abrir de 1SA'],
        answer: 1,
        explain: 'Se cumple la regla del 15: 11 PH + 4 picas = 15. Sin mayor de cinco cartas y con 3-3 en menores, abres de 1♣. 1♠ prometería cinco picas y 1SA requiere 15-17.',
      },
    ],
  },

  {
    id: 'opening-bids',
    title: 'Abrir la subasta',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Qué manos abrir y qué apertura elegir, desde uno a palo hasta 1SA, 2SA, 2♣ y los barrages.',
    body: `
<h3>Las aperturas de un vistazo</h3>
<table>
<thead><tr><th>Apertura</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>1♣</td><td>12-21 PH, 3+ tréboles (el menor más largo; con 3-3 en menores se abre de 1♣)</td></tr>
<tr><td>1♦</td><td>12-21 PH, 3+ diamantes (el menor más largo; con 4-4 en menores se abre de 1♦)</td></tr>
<tr><td>1♥ / 1♠</td><td>12-21 PH, 5+ cartas en el palo</td></tr>
<tr><td>1SA</td><td>15-17 PH, equilibrada (puede incluir un palo de cinco cartas)</td></tr>
<tr><td>2♣</td><td>Fuerte y artificial: 22+ PH o 9+ bazas de juego</td></tr>
<tr><td>2♦ / 2♥ / 2♠</td><td>Dos débil: un palo de seis cartas y 5-10 PH</td></tr>
<tr><td>2SA</td><td>20-21 PH, equilibrada</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Barrage: un palo de siete cartas y 5-10 PH</td></tr>
<tr><td>4♥ / 4♠</td><td>Barrage: un palo de ocho cartas (o de siete con distribución extra)</td></tr>
</tbody>
</table>

<h3>¿Es una mano de apertura?</h3>
<p>Con 12 PH o más, abre, salvo en cuarta posición. Con 10-11 PH en primera, segunda o tercera posición, abre si se cumple la regla del 20 (PH + la longitud de tus dos palos más largos ≥ 20). En cuarta posición abre con 13 PH o más, y con 10-12 PH solo si se cumple la regla del 15 (PH + número de picas ≥ 15). Las manos con un palo largo y menos puntos pueden encajar mejor en un dos débil o en un barrage.</p>

<h3>Manos equilibradas: deciden los puntos</h3>
<p>Una mano equilibrada no tiene fallo, ni semifallo, y como mucho un doubleton: 4-3-3-3, 4-4-3-2 o 5-3-3-2. Con una mano equilibrada, tu plan siempre es mostrar tu fuerza a sin triunfo, ya sea de entrada o en tu siguiente turno:</p>
<table>
<thead><tr><th>PH</th><th>Plan</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Abre de uno a palo y redeclara 1SA</td></tr>
<tr><td>15-17</td><td>Abre de 1SA</td></tr>
<tr><td>18-19</td><td>Abre de uno a palo y luego salta a 2SA</td></tr>
<tr><td>20-21</td><td>Abre de 2SA</td></tr>
<tr><td>22-24</td><td>Abre de 2♣ y redeclara 2SA</td></tr>
<tr><td>25-27</td><td>Abre de 2♣ y redeclara 3SA</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ5 H:K3 D:KJ84 C:QJ62" data-label="Abre de 1SA: 16 PH, equilibrada"></div>
<div class="hand" data-cards="S:AJ4 H:K83 D:Q1074 C:KJ5" data-label="Abre de 1♦: 14 PH, piensas redeclarar 1SA"></div>

<h3>Elegir el palo</h3>
<ul>
<li>Con un mayor de cinco o más cartas, ábrelo, incluso con una mano equilibrada de 12-14.</li>
<li>Con dos palos de cinco cartas (o dos de seis), abre el de mayor rango.</li>
<li>Con un palo de seis cartas y otro de cinco, abre el más largo.</li>
<li>Sin mayor quinto, abre el menor más largo. Con 3-3 en menores abre de 1♣; con 4-4, de 1♦.</li>
<li>Nunca se abre un mayor de cuatro cartas. Con 4-4 en mayores y sin palo de cinco, abre un menor; tu compañero declarará un mayor de cuatro si lo tiene.</li>
</ul>
<div class="hand" data-cards="S:KQ1074 H:A63 D:K82 C:95" data-label="Abre de 1♠: 12 PH, cinco picas"></div>
<div class="hand" data-cards="S:A5 H:973 D:KJ84 C:AQ96" data-label="Abre de 1♦: 4-4 en menores"></div>
<div class="hand" data-cards="S:AJ84 H:KQ5 D:J73 C:K62" data-label="Abre de 1♣: 3-3 en menores"></div>
<p>La última mano tiene cuatro picas, pero un mayor necesita cinco cartas para abrirse, y con tres cartas en cada menor la apertura es 1♣. Si tu compañero tiene cuatro picas, responderá 1♠ y se encontrará el fit.</p>

<h3>Aperturas fuertes y débiles</h3>
<p>2SA muestra 20-21 equilibrada; 2♣ es la única apertura forcing y abarca todas las manos de 22+ PH o de unas nueve bazas de juego. En el otro extremo, los doses débiles y los barrages quitan espacio de subasta a los rivales cuando tienes un palo largo pero poca defensa. Cada una tiene su propia lección.</p>
<div class="hand" data-cards="S:AK5 H:KQ2 D:AJ43 C:KJ7" data-label="Abre de 2SA: 21 PH, equilibrada"></div>
<div class="tip">Planifica tu redeclaración antes de abrir. Con 12-14 equilibrada redeclararás 1SA; con 18-19 equilibrada saltarás a 2SA; con dos palos declararás el segundo. Si no hay ninguna redeclaración sensata, replantéate la apertura.</div>
<div class="warn">Nunca abras de 1♥ o de 1♠ con solo cuatro cartas. Tu compañero apoyará con tres cartas, contando con un fit de al menos ocho.</div>
`,
    keyPoints: [
      'Abre con 12+ PH; con 10-11 usa la regla del 20 (primera, segunda o tercera posición). En cuarta posición abre con 13+, o con 10-12 si se cumple la regla del 15.',
      '1♥/1♠ prometen cinco cartas; sin mayor quinto abre el menor más largo (1♣ con 3-3, 1♦ con 4-4).',
      'Equilibrada: con 12-14 abre a palo y redeclara 1SA; 15-17, 1SA; 18-19, salta a 2SA; 20-21, 2SA; 22+, 2♣.',
      'Dos palos de cinco cartas: abre el de mayor rango; con 6-5, abre el más largo.',
      'Planifica tu redeclaración antes de abrir.',
    ],
    quiz: [
      {
        q: 'Tienes ♠K6 ♥AQ1083 ♦AJ1074 ♣5 (14 PH). ¿Qué abres?',
        options: ['1♥', '1♦', '1SA', '2♥'],
        answer: 0,
        explain: 'Con dos palos de cinco cartas se abre el de mayor rango. Después de 1♥ puedes declarar los diamantes, y tu compañero puede elegir barato entre tus palos.',
      },
      {
        q: 'Tienes ♠J5 ♥K82 ♦AQ6 ♣KJ1073 (14 PH). ¿Qué abres?',
        options: ['1♣', '1SA', '1♦', 'Paso'],
        answer: 0,
        explain: 'La mano es equilibrada pero solo tiene 14 PH, pocos para 1SA (15-17). Abre el menor más largo, 1♣, y redeclara 1SA para mostrar 12-14 equilibrada.',
      },
      {
        q: 'Tienes ♠KQ4 ♥AJ6 ♦Q1092 ♣KJ5 (16 PH). ¿Qué abres?',
        options: ['1♦', '1SA', '2SA', '1♣'],
        answer: 1,
        explain: '16 PH con distribución 3-3-4-3 es una apertura de 1SA de manual. Una sola voz describe tu fuerza y tu distribución.',
      },
      {
        q: 'Tienes ♠AJ8 ♥Q1074 ♦K92 ♣Q83 (12 PH). ¿Qué abres?',
        options: ['1♥', '1♣', '1♦', 'Paso'],
        answer: 1,
        explain: 'Para abrir un mayor necesitas cinco cartas, así que 1♥ queda descartado. Sin mayor quinto se abre el menor más largo; con 3-3 en menores, es 1♣.',
      },
      {
        q: 'Tienes una mano equilibrada de 18 PH. ¿Cuál es tu plan?',
        options: ['Abrir de 1SA', 'Abrir de 2SA', 'Abrir de uno a palo y saltar a 2SA en la siguiente vuelta', 'Abrir de 2♣'],
        answer: 2,
        explain: '18-19 equilibrada es demasiado fuerte para 1SA (15-17) y demasiado débil para 2SA (20-21). Abre de uno a palo y salta a 2SA en tu siguiente turno.',
      },
    ],
  },

  {
    id: 'responding-to-one-of-a-suit',
    title: 'Responder a la apertura de uno a palo',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Cómo apoya el respondedor, declara un palo nuevo o declara sin triunfo cuando su compañero abre de uno a palo.',
    body: `
<h3>Principios básicos</h3>
<p>La apertura de tu compañero a nivel de uno muestra 12-21 PH, así que con 6 puntos o más debes responder: incluso una mano débil puede bastar para la manga frente a un abridor fuerte. Con menos de 6 puntos, pasa. Tu primera tarea es informar a tu compañero de si hay fit; la segunda, mostrar tu rango de fuerza.</p>

<h3>Responder a 1♥ o 1♠</h3>
<p>Tu compañero tiene al menos cinco cartas, así que con tres cartas de apoyo ya tienes un fit de ocho. Apoyar a tu compañero es tu máxima prioridad.</p>
<table>
<thead><tr><th>Respuesta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>2 del mayor</td><td>6-10 puntos de apoyo, apoyo de 3+ cartas</td></tr>
<tr><td>3 del mayor (salto)</td><td>Apoyo invitativo: 10-12 puntos de apoyo, apoyo de 4+ cartas, invita</td></tr>
<tr><td>2SA</td><td>Jacoby: 13+ puntos, apoyo de 4+ cartas, forcing a manga</td></tr>
<tr><td>4 del mayor</td><td>Débil y distribucional: apoyo de 5+ cartas, menos de 10 PH</td></tr>
<tr><td>Doble salto en palo nuevo</td><td>Splinter: apoyo de 4+ cartas, semifallo o fallo en ese palo, 13-16 puntos</td></tr>
<tr><td>1♠ sobre 1♥</td><td>6+ puntos, 4+ picas, forcing</td></tr>
<tr><td>1SA</td><td>6-10, sin fit, no forcing (sobre 1♥ niega cuatro picas)</td></tr>
<tr><td>Palo nuevo a nivel de 2</td><td>10+ (11+ para ir seguro), 4+ cartas, 5+ para 2♥ sobre 1♠; forcing una vuelta</td></tr>
<tr><td>Salto en palo nuevo</td><td>19+ puntos, forcing a manga</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q84 H:K1063 D:752 C:J94" data-label="Tu compañero abrió de 1♠: declara 2♠"></div>
<p>6 PH y apoyo de tres cartas: apoya a 2♠. No declares 1SA ni busques los corazones a nivel de dos; una respuesta de 2♥ necesita cinco corazones y 10+ puntos.</p>
<div class="hand" data-cards="S:K1074 H:5 D:A963 C:8642" data-label="Tu compañero abrió de 1♠: declara 3♠"></div>
<p>7 PH más 3 por el semifallo con cuatro triunfos = 10 puntos de apoyo: un apoyo invitativo. Tu compañero pasa con un mínimo y declara la manga con más.</p>
<div class="hand" data-cards="S:KQ62 H:A84 D:K1073 C:Q5" data-label="Tu compañero abrió de 1♠: declara 2SA"></div>
<p>14 PH con cuatro triunfos: el 2SA Jacoby fija las picas como triunfo y es forcing a manga, dejando espacio para explorar el slam.</p>
<p>Con un semifallo y 13-16 puntos, un splinter describe mejor la mano: sobre 1♠, ♠KQ74 ♥A853 ♦K962 ♣5 declara 4♣. Consulta la lección “Splinters y Drury inverso”.</p>
<p>Con 6 PH, cinco corazones y un semifallo, ♠4 ♥QJ852 ♦K9763 ♣82, salta a 4♥ sobre 1♥. Los rivales seguro que tienen fit y muchos puntos, y quieres que tengan que adivinar a nivel de cinco.</p>

<h4>Apoyo de tres cartas y 10-12 puntos</h4>
<p>El salto a tres promete cuatro triunfos. Con solo tres, declara primero un palo nuevo y luego apoya el mayor de tu compañero a nivel de tres (invitativo): sobre 1♥, ♠A84 ♥K93 ♦KJ752 ♣64 declara 2♦ y luego 3♥. Con apoyo de tres cartas y 13+, declara primero un palo nuevo y luego la manga en el mayor.</p>

<h3>Responder a 1♣ o 1♦</h3>
<p>Tu compañero puede tener solo tres cartas en el menor, y un fit en un mayor vale más, así que busca primero un mayor.</p>
<table>
<thead><tr><th>Respuesta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Palo nuevo a nivel de 1</td><td>6+ puntos, 4+ cartas, forcing. Declara primero tu palo más largo; con dos palos de cuatro, el más barato (de abajo arriba).</td></tr>
<tr><td>1SA</td><td>6-10, equilibrada, sin mayor de cuatro cartas</td></tr>
<tr><td>2SA</td><td>13-15, equilibrada, sin mayor de cuatro cartas, forcing a manga</td></tr>
<tr><td>3SA</td><td>16-17, equilibrada</td></tr>
<tr><td>Apoyo a 2</td><td>6-10, 5+ tréboles o 4+ diamantes, sin mayor de cuatro cartas</td></tr>
<tr><td>Apoyo con salto a 3</td><td>10-12, el mismo apoyo, invitativo</td></tr>
<tr><td>1♦ – 2♣</td><td>10+ puntos, forcing</td></tr>
<tr><td>Salto en palo nuevo</td><td>19+ puntos</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:J4 H:KQ73 D:Q85 C:9642" data-label="Tu compañero abrió de 1♦: declara 1♥"></div>
<p>8 PH y un mayor de cuatro cartas: muéstralo a nivel de uno. Declarar 1SA podría hacer perder un fit 4-4 en corazones.</p>
<div class="hand" data-cards="S:Q73 H:K82 D:J65 C:Q1074" data-label="Tu compañero abrió de 1♣: declara 1SA"></div>
<p>8 PH, equilibrada, sin mayor de cuatro cartas. Cuatro tréboles no bastan para apoyar un palo que puede ser de tres cartas; 1SA describe la mano.</p>
<p>Con 11 PH, cinco diamantes y sin mayor de cuatro cartas, ♠K5 ♥832 ♦KJ763 ♣A94, apoya 1♦ a 3♦ (10-12). Con 11-12 equilibrada y sin mayor, por ejemplo ♠KQ5 ♥J104 ♦A963 ♣J72 sobre 1♣, no hay ninguna voz directa: responde 1♦ y declara después 2SA para invitar a manga.</p>
<div class="warn">No saltes a 2SA sobre 1♣ o 1♦ con 11 o 12 puntos. Ese salto muestra 13-15 y obliga a tu compañero a llegar a manga. Declara primero un palo nuevo e invita con 2SA en la siguiente vuelta.</div>
<div class="tip">El palo nuevo del respondedor es forcing una vuelta. Puedes declarar un palo con una mano modesta y describir tu fuerza en tu siguiente turno.</div>
`,
    keyPoints: [
      'Responde con 6+ puntos; apoyar el mayor de tu compañero es la máxima prioridad.',
      'Sobre 1♥/1♠: 2M = 6-10 con apoyo de 3+; 3M = 10-12 con 4+; 2SA = 13+ con 4+ (Jacoby); 4M = débil con 5+.',
      'Un palo nuevo a nivel de dos necesita 10+ (11+ para ir seguro) y es forcing; 2♥ sobre 1♠ necesita cinco corazones.',
      'Sobre 1♣/1♦: primero declara un mayor de cuatro cartas a nivel de uno; 1SA = 6-10, 2SA = 13-15, 3SA = 16-17, todas equilibradas y sin mayor.',
      'Con 11-12 equilibrada, declara primero un palo nuevo e invita después con 2SA.',
    ],
    quiz: [
      {
        q: 'Tu compañero abre de 1♥. Tienes ♠K72 ♥Q84 ♦J953 ♣Q62 (8 PH). ¿Qué respondes?',
        options: ['1SA', '2♥', '3♥', '1♠'],
        answer: 1,
        explain: 'Tres cartas de apoyo para un mayor de cinco suponen un fit de ocho; con 6-10 puntos, el apoyo simple a 2♥ se lo dice a tu compañero enseguida. 1♠ requeriría cuatro picas.',
      },
      {
        q: 'Tu compañero abre de 1♠. Tienes ♠Q1075 ♥A94 ♦KQ63 ♣K8 (14 PH). ¿Qué respondes?',
        options: ['4♠', '3♠', '2SA', '2♦'],
        answer: 2,
        explain: '2SA (Jacoby) muestra 13+ con 4+ triunfos y es forcing a manga. 3♠ sería solo un apoyo invitativo y 4♠ es un apoyo débil y distribucional, así que ambas voces se quedarían cortas para esta mano.',
      },
      {
        q: 'Tu compañero abre de 1♦. Tienes ♠AJ85 ♥K1062 ♦74 ♣953 (8 PH). ¿Qué respondes?',
        options: ['1♠', '1♥', '1SA', '2♦'],
        answer: 1,
        explain: 'Con dos palos de cuatro cartas, declara de abajo arriba: primero 1♥. Si tu compañero tiene cuatro picas, puede declarar 1♠ a continuación, así que no se pierde ninguno de los dos fits.',
      },
      {
        q: 'Tu compañero abre de 1♣. Tienes ♠K94 ♥Q73 ♦AJ5 ♣K1062 (13 PH). ¿Qué respondes?',
        options: ['1SA', '2SA', '3SA', '1♦'],
        answer: 1,
        explain: 'Equilibrada, sin mayor de cuatro cartas, 13 PH: 2SA muestra 13-15 y es forcing a manga. 1♦ prometería cuatro diamantes y 3SA muestra 16-17.',
      },
      {
        q: 'Tu compañero abre de 1♠. Tienes ♠5 ♥AQ94 ♦K8 ♣QJ7532 (12 PH). ¿Qué respondes?',
        options: ['2♥', '2♣', '1SA', '3♣'],
        answer: 1,
        explain: 'Una respuesta de 2♥ a 1♠ promete cinco corazones. Declara tu palo largo, 2♣, que es forcing; quizá tengas ocasión de mostrar los corazones más tarde. 3♣ sería un salto en palo nuevo con 19+.',
      },
    ],
  },

  {
    id: 'openers-rebid',
    title: 'La redeclaración del abridor',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Cómo usa el abridor su segunda voz para mostrar una mano mínima, intermedia o máxima y describir su distribución, incluidos los reverses y los saltos en palo nuevo.',
    body: `
<h3>Primero, clasifica tu mano</h3>
<p>Tu apertura abarcaba un rango amplio, 12-21. La redeclaración lo acota. Vuelve a contar tus puntos a la luz de la respuesta de tu compañero (suma puntos de apoyo si habéis encontrado fit) y sitúa la mano en una de estas tres franjas:</p>
<table>
<thead><tr><th>Franja</th><th>Puntos</th><th>Acción típica</th></tr></thead>
<tbody>
<tr><td>Mínima</td><td>12-15</td><td>La voz descriptiva más barata</td></tr>
<tr><td>Intermedia</td><td>16-18</td><td>Un salto, o un reverse con 17+</td></tr>
<tr><td>Máxima</td><td>19-21</td><td>Declarar la manga, o forzar con un salto en palo nuevo</td></tr>
</tbody>
</table>

<h3>Tras una respuesta a nivel de uno</h3>
<div class="auction" data-calls="1D P 1S P" data-dealer="N"></div>
<p>El respondedor tiene 6+ puntos y cuatro o más picas. Las opciones del abridor:</p>
<table>
<thead><tr><th>Redeclaración</th><th>Puntos</th><th>Muestra</th></tr></thead>
<tbody>
<tr><td>2♠</td><td>12-15</td><td>Apoyo de cuatro cartas en picas</td></tr>
<tr><td>3♠</td><td>16-18</td><td>Apoyo de cuatro cartas, invitativo</td></tr>
<tr><td>4♠</td><td>19-21</td><td>Apoyo de cuatro cartas, para jugar</td></tr>
<tr><td>1SA</td><td>12-14</td><td>Equilibrada</td></tr>
<tr><td>2SA (salto)</td><td>18-19</td><td>Equilibrada, invitativo</td></tr>
<tr><td>2♦</td><td>12-15</td><td>Normalmente seis diamantes</td></tr>
<tr><td>3♦ (salto)</td><td>16-18</td><td>Un buen palo de seis cartas</td></tr>
<tr><td>2♣ (palo nuevo más bajo)</td><td>12-18</td><td>Cuatro o más tréboles, no forcing</td></tr>
<tr><td>2♥ (reverse)</td><td>17+</td><td>Más diamantes que corazones, forcing una vuelta</td></tr>
<tr><td>3♣ (salto en palo nuevo)</td><td>19+</td><td>Forcing a manga</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:K84 H:Q5 D:AJ963 C:K72" data-label="1♦ – 1♠: redeclara 1SA"></div>
<p>13 PH y equilibrada: 1SA. Apoyar a 2♠ promete cuatro picas, y tu compañero puede tener solo cuatro.</p>
<div class="hand" data-cards="S:AQ85 H:72 D:AKJ63 C:Q8" data-label="1♦ – 1♠: redeclara 3♠"></div>
<p>16 PH más 1 por cada uno de los dos doubletons (corazones y tréboles) con cuatro triunfos: 16 + 1 + 1 = 18 puntos de apoyo, una mano intermedia. Salta a 3♠ para invitar a manga. Con un mínimo (12-15) apoya a 2♠; con 19+ declara 4♠.</p>

<h3>Reverses</h3>
<p>Un <strong>reverse</strong> es una redeclaración en un palo nuevo a nivel de dos que tiene <em>mayor</em> rango que tu primer palo, como 1♦ – 1♠ – 2♥ o 1♣ – 1♥ – 2♦. Para dar preferencia a tu primer palo, tu compañero ahora tiene que subir a nivel de tres, así que un reverse promete fuerza extra (17+) y es forcing una vuelta. También muestra que tu primer palo es más largo que el segundo.</p>
<div class="hand" data-cards="S:5 H:AQ74 D:AKJ85 C:K63" data-label="1♦ – 1♠: reverse a 2♥"></div>
<p>17 PH, cinco diamantes y cuatro corazones: 2♥ muestra la distribución y los valores extra en una sola voz.</p>
<div class="warn">Con un mínimo, no hagas un reverse. Con ♠5 ♥AQ74 ♦AJ985 ♣Q63 (13 PH) después de 1♦ – 1♠, redeclara 2♦. No perderás un fit en corazones: con cuatro corazones y cuatro picas tu compañero habría respondido primero 1♥.</div>

<h3>Saltos en palo nuevo y repeticiones con salto</h3>
<p>Un salto en un palo nuevo (1♦ – 1♠ – 3♣) muestra 19+ y es forcing a manga. Una repetición con salto de tu propio palo (1♥ – 1♠ – 3♥) muestra 16-18 y un buen palo de seis cartas; es invitativa, no forcing.</p>
<div class="hand" data-cards="S:K6 H:A4 D:AKJ63 C:KQ104" data-label="1♦ – 1♠: salto en palo nuevo a 3♣"></div>
<p>20 PH: demasiado fuerte para un 2♣ no forcing y fuera del rango 18-19 de una redeclaración de 2SA. 3♣ es forcing a manga mientras buscas el mejor contrato.</p>

<h3>Tras 1SA o un apoyo</h3>
<p>Tras 1♠ – 1SA, el respondedor tiene 6-10 y normalmente no tiene fit. Pasa con un mínimo equilibrado; repite un palo de seis cartas; muestra un segundo palo (un palo nuevo más bajo que el primero no es forcing); o invita con un salto cuando tengas 16-18 o más. Tras 1♠ – 2♠, el respondedor tiene 6-10 con apoyo: pasa con un mínimo, declara 3♠ para invitar con una mano intermedia y declara 4♠ con un máximo. Aquí el cómputo de perdedoras es una buena guía: con 6 perdedoras invita; con 5, declara la manga.</p>
<div class="tip">Una respuesta a nivel de dos (1♠ – 2♣) ya muestra 10+ y es forcing una vuelta, así que el abridor puede hacer una redeclaración natural y descriptiva sin necesidad de saltar solo para mantener viva la subasta.</div>
`,
    keyPoints: [
      'Clasifica la mano: mínima 12-15, intermedia 16-18, máxima 19-21.',
      'Redeclarar 1SA = 12-14 equilibrada; saltar a 2SA = 18-19 equilibrada.',
      'Apoya el mayor del respondedor con cuatro cartas: a nivel de dos con un mínimo, a nivel de tres con una mano intermedia y a manga con un máximo.',
      'Un reverse (palo nuevo de mayor rango a nivel de dos) muestra 17+, es forcing e indica que el primer palo es más largo.',
      'Un salto en palo nuevo del abridor muestra 19+ y es forcing a manga.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠. Tienes ♠Q4 ♥K83 ♦AQ1063 ♣K72 (14 PH). ¿Cuál es tu redeclaración?',
        options: ['1SA', '2♦', '2SA', '2♠'],
        answer: 0,
        explain: 'La mano es equilibrada con 12-14 PH, justo lo que muestra 1SA. 2♦ sugiere seis diamantes y 2♠ promete cuatro picas.',
      },
      {
        q: '1♣ – 1♥. Tienes ♠A5 ♥KQ94 ♦K6 ♣AQ872 (18 PH). ¿Cuál es tu redeclaración?',
        options: ['2♥', '3♥', '4♥', '2SA'],
        answer: 2,
        explain: 'Con apoyo de cuatro cartas cuenta puntos de apoyo: 18 PH + 1 por cada doubleton = 20, un máximo. Declara la manga: 4♥.',
      },
      {
        q: '¿Cuál de estas subastas contiene un reverse del abridor?',
        options: ['1♥ – 1♠ – 2♣', '1♦ – 1♠ – 2♥', '1♠ – 1SA – 2♥', '1♣ – 1♥ – 1♠'],
        answer: 1,
        explain: 'Los corazones tienen mayor rango que los diamantes y 2♥ está a nivel de dos, así que tu compañero tiene que subir a 3♦ para preferir el primer palo del abridor. En las demás subastas el segundo palo es de menor rango o se declara a nivel de uno.',
      },
      {
        q: '1♦ – 1♥. Tienes ♠A6 ♥J4 ♦AKJ852 ♣K93 (16 PH). ¿Cuál es tu redeclaración?',
        options: ['2♦', '3♦', '2SA', '1SA'],
        answer: 1,
        explain: 'Una mano intermedia con un buen palo de seis cartas: el salto a 3♦ muestra 16-18 e invita. 2♦ mostraría un mínimo, y 1SA o 2SA, una mano equilibrada.',
      },
      {
        q: '1♠ – 2♠. Tienes ♠AQJ84 ♥K73 ♦A62 ♣95 (14 PH). ¿Qué haces?',
        options: ['Paso', '3♠', '4♠', '2SA'],
        answer: 0,
        explain: '14 PH + 1 por la quinta pica = 15, un mínimo. El LTC coincide: ♠AQJ 1, ♥K73 2, ♦A62 2, ♣95 2 = 7 perdedoras, lo propio de una apertura mínima. Frente a un apoyo de 6-10 la manga es improbable, así que pasa.',
      },
    ],
  },

  {
    id: 'notrump-bidding',
    title: 'Aperturas de sin triunfo y sus respuestas',
    topic: 'Bidding',
    level: 'Beginner',
    summary: 'Responder a 1SA y a 2SA con Stayman, los transfers de Jacoby, el transfer a menor, las invitaciones y el 4SA cuantitativo.',
    body: `
<h3>Por qué las aperturas de sin triunfo son fáciles</h3>
<p>1SA muestra 15-17 PH y una mano equilibrada (puede incluir un palo de cinco cartas). Como la mano del abridor está tan bien definida, el respondedor suele saber enseguida dónde debe jugar la pareja y se convierte en el capitán. Suma tus puntos a los 15-17 de tu compañero: con 25 o más entre los dos quieres jugar manga.</p>

<h3>Respuestas a 1SA</h3>
<table>
<thead><tr><th>Respuesta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Paso</td><td>0-7 sin mayor largo</td></tr>
<tr><td>2♣</td><td>Stayman: 8+ PH y un mayor de cuatro cartas</td></tr>
<tr><td>2♦</td><td>Transfer: 5+ corazones, cualquier fuerza. El abridor declara 2♥.</td></tr>
<tr><td>2♥</td><td>Transfer: 5+ picas, cualquier fuerza. El abridor declara 2♠.</td></tr>
<tr><td>2♠</td><td>Transfer a tréboles: el abridor declara 3♣. Una mano débil con un menor largo; pasa sobre 3♣ o declara 3♦.</td></tr>
<tr><td>2SA</td><td>8-9, invitativo</td></tr>
<tr><td>3SA</td><td>10-15, para jugar</td></tr>
<tr><td>4♣</td><td>Gerber: pregunta por Ases</td></tr>
<tr><td>4♦ / 4♥</td><td>Transfer Texas: 6+ corazones / picas y valores de manga. El abridor declara 4♥ / 4♠.</td></tr>
<tr><td>4SA</td><td>16-17, cuantitativo: invita a 6SA</td></tr>
</tbody>
</table>

<h3>Stayman</h3>
<p>2♣ pregunta al abridor por un mayor de cuatro cartas. El abridor responde 2♦ (sin mayor de cuatro), 2♥ (cuatro corazones, quizá también cuatro picas) o 2♠ (cuatro picas, no cuatro corazones). Después:</p>
<ul>
<li>Si hay fit, apoya a tres para invitar o a cuatro para jugar.</li>
<li>Si no, declara 2SA con 8-9 o 3SA con 10-15.</li>
<li>Si el abridor ha mostrado corazones y tú tienes picas, declara 2SA o 3SA. El abridor, que puede tener los dos mayores, corrige a picas si tiene cuatro.</li>
</ul>
<div class="hand" data-cards="S:KJ84 H:Q1063 D:A72 C:85" data-label="Tu compañero abrió de 1SA: declara 2♣"></div>
<p>10 PH y dos mayores de cuatro cartas. Sobre 2♦ declara 3SA; sobre 2♥, 4♥; sobre 2♠, 4♠. Stayman necesita 8+ PH porque, tras una respuesta de 2♦, tienes que poder declarar al menos 2SA.</p>

<h3>Transfers de Jacoby</h3>
<p>Con un mayor de cinco o más cartas, haz un transfer: declara el palo inmediatamente inferior y deja que el abridor declare el tuyo. La mano fuerte pasa a ser la declarante y la salida llega hacia ella. Los transfers sirven con cualquier fuerza, desde nada hasta valores de slam.</p>
<div class="hand" data-cards="S:Q97542 H:83 D:J62 C:74" data-label="Tu compañero abrió de 1SA: 2♥ y luego paso"></div>
<p>3 PH. 2♠ se jugará mucho mejor que 1SA. Haz el transfer con 2♥ y pasa sobre el 2♠ del abridor.</p>
<p>Una vez completado el transfer, el respondedor continúa:</p>
<table>
<thead><tr><th>Siguiente voz</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Paso</td><td>0-7, cierre</td></tr>
<tr><td>2SA</td><td>8-9 con exactamente cinco cartas en el mayor (elige el abridor)</td></tr>
<tr><td>3 del mayor</td><td>8-9 con seis o más cartas, invitativo</td></tr>
<tr><td>3SA</td><td>10-15 con exactamente cinco (el abridor elige entre 3SA y 4 del mayor)</td></tr>
<tr><td>4 del mayor</td><td>10-15 con seis o más, para jugar (con transfers Texas, declara directamente 4♦ o 4♥)</td></tr>
<tr><td>Palo nuevo</td><td>Natural y forcing</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:6 H:KJ1074 D:A85 C:Q963" data-label="Tu compañero abrió de 1SA: 2♦ y luego 3SA"></div>
<p>10 PH y cinco corazones. Haz el transfer y luego declara 3SA. Con tres o más corazones, el abridor declara 4♥; con doubleton, pasa.</p>
<p>Con apoyo de cuatro cartas y 17 PH, el abridor <strong>superacepta</strong> saltando: 1SA – 2♦ – 3♥. El respondedor declara entonces la manga con casi cualquier mano, porque el fit es de al menos nueve cartas y el abridor está en lo más alto de su rango.</p>

<h3>Menores largos, invitaciones y tentativas de slam</h3>
<p>Con una mano débil y seis o más cartas en un menor, declara 2♠: el abridor debe declarar 3♣, y tú pasas con tréboles o declaras 3♦ con diamantes. Con ♠52 ♥742 ♦J3 ♣Q108653, 1SA – 2♠ – 3♣ – paso.</p>
<p>2SA invita a manga con 8-9. El abridor pasa con 15, declara 3SA con 17 y decide según su criterio con 16 (acepta con buenos dieces y nueves o con un palo de cinco). Aquí 4SA no es Blackwood: muestra 16-17 y pide al abridor que declare 6SA con un máximo. Con ♠KQ5 ♥AJ4 ♦KJ63 ♣Q72 (16 PH), declara 4SA: 16 + 15-17 = 31-33 entre los dos, así que el slam solo es bueno si el abridor está en lo más alto de su rango.</p>

<h3>Responder a 2SA</h3>
<p>La apertura de 2SA muestra 20-21. Se usan las mismas herramientas un nivel más arriba: 3♣ es Stayman, 3♦ y 3♥ son transfers, 4♦ y 4♥ son transfers Texas, 3SA muestra 4-10 puntos y 4SA (11-12) es cuantitativo. Incluso 4 puntos bastan para subir a manga.</p>
<div class="tip">Con un mayor de cinco cartas y fuerza para manga, haz primero el transfer y después declara 3SA. El abridor, que conoce su mano y sabe que tienes cinco cartas, toma la decisión final entre 3SA y cuatro del mayor.</div>
<div class="warn">No uses Stayman con una mano equilibrada de 8+ sin mayor de cuatro cartas. Acabarás adivinando; declara simplemente 2SA o 3SA.</div>
`,
    keyPoints: [
      '1SA = 15-17 equilibrada; el respondedor suma puntos y fija el contrato.',
      '2♣ Stayman (8+, un mayor de cuatro cartas): respuestas 2♦ ninguno, 2♥ corazones (quizá también picas), 2♠ solo picas.',
      '2♦ y 2♥ son transfers a corazones y a picas con cualquier fuerza; 2♠ es un transfer a tréboles para una mano débil con un menor largo.',
      '2SA = 8-9 invitativo, 3SA = 10-15, 4SA = 16-17 cuantitativo (no es Blackwood).',
      'El abridor superacepta un transfer con apoyo de cuatro cartas y 17 saltando a tres del mayor.',
      'Sobre 2SA: 3♣ Stayman, 3♦/3♥ transfers, 4♦/4♥ Texas, 3SA con 4-10, 4SA cuantitativo.',
    ],
    quiz: [
      {
        q: 'Tu compañero abre de 1SA. Tienes ♠J8752 ♥84 ♦932 ♣Q65 (3 PH). ¿Cuál es tu plan?',
        options: ['Paso', '2♥ (transfer) y luego pasar sobre 2♠', 'Declarar 2♠', 'Declarar 2♣'],
        answer: 1,
        explain: 'Una mano débil con cinco picas se juega mejor en 2♠ que en 1SA, porque los triunfos largos dan bazas. Haz el transfer con 2♥ y pasa. 2♠ sería un transfer a tréboles, y Stayman (2♣) necesita 8+.',
      },
      {
        q: '1SA – 2♣ – 2♥. Tienes ♠KJ84 ♥A962 ♦Q73 ♣J5 (11 PH). ¿Y ahora?',
        options: ['3SA', '4♥', '3♥', '2SA'],
        answer: 1,
        explain: 'El abridor tiene cuatro corazones, así que hay un fit 4-4, y 11 + 15-17 bastan para la manga. Declara 4♥; un fit 4-4 en un mayor suele jugarse mejor que 3SA.',
      },
      {
        q: 'Abriste de 1SA con ♠KQ75 ♥AJ83 ♦K4 ♣Q62. Tu compañero declara 2♣. ¿Qué respondes?',
        options: ['2♥', '2♠', '2♦', '2SA'],
        answer: 0,
        explain: 'Con los dos mayores, responde primero 2♥. Si tu compañero tiene picas y no corazones, declarará 2SA o 3SA y tú corregirás a picas.',
      },
      {
        q: '1SA – 2♦ – 2♥ – 3SA. Abriste con tres corazones. ¿Qué haces?',
        options: ['Pasar, porque tu compañero ha elegido 3SA', 'Declarar 4♥: tu compañero ha mostrado cinco corazones, así que tenéis un fit de ocho cartas', 'Declarar 4SA', 'Declarar 3♥'],
        answer: 1,
        explain: 'Transfer y luego 3SA muestra exactamente cinco corazones y valores de manga. Con apoyo de tres cartas el abridor elige 4♥; con doubleton, pasa sobre 3SA.',
      },
      {
        q: 'Tu compañero abre de 2SA. Tienes ♠Q8642 ♥K7 ♦J73 ♣1052 (6 PH). ¿Cuál es tu plan?',
        options: ['Declarar 3♠', 'Declarar 3♥ y luego 3SA sobre 3♠', 'Declarar 3SA', 'Paso'],
        answer: 1,
        explain: '20-21 frente a 6 bastan para la manga. Haz el transfer con 3♥ y luego declara 3SA para mostrar exactamente cinco picas; el abridor elige 4♠ con apoyo de tres cartas o pasa con dos.',
      },
    ],
  },

  {
    id: 'planning-the-play',
    title: 'Planificar el carteo',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Antes de jugar a la primera baza, cuenta tus ganadoras (a sin triunfo) o tus perdedoras (en un contrato a palo) y haz un plan.',
    body: `
<h3>Para y planifica antes de la primera baza</h3>
<p>Cuando baja el muerto, la mayoría de los principiantes juegan una carta a la primera baza de inmediato. Los buenos jugadores se detienen. La primera baza es a menudo donde se gana o se pierde el contrato, y no puedes planificarla hasta haber visto el panorama completo. Sigue siempre la misma rutina:</p>
<ol>
<li><strong>Cuenta.</strong> A sin triunfo, cuenta tus ganadoras seguras: las bazas que puedes hacer sin ceder la mano. En un contrato a palo, cuenta las perdedoras de la mano con los triunfos largos.</li>
<li><strong>Compara.</strong> ¿Cuántas bazas extra necesitas (sin triunfo), o de cuántas perdedoras tienes que deshacerte (palo)?</li>
<li><strong>Busca las fuentes.</strong> Las bazas extra salen de afirmar palos largos, expulsar cartas altas, los impasses y los fallos en la mano corta en triunfos. Las perdedoras desaparecen fallándolas en el muerto, descartándolas sobre las ganadoras del muerto o con impasses.</li>
<li><strong>Busca los peligros.</strong> ¿Cuántas veces tendrás que ceder la mano? ¿Qué rival es peligroso? ¿Tienes las entradas que necesitas?</li>
<li><strong>Decide el orden de juego</strong>, empezando por qué carta jugar del muerto y qué mano debe ganar la primera baza.</li>
</ol>

<h3>Un ejemplo a sin triunfo: cuenta las ganadoras</h3>
<div class="deal" data-n="S:A5 H:KQJ10 D:742 C:8653" data-s="S:K83 H:654 D:AKQ C:A972" data-caption="3SA por Sur. Oeste sale con la ♠Q."></div>
<div class="auction" data-calls="1NT P 2C P 2D P 3NT P P P" data-dealer="S"></div>
<p><strong>Cuenta:</strong> ♠AK (2), ♦AKQ (3), ♣A (1): seis ganadoras seguras. Te faltan tres.</p>
<p><strong>Fuentes:</strong> los corazones. Una vez expulsado el ♥A, el KQJ10 del muerto da tres bazas. Los tréboles no ofrecen nada: los defensores tienen el K, la Q, el J y el 10.</p>
<p><strong>Peligro:</strong> los defensores pueden retener el ♥A hasta la tercera vuelta. Entonces el último corazón del muerto es ganador, pero necesitas una entrada para llegar a él. La única entrada lateral del muerto es el ♠A.</p>
<p><strong>Plan:</strong> juega pequeño del muerto en la primera baza y gana con el ♠K en tu mano, conservando el ♠A como entrada. Después juega corazones enseguida. Tomen los defensores su As cuando lo tomen, tienes nueve bazas: dos picas, tres corazones, tres diamantes y un trébol. Si por descuido ganas la primera baza con el ♠A, un defensor que retenga el ♥A hasta la tercera vuelta deja aislado el cuarto corazón del muerto, y solo haces ocho bazas.</p>
<div class="tip">Expulsa pronto las cartas altas de los rivales, mientras aún tienes paradas en todos los palos. Cobra tus ganadoras seguras al final, no al principio.</div>

<h3>Un ejemplo a palo: cuenta las perdedoras</h3>
<div class="deal" data-n="S:1064 H:A65 D:84 C:AJ876" data-s="S:AKQJ5 H:K84 D:A732 C:2" data-caption="4♠ por Sur. Oeste sale con la ♥Q."></div>
<div class="auction" data-calls="1S P 2S P 4S P P P" data-dealer="S"></div>
<p><strong>Cuenta las perdedoras de la mano de Sur:</strong> en picas, ninguna; en corazones, una (la tercera vuelta); en diamantes, tres (el 7, el 3 y el 2); en tréboles, ninguna (el ♣A del muerto cubre tu semifallo). Total: cuatro. Puedes permitirte tres.</p>
<p><strong>Fuente:</strong> el muerto solo tiene dos diamantes. Tras el ♦A y una vuelta más, el muerto queda con fallo y puede fallar tu tercer diamante con un triunfo pequeño. Ese fallo es una baza extra porque lo hace la mano <em>corta</em> en triunfos: los triunfos de Sur son ganadores de todos modos.</p>
<p><strong>Peligro:</strong> si primero das tres vueltas de triunfo, al muerto no le quedan triunfos para el fallo. Tienes que conservar al menos un triunfo en el muerto hasta haber hecho el fallo.</p>
<p><strong>Plan:</strong> gana la salida con el ♥A del muerto, juega un diamante a tu As y cede un diamante. Si los defensores ganan y juegan triunfo (su mejor defensa), gánalo y falla enseguida un diamante en el muerto. Después destriunfa. Pierdes un corazón y dos diamantes.</p>
<div class="warn">“Destriunfa siempre primero” es un buen hábito con una gran excepción: cuando necesitas los triunfos del muerto para fallar, haz los fallos antes de que se acaben los triunfos.</div>

<h3>Contar es un hábito</h3>
<p>Contar lleva unos segundos y no hacerlo sale carísimo. A sin triunfo, si tus ganadoras seguras ya alcanzan el objetivo, cóbralas y evita riesgos innecesarios. Si te faltan bazas, decide de dónde saldrán <em>antes</em> de tocar una carta, porque el orden de juego y la elección de la mano que gana la primera baza dependen a menudo de ello.</p>
`,
    keyPoints: [
      'Planifica antes de jugar a la primera baza: cuenta, compara, busca las fuentes y los peligros, y luego decide el orden.',
      'A sin triunfo cuenta las ganadoras seguras; en un contrato a palo, las perdedoras de la mano con los triunfos largos.',
      'Expulsa pronto las cartas altas de los rivales, mientras aún tienes paradas.',
      'Los fallos en la mano corta en triunfos (normalmente el muerto) ganan bazas; conserva los triunfos del muerto hasta haber hecho los fallos.',
      'Protege las entradas que vas a necesitar más tarde.',
    ],
    quiz: [
      {
        q: '¿Qué debes contar primero en un contrato a sin triunfo?',
        options: ['Tus perdedoras', 'Tus ganadoras seguras', 'Tus triunfos', 'Los PH de los rivales'],
        answer: 1,
        explain: 'A sin triunfo no hay fallos, así que la medida natural son las bazas que puedes hacer sin ceder la mano. Lo que falta te dice cuántas bazas tienen que salir de palos largos o de impasses.',
      },
      {
        q: '¿Qué fallo gana una baza?',
        options: ['Un fallo en la mano con los triunfos largos', 'Un fallo en la mano con los triunfos cortos', 'Los dos por igual', 'Ninguno'],
        answer: 1,
        explain: 'Tus triunfos largos harían baza de todos modos, así que fallar con ellos solo gasta una ganadora. Un fallo con los triunfos de la mano corta (normalmente los del muerto) gana una baza que esos triunfos pequeños no podrían hacer de otro modo.',
      },
      {
        q: 'En la mano de 3SA de arriba, ¿por qué ganar la primera baza con el ♠K en la mano y no con el ♠A del muerto?',
        options: ['Para conservar el ♠A del muerto como entrada a los corazones', 'Porque el Rey es la carta más alta', 'Para retener la parada de picas', 'Para desbloquear el palo de picas'],
        answer: 0,
        explain: 'Si los defensores retienen el ♥A hasta la tercera vuelta, el último corazón del muerto es ganador pero no hay forma de llegar a él, salvo que el muerto conserve el ♠A.',
      },
      {
        q: 'En la mano de 4♠ de arriba, ¿qué sale mal si el declarante da tres vueltas de triunfo de inmediato?',
        options: ['Nada, es la jugada más segura', 'Al muerto no le queda ningún triunfo para fallar el tercer diamante', 'Los defensores pueden fallar un corazón', 'El declarante pierde el control de los tréboles'],
        answer: 1,
        explain: 'El muerto empezó con solo tres triunfos. Dar tres vueltas los gasta todos, y al declarante le quedan tres perdedoras de diamante más un corazón: una de más.',
      },
    ],
  },

  {
    id: 'opening-leads',
    title: 'Las salidas',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Cómo elegir el palo de salida y la carta correcta dentro de él, contra sin triunfo y contra contratos a palo.',
    body: `
<h3>Dos decisiones: el palo y la carta</h3>
<p>La salida es la única carta que juegas sin ver el muerto, así que compensa seguir buenos hábitos. Primero elige el palo a partir de la subasta y de tu mano; después sal con la carta convencional de ese palo, para que tu compañero pueda deducir lo que tienes.</p>

<h3>Elegir el palo contra sin triunfo</h3>
<ul>
<li>Si tu compañero ha declarado un palo, sal en él salvo que tengas una alternativa muy buena.</li>
<li>Si no, sal en tu palo más largo y más fuerte. El sin triunfo es una carrera: los defensores intentan afirmar sus cartas largas antes de que el declarante cobre sus propias bazas.</li>
<li>Prefiere los palos no declarados. Evita los palos que han declarado los rivales.</li>
<li>Con una mano muy débil y sin entradas, un palo largo que nunca podrás cobrar puede no servir de nada; salir en el probable palo largo de tu compañero (a menudo un mayor que los rivales no han nombrado) puede ser mejor.</li>
</ul>

<h3>Elegir el palo contra un contrato a palo</h3>
<ul>
<li><strong>Buenas salidas:</strong> la cabeza de una secuencia; el palo de tu compañero; un semifallo (sobre todo si tienes el As de triunfo o tu compañero puede tener una entrada); el As desde AK.</li>
<li><strong>Sal de triunfo</strong> cuando la subasta sugiera que el muerto va a fallar las perdedoras del declarante: el declarante ha mostrado dos palos y el muerto ha preferido el segundo, o el muerto ha mostrado un corto.</li>
<li><strong>Evita:</strong> salir por debajo de un As (el declarante puede hacer baza con un Rey semifallo y quizá nunca cobres tu As); salir por debajo de un Rey hacia el AQ del declarante; salir de un honor doubleton como Qx.</li>
</ul>
<div class="warn">Contra un contrato a palo, nunca salgas por debajo de un As. Si tienes que salir en ese palo, sal con el As.</div>

<h3>Con qué carta salir</h3>
<table>
<thead><tr><th>Tenencia</th><th>Contra sin triunfo</th><th>Contra un palo</th></tr></thead>
<tbody>
<tr><td>K Q J 5</td><td>K</td><td>K</td></tr>
<tr><td>Q J 10 4</td><td>Q</td><td>Q</td></tr>
<tr><td>J 10 9 4</td><td>J</td><td>J</td></tr>
<tr><td>10 9 8 3</td><td>10</td><td>10</td></tr>
<tr><td>K Q 10 5</td><td>K</td><td>K</td></tr>
<tr><td>K J 10 5</td><td>J</td><td>J</td></tr>
<tr><td>Q 10 9 4</td><td>10</td><td>10</td></tr>
<tr><td>A K 7 4</td><td>A</td><td>A</td></tr>
<tr><td>K J 8 5 3</td><td>5 (cuarta mejor)</td><td>5, aunque salir desde un Rey es arriesgado</td></tr>
<tr><td>A 10 6 3</td><td>3 (cuarta mejor)</td><td>Evítalo; si no hay más remedio, el A</td></tr>
<tr><td>Q 8 5</td><td>5</td><td>5</td></tr>
<tr><td>8 5 2</td><td>8 (la más alta de nada)</td><td>8</td></tr>
<tr><td>9 4</td><td>9</td><td>9</td></tr>
<tr><td>7 (semifallo)</td><td>rara vez se sale</td><td>7, a menudo una buena salida</td></tr>
</tbody>
</table>
<p>Las reglas que hay detrás de la tabla: sal con la cabeza de una secuencia (tres cartas seguidas, o dos seguidas más la siguiente salvo una, como en KQ10); desde una secuencia interior como KJ10 o Q109, sal con la más alta de las cartas seguidas (el J o el 10); sal con el As desde AK; sal con la más alta de un doubleton y con la más alta de tres cartas pequeñas; desde un honor con dos o tres cartas pequeñas, sal con una baja (tercera mejor con tres cartas, cuarta mejor con cuatro); y contra sin triunfo sal con la cuarta mejor de tu palo largo.</p>

<h3>Ejemplos</h3>
<div class="hand" data-cards="S:KJ1074 H:83 D:Q62 C:A95" data-label="Te toca salir contra 1SA – 3SA"></div>
<p>Sal con el ♠J, la más alta de la secuencia interior KJ10. Las picas son tu palo largo, y la salida del J también le dice a tu compañero que tienes el 10 pero no la Q.</p>
<div class="hand" data-cards="S:73 H:AK5 D:QJ104 C:9862" data-label="Te toca salir contra 1♠ – 2♠ – 4♠"></div>
<p>Dos opciones seguras: el ♥A (As desde AK) y la ♦Q (cabeza de secuencia). El ♥A gana la baza y te deja ver el muerto antes de decidir qué hacer, mientras la señal de tu compañero te dice si debes continuar los corazones.</p>
<div class="auction" data-calls="1S P 1NT P 2D P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ109 H:A73 D:852 C:J64" data-label="Este: te toca salir contra 2♦"></div>
<p>Sal de triunfo. Norte tiene cinco o más picas y cuatro o más diamantes, y la preferencia de Sur por los diamantes sugiere un corto en picas. Con tus picas fuertes, el declarante solo puede salvar sus perdedoras de pica fallándolas en el muerto; cada vuelta de triunfo que juegues elimina uno de los fallos del muerto.</p>
<div class="tip">Después de cada salida, pregúntate qué le dice a tu compañero. Las salidas convencionales permiten al otro defensor contar el palo desde la primera baza.</div>
`,
    keyPoints: [
      'Elige primero el palo: el de tu compañero y, si no, tu palo largo contra sin triunfo; secuencias, el palo de tu compañero, semifallos o triunfo contra un palo.',
      'Sal con la cabeza de una secuencia; desde KJ10, con el J; desde Q109, con el 10; desde AK, con el A.',
      'Contra sin triunfo, sal con la cuarta mejor de tu palo más largo y más fuerte.',
      'Sal con la más alta de un doubleton y de tres cartas pequeñas; con una baja desde un honor con dos o tres pequeñas.',
      'Contra un contrato a palo nunca salgas por debajo de un As; sal de triunfo cuando sea probable que el muerto falle.',
    ],
    quiz: [
      {
        q: 'Te toca salir contra 3SA y tu palo largo es ♠KQ1086. ¿Con qué carta sales?',
        options: ['♠K', '♠8', '♠6', '♠Q'],
        answer: 0,
        explain: 'KQ10 es una secuencia rota, así que sales con el Rey. Es seguro y empieza a afirmar el palo; la cuarta mejor (el 8) podría regalar al declarante una baza barata con el J.',
      },
      {
        q: 'Contra 4♥, ¿cuál de estas salidas es la peor?',
        options: ['La ♦Q desde ♦QJ10', 'El ♣2 desde ♣AJ62', 'Un semifallo de pica', 'El ♣8 desde ♣852'],
        answer: 1,
        explain: 'Salir por debajo de un As contra un contrato a palo es la salida perdedora clásica: el declarante puede ganar una baza barata con el Rey o la Dama, y tu As puede acabar fallado.',
      },
      {
        q: 'Tu compañero intervino con 1♠ y los rivales llegaron a 3SA. Tienes ♠Q85. ¿Con qué carta sales?',
        options: ['♠Q', '♠8', '♠5', 'Otro palo'],
        answer: 2,
        explain: 'Sal en el palo de tu compañero, y desde un honor con dos cartas pequeñas sal con una baja. Salir con la Q podría desperdiciarla si tu compañero tiene el AJ; si la conservas, tu bando puede capturar con ella más tarde uno de los honores del declarante.',
      },
      {
        q: 'Decides salir desde ♦94. ¿Con qué carta?',
        options: ['♦9', '♦4', 'Cualquiera, da igual', 'Ninguna: nunca se sale de un doubleton'],
        answer: 0,
        explain: 'Sal con la más alta de un doubleton. Cuando después juegues el 4, tu compañero verá el alta-baja y sabrá que empezaste con dos cartas.',
      },
      {
        q: '¿Cuándo es más atractiva una salida de triunfo?',
        options: ['Cuando tienes el As de triunfo', 'Cuando la subasta sugiere que el muerto es corto en el palo lateral del declarante y va a fallar', 'Cuando tienes un semifallo en un palo lateral', 'Siempre que los rivales jueguen en un mayor'],
        answer: 1,
        explain: 'Las salidas de triunfo reducen los fallos que puede hacer el muerto. Son mejores cuando el declarante ha mostrado un segundo palo, el muerto ha dado preferencia o se sabe que el muerto es corto en un palo en el que tú eres fuerte.',
      },
    ],
  },

  {
    id: 'duplicate-scoring',
    title: 'La puntuación del bridge duplicado',
    topic: 'Scoring & tactics',
    level: 'Beginner',
    summary: 'Cómo se puntúa una mano en duplicado: el valor de las bazas, las primas por parcial, manga y slam, las bazas de más, las multas y el efecto de los doblos.',
    body: `
<h3>Cada mano se puntúa por separado</h3>
<p>En el bridge duplicado cada mano se puntúa por sí sola. Los parciales no se arrastran de una mano a la siguiente como en el bridge de partida libre (rubber). Cada mano indica quién es <strong>vulnerable</strong>; ser vulnerable aumenta tanto las primas por manga y slam como las penalizaciones por multa.</p>

<h3>Paso 1: el valor de las bazas</h3>
<p>Solo cuentan para el valor de las bazas las bazas declaradas y cumplidas:</p>
<table>
<thead><tr><th>Denominación</th><th>Por baza declarada y cumplida</th></tr></thead>
<tbody>
<tr><td>♣ o ♦</td><td>20</td></tr>
<tr><td>♥ o ♠</td><td>30</td></tr>
<tr><td>SA</td><td>40 la primera baza, 30 cada una de las siguientes</td></tr>
</tbody>
</table>
<p>Los contratos doblados valen el doble por bazas, y los redoblados, el cuádruple. Así, 2♥ vale 60, pero 2♥ doblado vale 120.</p>

<h3>Paso 2: las primas</h3>
<table>
<thead><tr><th>Prima</th><th>No vulnerable</th><th>Vulnerable</th></tr></thead>
<tbody>
<tr><td>Parcial (valor de bazas inferior a 100)</td><td>50</td><td>50</td></tr>
<tr><td>Manga (valor de bazas de 100 o más)</td><td>300</td><td>500</td></tr>
<tr><td>Pequeño slam (nivel 6)</td><td>500 adicionales</td><td>750 adicionales</td></tr>
<tr><td>Gran slam (nivel 7)</td><td>1000 adicionales</td><td>1500 adicionales</td></tr>
<tr><td>Cumplir un contrato doblado (el “insulto”)</td><td>50</td><td>50</td></tr>
<tr><td>Cumplir un contrato redoblado</td><td>100</td><td>100</td></tr>
</tbody>
</table>
<p>Las primas de slam se suman a la de manga. La manga necesita un valor de bazas de 100: 3SA (40 + 30 + 30), 4♥ o 4♠ (120), 5♣ o 5♦ (100).</p>

<h3>Paso 3: las bazas de más</h3>
<p>Sin doblar, cada baza de más vale lo normal (20, 30, o 30 a sin triunfo). Dobladas, valen 100 cada una sin ser vulnerable y 200 siendo vulnerable; redobladas, 200 y 400.</p>

<h3>Cuando el contrato se multa</h3>
<table>
<thead><tr><th>Multas</th><th>No vul</th><th>No vul doblado</th><th>Vul</th><th>Vul doblado</th></tr></thead>
<tbody>
<tr><td>1</td><td>50</td><td>100</td><td>100</td><td>200</td></tr>
<tr><td>2</td><td>100</td><td>300</td><td>200</td><td>500</td></tr>
<tr><td>3</td><td>150</td><td>500</td><td>300</td><td>800</td></tr>
<tr><td>4</td><td>200</td><td>800</td><td>400</td><td>1100</td></tr>
<tr><td>5</td><td>250</td><td>1100</td><td>500</td><td>1400</td></tr>
</tbody>
</table>
<p>Doblado y no vulnerable: 100 por la primera multa, 200 por cada una de la segunda y la tercera, y 300 por cada una a partir de ahí. Doblado y vulnerable: 200 por la primera y 300 por cada una de las siguientes. Las multas redobladas valen el doble que las dobladas.</p>

<h3>Puntuaciones que conviene saberse de memoria</h3>
<table>
<thead><tr><th>Contrato cumplido justo</th><th>No vul</th><th>Vul</th></tr></thead>
<tbody>
<tr><td>1SA</td><td>90</td><td>90</td></tr>
<tr><td>2♥ o 2♠, 3♣ o 3♦</td><td>110</td><td>110</td></tr>
<tr><td>2SA</td><td>120</td><td>120</td></tr>
<tr><td>3♥ o 3♠</td><td>140</td><td>140</td></tr>
<tr><td>3SA</td><td>400</td><td>600</td></tr>
<tr><td>4♥ o 4♠</td><td>420</td><td>620</td></tr>
<tr><td>5♣ o 5♦</td><td>400</td><td>600</td></tr>
<tr><td>6♥ o 6♠</td><td>980</td><td>1430</td></tr>
<tr><td>6SA</td><td>990</td><td>1440</td></tr>
<tr><td>7♠</td><td>1510</td><td>2210</td></tr>
<tr><td>7SA</td><td>1520</td><td>2220</td></tr>
<tr><td>2♥ o 2♠ doblado</td><td>470</td><td>670</td></tr>
<tr><td>1SA doblado</td><td>180</td><td>180</td></tr>
</tbody>
</table>
<p>Ejemplo: 4♠ con once bazas, no vulnerable. Valor de bazas 4 × 30 = 120, prima de manga 300, una baza de más 30: total 450. El mismo resultado vulnerable: 120 + 500 + 30 = 650.</p>
<p>Ejemplo: 3SA doblado con diez bazas, vulnerable. Valor de bazas (40 + 30 + 30) × 2 = 200, prima de manga 500, insulto 50, una baza de más doblada 200: total 950.</p>
<div class="warn">Un doblo puede convertir un parcial en manga: 2♥ doblado tiene un valor de bazas de 120, así que cumplirlo da 470 o 670 en lugar de 110. No dobles de castigo un contrato bajo si no esperas multarlo.</div>
<div class="tip">Fíjate en que 5♣ y 3SA puntúan lo mismo, pero 3SA necesita dos bazas menos. Es una de las razones por las que se prefieren las mangas a sin triunfo y en mayor a las mangas en menor.</div>
`,
    keyPoints: [
      'Valor de las bazas: menores 20, mayores 30, sin triunfo 40 y luego 30; doblado ×2, redoblado ×4.',
      'La manga (valor de bazas 100+) da 300 no vulnerable o 500 vulnerable; un parcial da 50.',
      'Primas de slam: pequeño 500/750, gran slam 1000/1500, además de la prima de manga.',
      'Multas: 50/100 sin doblar; dobladas, 100-300-500-800 no vulnerable y 200-500-800-1100 vulnerable.',
      'Cumplir un contrato doblado suma 50 por el insulto, y las bazas de más dobladas valen 100 o 200 cada una.',
    ],
    quiz: [
      {
        q: 'Cumples 4♥ justo, vulnerable. ¿Cuánto puntúas?',
        options: ['420', '620', '650', '600'],
        answer: 1,
        explain: 'Valor de bazas 4 × 30 = 120, más la prima de manga vulnerable de 500: 620.',
      },
      {
        q: 'Haces diez bazas en 3SA, no vulnerable. ¿Cuánto puntúas?',
        options: ['400', '430', '460', '630'],
        answer: 1,
        explain: '40 + 30 + 30 = 100 por el contrato, 300 por la manga no vulnerable y 30 por la baza de más: 430.',
      },
      {
        q: 'No vulnerable, te multan tres bazas doblado. ¿Cuánto puntúan los rivales?',
        options: ['300', '500', '800', '150'],
        answer: 1,
        explain: 'No vulnerable y doblado: 100 por la primera multa y 200 por cada una de la segunda y la tercera: 100 + 200 + 200 = 500.',
      },
      {
        q: 'Los rivales cumplen 2♠ doblado, no vulnerables. ¿Cuánto puntúan?',
        options: ['110', '220', '470', '670'],
        answer: 2,
        explain: 'Doblado, el valor de bazas es 2 × 30 × 2 = 120, lo que es manga: 120 + 300 de prima de manga + 50 de insulto = 470.',
      },
      {
        q: 'Cumples 6♠ justo, no vulnerable. ¿Cuánto puntúas?',
        options: ['980', '1430', '920', '1010'],
        answer: 0,
        explain: 'Valor de bazas 6 × 30 = 180, prima de manga 300 y prima de pequeño slam 500: 980. Vulnerable serían 180 + 500 + 750 = 1430.',
      },
    ],
  },

  {
    id: 'establishing-long-suits',
    title: 'Afirmar palos largos',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Cómo convertir en ganadoras las cartas pequeñas de un palo largo y cómo conservar las entradas que necesitas para cobrarlas.',
    body: `
<h3>De dónde salen las bazas extra</h3>
<p>En la mayoría de los contratos a sin triunfo, las bazas extra que necesitas salen de los palos largos. Cuando a los rivales ya no les quedan cartas de un palo, cada carta que te quede en él es ganadora, aunque sea un 2. Convertir cartas pequeñas en ganadoras se llama <strong>afirmar</strong> el palo.</p>

<h3>Contar las vueltas</h3>
<p>Para saber cuántas bazas dará un palo, piensa en cómo es probable que se repartan las cartas de los rivales. Con A K 6 4 2 frente a 7 5 3 tienes ocho cartas y los rivales cinco. Si sus cartas se reparten 3-2 (el 68% de las veces), tres vueltas las agotan: ganas el A y el K, pierdes una vuelta y las dos últimas cartas son ganadoras. Cuatro bazas. Si se reparten 4-1, necesitas cuatro vueltas y el palo solo da tres bazas.</p>
<table>
<thead><tr><th>Cartas que faltan</th><th>Reparto más probable</th><th>Probabilidad</th></tr></thead>
<tbody>
<tr><td>5</td><td>3-2</td><td>68%</td></tr>
<tr><td>6</td><td>4-2 (el 3-3 es solo un 36%)</td><td>48%</td></tr>
<tr><td>7</td><td>4-3</td><td>62%</td></tr>
</tbody>
</table>

<h3>Pierde pronto la baza que tienes que perder</h3>
<div class="deal" data-n="S:765 H:83 D:AK642 C:742" data-s="S:AK4 H:AQ5 D:753 C:AKJ5" data-caption="3SA por Sur. Oeste sale con la ♠Q."></div>
<div class="auction" data-calls="2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Cuenta:</strong> ♠AK, ♥A, ♦AK, ♣AK: siete ganadoras seguras. Faltan dos, y los diamantes pueden darlas si se reparten 3-2.</p>
<p><strong>La trampa:</strong> el muerto no tiene ninguna entrada fuera de los diamantes. Si juegas el ♦A, el ♦K y un tercer diamante, los defensores ganan la tercera vuelta y los dos diamantes largos del muerto quedan aislados. Haces siete bazas.</p>
<p><strong>La solución:</strong> gana con el ♠A y juega enseguida un diamante pequeño de las dos manos, <em>agachándote</em> en la primera vuelta. Gana la vuelta de los defensores, juega un diamante al As y cobra el Rey; si el palo estaba 3-2, ya se ha agotado y sigues en el muerto para cobrar los dos diamantes largos. Nueve bazas: dos picas, un corazón, cuatro diamantes y dos tréboles.</p>
<p>Agacharse no cuesta nada: ibas a perder una baza de diamante de todos modos. Al agacharte simplemente la pierdes mientras el muerto aún tiene el A y el K para volver a él.</p>
<div class="tip">Cuando un palo tiene que perder una baza y la mano larga tiene pocas entradas, pierde esa baza en la primera vuelta, no en la última.</div>

<h3>Desbloquear: primero las cartas altas de la mano corta</h3>
<p>Con ♣KQ3 frente a ♣A8642, juega primero el Rey y la Dama, y luego pasa al As con el 3. Si cobras primero el As, el K y la Q se quedan solos en una mano y el palo se bloquea: no puedes volver a las cartas largas sin una entrada lateral. La misma idea vale siempre que una mano sea corta: cobra primero los honores de la mano corta.</p>

<h3>Expulsar las cartas altas de los rivales</h3>
<p>Algunos palos no tienen ningún problema de cartas pequeñas; solo hace falta expulsar el As de los rivales. KQJ10 frente a cartas pequeñas da tres bazas una vez que ha caído el As. Empieza por esos palos pronto, mientras aún tienes paradas en los demás, para que los defensores no puedan afirmar antes su propio palo largo.</p>

<h3>Elegir qué palo afirmar</h3>
<ul>
<li>Prefiere el palo que necesita ceder menos bazas y depende del reparto más probable.</li>
<li>Prefiere ceder la mano al rival que no puede hacerte daño (consulta las lecciones “El hold-up y las entradas” y “Evitación: que el rival peligroso no tome la mano”).</li>
<li>Comprueba las entradas: un palo que puedes afirmar pero al que nunca puedes llegar no vale nada.</li>
<li>En un contrato a palo, los palos laterales largos se afirman igual, a menudo fallando las cartas pequeñas en la mano larga en triunfos hasta que las restantes son buenas.</li>
</ul>
<div class="warn">No cobres primero todas tus ganadoras seguras “para ver qué pasa”. Cada ganadora que cobras también afirma ganadoras para los defensores y destruye tus propias entradas y paradas.</div>
`,
    keyPoints: [
      'Las cartas pequeñas se convierten en ganadoras cuando a los rivales ya no les quedan cartas del palo.',
      'Cuenta las vueltas: con cinco cartas fuera, un reparto 3-2 (68%) necesita tres vueltas.',
      'Agáchate en la vuelta que tienes que perder mientras la mano larga aún conserva sus cartas altas como entradas.',
      'Desbloquea cobrando primero los honores de la mano corta.',
      'Empieza pronto por tu palo largo, antes de que los defensores afirmen el suyo.',
    ],
    quiz: [
      {
        q: 'Tienes A K 6 4 2 frente a 7 5 3. Si las cinco cartas que faltan se reparten 3-2, ¿cuántas bazas puede dar el palo?',
        options: ['3', '4', '5', '2'],
        answer: 1,
        explain: 'Tres vueltas agotan un reparto 3-2. Ganas dos de esas vueltas y pierdes una; las dos cartas que quedan en la mano larga son ganadoras: 4 bazas.',
      },
      {
        q: 'En la mano de 3SA de arriba, ¿por qué agacharse en la primera vuelta de diamantes?',
        options: ['Para averiguar quién tiene la Dama', 'Para conservar el ♦A y el ♦K como entradas a los diamantes largos', 'Para retener las picas', 'Porque agacharse siempre gana una baza extra'],
        answer: 1,
        explain: 'El muerto no tiene entrada lateral. Perder primero la baza inevitable de diamante permite que, tras el A y el K, las cartas largas se puedan correr sin necesidad de volver al muerto.',
      },
      {
        q: 'Tienes ♣KQ3 en la mano y ♣A8642 en el muerto, sin otra entrada al muerto. ¿Cómo debes jugar los tréboles?',
        options: ['Primero el As, luego el Rey y la Dama', 'Primero el Rey y la Dama, luego un trébol pequeño al As', 'Salir con el 2 del muerto', 'Da igual'],
        answer: 1,
        explain: 'Cobra primero los honores de la mano corta. Tras el K y la Q aún puedes pasar al As con el 3 y, si el palo estaba 3-2, cobrar las cartas largas. Si juegas primero el As, el K y la Q bloquean el palo.',
      },
      {
        q: 'Los rivales tienen seis cartas de un palo. ¿Con qué frecuencia se reparten 3-3?',
        options: ['36%', '48%', '50%', '68%'],
        answer: 0,
        explain: 'Cuando falta un número par de cartas, un reparto par es menos probable de lo que parece: el 3-3 ronda el 36%, mientras que el 4-2 ronda el 48%.',
      },
    ],
  },

  {
    id: 'finesses',
    title: 'Los impasses',
    topic: 'Declarer play',
    level: 'Beginner',
    summary: 'Cómo ganar bazas con cartas que no son las más altas jugando hacia ellas, y cuándo hacer el impasse en lugar de jugar a la caída.',
    body: `
<h3>La idea</h3>
<p>Un impasse es un intento de ganar una baza con una carta que no es la más alta de las que quedan, jugándola <em>después</em> del rival que tiene la carta superior. Para ello se juega <strong>hacia</strong> la carta con la que esperas ganar.</p>
<p>El caso más sencillo: el muerto (Norte) tiene ♠A Q y tú (Sur) tienes dos picas pequeñas. Juega una pica pequeña desde tu mano. Si Oeste juega bajo, pon la Dama. Si Oeste tiene el Rey, la Dama gana; si lo tiene Este, la Dama pierde. En cualquier caso, el As sigue siendo ganador. Un impasse simple sale la mitad de las veces, pero no cuesta nada intentarlo cuando de todos modos tienes que jugar el palo.</p>

<h3>Jugar hacia un honor</h3>
<p>Con K 5 en el muerto y 6 4 en la mano, juega desde tu mano hacia el Rey. Si Oeste tiene el As, el Rey hará baza: si Oeste pone el As, el Rey queda afirmado; si Oeste se agacha, el Rey gana. Si en cambio sales con el Rey del muerto, nunca podrá ganar mientras el As esté fuera.</p>
<div class="warn">Salir con un honor solo es correcto cuando te puedes permitir que te lo cubran, es decir, cuando tienes las cartas inmediatamente inferiores. Sal con la Dama desde Q J 10 frente a A 3 2, pero no desde Q 3 2 en tu mano frente a A 5 4 en el muerto: si te cubren la Dama, no te queda nada que promocionar. En su lugar, juega pequeño del muerto hacia la Dama, que hará baza siempre que Este tenga el Rey.</div>

<h3>Impasses repetidos y dobles</h3>
<table>
<thead><tr><th>Combinación</th><th>Cómo jugarla</th><th>Resultado</th></tr></thead>
<tbody>
<tr><td>A Q frente a 3 2</td><td>Juega hacia el A Q y haz el impasse a la Q</td><td>2 bazas el 50%</td></tr>
<tr><td>K 5 frente a 6 4</td><td>Juega hacia el K</td><td>1 baza el 50%</td></tr>
<tr><td>A Q 10 frente a 4 3 2</td><td>Impasse al 10 y, más tarde, a la Q</td><td>3 bazas el 25%, al menos 2 bazas el 75%</td></tr>
<tr><td>A J 10 frente a 4 3 2</td><td>Impasse al 10 (o al J); si falla, repite el impasse</td><td>2 bazas el 75% (solo falla si el K y la Q están mal colocados)</td></tr>
<tr><td>A K J frente a 4 3 2</td><td>Impasse al J</td><td>3 bazas en torno al 50%</td></tr>
</tbody>
</table>
<p>Un doble impasse gana cuando al menos uno de los dos honores que faltan está bien colocado; cada honor está con Oeste o con Este de forma independiente, así que la probabilidad de que los dos estén mal es ½ × ½ = 25%.</p>

<h3>¿Impasse o caída? «Con ocho, impasse; con nueve, nunca»</h3>
<p>Cuando te falta la Dama y no tienes otras pistas:</p>
<ul>
<li>Con <strong>ocho</strong> cartas (faltan cinco), haz el impasse. El impasse (tras cobrar primero el As por si la Dama es semifallo) sale aproximadamente el 40% de las veces con A K J x x (alrededor del 51% con A K J 10 x); jugar a que caiga la Dama solo funciona alrededor del 33%.</li>
<li>Con <strong>nueve</strong> cartas (faltan cuatro), cobra el As y el Rey y espera que caiga la Dama. Eso funciona aproximadamente el 53% de las veces, y el impasse, alrededor del 51%.</li>
</ul>
<p>La regla solo sirve para desempatar. La información de la subasta (quien ha abierto o ha hecho un barrage tiene la mayoría de las cartas altas o de la longitud) o del principio del carteo pesa más que estas pequeñas diferencias.</p>

<h3>Un impasse en la práctica</h3>
<div class="deal" data-n="S:7432 H:Q52 D:QJ7 C:KQ6" data-s="S:AQJ105 H:AK3 D:K84 C:A5" data-caption="6♠ por Sur. Oeste sale con el ♥J."></div>
<p>Tienes que perder el ♦A, así que el slam depende de no perder ninguna baza de triunfo. Falta el ♠K, y con nueve triunfos haces el impasse: solo puedes capturarlo si lo tiene Este, porque Este juega antes que tu A Q J 10 (o si Oeste tiene el Rey semifallo).</p>
<p>Gana la salida con la ♥Q del muerto para estar en la mano adecuada y juega un triunfo pequeño. Si Este juega bajo, pon el 10 (o el J). Si gana, quizá tengas que repetir el impasse, así que vuelve al muerto con el ♣K y juega otro triunfo. Planificar las entradas para un impasse repetido forma parte del trabajo: el muerto tiene dos entradas rápidas (la ♥Q y el ♣K), y debes usarlas para el palo de triunfo en lugar de malgastarlas.</p>
<div class="tip">La regla «con ocho, impasse; con nueve, nunca» se refiere a la Dama. Cuando te falta el Rey, sigues haciendo el impasse con nueve o diez cartas; solo con once cartas jugar a la caída es algo mejor (52%).</div>
`,
    keyPoints: [
      'Juega hacia la carta con la que esperas ganar; un impasse simple es una probabilidad del 50%.',
      'Sal con un honor para hacer el impasse solo si tienes las cartas inmediatamente inferiores.',
      'Un doble impasse (A Q 10, A J 10) gana al menos una baza extra el 75% de las veces.',
      'Si falta la Dama: impasse con ocho cartas, a la caída con nueve («con ocho, impasse; con nueve, nunca»).',
      'Planifica tus entradas para los impasses repetidos.',
    ],
    quiz: [
      {
        q: 'El muerto tiene ♥A Q y tú tienes ♥7 4. ¿Cómo juegas los corazones para intentar hacer dos bazas?',
        options: ['Cobrar el As y luego salir con la Dama', 'Salir con la Dama del muerto', 'Jugar un corazón pequeño desde la mano y poner la Dama si Oeste juega bajo', 'Jugar el As y esperar que caiga el Rey'],
        answer: 2,
        explain: 'La Dama solo puede ganar si se juega después del Rey. Juega desde tu mano para que Oeste tenga que jugar antes que el muerto; si Oeste tiene el Rey, la Dama gana.',
      },
      {
        q: 'Con A Q 10 en el muerto y 4 3 2 en la mano, ¿con qué frecuencia te dará el doble impasse al menos dos bazas?',
        options: ['25%', '50%', '75%', '90%'],
        answer: 2,
        explain: 'Haces al menos dos bazas salvo que el K y el J estén los dos en Este. Cada uno está en Oeste la mitad de las veces, así que ambos están mal solo ¼ de las veces.',
      },
      {
        q: 'Tienes A K J 5 2 frente a 6 4 3 (ocho cartas) y te falta la Dama. ¿Cuál es la mejor jugada sin pistas de la subasta?',
        options: ['Cobrar el As y el Rey', 'Cobrar el As y luego hacer el impasse al Valet', 'Salir con el Valet', 'Agacharse en una vuelta'],
        answer: 1,
        explain: 'Con ocho cartas, el impasse (alrededor del 40%, cobrando primero el As por si la Dama es semifallo) es mejor que la caída (alrededor del 33%).',
      },
      {
        q: 'Tienes A K J 5 4 frente a 7 6 3 2 (nueve cartas) y te falta la Dama. ¿Cuál es la mejor jugada sin pistas?',
        options: ['Cobrar el As y el Rey', 'Hacer el impasse al Valet de inmediato', 'Salir con el Valet', 'Agacharse en una vuelta'],
        answer: 0,
        explain: '«Con nueve, nunca»: con solo cuatro cartas fuera, la Dama cae bajo el As y el Rey alrededor del 53% de las veces, algo más a menudo de lo que sale el impasse (alrededor del 51%).',
      },
      {
        q: 'El muerto tiene ♦K 7 3 y tú tienes ♦8 4 2. ¿Cómo te das la mejor oportunidad de hacer una baza?',
        options: ['Salir con el Rey del muerto', 'Jugar pequeño desde la mano hacia el Rey', 'Jugar pequeño del muerto', 'Esperar a que los defensores jueguen el palo'],
        answer: 1,
        explain: 'Jugar hacia el Rey gana una baza siempre que Oeste tenga el As. Salir con el Rey pierde ante el As esté donde esté.',
      },
    ],
  },

  {
    id: 'second-and-third-hand',
    title: 'Segunda mano baja, tercera mano alta',
    topic: 'Defense',
    level: 'Beginner',
    summary: 'Las reglas básicas para los defensores que juegan en segundo y tercer lugar en una baza, cuándo saltárselas y cuándo cubrir honor con honor.',
    body: `
<h3>Segunda mano baja</h3>
<p>Cuando el declarante juega una carta pequeña hacia el muerto (o desde el muerto hacia su mano), el defensor que juega en segundo lugar normalmente debe jugar <strong>bajo</strong>. Tu compañero juega el último en la baza y a menudo puede ganarla barata, mientras tu carta alta se reserva para capturar más tarde uno de los honores del declarante.</p>
<p>Ejemplo: el muerto tiene ♠K J 5 y el declarante juega una pica pequeña desde su mano hacia él. Estás en segunda posición con ♠A 7 3. Si juegas el As, solo capturas cartas pequeñas, y el K y el J del muerto quedan vivos para más tarde. Si juegas bajo, el declarante tiene que adivinar: si pone el Valet y tu compañero tiene la Dama, tu bando hace dos bazas; si pone el Rey, tu As seguirá haciendo baza más adelante.</p>

<h3>Cuándo debe jugar alto la segunda mano</h3>
<ul>
<li><strong>Para cobrar la baza de la multa</strong> o una baza que no te puedes permitir perder, por ejemplo cuando el declarante está a punto de descartar sus perdedoras.</li>
<li><strong>Cuando se juega un honor</strong>: entonces la cuestión es si cubrir o no (ver más abajo).</li>
<li><strong>Para partir honores seguidos.</strong> Supón que el muerto tiene K 10 3, el declarante A 6 2 y tú estás delante del muerto con Q J 4. Si el declarante juega pequeño y tú juegas bajo, hace el impasse al 10, luego cobra el A y el K, y caen tu Q y tu J: ninguna baza para ti. Juega el J en la primera vuelta (y la Q cuando el declarante vuelva a jugar hacia el muerto) y harás una baza seguro.</li>
</ul>

<h3>Tercera mano alta</h3>
<p>Cuando tu compañero sale con una carta pequeña y el muerto juega bajo, juega tu carta <strong>más alta</strong> para impedir que el declarante gane la baza barata, o para obligarle a gastar una carta alta y promocionar las de tu compañero.</p>
<ul>
<li>Con cartas altas seguidas, juega la <strong>más baja</strong> de ellas: desde K Q 5, la Q; desde Q J 4, el J. Así tu compañero puede deducir dónde está la carta superior.</li>
<li>Juega solo tan alto como haga falta. Si el muerto ha jugado el 9 y tienes Q 10 2, basta con el 10.</li>
<li><strong>Haz el impasse contra el muerto.</strong> Si el muerto tiene K 7 3 y juega bajo, y tú tienes A J 4, juega el J. El Rey del muerto está atrapado bajo tu As: si el declarante tiene la Dama, gana esta baza, pero tu As sigue situado por encima del K; si la Dama la tiene tu compañero, el J gana.</li>
</ul>

<h3>Cubrir honor con honor</h3>
<p>Cuando se juega un honor y tienes uno superior, cubrir obliga al declarante a gastar dos de sus cartas altas para capturar una de las tuyas. Eso puede promocionar una carta más baja, como un 10 o un 9, en tu mano o en la de tu compañero.</p>
<table>
<thead><tr><th>Posición</th><th>Diamantes</th></tr></thead>
<tbody>
<tr><td>Norte (muerto)</td><td>J 7 3</td></tr>
<tr><td>Oeste (compañero)</td><td>10 2</td></tr>
<tr><td>Este (tú)</td><td>Q 9 4</td></tr>
<tr><td>Sur (declarante)</td><td>A K 8 6 5</td></tr>
</tbody>
</table>
<p>El declarante juega el ♦J del muerto. Si juegas bajo, el J gana, y luego el A y el K hacen caer tu Dama: el declarante no pierde ninguna baza. Si cubres con la Q, el declarante gana con el A y cobra el K, que hace caer el 10 de tu compañero, pero ahora tu 9 es más alto que cualquier diamante que le quede al declarante. Cubrir ha creado una baza de la nada.</p>

<h4>Cuándo no cubrir</h4>
<ul>
<li>Cuando el honor jugado es uno de varios honores seguidos (el muerto tiene Q J 10 4 y sale con la Q): espera y cubre, si acaso, el último de ellos.</li>
<li>Cuando está claro que no hay nada que promocionar, por ejemplo en el palo de triunfo cuando el declarante ha mostrado un palo largo y fuerte.</li>
<li>Cuando el honor sale de la mano del declarante y cubrir solo le ayudaría a capturar el palo: piensa qué tiene el declarante antes de reaccionar.</li>
</ul>
<div class="tip">Cubrir o no es una cuestión de promoción. Pregúntate: «Si cubro, ¿qué carta nuestra podría convertirse en ganadora?». Si la respuesta es ninguna, no cubras.</div>
<div class="warn">No dudes para luego jugar bajo: la pausa le dice al declarante que tienes el honor que falta. Piensa en estas situaciones en cuanto baje el muerto, para estar preparado cuando se presenten.</div>
`,
    keyPoints: [
      'Segunda mano baja: guarda tus cartas altas para capturar los honores del declarante; tu compañero juega el último.',
      'Sáltate la regla para cobrar la baza de la multa o para partir honores seguidos.',
      'Tercera mano alta, pero la más baja de las cartas seguidas y solo tan alta como haga falta.',
      'Haz el impasse contra el honor del muerto cuando estás situado detrás de él.',
      'Cubre honor con honor cuando pueda promocionar una carta de tu bando; no cubras el primero de varios honores seguidos.',
    ],
    quiz: [
      {
        q: 'El declarante juega una carta baja desde su mano hacia el K J 5 del muerto. Tienes A 7 3 en segunda posición. ¿Qué juegas normalmente?',
        options: ['El As', 'Una carta baja', 'El 7, para dar una señal', 'Nunca importa'],
        answer: 1,
        explain: 'Segunda mano baja. Tomar con el As solo captura cartas pequeñas y deja vivos el K y el J del muerto. Jugar bajo obliga al declarante a adivinar, y tu compañero puede tener la Dama.',
      },
      {
        q: 'Tu compañero sale con una carta baja contra 3SA. El muerto tiene 7 5 2 y juega bajo. Tienes K Q 8. ¿Qué carta juegas?',
        options: ['K', 'Q', '8', 'Cualquiera de los dos honores'],
        answer: 1,
        explain: 'Tercera mano alta, la más baja de las cartas seguidas: la Q. Si hace salir el As, tu compañero sabrá que también tienes el K.',
      },
      {
        q: 'Tu compañero sale con una carta baja. El muerto tiene K 7 3 y juega bajo. Tienes A J 4. ¿Qué carta juegas?',
        options: ['A', 'J', '4', 'El K está en el muerto, así que da igual'],
        answer: 1,
        explain: 'Haz el impasse contra el muerto: el J gana si tu compañero tiene la Q, y tu As sigue por encima del Rey del muerto. Jugar el As afirmaría el Rey del muerto.',
      },
      {
        q: 'El muerto tiene ♠Q J 10 4 y sale con la Q. Tienes ♠K 6 3 detrás del muerto. ¿Debes cubrir?',
        options: ['Sí, siempre se cubre un honor', 'No, no cubras el primero de varios honores seguidos', 'Solo si tu compañero ha dado una señal', 'Sí, con el 6'],
        answer: 1,
        explain: 'Cubrir la Q permite al declarante ganar con el As, y entonces el J y el 10 quedan buenos. Espera: si el declarante sigue jugando honores, cubre el último, que es cuando cubrir podría promocionar algo.',
      },
      {
        q: '¿Por qué se cubre honor con honor?',
        options: ['Para ganar la baza', 'Para que el declarante gaste dos honores por uno tuyo, promocionando una carta más baja de tu bando', 'Para mostrar fuerza a tu compañero', 'Para obligar al declarante a fallar'],
        answer: 1,
        explain: 'Cubrir rara vez gana la baza en sí. Su valor es la promoción: cuando han caído dos honores del declarante, una carta más baja como un 10 o un 9 puede convertirse en ganadora.',
      },
    ],
  },
];
