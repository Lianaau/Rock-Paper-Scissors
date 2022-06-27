
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

//Create a computerPlay function that will randomly return either 'Rock', 'Paper', or 'Scissors'
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'ROCK'
    }
    if (randomNumber === 2) {
        computerChoice = 'SCISSORS'
    }
    if (randomNumber === 3) {
        computerChoice = 'PAPER'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = "It's a Draw!"
    }
    if (computerChoice === 'ROCK' && userChoice === 'PAPER') {
        result = "You Win!"
    }
    if (computerChoice === 'ROCK' && userChoice === 'SCISSORS') {
        result = "You Lose!"
    }
    if (computerChoice === 'PAPER' && userChoice === 'SCISSORS') {
        result = "You Win!"
    }
    if (computerChoice === 'PAPER' && userChoice === 'ROCK') {
        result = "You Lose!"
    }
    if (computerChoice === 'SCISSORS' && userChoice === 'ROCK') {
        result = "You Win!"
    }
    if (computerChoice === 'SCISSORS' && userChoice === 'PAPER') {
        result = "You Lose!"
    }
    resultDisplay.innerHTML = result
}
/* 
-Write a function that plays a single round, takes two parameters: playerSelection and computerSelection
-return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
-Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation) */ 


// console.log(playerSelection); 
// Return message if user didn't input correct choices 


 
// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 


// function game(){