#!/usr/bin/node
class Rectangle{
    constructor(w, h){
        if ((w > 0) && (w > 0)){
            this.height = h;
            this.width = w;
        }
    }
    print(){
        for (let i = 0; i < this.height; i++){
            let k = '';
            for (let j = 0; j < this.width;j++){
                k += 'X';
            }
            console.log(k);
        }
    }
    rotate(){
        const temp = this.height;
        this.height = this.width;
        this.width = temp;
    }
    double(){
        this.height *2;
        this.width *2;
    }
}
module.exports = Rectangle;