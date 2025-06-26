const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let justEvaluated = false;  // Flag to track if "=" was just pressed

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            display.textContent = "";
            justEvaluated = false;
        } else if (value === "CE") {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
            justEvaluated = false;
        } else if (value === "=") {
            try {
                const result = eval(currentInput.replace(/x/g, "*"));
                display.textContent = result;
                currentInput = result.toString();
                justEvaluated = true;
            } catch {
                display.textContent = "Error";
                currentInput = "";
                justEvaluated = false;
            }
        } else {
            // If user starts typing a number after "=", reset input
            if (justEvaluated && /[0-9]/.test(value)) {
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
            justEvaluated = false;
        }
    });
});
