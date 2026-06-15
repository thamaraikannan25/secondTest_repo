const assert = require("assert");
const { add, multiply, greet } = require("./ten");

assert.strictEqual(add(3, 7), 10, "add(3, 7) should return 10");
assert.strictEqual(add(0, 0), 0, "add(0, 0) should return 0");
assert.strictEqual(add(-1, 1), 0, "add(-1, 1) should return 0");

assert.strictEqual(multiply(4, 5), 20, "multiply(4, 5) should return 20");
assert.strictEqual(multiply(0, 9), 0, "multiply(0, 9) should return 0");
assert.strictEqual(multiply(-2, 3), -6, "multiply(-2, 3) should return -6");

assert.strictEqual(greet("World"), "Hello, World!", 'greet("World") should return "Hello, World!"');
assert.strictEqual(greet("Alice"), "Hello, Alice!", 'greet("Alice") should return "Hello, Alice!"');

console.log("All tests passed.");
