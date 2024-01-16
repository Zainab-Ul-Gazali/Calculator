let currentInput = '0';

function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function appendDigit(digit) {
  if (currentInput === '0') {
    currentInput = digit.toString();
  } else {
    currentInput += digit.toString();
  }
  updateDisplay();
}

function appendSymbol(symbol) {
  currentInput += symbol;
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}