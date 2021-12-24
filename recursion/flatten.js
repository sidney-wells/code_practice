function flatten(arrOfArrays){
    // add whatever parameters you deem necessary - good luck!
    let newArray = [];
    for (let i = 0; i < arrOfArrays.length; i++) {
        if (Array.isArray(arrOfArrays[i])) {
            newArray = newArray.concat(flatten(arrOfArrays[i]))
        } else {
            newArray.push(arrOfArrays[i])
        }
    }
    return newArray;
  }
  
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  // console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  // console.log(flatten([[1],[2],[3]])) // [1,2,3]
  // console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3