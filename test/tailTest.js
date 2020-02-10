const tail = require("../tail");
const { assert } = require('chai');

describe("#tail", () => {
  it("should return ['goodbye', 'See ya latter'] when input is ['hello', 'goodbye', 'See ya latter']", () => {
    assert.deepEqual(tail(["hello", "goodbye", "See ya later"]), ["goodbye", "See ya later"]);
  });
  it("should return [] if input is ['hello']", () => {
    assert.deepEqual(tail(["hello"]), []);
  });
  it("should return [] if input is []", () => {
    assert.deepEqual(tail([]), []);
  });
});
