let firstNum;
let operator;
let secondNum;

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(first, op, second) {
    switch(op) {
        case '+':
            return add(first, second)
        case '-':
            return subtract(first, second)
        case '*':
            return multiply(first, second)
        case '/':
            return divide(first, second)
    }
}

console.log(operate(5, '*', 6))

