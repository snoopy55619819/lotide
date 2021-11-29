const assertEqual = require('./assertEqual');

//Iterate through inputObject and look for desiredValue and return the key.
const findKeyByValue = function(inputObject, desiredValue) {
  for (const [key, value] of Object.entries(inputObject)) {
    if (value === desiredValue) {
      return key;
    }
  }
  return undefined;
};

//Test Cases:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const result1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
console.log(result1);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;