const letterPositions = function(str) {
  const output = {};

  // splits input str into an array where each item is a char
  let strArr = str.split("");

  // loop through strArr
  // do these things if that item is not " "
  // if output object already has a key with this item
  // push the index into that array
  // if not create a key with that item and then create an array that contains the index currently at
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== " ") {
      if (output[strArr[i]]) {
        output[strArr[i]].push(i);
      } else {
        output[strArr[i]] = [i];
      }
    }
  }
  return output;
};

module.exports = letterPositions;

