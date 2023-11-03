interface UserInter {
    readonly _id: number
    email: string
    userId: number
    googleId?: string
    // startTrial: () => string  we have another way to defined methods in interface
    startTrial(): string // this one is second and easy methods return type
    getCoupon(couponName: string, value: number): number
}
let testINTER: UserInter = {
    _id: 44, email: "test", userId: 5645, startTrial: () => {
        return `this fun return string`
    },
    getCoupon: (name: "hitest test",k   ) => {
        return 5
    }
}