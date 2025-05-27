/**
 * =============================================
 * COMPLETE SWITCH STATEMENT GUIDE
 * =============================================
 * 
 * Covers:
 * - Basic switch syntax
 * - Case grouping
 * - Strict comparison
 * - Real-world examples
 * - Interview questions
 */

// ========================
// 1. BASIC SYNTAX
// ========================

const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start work week");
    break;
  case "Friday":
    console.log("Weekend coming");
    break;
  default:
    console.log("Midweek");
}

// ========================
// 2. IMPORTANT FEATURES
// ========================

// Case grouping
const grade = "B";
switch (grade) {
  case "A":
  case "B":
    console.log("Well done");
    break;
  case "C":
    console.log("Passed");
    break;
  default:
    console.log("Failed");
}

// Strict comparison
const num = "5";
switch (num) {
  case 5:
    console.log("Number 5"); // Won't execute
    break;
  case "5":
    console.log("String 5"); // Will execute
    break;
}

// ========================
// 3. REAL-WORLD EXAMPLES
// ========================

// HTTP status codes
function handleResponse(status) {
  switch (status) {
    case 200:
      return "Success";
    case 404:
      return "Not found";
    case 500:
      return "Server error";
    default:
      return "Unknown status";
  }
}

// Theme selection
function applyTheme(theme) {
  switch (theme) {
    case "dark":
      document.body.classList.add("dark-mode");
      break;
    case "light":
      document.body.classList.remove("dark-mode");
      break;
    default:
      console.warn("Unknown theme");
  }
}

// ========================
// 4. EDGE CASES
// ========================

// Forgetting break
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple"); // Will execute
  case "orange":
    console.log("Orange"); // Will also execute!
    break;
}

// Using expressions in cases
const score = 85;
switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B"); // This executes
    break;
}

// ========================
// 5. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: When would you use switch vs if-else?
 * A: 
 * - Switch: Multiple exact value comparisons
 * - If-else: Ranges, complex conditions
 */

/**
 * Q2: What's wrong with this switch?
 */
const val = 1;
switch (val) {
  case 1:
    console.log(1);
  case 2:
    console.log(2);
  default:
    console.log(3);
}
/**
 * Answer: Missing break statements
 */

/**
 * Q3: Write a switch for direction commands
 * (N → "North", S → "South", etc.)
 */
function getDirection(abbr) {
  switch (abbr.toUpperCase()) {
    case "N": return "North";
    case "S": return "South";
    case "E": return "East";
    case "W": return "West";
    default: return "Invalid";
  }
}