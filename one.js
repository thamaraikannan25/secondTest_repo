// one.js — sample JavaScript file

const greeting = "Hello, World!";

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(greeting);
console.log("Sum:", sum);
console.log("Doubled:", doubled);
console.log("2 + 3 =", add(2, 3));
console.log("4 * 5 =", multiply(4, 5));

module.exports = { add, multiply };
