class Node {
    constructor(val, left = null, right = null) {
        this.value = val
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    push(val) {
        if(!this.root){
            this.root = new Node(val);
            return;
         }
      
         let currentNode = this.root;
         let newNode = new Node(val); 
      
         while (currentNode){
            if (val < currentNode.value){
                if (!currentNode.left){
                   currentNode.left = newNode;
                   break;
                }
                else {
                   currentNode = currentNode.left;
              }
           } else {
               if (!currentNode.right){
                  currentNode.right = newNode;
                  break;
               }
               else {
                  currentNode = currentNode.right;
               }
           }
        }
    }
}

let tree = new BinarySearchTree
tree.push(8)
tree.push(4)
tree.push(6)
tree.push(12)
tree.push(14)
console.log(tree)

