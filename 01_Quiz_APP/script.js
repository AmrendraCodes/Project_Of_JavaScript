document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale"
        },
        {
            question: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
            answer: "JavaScript"
        },
        {
            question: "What year was JavaScript launched?",
            options: ["1996", "1995", "1994", "1997"],
            answer: "1995"
        }
    ];

    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    const questionNumberElement = document.getElementById('question-number');
    const totalQuestionsElement = document.getElementById('total-questions');
    const nextButton = document.getElementById('next-btn');
    const restartButton = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let answerSelected = false;

    totalQuestionsElement.textContent = quizData.length;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        answerSelected = false;
        scoreElement.textContent = score;
        showQuestion();
        nextButton.style.display = 'inline-block';
        restartButton.style.display = 'none';
    }

    function showQuestion() {
        answerSelected = false;
        resetState();
        const currentQuestion = quizData[currentQuestionIndex];
        questionNumberElement.textContent = currentQuestionIndex + 1;
        questionElement.textContent = currentQuestion.question;

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectAnswer(option));
            optionsElement.appendChild(button);
        });
    }

    function resetState() {
        while (optionsElement.firstChild) {
            optionsElement.removeChild(optionsElement.firstChild);
        }
        nextButton.style.display = 'none';
    }

    function selectAnswer(selectedOption) {
        if (answerSelected) return;
        
        answerSelected = true;
        const currentQuestion = quizData[currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        options.forEach(option => {
            if (option.textContent === currentQuestion.answer) {
                option.classList.add('correct');
            } else if (option.textContent === selectedOption && selectedOption !== currentQuestion.answer) {
                option.classList.add('incorrect');
            }
            option.disabled = true;
        });

        if (selectedOption === currentQuestion.answer) {
            score++;
            scoreElement.textContent = score;
        }

        nextButton.style.display = 'inline-block';
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        resetState();
        questionElement.textContent = `Quiz completed! Your score is ${score} out of ${quizData.length}`;
        nextButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    }

    nextButton.addEventListener('click', showNextQuestion);
    restartButton.addEventListener('click', startQuiz);

    startQuiz();
});