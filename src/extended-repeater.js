const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {


  let result = [];
  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  if (str !== 'String' || options.addition !== 'String' || options.additionSeparator !== 'String') {
    str = String(str);
    options.addition = String(options.addition);
    options.additionSeparator = String(options.additionSeparator);
  }
  if (options.additionRepeatTimes !== undefined || options.repeatTimes !== undefined) {

    for (let i = 1; i <= options.repeatTimes; i++) {
      result.push(str);
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        result.push(options.addition);
        if (j <= options.additionRepeatTimes - 1) {
          result.push(options.additionSeparator);
        }
      }
      if (i <= options.repeatTimes - 1) {
        result.push(options.separator);
      }
    }
  } else {
    result.push(str);
    result.push(options.addition);
  }
  return result.join('');

};
