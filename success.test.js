const assert = require("assert");
const { getSuccessMessage, logSuccess } = require("./success");

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  FAIL: ${name} — ${err.message}`);
    failed++;
  }
}

test("getSuccessMessage returns a string", () => {
  assert.strictEqual(typeof getSuccessMessage(), "string");
});

test("getSuccessMessage contains 'success' (case-insensitive)", () => {
  assert.ok(/success/i.test(getSuccessMessage()));
});

test("logSuccess does not throw without arguments", () => {
  logSuccess();
});

test("logSuccess does not throw with a detail string", () => {
  logSuccess("All checks passed");
});

console.log(`\nResults: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
