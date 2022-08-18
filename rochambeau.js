//function returning the computer's random choice of rock, paper, or scissors in the game
function getComputerChoice() {
    const possibleChoices = ["rock", "paper", "scissors"];
    const numberOfChoices = 3;    //no magic numbers?

    let arraySelector = Math.floor(Math.random() * numberOfChoices);

    const computerChoice = possibleChoices[arraySelector];

    return computerChoice;
};

function getPlayerChoice() {
    let playerChoice = prompt("Please choose a hand to play (Rock, Paper, Scissors): ");

    if (playerChoice === null || playerChoice === "") {
        console.log("Please enter an answer.");
        playerChoice = getPlayerChoice();
    }
    
    playerChoice = makeChoiceInsensitive(playerChoice);
    return playerChoice;
};

//function for case insensitivity? could call from getPlayerChoice?
function makeChoiceInsensitive(playerChoice) {
    

    
    const insensitiveChoice = playerChoice.toLowerCase();

    return insensitiveChoice;
}

//function for checking validity of player response? if not valid, prompt again. could call from getPlayerChoice?
function isChoiceValid(playerChoice) {
    const validChoice1 = "rock";
    const validChoice2 = "paper";
    const validChoice3 = "scissors";

    playerChoice = makeChoiceInsensitive(playerChoice);

    if (playerChoice === validChoice1 || playerChoice === validChoice2 || playerChoice === validChoice3) {
        return true;
    } else {
        console.log("Sorry. That is not a valid choice. Please try again.");
        return false;
    }
}

//not really sure how to do this right now without a ton of if statements, but it feels like there ought to be a more elegant way
//come back to this
function playRound(playerSelection, computerSelection) {
    let outcomeMessage;

    //if(isChoiceValid(playerSelection)) {
        if (playerSelection === computerSelection) {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "That's a tie! Play again.";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
        } else {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "Sorry! You lose this round.";
        }
    //} else {
     //   getPlayerChoice();
   // }
    return outcomeMessage;
}

let globalPlayerChoice = getPlayerChoice();  //or I guess call it like this
//function for actually playing the game

//test
while (!isChoiceValid(globalPlayerChoice)) {
    globalPlayerChoice = getPlayerChoice();
}

console.log(playRound(globalPlayerChoice, getComputerChoice()));