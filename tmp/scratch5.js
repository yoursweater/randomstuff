let myarr = [1,2,5,8,23,53,3,97,5,34,6,234];

const quicksort = (arr, left = 0, right = arr.length -1) => {
  if (left >= right) {
    return;
  }

  const pivot = arr[Math.floor((left + right) / 2)];
  const index = partition(arr, left, right, pivot)
  quicksort(arr, left, index - 1)
  quicksort (arr, index, right)
  return arr;
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

const res = quicksort(myarr);
console.log(res);

// MERGE SORT

const mergesort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor((arr.length) / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return mergeTopDown(mergesort(left), mergesort(right));
}

const mergeTopDown = (left, right) => {
  let array = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }
  return [...array, ...left, ...right]
}

const res2 = mergesort(myarr);
console.log(res2);

const search = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let guess;

  while (left <= right) {
    guess = Math.floor((left + right) / 2)
    if (arr[guess] === num) {
      console.log(`found at index ${guess}`);
      return guess;
    } else if (arr[guess] < num) {
      left = guess + 1;
    } else {
      right = guess - 1;
    }
  }
  console.log('not found!')
  return -1
}

search(res2, 100)

// 