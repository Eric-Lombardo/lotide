const { assert } = require("chai");
const eqObjects = require("../eqObjects");

let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {a: 1, b: 2, c: 3}
let obj3 = {a: 1}

describe("#eqObjects", () => {
  it("should return true for {a: 1, b: 2, c: 3} and {a: 1, b: 2, c: 3}", () => {
    assert.isTrue(eqObjects(obj1, obj2))
  }) 
  it("should return false for {a: 1, b: 2, c: 3} and {a: 1}", () => {
    assert.isFalse(eqObjects(obj1, obj3))
  }) 
})