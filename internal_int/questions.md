## Interview Questions

- Tic Tac Toe (build out full game)
- Write a function that accepts `cents` as an argument, which is an integer. The function then returns 
the minimum number of coins required to get that amount of change, using quarters (25), dimes (10), nickels(5) and pennies (1).
For advanced candidates, ask them to solve the problem when nickels are broken (i.e., 31 as an argument returns 4
due to the answer being 3 dimes and a penny, not 3, which would involve a quarter, a nickel and a penny. Answer
should be solved with recursion.)
- Write a function that accepts `n` as an argument describe a 1-index array of zeroes (i.e. `[0,0,0,0,0]` === n = 5), and a two-
dimensional array describes the operation to apply, as well as the indices to apply them to (inclusive). E.g.:

n = 10

a b k
0 4 3
5 9 4
3 8 7

Then, the function performs those operations and returns the largest value that exists in the array. For the inputs shown above, the function
would perform
[3,3,3,3,3,0,0,0,0,0]
[3,3,3,3,3,4,4,4,4,0]
[3,3,10,10,10,11,11,11,4,0]
And then return `11`, because it is the largest value.


const myQueries = [ [1,5,3],
                    [4,8,7],
                    [6,9,1],]


const queries2 = [
[2, 6, 8],
[3, 5, 7],
[1, 8, 1],
[5, 9, 15],
]

const bigOps = (n, queries) => {
  // set up array
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(0)
  }
  console.log(arr)
  //perform operations
  for (let j = 0; j < queries.length; j++) {
    let startIdx = queries[j][0]
    let endIdx = queries[j][1]
    let operation = queries[j][2]
    
    for (let k = startIdx; k < endIdx + 1; k++) {
      console.log(arr)
      arr[k] = arr[k] + operation
    }
  }
  //return answer
  console.log(arr)
  let currentMax = 0
  arr.forEach(el => {
    if (el > currentMax) currentMax = el;
  })
  console.log(currentMax)
  return currentMax
}

bigOps(10, queries2)



RECURSIVE

const getChange = cents => {
  let amount = cents;

  let dp = [];
  for (let k = 0; k <= amount; k++) {
    // Fill dp array with arb large value
    dp[k] = amount + 1;
  }

  // base case
  dp[0] = 0;

  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      // coin[j] <= i
      if (coins[j] <= i) {
        dp[i] = 1 + dp[i - coins[j]]
      }
    }
  }

  return dp[amount];
  // dp[33] = min num of coins!
}