const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it ("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'a' for ['a', 'b', 'c']", () => {
    assert.strictEqual(head(['a', 'b', 'c']), 'a');
  });
  it("returns '2' for ['2','3','4']", () => {
    assert.strictEqual(head(['2','3','4']), '2');
  });
  it("returns 123 for [123]", () => {
    assert.strictEqual(head([123]), 123);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});

