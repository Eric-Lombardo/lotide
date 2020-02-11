const { assert } = require("chai");
const findKeyByValue = require("../findKeyByValue");


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("should return drama when input obj is {drama: 'the wire'} and search item is 'the wire'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })
  it("should return undefined when input obj is empty {} and search item is '70's show'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "70's show"), undefined);
  })
})