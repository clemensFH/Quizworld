window.onload = function () {
    const main = document.querySelector("main");
    const searchInput = document.querySelector("nav input[type='text']");
    const filterButton = document.getElementById("filter-button");
    const filterDropdown = document.getElementById("filter-dropdown");
    const categoryList = document.getElementById("category-list");

    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", function () {
        // Logic for handling the click event on the "+" button
        // You can add your desired functionality here
    });
    const profileButton = document.getElementById("profile-button");
    profileButton.addEventListener("click", function () {
        location.href = "profile.html";
    });


    let filteredQuizzes = quizzes; // Initially, display all quizzes

    displayQuizzes(filteredQuizzes);

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
};

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
        const matchesSearch = quiz.name.toLowerCase().includes(searchTerm);
        const matchesCategory =
            selectedCategories.length === 0 || quiz.category.some((category) => selectedCategories.includes(category));
        return matchesSearch && matchesCategory;
    });
}v
function displayQuizzes(quizzes) {
    const main = document.querySelector("main");
    main.innerHTML = ""; // Clear the existing quiz previews

    quizzes.forEach((quiz) => {
        const container = document.createElement("div");
        container.className = "quiz-preview-container";

        // Title and Creator
        const titleCreatorWrapper = document.createElement("div");
        titleCreatorWrapper.className = "quiz-preview-title-creator-wrapper";

        const title = document.createElement("h3");
        title.innerHTML = quiz.name;
        title.className = "quiz-preview-title quiz-preview-item";
        titleCreatorWrapper.appendChild(title);

        const creatorDate = document.createElement("div");
        creatorDate.className = "quiz-preview-creator-date";

        const creator = document.createElement("p");
        creator.innerHTML = `by ${quiz.creator}`;
        creator.className = "quiz-preview-creator quiz-preview-item";
        creatorDate.appendChild(creator);

        const date = document.createElement("p");
        date.innerHTML = new Date(quiz.date).toLocaleDateString("de-DE");
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
            location.href = `startquiz.html?id=${quiz.id}`;
        });

        main.appendChild(container);
    });
};

function getLimitedDescription(description, limit) {
    if (description.length <= limit) {
        return description;
    } else {
        return description.slice(0, limit) + '...';
    }
}
