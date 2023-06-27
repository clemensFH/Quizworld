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


opt1= {"2": false, "6": false, "4": true, "8": false}
opt2 = {"Gorilla": true, "Bat": false, "Lion": false, "Deer": false}
opt3 = {"Pride and Prejudice by Jane Austen": false, "The Poetical Works of John Milton": true, "Great Expectations by Charles Dickens": false, "The Adventures of Huckleberry Finn by Mark Twain": false}
opt4 = {"Pigeon" : false, "Goldfish" : true, "Rat" : false, "Pig" : false}
opt5 = {"Queen Elizabeth II" : true, "Prince Henry" : false, "Princess Diana" : false, "King George VI" : false}
opt6 = {"Mole" : false, "Bat" : false, "Salamanders" : false, "Elephant" : true}
opt7 = {"48" : false, "56" : true, "63" : false, "65" : false}
opt8 = {"4" : false, "10" : false, "7" : false, "9" : true}
opt9 = {"6" : true, "7" : false, 8 : false, "9" : false}
opt10 = {"0.25" : false, "0.3" : true, "0.5" : false, "0.6" : false}
opt11 = {"7m+5" : false, "6m + 4" : true, "7m + 4" : false, "6m-4" : false}
opt12 = {"21°" : false, "201°" : false, "159°" : false, "339°" : true}

user1 = new User("Quizworld", "Quizworld", new Date("2023-01-01").toLocaleDateString("de-DE"))
user2 = new User("John Wick", "asd123", new Date("2023-04-13").toLocaleDateString("de-DE"))
user3 = new User("Mia Mahlkova", "123asd", new Date("2023-01-05").toLocaleDateString("de-DE"))

q1 = new Question("What is 2+2?", opt1)
q2 = new Question("What animal can get infected by human diseases?", opt2)
q3 = new Question("Which book was bound with a murderers skin?", opt3)
q4 =  new Question("Which animal gets pale if kept in the dark?", opt4);
q5 = new Question("Which member of the royal family was a trained mechanic?", opt5)
q6 = new Question("Which animal hears with their feet?", opt6)
q7 = new Question("What is 8*7?", opt7)
q8 = new Question("What is (7*6+4)/5?", opt8)
q9 = new Question("What is the cube root of 216?", opt9)
q10 = new Question("What is log(2)?", opt10)
q11 = new Question("Simplify the expression 4m+5+2m-1", opt11)
q12 = new Question("A helicopter flies 40km east followed by 105km south. On what bearing must the helicopter fly to return home directly?", opt12)

Quiz1 = new Quiz("Random General Knowledge Test", null, 6, ["Science", "Mathematics", "Books", "General Knowledge", "Nature"], user2.name, new Date("2023-03-06").toLocaleDateString("de-DE"), "This quiz is a captivating collection of intriguing and unexpected questions designed to challenge your knowledge and test your wits. See how well you fare with these mind-boggling queries.", [q1,q2, q3, q4, q5, q6], user2.id)
Quiz2 = new Quiz("Advanced Math Test",  null,6, ["Mathematics"], user3.name, new Date("2023-02-05").toLocaleDateString("de-DE"), "This quiz presents a series of challenging math questions that will put your mental calculation skills to the test. No calculators, notes, or external help allowed! Can you solve these mathematical puzzles in your head?",[q7, q8, q9, q10, q11,q12], user3.id)

