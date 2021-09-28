const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const usedArray = [1, 2, 3, 4];
const actualRemoveThree = myRemove(usedArray, 3);

const threeFinder = () => {
    let itHasAThree = false;
    for (let isItThree of actualRemoveThree) {
        if (isItThree === 3) {
            itHasAThree = true;
        } 
    }
    return itHasAThree;
}

assert.deepStrictEqual(actualRemoveThree, [1, 2, 4], 'ERROR: Number three was not removed');
assert.ok(threeFinder, 'ERROR: Number three is present');
assert.notDeepStrictEqual(actualRemoveThree, usedArray, 'ERROR: Array was not modyfied');

const actualRemoveFive = myRemove(usedArray, 5);

assert.deepStrictEqual(actualRemoveFive, usedArray, 'ERROR: Array has a five');