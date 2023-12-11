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


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function changeImage() {
    let image = document.getElementById('myImage');
     
    if (image.src.match("on")) {
        image.src = "cabeceraoff.png";
    } else {
        image.src = "cabeceraon.png";
    } 

    }
