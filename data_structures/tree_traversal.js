//TREE TRAVERSAL

//DEPTH FIRST
//preorder (DLR)
BinarySearchTree.prototype.preOrderTraversal = function (root) {
    console.log(root.data);
  
    if (root.left) {
      this.preOrderTraversal(root.left);
    } 
    if (root.right) {
      this.preOrderTraversal(root.right);
    }

}

//inorder (LDR)
BinarySearchTree.prototype.preOrderTraversal = function (root) {

    if (root.left) {
        this.preOrderTraversal(root.left);
    } 

    console.log(root.data);

    if (root.right) {
      this.preOrderTraversal(root.right);
    }

}

//postorder (LRD)
BinarySearchTree.prototype.preOrderTraversal = function (root) {

    if (root.left) {
        this.preOrderTraversal(root.left);
    } 

    if (root.right) {
        this.preOrderTraversal(root.right);
    }

    console.log(root.data);

}


//BREADTH FIRST TRAVERSAL

//level order search

BinarySearchTree.prototype.levelOrderTraversal = function (root) {
    let result = []
    let q = []
    if (root != null) {
        q.push(root)
        while(q.length > 0) {
            let node = q.shift()
            result.push(node.data)
            if (node.left != null) {
                q.push(node.left)
            }
            if (node.right != null) {
                q.push(node.right)
            }
        }
        return result;
    } else {
        return null
    }

}