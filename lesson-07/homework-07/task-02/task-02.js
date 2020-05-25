// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>

// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsElement = document.querySelector('#ingredients');

const ingredientsList = ingredients.reduce((allIngreds, ingred) => {
  const item = document.createElement('li');
  item.textContent = ingred;
  allIngreds.push(item);
  return allIngreds;
}, []);

// const ingredientsList = [];
// ingredients.forEach(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   ingredientsList.push(item);
// });

ingredientsElement.append(...ingredientsList);
console.log(ingredientsElement);

// **************************************************
// Вариант 2. Без использования document.createElement()
// const ingredientsElement2 = document.querySelector('#ingredients');
// ingredientsElement2.innerHTML = ingredients.reduce(
//   (tagsString, item) => `${tagsString}<li>${item}</li>`,
//   '',
// );
// console.log(ingredientsElement2);

// Console output (formatted manually):
// <ul id="ingredients">
//   <li>Картошка</li>
//   <li>Грибы</li>
//   <li>Чеснок</li>
//   <li>Помидоры</li>
//   <li>Зелень</li>
//   <li>Приправы</li>
// </ul>
