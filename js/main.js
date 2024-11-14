// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Ketika Humberger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click diluar sidebar unruk menghlangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const link = this.getAttribute("data-link");
      if (link) {
        window.open(link, "_blank"); // Membuka link di tab baru
      }
    });
  });
});




// QUIZZ SEC
const questions = [
  {
      question: "Apa yang paling penting bagi Anda?",
      answers: [
          { text: "Keluarga", correct: true },
          { text: "Karir", correct: false },
          { text: "Hobi", correct: false },
          { text: "Teman", correct: false }
      ]
  },
  {
      question: "Bagaimana Anda mendeskripsikan diri Anda?",
      answers: [
          { text: "Sosial", correct: false },
          { text: "Introvert", correct: true },
          { text: "Ekstrovert", correct: false },
          { text: "Ambivert", correct: false }
      ]
  },
  {
      question: "Apa yang Anda cari dalam hidup?",
      answers: [
          { text: "Kebahagiaan", correct: true },
          { text: "Kesuksesan", correct: false },
          { text: "Pengakuan", correct: false },
          { text: "Kekuasaan", correct: false }
      ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result');

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = 'none';
  resultContainer.style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtons.innerHTML = '';
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.correct) {
      score++;
  }
  nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
  } else {
      showResult();
  }
});

function showResult() {
  document.getElementById('quiz-container').style.display = 'none';
  resultContainer.style.display = 'block';
  resultText.innerText = `Skor Anda: ${score} dari ${questions.length}`;
}

document.getElementById('restart-button').addEventListener('click', startQuiz);

// Mulai kuis saat halaman dimuat
startQuiz();