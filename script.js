console.log("This is working");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let nextOne = this.head;
      while (nextOne.nextNode != null) {
        nextOne = nextOne.nextNode;
      }
      nextOne.nextNode = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.head != null) {
      let copyNode = this.head;
      this.head = newNode;
      this.head.nextNode = copyNode;
    } else {
      this.head = newNode;
    }
  }

  size() {
    let amount = 0;
    if (this.head != null) {
      amount++;
      let nextOne = this.head;
      while (nextOne.nextNode != null) {
        amount++;
        nextOne = nextOne.nextNode;
      }
    }
    return amount;
  }

  tail() {
    if (this.head != null) {
      let myNode = this.head;
      while (myNode.nextNode != null) {
        myNode = myNode.nextNode;
      }
      return myNode;
    } else return "No nodes in the list";
  }

  at(index) {
    if (this.head != null) {
      let currentIndex = 0;
      let currentNode = this.head;
      while (currentIndex != index && currentNode.nextNode != null) {
        currentIndex++;
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    } else {
      return "No node at this index";
    }
  }
  pop() {
    if (this.head != null) {
      let index = 0;
      let myNode = this.head;
      while (myNode.nextNode != null) {
        myNode = myNode.nextNode;
        index++;
      }
      let nodeBefore = this.at(index - 1);
      nodeBefore.nextNode = null;
    } else return "No nodes in the list";
  }

  contains(value) {
    if (this.head != null) {
      let nodeCompare = this.head;
      if (nodeCompare.value == value) {
        return true;
      } else {
        while (nodeCompare.nextNode != null) {
          nodeCompare = nodeCompare.nextNode;
          if (nodeCompare.value == value) {
            return true;
          }
        }
      }
      return false;
    }
  }

  find(value) {
    if (this.head != null) {
      let nodeCompare = this.head;
      let index = 0;
      if (nodeCompare.value == value) {
        return index;
      } else {
        while (nodeCompare.nextNode != null) {
          nodeCompare = nodeCompare.nextNode;
          index++;
          if (nodeCompare.value == value) {
            return index;
          }
        }
      }
      return null;
    }
  }

  toString() {
    let wholeString;
    let nodeString;
    let node;
    if (this.head != null) {
      node = this.head;
      nodeString = this.head.value.toString();
      wholeString = "( " + nodeString + " )";
      while (node.nextNode != null) {
        node = node.nextNode;
        nodeString = node.value.toString();
        wholeString = wholeString + " -> ( " + nodeString + " )";
      }
      wholeString = wholeString + " -> null";
    }
    return wholeString;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
