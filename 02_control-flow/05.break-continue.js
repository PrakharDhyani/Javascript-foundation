/**
 * =============================================
 * COMPLETE BREAK/CONTINUE GUIDE
 * =============================================
 * 
 * Covers:
 * - Break statement
 * - Continue statement
 * - Labeled statements
 * - Real-world examples
 * - Interview questions
 */

// ========================
// 1. BASIC SYNTAX
// ========================

// Break - exit loop entirely
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0,1,2,3,4
}

// Continue - skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0,1,3,4
}

// ========================
// 2. LABELED STATEMENTS
// ========================

outerLoop: 
for (let i = 0; i < 3; i++) {
  innerLoop:
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outerLoop;
    console.log(i, j);
  }
}
// Output: 0,0  0,1  0,2  1,0

// ========================
// 3. REAL-WORLD EXAMPLES
// ========================

// Search in array
const users = ["Alice", "Bob", "Charlie"];
let foundUser = null;
for (const user of users) {
  if (user === "Bob") {
    foundUser = user;
    break;
  }
}

// Skip invalid data
const data = [1, null, 2, undefined, 3];
for (const item of data) {
  if (!item) continue;
  processItem(item);
}

// ========================
// 4. EDGE CASES
// ========================

// Break in switch vs loops
const val = 1;
switch (val) {
  case 1:
    console.log(1);
    break; // Only breaks switch, not outer loops
}

// Continue in while loops
let i = 0;
while (i < 5) {
  i++;
  if (i === 3) continue;
  console.log(i); // 1,2,4,5
}

// ========================
// 5. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: What's the difference between break and continue?
 * A:
 * - Break: Exits the entire loop
 * - Continue: Skips to next iteration
 */

/**
 * Q2: When would you use labeled statements?
 * A: When breaking/continuing nested loops
 */

/**
 * Q3: Write a loop that processes numbers but:
 * - Skips negatives
 * - Stops when finds a number > 100
 */
function processNumbers(numbers) {
  for (const num of numbers) {
    if (num < 0) continue;
    if (num > 100) break;
    console.log(num);
  }
}