//Nikhil Tallapureddy
const assertEqual = require('./assertEqual');

//Look for a value that makes the callback function truthy and return its key, else undefined.
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

module.exports = findKey;