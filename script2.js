'use strict';

let secretNumber= Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;

const changeText=function (message){ document.querySelector('.message').textContent=message};

document.querySelector('.check').addEventListener('click',function(){
 const guess=Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);


if(guess==' '){changeText('🙄No Input!!');}

 else if(guess===secretNumber) {changeText('😎 You Won Correct Guess');
document.querySelector('body').style.backgroundColor='green';
document.querySelector('.number').textContent=secretNumber;
 
if(score>highscore)
{    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
}}
 
else if(guess!==secretNumber){
    if(score>1){guess>secretNumber?changeText('😉Too High '):changeText('😉Too Low');
score--;
document.querySelector('.score').textContent=score;}
else { changeText(' 🤣🤣 You Lost ...');
document.querySelector('.score').textContent='0';}

} })

document.querySelector('.again').addEventListener('click', function (){
    secretNumber= Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    changeText('Start Guessing.....');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor='#222';
});