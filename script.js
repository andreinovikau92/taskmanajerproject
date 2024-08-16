

    const questions = [
        
        {
            question: 'What is the longest river in the world?',
            answer: 'Nile'
        },

        {
            question: "Which American city's Major League Baseball team is named after the Cardinals?",
            answer: 'Saint Louis'
        },

        {
            question: 'What is the capital of Peru?',
            answer: 'Lima'
        },

        {
            question: 'Which team won the World Cup in 2010?',
            answer: 'Spain'
        }

    ];



    
function generateQuestion(){
    
    randomQuestionSelection = Math.floor(Math.random() * questions.length);

    document.getElementById('question').innerHTML = questions[randomQuestionSelection].question;

    const arrTaskHistory = [];
    arrTaskHistory.push(questions[randomQuestionSelection].question);
    document.getElementById('task-history').innerHTML += `${arrTaskHistory}<br/>`;

}

generateQuestion();

let counterCorrect = 0;
let counterIncorrect = 0;

function showAnswer() {

    const userAnswer = document.getElementById('user-answer').value;
    const correctAnswer = questions[randomQuestionSelection].answer;

    if(correctAnswer == userAnswer){
        document.getElementById('answer').innerHTML = 'Correct!';
        document.getElementById('counter-correct').innerHTML = `Correct: ${++counterCorrect}`;
    }else{
        document.getElementById('answer').innerHTML = 'Wrong answer. Try again!';
        document.getElementById('counter-incorrect').innerHTML = `Incorrect: ${++counterIncorrect}`;
    }

}

function addQuestions( ){
   let newQuestions =  document.getElementById('new-question').value;
   let newAnswers = document.getElementById('user-answer').value;
   questions.push({question: newQuestions, answer: newAnswers});
} 

function clearCounters(){

    counterCorrect = 0;
    counterIncorrect = 0;

    document.getElementById('counter-correct').innerHTML += counterCorrect;
    document.getElementById('counter-incorrect').innerHTML += counterIncorrect;

}


let counterHint = 0;

function getHint(){
    
    const correctAnswer = questions[randomQuestionSelection].answer.split('');
    
    if(counterHint < correctAnswer.length){
        document.getElementById('answer-hint').innerHTML += correctAnswer[counterHint];
        ++counterHint;
    }else{
        document.getElementById('no-hint').innerHTML = 'There is no hint.';
    }

}



document.getElementById('generate-task').addEventListener('click', (e) => {
    generateQuestion();
    e.preventDefault();
});

document.getElementById('check-answer').addEventListener('click', (e) => {
    showAnswer();
    e.preventDefault();
});

document.getElementById('add-task').addEventListener('click', (e) => {
    addQuestions();
    e.preventDefault();
});

document.getElementById('clear').addEventListener('click', (e) => {
    clearCounters();
    e.preventDefault();
});