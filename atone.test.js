const assert = require("assert");
const { greet, add, multiply, getGreeting } = require("./atone");

// greet
assert.strictEqual(greet("World"), "Hello, World! Welcome to atone.js.");
assert.strictEqual(greet("Alice"), "Hello, Alice! Welcome to atone.js.");
assert.strictEqual(greet(""), "Hello, ! Welcome to atone.js.");

// add
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-1, 1), 0);
assert.strictEqual(add(0, 0), 0);
assert.strictEqual(add(2.5, 2.5), 5);
assert.throws(() => add("2", 3), TypeError);
assert.throws(() => add(2, null), TypeError);

// multiply
assert.strictEqual(multiply(4, 5), 20);
assert.strictEqual(multiply(-2, 3), -6);
assert.strictEqual(multiply(0, 100), 0);
assert.strictEqual(multiply(1.5, 2), 3);
assert.throws(() => multiply("4", 5), TypeError);
assert.throws(() => multiply(4, undefined), TypeError);

// getGreeting
assert.strictEqual(getGreeting(), "Hello, World! Welcome to atone.js.");

console.log("All tests passed.");
