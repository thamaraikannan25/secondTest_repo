// four.js - Sample file created for issue #42

const greet = (name) => {
  return `Hello, ${name}!`;
};

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);

module.exports = { greet, add, multiply, doubled };
