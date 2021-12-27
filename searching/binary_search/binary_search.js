// accepts sorted array and value - only numbers
function binarySearch(arr, val) {
  // create two variables
  // left pointer at start of array and right pointer at end of array
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end + start) / 2);
  // loop over array, check for element and whether it's equal to the middle
  while (arr[middle] !== val && start <= end) {
    // if true, return that index
    // if not and value too small, move left pointer up
    if (val < arr[middle]) end = middle - 1;
    // if not and value too big, move right pointer down
    if (val > arr[middle]) start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  // if never find value, return -1
  return arr[middle] === val ? middle : -1
  
}

console.log(binarySearch([10, 13, 37, 401, 53452], 53452)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
