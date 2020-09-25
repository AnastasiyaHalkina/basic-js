const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string') {
    return false;
  } else if (isNaN(+sampleActivity)) {
    return false;
  } else if (sampleActivity.trim() === '') {
    return false;
  }

};
