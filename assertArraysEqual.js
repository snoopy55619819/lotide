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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
