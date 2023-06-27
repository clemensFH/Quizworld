function getQuiz(){
    const quiz = {}
    quiz.questions = []

    const quizElements = Array.from(document.forms[0].elements).filter(
        (element) => element.id
    )

    // Quiz Info
    for (const element of quizElements) {
        let name = element.id
        let value
        console.log(name)
        if(name === "id" || name === "creatorID"){
            value = Number(element.value)
        }else{
            value = element.value
        }
        quiz[name] = value
    }
    console.log(JSON.stringify(quiz))


    // Questions -- eine Question form wird iteriert

    for(let i= 1; i<document.forms.length; i++){
        let question = {}
        let options = {}
        console.log(i)
        // Question form
        const OptionElements = Array.from(document.forms[i].elements).filter(
            (element) => element.id
        )

        let oldIdx
        for (const element of OptionElements) {
            let name = element.id
            let value
            console.log(name + " " + element.value)


            if(name === `Q${i}_Text`){
                question.text = element.value
            }
            else if(name.includes("Text")){
                options[element.value] = false
                oldIdx = element.value
            } else if(name.includes("Result")){
                if(element.checked){
                    options[oldIdx] = true
                }
            }
        }
        question.options = options
        quiz.questions.push(question)
    }
    console.log(quiz)
    return quiz
}

function putQuiz() {
    const quiz = getQuiz()
    const xhr = new XMLHttpRequest()
    xhr.open("PUT", "/quiz")
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(quiz))
    location.href = "/"
}


const quizID = new URLSearchParams(window.location.search).get("quizID");

const xhr = new XMLHttpRequest()
xhr.onload = function () {
    if (xhr.status === 200) {
        const body = document.querySelector("body")
        const quiz = JSON.parse(xhr.responseText)


        document.getElementById("id").value = quiz.id
        document.getElementById("creatorID").value = quiz.creatorID
        document.getElementById("date").value = quiz.date
        document.getElementById("title").value = quiz.title
        document.getElementById("category").value = quiz.category
        document.getElementById("description").value = quiz.description

        var i = 1
        for (var question of quiz.questions) {
            const form = document.createElement("form")
            const container = document.createElement("div");

            const questionWrapper = document.createElement("div");
            questionWrapper.classList.add("question-wrapper");

            const heading = document.createElement("h5");
            heading.innerHTML = "Question " + i;
            questionWrapper.appendChild(heading);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", function() {
                deleteQuestion(i);
            });

            questionWrapper.appendChild(deleteButton);
            container.appendChild(questionWrapper)


            const questionText = document.createElement("textarea")
            questionText.placeholder = "Type in Question..."
            questionText.value = question.text
            questionText.id = `Q${i}_Text`
            questionText.required = true
            container.appendChild(questionText)

            var j = 1;
            for (const option in question.options) {
                /*const optcon = document.createElement("div");
                const optionText = document.createElement("input");
                optionText.value = option;
                optionText.className = "option-text"; // Add the CSS class
                optionText.id = `Q${i}O${j}_Text`;
                optionText.required = true;
                optcon.appendChild(optionText);

                const optionTrue = document.createElement("input");
                optionTrue.type = "radio";
                optionTrue.className = "option-true"; // Add the CSS class
                optionTrue.name = `Q${i}_Result`;
                optionTrue.id = `Q${i}O${j}_Result`;
                optionTrue.required = true;
                if (question.options[option]) {
                    optionTrue.checked = question.options[option] === true;
                }
                optcon.appendChild(optionTrue);

                container.appendChild(optcon);*/
                const optcon = document.createElement("div");
                optcon.classList.add("option-container");

                const optionText = document.createElement("input");
                optionText.placeholder = "Type in Choice of Question..."
                optionText.value = option;
                optionText.id = `Q${i}O${j}_Text`;
                optionText.required = true;
                optionText.classList.add("option-text");
                optcon.appendChild(optionText);

                const optionTrueContainer = document.createElement("div");
                optionTrueContainer.classList.add("option-true-container");

                const optionTrueInput = document.createElement("input");
                optionTrueInput.type = "radio";
                optionTrueInput.name = `Q${i}_Result`;
                optionTrueInput.id = `Q${i}O${j}_Result`;
                optionTrueInput.required = true;
                optionTrueInput.classList.add("option-true-input");
                if (question.options[option]) {
                    optionTrueInput.checked = question.options[option] === true;
                }
                optionTrueContainer.appendChild(optionTrueInput);

                const optionTrueLabel = document.createElement("label");
                optionTrueLabel.classList.add("option-true-label");
                optionTrueLabel.setAttribute("for", `Q${i}O${j}_Result`);
                optionTrueContainer.appendChild(optionTrueLabel);

                optcon.appendChild(optionTrueContainer);

                container.appendChild(optcon);
                j++;
            }

            form.appendChild(container)
            body.appendChild(form)
            i++
        }
    }
}


xhr.open("GET", "quizes/" + quizID)
xhr.send()
