
// TODO

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const quizType = quiz.apiURL ? 'api' : 'questions';

if (quizType === 'api') {


    const SCORE_POINTS = 100;
    let maxQuestions = 0;

    const startGame = (quiz) => {
        questionCounter = 0;
        score = 0;
        maxQuestions = quiz.numberOfQuestions;
        availableQuestions = [];
        fetchQuestions(quiz);
    };

    async function fetchQuestions(quiz) {
        try {
            const response = await fetch(quiz.apiURL);
            const data = await response.json();
            availableQuestions = data.results.map((questionData) => {
                return {
                    question: he.decode(questionData.question),
                    choices: shuffleArray([
                        he.decode(questionData.correct_answer),
                        ...questionData.incorrect_answers.map((answer) => he.decode(answer))
                    ]),
                    answer: questionData.correct_answer
                };
            });
            startNextQuestion();
        } catch (error) {
            console.error('Failed to fetch questions:', error);
        }
    }

    const startNextQuestion = () => {
        if (questionCounter >= maxQuestions) {
            localStorage.setItem('mostRecentScore', score);
            return window.location.assign('/end.html');
        }

        questionCounter++;
        progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`;
        progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;

        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach((choice, index) => {
            choice.innerText = currentQuestion.choices[index];
        });

        availableQuestions.splice(questionIndex, 1);

        acceptingAnswers = true;
    };

    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];

            let classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

            if (classToApply === 'correct') {
                incrementScore(SCORE_POINTS);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                startNextQuestion();
            }, 1000);
        });
    });

    const incrementScore = (num) => {
        score += num;
        scoreText.innerText = score;
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Start the game with the first quiz
    startGame();
}


else if (quizType === 'questions') {
    // Quiz Version 2 (Questions Array)
    const questions = quizInfo.questions;

    const SCORE_POINTS = 100;
    const MAX_QUESTIONS = quizInfo.numberOfQuestions;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
    };

    getNewQuestion = () => {
        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            return window.location.assign('/end.html');
        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

        const currentQuestionIndex = questionCounter - 1;
        currentQuestion = availableQuestions[currentQuestionIndex];
        question.innerText = currentQuestion.question;

        Object.entries(currentQuestion.options).forEach(([option, isCorrect]) => {
            const choice = document.getElementById(`choice${option}`);
            choice.innerText = option;
            choice.dataset.number = option;
        });

        acceptingAnswers = true;
    };

    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];

            const classToApply = currentQuestion.options[selectedAnswer] ? 'correct' : 'incorrect';

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

    incrementScore = (num) => {
        score += num;
        scoreText.innerText = score;
    };

    startGame();
}