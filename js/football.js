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
    question:'Who is the only goalkeeper to win a "Golden Ball" award?', 
    options:[ 
        'Lev Yashin', 
        'Thibaut Courtois', 
        'Keylor Navas', 
        'Iker Casillas', 
    ], 
    rightAnswer:0 
    }, 
    { 
    question:'Which country hosted the first FIFA World Cup?', 
    options:[ 
            'England',
            'Uruguay', 
            'Spain', 
            'Brazil', 
    ], 
    rightAnswer:1
    }, 
    { 
        question:'Where was modern football invented?', 
        options:[ 
                'Brazil', 
                'France', 
                'England', 
                'Argentina', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'What is the term for a goal that a football player scores in his own gates?', 
        options:[ 
                'Penalty goal', 
                'Finta', 
                'Meter ball', 
                'Own goal', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'How many players are allowed on one football field on both sides?', 
        options:[
            '22',  
            '20', 
            '30', 
            '11', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Which country has won the World Cup most often?', 
        options:[ 
                'England', 
                'Brazil', 
                'Argentina', 
                'Spain', 
        ], 
        rightAnswer:1 
    }, 
    { 
        question:'What does UEFA stand for?', 
        options:[ 
                'the United Eurasian Fencing Associations', 
                'Unbelievably Easy For Arsenal', 
                'the Union of European Football Associations', 
                'the United Euporean Freediving Associations', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Term when a football player scores 3 goals in one game?', 
        options:[ 
                'Poker', 
                'Autogoal', 
                'Triple kill', 
                'Hat-trick', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'What\'s the most honorable award for a football player?', 
        options:[
                'Golden Ball', 
                'Golden cleat', 
                'Сhampion\'s figurine', 
                'Сhampion\'s cup', 
        ], 
        rightAnswer:0
    }, 

    { 
        question:'What is the term for a free kick performed at a distance of 11 meters?', 
        options:[ 
                'Free kick', 
                'Penalty', 
                'Out',
                'Goal', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'Who won the FIFA World Cup 2018?', 
        options:[ 
                'Croatia', 
                'Belgium', 
                'France', 
                'Russia', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'The world\'s strongest soccer kick belongs to ...?', 
        options:[ 
                'Gareth Bale', 
                'Lionel Messi', 
                'Roberto Carlos', 
                'Ronny Heberson', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'How many yellow cards can a player get in one game?', 
        options:[ 
                '1', 
                '2', 
                '3', 
                '4', 
        ], 
        rightAnswer:0 
    }, 
    { 
        question:'What was unique about the 2020-2021 season of Premier League?', 
        options:[ 
                'Fewer penalties were called than in any other season', 
                'That was the only season with more away wins than home wins',
                'Less goals were scored than in any other season',
                'There was no goals at all', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'Which player has won the most "Golden Ball" awards? (actual in 2022)', 
        options:[ 
                'Cristiano Ronaldo',  
                'Kylian Mbappé',
                'Lionel Messi',
                'Gareth Bale', 
        ], 
        rightAnswer:2
    }, 
    {
        question:'How many sizes of soccer balls are there?', 
        options:[  
                '2', 
                '3', 
                '6',
                '5',
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Which country\'s football club won the Champions League 5 times in a row in the 20th century? What is its name?', 
        options:[ 
                'Real Madrid (Spain)', 
                'Juventus (Italy)', 
                'Manchester City (England)', 
                'Arsenal (England)', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'What is a dummy in football?', 
        options:[ 
                'Skill of locating the ball',
                'An element that is performed to deceive an opponent', 
                'Novice football player', 
                'Insulting nickname for a goalkeeper', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'How many referees are required to judge one football match?', 
        options:[ 
                '5', 
                '2',
                '3', 
                '6', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Which coach set the record for 190 Champions League participations?',
        options:[ 
                'Tony Ferguson', 
                'Zinedine Zidane', 
                'Pep Guardiola', 
                'Thomas Tuchel', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Name the only football player from Russia who has won the Champions League?', 
        options:[ 
                'Dmitri Alenichev', 
                'Stanislav Cherchesov', 
                'Aleksandr Mostovoi', 
                'Alba Fernandez', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Why did Zidane headbutt Marco Materazzi in the 2006 World Cup final?', 
        options:[ 
                'Materazzi wasted the time', 
                'Materazzi insulted Zidane\'s sister', 
                'Materazzi was rude to him', 
                'Materazzi ripped his shirt', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'Which player has participated the most matches in the World Cup? (actual in 2022)', 
        options:[ 
                'Пеле', 
                'Роберто Карлос', 
                'Лотар Маттеус', 
                'Криштиану Роналдо', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'What team (with Maradona as a member) won the Serie A?', 
        options:[ 
                'Inter Milan', 
                'Juventus', 
                'Bayern Munich', 
                'Napoli', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Edson Arantes do Nascimento\'s famous nickname?', 
        options:[
                'Pelé', 
                'Casemiro', 
                'Neymar', 
                'Philippe Coutinho', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'How long can a goalkeeper keep the ball according to the official FIFA rules?', 
        options:[ 
                '2 seconds',
                '6 seconds', 
                '10 seconds', 
                '0.25 minutes', 
        ], 
        rightAnswer:1
    }, 
    { 
        question:'Who was the first German football player to win the "Golden Ball" award?', 
        options:[ 
                'Marco Reus', 
                'Toni Kroos',
                'Gerd Müller', 
                'Kevin Trapp', 
        ], 
        rightAnswer:2
    }, 
    { 
        question:'Who is the top scorer in the Champions League? (actual in 2022)', 
        options:[ 
                'Gareth Bale', 
                'Karim Benzema', 
                'Toni Kroos', 
                'Cristiano Ronaldo', 
        ], 
        rightAnswer:3
    }, 
    { 
        question:'Where was the Olympic 2000 football final hosted?', 
        options:[ 
                'Australia', 
                'Spain', 
                'England', 
                'Brazil', 
        ], 
        rightAnswer:0
    }, 
    { 
        question:'Who is the most expensive football player in the world? (actual in 2022)', 
        options:[ 
                'Kylian Mbappé', 
                'Lionel Messi', 
                'Neymar',
                'Gareth Bale', 
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
    localStorage.setItem('result_football', score)
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