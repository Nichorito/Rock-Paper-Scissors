let computerScore = 0;
let playerScore = 0;
let playerChoice = '';
let result = '';

//Stores html buttons in variables for later onClick events
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');


//Runs a function that plays a round when the rock button is clicked
rockBtn.onclick = () => {
    playerChoice = 'rock';    
    result = start(playerChoice);
    score(result);
};

//Runs a function that plays a round when the paper button is clicked
paperBtn.onclick = () => {
    playerChoice = 'paper';
    result = start(playerChoice);
    score(result);
}

//Runs a function that plays a round when the scissors button is clicked    
scissorsBtn.onclick = () => {
    playerChoice = 'scissors';
    result = start(playerChoice);
    score(result);
}


function score(result) {

    if (result === "win"){
        playerScore++;
    } 
    else if (result === "lose") {
        computerScore++;
    }
    
    console.log("\nYour score is: " + playerScore + "\n" + 
                "The COMPUTERS score is: " + computerScore);

    if (playerScore === 3) {
        console.log("CONGRATULATIONS YOU WON THE GAME");
    } else if (computerScore === 3) {
        console.log("THE COMPUTER WON >:D");
    }
}


    
function start(playerChoice) {
    
    let computerChoice = getComputerChoice();

    console.log("\nYou chose: " + playerChoice);
    console.log("The COMPUTER chose: " + computerChoice);

    if (computerChoice === playerChoice) {
        let result = "draw";
        console.log("\nWOW ITS A DRAW!  Play Again\n");
        return result;

    } else if ((playerChoice === "rock" && computerChoice === "paper") || 
               (playerChoice === "scissors" && computerChoice === "rock") ||
               (playerChoice === "paper" && computerChoice === "scissors")) {

        let result = "lose";
        console.log("\nYOU LOSE HAHAHAHAHAHAHAHA WHAT A DUMMY\n");
        return result;

    } else {

        let result = "win";
        console.log("\nCONGRATULATIONS YOU ARE THE WINNER WINNER CHICKEN DINNER\n");
        return result;
        
    }
}


function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice;
}