# JavaScript Advanced Concepts Notes

## Table of Contents
1. [Automatic Semicolon Insertion (ASI)](#automatic-semicolon-insertion-asi)
   - [What is ASI?](#what-is-asi)
   - [Rules of ASI](#rules-of-asi)
   - [Examples](#examples-of-asi-behavior)
   - [Best Practices](#best-practices)

2. [Regular Expressions (Regex)](#regular-expressions-regex-in-javascript)
   - [What is Regex?](#what-is-regex)
   - [Basic Syntax](#basic-syntax)
   - [Regex in JavaScript](#regex-in-javascript)
   - [Practical Examples](#practical-examples)
   - [Interview Questions](#regex-interview-questions)

3. [Linters (ESLint)](#linters-eslint)
   - [What is ESLint?](#what-is-eslint)
   - [Key Features](#key-features)
   - [Setup and Configuration](#setup-and-configuration)
   - [Example Rules](#example-rules)
   - [Custom Configuration](#custom-configuration)
```

## **1. Automatic Semicolon Insertion (ASI)**

### **What is ASI?**
Automatic Semicolon Insertion (ASI) is a JavaScript feature that automatically inserts semicolons (`;`) where they are missing but required by the syntax.

### **Rules of ASI**
1. **Line Breaks as Semicolons**  
   JS treats line breaks as semicolons **only** when:
   - The next line starts with `}`
   - The next line starts with code that breaks the current statement
   - The end of the file is reached

2. **No ASI in Certain Cases**  
   - Before `[`, `(`, `+`, `-`, `/`, `*`, `%`, etc. (as they can be part of the same expression)
   - After `return`, `throw`, `yield`, `break`, `continue` (ASI applies **immediately** after these keywords)

### **Examples of ASI Behavior**

#### ✅ Correct ASI (Semicolon Inserted)
```javascript
let x = 10
let y = 20
// JS treats this as:
// let x = 10;
// let y = 20;
```

#### ❌ Dangerous ASI (No Semicolon Inserted)
```javascript
function getData() {
  return
  {
    name: "Alice"
  }
}
// JS interprets this as:
// return;
// { name: "Alice" };
// Returns `undefined` instead of the object!
```

### **Best Practices**
1. **Always Use Semicolons Explicitly**  
   ```javascript
   const name = "Alice";
   const age = 25;
   ```
2. **Be Careful with `return`, `throw`, etc.**  
   ```javascript
   // Good
   return {
     success: true
   };
   ```
3. **Use Linters (ESLint)**  
   Configure `"semi": ["error", "always"]` to enforce semicolons.

---

## **2. Regular Expressions (Regex) in JavaScript**

### **What is Regex?**
A pattern-matching syntax for finding and manipulating text.

### **Basic Syntax**
| Pattern | Meaning |
|---------|---------|
| `\d` | Digit (`0-9`) |
| `\w` | Word character (`a-z`, `A-Z`, `0-9`, `_`) |
| `\s` | Whitespace |
| `^` | Start of string |
| `$` | End of string |
| `[abc]` | Any of `a`, `b`, or `c` |

### **Practical Examples**
```javascript
// Email Validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailRegex.test("test@example.com"); // true

// Extract Numbers
const str = "Price: $100.50";
str.match(/\d+\.?\d*/g); // ["100.50"]
```

### **Regex Interview Questions**
**Q: How to validate a phone number?**
```javascript
/^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
```

---

## **3. Linters (ESLint)**

### **What is ESLint?**
A static code analysis tool for identifying problematic patterns in JavaScript code.

### **Key Features**
- Catches syntax errors
- Enforces coding style
- Identifies potential bugs
- Supports plugins (React, TypeScript, etc.)

### **Setup and Configuration**
1. Install:
```bash
npm install eslint --save-dev
```
2. Initialize config:
```bash
npx eslint --init
```
3. Creates `.eslintrc.js`:
```javascript
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "semi": ["error", "always"],
    "no-console": "warn"
  }
};
```

### **Example Rules**
| Rule | Effect |
|------|--------|
| `"semi": ["error", "always"]` | Requires semicolons |
| `"eqeqeq": "error"` | Disallows `==` in favor of `===` |
| `"no-var": "error"` | Requires `let`/`const` instead of `var` |

### **Custom Configuration**
```javascript
// .eslintrc.js
module.exports = {
  rules: {
    "indent": ["error", 2], // 2-space indentation
    "quotes": ["error", "single"],
    "react/prop-types": "off" // Disable for projects without prop-types
  }
};
```

### **Integrating with VS Code**
1. Install ESLint extension
2. Add to `settings.json`:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### **Why Use ESLint?**
- Catches bugs before runtime
- Enforces team coding standards
- Automatically fixable issues
- Supports modern JavaScript features

---

## **Summary Cheatsheet**

### **ASI**
- Always use explicit semicolons
- Be careful with `return`, `throw`, etc.
- Configure ESLint to enforce rules

### **Regex**
- Use for validation, search/replace
- Test patterns at [Regex101.com](https://regex101.com)
- Learn common patterns (email, phone, etc.)

### **ESLint**
- Essential for professional projects
- Catches bugs early
- Enforces consistent style
- Highly configurable

```markdown
> **Pro Tip**: Combine ESLint with Prettier for automatic formatting!
``` 

Here are the detailed Markdown files for `callbacks.js` and `rest-spread.js` with comprehensive explanations, examples, and notes:

---

## **callbacks.md**

```markdown
# JavaScript Callbacks: Complete Guide

## Table of Contents
1. [What are Callbacks?](#what-are-callbacks)
2. [Types of Callbacks](#types-of-callbacks)
   - [Synchronous](#synchronous-callbacks)
   - [Asynchronous](#asynchronous-callbacks)
3. [Error-First Pattern](#error-first-pattern)
4. [Callback Hell](#callback-hell)
5. [Real-World Examples](#real-world-examples)
6. [Interview Questions](#interview-questions)

---

## **1. What are Callbacks?**
A callback is a function passed as an argument to another function, to be executed later.

```javascript
function fetchData(callback) {
  // Simulate API call
  setTimeout(() => {
    const data = { id: 1, name: "John" };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data); // { id: 1, name: "John" }
});
```

---

## **2. Types of Callbacks**

### **Synchronous Callbacks**
Executed immediately during the function call.

```javascript
const numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num * 2); // 2, 4, 6
});
```

### **Asynchronous Callbacks**
Executed after an async operation completes.

```javascript
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
```

---

## **3. Error-First Pattern**
Node.js convention where callbacks receive `(error, result)`.

```javascript
function readFile(callback) {
  try {
    const data = "File content";
    callback(null, data);
  } catch (err) {
    callback(err);
  }
}

readFile((err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log(data);
  }
});
```

---

## **4. Callback Hell**
Nested callbacks become hard to read.

```javascript
getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments); // Deep nesting
    });
  });
});
```

**Solutions:**
1. **Named Functions**
   ```javascript
   function handleComments(comments) {
     console.log(comments);
   }
   ```
2. **Promises/Async-Await**
   ```javascript
   getUser(1)
     .then(getPosts)
     .then(getComments)
     .then(console.log);
   ```

---

## **5. Real-World Examples**

### **API Request**
```javascript
function fetchUser(id, callback) {
  fetch(`/users/${id}`)
    .then((res) => res.json())
    .then(callback);
}
```

### **Event Listeners**
```javascript
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

---

## **6. Interview Questions**

**Q1: What is a callback function?**  
**A:** A function passed as an argument to be executed later.

**Q2: How do you handle errors in callbacks?**  
**A:** Using the error-first pattern: `callback(err, data)`.

**Q3: What is callback hell?**  
**A:** Deeply nested callbacks that make code hard to read.

**Q4: Convert this callback to Promise:**
```javascript
function getUser(id, callback) { /*...*/ }
```
**A:**
```javascript
function getUserAsync(id) {
  return new Promise((resolve) => {
    getUser(id, resolve);
  });
}
```

---

## **Best Practices**
- Use Promises/Async-Await for complex flows
- Follow error-first pattern in Node.js
- Keep callbacks small (single responsibility)
```

---

## **rest-spread.md**

```markdown
# JavaScript Rest/Spread: Complete Guide

## Table of Contents
1. [Spread Operator](#spread-operator)
2. [Rest Parameters](#rest-parameters)
3. [Key Differences](#key-differences)
4. [Use Cases](#use-cases)
5. [Interview Questions](#interview-questions)

---

## **1. Spread Operator (`...`)**
Expands iterables into individual elements.

### **Arrays**
```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```

### **Objects (ES2018)**
```javascript
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a:1, b:2 }
```

### **Function Arguments**
```javascript
Math.max(...[1, 2, 3]); // 3
```

---

## **2. Rest Parameters (`...`)**
Collects remaining arguments into an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3); // 6
```

### **With Other Parameters**
```javascript
function greet(greeting, ...names) {
  return `${greeting} ${names.join(", ")}!`;
}
greet("Hello", "Alice", "Bob"); // "Hello Alice, Bob!"
```

---

## **3. Key Differences**
| Feature        | Spread                          | Rest                     |
|---------------|--------------------------------|--------------------------|
| **Syntax**    | `[...array]` / `{...obj}`      | `function(...args)`      |
| **Use Case**  | Expands elements               | Collects elements        |
| **Position**  | Function calls/array literals  | Function parameters      |

---

## **4. Use Cases**

### **Copying Arrays/Objects**
```javascript
const arrCopy = [...originalArr];
const objCopy = { ...originalObj };
```

### **Merging**
```javascript
const merged = [...arr1, ...arr2];
const combined = { ...obj1, ...obj2 };
```

### **React Props**
```javascript
function Component(props) {
  return <Child {...props} />;
}
```



# **Callbacks vs Promises in JavaScript: Key Differences with Examples**

## **1. Fundamental Differences**

| Feature          | Callbacks                                  | Promises                                  |
|------------------|-------------------------------------------|------------------------------------------|
| **Readability**  | Can lead to "callback hell" (nested code) | Chainable with `.then()` (flat structure) |
| **Error Handling** | Error-first pattern (`err, data`)        | `.catch()` for centralized error handling |
| **State**        | No inherent state                         | Has states (pending, fulfilled, rejected) |
| **Control**      | Hard to manage multiple async operations  | Easy with `Promise.all()`, `Promise.race()` |
| **Return Value**  | Doesn't return anything                   | Returns a promise object                 |

## **2. Same Scenario Implemented Both Ways**

### **Example 1: Fetching User Data**

#### **Callback Version**
```javascript
function getUser(id, callback) {
  setTimeout(() => {
    callback(null, { id, name: `User ${id}` });
  }, 1000);
}

// Usage (nested callbacks)
getUser(1, (err, user) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("User:", user);
    getUser(2, (err, friend) => {
      if (err) {
        console.error("Error:", err);
      } else {
        console.log("Friend:", friend);
      }
    });
  }
});
```

#### **Promise Version**
```javascript
function getUserPromise(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000);
  });
}

// Usage (chained)
getUserPromise(1)
  .then(user => {
    console.log("User:", user);
    return getUserPromise(2);
  })
  .then(friend => {
    console.log("Friend:", friend);
  })
  .catch(err => {
    console.error("Error:", err);
  });
```

### **Example 2: Handling Errors**

#### **Callback (Error-First Pattern)**
```javascript
function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error("Cannot divide by zero"));
  } else {
    callback(null, a / b);
  }
}

divide(10, 0, (err, result) => {
  if (err) {
    console.error(err.message); // "Cannot divide by zero"
  } else {
    console.log(result);
  }
});
```

#### **Promise (`.catch()`)**
```javascript
function dividePromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Cannot divide by zero"));
    } else {
      resolve(a / b);
    }
  });
}

dividePromise(10, 0)
  .then(result => console.log(result))
  .catch(err => console.error(err.message)); // "Cannot divide by zero"
```

## **3. Handling Multiple Async Operations**

### **Callbacks (Pyramid of Doom)**
```javascript
getUser(1, (err, user) => {
  if (err) return console.error(err);
  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);
    getComments(posts[0].id, (err, comments) => {
      if (err) return console.error(err);
      console.log(comments);
    });
  });
});
```

### **Promises (Flat Chain)**
```javascript
getUserPromise(1)
  .then(user => getPostsPromise(user.id))
  .then(posts => getCommentsPromise(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));
```

### **Parallel Operations**

#### **Callbacks (Manual Tracking)**
```javascript
let results = [];
let completed = 0;

function checkCompletion() {
  if (completed === 2) {
    console.log("Both done:", results);
  }
}

getUser(1, (err, data) => {
  results[0] = data;
  completed++;
  checkCompletion();
});

getUser(2, (err, data) => {
  results[1] = data;
  completed++;
  checkCompletion();
});
```

#### **Promises (`Promise.all()`)**
```javascript
Promise.all([getUserPromise(1), getUserPromise(2)])
  .then(users => {
    console.log("Both done:", users);
  })
  .catch(err => {
    console.error("One failed:", err);
  });
```

## **4. Key Advantages of Promises**

1. **Avoid Callback Hell**  
   Flat `.then()` chains instead of nested callbacks.

2. **Better Error Handling**  
   Single `.catch()` for entire chain vs checking errors in each callback.

3. **Composition**  
   Easily combine promises with `Promise.all()`, `Promise.race()`, etc.

4. **Return Values**  
   Promises can be returned and passed around.

5. **Modern Async/Await**  
   Promises enable cleaner `async/await` syntax:
   ```javascript
   async function getUserData() {
     try {
       const user = await getUserPromise(1);
       const friend = await getUserPromise(2);
       console.log(user, friend);
     } catch (err) {
       console.error(err);
     }
   }
   ```

## **When to Use Which?**

- **Use Callbacks** for:
  - Simple one-off async operations
  - Older libraries/codebases
  - Event listeners (where promises aren't supported)

- **Use Promises** for:
  - Complex async workflows
  - Modern codebases
  - When you need to chain operations
  - Combining multiple async operations
---

## **5. Interview Questions**

**Q1: What’s the difference between rest and spread?**  
**A:** Spread expands elements, rest collects them.

**Q2: How to clone an object without references?**  
**A:** 
```javascript
const clone = { ...original };
// For deep clones: JSON.parse(JSON.stringify(obj))
```

**Q3: What’s the output?**
```javascript
function test(a, b, ...c) {
  console.log(c);
}
test(1, 2, 3, 4, 5); // [3, 4, 5]
```

**Q4: How to merge two arrays?**  
**A:** 
```javascript
const merged = [...arr1, ...arr2];
```

---

## **Best Practices**
- Use for clean array/object manipulation
- Prefer rest over `arguments` object
- Be careful with object reference types
```

Both files include:
- Detailed explanations with code examples
- Practical use cases
- Interview questions with answers
- Best practices
- Proper Markdown formatting for readability