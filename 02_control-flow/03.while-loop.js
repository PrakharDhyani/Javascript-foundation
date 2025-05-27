    /**
 * =============================================
 * COMPLETE WHILE LOOP GUIDE
 * =============================================
 * 
 * Covers:
 * - While vs do-while
 * - Common patterns
 * - Real-world examples
 * - Interview questions
 */

// ========================
// 1. BASIC SYNTAX
// ========================

// While loop
let count = 0;
while (count < 5) {
  console.log(count); // 0,1,2,3,4
  count++;
}

// Do-while (runs at least once)
let input;
do {
  input = prompt("Enter yes to continue");
} while (input !== "yes");

// ========================
// 2. REAL-WORLD EXAMPLES
// ========================

// Password retry logic
let attempts = 0;
let correctPassword = "secret123";
let userPassword;

while (attempts < 3) {
  userPassword = prompt("Enter password");
  if (userPassword === correctPassword) {
    console.log("Access granted");
    break;
  }
  attempts++;
}

// Processing streams
let data;
while ((data = getNextDataChunk()) !== null) {
  processData(data);
}

// ========================
// 3. EDGE CASES
// ========================

// Infinite loop danger
// while (true) {
//   console.log("This runs forever");
// }

// Zero-iteration case
let flag = false;
while (flag) {
  console.log("Never runs");
}

// ========================
// 4. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: When would you use while vs for loop?
 * A: 
 * - While: Unknown iterations (user input, streams)
 * - For: Known iterations (arrays, fixed counts)
 */

/**
 * Q2: What's wrong with this loop?
 */
let n = 10;
while (n > 0) {
  console.log(n);
}
/**
 * Answer: Missing decrement (infinite loop)
 */

/**
 * Q3: Write a countdown timer
 */
function countdown(seconds) {
  while (seconds >= 0) {
    console.log(seconds);
    seconds--;
    sleep(1000);
  }
}