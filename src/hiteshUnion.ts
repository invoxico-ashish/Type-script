type UserOne = {
    name: string
    id: number
}

type Admin = {
    username: string,
    id: number
}

let test: UserOne | Admin = {
    name: 'dwd',
    id: 464
};
test = {
    username: "dl", id: 44
};

function getDbId(id: number | string) {
    // console.log(`db id is ${id}`)
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2
    }
}
getDbId("9");
getDbId(9)



const dataOne: number[] = [1, 2, 3];
const dataTwo: string[] = ["1", "2", "3"];
const dataThree: string[] | number[] = ["1", "2"];
const datafour: (string | number)[] = ["1", "2", 3]

let pi: 3.14 = 3.14;
// pi = 3.145   this will show error because will set the type or number strictly to pi

let chooseSubjects: "chemitry" | "physics" | "maths";
chooseSubjects = "physics"
// chooseSubjects = "hindi"  this will show error because hindi in not in above defined type