function appendToDisplay(value) {
    const display = document.querySelector('.calculator-screen');
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.querySelector('.calculator-screen').value = '';
}

function calculate() {
    const display = document.querySelector('.calculator-screen');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
