// Generate random number and return associated string

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

// Return array [0,1,2]: playerSelection[0], computerSelection[1],
// and a string stating who won the round[2].

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return [playerSelection, computerSelection, "The round is a tie!"];
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Paper" && computerSelection === "Rock" ||
                playerSelection === "Scissors" && computerSelection === "Paper") {
        return [playerSelection, computerSelection, "You win the round!"];
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
                playerSelection === "Paper" && computerSelection === "Scissors" ||
                playerSelection === "Scissors" && computerSelection === "Rock") {
        return [playerSelection, computerSelection, "You lose the round!"];
    } else {
        return "Something went terribly wrong."
    }
}

// all nodes from index.html here 

const buttonsRps = document.getElementsByClassName("btnRps");

const restartGame = document.createElement("button");
restartGame.setAttribute("id", "restartGame");
restartGame.textContent = "Play again";

const textContainer = document.querySelector("#textContainer");
const textRound = document.createElement("div");
textRound.classList.add("textRound");

const infoContainer = document.querySelector("#infoContainer");
const info = document.querySelector("#info");


// listen for click on buttons, play until player or computer has 5 points

function playFiveRounds() {

    let playerScore = 0; 
    let computerScore = 0;

    for (let i = 0; i < buttonsRps.length; i++) {
        buttonsRps[i].addEventListener("click", (event) => {
            const result = playRound(event.target.id);
            textRound.textContent = `You chose ${result[0]}\nComputer chose ${result[1]}\n${result[2]}`;

            console.log(result);

            if (textRound.textContent.includes("win")) {
                playerScore += 1;
            } else if (textRound.textContent.includes("lose")) {
                computerScore += 1;
            }
            
            console.log(textRound.textContent);
            console.log(playerScore, computerScore);
            textContainer.appendChild(textRound);
            info.textContent = playerScore + "-" + computerScore;
    
            if (playerScore === 5 || computerScore === 5) {
                buttonContainer.removeChild(Rock);
                buttonContainer.removeChild(Paper);
                buttonContainer.removeChild(Scissors);
                buttonContainer.appendChild(restartGame)
                restartGame.addEventListener("click", () => {
                    location.reload();
                  });
            }
            if (playerScore === 5) {
                textRound.textContent = "You win the game!";
            }
            if (computerScore === 5) {
                textRound.textContent = "Computer wins the game!";
            }
        });
    }
}

playFiveRounds();