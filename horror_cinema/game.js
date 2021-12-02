const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let img = document.querySelector("#slika")

let questions = [
    {
        question: "Iz kog filma je Beagul(Buhguul ili Mr.Boogie)?",
        choice1: 'Saw',
        choice2: 'Anabelle',
        choice3: 'The Boy',
        choice4: 'Sinister',
        answer: 4,
    },
    {
        question: "Iz kog filma je Freddy Krueger?",
        choice1: 'The Conjouring',
        choice2: 'A Nightmare on Elm Street',
        choice3: 'Men In Black',
        choice4: 'Cabin In The Woods',
        answer: 2,
    },
    {
        question: "Iz kog filma je Jason Voorhees?",
        choice1: 'Scream',
        choice2: 'Vratice se Rode',
        choice3: 'Friday the 13th',
        choice4: 'Halloween',
        answer: 3,
    },
    {
        question: "Iz kog filma je ova poznata scena?",
        choice1: 'Insidious',
        choice2: 'The Ring',
        choice3: 'Saw',
        choice4: 'It',
        answer: 1,
    },
    {
        question: "Kako se zove demon koji je zaposeo lutku Anabelle?",
        choice1: 'Valar',
        choice2: 'The nun',
        choice3: 'Valak',
        choice4: 'Valaa',
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText =`Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width  = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]

    if(currentQuestion.question == "Iz kog filma je Beagul(Buhguul ili Mr.Boogie)?")
    {
        img.setAttribute("src" , "img/pic16.jpg")
    }
    else if(currentQuestion.question == "Iz kog filma je Freddy Krueger?")
    {
        img.setAttribute("src" , "img/pic18.png")
    }
    else if(currentQuestion.question == "Iz kog filma je Jason Voorhees?")
    {
        img.setAttribute("src" , "img/pic19.jpg")
    }
    else if(currentQuestion.question == "Iz kog filma je ova poznata scena?")
    {
        img.setAttribute("src" , "img/pic22.png")
    }
    else if(currentQuestion.question == "Kako se zove demon koji je zaposeo lutku Anabelle?")
    {
        img.setAttribute("src" , "img/the-nun.jpg")
    }
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice =>{
    choice.addEventListener('click', e=>{
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

incrementScore = num =>{
    score += num
    scoreText.innerText = score
}

startGame();