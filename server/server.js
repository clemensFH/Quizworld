const express = require('express')
const axios = require('axios');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const path = require('path')
const QuizWorldModel = require('./models.js');
const app = express()

//------------------- SESSION MANAGEMENT ----------------------------------------------------------------------------//

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

const requireLogin = (req, res, next) => {
    if (req.session.userID) {
        next();
    } else {
        // User is not logged in, redirect to the login page or send an error response
        res.redirect('/'); // Redirect to the login page
        // Or
        // res.status(401).send('Unauthorized'); // Send an unauthorized error response
    }
};

//------------------- HTTP ENDPOINTS --------------------------------------------------------------------------------//


app.get("/userID", function(req, res){
    if(req.session.userID){
        //res.send("Welcome User with id " + req.session.userID);
        const foo = {"id" : req.session.userID}
        res.send(foo)
    }else {
        res.sendStatus(500)
    }
})

app.get("/", function(req, res){
    if(req.session.userID){
        //res.send("Welcome User with id " + req.session.userID);
        res.sendFile(__dirname + "/files/home.html")
    }else
        res.sendFile(__dirname + "/files/index.html")
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    console.log("logout")
    res.redirect('/');
});


// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));


app.get("/joke", function (req, res){
    axios.get('https://api.chucknorris.io/jokes/random')
        .then(function (response) {
            res.send(response.data.value)
        })
        .catch(function (error) {
            console.log("error loading joke: " + error);
        })
});


/*
    GET User by ID
 */
app.get("/user/:userID", function (req, res){
    const userID = req.params.userID
    const user = QuizWorldModel.users.find(user => user.id == userID)
    if(user){
        res.send(user)
    }else {
        res.sendStatus(404)
    }
});


/*
    GET Quiz by ID
 */
app.get("/quizes/:quizID", function (req, res) {
    const id = req.params.quizID
    const quiz = QuizWorldModel.quizes.find(quiz => quiz.id == id);
    console.log(quiz);
    if (quiz) {
        res.send(quiz)
    } else {
        res.sendStatus(404)
    }
});


/*
    GET Quizzes opt: queryparam. userID
 */
app.get("/quizes", function (req, res){
    const userid = req.query.userID
    var quizes = QuizWorldModel.quizes

    if(userid){
        quizes = quizes.filter(quiz => quiz.creatorID == userid);
    }
    res.send(quizes)
});


/*
    GET current User
 */
app.get("/profile", requireLogin, function(req, res){
    if(req.session.userID){
        const user = QuizWorldModel.users.find(user => user.id == req.session.userID);
        res.send(user)
    }else {
        res.sendStatus(500)
    }
});


/*
    PUT Quiz bearbeiten
 */
app.put("/quiz", function (req, res){
    const quiz = req.body
    console.log("PUT " + quiz)
    QuizWorldModel.updateQuiz(quiz)
    //res.redirect( "/profile")
});


/*
    PUT Quiz erstellen
 */
app.post("/quiz", function (req, res){
    const quiz = req.body
    console.log("POST " + quiz)
    QuizWorldModel.addQuiz(quiz)
})


/*
    POST User Login
 */
app.post("/login", function (req, res){
    console.log("Login Try - user: " + req.body.name + " pw: " + req.body.pw)
    const id = QuizWorldModel.validateUser(req.body.name, req.body.pw)
    console.log("Login Successfull userID: " + id)
    if(id){
        req.session.userID = id
        res.redirect("/")
    }else{
        res.send("Ungültige Anmeldedaten. Username oder Passwort falsch!")
    }
})



/*
    POST User erstellen
 */
app.post('/user',(req,res) => {
    QuizWorldModel.addUser(req.body.username, req.body.password)
    console.log("Register - user: " + req.body.username + " pw: " + req.body.password)
    console.log("User created")
    res.redirect("/")
})


/*
    PUT User updaten
 */
app.put('/updateuser',(req,res) => {
    QuizWorldModel.updateUser(req.body)
    res.sendStatus(200)
})


/*
    DELETE Quiz löschen
 */
app.delete("/quiz/:quizID", function (req, res){
    const id = req.params.quizID
    console.log("Deleting Quiz " + id)
    QuizWorldModel.removeQuiz(id)
    res.sendStatus(200)
});


/*
    DELETE User löschen
 */
app.delete("/user/:userID", function (req, res){
    const id = req.params.userID
    console.log("Deleting User " + id)
    QuizWorldModel.removeUser(id)
    res.sendStatus(200)
    req.session.destroy();
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")