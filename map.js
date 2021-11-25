//Nikhil Tallapureddy
/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.

*/

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

//Map function
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[word.length - 1]);
const results3 = map(words, word => word);
//console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['d', 'l', 'o', 'r', 'm']);
assertArraysEqual(results3, ["ground", "control", "to", "major", "tom"]);
