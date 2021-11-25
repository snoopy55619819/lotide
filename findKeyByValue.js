//Check if values are same and return assertion result.
const assertEqual = function(actual, expected) {
  const same = actual === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: ${actual} ${same ? '===' : '!=='} ${expected}`);
};

/*
Implement the function findKeyByValue which takes in an object and a value.
It should scan the object and return the first key which contains the given value.
If no key with that given value is found, then it should return undefined.
*/

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
