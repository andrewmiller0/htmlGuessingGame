var num = 0;
var guesses = [];
var turnCounter = 0;
var offBy = 50;
var guess = 101;
var guessed = false;
var hint;

var newGame = function(){
  debugger;
    num = Math.floor(Math.random() * 101);
    guesses = [];
    turncounter = 0;
    console.log("New Game Started. Random number = " + num);
  }


$(document).ready(function(){


  newGame();

  $("#theButton").on( "click", checker = function(e){

    e.preventDefault();
    guess = parseInt($("#guessInput").val());
    console.log("Guess = " + guess);
    turnCounter++;
    if(isNaN(guess) || guess<1 || guess>100){
      alert("Please Guess a Number between 1-100!");
    } else {
      offBy = Math.abs(num-guess);
      for(i=0; i<guesses.length; i++){
        if(guess === guesses[i]){
          guessed = true;
        }
      }
      if(guessed){
        alert("You already guessed that number!");
        guessed = false;
      } else if(offBy === 0){
        alert("Winner!");
      } else if(offBy > 20){
        alert("You are cold! Guess Again!");
      } else{
        alert("You are hot! Guess Again!");
      }

    if(turnCounter >= 5){
      alert("Game over!");
    }
    }
    guesses.push(guess);
  });

  $("#playAgainButton").on("click", function(){
    newGame();
    // newGame();
  });
  $("#hintButton").on("click", function(){
    hint = num-guess;
    if(turnCounter == 0){
      alert("You need to submit a guess first!");

    }else if(hint>0){
      alert("Guess higher!");
    } else {
      alert("Guess lower!");
    }
  });

});
