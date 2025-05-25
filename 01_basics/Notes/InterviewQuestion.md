## **Interview Questions**

### **1. What's the output?**
```javascript
console.log(a);
var a = 10;
let b = 20;
```
**Answer:**  
- `undefined` (var hoisted)  
- `ReferenceError` for `b` (TDZ)

### **2. How would you fix this code?**
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
// Current output: 5,5,5,5,5
```
**Solution:**  
Use `let` or IIFE:
```javascript
for (let i = 0; i < 5; i++) { ... }
// OR
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i);
}
```

### **3. Explain Temporal Dead Zone**
- Period between hoisting and initialization where variables are inaccessible
- Prevents usage before declaration (unlike `var`)

---

## **Best Practices**
1. **Always use `const` by default**  
2. **Use `let` when rebinding is needed**  
3. **Never use `var` in new code**  
4. **Declare variables at the top of their scope**  

```javascript
// Good
const MAX_USERS = 10;
let currentUsers = 0;

// Bad
var oldVariable = "deprecated";
```

## **Interview Questions**

### **1. What's the output?**
```javascript
let x = 1;
(function() {
  console.log(x); // ?
  var x = 2;
})();
```
**Answer:** `undefined` (due to hoisting inside IIFE)

### **2. Convert this to IIFE**
```javascript
function init() {
  console.log("Initialized");
}
init();
```
**Solution:**
```javascript
(function() {
  console.log("Initialized");
})();
```

### **3. Why might you use an IIFE with jQuery?**
```javascript
(function($) {
  // $ is now safely jQuery even if other libs use $
})(jQuery);
```
- Protects against **conflicts** with other libraries using `$`

---

## **Key Takeaways**
1. IIFE = **Immediately Invoked Function Expression**  
2. Creates **isolated scope** to prevent pollution  
3. Essential for **pre-ES6 scoping solutions**  
4. Modern alternatives (`let`, modules) often better  
5. Still useful for **quick isolation** and **legacy code**  

IIFEs demonstrate JavaScript's flexibility with functions and scoping - a fundamental concept every JS developer should master!

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
 */
const mystery = {
  toString() { return "1"; },
  valueOf() { return 2; }
};
console.log(mystery == 1); // false (uses valueOf -> 2 == 1)
console.log(mystery == 2); // true
