//Nikhil Tallapureddy
const eqObjects = require('./eqObjects');

//Compare objects and return assertion results.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //Import util so we can use inspect to show objects in output.
  const same = eqObjects(actual, expected);

  if (same) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const abc5 = {a: [1, 2, 3], b: 5};
const abc6 = {a: [1, 2, 3], b: 5};
//assertObjectsEqual(eqObjects(abc5, abc6), true); // => true
assertObjectsEqual(abc5, abc6); // => Assertion Failed


module.exports = assertObjectsEqual;