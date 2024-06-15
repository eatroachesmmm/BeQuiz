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
        question:'What is the best engine for Nissan Skyline GTR R34?',
        options:[
         'VQ25DD',
         'KAMAZ 740.30',
         '4G63',
         'Opel 20NE',
        ],
        rightAnswer:0
     },
    {
      question:'What is the fastest car in the world? (actual in 2022)',
        options:[
         'Audi e-tron',
         'Bugatti Chiron',
         'Lamborghini Huracan',
         'Tesla Model Y',
        ],
        rightAnswer:1
     },
    {
      question:'Is it possible for an engine to rotate in reverse?',
        options:[
         'No',
         'Yes',
         'Some of the models can',
         'Depends on the fuel tank capacity',
        ],
        rightAnswer:2
     },
    {
      question:'What\'s the difference between diesel and gasoline engines?',
        options:[
         'Difference in fuel delivery method',
         'Difference in fuel types',
         'Difference in car models',
         'Difference in fuel burning method',
        ],
        rightAnswer:3
     },
    {
      question:'Which drivetrain has a good car acceleration and is better for wet roads?',
        options:[
         'AWD',
         'FWD',
         'RWD',
         'All of the above',
        ],
        rightAnswer:0
     },
    {
      question:'What is the most expensive car in the world? (actual in 2022)',
        options:[
         'McLaren P1 LM',
         'Bugatti La Voiture Noire',
         'Ferrari LaFerrari Aperta',
         'Bugatti Chiron',
        ],
        rightAnswer:1
     },
     {
      question:'Why do some sport cars have tilted rear tires?',
        options:[
         'For better appearance',
         'For less fuel consumption',
         'To improve handling performance',
         'To increase speed',
        ],
        rightAnswer:2
     },
    {
      question:'Who created the first internal combustion engine?',
        options:[
         'Kaon Bilman',
         'Lexus Mida',
         'Karl Benz',
         'Étienne Lenoir',
        ],
        rightAnswer:3
     },
    {
      question:'Why is the Nissan GTR also named "Godzilla"?',
        options:[
         'For it\'s astonishingly long win streak in races',
         'For it\'s appearance',
         'For it\'s speed',
         'For it\'s abnormal size',
        ],
        rightAnswer:0
     },
    {
      question:'How much horsepower does the Mercedes AMG E63S W213 have?',
        options:[
         '686',
         '612',
         '634',
         '554',
        ],
        rightAnswer:1
     },
    {
       question:'What is the Ford Mustang GT\'s engine size?',
        options:[
         '5.5L',
         '1.3L',
         '5.0L',
         '5.7L',
        ],
        rightAnswer:2
     },
    {
       question:'How much time does it take for Dodge Challenger 2008 to reach 100 km/h?',
        options:[
         '5.5 - 6.3 seconds',
         '1.4 - 2.0 seconds',
         '3.4 - 5.4 seconds',
         '4.4 - 7.5 seconds',
        ],
        rightAnswer:3
     },
    {
       question:'How many stars are in the Subaru\'s logo?',
        options:[
         '6',
         '3',
         '8',
         '5',
        ],
        rightAnswer:0
     },
    {
       question:'In what year AvtoVAZ confirmed the cessation of Priora production?',
        options:[
         '2012',
         '2018',
         '2013',
         '2015',
        ],
        rightAnswer:1
     },
    {
       question:'What car has the best brake in it? (actual in 2022)',
        options:[
         'Audi A5',
         'Chevrolet Corvette',
         'Porsche 911 GT2 RS',
         'Ferrari 488 GTB',
        ],
        rightAnswer:2
     },
    {
       question:'How much horsepower does a BMW M5 CS 2022 have?',
        options:[
         '623',
         '474',
         '723',
         '627',
        ],
        rightAnswer:3
     },
    {
       question:'In what year AvtoVAZ had stopped Lada 2107 production?',
        options:[
         '2012',
         '2000',
         '1999',
         '2009',
        ],
        rightAnswer:0
     },
    {
       question:'How much does a Lamborghini Gallardo SE weigh?',
        options:[
         'About 1200 kg',
         'From 1330 kg to 1570 kg',
         'About 2300 kg',
         'from 1600 kg to 2000 kg',
        ],
        rightAnswer:1
     },
    {
       question:'What\'s Dodge Challenger SRT Demon\'s max speed?',
        options:[
         '168 km/h',
         '330 km/h',
         '270 km/h',
         '200 km/h',
        ],
        rightAnswer:2
     },
    {
       question:'What drivetrain does a Lexus GX470 have?',
        options:[
         'Side drive 4X',
         'Front drive 5A',
         'Rear drive',
         'Full time 4WD',
        ],
        rightAnswer:3
     },
    {
       question:'What engine does a Nissan GTR R35 have?',
        options:[
         'VR38DETT',
         'DR8EIX',
         '1002DR',
         '8TS',
        ],
        rightAnswer:0
     },
    {
       question:'How much horsepower does a 2022 Acura NSX have?',
        options:[
         '873',
         '600',
         '734',
         '934',
        ],
        rightAnswer:1
     },
    {
       question:'What\'s 2023 Toyota GR Supra\'s initial price?',
        options:[
         '80 000$',
         '74 000$',
         '52 000$',
         '61 000$',
        ],
        rightAnswer:2
     },
    {
      question:'Who created the first car in the world?',
        options:[
         'Kiichiro Toyoda',
         'August Horch',
         'Yoshisuke Aikawa',
         'Karl Friedrich Benz',
        ],
        rightAnswer:3
     },
    {
      question:'What was the bodywork of the Nissan Skyline GT-R in "2 Fast 2 Furious"?',
        options:[
         'R34',
         'RTX3090',
         'STRETCH',
         'CROSSOVER',
        ],
        rightAnswer:0
     },
    {
      question:'What type of engine does the Mazda RX-7 have?',
        options:[
         'Hybrid',
         'Rotary',
         'Gas engine',
         'Inline engine',
        ],
        rightAnswer:1
     },
    {
      question:'Where was Lexux founded?',
        options:[
         'The USA',
         'North Vietnam',
         'Japan',
         'Germany',
        ],
        rightAnswer:2
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
    localStorage.setItem('result_car', score)
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

