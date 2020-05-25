// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// **************************************************
// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Вариант 1
console.log(
  `Количество категорий в ul#categories: ${
    document.querySelector('#categories').childElementCount
  }`,
);

// Вариант 2
const categoriesItems = document.querySelector('#categories').children;
console.log(`Количество категорий в ul#categories: ${categoriesItems.length}`);

// Вариант 3
const categoriesItems2 = document
  .getElementById('categories')
  .getElementsByClassName('item');
console.log(`Количество категорий в ul#categories: ${categoriesItems2.length}`);

// **************************************************
console.log('*'.repeat(50));
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега h2)
// и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// Вариант 1
const categoriesItems3 = document.querySelector('#categories').children;
[...categoriesItems3].forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('ul li').length}`);
});

// Вариант 2
const categoriesItems4 = document
  .getElementById('categories')
  .getElementsByClassName('item');
Array.from(categoriesItems4).forEach(item => {
  console.log(`Категория: ${item.getElementsByTagName('h2')[0].textContent}`);
  console.log(
    `Количество элементов: ${item.getElementsByTagName('li').length}`,
  );
});

// Console output:
// Количество категорий в ul#categories: 3
// Количество категорий в ul#categories: 3
// Количество категорий в ul#categories: 3
// **************************************************
// Категория: Животные
// Количество элементов: 4
// Категория: Продукты
// Количество элементов: 3
// Категория: Технологии
// Количество элементов: 5
// Категория: Животные
// Количество элементов: 4
// Категория: Продукты
// Количество элементов: 3
// Категория: Технологии
// Количество элементов: 5
