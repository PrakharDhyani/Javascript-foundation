/**
 * =============================================
 * COMPLETE GUIDE TO FUNCTION DECLARATIONS
 * =============================================
 * 
 * Covers:
 * - Basic syntax
 * - Hoisting behavior
 * - Parameters and arguments
 * - Return values
 * - Function scope
 * - Interview questions
 */

// ========================
// 1. BASIC SYNTAX
// ========================

/**
 * Function Declaration
 * - Starts with 'function' keyword
 * - Has a name (identifier)
 * - Can be called before declaration (hoisted)
 */
function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("Alice")); // "Hello, Alice!"

// ========================
// 2. HOISTING BEHAVIOR
// ========================

/**
 * Function declarations are hoisted
 * - Moved to top of their scope during compilation
 * - Can be called before declaration
 */

// This works due to hoisting
console.log(square(5)); // 25

function square(num) {
  return num * num;
}

// ========================
// 3. PARAMETERS VS ARGUMENTS
// ========================

/**
 * Parameters - Variables in function definition
 * Arguments - Actual values passed to function
 */
function sum(a, b) { // a, b are parameters
  return a + b;
}

console.log(sum(2, 3)); // 2, 3 are arguments

// Default parameters (ES6)
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // 5 (uses default b)

// ========================
// 4. RETURN STATEMENTS
// ========================

/**
 * Functions return undefined by default
 * Use return to send value back
 */
function noReturn() {
  // does something
}
console.log(noReturn()); // undefined

function withReturn() {
  return "Value";
}
console.log(withReturn()); // "Value"

// ========================
// 5. FUNCTION SCOPE
// ========================

/**
 * Variables declared inside function
 * are not accessible outside
 */
function scopeDemo() {
  const secret = 123;
  console.log(secret); // works
}
// console.log(secret); // ReferenceError

// ========================
// 6. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: What's the difference between function declaration and expression?
 * A: 
 * - Declaration: hoisted, has name
 * - Expression: not hoisted, can be anonymous
 */

/**
 * Q2: What happens if you call a function declaration before its definition?
 * A: It works due to hoisting
 */

/**
 * Q3: How would you create a function with default parameters?
 * A: 
 * function example(param = defaultValue) {...}
 */

/**
 * Q4: What's the output?
 */
function test() {
  return
  {
    key: "value"
  };
}
console.log(test()); // undefined (due to ASI)

/**
 * Q5: How are arguments passed in JavaScript?
 * A: 
 * - By value for primitives
 * - By reference for objects
 */

// ========================
// 7. BEST PRACTICES
// ========================

/**
 * - Use descriptive names
 * - Keep functions small/single-purpose
 * - Limit parameters (3-4 max)
 * - Document complex functions
 */

// ========================
// 8. REAL-WORLD EXAMPLES
// ========================

// Form validation function
function isValidEmail(email) {
  const re = /^[^@]+@\w+\.\w+$/;
  return re.test(email);
}

// Data transformation
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}