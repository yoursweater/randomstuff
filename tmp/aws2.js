class Node  {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {

    if (this.root === null) {
      this.root = new Node(val)
    } else {
      let current = this.root

      while (current) {
        if (val <= current.val) {
          if (!current.left) {
            current.left = new Node(val)
            break;
          } else {
            current = current.left
          }
        } else if (val >= current.val) {
          if (!current.right) {
            current.right = new Node(val)
            break;
          } else {
            current = current.right
          }
        }
      }

    }

  }
}

let mytree = new BinarySearchTree()
mytree.insert(8)
mytree.insert(2)
mytree.insert(10)
mytree.insert(12)
mytree.insert(9)
mytree.insert(1)
mytree.insert(4)
mytree.insert(5)
mytree.insert(6)

const getDepth = (current) => {
  if (!current) {
    return 0
  }
  return Math.max(getDepth(current.left), getDepth(current.right)) + 1
}



const maxDepth = (current) => {
  if (!current) {
    return 0
  }
  let left = maxDepth(current.left)
  let right = maxDepth(current.right)
  let bigger = Math.max(left, right)
  
  return bigger + 1
}

const minDepth = (current) => {
  if (!current) {
    return 0
  }
  let left = minDepth(current.left)
  let right = minDepth(current.right)
  let smaller = Math.min(left, right)
  
  return smaller + 1
}

console.log('getting max depth ============')
console.log(maxDepth(mytree.root))
console.log('getting minimum depth =====')
console.log(minDepth(mytree.root))


const isBalanced = (current) => {

  let min = minDepth(current)
  let max = maxDepth(current)
  console.log(min)
  console.log(max)
  let diff = Math.abs(max - min)
  if (diff > 1) {
    console.log('not balaced!')
  } else {
    console.log('balanced')
  }
}

console.log('****** checking balance******')
console.log(isBalanced(mytree.root))

// let answer = maxDepth(mytree.root, 0)
// console.log(answer)
// isBalanced(mytree.root)

const dfs = (root) => {
  if (root === null) {
    return
  }
  dfs(root.left)
  console.log(root.val)
  dfs(root.right)
}

// console.log(mytree.root)
// dfs(mytree.root)

const bfs = (node) => {
  if (node === null) {
    return
  }

  let queue = []
  queue.push(node)
  console.log(queue)

  while (queue.length > 0) {
    let current = queue.shift()
    console.log(current.val)
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }

  }

}

// bfs(mytree.root)

let jumbled = [3,34,74,34,2,654,234,23,23446,234,12,65,23]

const mergeFn = (left, right) => {
  let sorted = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  return [...sorted, ...left, ...right]
}

const mergesort = (arr) => {
  if (arr.length < 2) {
    return arr
  }

  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return mergeFn(mergesort(left), mergesort(right))
}

console.log(mergesort(jumbled))

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

const qsort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return
  }

  let pivot = arr[Math.floor((left + right) / 2)]
  let index = partition(arr, left, right, pivot)
  qsort(arr, left, index - 1)
  qsort(arr, index, right)
  // console.log(arr)
  return arr

}

// qsort(jumbled)

qsort(jumbled)

console.log(jumbled)

const maketree = (arr) => {

  let middle = Math.floor(arr.length / 2)
  let midNum = arr.splice(middle, 1)
  console.log(midNum)
  console.log(arr)
  // let myarrtree

}

maketree(jumbled)