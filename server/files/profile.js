function goBack() {
    window.history.back();
}

function goHome() {
    window.location.href = 'home.html';
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

function saveUsername() {
    const usernameSection = document.getElementById('username');
    const usernameEditSection = document.getElementById('username-edit');
    const usernameInput = document.getElementById('username-input');

    usernameSection.textContent = usernameInput.value;
    toggleUsernameEdit();
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

function savePassword() {
    const passwordSection = document.getElementById('password');
    const passwordEditSection = document.getElementById('password-edit');
    const passwordInput = document.getElementById('password-input');

    passwordSection.textContent = passwordInput.value;
    togglePasswordEdit();
}

function logout() {
    // Perform logout functionality
    alert('Logged out');
}

function deleteAccount() {
    // Perform account deletion functionality
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

// Dummy data for quiz content
const quizzesTaken = [
    { title: 'Quiz 1', creator: 'Creator A', percentage: 80 },
    { title: 'Quiz 2', creator: 'Creator B', percentage: 60 },
    { title: 'Quiz 3', creator: 'Creator C', percentage: 100 },
];

const quizzesCreated = [
    { title: 'Quiz 4', creator: 'User123' },
    { title: 'Quiz 5', creator: 'User123' },
    { title: 'Quiz 6', creator: 'User123' },
];

function renderQuizzesTaken() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = '';

    quizzesTaken.forEach((quiz) => {
        const quizButton = document.createElement('button');
        quizButton.classList.add('quiz-button');

        // Set quiz button text and color based on percentage
        quizButton.textContent = `${quiz.title} by ${quiz.creator} (${quiz.percentage}%)`;
        if (quiz.percentage < 33) {
            quizButton.style.backgroundColor = 'red';
        } else if (quiz.percentage < 66) {
            quizButton.style.backgroundColor = 'yellow';
        } else {
            quizButton.style.backgroundColor = 'green';
        }

        quizContent.appendChild(quizButton);
    });
}

function renderQuizzesCreated() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = '';

    quizzesCreated.forEach((quiz) => {
        const quizButton = document.createElement('button');
        quizButton.classList.add('quiz-button');

        quizButton.textContent = `${quiz.title} by ${quiz.creator}`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            // Handle edit functionality
            alert(`Edit ${quiz.title}`);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            // Handle delete functionality
            alert(`Delete ${quiz.title}`);
        });

        quizButton.appendChild(editButton);
        quizButton.appendChild(deleteButton);

        quizContent.appendChild(quizButton);
    });
}

function initialize() {
    toggleQuizTaken();
    toggleMyQuiz();
    toggleQuizTaken();
}

initialize();







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

                // TODO Klea: Quiz entries bauen/verschönern
            }
        }
    };
    xhr2.open("GET", `/quizes?userID=${user.id}`)
    xhr2.send();
}*/