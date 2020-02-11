const findKeyByValue = function(obj, value) {
  let output = undefined;

  for (let key in obj) {
    if (obj[key] === value) {
      output = key;
    }
  }
  return output;
};

module.exports = findKeyByValue;

