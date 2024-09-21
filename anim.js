// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ella sabía, que el sabia", time: 1 },
  { text: "que algún día pasaría", time: 2.5 },
  { text: "que el vendría a buscarla", time: 4 },
  { text: "con sus flores amarillas", time: 6 },
  { text: "No te apures, ", time: 8 },
  { text: "no detengas", time: 9},
  { text: "el instante del encuentro", time: 11 },
  { text: "Está dicho, que es un hecho, ", time: 12 },
  { text: "no la pierdas, no hay derecho", time: 14.5 },
  { text: "No te olvídes", time:16.5},
  { text: "que la vida", time: 17.5 },
  { text: "Casi nunca está dormida", time: 19.5 },
  { text: "I only want to live in clouds", time: 183 },
  { text: "Where I'm now? I don't know why", time: 191 },
  { text: "Nice butterflies in my hands", time: 197 },
  { text: "Too much light for twilight", time: 1104 },
  { text: "In the mood for the flowers love", time: 1108 },
  { text: "At the time", time: 1144 },
  { text: "The whisper of birds", time: 1148 },
  { text: "Lonely before the sun cried", time: 1153 },
  { text: "Fell from the sky", time: 1158 },
  { text: "Like water drops", time: 1164 },
  { text: "Where I'm now? I don't know why", time: 1169 },
  { text: "Nice butterflies in my hands", time: 1176 },
  { text: "Too much light for twilight", time: 1183 },
  { text: "In the mood for the flowers", time: 1188 },
  { text: "Love.", time: 1410 },
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

setInterval(updateLyrics, 500);

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