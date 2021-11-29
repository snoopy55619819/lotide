const assert = require('chai').assert;
const tail = require('../tail');
const eqArray = require('../eqArrays');

describe('#tail', () => {
  it ("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    const expectedOutput = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });
  it ("returns ['Lighthouse'] for ['Hello', 'Lighthouse']", () => {
    const inputArray = ["Hello", "Lighthouse"];
    const expectedOutput = ['Lighthouse'];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });
  it ("returns [] for ['Hello']", () => {
    const inputArray = ["Hello"];
    const expectedOutput = [];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });
  it ("returns [] for []", () => {
    const inputArray = [];
    const expectedOutput = [];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });
});

