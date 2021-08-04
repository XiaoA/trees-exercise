/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    if (!this.root) return 0;

    let total = this.root.value;

    function sumFinder(node) {
      for (let child of node.children) {
        total += child.value;

        if (child.children.length > 0) {
          sumFinder(child);
        }
      }
    }
    sumFinder(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.value % 2 === 0 ? 1 : 0;

    function countEvensFinder(node) {
      for (let child of node.children) {
        if (child.value % 2 === 0) count++;
        if (child.children.length > 0) {
          countEvensFinder(child);
        }
      }
    }

    countEvensFinder(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    numGreater(lowerBound) {
      if (!this.root) return 0;

      let count = this.root.value > lowerBound ? 1 : 0;

      function countEvensFinder(node) {
        for (let child of node.children) {
          if (child.value > lowerBound) count++;
          if (child.children.length > 0) {
            countEvensFinder(child);
          }
        }
      }
      countEvensFinder(this.root);
      return count; 
    }
  }

