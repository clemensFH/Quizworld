let qnr = 2
function addQuestion(){
    const questionsContainer = document.getElementById("questions")
    const container = document.getElementById("Q"+qnr+"_Container")
    const innerDiv = document.createElement("div")
    const form = document.createElement("form")

    const heading = document.createElement("h5")
    heading.innerHTML = "Frage " + qnr
    innerDiv.appendChild(heading)

    const questionText = document.createElement("textarea")
    questionText.id = `Q${qnr}_Text`
    questionText.required = true
    innerDiv.appendChild(questionText)

    for (let i= 1; i<5; i++){
        const optcon = document.createElement("div")
        const optionText = document.createElement("input")
        optionText.id = `Q${qnr}O${i}_Text`
        optionText.required = true
        optcon.appendChild(optionText)

        const optionTrue = document.createElement("input")
        optionTrue.type = "radio"
        optionTrue.name = `Q${qnr}_Result`
        optionTrue.id = `Q${qnr}O${i}_Result`
        optionTrue.required = true
        if(i === 1) {optionTrue.checked = true}
        optcon.appendChild(optionTrue)
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