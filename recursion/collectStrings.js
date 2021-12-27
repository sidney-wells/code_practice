const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

function collectStrings(obj) {
    // create new array
    let newArray = [];
    // loop through object
    for (let key in obj) {
        // for each object, recursion
        if (typeof obj[key] === "object") {
            newArray = newArray.concat(collectStrings(obj[key]));
        }
        // for each string, add to new array
        if (typeof obj[key] === "string") {
            newArray.push(obj[key]);
        }
    }
    // return array
    return newArray;
}

console.log(collectStrings(obj1)); // ["foo", "bar", "baz"])