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

function addQuiz() {
    window.location.href = "create.html"
}


window.onload = function () {
    const xhr2 = new XMLHttpRequest();
    xhr2.onload = function () {
        if(xhr2.status === 200) {
            const profileBtn = document.getElementById("profile-button")
            const id = JSON.parse(xhr2.responseText)
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
            let filteredQuizzes = quizzes; // Initially, display all quizzes

            displayQuizzes(filteredQuizzes);

            const filterButton = document.getElementById("filter-button");
            const filterDropdown = document.getElementById("filter-dropdown");
            const categoryList = document.getElementById("category-list");

            filterButton.addEventListener("click", function () {
                filterDropdown.classList.toggle("show");
            });

            // Generate category buttons
            const categories = getUniqueCategories(quizzes);
            categories.forEach((category) => {
                const categoryButton = document.createElement("button");
                categoryButton.innerHTML = category;
                categoryButton.className = "category-button";
                categoryButton.addEventListener("click", function () {
                    this.classList.toggle("selected");
                    applyFilters();
                });
                categoryList.appendChild(categoryButton);
            });

            const searchInput = document.querySelector("nav input[type='text']");
            searchInput.addEventListener("input", function () {
                applyFilters();
            });

            function applyFilters() {
                const searchTerm = searchInput.value.toLowerCase();
                const selectedCategories = Array.from(document.querySelectorAll(".category-button.selected")).map((button) =>
                    button.innerHTML
                );

                filteredQuizzes = filterQuizzes(quizzes, searchTerm, selectedCategories);
                displayQuizzes(filteredQuizzes);
            }

            function getUniqueCategories(quizzes) {
                const categories = new Set();
                quizzes.forEach((quiz) => {
                    categories.add(quiz.category);
                });
                return Array.from(categories);
            }

            function filterQuizzes(quizzes, searchTerm, selectedCategories) {
                return quizzes.filter((quiz) => {
                    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm);
                    const matchesCategory =
                        selectedCategories.length === 0 || selectedCategories.includes(quiz.category);
                    return matchesSearch && matchesCategory;
                });
            }

            function displayQuizzes(quizzes) {
                main.innerHTML = ""; // Clear the existing quiz previews

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
                    date.innerHTML = quiz.date
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
        }
    };
    xhr.open("GET", "/quizes");
    xhr.send();
};
