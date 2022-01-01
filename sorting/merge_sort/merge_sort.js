function merge(arr1, arr2) {
    // create empty array 
    let newArray = [];
    let i = 0;
    let j = 0;
    // look at smallest values in each array - use while
    while (i < arr1.length || j < arr2.length) {
        // while not at end of i or j, push smallest of either value into array and then move on to next value in that array
        if (arr1[i] < arr2[j] || (j === arr2.length && i < arr1.length)) {
            newArray.push(arr1[i]);
            i++;
        }
        else if (arr2[j] < arr1[i] || (i === arr1.length && j < arr2.length)) {
            newArray.push(arr2[j])
            j++;
        }
        else if (arr1[i] === arr2[j]) {
            newArray.push(arr1[i]);
            i++;
            j++;
        }
    }
    // once finish one array, push all remaining values into array
    return newArray;
}

console.log(merge([1, 20, 44], [6, 12, 89, 100]))