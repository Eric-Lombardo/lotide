const flatten = function(arr) {
  let cleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      cleanArr.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        cleanArr.push(arr[i][j]);
      }
    }
  }
  return cleanArr;
};

module.exports = flatten;
