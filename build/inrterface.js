"use strict";
let obj = {
    firstName: "test",
    lastName: "typescript",
    userID: 445,
    status: true,
    mobile: 7896541230,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(obj);
console.log(obj.fullName());
function printData(params) {
    console.log(params);
}
let myObj = {
    size: 10, label: "test"
};
printData(myObj);
