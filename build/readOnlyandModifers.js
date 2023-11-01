"use strict";
class Employee {
    constructor(name, number) {
        this.apprxPie = 3;
        this.empName = name;
        this.empCode = number;
    }
    static getName() {
        return `test static`;
    }
}
Employee.pi = 3.14;
let emp = new Employee("c;ode test", 200);
console.log(emp.empName, emp.empCode, emp.apprxPie);
console.log(Employee.pi);
console.log(Employee.getName());
