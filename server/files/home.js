window.onload = function () {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {

            const quizes = JSON.parse(xhr.responseText)
            const main = document.querySelector("main")
            for (const quiz of quizes) {
                const container = document.createElement("div")
                container.className = "quiz-preview-container"

                // preview header
                const previewHeader = document.createElement("div")
                previewHeader.className = "quiz-preview-header"

                // Title
                const title = document.createElement("h3")
                title.innerHTML = quiz.title
                title.className = "quiz-preview-title quiz-preview-item"
                previewHeader.appendChild(title)

                // Username
                const username = document.createElement("p")
                username.className = "quiz-preview-username quiz-preview-item"
                username.innerHTML = "by " + quiz.creator.name
                previewHeader.appendChild(username)

                // categories
                const categories = document.createElement("p")
                categories.innerHTML = quiz.category
                categories.className = "quiz-preview-categories quiz-preview-item"
                previewHeader.appendChild(categories)

                // Date
                const date = document.createElement("p")
                date.className = "quiz-preview-date quiz-preview-item"
                date.innerHTML = new Date(quiz.date).toLocaleDateString("de-DE")
                previewHeader.appendChild(date)

                container.appendChild(previewHeader)

                // Decription
                const desc = document.createElement("p")
                desc.className = "quiz-preview-desc"
                desc.innerHTML = quiz.description
                container.appendChild(desc)
                
                container.addEventListener("click", function () {
                    location.href = "startquiz.html?quizId="+quiz.id
                })


                main.appendChild(container)
            }
        }
    };
    xhr.open("GET", "/quizes")
    xhr.send()
};