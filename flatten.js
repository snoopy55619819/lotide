//eqArrays function.
const eqArrays = function(array1, array2) {
  let areArraysEqual = true;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i] ? areArraysEqual = true : areArraysEqual = false);
  }
  return (array1.length === array2.length ? areArraysEqual : false);
};

//Check if arrays are same and return assertion result.
const assertArraysEqual = function(actual, expected) {
  const same = eqArrays(actual, expected)
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: [${actual}] ${same ? '===' : '!=='} [${expected}]`);
};

/*
Create a function flatten which will take in an array containing elements 
including nested arrays of elements, and return a "flattened" version of the array.
*/

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