//Nikhil Tallapureddy

//Check if values are same and return assertion result.
const assertEqual = function(actual, expected) {
  const same = actual === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: ${actual} ${same ? '===' : '!=='} ${expected}`);
};

/*
Implement the function findKey which takes in an object and a callback.
 It should scan the object and return the first key for which the callback returns a truthy value.
 If no key is found, then it should return undefined.
*/

//Look for a value that makes teh callback function truthy and return its key, else undefined.
const findKey = function(object, callback) {
  for (const itemKey in object) {
    let callbackResult = callback(object[itemKey]);

    if(callbackResult) {
      return itemKey;
    }
  }
  return undefined;
};


//Testing:
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(result, 'noma');

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4) // => "undefined"
assertEqual(result1, undefined);
