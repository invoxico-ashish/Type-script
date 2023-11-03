// const User = {
//     name: "test",
//     emial: "test",
//     isActive: true
// };

// // function createUser({ name: string, isPaid: boolean }): {} { }
// // createUser({ name: "testttttt", isPaid: false })

// // function craeteCourse():{}{}
// // this is how return object with typescript

// function craeteCourse(): { name: string, price: number } {
//     return {
//         name: "reje", price: 5634
//     }
// };



// //Type Aliases

// type User = {
//     name: string,
//     emial: string,
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return {
//         name: "", emial: "", isActive: true
//     }
// }
// createUser({ name: "djuo", emial: "juiogh", isActive: true })


// readOnly and optional-------------------------------------------------------------->
type User = {
    readonly _id: string //not change readOnly
    name: string,
    email: string
    isActive: boolean
    cardDetails?: number //optinal
};
let myUser: User = {
    _id: "1634",
    name: "s",
    email: "dd",
    isActive: true
}

// how combine the type
type cardNumber = {
    cardNumber: string
};
type cardDate = {
    cardDtae: string
};
type cardDetails = cardNumber & cardDate & { // & is use here for combining we can say concatination
    cvv: number
}















export { }