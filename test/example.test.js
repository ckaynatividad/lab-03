import { didUserWin } from '../import.js';

const test = QUnit.test;

test ('rock, paper', (expect)=> {
    
    const expected = 'lose';

    const actual = (didUserWin('rock', 'paper')); 

    expect.equal(actual, expected);
});

test ('rock, scissors', (expect)=> {
    
    const expected = 'win';

    const actual = (didUserWin('rock', 'scissors'));

    expect.equal(actual, expected);
});

test ('rock, rock', (expect)=> {
    
    const expected = 'draw';

    const actual = (didUserWin('rock', 'rock'));
    
    expect.equal(actual, expected);

});

