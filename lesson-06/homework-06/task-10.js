// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((skills, user) => {
    skills.push(...user.skills);
    return skills;
  }, []);

  const allUniqueSkills = allSkills.reduce((uniqueSkills, skill) => {
    if (!uniqueSkills.includes(skill)) {
      uniqueSkills.push(skill);
    }
    return uniqueSkills;
  }, []);

  return allUniqueSkills.sort();
};

// eslint-disable-next-line no-shadow
const getSortedUniqueSkills2 = users => {
  // eslint-disable-next-line no-shadow
  const getAllSkills = users =>
    users.reduce((skills, user) => {
      skills.push(...user.skills);
      return skills;
    }, []);

  const getAllUniqueSkills = allSkills =>
    allSkills.reduce((uniqueSkills, skill) => {
      if (!uniqueSkills.includes(skill)) {
        uniqueSkills.push(skill);
      }
      return uniqueSkills;
    }, []);

  return getAllUniqueSkills(getAllSkills(users)).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', '

console.log(getSortedUniqueSkills2(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', '
