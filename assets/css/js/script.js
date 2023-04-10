const buttons= document.getElementsByClassName("control");
const playerScore= document.getElementById("player-score");
const computerScore= document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock","paper", "scissors"];

for (let button of buttons){
    button.addEventListener("click",function(){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    })
}
function playGame(playerChoice){
    
    playerImage.src = assets/css/images/${choices[playerChoice]}.png;
    playerImage.alt = choices[playerChoice];

    let computerCHoice = Math.floor(Math.random()*3);

    computerImage.src = assets/css/images/${choices[computerChoice]}.png;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    updateScores(result);
}