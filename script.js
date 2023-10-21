// those are helpers for broken input
let playerSelection = "It's a player trap!"
let computerSelection = "It's a computer trap!"
//those are for the score
let playerScore = 0
let computerScore = 0

// REWORK from here
// DOM access
let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let divResults = document.querySelector('#results');

// DOM listener
btnRock.addEventListener('click', () => {
    playerSelection = "Rock";
    getComputerChoice()
    playRound(playerSelection, computerSelection)
});
btnPaper.addEventListener('click', () => {
    playerSelection = "Paper";
    getComputerChoice()
    playRound(playerSelection, computerSelection)
});
btnScissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    getComputerChoice()
    playRound(playerSelection, computerSelection)
});


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
        divResults.innerHTML = divResults.innerHTML + "<br />" + `It's even: ` + playerSel + ` against ` + computerSel + "<br />" + `Player: ` + playerScore + `, Computer ` + computerScore
    } else if (playerSel == "Rock") {
        if (computerSel == "Scissors") {
            playerScore = ++playerScore
            divResults.innerHTML = divResults.innerHTML + "<br />" + "You win: " + playerSel + " against " + computerSel + "<br />" + "Player: " + playerScore + ", Computer " + computerScore
        } else {
            computerScore = ++computerScore
            divResults.innerHTML = divResults.innerHTML + "<br />" + "You loose: " + playerSel + " against " + computerSel + "<br />" + "Player: " + playerScore + ", Computer " + computerScore
        }
    } else if (playerSel == "Paper") {
        if (computerSel == "Rock") {
            playerScore = ++playerScore
            divResults.innerHTML = divResults.innerHTML + "<br />" + "You win: " + playerSel + " against " + computerSel + "<br />" + "Player: " + playerScore + ", Computer " + computerScore
        } else {
            computerScore = ++computerScore
            divResults.innerHTML = divResults.innerHTML + "<br />" + "You loose: " + playerSel + " against " + computerSel + "<br />" + "Player: " + playerScore + ", Computer " + computerScore
        }
    } else if (playerSel == "Scissors") {
        if (computerSel == "Paper") {
            playerScore = ++playerScore
            divResults.innerHTML = divResults.innerHTML + "<br />" + "You win: " + playerSel + " against " + computerSel + "<br />" + "Player: " + playerScore + ", Computer " + computerScore
        } else {
            computerScore = ++computerScore
            divResults.innerHTML = divResults.innerHTML + "<br />" + "You loose: " + playerSel + " against " + computerSel + "<br />" + "Player: " + playerScore + ", Computer " + computerScore
        }
    }

    //to add at the end of every round
    if (playerScore == 5) {
        divResults.innerHTML = divResults.innerHTML + "<br />" + "<p style=\"color:green\">It's over, you have the high ground!</p>";
        btnRock.remove()
        btnPaper.remove()
        btnScissors.remove()

    } else if (computerScore == 5) {
        divResults.innerHTML = divResults.innerHTML + "<br />" + "<p style=\"color:red\">It's over, and you are done</p>";
        btnRock.remove()
        btnPaper.remove()
        btnScissors.remove()
    }

}

