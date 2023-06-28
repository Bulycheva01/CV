let big = document.querySelector('.big');
let small = document.querySelector('.small');
let img = document.querySelector('.desc_img');
let audio = new Audio();

big.addEventListener('click', () =>{
    img.style.backgroundImage = 'url(img/big.png)';
    audio.src = 'sounds/big.mp3';
    audio.play();
});

small.addEventListener('click', () =>{
    img.style.backgroundImage = 'url(img/small.png)';
    audio.src = 'sounds/small.mp3';
    audio.play();
});