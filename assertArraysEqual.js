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

assertArraysEqual([1, 2, 3], [3, 4, 5]); // fail
assertArraysEqual([1, 2, 3], [3, 4, 5]);  // fail
assertArraysEqual([1, 2, 3, "4"], [1, 2, 3, 4]);  // fail
assertArraysEqual([], []); // passed
assertArraysEqual([1, 2, 3], [1, 2, 3]); // passed
assertArraysEqual([]); // fail


