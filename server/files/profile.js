var user

const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if(xhr.status === 200) {
        user = JSON.parse(xhr.responseText)
        console.log(user)
        const heading = document.getElementById("username")
        heading.innerHTML = user.name
        setQuizes(user)

    }
};
xhr.open("GET", "/profile")
xhr.send();

function setQuizes(user) {
    const xhr2 = new XMLHttpRequest();
    xhr2.onload = function () {
        if (xhr2.status === 200) {
            const quizes = JSON.parse(xhr2.responseText)
            const quizList = document.getElementById("quizList")
            for (let quiz of quizes) {
                console.log(quiz)
                const element = document.createElement("li")
                const link = document.createElement("a")
                link.href = `/edit.html?quizID=${quiz.id}`
                link.innerHTML = `Quiz: ${quiz.title}`
                element.appendChild(link)
                quizList.appendChild(element)

                // TODO Klea: Quiz entries bauen/verschönern

                // username
                const username = document.getElementById("username")
                username.innerHTML = user.name

                // password
                const password = document.getElementById("password")
                password.innerHTML = user.password
            }
        }
    };
    xhr2.open("GET", `/quizes?userID=${user.id}`)
    xhr2.send();
}

function goBack() {
    window.history.back();
}

function goHome() {
    window.location.href = 'home.html';
}
