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
    incrementScore();
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost!"
    incrementWrongAnswer()
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!"
    incrementScore();
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!"
    incrementWrongAnswer();
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!"
    incrementScore();
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!"
    incrementWrongAnswer()
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