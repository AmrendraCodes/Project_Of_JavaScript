let randomNumber = Math.floor(Math.random() * 101);
let attemptsleft = 15;

const Guess_area = document.getElementById("guess");
const Guess_button = document.getElementById("GuessButton");
const Reset_button = document.getElementById("ResetButtons");
const Max_Attempt = document.getElementById("attempt");

Max_Attempt.textContent = `Remaining attempts: ${attemptsleft}`;

Guess_button.addEventListener('click', () => {
    const userGuess = Number(Guess_area.value);

    if (userGuess < 0 || userGuess > 100 || isNaN(userGuess)) {
        alert("Please enter a number between 0 to 100");
        return;
    }

    attemptsleft--;
    Max_Attempt.textContent = `Remaining attempts: ${attemptsleft}`;

    if (userGuess === randomNumber) {
        alert(`Congrats!!! You guessed the number!`);
        Guess_button.disabled = true;
    } else if (userGuess < randomNumber) {
        alert(`OOPS!! Your number is too low`);
    } else {
        alert(`OOPS!! Number is too high`);
    }

    if (attemptsleft === 0 && userGuess !== randomNumber) {
        alert(`❌ Game over! The number was ${randomNumber}`);
        Guess_button.disabled = true;
    }
});

Reset_button.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 101);
    attemptsleft = 15;
    Guess_area.value = "";
    Max_Attempt.textContent = `Remaining attempts: ${attemptsleft}`;
    Guess_button.disabled = false;
});

