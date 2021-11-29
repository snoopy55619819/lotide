const assertArraysEqual = require('./assertArraysEqual');

//without() function.
//Take in an array and remove all instances of items in itemsToRemove.
const without = function (sourceArray, itemsToRemove) {
  let modifiedArray = sourceArray;

  for (let i = 0; i < itemsToRemove.length; i++) {
    const removingItem = itemsToRemove[i];
    modifiedArray = modifiedArray.filter(element => element !== removingItem);
  }
  return modifiedArray;
};

//Test Cases:
const result1 = without([1, 2, 3], [1]) // => [2, 3]
assertArraysEqual(result1, [2, 3]);

const result2 = without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(result2, ["1", "2"]);

//Test if original array is the same.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;