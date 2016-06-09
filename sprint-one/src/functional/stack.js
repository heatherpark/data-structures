var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var topIndex = 0;

  someInstance.push = function(value) {
    storage[topIndex] = value;
    topIndex += 1;
  };

  someInstance.pop = function() {
    if (topIndex !== 0) {
      var topItem = storage[topIndex - 1];
      delete storage[topIndex - 1];
      topIndex -= 1;
      return topItem;
    }
  };

  someInstance.size = function() {
    return topIndex;
  };

  return someInstance;
};
