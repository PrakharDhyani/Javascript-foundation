/**
 * JavaScript Operators:
 * - Arithmetic: +, -, *, /, %
 * - Comparison: ==, ===, !=, !==, >, <
 * - Logical: &&, ||, !
 * - Ternary: condition ? expr1 : expr2
 */

// Examples
let a = 10, b = "10";

// Loose vs Strict Equality
console.log(a == b);  // true (value)
console.log(a === b); // false (value + type)

// Ternary Operator
const result = a > 5 ? "Pass" : "Fail";
console.log(result); // "Pass"