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
    const xhrjoke = new XMLHttpRequest();
    xhrjoke.onload = function (){
        if(xhrjoke.status === 200){
            const joke_p = document.getElementById("joke")
            joke_p.innerHTML = xhrjoke.responseText
        }
    };
    xhrjoke.open("GET", "/joke")
    xhrjoke.send()


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
                    quiz.category.forEach((category) => {
                        categories.add(category);
                    });
                });
                return Array.from(categories);
            }

            function filterQuizzes(quizzes, searchTerm, selectedCategories) {
                return quizzes.filter((quiz) => {
                    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm);
                    const matchesCategory =
                        selectedCategories.length === 0 || quiz.category.some((category) => selectedCategories.includes(category));
                    return matchesSearch && matchesCategory;
                });
            }

            function getLimitedDescription(description, limit) {
                if (description.length <= limit) {
                    return description;
                } else {
                    return description.slice(0, limit) + '...';
                }
            }

            function displayQuizzes(quizzes) {
                main.innerHTML = ""; // Clear the existing quiz previews

                quizzes.forEach((quiz) => {
                    const container = document.createElement("div");
                    container.className = "quiz-preview-container";

                    // Title and Creator
                    const titleCreatorWrapper = document.createElement("div");
                    titleCreatorWrapper.className = "quiz-preview-title-creator-wrapper";

                    const title = document.createElement("h3");
                    title.innerHTML = quiz.title;
                    title.className = "quiz-preview-title quiz-preview-item";
                    titleCreatorWrapper.appendChild(title);

                    const creatorDate = document.createElement("div");
                    creatorDate.className = "quiz-preview-creator-date";

                    const creator = document.createElement("p");
                    creator.innerHTML = "by " + quiz.creatorID;
                    creator.className = "quiz-preview-creator quiz-preview-item";
                    creatorDate.appendChild(creator);

                    const date = document.createElement("p");
                    date.innerHTML = quiz.date
                    date.className = "quiz-preview-date quiz-preview-item";
                    creatorDate.appendChild(date);

                    titleCreatorWrapper.appendChild(creatorDate);
                    container.appendChild(titleCreatorWrapper);

                    // Categories
                    const categories = document.createElement("p");
                    categories.innerHTML = quiz.category.join(", ");
                    categories.className = "quiz-preview-category quiz-preview-item";
                    container.appendChild(categories);

                    // Description
                    const desc = document.createElement("p");
                    desc.className = "quiz-preview-description";
                    desc.innerHTML = getLimitedDescription(quiz.description, 100);
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