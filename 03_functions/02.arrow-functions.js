/**
 * =============================================
 * COMPLETE GUIDE TO ARROW FUNCTIONS (ES6+)
 * =============================================
 * 
 * Covers:
 * - Basic syntax
 * - Implicit vs explicit return
 * - 'this' binding behavior
 * - When to use/avoid
 * - Interview questions
 */

// ========================
// 1. BASIC SYNTAX
// ========================

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function equivalent
const addArrow = (a, b) => {
  return a + b;
};

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const greet = () => "Hello!";

// ========================
// 2. IMPLICIT RETURN
// ========================

// With curly braces (explicit return)
const sum = (a, b) => {
  return a + b;
};

// Without curly braces (implicit return)
const sumShort = (a, b) => a + b;

// Returning object literal (needs parentheses)
const makeUser = (name) => ({ name });

// ========================
// 3. 'THIS' BINDING
// ========================

/**
 * Arrow functions don't have their own 'this'
 * They inherit 'this' from surrounding scope
 */

// Traditional function has its own 'this'
const obj1 = {
  value: 10,
  getValue: function() {
    return this.value; // works
  }
};

// Arrow function inherits 'this'
const obj2 = {
  value: 10,
  getValue: () => this.value // undefined (window.value)
};

// ========================
// 4. WHEN TO USE/AVOID
// ========================

/**
 * Use arrow functions for:
 * - Short callbacks
 * - Functions needing lexical 'this'
 * - Functional programming
 * 
 * Avoid for:
 * - Object methods
 * - Constructor functions
 * - Event handlers needing 'this'
 */

// ========================
// 5. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: What's the main difference between arrow and regular functions?
 * A: 
 * - Arrow functions have no 'this', 'arguments', can't be constructors
 * - Regular functions have their own 'this' binding
 */

/**
 * Q2: Can you use arrow functions as constructors?
 * A: No, they throw TypeError when used with 'new'
 */

/**
 * Q3: What's the output?
 */
const obj = {
  x: 10,
  a: function() { return this.x },
  b: () => this.x
};
console.log(obj.a(), obj.b()); // 10, undefined

/**
 * Q4: How would you rewrite this with arrow function?
 */
[1, 2, 3].map(function(x) { return x * x });

/**
 * A: 
 * [1, 2, 3].map(x => x * x)
 */

/**
 * Q5: What's the shortest way to write an arrow function that returns an object?
 * A: 
 * const makeObj = () => ({ key: 'value' })
 */

// ========================
// 6. BEST PRACTICES
// ========================

/**
 * - Use for short, simple functions
 * - Avoid when 'this' binding is needed
 * - Be consistent with implicit/explicit return
 */

// ========================
// 7. REAL-WORLD EXAMPLES
// ========================

// Array operations
const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n);

// Promise chains
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));