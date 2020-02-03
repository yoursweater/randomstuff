// let str = 'loooool'


// const palindromeTest = testString => {
// 	const length = testString.length
//   const half = Math.floor(length / 2)
  
// 	for (let i = 0; i < half; i++) {
//   	if (testString[i] !== testString[length - i - 1]) return false;
//   }
// 	console.log('true')
//   return true;
// }

// palindromeTest(str)

let arr = [1,2,3,4,5]

// const printWithDelay = array => {
//   let i = 0
// 	array.forEach((item) => setTimeout(() => {
//     i++
//   	console.log(item);
//   }), i * 1000);
// }

// printWithDelay(arr)



let i = 0
const printInterval = () => {
  console.log(arr[i])
  if (i < arr.length) {
    i++
  } else {
    clearInterval(myinterval)
  }
}
let myinterval = setInterval(printInterval, 1000)