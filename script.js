let computerScore = 0;
let playerScore = 0;
let playerChoice = '';
let result = '';

//Stores html buttons in variables for later onClick events
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

//Stores the html sections that will be used to display choices and results
let playerChoiceHTML = document.querySelector('#playerChoice');
let computerChoiceHTML = document.querySelector('#computerChoice');
let resultHTML = document.querySelector('#result'); 


//Runs a function that plays a round when the rock button is clicked, also sets
//the HTML content to a rock emoji
rockBtn.onclick = () => {
    playerChoice = 'rock';
    playerChoiceHTML.textContent = '✊';    
    result = start(playerChoice);
    score(result);
};

//Runs a function that plays a round when the paper button is clicked, also sets
//the HTML content to a paper emoji
paperBtn.onclick = () => {
    playerChoice = 'paper';
    playerChoiceHTML.textContent = '✋';
    result = start(playerChoice);
    score(result);
}

//Runs a function that plays a round when the scissors button is clicked, also sets
//the HTML content to a scissor emoji    
scissorsBtn.onclick = () => {
    playerChoice = 'scissors';
    playerChoiceHTML.textContent = '✌️';
    result = start(playerChoice);
    score(result);
}


function score(result) {

    //store result html display in a variable
    let resultHTML = document.querySelector('#result');

    //Store score counters as variables for display
    playerScoreHTML = document.querySelector('#playerScore');
    computerScoreHTML = document.querySelector('#computerScore')

    //Increments player score and changes display
    if (result === "win"){
        playerScore++;
        playerScoreHTML.textContent = playerScore;
    } 

    //Increments the computers score and changes display
    else if (result === "lose") {
        computerScore++;
        computerScoreHTML.textContent = computerScore;
    }

    if (playerScore === 5) {
        resultHTML.textContent = "CONGRATULATIONS YOU WON THE GAME";
        playerScore = 0;
        computerScore = 0;
        playerScoreHTML.textContent = playerScore;
        computerScoreHTML.textContent = computerScore;
    } 
    else if (computerScore === 5) {
        resultHTML.textContent = "THE COMPUTER WON >:D";
        playerScore = 0;
        computerScore = 0;
        playerScoreHTML.textContent = playerScore;
        computerScoreHTML.textContent = computerScore;
    }
}
    
function start(playerChoice) {

    //store result html display in a variable
    let resultHTML = document.querySelector('#result');
    
    let computerChoice = getComputerChoice();
    
    //Sets the computer choice HTML to the respective emoji
    if (computerChoice === "rock") computerChoiceHTML.textContent = '✊';
    else if (computerChoice === "paper") computerChoiceHTML.textContent = '✋';
    else computerChoiceHTML.textContent = '✌️';

    if (computerChoice === playerChoice) {
        let result = "draw";
        resultHTML.textContent = 'DRAW!'
        return result;

    } else if ((playerChoice === "rock" && computerChoice === "paper") || 
               (playerChoice === "scissors" && computerChoice === "rock") ||
               (playerChoice === "paper" && computerChoice === "scissors")) {

        let result = "lose";
        resultHTML.textContent = 'YOU LOST!'
        return result;

    } else {

        let result = "win";
        resultHTML.textContent = 'YOU WON!'
        return result;
        
    }
}

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice;
}