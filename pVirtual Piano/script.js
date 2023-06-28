let piano_key = document.querySelectorAll('.piano_key');
let audio = new Audio();
piano_key.forEach( key => {
    key.addEventListener('click', () => {
        note = key.dataset.note;
        audio.src = `sounds/audio_${note}.mp3`;
        audio.play();
    });
});

const keyNote = {
    68: 'c',
    82: 'c♯',
    70: 'd',
    84: 'd♯',
    71: 'e',
    72: 'f',
    85: 'f♯',
    74: 'g',
    73: 'g♯',
    75: 'a',
    79: 'a♯',
    76: 'b',
}

document.addEventListener('keydown', (event) => {
    for (key in keyNote) {
        if (key == event.keyCode) {
            note = keyNote[key];
            audio.src = `sounds/audio_${note}.mp3`;
            audio.play();
            piano_key.forEach(key => {
                if (note == key.dataset.note){
                    key.classList.add('active');
                }
            });
        }
    }

});

document.addEventListener('keyup', (event) => {
    piano_key.forEach( key =>{
        key.classList.remove('active');
    });
});

let heading = document.querySelector('h1');
let piano = document.querySelector('.piano');
window.addEventListener('load', () => {
    heading.style.opacity = 1;
    heading.style.transform = 'translate(0)';
    piano.style.opacity = 1;
    piano.style.transform = 'translate(0)';
});
