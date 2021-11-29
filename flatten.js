const assertArraysEqual = require('./assertArraysEqual');

//Function flatten takes in an array containing elements including
//nested arrays of elements, and returns a "flattened" version of the array.
const flatten = function (array) {
  let flattenedArray = [];

  const applyFlatten = function (array1) {
    if (array1.length === 0) {
      return flattenedArray
    }
    if (Array.isArray(array1[0])) {
      if(array1[0].length === 0) {
        array1.shift()
        return applyFlatten(array1);
      }
      applyFlatten(array1.shift());
      return applyFlatten(array1);
    }
    flattenedArray.push(array1.shift());
    applyFlatten(array1);
  };

  applyFlatten(array);
  return flattenedArray;
};


const result = flatten([[1], 2, [3, 4], 5, [6,1,'a']]) // => [1, 2, 3, 4, 5, 6]
// console.log(result);
assertArraysEqual(result, [1,2,3,4,5,6,1,'a']);

module.exports = flatten;