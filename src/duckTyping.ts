interface Identity {
    emial_id: string;
    phone_no: number
}
function getClgInfo(student: Identity, parents: Identity): Identity {
    return {
        emial_id: `test@test.com`,
        phone_no: 4563210897,
    }
}
let stObj: Identity = {
    emial_id: `student@test.com`,
    phone_no: 12365477890,
}
let prtObj: Identity = {
    emial_id: `Parents@test.com`,
    phone_no: 1236547890,
}
console.log(getClgInfo(stObj, prtObj))