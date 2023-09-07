
const SquareX = require("./5-square");

class Square extends SquareX{
    charPrint(c){
        if (c === undefined){
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
module.exports = Square;