"use strict";
// function Hello(): void {
//     console.log("first")
// }
// console.log(Hello())
var VehicleType;
(function (VehicleType) {
    VehicleType["car"] = "car";
    VehicleType["scooter"] = "scoter";
    VehicleType[VehicleType["bus"] = 45654] = "bus";
    VehicleType[VehicleType["truck"] = 45655] = "truck";
    VehicleType[VehicleType["bike"] = 45656] = "bike";
})(VehicleType || (VehicleType = {}));
let vehicleData;
function getName(name) {
    return "heloo";
}
vehicleData = VehicleType.car;
console.log(vehicleData);
console.log(getName(VehicleType.bike));
