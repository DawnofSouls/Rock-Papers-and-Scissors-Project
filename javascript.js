const Buttons = document.querySelectorAll("button.ButtonSelect");

function removeFadeOut( el, speed ) {
    let seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}

setTimeout(() => {
    removeFadeOut(document.getElementById('FadeOutScreen'), 2000);
    
   for (let i = 0; i < Buttons.length; i++){
    Buttons[i].removeAttribute("disabled");
   }

  }, 5000)


let playerSelection = '';
let computerSelection = '';

let playerScore = 0;
let computerScore = 0;

let computerRandomSel = '';




const Rock = document.getElementById('Rock')
const Paper = document.getElementById('Paper')
const Scissors = document.getElementById('Scissors')


Rock.addEventListener("click", () => {
    playerSelection = "Rock";
    console.log(playerSelection);

});

Paper.addEventListener("click", () => {
    playerSelection = "Paper";
    console.log(playerSelection);
});

Scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
    console.log(playerSelection);
});





for (let i = 0; i < 5; i++) {

    const git = ["ROCK", "PAPER", "SCISSORS"];
    const computerRandom = Math.floor(Math.random() * RPS.length);

    switch (computerRandom) {
        case 0 :
            computerRandomSel = "Rock";
            break;
        case 1 :
            computerRandomSel = "Paper";
            break; 
        case 2 :
            computerRandomSel = "Scissors";
            break;

    }

    
    let computerSelection = computerRandomSel
    console.log(computerSelection)
    
    
    






         if ( ( (playerSelection === ("Rock") ) && (computerSelection === ("Scissors") ) ) || ( (playerSelection === "Paper") && (computerSelection === "Rock") ) || ((playerSelection === "Scissors") && (computerSelection === "Paper")  ) ) {
                alert("You won this round!") , playerScore++;
            }       
            else if (playerSelection === computerSelection){
                alert ("You both are tied!") ;
            }   
            else {
                alert ("The machine won this round!") , computerScore++;
            }  
                                             
        }

let finalScore = (playerScore > computerScore) ? alert("You have successfully defeated the machine!") : alert("The machine has defeated the player. GAME OVER");


