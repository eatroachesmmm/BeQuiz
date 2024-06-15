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
        question:'In which game was the Easter egg first discovered?',
        options:[
        'Adventure',
         'Mario',
         'Minecraft',
         'Tetris',
        ],
        rightAnswer:0
     },
     {
        question:'Which studio is NOT a gaming studio?',
        options:[
         'Konami',
         'Sourcebits',
         'Bandai Namco',
         'Microsoft Studios',
        ],
        rightAnswer:1
     },
     {
        question:'What game market makes the most money?',
        options:[
         'PC games market',
         'VR games market',
         'Mobile games market',
         'Console games market',
        ],
        rightAnswer:2
     },
     {
        question:'What game is the origin of Soulslike genre?',
        options:[
         'Hollow Knight',
         'Lost Soul',
         'Dungeon Souls',
         'Dark Souls',
        ],
        rightAnswer:3
     },
     {
        question:'What does FPS mean?',
        options:[
            'Frames Per Second',
         'Feet Per Second',
         'Forks Per Second',
         'Fun Per Second',
        ],
        rightAnswer:0
     },
     {
        question:'Which of the following is NOT a game engine?',
        options:[
            'WordPress',
         'Source',
         'Unreal Engine',
         'RenPy',
        ],
        rightAnswer:1
     },
     {
        question:'What game is the origin of Counter Strike?',
        options:[
         'Gunman',
         'Sniper Elite',
         'Half Life',
         'DOOM',
        ],
        rightAnswer:2
     },
     {
        question:'Which of the following is an MMORPG?',
        options:[
         'Dota 2',
         'Valorant',
         'Factorio',
         'Lineage 2',
        ],
        rightAnswer:3
     },
     {
        question:'Which of the following is a Rhythm game?',
        options:[
        'Osu!',
         'Geometry Dash',
         'Black Desert',
         'Far Cry 3',
        ],
        rightAnswer:0
     },
     {
        question:'Which video game has a film based on it? (actual in 2022)',
        options:[
         'Counter Strike',
         'Warcraft',
         'League Of legends',
         'Valorant',
        ],
        rightAnswer:1
     },
     {
      question:'What inspired the creation of a character named Pac-Man?',
        options:[
         'A burger',
         'A cake',
         'A pizza',
         'A pasta',
        ],
        rightAnswer:2
     },
     {
       question:'Which game was NOT published by Valve?',
        options:[
         'Dota',
         'Portal',
         'Left 4 Dead',
         'Mortal Kombat',
        ],
        rightAnswer:3
     },
     {
      question:'Best PC game of all time according to Metacritic? (actual in 2022)',
        options:[
         'Disco Elysium - The Final Cut',
         'Minecraft',
         'Half life 2',
         'Skyrim',
        ],
        rightAnswer:0
     },
     {
      question:'Which president of the Russian Federation liked to play video games?',
        options:[
         'Sergey Lavrov',
         'Dmitry Medvedev',
         'Vladimir Putin',
         'Joe Biden',
        ],
        rightAnswer:1
     },
     {
      question:'Which game was $330 million+ invested in?',
        options:[
         'Mortal Kombat',
         'Mario',
         'Cyberpunk 2077',
         'GTA 5',
        ],
        rightAnswer:2
     },
     {
      question:'Which game is prohibited on Twitch?',
        options:[
         'Dead By Daylight',
         'Mortal Kombat',
         'Postal 2',
         'Second Life',
        ],
        rightAnswer:3
     },
     {
      question:'The most profitable premium game of 2020?',
        options:[
            'Call of Duty Modern Warfare',
         'Dota 2',
         'FIFA 20',
         'CS:GO',
        ],
        rightAnswer:0
     },
     {
      question:'Who was the main character in S.T.A.L.K.E.R Clear Sky?',
        options:[
         'Alexander Degtyarev',
         'Scar',
         'Lebedev',
         'Strelok',
        ],
        rightAnswer:1

     },
     {
      question:'When did Minecraft come out on Windows 10?',
        options:[
         '2011 году',
         '2013 году',
         '2015 году',
         '2008 году',
        ],
        rightAnswer:2
     },
     {
      question:'The very first computer game?',
        options:[
         'Solitaire',
         'Doom',
         'Tic Tac Toe',
         'Spacewar',
        ],
        rightAnswer:3
     },
     {
      question:'When was the first FIFA game released?',
        options:[
         '1993',
         '1985',
         '1999',
         '2004',
        ],
        rightAnswer:0
     },
     {
      question:'When was Among Us released?',
        options:[
         'December 2017',
         'June 2018',
         'April 2019',
         'April 2016',
        ],
        rightAnswer:1
     },
     {
      question:'How many characters are in Mortal Kombat 10 (without DLC)?',
        options:[
         '16',
         '32',
         '24',
         '27',
        ],
        rightAnswer:2
     },
     {
        question:'Why was the release of Halo 2 delayed?',
          options:[
           'Fans didn\'t like the main protagonist',
           'Technical difficulites',
           'One of the developers died',
           'Discovery of content featuring "partial nudity"',
          ],
          rightAnswer:3
       },
     {
      question:'What country was the first to recognize esports as a legitimate sport?',
        options:[
         'Russia',
         'The USA',
         'China',
         'South Korea',
        ],
        rightAnswer:0
     },
     {
      question:'What\'s the highest possible score in Classic Tetris World Championship?',
        options:[
         '999',
         '999,999',
         '255',
         '1,000,000',
        ],
        rightAnswer:1
     },
     {
      question:'What planet has almost the same size the world in Minecraft has?',
        options:[
         'Saturn',
         'Earth',
         'Neptune',
         'Vormir',
        ],
        rightAnswer:2
     },
     {
      question:'Who is the creator of Minecraft?',
        options:[
         'Elon Musk',
         'Bill Gates',
         'Mark Zuckerberg',
         'Markus Persson',
        ],
        rightAnswer:3
     },
     {
      question:'Who is the founder of Valve corporation?',
        options:[
         'Gabe Newell',
         'Yaksha Xiao',
         'Alan Miller',
         'Joe Ziegler',
        ],
        rightAnswer:0
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
    localStorage.setItem('result_game', score)
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

