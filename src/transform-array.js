const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr.slice();
  if (!Array.isArray(newArr)) {
    throw new Error('Error');
  }
  if (newArr.length === 0 || newArr === 'Infinity') {
    return [];
  }
  if (newArr.findIndex(el => el === '--discard-next' || el === '--discard-prev' || el === '--double-prev' || el === '--double-next') === -1) {
    return newArr;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == '--double-prev' && i == 0) {
      newArr[i] = 'del';
    }
    if (newArr[i] == '--double-next' && i == newArr.length - 1) {
      newArr[i] = 'del';
    }
    if (newArr[i] == '--discard-next' && i == newArr.length - 1) {
      newArr[i] = 'del';
    }
    if (newArr[i] == '--discard-prev' && i == 0) {
      newArr[i] = 'del';
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] == '--discard-next') {
      newArr[j + 1] = 'del';
      newArr[j] = 'del';
    }
    if (newArr[j] == '--discard-prev') {
      newArr[j - 1] = 'del';
      newArr[j] = 'del';
    }
    if (newArr[j] == '--double-next') {
      newArr[j] = newArr[j + 1];
    }
    if (newArr[j] == '--double-prev') {
      newArr[j] = newArr[j - 1];
    }
  }
  let result = newArr.filter(el => el !== 'del');
  newArr = [];
  return result;
};
