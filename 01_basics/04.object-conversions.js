/**
 * =============================================
 * COMPLETE JAVASCRIPT OBJECT CONVERSION GUIDE
 * =============================================
 * 
 * Covers:
 * - toString() and valueOf() methods
 * - Symbol.toPrimitive (modern approach)
 * - Conversion in different contexts (string, number, default)
 * - Real-world use cases
 * - Edge cases and gotchas
 */

// ==================================
// SECTION 1: BASIC CONVERSION METHODS
// ==================================

/**
 * 1.1 toString() Method
 * --------------------
 * Called when object needs string representation
 */

const person = {
  name: "Alice",
  age: 30,
  toString() {
    return `${this.name}, ${this.age} years old`;
  }
};

console.log(String(person)); // "Alice, 30 years old"
console.log(`${person}`);   // Same output (template literal)

/**
 * 1.2 valueOf() Method
 * -------------------
 * Called when object needs numeric representation
 */

const product = {
  price: 99,
  discount: 0.1,
  valueOf() {
    return this.price * (1 - this.discount);
  }
};

console.log(product + 10); // 99 * 0.9 + 10 = 99.1

// ==================================
// SECTION 2: CONVERSION RULES
// ==================================

/**
 * 2.1 Conversion Algorithm
 * -----------------------
 * JavaScript follows this priority:
 * 
 * 1. Check for Symbol.toPrimitive
 * 2. For number context:
 *    - valueOf()
 *    - toString()
 * 3. For string context:
 *    - toString()
 *    - valueOf()
 * 4. Default (no hint):
 *    - Usually same as number
 */

const conversionExample = {
  value: 42,
  toString() { return "fourty-two"; },
  valueOf() { return this.value; }
};

console.log(conversionExample + 8);    // 50 (valueOf)
console.log(String(conversionExample)); // "fourty-two" (toString)

/**
 * 2.2 Symbol.toPrimitive (Modern Approach)
 * ---------------------------------------
 * More control over conversion behavior
 */

const modernObj = {
  value: 100,
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.value;
    if (hint === 'string') return `Value: ${this.value}`;
    return this.value; // default
  }
};

console.log(modernObj + 1);       // 101 (number)
console.log(String(modernObj));   // "Value: 100" (string)
console.log(modernObj == 100);    // true (default)

// ==================================
// SECTION 3: REAL-WORLD EXAMPLES
// ==================================

/**
 * 3.1 Currency Object
 */

const money = {
  amount: 99.99,
  currency: "USD",
  toString() {
    return `${this.currency} ${this.amount.toFixed(2)}`;
  },
  valueOf() {
    return this.amount;
  }
};

console.log(money + 0.01);    // 100 (numeric operation)
console.log(`Price: ${money}`); // "Price: USD 99.99"

/**
 * 3.2 Date Handling
 */

const customDate = {
  year: 2023,
  month: 10,
  day: 5,
  toString() {
    return `${this.year}-${this.month}-${this.day}`;
  },
  valueOf() {
    return new Date(this.year, this.month-1, this.day).getTime();
  }
};

console.log(customDate > new Date(2020, 0, 1)); // true (compares timestamps)
console.log(`Today is ${customDate}`);          // "Today is 2023-10-5"

// ==================================
// SECTION 4: EDGE CASES & GOTCHAS
// ==================================

/**
 * 4.1 Non-Primitive Returns
 */

const trickyObj = {
  valueOf() { return {}; }, // returns object
  toString() { return "42"; }
};

console.log(trickyObj + 1); // "421" (falls back to toString)
// console.log(trickyObj - 1); // TypeError (can't subtract from string)

/**
 * 4.2 Array Conversion
 */

const arr = [1, 2, 3];
arr.toString = () => "Custom array";
console.log(arr + ""); // "Custom array"
console.log(arr - 1);  // NaN (arrays can't convert to numbers by default)

/**
 * 4.3 Function Conversion
 */

function test() {}
test.valueOf = () => 100;
console.log(test + 50); // 150

// ==================================
// SECTION 5: INTERVIEW QUESTIONS
// ==================================

/**
 * Q1: What's the output and why?
 */
const q1 = {
  value: 10,
  toString() { return "20"; },
  valueOf() { return 5; }
};
console.log(q1 + 1); // 6 (valueOf takes priority in numeric context)

/**
 * Q2: How to make an object that always converts to 0 in math operations?
 */
const zeroObj = {
  valueOf() { return 0; }
};
console.log(zeroObj * 100); // 0

/**
 * Q3: What's wrong with this implementation?
 */
const problemObj = {
  value: 100,
  toString() { return this.value; } // returns number instead of string
};
// console.log(String(problemObj)); // TypeError: Cannot convert object to primitive value

/**
 * Q4: Create an object that gives different string/number representations
 */
const smartObj = {
  id: 123,
  name: "Test",
  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this.name : this.id;
  }
};
console.log(Number(smartObj)); // 123
console.log(String(smartObj)); // "Test"

/**
 * Q5: Explain what happens here
 */
const mystery = {
  toString() { return "1"; },
  valueOf() { return 2; }
};
console.log(mystery == 1); // false (uses valueOf -> 2 == 1)
console.log(mystery == 2); // true

// ==================================
// SECTION 6: BEST PRACTICES
// ==================================

/**
 * 6.1 Always return proper primitives
 * - toString() should return strings
 * - valueOf() should return numbers
 */

/**
 * 6.2 Use Symbol.toPrimitive for modern code
 * - More explicit control
 * - Better readability
 */

/**
 * 6.3 Be consistent with conversions
 * - Don't make objects that convert differently in similar contexts
 */

// ==================================
// SECTION 7: CONVERSION SUMMARY TABLE
// ==================================

/*
| Context              | Method Priority               | Example Triggers              |
|----------------------|--------------------------------|-------------------------------|
| Numeric              | valueOf() → toString()        | +, -, *, /, >, <, ==         |
| String               | toString() → valueOf()        | String(), ${}, alert()        |
| Default              | Usually same as numeric       | ==, + (no other operands)     |
*/

// ==================================
// SECTION 8: ADDITIONAL RESOURCES
// ==================================

/**
 * Further Reading:
 * - ECMAScript Spec: ToPrimitive algorithm
 * - MDN: Symbol.toPrimitive
 * - JavaScript: The Definitive Guide
 */

// End of Object Conversion Masterfile