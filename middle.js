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
const middle = function(arr) {
  // edge case for empty, 1 item or 2 item arrays to return empty arr
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return [];
  } else {
    // if arr length is odd find the middle of the array
    // create new arr and then push the middle index of original arr in new arr
    if (arr.length % 2 !== 0) {
      let center = (arr.length - 1) / 2;
      let middleArr = [];
      middleArr.push(arr[center]);
      return middleArr;
    } else {
      // when arr length is even find the middle
      // middle for arr lengths that are even will always be an arr of 2 items
      // so the middle is the length of the arr divide by 2 being the 2nd item
      // and the 1st item is 1 index less than the 2nd item
      let center = (arr.length / 2);
      let middleArr = [];
      middleArr.push(arr[center - 1]);
      middleArr.push(arr[center]);
      return middleArr;
    }
  }
}

// TEST IF MIDDLE FUNCTION WORKS
// console.log(middle([1]))
// console.log(middle([1, 2]))
// console.log(middle([1, 2, 3]))
// console.log(middle([1, 2, 3, 4, 5]))
// console.log(middle([1, 2, 3, 4]))
// console.log(middle([1, 2, 3, 4, 5, 6]))

// TEST TO ASSERT IF ARRAYS ARE EQUAL
assertArraysEqual(middle([1]), []) // passed
assertArraysEqual(middle([1, 2]), [])  // passed
assertArraysEqual(middle([1, 2, 3]), [2])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])  // passed
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5])  // fail



