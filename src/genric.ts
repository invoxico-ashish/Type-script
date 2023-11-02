// genric function means get the value in same dataType and return the value with same data type
// here we use <T> which show that this function is genric function
// we get the value from parameter in the type of T (we dont know the type of parameter).then we should also retrun the
// value of parameter with same data type
// if we get string we the <T> will return string
// if we get number <T> will return the number 


function getValue<T>(item: T): T {
    return item;
};
let value = getValue([12, 13]);
console.log(value);


function getValTwo<T, U>(item: T, name: U): U {
    return name;
}
let valTwo = getValTwo([12, 13], "test");
console.log(valTwo);


class Persons {
    firstName: string;
    lastName: string;
    constructor(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }
}
class Details {
    contact: number;
    address: string
    constructor(cont: number, add: string) {
        this.contact = cont
        this.address = add;
    }
}
function message<T extends Persons>(per: T): void {
    console.log(per)
};
function data<T extends Details>(deta: T): void {
    console.log(deta)
};
let par = new Persons("heloo", "test");
let detailData = new Details(1523, "hiufg");
message(par);
data(detailData);

