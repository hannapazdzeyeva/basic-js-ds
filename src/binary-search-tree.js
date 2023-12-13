const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};