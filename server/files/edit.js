window.onload = function () {
    const quizID = new URLSearchParams(window.location.search).get("quizID");
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
        if (xhr.status === 200) {
            const body = document.querySelector("body")
            const quiz = JSON.parse(xhr.responseText)

            const form = document.createElement("form")
            for(var question of quiz.questions){
                const container = document.createElement("div")
                const questionText = document.createElement("textarea")
                questionText.value = question.text
                form.appendChild(questionText)

                for(const option in question.options){
                    const optionText = document.createElement("input")
                    optionText.value = option
                    form.appendChild(optionText)

                    const optionTrue = document.createElement("input")
                    optionTrue.type = "radio"
                    optionTrue.id = "Wahr"
                    optionTrue.value = "Wahr"
                    optionTrue.name = option + "_Result"
                    form.appendChild(optionTrue)

                    const optionFalse = document.createElement("input")
                    optionFalse.type = "radio"
                    optionFalse.id = "Falsch"
                    optionFalse.value = "Falsch"
                    optionFalse.name = option + "_Result"
                    question.options[option] === false ? optionFalse.select() : optionTrue.select()
                    form.appendChild(optionFalse)
                }
                body.appendChild(form)
            }
        }
    }
    xhr.open("GET", "quizes/"+quizID)
    xhr.send()
};