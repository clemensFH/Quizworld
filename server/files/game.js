const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuetion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// TODO Klea: geschwünschtes Quizes abfragen und setzten

let questions = [
    {
        question: "What is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: 2,
    },
    {
        question: "What animal can get infected by human diseases?",
        choice1: "Lion",
        choice2: "Bat",
        choice3: "Gorillas",
        choice4: "Deer",
        answer: 3,
    },
    {
        question: "Which book was bound with a murderers skin?",
        choice1: "The Poetical Works of John Milton",
        choice2: "Pride and Prejudice by Jane Austen",
        choice3: "Great Expectations by Charles Dickens",
        choice4: "The Adventures of Huckleberry Finn by Mark Twain",
        answer: 1,
    },
    {
        question: "Which animal gets pale if kept in the dark?",
        choice1: "Pigeon",
        choice2: "Goldfish",
        choice3: "Rat",
        choice4: "Pig",
        answer: 2,
    },
    {
        question: "Which member of the royal family was a trained mechanic?",
        choice1: "Queen Elizabeth II",
        choice2: "Prince Henry",
        choice3: "Princess Diana",
        choice4: "King George VI",
        answer: 1,
    },
    {
        question: "Which animal hears with their feet?",
        choice1: "Mole",
        choice2: "Bat",
        choice3: "Salamanders",
        choice4: "Elephant",
        answer: 4,
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 6;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions =  [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 ||questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuetion = availableQuestions[questionsIndex];
    question.innerText = currentQuetion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuetion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuetion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();

