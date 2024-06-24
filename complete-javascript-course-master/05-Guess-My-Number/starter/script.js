'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct number!';

// document.querySelector('.number').textContent=15;
// document.querySelector('.score').textContent=10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=24;
const number=Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=number;

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent="⛔️ No number!";
    }else if(guess===number){
        document.querySelector('.message').textContent='🎉 Correct Number!';
    }else if(guess<=number){
        document.querySelector('.message').textContent='📈 Too low!';
    }else{
        document.querySelector('.message').textContent='📉 Too high!';
    }
})