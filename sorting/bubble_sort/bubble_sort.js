function bubbleSort(arr) {
  // loop from end of end of array to beginning with variable i
  for (let i = 0; i < arr.length; i++) {
    // start inner loop with variable j from the beginning until i - 1
    for (let j = 0; j < arr.length-1; j++) {
      // if arr[j] is greater than arr[j+1] then swap those values
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // return sorted arr
  return arr;
}

console.log(bubbleSort([3, 77, 2, 1]))