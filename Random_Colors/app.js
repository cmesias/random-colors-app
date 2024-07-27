/// Author: Carl Mesias
const h1 = document.querySelector('h1');
const letters = document.querySelectorAll('.letters');

// Every 500ms, run this function
let intervalId = setInterval(function() {
    setRandH1LetterColors();
}, 1000);

function randomRGB() {
    const r = Math.floor( Math.random() * 256 );
    const g = Math.floor( Math.random() * 256 );
    const b = Math.floor( Math.random() * 256 );

    return `rgb(${r},${g},${b})`;
}

function setRandH1LetterColors() {
    for (letter of letters) {
        letter.style.color = randomRGB();
    }
}

function StartChangingColors() {
    // Every 500ms, run this function
    intervalId = setInterval(function() {
        setRandH1LetterColors();
    }, 1000);
}

function StopChangingColors() {
    clearInterval(intervalId);
}

// Note
/*
    Theres a problem with this code, everytime we stop it, then run the function "StartChangingColors", the intervalId variable increments by 1.
*/

