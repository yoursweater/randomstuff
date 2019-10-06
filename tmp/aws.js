//binary search

let arr = [1,3,5,8,10,15,17,19,28,35,29]

const binarySearch  = (arr, num) => {
  
  let left = 0
  let right = arr.length - 1
  let guess

  while (left <= right) {
    guess = Math.floor((left + right) / 2)
    if (arr[guess] === num) {
      console.log('found it')
      console.log(guess)
      return guess
    } else if (num < arr[guess]) {
      right = guess - 1
    } else if (num > arr[guess]) {
      left = guess + 1
    }
  }
  console.log('not found!')
  return null
}

// binarySearch(arr, 32)

// quicksort

let jumbled = [3,34,74,34,2,654,234,23,23446,234,12,65,23]

const quicksort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return
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

  let pivot = arr[Math.floor((left + right) / 2)]
  let index = partition(arr, left, right, pivot)
  quicksort(arr, left, index - 1)
  quicksort(arr, index, right)
  // console.log(arr)
  return arr


}

// quicksort(jumbled)

// mergesort

const mergesort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merger(mergesort(left), mergesort(right))

}

const merger = (left, right) => {
  let arr = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

// let sorted = mergesort(jumbled)
// console.log(sorted)


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
// console.log(mytree)
// console.log(mytree.root)


// Breadth first search uses a queue, and pushes both right and left onto the queue before popping off the current node from the
// front of the queue


const breadthFirstSearch = (rootNode, search) => {
  // Check that a root node exists.
  if (rootNode === null) {
    return;
  }
  
  // Create our queue and push our root node into it.
  const queue = [];
  queue.push(rootNode);
  
  // Continue searching through as queue as long as it's not empty.
  while (queue.length > 0) {
    // Create a reference to currentNode, at the top of the queue.
    let currentNode = queue[0];
    console.log(currentNode.val)
    if (currentNode.value === search) {
        return currentNode
    }
    
    // If currentNode has a left child node, add it to the queue.
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }
    // If currentNode has a right child node, add it to the queue.
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
    }
    // Remove the currentNode from the queue.
    queue.shift()
  }
  
  // Continue looping through the queue until it's empty!
}

// breadthFirstSearch(mytree.root, 12)

let trips = 0

const dFirst = (currentNode) => {
  if (currentNode === null) {
    return
  }
  // trips++
  // console.log(currentNode.val)
  // // console.log(val)
  // if (currentNode.val === val) {
  //   console.log('found it!')
  //   console.log(trips)
  //   return
  // }
  console.log(currentNode.val)
  dFirst(currentNode.left)
  dFirst(currentNode.right)

}

// depthFirstSearch(mytree.root, 9, 'preorder')
// depthFirstSearch(mytree.root, 10, 'inorder')
// depthFirstSearch(mytree.root, 8, 'postorder')

// dFirst(mytree.root, 9)
// console.log('trips: ' + trips)

const newtree = new BinarySearchTree()
newtree.insert(1)
newtree.insert(2)
newtree.insert(3)
newtree.insert(4)
newtree.insert(5)
console.log('searcihng')
console.log(newtree.root)
dFirst(newtree.root)