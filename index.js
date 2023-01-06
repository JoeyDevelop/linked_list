class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Append node to end of list
  append(value) {
    let node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head
      while(current.next) {
        console.log(current);
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Append node to start of list
  prepend(value) {
    this.head = new Node(value, this.head)
    this.size++;
  }

  // Returns total number of nodes in linked list
  size() {
    return this.size;
  }

  // Returns first node in list
  head() {
    return this.head;
  }

  // Returns last node in list
  tail() {
    let current = this.head;
    while(current !== null ) {
      if (current.next === null) {
        return current
      } else {
        current = current.next;
      }
    }
  }

  // Returns node at given index
  at(index) {
    let current = this.head
    if (index < 0 || index > this.size) {
      return
    } else {
      for(let i = 0; i < index; i++) {
        current = current.next;
      }
    }
    return current;
  }

  // Removes last element from list
  pop() {
    let current = this.head;
    while(current.next !== null ) {
      if (current.next.next === null) {
        current.next = null
        this.tail = current;
        this.size -= 1
        return current
      } else {
        current = current.next;
      }
    }
  }

  // Returns true if value is found in list
  contains(value) {
    let current = this.head;
    for(let i = 0; i < this.size; i++) {
      if(current.value === value) {
        return true
      } else if (current !== null) {
        current = current.next
      }
    }
    return false;
  }
  // Returns index of node 
  find(value) {
    let current = this.head;
    for(let i = 0; i < this.size; i++) {
      if(current.value === value) {
        return i;
      } else if (current !== null) {
        current = current.next
      }
    }
    return "Value not found"
  }

  // Logs linked list as strings
  toString() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Insert node at given index
  insertAt(value, index) {
    let node = new Node(value);
    if (index < 0 || index > this.size) {
      return "Chosen index is invalid"
    } else if (index === 0) {
      this.prepend(value)
    } else if (index === this.size + 1) {
      this.append(value)
    } else {
      let current, previous;

      current = this.head;
      let count = 0;

      while(count < index) {
        previous = current;
        count++;
        current = current.next;
      }

      node.next = current;
      previous.next = node;

      this.size++;
    }
  }

  // Delete node at given index
  deleteAt(index) {
    if(index > 0 && index > this.size) {
      return
    }

    let current = this.head;
    let previous;
    let count = 0;

    if(index === 0) {
      this.head = current.next
    } else {
      while(count < index) {
        count++;
        previous = current; 
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }
}

const list = new LinkedList();

// Add nodes to end of list
list.append(200);
list.append(300);

// Add nodes to start of list
list.prepend(100);
list.prepend(50);

// log list, remove last element, log again
console.log(list.toString())
console.log(list.pop())
console.log(list.toString())

// log list size
console.log("list size: " + list.size)

// log first and last elements
console.log("First element: " + list.head.value, "Last element: " + list.tail.value)

// log element at nth position
console.log("First position: " + list.at(0).value,  "Third position: " + list.at(2).value)

// return index of element if value is found
console.log("Index of: " + list.find(10));
console.log("Index of: " + list.find(200))

// return true if value is in list, otherwise return false
console.log("List contains 50: " + list.contains(50));
console.log("List contains 250: " + list.contains(250));

// add value at given index
console.log(list.insertAt(500, 3), list.insertAt(25, 0));
console.log(list.toString());