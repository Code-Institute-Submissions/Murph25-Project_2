const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices =  document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  if (randomNumber === 2) {
    computerChoice = "scissors"
  }
  if (randomNumber === 3) {
    computerChoice = "paper"
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!"
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!"
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost!"
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!"
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!"
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!"
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!"
  }
  resultDisplay.innerHTML = result
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function incrementScore() {

  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}
function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}
function playRound() {
  if (playerSelection === computerSelection) {
    userScore++;
    computerScore++;
  } else if ((playerSelection === choises.rock && computerSelection === choises.scissors) ||
    (playerSelection === choises.rock && computerSelection === choises.rock) ||
    (playerSelection === choises.scissors && computerSelection === choises.paper)) {
    userScore++;
  } else {
    computerScore++;
  }

  scoreWindow.innerHTML = userScore + ' : ' + computerScore;
  return (computerScore, userScore);
}