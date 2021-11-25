//Nikhil Tallapureddy

//Check if values are same and return assertion result.
const assertEqual = function(actual, expected) {
  const same = actual === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: ${actual} ${same ? '===' : '!=='} ${expected}`);
};
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
    
    // TO-DO: work on implementing objects as values later.
    // const isValueAnObject = (typeof object1Keys === 'object' && !Array.isArray(object1Keys) && object1Keys !== null ? true : false)
    // if (isValueAnObject) {
    // }
    
    //If value is an array, use eqArrays() function to compare them.
    if (isValueAnArray) {
      const areArraysEqual = eqArrays(key1Value, key2Value);
      if (areArraysEqual) {
        continue;
      } else {
        return false;
      }
    } else if (key1Value === key2Value) {
      continue;
    } else {
      return false;
    }
  }
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

const abc5 = {a: [1, 2, 3]};
const abc6 = {a: [1, 2, 3]};
assertEqual(eqObjects(abc5, abc6), true); // => true