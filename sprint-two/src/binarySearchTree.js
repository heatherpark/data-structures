var BinarySearchTree = function(value) {
  var node = Object.create(BinarySearchTree.prototype);

  node.value = value;
  node.left = null;
  node.right = null;

  return node;
};


BinarySearchTree.prototype.insert = function(value) {
  var tree = BinarySearchTree(value);

  if (tree.value < this.value) {
    if (this.left === null) {
      this.left = tree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = tree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  var result = false;

  if (this.value === target) {
    result = true;
  } else {
    if (target > this.value) {
      if (this.right !== null) {
        result = this.right.contains(target);
      }
    } else {
      if (this.left !== null) {
        result = this.left.contains(target);
      }
    }
  }

  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
