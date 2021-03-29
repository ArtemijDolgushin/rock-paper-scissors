 function getComputerSelection() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}
function getPlayerSelection(element){
     return element.target.id;
 }
 function updateCounter(selector){
     document.querySelector(selector).textContent = `${+document.querySelector(selector).textContent + 1}`;
 }
 function resetCounter(){
     document.querySelector(`#player`).textContent = `0`;
     document.querySelector(`#computer`).textContent = `0`;
 }
function playHand(e) {
    let playerSelection, computerSelection;
    playerSelection = getPlayerSelection(e);
    computerSelection = getComputerSelection();
    if (playerSelection === computerSelection) {
        return `It's a Tie! Both played ${playerSelection}`;
    }
    else {
        switch (playerSelection + computerSelection) {
            case "PaperRock":
            case "RockScissors":
            case "ScissorsPaper":
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            default:
                return `You  Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}
function playRound(e) {
    let gameState;
    gameState = playHand(e);
    document.querySelector(`#gamestate`).textContent = gameState;
    if (gameState[4] === 'W') { updateCounter(`#player`); }
    if (gameState[4] === 'L') { updateCounter(`#computer`); }
    if (document.querySelector(`#player`).textContent === '5') { document.querySelector(`#gamestate`).textContent = 'Congratulations! You win the game! Wanna try again?'; resetCounter();}
    if (document.querySelector(`#computer`).textContent ==='5') { document.querySelector(`#gamestate`).textContent = 'Too bad... You lose the game. Maybe try again?'; resetCounter();}
}
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener('click', playRound));



