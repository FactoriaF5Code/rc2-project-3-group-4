function changeFondo() {
  let img = document.getElementById("imgFondo");

  if (img.src.match("Color")) {
    img.src = "img/fondoPared.png";
  } else {
    img.src = "img/fondoParedColor.png";
  }
  function changeInterruptor() {
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
function changeCuerda() {
  let img = document.getElementById("imgFamCuerda");

  if (img.src.match("Color")) {
    img.src = "img/familiaCuerda.png";
  } else {
    img.src = "img/familiaCuerdaColor.png";
  }
}
function changeViento() {
  let img = document.getElementById("imgFamViento");

  if (img.src.match("Color")) {
    img.src = "img/familiaViento.png";
  } else {
    img.src = "img/familiaVientoColor.png";
  }
}
function changePercusion() {
  let img = document.getElementById("imgFamPercusion");

  if (img.src.match("Color")) {
    img.src = "img/familiaPercusion.png";
  } else {
    img.src = "img/familiaPercusionColor.png";
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

function changeAcordeon() {
  let img = document.getElementById("imgAcordeon");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/acordeonnbn.png";
  } else {
    img.src = "fotoaudio/audio/acordeoncolor.png";
  }
}
function changeBateria() {
  let img = document.getElementById("imgBateria");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/bateriabn.png";
  } else {
    img.src = "fotoaudio/audio/bateriacolor.png";
  }
}
function changeContrabajo() {
  let img = document.getElementById("imgContrabajo");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/contrabajobn.png";
  } else {
    img.src = "fotoaudio/audio/contrabajocolor.png";
  }
}
function changeElectrica() {
  let img = document.getElementById("imgElectrica");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/electrbn.png";
  } else {
    img.src = "fotoaudio/audio/electcolor.png";
  }
}
function changeGuitarra() {
  let img = document.getElementById("imgGuitarra");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/guitarrabn.png";
  } else {
    img.src = "fotoaudio/audio/guitarracolor.png";
  }
}
function changeSaxofon() {
  let img = document.getElementById("imgSaxofon");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/saxofonbn.png";
  } else {
    img.src = "fotoaudio/audio/saxofoncolor.png";
  }
}
function changeTambor() {
  let img = document.getElementById("imgTambor");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/tamborbn.png";
  } else {
    img.src = "fotoaudio/audio/tamborcolor.png";
  }
}
function changeTrompeta() {
  let img = document.getElementById("imgTrompeta");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/trompetabn.png";
  } else {
    img.src = "fotoaudio/audio/trompetacolor.png";
  }
}
function changeViolin() {
  let img = document.getElementById("imgViolin");

  if (img.src.match("Color")) {
    img.src = "fotoaudio/audio/violinbn.png";
  } else {
    img.src = "fotoaudio/audio/violincolor.png";
  }
}
function reproducirAudioAcordeon() {
  let audio = new Audio("fotoaudio/audio/acordeon.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioBateria() {
  let audio = new Audio("fotoaudio/audio/bateria.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioContrabajo() {
  let audio = new Audio("fotoaudio/audio/contrabajo.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioElectrica() {
  let audio = new Audio("fotoaudio/audio/electrica.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioGuitarra() {
  let audio = new Audio("fotoaudio/audio/guitarra.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioSaxofon() {
  let audio = new Audio("fotoaudio/audio/saxofon.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioTrompeta() {
  let audio = new Audio("fotoaudio/audio/trompeta.mp3");
  audio.currentTime = 0;
  audio.play();}
 
function reproducirAudiotTambor() {
  let audio = new Audio("fotoaudio/audio/tambor.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioViolin() {
  let audio = new Audio("fotoaudio/audio/violin.mp3");
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
  
 /* changeVentana();
  changeFondo();

  changeAcordeon();
  changeBateria();
  changeContrabajo();
  changeElectrica();
  changeGuitarra();
  changeSaxofon();
  changeTambor();
  changeTrompeta();
  changeViolin();*/

