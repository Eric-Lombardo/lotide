const { assert } = require("chai");
const letterPositions = require("../letterPositions")

describe("#letterPositions", () => {
  it("should return [9, 16, 22] for finding the index of e in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
  })
  it("should not return [8] for finding the index of s in 'lighthouse in the house'", () => {
    assert.notDeepEqual(letterPositions("lighthouse in the house").s, [8]);
  })
})