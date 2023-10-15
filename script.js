// those are helpers for broken input
let playerSelection = "It's a player trap!"
let computerSelection = "It's a computer trap!"

//get the user input
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
    return playerSelection
}

//get the computer choice
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
    return computerSelection
}

//call the functions for the choices
getPlayerChoice()
getComputerChoice()

//solve the round
function playRound(playerSel, computerSel) {
    if (playerSel == computerSel) {
        console.log("It's even: " + playerSel + " against " + computerSel)
    } else if (playerSel == "Rock") {
        if (computerSel == "Scissors") {
            console.log("You win: " + playerSel + " against " + computerSel)
        } else {
            console.log("You loose: " + playerSel + " against " + computerSel)
        }
    } else if (playerSel == "Paper") {
        if (computerSel == "Rock") {
            console.log("You win: " + playerSel + " against " + computerSel)
        } else {
            console.log("You loose: " + playerSel + " against " + computerSel)
        }
    } else if (playerSel == "Scissors") {
        if (computerSel == "Paper") {
            console.log("You win: " + playerSel + " against " + computerSel)
        } else {
            console.log("You loose: " + playerSel + " against " + computerSel)
        }
    }
}

//call the round
playRound(playerSelection, computerSelection)

function game()