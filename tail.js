const assertEqual = require("./assertEqual");

// tail function
const tail = function(arr) {
  // edge cases where arr is empty or only contains a head
  if (arr.length === 1 || arr.length === 0) {
    return [];
  }

  // creates a new arr without changing the original that only includes
  // the tail
  let output = arr.slice(1);

  return output;
};

module.exports = tail;




