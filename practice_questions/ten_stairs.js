

const countWays = (n) => {
  if (n <= 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }

  return countWays(n - 3) + countWays(n - 2) + countWays(n - 1) 

}


let result = []
var isPowerOfThree = function(n, ops) {
    if (n === 1) {
      console.log('ding!')
      console.log(ops)
      return true
    }
    if (n < 1) {
      console.log(n)
      return false
    }
    ops.push(n)
    return isPowerOfThree(n / 3, ops)
};

console.log(isPowerOfThree(3, []))
