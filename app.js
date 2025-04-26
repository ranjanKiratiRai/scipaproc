const computerChoiceDisplay = document.getElementById('computer-Choice');
const userChoiceDisplay = document.getElementById('user-Choice');
const resultDisplay = document.getElementById('result');
// now selecting all the buttons.
possibleChoices = document.querySelectorAll('button')//this select everything containing button
let userChoice;
let computerChoice;
let result;


//now im going to grab all those buttons and for each button 
//adding the event listener, so that when i click button click is heard

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))
//now 
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);// rounds to integer
    console.log(randomNumber)
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissor'

    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice;

}
function getResult(){
if (computerChoice === userChoice){
    result = "It's a draw!"
}
resultDisplay.innerHTML = result;
if (computerChoice==='rock' && userChoice==='paper'){
    result = 'you win';

}
if(computerChoice==='rock' && userChoice==='scissor'){
    result = 'you lose';

}
if(computerChoice=== 'paper'&& userChoice==='rock'){
    result ='you lose';
}
if(computerChoice ==='scissor'&& userChoice==='rock'){
    result = 'you win'

}
if (computerChoice ==='scissors'&& userChoice === 'paper'){
    result = 'you lose'
}
resultDisplay.innerHTML = result;

}
