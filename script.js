const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result"); 

const computerScoreDisplay = document.getElementById("computer-score");
const playerScoreDisplay = document.getElementById("player-score");
const finalScore = document.getElementById("final"); 

let playerChoice; 
let computerChoice; 
let result 

let playerScore = 0;  
let computerScore = 0; 
let final

function handleClick(element){
    playerChoice = window.prompt("Rock Paper or Scissors?"); 
    playerChoice = playerChoice.toLowerCase(); 
    playerChoiceDisplay.innerHTML = playerChoice;
    element.innerHTML = "Play Again"
    computerSelection(); 
    playRound(); 
    score(); 
    endGame(); 
}

function computerSelection() {
    const randomNumber = Math.floor(Math.random()*3) + 1; 

    if (randomNumber === 1){
        computerChoice = "rock"; 
    }
    if (randomNumber === 2){
        computerChoice = "paper"; 
    }
    if (randomNumber === 3){
        computerChoice = "scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice; 
}

function playRound(){
    if (playerChoice === computerChoice){
        result = "It's a Draw!"
    }
    else if (playerChoice === "rock" && computerChoice === "scissors" ){
        result = "You Win!"
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        result = "You Win!"
    }
    else if (playerChoice=== "scissors" && computerChoice === "paper"){
        result = "You Win!"
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
        result = "You Lose!"
    }
    else if (playerChoice === "paper" && computerChoice === "scissors"){
        result = "You Lose!"
    }
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        result = "You Lose!"
    } else {
        result = "You did not enter a valid choice"
    }
    resultDisplay.innerHTML = result
}

function score(){
    if (result === "You Win!"){
        playerScore += 1;      
    }
    if (result === "You Lose!"){
        computerScore += 1;        
    }
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore; 
}    

function endGame(){
    if (playerScore === 3) {
        final = "You are the Winner!"
        finalScore.innerHTML = final;
    } else if (computerScore === 3){
        final = "You are the Loser!"
        finalScore.innerHTML = final;
    }
     
}


