
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let resetScreen = false;

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num-buttons");
const opButtons = document.querySelectorAll(".op-buttons");
const eqButton = document.querySelector(".eqbutton");
const clearButton = document.querySelector(".clr-button");

numButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});
opButtons.forEach(button => {
    button.addEventListener('click', () => setOperation(button.textContent));
});
eqButton.addEventListener('click', () => compute());
clearButton.addEventListener('click', () => clear());

function appendNumber(num) {
    if (resetScreen) {
        display.textContent = "";
        resetScreen = false;
    }
    display.textContent += num;
}

function setOperation(op) {
    if (currentOperator !== null) compute();
    firstOperand = display.textContent;
    currentOperator = op;
    resetScreen = true;
}


function compute() {
    secondOperand = display.textContent;
    display.textContent = operate(currentOperator, firstOperand, secondOperand);
    currentOperator = null;
}

function clear() {
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
}

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            /* Error handling for division by zero */
            if (y === 0) return 'Error! Div by 0';
            return x / y;
        default:
            return y;
    }
}