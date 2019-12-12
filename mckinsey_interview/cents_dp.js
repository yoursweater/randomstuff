const coins = [1, 5, 10, 25]

const getChange = cents => {
  let amount = cents
  let dp = []
  dp[0] = 0

  for (let i = 0;i <= amount;i++) {
    for (let j = 0;j < coins.length;j++) {
      if (coins[j] <= i) {
        dp[i] = 1 + dp[i - coins[j]]
      }
    }
  }
  return dp[amount]
}

let start3 = new Date()
let result = getChange(5)
console.log(result)
let end3 = new Date() - start3
console.info('Execution time: %dms', end3)


const fib = (num, memo) => {
  if (num <= 1) {
    return 1
  }

  if (memo[num]) {
    return memo[num]
  } else {
    memo[num] = fib(num - 1, memo) + fib(num - 2, memo)
    return memo[num]
  }
}

// console.log(fib(500, []))

const knapsack = [
  [2, 3],
  [3, 5],
  [4, 7],
  [5, 9],
  [7, 13]
]

const weightLimit = 2
//5

//recursion
const getLargestHaul = (val = 0, weight = 0, ) => {

  // recursion v1

  // let first = (weight + 3 <= weightLimit) ? getLargestHaul(val + 2, weight + 3) : val
  // let second = (weight + 5 <= weightLimit) ? getLargestHaul(val + 3, weight + 5) : val
  // let third = (weight + 7 <= weightLimit) ? getLargestHaul(val + 4, weight + 7) : val
  // let fourth = (weight + 9 <= weightLimit) ? getLargestHaul(val + 5, weight + 9) : val

  // return Math.max(first, second, third, fourth)

  // recursion v2, where we can iterate through knapsack items
  // starts off with a value of 0, only invokes when the weight can be beared
  // if there is weight available, tempvalue is increased by the existing value plus the new value that will be added
  // eventually, you get to a point where no weight is available. the currentvalue of 0 is returned

  let currentValue = 0
  for (let i = 0;i < knapsack.length;i++) {
    if (weight + knapsack[i][0] <= weightLimit) {
      // tempvalue basically stops to say "wait, is there more space?? if so i'll ad more and come back before we do this"
      let tempValue = getLargestHaul(val + knapsack[i][1], weight + knapsack[i][0])
      if ((tempValue + knapsack[i][1]) > currentValue) {
        currentValue = tempValue + knapsack[i][1]
      }
    }
  }

  return currentValue
}

let res = getLargestHaul()
console.log(res)

const dpHaul = (val = 0, weight = 0, availableWeight = 8, memo = []) => {
  if (memo[availableWeight] > -1) {
    return memo[availableWeight]
  }
  let maxval = 0
  for (let i = 0;i < knapsack.length;i++) {
    if (knapsack[i][0] <= availableWeight) {
      let tempVal = dpHaul(val, weight, availableWeight - knapsack[i][0], memo)
      if ((tempVal + knapsack[i][1]) > maxval) {
        maxval = (tempVal + knapsack[i][1])
      }
    }
  }
  memo[availableWeight] = maxval
  return maxval
}

// let result = dpHaul()
// console.log(result)
