/**
 * =============================================
 * COMPLETE GUIDE TO REST/SPREAD OPERATORS
 * =============================================
 * 
 * Covers:
 * - Spread Operator (...)
 * - Rest Parameters (...)
 * - Use Cases and Patterns
 * - Real-world Examples
 * - Interview Questions
 */

// ========================
// 1. SPREAD OPERATOR
// ========================

// Array Spreading
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Function Arguments
console.log(Math.max(...arr1)); // 3

// Object Spreading (ES2018+)
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a:1, b:2, c:3 }

// Merging Objects
const defaults = { theme: 'light', fontSize: 16 };
const userSettings = { fontSize: 18 };
const finalSettings = { ...defaults, ...userSettings }; // { theme: 'light', fontSize: 18 }

// ========================
// 2. REST PARAMETERS
// ========================

// Collecting Arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6

// With Regular Parameters
function greet(greeting, ...names) {
  return `${greeting} ${names.join(', ')}!`;
}
console.log(greet('Hello', 'Alice', 'Bob')); // "Hello Alice, Bob!"

// ========================
// 3. DIFFERENCES
// ========================

// Spread in Array Literals
const parts = ['shoulders', 'knees'];
const body = ['head', ...parts, 'toes'];

// Rest in Function Parameters
function logArguments(first, ...rest) {
  console.log(first, rest);
}

// ========================
// 4. USE CASES
// ========================

// Copying Arrays
const original = [1, 2, 3];
const copy = [...original];

// Converting NodeList to Array
const divs = [...document.querySelectorAll('div')];

// Removing Duplicates
const duplicates = [1, 2, 2, 3];
const unique = [...new Set(duplicates)]; // [1, 2, 3]

// React Props Spreading
function MyComponent(props) {
  return <ChildComponent {...props} />;
}

// ========================
// 5. ADVANCED PATTERNS
// ========================

// Deep Clone (Simple Objects)
const person = { name: 'Alice', address: { city: 'Paris' } };
const clone = { ...person, address: { ...person.address } };

// Conditional Spreading
const condition = true;
const obj = {
  ...(condition && { key: 'value' })
};

// ========================
// 6. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: What's the difference between rest and spread?
 * A: Spread expands elements, rest collects them into an array
 */

/**
 * Q2: How to merge two objects without mutating?
 * A: 
 */
const merged = { ...obj1, ...obj2 };

/**
 * Q3: What's the output?
 */
function test(a, b, ...c) {
  console.log(c.length);
}
test(1, 2, 3, 4, 5); // 3

/**
 * Q4: How to convert arguments to array?
 * A: 
 */
function convertArgs() {
  return [...arguments];
}

// ========================
// 7. BEST PRACTICES
// ========================

// 1. Use for immutable operations
// 2. Prefer rest over arguments object
// 3. Be careful with deep object references
// 4. Use for clean array/object manipulation

// ========================
// 8. REAL-WORLD EXAMPLES
// ========================

// API Response Merging
const baseResponse = { status: 'success', timestamp: Date.now() };
const userData = { id: 1, name: 'Alice' };
const apiResponse = { ...baseResponse, data: userData };

// Function Composition
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const transform = compose(add5, multiply2);
console.log(transform(10)); // 25 (10 * 2 + 5)