function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    // create new array to return\
    if (arr.length === 0) return arr;
    let newArray = [];
    // get first element, capitalize first element first letter
    let word = arr[0];
    word = word.charAt(0).toUpperCase() + word.slice(1);
    // push to newArray
    newArray.push(word);
    // slice array and pass to capitlizeFirst
    return newArray.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
