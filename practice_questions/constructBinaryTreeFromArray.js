console.log('running')

class Node {
  constructor(val) {
    this.left = undefined
    this.right = undefined
    this.val = val
  }
}

// first, constructor binary tree from array

let arr = [1,0,0,null,3]
// let arr = [1,0,2,null, null, 3, 5]
let root
arr.forEach(num => {
  if (!root) {
    root = new Node(num)
  } else {
    let current = root
    let queue = []
    queue.push(current)

    while (queue.length > 0) {
      // check if we can insert
      let current = queue.shift()
      if (current.left === undefined) {
        current.left = new Node(num)
        break
      }
      if (current.right === undefined) {
        current.right = new Node(num)
        break
      }
      // if not, traverse down the tree
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
})

console.log(root)

const findFixer = async root => {
  let queue = []
  queue.push(root)

  while (queue.length > 0) {
    let current = queue.shift()
    if (current.val && current.val > 1) {
      await distributeCoins(current)
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

const distributeCoins = (current) => {
  console.log(current)
  let moveCounter = 1
  let queue = []
  while (current.val > 1) {

  }
}


// findFixer(root)

// let pointer
// while (arr.length > 0) {
//   let nodeVal
//   let node
//   if (pointer === null) {
//     nodeVal = arr.shift()
//     node = new Node(nodeVal)
//   } else {
//     node = pointer
//   }

//   if (arr.length > 1) {
//     if (arr[0] === null) {
//       node.left = null
//     } else {
//       let left = new Node(arr.shift())
//       node.left = left
//     }

//     if (arr[1] === null) {
//       node.right = null
//     } else {
//       let right = new Node(arr.shift())
//       node.right = right
//     }

//   } else if (arr.length == 1) {
//       if (arr[0] === null) {
//         node.left = null
//       } else {
//         let left = new Node(arr.shift())
//         node.left = left
//       }
//   } else if (arr.length == 0) {
//     break
//   }

// }