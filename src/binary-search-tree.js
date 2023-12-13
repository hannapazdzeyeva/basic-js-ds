const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootTree;

  constructor() {
    this.rootTree = null
  }

  root() {
    return this.rootTree
  }

  addNode(node, data) {
    if (!node) return new Node(data)
    if (node.data == data) return data
    data < node.data ? node.left = this.addNode(node.left, data) : node.right = this.addNode(node.right, data)
    return node
  }

  add(data) {
    this.rootTree = this.addNode(this.rootTree, data)
  }

  searchNode(node, data) {
    if (!node) return false
    if (node.data == data) return true
    return data < node.data ? this.searchNode(node.left, data) : this.searchNode(node.right, data)
  }

  has(data) {
    return this.searchNode(this.rootTree, data)
  }

  returnNode(node, data) {
    if (!node) return null
    if (node.data == data) return node
    return data < node.data ? this.returnNode(node.left, data) : this.returnNode(node.right, data)
  }

  find(data) {
    return this.returnNode(this.rootTree, data)
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) node.left = this.removeNode(node.left, data);
    else if (data > node.data) node.right = this.removeNode(node.right, data);
    else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minFromRight = node.right;

      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }

      node.data = minFromRight.data;
      node.right = this.removeNode(node.right, minFromRight.data);
    }

    return node;
  }

  remove(data) {
    this.rootTree = this.removeNode(this.rootTree, data)
  }

  findValue(side) {
    if (!this.rootTree) return null;
    let current = this.rootTree;

    while (current[side]) {
      current = current[side];
    }

    return current.data;
  }

  min() {
    return this.findValue('left');
  }

  max() {
    return this.findValue('right');
  }
}

module.exports = {
  BinarySearchTree
};