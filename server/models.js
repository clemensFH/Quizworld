class User {
    constructor(name, password) {
        this.id = User.idpool
        User.idpool++
        this.name = name
        this.password = password
    }

    static idpool = 1
}

class Quiz {
    constructor(title, category, date, description, creator, questions) {
        this.title = title
        this.category = category
        this.date = date
        this.description = description
        this.creator = creator          // OneToMany
        this.questions = questions      // OneToMany
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


opt = {"A": false, "B": false, "C": true, "D": false}

user1 = new User("John Wick", "asd123")
user2 = new User("Mia Mahlkova", "123asdX")

q1 = new Question("1?", opt)
q2 = new Question("2?", opt)
q3 = new Question("3?", opt)

quiz1 = new Quiz("Test", "Physics", Date.now(), "Best physics quiz",
                    user1, [q1,q2])
quiz2 = new Quiz("Best", "Sports", Date.now(), "Best sports quiz",
    user2, [q3,q2])


module.exports.users = [user1, user2]
module.exports.quizes = [quiz1, quiz2]
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
        console.log(user)
        if(user.name === username && user.password === password){
            return user.id
        }
    }
    return undefined
};