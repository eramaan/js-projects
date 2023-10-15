let playerChoice = prompt("Player, make your choice", "Rock, Paper or Scissors?")
playerChoice = playerChoice.toLowerCase()
let playerSelection = "It's a player trap"
switch(playerChoice) {
    case "rock":
    playerSelection = "Rock";
    break;
    case "paper":
    playerSelection = "Paper";
    break;
    case "scissors":
    playerSelection = "Scissors";
    break;
}

console.log(playerSelection)

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    let computerSelection = "It's a computer trap"
    switch(computerChoice) {
        case 0:
        computerSelection = "Rock";
        break;
        case 1:
        computerSelection = "Paper";
        break;
        case 2:
        computerSelection = "Scissors";
        break;
    }
    console.log(computerSelection);
}

getComputerChoice()


