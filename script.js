function getComputerChoice() {
    let computerNumberChoice = Math.floor(Math.random() * 3)
    let computerChoice = "It's a trap"
    switch(computerNumberChoice) {
        case 0:
        computerChoice = "Rock";
        break;
        case 1:
        computerChoice = "Paper";
        break;
        case 2:
        computerChoice = "Scissors";
        break;
    }
    console.log(computerChoice);
}

getComputerChoice()