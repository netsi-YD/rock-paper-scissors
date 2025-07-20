let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  let result = '';

  if (playerSelection === computerSelection) {
    result = `It's a tie! Both chose ${playerSelection}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  resultDiv.textContent = result;
  scoreDiv.textContent = `Score — You: ${playerScore}, Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    const winner = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
    resultDiv.textContent = winner;
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
