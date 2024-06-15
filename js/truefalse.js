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
        question:'Hundred Years\' War lasted 100 years.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Banana is a berry, but a strawberry is not.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Paper bag is more environmentally friendly than plastic one.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Sharks have existed on Earth before trees.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'You can tickle yourself.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Electric buses are less environmentally friendly than diesel buses.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'One of the Saturn\'s satelite has water on it\'s surface.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'Humans have about 22,000 genes.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'Snail has about 25,000 teeth.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'There are 6 continents on Earth.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'If a tree is planted upside down, its roots will turn into branches.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Earthworms have five hearts.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'Polar bears have transparent fur.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },{
        question:'Every glass of water we drink contains at least one molecule of water that was present in the body of a dinosaur.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'It\'s raining diamonds on Jupiter and Saturn.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'October Revolution Day is celebrated in October.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Male lions sleep up to 20 hours a day.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'Humans have unique fingerprints, while cats have unique noses.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:0
     },
     {
        question:'The left hemisphere of the brain is responsible for logic, and the right - for creativity.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Earth is a sphere.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Fish lack long-term memory.',
        options:[
            'True',
            'False',
        ],
        rightAnswer:1
     },
     {
        question:'Plastic bottles take longer to decompose than glass bottles.',
        options:[
            'True',
            'False',
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
    // option3.innerHTML = questions[indexOfQuestion].options[2];
    // option4.innerHTML = questions[indexOfQuestion].options[3];

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
    localStorage.setItem('result_truefalse', score)
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

