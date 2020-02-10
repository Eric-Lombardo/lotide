const middle = require("../middle")
const { assert } = require("chai");

describe('#middle', () => {
  it('should return [] when there is only one value in a given array', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return [2] when the input is [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2 ,3]), [2]);
  });
  it('should return [3, 4] when a given array [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2 ,3, 4, 5, 6]), [3, 4]);
  });
  it('should return false if [3, 4] is the output for the input array [1, 2, 3, 4, 5, 6]', () => {
    assert.notDeepEqual(middle([1, 2 ,3, 4, 5, 6]), [3, 5]);
  });
});