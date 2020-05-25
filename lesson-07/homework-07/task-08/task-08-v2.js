// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

// Создай функцию destroyBoxes(), которая очищает div#boxes.

// ДАННАЯ ВЕРСИЯ СКРИПТА ПОЗВОЛЯЕТ ДОБАВЛЯТЬ DIV BOXES КАЖДЫЙ РАЗ ПРИ НАЖАТИИ "СОЗДАТЬ"

const boxes = document.querySelector('#boxes');
const divsNumber = document.querySelector('#controls input[type="number"]');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
let existingBoxesNumber = 0;

const createBoxes = amount => {
  console.log(existingBoxesNumber);
  const divBoxes = [];
  let divSide = 30 + existingBoxesNumber * 10; // px
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${divSide}px`;
    div.style.height = `${divSide}px`;
    div.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215,
    ).toString(16)}`;
    div.style.border = '1px solid black'; // For better visibility of white divs
    divBoxes.push(div);
    divSide += 10;
  }
  boxes.append(...divBoxes);
  existingBoxesNumber += Number(amount);
};

const destroyBoxes = () => {
  existingBoxesNumber = 0;
  boxes.innerHTML = '';
};

const renderBoxes = () => {
  createBoxes(divsNumber.value);
};

render.addEventListener('click', renderBoxes);
destroy.addEventListener('click', destroyBoxes);
