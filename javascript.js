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
let computer = '';





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

    const RPS = ["ROCK", "PAPER", "SCISSORS"];
    const computerRandom = Math.floor(Math.random() * RPS.length);

    switch (computerRandom) {
        case 0 :
            computer = "Rock";
            break;
        case 1 :
            computer = "Paper";
            break; 
        case 2 :
            computer = "Scissors";
            break;

    }

    
    let computerSelection = RPS[computerRandom]
   // console.log(computerSelection)
    
    
    
    const playerPrompt = prompt("Rock, Paper, or Scissors?");
    let playerSelection = (playerPrompt.toUpperCase());
    // console.log(playerSelection);
    





        if ( ( (playerSelection === ("ROCK") ) && (computerSelection === ("SCISSORS") ) ) || ( (playerSelection === "PAPER") && (computerSelection === "ROCK") ) ) {
                alert("You won this round!") , player++;
            }       
            else if ( ( (playerSelection === "SCISSORS") && (computerSelection === "ROCK") ) || ( (playerSelection === "ROCK") && (computerSelection === "PAPER") ) ) {
                alert ("The machine won this round!") , computer++;
            }   
            else if ( (playerSelection === "ROCK") && (computerSelection === "PAPER") ) {
                alert ("The machine won this round!") , computer++;
            }   
            else if ( playerSelection > computerSelection) {
                alert ("You won this round!") , player++ ;
            }   
            else if (playerSelection === computerSelection){
                alert ("You both are tied!") ;
            }   
            else if (playerSelection === ("")) {
                alert("What are you doing? The machines are advancing! The machine won this round!"), computer++;
            }
            else {
                alert ("The machine won this round!") , computer++;
            }  
                                                
        }

let finalScore = (player > computer) ? alert("You have successfully defeated the machine!") : alert("The machine has defeated the player. GAME OVER");


/* (if ( playerSelection > computerSelection) {
    alert("You won this round!");
    } else if ( playerSelection === computerSelection ) {
        alert ("You both are tied!")
    } else {
        alert ("The Machine won this round!")
    }
*/
/*   else if ( playerSelection > computerSelection) {
    alert("You won this round!");
    }   else if ( playerSelection === computerSelection ) {
        alert ("You both are tied!")
    }   else {
        alert ("The Machine won this round!")
    }

*/


/* ( (playerSelection === ("SCISSORS" || "ROCK")) && (computerSelection === ("ROCK" ||"PAPER") ) ) {
            alert("The machine won this round!"); 
        }   else if ( playerSelection > computerSelection) {
                alert ("You won this round!")
            }   else if (playerSelection === computerSelection){
                    alert ("You both are tied!");
                }       else{
                        alert ("The machine won this round!");
                    }          
                    */