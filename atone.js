// atone.js - Sample file demonstrating basic JavaScript functionality

function greet(name) {
  if (typeof name !== "string") {
    throw new TypeError("greet: name must be a string");
  }
  return `Hello, ${name}! Welcome to atone.js.`;
}

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("add: both arguments must be numbers");
  }
  return a + b;
}

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("multiply: both arguments must be numbers");
  }
  return a * b;
}

function getGreeting() {
  return greet("World");
}

module.exports = { greet, add, multiply, getGreeting };

if (require.main === module) {
  const message = getGreeting();
  console.log(message);
  console.log("add(2, 3) =", add(2, 3));
  console.log("multiply(4, 5) =", multiply(4, 5));
}
