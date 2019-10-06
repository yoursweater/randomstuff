// Stacks are LIFO - last in, first out
// There are two types of stacks - those implemented with an array, and those implemented with a linked list.

class Stack {
    constructor() {
        this.items = []
    }

    push(val) {
        this.items.push(val)
    }

    pop() {
        this.items.pop()
    }

    peek() {
        console.log(this.items[this.items.length - 1])
    }

    describe() {
        this.items.forEach(val => console.log(val))
    }
}

const myStack = new Stack()

// myStack.push(3)
// myStack.push(4)
// myStack.push(5)
// myStack.peek()


// Linked List implementation

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class linkStack {
    constructor() {
        this.head = null;
    }

    push(val) {
        let node = new Node(val)
        node.next = this.head
        this.head = node
    }

    peek() {
        if (this.head === null) {
            console.log('empty.')
        } else {
            console.log(this.head.val)
        }
    }

    isEmpty() {
        if (this.head === null) {
            return true
        } else {
            return false
        }
    }

    describe() {
        if (this.head === null) {
            console.log('list is empty')
        } else if (this.head.next === null) {
            console.log(this.head.val)
        } else {
            let current = this.head 
            console.log(current.val)
            while (current.next) {
                current = current.next
                console.log(current.val)
            }
        }
    }
}

let stack = new linkStack()
stack.peek()
stack.push(3)
stack.push(4)
stack.push(5)
// stack.describe()
stack.peek()