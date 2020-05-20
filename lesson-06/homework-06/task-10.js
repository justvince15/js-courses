/* eslint-disable no-shadow */

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// eslint-disable-next-line import/extensions
import users from './users.js';

const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((skills, user) => {
    skills.push(...user.skills);
    return skills;
  }, []);

  return allSkills
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();
};

const getSortedUniqueSkills2 = users => {
  const getAllSkills = users =>
    users.reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, []);

  return getAllSkills(users)
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// ["adipisicing", "amet", "anim", "commodo", "culpa", "elit", "ex", "ipsum", "irure", "laborum", "lorem", "mollit", "non", "nostrud", "nulla", "proident", "tempor", "velit", "veniam"]

console.log(getSortedUniqueSkills2(users));
// ["adipisicing", "amet", "anim", "commodo", "culpa", "elit", "ex", "ipsum", "irure", "laborum", "lorem", "mollit", "non", "nostrud", "nulla", "proident", "tempor", "velit", "veniam"]
