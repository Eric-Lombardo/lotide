const assertEqual = require("../assertEqual");
const tail = require("../tail");

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
console.log("check to see if the tail function works alone: ")
const tailTest = tail([1, 2, 3, 4, 5]);
const tailTest1 = tail([1]);
const tailTest2 = tail([]);
console.log(tailTest, tailTest1, tailTest2);
