var questions = [
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
var buttonA = document.getElementById("answer-A");
var buttonB = document.getElementById("answer-B");
var buttonC = document.getElementById("answer-C");
var buttonD = document.getElementById("answer-D");

startButton.addEventListener("click", function () {

  startQuiz();
  setTime();
})
var questionIndex = 0;
function startQuiz() {
  var currentQuestion = questions[questionIndex];
  questionElement.textContent = currentQuestion.question;
  buttonA.textContent = questions[questionIndex].answers[0]
  buttonB.textContent = questions[questionIndex].answers[1]
  buttonC.textContent = questions[questionIndex].answers[2]
  buttonD.textContent = questions[questionIndex].answers[3]
}

var timeEl = document.querySelector(".time");


var secondsLeft = 15;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      
    }

  }, 1000);
}







var trackingScore=0;

function correctAnswer(event) {
console.log (event.target)
  if (event.target.textContent == questions[questionIndex].correctAnswer) {
    console.log("correct");
    trackingScore++;
  }
 
  else {
    console.log("wrong");
  }
  questionIndex++;
if(questionIndex>=questions.length){
  score();
  return;
}
  startQuiz();

  return;
}

function score(){

  var number = document.querySelector(".grade");
  number.textContent="You got: "+trackingScore+"questions correct";
  
}
console.log(correctAnswer);
buttonA.addEventListener ("click",correctAnswer);
buttonB.addEventListener ("click",correctAnswer);
buttonC.addEventListener ("click",correctAnswer);
buttonD.addEventListener ("click",correctAnswer);

