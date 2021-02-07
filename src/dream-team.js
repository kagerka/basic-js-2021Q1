const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = members.filter(el => typeof el === 'string');
  result = result.map(el => el.trim()).join(', ').toUpperCase().split(', ');
  result = result.map(el => el[0]).sort().join('');
  return result;
};
