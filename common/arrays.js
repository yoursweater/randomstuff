// find the second minimum
// find first non-repeating character
// merge two sorted arrays
// check to see if parentheses are balanced (hint: uses a stack)

let arr = [1,34,6,23,87,34,679,23,68,3473]

// find second minimum
const findSecondMin = (arr) => {
  let sorted = arr.sort((a,b) => a - b)
  return sorted[1]
}

//first non-repeating integer
const nonRep = (arr) => {
  let count = {}
  for (let i = 0; i < arr.length; i++) {
    if (count.hasOwnProperty(arr[i]) !== false) {
      count[arr[i]] = count[arr[i]] + 1
    } else {
      count[arr[i]] = 1
    }
  }
  console.log(count)
  for (let j = 0; j < arr.length; j++) {
    if (count[arr[j]] === 1) {
      console.log('found it!')
      console.log(arr[j])
      return arr[j]
    }
  }
}
let arr2 = [1,1,1,2,3,4,6,3,2,4,0,6,8,7,6,9,0,4,3]
// nonRep(arr2)

// check balanced parentheses - use stack

let str = '()()()'
let str2 = '(())'
let str3 = '(()())'
let str4 = '(()('

const checkBalance = str => {
  let stack = []
  let arr = str.split('')
  let counter = 0

  const peek = () => {
    return stack[stack.length - 1]
  }

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i])
    } else {
      let tmp = peek()
      if (arr[i] === ')' && tmp === '(') {
        stack.pop()
        counter++
      } else if (arr[i] === '(' && tmp === ')') {
        stack.pop()
        counter++
      } else {
        stack.push(arr[i])
      }
    }
  }
  console.log('===================')
  console.log(stack)
  console.log(counter)
  if (stack.length === 0) {
    console.log('balanced!')
    return true
  } else {
    console.log('not balanced!')
    return false
  }
}

checkBalance(str)
checkBalance(str2)
checkBalance(str3)
checkBalance(str4)



