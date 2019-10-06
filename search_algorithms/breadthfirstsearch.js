
function levelOrderSearch(rootNode, search) {
    // Check that a root node exists.
    if (rootNode === null) {
      return;
    }
    
    // Create our queue and push our root node into it.
    var queue = [];
    queue.push(rootNode);
    
    // Continue searching through as queue as long as it's not empty.
    while (queue.length > 0) {
      // Create a reference to currentNode, at the top of the queue.
      var currentNode = queue[0];
      if (currentNode.value = search) {
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