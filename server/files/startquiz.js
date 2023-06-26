window.onload = function () {
    const id = new URLSearchParams(window.location.search).get("quizId");
    const xhr = new XMLHttpRequest()

    xhr.onload = function () {
        if (xhr.status === 200) {
            const quiz = JSON.parse(xhr.responseText)

            // Title
            const title = document.getElementById("quiz-title")
            title.innerHTML = quiz.title

            // Username
            const username = document.getElementById("quiz-username")
            username.innerHTML = "by " + quiz.creatorName

            // Date
            const date = document.getElementById("quiz-info-date")
            date.innerHTML = new Date(quiz.date).toLocaleDateString("de-DE")

            // Cat
            const cat = document.getElementById("quiz-category")
            cat.innerHTML = quiz.category.join(", ");

            // Number of Questions
            const NoQ = document.getElementById("quiz-question-count")
            NoQ.innerHTML = quiz.numberOfQuestions

            // Desc
            const desc = document.getElementById("quiz-info-desc")
            desc.innerHTML = quiz.description

            // take quiz
            const btn = document.getElementById("btn-take-quiz");
            btn.addEventListener("click", function () {
                window.location.href = `game.html`;
            });

            const btnBack = document.getElementById("back-btn")
            btnBack.addEventListener("click", function (){
                location.href = "home.html"
            })


        } else {
            console.log("Fehler")
        }

    }
    xhr.open("GET", "/quizes/" + id, )
    xhr.send()
}