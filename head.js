// assertion Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }
};

// head function
const head = function(arr) {
  // checks to see if the array is empty or not
  if (arr.length === 0) {
    return undefined;
  }

  // returns first element of input array
  return arr[0];
};

//TEST CODE
assertEqual(head([5, 6, 7]), 5); // pass
assertEqual(head([5, 6, 7]), 21); // fail
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); // fail
assertEqual(head([21]), 21); // pass
assertEqual(head([]), 21); // undefined
assertEqual(head([]), undefined); // undefined


