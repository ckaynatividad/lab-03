import { randomMove } from './import.js';

const play = document.getElementById('playBtn');
const winsSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draw');

let wins = 0;
let loss = 0;
let draw = 0;

play.addEventListener('click', ()=>{
  const selected = document.querySelector('input[type=radio]:checked');
  const userMove = selected.value;
  const compMove = randomMove();
  console.log(compMove);
  if (userMove === compMove) {
    draw++;
    drawSpan.textContent = draw;
  } else if (userMove == 'rock') {
      if(compMove == 'paper') {
        loss++;
        lossSpan.textContent = loss;
      } else {
        wins++;
        winsSpan.textContent = wins;
      }
    } else if (userMove == 'scissors') {
        if (compMove == 'rock') {
          loss++;
          lossSpan.textContent = loss;
        } else {
          wins++;
          winsSpan.textContent = wins;
        }
    } else if (userMove == 'paper') {
        if (compMove == 'scissors') {
          loss++;
          lossSpan.textContent = loss;
        } else {
          wins++;
          winsSpan.textContent = wins;
        }
    }
  });

