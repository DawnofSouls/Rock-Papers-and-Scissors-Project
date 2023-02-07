const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let player = 0;
let computer = 0;



   

for (let i = 0; i < 5; i++) {

    const RPS = ["ROCK", "PAPER", "SCISSORS"];
    const computerRandom = Math.floor(Math.random() * RPS.length);
    
    let computerSelection = RPS[computerRandom]
    //console.log(computerSelection)
    
    
    
    const playerPrompt = prompt("Rock, Paper, or Scissors?");
    let playerSelection = (playerPrompt.toUpperCase());
    //console.log(playerSelection);
    





        if ( (playerSelection === ("ROCK") ) && (computerSelection === ("SCISSORS")) ) {
                alert("You won this round!") , player++;
            }       
            else if ( (playerSelection === "PAPER") && (computerSelection === "ROCK") ) {
                alert ("You won this round!"), player++ ;
            }   
            else if ( (playerSelection === "SCISSORS") && (computerSelection === "ROCK") ) {
                alert ("The machine won this round!") , computer++;
            }   
            else if ( (playerSelection === "ROCK") && (computerSelection === "PAPER") ) {
                alert ("The machine won this round!") , computer++;
            }   
            else if ( playerSelection > computerSelection) {
                alert ("You won this round!") , player++ ;
            }   
            else if (playerSelection === computerSelection){
                alert ("You both are tied!");
            }   
            else{
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