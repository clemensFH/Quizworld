const questionElement = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is 2+2?',
        options: {
            '2': false,
            '4': true,
            '21': false,
            '17': false,
        },
    },
    {
        question: 'What animal can get infected by human diseases?',
        options: {
            Lion: false,
            Bat: false,
            Gorillas: true,
            Deer: false,
        },
    },
    // Add more questions...
];

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    questionElement.innerText = currentQuestion.question;

    choices.forEach((choice, index) => {
        const choiceNumber = index + 1;
        choice.innerText = currentQuestion['choice' + choiceNumber];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

function incrementScore(points) {
    score += points;
    scoreText.innerText = score;
}

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = parseInt(selectedChoice.dataset['number']);

        const classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

startGame();
