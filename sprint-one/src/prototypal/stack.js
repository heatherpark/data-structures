var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);

  newInstance.storage = {};
  newInstance.index = 0;

  return newInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.index;
};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if (this.index !== 0) {
    var top = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index--;
    return top;
  }
};