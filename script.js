game();

function game() {
    for (let i = 0; i <= 5;) {
        let computerScore = 0;
        let playerScore = 0;
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors'.");

        playerChoice = playerChoice.toLowerCase();

        console.log("You chose: " + playerChoice);
        console.log("The COMPUTER chose: " + computerChoice);

        result = start(computerChoice, playerChoice);
        
        if (result === "draw"){
            setup();
        } else if (result === "lose") {
            computerScore++;
        } else {
            playerScore++;
        }

        console.log("Your score is: " + playerScore + "The COMPUTERS score is: " + computerScore)
    }
}

function start(computerChoice, playerChoice) {
    
    if (computerChoice === playerChoice) {
        let result = "draw";
        console.log("WOW ITS A DRAW!  Play Again");
        return result;
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissors")) {
        let result = "lose";
        console.log("YOU LOSE HAHAHAHAHAHAHAHA WHAT A DUMMY");
        return result;
    } else {
        let result = "win";
        console.log("CONGRATULATIONS YOU ARE THE WINNER WINNER CHICKEN DINNER");
        return result;
    }
}


function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice;
}