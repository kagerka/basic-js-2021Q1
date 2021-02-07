const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.flat();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "^^") {
      count++;
    }
  }
  return count;
};
