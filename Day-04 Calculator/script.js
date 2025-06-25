  const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "C") {
                currentInput = "";
                display.textContent = "";
            } else if (value === "CE") {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput;
            } else if (value === "=") {
                try {
                    const result = eval(currentInput.replace(/x/g, "*"));
                    display.textContent = result;
                    currentInput = result.toString();
                } catch {
                    display.textContent = "Error";
                    currentInput = "";
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });