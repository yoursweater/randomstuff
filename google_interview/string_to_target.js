// given a string of integers i.e. "135"
// and a target i.e. -1
// find all combinations of +'s and -'s that lead to the target
// i.e. in this case 1 + 3 - 5

// solve this recursively



const addToTarget = (str, t) => {
  let arr = str.split('')
  let numbers = arr.map(el => Number(el))
  let operators = []
  // console.log(numbers)

  const opRecur = (numbers, t, i, sum, ops) => {
    if (i >= numbers.length && t) {
      return 0
    }

  }
  opRecur(numbers, t, 0, 0, '')
  console.log(operators)
}

addToTarget('135', -1)