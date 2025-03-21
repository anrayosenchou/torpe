// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres todo lo que pedía", time: 0 },
  { text: "Lo que mi alma vacía", time: 5 },
  { text: "Quería sentir", time: 9 },
  { text: "Eres lo que tanto esperaba", time: 14 },
  { text: "Lo que en sueños buscaba", time: 18 },
  { text: "Y que en ti descubrí", time: 21 },
  { text: "Tu has llegado a encender", time: 27 },
  { text: "Cada parte de mi alma", time: 31 },
  { text: "Cada espacio de mi ser", time: 35 },
  { text: "Ya no tengo corazon", time: 38 },
  { text: "Ni ojos para nadie", time: 41 },
  { text: "Solo para ti", time: 46 },
  { text: "Eres el amor de mi vida", time: 53 },
  { text: "El destino lo sabia", time: 57 },
  { text: "Y hoy te puso ante mi", time: 63 },
  { text: "Y cada vez que miro al pasado", time: 66 },
  { text: "Es que entiendo que a tu lado", time: 70 },
  { text: "Siempre pertenecí", time: 73 },
  { text: "Tu has llegado a encender", time: 78 },
  { text: "Cada parte de mi alma", time: 83 },
  { text: "Cada espacio de mi ser", time: 86 },
  { text: "Ya no tengo corazon", time: 89 },
  { text: "Ni ojos para nadie", time: 93 },
  { text: "Solo para ti", time: 97 },
  { text: "Solo para ti", time: 103 },
  { text: "Solo para ti", time: 109 },
  { text: "Solo para ti", time: 113 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
