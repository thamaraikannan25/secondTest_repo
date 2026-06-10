// atone.js - Sample file demonstrating basic JavaScript functionality

function greet(name) {
  return `Hello, ${name}! Welcome to atone.js.`;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function getGreeting() {
  const message = greet("World");
  console.log(message);
  return message;
}

module.exports = { greet, add, multiply, getGreeting };

if (require.main === module) {
  getGreeting();
  console.log("add(2, 3) =", add(2, 3));
  console.log("multiply(4, 5) =", multiply(4, 5));
}
