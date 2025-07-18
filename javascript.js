function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice());
function getHumanChoice() {
  const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  return choice;
}
console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();

  if (human === computerChoice) {
    console.log(`It's a draw! Both chose ${human}`);
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winConditions[human] === computerChoice) {
    humanScore++;
    console.log(`You win! ${human} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${human}`);
  }
}
