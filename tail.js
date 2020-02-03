// assertion Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }
};

// tail function
const tail = function(arr) {
  // edge cases where arr is empty or only contains a head
  if (arr.length === 1 || arr.length === 0) {
    return [];
  }

  // creates a new arr without changing the original that only includes
  // the tail
  let output = arr.slice(1);

  return output;
};

//  TEST CODE
//TEST 1
const wordArr = tail(["hello", "goodbye", "See ya later"]);
assertEqual(wordArr.length, 2); // tail only contains 2 items
assertEqual(wordArr.length, 5); // fails
assertEqual(wordArr[0], "goodbye"); // passes
assertEqual(wordArr[1], "See ya later"); // passes
console.log("=======================================");

//TEST 2 - EDGE CASES
const emptyArr = tail([]);
assertEqual(emptyArr.length, 1); // fails
assertEqual(emptyArr.length, 0); // passes
assertEqual(emptyArr[0], "nope"); // fails
console.log("=======================================");

//TEST 3 - CHECKING IF TAIL FUNCTION WORKS ALONE
const tailTest = tail([1, 2, 3, 4, 5]);
const tailTest1 = tail([1]);
const tailTest2 = tail([]);
console.log(tailTest, tailTest1, tailTest2);





