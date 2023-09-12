#!/usr/bin/node
const SquareP = require('./5-square');

class Square extends SquareP {
  charPrint (c) {
    if (typeof c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let k = '';
      for (let j = 0; j < this.width; j++) {
        k += c;
      }
      console.log(k);
    }
  }
}

module.exports = Square;