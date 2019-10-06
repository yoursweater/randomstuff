
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 
/**
 * @param {ListNode} head
 * @return {number[]}
 */





const constructLinkedList = (arr) => {
  let root = new ListNode(arr[0])
  current = root

  for (let i = 1; i < arr.length; i++) {
    let temp = new ListNode(arr[i])
    current.next = temp
    current = temp
  }
  // console.log(root)
  return root
}

const traverseList = (root) => {
  let current = root
  while (current) {
    // console.log(current.val)
    current = current.next
  }
}

let mylist = constructLinkedList([1,7,5,1,9,2,5,1])
let mylist2 = constructLinkedList([2,1,5])

traverseList(mylist)

var nextLargerNodes = function(head) {
  let current = head
  let vals = []
  while (current) {
    vals.push(current.val)
    current = current.next
  }
  // console.log(vals)
  let result = []
  for (let i = 0; i < vals.length; i++) {
    let temp = vals[i]
    let nextFlag = false
    for (let j = i + 1; j <= vals.length; j++) {
      if (vals[j]) {
        if (vals[j] > temp && nextFlag === false) {
          result[i] = vals[j]
          nextFlag = true
        }
      }
      if (nextFlag === false) {
        result[i] = 0
      }
    }
  }
  console.log(result)
  return result
};

nextLargerNodes(mylist)

// THIS IS A MUCH BETTER SOLUTION
var nextLargerNodes2 = function(head) {
  let result = [];
  let current = head;
  while(current !== null){
      let point = current.next;
      while(point !== null){
          if(current.val < point.val){
              result.push(point.val);
              break;
          }else{
              point = point.next;
          }
      }
      if(point === null){
          result.push(0);
      }
      
      current = current.next;
  }
  
  return result;
};

const getRandom = (head) => {
  // let num = Math.floor(Math.random() * 3)
  let current = head
  let len = 0

  while(current) {
    len++
    current = current.next
  }
  console.log(len)

  let num = Math.floor((Math.random() * len))
  console.log(num)
  let counter = 0
  let newcurrent = head
  while (counter < num) {
    newcurrent = newcurrent.next
    counter++
  }
  console.log(newcurrent.val)
  return newcurrent.val

}

getRandom(mylist)