/**
 * =============================================
 * COMPLETE JAVASCRIPT COMMENTS GUIDE
 * =============================================
 * 
 * Covers:
 * - Types of comments (single-line, multi-line)
 * - Best practices for effective commenting
 * - Documentation comments (JSDoc)
 * - Comment-driven development
 * - Interview questions with answers
 */

// ==================================
// SECTION 1: COMMENT TYPES
// ==================================

/**
 * 1.1 Single-Line Comments
 * -----------------------
 * Start with // and continue to end of line
 * Used for short explanations
 */

// Calculate total price including tax
const price = 100;
const taxRate = 0.08;
const total = price * (1 + taxRate); // Result: 108

/**
 * 1.2 Multi-Line Comments
 * ----------------------
 * Wrapped in /* and *\/
 * Used for longer explanations
 */

/*
This function validates user input:
1. Checks for empty values
2. Validates email format
3. Verifies password strength
*/
function validateInput() {
  // ...implementation
}

// ==================================
// SECTION 2: DOCUMENTATION COMMENTS (JSDoc)
// ==================================

/**
 * 2.1 Function Documentation
 * -------------------------
 * Uses special JSDoc syntax for IDE support
 * 
 * @param {string} username - The user's login name
 * @param {number} age - The user's age in years
 * @returns {Object} User profile object
 * @throws {Error} If validation fails
 */
function createUser(username, age) {
  if (!username) throw new Error("Username required");
  return { username, age, joined: new Date() };
}

/**
 * 2.2 Class Documentation
 * ----------------------
 */
class Product {
  /**
   * Create a product instance
   * @param {string} name - Product name
   * @param {number} price - Price in USD
   */
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  /**
   * Apply discount to price
   * @param {number} percent - Discount percentage (0-100)
   * @returns {number} New price
   */
  applyDiscount(percent) {
    return this.price * (1 - percent/100);
  }
}

// ==================================
// SECTION 3: COMMENTING BEST PRACTICES
// ==================================

/**
 * 3.1 What to Comment
 * ------------------
 * - Complex business logic
 * - Workarounds for known issues
 * - Non-obvious optimizations
 * - API contracts
 * - Important decisions (with "WHY")
 */

// GOOD: Explains why we're using this algorithm
// Using bubble sort here because the dataset is small (<100 items)
// and we need stable sorting which Array.prototype.sort() doesn't guarantee
function sortUsers(users) { /*...*/ }

/**
 * 3.2 What NOT to Comment
 * ----------------------
 * - Obvious code ("i++ // increment i")
 * - Outdated comments
 * - Comments that contradict the code
 */

// BAD EXAMPLE:
const x = 5; // Set x to 5 (this is obvious)

/**
 * 3.3 Comment Styles
 * -----------------
 * - Use consistent style team-wide
 * - Prefer full sentences with punctuation
 * - Keep comments up-to-date with code changes
 */

// ==================================
// SECTION 4: COMMENT-DRIVEN DEVELOPMENT
// ==================================

/**
 * 4.1 Using Comments as Planning Tool
 * ---------------------------------
 * Write comments first to outline approach
 */

/*
Pagination Algorithm:
1. Calculate total pages: ceil(totalItems/itemsPerPage)
2. Validate current page is within bounds
3. Fetch items for current page
4. Return page data + metadata
*/
function paginate() {
  // Implementation follows...
}

/**
 * 4.2 TODO Comments
 * ----------------
 * Mark incomplete work with clear ownership
 */

// TODO: Optimize this for large datasets (assign to @developer)
function processLargeData() {}

// FIXME: This fails when input contains emojis
function countCharacters() {}

// ==================================
// SECTION 5: INTERVIEW QUESTIONS
// ==================================

/**
 * Q1: What are the different types of comments in JavaScript?
 * A: 
 * - Single-line (//)
 * - Multi-line (/* *\/)
 * - Documentation comments (/** *\/ with JSDoc tags)
 */

/**
 * Q2: When should you avoid writing comments?
 * A: When the code is self-documenting through:
 * - Clear variable/function names
 * - Simple, obvious logic
 * - Well-structured code
 */

/**
 * Q3: What is JSDoc and why is it useful?
 * A: 
 * - Standardized documentation format
 * - Enables IDE tooltips and type checking
 * - Can generate API documentation
 * - Helps with code maintainability
 */

/**
 * Q4: What makes a bad comment?
 * A:
 * - Outdated information
 * - Comments that just repeat the code
 * - Unclear or joke comments
 * - Comments explaining bad code instead of fixing it
 */

/**
 * Q5: How would you document this function?
 */
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

/**
 * Model Answer:
 * 
 * Calculates the sum of prices for all items
 * @param {Array<Object>} items - Array of item objects
 * @param {number} items[].price - Price of individual item
 * @returns {number} Total price of all items
 */

// ==================================
// SECTION 6: COMMENTING STYLE GUIDE
// ==================================

/**
 * 6.1 Function Headers
 * -------------------
 * Use JSDoc for all public functions
 */

/**
 * 6.2 Section Comments
 * -------------------
 * Use consistent formatting for code sections
 */

// =========================
// DATABASE OPERATIONS
// =========================

/**
 * 6.3 Inline Comments
 * ------------------
 * Place on separate line above the code
 * Indent to same level as code
 */

// Validate email format before saving
const isValid = /^[^@]+@\w+\.\w+$/.test(email);

// ==================================
// SECTION 7: MODERN PRACTICES
// ==================================

/**
 * 7.1 TypeScript Annotations
 * -------------------------
 * Type information makes many comments redundant
 */

interface User {
  /** The user's unique ID */
  id: number;
  /** Full name of the user */
  name: string;
}

/**
 * 7.2 Self-Documenting Code
 * ------------------------
 * Better than comments when possible
 */

// Instead of:
// Check if user is admin
if (user.role === 'ADMIN') { ... }

// Write:
const isAdmin = user.role === 'ADMIN';
if (isAdmin) { ... }

// ==================================
// SECTION 8: SUMMARY CHEATSHEET
// ==================================

/*
| Comment Type       | Syntax              | When to Use                  |
|--------------------|---------------------|------------------------------|
| Single-line        | // comment          | Brief explanations           |
| Multi-line         | /* comment *\/      | Longer descriptions          |
| Documentation      | /** comment *\/     | Public APIs and functions    |
| TODO/FIXME         | // TODO:            | Temporary notes              |
*/

// End of Comments Masterfile