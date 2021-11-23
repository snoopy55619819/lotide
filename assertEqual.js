//Nikhil Tallapureddy
//Implement assertEqual

//Check if values are same and return assertion result.
const assertEqual = function(actual, expected) {
  const same = actual === expected;
  console.log(`${same ? '✅✅✅' : '❌❌❌'}Assertion ${same ? 'Passed' : 'Failed'}: ${actual} ${same ? '===' : '!=='} ${expected}`);
};

//Test Code:
assertEqual('abc', 'abc'); //Output: "Assertion Passed: 'abc' === 'abc'"
assertEqual("Lighthouse Labs", "Bootcamp"); //Output: "Assertion Failed: 'Lighthouse Labs' !== 'Bootcamp'"
assertEqual(1, 1); //Output: "Assertion Passed: 1 === 1"
assertEqual(1, 123); //Output: "Assertion Failed: 1 !== 123"

/*
Test at least the following scenarios:

Comparing identical strings
Comparing non-identical strings
Comparing identical numbers
Comparing non-identical numbers
*/