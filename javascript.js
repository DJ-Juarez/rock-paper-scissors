
// getComputerChoice generates a random number: 0, 1 or 2.
// It then returns one of three possible strings (Rock, Paper, Scissors).

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
        return "Something went terribly wrong";
    }
}


// game() loops playRound() 5 times, and outputs score to the console.

function game() {
    alert("Let's play five rounds of Rock, Paper or Scissors.");

    let x = 0; // Player's points
    let y = 0; // Computer's points

    for (let i = 0; i < 5; i++) {
        console.log("ROUND " + (i + 1) + ":")
        let getRoundResult = playRound();
        console.log(getRoundResult);

        if (getRoundResult.includes("win")) {
            x += 1;      // add point to player
        } else if (getRoundResult.includes("lose")) {
            y += 1;      // add point to computer
        }
        console.log(`SCORE: Player - ${x}, Computer - ${y}`);
        console.log("");

        if (i < 4) {
            //alert("Next round!");
        } else if (x > y) {
            console.log("You win! Refresh browser to play again.");
        } else if (x < y) {
            console.log("You lose! Refresh browser to play again.");
        } else if (x == y) {
            console.log("It's a draw! Refresh browser to play again.");
        }
    }
}

game();
