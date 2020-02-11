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
    } else if (typeof obj1[key] === "object") {
      // if the 2 keys being matched are objects
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }

    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;