/**
 * =============================================
 * COMPLETE JAVASCRIPT TYPE CONVERSION MASTERFILE
 * =============================================
 * 
 * Covers:
 * - Implicit vs Explicit Conversion
 * - All conversion rules (String, Number, Boolean)
 * - Edge Cases and Gotchas
 * - Best Practices
 */

// ========================
// SECTION 1: EXPLICIT CONVERSION
// ========================

/**
 * 1.1 String Conversion
 * ---------------------
 * Use String() or toString() for explicit conversion
 */

const num = 123;
const strNum = String(num); // "123"
const bool = true;
const strBool = String(bool); // "true"

// Edge Cases:
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String({})); // "[object Object]"
console.log(String([1, 2, 3])); // "1,2,3"

/**
 * 1.2 Number Conversion
 * --------------------
 * Use Number(), parseInt(), parseFloat()
 */

const numericStr = "123";
const numFromStr = Number(numericStr); // 123
const floatStr = "123.45";
const floatNum = parseFloat(floatStr); // 123.45

// Edge Cases:
console.log(Number("123abc")); // NaN (Not a Number)
console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

/**
 * 1.3 Boolean Conversion
 * ---------------------
 * Use Boolean() or !! operator
 */

const truthyStr = "hello";
const boolFromStr = Boolean(truthyStr); // true

// Falsy Values:
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Everything else is truthy:
console.log(Boolean("false")); // true (string with content)
console.log(Boolean([])); // true (empty array)
console.log(Boolean({})); // true (empty object)

// ========================
// SECTION 2: IMPLICIT CONVERSION (COERCION)
// ========================

/**
 * 2.1 String Coercion
 * -------------------
 * Happens with + operator when one operand is string
 */

console.log(1 + "2"); // "12" (number coerced to string)
console.log("3" + 4 + 5); // "345" (left-to-right evaluation)
console.log(3 + 4 + "5"); // "75" (first addition happens)

/**
 * 2.2 Numeric Coercion
 * --------------------
 * Happens with math operators (-, *, /, %)
 */

console.log("10" - 2); // 8 (string coerced to number)
console.log("10" * "2"); // 20
console.log("10" / "2"); // 5
console.log("10" % "3"); // 1

// Tricky Cases:
console.log(+"123"); // 123 (unary plus converts to number)
console.log(+"abc"); // NaN
console.log(+"123abc"); // NaN

/**
 * 2.3 Boolean Coercion
 * --------------------
 * Happens in logical contexts (if, &&, ||, !)
 */

if ("hello") { // coerced to true
  console.log("This will run");
}

console.log(0 || "default"); // "default" (0 is falsy)
console.log(1 && "yes"); // "yes" (both truthy)

// ========================
// SECTION 3: SPECIAL CASES & GOTCHAS
// ========================

/**
 * 3.1 == vs === Coercion
 */

console.log(1 == "1"); // true (type coercion)
console.log(1 === "1"); // false (strict equality)

/**
 * 3.2 Object to Primitive Conversion
 */

const obj = {
  value: 10,
  toString() { return "Custom toString"; },
  valueOf() { return this.value; }
};

console.log(obj + 5); // 15 (valueOf used)
console.log(String(obj)); // "Custom toString" (toString used)

/**
 * 3.3 Array Coercion
 */

console.log([] + []); // "" (arrays become strings)
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 (different parsing)

// ========================
// SECTION 4: BEST PRACTICES
// ========================

/**
 * 4.1 Always Use Explicit Conversion
 * - Makes code more predictable
 * - Avoids hidden bugs
 */

// Good:
const total = Number(price) * Number(quantity);

// Bad:
const total = price * quantity; // May have unexpected coercion

/**
 * 4.2 Use === Instead of ==
 * - Avoids type coercion surprises
 */

// Good:
if (age === "18") { /* explicit */ }

// Bad:
if (age == 18) { /* coerces string to number */ }

/**
 * 4.3 Handle NaN Properly
 * - Use Number.isNaN() instead of isNaN()
 */

console.log(isNaN("hello")); // true (coerces to NaN)
console.log(Number.isNaN("hello")); // false (strict check)

// ========================
// SECTION 5: INTERVIEW QUESTIONS
// ========================

/**
 * Q1: What's the output and why?
 */
console.log([] + []); // "" (arrays become empty strings)
console.log({} + []); // 0 ({} is parsed as block, +[] is 0)

/**
 * Q2: How would you safely convert a string to integer?
 */
function safeToInt(str) {
  const num = parseInt(str, 10);
  return Number.isNaN(num) ? 0 : num;
}

/**
 * Q3: Explain why 0.1 + 0.2 !== 0.3
 */
// Answer: Floating point precision issues in binary representation

/**
 * Q4: What's the output?
 */
console.log(+"1" + +"2" + "3"); // "33" (1+2=3, then string concat)

/**
 * Q5: How to check if a value is truly NaN?
 */
const isRealNaN = (val) => val !== val; // NaN is the only value not equal to itself

// ========================
// SECTION 6: PRACTICAL EXAMPLES
// ========================

/**
 * 6.1 Form Input Handling
 */
function handleFormInput(input) {
  // Convert to number but protect against NaN
  const numValue = Number(input) || 0;
  
  // Convert empty string to null
  const finalValue = input === "" ? null : numValue;
  
  return finalValue;
}

/**
 * 6.2 API Response Processing
 */
function processAPIResponse(response) {
  return {
    ...response,
    // Ensure numeric fields are numbers
    id: Number(response.id),
    price: parseFloat(response.price),
    // Convert string booleans
    isActive: response.isActive === "true"
  };
}

// ========================
// SECTION 7: SUMMARY TABLE
// ========================

/*
| Conversion Type | Falsy Values       | Truthy Values       |
|-----------------|--------------------|---------------------|
| Boolean         | false, 0, "", null | Everything else     |
|                 | undefined, NaN     |                     |
|-----------------|--------------------|---------------------|
| Number          | "" → 0             | "123" → 123         |
|                 | "123abc" → NaN     | "123.45" → 123.45   |
|                 | null → 0           | true → 1            |
|                 | undefined → NaN    | false → 0           |
|-----------------|--------------------|---------------------|
| String          | null → "null"      | 123 → "123"         |
|                 | undefined → "undef"| true → "true"       |
*/

// ========================
// SECTION 8: ADDITIONAL RESOURCES
// ========================

/**
 * Further Reading:
 * - ECMAScript Spec: ToPrimitive algorithm
 * - IEEE 754 Floating Point Standard
 * - JavaScript: The Good Parts (Crockford)
 */

// End of Type Conversion Masterfile