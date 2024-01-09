let computerScore = 0;
let playerScore = 0;
game();

function game() {   
    for (let i = 0; i <= 5;) {
        
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors'.");

        playerChoice = playerChoice.toLowerCase();

        console.log("\nYou chose: " + playerChoice);
        console.log("The COMPUTER chose: " + computerChoice);

        result = start(computerChoice, playerChoice);
        
        if (result === "draw"){
            game();
        } else if (result === "lose") {
            computerScore++;
        } else {
            playerScore++;
        }

        console.log("\nYour score is: " + playerScore + " " + "The COMPUTERS score is: " + computerScore);

        if (playerScore === 3) {
            console.log("CONGRATULATIONS YOU WON THE GAME");
            break;
        } else if (computerScore === 3) {
            console.log("THE COMPUTER WON >:D");
            break;
        }

    }
    console.log("\n\nGAME OVER")
}


function start(computerChoice, playerChoice) {
    
    if (computerChoice === playerChoice) {
        let result = "draw";
        console.log("\nWOW ITS A DRAW!  Play Again\n");
        return result;
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissors")) {
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