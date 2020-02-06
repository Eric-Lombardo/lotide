// Function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }
};

// actual function
const findKey = function(object, callback) {
  let output;

  for (let key in object) {
    if (callback(object[key])) {
      output = key;
      return output;
    }
  }
  return output;
};

// testing
const lib = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(lib, x => x.stars === 2), "noma");
assertEqual(findKey(lib, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(lib, x => x.stars > 2), "Akaleri");
assertEqual(findKey(lib, x => x.stars > 210), "Akaleri"); // fail
