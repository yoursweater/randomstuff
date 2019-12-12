

let arr = [2, 4, 6, 10]
let t = 16

const findSubsets = (arr, t, count = 0, matches = 0) => {
  if (count === t) {
    return matches + 1
  }
  let localMax = 0
  for (let i = 0;i < arr.length;i++) {
    if (count + arr[i] <= t) {
      let total = findSubsets(arr, t, count + arr[i], matches)
      if (total > localMax) {
        localMax = matches
      }
    }
  }
  return localMax

}
let res = findSubsets(arr, t)
console.log(res)

// const subs2 = (arr = [2, 4, 6, 10], t = 16, count = 0, matches = 0, i = 0) => {
//   if (count === t) {
//     return matches + 1
//   }
//   if (count > t) {
//     return 0
//   }

//   let sum = 0
//   if (arr[i] + count <= t) {
//     let usecurrent = subs2(arr, t, count + arr[i], matches, i + 1)
//     let skipcurrent = subs2(arr, t, count, matches, i + 1)
//     sum = Math.max(usecurrent, skipcurrent)
//   }

//   return sum


// }

// let res = subs2()
// console.log(res)

// const subs3 = (arr = [2, 4, 6, 8, 10], t = 16, count = 0, matches = 0, i = 0) => {
//   if (t === count) {
//     return matches + 1
//   }
//   if (count > t) {
//     return 0
//   }
//   if (i > arr.length - 1) {
//     return 0
//   }

//   let noUse = subs3(arr, t, count, matches, i + 1)
//   let use = subs3(arr, t, count + arr[i], matches, i + 1)

//   return use + noUse
// }

// let result = subs3()
// console.log(result)