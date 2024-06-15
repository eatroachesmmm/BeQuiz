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
        question:'What are anime and manga fans called?',
        options:[
         'Otaku',
         'Burito',
         'Mangaka',
         'Doujinshi',
        ],
        rightAnswer:0
     },



     {
        question:'What does "Shojo" mean?',
        options:[
         'Romance related anime',
         'Anime for young women',
         'Anime with fight scenes',
         'Character dressed as a samurai',
        ],
        rightAnswer:1
     },



     {
        question:'What is called "Manga"?',
        options:[
         'National Japanese costume',
         'Word in Japanese that means "man"',
         'Comics based on anime',
         'Side story of the main character',
        ],
        rightAnswer:2
     },


     {
        question:'What is the most detailed part of an anime character?',
        options:[
         'Chest',
         'Hair',
         'Lips',
         'Eyes',
        ],
        rightAnswer: 3
     },

     {
        question:'Who did Obito love? (Naruto)',
        options:[
         'Rin',
         'Madara',
         'Tsunade',
         'Kaguya',
        ],
        rightAnswer:0
     },    
    {
        question:'What did Ruyk love? (Death Note)',
        options:[
         'Oranges',
         'Apples',
         'Souls',
         'Chocolate',
        ],
        rightAnswer:1
     },     
     {
        question:'What was "L"\'s age when he was first introduced? (Death Note)',
        options:[
         '18',
         '26',
         '24',
         '21',
        ],
        rightAnswer:2
     },     
     {
        question:'Who killed Baki\'s mother? (Baki the Grappler)',
        options:[
         'Gouki',
         'Kayo',
         'Kaoru',
         'Yujiro',
        ],
        rightAnswer:3
     },     {
        question:'What is the name of Giyuu\'s crow? (Demon Slayer)',
        options:[
         'Kanzaburou',
         'Ukogi',
         'Enmu',
         'Dongurimaru',
        ],
        rightAnswer: 0
     },     {
        question:'What anime won an Oscar? (actual in 2022)',
        options:[
         'Howl\'s Moving Castle',
         'Spirited Away',
         'Children of the Sea',
         'The Wind Rises',
        ],
        rightAnswer: 1
     },     {
        question:'Which year was anime created?',
        options:[
         '1978',
         '1983',
         '1958',
         '1943',
        ],
        rightAnswer:2
     },
     {
        question:'Where was anime created?',
        options:[
         'China',
         'Korea',
         'Vietnam',
         'Japan',
        ],
        rightAnswer:3
     }, {
        question:'What anime has the highest number of episodes?',
        options:[
         'Sazae-san',
         'One piece',
         'Ojarumaru',
         'Doraemon',
        ],
        rightAnswer: 0
     }, {
        question:'How many members are in the Phantom Troupe? (Hunter X Hunter)',
        options:[
         '14',
         '13',
         '12',
         '10',
        ],
        rightAnswer:1
     }, {
        question:'Who is Hayao Miyazaki?',
        options:[
         'Actor',
         'Anime character',
         'Producer',
         'Singer',
        ],
        rightAnswer:2
     }, {
        question:'What is anime?',
        options:[
         'Japanese comedy',
         'Japanese drama',
         'Japanese food',
         'Japanese animation',
        ],
        rightAnswer:3
     }, {
        question:'What is the first anime in the world?',
        options:[
         'Tetsuwan Atom',
         'Bakugan',
         'Avatar',
         'Naruto',
        ],
        rightAnswer:0
     }, {
        question:'Who is considered the father of Manga?',
        options:[
         'Hayao Miyazaki',
         'Osamu Tezuka',
         'Eiichiro Oda',
         'Masashi Kishimoto',
        ],
        rightAnswer:1
     }, {
        question:'What is the highest-grossing anime movie? (actual in 2022)',
        options:[
         'Howl\'s Moving Castle',
         'Spirited Away',
         'Demon Slayer – The Movie: Mugen Train',
         'Your Name',
        ],
        rightAnswer:2
     },

     {
        question:'Who is Naruto\'s main character?',
        options:[
         'Sasuke',
         'Boruto',
         'Sakura',
         'Naruto',
        ],
        rightAnswer:3
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
    localStorage.setItem('result_anime', score)
    correctAnswer.innerHTML = score;
    numberOfAllQuestion2.innerHTML = questions.length;
}

const tryAgain = () => {
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

