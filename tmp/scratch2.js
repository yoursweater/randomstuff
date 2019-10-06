class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class CustomLinkedList {
    constructor() {
        this.root = null
    }

    add(val) {
        let node = new Node(val)
        if (this.root === null) {
            this.root = node
        } else {
            let current = this.root
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }

    describe() {
        if (!this.root) {
            console.log('no list')
            return
        }
        let current = this.root
        console.log(current.val)
        while (current.next) {
            current = current.next
            console.log(current.val)
        }
    }

    popfront() {
        if (this.root.next) {
            let newroot = this.root.next
            this.root = newroot
        } else {
            this.root = null
        }
    }

    size() {
        let size = 0
        if (this.root) {
            let current = this.root
            size++
            while (current.next) {
                current = current.next
                size++
            }
            console.log(size)
        } else {
            return size
        }
    }

    value_at(idx) {
        let currentIndex = 0
        if (!this.root) {
            console.log('empty list')
            return null
        } else if (currentIndex === idx) {
            console.log(this.root.val)
            return this.root.val
        } else {
            let current = this.root
            while (current.next) {
                current = current.next
                currentIndex++
                if (idx === currentIndex) {
                    console.log(current.val)
                    return current.val
                }
            }
            console.log('not found')
        }
    }

    pushfront(val) {
        if (this.root === null) {
            let node = new Node(val)
            this.root = null
        } else {
            let node = new Node(val)
            node.next = this.root
            this.root = node
        }
    }

    erase(idx) {
        let currentIndex = 0
        if (this.root === null) {
            return
        } else if (currentIndex === idx) {
            let current = this.root
            if (current.next) {
                console.log('ding')
                this.root = current.next
                return
            }
            this.root = null
            return
        } else {
            let current = this.root
            while (current.next) {
                current = current.next
                currentIndex++
                if (currentIndex === idx) {
                    console.log('deleting')
                    current = null
                    return
                }
            }
            if (currentIndex === idx) {
                console.log('last element')
                current = null
                return
            }
        }
        console.log('index not present.')
    }

    insert(idx, val) {
        let currentIndex = 0
        if (!this.root) {
            let node = new Node(val)
            this.root = node
        } else {
            if (idx === currentIndex) {
                let node = new Node(val)
                node.next = this.root
                this.root = node
                console.log('root element')
                return
            }
            let prev = this.root
            let current = this.root
            while (current.next) {
                currentIndex++
                current = current.next
                if (currentIndex === idx) {
                    let node = new Node(val)
                    prev.next = node
                    node.next = current
                    console.log('match')
                    return
                }
                prev = current
            }
        }
    }
}    

const mylist = new CustomLinkedList()
mylist.add(8)
mylist.add(4)
mylist.add(3)
// mylist.add(6)
// mylist.add(10)
// mylist.pushfront(1)
// mylist.pushfront(11)
// mylist.value_at(10)
// mylist.erase(4)
mylist.insert(2, 5)
mylist.describe()
// mylist.size()
// mylist.pop()
// mylist.describe()