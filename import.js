export function randomMove(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random() * 2)];

}


export function didUserWin(userMove, compMove){
    if (userMove === 'rock' && compMove === 'paper') {
        return 'lose';
    } else if (userMove === 'scissors' && compMove === 'rock') {
        return 'lose';
    } else if (userMove === 'paper' && compMove === 'scissors') {
        return 'lose';
    } else if (userMove === compMove) {
        return 'draw';
    } else {
        return 'win';
    }
}