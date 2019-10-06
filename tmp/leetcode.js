/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
  }
var addTwoNumbers = function(l1, l2) {
    let num1 = []
    let num2 = []
    
    let root = l1
    while (root) {
      num1.push(root.val)
      root = root.next
    }
    let firstInt = parseInt(num1.reverse().join(''));

    let root2 = l2
    while (root2) {
      num2.push(root2.val)
      root2 = root2.next
    }
    let secondInt = parseInt(num2.reverse().join(''));
    console.log(firstInt + secondInt)
    let res = firstInt + secondInt
    let resArr = '' + res
    resArr = resArr.split('').reverse()
    console.log(resArr)
    let resRoot = new ListNode(resArr[0])
    let current = resRoot
    for (let i = 1; i < resArr.length; i++) {
        if (resArr[i]) {
          let temp = new ListNode(resArr[i])
          while (current) {
            if (current.next === null) {
              current.next = temp
              break
            }
            current = current.next
          }
        }
    }
    console.log(resRoot)

};

let first = new ListNode(2)
let second = new ListNode(4)
let third = new ListNode(3)

let fourth = new ListNode(5)
let fifth = new ListNode(6)
let sixth = new ListNode(4)

first.next = second
second.next = third
fourth.next = fifth
fifth.next = sixth

addTwoNumbers(first, fourth)