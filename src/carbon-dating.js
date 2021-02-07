const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity % sampleActivity !== 0 || Number(sampleActivity) > 15 || Number(sampleActivity) < 0) {
    return false;
  }
  let result = Math.ceil(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  return result;
};
