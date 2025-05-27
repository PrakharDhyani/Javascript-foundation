/**
 * =============================================
 * COMPLETE FOR LOOP GUIDE
 * =============================================
 * 
 * Covers:
 * - Basic for loop
 * - Looping through arrays
 * - Performance considerations
 * - Real-world examples
 * - Interview questions
 */

// ========================
// 1. BASIC SYNTAX
// ========================

for (let i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}

// ========================
// 2. ARRAY ITERATION
// ========================

const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Caching array length (optimization)
for (let i = 0, len = fruits.length; i < len; i++) {
  console.log(fruits[i]);
}

// ========================
// 3. REAL-WORLD EXAMPLES
// ========================

// Processing data
const transactions = [100, -50, 200, -25];
let balance = 0;
for (let i = 0; i < transactions.length; i++) {
  balance += transactions[i];
}
console.log("Balance:", balance);

// DOM manipulation
const buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

// ========================
// 4. EDGE CASES
// ========================

// Infinite loop danger
// for (let i = 0; i >= 0; i++) {
//   console.log("This will run forever");
// }

// Modifying array while looping
const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  numbers.push(i); // Infinite loop potential
  if (i > 10) break; // Safety
}

// ========================
// 5. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: What's the output?
 */
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); 
}
// Answer: 3,3,3 (var vs let scoping)

/**
 * Q2: How would you loop backwards?
 */
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

/**
 * Q3: Write a loop to find prime numbers
 */
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}