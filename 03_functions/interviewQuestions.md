## **Function Declarations**

1. **What is hoisting in function declarations?**  
   *Example:*  
   ```javascript
   console.log(square(5)); // Works or throws error?
   function square(n) { return n * n; }
   ```

2. **How does a function declaration differ from a function expression?**  
   *Example:*  
   ```javascript
   // Declaration
   function foo() {}
   
   // Expression
   const bar = function() {};
   ```

3. **Can you redeclare a function in the same scope?**  
   *Example:*  
   ```javascript
   function test() {}
   function test() {} // Allowed?
   ```

4. **What happens if you omit the `return` statement?**  
   *Example:*  
   ```javascript
   function noReturn() { /* empty */ }
   console.log(noReturn()); // Output?
   ```

5. **How do default parameters work in function declarations?**  
   *Example:*  
   ```javascript
   function greet(name = "Guest") {
     return `Hello, ${name}!`;
   }
   console.log(greet()); // Output?
   ```

6. **What is the `arguments` object in a function declaration?**  
   *Example:*  
   ```javascript
   function sum() {
     return [...arguments].reduce((a, b) => a + b);
   }
   console.log(sum(1, 2, 3)); // Output?
   ```

7. **Why avoid using `function` declarations inside blocks?**  
   *Example:*  
   ```javascript
   if (true) {
     function foo() { return "A"; }
   } else {
     function foo() { return "B"; }
   }
   console.log(foo()); // Output? (Behavior varies)
   ```

---

## **Arrow Functions**

1. **How does `this` work in arrow functions vs regular functions?**  
   *Example:*  
   ```javascript
   const obj = {
     name: "Alice",
     greet: function() { console.log(this.name); },
     greetArrow: () => console.log(this.name)
   };
   obj.greet(); // Output?
   obj.greetArrow(); // Output?
   ```

2. **Can arrow functions be used as constructors?**  
   *Example:*  
   ```javascript
   const Foo = () => {};
   const bar = new Foo(); // Works?
   ```

3. **How do you implicitly return an object from an arrow function?**  
   *Example:*  
   ```javascript
   const makeUser = (name) => ({ name });
   console.log(makeUser("Alice")); // Output?
   ```

4. **What happens if you use `arguments` in an arrow function?**  
   *Example:*  
   ```javascript
   const foo = () => console.log(arguments);
   foo(1, 2, 3); // Output?
   ```

5. **When should you avoid arrow functions?**  
   *Example:*  
   ```javascript
   // Event handler (needs `this` binding)
   button.addEventListener('click', () => {
     console.log(this); // What does `this` refer to?
   });
   ```

6. **How do arrow functions handle `super` and `new.target`?**  
   *Example:*  
   ```javascript
   class Parent {
     constructor() {
       const child = () => console.log(new.target);
       child();
     }
   }
   new Parent(); // Output?
   ```

7. **Can arrow functions be generators?**  
   *Example:*  
   ```javascript
   const gen = *() => yield 1; // Valid?
   ```

---

## **Callbacks & Promises**

1. **What is "callback hell" and how do promises solve it?**  
   *Example:*  
   ```javascript
   // Callback hell
   getUser(1, (user) => {
     getPosts(user.id, (posts) => {
       getComments(posts[0].id, (comments) => {
         console.log(comments);
       });
     });
   });
   
   // Promise solution
   getUser(1)
     .then(user => getPosts(user.id))
     .then(posts => getComments(posts[0].id))
     .then(console.log);
   ```

2. **How do you convert a callback-based function to a promise?**  
   *Example:*  
   ```javascript
   function readFilePromise(path) {
     return new Promise((resolve, reject) => {
       fs.readFile(path, (err, data) => {
         if (err) reject(err);
         else resolve(data);
       });
     });
   }
   ```

3. **What is the purpose of `Promise.all`?**  
   *Example:*  
   ```javascript
   Promise.all([fetchUser(1), fetchUser(2)])
     .then(users => console.log(users));
   ```

4. **How does error handling differ between callbacks and promises?**  
   *Example:*  
   ```javascript
   // Callback (error-first)
   fs.readFile("file.txt", (err, data) => {
     if (err) console.error(err);
   });
   
   // Promise (.catch)
   readFilePromise("file.txt")
     .catch(err => console.error(err));
   ```

5. **What is promise chaining?**  
   *Example:*  
   ```javascript
   fetchUser(1)
     .then(user => fetchPosts(user.id))
     .then(posts => console.log(posts));
   ```

6. **How do you handle multiple promises with `Promise.race`?**  
   *Example:*  
   ```javascript
   Promise.race([fetchAPI1(), fetchAPI2()])
     .then(firstResult => console.log(firstResult));
   ```

7. **What are the states of a promise?**  
   *Example:*  
   ```javascript
   const p = new Promise((resolve) => setTimeout(resolve, 1000));
   console.log(p); // What state is it in?
   ```

---

## **Rest & Spread Operators**

1. **What’s the difference between rest and spread?**  
   *Example:*  
   ```javascript
   // Spread (expands)
   const arr = [...[1, 2], 3]; // [1, 2, 3]
   
   // Rest (collects)
   function foo(...args) { console.log(args); }
   foo(1, 2, 3); // [1, 2, 3]
   ```

2. **How do you clone an object with the spread operator?**  
   *Example:*  
   ```javascript
   const obj = { a: 1 };
   const clone = { ...obj }; // Deep or shallow copy?
   ```

3. **What happens when you spread `undefined` in an array?**  
   *Example:*  
   ```javascript
   const arr = [...[1, 2], ...undefined]; // Output?
   ```

4. **How do you merge two objects with spread?**  
   *Example:*  
   ```javascript
   const obj1 = { a: 1 };
   const obj2 = { b: 2 };
   const merged = { ...obj1, ...obj2 }; // Output?
   ```

5. **Can you use rest parameters with arrow functions?**  
   *Example:*  
   ```javascript
   const sum = (...nums) => nums.reduce((a, b) => a + b);
   console.log(sum(1, 2, 3)); // Output?
   ```

6. **How does spread work with strings?**  
   *Example:*  
   ```javascript
   const chars = [..."hello"]; // Output?
   ```

7. **What’s a practical use of rest parameters?**  
   *Example:*  
   ```javascript
   function logArguments(first, ...rest) {
     console.log(first, rest);
   }
   logArguments(1, 2, 3); // Output?
   ```

---
