// console.log("hello world")

// INITIALISE variables in global 
let humanScore = 0;
let computerScore = 0;

// Create new function getComputerChoice
function getComputerChoice() {
    // GENERATE random number between 0-2
    let cptCh = Math.floor(Math.random() * 3);
    // IF generated number == 0
    if (cptCh == 0) {
        // RETURN "Rock"
        return "Rock"
    }
    // ELSE IF generated number == 1
    else if (cptCh == 1) {
        // RETURN "Paper"
        return "Paper"
    }
    // ELSE
    else {
        // RETURN"Scissors"
        return "Scissors"
    }

}

// Create new function getHumanChoice
// INPUT user choice (rock, paper, scissors)
// RETURN user choice

// Create new function playRound
// IF user choice == "rock"
    // DISPLAY You chose rock, computer chose scissors, YOU WIN!
// ELSE IF user choice == "paper"
    // DISPLAY You chose paper, computer chose rock YOU WIN
// ELSE IF user choice == "scissors"
    // DISPLAY You chose scissors, computer chose paper YOU WIN
// ELSE IF user choice == computer choice
    // DISPLAY TIE
// ELSE
    // DISPLAY YOU LOSE

// Create function playGame
// CALL playRound function 5 times
// DISPLAY final score and win