//javascript code goes here

document.getElementById("start-button").addEventListener("click", startGame);


var timerEl = document.querySelector(".timer-count");
var timerEl = document.querySelector(".win");
var timerEl = document.querySelector(".lose");
var timerEl = document.querySelector(".word-blanks");

var secondsLeft = 10;
var hiddenWord = "Javascript";
var wins = 0;
var losses = 0;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent - secondsLeft + "seconds remaining.";
        
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        };
    });
}

function startGame() {
    var userWord = "hi";
    var alreadyInput = document.getElementsByClassName("word-blanks").innerText; 
    console.log(userWord)
    console.log(alreadyInput)
}
