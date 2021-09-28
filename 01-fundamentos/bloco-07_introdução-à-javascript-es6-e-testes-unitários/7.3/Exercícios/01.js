const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const actualFourFive = sum(4, 5);
assert.strictEqual(actualFourFive, 9, 'ERROR: 5+4=9');

const actualZero = sum(0, 0);
assert.strictEqual(actualZero, 0, 'ERROR: 0+0=0');

assert.throws(() => {
    sum(4, '5')
}, /^Error: parameters must be numbers$/);