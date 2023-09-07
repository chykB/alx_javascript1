
const Square = require("./5-square");

class SquareX extends Square{
    charPrint(c){
        if (c == undefined){
            c = 'X';
        }
        for (let i = 0; i < this.height; i++){
            let k = '';
            for (let j = 0; j < this.width; j++){
                k += 'X';
            }
            console.log(c);
        }
    }
}
module.exports = SquareX;