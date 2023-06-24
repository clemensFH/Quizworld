/*const quizzes = [
    {
        id: 1,
        name: 'Movie Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple',
        numQuestions: 10,
        category: ['Entertainment', 'Film'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Test your knowledge of films with our Movie Quiz! From classic masterpieces to blockbuster hits, this quiz will challenge your memory of iconic scenes, famous actors, and captivating storylines. Put your cinematic expertise to the test and see if you can score high in this ultimate movie trivia challenge! Lights, camera, action!'
    },
    {
        id: 2,
        name: 'Sport Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=15&category=21&difficulty=medium&type=multiple',
        numQuestions: 15,
        category: ['Sports'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Are you a sports enthusiast? Take on the exciting Sports Quiz and put your sports knowledge to the test! Explore the thrilling world of sports with questions about popular games, legendary athletes, historic moments, and iconic sports venues. From football and basketball to tennis and soccer, this quiz covers a variety of sports disciplines. Challenge yourself and see if you can score big in this action-packed quiz. Get ready to showcase your sports expertise and prove that you\'re a true sports aficionado!'
    },
    {
        id: 3,
        name: 'Mythology Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=13&category=20&difficulty=medium&type=multiple',
        numQuestions: 13,
        category: ['Mythology'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Test your knowledge of ancient myths and legends with this captivating Mythology Quiz! Dive into the enchanting world of gods, goddesses, heroes, and creatures from various mythological traditions. From Greek and Roman mythology to Norse and Egyptian myths, this quiz will challenge you with intriguing questions about mythical beings, epic tales, and the symbolism behind these captivating stories. Unleash your inner mythologist and embark on a journey through ancient folklore. Are you ready to unlock the secrets of the gods and goddesses?'
    },
    {
        id: 4,
        name: 'Book Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=15&category=10&difficulty=medium&type=multiple',
        numQuestions: 15,
        category: ['Entertainment', 'Books'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Test your knowledge with our General Knowledge Quiz! From history to science, geography to arts, this quiz covers a wide range of topics. Challenge yourself with intriguing questions and discover fascinating facts. Are you ready to show off your well-rounded knowledge? '
    },
    {
        id: 5,
        name: 'General Knowledge [Hard]',
        apiUrl: 'https://opentdb.com/api.php?amount=14&category=9&difficulty=hard&type=multiple',
        numQuestions: 15,
        category: ['General Knowledge'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Test your knowledge with our General Knowledge Quiz! From history to science, geography to arts, this quiz covers a wide range of topics. Challenge yourself with intriguing questions and discover fascinating facts. Are you ready to show off your well-rounded knowledge? '
    },
    {
        id: 6,
        name: 'Music Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=15&category=12&difficulty=medium&type=multiple',
        numQuestions: 15,
        category: ['Entertainment', 'Music'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Get ready to rock and roll with our Music Quiz! Tune in and test your knowledge of music genres, legendary artists, iconic albums, and chart-topping hits. From classical compositions to modern-day masterpieces, this quiz will put your musical prowess to the test. Challenge yourself and see if you can hit all the right notes in this ultimate music trivia challenge. So grab your headphones, turn up the volume, and get ready to show off your music knowledge!'
    },
    {
        id: 7,
        name: 'Musical & Theater Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=15&category=13&difficulty=medium&type=multiple',
        numQuestions: 15,
        category: ['Entertainment', 'Theater'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Discover the magic of the stage with our Musical & Theater Quiz! Test your knowledge of Broadway hits, iconic performances, and the enchanting world of musicals. From show tunes to stage legends, this quiz will challenge your theater expertise. Are you ready to take a bow and show off your musical and theater know-how? Let the curtain rise on this exciting quiz!'
    },
    {
        id: 8,
        name: 'Television Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple',
        numQuestions: 10,
        category: ['Entertainment'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Dive into the world of television with our Television Quiz! Put your TV knowledge to the test and answer questions about popular shows, memorable characters, and iconic moments. From sitcoms to dramas, reality TV to game shows, this quiz covers a wide range of television genres. Get ready to channel-surf through trivia and prove that you\'re the ultimate TV aficionado. Grab your remote and let the quiz begin!'
    },
    {
        id: 9,
        name: 'Video Games Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=18&category=15&difficulty=medium&type=multiple',
        numQuestions: 18,
        category: ['Games'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Get ready to level up with our Video Games Quiz! Test your knowledge of the gaming world with questions about popular video games, iconic characters, gaming history, and more. From classic arcade games to modern console masterpieces, this quiz will challenge your gaming prowess and put your skills to the test. Whether you\'re a casual gamer or a dedicated enthusiast, this quiz is sure to bring back memories and ignite your passion for gaming. Grab your controller, press start, and let the gaming trivia adventure begin!'
    },
    {
        id: 10,
        name: 'Board Games Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=9&category=16&difficulty=medium&type=multiple',
        numQuestions: 9,
        category: ['Games'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Calling all board game enthusiasts! Join us for the Board Games Quiz and put your knowledge to the test. From classic family favorites to strategic masterpieces, this quiz covers a wide range of board game genres. Challenge yourself with questions about game mechanics, famous board game designers, and memorable board game moments. Whether you\'re a seasoned player or just starting your board game journey, this quiz will entertain and challenge you. Roll the dice, draw a card, and see if you can conquer the board games quiz leaderboard. Let the games begin!'
    },
    {
        id: 11,
        name: 'Sience & Nature Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=16&category=17&difficulty=medium&type=multiple',
        numQuestions: 16,
        category: ['Science', 'Nature'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Explore the wonders of the natural world with our Science & Nature Quiz! From fascinating discoveries to mind-boggling phenomena, this quiz will test your knowledge of scientific facts, natural processes, and the mysteries of the universe. Dive into topics like biology, physics, astronomy, and environmental science as you answer thought-provoking questions. Whether you\'re a science enthusiast or simply curious about the world around us, this quiz is a journey of discovery. Get ready to uncover the secrets of nature and challenge yourself with this engaging Science & Nature Quiz!'
    },
    {
        id: 12,
        name: 'Computer Science Quiz [Hard]',
        apiUrl: 'https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple',
        numQuestions: 20,
        category: ['Science', 'Technology'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Dive into the exciting world of Computer Science with our Computer Science Quiz! Test your knowledge of algorithms, programming languages, data structures, and more. From the basics of computer hardware to advanced concepts in software engineering, this quiz will challenge your understanding of the digital realm. Whether you\'re a coding enthusiast, a tech professional, or simply curious about the inner workings of computers, this quiz is designed to engage and educate. Get ready to put your computer science skills to the test and discover the fascinating world of technology with our Computer Science Quiz!'
    },
    {
        id: 13,
        name: 'Mathematics Quiz [Hard]',
        apiUrl: 'https://opentdb.com/api.php?amount=18&category=19&difficulty=hard&type=multiple',
        numQuestions: 18,
        category: ['Science', 'Mathematics'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Embark on a mathematical journey with our Mathematics Quiz! Explore the fascinating realm of numbers, equations, and mathematical concepts. From arithmetic and algebra to geometry and calculus, this quiz will put your mathematical skills to the test. Challenge yourself with problem-solving questions, mathematical puzzles, and thought-provoking concepts. Whether you\'re a math enthusiast, a student, or simply curious about the beauty of numbers, this quiz is designed to engage and inspire. Get ready to unlock the mysteries of mathematics and discover the joy of solving mathematical challenges with our Mathematics Quiz!'
    },
    {
        id: 14,
        name: 'Geography Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=14&category=22&difficulty=medium&type=multiple',
        numQuestions: 14,
        category: ['Geography'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Explore the diverse wonders of our world with our Geography Quiz! Travel across continents, navigate through countries, and dive into the depths of geographical knowledge. Test your understanding of landscapes, capitals, landmarks, and cultural diversity. From majestic mountains and sprawling deserts to vibrant cities and serene waterways, this quiz will challenge your geographical expertise. Whether you\'re an avid traveler, a geography enthusiast, or simply curious about the world around us, this quiz will take you on a global adventure. Get ready to expand your horizons, broaden your knowledge, and become a true geography explorer with our captivating Geography Quiz!'
    },
    {
        id: 15,
        name: 'History Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=15&category=23&difficulty=medium&type=multiple',
        numQuestions: 15,
        category: ['History'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Explore the depths of human history with our History Quiz! Test your knowledge of significant events, influential figures, and pivotal moments that have shaped our world. Uncover ancient civilizations, unravel the intrigues of medieval kingdoms, and witness major wars and revolutions. From the Renaissance to the Space Age, challenge yourself with thought-provoking questions and broaden your understanding of our past. Join us for the History Quiz and become a true history aficionado!'
    },
    {
        id: 16,
        name: 'Politic Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple',
        numQuestions: 10,
        category: ['Politics'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Explore the captivating world of politics with our Politics Quiz! Test your knowledge of political systems, ideologies, and key players in this engaging quiz. From global affairs to local governance, dive into the complexities of democracy, international relations, and policy-making. Challenge yourself with thought-provoking questions and gain a deeper understanding of the political landscape. Whether you\'re a seasoned political enthusiast or just starting to explore this field, our Politics Quiz is your gateway to expanding your political knowledge. Get ready to embark on an exciting journey that will broaden your perspectives and ignite your curiosity about the fascinating realm of politics!'
    },
    {
        id: 17,
        name: 'Art Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=12&category=25&difficulty=medium&type=multiple',
        numQuestions: 12,
        category: ['Art'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Explore the captivating world of art with our Art Quiz! Test your knowledge of famous artworks, renowned artists, and artistic movements. From classical masterpieces to contemporary creations, this quiz will challenge and expand your understanding of art. Immerse yourself in the beauty, symbolism, and cultural significance of art and discover new dimensions of artistic appreciation. Are you ready to showcase your art knowledge? Let the Art Quiz be your guide!'
    },
    {
        id: 18,
        name: 'Celebrities Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=13&category=26&difficulty=medium&type=multiple',
        numQuestions: 13,
        category: ['Entertainment'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Step into the glamorous world of celebrities with our Celebrities Quiz! Test your knowledge of famous actors, musicians, athletes, and public figures. From Hollywood icons to global superstars, this quiz will challenge your celebrity expertise. Delve into their careers, personal lives, and noteworthy achievements as you answer intriguing questions about the world of fame and fortune. Are you ready to prove that you\'re a true celebrity aficionado? Get ready for the ultimate star-studded challenge with the Celebrities Quiz!'
    },
    {
        id: 19,
        name: 'Animals Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=14&category=27&difficulty=medium&type=multiple',
        numQuestions: 14,
        category: ['Animals', 'Nature'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Embark on a wild adventure with our Animals Quiz! Test your knowledge of the fascinating animal kingdom and explore the diverse creatures that inhabit our planet. From majestic mammals to incredible insects, this quiz will challenge your understanding of animal species, habitats, behaviors, and unique adaptations. Dive deep into the animal world and answer intriguing questions about the wonders of nature. Are you ready to showcase your animal expertise? Get ready for an exciting journey through the animal kingdom with the Animals Quiz!'
    },
    {
        id: 20,
        name: 'Vehicles Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=12&category=28&difficulty=medium&type=multiple',
        numQuestions: 12,
        category: ['Technology'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Rev up your engines and get ready for our Vehicles Quiz! Explore the exciting world of automobiles, aircraft, ships, and more as you test your knowledge of vehicles from various eras and categories. From classic cars to modern marvels, this quiz will challenge your understanding of vehicle types, technologies, and iconic models. Buckle up and answer intriguing questions about engines, designs, and the evolution of transportation. Whether you\'re a car enthusiast, aviation aficionado, or maritime lover, this quiz will put your vehicle knowledge to the test. Start your engines and get ready for an exhilarating ride with the Vehicles Quiz!'
    },
    {
        id: 21,
        name: 'Comics Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=10&category=29&difficulty=medium&type=multiple',
        numQuestions: 10,
        category: ['Entertainment', 'Books', 'Animation'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Step into the colorful world of comics with our Comics Quiz! Dive into the captivating realm of superheroes, villains, and epic storylines as you test your knowledge of comic books and graphic novels. From Marvel to DC and beyond, this quiz will challenge your familiarity with iconic characters, memorable arcs, and the artists and writers who bring these fantastical worlds to life. Unleash your inner comic book aficionado and see if you can answer intriguing questions about origins, powers, and the ever-expanding comic book universes. Join the adventure and prove that you\'re a true fan with our action-packed Comics Quiz!'
    },
    {
        id: 22,
        name: 'Gadgets Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=15&category=30&difficulty=medium&type=multiple',
        numQuestions: 15,
        category: ['Science', 'Technology'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Discover the fascinating world of gadgets with our Gadgets Quiz! Explore the realm of innovative technology, cutting-edge devices, and futuristic advancements as you put your knowledge to the test. From smartphones to smart home devices, wearables to virtual reality, this quiz will challenge your understanding of the latest gadgets that shape our modern lives. Dive into the realm of tech specifications, features, and the companies behind these revolutionary creations. Whether you\'re a tech enthusiast or simply curious about the latest trends, our Gadgets Quiz will push your knowledge to new heights. Get ready to geek out and show off your expertise in the world of gadgets!'
    },
    {
        id: 23,
        name: 'Anime & Manga Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=15&category=31&difficulty=medium&type=multiple',
        numQuestions: 10,
        category: ['Entertainment', 'Animation'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Embark on a captivating journey through the world of Anime & Manga with our Anime & Manga Quiz! Immerse yourself in the realm of vibrant characters, captivating storylines, and unique art styles as you put your knowledge to the test. From popular series to hidden gems, iconic moments to memorable quotes, this quiz will challenge your understanding of the rich and diverse world of Anime & Manga. Test your familiarity with beloved characters, explore different genres, and discover new series to add to your watchlist. Whether you\'re a seasoned otaku or just getting started, our Anime & Manga Quiz is designed to entertain and engage fans of all levels. Get ready to unleash your inner fan and prove your expertise in the captivating world of Anime & Manga!'
    },
    {
        id: 24,
        name: 'Cartoon & Animation Quiz',
        apiUrl: 'https://opentdb.com/api.php?amount=15&category=32&difficulty=medium&type=multiple',
        numQuestions: 15,
        category: ['Entertainment', 'Animation'],
        creator: 'Quizworld',
        date: new Date(),
        description: 'Embark on a delightful adventure into the world of Cartoons & Animation with our Cartoon & Animation Quiz! Journey through a nostalgic realm filled with beloved characters, colorful animation, and memorable moments. Test your knowledge of classic cartoons and modern animated series as you dive into questions about iconic characters, animated films, and animated TV shows. From timeless classics to contemporary favorites, this quiz will challenge your expertise in the world of animated entertainment. Whether you\'re a fan of hand-drawn animation, computer-generated imagery, or stop-motion animation, this quiz is designed to entertain and engage fans of all ages. So, gather your favorite animated characters and get ready to put your cartoon knowledge to the test in our thrilling Cartoon & Animation Quiz!'
    }
    // Add more quizzes as needed
];*/

const { Quiz } = require('../models');

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const SCORE_POINTS = 100;
let maxQuestions = 0;

const startGame = (quiz) => {
    questionCounter = 0;
    score = 0;
    maxQuestions = quiz.numQuestions;
    availableQuestions = [];
    fetchQuestions(quiz);
};

async function fetchQuestions(quiz) {
    try {
        const response = await fetch(quiz.apiUrl);
        const data = await response.json();
        availableQuestions = data.results.map((questionData) => {
            return {
                question: he.decode(questionData.question),
                choices: shuffleArray([
                    he.decode(questionData.correct_answer),
                    ...questionData.incorrect_answers.map((answer) => he.decode(answer))
                ]),
                answer: questionData.correct_answer
            };
        });
        startNextQuestion();
    } catch (error) {
        console.error('Failed to fetch questions:', error);
    }
}

const startNextQuestion = () => {
    if (questionCounter >= maxQuestions) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice, index) => {
        choice.innerText = currentQuestion.choices[index];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            startNextQuestion();
        }, 1000);
    });
});

const incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Start the game with the first quiz
startGame(Quiz[3]);
