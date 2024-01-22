// 1) Computer choice R,S,P as well.
// function getComputer choise will ramdomly return 
// Scissors, Paper, Rock;
 //1.a console.log
 let getComputerChoice= function() {
    //random Choise Rock, Paper, Scissors
    const choice = ["Rock", "Paper", "Scissors"]
    // random return 0,1,2
   return  number = Math.floor(Math.random() * 3);

    // console.log(choice[number]);
 }
 //getComputerChoice();
// 2) user input a choice Rock Paper or Scissors
  let playerSelection = function () {
    // take input from user
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    let selection=null;
    //get input from popmt
    while(true) {
    selection = prompt("Please enter A selection {Rock, Paper, Scissors",);
    //find selecrocktion converted in uppercase in Array.
    let find =choice.includes(selection.toUpperCase());
    if(find) {
    //if true return selection or reask enter  
   
     break;
    }     
}
return selection.toUpperCase();
 }

console.log(playerSelection());
// 3) Decide who wins?
// 4) Store outcome 
// 5) Repeate 5 Times.
// 6) Final winner.