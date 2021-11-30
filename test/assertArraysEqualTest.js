const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe ('#assertArraysEqual', () => {
  it ("returns true for ([1, 2, 3], [1, 2, 3])", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const expectedOutput = '✅✅✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]';
    assert.deepEqual(assertArraysEqual(arr1, arr2), undefined);
  });
});

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
