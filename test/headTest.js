const head = require("../head");
const assertEqual = require("../assertEqual")

//TEST CODE
assertEqual(head([5, 6, 7]), 5); // pass
assertEqual(head([5, 6, 7]), 21); // fail
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); // fail
assertEqual(head([21]), 21); // pass
assertEqual(head([]), 21); // undefined
assertEqual(head([]), undefined); // undefined