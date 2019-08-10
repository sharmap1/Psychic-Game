//Input: 

// variable letters range from A-Z;

var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSoFar = [];
var computerGuess = computerChoice[Math.floor(Math.random()* computerChoice.length)]; // var computerGuess with math random defines computer choose a letter randomly

document.onkeyup = function(event) { //user guess a letter betn A-Z at key press
    var userGuess = event.key;
    console.log = guessesLeft;
    userGuess = String.fromCharCode(event.keyCode).toLowerCase(); // turns user unicode into corresponding alphanumeric key, then turns into lowercase
    guessesSoFar.push(userGuess); //pushing user guess to guesses so far              
           
//Processing:

// if ((userGuess === computerGuess) || (userGuess !== computerGuess )) {
// use conditional statements to determine the result:
//if user guess the letter right then win ++
if 
(userGuess === computerGuess) {
wins ++;   
guessesLeft = 9; //resetting the guesses left to 9 so that the user can play again
guessesSoFar = []; //removing all the guesses from previous round
}

// if user guesses the wrong letter then losses ++
// if user guesses the wrong letter then guesses left --
else if  (userGuess !== computerGuess) {            
guessesLeft --;             

}

if (guessesLeft === 0) {
losses ++;
guessesLeft = 9;
guessesSoFar = []; 
computerGuess = computerChoice[Math.floor(Math.random()* computerChoice.length)]; // reasign a new random letter
}
//Output:
display()
 
//set the inner HTML contents of the respective div to our HTML string
}
   function display() {
   document.querySelector("#wins").innerHTML ="Wins: " + wins; 
   document.querySelector("#lose").innerHTML = "losses " + losses;
   document.querySelector("#guess-remaining").innerHTML = "guess left " + guessesLeft;
   document.querySelector("#guessed-letter").innerHTML = "Your guess so far " + guessesSoFar;
}  

