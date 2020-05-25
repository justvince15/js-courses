// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControl = document.querySelector('input[id="font-size-control"]');
const textElement = document.querySelector('span[id="text"]');

const changeFontSize = () => {
  textElement.style.fontSize = `${fontSizeControl.value}px`;
};

fontSizeControl.addEventListener('input', changeFontSize);
