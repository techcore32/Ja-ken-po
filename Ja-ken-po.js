//The game is about picking rock, paper, scissors between the computer and a player

let options = ["rock", "paper", "scissors"];
const computerSelection = computerPlay();
//The player must be able to choose between the three options (written or clickable) "playerSelection"


//The computer must respond with a random string between those three options "computerPlay"
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)];
}

console.log (computerSelection);

//Winner is defined depending on the result

// rock beats scissors, scissors beats paper, paper beats rock. Else draw.
//the result has to be shown 



//the game must be 5 rounds 

//print message for the player telling him the result
