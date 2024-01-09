let computerChoice = getComputerChoice();
let playerChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors'.");

playerChoice = playerChoice.toLowerCase();

console.log("You chose: " + playerChoice);
console.log("The COMPUTER chose: " + computerChoice);

result = start(computerChoice, playerChoice)


function start(computerChoice, playerChoice) {

    
    if (computerChoice === playerChoice) {
        let result = "Draw";
        console.log("WOW ITS A DRAW!");
        return result;
    } else if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "scissors" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissors")) {
        let result = "Lose";
        console.log("YOU LOSE HAHAHAHAHAHAHAHA WHAT A DUMMY");
        return result;
    } else {
        let result = "Win";
        console.log("CONGRATULATIONS YOU ARE THE WINNER WINNER CHICKEN DINNER");
        return result;
    }
}


function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice;
}