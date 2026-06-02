const assert = require('assert');
const { think } = require('./think');

// returns the thought unchanged
assert.strictEqual(think('hello'), 'hello');
assert.strictEqual(think('deep thought'), 'deep thought');

// works with non-string primitives
assert.strictEqual(think(42), 42);
assert.strictEqual(think(true), true);

// throws on null
assert.throws(() => think(null), /thought must not be null or undefined/);

// throws on undefined
assert.throws(() => think(undefined), /thought must not be null or undefined/);

console.log('All think.js tests passed!');
