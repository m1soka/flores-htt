 
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

 
var lyricsData = [
  { text: "las flores", time: 15 },
  { text: "de tu florero ", time: 18 },
  { text: "son como tu de bonitas ", time: 27 },
  { text: "Pero qué bonito huele", time: 32 },
  { text: "en medio de tus ramitas", time: 33 },
  { text: "En medio de tus ramitas", time: 41 },
  { text: "pero qué bonito huele", time: 47 },
  { text: "Primero surte el florero ", time: 54 },
  { text: "después lo llena de flores", time: 59 },
  { text: "Cómo han llorado mis ojos", time: 67 },
  { text: " por no tener tus amores", time: 72 },
  { text: "Por no tener tus amores", time: 78 },
  { text: "cómo han llorado mis ojos", time: 83 },
  { text: "Por encima de las flores corren gotas de rocío", time: 91 },
  { text: "Todo lo hermoso que tiene, corazón, dile que es mio ", time: 97 },
  { text: "Corazón, dile que es mío, todo lo hermoso que tiene", time: 104 },
  { text: "Flores rojas, flores blancas", time: 108 },
  { text: "te traigo pa' tu florero", time: 144 },
  { text: "Si te gusta darme un beso que de tu boquita quiero", time: 148 },
  { text: "Que de tu boquita quiero", time: 153 },
  { text: " si te gusta darme el beso", time: 158 },
];

 
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
  
    var fadeInDuration = 0.1;  
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
   l
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

 
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);  
}

 
setTimeout(ocultarTitulo, 216000);
