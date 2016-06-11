
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    var outerArray = LimitedArray(2);
    var innerArray = LimitedArray(2);
    innerArray.set(0, k);
    innerArray.set(1, v);
    outerArray.set(0, innerArray);
    this._storage.set(index, outerArray);
  } else {
    bucket.each(function(value, i) {
      if (value.get(0) === k) {
        value.set(1, v);
      } else {
        var innerArray = LimitedArray(2);
        innerArray.set(0, k);
        innerArray.set(1, v);
        bucket.set(1, innerArray);
      }
    });
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  if (bucket !== undefined) {
    bucket.each(function(item){
      if (item.get(0) === k){
        result = item.get(1);
      }
    });
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    this._storage.set(index, undefined);
  }
};













