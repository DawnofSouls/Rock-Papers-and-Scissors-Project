const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const RPS = ["ROCK", "PAPER", "SCISSORS"];
const computerRandom = Math.floor(Math.random() * RPS.length);



let computerSelection = RPS[computerRandom]

console.log(computerSelection)

const playerSelection = prompt("Rock, Paper, or Scissors?");
console.log(playerSelection.toUpperCase());


