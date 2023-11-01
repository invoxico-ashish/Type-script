class Vehicle {
    private gstNumber: number = 46314;
    protected storeNo: number = 46595;
    constructor(strNumber: number) {
        this.storeNo = strNumber
    }
    vehicleCategory() {
        return `three types of vehicle car,bike and truck`
    }
    getCount() {
        return `Total 100 vehicl at store ${this.storeNo} and its gstNumber is ${this.gstNumber}`
    }
}
class Car extends Vehicle {
    brand: string;
    constructor(brandName: string, storeId: number) {
        super(storeId)
        this.brand = brandName
    }
    getCount() {
        return `total 50 casrs`
    }
    getInfoCount() {
        return super.getCount()
    }
}
const vehicleObj = new Car("Maruti", 203215);
console.log(vehicleObj.getCount());
console.log(vehicleObj.getInfoCount())