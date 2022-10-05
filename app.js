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
  {
    question: "Wwhat is the tallest building in berlin ?",
    a: "television tower",
    b: "wild code school campus ",
    c: "the richstag",
    correct: "a",
  },
  {
    question: "Wwhat is the tallest building in berlin ?",
    a: "television tower",
    b: "wild code school campus ",
    c: "the richstag",
    correct: "a",
  },
  {
    question: "Wwhat is the tallest building in berlin ?",
    a: "television tower",
    b: "wild code school campus ",
    c: "the richstag",
    correct: "a",
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
const btn = document.querySelector(".btn");
const all_answer = document.querySelectorAll(".answer");
const quizContainer = document.querySelector(".radiobuttons");
const cardImage = document.querySelector(".card-img");

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
  cardImage.innerHTML = quizData[index].cardImage;
}
//move forward the quiz
function startquiz() {
  btn.addEventListener("click", () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        // quizContainer.classList.add("correct");
        score++;
      }
    }

    index++;
    if (index < quizData.length) {
      // quizContainer.classList.remove("correct");

      getquiz();
    } else {
      if (score >= quizData.length - 2) {
        quizContainer.classList.add("correct");
      }

      quizContainer.innerHTML = `<h2>you scored ${score}/${quizData.length}</h2>
      <button class="jsbtn" onClick="location.reload()">Reload</button>`;
    }
  });
}
getquiz();
startquiz();

console.log(btn);
