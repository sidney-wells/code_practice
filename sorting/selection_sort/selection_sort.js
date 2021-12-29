function selectionSort(arr) {
  // set min value
  let min; 
  // loop over array
  for (let i = 0; i < arr.length; i++) {
    // set min to i index each time 
    min = i;
    // loop over array comparing values
    for (let j = i+1; j < arr.length; j++) {
      // if min is larger than current value, make that min
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    // at the end, swap the min with the current value
    if (i !== min) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  // return array
  return arr;
}

console.log(selectionSort([3, 7, 1, 8, 2]))