var num = 0;
var guesses = [];
var turnCounter = 0;
var offBy = 50;
var guess = 101;

$(document).ready(newGame = function(){
  num = Math.floor(Math.random() * 101);
  guesses = [];
  turncounter = 0;
  console.log("New Game Started. Random number = " + num);
} );


$("#theButton").on( "click", checker = function(){
  debugger;
  guess = parseInt($("#guessInput").val());
  console.log("Guess = " + guess);
  turnCounter++;
  if(isNaN(guess) || guess<1 || guess>100){
    alert("Please Guess a Number between 1-100!");
  } else {
    offBy = Math.abs(num-guess);
  }
  if(offBy === 0){
    alert("Winner!");
  } else if(offBy > 20){
    alert("You are cold! Guess Again!");
  } else{
    alert("You are hot! Guess Again!");
  }
  if(turncounter >= 5){
    alert("Game over!");
  }
});
