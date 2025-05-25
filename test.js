const person = {
  name: "Alice",
  age: 30,
  toString() {
    return `${this.name}, ${this.age} years old`;
  }
};

console.log(String(person)); // "Alice, 30 years old"
console.log((person));   // Same output (template literal)