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
    constructor(title, category, date, description, creatorID, questions, numberOfQuestions) {
        this.title = title
        this.category = category
        this.date = date
        this.description = description
        this.creatorID = creatorID          // OneToMany
        this.questions = questions      // OneToMany
        this.numberOfQuestions = numberOfQuestions
        this.id = Quiz.idpool
        Quiz.idpool++
    }

    static idpool = 1
}

class QuizworldQuiz {
    constructor(title, apiURL, numQuestions, categories, creator, date, description) {
        this.title = title;
        this.apiURL = apiURL;
        this.numQuestions = numQuestions;
        this.categories = categories;
        this.creator = creator;
        this.date = date;
        this.description = description;
    }
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


user1 = new User("John Wick", "asd123")
user2 = new User("Mia Mahlkova", "123asd")

q1 = new Question("1?", opt1)
q2 = new Question("2?", opt2)
q3 = new Question("3?", opt3)

Quiz1 = new Quiz("Test", ["Science", "Film"], new Date("2023-03-06"), "Best physics quiz",
                    user1.id,  [q1,q2], 2)
Quiz2 = new Quiz("Best", ["Sports"], new Date("2023-02-05"), "Best sports quiz",
    user2.id, [q3,q2], 2)

QuizworldQuiz1 = new QuizworldQuiz('Movie Quiz',
    'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple',
    10,
     ['Entertainment', 'Film'],
    'Quizworld',
     new Date(),
    'Test your knowledge of films with our Movie Quiz! From classic masterpieces to blockbuster hits, this quiz will challenge your memory of iconic scenes, famous actors, and captivating storylines. Put your cinematic expertise to the test and see if you can score high in this ultimate movie trivia challenge! Lights, camera, action!')

QuizworldQuiz2 = new QuizworldQuiz('Sport Quiz',
    'https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple',
    15,
     ['Sports'],
    'Quizworld',
    new Date(),
    'Are you a sports enthusiast? Take on the exciting Sports Quiz and put your sports knowledge to the test! Explore the thrilling world of sports with questions about popular games, legendary athletes, historic moments, and iconic sports venues. From football and basketball to tennis and soccer, this quiz covers a variety of sports disciplines. Challenge yourself and see if you can score big in this action-packed quiz. Get ready to showcase your sports expertise and prove that you\'re a true sports aficionado!')

QuizworldQuiz3 = new QuizworldQuiz('Mythology Quiz',
 'https://opentdb.com/api.php?amount=13&category=20&difficulty=medium&type=multiple',
    13,
    ['Mythology'],
    'Quizworld',
    new Date(),
    'Test your knowledge of ancient myths and legends with this captivating Mythology Quiz! Dive into the enchanting world of gods, goddesses, heroes, and creatures from various mythological traditions. From Greek and Roman mythology to Norse and Egyptian myths, this quiz will challenge you with intriguing questions about mythical beings, epic tales, and the symbolism behind these captivating stories. Unleash your inner mythologist and embark on a journey through ancient folklore. Are you ready to unlock the secrets of the gods and goddesses?')


QuizworldQuiz4 = new QuizworldQuiz('Book Quiz',
    'https://opentdb.com/api.php?amount=15&category=10&difficulty=medium&type=multiple',
    15,
    ['Entertainment', 'Books'],
    'Quizworld',
    new Date(),
    'Test your knowledge with our General Knowledge Quiz! From history to science, geography to arts, this quiz covers a wide range of topics. Challenge yourself with intriguing questions and discover fascinating facts. Are you ready to show off your well-rounded knowledge?')

QuizworldQuiz5 = new QuizworldQuiz('General Knowledge [Hard]',
    'https://opentdb.com/api.php?amount=14&category=9&difficulty=hard&type=multiple',
    15,
    ['General Knowledge'],
    'Quizworld',
    new Date(),
    'Test your knowledge with our General Knowledge Quiz! From history to science, geography to arts, this quiz covers a wide range of topics. Challenge yourself with intriguing questions and discover fascinating facts. Are you ready to show off your well-rounded knowledge? ')

QuizworldQuiz6 = new QuizworldQuiz('Music Quiz',
    'https://opentdb.com/api.php?amount=15&category=12&difficulty=medium&type=multiple',
    15,
    ['Entertainment', 'Music'],
    'Quizworld',
    new Date(),
    'Get ready to rock and roll with our Music Quiz! Tune in and test your knowledge of music genres, legendary artists, iconic albums, and chart-topping hits. From classical compositions to modern-day masterpieces, this quiz will put your musical prowess to the test. Challenge yourself and see if you can hit all the right notes in this ultimate music trivia challenge. So grab your headphones, turn up the volume, and get ready to show off your music knowledge!')

QuizworldQuiz7 = new QuizworldQuiz('Musical & Theater Quiz',
    'https://opentdb.com/api.php?amount=15&category=13&difficulty=medium&type=multiple',
    15,
    ['Entertainment', 'Theater'],
    'Quizworld',
    new Date(),
    'Discover the magic of the stage with our Musical & Theater Quiz! Test your knowledge of Broadway hits, iconic performances, and the enchanting world of musicals. From show tunes to stage legends, this quiz will challenge your theater expertise. Are you ready to take a bow and show off your musical and theater know-how? Let the curtain rise on this exciting quiz!')

QuizworldQuiz8 = new QuizworldQuiz('Television Quiz',
    'https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple',
    10,
    ['Entertainment'],
    'Quizworld',
    new Date(),
    'Dive into the world of television with our Television Quiz! Put your TV knowledge to the test and answer questions about popular shows, memorable characters, and iconic moments. From sitcoms to dramas, reality TV to game shows, this quiz covers a wide range of television genres. Get ready to channel-surf through trivia and prove that you\'re the ultimate TV aficionado. Grab your remote and let the quiz begin!')

QuizworldQuiz9 = new QuizworldQuiz('Video Games Quiz',
    'https://opentdb.com/api.php?amount=18&category=15&difficulty=medium&type=multiple',
    18,
    ['Games'],
    'Quizworld',
    new Date(),
    'Get ready to level up with our Video Games Quiz! Test your knowledge of the gaming world with questions about popular video games, iconic characters, gaming history, and more. From classic arcade games to modern console masterpieces, this quiz will challenge your gaming prowess and put your skills to the test. Whether you\'re a casual gamer or a dedicated enthusiast, this quiz is sure to bring back memories and ignite your passion for gaming. Grab your controller, press start, and let the gaming trivia adventure begin!')

QuizworldQuiz10 = new QuizworldQuiz('Board Games Quiz',
    'https://opentdb.com/api.php?amount=9&category=16&difficulty=medium&type=multiple',
    9,
    ['Games'],
    'Quizworld',
    new Date(),
    'Calling all board game enthusiasts! Join us for the Board Games Quiz and put your knowledge to the test. From classic family favorites to strategic masterpieces, this quiz covers a wide range of board game genres. Challenge yourself with questions about game mechanics, famous board game designers, and memorable board game moments. Whether you\'re a seasoned player or just starting your board game journey, this quiz will entertain and challenge you. Roll the dice, draw a card, and see if you can conquer the board games quiz leaderboard. Let the games begin!')

QuizworldQuiz11 = new QuizworldQuiz('Sience & Nature Quiz',
    'https://opentdb.com/api.php?amount=16&category=17&difficulty=medium&type=multiple',
    16,
    ['Science', 'Nature'],
    'Quizworld',
    new Date(),
    'Explore the wonders of the natural world with our Science & Nature Quiz! From fascinating discoveries to mind-boggling phenomena, this quiz will test your knowledge of scientific facts, natural processes, and the mysteries of the universe. Dive into topics like biology, physics, astronomy, and environmental science as you answer thought-provoking questions. Whether you\'re a science enthusiast or simply curious about the world around us, this quiz is a journey of discovery. Get ready to uncover the secrets of nature and challenge yourself with this engaging Science & Nature Quiz!')

QuizworldQuiz12 = new QuizworldQuiz('Computer Science Quiz [Hard]',
   'https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple',
    20,
    ['Science', 'Technology'],
    'Quizworld',
    new Date(),
    'Dive into the exciting world of Computer Science with our Computer Science Quiz! Test your knowledge of algorithms, programming languages, data structures, and more. From the basics of computer hardware to advanced concepts in software engineering, this quiz will challenge your understanding of the digital realm. Whether you\'re a coding enthusiast, a tech professional, or simply curious about the inner workings of computers, this quiz is designed to engage and educate. Get ready to put your computer science skills to the test and discover the fascinating world of technology with our Computer Science Quiz!')

QuizworldQuiz13 = new QuizworldQuiz('Mathematics Quiz [Hard]',
    'https://opentdb.com/api.php?amount=18&category=19&difficulty=hard&type=multiple',
    18,
    ['Science', 'Mathematics'],
    'Quizworld',
    new Date(),
    'Embark on a mathematical journey with our Mathematics Quiz! Explore the fascinating realm of numbers, equations, and mathematical concepts. From arithmetic and algebra to geometry and calculus, this quiz will put your mathematical skills to the test. Challenge yourself with problem-solving questions, mathematical puzzles, and thought-provoking concepts. Whether you\'re a math enthusiast, a student, or simply curious about the beauty of numbers, this quiz is designed to engage and inspire. Get ready to unlock the mysteries of mathematics and discover the joy of solving mathematical challenges with our Mathematics Quiz!')

QuizworldQuiz14 = new QuizworldQuiz('Geography Quiz',
    'https://opentdb.com/api.php?amount=14&category=22&difficulty=medium&type=multiple',
    14,
    ['Geography'],
    'Quizworld',
    new Date(),
    'Explore the diverse wonders of our world with our Geography Quiz! Travel across continents, navigate through countries, and dive into the depths of geographical knowledge. Test your understanding of landscapes, capitals, landmarks, and cultural diversity. From majestic mountains and sprawling deserts to vibrant cities and serene waterways, this quiz will challenge your geographical expertise. Whether you\'re an avid traveler, a geography enthusiast, or simply curious about the world around us, this quiz will take you on a global adventure. Get ready to expand your horizons, broaden your knowledge, and become a true geography explorer with our captivating Geography Quiz!')

QuizworldQuiz15 = new QuizworldQuiz('History Quiz',
    'https://opentdb.com/api.php?amount=15&category=23&difficulty=medium&type=multiple',
    15,
    ['History'],
    'Quizworld',
    new Date(),
    'Explore the depths of human history with our History Quiz! Test your knowledge of significant events, influential figures, and pivotal moments that have shaped our world. Uncover ancient civilizations, unravel the intrigues of medieval kingdoms, and witness major wars and revolutions. From the Renaissance to the Space Age, challenge yourself with thought-provoking questions and broaden your understanding of our past. Join us for the History Quiz and become a true history aficionado!')

QuizworldQuiz16 = new QuizworldQuiz('Politic Quiz',
    'https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple',
    10,
    ['Politics'],
    'Quizworld',
    new Date(),
    'Explore the captivating world of politics with our Politics Quiz! Test your knowledge of political systems, ideologies, and key players in this engaging quiz. From global affairs to local governance, dive into the complexities of democracy, international relations, and policy-making. Challenge yourself with thought-provoking questions and gain a deeper understanding of the political landscape. Whether you\'re a seasoned political enthusiast or just starting to explore this field, our Politics Quiz is your gateway to expanding your political knowledge. Get ready to embark on an exciting journey that will broaden your perspectives and ignite your curiosity about the fascinating realm of politics!')

QuizworldQuiz17 = new QuizworldQuiz('Art Quiz',
    'https://opentdb.com/api.php?amount=12&category=25&difficulty=medium&type=multiple',
    12,
    ['Art'],
    'Quizworld',
    new Date(),
    'Explore the captivating world of art with our Art Quiz! Test your knowledge of famous artworks, renowned artists, and artistic movements. From classical masterpieces to contemporary creations, this quiz will challenge and expand your understanding of art. Immerse yourself in the beauty, symbolism, and cultural significance of art and discover new dimensions of artistic appreciation. Are you ready to showcase your art knowledge? Let the Art Quiz be your guide!')

QuizworldQuiz18 = new QuizworldQuiz('Celebrities Quiz',
    'https://opentdb.com/api.php?amount=13&category=26&difficulty=medium&type=multiple',
    13,
    ['Entertainment'],
    'Quizworld',
    new Date(),
    'Step into the glamorous world of celebrities with our Celebrities Quiz! Test your knowledge of famous actors, musicians, athletes, and public figures. From Hollywood icons to global superstars, this quiz will challenge your celebrity expertise. Delve into their careers, personal lives, and noteworthy achievements as you answer intriguing questions about the world of fame and fortune. Are you ready to prove that you\'re a true celebrity aficionado? Get ready for the ultimate star-studded challenge with the Celebrities Quiz!')

QuizworldQuiz19 = new QuizworldQuiz('Animals Quiz',
    'https://opentdb.com/api.php?amount=14&category=27&difficulty=medium&type=multiple',
    14,
    ['Animals', 'Nature'],
    'Quizworld',
    new Date(),
    'Embark on a wild adventure with our Animals Quiz! Test your knowledge of the fascinating animal kingdom and explore the diverse creatures that inhabit our planet. From majestic mammals to incredible insects, this quiz will challenge your understanding of animal species, habitats, behaviors, and unique adaptations. Dive deep into the animal world and answer intriguing questions about the wonders of nature. Are you ready to showcase your animal expertise? Get ready for an exciting journey through the animal kingdom with the Animals Quiz!')

QuizworldQuiz20 = new QuizworldQuiz('Vehicles Quiz',
    'https://opentdb.com/api.php?amount=12&category=28&difficulty=medium&type=multiple',
    12,
    ['Technology'],
    'Quizworld',
    new Date(),
    'Rev up your engines and get ready for our Vehicles Quiz! Explore the exciting world of automobiles, aircraft, ships, and more as you test your knowledge of vehicles from various eras and categories. From classic cars to modern marvels, this quiz will challenge your understanding of vehicle types, technologies, and iconic models. Buckle up and answer intriguing questions about engines, designs, and the evolution of transportation. Whether you\'re a car enthusiast, aviation aficionado, or maritime lover, this quiz will put your vehicle knowledge to the test. Start your engines and get ready for an exhilarating ride with the Vehicles Quiz!')

QuizworldQuiz21 = new QuizworldQuiz('Comics Quiz',
    'https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple',
    10,
    ['Entertainment', 'Books', 'Animation'],
    'Quizworld',
    new Date(),
    'Step into the colorful world of comics with our Comics Quiz! Dive into the captivating realm of superheroes, villains, and epic storylines as you test your knowledge of comic books and graphic novels. From Marvel to DC and beyond, this quiz will challenge your familiarity with iconic characters, memorable arcs, and the artists and writers who bring these fantastical worlds to life. Unleash your inner comic book aficionado and see if you can answer intriguing questions about origins, powers, and the ever-expanding comic book universes. Join the adventure and prove that you\'re a true fan with our action-packed Comics Quiz!')

QuizworldQuiz22 = new QuizworldQuiz('Gadgets Quiz',
    'https://opentdb.com/api.php?amount=15&category=30&difficulty=medium&type=multiple',
    15,
    ['Science', 'Technology'],
    'Quizworld',
    new Date(),
    'Discover the fascinating world of gadgets with our Gadgets Quiz! Explore the realm of innovative technology, cutting-edge devices, and futuristic advancements as you put your knowledge to the test. From smartphones to smart home devices, wearables to virtual reality, this quiz will challenge your understanding of the latest gadgets that shape our modern lives. Dive into the realm of tech specifications, features, and the companies behind these revolutionary creations. Whether you\'re a tech enthusiast or simply curious about the latest trends, our Gadgets Quiz will push your knowledge to new heights. Get ready to geek out and show off your expertise in the world of gadgets!')

QuizworldQuiz23 = new QuizworldQuiz('Anime & Manga Quiz',
    'https://opentdb.com/api.php?amount=15&category=31&difficulty=medium&type=multiple',
    10,
    ['Entertainment', 'Animation'],
    'Quizworld',
    new Date(),
    'Embark on a captivating journey through the world of Anime & Manga with our Anime & Manga Quiz! Immerse yourself in the realm of vibrant characters, captivating storylines, and unique art styles as you put your knowledge to the test. From popular series to hidden gems, iconic moments to memorable quotes, this quiz will challenge your understanding of the rich and diverse world of Anime & Manga. Test your familiarity with beloved characters, explore different genres, and discover new series to add to your watchlist. Whether you\'re a seasoned otaku or just getting started, our Anime & Manga Quiz is designed to entertain and engage fans of all levels. Get ready to unleash your inner fan and prove your expertise in the captivating world of Anime & Manga!')

QuizworldQuiz24 = new QuizworldQuiz('Cartoon & Animation Quiz',
    'https://opentdb.com/api.php?amount=15&category=32&difficulty=medium&type=multiple',
    15,
    ['Entertainment', 'Animation'],
    'Quizworld',
    new Date(),
    'Embark on a delightful adventure into the world of Cartoons & Animation with our Cartoon & Animation Quiz! Journey through a nostalgic realm filled with beloved characters, colorful animation, and memorable moments. Test your knowledge of classic cartoons and modern animated series as you dive into questions about iconic characters, animated films, and animated TV shows. From timeless classics to contemporary favorites, this quiz will challenge your expertise in the world of animated entertainment. Whether you\'re a fan of hand-drawn animation, computer-generated imagery, or stop-motion animation, this quiz is designed to entertain and engage fans of all ages. So, gather your favorite animated characters and get ready to put your cartoon knowledge to the test in our thrilling Cartoon & Animation Quiz!')



module.exports.users = [user1, user2]
module.exports.quizes = [Quiz1, Quiz2]
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