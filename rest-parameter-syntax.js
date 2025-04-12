// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);

console.log ("Sum:", sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6)

console.log ("Sum2:", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log ("Sum3:", sum3);


// Challenge:
let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];


// Create `moreMixedLetters` as a copy of `mixedLetters` + six new letters in a single line
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

console.log("moreMixedLetters:", moreMixedLetters);

// Create an arrow function `updateSortReverse` with rest parameter
const updateSortReverse = (arr, ...letters) => {
  return [...arr, ...letters].sort().reverse();
};

// Call the function with `moreMixedLetters` and some new letters
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log("reverseSort:", reverseSort);

// Verify `mixedLetters` hasn't changed
console.log("mixedLetters:", mixedLetters);