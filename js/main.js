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

// QUIZZ SECTION: IDENTITY CRISIS

const questions = [
  {
    question: "Apa yang paling penting bagi Anda dalam hidup ini?",
    answers: [
      {
        text: "Keluarga",
        reflection:
          "Anda berorientasi pada hubungan dan kepedulian pada orang-orang dekat.",
      },
      {
        text: "Karir",
        reflection: "Anda ambisius dan mengutamakan pencapaian pribadi.",
      },
      {
        text: "Hobi",
        reflection:
          "Anda menghargai ekspresi diri dan menjalani hidup sesuai minat Anda.",
      },
      {
        text: "Teman",
        reflection:
          "Anda menghargai koneksi sosial dan dukungan dari orang sekitar.",
      },
    ],
  },
  {
    question: "Bagaimana Anda mendeskripsikan diri Anda?",
    answers: [
      {
        text: "Sosial",
        reflection:
          "Anda cenderung nyaman dalam berinteraksi dengan banyak orang.",
      },
      {
        text: "Introvert",
        reflection: "Anda lebih menikmati waktu sendiri dan ketenangan.",
      },
      {
        text: "Ekstrovert",
        reflection: "Anda mendapatkan energi dari interaksi sosial.",
      },
      {
        text: "Ambivert",
        reflection:
          "Anda memiliki keseimbangan antara kepribadian ekstrovert dan introvert.",
      },
    ],
  },
  {
    question: "Apa yang paling Anda cari dalam hidup?",
    answers: [
      {
        text: "Kebahagiaan",
        reflection: "Anda mengutamakan perasaan positif dan kedamaian batin.",
      },
      {
        text: "Kesuksesan",
        reflection: "Anda termotivasi oleh pencapaian dan prestasi.",
      },
      {
        text: "Pengakuan",
        reflection: "Anda mendambakan apresiasi dan pengakuan dari lingkungan.",
      },
      {
        text: "Kekuasaan",
        reflection:
          "Anda tertarik untuk memiliki pengaruh dan kontrol atas situasi.",
      },
    ],
  },
  {
    question: "Apa yang Anda lakukan saat menghadapi stres?",
    answers: [
      {
        text: "Berbicara dengan orang terdekat",
        reflection: "Anda merasa lebih tenang dengan dukungan sosial.",
      },
      {
        text: "Melakukan hobi atau aktivitas fisik",
        reflection: "Anda menggunakan aktivitas positif untuk meredakan stres.",
      },
      {
        text: "Menyendiri untuk refleksi diri",
        reflection: "Anda lebih nyaman menghadapi stres dengan introspeksi.",
      },
      {
        text: "Membuat rencana baru atau solusi",
        reflection:
          "Anda lebih proaktif dan mencari solusi untuk mengatasi stres.",
      },
    ],
  },
  {
    question: "Bagaimana Anda menyikapi perubahan besar dalam hidup?",
    answers: [
      {
        text: "Menerima dengan positif",
        reflection: "Anda terbuka pada perubahan dan cenderung fleksibel.",
      },
      {
        text: "Perlu waktu untuk menyesuaikan diri",
        reflection: "Anda realistis dan butuh adaptasi.",
      },
      {
        text: "Merasa cemas tetapi mencoba bertahan",
        reflection: "Anda mungkin khawatir, namun tetap berusaha beradaptasi.",
      },
      {
        text: "Menghindar atau mengabaikan perubahan",
        reflection:
          "Anda lebih nyaman dengan stabilitas dan kurang suka perubahan.",
      },
    ],
  },
];

let currentQuestionIndex = 0;
let reflections = [];

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result");
const reflectionText = document.getElementById("reflection");

function startQuiz() {
  currentQuestionIndex = 0;
  reflections = [];
  nextButton.style.display = "none";
  resultContainer.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtons.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  reflections.push(answer.reflection);
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultContainer.style.display = "block";
  resultText.innerText = `Kuis selesai! Berikut adalah refleksi dari jawaban Anda:`;
  reflectionText.innerHTML = reflections
    .map((reflection, index) => `<p>${index + 1}. ${reflection}</p>`)
    .join("");
}

document.getElementById("restart-button").addEventListener("click", startQuiz);

// Start the quiz when the page loads
startQuiz();
