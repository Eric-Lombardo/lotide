const head = function(arr) {
  // checks to see if the array is empty or not
  if (arr.length === 0) {
    return undefined;
  }

  // returns first element of input array
  return arr[0];
};

module.exports = head;



