let firstNum = '';
let secondNum = '';
let operator = null;
let selfClear = false

const numberBtns = document.querySelectorAll('.digits')
const operatorBtns = document.querySelectorAll('.operator')
const equals = document.querySelector('.equal')
const clear = document.querySelector('.clear')

const mainDisplay = document.querySelector('.input')
const secondDisplay = document.querySelector('.equation')

numberBtns.forEach(button => 
    button.addEventListener('click', () => addNumber(button.textContent))
)

operatorBtns.forEach(button => 
    button.addEventListener('click', () => performOperation(button.textContent))    
)

equals.addEventListener('click', total)

clear.addEventListener('click', clearScreen)

function addNumber(number) {
    if (mainDisplay.textContent === '0' || selfClear){
        mainDisplay.textContent = ''
        selfClear = false
    }
    mainDisplay.textContent += number
}

function performOperation(operatorBtn) {
    if(operator !== null) total()
    firstNum = mainDisplay.textContent
    operator = operatorBtn
    secondDisplay.textContent = `${firstNum} ${operator}`
    selfClear = true
}

function total() {
    if(operator === null || selfClear){
        return
    }

    if (operator === '/' && mainDisplay.textContent === '0') {
        mainDisplay.textContent = 'Can not divide by 0'
        return
    }
    secondNum = mainDisplay.textContent
    mainDisplay.textContent = operate(firstNum, operator, secondNum)
    secondDisplay.textContent = `${firstNum} ${operator} ${secondNum} =`
    operator = null
}

function clearScreen() {
    mainDisplay.textContent = '0'
    secondDisplay.textContent = ''
    firstNum = ''
    secondNum = ''
    operator = null
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
    first = parseInt(first)
    second = parseInt(second)
    switch(op) {
        case '+':
            return add(first, second)
        case '-':
            return subtract(first, second)
        case 'x':
            return multiply(first, second)
        case '/':
            return divide(first, second)
    }
}