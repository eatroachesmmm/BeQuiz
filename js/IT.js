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
    question:'What is a motherboard?',
    options:[
        'A circuit board that ties the computer\'s components together at one spot',
        'A board used to store information on PC',
        'A PC element responsible for performance',
        'A common name for all operating systems',
    ],
    rightAnswer:0
    },
    {
    question:'What is 1 gigabyte equal to?',
    options:[
            '1000 kilobytes',
            '1024 megabytes',
            '2048 megabytes',
            '512 bytes',
    ],
    rightAnswer:1
    },
    {
        question:'When was windows 11 released?',
        options:[
                'In 2011',
                'In 2022',
                'In 2021',
                'In 2017',
        ],
        rightAnswer:2
    },
    {
        question:'Why is bug called bug?',
        options:[
                'It\'s short for bugler',
                'It\'s short for firebug',
                'It\'s short for ladybug',
                'It\'s short for bugbear',
        ],
        rightAnswer:3
    },
    {
        question:'When was the very first cybercrime committed?',
        options:[
                'In 1994',
                'In 1999',
                'In 2001',
                'In 2012',
        ],
        rightAnswer:0
    },
    {
        question:'Who invented the very first computer?',
        options:[
                'Steve Jobs',
                'Charles Babbage',
                'Alan Turing',
                'Mark Zuckerberg',
        ],
        rightAnswer:1
    },
    {
        question:'What number system does a computer use?',
        options:[
                'Ternary',
                'Octal',
                'Binary',
                'Decimal',
        ],
        rightAnswer:2
    },
    {
        question:'What is the difference between PNG and JPG files?',
        options:[
                'There is no difference',
                'JPG is not supported by browsers',
                'PNG file quality will be worse, but it will take less memory than JPG',
                'JPG file quality will be worse, but it will take less memory than PNG',
        ],
        rightAnswer:3
    },
    {
        question:'Which of the following is NOT a network attack?',
        options:[
                'Remote',
                'DDoS',
                'Malware',
                'SQL Injection',
        ],
        rightAnswer:0
    },
    {
        question:'What programming language is the most widely used for web development?',
        options:[
                'C#',
                'JavaScript',
                'Python',
                'Java',
        ],
        rightAnswer:1
    },
    {
        question:'Which of the following is NOT related to software?',
        options:[
                'Computer driver',
                'System programming',
                'CPU',
                'Photoshop',
        ],
        rightAnswer:2
    },
    {
        question:'In what format can images be stored on a computer?',
        options:[
                'PNG',
                'JPEG',
                'GIF',
                'All of the above',
        ],
        rightAnswer:3
    },
    {
        question:'What does PC stand for?',
        options:[
                'Personal Computer',
                'Portable Computer',
                'Printed Circuit',
                'Professional Corporation',
        ],
        rightAnswer:0
    },
    {
        question:'What is a system administrator?',
        options:[
                'A person responsible for cleaning in room',
                'A person who maintains the company\'s IT infrastructure',
                'A person working in the office',
                'A person selling movie tickets',
        ],
        rightAnswer:1
    },
    {
        question:'What is HTML?',
        options:[
                'A programming language',
                'A software',
                'A Hypertext markup language',
                'A browser extension',
        ],
        rightAnswer:2
    },
    {
        question:'Which of the following is the largest unit of information?',
        options:[
                'Terabyte',
                'Yottabyte',
                'Exabyte',
                'Yobibyte',
        ],
        rightAnswer:3
    },
    {
        question:'Who/what is the Pascal programming language named after?',
        options:[
            'A mathematician',
                'A chemist',
                'A book',
                'A biologist',
        ],
        rightAnswer:0
    },
    {
        question:'What is GitHub?',
        options:[
                'A programming language',
                'A hosting service',
                'A hardware',
                'A virus',
        ],
        rightAnswer:1
    },
    {
        question:'What is Python named after?',
        options:[
                'A snake',
                'An actor',
                'A teleshow',
                'A city',
        ],
        rightAnswer:2
    },
    {
        question:'Which of the following is NOT an operating system?',
        options:[
                'Windows 3.1',
                'Windows Vista',
                'MS DOS',
                'There is no right answer',
        ],
        rightAnswer:3
    },
    {
        question:'Who founded Google?',
        options:[
                'Sergey Brin',
                'Mark Zuckerberg',
                'Arkady Volozh',
                'Jelani Fenton',
        ],
        rightAnswer:0
    },
    {
        question:'What programming language is Windows 10 written in?',
        options:[
                'FORTRAN',
                'C',
                'Pascal',
                'JavaScript',
        ],
        rightAnswer:1
    },
    {
        question:'What is an algorithm?',
        options:[
                'A random sequence of actions',
                'A large database',
                'A finite sequence of instructions',
                'A mistake in code',
        ],
        rightAnswer:2
    },
    {
        question:'Who created HTML?',
        options:[
                'Håkon Wium Lie',
                'Rasmus Lerdorf',
                'Chris Rock',
                'Tim Berners-Lee',
        ],
        rightAnswer:3
    },
    {
        question:'What was the first PC ever?',
        options:[
                'Altair',
                'Macintosh',
                'Babbage Difference Engine',
                'RFM44',
        ],
        rightAnswer:0
    },
    {
        question:'What\'s the first computer virus?',
        options:[
                'Brain',
                'Creeper',
                'ILOVEYOU',
                'WannaCry',
        ],
        rightAnswer:1
    },
    {
        question:'Which of the following is NOT a programming language?',
        options:[
                'APL',
                'COBOL',
                'HTML',
                'FORTRAN',
        ],
        rightAnswer:2
    },
    {
        question:'Who is the very first programmer in history?',
        options:[
                'Isaac Newton',
                'Albert Einstein',
                'Archimedes',
                'Ada Lovelace',
        ],
        rightAnswer:3
    },
    {
        question:'What is the first computer programming language?',
        options:[
                'Fortran',
                'Ruby',
                'Malbolge',
                'C++',
        ],
        rightAnswer:0
    },
    {
        question:'What does Google mean?',
        options:[
                'Nothing',
                'A number',
                'Google developer\'s surname',
                'A character from the game',
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
    localStorage.setItem('result_IT', score)
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

