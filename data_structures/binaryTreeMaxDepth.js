


// the extra 1 gettting passed around fucked me on amazon!
// var maxDepth = function(root) {
//   return maxDepthHandler(root,1)
   
// };
// var maxDepthHandler = function(root, num){
// if (root == null){
//      return 0
//  }
//  if (root.right == null && root.left == null){
//      return num
//  }
//  if (root.right && root.left){
//      return Math.max(maxDepthHandler(root.right, num + 1), maxDepthHandler(root.left, num + 1))
//  }  else if (root.right != null){
//      return maxDepthHandler(root.right, num + 1)
//  } else {
//      return maxDepthHandler(root.left, num + 1)
//  }
// };