import { randomMove } from './import.js';
import { didUserWin } from './import.js';

const play = document.getElementById('playBtn');
const winsSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draw');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
const errorMsg = document.getElementById('error');
const resetSpan = document.getElementById('resetScore');

let resetScore = 0;

errorMsg.classList.add('hide');

reset.addEventListener('click', ()=>{
    resetScore++;
    resetSpan.textContent = resetScore;
    wins = 0;
    winsSpan.textContent = wins;
    loss = 0;
    lossSpan.textContent = loss;
    draw = 0;
    drawSpan.textContent = draw;
});

let wins = 0;
let loss = 0;
let draw = 0;



play.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected) {
        return errorMsg.classList.remove('hide');
    }
    errorMsg.classList.add('hide');
    const userMove = selected.value;
    const compMove = randomMove();
    // console.log(compMove);
    if (didUserWin(userMove, compMove)) {
        draw++;
        drawSpan.textContent = draw;
        result.textContent = 'It was a draw.';
    } else if (userMove === 'rock') {
        if (compMove === 'paper') {
            loss++;
            lossSpan.textContent = loss;
            result.textContent = 'Computer wins.';
        } else {
            wins++;
            winsSpan.textContent = wins;
            result.textContent = 'You win.';
        }
    } else if (userMove === 'scissors') {
        if (compMove === 'rock') {
            loss++;
            lossSpan.textContent = loss;
            result.textContent = 'Computer wins.';
        } else {
            wins++;
            winsSpan.textContent = wins;
            result.textContent = 'You win.';
        }
    } else if (userMove === 'paper') {
        if (compMove === 'scissors') {
            loss++;
            lossSpan.textContent = loss;
            result.textContent = 'Computer wins.';
        } else {
            wins++;
            winsSpan.textContent = wins;
            result.textContent = 'You win.';
        }
    }
});
