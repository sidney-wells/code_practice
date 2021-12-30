// use insertion sort to sort array
function insertionSort(arr) {
  // loop over array, starting at 1 since it'll be compared to previous value
  for (let i = 1; i < arr.length; i++) {
    // define current value to compare
    let currentVal = arr[i];
    let jVal = i;
    // loop comparing current value to previous value - only true if arr[j] (previousVal) is greater than currentVal)
    for (let j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      // make the previousVal + 1 = previousVal
      arr[j + 1] = arr[j];
      // make previousVal = currentVal (currentVal is also known as previousVal + 1)
      arr[j] = currentVal;
    }
  }
  // return array
  return arr;
}

console.log(insertionSort([73, 12, 99, 3, 48]))