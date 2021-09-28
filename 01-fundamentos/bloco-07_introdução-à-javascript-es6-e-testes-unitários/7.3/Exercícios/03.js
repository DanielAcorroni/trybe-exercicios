const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const usedArray = [1, 2, 3, 4];
const actualRemoveThree = myRemoveWithoutCopy(usedArray, 3);
console.log(actualRemoveThree);
assert.deepStrictEqual(actualRemoveThree, [1, 2, 4], 'ERROR: Three was not removed');
assert.notDeepStrictEqual(actualRemoveThree, [1, 2, 3, 4], 'ERROR: Original array returned');
assert.notDeepStrictEqual(actualRemoveThree, usedArray, 'ERROR: Used array is the same as the function parameter');
