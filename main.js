const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game() {
    for (let i = 0; i < 5; i++) {
        singleRound()
    }
    let userSelection = userPlay();
    let computerSelection = computerPlay();
    findGameWinner(userSelection, computerSelection);

}

function singleRound() {
    let userSelection = userPlay();
    let computerSelection = computerPlay();
    console.log(`You played ${userSelection}`);
    console.log(`Computer played ${computerSelection}`);

    let declareWinner = checkWinner(computerSelection, userSelection)
    let wins = declareWinner;
    winners.push(declareWinner);
    if (declareWinner === 'tie') {
        console.log('It\'s a tie!')
    } else if (declareWinner === 'user') {
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
    console.log(`--------------`)
}

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function userPlay() {
    let input = prompt('Please type Rock, Paper or Scissors')
    input = input.toLowerCase();
    return input;
}

function checkWinner(computerC, userC) {
    if (computerC == userC) {
        return 'tie'
    } else if (
        (userC === 'rock' && computerC === 'scissors') ||
        (userC === 'paper' && computerC === 'rock') ||
        (userC === 'scissors' && computerC === 'paper')
    ) {
        return 'user'

    } else {
        return 'computer'
    }
}


function logPlays(choiceP, choiceC) {
    console.log(`You played ${choiceP}`);
    console.log(`Computer played ${choiceC}`)
}

function findGameWinner(user, computer) {
    let playerCounter = 0;
    let computerCounter = 0;

    winners.forEach(element => {
        if (element === 'user') {
            playerCounter += 1;
        }
        if (element == 'computer') {
            computerCounter += 1
        }
    });
    if (playerCounter > computerCounter) {
        console.log(`You win the game`);
    } else if (playerCounter < computerCounter) {
        console.log('Computer wins the game')
    } else {
        console.log('The game is a tie')
    }

}

game();