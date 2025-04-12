// Destructuring arrays
let ages = [ 30, 26, 27];

// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages

console.log(john, mary, joe);


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicias: "accountant",
}
 
// let mike = jobs.mike;
// let jill = jobs.jill;
// let alicias = jobs.alicias;
let { mike, jill, alicias } = jobs;

console.log(mike, jill, alicias);


// Destructuring subsets in arrays
let languages = ["english", "french", "spanish", "german", "japanese"];

let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

// Skip array values
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);


// Destructuring subsets in objects
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage} = languages2;

console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax on arrays
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;

console.log(favourite);
console.log(secondFavourite);
console.log(others);


// Using rest parameter syntax on objects
let favouriteFoods ={
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, ...other} = favouriteFoods;

console.log(brian);
console.log(anna);
console.log(other);

// Challenge
let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
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

// Declare the function
const makeList = (arr, student) => {
    return arr.find(s => s.name === student).subjects;
};

// Destructure the result of calling makeList with "John"
let [first, second, ...rest] = makeList(students, 'John');

// Log out the values
console.log(first);   // "art"
console.log(second);  // "cad"
console.log(rest);    // ["english", "maths", "science"]
