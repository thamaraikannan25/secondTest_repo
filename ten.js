function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { add, multiply, greet };

if (require.main === module) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  console.log("Sum of 1 to 10:", sum);
  console.log("add(3, 7):", add(3, 7));
  console.log("multiply(4, 5):", multiply(4, 5));
  console.log(greet("World"));
}
