

// Instantiate a new graph
var Graph = function() {
  // collection to keep record of nodes
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new this.Node(node);
  this.nodes[newNode.value] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (node in this.nodes);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return toNode in this.nodes[fromNode]['edges'];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode]['edges'][toNode] = this.nodes[toNode];
  this.nodes[toNode]['edges'][fromNode] = this.nodes[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode]['edges'][toNode];
  delete this.nodes[toNode]['edges'][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

Graph.prototype.Node = function(value) {
  this.edgeCount = 0;
  this.wasVisited = false;
  this.value = value;
  this.edges = {};
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // addNode() is constant
 // contains() is constant
 // removeNode() is constant
 // hasEdge() is constant
 // addEdge() is constant
 // removeEdge() is constant
 // forEachNode() is linear


