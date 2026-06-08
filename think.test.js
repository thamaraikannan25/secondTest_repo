const assert = require('assert');
const { think } = require('./think');

assert.strictEqual(think('hello'), 'hello', 'returns the thought string');
assert.strictEqual(think(42), 42, 'returns a number thought');
assert.strictEqual(think(true), true, 'returns a boolean thought');

assert.throws(() => think(null), /thought must not be null or undefined/, 'throws on null');
assert.throws(() => think(undefined), /thought must not be null or undefined/, 'throws on undefined');

console.log('All tests passed.');
