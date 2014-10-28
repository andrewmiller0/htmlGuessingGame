var num = 0;
var guesses = [];
var turnCounter = 0;
var offBy = 50;
var guess = 101;
var guessed = false;
var hint;
var offByArray = [];
var hot = null;

var newGame = function(){
    num = Math.floor(Math.random() * 100) + 1;
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

      if(turnCounter == 1){ //if the player has not entered a guess, it only checks the first if/else group
        if(offBy == 0){
          alert("Winner!");
        } else {
          alert("Not Quite! Please Guess Again!");
        }
      } else { //enters part of code that is valid if they have guessed multiple times
        for(i=0; i<guesses.length; i++){ //checks if the number has been guessed already, adjust a boolean if necesasary
          if(guess === guesses[i]){
            guessed = true;
          }
        }

        if((offBy - offByArray[offByArray.length-1]) > 0){ //checks to see if a guess was hotter or colder than previous guess, adjusts a boolean as necessarry
          hot = false;
        } else {
          hot = true;
        }

        if(guessed){
          alert("You already guessed that number!");
          guessed = false;
        } else if(offBy === 0){
          alert("Winner!");
        }  else if(hot){
          alert("You are getting warmer! Guess Again!");
        } else{
          alert("You are getting colder! Guess Again!");
        }
      }
      if(turnCounter >= 5){
        alert("Game over!");
      }
    }

    guesses.push(guess);
    offByArray.push(offBy);
    console.log("Used " + turnCounter + " turns")
  });

  $("#playAgainButton").on("click", function(){
    newGame();
    // newGame();
  });


});
