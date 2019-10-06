// dynamic programming with memoization

let fibs = []
const fib = n => {
  if (fibs[n] !== undefined) {
    return fibs[n]
  }
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }

  fibs[n] = fib(n - 1) + fib(n - 2)
  return fibs[n]
}

let res = fib(400)
console.log(res)



// shitty recursion

const recurs = n => {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return recurs(n - 1) + recurs(n - 2)
}
// console.log(recurs(40))