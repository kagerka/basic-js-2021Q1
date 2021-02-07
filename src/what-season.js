const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let result = '';
  if (date === undefined) {
    result = 'Unable to determine the time of year!';
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Error');
  } else if (date.getMonth() >= 11 || date.getMonth() <= 1) {
    result = 'winter';
  } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    result = 'spring';
  } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    result = 'summer';
  } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
    result = 'autumn';
  }
  return result;
};
