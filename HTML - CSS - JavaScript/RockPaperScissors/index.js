const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore  = 0 ;
let computerScore  = 0 ;
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // Random index from 0 to 2
    let result = " ";
    if (playerChoice === computerChoice){
        result = "ITS A TIE";
        resultDisplay.style.backgroundColor = "lightblue";
    } else {
        switch (playerChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    result = "YOU WIN!";
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    resultDisplay.style.backgroundColor = "lightgreen";
                } else {
                    result = "YOU LOSE!";
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    resultDisplay.style.backgroundColor = "lightcoral";
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    result = "YOU WIN!";
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    resultDisplay.style.backgroundColor = "lightgreen";
                } else {
                    result = "YOU LOSE!";
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    resultDisplay.style.backgroundColor = "lightcoral";
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    result = "YOU WIN!";
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    resultDisplay.style.backgroundColor = "lightgreen";
                } else {
                    result = "YOU LOSE!";
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    resultDisplay.style.backgroundColor = "lightcoral";
                }
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `PLAYER: ${computerChoice}`;
    resultDisplay.textContent = result;
}

