function changeFondo() {
  let img = document.getElementById("imgFondo");

  if (img.src.match("Color")) {
    img.src = "img/fondoPared.png";
  } else {
    img.src = "img/fondoParedColor.png";
  }
  function changeInter() {
    let img = document.getElementById("imgInterruptor");

    if (img.src.match("Color")) {
      img.src = "img/interruptorPared.png";
    } else {
      img.src = "img/interruptorParedColor.png";
    }
  }
}
function changeVentana() {
  let img = document.getElementById("imgVentana");

  if (img.src.match("Color")) {
    img.src = "img/windowNegra.png";
  } else {
    img.src = "img/windowColor.png";
  }
}

function changePolaroidImage(letter) {
  let img = document.getElementById(`polaroid${letter}`);

  if (img.src.match("Color")) {
    img.src = "img/polaroidGrisClaro.png";
  } else {
    img.src = `img/polaroidColor${letter}.png`;
  }
}
function reproducirAudio(instru) {
  let audio = document.getElementById(`img${instru}`);
  audio.currentTime = 0;
  audio.play();
  setTimeout(function () {
    audio.pause();
  }, 3000);
}

document.getElementById("imgInterruptor").addEventListener("click", () => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  for (const letter of letters) {
    changePolaroidImage(letter);
  }
});

changeVentana();
changeFondo();

document.getElementById("enlace").addEventListener("click", () => {
  const instruments = [
    "Acordeon",
    "Bateria",
    "Contrabajo",
    "Electrica",
    "Guitarra",
    "Saxofon",
    "Tambor",
    "Trompeta",
    "Violin",
  ];
  for (const instru of instruments) {
    reproducirAudio(instru);
  }
});
