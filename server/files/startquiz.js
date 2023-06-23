window.onload = function () {
    const activeQuizId = getActiveQuizIdFromLocalStorage();
    const quiz = getQuizById(activeQuizId);

    if (quiz) {
        updateQuizInfo(quiz);
    } else {
        console.log("Quiz not found");
    }
};

function getActiveQuizIdFromLocalStorage() {
    return localStorage.getItem("activeQuizId");
}

function getQuizById(quizId) {
    const quizzes = getQuizzesFromLocalStorage();
    return quizzes.find((quiz) => quiz.id === quizId);
}

function updateQuizInfo(quiz) {
    const titleElement = document.getElementById("quiz-title");
    const creatorElement = document.getElementById("quiz-creator");
    const categoryElement = document.getElementById("quiz-category");
    const dateElement = document.getElementById("quiz-date");
    const numQuestionsElement = document.getElementById("quiz-question-count");
    const descriptionElement = document.getElementById("quiz-description");

    // Update the quiz information in the HTML elements
    titleElement.innerText = quiz.name;
    creatorElement.innerText = `by ${quiz.creator}`;
    categoryElement.innerText = `Category: ${quiz.category.join(", ")}`;
    dateElement.innerText = `Created / Last Edited: ${new Date(quiz.date).toLocaleDateString("de-DE")}`;
    numQuestionsElement.innerText = `Number of Questions: ${quiz.numQuestions}`;
    descriptionElement.innerText = quiz.description;

    // Take Quiz Button
    const btnTakeQuiz = document.getElementById("btn-take-quiz");
    btnTakeQuiz.addEventListener("click", function () {
        location.href = "game.html";
    });

    // Back Button
    const btnBack = document.getElementById("btn-back");
    btnBack.addEventListener("click", function () {
        location.href = "home.html";
    });
}

function getQuizzesFromLocalStorage() {
    const quizzesJson = localStorage.getItem("quizzes");
    return quizzesJson ? JSON.parse(quizzesJson) : [];
}
