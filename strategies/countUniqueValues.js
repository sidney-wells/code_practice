// 

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let count = 0;
    for (let j = 1; j < arr.length; j++) {
        // if count is different than j, replace count with j and move both
        if (arr[count] !== arr[j]) {
            count++;
            arr[count] = arr[j];
        }
    }
    return count + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([]));