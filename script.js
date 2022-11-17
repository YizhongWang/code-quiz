var questions =[  
    { 
      question: 'What is not a JS primitive data type?',
      answers: ["String", "Boolean", "Array", "Number"],
      correctAnswer: "Array",

    },
    { 
        question: 'What is not a JS primitive data type?',
        answers: ["String", "Boolean", "Array", "Number"],
        correctAnswer: "Array",
  
      },
      { 
        question: 'What is not a JS primitive data type?',
        answers: ["String", "Boolean", "Array", "Number"],
        correctAnswer: "rray",
  
      }

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