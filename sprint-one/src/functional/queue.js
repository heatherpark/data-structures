var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    if (index !== 0) {
      var firstItem = storage[0];
      delete storage[0];
      index--;
      for (var key in storage) {
        storage[Number(key) - 1] = storage[key];
        delete storage[key];
      }
      return firstItem;
    }
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
