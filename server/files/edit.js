function putQuiz() {
    console.log(document.forms)
}


const quizID = new URLSearchParams(window.location.search).get("quizID");
const xhr = new XMLHttpRequest()
xhr.onload = function () {
    if (xhr.status === 200) {
        const body = document.querySelector("body")
        const quiz = JSON.parse(xhr.responseText)

        document.getElementById("title").value = quiz.title
        document.getElementById("category").value = quiz.category
        document.getElementById("description").value = quiz.description


        var i = 1
        for (var question of quiz.questions) {
            const form = document.createElement("form")
            const container = document.createElement("div")
            const heading = document.createElement("h5")
            heading.innerHTML = "Frage " + i
            container.appendChild(heading)

            const questionText = document.createElement("textarea")
            questionText.value = question.text
            questionText.id = `Q${i}_Text`
            container.appendChild(questionText)

            var j = 1
            for (const option in question.options) {
                const optcon = document.createElement("div")
                const optionText = document.createElement("input")
                optionText.value = option
                optionText.id = `Q${i}O${j}_Text`
                optcon.appendChild(optionText)

                const optionTrue = document.createElement("input")
                optionTrue.type = "checkbox"
                optionTrue.id = `Q${i}O${j}_Result`
                if(question.options[option]){
                    optionTrue.checked = question.options[option] === true
                }
                optcon.appendChild(optionTrue)

                container.appendChild(optcon)
                j++
            }
            form.appendChild(container)
            body.appendChild(form)
            i++
        }
    }
}
xhr.open("GET", "quizes/" + quizID)
xhr.send()
