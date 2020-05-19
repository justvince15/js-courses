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

  // Способ 1.1
  const allUniqueSkills = allSkills.filter(
    (skill, index, array) => array.indexOf(skill) === index,
  );

  return allUniqueSkills.sort();

  // Способ 1.2 - без промежуточного вычисления allUniqueSkills:
  // return allSkills
  //   .filter((skill, index, array) => array.indexOf(skill) === index)
  //   .sort();
};

const getSortedUniqueSkills2 = users => {
  const getAllSkills = users =>
    users.reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, []);

  // Способ 2.1
  const getAllUniqueSkills = allSkills =>
    allSkills.filter((skill, index, array) => array.indexOf(skill) === index);

  return getAllUniqueSkills(getAllSkills(users)).sort();

  // Способ 2.2 - без промежуточного использования getAllUniqueSkills():
  // return getAllSkills(users)
  //   .filter((skill, index, array) => array.indexOf(skill) === index)
  //   .sort();
};

console.log(getSortedUniqueSkills(users));
// ["adipisicing", "amet", "anim", "commodo", "culpa", "elit", "ex", "ipsum", "irure", "laborum", "lorem", "mollit", "non", "nostrud", "nulla", "proident", "tempor", "velit", "veniam"]

console.log(getSortedUniqueSkills2(users));
// ["adipisicing", "amet", "anim", "commodo", "culpa", "elit", "ex", "ipsum", "irure", "laborum", "lorem", "mollit", "non", "nostrud", "nulla", "proident", "tempor", "velit", "veniam"]
