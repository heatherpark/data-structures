var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.index = 0;
  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function(){
  if (this.index !== 0) {
    var first = this.storage[0];
    delete this.storage[0];
    this.index--;
    for (var key in this.storage) {
      this.storage[Number(key) - 1] = this.storage[key];
      delete this.storage[key];
    }
    return first
  }
};

queueMethods.size = function(){
  return this.index;
};