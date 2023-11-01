console.log("hello world")
var a: number = 10;
var b: boolean = false;
b = true
var c: string;
c = "code done"
console.log(a, b);
var resultMarks: number[] = [2, 6, 3, 2]
resultMarks[1] = 50
console.log(resultMarks);
let subjects: string[] = ["adasd", "dasd", "dasd", "dada"]
console.log(subjects)
var detail: [string, number] = ["test", 50];
console.log(detail);
var info: any[] = ["test", 50, "data", false]
console.log(info)
function PrintHello(): void {
    console.log("hello void function")
}
const hel = (): void => {
    console.log("hello arrow function")
}
function multiply(a: number, b: number) {
    return a * b
}
console.log(multiply(2, 2))
hel();
PrintHello();
