const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let maxScore = 0; // Maximum possible score

const questions = [
    {
        "What is 2+2?": {
            "2": false,
            "4": true,
            "21": false,
            "17": false,
        },
    },
    {
        "What animal can get infected by human diseases?": {
            "Lion": false,
            "Bat": false,
            "Gorillas": true,
            "Deer": false,
        },
    },
    // Add more questions...
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = questions.length;

startGame = () => {
    questionCounter = 0;
    score = 0;
    maxScore = MAX_QUESTIONS * SCORE_POINTS; // Calculate the maximum possible score
    getNewQuestion();
};

getNewQuestion = () => {
    if (questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        localStorage.setItem('maxScore', maxScore);
        return window.location.assign('/end.html');
    }

    currentQuestion = questions[questionCounter];
    question.innerText = Object.keys(currentQuestion)[0];

    const currentChoices = Object.keys(Object.values(currentQuestion)[0]);
    choices.forEach((choice, index) => {
        const choiceNumber = index + 1;
        choice.innerText = currentChoices[index];
    });

    progressText.innerText = `Question ${questionCounter + 1} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${((questionCounter + 1) / MAX_QUESTIONS) * 100}%`;

    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = Object.entries(Object.values(currentQuestion)[0])[choices.indexOf(selectedChoice)];

        let classToApply = selectedAnswer[1] ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            questionCounter++;
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startGame();
