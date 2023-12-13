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

function changeA() {
  let img = document.getElementById("fotoPared2a");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2a.png";
  }
}
function changeB() {
  let img = document.getElementById("fotoPared2b");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2b.png";
  }
}
function changeC() {
  let img = document.getElementById("fotoPared2c");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2c.png";
  }
}
function changeD() {
  let img = document.getElementById("fotoPared2d");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2d.png";
  }
}
function changeE() {
  let img = document.getElementById("fotoPared2e");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2e.png";
  }
}
function changeF() {
  let img = document.getElementById("fotoPared2f");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2f.png";
  }
}
function changeG() {
  let img = document.getElementById("fotoPared2g");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2g.png";
  }
}
function changeH() {
  let img = document.getElementById("fotoPared2h");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2h.png";
  }
}
function changeI() {
  let img = document.getElementById("fotoPared2i");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2i.png";
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
    img.src = "fotoaudio/audio/axofonbn.png";
  } else {
    img.src = "fotoaudio/audio/saxofoncolor.png";
  }
}
function changeTambor() {
  let img = document.getElementById("imgTrompeta");

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
  let audio = new Audio('fotoaudio/audio/acordeon.mp3');
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioBateria() {
  let audio = new Audio('fotoaudio/audio/bateria.mp3');
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioContrabajo() {
  let audio = new Audio('fotoaudio/audio/contrabajo.mp3');
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioElectrica() {
  let audio = new Audio('fotoaudio/audio/electrica.mp3');
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioGuitarra() {
  let audio = new Audio('fotoaudio/audio/guitarra.mp3');
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioSaxofon() {
  let audio = new Audio('fotoaudio/audio/saxofon.mp3');
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioTrompeta() {
  let audio = new Audio('fotoaudio/audio/trompeta.mp3');
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudiotTambor() {
  let audio = new Audio('fotoaudio/audio/tambor.mp3');
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioViolin() {
  let audio = new Audio('fotoaudio/audio/violin.mp3');
  audio.currentTime = 0;
  audio.play();
}