// inserted values that are lesser in value must go to the left, while higher values go to the right
// a node can have at most a left and right child


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.head = null;
    }

    insert(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            
            while (current) {
                if (node.data < current.data) {
                    if (!current.left) {
                        current.left = node
                        break;
                    } else {
                        current = current.left
                    }
                } else {
                    if (!current.right) {
                        current.right = node
                        break;
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    getNodeCount() {
        if (this.head === null) {
            return 0;
        } else {
            let count = 0;
            let current = this.head;
            let queue = [];
            queue.push(current);
            while (queue.length > 0) {
                let active = queue.shift()
                count += 1;
                if (active.left) {
                    queue.push(active.left);
                }
                if (active.right) {
                    queue.push(active.right);
                }
            }
            console.log(count);
            return count;
        }
    }

    printValues() {
        if (this.head === null) {
            return null;
        } else {
            let queue = [];
            queue.push(this.head);
            
            while (queue.length > 0) {
                let active = queue.shift()
                console.log(active.data);
                if (active.left) {
                    queue.push(active.left)
                }
                if (active.right) {
                    queue.push(active.right)
                }
            }
        }
    }

    getDepth() {
      let root = this.head
      const findDepth = (node) => {
        if (node === null) {
          return 0;
        }
       let leftDepth = findDepth(node.left)
       let rightDepth = findDepth(node.right)
       let bigger = Math.max(leftDepth, rightDepth)

       return bigger + 1
      }

      let answer = findDepth(root)
      console.log(answer)
    }

    
}

let mytree = new Tree()
mytree.insert(10)
mytree.insert(8)
mytree.insert(9)
mytree.insert(11)
mytree.insert(2)
console.log(mytree)
// mytree.getNodeCount()
// mytree.printValues()

mytree.getDepth()