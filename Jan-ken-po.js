//The game is about picking rock, paper, scissors between the computer and a player

const options = ["rock", "paper", "scissors"];



//The player must be able to choose between the three options (written or clickable) "playerSelection"
//selection must compare and return expected result from the options variable


const playerSelection =  document.querySelectorAll("[data-selection]");
const message = document.querySelector(".result");
const finalResult = document.querySelector(".finalResult");
const win = document.querySelector(".win");
const lost = document.querySelector(".lose");
const matchResult = document.querySelector(".playGround");
const userImg = document.querySelector(".selectImgP1");
const PCImg = document.querySelector (".selectImgCPU");

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
    userImg.src = "Images/"+ selection+ ".png";
    PCImg.src = "Images/"+ computerSelection+ ".png";
    matchResult.style.display = "flex";
    console.log(selection);
    console.log(computerSelection);
    console.log(result);
    console.log (win.innerText);
    console.log(lost.innerText);

    if(result === "You win!") {
        increaseScore(win);
    }
    if(result === "Better luck next time!") increaseScore(lost)
    
    if (win.innerText === "5") {
        finalResult.innerText = "You\'ve done it, congratulations"
        finalResult.style.display = "flex";
        let winner = message.remove();
    }

    if(lost.innerText === "5") {
        finalResult.innerText = "You couldn\'t keep with the master!"
        finalResult.style.display = "flex"
        let loser = message.remove();;
    }

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
    return "You win!";  
}

else{
return "Better luck next time!";
}
}

function increaseScore(score){
    score.innerText = parseInt(score.innerText)+1;
}

