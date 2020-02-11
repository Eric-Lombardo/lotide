const { assert } = require("chai");
const flatten = require("../flatten")

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // pass
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], [7, 8, 9], 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // pass
// assertArraysEqual(flatten([1]), [1]); // pass
// assertArraysEqual(flatten([]), []); // pass

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5] for input array [1, 2, [3, 4], 5]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
  })
  it("should return [1] for input array [1]", () => {
    assert.deepEqual(flatten([1]), [1]);
  })
  it("should return [] for inpur array []", () => {
    assert.deepEqual(flatten([]), []);
  })
})