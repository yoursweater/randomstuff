class PriorityQueue {
    constructor() {
      this.first = null;
    }
    
    insert(value, priority) {
      const newNode = new Node(value, priority);
      if (!this.first || priority > this.first.priority) {
        newNode.next = this.first;
        this.first = newNode;
      } else {
        let pointer = this.first;
        while (pointer.next && priority < pointer.next.priority) {
          pointer = pointer.next;
        }
        newNode.next = pointer.next;
        pointer.next = newNode;
      }
    }
    
    remove() {
      const first = this.first;
      this.first = this.first.next;
      return first;
    } 
}

class Node {
    constructor (val, priority) {
        this.val = val
        this.priority = priority
        this.next = null
    }
}  

let queue = new PriorityQueue

queue.insert(100, 8)
queue.insert(34, 12)
queue.insert(83, 20)
console.log(queue)
console.log(queue.first.next.next)