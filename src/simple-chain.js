const CustomError = require("../extensions/custom-error");
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.arr.length || typeof position !== 'number') {
      this.arr = [];
      throw new Error();
    }
    this.arr = this.arr.filter(a => a != this.arr[position - 1]);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.map(function (b) {
      if (b === null) {
        return '( null )';
      } else {
        return `( ${b} )`;
      }
    });
    result = result.join('~~');
    this.arr = [];
    return result;
  }
};
module.exports = chainMaker;
