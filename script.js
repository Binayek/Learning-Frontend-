const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value) || value === ".") {
            currentInput += value;
            display.value = currentInput;
        }

        else if (value === "C") {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.value = "0";
        }

        else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || "0";
        }

        else if (["+", "−", "×", "÷"].includes(value)) {
            if (currentInput === "") return;
            operator = value;
            previousInput = currentInput;
            currentInput = "";
        }

        else if (value === "=") {
            if (currentInput === "" || previousInput === "") return;

            let result;
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);

            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "−":
                    result = num1 - num2;
                    break;
                case "×":
                    result = num1 * num2;
                    break;
                case "÷":
                    result = num2 === 0 ? "Error" : num1 / num2;
                    break;
            }

            display.value = result;
            currentInput = result.toString();
            previousInput = "";
            operator = "";
        }
    });
});
