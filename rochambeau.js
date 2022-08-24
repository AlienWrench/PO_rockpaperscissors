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


    while (!isChoiceValid(playerChoice)) {
        playerChoice = getPlayerChoice();
    }
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

    if ( playerChoice === "") {
        console.log("Please enter an answer.");
        return false;
    }

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
    return outcomeMessage;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let gameTies = 0;
    let outcomeMessageStorage;

    for (let i = 0; i < 5; i++) {
        
        outcomeMessageStorage = playRound(getPlayerChoice(), getComputerChoice());

        if (outcomeMessageStorage === "You win! Nice job.") {
            console.log(outcomeMessageStorage);
            playerWins++;
        } else if (outcomeMessageStorage === "Sorry! You lose this round.") {
            console.log(outcomeMessageStorage);
            computerWins++;
        } else if (outcomeMessageStorage === "That's a tie! Play again.") {
            console.log(outcomeMessageStorage);
            gameTies++;
        }
        
    } console.log(`${playerWins} wins, ${computerWins} losses, ${gameTies} ties.`)

    if (playerWins > computerWins) {
        console.log("Congrats! You won the game!");
    } else if (computerWins > playerWins) {
        console.log("Sorry, you lost the game. Computer wins!")
    } else {
        console.log("Lame, a tie? Try playing another game.")
    }
}

game();
