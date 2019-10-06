// Queues are FIFO - first in first out
// There are two types of queues, regular queues and priority queues

// class PriorityQueue {
//     constructor {
//       this.first = null;
//     }
    
//     insert(value, priority) {
//       const newNode = new Node(value, priority);
//       if (!this.first || priority > this.first.priority) {
//         newNode.next = this.first;
//         this.first = newNode;
//       } else {
//         let pointer = this.first;
//         while (pointer.next && priority < pointer.next.priority) {
//           pointer = pointer.next;
//         }
//         newNode.next = pointer.next;
//         pointer.next = newNode;
//       }
//     }
    
//   }