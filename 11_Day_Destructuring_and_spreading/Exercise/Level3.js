//* 1. Destructure the countries object print name, capital, population and languages of all countries
// for (const country of countries) {
//   const { name, capital, population, languages } = country;
//   console.log(name, capital, population, languages);
// }

//* 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [score, , ...[jsScore, reactScore]]] = student;
console.log(name, skills, jsScore, reactScore);

//* 3. Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

const convertArrayToObject = (student) => {
  const answer = [];
  for (const list of student) {
    const [name, skills, scores] = list;
    answer.push({ name: name, skills: skills, scores: scores });
  }
  return answer;
};

console.log(convertArrayToObject(students));

//* 4.Copy the student4 object to newStudent without mutating the original object. In the new object add the following ?
//TODO: Add Bootstrap with level 8 to the front end skill sets
//TODO: Add Express with level 9 to the back end skill sets
//TODO: SQL with level 8 to the data base skill sets
//TODO: Add SQL without level to the data science skill sets

const student4 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
};

const copyStudent4 = { ...student4 };
copyStudent4.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
copyStudent4.skills.backEnd.push({ skill: 'Express', level: 9 });
copyStudent4.skills.dataBase.push({ skill: 'SQL', level: 8 });
copyStudent4.skills.dataScience.push('SQL');
console.log(copyStudent4);
