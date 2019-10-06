

const removeDuplicates = (list) => {
    if (list.head = null) {
        return list
    }

    let values = []
    let currentNode = list.head
    let previousNode

    while (currentNode) {
        if (values.indexOf(currentNode.val) == -1){
            values.push(currentNode.val)
            previousNode = currentNode
            currentNode = currentNode.next
        } else {
            currentNode = currentNode.next
        }

    }

}

//needs work