

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

const transition = document.getElementById ("screenResult")
const secondTransition = document.querySelector(".restart");
const boxTransition = document.querySelector(".finalMessage");

const winner = document.querySelector (".winnerGif");
const winnerMessage = document.querySelector (".winnerMessage");

const loser = document.querySelector (".loserGif");
const loserMessage = document.querySelector (".loserMessage");

playerSelection.forEach(playerSelection => {
    playerSelection.addEventListener("click", e => {
        let selection = playerSelection.dataset.selection;
        makeSelection (selection);
    });
});

function makeSelection(selection) {

    let computerSelection = computerPlay();
    let result = playRound(selection,computerSelection);
    
    message.innerText= result;
    userImg.src = "Images/"+ selection+ ".png";
    PCImg.src = "Images/"+ computerSelection+ ".png";
    matchResult.style.display = "flex";
    message.style.display = "flex";
    console.log(win.innerText);
    
    if(result === "You win!") {
        increaseScore(win);
    }
    if(result === "Better luck next time!") increaseScore(lost)

    if (win.innerText === "5") {
        transition.style.display = "block";
        transition.style.zIndex = 100;
        transition.style.animation = "dropDownIn 1.5s"; 
        winner.style.display = "block";
       
        setTimeout(() => {
            winner.play();
            transition.style.animation = "null";
          }, 1000);

        setTimeout(() => {
          boxTransition.style.display = "flex";
          boxTransition.style.animation = "borderIn 2.5s";
        }, 2000);

        setTimeout(() =>{
            winnerMessage.style.display = "block";
            winnerMessage.style.animation = "fadeIn 1.7s";
            secondTransition.style.animation ="fadeIn 1.7s";
            secondTransition.style.display = "flex";
        },4000);
    }
    
    if(lost.innerText === "5") {
        transition.style.display = "block";
        transition.style.zIndex = 100;
        transition.style.animation = "dropDownIn 1.5s";
        loser.style.display = "block";
        
        setTimeout(() => {
            loser.play();
            transition.style.animation = "null";
          }, 1000)
        
          setTimeout(() => {
            boxTransition.style.display = "flex";
            boxTransition.style.animation = "borderIn 2.5s";
          }, 2000);

        setTimeout(() =>{
            loserMessage.style.display = "block";
            loserMessage.style.animation = "fadeIn 1.7s";
            secondTransition.style.animation ="fadeIn 1.7s";
            secondTransition.style.display = "flex";
        },4000);
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

