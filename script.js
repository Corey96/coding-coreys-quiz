/* 

I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

1.WHEN I click the start button
THEN a timer starts and I am presented with a question

2.WHEN I answer a question
THEN I am presented with another question

3.WHEN I answer a question incorrectly
THEN time is subtracted from the clock

4.WHEN all questions are answered or the timer reaches 0
THEN the game is over

5.WHEN the game is over
THEN I can save my initials and my score

*/



const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown")

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`; 
    time--;
}










/* selects element by class
var timeEl = $(".time")
const mainEl = $("main")
const startQ = $(".startQuiz")
let startB = $("start-button")

var secondsLeft = 60;

$(startB).addEventListener("click", function() {
    console.log("button clicked")

    let timerInterval = setInterval(function function1(){
    $("") = secondsLeft + " " + "Time left";

    secondsLeft -=1;
    if (secondsLeft <=0){
        clearInterval(timerInterval);
        $("") = "Time is up!"
        
    }
    }, 1000);
});

/* var score = 0;
for (var i=0; i < questions.length; i++)
    var response = window.prompt() */