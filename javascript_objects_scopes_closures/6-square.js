#!/usr/bin/node
const InheritSquare = require("./5-square");

class Square extends InheritSquare {
    charPrint(c) {
      if (typeof c === "undefined") {
        c = "X";
      }
      for (let i = 0; i < this.height; i++){
        let k = '';
        for (let j = 0; j < this.width;j++){
            k += 'X';
        }
        console.log(k);
        }
    }
  }
module.exports = Square;