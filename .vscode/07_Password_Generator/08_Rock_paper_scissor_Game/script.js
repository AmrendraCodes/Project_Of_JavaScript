
function playGame (userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    document.getElementById("user-choice").textContent = "You choose: " + userChoice;
    document.getElementById("computer-choice").textContent = "Computer chooses: " + computerChoice;

    // Decide Winner
    let result = "";

    if (userChoice === computerChoice) {
        result = "It is a draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win! 🎉";
    } else {
        result = "Computer wins! 🤖";
    }

    document.getElementById("winner").textContent = result;
}