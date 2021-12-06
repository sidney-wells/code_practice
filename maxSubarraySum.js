function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }

    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];
        if (tempSum > maxSum) return maxSum = tempSum;
    }
    return maxSum;
}

console.log(maxSubarraySum([], 4))
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4))
console.log(maxSubarraySum([4, 2, 1, 6], 1))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
