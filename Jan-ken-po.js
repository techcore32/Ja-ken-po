//The game is about picking rock, paper, scissors between the computer and a player

const options = ["rock", "paper", "scissors"];



//The player must be able to choose between the three options (written or clickable) "playerSelection"
//selection must compare and return expected result from the options variable


const playerSelection =  document.querySelectorAll("[data-selection]");
const message = document.querySelector(".result");

const win = 0;
const lost = 0;

playerSelection.forEach(playerSelection => {
    playerSelection.addEventListener("click", e => {
        let selection = playerSelection.dataset.selection;
        makeSelection (selection);
    }) 
})

function makeSelection(selection) {

    let computerSelection = computerPlay();
    let result = playRound(selection,computerSelection);
    
    message.innerText= result;
    console.log(selection);
    console.log(computerSelection);
    console.log(result);

    // if(result === "win"){
    //     return win+1;
    // }

    // else if (result === "lost") {
    //     return lost+1;
    // }

    // else{
    //     return ;
    // }
    
    
        
}


//The computer must respond with a random string between those three options "computerPlay"
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)];
}



//function defines the combinations that determine if you win, lose or draw


function playRound(selection,computerSelection) {  
    if(selection === computerSelection){
        return "It\'s a draw!";
    }

    else if (selection  === "scissors" && computerSelection === "paper" ||
    selection  === "paper" && computerSelection === "rock" || 
    selection  === "rock" && computerSelection === "scissors"){
    return " You win!";  
}

else{
return "Better luck next time!";
}
}

