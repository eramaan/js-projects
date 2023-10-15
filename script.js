let playerSelection = "It's a player trap!"
let computerSelection = "It's a computer trap!"

function getPlayerChoice() {
    let playerChoice = prompt("Player, make your choice", "Rock, Paper or Scissors?")
    playerChoice = playerChoice.toLowerCase()
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
    // console.log(playerSelection)
    return playerSelection
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
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
    // console.log(computerSelection);
    return computerSelection
}

getPlayerChoice()
getComputerChoice()

function playRound(playerSel, computerSel) {
    console.log("It's a round: " + playerSel + " against " + computerSel)
}

playRound(playerSelection, computerSelection)