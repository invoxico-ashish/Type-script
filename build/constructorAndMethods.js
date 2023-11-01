"use strict";
class Bike {
    constructor(namePlate, dum) {
        this.model = 2010;
        this.color = "white and black",
            this.namePlate = namePlate;
        this.dummy = dum || "NA";
    }
    getBikeColor(params) {
        let bikeClr = params || this.color;
        return `your bike color is ${bikeClr} & number Plate will be ${this.namePlate} state`;
    }
    getPrice() {
        return `1L - 2L ${this.namePlate} state and this is dummy text for testing ${this.dummy}`;
    }
}
let bikeObj = new Bike("HP", "test");
console.log(bikeObj.model);
console.log(bikeObj.color);
console.log(bikeObj.getBikeColor("red"));
console.log(bikeObj.getBikeColor());
console.log(bikeObj.getPrice());
