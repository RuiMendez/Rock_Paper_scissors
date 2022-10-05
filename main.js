"strict";

//element selection
const yourSelection = document.querySelector(".selection-you");
const computerSelection = document.querySelector(".selection-computer");
const imgs = document.querySelectorAll("img");
const playerScore = document.getElementById("score--0");
const computerScore = document.getElementById("score--1");
const gameRound = document.querySelector(".number");
const rounds = document.querySelector(".rounds");
const options = document.querySelector(".options");
const gameEnd = document.querySelector(".game-end");

//staring conditions
yourSelection.classList.add("hidden");
computerSelection.classList.add("hidden");
playerScore.textContent = 0;
computerScore.textContent = 0;
gameRound.textContent = 0;
rounds.classList.add("remove");
//options.classList.add("remove");
gameEnd.classList.add("remove");

let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
    //reset game
}

function startGame() {
    imgs.forEach((img) => {
        img.addEventListener("click", () => {
            if (img.id) {
                playRound(img.id);
                yourSelection.classList.remove("hidden");

                yourSelection.src = `images/${img.id}.png`;
            }
        });
    });
}

function playRound(playerChoice) {
    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    computerSelection.classList.remove("hidden");
    computerSelection.src = `images/${computerChoice}.png`;
    gameRound.textContent++;
    rounds.classList.remove("remove");
    score(winner);
    winners.push(winner);
}

function computerSelect() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choice1, choice2) {
    if (
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "scissors" && choice2 == "paper") ||
        (choice1 == "paper" && choice2 == "rock")
    ) {
        return "Player";
    } else if (choice1 == choice2) {
        return "Tie";
    } else {
        return "Computer";
    }
}

function score(winner) {
    if (winner === "Player") {
        playerScore.textContent++;
    }
    if (winner === "Computer") {
        computerScore.textContent++;
    }
}

/*function gameRound() {
    rounds.textContent += 1;
    rounds.classList.remove("remove");
}*/

function setWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    if (pWinCount > cWinCount) {
        return "Player";
    } else if (cWinCount > pWinCount) {
        return "Computer";
    } else {
        return "Tie";
    }
}
startGame();