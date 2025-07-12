/**
 * DOM SELECTORS MASTER FILE
 * Covers:
 * - Traditional selectors
 * - Modern query selectors
 * - Node relationships
 * - Live vs static collections
 */

// ================ Traditional Selectors ================
// Get element by ID (returns single element)
const header = document.getElementById('header');
console.log(header); // <header id="header">

// Get elements by class name (returns HTMLCollection)
const buttons = document.getElementsByClassName('btn');
console.log(buttons); // HTMLCollection of elements

// Get elements by tag name (returns HTMLCollection)
const images = document.getElementsByTagName('img');
console.log(images); // HTMLCollection of <img> elements

// ================ Modern Query Selectors ================
// Query single element (first match)
const main = document.querySelector('main');
console.log(main); // First <main> element

// Query all matching elements (returns NodeList)
const allButtons = document.querySelectorAll('.btn');
console.log(allButtons); // NodeList of all .btn elements

// Complex CSS selectors
const adminLinks = document.querySelectorAll('nav a.admin');
console.log(adminLinks); // All <a> with class 'admin' inside <nav>

// ================ Node Relationships ================
const container = document.querySelector('.container');

// Child elements
console.log(container.children); // HTMLCollection of direct children
console.log(container.firstElementChild); // First child element
console.log(container.lastElementChild); // Last child element

// Parent elements
const child = document.querySelector('.child');
console.log(child.parentElement); // Direct parent
console.log(child.closest('.grandparent')); // Nearest ancestor matching selector

// Sibling elements
console.log(child.previousElementSibling); // Previous sibling
console.log(child.nextElementSibling); // Next sibling

// ================ Live vs Static Collections ================
// Live collection (updates automatically)
const liveButtons = document.getElementsByClassName('btn');
console.log(liveButtons.length); // Original count

// Add new button
document.body.innerHTML += '<button class="btn">New</button>';
console.log(liveButtons.length); // Automatically increased

// Static collection (snapshot)
const staticButtons = document.querySelectorAll('.btn');
console.log(staticButtons.length); // Original count

// Add new button
document.body.innerHTML += '<button class="btn">New</button>';
console.log(staticButtons.length); // Remains same

// ================ Special Selectors ================
// Forms
const emailInput = document.forms['signup'].elements['email'];
console.log(emailInput); // Input named 'email' in 'signup' form

// Document fragments
const template = document.querySelector('#template');
const clone = template.content.cloneNode(true);
console.log(clone); 