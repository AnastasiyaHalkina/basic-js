const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  constructor() {
    this.counter = 0;
    this.maximum = 0;
  }

  calculateDepth( arr ) {
    // remove line with error and write your code here
    if (Array.isArray(arr)) {
      this.counter += 1;
      this.maximum = (this.maximum > this.counter) ? this.maximum : this.counter;
      
      for (let el of arr) {
        if (Array.isArray(el)) {
                    
          return this.calculateDepth(el);
        } else {
          continue;
        }
      }
    }
    return this.maximum;
  }
};