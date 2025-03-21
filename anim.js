// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres todo lo que pedía", time: 1 },
  { text: "Lo que mi alma vacía", time: 6 },
  { text: "Quería sentir", time: 10 },
  { text: "Eres lo que tanto esperaba", time: 15 },
  { text: "Lo que en sueños buscaba", time: 19 },
  { text: "Y que en ti descubrí", time: 22 },
  { text: "Tu has llegado a encender", time: 28 },
  { text: "Cada parte de mi alma", time: 32 },
  { text: "Cada espacio de mi ser", time: 36 },
  { text: "Ya no tengo corazon", time: 39 },
  { text: "Ni ojos para nadie", time: 42 },
  { text: "Solo para ti", time: 47 },
  { text: "Eres el amor de mi vida", time: 54 },
  { text: "El destino lo sabia", time: 58 },
  { text: "Y hoy te puso ante mi", time: 64 },
  { text: "Y cada vez que miro al pasado", time: 67 },
  { text: "Es que entiendo que a tu lado", time: 71 },
  { text: "Siempre pertenecí", time: 74 },
  { text: "Tu has llegado a encender", time: 79 },
  { text: "Cada parte de mi alma", time: 84 },
  { text: "Cada espacio de mi ser", time: 87 },
  { text: "Ya no tengo corazon", time: 90 },
  { text: "Ni ojos para nadie", time: 94 },
  { text: "Solo para ti", time: 98 },
  { text: "Solo para ti", time: 104 },
  { text: "Solo para ti", time: 110 },
  { text: "Solo para ti", time: 114 },
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
