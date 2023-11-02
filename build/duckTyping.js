"use strict";
function getClgInfo(student, parents) {
    return {
        emial_id: `test@test.com`,
        phone_no: 4563210897,
    };
}
let stObj = {
    emial_id: `student@test.com`,
    phone_no: 12365477890,
};
let prtObj = {
    emial_id: `Parents@test.com`,
    phone_no: 1236547890,
};
console.log(getClgInfo(stObj, prtObj));
