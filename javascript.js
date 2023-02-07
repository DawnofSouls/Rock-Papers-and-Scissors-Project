const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let player = 0;
let computer = 0;

const RPS = ["ROCK", "PAPER", "SCISSORS"];
const computerRandom = Math.floor(Math.random() * RPS.length);

let computerSelection = RPS[computerRandom]
console.log(computerSelection)



const playerPrompt = prompt("Rock, Paper, or Scissors?");
let playerSelection = (playerPrompt.toUpperCase());
console.log(playerSelection);


   

for (let i = 0; i < 5; i++) {

        if ( (playerSelection === ("ROCK") ) && (computerSelection === ("SCISSORS")) ) {
                alert("You won this round!");
            }       
            else if ( (playerSelection === "PAPER") && (computerSelection === "ROCK") ) {
                alert ("You won this round!");
            }   
            else if ( (playerSelection === "SCISSORS") && (computerSelection === "ROCK") ) {
                alert ("The machine won this round!");
            }   
            else if ( (playerSelection === "ROCK") && (computerSelection === "PAPER") ) {
                alert ("The machine won this round!");
            }   
            else if ( playerSelection > computerSelection) {
                alert ("You won this round!")
            }   
            else if (playerSelection === computerSelection){
                alert ("You both are tied!");
            }   
            else{
                alert ("The machine won this round!");
            }  
                                                
        }


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