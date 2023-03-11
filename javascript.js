
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

const Buttons = document.querySelectorAll("button.ButtonSelect");
const buttonDiv = document.getElementsByClassName("buttons");

let HumanScore = document.getElementById("HumanScore");
let StarmanScore = document.getElementById("StarmanScore");


const Rock = document.getElementById('Rock')
const Paper = document.getElementById('Paper')
const Scissors = document.getElementById('Scissors')



let playerSelection = '';
let computerSelection = '';

let playerScore = 0;
let computerScore = 0;

let computerRandomSel = '';

let Round = 0;

let playRound = () => {
    if (Round >= 9) {
        Round++;
        console.log(`Round ${Round}!`);
        Buttons.forEach (el => el.remove());

    } else {
        Round++;
        console.log(`Round ${Round}!`);
    };
};

let RandomRPS = () => {
    const RPS = ["ROCK", "PAPER", "SCISSORS"];
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
    computerSelection = computerRandomSel;
    console.log(`Computer choose ${computerRandomSel}!`);
};



let rpsCondition = () => {
    
    if ( ( playerSelection === "Rock"  && computerSelection === "Scissors"  ) || ( playerSelection === "Paper" && computerSelection === "Rock" ) || ( playerSelection === "Scissors" && computerSelection === "Paper" ) ) {
        //alert("You won this round!");
        playerScore++;
    }       
    else if (playerSelection === computerSelection){
        //alert ("You both are tied!");
    }   
    else {
        //alert ("The machine won this round!"); 
        computerScore++;
    

    }
};

// Increment a score value by one every round via text content


let changeScore = () => {

   
    HumanScore.textContent = `Human: ${playerScore}`;
    StarmanScore.textContent = `Starman: ${computerScore}`;

}



Rock.addEventListener("click", () => {
    playerSelection = "Rock";
    playRound();
    console.log(`Player choose ${playerSelection}!`);
    RandomRPS();
    rpsCondition();
    changeScore();

});

Paper.addEventListener("click", () => {
    playerSelection = "Paper";
    playRound();
    console.log(`Player choose ${playerSelection}!`);
    RandomRPS();
    rpsCondition();
    changeScore();


});

Scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
    playRound();
    console.log(`Player choose ${playerSelection}!`);
    RandomRPS();
    rpsCondition();
    changeScore();


});






  

// let finalScore = (playerScore > computerScore) ? alert("You have successfully defeated the machine!") : alert("The machine has defeated the player. GAME OVER");


