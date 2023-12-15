document.addEventListener('DOMContentLoaded', function () {
  let keys = document.querySelectorAll('.key');

  keys.forEach(function (key) {
      key.addEventListener('click', function () {
          let note = this.getAttribute('data-note');
          playNote(note);
      });
  });

  function playNote(note) {
      let audio = new Audio('notes/' + note + '.mp3');
      audio.currentTime = 0;
      audio.play();
  }

 
  const keyMappings = {
      'A': 'Do',
      'S': 'Re',
      'D': 'Mi',
      'F': 'Fa',
      'G': 'Sol',
      'H': 'La',
      'J': 'Si',
      'K': 'Do',
      'L': 'Re',
      ';': 'Mi',
      "'": 'Fa',
      'Shift': 'Sol',
      'Enter': 'La',
      'ShiftRight': 'Si',
      'Control': 'Do',
      'Alt': 'Re',
      'Space': 'Mi',
      'ArrowUp': 'Fa',
      'ArrowLeft': 'Sol',
      'ArrowDown': 'La',
      'ArrowRight': 'Si'
      
  };

 
  document.addEventListener('keydown', function (event) {
      const key = event.key.toUpperCase();
      const keyElement = document.querySelector(`[data-note="${keyMappings[key]}"]`);

      if (keyElement) {
          keyElement.classList.add('active');
          let note = keyElement.getAttribute('data-note');
          playNote(note);
      }
  });

 
  document.addEventListener('keyup', function (event) {
      const key = event.key.toUpperCase();
      const keyElement = document.querySelector(`[data-note="${keyMappings[key]}"]`);

      if (keyElement) {
          keyElement.classList.remove('active');
      }
  });

  document.addEventListener('keydown', function (event) {
  let img = document.getElementById("imgGato");
  
  if (img.src.match("Der")) {
    img.src = "img/gatoColor.png";
  } else {
    img.src = "img/gatoColorDer.png";
  }
})
function changeGato() {
  let img = document.getElementById("imgGato");

  if (img.src.match("Der")) {
    img.src = "img/gatoColor.png";
  } else {
    img.src = "img/gatoColorDer.png";
  }
}


 
  let isSongPlaying = false; 
  let audio = new Audio('notes/piano.mp3');
 
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', function () {
      if (!isSongPlaying) {
          playSong();
          isSongPlaying = true;
          playButton.textContent = 'Pausa'; 
      } else {
          stopSong();
          isSongPlaying = false;
          playButton.textContent = '-Play-'; 
      }
  });

  function playSong() {
      audio.currentTime = 0;
      audio.play();
  };
  function stopSong() {
      audio.pause();
      audio.currentTime = 0;
  }
  
  
});




  function changeInterruptor() {
    let img = document.getElementById("imgInterruptor");
  
    if (img.src.match("Color")) {
      img.src = "img/interruptorPared.png";
    } else {
      img.src = "img/interruptorParedColor.png";
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
function changeElisa() {
    let img = document.getElementById("imgElisa");

    if (img.src.match("Color")) {
        img.src = "img/paraElisa.png";
    } else {
      img.src = "img/paraElisaColor.png";
    }
}
function changeAlegria() {
    let img = document.getElementById("imgAlegria");

    if (img.src.match("Color")) {
        img.src = "img/himnoAlegria.png";
    } else {
      img.src = "img/himnoAlegriaColor.png";
    }
}
function changePaz() {
    let img = document.getElementById("imgPaz");

    if (img.src.match("Color")) {
        img.src = "img/nochePaz.png";
    } else {
      img.src = "img/nochePazColor.png";
    }
}



