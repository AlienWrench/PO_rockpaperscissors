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
            computerDisplay.textContent = `The computer played ${computerSelection}`;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
            results.textContent = outcomeMessage;
            computerDisplay.textContent = `The computer played ${computerSelection}`;
            playerWins++;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
            results.textContent = outcomeMessage;
            computerDisplay.textContent = `The computer played ${computerSelection}`;
            playerWins++;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "You win! Nice job.";
            results.textContent = outcomeMessage;
            computerDisplay.textContent = `The computer played ${computerSelection}`;
            playerWins++;
            
        } else {
            console.log(`The computer played ${computerSelection}.`)
            outcomeMessage = "Sorry! You lose this round.";
            results.textContent = outcomeMessage;
            computerDisplay.textContent = `The computer played ${computerSelection}`;
            computerWins++;
        }

    }
    //return outcomeMessage;
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
rockButton.style.margin = "10px";
rockButton.style.fontSize = '24px';

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.style.padding = '10px';
rockButton.style.margin = '10px';
paperButton.style.fontSize = '24px';

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.style.padding = '10px';
scissorsButton.style.margin = '10px';
scissorsButton.style.fontSize = '24px';

const computerDisplay = document.createElement('div');
computerDisplay.style.fontSize = '24px';


const resultsContainer = document.createElement('div');
let results = document.createElement('h1');
results.textContent = "Let's play Rock Paper Scissors! \nClick one of the buttons above to choose a hand to play.";

const scoreDisplay = document.createElement('div');
let playerWins = 0;
let computerWins = 0;
scoreDisplay.textContent = `Player's Wins: ${playerWins} | Computer's wins: ${computerWins}`;
scoreDisplay.style.fontSize = '30px';



buttonsContainer.appendChild(rockButton);
buttonsContainer.appendChild(paperButton);
buttonsContainer.appendChild(scissorsButton);

resultsContainer.appendChild(results);

document.body.appendChild(computerDisplay);
document.body.appendChild(resultsContainer);
document.body.appendChild(scoreDisplay);

const buttons = document.querySelectorAll('button');
 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
         playRound(button.textContent, getComputerChoice());
         scoreDisplay.textContent = `Player's Wins: ${playerWins} | Computer's wins: ${computerWins}`;

         if (playerWins === gameTerminationPoint || computerWins === gameTerminationPoint ) {
            if (playerWins === gameTerminationPoint) {
                results.textContent = "Congratulations! \nYou won the game. The scoreboard will now be reset. \nFeel free to play again.";
            } else {
                results.textContent = "Sorry, the computer has defeated you in hand-to-hand combat. \nThe scoreboard will now be reset. \nFeel free to play again.";
            }
        
            playerWins = 0;
            computerWins = 0;
        }
    });
}); 

const gameTerminationPoint = 5;



//game();
