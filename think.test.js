const assert = require('assert');
const { think } = require('./think');

let passed = 0;

// Returns the thought unchanged
(function testReturnValue() {
  const result = think('hello', () => {});
  assert.strictEqual(result, 'hello', 'think() should return the thought');
  console.log('PASS: returns the thought');
  passed++;
})();

// Works with different types
(function testReturnValueNumber() {
  const result = think(42, () => {});
  assert.strictEqual(result, 42, 'think() should return numeric thought');
  console.log('PASS: returns numeric thought');
  passed++;
})();

// Logger receives correctly formatted message
(function testLoggerCalled() {
  let logged = null;
  think('world', (msg) => { logged = msg; });
  assert.strictEqual(logged, 'Thinking: world', 'logger should receive formatted message');
  console.log('PASS: logger receives formatted message');
  passed++;
})();

// Logger is optional (uses console.log by default without throwing)
(function testDefaultLogger() {
  const originalLog = console.log;
  let captured = null;
  console.log = (msg) => { captured = msg; };
  think('default');
  console.log = originalLog;
  assert.strictEqual(captured, 'Thinking: default', 'default logger should be console.log');
  console.log('PASS: default logger is console.log');
  passed++;
})();

console.log(`\nAll ${passed} tests passed.`);
