var LinkedList = function(){

  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value);
  var curHead = this.head;
  if (curHead === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = curHead;
    curHead.previous = newNode;

    this.head = newNode;
  }
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  var formerHead = this.head.value;
  this.head = this.head.next;
  return formerHead;
};

LinkedList.prototype.removeTail = function() {
  var curTail = this.tail.value;
  this.tail = this.tail.previous;
  return curTail;
}

LinkedList.prototype.contains = function(target) {
  var currentLink = this.head;
  while (currentLink) {
    if (currentLink.value === target) {
      return true;
    }
    currentLink = currentLink.next;
  }
  return false;
};

var Node = function(value) {

  this.value = value;
  this.next = null;
  this.previous = null;

};
