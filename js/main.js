'use strict';

const button = document.querySelector('.js-play');
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');
const player = document.querySelector('.js-player');
const pc = document.querySelector('.js-pc');
const reset = document.querySelector('.js-reset');
const winnerResult = document.querySelector('.js-winner');


function getRandomNumber(max){
    return Math.ceil(Math.random()*max);
}

function getRandomMove(){
    const numRandom = getRandomNumber(9);
    if(numRandom <= 3){
        return 'rock';
    } else if(numRandom >= 7){
        return 'paper';
    } else{
        return 'scissors';
    }
}

function counter(){
    if(result.innerHTML === '¡Has Ganado!'){
        return player.innerHTML++;
    } else if(result.innerHTML === '¡Has perdido!'){
        return pc.innerHTML++;
    }
}

function maxPoints(){
    if(player.innerHTML === '10' || pc.innerHTML === '10'){
        reset.classList.remove('hidden');
        button.classList.add('hidden');
    }
}

function handleClick(ev){
    ev.preventDefault();
    const moveRandom = getRandomMove();
    if(moveRandom === select.value){
        result.innerHTML = 'Empate';
    } else if(moveRandom === 'rock' && select.value === 'paper' || moveRandom === 'scissors' && select.value === 'rock' || moveRandom === 'paper' && select.value === 'scissors'){
        result.innerHTML = '¡Has Ganado!';
    } else if(moveRandom === 'rock' && select.value === 'scissors' || moveRandom === 'scissors' && select.value === 'paper' || moveRandom === 'paper' && select.value === 'rock'){
        result.innerHTML = '¡Has perdido!';
    }
    counter();
    maxPoints();
    winner()
}

button.addEventListener('click', handleClick)

function resetCounter(){
    player.innerHTML= 0;
    pc.innerHTML = 0;
}

function winner(){
    if(player.innerHTML === '10'){
        winnerResult. innerHTML = '&#127881 Zorionak!! ¡Has ganado a la máquina! &#127881'

    } else if(pc.innerHTML === '10'){
        winnerResult.innerHTML = '&#128520 Ohhhh, esta vez la máquina ha podido contigo, pero no te desanimes y ¡pide tu revancha! &#128170'
    }
}

function resetGame(ev){
    ev.preventDefault();
    reset.classList.add('hidden');
    button.classList.remove('hidden');
    resetCounter();
    winnerResult.innerHTML = '';
    result.innerHTML ='¡Vamos a Jugar!';
}


reset.addEventListener('click', resetGame)

