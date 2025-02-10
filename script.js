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
        return "ROCK"
    }
    // ELSE IF generated number == 1
    else if (cptCh == 1) {
        // RETURN "Paper"
        return "PAPER"
    }
    // ELSE
    else {
        // RETURN"Scissors"
        return "SCISSORS"
    }

}

// Create new function getHumanChoice
function getHumanChoice() {
    // INPUT user choice (rock, paper, scissors)
    let userChoice = prompt("Enter your choice (ROCK, PAPER or SCISSORS: )").toUpperCase()
    // RETURN user choice
    return userChoice
    
}

// Create new function playRound
function playRound(humanChoice, computerChoice) {
    // IF user choice == "rock"
    if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        // DISPLAY You chose rock, computer chose scissors, YOU WIN!
        console.log("You chose ROCK, Computer chose SCISSORS, YOU WIN!")
        // DISPLAY and update scores
        humanScore += 1;
        console.log("Human: " + humanScore + ", Computer: " + computerScore)
    }
    // ELSE IF user choice == "paper"
    else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        // DISPLAY You chose paper, computer chose rock YOU WIN
        console.log("You chose PAPER, Computer chose ROCK, YOU WIN!")
        // DISPLAY and update scores
        humanScore += 1;
        console.log("Human: " + humanScore + ", Computer: " + computerScore)
        
        
    }
    // ELSE IF user choice == "scissors"
    else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        // DISPLAY You chose scissors, computer chose paper YOU WIN
        console.log("You chose SCISSORS, Computer chose PAPER, YOU WIN!")
        // DISPLAY and update scores
        humanScore += 1;
        console.log("Human: " + humanScore + ", Computer: " + computerScore)
    }
    // ELSE IF user choice == computer choice
    else if (humanChoice == computerChoice) {
        // DISPLAY TIE
        console.log("You chose " + humanChoice + ", Computer chose " + computerChoice + ", TIE!")
        // DISPLAY and update scores
        console.log("Human: " + humanScore + ", Computer: " + computerScore)
        
        
    }
    // ELSE
    else {
        // DISPLAY YOU LOSE
        console.log("You chose " + humanChoice + ", Computer chose " + computerChoice + ", YOU LOSE!")
        // DISPLAY and update scores
        computerScore += 1;
        console.log("Human: " + humanScore + ", Computer: " + computerScore)
    }

}

// Create function playGame
function playGame() {
    // CALL playRound function 5 times
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    // DISPLAY final score and winner
    // IF human score > computer score
    if (humanScore > computerScore) {
        // DISPLAY YOU WIN
        console.log("Human: " + humanScore + ", Computer: " + computerScore + ", YOU WIN! :)")
    }
    // ELSE
    else {
        // DISPLAY YOU LOSE
        console.log("Human: " + humanScore + ", Computer: " + computerScore + ", YOU LOSE! :(")

    }

}

playGame()