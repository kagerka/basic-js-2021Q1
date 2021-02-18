const CustomError = require("../extensions/custom-error");
let abc = 'abcdefghijklmnopqrstuvwxyz';
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }
    let encrypt = '';
    let newMessage = message.replace(/\s/g, '').replace(/\d/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@|]/g, '').toLowerCase();
    key = key.toLowerCase();
    for (let i = 0; i < newMessage.length; i++) {
      encrypt += (abc.charAt((abc.indexOf(newMessage.charAt(i)) + abc.indexOf(key.charAt(i % key.length))) % abc.length));
    }
    let eResult = encrypt.split('');
    for (let j = 0; j < message.length; j++) {
      if (!message[j].match(/[a-zA-Z]/i)) {
        eResult.splice(j, 0, message[j]);
      }
    }
    encrypt = eResult.join('').toUpperCase();
    let result = encrypt.slice(0, message.length);

    if (!this.mode) {
      return result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }
    let decrypt = '';
    let newMessage = message.replace(/\s/g, '').replace(/\d/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@|]/g, '').toLowerCase();
    key = key.toLowerCase();
    for (let i = 0; i < newMessage.length; i++) {
      decrypt += (abc.charAt(((abc.indexOf(newMessage.charAt(i)) + abc.length) - abc.indexOf(key.charAt(i % key.length))) % abc.length));
    }
    let dResult = decrypt.split('');
    for (let j = 0; j < message.length; j++) {
      if (!message[j].match(/[a-zA-Z]/i)) {
        dResult.splice(j, 0, message[j]);
      }
    }
    decrypt = dResult.join('').toUpperCase();
    let result = decrypt.slice(0, message.length);
    if (!this.mode) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
