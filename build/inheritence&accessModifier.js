"use strict";
class Vehicle {
    constructor(strNumber) {
        this.gstNumber = 46314;
        this.storeNo = 46595;
        this.storeNo = strNumber;
    }
    vehicleCategory() {
        return `three types of vehicle car,bike and truck`;
    }
    getCount() {
        return `Total 100 vehicl at store ${this.storeNo} and its gstNumber is ${this.gstNumber}`;
    }
}
class Car extends Vehicle {
    constructor(brandName, storeId) {
        super(storeId);
        this.brand = brandName;
    }
    getCount() {
        return `total 50 casrs`;
    }
    getInfoCount() {
        return super.getCount();
    }
}
const vehicleObj = new Car("Maruti", 203215);
console.log(vehicleObj.getCount());
console.log(vehicleObj.getInfoCount());
