const choices = ['rock', 'paper', 'scissors'];

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