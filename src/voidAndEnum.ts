// function Hello(): void {
//     console.log("first")
// }
// console.log(Hello())

enum VehicleType {
    car = "car",
    scooter = "scoter",
    bus = 45654,
    truck,
    bike
}
let vehicleData: VehicleType;
function getName(name: VehicleType): string {
    return "heloo"
}

vehicleData = VehicleType.car
console.log(vehicleData)
console.log(getName(VehicleType.bike))
