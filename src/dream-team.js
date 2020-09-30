const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
 
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
  }

  let resultArr = members.map(function(name) {
    if (typeof name === 'string') {
      name = name.trim();
      return name[0].toUpperCase();
    }
  });
  if (resultArr.length === 0) {
    return false;
  }
  resultArr.sort();
  return resultArr.join('');
};
