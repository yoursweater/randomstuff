console.log('running')

let arr = [12,432,6,34,98,23,43,523,22,47,9,876]

const qsort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return
  }

  const pivot = arr[Math.floor((left + right) / 2)]
  const index = partition(arr, left, right, pivot)
  qsort(arr, left, index - 1)
  qsort(arr, index, right)

  return arr

}

const partition = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++
    }
    while (arr[right] > pivot) {
      right--
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  return left
}


const msort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let leftHalf = arr.splice(0, Math.floor(arr.length / 2))

  return merger(msort(leftHalf), msort(arr))
}

const merger = (left, right) => {
  let sorted = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  return [...sorted, ...left, ...right]
}

// let sorted = qsort(arr)
let sorted = msort(arr)
console.log(sorted)

const bsearch = (arr, num) => {
  let left = 0
  let right = arr.length - 1
  let guess

  while (left <= right) {
    guess = Math.floor((left + right) / 2)
    if (arr[guess] === num) {
      console.log(guess)
      return guess
    } else if (arr[guess] < num) {
      left = guess + 1
    } else {
      right = guess - 1
    }
  }
  console.log('not found!')
  return -1

}

let idx = bsearch(sorted, 432)