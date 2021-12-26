function flatten(arrOfArrays) {
    // add whatever parameters you deem necessary - good luck!

    if (arrOfArrays.length === 0) return arrOfArrays;
    let newArray = [];
    for (let i = 0; i < arrOfArrays.length; i++) {
        // if the element is a nested array,
        // then we need to search through the array
        if (Array.isArray(arrOfArrays[i])) {
            newArray = newArray.concat(flatten(arrOfArrays[i]))
        } else {
            newArray.push(arrOfArrays[i])
        }
    }
    return newArray;
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3