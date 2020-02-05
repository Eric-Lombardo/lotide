// TEST/ASSERTION FUNCTIONS
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
    console.log(`😃😃😃Assertion Passed`);
  } else {
    console.log(`💩💩💩Assertion Failed`);
  }
};

// ACTUAL FUNCTION
const flatten = function(arr) {
  let cleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      cleanArr.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        cleanArr.push(arr[i][j]);
      }
    }
  }
  return cleanArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // pass
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6], [7, 8, 9], 10]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // pass
assertArraysEqual(flatten([1]), [1]); // pass
assertArraysEqual(flatten([]), []); // pass
