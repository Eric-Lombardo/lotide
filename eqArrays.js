// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// TESTING
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => pass
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => pass
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => pass

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
// assertEqual(eqArrays([], []), true); // => should PASS
// assertEqual(eqArrays([]), false); // => should PASS

let arr1 = [
  [
    [
      [
        [
          2, 3, 4, [5, 6, 7]
        ]
      ]
    ]
  ]
];

let arr2 = [
  [
    [
      [
        [
          2, 3, 4, [5, 6, 7]
        ]
      ]
    ]
  ]
];
assertEqual(eqArrays(arr1, arr2), true); // => should PASS
