
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
  }, 5000)











/* const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let player = 0;
let computer = 0;



   

for (let i = 0; i < 5; i++) {

    const RPS = ["ROCK", "PAPER", "SCISSORS"];
    const computerRandom = Math.floor(Math.random() * RPS.length);
    
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