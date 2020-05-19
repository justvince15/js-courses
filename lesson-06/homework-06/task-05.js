// Получить пользователя (не массив) по email (поле email, он уникальный).

// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const getUserWithEmail = (users, email) => {
  return users.filter(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}

console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}
