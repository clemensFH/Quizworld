function addQuiz() {
    console.log("youoo")
    window.location.href = "create.html"
}

function logout(){
    const xhrlogout = new XMLHttpRequest();
    xhrlogout.onload = function () {
        if (xhrlogout.status === 200) {
            window.location.reload()
        }
    };
    xhrlogout.open("GET", "/logout")
    xhrlogout.send();
}

var user;

const xhr2 = new XMLHttpRequest();
xhr2.onload = function () {
    if (xhr2.status === 200) {
        const profileBtn = document.getElementById("profile-btn")
        user = JSON.parse(xhr2.responseText)
        profileBtn.innerHTML = "Profile"
        profileBtn.addEventListener("click", function () {
            location.href = "profile.html"
        })
    }
};
xhr2.open("GET", "/userID")
xhr2.send();

const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        const quizzes = JSON.parse(xhr.responseText);
        const main = document.querySelector("main");
        quizzes.forEach((quiz) => {
            const container = document.createElement("div");
            container.className = "quiz-preview-container";

            // Preview header
            const previewHeader = document.createElement("div");
            previewHeader.className = "quiz-preview-header";

            // Title
            const title = document.createElement("h3");
            title.innerHTML = quiz.title;
            title.className = "quiz-preview-title quiz-preview-item";
            previewHeader.appendChild(title);

            // Username Container
            const usernameContainer = document.createElement("div");
            usernameContainer.className = "quiz-preview-username-container";

            // Username
            const username = document.createElement("p");
            username.className = "quiz-preview-username quiz-preview-item";
            username.innerHTML = "by " + quiz.creatorID;
            usernameContainer.appendChild(username);
            previewHeader.appendChild(usernameContainer);

            // Categories
            const categories = document.createElement("p");
            categories.innerHTML = quiz.category;
            categories.className = "quiz-preview-categories quiz-preview-item";
            previewHeader.appendChild(categories);

            // Date
            const date = document.createElement("p");
            date.className = "quiz-preview-date quiz-preview-item";
            date.innerHTML = quiz.date;
            previewHeader.appendChild(date);

            container.appendChild(previewHeader);

            // Description
            const desc = document.createElement("p");
            desc.className = "quiz-preview-desc";
            desc.innerHTML = quiz.description;
            container.appendChild(desc);

            container.addEventListener("click", function () {
                location.href = "startquiz.html?quizId=" + quiz.id;
            });

            main.appendChild(container);
        });
    }
};
xhr.open("GET", "/quizes");
xhr.send();
