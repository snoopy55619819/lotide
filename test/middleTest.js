const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it ("should return [] for []", () => {
    const input = [];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it ("should return [] for [1]", () => {
    const input = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it ("should return [] for [1, 2]", () => {
    const input = [1, 2];
    const expectedOutput = [];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it ("should return [2] for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expectedOutput = [2];
    assert.deepEqual(middle(input), expectedOutput);
  });
  it ("should return [4, 5] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    const expectedOutput = [4, 5];
    assert.deepEqual(middle(input), expectedOutput);
  });
});

