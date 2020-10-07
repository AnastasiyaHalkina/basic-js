const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {

  // remove line with error and write your code here
  str = String(str);
  let addition;
  let additionSeparator;
  let repeatTimes;
  let separator;
  let additionRepeatTimes;

  addition = (options.addition !== undefined) ? String(options.addition) : ''; 
  additionSeparator = (options.additionSeparator !== undefined) ? String(options.additionSeparator) : '|';
  repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  separator = (options.separator !== undefined) ? options.separator : "+";
  additionRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
  
  let additionalStr = '';
  let additionalArr = [];
  let resultArr = [];

  if (addition.length > 0) {
        for (let i = 0; i < additionRepeatTimes; i++) {
          additionalArr.push( addition );
        }
  }

  if (additionalArr.length > 0) {
    additionalStr = additionalArr.join(additionSeparator);
  }

  for (let i = 0; i < repeatTimes; i++) {
    resultArr.push(str + additionalStr);
  }

  return resultArr.join(separator);

};