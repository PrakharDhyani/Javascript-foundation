/**
 * COMPLETE OBJECT METHODS GUIDE
 * Covers:
 * - Property access
 * - Object static methods
 * - Prototype methods
 * - Modern object features
 */

const user = {
  name: 'Alice',
  age: 30,
  address: {
    city: 'Paris'
  }
};

// ================ Property Access ================
// Dot vs bracket notation
console.log(user.name); // 'Alice'
console.log(user['name']); // 'Alice'

// Optional chaining
console.log(user.address?.country?.code); // undefined (no error)

// ================ Object Static Methods ================
// Object.keys()
console.log(Object.keys(user)); // ['name', 'age', 'address']

// Object.values()
console.log(Object.values(user)); // ['Alice', 30, {city: 'Paris'}]

// Object.entries()
console.log(Object.entries(user)); 
// [ ['name', 'Alice'], ['age', 30], ... ]

// ================ Prototype Methods ================
// hasOwnProperty()
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('toString')); // false (inherited)

// toString()
console.log(user.toString()); // '[object Object]'

// ================ Modern Object Features ================
// Object.fromEntries()
const entries = [['a', 1], ['b', 2]];
console.log(Object.fromEntries(entries)); // {a: 1, b: 2}

// Object.hasOwn() (modern replacement for hasOwnProperty)
console.log(Object.hasOwn(user, 'name')); // true

// ================ Performance ================
/* 
Operation          | Complexity
-------------------|-----------
Property access    | O(1)
Object.keys()      | O(n)
Property existence | O(1)
*/

// ================ Interview Questions ================
// Q1: Deep clone object
const deepClone = JSON.parse(JSON.stringify(user));

// Q2: Merge objects
const obj1 = {a: 1};
const obj2 = {b: 2};
const merged = {...obj1, ...obj2};
console.log(merged); // {a: 1, b: 2}

// Q3: Check empty object
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}