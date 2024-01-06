const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
let counter = parseInt(localStorage.getItem('counter')) || 0;

const updateDisplay = () => {
  counterDisplay.textContent = counter;
};

const saveCounter = () => {
  localStorage.setItem('counter', counter);
};

incrementBtn.addEventListener('click', () => {
  counter++;
  updateDisplay();
  saveCounter();
});

decrementBtn.addEventListener('click', () => {
  counter--;
  updateDisplay();
  saveCounter();
});

updateDisplay();