function getVal(myVal: number): boolean | string {
    if (myVal > 5) {
        return true;
    };
    return "200 OK"
};
const getHello = (s: string): string => {
    return ``
};
const heros = ["thor", "CA", "spiderMan"];
heros.map((hero): string => {
    return `hero is ${hero}`
});
function consoleError(err: string): void {
    console.log(err)
};
function handleError(err: string): never {
    throw new Error(err)
};

