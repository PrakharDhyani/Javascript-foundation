/**
 * DOM EVENTS MASTER FILE
 * Covers:
 * - Event listeners
 * - Event propagation
 * - Event delegation
 * - Custom events
 * - Performance considerations
 */

// ================ Event Listeners ================
const button = document.querySelector('#myButton');

// Basic click event
button.addEventListener('click', function(event) {
  console.log('Button clicked!', event.target);
});

// Multiple events
const input = document.querySelector('#textInput');

input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input lost focus'));
input.addEventListener('input', (e) => {
  console.log('Input value:', e.target.value);
});

// ================ Event Propagation ================
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');

// Event bubbling (default)
outer.addEventListener('click', () => console.log('Outer clicked'));
inner.addEventListener('click', () => console.log('Inner clicked'));
// Clicking inner logs: "Inner clicked" then "Outer clicked"

// Event capturing
outer.addEventListener('click', () => console.log('Outer captured'), true);
inner.addEventListener('click', () => console.log('Inner clicked'));
// Clicking inner logs: "Outer captured" then "Inner clicked"

// Stop propagation
inner.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Propagation stopped');
});

// ================ Event Delegation ================
const list = document.querySelector('#itemList');

// Single listener for multiple elements
list.addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    console.log('List item clicked:', e.target.textContent);
  }
});

// Dynamically added items still work
setTimeout(() => {
  list.innerHTML += '<li>New Item</li>';
}, 1000);

// ================ Custom Events ================
// Create event
const customEvent = new CustomEvent('announcement', {
  detail: { message: "Hello world!" },
  bubbles: true
});

// Dispatch event
button.dispatchEvent(customEvent);

// Listen for custom event
document.addEventListener('announcement', (e) => {
  console.log('Custom event:', e.detail.message);
});

// ================ Performance Considerations ================
// Debouncing rapid events
let timeout;
window.addEventListener('resize', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log('Resize complete');
  }, 200);
});

// Passive events (improves scroll performance)
document.addEventListener('scroll', () => {
  console.log('Scrolling');
}, { passive: true });

// ================ Event Best Practices ================
// 1. Use event delegation for dynamic content
// 2. Remove unused event listeners
// 3. Use passive for scroll/touch events
// 4. Debounce rapid-fire events