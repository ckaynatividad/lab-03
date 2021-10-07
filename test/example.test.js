import { didUserWin } from '../import.js';

const test = QUnit.test;

test ('rock, rock', (expect)=> {
    
    const expected = true;

    const actual = (didUserWin('rock', 'rock')); 

    expect.equal(actual, expected);
});

test ('rock, paper', (expect)=> {
    
    const expected = false;

    const actual = (didUserWin('rock', 'paper'));

    expect.equal(actual, expected);
});