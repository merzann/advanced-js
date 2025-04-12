/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     //Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     //Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers = (a, b) => a + b;
// const addTwoNumbers2 = (a, b) =>(a + b); //also a valid way
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// // Implicit Returns
// const saySomething = message => console.log(message);
// saySomething('Hello there!');

// const sayHello = () => console.log('Helllo again!');
// sayHello();

// // Returning Multiple Lines
// const returnMultipleLines = () => (
//     `<p>
//         This is a multiline string!
//     </p>`
// )
// console.log(returnMultipleLines());

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

// Declare the function using arrow syntax
const averagePoints = (arr, subject) => {
    let total = 0;
    let count = 0;

    // Loop through students
    for (let student of arr) {
        // Check if subject exists in student's results
        if (student.results.hasOwnProperty(subject)) {
            total += student.results[subject];
            count++;
        }
    }

    // Return the average (avoid division by zero)
    return count > 0 ? total / count : 0;
};

// Call the function and log the result
let averageMarks = averagePoints(students, 'science');
console.log(averageMarks);

// Get total mark for each student
const getTotalMarksPerStudent = (arr) => {
    return arr.map(student => {
        const total = Object.values(student.results).reduce((sum, mark) => sum + mark, 0);
        return {
            name: student.name,
            totalMarks: total
        };
    });
};

const studentTotals = getTotalMarksPerStudent(students);

studentTotals.forEach(student => {
    console.log(`${student.name}: ${student.totalMarks}`);
});



