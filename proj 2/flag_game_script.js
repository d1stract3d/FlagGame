(function () {
  const myQuestions = [
    {
      question: "<div class=\"card\" style=\"width:15rem; color:white;background-color:#444;display: inline-block;\"><img src=\"./flagimages/az250.jpg\" class=\"card-img-top\"><div class=\"card-body\"><p class=\"card-text\" style=\"font-size: 12px;\">Bound by the Caspian Sea and Caucasus Mountains. . .</p></div></div>",
      answers: {
        a: "Bolivia",
        b: "Azerbaijan",
        c: "Mongolia"
      },
      correctAnswer: "b"
    },
    {
      question: "<div class=\"card\" style=\"width:15rem; color:white;background-color:#444;display: inline-block;\"><img src=\"./flagimages/Flag-Canada.jpg\" class=\"card-img-top\"><div class=\"card-body\"><p class=\"card-text\" style=\"font-size: 12px;\">The world's second-largest country by total area.</p></div></div>",
      answers: {
        a: "Norway",
        b: "Oman",
        c: "Canada"
      },
      correctAnswer: "c"
    },
    {
      question: "<div class=\"card\" style=\"width:15rem; color:white;background-color:#444;display: inline-block;\"><img src=\"./flagimages/FLJAPAN.jpg\" class=\"card-img-top\"><div class=\"card-body\"><p class=\"card-text\" style=\"font-size: 12px;\">An East Asian island country located in the northwest Pacific Ocean.</p></div></div>",
      answers: {
        a: "Japan",
        b: "Qatar",
        c: "Turkey",
      },
      correctAnswer: "a"
    },
    {
      question: "<div class=\"card\" style=\"width:15rem; color:white;background-color:#444;display: inline-block;\"><img src=\"./flagimages/brazil.png\" class=\"card-img-top\"><div class=\"card-body\"><p class=\"card-text\" style=\"font-size: 12px;\">The world's fifth-largest country by area and the sixth most populous.</p></div></div>",
      answers: {
        a: "Poland",
        b: "Mexico",
        c: "Brazil",
      },
      correctAnswer: "c"
    },
    {
      question: "<div class=\"card\" style=\"width:15rem; color:white;background-color:#444;display: inline-block;\"><img src=\"./flagimages/jamaica.png\" class=\"card-img-top\"><div class=\"card-body\"><p class=\"card-text\" style=\"font-size: 12px;\">A Caribbean island nation, with a lush topography of mountains, rainforests, and reef-lined beaches.</p></div></div>",
      answers: {
        a: "France",
        b: "Jamaica",
        c: "Bulgaria"
      },
      correctAnswer: "b"
    }
  ];

  function buildQuiz() {

    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answers = [];


      for (letter in currentQuestion.answers) {

        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} : ${currentQuestion.answers[letter]}
           </label>`
        );
      }


      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers">${answers.join("")}</div>
         </div>`
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {

    const answerContainers = quizContainer.querySelectorAll(".answers");


    let numCorrect = 0;


    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if (userAnswer === currentQuestion.correctAnswer) {

        numCorrect++;


        answerContainers[questionNumber].style.color = "lightgreen";
      } else {

        answerContainers[questionNumber].style.color = "red";
      }
    });


    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    refreshButton.style.display = "inline-block";
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  function reFresh() {
    location.reload();
  }
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  const refreshButton = document.getElementById("refresh");

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  refreshButton.addEventListener("click", reFresh);
})();