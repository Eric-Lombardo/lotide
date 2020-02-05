// test assertion functions
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

// actual function
const letterPositions = function(str) {
  const output = {};

  // splits input str into an array where each item is a char
  let strArr = str.split("");

  // loop through strArr
  // do these things if that item is not " "
  // if output object already has a key with this item
  // push the index into that array
  // if not create a key with that item and then create an array that contains the index currently at
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== " ") {
      if (output[strArr[i]]) {
        output[strArr[i]].push(i);
      } else {
        output[strArr[i]] = [i];
      }
    }
  }
  return output;
};

assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);  //pass
assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);  //pass
assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21]); //pass
assertArraysEqual(letterPositions("lighthouse in the house").s, [8, 21, 34]); //fail


