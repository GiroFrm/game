// 1) Computer choice R,S,P as well.
// function getComputer choise will ramdomly return 
// Scissors, Paper, Rock;
 //1.a console.log
 let getComputerChoice= function() {
    //random Choise Rock, Paper, Scissors
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    // random return 0,1,2
   number = Math.floor(Math.random() * 3);
   return choice[number];
 }
 
// 2) user input a choice Rock Paper or Scissors
  let playerSelection = function () {
    // take input from user
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    let selection=null;
    //get input from popmt
    while(true) {
    selection = prompt("Please enter A selection {Rock, Paper, Scissors",);
    //find selecrocktion converted in uppercase in Array.
    let find =choice.includes(selection.toUpperCase());
    if(find) {
   
     break;
    }     
}
return selection.toUpperCase();
}


// 3) Decide who wins?
function playRound(playerSelection,computerSelection){
    console.log(playerSelection, computerSelection);
 
    let score=0;//0 is computer 1 is player

    let pl = playerSelection;

    let comp = computerSelection;
    //game logic
    if(pl===comp) {
        console.log("even no one win");
    }else if(pl=== "ROCK" && comp === "SCISSORS"){
        score = 0;
        console.log("computer won");
    } else if(comp=== "ROCK" && pl === "SCISSORS") {
        score =1;
        console.log("player won");
    } else if(comp === "PAPER" && pl === "ROCK") {
        score = 0;
        console.log("computer won");
    } else if(comp === "ROCK" && pl === "PAPER") {
        score = 1;
        console.log("player won");
    } else if(comp ==="SCISSORS" && pl === "PAPER") {
        score = 0;
        console.log("computer won");
    } else if(comp ==="PAPER" && pl === "SCISSORS") {
        score = 1;
        console.log("player won");
    } 
     return score ;
}

//playRound("ROCK","SCISSORS");


function game() {
    //keep score an play the game
  let computerScore=0, playerScore=0;

  let score = playRound(playerSelection(), getComputerChoice());
  if(score === 0){
    computerScore++;
    console.log("computer won"+computerScore);
  } else if(score === 1){
    playerScore++;
    console.log("player won"+playerScore);
  }
  
   score = playRound(playerSelection(), getComputerChoice());
  if(score === 0){
    computerScore++;
    console.log("computer won"+computerScore);
  } else if(score === 1){
    playerScore++;
    console.log("player won"+playerScore);
  }

  score = playRound(playerSelection(), getComputerChoice());
  if(score === 0){
    computerScore++;
    console.log("computer won"+computerScore);
  } else if(score === 1){
    playerScore++;
    console.log("player won"+playerScore);
  }

  score = playRound(playerSelection(), getComputerChoice());
  if(score === 0){
    computerScore++;
    console.log("computer won"+computerScore);
  } else if(score === 1){
    playerScore++;
    console.log("player won"+playerScore);
  }

  score = playRound(playerSelection(), getComputerChoice());
  if(score === 0){
    computerScore++;
    console.log("computer won"+computerScore);
  } else if(score === 1){
    playerScore++;
    console.log("player won"+playerScore);
  }

  if(computerScore>playerScore) {
    console.log("computer won final competition")
  } else {
    console.log("player won final competition");
  }
}


game();
// 4) Store outcome 
// 5) Repeate 5 Times.
// 6) Final winner.