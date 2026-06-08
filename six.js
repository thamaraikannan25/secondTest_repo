// six.js - Sample file with example JavaScript contents

function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const sampleData = {
  title: "Six",
  version: "1.0.0",
  numbers: [1, 2, 3, 4, 5, 6],
};

console.log(greet("World"));
console.log("Sum:", add(3, 3));
console.log("Product:", multiply(2, 3));
console.log("Data:", sampleData);

module.exports = { greet, add, multiply, sampleData };
