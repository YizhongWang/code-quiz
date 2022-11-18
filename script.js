var questions =[  
    { 
      question: 'What is not a JS primitive data type?',
      answers: ["String", "Boolean", "Array", "Number"],
      correctAnswer: "Array",

    },
    {
        question: 'The condition in an if / else statement is enclosed within ____.',
        answers: ["quotes', 'curly brackets', 'parentheses', 'square brackets"],
        correctAnswer: 'parentheses',
      },
      {
        question: 'Arrays in JavaScript can be used to store ____.',
        answers: [
          "numbers and strings",
          "other arrays",
          "booleans",
          "all of the above",
        ],
        correctAnswers: "all of the above",
      },
      {
        question:
          'String values must be enclosed within ____ when being assigned to variables.',
        answers: ["commas', 'curly brackets', 'quotes', 'parentheses"],
        correctAnswer: "quotes",
      },
      {
        question:
          'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        correctAnswer: 'console.log',
      },
]
var startButton = document.getElementById("Start");
var questionElement = document.getElementById("questions");
var buttonA=document.getElementById("answer-A");
var buttonB=document.getElementById("answer-B");
var buttonC=document.getElementById("answer-C");
var buttonD=document.getElementById("answer-D");

startButton.addEventListener("click", function(){
    
    startQuiz();
})
var questionIndex =0;
function startQuiz(){
var currentQuestion = questions[questionIndex];
questionElement.textContent = currentQuestion.question;
buttonA.textContent = questions[questionIndex].answers[0]
buttonB.textContent = questions[questionIndex].answers[1]
buttonC.textContent = questions[questionIndex].answers[2]
buttonD.textContent = questions[questionIndex].answers[3]
}
 function correctAnswer(){
    
    if(buttonA==correctAnswer){
        console.log(buttonA);
 }
 else if(buttonB==correctAnswer){
    console.log(buttonB);
 }
 else if(buttonC==correctAnswer){
    console.log(buttonC);
 }
 else {
    console.log(buttonD);
 }
    return;
 }
 console.log(correctAnswer);