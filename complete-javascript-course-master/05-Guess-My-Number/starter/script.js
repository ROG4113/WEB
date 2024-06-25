'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct number!';

// document.querySelector('.number').textContent=15;
// document.querySelector('.score').textContent=10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=24;
let secretNumber=Math.trunc(Math.random()*20)+1;
let  score=20;
let highscore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage("⛔️ No number!");
    }else if(guess===secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess!=secretNumber){
        if(score>1){
            displayMessage((guess<secretNumber)?'📈 Too low!':'📉 Too high!');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent=0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=20;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value=null;
    displayMessage('Start guessing...');
})