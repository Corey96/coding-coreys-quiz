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

// selects element by class
var timeEl = document.querySelector(".time")
const mainEl = $("main")
const startQ = $("startQuiz")

var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Time Till End";

        if(secondsLeft === 0) [
            // Stops execution of action at set interval
            clearInterval(timerInterval),
            // Calls function to create and append image
            sendMessage(),
        ]

    }, 1000);
}

function startQuiz() {
    timeEl.textContent =" ";
    var question1 = 






}

var score = 0;
for (var i=0; i < questions.length; i++)
    var response = window.prompt()




object.addEventListener("click", myScript);