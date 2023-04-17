const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr, count = 0) {
    if(Array.isArray(arr)) {
      for(let i = 0; i < arr.length; i++) {
        count = Math.max(count, this.calculateDepth(arr[i]))
      }
      count++
    }
    return count
  }
}

module.exports = {
  DepthCalculator
};
