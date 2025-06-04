const diceGame = document.getElementById('dice');
const roll_Dice = document.getElementById('roll-btn');
const result = document.getElementById('result-text');

const dice_faces =  ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

roll_Dice.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() *6);
    diceGame.textContent = dice_faces[randomNumber];
    result.textContent = `you rolled a ${randomNumber + 1 }!`

});
