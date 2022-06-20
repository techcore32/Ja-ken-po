//The game is about picking rock, paper, scissors between the computer and a player

let options = ["rock", "paper", "scissors"];
const computerSelection = computerPlay();

//The player must be able to choose between the three options (written or clickable) "playerSelection"
//selection must compare and return expected result from the options variable


const playerSelection =  document.querySelectorAll("[data-selection]");


playerSelection.forEach(playerSelection => {
    playerSelection.addEventListener("click", e => {
        let selectionName = playerSelection.dataset.selection;
        makeSelection (selectionName);
        playRound();
    }) 


})

function makeSelection(selection) {
        console.log(selection);
}
// if (playerSelection.toLowerCase() === "rock") {
//     playerSelection = options[0];
    
// }
// else if (playerSelection.toLowerCase() === "paper"){
//     playerSelection = options[1];
// }

// else if (playerSelection.toLowerCase() === "scissors"){
//     playerSelection = options[2];
    
// }
// else {
//     alert("Remember to play you must pick either rock, paper or scissors");
// }

console.log (playerSelection);

//The computer must respond with a random string between those three options "computerPlay"
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)];
}

console.log (computerSelection);

//Winner is defined depending on the result

// rock beats scissors, scissors beats paper, paper beats rock. Else draw.
//the result has to be shown 


function playRound(){

//print message for the player telling him the result

    if(playerSelection === computerSelection){
        return "It\'s a draw";
    }

    else if (playerSelection === "scissors" && computerSelection === "paper" ||
             playerSelection === "paper" && computerSelection === "rock" || 
             playerSelection === "rock" && computerSelection === "scissors"){
                return "Nice job!";  
            }

    else{
        return "That's too bad!";
    }

}

console.log (playRound());

