"use strict";
class News {
    constructor(categoery) {
        this.newCategory = categoery;
    }
    getReport() {
        return `report called`;
    }
    getReportTwo() {
        return `report two`;
    }
}
let newObj = new News("Sports");
console.log(newObj.getReport());
console.log(newObj.getReportTwo());
