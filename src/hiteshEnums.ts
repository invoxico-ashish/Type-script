// if we use const before enum then it reduce the js code in js file 
const enum SeatChoice {
    AISEL, // 0  and we can change the value by AISEL = 10 now the value of AISEL is ten next one is incremented by one
    MIDDLE = 10, // 1
    WINDOW, // 2
    FOURTH = 35 // 3
};

const hcSeat = SeatChoice.AISEL
console.log(hcSeat); //by default ite return 0
console.log(SeatChoice.MIDDLE);
console.log(SeatChoice.WINDOW);


//if we want to use string then we also do that but then we have to assign string to all of them
//because we broke the rule change of number by default 
enum StringEnums {
    TEST = "test",
    TESTONE = "testOne",
    TESTTHREE = "testThree", // or we also can give here number 
    THESTFOUR = 43
}
console.log(StringEnums.TESTONE)