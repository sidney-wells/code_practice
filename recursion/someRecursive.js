// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, fn) {
    // add whatever parameters you deem necessary - good luck!
    if (arr === null || fn === null || arr.length === 0) return false;
    if (isOdd(arr[0])) return true;
    return someRecursive(arr.slice(1))
}

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false