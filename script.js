var playerScore = 0;
var computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const winningMoves = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

while (playerScore < 3 && computerScore < 3) {
    if (!game()) {
        break;
    }
}

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    console.log(computerSelection);
    return computerSelection;
}

function playerPlay() {
    let playerInput;
    do {
        playerInput = prompt("Choose rock, paper, or scissors:");
        if (playerInput === null) {
            return null;
        }
        playerInput = playerInput.toLowerCase().replace(/\s/g, "");
        if (!choices.includes(playerInput)) {
            alert("Invalid input. Please choose rock, paper, or scissors.");
        }
    } while (!choices.includes(playerInput));
    return playerInput;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "tie";
    return winningMoves[playerSelection] === computerSelection ? "playerWin" : "computerWin";
}

function game() {
    let playerSelection = playerPlay();
    if (playerSelection === null) {
        return false;
    }
    let computerSelection = computerPlay();
    let computerChoice = choices[computerSelection];
    let roundResult = playRound(playerSelection, computerChoice);
    switch (roundResult) {
        case "playerWin":
            playerScore++;
            alert(`The computer chose ${computerChoice}.\n` 
                +`You win this round! Score: Player ${playerScore} - Computer ${computerScore}`);
            break;
        case "computerWin":
            computerScore++;
            alert(`The computer chose ${computerChoice}.\n`+
                `Computer wins this round! Score: Player ${playerScore} - Computer ${computerScore}`);
            break;
        case "tie":
            alert(`The computer chose ${computerChoice}.\n`+
                `It's a tie! Score: Player ${playerScore} - Computer ${computerScore}`);
            break;
    }
    if (playerScore === 3 && computerScore !== 3) {
        alert("Congratulations! You won the game!");
    }
    else if (computerScore === 3 && playerScore !== 3) {
        alert("Sorry! The computer won the game!");
    }
    return true;
}