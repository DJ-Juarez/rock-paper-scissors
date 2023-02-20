
// function getComputerChoice generates a random number: 0, 1 or 2.

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

let playerSelection = prompt("Rock, Paper or Scissors?");
let computerSelection = getComputerChoice();
console.log (computerSelection);


function singleRound() {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return "It's a tie!";
        } else if (computerSelection === "Paper") {
            return "You lose! Paper enclosa da Rock";
        } else if (computerSelection === "Scissors") {
            return "You win! Rock a smasha da Scissors";
        } else {
            return "Something went wrong.";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Paper") {
            return "It's a tie!";
        } else if (computerSelection === "Scissors") {
            return "You lose! Scissor clippa da Paper";
        } else if (computerSelection === "Rock") {
            return "You win! Paper enclosa da Rock";
        } else {
            return "Something went wrong.";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Scissors") {
            return "It's a tie!";
        } else if (computerSelection === "Rock") {
            return "You lose! Rock a smasha da Scissors";
        } else if (computerSelection === "Paper") {
            return "You win! Scissor clippa da Paper";
        } else {
            return "Something went wrong.";
        }
    } else {
        return "Something went terribly wrong"
    }  
}

console.log(singleRound());