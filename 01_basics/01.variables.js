/**
 * VARIABLES: Named containers for storing data values
 * 
 * Evolution:
 * 1. var (ES1 - 1997) - Function scoped, hoisted
 * 2. let (ES6 - 2015) - Block scoped, mutable
 * 3. const (ES6 - 2015) - Block scoped, immutable reference
 * 
 * Real-world analogy:
 * - var → General mailbox (accessible everywhere in apartment)
 * - let → Private locker (only accessible in your room)
 * - const → Safety deposit box (can't change contents once set)
 */

// ======== var ========
console.log(legacyVar); // undefined (hoisted)
var legacyVar = "I'm hoisted";

function testVar() {
  var functionScoped = "I exist throughout function";
  if (true) {
    var functionScoped = "I'm redeclared";
  }
  console.log(functionScoped); // "I'm redeclared"
}

testVar();

// ======== let ========
if (true) {
  let blockScoped = "I only exist here";
  // let blockScoped = "Can't redeclare"; // SyntaxError
  blockScoped = "But can reassign"; // OK
}
// console.log(blockScoped); // ReferenceError

// ======== const ========
const PI = 3.14159;
// PI = 3; // TypeError

// Complex objects are mutable
const person = { name: "Alice" };
person.name = "Bob"; // Allowed
// person = { name: "Charlie" }; // Not allowed

/**
 * Why const/let were introduced:
 * 1. Block scoping fixes hoisting surprises
 * 2. Prevents accidental redeclarations
 * 3. Clear intent (mutable vs immutable)
 * 4. Better for loops and closures
 * 
 * When to use:
 * - const by default
 * - let when rebinding needed
 * - var never (legacy code only)
 */