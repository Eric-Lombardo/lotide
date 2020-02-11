const { assert } = require("chai");
const countOnly = require("../countOnly");

const list = ['carl', 'carl', 'jason'];
const obj = {jason: true};
const obj2 = {carl: true};
const obj3 = {carl: true, jason: true};

describe("#countOnly", () => {
  it("should return {jason: 1} for list: ['carl', 'carl', 'jason'] and object: {jason: true}", () => {
    assert.deepEqual(countOnly(list, obj), {jason: 1});
  })
  it("should return {carl: 2} for list: ['carl', 'carl', 'jason'] and object: {carl: true}", () => {
    assert.deepEqual(countOnly(list, obj2), {carl: 2});
  })
  it("should return {carl: 2, jason: 1} for list: ['carl', 'carl', 'jason'] and object: {carl: true, jason: true}", () => {
    assert.deepEqual(countOnly(list, obj3), {carl: 2, jason: 1});
  })
})
