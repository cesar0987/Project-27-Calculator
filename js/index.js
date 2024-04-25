const showText = document.querySelector("#display")
let numberPressed = '0';
let operator = '';
let firstOperand = '';
let secondOperand = '';


function press(number) {
    if (showText.textContent === 'ERROR') {
        showText.textContent = '0';
        numberPressed = '';
    }

    
    if (numberPressed.length < 10) { 
        
        if (number === '.') {
            if (!numberPressed.includes('.')) {
                numberPressed += number;
            }
        } else {
            if (numberPressed === '0') {
                numberPressed = number.toString();
            } else {
                numberPressed += number.toString();
            }
        }

        showText.textContent = numberPressed;
    }
}
function setOP(op) {
    operator = op;
    firstOperand = numberPressed;
    showText.textContent = '0';
    numberPressed = '0';
}

function calculate() {
    secondOperand = numberPressed;

    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'ERROR'; 
            }
            break;
        default:
            result = 'ERROR';
            break;
    }

    showText.textContent = result.toString().slice(0, 10);

    operator = '';
    firstOperand = '';
    secondOperand = '';
}

function clr() {
    showText.textContent = '0';
    numberPressed = '0';
}