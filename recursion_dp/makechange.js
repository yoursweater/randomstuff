
// basic recursion

let coinTypes = [1, 5, 10, 25]
const change = (cents, coins = 0) => {

  if (cents === 0) {
    return coins
  }
  if (cents < 0) {
    return coins + 9999999
  }

  let quarters = change(cents - 25, coins + 1)
  let dimes = change(cents - 10, coins + 1)
  let nickels = change(cents - 5, coins + 1)
  let pennies = change(cents - 1, coins + 1)


  return Math.min(
    quarters,
    dimes,
    nickels,
    pennies
  )
}

let start1 = new Date()
console.log(change(50))
let end1 = new Date() - start1
console.info('Execution time: %dms', end1)

// recursion with iteration


const change2 = (cents, coins = 0, ) => {

  if (cents === 0) {
    return coins
  }

  let max = 99999999999999
  for (let i = 0; i < coinTypes.length; i++) {
    if (cents - coinTypes[i] >= 0) {
      let loose = change2(cents - coinTypes[i], coins + 1)
      if (loose < max) {
        max = loose
      }
    }
  }

  return max

}

let start2 = new Date()
console.log(change2(50))
let end2 = new Date() - start2
console.info('Execution time: %dms', end2)


// this takes longer for some reason? might be improperly written
const change3 = (cents, coins = 0, memo = []) => {
  if (memo[cents]) {
    return memo[cents]
  }
  if (cents === 0) {
    return coins
  }

  let max = 99999999999999
  for (let i = 0;i < coinTypes.length;i++) {
    if (cents - coinTypes[i] >= 0) {
      let loose = change3(cents - coinTypes[i], coins + 1)
      if (loose < max) {
        memo[cents] = loose
        max = loose
      }
    }
  }

  return max
}

let start3 = new Date()
console.log(change3(50))
let end3 = new Date() - start3
console.info('Execution time: %dms', end3)

