// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputElement = document.querySelector('#validation-input');
console.log(inputElement);

const checkInputValue = () => {
  const dataLength = Number(inputElement.getAttribute('data-length'));
  if (inputElement.value.length !== dataLength) {
    inputElement.setAttribute('class', 'invalid');
  } else {
    inputElement.setAttribute('class', 'valid');
  }
};

inputElement.addEventListener('blur', checkInputValue);
inputElement.addEventListener('focus', () =>
  inputElement.removeAttribute('class'),
);
