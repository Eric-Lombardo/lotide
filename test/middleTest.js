const middle = require("../middle")
const assertArraysEqual = require("../assertArraysEqual")

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