//Nikhil Tallapureddy
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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
    const isValue1AnObject = (typeof key1Value === 'object' && !Array.isArray(key1Value) && key1Value !== null ? true : false);
    const isValue2AnObject = (typeof key2Value === 'object' && !Array.isArray(key2Value) && key2Value !== null ? true : false);
    
    //If values are objects use recursion to check if values are even.
    if (isValue1AnObject || isValue2AnObject) {
      if (isValue1AnObject && isValue2AnObject) {
        const areObjsEqual = eqObjects(key1Value, key2Value);

        if (!areObjsEqual) {
          return false;
        }
      } else {
        return false;
      }
    } else if (isValueAnArray) { //If value is an array, use eqArrays() function to compare them.
      const areArraysEqual = eqArrays(key1Value, key2Value);

      if (!areArraysEqual) {
        return false;
      }
    } else if (key1Value !== key2Value) { //If values are just primative types.
      return false;
    }
  };
  //If the length of the arrays is different, return false
  return (object1Keys.length === object2Keys.length ? true : false);
};


//Test Cases:
const ab = { a: "1", b: "2", c: "3", d: "4", fapple: "6", apple: "5"};
const ba = { b: "2", a: "1", c: "3", d: "4", apple: "5", fapple: "6"};
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => true

const abc1 = { a: "1"};
const abc2 = { b: "2"};
assertEqual(eqObjects(abc1, abc2), false); // => true

const abc3 = {};
const abc4 = {};
assertEqual(eqObjects(abc3, abc4), true); // => true

//Test cases with array as value
const abc5 = {a: [1, 2, 3]};
const abc6 = {a: [1, 2, 3]};
assertEqual(eqObjects(abc5, abc6), true); // => true

//Test cases with objects as value
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

module.exports = eqObjects;