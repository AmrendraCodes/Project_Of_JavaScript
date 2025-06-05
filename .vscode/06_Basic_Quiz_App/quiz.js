const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
const questionE1 = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");
const timerSidebar = document.getElementById("sidebar-timer");
let timerInterval;
let timeLeft = 5; 
let score = 0;

function showQuestion() {
    answerButton.innerHTML = "";
    const currentQuestion = questions[currentQuestionIndex];
    questionE1.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.addEventListener('click', () => selectAnswer(index));
        answerButton.appendChild(btn);
    });
    nextBtn.style.display = "none";
    startTimer(); 
}

function selectAnswer(index) {
    clearInterval(timerInterval);
    const correctIndex = questions[currentQuestionIndex].correct;
    const buttons = answerButton.children;

    for (let i = 0; i < buttons.length; i++) {
        if (i === correctIndex) {
            buttons[i].style.backgroundColor = "green";
        } else if (i === index) {
            buttons[i].style.backgroundColor = "red";
        }
        buttons[i].disabled = true;
    }

    if (index === correctIndex) {
        score++;
    }

    nextBtn.style.display = "block";
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 5;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            disableAnswers();
            nextBtn.style.display = "block";
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerSidebar.textContent = `Time left: ${timeLeft}s`;
}

function disableAnswers() {
    const buttons = answerButton.children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionE1.innerText = `Quiz Complete! Your score: ${score}/${questions.length}`;
        answerButton.innerHTML = "";
        nextBtn.style.display = "none";
    }
});

showQuestion();