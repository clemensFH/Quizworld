const express = require('express')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const path = require('path')
const QuizWorldModel = require('./models.js');
const app = express()


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

var session;

app.get("/", function(req, res){
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
        res.sendFile(__dirname + "/files/index.html")
})

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

app.get("/hallo", function(req, res){
    console.log(QuizWorldModel.users)
    console.log(QuizWorldModel.questions)
    console.log(QuizWorldModel.quizes)
    res.sendFile(__dirname + "/files/home.html")
});

app.get("/quizes", function (req, res){
    const userid = req.query.userID
    var quizes = QuizWorldModel.quizes
    console.log("userid = " + userid)
    if(userid){
        quizes = quizes.filter(quiz => quiz.creator.id == userid);
    }
    res.send(quizes)
});

app.get("/quizes/:quizId",function (req, res) {
    const id = req.params.quizId
    const quiz = QuizWorldModel.quizes.find(quiz => quiz.id == id);
    console.log("id = " + id)
    if(quiz){
        res.send(quiz)
    }else {
        res.sendStatus(404)
    }
});

app.get("/user/:userID", function (req, res){
    const userID = req.params.userID
    const user = QuizWorldModel.users.find(user => user.id == userID)
    if(user){
        res.send(user)
    }else {
        res.sendStatus(404)
    }
});

app.put("/quiz", function (req, res){

});

app.post("/quiz", function (req, res){

})

app.post("/login", function (req, res){
    console.log("Login - user: " + req.body.name + " pw: " + req.body.pw)
    const id = QuizWorldModel.validateUser(req.body.name, req.body.pw)
    console.log("id: " + id)
    if(id){
        //res.redirect("/quizes?userID=" + id)
        res.sendFile(__dirname + "/files/home.html")

    }else{
        res.send("Ungültige Anmeldedaten. Username oder Passwort falsch!")
    }
})

app.post('/user',(req,res) => {
    QuizWorldModel.addUser(req.body.username, req.body.password)
    console.log("Register - user: " + req.body.username + " pw: " + req.body.password)
    console.log("User created")
    res.redirect("/")
})

app.delete("/quiz/:quizID", function (req, res){
    const id = req.params.quizID
    QuizWorldModel.removeUser(id)
    res.send(200)
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")