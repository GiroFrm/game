
 //Get Ui components
 let choices = document.getElementsByTagName('button');
 
const player = document.getElementById("palyer-selection");
const computer = document.getElementById("computer-selection");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const winner = document.getElementById("final-winner");


 let  selected= ""; let count=0;
 let computerCount = 0, playerCount = 0; 

 for(let x= 0; x<choices.length; x++) {

  choices[x].addEventListener('click', function() {
  selected = choices[x].textContent;

  let computerChoice = getComputerChoice();
  let score = playRound(playerSelection1(selected),computerChoice);
  count++;
 
  if(score === 0){
    computerCount++;
    console.log("computer won partial"+computerCount);//display outcome 
    computerScore.textContent = computerCount;
  } else if(score === 1){
    playerCount++;
    console.log("player won partial"+playerCount);// display div outcome
    playerScore.textContent = playerCount;
  }
  //check final winner after five matches
  if(count>=5){
    if(computerCount>playerCount) { // display final score
      console.log("computer won final competition")
      winner.textContent='Computer'
    } else {
      console.log("player won final competition");
      winner.textContent='Player';
    }
  
  }

  player.textContent = selected;
  computer.textContent = computerChoice;
})
}

 let getComputerChoice= function() {
    
  const choice = ["ROCK", "PAPER", "SCISSORS"];
    
   number = Math.floor(Math.random() * 3);
   return choice[number];
 }
 
//Refactor player Selection for buttons 
let playerSelection1 = function (selection) {
  return selection;
}


// 3) Decide who wins?
function playRound(playerSelection,computerSelection){
    console.log(playerSelection, computerSelection);
 
    let score;//0 is computer 1 is player

    let pl = playerSelection;

    let comp = computerSelection;
    //game logic
    if(pl===comp) {
        console.log("even no one win");
    }else if(pl=== "ROCK" && comp === "SCISSORS"){
        score = 1;
        console.log("computer won");
    } else if(comp=== "ROCK" && pl === "SCISSORS") {
        score =0;
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


function game(counter, score) {
    //keep score an play the game
  let computerScore= 0, playerScore=0;
  if(score === 0){
    computerScore++;
    console.log("computer won partial"+computerScore);//display outcome 
  } else if(score === 1){
    playerScore++;
    console.log("player won partial"+playerScore);// display div outcome
  }

  if(counter>=5){
  if(computerScore>playerScore) { // display final score
    console.log("computer won final competition")
  } else {
    console.log("player won final competition");
    //display
  }
}
}


//game();