const id = new URLSearchParams(window.location.search).get("quizId");

const xhr = XMLHttpRequest();
xhr.onload = function () {
    const quiz = JSON.parse(xhr.responseText)
}

const heading = document.getElementById("quiz-title")
heading.innerHTML = title