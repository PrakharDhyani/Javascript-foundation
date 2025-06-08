/**
 * =============================================
 * COMPLETE JAVASCRIPT CALLBACKS GUIDE
 * =============================================
 * 
 * Covers:
 * - Synchronous vs Asynchronous Callbacks
 * - Error-First Pattern
 * - Callback Hell and Solutions
 * - Real-world Use Cases
 * - Interview Questions
 */

// ========================
// 1. CALLBACK FUNDAMENTALS
// ========================

// Basic Callback Example
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

greet('Alice', () => {
  console.log('Callback executed!');
});

// ========================
// 2. SYNCHRONOUS CALLBACKS
// ========================

// Array Methods (Synchronous)
const numbers = [1, 2, 3];
numbers.forEach(num => {
  console.log(num * 2); // 2, 4, 6 (executed immediately)
});

// Custom Synchronous Callback
function processArray(arr, processor) {
  const results = [];
  for (const item of arr) {
    results.push(processor(item));
  }
  return results;
}

const squared = processArray([1, 2, 3], x => x * x);
console.log(squared); // [1, 4, 9]

// ========================
// 3. ASYNCHRONOUS CALLBACKS
// ========================

// setTimeout Example
console.log('Start');
setTimeout(() => {
  console.log('This executes after 1 second');
}, 1000);
console.log('End');

// File System Example (Node.js)
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// ========================
// 4. ERROR-FIRST PATTERN
// ========================

// Standard Node.js Error-First Callback
function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error('Cannot divide by zero'));
  } else {
    callback(null, a / b);
  }
}

divide(10, 2, (err, result) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Result:', result); // 5
  }
});

// ========================
// 5. CALLBACK HELL & SOLUTIONS
// ========================

// Callback Hell Example
getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments); // Deep nesting
    });
  });
});

// Solution 1: Named Functions
function handleComments(comments) {
  console.log(comments);
}

function handlePosts(posts) {
  getComments(posts[0].id, handleComments);
}

function handleUser(user) {
  getPosts(user.id, handlePosts);
}

getUser(1, handleUser);

// Solution 2: Promises
// getUser(1)
//   .then(user => getPosts(user.id))
//   .then(posts => getComments(posts[0].id))
//   .then(console.log("Hi"))
//   .catch(console.error);

// ========================
// 6. REAL-WORLD EXAMPLES
// ========================

// API Request with Callback
function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(err => callback(err));
}

// Event Listener
document.getElementById('myButton').addEventListener('click', () => {
  console.log('Button clicked!');
});

// ========================
// 7. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: What is a callback function?
 * A: A function passed as an argument to be executed later
 */

/**
 * Q2: How does the error-first pattern work?
 * A: Callback receives (error, result) - error is null if successful
 */

/**
 * Q3: Convert this callback to Promise:
 */
function getUser(id, callback) {
  setTimeout(() => {
    callback(null, { id, name: 'User' + id });
  }, 100);
}

// Answer:
function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    getUser(id, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}

// ========================
// 8. BEST PRACTICES
// ========================

// 1. Always handle errors in async callbacks
// 2. Prefer promises for complex async flows
// 3. Keep callbacks small and focused
// 4. Use named functions to avoid deep nesting