// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
