// Lessons, part 2 (Spanish).
// Markup rules: see src/learn/lessons.ts.

import type { Lesson } from '../../types';

export const LESSONS_2: Lesson[] = [
  {
    id: 'responders-rebid-and-choosing-game',
    title: 'La redeclaración del respondedor y la elección de la manga',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Cómo usa el respondedor su segunda voz para cerrar, invitar o forzar, y cómo elegir entre un mayor, 3SA y cinco de un menor.',
    body: `
<h3>El respondedor se convierte en el capitán</h3>
<p>Después de la redeclaración del abridor, normalmente conoces su fuerza con un margen de tres o cuatro puntos y bastante de su distribución. Tu segunda voz debe llevar a la pareja al contrato correcto o hacer una pregunta más. Piensa en tres franjas:</p>
<table>
<thead><tr><th>Respondedor</th><th>Objetivo</th><th>Voces típicas</th></tr></thead>
<tbody>
<tr><td>6-10</td><td>Cerrar en el mejor parcial</td><td>Paso; preferencia al primer palo del abridor; repetir un palo de seis cartas; 1SA</td></tr>
<tr><td>11-12</td><td>Invitar a manga</td><td>2SA; apoyar el palo del abridor a nivel de tres; repetir con salto un buen palo de seis cartas</td></tr>
<tr><td>13+</td><td>Asegurar la manga</td><td>Declarar la manga directamente, o un palo nuevo (forcing) para encontrar la buena</td></tr>
</tbody>
</table>
<p>Dos voces artificiales ayudan al respondedor a preguntar en lugar de adivinar: el <strong>nuevo menor forcing</strong> tras la redeclaración de 1SA del abridor y el <strong>cuarto palo forcing</strong> cuando ya se han declarado tres palos. Tienen su propia lección.</p>

<h3>Ejemplos</h3>
<div class="auction" data-calls="1D P 1S P 1NT P" data-dealer="N"></div>
<div class="hand" data-cards="S:KQ85 H:A73 D:J4 C:Q962" data-label="Respondedor: declara 2SA"></div>
<p>El abridor ha mostrado 12-14 equilibrada. Con 12 PH el total es de 24-26: invita con 2SA. El abridor pasa con 12 y declara 3SA con 14 (con 13, decide según su criterio). Con 13+ declararías tú mismo 3SA; con 10 o menos pasarías.</p>
<div class="auction" data-calls="1H P 1S P 2H P" data-dealer="N"></div>
<div class="hand" data-cards="S:AQ974 H:Q3 D:K82 C:J105" data-label="Respondedor: declara 3♥"></div>
<p>El abridor tiene un mínimo con seis corazones, así que Q3 es apoyo suficiente para un fit de ocho cartas. 12 puntos frente a 12-15: invita con 3♥. El abridor declara 4♥ si está en lo alto de su rango.</p>

<h4>Preferencia</h4>
<p>Cuando el abridor muestra dos palos y no tienes fit en ninguno, elige entre ellos de forma barata. El primer palo del abridor es al menos tan largo como el segundo, así que con igual longitud vuelve al primero. Tras 1♥ – 1♠ – 2♣, con ♥Q43 y ♣97 declara 2♥: no muestra fuerza extra, solo un palo de triunfo mejor. Con ♥4 y ♣J973, pasa sobre 2♣.</p>

<h3>Elegir la manga</h3>
<ol>
<li><strong>¿Fit de ocho cartas en un mayor? Juega en el mayor.</strong> Un fit 4-4 o 5-3 suele dar al menos una baza más que el sin triunfo, porque la mano corta en triunfos puede fallar. Incluso con dos manos equilibradas, 4♥ o 4♠ suele ser lo correcto.</li>
<li><strong>¿Sin fit en un mayor? Prefiere 3SA</strong>, siempre que todos los palos no declarados estén parados. 3SA necesita nueve bazas; cinco de un menor necesita once por la misma puntuación (400 o 600).</li>
<li><strong>Cinco de un menor</strong> es para manos con un gran fit en el menor y un palo que los rivales podrían correr a sin triunfo, o con cortos que permiten hacer bazas de fallo.</li>
</ol>
<table>
<thead><tr><th>Contrato</th><th>Puntos necesarios entre los dos (aproximados)</th></tr></thead>
<tbody>
<tr><td>3SA, 4♥, 4♠</td><td>25-26</td></tr>
<tr><td>5♣, 5♦</td><td>28-29</td></tr>
<tr><td>Pequeño slam</td><td>33</td></tr>
<tr><td>Gran slam</td><td>37</td></tr>
</tbody>
</table>
<div class="deal" data-n="S:K72 H:A85 D:AQ963 C:J4" data-s="S:A93 H:Q76 D:KJ84 C:K102" data-caption="1♦ – 2SA – 3SA. Sur es el declarante."></div>
<div class="auction" data-calls="1D P 2NT P 3NT P P P" data-dealer="N"></div>
<p>Norte-Sur tienen 27 PH y un fit de nueve cartas en diamantes, pero ningún fit en un mayor y todos los palos parados. En 3SA tienes ocho bazas seguras: dos picas, un corazón y cinco diamantes. Los tréboles dan la novena una vez expulsado el ♣A (y quizá la ♣Q). En 5♦ necesitas once bazas y tienes una perdedora de pica, al menos una de corazón y al menos una de trébol. 3SA es con mucho la mejor manga.</p>

<h3>Los límites de «25 puntos para la manga»</h3>
<ul>
<li><strong>Fit:</strong> con un fit de nueve o diez cartas y cortos, la manga puede cumplirse con 22-23 puntos. Con un misfit, 26 pueden no bastar.</li>
<li><strong>Duplicación:</strong> los honores frente a un corto se desperdician. ♠KQJ frente a un semifallo de pica aporta poco en un contrato a palo.</li>
<li><strong>Distribuciones planas:</strong> dos manos 4-3-3-3 producen menos bazas; resta un punto.</li>
<li><strong>Fuentes de bazas:</strong> un palo largo y sólido compensa los puntos que faltan. Seis diamantes que corren pueden cumplir 3SA con 23 PH.</li>
<li><strong>Paradas:</strong> 3SA con un palo totalmente abierto falla tengas los puntos que tengas.</li>
</ul>
<div class="tip">Con 13+ puntos frente a una apertura, nunca hagas una voz que tu compañero pueda pasar por debajo de la manga. Si no sabes dónde jugar, declara un palo nuevo: el palo nuevo del respondedor es forcing.</div>
<div class="warn">No sigas declarando en un misfit sin remedio. Si tu compañero repite su palo una y otra vez y tú el tuyo, el contrato correcto suele ser el más bajo posible.</div>
`,
    keyPoints: [
      'Segunda voz del respondedor: con 6-10 cierra, con 11-12 invita, con 13+ asegura la manga.',
      'Con igual longitud, da preferencia al primer palo del abridor.',
      'Un fit de ocho cartas en un mayor suele jugarse a cuatro en el mayor.',
      'Sin fit en un mayor, prefiere 3SA a cinco de un menor cuando todos los palos estén parados.',
      'Unos 25 puntos para 3SA o cuatro de un mayor, 29 para cinco de un menor y 33 para el pequeño slam; ajústalos según el fit y la distribución.',
    ],
    quiz: [
      {
        q: '1♦ – 1♠ – 1SA – ? Tienes ♠AJ84 ♥K5 ♦Q73 ♣Q1062 (12 PH).',
        options: ['Paso', '2SA', '3SA', '2♠'],
        answer: 1,
        explain: 'El abridor tiene 12-14, así que entre los dos tenéis 24-26: invita con 2SA. El abridor declarará 3SA con un máximo.',
      },
      {
        q: '1♥ – 1♠ – 2♣ – ? Tienes ♠KJ753 ♥Q43 ♦J86 ♣97 (7 PH).',
        options: ['Paso', '2♥', '2♠', '2SA'],
        answer: 1,
        explain: 'El abridor tiene al menos cinco corazones, así que tenéis un fit de ocho cartas. 2♥ es una simple preferencia y no muestra fuerza extra.',
      },
      {
        q: 'Tenéis 26 PH entre los dos, un fit 4-4 en picas y dos manos equilibradas. ¿Qué manga?',
        options: ['3SA', '4♠', '5♣', 'Da lo mismo'],
        answer: 1,
        explain: 'El fit 4-4 suele dar una baza extra: una mano puede fallar mientras los triunfos de la otra siguen sacando los triunfos de los rivales. Juega 4♠.',
      },
      {
        q: 'Tenéis 27 PH, ningún fit en un mayor, un fit de nueve cartas en diamantes y todos los palos parados. ¿Qué manga?',
        options: ['5♦', '3SA', '4♦', '6♦'],
        answer: 1,
        explain: '3SA necesita nueve bazas y 5♦ once, y puntúan lo mismo. Con todos los palos parados, 3SA es la manga con más probabilidades.',
      },
      {
        q: '¿Por qué puede fallar la manga con 26 PH?',
        options: ['No puede: con 26 PH siempre se cumple la manga', 'Por un misfit, por valores duplicados o por un palo sin parar', 'Porque 26 PH es una mano de slam', 'Solo si los triunfos están 4-1'],
        answer: 1,
        explain: 'Los puntos estiman la capacidad de hacer bazas, pero las bazas también dependen del fit, de si los honores son útiles y de las paradas a sin triunfo.',
      },
    ],
  },

  {
    id: 'strong-openings',
    title: 'Las aperturas fuertes de 2♣ y 2SA',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Cuándo abrir de 2♣ o de 2SA, cómo responde el compañero y cómo encajan los rangos de las manos equilibradas fuertes.',
    body: `
<h3>2♣: la gran apertura</h3>
<p>2♣ es artificial y no dice nada de los tréboles. Muestra <strong>22+ PH</strong> o unas <strong>nueve bazas de juego</strong> (con un mayor; con un menor normalmente quieres diez, porque la manga en menor necesita once). Es la única apertura forcing: tu compañero tiene que responder aunque no tenga nada.</p>
<div class="hand" data-cards="S:AKQJ975 H:AK4 D:8 C:K2" data-label="Abre de 2♣: nueve bazas de juego"></div>
<p>Solo 20 PH, pero cuenta las bazas: siete picas y dos corazones, con opciones de una décima. Abrir de 1♠ te expone a que tu compañero pase con una mano como ♠83 ♥J852 ♦Q964 ♣Q83 (5 PH), cuando 4♠ es un contrato excelente. Abre de 2♣ y redeclara 2♠.</p>
<div class="hand" data-cards="S:AK5 H:KQ4 D:AQJ2 C:KJ7" data-label="Abre de 2♣ y redeclara 2SA"></div>
<p>23 PH equilibrada: 2♣ seguido de 2SA muestra 22-24.</p>

<h3>Responder a 2♣</h3>
<table>
<thead><tr><th>Respuesta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>2♦</td><td>De espera: la respuesta normal con la mayoría de las manos, débiles o fuertes</td></tr>
<tr><td>2♥, 2♠, 3♣, 3♦</td><td>Positiva: un buen palo de cinco cartas (dos de los tres honores mayores o tres de los cinco) y 8+ PH</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q74 H:J863 D:952 C:K84" data-label="Tu compañero abrió de 2♣: declara 2♦"></div>
<div class="hand" data-cards="S:52 H:KQJ84 D:A73 C:964" data-label="Tu compañero abrió de 2♣: declara 2♥"></div>
<p>La respuesta de 2♦ mantiene la subasta baja para que la mano fuerte pueda describirse. Incluso con una mano aceptable, si no tienes un buen palo, declara 2♦ y muestra tus valores más tarde.</p>

<h3>La redeclaración del abridor</h3>
<ul>
<li><strong>2SA</strong> = 22-24 equilibrada. Es la única redeclaración que el respondedor puede pasar, con una mano realmente sin valor. El respondedor usa los mismos métodos que sobre una apertura de 2SA: 3♣ Stayman, 3♦ y 3♥ transfers, 3SA para jugar.</li>
<li><strong>3SA</strong> = 25-27 equilibrada.</li>
<li><strong>Un palo</strong> = natural, al menos cinco cartas y forcing: el respondedor tiene que volver a hablar. Apoya si tienes apoyo; declara un buen palo propio; sin nada útil, haz la voz más barata.</li>
</ul>

<h3>La apertura de 2SA</h3>
<p>2SA muestra <strong>20-21 PH y mano equilibrada</strong>. No es forcing, pero el respondedor debe declarar la manga con tan solo 4 puntos.</p>
<table>
<thead><tr><th>Respuesta a 2SA</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Paso</td><td>0-3</td></tr>
<tr><td>3♣</td><td>Stayman</td></tr>
<tr><td>3♦ / 3♥</td><td>Transfer a corazones / picas</td></tr>
<tr><td>3SA</td><td>4-10, para jugar</td></tr>
<tr><td>4SA</td><td>11-12, cuantitativo: el abridor declara 6SA con un máximo</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:AQ4 H:KJ6 D:AK82 C:QJ5" data-label="Abre de 2SA: 20 PH, equilibrada"></div>
<p>Frente a esta mano, un respondedor con ♠J10642 ♥Q85 ♦73 ♣962 hace el transfer con 3♥ y pasa sobre 3♠: 23-24 entre los dos no bastan para la manga, pero cinco triunfos hacen que 3♠ sea más seguro que 2SA.</p>

<h3>La escalera de las manos equilibradas</h3>
<table>
<thead><tr><th>PH</th><th>Secuencia</th></tr></thead>
<tbody>
<tr><td>12-14</td><td>Uno a palo y luego 1SA</td></tr>
<tr><td>15-17</td><td>1SA</td></tr>
<tr><td>18-19</td><td>Uno a palo y luego salto a 2SA</td></tr>
<tr><td>20-21</td><td>2SA</td></tr>
<tr><td>22-24</td><td>2♣ y luego 2SA</td></tr>
<tr><td>25-27</td><td>2♣ y luego 3SA</td></tr>
</tbody>
</table>
<div class="tip">Frente a 2♣, piensa en bazas y controles, no solo en puntos. Un As o un Rey valen mucho más que Damas y Valets dispersos.</div>
<div class="warn">No abras de 2♣ solo porque tengas 20 PH. Con 20-21 equilibrada abre de 2SA; con 19-21 y una mano desequilibrada normal, abre de uno a palo. Tu compañero responderá con tan solo 6 puntos, y podrás saltar o hacer un reverse para mostrar tu fuerza.</div>
`,
    keyPoints: [
      '2♣ = 22+ PH o unas nueve bazas de juego; artificial y forcing.',
      'Responde 2♦ (espera) con la mayoría de las manos; una respuesta positiva necesita un buen palo de cinco cartas (dos de los tres honores mayores o tres de los cinco) y 8+ PH.',
      '2♣ – 2♦ – 2SA = 22-24 equilibrada y se puede pasar; cualquier redeclaración a palo del abridor es forcing.',
      'Apertura de 2SA = 20-21 equilibrada; 3♣ Stayman, 3♦/3♥ transfers, 3SA con 4-10, 4SA con 11-12.',
      'Escalera de manos equilibradas: 12-14, 15-17, 18-19, 20-21, 22-24, 25-27.',
    ],
    quiz: [
      {
        q: 'Tienes ♠AKQJ975 ♥AK4 ♦8 ♣K2. ¿Qué abres?',
        options: ['1♠', '2♣', '4♠', '2♠'],
        answer: 1,
        explain: 'Con nueve bazas de juego quieres llegar a la manga aunque tu compañero tenga muy poco, así que abre del forcing 2♣ y declara las picas después. 1♠ podría quedar pasado; 2♠ sería un dos débil.',
      },
      {
        q: 'Tu compañero abre de 2♣. Tienes ♠Q74 ♥J863 ♦952 ♣K84 (6 PH). ¿Qué declaras?',
        options: ['Paso', '2♦', '2♥', '2SA'],
        answer: 1,
        explain: '2♣ es forcing, así que no puedes pasar. Sin un buen palo de cinco cartas, declara el 2♦ de espera y deja que el abridor describa su mano.',
      },
      {
        q: 'Tu compañero abre de 2♣. Tienes ♠52 ♥KQJ84 ♦A73 ♣964 (10 PH). ¿Qué declaras?',
        options: ['2♦', '2♥', '3♥', '2SA'],
        answer: 1,
        explain: 'Un buen palo de cinco cartas (KQJ) con 8+ PH es una respuesta positiva: 2♥. Le dice al abridor enseguida que el slam es probable.',
      },
      {
        q: '¿Qué muestra 2♣ – 2♦ – 2SA?',
        options: ['20-21 equilibrada', '22-24 equilibrada', '25-27 equilibrada', 'Un palo de tréboles'],
        answer: 1,
        explain: 'Con 20-21 se abre directamente de 2SA. Pasar primero por 2♣ y luego declarar 2SA muestra 22-24; 2♣ y luego 3SA muestra 25-27.',
      },
      {
        q: 'Tu compañero abre de 2SA. Tienes una mano equilibrada de 4 PH. ¿Qué declaras?',
        options: ['Paso', '3SA', '3♣', '4SA'],
        answer: 1,
        explain: '20-21 más 4 dan 24-25, suficiente para intentar la manga. Sobre 2SA, 3SA abarca de 4 a 10 puntos.',
      },
    ],
  },

  {
    id: 'weak-twos-and-preempts',
    title: 'Aperturas de dos débil y barrages',
    topic: 'Bidding',
    level: 'Intermediate',
    summary: 'Cómo abrir con un palo largo y una mano débil para quitar espacio de subasta, y cómo responde el compañero.',
    body: `
<h3>¿Por qué hacer un barrage?</h3>
<p>Cuando tienes un palo largo y poco más, lo probable es que los rivales tengan la mayor parte de la fuerza. Abrir a nivel alto les quita el espacio de subasta que necesitan para encontrar su mejor contrato. Al mismo tiempo describe tu mano con precisión, así que tu compañero sabe exactamente qué hacer.</p>

<h3>Los requisitos</h3>
<table>
<thead><tr><th>Apertura</th><th>Palo</th><th>PH</th></tr></thead>
<tbody>
<tr><td>2♦ / 2♥ / 2♠ (dos débil)</td><td>Seis cartas</td><td>5-10</td></tr>
<tr><td>3♣ / 3♦ / 3♥ / 3♠</td><td>Siete cartas</td><td>5-10</td></tr>
<tr><td>4♥ / 4♠</td><td>Ocho cartas (o siete con distribución extra)</td><td>5-10</td></tr>
</tbody>
</table>
<p>La mayor parte de tu fuerza debe estar en el palo largo. Una buena guía para un dos débil es tener dos de los tres honores mayores o tres de los cinco.</p>
<div class="hand" data-cards="S:84 H:KQ10973 D:J52 C:63" data-label="Abre de 2♥"></div>
<div class="hand" data-cards="S:7 H:93 D:Q84 C:KQJ9852" data-label="Abre de 3♣"></div>
<div class="hand" data-cards="S:KQJ98642 H:5 D:Q732 C:-" data-label="Abre de 4♠"></div>
<p>2♣ nunca es un dos débil: es la apertura fuerte artificial.</p>

<h3>¿Hasta dónde? La regla del 2-3-4</h3>
<p>Cuenta tus bazas de juego: las bazas que esperas hacer con tu palo como triunfo si tu compañero no tiene nada útil. KQJ9852 son unas seis bazas. Una guía tradicional dice que debes quedarte a:</p>
<ul>
<li><strong>dos bazas</strong> de tu contrato si eres vulnerable contra rivales no vulnerables (vulnerabilidad desfavorable),</li>
<li><strong>tres bazas</strong> con igual vulnerabilidad,</li>
<li><strong>cuatro bazas</strong> si no eres vulnerable contra rivales vulnerables (vulnerabilidad favorable).</li>
</ul>
<p>La idea es que, aunque te doblen, la multa no supere aproximadamente el valor de la manga que probablemente habrían cumplido los rivales. Con seis bazas de juego, 3♣ (nueve bazas) está bien con igual vulnerabilidad. Los jugadores modernos hacen barrages más agresivos con vulnerabilidad favorable y más prudentes con desfavorable.</p>

<h3>Cuándo no hacer un barrage</h3>
<ul>
<li>En cuarta posición un barrage no tiene sentido: con una mano débil, simplemente pasa y la mano queda pasada. Una apertura a nivel de dos o de tres en cuarta posición muestra una mano decente que espera cumplir el contrato.</li>
<li>Con una buena mano (11+ PH y un buen palo), abre a nivel de uno.</li>
<li>En primera o segunda posición, ten cuidado con un mayor de cuatro cartas lateral o con dos Ases fuera de tu palo: tu compañero puede tener una buena mano y podríais perder un contrato mejor.</li>
</ul>

<h3>Responder a un dos débil</h3>
<table>
<thead><tr><th>Respuesta</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Apoyo (2♥ – 3♥)</td><td>De barrage, no invitativo: prolonga el barrage con apoyo de tres cartas</td></tr>
<tr><td>Manga en el palo</td><td>Para jugar: o para cumplirla, o como un barrage más</td></tr>
<tr><td>2SA</td><td>Forcing: pide al abridor que se describa</td></tr>
<tr><td>Palo nuevo</td><td>Natural, cinco o más cartas, forcing</td></tr>
<tr><td>3SA</td><td>Para jugar</td></tr>
</tbody>
</table>
<p><strong>Respuestas del abridor a 2SA:</strong> con un mínimo (unos 5-7), repite el palo a nivel de tres; con un máximo (unos 8-10), declara un palo en el que tengas un As o un Rey lateral (un “valor lateral”); con un palo sólido (AKQxxx), declara 3SA.</p>
<div class="deal" data-n="S:KQ10974 H:K52 D:83 C:72" data-s="S:A6 H:A84 D:AQ1052 C:K93" data-caption="Norte abre de 2♠; Sur pregunta con 2SA."></div>
<div class="auction" data-calls="2S P 2NT P 3H P 4S P P P" data-dealer="N"></div>
<p>Norte tiene 8 PH, un máximo, y muestra el ♥K. Sur, con 17 PH, sabe ahora que las picas correrán con el ♠A y que los corazones están bien guardados, y declara la manga. Si Norte hubiera mostrado un mínimo repitiendo 3♠, Sur habría pasado.</p>

<h3>Responder a un barrage a nivel de tres</h3>
<p>Cuenta bazas, no puntos. El palo de tu compañero dará unas seis bazas; para la manga hacen falta tres o cuatro más de tu parte, normalmente Ases y Reyes. Con apoyo y una mano débil, apoya para subir aún más el barrage. Recuerda que tu compañero tiene poca defensa: no dobles de castigo a los rivales confiando en su barrage.</p>
<div class="tip">Frente a un barrage de tu compañero, tus Ases y Reyes valen oro y tus Damas y Valets valen muy poco, salvo que estén en el palo de tu compañero.</div>
<div class="warn">Apoyar un dos débil no es una tentativa de manga. Si tienes una buena mano y quieres saber más, declara 2SA.</div>
`,
    keyPoints: [
      'Dos débil: seis cartas, 5-10 PH, la mayor parte de la fuerza en el palo; 2♣ nunca es débil.',
      'Barrage a nivel de tres: siete cartas, 5-10; cuatro de un mayor: ocho cartas (o siete con distribución).',
      'Regla del 2-3-4: a dos bazas con vulnerabilidad desfavorable, a tres con igual y a cuatro con favorable.',
      'No hagas barrages en cuarta posición.',
      'Los apoyos a un barrage son de barrage; 2SA sobre un dos débil pide un valor lateral (con un mínimo, se repite el palo).',
    ],
    quiz: [
      {
        q: 'Primera posición, igual vulnerabilidad. Tienes ♠84 ♥KQ10973 ♦J52 ♣63. ¿Qué abres?',
        options: ['Paso', '2♥', '3♥', '1♥'],
        answer: 1,
        explain: 'Seis buenos corazones y 6 PH es un dos débil de manual. Con siete corazones te plantearías 3♥; con 12+ PH abrirías de 1♥.',
      },
      {
        q: 'Tu compañero abre de 2♠ y el siguiente jugador pasa. Tienes ♠Q73 ♥K842 ♦A65 ♣J94 (10 PH). ¿Qué declaras?',
        options: ['Paso', '3♠', '2SA', '4♠'],
        answer: 1,
        explain: 'La manga es improbable frente a 5-10, pero con apoyo de tres cartas tu bando tiene nueve triunfos y los rivales tienen fit en algún palo. Apoya a 3♠ para ponerles más difícil entrar.',
      },
      {
        q: 'Abriste de 2♥ con ♠K5 ♥AQ10984 ♦862 ♣73 (9 PH). Tu compañero declara 2SA. ¿Qué redeclaras?',
        options: ['3♥', '3♠', '3SA', '4♥'],
        answer: 1,
        explain: '9 PH es un máximo, así que muestra tu valor lateral, el ♠K, con 3♠. 3♥ mostraría un mínimo y 3SA un palo sólido.',
      },
      {
        q: 'Según la regla del 2-3-4, ¿a cuántas bazas de tu contrato puedes quedarte con vulnerabilidad favorable?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'Con vulnerabilidad favorable, cuatro multas dobladas cuestan 800, no mucho más que los 620 que vale su manga vulnerable, y los rivales, que también buscan una manga o un slam, a menudo ni siquiera te doblan.',
      },
      {
        q: 'Tu compañero abre de 2♥. ¿Qué muestra tu apoyo a 3♥?',
        options: ['Una invitación a manga', 'Un apoyo de barrage, no invitativo', 'Un apoyo forcing', 'Una mano sin corazones'],
        answer: 1,
        explain: 'Apoyar un barrage prolonga el barrage. Si quieres que el abridor describa su mano, declara 2SA, la pregunta forcing.',
      },
    ],
  },

  {
    id: 'overcalls',
    title: 'Las intervenciones',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Cuándo intervenir después de que abran los rivales, qué muestran las distintas intervenciones y cómo responde el compañero.',
    body: `
<h3>¿Por qué intervenir?</h3>
<p>Cuando abre un rival, declarar un palo (una <strong>intervención</strong>) cumple tres funciones: compite por el parcial, quita espacio de subasta a los rivales y le dice a tu compañero en qué salir si ellos ganan la subasta. Por esta última función, <strong>la calidad del palo importa más que los puntos</strong>.</p>

<h3>Qué muestran las intervenciones</h3>
<table>
<thead><tr><th>Intervención</th><th>Muestra</th></tr></thead>
<tbody>
<tr><td>Palo a nivel de uno (1♦ – 1♠)</td><td>8-16 PH, un buen palo de cinco o más cartas</td></tr>
<tr><td>Palo a nivel de dos (1♠ – 2♦)</td><td>10-16 PH, un buen palo de cinco cartas (normalmente de seis)</td></tr>
<tr><td>Intervención débil a salto (1♣ – 2♠)</td><td>Un palo de seis cartas, 6-10 PH, como un dos débil</td></tr>
<tr><td>1SA</td><td>15-18 PH, equilibrada, con parada en el palo del abridor</td></tr>
</tbody>
</table>
<p>Con 17+ y una mano demasiado fuerte para una intervención simple, empieza con un doblo informativo y declara tu palo después.</p>

<h3>Ejemplos (ha abierto el rival de tu derecha)</h3>
<div class="hand" data-cards="S:KQJ74 H:83 D:952 C:A63" data-label="El rival de la derecha abre de 1♦: declara 1♠"></div>
<p>10 PH con un palo fuerte en el que te gustaría que saliera tu compañero.</p>
<div class="hand" data-cards="S:73 H:A4 D:KQ10862 C:K95" data-label="El rival de la derecha abre de 1♠: declara 2♦"></div>
<p>12 PH y un buen palo de seis cartas: lo bastante sólido para el nivel de dos.</p>
<div class="hand" data-cards="S:K5 H:AQ8 D:KJ63 C:KJ94" data-label="El rival de la derecha abre de 1♣: declara 1SA"></div>
<p>17 PH, equilibrada, con los tréboles bien parados.</p>
<div class="hand" data-cards="S:J7542 H:AJ3 D:K6 C:Q82" data-label="El rival de la derecha abre de 1♥: paso"></div>
<p>11 PH, pero las picas son malas y los valores están dispersos. Una intervención pediría salida a pica y podría acabar doblada con una multa grande. Pasa.</p>

<h3>Vulnerabilidad y nivel</h3>
<p>El riesgo de una intervención es un doblo de castigo. A nivel de uno ese riesgo es pequeño; a nivel de dos, sobre todo vulnerable, necesitas un buen palo que haga bazas aunque el resto de la mano de tu compañero sea pobre. Una intervención a nivel de dos con un palo de cinco cartas debe estar cerca de una apertura y con un palo fuerte.</p>

<h3>Responder a la intervención de tu compañero</h3>
<table>
<thead><tr><th>Voz del compañero del interventor</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Apoyo simple</td><td>6-9 con tres o más triunfos</td></tr>
<tr><td>Cue-bid del palo del abridor</td><td>Apoyo invitativo o más: 10+ con tres o más triunfos</td></tr>
<tr><td>Apoyo con salto</td><td>De barrage: débil, con cuatro o más triunfos</td></tr>
<tr><td>Palo nuevo</td><td>Natural, un buen palo de cinco o más cartas, no forcing</td></tr>
<tr><td>1SA</td><td>Unos 8-11 con parada en el palo del abridor</td></tr>
</tbody>
</table>
<div class="auction" data-calls="1H 1S P" data-dealer="W"></div>
<div class="hand" data-cards="S:Q84 H:752 D:KJ63 C:Q94" data-label="Eres Sur: declara 2♠"></div>
<p>8 PH y apoyo de tres cartas: apoya a 2♠. Apoyar enseguida a tu compañero les complica a los rivales encontrar su mejor contrato.</p>
<div class="hand" data-cards="S:K962 H:83 D:AQ74 C:K105" data-label="Eres Sur: declara 2♥"></div>
<p>12 PH y cuatro triunfos. El cue-bid de 2♥ muestra un apoyo invitativo o más; tu compañero declara 2♠ con una intervención mínima, y tú invitarás con 3♠, o declararás la manga si tu compañero muestra más.</p>
<div class="tip">Recuerda que el rango de una intervención es amplio (8-16). No saltes a la manga frente a una intervención solo porque tengas una mano de apertura: haz primero un cue-bid y deja que tu compañero se describa.</div>
<div class="warn">Una intervención no es una apertura. No intervengas con un palo débil solo porque tengas 12 puntos, y no dejes de intervenir con un palo fuerte solo porque tengas 9.</div>
`,
    keyPoints: [
      'Intervención a nivel de uno: 8-16 PH, buen palo de 5+. A nivel de dos: 10-16, buen palo de 5+ (normalmente de 6).',
      'Intervención débil a salto: palo de seis cartas, 6-10; intervención de 1SA: 15-18 equilibrada con parada.',
      'La calidad del palo importa más que los puntos, porque la intervención también indica la salida.',
      'Compañero del interventor: apoyo simple 6-9 con 3+ cartas; cue-bid = apoyo invitativo o más; apoyo con salto = barrage.',
      'Con 17+, demasiado fuerte para intervenir, dobla primero y declara tu palo después.',
    ],
    quiz: [
      {
        q: 'El rival de tu derecha abre de 1♦. Tienes ♠KQJ74 ♥83 ♦952 ♣A63. ¿Qué declaras?',
        options: ['Paso', '1♠', '2♠', 'Doblo'],
        answer: 1,
        explain: 'Un buen palo de cinco cartas con 10 PH es una intervención sólida a nivel de uno. 2♠ sería una intervención débil a salto, y un doblo sugeriría apoyo para corazones y tréboles.',
      },
      {
        q: 'El rival de tu derecha abre de 1♥. Tienes ♠J7542 ♥AJ3 ♦K6 ♣Q82 (11 PH). ¿Qué declaras?',
        options: ['1♠', 'Paso', '1SA', 'Doblo'],
        answer: 1,
        explain: 'El palo de picas es demasiado débil para pedir la salida, la mano no es un sin triunfo de 15-18 y no tienes la distribución para doblar. Pasa.',
      },
      {
        q: 'El rival de tu derecha abre de 1♣. Tienes ♠K5 ♥AQ8 ♦KJ63 ♣KJ94 (17 PH). ¿Qué declaras?',
        options: ['1♦', '1SA', 'Doblo', '2SA'],
        answer: 1,
        explain: 'Equilibrada, 15-18, con parada en tréboles: 1SA describe la mano en una sola voz. Tu compañero puede usar las mismas respuestas que sobre una apertura de 1SA.',
      },
      {
        q: 'El rival de tu izquierda abrió de 1♥ y tu compañero intervino con 1♠. Tienes ♠K962 ♥83 ♦AQ74 ♣K105 (12 PH). ¿Qué declaras?',
        options: ['2♠', '3♠', '2♥', '4♠'],
        answer: 2,
        explain: 'Con 10+ y apoyo, haz un cue-bid del palo de los rivales para mostrar un apoyo invitativo o más. 3♠ sería de barrage, y 4♠ podría ser demasiado alto frente a una intervención mínima.',
      },
      {
        q: 'El rival de tu derecha abre de 1♣. Tienes ♠KJ10984 ♥73 ♦Q52 ♣43 (6 PH). ¿Qué declaras?',
        options: ['Paso', '1♠', '2♠', '3♠'],
        answer: 2,
        explain: 'Seis buenas picas y 6-10 PH es una intervención débil a salto. Quita a los rivales sus voces a nivel de uno y sugiere la salida a pica.',
      },
    ],
  },

  {
    id: 'takeout-doubles',
    title: 'El doblo informativo',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Cómo usar el doblo para pedir a tu compañero que elija un palo, y cómo responden el compañero y el bando que ha abierto.',
    body: `
<h3>Qué dice un doblo informativo</h3>
<p>El doblo de una apertura a palo a nivel bajo no es de castigo: pide a tu compañero que declare. Muestra <strong>12+ PH, corto en el palo de apertura y apoyo (idealmente de cuatro cartas) para los palos no declarados</strong>, sobre todo para el mayor no declarado. La alternativa es una mano fuerte, 17+, de cualquier distribución, que volverá a hablar para mostrar lo que tiene de verdad.</p>
<div class="hand" data-cards="S:KJ85 H:AQ63 D:4 C:K1072" data-label="El rival de la derecha abre de 1♦: doblo"></div>
<p>13 PH, semifallo de diamante y cuatro cartas en cada uno de los otros palos: la distribución perfecta.</p>
<div class="hand" data-cards="S:K85 H:AQ6 D:K1073 C:Q72" data-label="El rival de la derecha abre de 1♦: paso"></div>
<p>14 PH, pero cuatro diamantes y solo tres cartas en cada mayor. Si doblas, tu compañero declarará corazones o picas con cuatro cartas y jugaréis un fit 4-3 desde la mano equivocada. Pasa.</p>

<h3>Responder a un doblo informativo</h3>
<div class="auction" data-calls="1H X P" data-dealer="W"></div>
<p>Oeste abrió de 1♥, tu compañero dobló y Este pasó. Tienes que declarar, por débil que seas: pasar convertiría el doblo en un doblo de castigo de 1♥. Prefiere un mayor y muestra tu fuerza por el nivel:</p>
<table>
<thead><tr><th>Puntos del compañero del doblador</th><th>Acción</th></tr></thead>
<tbody>
<tr><td>0-8</td><td>Declara tu mejor palo al nivel más barato</td></tr>
<tr><td>9-11</td><td>Salta en tu mejor palo (invitativo)</td></tr>
<tr><td>12+</td><td>Cue-bid del palo del abridor (forcing), o declara la manga</td></tr>
<tr><td>6-10, equilibrada</td><td>1SA, con parada en el palo del abridor</td></tr>
<tr><td>Paso</td><td>Solo con triunfos largos y fuertes en el palo del abridor (de castigo)</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:Q8642 H:753 D:J4 C:982" data-label="1♥ – doblo – paso: declara 1♠"></div>
<div class="hand" data-cards="S:KJ74 H:85 D:A1063 C:Q72" data-label="1♥ – doblo – paso: declara 2♠"></div>
<p>Con 3 PH, declara 1♠ sin miedo: tu compañero sabe que puedes no tener nada. Con 10 PH, salta a 2♠ para invitar a manga. Con ♠AJ74 ♥85 ♦KQ63 ♣Q72 (12 PH), declara tú mismo 4♠, o haz un cue-bid de 2♥ si no tienes claro cuál es la mejor manga.</p>
<p>Si el compañero del abridor declara (1♥ – doblo – 2♥), ya no estás obligado a hablar. Ahora declarar muestra algunos valores, unos 6+, y pasar muestra una mano débil.</p>

<h3>La redeclaración del doblador</h3>
<p>La voz al nivel más barato del compañero puede hacerse sin nada, así que el doblador no debe volver a hablar con un mínimo. Con 12-15, pasa; con unos 16-18, apoya un nivel; con 19+, salta. Si el doblador declara un palo nuevo, muestra el tipo fuerte de doblo (17+) con un palo largo propio.</p>

<h3>El bando que ha abierto: el redoblo</h3>
<div class="auction" data-calls="1H X XX" data-dealer="N"></div>
<p>Cuando doblan la apertura de tu compañero, un <strong>redoblo</strong> muestra 10+ PH. Le dice al abridor que vuestro bando tiene la mayor parte de la fuerza y normalmente significa que buscas la ocasión de doblar de castigo a los rivales. Tras una apertura en mayor, <strong>2SA (Jordan)</strong> muestra apoyo de cuatro o más cartas y un apoyo invitativo o más fuerte (10+ puntos de apoyo), así que el redoblo suele negar cuatro triunfos. Con apoyo y una mano más débil, apoya a tu compañero: el apoyo simple muestra unos 6-10 puntos, y el apoyo a salto (1♥ – doblo – 3♥) es de barrage, con cuatro triunfos y menos de 10 PH. Con un palo nuevo y menos de 10, decláralo.</p>

<h3>Doblos de barrages</h3>
<p>El doblo de un dos débil o de un barrage a nivel de tres también es informativo: valores de apertura, corto en su palo y preparado para cualquier palo que declare tu compañero. Tu compañero puede tener que declarar a nivel de tres con una mano débil, así que el doblador debe ser sólido, no ligero.</p>
<div class="tip">El doblo informativo ideal es corto en el palo del rival y tiene cuatro cartas en cada mayor no declarado. Cuanto más corto seas en su palo, más ligero puedes doblar.</div>
<div class="warn">No dobles con un palo largo propio y una mano mediana: interviene. Un doblo informativo seguido de tu propio palo muestra 17+ PH.</div>
`,
    keyPoints: [
      'Doblo informativo: 12+ PH, corto en su palo, apoyo para los palos no declarados; o 17+ de cualquier distribución con intención de volver a hablar.',
      'El compañero del doblador debe declarar: 0-8 al nivel más barato, 9-11 con salto, 12+ cue-bid o manga; 1SA = 6-10 con parada.',
      'Pasa el doblo solo con triunfos largos y fuertes en su palo.',
      'El doblador pasa una respuesta mínima con 12-15, apoya con 16-18 y salta con 19+.',
      'El redoblo tras un doblo informativo muestra 10+ PH; sobre 1♥ o 1♠, 2SA (Jordan) muestra cuatro triunfos y un apoyo invitativo o más, y el apoyo a salto es de barrage.',
    ],
    quiz: [
      {
        q: 'El rival de tu derecha abre de 1♣. Tienes ♠AQ83 ♥KJ62 ♦Q1074 ♣5 (12 PH). ¿Qué declaras?',
        options: ['1♦', 'Doblo', '1♠', 'Paso'],
        answer: 1,
        explain: 'Corto en tréboles y cuatro cartas en cada uno de los otros palos: un doblo informativo ideal. Declare lo que declare tu compañero, tienes apoyo.',
      },
      {
        q: '1♥ – doblo – paso – ? Tienes ♠Q8642 ♥753 ♦J4 ♣982 (3 PH).',
        options: ['Paso', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Tienes que declarar: pasar dejaría 1♥ doblado de castigo y los rivales probablemente lo cumplirían con bazas de más. Declara tu mejor palo al nivel más barato.',
      },
      {
        q: '1♥ – doblo – paso – ? Tienes ♠KJ74 ♥85 ♦A1063 ♣Q72 (10 PH).',
        options: ['1♠', '2♠', '4♠', '2♥'],
        answer: 1,
        explain: '9-11 puntos: salta en tu mejor palo para invitar a manga. 1♠ podría hacerse sin nada, así que se quedaría corto para esta mano.',
      },
      {
        q: '1♠ – doblo – paso – ? Tienes ♠K104 ♥82 ♦Q963 ♣J752 (6 PH).',
        options: ['2♣', '2♦', '1SA', 'Paso'],
        answer: 2,
        explain: '1SA muestra 6-10 con parada en picas y te permite quedarte a nivel de uno. Declarar un menor a nivel de dos es una alternativa posible, pero 1SA describe mejor esta mano equilibrada.',
      },
      {
        q: 'Tu compañero abre de 1♥ y el rival de tu derecha dobla. ¿Qué muestra tu redoblo?',
        options: ['Un doblo de castigo de 1♥', '10+ PH', 'Apoyo a corazones', 'Una mano débil'],
        answer: 1,
        explain: 'El redoblo muestra 10+ PH y dice que la mano es de vuestro bando. Con apoyo y menos puntos, apoyarías en su lugar.',
      },
    ],
  },

  {
    id: 'hold-up-and-entries',
    title: 'El hold-up y las entradas',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Cómo cortar las comunicaciones de los defensores reteniendo una parada, y cómo gestionar tus propias entradas.',
    body: `
<h3>El hold-up</h3>
<p>Contra sin triunfo, los defensores suelen atacar su palo largo. Si ganas la primera vuelta con tu única parada y después cedes la mano al compañero de ese defensor, este puede devolver el palo y las cartas largas correrán. Hacer <strong>hold-up</strong> significa negarse a ganar la primera vuelta (o las primeras vueltas) de su palo, para que el defensor que podría tomar la mano no tenga ya ninguna carta de ese palo que devolver.</p>
<div class="deal" data-n="S:953 H:K82 D:QJ974 C:K6" data-e="S:72 H:QJ105 D:A63 C:10543" data-s="S:A64 H:A73 D:K105 C:AQ82" data-w="S:KQJ108 H:964 D:82 C:J97" data-caption="3SA por Sur. Oeste sale con el ♠K."></div>
<div class="auction" data-calls="1NT P 2NT P 3NT P P P" data-dealer="S"></div>
<p><strong>Cuenta:</strong> ♠A, ♥AK, ♣AKQ: seis ganadoras seguras. Los diamantes dan cuatro más una vez expulsado el ♦A. Tienes que ceder la mano una vez.</p>
<p><strong>Peligro:</strong> las picas de Oeste. Si ganas la primera pica y Este toma el ♦A, Este devuelve pica y Oeste hace cuatro bazas de pica: una multa.</p>
<p><strong>El hold-up:</strong> juega pequeño sobre el ♠K. Oeste continúa con la ♠Q y ganas con el As. Este ha servido dos veces y no le quedan picas. Ahora expulsa el ♦A. Tal como están las cartas, lo gana Este, que no tiene pica que devolver, y haces diez bazas. Si Oeste tuviera el ♦A, te multarían, pero entonces no había forma de cumplir el contrato: el hold-up es una oportunidad extra gratuita.</p>

<h4>Cuántas veces retener: la regla del 7</h4>
<p>Resta de siete el número de cartas que tenéis en el palo entre tú y el muerto. El resultado es el número de veces que debes agacharte. Aquí tenéis seis picas entre las dos manos, así que 7 − 6 = 1: agáchate una vez y gana la segunda vuelta. Esto supone que el palo está 5-2; fíjate en las cartas que caen y ajústalo.</p>

<h4>Cuándo no hacer hold-up</h4>
<ul>
<li>Cuando el defensor que puede tomar la mano ya no tiene cartas del palo, o el palo no se puede correr.</li>
<li>Cuando retener permite a los defensores cambiar a un palo aún más peligroso.</li>
<li>Cuando tienes dos paradas y el defensor peligroso no puede entrar dos veces. Con A K x, a menudo puedes ganar la primera baza y seguir teniendo parada cuando recuperen la mano.</li>
</ul>
<div class="tip">El golpe de Bath: con A J x en tu mano, cuando Oeste sale con el Rey, juega pequeño. Si Oeste continúa el palo, tu A J hace dos bazas; si Oeste cambia, tu A J sigue guardando el palo: Oeste no puede volver a jugarlo sin darte una baza.</div>

<h3>Gestionar las entradas</h3>
<p>Una entrada es una carta que te permite ganar una baza en una mano determinada. Muchos contratos se pierden no por falta de ganadoras, sino por no tener forma de llegar a ellas.</p>
<ul>
<li><strong>Cuenta las entradas antes de la primera baza.</strong> Decide qué mano tendrá que estar en la mano más tarde y gana la primera baza en consecuencia.</li>
<li><strong>Desbloquea:</strong> juega primero las cartas altas de la mano más corta. Con ♦Q3 en la mano y ♦AKJ105 en el muerto (sin otras entradas al muerto), cobra primero la Q y luego juega el 3 al muerto.</li>
<li><strong>Agáchate</strong> en la vuelta que tienes que perder mientras la mano larga aún conserva sus cartas altas (consulta la lección “Afirmar palos largos”).</li>
<li><strong>Sobrepasa</strong> para cambiar de mano: con la ♥Q semifallo en la mano frente a ♥AKJ104 y sin otra entrada al muerto, sobrepasa la Q con el K y corre el palo.</li>
<li><strong>Guarda la entrada tardía:</strong> cuando hay que afirmar un palo en el muerto, usa primero las entradas de tu mano y reserva las del muerto para el final.</li>
</ul>
<div class="warn">No ganes una baza en la mano equivocada «porque da igual». Si no has decidido en qué mano necesitas estar más tarde, es demasiado pronto para jugar a la baza.</div>
`,
    keyPoints: [
      'Retén tu parada para que el defensor que pueda tomar la mano no tenga ya cartas de su palo.',
      'Regla del 7: agáchate 7 menos las cartas que tenéis entre las dos manos en el palo (una guía, suponiendo un reparto 5-2).',
      'No hagas hold-up cuando un cambio de palo sea más peligroso o cuando tengas paradas suficientes.',
      'Desbloquea jugando primero los honores de la mano corta; sobrepasa para cambiar de mano.',
      'Planifica las entradas antes de la primera baza y gana la primera baza en la mano adecuada.',
    ],
    quiz: [
      {
        q: 'Entre tú y el muerto tenéis seis cartas del palo con el que atacan los defensores contra 3SA, y solo el As como parada. ¿Cuántas veces debes agacharte?',
        options: ['Nunca', 'Una vez', 'Dos veces', 'Tres veces'],
        answer: 1,
        explain: 'Regla del 7: 7 − 6 = 1. Si el palo está 5-2, ganar la segunda vuelta deja al compañero del jugador con el palo largo sin carta que devolver.',
      },
      {
        q: '¿Cuál es el objetivo del hold-up?',
        options: ['Hacer una baza de más', 'Agotar el palo del compañero del jugador con el palo largo para que no pueda devolverlo', 'Averiguar quién tiene los honores que faltan', 'Ahorrar una entrada al muerto'],
        answer: 1,
        explain: 'Si el defensor que toma la mano no tiene cartas del palo largo, las cartas largas de su compañero quedan aisladas y puede que nunca se cobren.',
      },
      {
        q: 'En la mano de arriba, ¿por qué no sirve el hold-up si Oeste tiene el ♦A?',
        options: ['Porque entonces Oeste puede cobrar las picas que le quedan', 'Porque los diamantes se bloquearían', 'Porque Este podría fallar', 'Sí sirve también en ese caso'],
        answer: 0,
        explain: 'El hold-up solo agota a Este. Si Oeste, la mano con las picas largas, toma la mano con el ♦A, cobra las picas afirmadas. Ninguna línea lo evita; el hold-up gana siempre que Este tenga el ♦A.',
      },
      {
        q: 'Tienes ♦Q3 en la mano y ♦AKJ105 en el muerto, que no tiene otra entrada. ¿Cómo juegas los diamantes?',
        options: ['Jugar primero el 3 al As', 'Cobrar primero la Q y luego jugar el 3 al muerto', 'Salir con el Valet del muerto', 'Agacharse en la primera vuelta'],
        answer: 1,
        explain: 'Juega primero la carta alta de la mano corta. Tras la Q, el 3 te lleva al muerto y puedes correr allí el resto del palo.',
      },
      {
        q: 'Oeste sale con el ♣K contra 3SA y tienes ♣AJ4 en la mano. ¿En qué consiste el golpe de Bath?',
        options: ['Ganar con el As enseguida', 'Jugar pequeño, para que si continúa en tréboles se tope con tu A J', 'Jugar el Valet', 'Descartarse del muerto'],
        answer: 1,
        explain: 'Al agacharte invitas a Oeste a continuar el palo hacia tu A J, lo que te da dos bazas, y si Oeste cambia, sigues guardando el palo.',
      },
    ],
  },

  {
    id: 'trump-management',
    title: 'El manejo de los triunfos',
    topic: 'Declarer play',
    level: 'Intermediate',
    summary: 'Cuándo destriunfar enseguida, cuándo retrasarlo, cómo aprovechar los fallos en la mano corta y cómo mantener el control del palo de triunfo.',
    body: `
<h3>Lo normal: destriunfar</h3>
<p>Cuando eres el declarante en un contrato a palo, los triunfos de los defensores amenazan tus ganadoras: cada ganadora de un palo lateral que cobres podría ser fallada. Por eso el plan normal es <strong>destriunfar pronto</strong>, contando los triunfos de los rivales a medida que caen. Si tienen cinco triunfos y ambos sirven a dos vueltas, queda uno fuera; si un defensor no sirve, conoces el reparto exacto.</p>

<h3>Razones para retrasar el destriunfo</h3>
<ol>
<li><strong>Necesitas los triunfos del muerto para fallar.</strong> Fallar perdedoras en la mano corta en triunfos crea bazas extra. Si destriunfar gastara los triunfos del muerto, haz antes los fallos (mira la mano de 4♠ de la lección “Planificar el carteo”).</li>
<li><strong>Tienes que descartar perdedoras rápido.</strong> Si los defensores tienen un honor de triunfo y tomarán la mano cuando juegues triunfo, asegúrate de que entonces no puedan cobrar bazas suficientes para multarte.</li>
<li><strong>Necesitas los triunfos como entradas</strong>, por ejemplo para llegar a un palo lateral largo o para repetir impasses.</li>
<li><strong>Planeas un fallo cruzado</strong>, usando por separado los triunfos de las dos manos.</li>
</ol>

<h3>Descartar antes de destriunfar</h3>
<div class="deal" data-n="S:10843 H:AKQ5 D:842 C:Q4" data-s="S:KQJ97 H:64 D:A73 C:K52" data-caption="4♠ por Sur. Oeste sale con el ♦K."></div>
<p><strong>Cuenta las perdedoras:</strong> el ♠A, dos diamantes una vez que la salida ha hecho caer el ♦A, y el ♣A (la tercera vuelta de tréboles se puede fallar en el muerto). Cuatro perdedoras.</p>
<p>Si juegas triunfo ahora, el defensor que gana con el ♠A cobra dos bazas de diamante y, con el ♣A aún por llegar, te multan. En lugar de eso, gana con el ♦A y juega enseguida el ♥A, el ♥K y la ♥Q, descartando un diamante de tu mano sobre el tercer corazón. Solo entonces juega triunfo. Pierdes el ♠A, un diamante y el ♣A.</p>
<p>El riesgo es que alguien falle el tercer corazón. Eso solo ocurre si los corazones están 5-2 o peor <em>y</em> el defensor con el doubleton tiene un triunfo con el que fallar, un riesgo mucho menor que la multa segura de destriunfar primero.</p>
<div class="tip">Pregúntate: «Cuando ceda la mano en triunfo, ¿cuántas bazas pueden cobrar los defensores?». Si la respuesta es demasiadas, deshazte antes de una perdedora.</div>

<h3>Fallar: la mano corta gana, la larga no</h3>
<p>Con cinco triunfos en la mano y tres en el muerto, tus cinco triunfos harán cinco bazas de todos modos. Un fallo en tu mano solo gasta uno de ellos. Un fallo en el muerto es una baza extra, porque los triunfos pequeños del muerto nunca ganarían una baza de otro modo. Planifica tus fallos en la mano <strong>corta</strong> en triunfos.</p>
<p>Fallar en la mano larga es útil por otros motivos: para afirmar un palo largo en el muerto fallando las cartas de los rivales, o para acortar tus triunfos de cara a una puesta en mano o a un golpe de triunfo.</p>

<h3>El fallo cruzado</h3>
<p>Cuando las dos manos tienen un palo corto, puedes fallar las perdedoras de una mano con los triunfos de la otra, de un lado a otro, sin destriunfar en absoluto. Reglas para el fallo cruzado:</p>
<ul>
<li><strong>Cobra primero tus ganadoras de los palos laterales.</strong> Si no, los defensores se descartarán de esos palos durante el fallo cruzado y después fallarán tus ganadoras.</li>
<li>Falla alto cuando sea posible un sobrefallo, para que los defensores no puedan hacer baratos sus triunfos pequeños.</li>
<li>Cuenta: el fallo cruzado debe darte exactamente las bazas que necesitas.</li>
</ul>

<h3>Mantener el control</h3>
<p>Si los defensores insisten en un palo que tienes que fallar en tu mano larga, puedes acabar con menos triunfos que un defensor: has perdido el <strong>control del triunfo</strong>, y los triunfos que le quedan a ese defensor harán bazas mientras corre el palo largo de su compañero. Defensas contra este acortamiento:</p>
<ul>
<li>Descarta una perdedora en lugar de fallar (pierde una baza que ibas a perder de todos modos), para que el siguiente golpe llegue cuando el muerto pueda fallar.</li>
<li>Saca pronto los triunfos pequeños de los rivales, aunque dejes fuera su triunfo más alto, para que el siguiente acortamiento no te cueste el control.</li>
<li>Prefiere un contrato en el que sea la mano corta en triunfos la que reciba el acortamiento.</li>
</ul>
<div class="warn">No gastes dos de tus triunfos para sacar uno suyo cuando su último triunfo es el más alto. Es una baza para ellos de todos modos; deja que la hagan cuando quieran y usa tus triunfos para controlar el carteo.</div>
`,
    keyPoints: [
      'Normalmente destriunfa pronto, contando los triunfos de los rivales a medida que caen.',
      'Retrásalo cuando necesites los triunfos del muerto para fallar, debas descartar perdedoras antes de ceder la mano o necesites entradas de triunfo.',
      'Los fallos en la mano corta en triunfos ganan bazas; los fallos en la mano larga normalmente no.',
      'Antes de un fallo cruzado, cobra tus ganadoras de los palos laterales.',
      'No gastes dos triunfos para sacar el triunfo más alto de los rivales.',
    ],
    quiz: [
      {
        q: '¿Cuándo es un error destriunfar de inmediato?',
        options: ['Nunca: hay que destriunfar siempre primero', 'Cuando necesitas los triunfos del muerto para fallar tus perdedoras', 'Cuando los rivales tienen cinco triunfos', 'Cuando tienes nueve triunfos'],
        answer: 1,
        explain: 'Destriunfar gastaría los triunfos del muerto además de los de los rivales. Haz primero los fallos en la mano corta y después saca el resto.',
      },
      {
        q: 'En la mano de 4♠ de arriba, ¿qué debe hacer el declarante después de ganar con el ♦A?',
        options: ['Jugar el ♠K', 'Cobrar tres corazones, descartando un diamante', 'Jugar un trébol hacia la ♣Q', 'Agacharse en diamantes'],
        answer: 1,
        explain: 'Los defensores tienen el ♠A y dos bazas de diamante preparadas. Descarta primero un diamante sobre el tercer corazón y solo después juega triunfo.',
      },
      {
        q: 'A los rivales les queda un triunfo: el As. Tienes triunfos y ganadoras de sobra. ¿Qué debes hacer normalmente?',
        options: ['Jugar triunfo para hacer salir el As enseguida', 'Dejarlo y jugar tus palos laterales; es una baza suya de todos modos', 'Fallar algo en el muerto', 'Ceder el resto'],
        answer: 1,
        explain: 'Sacarlo te cuesta dos de tus triunfos (uno de cada mano) por una baza que ellos ganarán siempre. Que fallen con él si quieren; tus triunfos siguen controlando el carteo.',
      },
      {
        q: 'Vas a jugar un fallo cruzado. ¿Qué debes hacer primero?',
        options: ['Dar dos vueltas de triunfo', 'Cobrar tus ganadoras de los palos laterales', 'Fallar con tus triunfos más bajos', 'Ceder una baza'],
        answer: 1,
        explain: 'Durante un fallo cruzado los defensores se descartan. Si se descartan de un palo lateral que no has cobrado, después podrán fallar tus ganadoras.',
      },
      {
        q: 'Tienes cinco triunfos en la mano y tres en el muerto. ¿Qué fallo crea una baza extra?',
        options: ['Fallar en tu mano', 'Fallar en el muerto', 'Los dos', 'Ninguno'],
        answer: 1,
        explain: 'Tus cinco triunfos hacen cinco bazas con o sin fallos. Los tres triunfos pequeños del muerto solo ganan bazas fallando.',
      },
    ],
  },

  {
    id: 'defensive-signals',
    title: 'Las señales en defensa',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Cómo usan los defensores el tamaño de las cartas que juegan para mostrar actitud, cuenta y preferencia de palo.',
    body: `
<h3>Hablar con las cartas</h3>
<p>Los defensores no pueden ver la mano del otro, pero pueden elegir legalmente <em>qué</em> carta jugar. Cuando no intentas ganar la baza, la carta pequeña que juegas envía un mensaje. Las señales estándar son de tres tipos; la situación le dice a tu compañero cuál estás dando.</p>
<table>
<thead><tr><th>Señal</th><th>Cuándo</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>Actitud</td><td>Tu compañero sale en un palo; tu primer descarte</td><td>Alta anima, baja desanima</td></tr>
<tr><td>Cuenta</td><td>El declarante juega un palo lateral (no se da cuenta en triunfo)</td><td>Alta-baja = número par, baja-alta = impar</td></tr>
<tr><td>Preferencia de palo</td><td>Cuando juegas un palo para que tu compañero falle</td><td>La carta alta pide el más alto de los otros palos, la baja el más bajo; una carta intermedia, ninguna preferencia</td></tr>
</tbody>
</table>

<h3>Actitud</h3>
<p>Contra 4♥, tu compañero sale con el ♠A (desde AK) y el muerto tiene ♠8 6 4.</p>
<ul>
<li>Con ♠Q 9 3, juega el 9: te gustan las picas, porque tu Dama ganará la tercera vuelta.</li>
<li>Con ♠7 5 2, juega el 2: no tienes nada en picas, así que tu compañero debería pensar en cambiar.</li>
<li>Con un doubleton ♠9 3, juega el 9 y luego el 3: el alta-baja le pide que continúe, y fallarás la tercera vuelta.</li>
</ul>
<p>Los descartes funcionan igual: el primer descarte muestra actitud. Tirar el ♣9 dice «me gustan los tréboles»; tirar el ♦2 dice «no quiero diamantes». Descártate solo de un palo del que puedas prescindir. Si en el palo que quieres no tienes ninguna carta pequeña de 6 o más que puedas soltar, descarta tu carta más baja de un palo que no quieras.</p>

<h3>Cuenta</h3>
<p>Cuando el declarante juega un palo, muestra cuántas cartas tienes en él: alta-baja con un número par (dos o cuatro), la más baja primero con un número impar (tres). La cuenta permite a tu compañero deducir la distribución del declarante y, sobre todo, le dice cuándo tomar con un As.</p>
<table>
<thead><tr><th>Posición</th><th>Diamantes</th></tr></thead>
<tbody>
<tr><td>Norte (muerto, sin entrada lateral)</td><td>K Q J 10 5</td></tr>
<tr><td>Este (tú)</td><td>A 7 3</td></tr>
<tr><td>Oeste y Sur</td><td>9 8 6 4 2 entre los dos</td></tr>
</tbody>
</table>
<p>El declarante juega diamantes hacia el muerto. Quieres ganar con tu As en la vuelta en que el declarante juegue su <em>último</em> diamante, dejándole sin acceso al resto del palo del muerto. Si tu compañero empieza por el 9 (alta: número par, aquí dos), el declarante tiene tres: agáchate dos veces y toma la tercera vuelta. Si tu compañero juega primero el 4 (baja: impar, aquí tres), el declarante tiene dos: toma la segunda vuelta. Sin la cuenta de tu compañero estarías adivinando.</p>

<h3>Preferencia de palo</h3>
<p>A veces la actitud y la cuenta no significan nada, y entonces el tamaño de la carta señala otro palo. El caso clásico es un fallo. Las picas son triunfo y juegas un corazón para que tu compañero lo falle. Los otros palos son diamantes y tréboles. Juega un corazón <strong>alto</strong> para pedir la vuelta a diamante (el de mayor rango de los dos) y un corazón <strong>bajo</strong> para pedir trébol. Si tienes el ♦A, juega tu corazón más alto; tu compañero falla, devuelve diamante a tu As y le das un segundo fallo.</p>
<p>Sin preferencia, juega una carta intermedia. Algunas parejas también usan la preferencia de palo al devolver el palo del compañero; los bots de esta aplicación solo la usan al dar un fallo.</p>

<h3>Buenos hábitos</h3>
<ul>
<li>Sobre la salida de tu compañero, señala primero actitud; sobre la del declarante, cuenta; usa la preferencia de palo solo cuando la situación sea clara.</li>
<li>No señales con una carta que podría ganar una baza más tarde. Desde Q J 10 9 7, el 7 puede bastar para animar.</li>
<li>Señala a ritmo constante: piensa cuando baje el muerto, no en mitad de una baza.</li>
<li>No des la cuenta cuando solo pueda ayudar al declarante, por ejemplo cuando el declarante duda cómo jugar un palo y la cuenta no le serviría de nada a tu compañero. Los bots de esta aplicación siempre dan la cuenta cuando el declarante juega un palo lateral, así que puedes practicar su lectura.</li>
</ul>
<div class="warn">Una señal es información, no una orden. Tu compañero la combina con lo que ve en el muerto y en su propia mano, y puede tener buenas razones para hacer otra cosa.</div>
`,
    keyPoints: [
      'Actitud sobre la salida de tu compañero y en tu primer descarte: alta anima, baja desanima.',
      'Cuenta cuando el declarante juega un palo lateral: alta-baja muestra un número par, baja-alta un número impar.',
      'Usa la cuenta para saber cuándo tomar con tu As contra un palo largo del muerto sin entradas.',
      'Preferencia de palo: una carta alta pide el otro palo de mayor rango, una baja el de menor rango; una intermedia, ninguna preferencia.',
      'Nunca malgastes una carta que podría hacer baza solo para señalar.',
    ],
    quiz: [
      {
        q: 'Tu compañero sale con el ♠A (desde AK) contra 4♥. El muerto tiene ♠8 6 4. Tienes ♠Q 9 3. ¿Qué carta juegas?',
        options: ['♠Q', '♠9', '♠3', 'Da igual'],
        answer: 1,
        explain: 'El 9 anima. Tu compañero continúa con el Rey y tu Dama gana la tercera vuelta. Jugar el 3 le diría a tu compañero que no tienes nada en picas.',
      },
      {
        q: 'El declarante juega un palo en el que tienes 8 3. ¿Qué carta debes jugar primero para dar tu cuenta?',
        options: ['El 8', 'El 3', 'Cualquiera', 'Ninguna: nunca se da la cuenta'],
        answer: 0,
        explain: 'El alta-baja muestra un número par. Juega ahora el 8 y la próxima vez el 3; tu compañero sabrá que empezaste con dos (o cuatro).',
      },
      {
        q: 'Con señales estándar, tu primer descarte es el ♣2. ¿Qué dice?',
        options: ['Me gustan los tréboles', 'No quiero tréboles', 'Tengo dos tréboles', 'Juega diamante'],
        answer: 1,
        explain: 'El primer descarte muestra actitud. Una carta baja desanima el palo del que te descartas.',
      },
      {
        q: 'El muerto tiene ♦K Q J 10 5 y ninguna entrada lateral; tú tienes ♦A 7 3. El declarante juega diamantes y tu compañero juega el 9 y luego el 4. ¿Cuándo debes tomar con tu As?',
        options: ['En la primera vuelta', 'En la segunda vuelta', 'En la tercera vuelta', 'Nunca'],
        answer: 2,
        explain: 'El alta-baja de tu compañero muestra un número par, dos, así que el declarante empezó con tres. Gana con el As en la tercera vuelta, cuando al declarante ya no le quede diamante para llegar al muerto.',
      },
      {
        q: 'Las picas son triunfo. Juegas un corazón para que tu compañero falle y quieres que te devuelva diamante. Desde ♥9 8 2, ¿qué corazón juegas?',
        options: ['♥9', '♥8', '♥2', 'Da igual'],
        answer: 0,
        explain: 'Es una situación de preferencia de palo. Una carta alta pide el de mayor rango de los palos laterales restantes (diamantes antes que tréboles).',
      },
    ],
  },

  {
    id: 'negative-doubles',
    title: 'El doblo negativo',
    topic: 'Competitive bidding',
    level: 'Intermediate',
    summary: 'Cómo usa el respondedor el doblo tras una intervención para mostrar el mayor no declarado, y cómo se combinan el paso de castigo y el doblo de reapertura.',
    body: `
<h3>El problema</h3>
<p>Tu compañero abre de 1♦ y el rival de tu derecha interviene con 1♠. Tienes cuatro corazones y 9 PH. Declarar 2♥ prometería cinco corazones y 10+ puntos, así que no puedes hacerlo, pero no quieres perder un posible fit en corazones. La solución es el <strong>doblo negativo</strong>: tras la apertura de tu compañero y una intervención hasta 2♠ inclusive, el doblo del respondedor es informativo y muestra el mayor (o los mayores) no declarado.</p>

<h3>Qué muestra el doblo</h3>
<p>Fuerza: 6+ PH cuando la intervención es a nivel de uno y 8+ cuando es a nivel de dos. Distribución:</p>
<table>
<thead><tr><th>Subasta</th><th>El doblo del respondedor muestra</th></tr></thead>
<tbody>
<tr><td>1♣ – (1♦) – X</td><td>Los dos mayores (normalmente cuatro cartas en cada uno)</td></tr>
<tr><td>1♣ o 1♦ – (1♥) – X</td><td>Exactamente cuatro picas (1♠ mostraría cinco o más)</td></tr>
<tr><td>1♣ o 1♦ – (1♠) – X</td><td>Cuatro o más corazones (2♥ mostraría cinco y 10+)</td></tr>
<tr><td>1♥ – (1♠) – X</td><td>Los menores, o valores sin una voz clara</td></tr>
<tr><td>1♥ – (2♣ o 2♦) – X</td><td>Cuatro picas, 8+ PH</td></tr>
<tr><td>1♠ – (2♣ o 2♦) – X</td><td>Cuatro o más corazones, 8+ PH</td></tr>
</tbody>
</table>
<div class="hand" data-cards="S:852 H:KJ74 D:Q3 C:K1065" data-label="1♦ – (1♠) – ?: doblo"></div>
<div class="hand" data-cards="S:KJ75 H:842 D:Q63 C:J95" data-label="1♣ – (1♥) – ?: doblo"></div>
<div class="hand" data-cards="S:AQ74 H:5 D:K863 C:J1072" data-label="1♥ – (2♣) – ?: doblo"></div>
<p>La primera mano muestra sus cuatro corazones. La segunda tiene exactamente cuatro picas y 7 PH: dobla en lugar de declarar 1♠. La tercera muestra cuatro picas y fuerza suficiente para el nivel de dos.</p>

<h3>La redeclaración del abridor tras un doblo negativo</h3>
<ul>
<li>Con cuatro cartas en el mayor que ha mostrado tu compañero, decláralo: al nivel más barato con un mínimo, o con salto con valores extra (unos 16-18).</li>
<li>Si no, haz tu redeclaración normal: repite un palo de seis cartas, declara un segundo palo o declara sin triunfo con parada en el palo del interventor.</li>
<li>Con una tenencia larga y fuerte en el palo del interventor, puedes pasar el doblo para castigar.</li>
</ul>

<h3>El paso de castigo y el doblo de reapertura</h3>
<p>Como el doblo del respondedor es informativo, el respondedor no puede doblar de castigo con una tenencia fuerte en el palo del interventor. En su lugar, <strong>pasa</strong> y espera. Cuando el abridor es corto en el palo de la intervención, debe reabrir con un doblo, que el respondedor convierte en castigo pasando.</p>
<div class="hand" data-cards="S:K5 H:73 D:AJ84 C:KQ1093" data-label="1♥ – (2♣) – ?: paso"></div>
<div class="auction" data-calls="1H 2C P P X P P P" data-dealer="N"></div>
<div class="hand" data-cards="S:A863 H:AQJ74 D:K52 C:6" data-label="Abridor (Norte): doblo de reapertura"></div>
<p>El ♣KQ1093 de Sur está situado detrás de los tréboles de Este y es probable que 2♣ doblado se multe en varias bazas. Norte, con semifallo de trébol, reabre con un doblo porque el paso de su compañero puede ser justamente este tipo de mano. Con longitud en el palo del interventor, el abridor debe ser más prudente al reabrir: entonces es poco probable que su compañero esté esperando para castigar.</p>
<div class="tip">Tras una intervención, un palo nuevo del respondedor sigue siendo natural y forcing, pero muestra cinco cartas, ya que con cuatro tenía disponible el doblo negativo.</div>
<div class="warn">Un doblo negativo no es un doblo de castigo. Si quieres castigar la intervención, pasa y espera que tu compañero reabra.</div>
`,
    keyPoints: [
      'Cuando tu compañero abre y el rival de la derecha interviene (hasta 2♠), el doblo del respondedor es informativo.',
      'Muestra el mayor (o los mayores) no declarado: 6+ PH a nivel de uno, 8+ a nivel de dos.',
      '1♣/1♦ – (1♥) – X muestra exactamente cuatro picas; 1♠ mostraría cinco.',
      'Con longitud fuerte en el palo del interventor, el respondedor pasa; el abridor reabre con un doblo cuando es corto en ese palo.',
      'El abridor redeclara de forma natural, saltando en el mayor de su compañero con valores extra.',
    ],
    quiz: [
      {
        q: '1♦ – (1♠) – ? Tienes ♠852 ♥KJ74 ♦Q3 ♣K1065 (9 PH).',
        options: ['2♥', 'Doblo', '1SA', 'Paso'],
        answer: 1,
        explain: '2♥ prometería cinco corazones y 10+ puntos. El doblo negativo muestra cuatro o más corazones con 6+ y mantiene a la vista el fit en corazones.',
      },
      {
        q: '1♣ – (1♥) – ? Tienes ♠KJ752 ♥84 ♦Q63 ♣J95 (7 PH).',
        options: ['Doblo', '1♠', '1SA', '2♠'],
        answer: 1,
        explain: 'Tras una intervención de 1♥, el doblo muestra exactamente cuatro picas, así que con cinco picas declara 1♠.',
      },
      {
        q: '1♥ – (2♣) – ? Tienes ♠K5 ♥73 ♦AJ84 ♣KQ1093 (13 PH).',
        options: ['Doblo', 'Paso', '3SA', '2SA'],
        answer: 1,
        explain: 'Te encantaría doblar de castigo, pero tu doblo sería negativo. Pasa y espera que tu compañero reabra con un doblo cuando sea corto en tréboles; tú lo pasarás.',
      },
      {
        q: 'Abriste de 1♥ con ♠A863 ♥AQJ74 ♦K52 ♣6. El rival de tu izquierda intervino con 2♣ y siguieron dos pasos hasta ti. ¿Qué haces?',
        options: ['Paso', 'Doblo', '2♥', '2♠'],
        answer: 1,
        explain: 'Con semifallo en el palo del interventor, reabre con un doblo. Tu compañero puede haber pasado con una tenencia fuerte en tréboles y pasará para castigar; si no, declarará su mejor palo.',
      },
      {
        q: '¿Hasta qué nivel de intervención sigue siendo negativo (informativo) el doblo del respondedor en este sistema?',
        options: ['1♠', '2♠', '3♠', '4♠'],
        answer: 1,
        explain: 'Los doblos negativos se aplican hasta 2♠. Por encima, muchas parejas también acuerdan que el doblo es informativo, pero este sistema lo define hasta 2♠.',
      },
    ],
  },

  {
    id: 'slam-bidding-and-blackwood',
    title: 'Reconocer el slam y el Blackwood',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Cómo saber cuándo es posible el slam y cómo usar el Blackwood para asegurarte de que no faltan dos Ases.',
    body: `
<h3>Por qué importan los slams</h3>
<p>Un pequeño slam da 500 puntos adicionales sin ser vulnerable y 750 siendo vulnerable; un gran slam, 1000 o 1500. Declarar un slam que se cumple y que otros no declaran vale mucho; declarar uno que falla cuesta más o menos lo mismo. Necesitas dos cosas: suficientes <strong>bazas</strong> (fuerza, fit y distribución) y suficientes <strong>controles</strong> (los rivales no deben poder cobrar dos bazas rápidas).</p>

<h3>Señales de slam</h3>
<ul>
<li><strong>Fuerza conjunta:</strong> unos 33 puntos para el pequeño slam y 37 para el gran slam, con manos equilibradas. Con un buen fit de triunfo y distribución, bastan menos.</li>
<li><strong>Tu compañero muestra valores extra</strong> y tú también tienes una buena mano: un salto en palo nuevo, un reverse, un 2♣ fuerte, un apoyo con salto frente a tu apertura, un apoyo 2SA Jacoby frente a una mano con extras.</li>
<li><strong>Un gran fit</strong> (nueve o diez triunfos) más una fuente de bazas, como un palo lateral largo.</li>
<li><strong>Controles:</strong> Ases, Reyes y cortos en los palos laterales.</li>
</ul>

<h3>El plan</h3>
<ol>
<li>Acordad un palo de triunfo (o decidid jugar a sin triunfo).</li>
<li>Comprobad que la fuerza conjunta es suficiente.</li>
<li>Comprobad los controles, normalmente con el Blackwood.</li>
<li>Declarad el slam, o paraos a nivel de cinco.</li>
</ol>

<h3>El Blackwood</h3>
<p>Una vez acordado un palo, la voz de 4SA pregunta a tu compañero cuántos Ases tiene:</p>
<table>
<thead><tr><th>Respuesta</th><th>Ases</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>0 o 4</td></tr>
<tr><td>5♦</td><td>1</td></tr>
<tr><td>5♥</td><td>2</td></tr>
<tr><td>5♠</td><td>3</td></tr>
</tbody>
</table>
<p>La subasta siempre deja claro si 5♣ significa 0 o 4. Si faltan dos Ases, cierra en cinco de tu palo de triunfo; tu compañero debe pasar. Si falta uno, declara el pequeño slam. Si no falta ninguno y te interesa el gran slam, declara <strong>5SA</strong> para preguntar por Reyes: 6♣ = 0 o 4, 6♦ = 1, 6♥ = 2, 6♠ = 3. 5SA promete que la pareja tiene los cuatro Ases.</p>
<p>Quien declara el Blackwood es el capitán: el que responde solo contesta y después acepta la decisión.</p>

<h3>Roman Key Card Blackwood</h3>
<p>Hoy en día la mayoría de los jugadores usan una versión mejorada, el <strong>Roman Key Card Blackwood</strong>, que es lo que juegan por defecto los bots de esta aplicación. Cuenta cinco <strong>cartas clave</strong>, los cuatro Ases y el Rey de triunfo, y además informa de la Dama de triunfo:</p>
<table>
<thead><tr><th>Respuesta</th><th>Cartas clave</th></tr></thead>
<tbody>
<tr><td>5♣</td><td>1 o 4</td></tr>
<tr><td>5♦</td><td>0 o 3</td></tr>
<tr><td>5♥</td><td>2, sin la Dama de triunfo</td></tr>
<tr><td>5♠</td><td>2, con la Dama de triunfo</td></tr>
</tbody>
</table>
<p>Las decisiones funcionan igual: si faltan dos cartas clave, párate a nivel de cinco; si falta una, declara el pequeño slam. La lección “Roman Key Card Blackwood” lo explica a fondo, incluida la pregunta por la Dama de triunfo.</p>

<h3>Un ejemplo</h3>
<div class="deal" data-n="S:AK1074 H:KQ6 D:A5 C:Q83" data-s="S:QJ63 H:A84 D:KQ62 C:K5"></div>
<div class="auction" data-calls="1S P 2NT P 3S P 4NT P 5H P 6S P P P" data-dealer="N"></div>
<p>Norte abre de 1♠ con 18 PH. Sur, con 15 PH y cuatro picas, declara 2SA, el apoyo Jacoby: forcing a manga con apoyo. El 3♠ de Norte es la forma estándar de mostrar valores extra sin semifallo ni fallo. Sur puede contar ahora unos 33 puntos entre los dos y un fit de nueve cartas, así que el slam es probable. 4SA pregunta por Ases; 5♥ muestra dos. Con el ♥A en la mano, Sur sabe que solo falta un As y declara 6♠.</p>
<p>Con el Roman Key Card Blackwood, como juegan los bots, Norte responde 5♦: tres cartas clave, el ♠A, el ♦A y el ♠K. Sur, que solo tiene el ♥A, sabe que son tres y no ninguna, así que falta una carta clave; Sur tiene la ♠Q, y se llega igualmente a 6♠.</p>
<p>En el carteo, el ♣A es la única perdedora: el declarante destriunfa, cobra los corazones y juega el ♦A, un diamante al Rey y la ♦Q del muerto, descartando uno de los tréboles de Norte.</p>

<h3>Los límites del Blackwood</h3>
<p>El Blackwood cuenta Ases; no te dice <em>qué</em> Ases, ni si un palo lateral tiene dos perdedoras rápidas. No lo uses:</p>
<ul>
<li>con un fallo (el As de tu compañero puede estar en el palo de tu fallo, donde se desperdicia);</li>
<li>con dos cartas pequeñas en un palo no declarado (tu compañero puede no tener ni el As ni el Rey de ese palo);</li>
<li>cuando una respuesta a nivel de cinco podría llevarte por encima de tu contrato seguro, como ocurre a menudo con tréboles como triunfo.</li>
</ul>
<p>En esos casos la herramienta son los cue-bids de control; consulta la lección “Controles y cue-bids: cuándo no usar el Blackwood”.</p>
<div class="warn">4SA no siempre es Blackwood. Cuando no se ha acordado ningún palo y la última voz de tu compañero fue un sin triunfo natural (1SA – 4SA, 2SA – 4SA), 4SA es cuantitativo: invita a 6SA. Para preguntar por Ases sobre el sin triunfo de tu compañero, usa el Gerber, 4♣.</div>
`,
    keyPoints: [
      'El pequeño slam necesita unos 33 puntos entre los dos (el gran slam, unos 37); el fit y la distribución pueden rebajarlos.',
      'Establece primero el triunfo y la fuerza, y después comprueba los controles.',
      'Respuestas del Blackwood simple: 5♣ 0/4, 5♦ 1, 5♥ 2, 5♠ 3; después 5SA pregunta por Reyes. Los bots juegan Roman Key Card Blackwood: 5♣ 1/4, 5♦ 0/3, 5♥ 2, 5♠ 2 y la Dama de triunfo.',
      'Si faltan dos Ases, párate a nivel de cinco en el palo acordado.',
      'No uses el Blackwood con un fallo ni con dos perdedoras rápidas en un palo no declarado.',
    ],
    quiz: [
      {
        q: 'Tu compañero declara 4SA (Blackwood simple) y tienes un As. ¿Qué respondes?',
        options: ['5♣', '5♦', '5♥', '5♠'],
        answer: 1,
        explain: '5♣ muestra 0 o 4, 5♦ uno, 5♥ dos y 5♠ tres.',
      },
      {
        q: 'Declaras 4SA y tu compañero responde 5♥ (dos Ases). Tú tienes los otros dos Ases. ¿Y ahora?',
        options: ['Cerrar a nivel de cinco en el palo de triunfo', 'Declarar el pequeño slam, o 5SA para preguntar por Reyes si es posible el gran slam', 'Pasar sobre 5♥', 'Declarar 6SA sea cual sea el palo'],
        answer: 1,
        explain: 'No falta ningún As, así que el pequeño slam está a salvo de dos Ases rápidos. Si las manos pueden dar trece bazas, 5SA pregunta por Reyes y le dice a tu compañero que tenéis todos los Ases.',
      },
      {
        q: 'Las picas están acordadas. Declaras 4SA y tu compañero responde 5♦ (un As). Tienes un As. ¿Qué haces?',
        options: ['Declarar 6♠', 'Declarar 5♠', 'Declarar 5SA', 'Paso'],
        answer: 1,
        explain: 'Faltan dos Ases, así que los rivales podrían cobrar dos bazas de golpe. Cierra en 5♠; tu compañero debe pasar.',
      },
      {
        q: 'Dos manos equilibradas con 33 PH entre las dos y sin fit de triunfo. ¿Qué contrato?',
        options: ['3SA', '4SA', '6SA', '7SA'],
        answer: 2,
        explain: 'Unos 33 PH entre los dos dan buenas opciones de hacer doce bazas a sin triunfo. Para el gran slam harían falta 37.',
      },
      {
        q: 'Tu compañero responde 5♣ a tu 4SA (Blackwood simple). ¿Qué muestra?',
        options: ['Tréboles', 'Ningún As o los cuatro', 'Un As', 'Tres Ases'],
        answer: 1,
        explain: '5♣ son 0 o 4 Ases. La subasta o tu propia mano dejarán claro cuál: si tú tienes un As, tu compañero no puede tener cuatro.',
      },
    ],
  },

  {
    id: 'gerber-and-quantitative',
    title: 'Gerber y el 4SA cuantitativo',
    topic: 'Slam bidding',
    level: 'Intermediate',
    summary: 'Cómo explorar el slam tras una apertura de sin triunfo: preguntar por Ases con el Gerber e invitar con un 4SA cuantitativo.',
    body: `
<h3>El slam tras una apertura de sin triunfo</h3>
<p>Cuando tu compañero abre de 1SA (15-17) o de 2SA (20-21), conoces su fuerza con un margen de dos o tres puntos, así que a menudo puedes sumar los puntos y decidir tú solo. Hay dos herramientas que ayudan:</p>
<ul>
<li><strong>4SA, cuantitativo:</strong> «compañero, declara 6SA si estás en lo alto de tu rango».</li>
<li><strong>4♣, Gerber:</strong> «compañero, ¿cuántos Ases tienes?».</li>
</ul>

<h3>El 4SA cuantitativo</h3>
<p>Subir directamente de 1SA a 4SA no es Blackwood. Muestra 16-17 puntos, así que el total es de 31-34, en el límite de los 33 necesarios para el slam. El abridor pasa con un mínimo (15) y declara 6SA con un máximo (17); con 16 decide según su criterio, aceptando con un buen palo de cinco cartas o con buenas cartas intermedias.</p>
<div class="hand" data-cards="S:KQ5 H:AJ4 D:KJ63 C:Q72" data-label="Tu compañero abrió de 1SA: declara 4SA"></div>
<p>16 PH, equilibrada. Declara 4SA. Con 18-21 declararías 6SA directamente, porque incluso con un abridor mínimo sumáis 33; con 22 o más, declara 7SA, porque incluso con un mínimo sumáis 37.</p>
<p>Sobre 2SA (20-21), 4SA muestra 11-12 y pide al abridor que declare 6SA con un máximo.</p>
<table>
<thead><tr><th>Respondedor tras</th><th>3SA</th><th>4SA (invita)</th><th>6SA</th><th>7SA</th></tr></thead>
<tbody>
<tr><td>1SA (15-17)</td><td>10-15</td><td>16-17</td><td>18-21</td><td>22+</td></tr>
<tr><td>2SA (20-21)</td><td>4-10</td><td>11-12</td><td>13-16</td><td>17+</td></tr>
</tbody>
</table>

<h3>El Gerber</h3>
<p>Un salto a 4♣ directamente sobre la apertura de 1SA o 2SA de tu compañero (o sobre 2♣ – 2♦ – 2SA) pregunta por Ases:</p>
<table>
<thead><tr><th>Respuesta a 4♣</th><th>Ases</th></tr></thead>
<tbody>
<tr><td>4♦</td><td>0 o 4</td></tr>
<tr><td>4♥</td><td>1</td></tr>
<tr><td>4♠</td><td>2</td></tr>
<tr><td>4SA</td><td>3</td></tr>
</tbody>
</table>
<p>Tras la respuesta, 5♣ del que pregunta pide los Reyes con el mismo esquema (5♦ = 0 o 4, 5♥ = 1, 5♠ = 2, 5SA = 3). Cualquier otra voz fija el contrato; 4SA del que pregunta es una voz de cierre, y si la respuesta de tu compañero fue 4SA, el que pregunta puede simplemente pasar.</p>
<div class="hand" data-cards="S:KQJ1065 H:KQ4 D:KQ3 C:5" data-label="Tu compañero abrió de 1SA: declara 4♣"></div>
<p>16 PH (31-33 en total) y seis picas fuertes: la mano tiene muchas bazas, pero ningún As. La pregunta son los Ases, así que declara 4♣. Sobre 4♠ (dos Ases), pasa y juega 4♠. Sobre 4SA (tres Ases), declara 6♠.</p>
<p>Con los transfers Texas hay otro camino: 4♥, transfer a picas, y después 4SA, Roman Key Card Blackwood, que además cuenta el Rey y la Dama de picas.</p>

<h3>¿Cuál usar?</h3>
<ul>
<li>Usa el 4SA cuantitativo cuando la pregunta sea la <strong>fuerza</strong>: no estás seguro de que los puntos de la pareja lleguen a 33.</li>
<li>Usa el Gerber cuando la pregunta sean los <strong>Ases</strong>: con una mano con muchas bazas (desequilibrada), en la que la fuerza no es el problema. Con manos equilibradas y 33+ PH entre los dos no pueden faltar dos Ases, así que basta con contar puntos.</li>
<li>Con un palo largo frente a 1SA, haz primero el transfer (o declara de forma natural) para fijar el palo y después usa las herramientas de slam. Cuando tienes un palo largo y fuerte, contar bazas importa más que contar puntos.</li>
</ul>
<div class="tip">Cuenta hasta 33 para el pequeño slam a sin triunfo y hasta 37 para el gran slam. Con una fuente de bazas, como un palo sólido de cinco o seis cartas, necesitas algo menos.</div>
<div class="warn">No confundas 1SA – 4SA (cuantitativo) con el Blackwood. Si quieres saber los Ases frente al sin triunfo de tu compañero, declara 4♣.</div>
`,
    keyPoints: [
      '1SA – 4SA = 16-17, cuantitativo: el abridor declara 6SA con un máximo.',
      '2SA – 4SA = 11-12, cuantitativo.',
      'Gerber 4♣ sobre 1SA o 2SA: 4♦ 0/4, 4♥ 1, 4♠ 2, 4SA 3; después 5♣ pregunta por Reyes.',
      'Usa el 4SA cuantitativo cuando la pregunta sea la fuerza, y el Gerber cuando sean los Ases.',
      'Los slams a sin triunfo necesitan unos 33 puntos (pequeño) o 37 (gran slam).',
    ],
    quiz: [
      {
        q: 'Tu compañero abre de 1SA y declaras 4♣ (Gerber). Tu compañero tiene un As. ¿Cuál es la respuesta?',
        options: ['4♦', '4♥', '4♠', '4SA'],
        answer: 1,
        explain: 'Las respuestas al Gerber suben por escalones desde 4♦: 4♦ = 0 o 4, 4♥ = 1, 4♠ = 2, 4SA = 3.',
      },
      {
        q: '¿Qué significa 1SA – 4SA?',
        options: ['Blackwood', 'Una invitación cuantitativa a 6SA con 16-17', 'Una voz de cierre', 'Gerber'],
        answer: 1,
        explain: 'No se ha acordado ningún palo y tu compañero ha declarado sin triunfo natural, así que 4SA invita al slam. El abridor declara 6SA con un máximo y pasa con un mínimo.',
      },
      {
        q: 'Abriste de 1SA con 17 PH. Tu compañero sube a 4SA. ¿Qué haces?',
        options: ['Paso', 'Declarar 5♥ para mostrar dos Ases', 'Declarar 6SA', 'Declarar 5SA'],
        answer: 2,
        explain: '17 es lo más alto del rango: 17 + 16-17 = 33-34. Acepta la invitación con 6SA.',
      },
      {
        q: 'Tu compañero abre de 2SA. Tienes una mano equilibrada de 12 PH. ¿Qué declaras?',
        options: ['3SA', '4SA', '6SA', '4♣'],
        answer: 1,
        explain: '20-21 + 12 = 32-33. Invita con 4SA (11-12); tu compañero declarará 6SA con 21.',
      },
      {
        q: '1SA – 4♣ – 4♠ (dos Ases). No tienes ningún As. ¿Qué declaras?',
        options: ['6SA', '4SA', '5♣', '7SA'],
        answer: 1,
        explain: 'Faltan dos Ases, así que en el slam podrías perder las dos primeras bazas. 4SA tras la respuesta al Gerber es una voz de cierre.',
      },
    ],
  },

  {
    id: 'rule-of-eleven',
    title: 'La regla del 11',
    topic: 'Defense',
    level: 'Intermediate',
    summary: 'Cómo una salida de cuarta mejor permite a los defensores y al declarante deducir cuántas cartas más altas tiene cada mano.',
    body: `
<h3>La regla</h3>
<p>Cuando tu compañero sale con su <strong>cuarta mejor</strong>, resta su valor de 11. El resultado es el número de cartas más altas que la de salida que están en las <em>otras tres manos</em>: el muerto, la tuya y la del declarante. Ves el muerto y tu propia mano, así que puedes deducir cuántas cartas más altas tiene el declarante.</p>

<h3>Por qué funciona</h3>
<p>Para una carta de valor r, hay 14 − r cartas por encima de ella (el As cuenta como 14). Si la salida es de cuarta mejor, el que sale tiene exactamente tres de ellas. Quedan 14 − r − 3 = 11 − r para las otras tres manos.</p>

<h3>Un ejemplo en defensa</h3>
<table>
<thead><tr><th>Posición</th><th>Diamantes</th></tr></thead>
<tbody>
<tr><td>Norte (muerto)</td><td>Q 10 4</td></tr>
<tr><td>Oeste (compañero, sale con el 7)</td><td>A J 9 7 5</td></tr>
<tr><td>Este (tú)</td><td>K 8 2</td></tr>
<tr><td>Sur (declarante)</td><td>6 3</td></tr>
</tbody>
</table>
<p>Contra 3SA tu compañero sale con el ♦7. 11 − 7 = 4 cartas más altas que el 7 en las otras tres manos. El muerto tiene dos (Q, 10) y tú tienes dos (K, 8). Así que el declarante no tiene ninguna y no puede superar el 7.</p>
<p>Cuando el muerto juega bajo, puedes jugar el 2 y dejar que el 7 de tu compañero gane la baza. Tu compañero sigue en la mano y continúa el palo a través del Q 10 del muerto hacia tu K 8, y la defensa hace todas las bazas de diamante. Si juegas el K, el Q 10 del muerto hará una baza cuando se continúe el palo.</p>

<h3>El declarante también puede usarla</h3>
<p>Supón que Oeste sale con el ♠7 (cuarta mejor) contra tu 3SA. El muerto tiene ♠A 10 5 y tú ♠K 9 3. 11 − 7 = 4 cartas más altas en Norte, Este y Sur; las ves todas (A, 10, K, 9). Este no tiene ninguna pica más alta que el 7. Así que puedes jugar bajo del muerto y ganar barato con el 9, conservando el A y el K como paradas.</p>

<h3>La carta más baja muestra la longitud</h3>
<p>Si tu compañero sale con el 2 como cuarta mejor, no puede tener una quinta carta más baja: tiene exactamente cuatro cartas en el palo. Salir con un 3 cuando el 2 está a la vista en otra mano dice lo mismo. Eso te ayuda a contar la mano del declarante.</p>

<h3>Cuándo falla la regla</h3>
<p>La regla del 11 solo se aplica a las salidas que son de verdad de cuarta mejor. No se aplica a las salidas de secuencia (el K desde KQJ), a las de la más alta de nada o de doubleton, ni a las salidas en el palo del compañero desde un honor con cartas pequeñas. Si la cuenta da un resultado imposible (por ejemplo, que el declarante tendría un número negativo de cartas más altas), la salida no era de cuarta mejor, y eso también te dice algo.</p>
<div class="tip">Haz la resta en cuanto baje el muerto, antes de que juegue la tercera mano. Así sabrás enseguida si tienes que jugar alto o puedes dejar que gane la carta de tu compañero.</div>
<div class="warn">No apliques la regla mecánicamente contra contratos a palo cuando tu compañero pueda estar saliendo de un palo corto. Úsala cuando la salida sea claramente de cuarta mejor desde un palo largo, lo que ocurre sobre todo contra sin triunfo.</div>
`,
    keyPoints: [
      'Con una salida de cuarta mejor, 11 menos el valor de la carta = cartas más altas en las otras tres manos.',
      'Resta las que ves en el muerto y en tu mano para saber cuántas tiene el declarante.',
      'El declarante puede aplicar la misma cuenta a las manos de los defensores.',
      'Un 2 de cuarta mejor muestra exactamente cuatro cartas.',
      'La regla solo funciona con salidas que son de verdad de cuarta mejor.',
    ],
    quiz: [
      {
        q: 'Tu compañero sale con el 7, de cuarta mejor. ¿Cuántas cartas más altas que el 7 tienen entre el muerto, tú y el declarante?',
        options: ['3', '4', '5', '7'],
        answer: 1,
        explain: '11 − 7 = 4. Hay siete cartas por encima del 7 (8, 9, 10, J, Q, K, A) y tu compañero tiene tres de ellas.',
      },
      {
        q: 'Tu compañero sale con el ♥6 (cuarta mejor) contra 3SA. El muerto tiene ♥K 9 3 y tú ♥A 10 4. ¿Cuántos corazones más altos que el 6 tiene el declarante?',
        options: ['0', '1', '2', '3'],
        answer: 1,
        explain: '11 − 6 = 5. El muerto tiene dos más altos (K, 9) y tú dos (A, 10), así que el declarante tiene uno.',
      },
      {
        q: 'Tu compañero sale con el ♣2 contra 3SA, jugando salidas de cuarta mejor. ¿Cuántos tréboles tiene tu compañero?',
        options: ['Tres', 'Exactamente cuatro', 'Cinco o más', 'Es imposible saberlo'],
        answer: 1,
        explain: 'El 2 es la carta más baja, así que no hay ninguna por debajo: como cuarta mejor, muestra exactamente cuatro tréboles.',
      },
      {
        q: 'Eres el declarante en 3SA. Oeste sale con el ♠7 (cuarta mejor). El muerto tiene ♠A 10 5 y tú ♠K 9 3. ¿Cuántas picas más altas que el 7 tiene Este?',
        options: ['0', '1', '2', '3'],
        answer: 0,
        explain: '11 − 7 = 4 cartas más altas en Norte, Este y Sur, y las ves todas (A, 10, K, 9). Este no tiene ninguna, así que puedes ganar barato con el 9.',
      },
      {
        q: '¿Cuándo no se aplica la regla del 11?',
        options: ['Contra sin triunfo', 'Cuando la salida no es de cuarta mejor, por ejemplo de cabeza de secuencia', 'Cuando el muerto tiene un honor', 'Cuando tienes un semifallo'],
        answer: 1,
        explain: 'La cuenta se basa en que el que sale tiene exactamente tres cartas más altas. Las salidas de secuencia, de la más alta de nada y similares rompen ese supuesto.',
      },
    ],
  },
];