Quiz3 = new Quiz('Movie Quiz',
    'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple',
    10,
    ['Entertainment', 'Film'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Test your knowledge of films with our Movie Quiz! From classic masterpieces to blockbuster hits, this quiz will challenge your memory of iconic scenes, famous actors, and captivating storylines. Put your cinematic expertise to the test and see if you can score high in this ultimate movie trivia challenge! Lights, camera, action!',
    null, user1.id)

Quiz4 = new Quiz('Sport Quiz',
    'https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple',
    15,
    ['Sports'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Are you a sports enthusiast? Take on the exciting Sports Quiz and put your sports knowledge to the test! Explore the thrilling world of sports with questions about popular games, legendary athletes, historic moments, and iconic sports venues. From football and basketball to tennis and soccer, this quiz covers a variety of sports disciplines. Challenge yourself and see if you can score big in this action-packed quiz. Get ready to showcase your sports expertise and prove that you\'re a true sports aficionado!',
    null, user1.id)

Quiz5 = new Quiz('Mythology Quiz',
    'https://opentdb.com/api.php?amount=13&category=20&difficulty=medium&type=multiple',
    13,
    ['Mythology'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Test your knowledge of ancient myths and legends with this captivating Mythology Quiz! Dive into the enchanting world of gods, goddesses, heroes, and creatures from various mythological traditions. From Greek and Roman mythology to Norse and Egyptian myths, this quiz will challenge you with intriguing questions about mythical beings, epic tales, and the symbolism behind these captivating stories. Unleash your inner mythologist and embark on a journey through ancient folklore. Are you ready to unlock the secrets of the gods and goddesses?',
    null, user1.id)


Quiz6 = new Quiz('Book Quiz',
    'https://opentdb.com/api.php?amount=15&category=10&difficulty=medium&type=multiple',
    15,
    ['Entertainment', 'Books'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Test your knowledge with our General Knowledge Quiz! From history to science, geography to arts, this quiz covers a wide range of topics. Challenge yourself with intriguing questions and discover fascinating facts. Are you ready to show off your well-rounded knowledge?',
    null, user1.id)

Quiz7 = new Quiz('General Knowledge [Hard]',
    'https://opentdb.com/api.php?amount=14&category=9&difficulty=hard&type=multiple',
    14,
    ['General Knowledge'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Test your knowledge with our General Knowledge Quiz! From history to science, geography to arts, this quiz covers a wide range of topics. Challenge yourself with intriguing questions and discover fascinating facts. Are you ready to show off your well-rounded knowledge?',
    null, user1.id)

Quiz8 = new Quiz('Music Quiz',
    'https://opentdb.com/api.php?amount=15&category=12&difficulty=medium&type=multiple',
    15,
    ['Entertainment', 'Music'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Get ready to rock and roll with our Music Quiz! Tune in and test your knowledge of music genres, legendary artists, iconic albums, and chart-topping hits. From classical compositions to modern-day masterpieces, this quiz will put your musical prowess to the test. Challenge yourself and see if you can hit all the right notes in this ultimate music trivia challenge. So grab your headphones, turn up the volume, and get ready to show off your music knowledge!',
    null, user1.id)

Quiz9 = new Quiz('Musical & Theater Quiz',
    'https://opentdb.com/api.php?amount=10&category=13&difficulty=medium&type=multiple',
    10,
    ['Entertainment', 'Theater'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Discover the magic of the stage with our Musical & Theater Quiz! Test your knowledge of Broadway hits, iconic performances, and the enchanting world of musicals. From show tunes to stage legends, this quiz will challenge your theater expertise. Are you ready to take a bow and show off your musical and theater know-how? Let the curtain rise on this exciting quiz!',
    null, user1.id)

Quiz10 = new Quiz('Television Quiz',
    'https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple',
    10,
    ['Entertainment'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Dive into the world of television with our Television Quiz! Put your TV knowledge to the test and answer questions about popular shows, memorable characters, and iconic moments. From sitcoms to dramas, reality TV to game shows, this quiz covers a wide range of television genres. Get ready to channel-surf through trivia and prove that you\'re the ultimate TV aficionado. Grab your remote and let the quiz begin!',
    null, user1.id)

Quiz11 = new Quiz('Video Games Quiz',
    'https://opentdb.com/api.php?amount=18&category=15&difficulty=medium&type=multiple',
    18,
    ['Games'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Get ready to level up with our Video Games Quiz! Test your knowledge of the gaming world with questions about popular video games, iconic characters, gaming history, and more. From classic arcade games to modern console masterpieces, this quiz will challenge your gaming prowess and put your skills to the test. Whether you\'re a casual gamer or a dedicated enthusiast, this quiz is sure to bring back memories and ignite your passion for gaming. Grab your controller, press start, and let the gaming trivia adventure begin!',
    null, user1.id)

Quiz12 = new Quiz('Board Games Quiz',
    'https://opentdb.com/api.php?amount=9&category=16&difficulty=medium&type=multiple',
    9,
    ['Games'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Calling all board game enthusiasts! Join us for the Board Games Quiz and put your knowledge to the test. From classic family favorites to strategic masterpieces, this quiz covers a wide range of board game genres. Challenge yourself with questions about game mechanics, famous board game designers, and memorable board game moments. Whether you\'re a seasoned player or just starting your board game journey, this quiz will entertain and challenge you. Roll the dice, draw a card, and see if you can conquer the board games quiz leaderboard. Let the games begin!',
    null, user1.id)

Quiz13 = new Quiz('Sience & Nature Quiz',
    'https://opentdb.com/api.php?amount=16&category=17&difficulty=medium&type=multiple',
    16,
    ['Science', 'Nature'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Explore the wonders of the natural world with our Science & Nature Quiz! From fascinating discoveries to mind-boggling phenomena, this quiz will test your knowledge of scientific facts, natural processes, and the mysteries of the universe. Dive into topics like biology, physics, astronomy, and environmental science as you answer thought-provoking questions. Whether you\'re a science enthusiast or simply curious about the world around us, this quiz is a journey of discovery. Get ready to uncover the secrets of nature and challenge yourself with this engaging Science & Nature Quiz!',
    null, user1.id)

Quiz14 = new Quiz('Computer Science Quiz [Hard]',
    'https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple',
    20,
    ['Science', 'Technology'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Dive into the exciting world of Computer Science with our Computer Science Quiz! Test your knowledge of algorithms, programming languages, data structures, and more. From the basics of computer hardware to advanced concepts in software engineering, this quiz will challenge your understanding of the digital realm. Whether you\'re a coding enthusiast, a tech professional, or simply curious about the inner workings of computers, this quiz is designed to engage and educate. Get ready to put your computer science skills to the test and discover the fascinating world of technology with our Computer Science Quiz!',
    null, user1.id)

Quiz15 = new Quiz('Mathematics Quiz [Hard]',
    'https://opentdb.com/api.php?amount=10&category=19&difficulty=hard&type=multiple',
    10,
    ['Science', 'Mathematics'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Embark on a mathematical journey with our Mathematics Quiz! Explore the fascinating realm of numbers, equations, and mathematical concepts. From arithmetic and algebra to geometry and calculus, this quiz will put your mathematical skills to the test. Challenge yourself with problem-solving questions, mathematical puzzles, and thought-provoking concepts. Whether you\'re a math enthusiast, a student, or simply curious about the beauty of numbers, this quiz is designed to engage and inspire. Get ready to unlock the mysteries of mathematics and discover the joy of solving mathematical challenges with our Mathematics Quiz!',
    null, user1.id)

Quiz16 = new Quiz('Geography Quiz',
    'https://opentdb.com/api.php?amount=14&category=22&difficulty=medium&type=multiple',
    14,
    ['Geography'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Explore the diverse wonders of our world with our Geography Quiz! Travel across continents, navigate through countries, and dive into the depths of geographical knowledge. Test your understanding of landscapes, capitals, landmarks, and cultural diversity. From majestic mountains and sprawling deserts to vibrant cities and serene waterways, this quiz will challenge your geographical expertise. Whether you\'re an avid traveler, a geography enthusiast, or simply curious about the world around us, this quiz will take you on a global adventure. Get ready to expand your horizons, broaden your knowledge, and become a true geography explorer with our captivating Geography Quiz!',
    null, user1.id)

Quiz17 = new Quiz('History Quiz',
    'https://opentdb.com/api.php?amount=15&category=23&difficulty=medium&type=multiple',
    15,
    ['History'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Explore the depths of human history with our History Quiz! Test your knowledge of significant events, influential figures, and pivotal moments that have shaped our world. Uncover ancient civilizations, unravel the intrigues of medieval kingdoms, and witness major wars and revolutions. From the Renaissance to the Space Age, challenge yourself with thought-provoking questions and broaden your understanding of our past. Join us for the History Quiz and become a true history aficionado!',
    null, user1.id)

Quiz18 = new Quiz('Politic Quiz',
    'https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple',
    10,
    ['Politics'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Explore the captivating world of politics with our Politics Quiz! Test your knowledge of political systems, ideologies, and key players in this engaging quiz. From global affairs to local governance, dive into the complexities of democracy, international relations, and policy-making. Challenge yourself with thought-provoking questions and gain a deeper understanding of the political landscape. Whether you\'re a seasoned political enthusiast or just starting to explore this field, our Politics Quiz is your gateway to expanding your political knowledge. Get ready to embark on an exciting journey that will broaden your perspectives and ignite your curiosity about the fascinating realm of politics!',
    null, user1.id)

Quiz19 = new Quiz('Art Quiz',
    'https://opentdb.com/api.php?amount=8&category=25&difficulty=medium&type=multiple',
    8,
    ['Art'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Explore the captivating world of art with our Art Quiz! Test your knowledge of famous artworks, renowned artists, and artistic movements. From classical masterpieces to contemporary creations, this quiz will challenge and expand your understanding of art. Immerse yourself in the beauty, symbolism, and cultural significance of art and discover new dimensions of artistic appreciation. Are you ready to showcase your art knowledge? Let the Art Quiz be your guide!',
    null, user1.id)

Quiz20 = new Quiz('Celebrities Quiz',
    'https://opentdb.com/api.php?amount=13&category=26&difficulty=medium&type=multiple',
    13,
    ['Entertainment'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Step into the glamorous world of celebrities with our Celebrities Quiz! Test your knowledge of famous actors, musicians, athletes, and public figures. From Hollywood icons to global superstars, this quiz will challenge your celebrity expertise. Delve into their careers, personal lives, and noteworthy achievements as you answer intriguing questions about the world of fame and fortune. Are you ready to prove that you\'re a true celebrity aficionado? Get ready for the ultimate star-studded challenge with the Celebrities Quiz!',
    null, user1.id)

Quiz21 = new Quiz('Animals Quiz',
    'https://opentdb.com/api.php?amount=14&category=27&difficulty=medium&type=multiple',
    14,
    ['Animals', 'Nature'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Embark on a wild adventure with our Animals Quiz! Test your knowledge of the fascinating animal kingdom and explore the diverse creatures that inhabit our planet. From majestic mammals to incredible insects, this quiz will challenge your understanding of animal species, habitats, behaviors, and unique adaptations. Dive deep into the animal world and answer intriguing questions about the wonders of nature. Are you ready to showcase your animal expertise? Get ready for an exciting journey through the animal kingdom with the Animals Quiz!',
    null, user1.id)

Quiz22 = new Quiz('Vehicles Quiz',
    'https://opentdb.com/api.php?amount=12&category=28&difficulty=medium&type=multiple',
    12,
    ['Technology'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Rev up your engines and get ready for our Vehicles Quiz! Explore the exciting world of automobiles, aircraft, ships, and more as you test your knowledge of vehicles from various eras and categories. From classic cars to modern marvels, this quiz will challenge your understanding of vehicle types, technologies, and iconic models. Buckle up and answer intriguing questions about engines, designs, and the evolution of transportation. Whether you\'re a car enthusiast, aviation aficionado, or maritime lover, this quiz will put your vehicle knowledge to the test. Start your engines and get ready for an exhilarating ride with the Vehicles Quiz!',
    null, user1.id)

Quiz23 = new Quiz('Comics Quiz',
    'https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple',
    10,
    ['Entertainment', 'Books', 'Animation'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Step into the colorful world of comics with our Comics Quiz! Dive into the captivating realm of superheroes, villains, and epic storylines as you test your knowledge of comic books and graphic novels. From Marvel to DC and beyond, this quiz will challenge your familiarity with iconic characters, memorable arcs, and the artists and writers who bring these fantastical worlds to life. Unleash your inner comic book aficionado and see if you can answer intriguing questions about origins, powers, and the ever-expanding comic book universes. Join the adventure and prove that you\'re a true fan with our action-packed Comics Quiz!',
    null, user1.id)

Quiz24 = new Quiz('Gadgets Quiz',
    'https://opentdb.com/api.php?amount=9&category=30&difficulty=medium&type=multiple',
    9,
    ['Science', 'Technology'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Discover the fascinating world of gadgets with our Gadgets Quiz! Explore the realm of innovative technology, cutting-edge devices, and futuristic advancements as you put your knowledge to the test. From smartphones to smart home devices, wearables to virtual reality, this quiz will challenge your understanding of the latest gadgets that shape our modern lives. Dive into the realm of tech specifications, features, and the companies behind these revolutionary creations. Whether you\'re a tech enthusiast or simply curious about the latest trends, our Gadgets Quiz will push your knowledge to new heights. Get ready to geek out and show off your expertise in the world of gadgets!',
    null, user1.id)

Quiz25 = new Quiz('Anime & Manga Quiz',
    'https://opentdb.com/api.php?amount=15&category=31&difficulty=medium&type=multiple',
    15,
    ['Entertainment', 'Animation'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Embark on a captivating journey through the world of Anime & Manga with our Anime & Manga Quiz! Immerse yourself in the realm of vibrant characters, captivating storylines, and unique art styles as you put your knowledge to the test. From popular series to hidden gems, iconic moments to memorable quotes, this quiz will challenge your understanding of the rich and diverse world of Anime & Manga. Test your familiarity with beloved characters, explore different genres, and discover new series to add to your watchlist. Whether you\'re a seasoned otaku or just getting started, our Anime & Manga Quiz is designed to entertain and engage fans of all levels. Get ready to unleash your inner fan and prove your expertise in the captivating world of Anime & Manga!',
    null, user1.id)

Quiz26 = new Quiz('Cartoon & Animation Quiz',
    'https://opentdb.com/api.php?amount=15&category=32&difficulty=medium&type=multiple',
    15,
    ['Entertainment', 'Animation'],
    user1.name,
    new Date("2023-02-05").toLocaleDateString("de-DE"),
    'Embark on a delightful adventure into the world of Cartoons & Animation with our Cartoon & Animation Quiz! Journey through a nostalgic realm filled with beloved characters, colorful animation, and memorable moments. Test your knowledge of classic cartoons and modern animated series as you dive into questions about iconic characters, animated films, and animated TV shows. From timeless classics to contemporary favorites, this quiz will challenge your expertise in the world of animated entertainment. Whether you\'re a fan of hand-drawn animation, computer-generated imagery, or stop-motion animation, this quiz is designed to entertain and engage fans of all ages. So, gather your favorite animated characters and get ready to put your cartoon knowledge to the test in our thrilling Cartoon & Animation Quiz!',
    null, user1.id)

module.exports.users = [user1, user2]
module.exports.quizes = [Quiz1, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7, Quiz8, Quiz9, Quiz10, Quiz11, Quiz12, Quiz13, Quiz14, Quiz15, Quiz16, Quiz17, Quiz18, Quiz19, Quiz20, Quiz21, Quiz22, Quiz23, Quiz24, Quiz25, Quiz26]
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