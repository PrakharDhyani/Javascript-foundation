/**
 * DOM ELEMENT CREATION MASTER FILE
 * Covers:
 * - Creating elements
 * - Modifying attributes/properties
 * - Adding/removing elements
 * - Working with fragments
 * - Performance optimization
 */

// ================ Element Creation ================
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';

// Create with attributes
const newLink = document.createElement('a');
newLink.href = 'https://example.com';
newLink.textContent = 'Visit Example';

// Create with dataset
const dataElement = document.createElement('div');
dataElement.dataset.userId = '12345';
console.log(dataElement); // <div data-user-id="12345"></div>

// ================ Adding to DOM ================
// Append to end
document.body.appendChild(newDiv);

// Insert before
const container = document.querySelector('.container');
container.insertBefore(newDiv, container.firstChild);

// Insert adjacent
const target = document.querySelector('#target');
target.insertAdjacentElement('afterend', newLink);
// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

// ================ Modifying Elements ================
// Class manipulation
const box = document.createElement('div');
box.classList.add('box', 'active');
box.classList.toggle('active'); // Toggles class
box.classList.remove('box');

// Style manipulation
box.style.backgroundColor = 'blue';
box.style.cssText = 'width: 100px; height: 100px;';

// Attributes
box.setAttribute('id', 'myBox');
console.log(box.getAttribute('id')); // 'myBox'
box.removeAttribute('id');

// ================ Document Fragments ================
// Create fragment
const fragment = document.createDocumentFragment();

// Add multiple elements to fragment
for (let i = 0; i < 100; i++) {
  const item = document.createElement('li');
  item.textContent = `Item ${i}`;
  fragment.appendChild(item);
}

// Add to DOM in single operation
document.querySelector('ul').appendChild(fragment);

// ================ Performance Optimization ================
// Measure performance
console.time('DOM Update');

// Bad: Multiple reflows
for (let i = 0; i < 100; i++) {
  document.body.appendChild(document.createElement('div'));
}

// Good: Single reflow
const container = document.createElement('div');
for (let i = 0; i < 100; i++) {
  container.appendChild(document.createElement('div'));
}
document.body.appendChild(container);

console.timeEnd('DOM Update');

// ================ Best Practices ================
// 1. Use fragments for bulk operations
// 2. Minimize DOM access in loops
// 3. Cache DOM references
// 4. Use requestAnimationFrame for visual changes