/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log("Second array:", arr2);
console.log("First array:", arr1);

// Copying an array
arr3 = [4, 5, 6];
arr4 = [...arr3];

arr4.push(7);

console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4 };
let obj3 = { ...obj1, b: 5};

console.log("First Object:", obj1);
console.log("Second Object", obj2);
console.log("Third Object:", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, "x", "y", "z"];

console.log(arr5);

let students = [
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
        results: {science: 63, maths: 87, art: 95},
    }
];

// Create a variable named 'subjects' and assign it a copy of the subjects array from the first object
let subjects = [...students[0].subjects];

// Create a single line arrow function assigned to 'update' that copies the array and adds a value
const update = (item, val) => [...item, val];

// Use the update function to create a new array with "Electronics" added
let updatedSubjects = update(subjects, "Electronics");

// Log the result
console.log(updatedSubjects);
console.log(students[0]);