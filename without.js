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

// ACTUAL FUNCTIONS
const without = function(master, remove) {
  let cleanArr = [];

  for (let i of master) {
    if (remove.indexOf(i) === -1) {
      cleanArr.push(i);
    }
  }
  return cleanArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // pass
assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []); // pass
assertArraysEqual(without([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4]), [5, 6, 7, 8]); // pass


// EDGE CASE THAT MIGHT BE OVERLOOOKED
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
console.log("overlooked edge case below!");
assertArraysEqual(words, ["hello", "world", "lighthouse"]);