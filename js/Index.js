function changeImage() {
  let image = document.getElementById("myImage");

  if (image.src.match("raton")) {
    image.src = "img/agujeroPared.png";
  } else {
    image.src = "img/ratonAgujero.png";
  }
}



function changeInterruptor() {
  let img = document.getElementById("imgInterruptor");

  if (img.src.match("Color")) {
    img.src = "img/interruptorPared.png";
  } else {
    img.src = "img/interruptorParedColor.png";
  }
}
function changeOrdenador() {
  let img = document.getElementById("imgOrdenador");

  if (img.src.match("Color")) {
    img.src = "img/ordenadorPared.png";
  } else {
    img.src = "img/ordenadorParedColor.png";
  }
}
function changeEstanteria() {
  let img = document.getElementById("imgEstanteria");

  if (img.src.match("Color")) {
    img.src = "img/estanteriaPared.png";
  } else {
    img.src = "img/estanteriaParedColor.png";
  }
}
function changePoster() {
  let img = document.getElementById("imgPoster");

  if (img.src.match("Color")) {
    img.src = "img/posterPared.png";
  } else {
    img.src = "img/posterParedColor.png";
  }
}
function changeYoda() {
  let img = document.getElementById("imgYoda");

  if (img.src.match("Color")) {
    img.src = "img/yodaPared.png";
  } else {
    img.src = "img/yodaParedColor.png";
  }
}
function changeNota() {
  let img = document.getElementById("imgNota");

  if (img.src.match("Color")) {
    img.src = "img/notaPared.png";
  } else {
    img.src = "img/notaParedColor.png";
  }
}
function changeFoto() {
  let img = document.getElementById("imgFoto");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared.png";
  } else {
    img.src = "img/fotoParedColor.png";
  }
}
function changeFoto2() {
  let img = document.getElementById("imgFoto2");

  if (img.src.match("Color")) {
    img.src = "img/fotoPared2.png";
  } else {
    img.src = "img/fotoParedColor2gg.png";
  }
}
function changeNombre() {
    let img = document.getElementById("imgNombre");
  
    if (img.src.match("Color")) {
      img.src = "img/nombre.png";
    } else {
      img.src = "img/nombreColor.png";
    }
  }
function changeCola() {
  let img = document.getElementById("imgCola");

  if (img.src.match("Color")) {
    img.src = "img/cocacolaPared.png";
  } else {
    img.src = "img/cocacolaParedColor.png";
  }
}

function changeFondo() {
    let img = document.getElementById("imgFondo");

    if (img.src.match("Color")) {
      img.src = "img/fondoPared.png";
    } else {
      img.src = "img/fondoParedColor.png";
    }
}


function reproducirAudioYoda() {
  let audio = new Audio("fotoaudio/audio/ringtones-yoda.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioCamara() {
  let audio = new Audio("fotoaudio/audio/audioCamara.mp3");
  audio.currentTime = 0;
  audio.play();
}
function reproducirAudioRefresco() {
  let audio = new Audio("fotoaudio/audio/audioRefresco.mp3");
  audio.currentTime = 0;
  audio.play();
}

