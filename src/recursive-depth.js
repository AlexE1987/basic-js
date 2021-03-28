const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(Array.isArray(arr)) {
      return 1 + arr.reduce((sum, element) => Math.max(sum, this.calculateDepth(element)),0);
    } else {
      return false
    };
  };
};