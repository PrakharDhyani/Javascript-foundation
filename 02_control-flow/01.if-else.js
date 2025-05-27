/**
 * =============================================
 * COMPLETE IF-ELSE STATEMENT GUIDE
 * =============================================
 * 
 * Covers:
 * - Basic if-else syntax
 * - Chaining conditions
 * - Real-world examples
 * - Edge cases
 * - Interview questions
 */

// ========================
// 1. BASIC SYNTAX
// ========================

// Simple if statement
const age = 18;
if (age >= 18) {
  console.log("You can vote");
}

// If-else statement
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ========================
// 2. CHAINING CONDITIONS
// ========================

// Else-if ladder
const temperature = 25;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Pleasant"); // This will execute
} else if (temperature > 10) {
  console.log("Cool");
} else {
  console.log("Cold");
}

// ========================
// 3. REAL-WORLD EXAMPLES
// ========================

// Form validation
function validateForm(username, password) {
  if (!username || !password) {
    return "All fields are required";
  } else if (password.length < 8) {
    return "Password must be 8+ characters";
  } else {
    return "Valid";
  }
}

// Pricing tiers
function calculatePrice(quantity) {
  if (quantity > 100) {
    return quantity * 0.8; // 20% discount
  } else if (quantity > 50) {
    return quantity * 0.9; // 10% discount
  } else {
    return quantity; // No discount
  }
}

// ========================
// 4. EDGE CASES
// ========================

// Falsy values gotcha
const userInput = "";
if (userInput) {
  console.log("Valid input"); // Won't execute
} else {
  console.log("Invalid input"); // Will execute
}

// Nullish coalescing alternative
const username = null;
if (username ?? false) {
  console.log("Welcome", username);
} else {
  console.log("Guest session");
}

// ========================
// 5. INTERVIEW QUESTIONS
// ========================

/**
 * Q1: What's the output?
 */
const x = 0;
if (x) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // This executes
}

/**
 * Q2: How would you optimize this nested if-else?
 */
if (user.role === "admin") {
  // admin logic
} else {
  if (user.subscription === "premium") {
    // premium logic
  } else {
    // free user logic
  }
}

/**
 * Answer: Use early returns or switch
 */

/**
 * Q3: Write a function that categorizes BMI
 * (Underweight < 18.5, Normal 18.5-24.9, etc.)
 */
function categorizeBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) return "Underweight";
  else if (bmi <= 24.9) return "Normal";
  else if (bmi <= 29.9) return "Overweight";
  else return "Obese";
}