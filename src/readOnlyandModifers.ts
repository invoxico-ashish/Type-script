class Employee {
    empName: string;
    readonly empCode: number;
    static pi: number = 3.14
    apprxPie: number = 3;
    constructor(name: string, number: number) {
        this.empName = name;
        this.empCode = number
    }
    static getName() {
        return `test static`
    }
}
let emp = new Employee("c;ode test", 200);
console.log(emp.empName, emp.empCode, emp.apprxPie);
console.log(Employee.pi);
console.log(Employee.getName());
