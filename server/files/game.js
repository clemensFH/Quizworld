window.onload = function () {
    const id = new URLSearchParams(window.location.search).get("quizId");
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status === 200) {
            const quiz = JSON.parse(xhr.responseText);

            if(quiz.creatorName == "Quizworld") {

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

                const quizzes = {
                    title: quiz.title,
                    apiUrl: quiz.apiURL,
                    numberQuestions: quiz.numberOfQuestions,
                    category: quiz.category,
                    creator: quiz.creatorName,
                    date: quiz.date,
                    description: quiz.description
                };

                const SCORE_POINTS = 100;
                let maxQuestions = 0;
                let maxScore = 0;

                const startGame = (selectedQuiz) => {
                    questionCounter = 0;
                    score = 0;
                    maxQuestions = selectedQuiz.numberQuestions;
                    maxScore = SCORE_POINTS * maxQuestions;
                    localStorage.setItem('maxScore', maxScore);
                    availableQuestions = [];
                    fetchQuestions(selectedQuiz);
                };

                async function fetchQuestions(selectedQuiz) {
                    try {
                        const response = await fetch(selectedQuiz.apiUrl);
                        const data = await response.json();
                        availableQuestions = data.results.map((questionData) => {
                            const choices = [
                                ...questionData.incorrect_answers,
                                questionData.correct_answer
                            ];
                            const shuffledChoices = shuffleArray(choices);
                            const answerIndex = shuffledChoices.findIndex((choice) => choice === questionData.correct_answer);
                            return {
                                question: he.decode(questionData.question),
                                choices: shuffledChoices.map((choice) => he.decode(choice)),
                                answer: answerIndex
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

                        let classToApply = '';
                        if (selectedChoice.innerText === currentQuestion.choices[currentQuestion.answer]) {
                            classToApply = 'correct';
                            incrementScore(SCORE_POINTS);
                        } else {
                            classToApply = 'incorrect';
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

                startGame(quizzes);

            } else {
                const question = document.querySelector('#question');
                const choices = Array.from(document.querySelectorAll('.choice-text'));
                const progressText = document.querySelector('#progressText');
                const scoreText = document.querySelector('#score');
                const progressBarFull = document.querySelector('#progressBarFull');

                let currentQuestion = {};
                let acceptingAnswers = true;
                let score = 0;
                let questionCounter = 0;

                const questions = quiz.questions;

                const SCORE_POINTS = 100;
                const MAX_QUESTIONS = quiz.numberOfQuestions;
                const maxScore = MAX_QUESTIONS * SCORE_POINTS;

                startGame = () => {
                    questionCounter = 0;
                    score = 0;
                    localStorage.setItem('maxScore', maxScore);
                    getNewQuestion();
                };

                getNewQuestion = () => {
                    if (questionCounter >= MAX_QUESTIONS) {
                        localStorage.setItem('mostRecentScore', score);
                        return window.location.assign('/end.html');
                    }

                    currentQuestion = questions[questionCounter];
                    question.innerText = currentQuestion.text;

                    choices.forEach((choice, index) => {
                        const choiceNumber = index + 1;
                        choice.innerText = Object.keys(currentQuestion.options)[index];
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
                        const selectedAnswer = Object.entries(currentQuestion.options)[choices.indexOf(selectedChoice)];

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
            }

        } else {
            console.log("Fehler");
        }

    };
    xhr.open("GET", "/quizes/" + id);
    xhr.send();
};