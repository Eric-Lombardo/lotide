const eqObjects = function(obj1, obj2) {
  let array1 = Object.keys(obj1);
  let array2 = Object.keys(obj2);
  if (array1.length !== array2.length) {
    return false;
  }
  
  // checks to see if the value of each key in obj1 matches the
  // corresponding value in obj2
  for (let key in obj1) {
    // if a key in obj1 is an array use eqArray function
    // to see if they match
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    // (!Array.isArray(arr1) && !Array.isArray(arr2))
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// ACTUAL FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😃😃😃Assertion Passed || ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💩💩💩Assertion Failed || ${inspect(actual)} === ${inspect(expected)}`);
  }
};

// ========== test =================
let person1 = {
  name: "eric",
  age: 29,
  list: [1, 2, 3]
};
let person2 = {
  name: "eric",
  age: 29,
  list: [1, 2, 3]
};

assertObjectsEqual(person1, person2);