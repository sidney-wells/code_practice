let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

function stringifyNumbers(obj) {
    // loop over obj
    for (let key in obj) {
        // check each key to see if type is number
        if (typeof obj[key] === "object") {
            // if obj, recursion
            obj[key] = stringifyNumbers(obj[key]);
        }
        // if number, convert to string
        if (typeof obj[key] === "number") {
            // if obj, recursion
            obj[key] = obj[key].toString();
        }
    }
    // return obj
    return obj;
}

console.log(stringifyNumbers(obj1));
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/