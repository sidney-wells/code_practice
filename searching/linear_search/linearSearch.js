// func accepts array and value - array of nums and value num
function linearSearch(array, value) {
  // loop through array and check if current element is equal to value
  for (let i = 0; i < array.length; i++) {
    // if true, return index
    if (array[i] === value) return i;
  }
  // if value never found, return -1
  return -1;
}

// BIG O Notation = O(n)

console.log(linearSearch([1, 5, 3, 77, 53, 7, 11, 63, 54, 81, 435, 2], 7)); // 5
console.log(linearSearch([1, 5, 3, 77, 53, 7, 11, 63, 54, 81, 435, 2], -7)); // -1
