var user;

// TODO Profile needs to save Quiz!

const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        user = JSON.parse(xhr.responseText);
        console.log(user);
        const username = document.getElementById("username");
        username.innerHTML = user.name;
        const password = document.getElementById("password");
        password.innerHTML = user.password;
        const date = document.getElementById("since");
        date.innerHTML = user.date;
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
    const usernameEditIcon = document.getElementById('username-edit-icon');

    if (usernameSection.style.display === 'none') {
        usernameSection.style.display = 'inline';
        usernameEditSection.style.display = 'none';
        usernameEditIcon.innerHTML = '<i class="fas fa-pen"></i>';
        // Save the updated username
        const newUsername = usernameInput.value;
        usernameSection.textContent = newUsername;
    } else {
        usernameSection.style.display = 'none';
        usernameEditSection.style.display = 'inline';
        usernameInput.value = usernameSection.textContent; // Set input value to current username
        usernameEditIcon.innerHTML = '<i class="fas fa-check"></i>';
    }
}

function togglePasswordEdit() {
    const passwordSection = document.getElementById('password');
    const passwordEditSection = document.getElementById('password-edit');
    const passwordInput = document.getElementById('password-input');
    const passwordEditIcon = document.getElementById('password-edit-icon');

    if (passwordSection.style.display === 'none') {
        passwordSection.style.display = 'inline';
        passwordEditSection.style.display = 'none';
        passwordEditIcon.innerHTML = '<i class="fas fa-pen"></i>';
        // Save the updated password
        const newPassword = passwordInput.value;
        passwordSection.textContent = newPassword;
    } else {
        passwordSection.style.display = 'none';
        passwordEditSection.style.display = 'inline';
        passwordInput.value = passwordSection.textContent;
        passwordEditIcon.innerHTML = '<i class="fas fa-check"></i>';
    }
}

function logout() {
    // TODO After logout it needs to go back to index.html (Provisorisch:)
    const xhrlogout = new XMLHttpRequest();
    xhrlogout.onload = function () {
        if (xhrlogout.status === 200) {
            window.location.reload();
        }
    };
    xhrlogout.open("GET", "/logout");
    xhrlogout.send();
}

function deleteAccount() {
    //TODO Clemens: Perform account deletion functionality
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