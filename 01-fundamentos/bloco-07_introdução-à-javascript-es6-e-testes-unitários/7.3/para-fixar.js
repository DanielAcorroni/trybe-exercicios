const assert = require('assert');

const sum = (num1, num2) => num1 + num2;
const division = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;
const sub = (num1, num2) => num1 - num2;

const expectedSum = sum(5, 5);
const expectedDivision = division(5, 5);
const expectedMultiply = multiply(5, 5);
const expectedSub = sub(5, 5);

assert.strictEqual(expectedSum, 10, 'Erro: 5+5=10')
assert.strictEqual(expectedDivision, 1, 'Erro: 5/5=1')
assert.strictEqual(expectedMultiply, 25, 'Erro: 5*5=25')
assert.strictEqual(expectedSub, 0, 'Erro: 5-5=0')