
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}


const fromLast = (list) => {
  let fast = list
  let slow = list
  let i = 0

  while (i < 1) {
    fast = fast.next
    i++
  }
  console.log(slow.val)
  console.log(fast.val)

  while (true) {
    console.log(fast.val)
    if (fast.next) {
      fast = fast.next
      slow = slow.next
    } else {
      console.log('found 1 from last! ', slow.val)
      break
    }
  }
}

let n1 = new Node(5)
n1.next = new Node(3)
n1.next.next = new Node(2)
n1.next.next.next = new Node (4)

fromLast(n1) 
