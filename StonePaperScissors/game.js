let buttons = document.querySelectorAll("button");
let resultElem = document.getElementById("result") ;
let player = document.getElementById("user-score") ; 
let computer = document.getElementById("computer-score") ; 

let playerScore = 0 ; 
let computerScore = 0 ; 

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let result = playGame(button.id, ComputerPlay());
    resultElem.innerText = result ; 
  });
});

function ComputerPlay() {
  let Choises = ["rock", "paper", "scissors"];

  const RandomChoise = Math.floor(Math.random() * Choises.length);
  return Choises[RandomChoise];
}


function playGame(playerSelection, ComputerSelection) {
  if (playerSelection == ComputerSelection) {
    return `It's a tie `;
  } else if (
    (playerSelection == "rock" && ComputerSelection == "scissors") ||
    (playerSelection == "scissors" && ComputerSelection == "paper") ||
    (playerSelection == "paper" && ComputerSelection == "rock")
  ) {
    playerScore++;
    player.innerText = playerScore  ; 
    return `You Win ${playerSelection} beats ${ComputerSelection}` ; 
  } 
  else {
    computerScore++;
    computer.innerText = computerScore ; 
    return `you lose ${ComputerSelection} beats ${playerSelection}` ;
  }
}
