const express = require('express')
const path = require('path')
const QuizWorldModel = require('./models.js');
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

app.get("/", function(req, res){

})

app.get("/hallo", function(req, res){
    console.log(QuizWorldModel.users)
    console.log(QuizWorldModel.questions)
    console.log(QuizWorldModel.quizes)
    res.sendFile(__dirname + "/files/home.html")
});

app.get("/quizes", function (req, res){
    res.send(QuizWorldModel.quizes)
});

app.get("/quiz/:quizId",function (req, res) {
    const id = req.params.quizId
    const quiz = QuizWorldModel.quizes.find(quiz => quiz.id == id);
    console.log("id = " + id)
    if(quiz){
        res.send(quiz)
    }else {
        res.sendStatus(404)
    }
});


app.listen(3000)

console.log("Server now listening on http://localhost:3000/")