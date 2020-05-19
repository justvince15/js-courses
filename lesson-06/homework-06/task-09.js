// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const getNamesSortedByFriendsCount = users => {
  return users.sort(
    (user1, user2) => user1.friends.length - user2.friends.length,
  );
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
