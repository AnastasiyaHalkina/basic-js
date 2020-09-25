const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  
  // remove line with error and write your code here
  let counterCats = 0;

//  for (let elem of matrix) {
 //   for (let i = 0; i < elem.length; i++) {
//      if (elem[i] === '^^') {
//        counterCats += 1;
//      }
//    }
//
//}

  matrix.forEach(function(item) {
    item.forEach(function(elem) {
      if (elem === '^^') {
        counterCats += 1;
      }
    });
  });
  return counterCats;
};
