const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let result = 1 + arr.reduce((a, b) => Math.max(a, this.calculateDepth(b)), 0);
      return result;
    } else {
      return 0;
    }
  }
};
