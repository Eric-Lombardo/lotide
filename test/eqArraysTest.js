const eqArrays = require("../eqArrays");
const { assert } = require("chai");

describe("#eqArraysTest", () => {
  it("should return true for comparing [[2, 3], 4] and [[2, 3], 4]", () => {
    assert.isTrue(eqArrays([[2, 3], 4], [[2, 3], 4]));
  });
  it("should return false for comparing [[2, 3], [4]] and [[2, 3], [5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [5]]))
  })
  it ("should return true for comapring ['hi', 'hello'] with ['hi', 'hello']", () => {
    assert.isTrue(eqArrays(["hi", "hello"], ["hi", "hello"]));
  })
  it ("should return true when comparing 2 empty arrays", () => {
    assert.isTrue(eqArrays([], []));
  })
  it("should return false if only 1 array is given", () => {
    assert.isFalse(eqArrays([]));
  })
  it("should still return true for 2 equal deeplyNested arrays", () => {
    let arr1 = [
      [
        [
          [
            [
              2, 3, 4, [5, 6, 7]
            ]
          ]
        ]
      ]
    ];
    
    let arr2 = [
      [
        [
          [
            [
              2, 3, 4, [5, 6, 7]
            ]
          ]
        ]
      ]
    ];
    assert.isTrue(eqArrays(arr1, arr2));
  })
});
