const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: 0,
    seconds: 0,
  }
  let turnsCount = 1;
  while (disksNumber > 1) {
    turnsCount = (turnsCount * 2) + 1;
    disksNumber--;
  }
  let secondsCount = Math.floor(turnsCount * 3600 / turnsSpeed);
  result.turns = turnsCount;
  result.seconds = secondsCount;
  return result;
};
