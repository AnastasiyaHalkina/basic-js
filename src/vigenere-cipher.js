const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct=true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined ||
        key === undefined) {
    throw new Error('Error');
    }

    let resultStr = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    let repeatKey = key.repeat( Math.ceil( message.length / key.length ) );
    repeatKey = repeatKey.slice(0, message.length);

    for (let i = 0; i < message.length; i++) {
      let letterPosition = message[i].charCodeAt();

        if (letterPosition >= 65 && letterPosition <= 90) {
          let cipherLetter;
          let keyPosition = repeatKey[i].charCodeAt();

          let newLetterPosition = letterPosition - 65 + keyPosition;
          if (newLetterPosition > 90) {
            cipherLetter = String.fromCharCode( (newLetterPosition) - 26);
          } else {
            cipherLetter = String.fromCharCode(newLetterPosition);
          }
          
          resultStr += cipherLetter;
        } else {
          resultStr += message[i];
        }
    }
    return resultStr;
  }    

  decrypt(message, key) {
    if (message === undefined ||
      key === undefined) {
    throw new Error('Error');
    }

  }
}
module.exports = VigenereCipheringMachine;
