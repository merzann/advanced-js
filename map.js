// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);


// Using map()
const multByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2});

console.log(simplified);

// Simplfied w/ map() + arrow function
const simplest = nums.map(num => num * 2);

console.log(simplest);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// Return an array containing teh student name and Id
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);


/** Challenge 1
 * Return the student name and id as objects with name and id properties
 * Return an array like original with an age property added to each student
*/
const studentsWithIdsObject = students.map(student => ({
  name: student.name,
  id: student.id
}));
console.log(studentsWithIdsObject);


const studentAges = {
  1: 24,
  2: 27,
  3: 22
};

const studentsWithAge = students.map(student => ({
  ...student,
  age: studentAges[student.id]
}));
console.log(studentsWithAge);


// Challenge 2
let studentList = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

// Create an arrow funciton within map()
const studentResults = student => [student.name, student.results];

// Destructuring array into john and rest using let
let [john, ...rest] = studentList.map(studentResults);

// Logging results
console.log(john);
console.log(rest);
