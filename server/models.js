class User {
    constructor(name, password, date) {
        this.id = User.idpool
        User.idpool++
        this.name = name
        this.password = password
        this.date = date
    }

    static idpool = 1
}

 class Quiz {
    constructor(title, apiURL, numberOfQuestions, category, creatorName, date, description, questions, creatorID) {
        this.title = title
        this.apiURL = apiURL
        this.category = category
        this.date = date
        this.description = description
        this.creatorName = creatorName          // OneToMany
        this.creatorID = creatorID
        this.questions = questions      // OneToMany
        this.numberOfQuestions = numberOfQuestions
        this.id = Quiz.idpool
        Quiz.idpool++
    }

    static idpool = 1
}

class Question {
    constructor(text, options) {
        this.text = text
        this.options = options
    }
}


opt1= {"A": false, "B": false, "C": true, "D": false}
opt2 = {"A": true, "B": false, "C": false, "D": false}
opt3 = {"A": false, "B": true, "C": false, "D": false}

user1 = new User("Quizworld", "Quizworld", new Date("2023-01-01").toLocaleDateString("de-DE"))
user2 = new User("John Wick", "asd123", new Date("2023-04-13").toLocaleDateString("de-DE"))
user3 = new User("Mia Mahlkova", "123asd", new Date("2023-01-05").toLocaleDateString("de-DE"))

q1 = new Question("1?", opt1)
q2 = new Question("2?", opt2)
q3 = new Question("3?", opt3)

Quiz1 = new Quiz("Test", null, 2, ["Science", "Mathematics", "Technology"], user2.name, new Date("2023-03-06").toLocaleDateString("de-DE"), "Best physics quiz", [q1,q2], user2.id)
Quiz2 = new Quiz("Best",  null,2, ["Sports"], user3.name, new Date("2023-02-05").toLocaleDateString("de-DE"), "Best sports quiz",[q3,q2], user3.id)
Quiz3= new Quiz("BestT",  null,2, ["Science"], user2.name, new Date("2023-02-05").toLocaleDateString("de-DE"), "Best Best Science quiz",[q3,q2], user2.id)




module.exports.users = [user1, user2]
module.exports.quizes = [Quiz1, Quiz2, Quiz3]
module.exports.questions = [q1, q2, q3]

module.exports.addUser = function (username, password){
    module.exports.users.push(new User(username, password))
};

module.exports.removeUser = function (userid) {
    let idx = -1;
    for(let i= 0; i<module.exports.users.length; i++){
        if(module.exports.users[i].id == userid){
            idx = i
            break
        }
    }
    console.log("Removing user with id: " + userid)

    module.exports.quizes = module.exports.quizes.filter(quiz => quiz.creator.id != userid)

    module.exports.users.splice(idx, 1)
};

module.exports.validateUser = function (username, password){
    for(let i=0; i<module.exports.users.length; i++){
        let user = module.exports.users[i]
        if(user.name === username && user.password === password){
            return user.id
        }
    }
    return undefined
};

module.exports.addQuiz = function (fakeQuiz){
    const x = new Quiz(fakeQuiz.title, fakeQuiz.category, fakeQuiz.date, fakeQuiz.description, fakeQuiz.creatorID, fakeQuiz.questions)
    x.id = fakeQuiz.id
    module.exports.quizes.push(x)
}

module.exports.removeQuiz = function (quizID){
    module.exports.quizes = module.exports.quizes.filter(q => q.id !== quizID)
}

module.exports.updateQuiz = function (fakeQuiz){
    module.exports.removeQuiz(fakeQuiz.id)
    module.exports.addQuiz(fakeQuiz)
}