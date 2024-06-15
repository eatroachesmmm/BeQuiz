// All answer options

const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const option4 = document.querySelector('.option4')


// All our options
const optionEllements = document.querySelectorAll('.section-one-btn');

      
const question = document.querySelector('.section-question > h3');
const numberOfQuestion = document.getElementById('number-of-question');
const numberOfAllQuestions = document.getElementById('number-of-all-question');


let indexOfQuestion  = 0;//индекс текущего вопроса
let indexOfPage = 0;//индекс страницы

const btnNext = document.getElementById('btn-next')


let score = 0;//Итоговый результат викторины

const correctAnswer = document.getElementById('correct-answer')
const numberOfAllQuestion2 = document.getElementById('number-of-all-question-2')
const btnTryAgain = document.getElementById('btn-try-again')
const btnMainMenu = document.getElementById('btn-main-menu')

let arr1 = [ 
    { 
    question:'What is the name of the first Hollywood color movie?', 
    options:[ 
        'The Toll of the Sea', 
        'The Green Mile', 
        'Sunset Blvd', 
        'Singin\' in the Rain', 
    ], 
    rightAnswer:0 
    }, 
    { 
    question:'Where was the first cinema opened?', 
    options:[ 
            'New York',
            'Paris', 
            'Vienna', 
            'Hong Kong', 
    ], 
    rightAnswer:1
    }, 
    { 
        question:'How many seconds does it take to go through 24 frames?', 
        options:[ 
                '2 seconds', 
                '10 seconds', 
                '1 second', 
                'less than 1 second', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'What was the longest Soviet film to win the Best Foreign Language Film Award?', 
        options:[ 
                'Nochnye zabavy', 
                'Shurik', 
                'Blood for blood', 
                'War and Peace', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'When was the Oscars award ceremony instituted?', 
        options:[ 
                '1929', 
                '1960', 
                'В990', 
                '2000', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'What woman did Sherlock Holmes from the British Sherlock series was in love with?', 
        options:[ 
                'Mary Morstan', 
                'Irene Adler', 
                'Mrs. Hudson', 
                'We was not in love', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'What is the highest-grossing movie? (actual in 2022)', 
        options:[ 
                'Spider-Man: No Way Home', 
                'Avengers: Endgame', 
                'Avatar', 
                'Titanic', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Who was the male lead in Titanic 1997?', 
        options:[ 
                'Johnny Depp', 
                'Mark Wahlberg', 
                'Denzel Washington', 
                'Leonardo DiCaprio', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'What were the names of the two main villains in Home Alone 1990?', 
        options:[ 
                'Harry and Marv', 
                'John and Brad', 
                'Peter and Stanley', 
                'Max and Alex', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'In which movie did two actors win an Oscar for playing the same character?', 
        options:[ 
                'Fast & Furious', 
                'The Godfather: Part II', 
                'Good Will Hunting', 
                'Titanic', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'What is the name of Bruce Lee\'s teacher after whom the film was named?', 
        options:[ 
                'Xiang', 
                'Woo Ping Yuen', 
                'Ip Man', 
                'Liu Kang', 
        ], 
        rightAnswer:2 
    }, 
    { 
        question:'Who founded cinema?', 
        options:[ 
                'Ridley Scott', 
                'Walt Disney', 
                'There is no information', 
                'The Lumière brothers', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'What spell killed Lord Voldemort?', 
        options:[ 
                'Avada Kedavra',
                'Expelliarmus', 
                'Expecto Patronum',  
                'Accio', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'What breed was Hachiko dog?', 
        options:[ 
                'Hachiko',
                'Akita Inu', 
                'Shikoku', 
                'Bulldog', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'How long is one hour on Miller\'s planet? (Interstellar)', 
        options:[  
                '8 seconds', 
                '1 hour',
                '7 years', 
                '20 years', 
        ], 
        rightAnswer:2
    }, 
    {
        question:'How many Infinity Stones are in the Marvel Universe?', 
        options:[ 
                '1', 
                '5', 
                '8', 
                '6', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'What is Captain America\'s shield made of?', 
        options:[
                'Vibranium', 
                'Adamantium', 
                'Promethium', 
                'Carbonadium', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'What was the code from the Matrix based on?', 
        options:[ 
                'Pad thai recipe', 
                'Sushi recipe', 
                'War and Peace', 
                'Random symbols', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'Who actually drew Rose in Titanic?', 
        options:[ 
                'Billy Zane', 
                'Leonardo DiCaprio', 
                'James Cameron', 
                'Kathy Bates', 
        ], 
        rightAnswer:2 
    }, 
    { 
        question:'Where was the Lord of the Rings trilogy filmed?', 
        options:[ 
                'Ireland',  
                'Australia', 
                'New Zeland',
                'Iceland',
        ], 
        rightAnswer:3
    }, 
    { 
        question:'The first black person to win an Oscar?', 
        options:[ 
                'Hattie McDaniel', 
                'Sidney Poitier', 
                'Dorothy Dandridge', 
                'Will Smith', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'What color is Freddy Krueger\'s sweater?', 
        options:[ 
                'Red and black', 
                'Red and green',
                'Orange and green',  
                'Orange and brown', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'What camp did Jason from Friday the 13th attend to?', 
        options:[ 
                '«Kyrgyz lake»', 
                '«Topaz lake»', 
                '«Crystal Lake»', 
                '«Crystal river»', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Who owns a cat from The Godfather 1972?', 
        options:[ 
                'Marlon Brando', 
                'Diane Keaton', 
                'Al Pacino', 
                'No one', 
        ], 
        rightAnswer:3 
    }, 
    { 
        question:'What animals made the Velociraptor noise in Jurassic Park?', 
        options:[ 
                'Turtles', 
                'Frogs', 
                'Lizards', 
                'Crocodiles', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'What is the highest-grossing movie in 2005?', 
        options:[ 
                '«War of the Worlds»', 
                '«Harry Potter and the Goblet of Fire»', 
                '«Star Wars: Revenge of the Sith (Episode III)»', 
                '«Chronicles of Narnia: The Lion, the Witch and the Wardrobe»', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'Which actress has won the most Oscars? (actual in 2022)', 
        options:[  
                'Meryl Streep', 
                'Ingrid Bergman', 
                'Katharine Hepburn',
                'Elizabeth Taylor', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'What movie was NOT Jackie Chan in?', 
        options:[ 
                'Drunken Master', 
                'Police Story', 
                'Who Am I', 
                'Once Upon a Time in China', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'How many Oscars did Leonardo DiCaprio win?', 
        options:[ 
                '1', 
                '2', 
                '4', 
                'None',
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Who is the director of the movie "Jaws" 1975?', 
        options:[  
                'Woody Allen', 
                'Steven Spielberg',
                'Martin Scorsese', 
                'Tim Burton', 
        ], 
        rightAnswer:1
    }, 
 
]


const questions = [];

for(i = 0; i < 10; i++){
    let r = Math.floor(Math.random()*arr1.length)
    questions.push(arr1[r])
    arr1.splice(r, 1)
}           

const tracker = document.querySelector('.tracker')

numberOfAllQuestions.innerHTML = questions.length;// выводим кол-во всех вопросов

let load = () => {
    question.innerHTML = questions[indexOfQuestion].question; // сам вопрос
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1 // установка номера текущей старницы

    indexOfPage++ //увеличение индекса страницы
};
let completedAnswers = []

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random () * questions.length);
    let hitDuplicate = false;

    if(indexOfPage == questions.length){
        quizOver();
    }else {
        if(completedAnswers.length > 0){
            completedAnswers.forEach(item => {
                if(item == randomNumber){
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate){
                randomQuestion()
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        };
        if(completedAnswers == 0){
            indexOfQuestion = randomNumber;
            load();
        }
    };
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id==questions[indexOfQuestion].rightAnswer){
        el.target.classList.add('right');
        updateAnswerTracker('right');
        score++;
    }else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disapledOptions();

}

const disapledOptions = () => {
    optionEllements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
            item.classList.add('right')
        }
    })
}

const enableOptions = () => {
    optionEllements.forEach(item => {
        item.classList.remove('disabled', 'right', 'wrong');
    })
};

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        tracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {
    tracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
    if(!optionEllements[0].classList.contains('disabled')){
        alert ('Please choose an answer!')
    }else {
        randomQuestion()
        enableOptions()
    }
};




btnNext.addEventListener('click' , validate);

for(option of optionEllements){
    option.addEventListener("click" , e => checkAnswer(e));

}
//заметка 
const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    localStorage.setItem('result_cinema', score)
    correctAnswer.innerHTML = score;
    numberOfAllQuestion2.innerHTML = questions.length;
}

const tryAgain = () => {
    window.onbeforeprint
    window.location.reload()
}
const MainMenu = () =>{
    window.location.href = '../pages/categories.html'
}
btnTryAgain.addEventListener('click' , tryAgain);
btnMainMenu.addEventListener('click' , MainMenu);

window.addEventListener("load" , () => {
    randomQuestion();
    answerTracker();
})

