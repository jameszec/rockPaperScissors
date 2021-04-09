let computerSelection;

function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    console.log(number);
    if (number === 0){
        computerSelection = 'rock';
    }
    else if (number === 1) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }
    console.log(computerSelection);
}




function playRound() {
    
    computerPlay();

    var playerSelection = prompt("Choose rock, paper, or scissors");

    var playerSelection = playerSelection.toLowerCase();    

    console.log(playerSelection);
    
    if (playerSelection === computerSelection){
        console.log('Tie');
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lose')
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win')
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Lose')
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Win')
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win')
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lose')
    }
}

function game() {
    for (i = 0; i<5; i++) {
    playRound();
    }
}

game();