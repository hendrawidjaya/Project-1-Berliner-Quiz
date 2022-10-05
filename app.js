const quizData = [
  {
    question: "what is the best club in berlin?",
    a: "Berghain",
    b: "All ",
    c: "wild code club",
    correct: "b",
  },
  {
    question: "Wwhat is the tallest building in berlin ?",
    a: "television tower",
    b: "wild code school campus ",
    c: "the richstag",
    correct: "a",
  },
];

/*Grabing all the elements */
const question = document.getElementById("question");
const a = document.getElementById("a+");
const b = document.getElementById("b+");
const c = document.getElementById("c+");
const btn = document.getElementById("submit");
const all_answer = document.querySelectorAll(".answer");
const quizContainer = document.querySelector(".quiz-container");

let index = 0;
let score = 0;
//get the getSelected answer
function getSelected() {
  let ans = undefined;
  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}
//disselect all answer
function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}
//load the quiz data
function getquiz() {
  deselectans();
  question.innerText = quizData[index].question;
  a.innerText = quizData[index].a;
  b.innerText = quizData[index].b;
  c.innerText = quizData[index].c;
}
//move forward the quiz
function startquiz() {
  btn.addEventListener("click", () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        score++;
      }
      quizContainer.classList.add("correct");
    }
    if (ans) {
      if (ans != quizData[index].correct) {
        quizContainer.classList.add("incorrect");
        //   score++;
      }
    }
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
      // change here
      alert("score :" + score);
      location.reload();
    }
  });
}
getquiz();
startquiz();

console.log(btn);
