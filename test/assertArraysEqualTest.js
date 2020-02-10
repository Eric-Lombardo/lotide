const assertArraysEqual = require("../assertArraysEqual");

// assertArraysEqual([1, 2, 3], [3, 4, 5]); // fail
// assertArraysEqual([1, 2, 3], [3, 4, 5]);  // fail
// assertArraysEqual([1, 2, 3, "4"], [1, 2, 3, 4]);  // fail
// assertArraysEqual([], []); // passed
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // passed
// assertArraysEqual([]); // fail
