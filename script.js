// those are helpers for broken input
let playerSelection = "It's a player trap!"
let computerSelection = "It's a computer trap!"
let playerScore = 0
let computerScore = 0

// REWORK from here
// DOM access
let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissors = document.querySelector('#scissors');
let btnSpock = document.querySelector('#spock');
let btnLizard = document.querySelector('#lizard');
let divResults = document.querySelector('#results');
let playerScoreValue = document.querySelector('#player-score');
let computerScoreValue = document.querySelector('#computer-score');

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
btnSpock.addEventListener('click', () => {
    playerSelection = "Spock";
    getComputerChoice()
    playRound(playerSelection, computerSelection)
});
btnLizard.addEventListener('click', () => {
    playerSelection = "Lizard";
    getComputerChoice()
    playRound(playerSelection, computerSelection)
});

//get the computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 5)
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
        case 3:
        computerSelection = "Spock";
        break;
        case 4:
        computerSelection = "Lizard";
        break;
    }
    return computerSelection
}

//solve the round
function playRound(playerSel, computerSel) {
    if (playerSel == computerSel) {
        divResults.innerHTML = "It's even! " + "<br />" + playerSel + " against " + computerSel
    } else if (playerSel == "Rock") {
        if (computerSel == "Scissors" || computerSel == "Lizard") {
            playerScore = ++playerScore
            divResults.innerHTML = "You win! " + "<br />" + playerSel + " beats " + computerSel
        } else {
            computerScore = ++computerScore
            divResults.innerHTML = "You loose! " + "<br />" + playerSel + " is beaten by " + computerSel
        }
    } else if (playerSel == "Paper") {
        if (computerSel == "Rock" || computerSel == "Spock") {
            playerScore = ++playerScore
            divResults.innerHTML = "You win! " + "<br />" + playerSel + " beats " + computerSel
        } else {
            computerScore = ++computerScore
            divResults.innerHTML = "You loose! " + "<br />" + playerSel + " is beaten by " + computerSel
        }
    } else if (playerSel == "Scissors") {
        if (computerSel == "Paper" || computerSel == "Lizard") {
            playerScore = ++playerScore
            divResults.innerHTML = "You win! " + "<br />" + playerSel + " beats " + computerSel
        } else {
            computerScore = ++computerScore
            divResults.innerHTML = "You loose! " + "<br />" + playerSel + " is beaten by " + computerSel
        }
    } else if (playerSel == "Spock") {
        if (computerSel == "Rock" || computerSel == "Scissors") {
            playerScore = ++playerScore
            divResults.innerHTML = "You win! " + "<br />" + playerSel + " beats " + computerSel
        } else {
            computerScore = ++computerScore
            divResults.innerHTML = "You loose! " + "<br />" + playerSel + " is beaten by " + computerSel
        }
    } else if (playerSel == "Lizard") {
        if (computerSel == "Paper" || computerSel == "Spock") {
            playerScore = ++playerScore
            divResults.innerHTML = "You win! " + "<br />" + playerSel + " beats " + computerSel
        } else {
            computerScore = ++computerScore
            divResults.innerHTML = "You loose! " + "<br />" + playerSel + " is beaten by " + computerSel
        }
    }

    playerScoreValue.textContent = playerScore
    computerScoreValue.textContent = computerScore

    //to add at the end of every round
    if (playerScore == 5) {
        divResults.innerHTML = "<h2 style=\"color:#43aa8b; margin-top:2em\">it's over<br />you have the high ground!</p>";
        btnRock.remove()
        btnPaper.remove()
        btnScissors.remove()
        btnSpock.remove()
        btnLizard.remove()
    } else if (computerScore == 5) {
        divResults.innerHTML = "<h2 style=\"color:#c1121f; margin-top:2em\">It's over<br />a nice addition to my collection</h2>";
        btnRock.remove()
        btnPaper.remove()
        btnScissors.remove()
        btnSpock.remove()
        btnLizard.remove()
    }

}

