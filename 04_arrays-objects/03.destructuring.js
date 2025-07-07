/**
 * COMPLETE DESTRUCTURING GUIDE
 * Covers:
 * - Array destructuring
 * - Object destructuring
 * - Nested patterns
 * - Practical use cases
 */

// ================ Array Destructuring ================
// Basic assignment
const [first, second] = [1, 2];
console.log(first, second); // 1, 2

// Skipping items
const [a, , c] = [1, 2, 3];
console.log(a, c); // 1, 3

// Rest pattern
const [head, ...tail] = [1, 2, 3];
console.log(tail); // [2, 3]

// Default values
const [x = 1, y = 2] = [undefined, 5];
console.log(x, y); // 1, 5

// ================ Object Destructuring ================
const person = {
  name: 'Alice',
  age: 30,
  address: {
    city: 'Paris'
  }
};

// Basic destructuring
const { name, age } = person;
console.log(name, age); // 'Alice', 30

// Renaming properties
const { name: personName } = person;
console.log(personName); // 'Alice'

// Default values
const { country = 'France' } = person;
console.log(country); // 'France'

// ================ Nested Destructuring ================
// Nested objects
const { address: { city } } = person;
console.log(city); // 'Paris'

// Nested arrays
const nestedArr = [1, [2, 3]];
const [n1, [n2, n3]] = nestedArr;
console.log(n1, n2, n3); // 1, 2, 3

// ================ Practical Use Cases ================
// Function parameters
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
printUser(person); // "Alice is 30 years old"

// Swapping variables
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n); // 2, 1

// API responses
async function fetchData() {
  const response = await fetch('/api/user');
  const { data } = await response.json();
  return data;
}

// ================ Interview Questions ================
// Q1: Extract first and last array elements
const nums = [1, 2, 3, 4];
const [firstNum, , , lastNum] = nums;
console.log(firstNum, lastNum); // 1, 4

// Q2: Destructure with default + rename
const settings = { theme: 'dark' };
const { theme: userTheme = 'light' } = settings;
console.log(userTheme); // 'dark'

// Q3: Nested object with defaults
const book = { 
  title: 'JS Guide',
  metadata: { 
    published: undefined 
  }
};
const { 
  title, 
  metadata: { published: pubDate = '2023' } 
} = book;
console.log(pubDate); // '2023'