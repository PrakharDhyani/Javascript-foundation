/**
 * COMPLETE ARRAY METHODS GUIDE
 * Covers:
 * - Iteration methods
 * - Transformation methods
 * - Search methods
 * - Reduction methods
 * - Modern ES6+ methods
 */

// ================ Iteration Methods ================
const numbers = [1, 2, 3, 4, 5];

// forEach - executes for each element (no return)
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// map - creates new transformed array
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - creates new array with matching elements
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// ================ Search Methods ================
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// find - returns first match
const bob = users.find(user => user.name === 'Bob');
console.log(bob); // { id: 2, name: 'Bob' }

// some - checks if any element passes test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// ================ Transformation Methods ================
// reduce - accumulates values
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// flat - flattens nested arrays
const nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1, 2, 3]

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]


// ================ Modern ES6+ Methods ================
// at - access elements with negative indexes
console.log(numbers.at(-1)); // 5 (last element)

// findLast - find from end
const lastEven = numbers.findLast(num => num % 2 === 0);
console.log(lastEven); // 4

// ================ Performance Considerations ================
/* 
Method    | Time Complexity
----------|----------------
push/pop  | O(1)
shift     | O(n)
includes  | O(n)
sort      | O(n log n)
*/

// ================ Interview Questions ================
// Q1: Implement array.map()
// Implementing our own version of Array.map()

Array.prototype.myMap = function(callback) {
  // 1. Create an empty array to store results
  const result = [];
  
  // 2. Loop through each element of the array
  for (let i = 0; i < this.length; i++) {
    // 3. Call the callback function for each element and store the result
    result.push(callback(this[i], i, this));
  }
  
  // 4. Return the new array with transformed elements
  return result;
};


// Q2: Remove duplicates
const dupes = [1, 2, 2, 3];
const unique = [...new Set(dupes)];
console.log(unique); // [1, 2, 3]