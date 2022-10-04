"strict";

//element selection
const yourSelection = document.querySelector(".selection-you");
const computerSelection = document.querySelector(".selection-computer");
const imgs = document.querySelectorAll("img");
const playerScore = document.getElementById("score--0");
const computerScore = document.getElementById("score--1");

//staring conditions
yourSelection.classList.add("hidden");
computerSelection.classList.add("hidden");
playerScore.textContent = 0;
computerScore.textContent = 0;

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
    score(winner);
    winners.push(winner);
}

function computerSelect() {
    //todo - update the dom with the computer selection
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

function setWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}
//console.log(`Computer chose ${computerSelect()}`);
startGame();