var user;

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

            // Clear the quiz list
            quizList.innerHTML = "";

            // Iterate over each quiz and create the quiz item
            for (let quiz of quizzes) {
                const quizItem = document.createElement("div");
                quizItem.classList.add("quiz-item");

                const quizName = document.createElement("p");
                quizName.classList.add("quiz-name");
                quizName.innerText = quiz.title;

                const quizDate = document.createElement("p");
                quizDate.classList.add("quiz-date");
                quizDate.innerText = quiz.date;

                const quizCategories = document.createElement("p");
                quizCategories.classList.add("quiz-categories");
                quizCategories.innerText = quiz.category.join(", ");


                const editButton = document.createElement("button");
                editButton.classList.add("edit-icon");
                editButton.id = "editQuiz-button"
                editButton.innerHTML = '<i class="fas fa-pen"></i>';
                editButton.addEventListener("click", function () {
                    // Redirect to the edit.html page for the specific quiz
                    window.location.href = `/edit.html?quizID=${quiz.id}`;
                });

                const deleteButton = document.createElement("button");
                deleteButton.classList.add("edit-icon");
                deleteButton.id = "deleteQuiz-button"
                deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
                deleteButton.addEventListener("click", function () {
                    // Perform delete functionality for the specific quiz
                    deleteQuiz(quiz.id);
                });

                quizItem.appendChild(quizName);
                quizItem.appendChild(quizDate);
                quizItem.appendChild(quizCategories);
                quizItem.appendChild(editButton);
                quizItem.appendChild(deleteButton);

                quizList.appendChild(quizItem);
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