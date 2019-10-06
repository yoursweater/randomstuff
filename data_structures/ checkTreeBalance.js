function BinaryTreeNode(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

/**
 * Determines the minimum depth of a binary tree node.
 *
 * @param {BinaryTreeNode} node The node to check.
 * @return The minimum depth of a binary tree node.
 */
function minDepth(node) {
  if (typeof node === 'undefined') {
    return 0;
  }
  return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}

/**
 * Determines the maximum depth of a binary tree node.
 *
 * @param {BinaryTreeNode} node The node to check.
 * @return The maximum depth of a binary tree node.
 */
function maxDepth(node) {
  if (typeof node === 'undefined') {
    return 0;
  }
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

/**
 * Determines whether a binary tree is balanced.
 *
 * @param {BinaryTreeNode} root The root of the tree.
 * @returns Whether the tree is balanced.
 */
function isBinaryTreeBalanced(root) {
  if (typeof root === 'undefined') {
    return undefined;
  }
  return maxDepth(root) - minDepth(root) <= 1;
}