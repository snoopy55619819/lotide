const assertEqual = require('../assertEqual');

//assertEqual() Test Code:
assertEqual('abc', 'abc'); //Output: "Assertion Passed: 'abc' === 'abc'"
assertEqual("Lighthouse Labs", "Bootcamp"); //Output: "Assertion Failed: 'Lighthouse Labs' !== 'Bootcamp'"
assertEqual(1, 1); //Output: "Assertion Passed: 1 === 1"
assertEqual(1, 123); //Output: "Assertion Failed: 1 !== 123"
