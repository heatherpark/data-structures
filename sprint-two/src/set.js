var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return (_.indexOf(this._storage, item) > -1) ? true : false;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var index = _.indexOf(this._storage, item);
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // add() is constant
 // contains() is linear
 // remove() is quadratic
