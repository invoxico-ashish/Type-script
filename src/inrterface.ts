interface userInterFace {
    firstName: string,
    lastName: string,
    userID: number,
    status: boolean,
    mobile: number,
    age?: number,
    fullName: () => string
}

let obj: userInterFace = {
    firstName: "test",
    lastName: "typescript",
    userID: 445,
    status: true,
    mobile: 7896541230,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(obj);
console.log(obj.fullName())

interface CustomPrint {
    size: number,
    label: string
}


function printData(params: CustomPrint) {
    console.log(params)
}
let myObj = {
    size: 10, label: "test"
};
printData(myObj)
