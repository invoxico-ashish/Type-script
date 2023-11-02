"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        return "helooo.........";
    }
}
class Student extends Person {
    constructor(name, stdId) {
        super(name);
        this.stdID = stdId;
    }
    find(name) {
        return `your nbame is ${name}`;
    }
}
let myStdData = new Student("test", 117);
console.log(myStdData.stdID);
console.log(myStdData.display());
console.log(myStdData.find("rahul"));
