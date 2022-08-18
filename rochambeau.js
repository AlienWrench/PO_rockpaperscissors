

//function returning the computer's random choice of rock, paper, or scissors in the game
function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    const numberOfChoices = 3;    //no magic numbers?

    let arraySelector = Math.floor(Math.random() * numberOfChoices);

    const computerChoice = possibleChoices[arraySelector];

    return computerChoice;
};

function getPlayerChoice() {
    let playerChoice = prompt("Please choose a hand to play (Rock, Paper, Scissors): ");

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
        return playerChoice;
    } else {
        console.log("Sorry. That is not a valid choice. Please try again.");
        getPlayerChoice();
    }
}

let globalPlayerChoice = isChoiceValid(getPlayerChoice());  //or I guess call it like this
//function for actually playing the game