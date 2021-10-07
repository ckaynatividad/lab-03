export function randomMove(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random() * 2)];

}


export function didUserWin(userMove, compMove){
    return userMove === compMove;
}