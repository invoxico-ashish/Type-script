"use strict";
;
const hcSeat = 0 /* SeatChoice.AISEL */;
console.log(hcSeat); //by default ite return 0
console.log(10 /* SeatChoice.MIDDLE */);
console.log(11 /* SeatChoice.WINDOW */);
//if we want to use string then we also do that but then we have to assign string to all of them
//because we broke the rule change of number by default 
var StringEnums;
(function (StringEnums) {
    StringEnums["TEST"] = "test";
    StringEnums["TESTONE"] = "testOne";
    StringEnums["TESTTHREE"] = "testThree";
    StringEnums[StringEnums["THESTFOUR"] = 43] = "THESTFOUR";
})(StringEnums || (StringEnums = {}));
console.log(StringEnums.TESTONE);
