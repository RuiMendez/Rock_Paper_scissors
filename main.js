const choices = ['rock', 'paper', 'scissors'];

function singleRound() {
    let userSelection = userPlay();
    let computerSelection = computerPlay();
    //checkWinner(computerSelection, userSelection)
    console.log(`You played ${userSelection}`);
    console.log(`Computer played ${computerSelection}`);
    let declareWinner = checkWinner(computerSelection, userSelection)

    if (declareWinner === 'tie') {
        console.log('It\'s a tie!')
    } else if (declareWinner === 'user') {
        console.log('You win!')
    } else {
        console.log('You lose!')
    }
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

singleRound();