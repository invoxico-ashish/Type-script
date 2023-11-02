abstract class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    display(): string {
        return "helooo........."
    }
    abstract find(name: string): any;
}
class Student extends Person {
    stdID: number
    constructor(name: string, stdId: number) {
        super(name)
        this.stdID = stdId
    }
    find(name: string) {
        return `your nbame is ${name}`
    }
}
let myStdData = new Student("test", 117);
console.log(myStdData.stdID);
console.log(myStdData.display());
console.log(myStdData.find("rahul"));