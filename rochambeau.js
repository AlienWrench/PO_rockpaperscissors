

//function returning the computer's random choice of rock, paper, or scissors in the game
function getComputerChoice() {
    const possibleChoices = ["Rock", "Paper", "Scissors"];
    const numberOfChoices = 3;    //no magic numbers?

    let arraySelector = Math.floor(Math.random() * numberOfChoices);

    const computerChoice = possibleChoices[arraySelector];

    return computerChoice;
}
