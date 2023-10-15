// those are helpers for broken input
let playerSelection = "It's a player trap!"
let computerSelection = "It's a computer trap!"
//those are for the score
let playerScore = 0
let computerScore = 0

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

//solve the round
function playRound(playerSel, computerSel) {
    if (playerSel == computerSel) {
        console.log("It's even: " + playerSel + " against " + computerSel)
        console.log("Player: " + playerScore + ", Computer " + computerScore)
    } else if (playerSel == "Rock") {
        if (computerSel == "Scissors") {
            console.log("You win: " + playerSel + " against " + computerSel)
            playerScore = ++playerScore
            console.log("Player: " + playerScore + ", Computer " + computerScore)
        } else {
            console.log("You loose: " + playerSel + " against " + computerSel)
            computerScore = ++computerScore
            console.log("Player: " + playerScore + ", Computer " + computerScore)
        }
    } else if (playerSel == "Paper") {
        if (computerSel == "Rock") {
            console.log("You win: " + playerSel + " against " + computerSel)
            playerScore = ++playerScore
            console.log("Player: " + playerScore + ", Computer " + computerScore)
        } else {
            console.log("You loose: " + playerSel + " against " + computerSel)
            computerScore = ++computerScore
            console.log("Player: " + playerScore + ", Computer " + computerScore)
        }
    } else if (playerSel == "Scissors") {
        if (computerSel == "Paper") {
            console.log("You win: " + playerSel + " against " + computerSel)
            playerScore = ++playerScore
            console.log("Player: " + playerScore + ", Computer " + computerScore)
        } else {
            console.log("You loose: " + playerSel + " against " + computerSel)
            computerScore = ++computerScore
            console.log("Player: " + playerScore + ", Computer " + computerScore)
        }
    }
}


//function for the full game, 5 rounds and the final results
function game() {
    for (let i = 0; i < 5; i++) {
        //call the choices
        getPlayerChoice()
        getComputerChoice()
        //call the round
        playRound(playerSelection, computerSelection)
    }
    if (playerScore == computerScore) {
        console.log("It's over, and it's even o.O")
    } else if (playerScore > computerScore) {
        console.log("It's over, you have the high ground")
    } else {
        console.log("It's over, and you are done.")
    }
}

//call the game
game()