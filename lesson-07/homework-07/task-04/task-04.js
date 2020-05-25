// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrementButton = document.querySelector(
  'button[data-action="increment"]',
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]',
);
const counterValue = document.querySelector('#value');

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
