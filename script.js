let firstNum = '';
let operator = null;
let secondNum = '';

const numberBtns = document.querySelectorAll('.digits')
const mainDisplay = document.querySelector('.input')

numberBtns.forEach(button => 
    button.addEventListener('click', () => addNumber(button.textContent))
)

function addNumber(number) {
    if (mainDisplay.textContent === '0'){
        mainDisplay.textContent = ''
    }
    mainDisplay.textContent += number
}

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

