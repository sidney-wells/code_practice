function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    // base case
    if (arr.length === 0) return arr;
    // create newArray
    let newArray = [];
    // find first element, capitalize letter, add to array
    let word = arr[0].toUpperCase();
    newArray.push(word);
    // return capitalizeWords with array sliced
    return newArray.concat(capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']