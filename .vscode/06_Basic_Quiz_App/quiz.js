const questions = [{
    question: "What is the capital of India?",
    answers: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    correct: 0
},
{
    question: "What does HTML stand for?",
    answers: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HighText Machine Language", "None"],
    correct: 1 
}
];

const questionE1 = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionE1.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.addEventListener('click', () => selectAnswer(index));
        answerButton.appendChild(btn);
    });
}

function resetState() {
    answerButton.innerHTML = "";
}

function selectAnswer(index) {
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
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextBtn.style.display = "none";
    } else {
        questionE1.innerText = "Quiz Complete";
        answerButton.innerHTML = "";
        nextBtn.style.display = "none";
    }
});

showQuestion();







