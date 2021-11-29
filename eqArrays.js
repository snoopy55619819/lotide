//Assert Equal function.
const assertEqual = function(actual, expected) {
  const same = actual === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: ${actual} ${same ? '===' : '!=='} ${expected}`);
};

const eqArrays = function(array1, array2) {
  let areArraysEqual = true;
  
  for (let i = 0; i < array1.length; i++) {
    const isValue1AnArray = Array.isArray(array1[i]);
    const isValue2AnArray = Array.isArray(array2[i]);

    if (isValue1AnArray || isValue2AnArray) {
      if (isValue1AnArray && isValue2AnArray) {
        const areArraysEqual = eqArrays(array1[i], array2[i]);
        if(!areArraysEqual) {
          return false;
        }
      } else {
        return false;
      }
    } else if (!(array1[i] === array2[i])) {
      return false;
    }
  };
  return (array1.length === array2.length ? true : false);
};

//Test cases:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
assertEqual(eqArrays([[[[[[1,2]]]]]], [[[[[[1,2]]]]]]), true); // => true