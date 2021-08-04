/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDepthFinder(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthFinder(node.right) + 1;
      if (node.right === null) return minDepthFinder(node.left) + 1;
      return (
        Math.min(minDepthFinder(node.left), minDepthFinder(node.right)) + 1
      );
    }

    return minDepthFinder(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDepthFinder(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthFinder(node.right) + 1;
      if (node.right === null) return maxDepthFinder(node.left) + 1;
      return (
        Math.max(maxDepthFinder(node.left), maxDepthFinder(node.right)) + 1
      );
    }

    return maxDepthFinder(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumFinder(node) {
      if (node === null) return 0;
      const leftSum = maxSumFinder(node.left);
      const rightSum = maxSumFinder(node.right);
      result = Math.max(result, node.value + leftSum + rightSum);
      return Math.max(0, leftSum + node.value, rightSum + node.value);
    }

    maxSumFinder(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    // let's use BFS for this!
    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentValue = currentNode.value;
      let higherThanLowerBound = currentValue > lowerBound;
      let shouldReassignClosest = currentValue < closest || closest === null;

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentValue;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }
 
