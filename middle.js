//eqArrays function.
const eqArrays = function(array1, array2) {
  let areArraysEqual = true;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i] ? areArraysEqual = true : areArraysEqual = false);
  }
  return areArraysEqual;
};

//Check if arrays are same and return assertion result.
const assertArraysEqual = function(actual, expected) {
  const same = eqArrays(actual, expected)
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: [${actual}] ${same ? '===' : '!=='} [${expected}]`);
};

//Return the middle element(s) of a given array.
const middle = function(arr) {
  const arrLength = arr.length;
  //Check 0, 1 and 2 array length cases.
  if (arrLength === 0 || arrLength === 1 || arrLength === 2) {
    return [];
  } else if (arrLength % 2 !== 0) { // Cases where arrLength is odd
    const middleElementIndex = Math.floor(arrLength / 2);
    return [arr[middleElementIndex]];
  } else { //Cases where arrLength is even
    const firstMiddleElementIndex = arrLength / 2 - 1;
    return [arr[firstMiddleElementIndex], arr[firstMiddleElementIndex + 1]];
  }
};

//Test cases:
const result1 = middle([]);
const result2 = middle([1]);
const result3 = middle([1, 2]);
const result4 = middle([1, 2, 3]);
const result5 = middle([1, 2, 3, 4, 5, 6, 7, 8]);

assertArraysEqual(result1, []);
assertArraysEqual(result2, []);
assertArraysEqual(result3, []);
assertArraysEqual(result4, [2]);
assertArraysEqual(result5, [4, 5]);