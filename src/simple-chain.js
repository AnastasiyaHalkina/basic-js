const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  chainList: [],

  getLength() {
    
    // remove line with error and write your code here
    return this.chainList.length;
  },
  addLink(value) {
    
    // remove line with error and write your code here
    (value !== undefined) ? this.chainList.push( `( ${value} )`) : this.chainList.push( '( )' );
    return this;
  },
  removeLink(position) {
    
    // remove line with error and write your code here
        if (!this.chainList[position - 1]) {
          this.chainList.length = 0;
          throw new Error('Error');
    }

    this.chainList.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    
    // remove line with error and write your code here
    this.chainList.reverse();
     return this;
  },
  finishChain() {
    
    // remove line with error and write your code here
    let copyChainList = this.chainList.slice();
    this.chainList.length = 0;
    return copyChainList.join('~~');
  }
};

module.exports = chainMaker;
