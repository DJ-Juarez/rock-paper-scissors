
// function getComputerChoice generates a random number: 0, 1 or 2, 
// and returns one of three possible strings (Rock, Paper, Scissors).

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else if (randomNumber === 2) {
        return "Scissors";
    } else {
        return "Something went wrong.";
    }
}

// function getPlayerChoice() asks user for a string (Rock, Paper, Scissors).
// If input is invalid, the function restarts.
// if run all the way correctly, it calls getComputerChoice() and outputs two strings.

function getPlayerChoice() {

    let playerSelection = prompt("Rock, Paper or Scissors?", "");
    let playerSelectionUpperCase;
    let playerSelectionLowerCase;

    if (playerSelection === null || "") {
        alert("Invalid choice. Restarting round.");
        return getPlayerChoice();
    } else {
    playerSelectionUpperCase = (playerSelection.charAt(0).toUpperCase());
    playerSelectionLowerCase = (playerSelection.substring(1).toLowerCase());
    playerSelection = playerSelectionUpperCase + playerSelectionLowerCase;
    }
    if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") { 
        console.log ("You chose: ", playerSelection);
        let computerSelection = getComputerChoice();
        console.log ("Computer chose: ", computerSelection);  
        return;      
    } else {
        alert("Check your spelling. Restarting round.");
        return getPlayerChoice();
    }  
}


function playRound() {
    
    getPlayerChoice(); 
    // need to find a way to input playerSelection and computerSelection in this function

    if (playerSelection === "Rock") {

        if (computerSelection === "Rock") {
            return "It's a tie!";
        } else if (computerSelection === "Paper") {
            return "You lose! Paper covers the Rock";
        } else if (computerSelection === "Scissors") {
            return "You win! Rock smashes the Scissors";
        } else {
            return "Something went wrong.";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Paper") {
            return "It's a tie!";
        } else if (computerSelection === "Scissors") {
            return "You lose! Scissors cuts the Paper";
        } else if (computerSelection === "Rock") {
            return "You win! Paper covers the Rock";
        } else {
            return "Something went wrong.";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Scissors") {
            return "It's a tie!";
        } else if (computerSelection === "Rock") {
            return "You lose! Rock smashes the Scissors";
        } else if (computerSelection === "Paper") {
            return "You win! Scissors cuts the Paper";
        } else {
            return "Something went wrong.";
        }
    } else {
        return "Something went terribly wrong"
    }  
}

// work in progress. Playround() is meant to loop 5 rounds of the game, and keep track of the score

playRound();

function game() {
    alert("Let's play five rounds of Rock, Paper or Scissors.");

    let getRoundResult = playRound();
    let x = 0;
    let y = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
        if (getRoundResult.includes("win")) {
            x += 1;      // add point to player
       } else if (getRoundResult.includes("lose")) {
            y += 1;      // add point to computer
       } 
       console.log(playRound());
       console.log(`Score: Player - ${x}, Computer ${y}`);
    }
}


