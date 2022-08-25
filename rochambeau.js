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
    playerSelection = makeChoiceInsensitive(playerSelection);

    if(isChoiceValid(playerSelection)) {
        if (playerSelection === computerSelection) {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "That's a tie! Play again.";
            results.textContent = outcomeMessage;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
            results.textContent = outcomeMessage;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
            results.textContent = outcomeMessage;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
            results.textContent = outcomeMessage;
        } else {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "Sorry! You lose this round.";
            results.textContent = outcomeMessage;
        }

    }
    return outcomeMessage;
}

/*function game() {
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
} */

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.style.padding = '10px';

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.style.padding = '10px';

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.style.padding = '10px';

const resultsContainer = document.createElement('div');
let results = document.createElement('h1');
results.textContent = 'heyyy';

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

resultsContainer.appendChild(results);

document.body.appendChild(resultsContainer);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
         playRound(button.textContent, getComputerChoice());
    });
}); 



//game();
