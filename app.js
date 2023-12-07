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

    // Manejador de clic en el botón de reproducción de canción
    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function () {
        if (!isSongPlaying) {
            playSong();
            isSongPlaying = true;
            playButton.textContent = 'Detener Canción'; // Cambia el texto del botón
        } else {
            stopSong();
            isSongPlaying = false;
            playButton.textContent = 'Reproducir Canción'; // Cambia el texto del botón
        }
    });

    function playSong() {
        // Cambia la siguiente línea con la ruta correcta de tu canción
        let audio = new Audio('notes/piano.mp3');
        audio.currentTime = 0;
        audio.play();
    };

    function stopSong() {
        // Detener la canción si está reproduciéndose
        // (puedes necesitar ajustar esto dependiendo de la lógica específica)
        let audio = new Audio('notes/piano.mp3');
        audio.pause();
        audio.currentTime = 0;
    }
    const toggleNoteButton = document.getElementById('toggleNoteButton');
    toggleNoteButton.addEventListener('click', function () {
        const keys = document.querySelectorAll('.key');
        keys.forEach(function (key) {
            key.classList.toggle('hideNote'); // Agrega o quita la clase 'hideNote'
        });
    });
    // Manejador de clic en el botón para ocultar/mostrar notas
    const toggleNoteButton = document.getElementById('toggleNoteButton');
    toggleNoteButton.addEventListener('click', function () {
        const noteTexts = document.querySelectorAll('.note-text');
        noteTexts.forEach(function (noteText) {
            noteText.classList.toggle('hideNote'); // Agrega o quita la clase 'hideNote'
        });
    });

});
