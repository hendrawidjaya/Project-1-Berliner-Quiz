const quizData = [
  {
    question: "What is the tallest structure in Berlin?",
    a: "Opera house",
    b: "TV tower",
    c: "Olaf Scholz's house",
    correct: "b",
    cardImage:
      "https://cdn.pixabay.com/photo/2020/01/12/07/49/tv-tower-4759430_640.jpg",
  },
  {
    question: "How many currywursts are eaten in Berlin per year?",
    a: "50 million",
    b: "70 million",
    c: "250 million",
    correct: "b",
    cardImage:
      "https://cdn.pixabay.com/photo/2019/05/26/01/06/currywurst-4229460_640.jpg",
  },
  {
    question: "How old is the world-famous film festival Berlinale?",
    a: "73 years this year",
    b: "74 years this year",
    c: "75 years this year",
    correct: "a",
    cardImage:
      "https://asianfilmfestivalscomsite.files.wordpress.com/2021/10/berlinale2022call.png?w=640",
  },
  {
    question: "How many dogs are currently registered in Berlin?",
    a: "50 000",
    b: "100 000",
    c: ">120 000",
    correct: "c",
    cardImage:
      "https://cdn.pixabay.com/photo/2017/07/11/18/12/funny-expression-2494538_640.jpg",
  },
  {
    question: "Which lake is the largest in Berlin?",
    a: "Wansee",
    b: "Mugelsee",
    c: "Schlachtensee",
    correct: "b",
    cardImage:
      "https://cdn.pixabay.com/photo/2014/09/14/17/24/sailing-boats-445191_640.jpg ",
  },
  {
    question: "Can you name the youngest elephant in Berlin Zoo?",
    a: "Anchali ",
    b: "Aloha",
    c: "Mia",
    correct: "a",
    cardImage:
      "https://cdn.pixabay.com/photo/2018/09/02/17/25/elephant-3649285_640.jpg",
  },
  {
    question: "How many opera houses are there in Berlin?",
    a: "1",
    b: "2",
    c: "3",
    correct: "c",
    cardImage:
      "https://cdn.pixabay.com/photo/2019/12/22/07/06/berlin-4711919_640.jpg",
  },
];

/*Grabing all the elements */
const question = document.getElementById("question");
const a = document.getElementById("a+");
const b = document.getElementById("b+");
const c = document.getElementById("c+");
const btn = document.querySelector(".submit-btn");
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
  cardimage.style.backgroundImage = `url(${quizData[index].cardImage})`;
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

      quizContainer.innerHTML = `<h2> ${score}/${quizData.length} <br>Congratulations to our Berliner Quiz winner! </h2>
      <button class="quiz-btn" onClick="location.reload()">Reload</button>`;
    }
  });
}
getquiz();
startquiz();

console.log(btn);
