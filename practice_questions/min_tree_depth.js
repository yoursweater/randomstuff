
// MIN DEPTH
const minDepth = (root) => {
  if (root == null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 1;
  }

  if (root.left == null) {
    return minDepth(root.right) + 1
  }

  if (root.right == null) {
    return minDepth(root.left) + 1
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}


// MAX DEPTH
const maxDepth = (root) => {
  if (root === null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 1;
  }

  if (root.left == null) {
    return maxDepth(root.right) + 1;
  }

  if (root.right == null) {
    return maxDepth(root.left) + 1;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.head = new Node(root)
  }
}

let root = new Node(5)
let left1 = new Node(3)
let left2 = new Node(1)
let right1 = new Node(7)
let right3 = new Node(6)
let right2 = new Node(8)
let right4 = new Node(10)
root.left = left1
left1.left = left2
root.right = right1
right1.left = right3
right1.right = right2
right2.right = right4

let answer = minDepth(root)
console.log(answer)

let answer2 = maxDepth(root)
console.log(answer2)