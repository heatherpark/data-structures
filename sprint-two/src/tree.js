var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newInstance = Tree(value);
  this.children.push(newInstance);
};

treeMethods.contains = function(target) {
  var currentTree = this;
  var result = false;

  if (currentTree.value === target) {
    result = true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (result === false) {
      result = this.children[i].contains(target);
    }
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// addChild() is constant
// contains() is linear