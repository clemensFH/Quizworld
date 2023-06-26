var user;

const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if(xhr.status === 200) {
        user = JSON.parse(xhr.responseText)
        //console.log(user)
        const userID_input = document.getElementById("creatorID")
        userID_input.value = user.id

        const date_input = document.getElementById("date")
        date_input.value = new Date(Date.now()).toLocaleDateString("de-DE");
    }
};
xhr.open("GET", "/profile")
xhr.send();

let qnr = 2
function addQuestion(){
    const questionsContainer = document.getElementById("questions-container")
    const container = document.getElementById("Q"+qnr+"_Container")
    const form = document.createElement("form")
    const innerDiv = document.createElement("div")

    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");

    const heading = document.createElement("h5");
    heading.innerHTML = "Question " + qnr;
    questionWrapper.appendChild(heading);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        deleteQuestion(qnr);
    });
    questionWrapper.appendChild(deleteButton);

    innerDiv.appendChild(questionWrapper);

    const questionText = document.createElement("textarea")
    questionText.id = `Q${qnr}_Text`
    questionText.placeholder = "Type in Question..."
    questionText.required = true
    questionText.classList.add("question-text");
    innerDiv.appendChild(questionText)

    for (let i = 1; i < 5; i++) {
        const optcon = document.createElement("div");
        optcon.classList.add("option-container");

        const optionText = document.createElement("input");
        optionText.id = `Q${qnr}O${i}_Text`;
        optionText.placeholder = "Type in Choice of Question..."
        optionText.required = true;
        optionText.classList.add("option-text");
        optcon.appendChild(optionText);

        const optionTrueContainer = document.createElement("div");
        optionTrueContainer.classList.add("option-true-container");

        const optionTrue = document.createElement("input");
        optionTrue.type = "radio";
        optionTrue.name = `Q${qnr}_Result`;
        optionTrue.id = `Q${qnr}O${i}_Result`;
        optionTrue.required = true;
        optionTrue.classList.add("option-true-input");
        if (i === 1) {
            optionTrue.checked = true;
        }
        optionTrueContainer.appendChild(optionTrue);

        const optionTrueLabel = document.createElement("label");
        optionTrueLabel.classList.add("option-true-label");
        optionTrueLabel.setAttribute("for", `Q${qnr}O${i}_Result`);
        optionTrueContainer.appendChild(optionTrueLabel);

        optcon.appendChild(optionTrueContainer);

        innerDiv.appendChild(optcon)
    }
    form.appendChild(innerDiv)
    container.appendChild(form)
    // body.appendChild(form)
    qnr++
    const foo = document.createElement("div")
    foo.id=`Q${qnr}_Container`
    questionsContainer.appendChild(foo)
}

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

function postQuiz() {
    const quiz = getQuiz()
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "/quiz")
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(quiz))
    location.href = "/"
}