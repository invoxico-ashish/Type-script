interface Sport {
    newCategory: string;
    getReport: () => string;
}
interface SportNew {
    getReportTwo: () => string;
}
interface WholeSportsInterface extends Sport, SportNew { } // multiple interfaces
class News implements WholeSportsInterface {
    newCategory: string;
    constructor(categoery: string) {
        this.newCategory = categoery
    }
    getReport() {
        return `report called`
    }
    getReportTwo() {
        return `report two`
    }
}
let newObj: WholeSportsInterface = new News("Sports");
console.log(newObj.getReport());
console.log(newObj.getReportTwo());