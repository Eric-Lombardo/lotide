// testing assertion
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

// actual code

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// test cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.toUpperCase());

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results2, [6, 7, 2, 5, 999999]); // FAIL
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);