function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?");
    let lower = playerChoice.toLowerCase();

    if (lower === "rock".toLowerCase() || lower === "paper".toLowerCase() || lower === "scissors".toLowerCase()) {
        return lower
    } else {
        console.log("You did not enter a valid response");
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a Tie! You both selected ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You Lose! Paper beats Rock`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return `You Win! Rock beats Scissors`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You Win! Paper beats Rock`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return 'You Win! Scissors beats Paper';
    }
}

function game(rounds){
    for (let i = 0; i < rounds; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

game(5);
