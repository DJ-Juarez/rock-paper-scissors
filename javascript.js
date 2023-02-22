
// getComputerChoice generates a random number: 0, 1 or 2.
// It then returns one of three possible strings (Rock, Paper, Scissors).

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Something went wrong.";
    }
}


// playRound() asks user for a string input (Rock, Paper, Scissors).
// If input is invalid, the function restarts.
// It calls getComputerChoice() and returns a string declaring who won the round.

function playRound() {

    let playerSelection = prompt("Rock, Paper or Scissors?", "");
    let playerSelectionUpperCase;
    let playerSelectionLowerCase;
    let computerSelection = getComputerChoice();

    if (playerSelection === null || "") {
        alert("Invalid choice. Restarting round.");
        return playRound();
    } else {
        playerSelectionUpperCase = (playerSelection.charAt(0).toUpperCase());
        playerSelectionLowerCase = (playerSelection.substring(1).toLowerCase());
        playerSelection = playerSelectionUpperCase + playerSelectionLowerCase;
    }

    if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
        console.log("You chose: ", playerSelection);
        console.log("Computer chose: ", computerSelection);
    } else {
        alert("Check your spelling. Restarting round.");
        return playRound();
    }

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Paper" && computerSelection === "Rock" ||
                playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
                playerSelection === "Paper" && computerSelection === "Scissors" ||
                playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "Something went terribly wrong."
    }
}


// game() loops playRound() 5 times, and outputs score to the console.

function game() {
    alert("Let's play five rounds of Rock, Paper or Scissors.");

    let playerScore = 0; 
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`ROUND ${i + 1}:`)
        let getRoundResult = playRound();
        console.log(getRoundResult);

        if (getRoundResult.includes("win")) {
            playerScore += 1;
        } else if (getRoundResult.includes("lose")) {
            computerScore += 1;
        }
        console.log(`SCORE: Player - ${playerScore}, Computer - ${computerScore}`);
        console.log("");

        if (i < 4) {
            //alert("Next round!");
        } else if (playerScore > computerScore) {
            console.log("You win! Refresh browser to play again.");
        } else if (playerScore < computerScore) {
            console.log("You lose! Refresh browser to play again.");
        } else if (playerScore == computerScore) {
            console.log("It's a draw! Refresh browser to play again.");
        }
    }
}

game();
