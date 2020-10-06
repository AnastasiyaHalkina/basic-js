const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (arr[i + 1] !== undefined) {
        i += 1;
      }
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 1] !== undefined &&
          (arr[i - 1] === resultArr[resultArr.length - 1] ||
           (isNaN( resultArr[resultArr.length - 1]) &&
            isNaN( arr[i - 1] ) ) )) {
        resultArr.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        resultArr.push(arr[i + 1], arr[i + 1]);
        i += 1;
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 1] !== undefined && 
          (arr[i - 1] === resultArr[resultArr.length - 1] ||
           (isNaN( resultArr[resultArr.length - 1] &&
            isNaN(arr[i - 1])) ))) {
        resultArr.push(arr[i - 1]);
      }
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};