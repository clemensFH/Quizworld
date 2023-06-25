var user;

const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        user = JSON.parse(xhr.responseText);
        console.log(user);
        const heading = document.getElementById("username");
        heading.innerHTML = user.name;
        setQuizzes(user);
    }
};
xhr.open("GET", "/profile");
xhr.send();

function setQuizzes(user) {
    const xhr2 = new XMLHttpRequest();
    xhr2.onload = function () {
        if (xhr2.status === 200) {
            const quizzes = JSON.parse(xhr2.responseText);
            const quizList = document.getElementById("quizes");
            for (let quiz of quizzes) {
                console.log(quiz);
                const element = document.createElement("li");
                const link = document.createElement("a");
                link.href = `/edit.html?quizID=${quiz.id}`;
                link.innerHTML = `Quiz: ${quiz.title}`;
                element.appendChild(link);
                quizList.appendChild(element);
            }
        }
    };
    xhr2.open("GET", `/quizes?userID=${user.id}`);
    xhr2.send();
}

function goBack() {
    window.history.back();
}


function toggleUsernameEdit() {
    const usernameSection = document.getElementById('username');
    const usernameEditSection = document.getElementById('username-edit');
    const usernameInput = document.getElementById('username-input');

    if (usernameSection.style.display === 'none') {
        usernameSection.style.display = 'inline';
        usernameEditSection.style.display = 'none';
    } else {
        usernameSection.style.display = 'none';
        usernameEditSection.style.display = 'inline';
        usernameInput.value = usernameSection.textContent;
    }
}

function togglePasswordEdit() {
    const passwordSection = document.getElementById('password');
    const passwordEditSection = document.getElementById('password-edit');
    const passwordInput = document.getElementById('password-input');

    if (passwordSection.style.display === 'none') {
        passwordSection.style.display = 'inline';
        passwordEditSection.style.display = 'none';
    } else {
        passwordSection.style.display = 'none';
        passwordEditSection.style.display = 'inline';
        passwordInput.value = passwordSection.textContent;
    }
}


function logout() {
    //TODO Perform logout functionality
    alert('Logged out');
}

function deleteAccount() {
    //TODO Perform account deletion functionality
    alert('Account deleted');
}

function toggleQuizTaken() {
    const quizContent = document.getElementById('quiz-content');
    const quizTakenButton = document.getElementById('quiz-taken-button');

    if (quizContent.style.display === 'none') {
        quizContent.style.display = 'block';
        quizTakenButton.classList.add('active');
    } else {
        quizContent.style.display = 'none';
        quizTakenButton.classList.remove('active');
    }

    document.getElementById('my-quiz-button').classList.remove('active');
}

function toggleMyQuiz() {
    const quizContent = document.getElementById('quiz-content');
    const myQuizButton = document.getElementById('my-quiz-button');

    if (quizContent.style.display === 'none') {
        quizContent.style.display = 'block';
        myQuizButton.classList.add('active');
    } else {
        quizContent.style.display = 'none';
        myQuizButton.classList.remove('active');
    }

    document.getElementById('quiz-taken-button').classList.remove('active');
}







/*var user

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
            const quizList = document.getElementById("quizes")
            for (let quiz of quizes) {
                console.log(quiz)
                const element = document.createElement("li")
                const link = document.createElement("a")
                link.href = `/edit.html?quizID=${quiz.id}`
                link.innerHTML = `Quiz: ${quiz.title}`
                element.appendChild(link)
                quizList.appendChild(element)
            }
        }
    };
    xhr2.open("GET", `/quizes?userID=${user.id}`)
    xhr2.send();
}*/