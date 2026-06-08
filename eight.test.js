const assert = require("assert");
const { add, multiply, greet, EIGHT } = require("./eight");

assert.strictEqual(EIGHT, 8, "EIGHT constant should be 8");
assert.strictEqual(add(EIGHT, EIGHT), 16, "add(8, 8) should be 16");
assert.strictEqual(add(0, 5), 5, "add(0, 5) should be 5");
assert.strictEqual(multiply(EIGHT, EIGHT), 64, "multiply(8, 8) should be 64");
assert.strictEqual(multiply(0, EIGHT), 0, "multiply(0, 8) should be 0");
assert.strictEqual(greet("World"), "Hello, World!", "greet('World') should return 'Hello, World!'");
assert.strictEqual(greet("Eight"), "Hello, Eight!", "greet('Eight') should return 'Hello, Eight!'");

console.log("All tests passed.");
