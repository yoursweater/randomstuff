// regular recursion
const fib = n => {
    if (n <= 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

let x = fib(5)
// console.log(x)

// dynamic programming

const fibDP = (n, memo) => {
    memo = memo === undefined ? {} : memo

    if (memo[n]) return memo[n];
    if (n <= 1) return 1

    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
}

let y = fibDP(7)
console.log(y)