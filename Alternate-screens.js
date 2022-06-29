
//start screen functions

const startContainer = document.getElementById("startScreen")
const startRemover = document.querySelector(".start");

startRemover.addEventListener("mouseover", e => {
    startRemover.classList.add ("start_hover");
},true);

startRemover.addEventListener("mouseout", e => {
    startRemover.classList.remove ("start_hover");
},true);

startRemover.addEventListener("click", e => {
    
    startContainer.style.display = "none";   
});

//end screen functions


const reloadPage = document.querySelector(".goBackStart");

reloadPage.addEventListener("click", e => {
    window.location.reload();
})


const reloadGame = document.querySelector(".goBackGame");
const endResult = document.getElementById("screenResult");

const win = document.querySelector(".win");
const lost = document.querySelector(".lose");

const secondTransition = document.querySelector(".restart");
const boxTransition = document.querySelector(".finalMessage");

const winner = document.querySelector (".winnerGif");
const winnerMessage = document.querySelector (".winnerMessage");

const loser = document.querySelector (".loserGif");
const loserMessage = document.querySelector (".loserMessage");

reloadGame.addEventListener("click", e => {
    
    endResult.style.animation = "pullUpOut 1.2s";
    goBack();

    setTimeout (() => {
        endResult.style.display = "none";
        endResult.style.zIndex = "1";
        endResult.style.animation = "null";
    },1200); 

    
})

function goBack(){
    
    document.querySelector(".playGround").style.display = "none";
    document.querySelector(".result").style.display = "none";
    document.querySelector (".invisibleScreen").style.display = "none";
    
    win.innerText = parseInt(win.innerText)-parseInt(win.innerText);
    lost.innerText = parseInt(lost.innerText)-parseInt(lost.innerText);
    
    winner.stop();
    loser.stop();

    boxTransition.style.display = "none";
    boxTransition.style.animation = "null";
    
    secondTransition.style.animation ="null";
    secondTransition.style.display = "none";

    winner.style.display = "none";
    winnerMessage.style.display = "none";
    winnerMessage.style.animation = "null";

    loser.style.display = "none";
    loserMessage.style.display = "none";
    loserMessage.style.animation = "null";
}

//credit page functions

const creditsBringer = document.querySelector(".credits");
const creditsPage = document.getElementById("screenCredits");
const creditsReturner = document.querySelector(".returnEnd");
const vanishCredits = document.querySelector(".textContainer");

creditsBringer.addEventListener("click", e => {
    
    creditsPage.style.zIndex = "100";
    endResult.style.zIndex = "90";
    vanishCredits.style.animation = "vanishIn 1.2s";
    creditsReturner.style.animation = "vanishIn 1.2s";

    creditsPage.style.animation = "creditsIn 1.5s";
    setTimeout(()=>{
        creditsPage.style.animation = "null";
        vanishCredits.style.animation = "null";
        creditsReturner.style.animation = "null";
    },1500);

});

creditsReturner.addEventListener("click", e => {
    
    endResult.style.zIndex = "100";

    creditsPage.style.animation = "creditsOut 1s";
    vanishCredits.style.animation = "vanishOut 0.7s";
    creditsReturner.style.animation = "vanishOut 0.7s";

    setTimeout(()=>{
        creditsPage.style.animation = "null";
        vanishCredits.style.animation = "null";
        creditsReturner.style.animation = "null";
        creditsPage.style.zIndex = "1";
    },700);
});
