let quizzes = {};
let currentQuestions = [];

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

function addQuestion() {
  const questionText = document.getElementById('questionText').value.trim();
  const choices = [
    document.getElementById('choice1').value.trim(),
    document.getElementById('choice2').value.trim(),
    document.getElementById('choice3').value.trim(),
    document.getElementById('choice4').value.trim()
  ];
  const correctChoice = parseInt(document.getElementById('correctChoice').value) - 1;

  if (!questionText || choices.some(c => c === "") || isNaN(correctChoice) || correctChoice < 0 || correctChoice > 3) {
    alert("Please fill all fields correctly.");
    return;
  }

  currentQuestions.push({
    question: questionText,
    choices: choices,
    correctChoice: correctChoice
  });

  document.getElementById('questionPreview').innerHTML += `
    <div class="question-card">
      <h4>${currentQuestions.length}. ${questionText}</h4>
      <p><strong>Choices:</strong> ${choices.join(", ")}</p>
      <p><strong>Correct Answer:</strong> Option ${correctChoice + 1}</p>
    </div>
  `;

  document.getElementById('questionText').value = "";
  document.getElementById('choice1').value = "";
  document.getElementById('choice2').value = "";
  document.getElementById('choice3').value = "";
  document.getElementById('choice4').value = "";
  document.getElementById('correctChoice').value = "";
}

function saveQuiz() {
  const quizName = document.getElementById('quizName').value.trim();

  if (!quizName || currentQuestions.length === 0) {
    alert("Enter quiz name and add at least one question.");
    return;
  }

  quizzes[quizName] = currentQuestions;
  currentQuestions = [];
  document.getElementById('quizName').value = "";
  document.getElementById('questionPreview').innerHTML = "";

  updateQuizDisplays();
  alert("Quiz saved successfully!");
}

function updateQuizDisplays() {
  const takeSelect = document.getElementById('takeQuizSelect');
  const viewSelect = document.getElementById('viewQuizSelect');
  const quizList = document.getElementById('quizList');
  const quizCount = document.getElementById('quizCount');

  takeSelect.innerHTML = "";
  viewSelect.innerHTML = "";
  quizList.innerHTML = "";

  const names = Object.keys(quizzes);

  names.forEach(name => {
    takeSelect.innerHTML += `<option value="${name}">${name}</option>`;
    viewSelect.innerHTML += `<option value="${name}">${name}</option>`;
    quizList.innerHTML += `<li>${name}</li>`;
  });

  quizCount.textContent = names.length;
}

function startQuiz() {
  const quizName = document.getElementById('takeQuizSelect').value;
  const quiz = quizzes[quizName];

  if (!quiz) {
    alert("Quiz not found.");
    return;
  }

  let currentIndex = 0;
  let score = 0;
  const quizArea = document.getElementById('quizArea');

  function showQuestion() {
    if (currentIndex >= quiz.length) {
      quizArea.innerHTML = `
        <div class="question-card">
          <h3>Quiz Completed!</h3>
          <p>Your Score: <strong>${score}/${quiz.length}</strong></p>
        </div>
      `;
      return;
    }

    const q = quiz[currentIndex];
    quizArea.innerHTML = `
      <div class="question-card">
        <h4>Question ${currentIndex + 1}: ${q.question}</h4>
        ${q.choices.map((choice, i) => `
          <button onclick="checkAnswer(${i}, ${q.correctChoice}, ${currentIndex}, ${score}, '${quizName}')">${i + 1}. ${choice}</button>
        `).join("")}
      </div>
    `;
  }

  window.checkAnswer = function(selected, correct, index, currentScore, quizName) {
    if (selected === correct) {
      score++;
    }
    currentIndex++;
    showQuestion();
  };

  showQuestion();
}

function viewQuiz() {
  const quizName = document.getElementById('viewQuizSelect').value;
  const quiz = quizzes[quizName];
  const area = document.getElementById('viewQuizArea');

  if (!quiz) {
    area.innerHTML = "<p>Quiz not found.</p>";
    return;
  }

  area.innerHTML = `<h3>${quizName}</h3>`;
  quiz.forEach((q, index) => {
    area.innerHTML += `
      <div class="question-card">
        <h4>Question ${index + 1}: ${q.question}</h4>
        <p>${q.choices.map((c, i) => `${i + 1}. ${c}`).join("<br>")}</p>
        <p><strong>Correct Answer:</strong> Option ${q.correctChoice + 1}</p>
      </div>
    `;
  });
}
c