// JavaScript Section for Hamburger Navigation Bar //

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Js Section for closing Hamburger Bar while click on any item from Menu //

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Preloader //

let loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear");
}

// End Preloader //
// JavaScript Section //

let correctAnswersCountFromJS = 0;

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function onClick(event) {
    const targetElement = event.target;
    if (targetElement.type === 'button' && !card.classList.contains('checked')) {

      card.classList.add('checked');

      targetElement.classList.add('selected');

      if (targetElement.classList.contains('right')) {
        correctAnswersCountFromJS++;
      }
    }
  })
})

function submitAnswers() {
  //DOM querySelector solution
  const correctAnswersCountFromDom = document.querySelectorAll('.right.selected').length;
  const solutionDOMCount = correctAnswersCountFromDom + " from " + cards.length;
 
  //DOM JS solution
  const solutionJSCount = correctAnswersCountFromJS + " from " + cards.length;

  //Record result
  document.getElementById('totalCount').innerHTML = solutionDOMCount;
}