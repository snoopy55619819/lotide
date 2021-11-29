
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
//Test cases:
const result1 = middle([]);
const result2 = middle([1]);
const result3 = middle([1, 2]);
const result4 = middle([1, 2, 3]);
const result5 = middle([1, 2, 3, 4, 5, 6, 7, 8]);

assertArraysEqual(result1, []);
assertArraysEqual(result2, []);
assertArraysEqual(result3, []);
assertArraysEqual(result4, [2]);
assertArraysEqual(result5, [4, 5]);