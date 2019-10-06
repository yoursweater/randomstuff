// given an unsorted array of integers, find the highest sum of non-neighbors

//i.e. [10,10,1,5,8,11]
// 10 + 5 + 11 = 26



// let arr = [12,3,15,1,10]

// const findLargest = arr => {
//   let incl = 0
//   let excl = 0

//   for (let i = 0; i < arr.length; i++) { 

//     let new_excl = excl > incl ? excl : incl // 27

//     incl = excl + arr[i] // 
//     excl = new_excl // 27
//     console.log(excl)
//   }

//   return incl > excl ? incl : excl
// }
// console.log(findLargest(arr))

// 

// THIS RECURSION SUCKS WAY WAY WAY WAY LESS

// let arr = [12,3,15,1,10]

// const bestSum = (arr, idx) => {
//   if (idx >= arr.length) {
//     return 0
//   }

//   let useCurrent = arr[idx] + bestSum(arr, idx + 2)
//   let skipCurrent = bestSum(arr, idx + 1)

//   return Math.max(useCurrent, skipCurrent)
// }

// console.log(bestSum(arr, 0))

