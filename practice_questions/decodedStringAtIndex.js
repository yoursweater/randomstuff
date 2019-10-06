// 880. Decoded String at Index

// Example 1:

// Input: S = "leet2code3", K = 10
// Output: "o"
// Explanation: 
// The decoded string is "leetleetcodeleetleetcodeleetleetcode".
// The 10th letter in the string is "o".
// Example 2:

// Input: S = "ha22", K = 5
// Output: "h"
// Explanation: 
// The decoded string is "hahahaha".  The 5th letter is "h".
// Example 3:

// Input: S = "a2345678999999999999999", K = 1
// Output: "a"
// Explanation: 
// The decoded string is "a" repeated 8301530446056247680 times.  The 1st letter is "a".

const decode = (S, K) => {
 let str = ''
 let arr = S.split('')



 for (let i = 0; i < arr.length; i++) {
  //  console.log(typeof arr[i])
   if (str.length > K) {
    // console.log(str.charAt(K - 1))
    console.log('yo')
    console.log(str.charAt(K - 1))
    return str.charAt(K - 1)
   }
   if (Number(arr[i])) {
    //  console.log(Number(arr[i]))
     let newstr = str.slice()
     for (let j = 0; j < Number(arr[i]) - 1; j++) {
      str += newstr
     }
   } else {
     str += arr[i]
   }
 }
//  console.log(str)
//  console.log(str.charAt(K - 1))
 return str.charAt(K - 1)
}

// decode('leet2code3', 10)
decode('a98283728377', 10)