// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }
};

// actual function
const countLetters = function(str) {
  let output = {};

  for (let char of str) {
    if (char !== " ") {
      if (output[char]) {
        output[char]++;
      } else {
        output[char] = 1;
      }
    }
  }
  return output;
};

let test1 = countLetters("hello");
let test2 = countLetters("lighthouse is the house");

assertEqual(test1["h"], 1); // pass
assertEqual(test1["l"], 2); // pass
assertEqual(test2["h"], 4); // pass
assertEqual(test2["e"], 3); // pass
assertEqual(test2["i"], 200); // FAIL


