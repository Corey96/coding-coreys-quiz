const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "How would you link a HTML page to Javascript?",
        choice1: 'script.js',
        choice2: 'java.script',
        choice3: 'js.javascript',
        choice4: 'html.js',
        answer: 1,
    },
    {
        question:
            "How do you write 'Hello World' in an alert box?",
        choice1: "msg('Hello World')",
        choice2: "alertBox('Hello World')",
        choice3: "msgBox('Hello World')",
        choice4: "alert('Hello World')",
        answer: 4,
    },
    {
        question: "How would you write an IF statement in JavaScript?",
        choice1: "if(i == 5)",
        choice2: "if i = 5 then",
        choice3: "if i = 5",
        choice4: "if i == 5 then",
        answer: 1,
    },
    {
        question: "What is the correct way to write a Javascript array?",
        choice1: "var colors = (1:'red,2:'green' 3:'blue')",
        choice2: "var colours = 'red', 'green', 'blue'",
        choice3: "var colors = ['red', 'green', 'blue']",
        choice4: "var colors = 1 = ('red'), 2 = ('green') 3 = ('blue')",
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()