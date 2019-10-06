let myarr = [1,2,3,4,5];

// method 1 for setTimeout: recursion

const myLoop = (i) => {
  setTimeout(() => {
    console.log(myarr[i])
    if (i < 10) {
      i++
      myLoop(i)
    }
  }, 1000)
}

// myLoop(0)

// method 2 for setTimeout: incrementing with for loop
// ES6 'let' keyword allows you to do this because it declares the value of i for each iteration, not for the entire loop.

// for (let i = 0; i < myarr.length; i++) {
//   setTimeout(() => {
//     console.log(myarr[i])
//   }, i * 1000)
// }


// method 3: async/await
// this method delays the execution of the next part of the loop until a promise resolves after the alotted time has passed

const main = async (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i)
    await new Promise(res => setTimeout(res, 1000))
  }
}

// main(myarr)

// method 4: setInterval/clearInterval

let i = 0
const printInterval = () => {
  console.log(myarr[i])
  if (i < myarr.length) {
    i++
  } else {
    clearInterval(myinterval)
  }
}
// let myinterval = setInterval(printInterval, 1000)
















let arr = [1,2,3,4,5]


const loopArr = (i) => {
  setTimeout(() => {
    if (i < arr.length) {
      console.log(arr[i])
      i++
      loopArr(i)
    }
  }, 1000)
}

loopArr(0)

// for ( let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i])
//   }, i * 1000)
// }