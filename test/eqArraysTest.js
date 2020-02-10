const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TESTING
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => pass
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => pass
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => pass

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([]), false); // => should PASS

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
