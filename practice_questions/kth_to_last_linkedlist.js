const kth = (list, k) => {
    let current = list.head

    let nodes = []

    while (current) {
        nodes.push(current)
        current = current.next
    }
    let index = nodes.length - k
    return nodes.index
}