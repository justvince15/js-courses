// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const nameOutput = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');

const setOutputName = () => {
  if (nameInput.value !== '') {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = 'незнакомец';
  }
};

nameInput.addEventListener('input', setOutputName);
