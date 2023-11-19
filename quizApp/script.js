
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
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
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
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstElementChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
}



startQuiz ();