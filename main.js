const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game() {
    for (let i = 0; i < 5; i++) {
        singleRound()
    }
    findGameWinner()
}


function singleRound() {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    const winner = checkWinner(playerSelection, computerSelection);
    logPlays(playerSelection, computerSelection);

    console.log(`winner: ${checkWinner(playerSelection, computerSelection)}`);
    console.log('--------------')
    winners.push(winner)
}


function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];

}

function userPlay() {
    let input = prompt('please type Rock, Paper or Scissors');
    input = input.toLowerCase();
    return input;
}

function checkWinner(choiceP, choiceC) {


    if (choiceP === choiceC) {
        return 'tie';
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'paper' && choiceC === 'rock') ||
        (choiceP === 'scissors' && choiceC === 'paper')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logPlays(choiceP, choiceC) {
    console.log(`You played ${choiceP}`);
    console.log(`Computer played ${choiceC}`)
}

function findGameWinner() {
    let playerCounter = 0;
    let computerCounter = 0;

    winners.forEach(element => {
        if (element === 'Player') {
            playerCounter += 1;
        }
        if (element == 'Computer') {
            computerCounter += 1
        }
    });
    if (playerCounter > computerCounter) {
        console.log(`You win`);
    } else if (playerCounter < computerCounter) {
        console.log('computer wins')
    } else {
        console('it/s a tie')
    }
    console.log(`computer won ${computerCounter} times. You won ${playerCounter} times`)
}

game();