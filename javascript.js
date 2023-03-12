// Generate random number and return associated string

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
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
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper") {
        return [playerSelection, computerSelection, "You win the round!"];
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
        return [playerSelection, computerSelection, "You lose the round!"];
    } else {
        return "Something went terribly wrong."
    }
}

// all nodes from index.html here 

const containerAboveBtns = document.querySelector("#containerAboveBtns");
const textAboveBtns = document.querySelector("#textAboveBtns");

const buttonContainer = document.querySelector("#buttonContainer");
const buttonsRps = document.querySelectorAll(".btnRps");
const buttonStart = document.querySelector("#btnStart");

const btnRock = document.createElement("button");
btnRock.setAttribute("id", "rock");
btnRock.classList.add("btnRps");
btnRock.textContent = "rock";

const btnPaper = document.createElement("button");
btnPaper.setAttribute("id", "paper");
btnPaper.classList.add("btnRps");
btnPaper.textContent = "paper";

const btnScissors = document.createElement("button");
btnScissors.setAttribute("id", "scissors");
btnScissors.classList.add("btnRps");
btnScissors.textContent = "scissors";

const restartGame = document.createElement("button");
restartGame.setAttribute("id", "restartGame");
restartGame.textContent = "Play again";

const lineContainer = document.querySelector("#lineContainer");
const line = document.createElement("div")
line.setAttribute("id", "line");

const containerBelowBtns = document.querySelector("#containerBelowBtns");
const textRound = document.createElement("div");
textRound.setAttribute("id", "textRound");
const textScore = document.createElement("div");
textScore.setAttribute("id", "textScore");

const declareWinner = document.querySelector("#declareWinner");
const winnerPlayer = document.createElement("div")
winnerPlayer.setAttribute("id", "winnerPlayer");
winnerPlayer.textContent = "You win the game!"
const winnerComputer = document.createElement("div")
winnerComputer.setAttribute("id", "winnerComputer");
winnerComputer.textContent = "Computer won the game!"


// listen for click on buttons, play until player or computer has 5 points

let roundCounter = 1;
let playerScore = 0; 
let computerScore = 0;

buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("btnRps")) {
        const result = playRound(event.target.id);
        textRound.textContent = 
        `ROUND ${roundCounter}:\nYou chose ${result[0]}\nComputer chose ${result[1]}\n${result[2]}`;
        
        if (textRound.textContent.includes("win")) {
            playerScore += 1;
        } else if (textRound.textContent.includes("lose")) {
            computerScore += 1;
        }
        
        roundCounter += 1;
        textAboveBtns.textContent = (`ROUND ${roundCounter}`);
        lineContainer.appendChild(line);
        containerBelowBtns.appendChild(textRound);
        textScore.textContent = `SCORE:\nPlayer – ${playerScore}\nComputer – ${computerScore}`;
        containerBelowBtns.appendChild(textScore);

        if (playerScore === 5 || computerScore === 5) {
            buttonContainer.removeChild(rock);
            buttonContainer.removeChild(paper);
            buttonContainer.removeChild(scissors);
            buttonContainer.appendChild(restartGame)
            restartGame.addEventListener("click", () => {
                location.reload();
                });
        }
        if (playerScore === 5) {
            declareWinner.appendChild(winnerPlayer);
        }
        if (computerScore === 5) {
            declareWinner.appendChild(winnerComputer);
        }
    }
});


// button "animations":

buttonContainer.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.style.backgroundColor = "#D9BD21";
      event.target.style.color = "#042652";
      event.target.style.boxShadow = "0px 0px 16px 0px #D9BD21";
    }
});

buttonContainer.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.style.backgroundColor = "#042652";
      event.target.style.color = "#D9BD21"
      event.target.style.boxShadow = "0px 0px 4px 0px #D9BD21";
    }
});

buttonContainer.addEventListener("mousedown", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.style.transform = "scale(1.1)";
    }
});

buttonContainer.addEventListener("mouseup", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.style.transform = "scale(1)";
    }
});

buttonStart.addEventListener("click", () => {
    buttonContainer.removeChild(btnStart);
    buttonContainer.appendChild(btnRock);
    buttonContainer.appendChild(btnPaper);
    buttonContainer.appendChild(btnScissors);
    textAboveBtns.textContent = "ROUND 1";
  });