// test assertion tests
const eqArrays = function(arr1, arr2) {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😃😃😃Assertion Passed ${arr1} === ${arr2}`);
  } else {
    console.log(`💩💩💩Assertion Failed ${arr1} !== ${arr2}`);
  }
};


// actual function
const takeUntil = function(array, callback) {
  const output = [];

  for (let item of array) {
    if (!callback(item)) {
      output.push(item);
    } else {
      return output;
    }
  }
  // in the case that the callback is always true
  return output;
};

// testing
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2]); // fail

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);