
const questions = [
  {
      question: "What is the capital of Japan?",
      answers:[
        {text: "Tokyo", correct: "true"},
        {text: "Seoul", correct: "false"},
        {text: "Beijing", correct: "false"},
        {text: "Bangkok", correct: "false"}
      ]
  },
  {
      question: "Which programming language is often used for building web interfaces?",
      answers:[
        {text: "Java", correct: "false"},
        {text: "JavaScript", correct: "true"},
        {text: "HTML", correct: "false"},
        {text: "C+", correct: "false"}
      ]
  },
  {
      question: "What is the largest mammal?",
      answers:[
        {text: "Elephant", correct: "false"},
        {text: "Blue Whale", correct: "true"},
        {text: "Giraffe", correct: "false"},
        {text: "Hippopotamus", correct: "false"}
      ]
  },
  {
      question: "Who is known as the 'Father of Computer Science'?",
      answer:[
        {text: "Bill Gates", correct: "false"},
        {text: "Steve Jobs", correct: "false"},
        {text: "Alan Turing", correct: "true"},
        {text: "Mark Zuckerberg", correct: "false"}
      ]
  },
  {
      question: "Which planet is known as the 'Red Planet'?",
      answers:[
        {text: "Mars", correct: "true"},
        {text: "Venus", correct: "false"},
        {text: "Jupiter", correct: "false"},
        {text: "Saturn", correct: "false"}
      ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// ******************* show question function **************
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question
  currentQuestion?.answers?.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  })
}
// resetState function-----------------
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `Your score is ${score} out  of ${questions.length}!`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length){
    console.log(currentQuestionIndex);
    handleNextButton();
  }
  else{
    startQuiz();
  }
});

startQuiz ();