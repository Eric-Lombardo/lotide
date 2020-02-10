// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;



