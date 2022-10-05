const quizData = [
  {
    question: "How many opera houses are there in Berlin?",
    a: "1",
    b: "2",
    c: "3",
    correct: "c",
    cardImage:
      "https://images.pexels.com/photos/7245305/pexels-photo-7245305.jpeg?cs=srgb&dl=pexels-olga-lioncat-7245305.jpg&fm=jpg",
  },
  {
    question: "How many galleries are there in Berlin?",
    a: "Around 300 galleries",
    b: "Around 400 galleries",
    c: "Around 500 galleries",
    correct: "a",
  },
  {
    question: "How old is the world-famous film festival Berlinale?",
    a: "73 years this year",
    b: "74 years this year",
    c: "75 years this year",
    correct: "a",
  },
  {
    question: "How many dogs are currently registered in Berlin?",
    a: ">1000",
    b: ">1100",
    c: ">1200",
    correct: "c",
  },
  {
    question: "Which lake is the largest lake in Berlin?",
    a: "Wansee",
    b: "Mugelsee",
    c: "Schlachtensee",
    correct: "b",
  },
  {
    question: "Which house is the tallest?",
    a: "Your house",
    b: "Not my house",
    c: "Olaf Scholz's house",
    correct: "b",
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
const cardimage = document.querySelector(".card-img");

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
  cardimage.style.backgroundImage =
    "https://images.pexels.com/photos/7245305/pexels-photo-7245305.jpeg?cs=srgb&dl=pexels-olga-lioncat-7245305.jpg&fm=jpg";
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
