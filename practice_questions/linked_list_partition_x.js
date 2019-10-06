class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
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

    partition(x) {
        if (this.root === null) {
            return;
        } else {
            let current = this.root
            let beforeList = new LinkedList()
            let afterList = new LinkedList()

            while (current) {
                if (current.val <= x) {
                    beforeList.add(current.val)
                } else {
                    afterList.add(current.val)
                }
                current = current.next
            }
            // console.log(beforeList)
            // console.log(afterList)

            let beforeCurrent = beforeList.root
            while (beforeCurrent.next) {
                beforeCurrent = beforeCurrent.next
            }
            beforeCurrent.next = afterList.root
            this.root = beforeList.root
            // console.log(this)
            let final = this.root
            while (final) {
                console.log(final.val)
                final = final.next
            }
        }
    }
}

let list = new LinkedList()
list.add(4)
list.add(2)
list.add(8)
list.add(9)
list.partition(5)


console.log(list)