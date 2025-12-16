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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const myList = new LinkedList();

// console.log(myList);

myList.append("Anode");
myList.append("Bnode");
myList.append("Cnode");
myList.append("Dnode");
myList.prepend("Pnode");

console.log(myList);

console.log(myList.size());
console.log(myList.tail());
console.log(myList.pop());
console.log(myList.tail());
console.log(myList.size());
