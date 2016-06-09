var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.index = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
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
