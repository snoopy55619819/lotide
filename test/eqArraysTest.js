const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it ('should return true for ([1, 2, 3], [1, 2, 3])', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
  it ('should return false for ([1, 2, 3], [1, 2, 2])', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 2];
    assert.deepEqual(eqArrays(array1, array2), false);
  });
  it ('should return true for (["1", "2", "3"], ["1", "2", "3"])', () => {
    const array1 = ["1", "2", "3"];
    const array2 = ["1", "2", "3"];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
  it ('should return true for ([], [])', () => {
    const array1 = [];
    const array2 = [];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
  it ('should return true for ([1], [1])', () => {
    const array1 = [1];
    const array2 = [1];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
  it ('should return true for ([[2, 3], [4]], [[2, 3], [4]])', () => {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4]];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
  it ('should return true for ([[[[[[1,2]]]]]], [[[[[[1,2]]]]]])', () => {
    const array1 = [[[[[[1,2]]]]]];
    const array2 = [[[[[[1,2]]]]]];
    assert.deepEqual(eqArrays(array1, array2), true);
  });
});
