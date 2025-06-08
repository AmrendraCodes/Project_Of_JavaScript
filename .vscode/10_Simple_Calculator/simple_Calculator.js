let display = document.getElementById('numarea');
let currentInput = ""; 

function Appendvalue(value) {
    currentInput += value;
    display.value = currentInput;
}


function ClearDisplay() {
    currentInput = "";
    display.value = "";
}


function calculate() {
    try {
        let result = eval(currentInput);
       
        if (typeof result === "number" && !Number.isInteger(result)) {
            result = parseFloat(result.toFixed(10));
        }
        display.value = result;
        currentInput = result.toString();
    } catch (e) {
        display.value = "Error";
        currentInput = "";
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
    }
    const key = event.key;
    if ((key >= "0" && key <= "9") || key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
        Appendvalue(key);
    }

    // Enter or = to calculate
    if (key === "Enter" || key === "=") {
        calculate();
    }

    // Escape or C to clear
    if (key === "Escape" || key.toLowerCase() === "c") {
        ClearDisplay();
    }

    // Allow backspace to remove last character
    if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }
})
