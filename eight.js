// eight.js — sample file demonstrating basic JavaScript utilities

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

const EIGHT = 8;

if (require.main === module) {
  console.log("The number eight:", EIGHT);
  console.log("8 + 8 =", add(EIGHT, EIGHT));
  console.log("8 * 8 =", multiply(EIGHT, EIGHT));
  console.log(greet("World"));
}

module.exports = { add, multiply, greet, EIGHT };
