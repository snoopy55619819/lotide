//Nikhil Tallapureddy
// TO-DO: Work on implementing case where objects can be values for the eqObjects().
// const isValueAnObject = (typeof object1Keys === 'object' && !Array.isArray(object1Keys) && object1Keys !== null ? true : false)
// if (isValueAnObject) {
// }
//

//Check if two arrays are equal.
const eqArrays = function(array1, array2) {
  let areArraysEqual = true;
  for (let i = 0; i < array1.length; i++) {
    (array1[i] === array2[i] ? areArraysEqual = true : areArraysEqual = false);
  }
  return (array1.length === array2.length ? areArraysEqual : false);
};

//eqObjects() function.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  //Iterate through keys of object1 and see if the same key:value pair exist in object2.
  for (const obj1key of object1Keys) {
    const key1Value = object1[obj1key];
    const key2Value = object2[obj1key];
    const isValueAnArray = Array.isArray(key1Value);
    
    //If value is an array, use eqArrays() function to compare them.
    if (isValueAnArray) {
      const areArraysEqual = eqArrays(key1Value, key2Value);
      if (!areArraysEqual) {
        return false;
      }
    } else if (key1Value !== key2Value) {
      return false;
    }
  }
  //If the length of the arrays is different, return false
  return (object1Keys.length === object2Keys.length ? true : false);
};

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

