"use strict";
//in litrals we already define the set of values to variable
//and then that variable only accept the value from defined set
//here we defined vehicleType and we give two values to it than it only accept car or bike not any other value
let vehicleType = "car";
vehicleType = "bike";
vehicleType = "truck";
// vehicleType = "scooter"   if we try to add scooter it will thrwo error
console.log(vehicleType);
function getVehicleInfo(vehType) {
    return vehType + " yes ";
}
console.log(getVehicleInfo("car"));
