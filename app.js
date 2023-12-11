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

    // Mapeo de teclas del teclado a notas del piano
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
        // Puedes agregar más mapeos según sea necesario
    };

    // Manejador de eventos para presionar teclas del teclado
    document.addEventListener('keydown', function (event) {
        const key = event.key.toUpperCase();
        const keyElement = document.querySelector(`[data-note="${keyMappings[key]}"]`);

        if (keyElement) {
            keyElement.classList.add('active');
            let note = keyElement.getAttribute('data-note');
            playNote(note);
        }
    });

    // Manejador de eventos para liberar teclas del teclado
    document.addEventListener('keyup', function (event) {
        const key = event.key.toUpperCase();
        const keyElement = document.querySelector(`[data-note="${keyMappings[key]}"]`);

        if (keyElement) {
            keyElement.classList.remove('active');
        }
    });
   
    let isSongPlaying = false; // Variable para rastrear si la canción está reproduciéndose
    let audio = new Audio('notes/piano.mp3');
    // Manejador de clic en el botón de reproducción de canción
    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function () {
        if (!isSongPlaying) {
            playSong();
            isSongPlaying = true;
            playButton.textContent = 'Detener Canción'; 
        } else {
            stopSong();
            isSongPlaying = false;
            playButton.textContent = 'Reproducir Canción'; 
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
