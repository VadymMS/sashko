const textElement = document.querySelector('#text');
const buttonPlus = document.querySelector('#plus');
const buttonMinus = document.querySelector('#minus');
const buttonReset = document.querySelector('#reset');
let number = +textElement.textContent;

buttonPlus.addEventListener('click', () => (textElement.textContent = ++number));
buttonMinus.addEventListener('click', () => (textElement.textContent = --number));
buttonReset.addEventListener('click', () => {
    number = 0;
    textElement.textContent = number;
});
