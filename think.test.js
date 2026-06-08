const { test } = require('node:test');
const assert = require('node:assert/strict');
const { think } = require('./think');

test('returns the thought unchanged', () => {
  assert.equal(think('hello', () => {}), 'hello');
});

test('calls logger with formatted message', () => {
  const calls = [];
  think('world', (msg) => calls.push(msg));
  assert.equal(calls.length, 1);
  assert.equal(calls[0], 'Thinking: world');
});

test('uses console.log by default', () => {
  const orig = console.log;
  const calls = [];
  console.log = (msg) => calls.push(msg);
  think('default');
  console.log = orig;
  assert.equal(calls[0], 'Thinking: default');
});
