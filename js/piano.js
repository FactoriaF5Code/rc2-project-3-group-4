window.onload = () => {
    
    var keys = document.querySelectorAll('.key');
    var notesArray = ['Do2','Re','Mi','Fa','Sol','La','Si'];

    document.onkeydown = (key) => {
        if(key.key <= 7 && key.key >= 1) {
            let pressedKey = notesArray[key.key - 1]; /* Almaceno la key */
            playNote(pressedKey);
            
            let div = Array.from(keys)[key.key-1];
            div.classList.add('pressed');
        }
    }

    document.onkeyup = () => {
        keys.forEach(function(key) {
            key.classList.remove('pressed');
        })
    }

    keys.forEach(function(key) {
        key.addEventListener('click', function() {
            var note = this.getAttribute('data-note');
            playNote(note);
        });
    });

    function playNote(note) {
        var audio = new Audio('notes/' + note + '.mp3');
        audio.play();
    }
}


function changeGato() {
    let img = document.getElementById("imgGato");
  
    if (img.src.match("Der")) {
      img.src = "img/gatoNegro.png";
    } else {
      img.src = "img/gatoNegroDer.png";
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
function changeGatoColor() {
    let img = document.getElementById("imgGato");

    if (img.src.match("Color")) {
        img.src = "img/gatoNegro.png";
    } else {
      img.src = "img/gatoColor.png";
    }
}


