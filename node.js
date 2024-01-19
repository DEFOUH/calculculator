
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-holder button');
    let currentOperand = '';
    let previousOperand = '';
    let operation = null;

    buttons.forEach(button => button.addEventListener('click', function(e) {
        const buttonValue = e.target.innerText;

        if (buttonValue === 'C') {
            currentOperand = '';
            previousOperand = '';
            operation = null;
            updateDisplay();
            return;
        }

        if (buttonValue === 'DEL') {
            currentOperand = currentOperand.slice(0, -1);
            updateDisplay();
            return;
        }

        if (buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '/') {
            operation = buttonValue;
            previousOperand = currentOperand;
            currentOperand = '';
            updateDisplay();
            return;
        }

        if (buttonValue === '=') {
            currentOperand = eval(previousOperand + operation + currentOperand);
            operation = null;
            previousOperand = '';
            updateDisplay();
            return;
        }

        currentOperand += buttonValue;
        updateDisplay();
    }));

    function updateDisplay() {
        const display = document.querySelector('.compute-text');
        display.innerText = currentOperand;
    }
});