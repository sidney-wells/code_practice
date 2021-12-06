function fib(num) {
    // if num less or equal 2, return 1
    if (num <= 2) return 1;
    // 
    return fib(num-1) + fib(num-2);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465