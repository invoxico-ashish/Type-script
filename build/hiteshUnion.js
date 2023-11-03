"use strict";
let test = {
    name: 'dwd',
    id: 464
};
test = {
    username: "dl", id: 44
};
function getDbId(id) {
    // console.log(`db id is ${id}`)
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
getDbId("9");
getDbId(9);
const dataOne = [1, 2, 3];
const dataTwo = ["1", "2", "3"];
const dataThree = ["1", "2"];
const datafour = ["1", "2", 3];
let pi = 3.14;
// pi = 3.145   this will show error because will set the type or number strictly to pi
let chooseSubjects;
chooseSubjects = "physics";
// chooseSubjects = "hindi"  this will show error because hindi in not in above defined type
