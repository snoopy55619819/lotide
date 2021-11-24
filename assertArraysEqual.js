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
  const same = eqArrays(actual[0], actual[1]) === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: [${actual[0]}] ${same ? '===' : '!=='} [${actual[1]}]`);
};

assertArraysEqual([[1, 2, 3], [1, 2, 3]], true);
assertArraysEqual([['a', 'b', 'c'], ['a', 'b', 'c']], true);
