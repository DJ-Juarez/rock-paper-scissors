

let randomNumber = Math.floor(Math.random() * 3); // random number: 0, 1 or 2

console.log(randomNumber);

function getComputerChoice() {
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

console.log(getComputerChoice())