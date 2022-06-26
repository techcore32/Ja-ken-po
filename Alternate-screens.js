
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
    
    startContainer.remove();   
});




